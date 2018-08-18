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
    body {
        background: url(/static/img/brain-bg.a46fac2.jpg);
        background-size: cover;
    }
    .welcome .card{
        border: 3px solid #124770;
        border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
        -webkit-box-shadow: 0 0 10px 10px #0068b9;
        box-shadow: 0 0 10px 10px #0068b9;
    }
</style>
