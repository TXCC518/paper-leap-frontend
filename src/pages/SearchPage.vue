<template>
  <div id="searchPage">
    <HeaderComponent>
      <template #default>
        <van-search right-icon="filter-o" class="searchForm" v-model="value" placeholder="搜索兴趣、技能或用户" />
      </template>
    </HeaderComponent>

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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import {ref} from "vue";

const value = ref("");

const selectButtonValue = ref("user");


</script>

<style scoped>
#searchPage .searchForm {
  border-radius: 19px;
  overflow: hidden;
}

::v-deep .van-icon-filter-o {
  color: var(--color-primary); /* 换成你想要的颜色 */
}

.searchMain {
  background-color: var(--color-bg);
  min-height: 100vh;
  padding-top: 3px;

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
  }
}

.selectButton {
  background-color: #7879F1 !important;
  color: #fff !important;
}
</style>