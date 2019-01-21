<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#checks{
  margin-bottom: 15px;
}

.succeded{
  margin-right: 10px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.failed{
  margin-right: 10px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.checkTitle{
  font-size: larger;
  font-weight: bolder;
  padding-right: 25px;
}

.jobsTitle{
  font-size: x-large;
  font-weight: bolder;
}

.env{
  font-size: xx-large;
  font-weight: bolder;
}

.statusTable{
  width: 90%;
  margin-bottom: 45px;
  margin-left: 100px;
  border-collapse: collapse;
  border-spacing: 0;
}
table, th, td{
  border: solid 1px black;
}
.statusTableHeader{
  background-color: #546194;
  color: white;
  font-size: xx-large;
}
.statusTableSubHeader{
  background-color:#5f79a7;
  color: white;
  font-size: x-large;
}
.checkHeader{
  background-color:#d6deea;;
  color: #334461;
  font-size: x-large;
  width: 350px;
}
.detailsColumHeader{
  width: 350px;
}
.header{
  font-size: 3em;
}
.details{
  font-size: large
}
td{
  text-align: left;
  padding-left: 15px;
}
</style>
