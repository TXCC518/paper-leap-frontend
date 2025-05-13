<template>
  <div id="basicLayout">
    <div class="content">
      <router-view />
    </div>
    <van-tabbar style="height: 64px;" route >
      <van-tabbar-item to="/index" name="index" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/search" name="search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/team" name="team" icon="search">队伍</van-tabbar-item>
      <van-tabbar-item to="/user" name="user" icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
}
</style>