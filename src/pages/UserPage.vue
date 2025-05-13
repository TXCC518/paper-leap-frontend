<template>
  <div id="userPage">
    <div class="header">
      <div class="background">
        <img src="../assets/Background.png" alt="">
      </div>
      <div class="showUserInfo">
        <div class="avatar">
          <img :src="currentUser.avatarUrl" alt="">
        </div>
        <div class="username">{{  currentUser.username }}</div>
        <div class="id">ID:<span>{{  currentUser.id }}</span></div>
        <div class="follow">
          <div class="follower">
            <div class="number">12</div>
            <div class="title">关注</div>
          </div>
          <div class="star">
            <div class="number">12</div>
            <div class="title">粉丝</div>
          </div>
          <div class="team">
            <div class="number">12</div>
            <div class="title">队伍</div>
          </div>
        </div>
        <div class="handle">
          <van-button to="/editUserInfo" class="editUserInfo" type="primary">编辑资料</van-button>
          <van-button class="share" type="default">分享</van-button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="detailUserInfo">
        <van-tabs line-width="55" shrink  title-active-color="#7879F1" class="tabTitle" v-model:active="activeName">
          <van-tab title="个人简介" name="a">
            <div class="personShow">
              <div class="aboutMe">
                <div class="title">
                  <van-icon style="margin-right: 8px" color="#7879F1" name="manager" />
                  关于我
                </div>
                <div class="description">
                  {{  currentUser.description }}
                </div>
              </div>
              <div class="aboutMe">
                <div class="title">
                  <van-icon style="margin-right: 8px" color="#7879F1" name="like" />
                  兴趣爱好
                </div>
                <div class="tags">
                  <div v-if="currentUser.tags" v-for="(item, idx) in JSON.parse(currentUser.tags)" :key="idx" class="tag">{{  item }}</div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="我的组队" name="b">我的组队</van-tab>
          <van-tab title="收藏" name="c">收藏</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../request/user.ts";

const activeName = ref("a");
const currentUser = ref({})

onMounted(async () => {
  const { data } = await getCurrentUser();
  currentUser.value = data.data
})
</script>

<style scoped>
#userPage .header {
  position: relative;
}
#userPage .background {
  position: absolute;
  height: 112px;
  z-index: 1;
}
.showUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 88px;
  height: 181px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
  padding-bottom: 12px;

  .avatar {
    height: 80px;
    width: 80px;
    margin-top: -40px;
    margin-bottom: 8px;
    border-radius: 40px;
    background-color: #fff;
    text-align: center;
    img {
      height: 72px;
      width: 72px;
      border-radius: 36px;
      margin-top: 4px;
    }
  }

  .username {
    height: 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 2px;
  }

  .id {
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #6B7280;
    margin-bottom: 2px;
  }

  .follow {
    height: 40px;
    padding-top: 4px;
    display: flex;
    .number {
      height: 20px;
      line-height: 20px;
      padding: 0 2px;
      font-weight: bold;
      font-size: 14px;
    }
    .title {
      font-size: 12px;
      color: #6B7280;
    }
  }
  .follow > div {
    margin-left: 16px;
    text-align: center;
  }

  .follow > div:first-child {
    margin: 0;
  }

  .handle {
    padding-top: 6px;
    
    .editUserInfo {
      background-color: var(--color-primary);
    }
  }

  .handle button {
    padding: 4px 12px;
    height: 25px;
    border-radius: 8px;
    margin-right: 8px;
    font-size: 12px;
    font-weight: bold;

  }
}

#userPage .detailUserInfo {
  padding-top: 270px;

  .personShow {
    height: 293px;
    overflow-y: auto;
    background-color: var(--color-bg);
    padding: 16px;

    .aboutMe {
      padding: 16px;
      background-color: #fff;
      border-radius: 12px;
      margin-bottom: 16px;

      .title {
        height: 20px;
        line-height: 20px;
        margin-bottom: 8px;
      }

      .description {
        font-size: 14px;
        color: #4B5563;
        line-height: 20px;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        .tag {
          height: 32px;
          background-color: var(--color-bg);
          padding: 6px 12px;
          border-radius: 16px;
          color: var(--color-primary);
          margin-right: 8px;
          margin-bottom: 8px;
          font-size: 14px;
        }
      }
    }
    .aboutMe:last-child {
      margin-bottom: 0;
    }
  }
}
</style>