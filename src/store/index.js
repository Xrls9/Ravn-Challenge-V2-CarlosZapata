import { createStore } from "vuex";

export default createStore({

    state: {
        people: [],
        cursor: "",
        hasNextPage: true,
        selectedId: "",
        selectedPerson: null,
        loadingPerson: false,
        errorLoadingPeople: null,
        errorLoadingPerson: null
    },
    mutations: {

        FETCH_PEOPLE(state, people) {
            state.people.push(...people)
        },
        SET_LAST_CURSOR(state, value) {
            state.cursor = value
        },
        SET_HAS_NEXT_PAGE(state, value) {
            state.hasNextPage = value
        },
        SET_SELECTED_ID(state, value) {
            state.selectedId = value
        },
        SET_SELECTED_PERSON(state, value) {
            state.selectedPerson = value
        },
        SET_ERROR_LOADING_PEOPLE(state, value) {
            state.errorLoadingPeople = value;
        },
        SET_ERROR_LOADING_PERSON(state, value) {
            state.errorLoadingPerson = value;
        },
        CLEAR_LIST(state) {
            state.people = []
        },
        SET_LOADING_PERSON(state, value) {
            state.loadingPerson = value;
        }
    },

    actions: {

        fetchPeople({ commit }, result) {

            if (result.hasNextPage.value) {

                commit("FETCH_PEOPLE", result.dataPeople.value)

                const len = result.dataPeople.value.length

                const lastCursor = result.dataPeople.value[len - 1].cursor

                commit("SET_LAST_CURSOR", lastCursor)
            } else {

                commit("SET_HAS_NEXT_PAGE", false)
            }
        },

        setHasNextPage({ commit }, value) {
            commit("SET_HAS_NEXT_PAGE", value)
        },

        selectId({ commit }, id) {
            commit("SET_SELECTED_ID", id)
        },
      
        setPerson({ commit }, result) {
            
            const error = result.error.value
            if (error !== null) {
                commit("SET_ERROR_LOADING_PERSON", result.error.value)
            } else {
                commit("SET_SELECTED_PERSON", result.person)
            }
            commit("SET_LOADING_PERSON", false)
        },
      
        setErrorLoadingPeople({ commit }, value) {
            commit("SET_ERROR_LOADING_PEOPLE", value)
        },

        dropAllPeople({ commit }) {
            commit("CLEAR_LIST")
            commit("SET_SELECTED_PERSON", null)
            commit("SET_SELECTED_ID", "")
            commit("SET_LAST_CURSOR", "")
        },

        setLoadingPerson({ commit }, value) {
            commit("SET_LOADING_PERSON", value)
        },

        resetPerson({ commit }) {
            commit("SET_SELECTED_PERSON", null)
        }
    },
})
