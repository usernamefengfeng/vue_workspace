<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Work/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Work from './components/Work'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Work
  }
}
</script>

<style>
  img{
    width: 200px;
    height: 200px;
  }
</style>
