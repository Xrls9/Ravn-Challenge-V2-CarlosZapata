<template>

  <div class="person cell row"
       :class="{ 'person-selected':isSelected }" >
    <div class="col">
      <h2 class="character-name">{{ name }}</h2>
      <p class="character-origin">
        {{specieName}} from {{homeworldName}}
      </p>
    </div>
    <span class="rigth-angle">&#62;</span>
  
  </div>

</template>

<script>

export default {
  name: 'PersonCell',
  props:{
    name:{
      defaul:"Luke Skywalker",
      type: String
    },
    specie:{
      defaul:"Human",
      type: Object
    },
    homeworld:{
      defaul:"Tatooine",
      type: Object
    },
    isSelected:{
      type:Boolean,
      defaul: false,
    }
  },
  computed:{
    specieName() {
      //if null return Human, else, return specie.name
      return this.specie !== null ? this.specie.name : "Human";
    },
    homeworldName() {
      return this.homeworld.name;
    }
  }
}

</script>

<style scoped>


.character-name{
  font-size: 17px;
  color: var(--default-color);
  margin: 0px;
  width: fit-content;
}

.character-origin{
  font-size: 14px;
  color: var(--low-emphasis-color);
  margin: 0px;
  width: fit-content;
}

.col{
  width: 307px;
}

.person:hover{
  background-color: rgba(0,0,0,0.05);
}

.person-selected{
  background-color: rgba(0,0,0,0.1);
}

</style>

