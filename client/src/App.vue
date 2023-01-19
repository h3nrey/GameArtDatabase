<script setup lang="ts">
import { ref } from "vue"
import { GoogleAuthProvider, signInWithPopup, UserCredential} from "firebase/auth"
import {auth} from "./services/firebase"

const user = ref<UserCredential | null>(null);

function HandleGoogleSignIn() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    user.value = result;
    console.log(result);
  })
  .catch((error) => { 
    console.error(error);
  })
}

</script>

<template>
  <div>
    <h1>Gameart Database</h1>
  </div>
  
  <p v-if="user != null">{{user?.user.uid }}</p>

  <button @click="HandleGoogleSignIn">SignIn</button>
</template>

<style scoped>

</style>
