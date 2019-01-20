<template>
  <div>
    <h1 class="header">Status page for {{ cluster }}</h1>
    <h2 class="env">This is a {{ env }} cluster</h2>
    <div id="jobs" v-for="(job, key) in jobs" :key="key">
      <table class="statusTable">
        <tr class="statusTableHeader" >
          <th colspan="3">{{ key }}</th>
        </tr>
        <tr class="statusTableSubHeader">
          <th>Check</th>
          <th>Results</th>
          <th>Last check</th>
        </tr>
        <tr v-for="(chk, k) in job" :key="k">
          <td class="checkHeader">{{ k }}</td>
          <td>
            <span  :title="item.name + ' - ' + item.start_time" id="components" v-for="item in chk" :key="item.id">
                <img :class=item.status width="10" height="10" h-space="5" v-bind:src="'/static/' + item.status + '.png'" >
            </span>
          </td>
          <td class="detailsColumHeader">
            {{ chk[Object.keys(chk).length - 1].start_time }} - {{ chk[Object.keys(chk).length - 1].status }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      jobs: {},
      cluster: 'alpha',
      env: 'dev'
    }
  },
  methods: {
    getJobs () {
      const path = `http://localhost:5000/api/jobs`
      axios.get(path)
        .then(response => {
          console.log(response.data.jobs)
          this.jobs = response.data.jobs
        })
        .catch(error => {
          console.log(error)
        })
    },
    getMetadata () {
      const path = `http://localhost:5000/api/metadata`
      axios.get(path)
        .then(response => {
          console.log(response.data.meta)
          this.cluster = response.data.meta.cluster
          this.env = response.data.meta.env
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getMetadata()
    this.getJobs()
  }
}
</script>
