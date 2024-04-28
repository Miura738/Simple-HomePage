<script setup lang="ts">

import {defineProps} from 'vue';

// 使用 defineProps 定义接收的 props
const props = defineProps<{
  bvid: string,
}>();


// eslint-disable-next-line vue/no-setup-props-destructure
const targetBVid = props.bvid;
const WindowOpen = ref(false);

function Jump() {
  window.open(`https://www.bilibili.com/video/${targetBVid}`, '_blank');
}
const OpenWindow = () => {
  WindowOpen.value = !WindowOpen.value;
}
const CloseWindow = () => {
  WindowOpen.value = false;
}


import { ref, reactive } from 'vue';
// import axios from "axios";

const draggable = ref(null);
const position = reactive({ x: window.innerWidth / 2 -240, y: window.innerHeight / 2 -192, index: 55});
const isDragging = ref(false);

// 记录鼠标按下时的位置
let startX = 0;
let startY = 0;


const startDrag = (event) => {
  position.index = 55;
  isDragging.value = true;
  startX = event.clientX - parseFloat(draggable.value.style.left || 0);
  startY = event.clientY - parseFloat(draggable.value.style.top || 0);
};

const drag = (event) => {
  if (!isDragging.value) return;
  const x = event.clientX - startX;
  const y = event.clientY - startY;
  position.x = x;
  position.y = y;
};

const stopDrag = () => {

  isDragging.value = false;
};

document.addEventListener('mousedown', () => {
  if (!isDragging.value) {
  position.index = 50;
  }
});

document.addEventListener('mousemove', drag)
document.addEventListener('mouseup',stopDrag)
document.addEventListener('mouseleave',stopDrag)

const ApiData = ref({
  "title": "null",
  "bvid": "null"
});

  // axios.get(`https://api.mio.am/website/request?uri=https://api.bilibili.com/x/web-interface/view?bvid=${targetBVid}`)
  //   .then(response => {
  //     ApiData.value = response.data.data;
  //   })



</script>

<template>
  <div @click="OpenWindow"><slot/></div>

  <div v-if="WindowOpen"
    ref="draggable"
    :style="{ top: position.y + 'px', left: position.x + 'px', zIndex: position.index }"
    class="fixed sm:w-[33rem] w-[30rem] h-96 bg-white left-0 border border-[#e58c98] select-none text-black">
    <div @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag"
        class=" w-full h-7 top-0 bg-pink-100 cursor-move bg-opacity-25 flex items-center justify-between pt-1 px-3">
      <div class="flex items-center scale-90 tooltip relative">
        <div>
          <svg class="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 1024 1024" width="200" height="200"><path d="M450.803484 456.506027l-120.670435 23.103715 10.333298 45.288107 119.454151-23.102578-9.117014-45.289244z m65.04448 120.060586c-29.483236 63.220622-55.926329 15.502222-55.926328 15.502223l-19.754098 12.768142s38.90176 53.192249 75.986489 12.764729c43.770311 40.42752 77.203911-13.068516 77.203911-13.068516l-17.934791-11.55072c0.001138-0.304924-31.305956 44.983182-59.575183-16.415858z m59.57632-74.773617L695.182222 524.895573l10.029511-45.288106-120.364373-23.103716-9.423076 45.289245z m237.784178-88.926436c-1.905778-84.362809-75.487004-100.540871-75.487004-100.540871s-57.408853-0.316302-131.944676-0.95232l54.237867-52.332089s8.562916-10.784996-6.026809-22.834062c-14.592-12.051342-15.543182-6.660551-20.615396-3.487289-4.441884 3.169849-69.462471 66.920676-80.878933 78.340551-29.494613 0-60.2624-0.319716-90.075591-0.319716h10.466418s-77.705671-76.754489-82.781298-80.241777c-5.075627-3.488427-5.709369-8.56064-20.616533 3.487289-14.589724 12.05248-6.026809 22.8352-6.026809 22.8352l55.504213 53.919288c-60.261262 0-112.280462 0.319716-136.383147 1.268623-78.025387 22.521173-71.99744 100.859449-71.99744 100.859449s0.950044 168.100978 0 253.103217c8.562916 85.00224 73.899804 98.636231 73.899805 98.636231s26.007324 0.63488 45.357511 0.63488c1.900089 5.391929 3.486151 32.034133 33.302756 32.034134 29.495751 0 33.30048-32.034133 33.30048-32.034134s217.263218-0.950044 235.340231-0.950044c0.953458 9.196658 5.394204 33.619058 35.207395 33.303893 29.494613-0.636018 31.714418-35.20512 31.714418-35.20512s10.151253-0.95232 40.280747 0c70.413653-13.005938 74.534684-95.468658 74.534684-95.468657s-1.265209-169.689316-0.312889-254.056676zM752.628622 681.8304c0 13.319964-10.467556 24.102684-23.471218 24.102684H300.980907c-13.003662 0-23.47008-10.78272-23.47008-24.102684V397.961671c0-13.32224 10.467556-24.106098 23.47008-24.106098h428.176497c13.003662 0 23.471218 10.783858 23.471218 24.106098v283.868729z" fill="#333333" p-id="4027"></path></svg>
        </div>
        <div class="w-80 overflow-hidden flex">
          <div class="select-none ml-1 mr-2 mb-0.5 max-w-80 overflow-ellipsis whitespace-nowrap truncate">{{ApiData.title}}</div>
          <div class="cursor-pointer group/player mb-1" @click="Jump"><i class="group-hover/player:text-[#e58c98] mb-0.5 icon-forward"></i></div>
        </div>
        <span class="tooltip-top">{{ApiData.title}} - {{targetBVid}}</span>
      </div>
      <div class="flex">
        <div class="cursor-pointer group/close transition-all hover:rotate-90" @click="CloseWindow"><i class="group-hover/close:text-[#e58c98] icon-cancel-1"></i></div>
      </div>
    </div>

<!--  Main  -->
    <iframe :src="`//player.bilibili.com/player.html?bvid=${targetBVid}`" allowfullscreen="true" scrolling="no" framespacing="0" frameborder="no" allowtransparency="yes" class="w-full h-full"></iframe>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@/assets/icons/if-comp/css/fontello.css";
</style>