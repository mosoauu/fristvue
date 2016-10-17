<template>

  <div class="ui stackable menu">
  <div class="ui container">
  <div class="item">
    <img src="http://semantic-ui.com/images/logo.png">
  </div>
  <router-link class="item" to="/">Home</router-link>
  <router-link class="item" to="/about">About</router-link>
  <a class="item">Sign-in</a>
   <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  //import VLink from '../components/VLink.vue'
  export default {
   
  }
</script>

