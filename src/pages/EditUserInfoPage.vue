<template>
  <div id="editUserInfoPage">
    <div class="editUserHeader">
      <HeaderComponent>
        <template #headerLeft>
          <div class="left">
            <van-icon name="arrow-left" />
          </div>
        </template>
        <template #default>
          <div class="center">
            编辑资料
          </div>
        </template>
        <template #headerRight>
          <div class="right" @click="editUserInfoHandle">
            保存
          </div>
        </template>
      </HeaderComponent>
    </div>
    <div class="editUserMain">
      <div class="editImage">
        <div class="avatar">
          <img :src="editUserInfo.avatarUrl" alt="">
        </div>
        <div class="avatarHandle">
          <div class="title">更换头像</div>
          <div class="support">支持jpg、png 格式</div>
        </div>
      </div>
      <div class="editUser">
        <div class="title">基本信息</div>
        <div class="username editOne">
          <div class="editKey">昵称</div>
          <div class="editInput">
            <input type="text" v-model="editUserInfo.username">
          </div>
        </div>
        <div class="phone editOne">
          <div class="editKey">手机号码</div>
          <div class="editInput">
            <input type="text" v-model="editUserInfo.phone">
          </div>
        </div>
        <div class="email editOne">
          <div class="editKey">邮箱</div>
          <div class="editInput">
            <input type="text" v-model="editUserInfo.email">
          </div>
        </div>
        <div class="gender editOne">
          <div class="editKey">性别</div>
          <div class="editInput">
            <input v-model="editUserInfo.gender" name="gender" type="radio" value="0">男
            <input v-model="editUserInfo.gender" style="margin-left: 16px" name="gender" type="radio" value="1">女
          </div>
        </div>
        <div class="desc editOne">
          <div class="editKey">个人简介</div>
          <div class="editInput">
            <textarea v-model="editUserInfo.description"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import {getCurrentUserMessage} from "../service/user.ts";
import {editUserInfoRequest} from "../request/user.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const editUserInfo = ref({});
const router = useRouter();

onMounted(async () => {
  const userInfo = await getCurrentUserMessage();
  editUserInfo.value = userInfo
  console.log(editUserInfo.value)
})

const editUserInfoHandle = async () => {
  const { data } = await editUserInfoRequest(editUserInfo.value);
  if (data.code === 0) {
    showSuccessToast('修改成功');
    router.push('/user')
  } else {
    showFailToast("修改失败");
  }
}

</script>



<style scoped>
#editUserInfoPage {
  .editUserHeader {
    border-bottom: 1px solid #F3F4F6;
    .left {
      display: flex;
      width: 26px;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: #6B7280;
    }
    .center {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      width: 44px;
      padding: 6px;
      font-size: 16px;
      color: #7879F1;
    }
  }
  .editUserMain {
    height: 609px;
    background-color: var(--color-bg);
    .editImage {
      margin-bottom: 16px;
      height: 112px;
      background-color: #fff;
      padding: 16px;
      display: flex;
      .avatar {
        width: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 40px;
        }
      }
      .avatarHandle {
        padding: 18px 0;
        margin-left: 16px;
        .title {
          font-weight: 500;
          height: 24px;
          line-height: 24px;
        }
        .support {
          font-size: 14px;
          color: #6B7280;
          height: 20px;
        }
      }
    }
    .editUser {
      padding: 16px;
      background-color: #fff;
      .title {
        height: 20px;
        margin-bottom: 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .editOne {
        .editKey {
          height: 20px;
          font-size: 14px;
          color: #4B5563;
          margin-bottom: 8px;
        }
        .editInput {
          width: 100%;
          input {
            width: 100%;
            height: 42px;
            padding: 9px 13px;
            border-radius: 8px;
            border: 1px solid #D1D5DB;
          }
        }
        margin-bottom: 16px;
      }
      .gender .editInput{
        display: flex;
        height: 20px;
        align-items: center;
        input {
          height: 100%;
          width: 16px;
          margin-right: 8px;
        }
      }
      .desc textarea {
        width: 100%;
        height: 90px;
        padding: 9px 13px;
        border-radius: 8px;
        border: 1px solid #D1D5DB;
      }
    }
  }
}
</style>