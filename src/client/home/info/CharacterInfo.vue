<template>

  <div class="center">
    <div class="character-info">

      <SectionHeader tittle="General Information"></SectionHeader>
      <DataCell property="Eye Color" value="person.eyeColor"></DataCell>
      <DataCell property="Hair Color" value="person.hairColor"></DataCell>
      <DataCell property="Skin Color" value="person.skinColor"></DataCell>
      <DataCell property="Birth Year" value="person.birthYear"></DataCell>

      <SectionHeader tittle="Vehicles"></SectionHeader>

      <div v-if="person.vehicleConnection.vehicles.length">
        <DataCell v-for= "(vehicle,index) in person.vehicleConection.vehicles"
        :key="index"
        property="vehicle.name"></DataCell>
      </div>

      <div v-else>
        <DataCell property="No data to display"></DataCell>
      </div>

      <div v-if="errorLoadingPerson">
        <NoticeCell></NoticeCell>
      </div>
      

    </div>
  </div>

</template>

<script>


import { useStore, mapState } from 'vuex';
import { watch } from 'vue';

import SectionHeader from './SectionHeader.vue';
import DataCell from '../info/DataCell.vue';
import NoticeCell from '../../shared/NoticeCell.vue';

import getCharacterData from '../../../functions/getCharacterData.js'

export default {
  name: 'CharacterInfo',
  components: {
    SectionHeader,
    DataCell,
    NoticeCell
  },
  computed:{
    ...mapState({

      person: "selectedPerson",
      loadingPerson: "loadingPerson",
      errorLoadingPerson: (state)=>{
        return state.errorLoadingPerson === null ?false :true;
      }
    })
  },
  setup(){
    const store = useStore();

    store.subscribe((mutation,state)=>{

      if(mutation.type === "SET_SELECTED_ID"){
        if(state.selectedId === "") return;

        store.dispatch("setLoadingPerson", true);
        store.dispatch("resetPerson");

        const result = getCharacterData(state.selectedId);

        watch(()=>{
          if(result.loading.value) return; 
          store.dispatch("setPerson", result);
        });
      }
    });
  },
}

</script>

<style scoped >

.center{
  display: flex;
  width: 100%;
  justify-content: center;
}

.character-info{
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 100%;
}

</style>

