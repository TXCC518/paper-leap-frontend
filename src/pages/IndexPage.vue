<template>
  <div id="indexPage">
    <div class="indexHeader" style="border-bottom: 1px solid #F3F4F6;">
      <HeaderComponent>
        <template #headerLeft>
          <div class="left" style="width: 36px; color: #2D2D3F; font-weight: 700; font-size: 18px; height: 100%; display: flex; align-items: center">纸跃</div>
        </template>
        <template #headerRight>
          <div class="right" style="width: 65px; display: flex; align-items: center; height: 100%; color: #6B7280;">
            <van-icon style="margin-right: 12px; margin-left: 8px;" name="bell" />
            <van-icon name="chat" />
          </div>
        </template>
      </HeaderComponent>
    </div>
    <div class="indexMain">
      <div class="mainTitle">推荐伙伴</div>
      <div class="recommendUser" v-for="(item, idx) in recommend" :key="idx">
        <div class="recommendTop">
          <div class="avatar">
            <img :src="item.avatarUrl" alt="">
          </div>
          <div class="total">
            <div class="totalTitle">
              <div class="left">{{  item.username }}</div>
              <div class="smilar">匹配度 92%</div>
            </div>
            <div v-if="recommend.tags" class="totalTags">
              <div class="tag" v-for="(item, idx) in JSON.parse(recommend.tags)" :key="idx">{{  item }}</div>
            </div>
          </div>
        </div>
        <div v-if="recommend.description" class="recommendCenter">
          {{ recommend.description }}
        </div>
        <div class="recommendBottom">
          <div class="hello">打个招呼</div>
          <div class="handle">
            <van-icon style="width: 28px; text-align: center; margin-right: 8px" name="like" />
            <van-icon style="width: 29px; text-align: center; " name="friends" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import {onMounted, ref} from "vue";
import {getRecommendUsers} from "../request/user.ts";

const recommend = ref([]);

onMounted(async () => {
  const {data} = await getRecommendUsers({page: 1, size: 10});
  if (data.code === 0) {
    recommend.value = data.data.records;
  }
  console.log(recommend.value)
})
</script>

<style scoped>
.indexMain {
  height: 550px;
  overflow-y: auto;
  background-color: var(--color-bg);
  padding: 16px;
  .mainTitle {
    font-size: 14px;
    color: #6B7280;
    font-weight: bold;
    height: 20px;
    line-height: 20px;
  }
  .recommendUser {
    margin-top: 16px;
    padding: 16px;
    background-color: #fff;
    border-radius: 12px;
    .recommendTop {
      display: flex;
      .avatar {
        width: 48px;
        margin-right: 12px;
        img {
          width: 100%;
          height: 48px;
          border-radius: 24px;
        }
      }
      .total {
        width: 244px;
        .totalTitle {
          height: 24px;
          display: flex;
          justify-content: space-between;
          .left {
            font-weight: bold;
            line-height: 24px;
          }
          .smilar {
            background-color: var(--color-bg);
            height: 100%;
            padding: 0 8px;
            line-height: 24px;
            font-size: 12px;
            color: #7879F1;
            border-radius: 12px;
          }
        }
        .totalTags {
          padding-top: 6px;
          display: flex;
          flex-wrap: wrap;
          .tag {
            height: 20px;
            background-color: #F3F4F6;
            padding: 0 8px;
            font-size: 12px;
            color: #4B5563;
            line-height: 20px;
            border-radius: 4px;
            margin-right: 4px;
            margin-bottom: 4px;
          }
        }
      }
    }
    .recommendCenter {
      font-size: 14px;
      line-height: 20px;
      color: #4B5563;
      margin: 12px 0;
    }
    .recommendBottom {
      padding-top: 12px;
      border-top: 1px solid #F3F4F6;
      display: flex;
      justify-content: space-between;
      height: 48px;
      .hello {
        width: 88px;
        background-color: var(--color-primary);
        line-height: 36px;
        text-align: center;
        border-radius: 8px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }
      .handle {
        color: #9CA3AF;
        font-size: 16px;
        font-weight: 900;
        line-height: 36px;
      }
    }
  }
}
</style>