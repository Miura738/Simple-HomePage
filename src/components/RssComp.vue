<script setup lang="ts">

import {ref} from "vue";
import BiliComp from "@/components/window/BiliComp.vue";
import axios from "axios";
import IfComp from "@/components/window/IfComp.vue";
import BiliCard from "@/components/BiliCard.vue";


const ApiData = ref(
    [
      {
        "type": "bili",
        "id": "",
      }
    ]
);
const rssXML = ref();
const rssXMLItems = ref();


axios.post('https://mes.rip/rss')
  .then(response => {
    rssXML.value = response.data;
  })
  .catch(error => {
      console.error('请求出错：', error);
  });

</script>

<template>
<div class="mt-2 mb-2 flex justify-between"># AoTweet
<div class="text-xs text-gray-400">b站反爬太严了，就只有博客了(～﹃～)~zZ</div></div>

<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
  <div :key="item.title" v-for="(item) in rssXML">
  <div v-if="item.type == 'blog'" :style="`background-image: url(${item.data.banner});`" style="background-color: #39bcbc;"
      class="relative bg-center bg-cover bg-no-repeat text-center w-full h-32 group">

    <div class="h-full w-full px-3 py-2 flex flex-col justify-between items-start overflow-hidden">
      <div class="overflow-hidden w-full">
        <div class="text-start bg-black cursor-default w-full bg-opacity-50 p-1 text-md overflow-ellipsis whitespace-nowrap truncate">
          {{ item.data.title }}
        </div>
        <div class="bg-black cursor-default w-full bg-opacity-30 p-1 text-sm text-left mt-1 h-12 overflow-y-auto">
          {{ item.data.description }}
        </div>

      </div>

      <div class="flex">
        <div class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1"><svg class="w-4 h-4 fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6773" width="200" height="200"><path d="M778.113 95.01 250.999 95.01c-72.675 0-131.777 58.102-131.777 129.495l0 597.604c0 71.39 59.102 129.495 131.777 129.495l527.114 0c72.65 0 131.78-58.105 131.78-129.495L909.893 224.504C909.893 153.112 850.763 95.01 778.113 95.01zM849.053 822.108c0 38.45-31.815 69.72-70.94 69.72L250.999 891.828c-39.12 0-70.97-31.27-70.97-69.72L180.029 224.504c0-38.445 31.85-69.717 70.97-69.717l527.114 0c39.125 0 70.94 31.272 70.94 69.717L849.053 822.108zM299.579 356.509l227.234 0c16.795 0 30.405-13.385 30.405-29.857 0-16.535-13.61-29.887-30.405-29.887L299.579 296.765c-16.792 0-30.402 13.352-30.402 29.887C269.177 343.124 282.789 356.509 299.579 356.509zM729.533 493.434 299.579 493.434c-16.792 0-30.402 13.385-30.402 29.89s13.61 29.885 30.402 29.885l429.954 0c16.795 0 30.44-13.38 30.44-29.885S746.328 493.434 729.533 493.434zM729.533 690.103 299.579 690.103c-16.792 0-30.402 13.39-30.402 29.89 0 16.505 13.61 29.89 30.402 29.89l429.954 0c16.795 0 30.44-13.385 30.44-29.89C759.973 703.493 746.328 690.103 729.533 690.103z" p-id="6774"></path></svg></div>
        <div class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1">{{ item.data.category }}</div>
        <div :key="index" v-for="(tag,index) in item.data.tag" class="bg-[#fce1ca] bg-opacity-60 text-xs px-1 py-0.5 rounded-md mr-1">{{ tag }}</div>
      </div>
    </div>

    <if-comp :title="item.data.title" icon="bi-app" :href="item.data.link">
      <div class="absolute h-full w-14 bg-black bg-opacity-40 right-0 top-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-200 group/item"><i class="duration-300 group-hover/item:text-white text-[#e6a3a7] bi bi-three-dots"></i></div>
    </if-comp>
  </div>


  </div>
</div>
<div class="mt-6 mb-2"><i class="ri-heart-fill"></i> AoLike</div>
<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
<bili-card bvid="BV1UF41167QX" />
<bili-card bvid="BV1NF411J7XS" />
<bili-card bvid="BV1L7411B7k3" />
<bili-card bvid="BV1iz4y1T7Mu" />
<bili-card bvid="BV1PM411376e" />
</div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>