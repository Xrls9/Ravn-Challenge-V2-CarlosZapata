<template>

  <div class="row cell">
    <h2 class="m-0 low"> {{ property }} </h2>
    <h2 class="m-0 default"> {{ capitalize }} </h2>
  </div>

</template>

<script>

export default {
  name: 'DataCell',
  props:{
    property:{
      default:"Property default",
      type: String
    },
    value:{
      default:"",
      type: String
    }
  },
  computed:{

    capitalize(){
      return this.value.substr(0,1).toUpperCase() + this.value.substr(1);
    }

  }
}

</script>

<style scoped>
  
  .row{
    box-shadow: 0px 1px 0px 0px rgb(0 0 0 / 9%);
    gap: 42vw;
    justify-content: space-between;
    align-items: center;
  }

</style>

