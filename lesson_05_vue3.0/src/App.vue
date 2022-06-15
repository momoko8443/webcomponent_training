<template>
  <div>
    <hello-vue></hello-vue>
    <hr>
    <wc-say-hello :username="username"></wc-say-hello>
    <hr>
    <wc-user-card :info='JSON.stringify(user)' @myevent="userCardClickHandler"></wc-user-card> 
    </div>
</template>

<script>
import HelloVue from './components/hello.vue';
import SayHello from './webcomponents/sayHello.js';
import UserCard from './webcomponents/userCard.js';
export default {
  name: 'App',
  components: {
    "hello-vue":HelloVue,
    "wc-say-hello":SayHello,
    "wc-user-card":UserCard,
  },
  data(){
    return {
      username: "Jake",
      user:{
        name:"Jake",
        age: 18
      },
    }
  },
  methods: {
    userCardClickHandler(event){
      alert(event.detail.message);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
