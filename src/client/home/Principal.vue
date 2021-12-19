<template>

  <Header/>

  <div class="container row">

    <div class="list-container">
      <CharacterList></CharacterList>
      <LoadingCell v-if="hasNextPage && !errorPeople"></LoadingCell>
      <NoticeCell v-else-if="errorPeople"></NoticeCell>
    </div>

    <div class="data-container">
      <CharacterInfo/> 
    </div>

  </div>
  
</template>

<script>

  import {watch} from 'vue'
  import { useStore, mapState } from "vuex"
  import Header from '../shared/Header.vue'
  import LoadingCell from '../shared/LoadingCell.vue'
  import NoticeCell from '../shared/NoticeCell.vue'
  import CharacterList from '../home/list/CharacterList.vue'
  import CharacterInfo from '../home/info/CharacterInfo.vue'
  import getFivePeople from "../../functions/getFivePeople.js";

export default ({

  name: 'Principal',

  components: {
    Header,
    CharacterList,
    CharacterInfo,
    LoadingCell,
    NoticeCell
  },

  computed: {
    ...mapState({
      hasNextPage: "hasNextPage",
      errorPeople: (state) => {
        return state.errorLoadingPeople === null ? false : true;
      }, 
    })
  },

  setup() {

    const store = useStore();
    let result = getFivePeople();

    watch(() => {

      if (result.loading.value) return;

      if (result.error.value) {

        store.dispatch("setErrorLoadingPeople", result.error.value);
        store.dispatch("dropAllPeople");
        return;

      }

      store.dispatch("fetchPeople", result);

      if (store.state.cursor) {

        result = getFivePeople(store.state.cursor);

        if (!result.loading.value) {

          store.dispatch("fetchPeople", result);

        }
      }
    });
  },
})

</script>

<style scoped>

.list-container,.data-container{
  width: fit-content;
}
.data-container{
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>





