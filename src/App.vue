<template>

  <Principal></Principal>

</template>

<script>

import Principal from "./client/home/Principal.vue"

export default {
  name: 'App',

  components:{
    Principal
  }
}

</script>

<!--general styles-->
<style>
  #app {

    --default-color: rgba(0,0,0,1);
    --low-emphasis-color: rgba(0,0,0,0.3);
    --high-emphasis-color: rgba(235,87,87,1);
    --light-color: rgba(255,255,255,1);

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    font-family: SF Pro Display, Helvetica, Arial, sans-serif;
  }

  .tittle{

    position: relative;
    font-size:17px;
    padding-left: 33px;
    color: var(--light-color);
    margin: 0px;

  }

  .col{
    display: flex;
    flex-direction: column;
  }
  .row{
    display: flex;
    flex-direction: row;
  }

  .high{
    color: var(--high-emphasis-color);
  }

  .low{
    color: var(--low-emphasis-color);
  }

  h2{
    font-size: 17px;
  }

  .cell{
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .m-0{
    margin: 0px;
  }

  .defatult{
    color: var(--default-color);
  }

</style>

<style scoped>

.container{

  width: 100%;
  height: calc(100% - 52px);
  display: flex;
  position: relative;

}

</style>
