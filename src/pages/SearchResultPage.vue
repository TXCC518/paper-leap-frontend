<template>
  <div id="searchResultPage">
    <div v-if="resultData.length > 0">
      <div class="targetTitle">
        <span>用户</span>
        (<span>{{  resultData.length }}</span>)
      </div>
      <div class="targetContent">
        <div v-for="(user, idx) in resultData" :key="idx" class="contentOne">
          <div class="left">
            <img :src="user.avatarUrl" alt="">
          </div>
          <div class="center">
            <div class="top">
              <div class="name">{{  user.username }}</div>
            </div>
            <div class="tags">
              <van-tag v-for="(tag, idx) in JSON.parse(user.tags)" :key="idx" style="margin-right: 10px; margin-bottom: 10px" color="#A5A6F6" size="medium">
                {{  tag }}
              </van-tag>
            </div>
          </div>
          <div class="right">
            <van-button class="button" type="primary">关注</van-button>
          </div>
        </div>
      </div>
    </div>
    <van-empty v-else description="空空如也" />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {searchUsersByNameAndTags} from "../request/user.ts";
import emitter from "../utils/EventBus.ts";

const route = useRoute()

const resultData = ref([])

const searchUsers = async (data: {target: string, value: string}) => {
  if (data.target === 'user') {
    const result = await searchUsersByNameAndTags({tags: data.value})
    resultData.value = result.data.data
    console.log(resultData.value, "resultData")
  }
}

onMounted(() => {
  emitter.on('search-users', searchUsers)
})
</script>



<style scoped>
#searchResultPage {
  background-color: var(--color-bg);
  height: 541px;
  padding: 16px;
  overflow-y: auto;
}

.targetTitle {
  height: 20px;
  color: #6B7280;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;
}

.targetContent {
  .contentOne {
    padding: 12px;
    background-color: #fff;
    display: flex;
    border-radius: 12px;
    margin-bottom: 12px;

    .left {
      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }
      display: flex;
      align-items: center;
    }

    .center {
      padding-left: 12px;
      width: 209px;
      .top {
        display: flex;
        justify-content: space-between;
        height: 24px;
        line-height: 24px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      width: 72px;
      padding-left: 8px;
      .button {
        width: 52px;
        height: 28px;
        border-radius: 8px;
        background-color: var(--color-primary);
      }
    }
  }
  .contentOne:last-child {
    margin: 0;
  }
}
</style>