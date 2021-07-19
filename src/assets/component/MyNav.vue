<template>
  <ul class="menu">
    <li v-for="dir in filePaths" :key="dir.name">
      <p class="dir-name">{{dir.name}}</p>
      <ul>
        <li class="file-name" :class="{ active: file==fileChoosed }"
          v-for="file in dir.children" :key="file.name" @click="menuSelected(file)">
          {{file.name}}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import {filePaths} from '../def-usage'
export default {
  data(){
    return {
      filePaths,
      fileChoosed: false
    }
  },
  methods:{
    menuSelected(file){
      this.fileChoosed = file;
      this.goto(file.path);
    },
    goto(path){
      if(location.pathname !== path)
        this.$router.push(path);
    }
  }
}
</script>

<style scoped>
  ul{ margin: 0; padding: 0; }
  .menu{
    margin: 0;
    padding: 0;
  }
  .menu li{
    list-style: none;
  }

  .dir-name{
    color: #999;
    font-size: 12px;
  }
  .file-name{
    margin: 5px 0;
    padding: 5px 10px;
  }
  .file-name:hover{
    color: #42b983;
    cursor: pointer;
  }
  .file-name.active{
    color: #42b983;
   font-weight: bolder;
  }
</style>