FROM ipedrazas/flask-base

COPY . /home/flask/app
# COPY kubeconfig /home/kstatus/.kube/config
	
RUN pip install -r requirements.txt;


# RUN chown -R flask:flask ./



ENV FLASK_APP kstatus.py
