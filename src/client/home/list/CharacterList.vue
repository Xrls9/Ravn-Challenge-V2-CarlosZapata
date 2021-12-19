<template>

  <div class="character-list">

    <div v-if="people.length !== 0">
      <PersonCell
        v-for = "person in people"
        :isSelected = "person.node.id === selectedId"
        :key =  "person.node.id"
        :name =  "person.node.name"
        :specie =  "person.node.species"
        :homeworld =  "person.node.homeworld"
        v-on:click = "selectPerson(person.node.id)"
      ></PersonCell>
    </div>
  </div>

</template>

<script>

import {mapState } from 'vuex';
import PersonCell from './PersonCell.vue';

export default {
  name: 'CharacterList',
  components: {
    PersonCell,
  },
  computed:{
    ...mapState({
      people: "people",
      selectedId: "selectedId",
    }),
  },
  methods:{
    selectPerson: function(id){
      this.$store.dispatch("selectId", id);
    }
  },
}

</script>

<style>

  .notice{
    display: flex;
    justify-content: center;
  }

  .person{
    position: relative;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.09);
  }

  .loading{
    display: flex;
    justify-content: center;
  }

</style>

<style scoped>

.character-list{

  display: flex;
  flex-direction: column;
  margin: 0px;
  width: 350px;
  height: 100%;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
}

</style>

