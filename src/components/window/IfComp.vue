<script setup lang="ts">

import {defineProps} from 'vue';

// 使用 defineProps 定义接收的 props
const props = defineProps({
  href: String,
  title: String,
  icon: String,
});

const targetHref = props.href;
const WindowOpen = ref(false);

function Jump() {
  window.open(targetHref, '_blank');
}
const OpenWindow = () => {
  // window.open(targetHref, '_blank', 'width=400,height=300');
  WindowOpen.value = true;
}
const CloseWindow = () => {
  WindowOpen.value = false;
}


import { ref, reactive } from 'vue';

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
</script>

<template>
  <div @click="OpenWindow"><slot/></div>

  <div v-if="WindowOpen"
    ref="draggable"
    :style="{ top: position.y + 'px', left: position.x + 'px', zIndex: position.index }"
    class="fixed sm:w-[40rem] sm:h-[30rem] w-[30rem] h-96 bg-white left-0 border border-[#e58c98] select-none text-white">
    <div @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag" @mouseleave="stopDrag"
        class="absolute w-full h-7 top-0 bg-pink-100 cursor-move bg-opacity-25 flex items-center justify-between pt-1 px-3">
      <div class="flex items-center scale-90">
        <div><i class="bi text-white fill-white" :class="props.icon"></i></div>
        <div class="select-none ml-1 mr-2 mb-0.5">{{props.title}}</div>
        <div class="cursor-pointer group/player mb-1" @click="Jump"><i class="group-hover/player:text-[#e58c98] mb-0.5 icon-forward text-white"></i></div>
      </div>
      <div class="flex">
        <div class="cursor-pointer group/close transition-all hover:rotate-90" @click="CloseWindow"><i class="group-hover/close:text-[#e58c98] icon-cancel-1 text-white"></i></div>
      </div>
    </div>

<!--  Main  -->
    <iframe :src="targetHref" allowfullscreen="true" frameborder="no" allowtransparency="yes" class="w-full h-full"></iframe>
  </div>
</template>

<style scoped>
@import "@/assets/icons/if-comp/css/fontello.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

</style>