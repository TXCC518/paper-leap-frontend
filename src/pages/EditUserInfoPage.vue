<template>
  <div id="editUserInfoPage">
    <van-cell-group inset>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="名字" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="email" type="email" label="邮箱" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="radio" label="性别">
        <template #input>
          <div class="man" style="display: flex; align-items: center; margin-right: 80px">
            <input type="radio" name="gender" v-model="gender" value="0">男
          </div>
          <div class="woman" style="display: flex; align-items: center">
            <input type="radio" name="gender" v-model="gender" value="1">女
          </div>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const value = ref("");
</script>



<style scoped>
#editUserInfoPage {
  background-color: var(--color-bg);
  height: 100vh;
  padding: 30px 16px;
}
</style>