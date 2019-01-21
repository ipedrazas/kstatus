from flask import Flask, jsonify, request, Response, render_template
from kubernetes import client, config, watch
from flask_cors import CORS

import os
import json

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_config():
    if 'KUBERNETES_PORT' in os.environ:
        config.load_incluster_config()
    else:
        config.load_kube_config()
    return config

@app.route('/healthz')
def healthz():
    return "healthy"


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


@app.route('/api/metadata')
def metadata():
    meta = {}
    meta['cluster'] = os.environ['CLUSTER']
    meta['env'] = os.environ['ENV']
    return jsonify(meta=meta)

@app.route('/api/jobs')
def jobs():
    get_config()
    v1_job = client.BatchV1Api()

    ret = v1_job.list_namespaced_job("status")
    jobs = {}

    for i in ret.items:
        labels = i.metadata.labels
        if 'group' in labels.keys():
            group = labels['group']
            if group not in jobs.keys():
                jobs[group] = []
            res = {}
            res['succeded'] = i.status.succeeded
            res['failed'] = i.status.failed
            res['name'] = i.metadata.name
            res['start_time'] = i.status.start_time
            res['id'] = i.metadata.uid
            res['group'] = labels['group']
            if 'run' in labels:
                res['run'] = labels['run']

            if i.status.succeeded: 
                res['status'] = 'succeded'
            if i.status.failed: 
                res['status'] = 'failed'
            
            jobs[group].append(res)
    for key in jobs.keys():
        jobs[key].sort(key=lambda x: x['start_time'], reverse=True)
        apps = sort_jobs(jobs[key])
        jobs[key] = apps
    return jsonify(jobs=jobs)


def sort_jobs(jobs):
    j = {}
    keys = extract_keys(jobs)

    for k in keys:
        j[k] = split_list_by_key(jobs, "run", k)

    return j


def extract_keys(apps):
    checks = []
    for app in apps:
        if app['run'] not in checks:
            checks.append(app['run'])

    return checks

def split_list_by_key(apps, key_name, key):
    ret = []
    for app in apps:
        if app[key_name] == key:
            ret.append(app)
    
    del ret[20:]
    ret.reverse()
    return ret