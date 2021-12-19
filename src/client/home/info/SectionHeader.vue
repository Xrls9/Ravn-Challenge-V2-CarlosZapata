<template>

  <div class="section-header cell">
    <h2 class="default m-0">{{ tittle }}</h2>

  </div>

</template>

<script>

export default {
  name: 'PersonCell',
  props:{
    tittle:{
      default:"Section Header",
      type: String
    }
  }
};

</script>

<style scoped>

  .section-header{
    padding-top: 32px;
    padding-bottom: 8px;
  }

</style>

