<script setup lang="ts">
import { ref } from "vue"
import axios from 'axios';
import { Interface } from "readline";
import { userInfo } from "os";
import useLocalStorage from "./services/useLocalStorage";
const publicKey = useLocalStorage("userTolken",  "");


const baseUrl = "http://localhost:8000";

interface userSignin{
  email: String,
  password: String,
} 

const userTolken = ref(publicKey.value)
const user = ref<userSignin | null>(null);
const email = ref("");
const password = ref("")

async function HandleSignIn(data: userSignin) {
  try {
    const reponse = await axios.post(`${baseUrl}/user/signin`, {
      data: data
    })   
    console.log(reponse.data);

  } catch (error) {
    console.error(error);
  }
}

async function HandleLogin(data: userSignin) {
  try{
    const reponse = await axios.post(`${baseUrl}/user/login`, {
      data: data
    });
    publicKey.value = 

    console.log(reponse.data);
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <div>
    <h1>Gameart Database</h1>
  </div>
  
  <p v-if="user != null">{{user.email}}</p>

  <input type="email" id="" v-model="email">
  <input type="text" v-model="password">
  <button @click="() => HandleLogin({email, password})">Login</button>
  <button @click="() => HandleSignIn({email, password})">SignIn</button>
</template>

<style scoped>

</style>
