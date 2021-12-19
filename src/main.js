import { createApp, h } from 'vue';
import {ApolloClient, InMemoryCache} from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import store from './store'
import App from './App.vue';

//instance a client of ApolloClient
export const defaultClient = new ApolloClient({

  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()

});

//switch client 
const app = createApp({

  setup(){
    provideApolloClient(defaultClient);
  },

  render(){
    return h(App)
  }

});


app.use(store);
app.mount('#app');
