<template>

  <Header/>

  <div class="container">

    <div class="container__main">
      <CharacterList></CharacterList>
      <LoadingCell v-if="hasNextPage && !errorPeople"></LoadingCell>
      <NoticeCell v-else-if="errorPeople"></NoticeCell>
    </div>

    <div class="container__info">
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

      if (result.error.value != null) {

        store.dispatch("setErrorLoadingPeople", result.error.value);
        store.dispatch("dropAllPeople");
        return;

      }

      store.dispatch("addPeople", result);

      if (store.state.lastCursor == null) {

        result = getFivePeople(store.state.lastCursor);

        if (!result.loading.value) {

          store.dispatch("addPeople", result);

        }
      }
    });
  },
})

</script>

<style scoped>
</style>





