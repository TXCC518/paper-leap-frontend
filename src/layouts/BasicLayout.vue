<template>
  <div id="basicLayout">
    <div class="content">
      <router-view />
    </div>
    <van-tabbar route >
      <van-tabbar-item to="/" name="index" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/search" name="search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/team" name="team" icon="search">队伍</van-tabbar-item>
      <van-tabbar-item to="/user" name="user" icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const onClickLeft = () => alert('左');
const onClickRight = () => alert('右');


</script>

<style scoped>

</style>