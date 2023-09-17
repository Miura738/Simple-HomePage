<script setup lang="ts">
import { useRoute } from 'vue-router';
import {ref} from "vue";

const route = useRoute();
const path = ref(route.params.path);


import axios from "axios";

const LastSec = ref(5);
const StepNub = ref(0);
const Uri = ref("/");

setTimeout(function () {StepNub.value=0;setInterval(LookADTIME,1000)},100)

const LookADTIME = () => {
  if (LookADTrue) {
    LastSec.value --;
  }
  if (LastSec.value === 0) {
  StepNub.value=Math.floor(Math.random() * 3) + 1;
    JumpREDUri();
  }
}

let LookADTrue = false;
const LookADPage = () => {
  let pageVisibility = document.visibilityState
	// 页面变为不可见时触发
	if (pageVisibility === 'hidden') {
    LookADTrue = false;
	}
	// 页面变为可见时触发
	if (pageVisibility === 'visible') {
    LookADTrue = true;
	}
}
document.addEventListener('visibilitychange', LookADPage)
LookADPage()

const JumpREDUri = () => {
  const headers = {
  'Ao-Content-Type': 'application/json',
};
  axios.get(
      `https://mes.rip/ads/${path.value}`, { headers }
  )
  .then(response => {
    Uri.value = response.data["data"];
    location.replace(Uri.value)
  })
}

</script>

<template>
<h1 v-if="StepNub == 0">Wait {{ LastSec }} SECOND</h1>
<h1 v-if="StepNub == 1">少女祈祷中</h1>
<h1 v-if="StepNub == 2">In Warp 9.9</h1>
<h1 v-if="StepNub == 3">Made in Heaven</h1>

<p>Please wait 5 seconds for the redirection time</p>
  <p>or, <a :href="Uri" class="hover:text-[#fbc7b5] cursor-pointer">redirect again</a></p>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-bottom: 0.8em;
}

p {
  cursor: default;
  margin: 0.2em 0;
  color: #b8b8b8;
}
</style>