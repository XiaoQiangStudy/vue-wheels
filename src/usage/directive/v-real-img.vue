<template>
  <div>
      <h1>usage: directive/v-real-img</h1><hr>
      <div class="bg" v-real-img="require('../../assets/images/bg.jpg')">
      </div>
      <img src="../../assets/images/1.5m-mini.jpg" alt="" v-real-img="require('../../assets/images/1.5m.jpg')">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bg{
        background: url('../../assets/images/bg-mini.jpg') no-repeat center/cover;
        height: 500px;
        color: #fff;
    }
    img{
        width: 100%;
    }
</style>