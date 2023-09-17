<script setup lang="ts">
import BiliComp from "@/components/window/BiliComp.vue";

import {defineProps,ref} from 'vue';
import axios from "axios";

// 使用 defineProps 定义接收的 props
const props = defineProps({
  bvid: String,
});

const targetBVid = props.bvid;

const ApiData = ref({
  "data": {
    "pic": "",
    "title": "",
    "desc": "",
    "bvid": "",
    "tname": ""
  }
});

axios.get(`https://api.miochyan.net/project/request?uri=https://api.bilibili.com/x/web-interface/view?bvid=${targetBVid}`)
    .then(response => {
      ApiData.value = response.data;
    })

</script>

<template>
<div :style="`background-image: url(https://api.miochyan.net/project/request?uri=${ApiData.data.pic})`"
      class="relative bg-center bg-cover bg-no-repeat text-center w-full h-32 group">

    <div class="h-full w-full px-3 py-2 flex flex-col justify-between items-start overflow-hidden">
      <div class="overflow-hidden w-full">
        <div class="text-start bg-black cursor-default w-full bg-opacity-50 p-1 text-md overflow-ellipsis whitespace-nowrap truncate">
        {{ApiData.data.title}}
        </div>
        <div class="bg-black cursor-default w-full bg-opacity-30 p-1 text-sm text-left mt-1 h-12 overflow-x-hidden overflow-y-auto">
          {{ApiData.data.desc}}
        </div>

      </div>

      <div class="flex">
        <div class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1"><svg class="w-4 h-4 fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="4027"></path></svg></div>
<!--        <div class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1">{{ApiData.data.bvid}}</div>-->
        <div class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1">{{ApiData.data.tname}}</div>
      </div>
    </div>

      <bili-comp :bvid="targetBVid">
      <div class="absolute h-full w-14 bg-black bg-opacity-40 right-0 top-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-200 group/item"><i class="duration-300 group-hover/item:text-white text-[#e6a3a7] bi bi-play-circle"></i></div>
    </bili-comp>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>