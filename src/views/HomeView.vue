
<script setup lang="ts">
import {ref} from "vue";
import IfComp from "@/components/window/IfComp.vue";
import BiliComp from "@/components/window/BiliComp.vue";
import RssComp from "@/components/RssComp.vue";

const BlogClass = ref(false);
</script>

<template>
<div class="profile-card" :class="BlogClass? 'opened':''">
  <div class="overlay"></div>
  <img src="https://cdn.lolis.fyi/gravatar/20836be5dc29ae0412cae568a6542022?s=1000&d=mp&r=g" alt="profile">
  <button @click="BlogClass = !BlogClass"  class="menu-btn">
    <i :class="BlogClass? 'bi-door-closed':'bi-blockquote-right'" class="bi bih"></i>
  </button>
  <router-view />
  <ul class="social">

    <li>
      <bili-comp bvid="BV1UF41167QX"><i class="bi i bih bi-twitter"></i></bili-comp>
<!--      <if-comp title="Twitter" href="https://blog.mes.rip/cv1" icon="bi-twitter"><i class="bi bih bi-twitter"></i></if-comp>-->
<!--      <if-comp title="Twitter" href="https://x.com/@realMiura738" icon="bi-twitter"><i class="bi bih bi-twitter"></i></if-comp>-->
<!--      <if-comp title="哔哩哔哩~亁杯 - AoMiura" href="//player.bilibili.com/player.html?aid=916041751&bvid=BV1Eu4y1r7P1&cid=1268587236&p=1" icon="bi-twitter"><i class="bi i bih bi-twitter"></i></if-comp>-->
    </li>
    <li>
      <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1721829425&website=miura.yoru.cc"><i class="bi i bih bi-tencent-qq"></i></a>
    </li>
    <li>
      <a href="mailto:miura738@1oli.cn"><i class="bi i bih bi-envelope-heart"></i></a>
    </li>
    <li>
      <if-comp title="Github" href="https://github.com/Miura738" icon="bi-github"><i class="bi i bih bi-github"></i></if-comp>
    </li>
  </ul>
  <div class="more">
    <RssComp />
  </div>
</div>
</template>


<style>
body {
  background-size: cover;
  background-position: revert;
  background-repeat: no-repeat;
  background-image: url(https://loliapi.com/acg);
  background-color: rgba(14, 14, 14, 0.4);
  background-blend-mode: multiply;
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.overlay {
  background: rgba(0,0,0, .7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: 0.5s ease-in;
  transition-delay: 0.5s;
  z-index: 1;
}

.profile-card {
  height: 20.8em;
  width: 34em;
  //background: #fff;
  //box-shadow: 0 0 5em rgba(0,0,0, 0.2);
  background: rgba(255, 255, 255, 0.9);
  //-webkit-backdrop-filter: blur(8px);
  //backdrop-filter: blur(8px);
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);

  padding: 8em 2em 2em 2em;
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 640px) {
.profile-card {
  height: 30.4em;
  width: 18em;
  padding: 16em 2em 2em 2em;
}
}

.menu-btn {
  background: none;
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: 2;
}

.profile-card img {
  width: 17em;
  border-radius: 50%;
  position: absolute;
  top: -3em;
  right: -4em;
  z-index: 0;
  transition: 0.5s ease-in-out;
}


.profile-card .social{
  position: absolute;
  right: 2em;
  bottom: 1.9em;
  margin-top: 3em;
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1em
}

.profile-card .social .i {
  font-size: 1.2em;
  color: #000;

}

.profile-card .bih:hover {
  color: #fbc7b5;
}

.more {
  padding: 0 1.5em 0 1.5em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 0;
  z-index: 1;
  color: #fff;
  transition: 0.5s ease-in;
  transition-delay: 0.5s;
}

.profile-card ::-webkit-scrollbar {
  width: 8px;
}
.profile-card ::-webkit-scrollbar-track {
  background: #1e1e1e;
}
.profile-card ::-webkit-scrollbar-thumb {
  background: #fff;
}
.profile-card ::-webkit-scrollbar-thumb:hover {
  background: #fbc7b5;
}

.profile-card.opened img {
  width: 38em;
  border-radius: 0;
}

.opened .menu-btn {
  color: #fff;
  background: #000;
  width: 1.8em;
  height: 1.8em;
}
.opened .overlay{
  height: 100%;
}
.opened .more {
  padding: 4em 1.5em 1.5em 1.5em;
  height: 100%;
  overflow-y: scroll;
}


</style>


