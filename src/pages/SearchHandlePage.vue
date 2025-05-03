<template>
  <div id="searchHandlePage">
    <div class="searchMain">
      <div class="selectOne">
        <van-button @click="selectButtonValue = 'user'" :class="{selectButton: selectButtonValue == 'user'}">用户</van-button>
        <van-button @click="selectButtonValue = 'team'" :class="{selectButton: selectButtonValue == 'team'}">队伍</van-button>
        <van-button @click="selectButtonValue = 'activity'" :class="{selectButton: selectButtonValue == 'activity'}">活动</van-button>
      </div>
      <div class="showSearch">
        <div class="hotSearch">
          <div class="hotTitle">热门搜索</div>
          <div class="hotTags">
            <van-button type="default">程序设计</van-button>
            <van-button type="default">篮球</van-button>
            <van-button type="default">英语学习</van-button>
            <van-button type="default">吉他</van-button>
            <van-button type="default">摄影</van-button>
            <van-button type="default">旅行</van-button>
            <van-button type="default">动漫</van-button>
            <van-button type="default">电影</van-button>
          </div>
        </div>
        <div class="searchHistory">
          <div class="historyTitle">
            <div class="left">搜索历史</div>
            <div class="right">清空</div>
          </div>
          <div class="historyMain">
            <div class="historyOne">
              <div class="left">
                <!--                <van-icon name="browsing-history-o" />-->
                <img src="../assets/Symbol.png" alt="">
                篮球爱好者
              </div>
              <div class="right">
                <van-icon style="font-weight: 900; font-size: 16px" color="#9CA3AF" name="cross" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import emitter from "../utils/EventBus.ts";
import {onMounted, ref, watch} from "vue";

const selectButtonValue = ref("user");


watch(selectButtonValue, (newValue) => {
  emitter.emit('update-target', {
    target: newValue
  })
})



</script>



<style scoped>

.searchMain {
  background-color: var(--color-bg);
  padding-top: 3px;
  height: 545px;
  padding-bottom: 12px;

  .selectOne {
    padding: 12px;
    height: 56px;
    background-color: #fff;
    button {
      width: 52px;
      height: 32px;
      border-radius: 8px;
      margin-right: 8px;
      font-size: 14px;
      background-color: #F3F4F6;
      color: #4B5563;
    }
    button:active {
      background-color: var(--color-primary);
      color: #fff;
    }
  }

  .showSearch {
    padding: 16px;
    .hotSearch {
      margin-bottom: 4px;
      .hotTitle {
        font-weight: 500;
        font-size: 14px;
        color: #6B7280;
        margin-bottom: 12px;
      }
      .hotTags {
        button {
          padding: 6px 12px;
          height: 32px;
          border-radius: 16px;
          background-color: #F3F4F6;
          color: #4B5563;
          margin-bottom: 8px;
          margin-right: 8px;
          border: 0;
        }
        button:active {
          background-color: var(--color-primary);
          color: #fff;
        }
      }
    }
    .searchHistory {
      padding-top: 12px;
      .historyTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        .left {
          font-weight: 500;
          font-size: 14px;
          color: #6B7280;
        }
        .right {
          color: #7879F1;
          font-weight: 500;
          font-size: 12px;
        }
      }
      .historyMain {
        padding-top: 12px;
        height: 290px;
        overflow-y: auto;
        .historyOne {
          height: 40px;
          padding: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 350;
            img {
              width: 16px;
              height: 16px;
              margin-right: 12px;
              margin-top: 2px;
            }
          }
        }
      }
      .historyMain::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.selectButton {
  background-color: #7879F1 !important;
  color: #fff !important;
}
</style>