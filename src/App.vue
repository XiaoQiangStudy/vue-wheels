<template>
  <div id="app">
    <nav class="beauty-scroll">
      <MyNav></MyNav>
    </nav>
    <main class="beauty-scroll">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MyNav from './assets/component/MyNav'
export default {
  name: 'App',
  components:{
    MyNav
  }
}
</script>
  
<style>
  html,body{
    margin: 0;
  }
  #app{
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 200px 1fr;
  }
  nav{
    padding: 10px;
    border-right: solid 1px #ddd;
    overflow-y: auto;
  }
  main{
    overflow: auto;
    padding: 10px;
  }
  .beauty-scroll::-webkit-scrollbar {
    width: 8px;
    background: rgba(66, 185, 131, .3)
  }
  /* .beauty-scroll::-webkit-scrollbar:hover{
  } */
  .beauty-scroll::-webkit-scrollbar-thumb {
    background: #42b983;
    border-radius: 3px;
  }
</style>
