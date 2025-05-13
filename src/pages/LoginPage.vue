<template>
  <div id="loginPage">
    <div class="loginTitle">
      <div class="content">
        <div class="logo">
          <img src="../assets/logo.svg" alt="">
        </div>
        <div class="welcome">欢迎回来</div>
        <div class="desc">登录您的账号，开始匹配之旅</div>
      </div>
    </div>
    <div class="loginMain">
      <div class="loginForm">
        <div class="userAccount">
          <div class="account">账号</div>
          <div class="accountInput">
            <input v-model="formData.userAccount" type="text" placeholder="请输入账号">
            <van-icon class="accountIcon" name="manager" />
          </div>
        </div>
        <div class="userPassword">
          <div class="account">密码</div>
          <div class="accountInput">
            <input v-model="formData.userPassword" style="padding-right: 30px"  :type="showPassword ? 'text' : 'password'" placeholder="请输入密码">
            <van-icon class="accountIcon" name="lock" />
            <van-icon @click="showPassword = !showPassword" v-if="showPassword" class="eye" name="eye-o" />
            <van-icon @click="showPassword = !showPassword" v-else class="eye" name="closed-eye" />
          </div>
        </div>
        <div class="userRemember">
          <div class="remember">
            <van-checkbox checked-color="#7879F1" v-model="checked" shape="square" icon-size="16px">记住我</van-checkbox>
          </div>
          <div class="forget">忘记密码？</div>
        </div>
        <div class="loginButton">
          <van-button @click="loginHandle" color="#7879F1">登录</van-button>
        </div>
        <div class="or">
          或
        </div>
        <div class="otherLogin">
          <van-button color="#7232dd" plain><van-icon color="#22C55E" class="icon" name="wechat" />微信</van-button>
          <van-button color="#7232dd" plain><van-icon color="#3B82F6" class="icon" name="qq" />QQ</van-button>
        </div>
        <div class="goRegister">
          还没有账号？<span>立即注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import {userLogin} from "../request/user.ts";
import {useRouter} from "vue-router";

const router = useRouter()

const formData = ref({
  userAccount: "",
  userPassword: ""
})

const showPassword = ref(false)
const checked = ref(true)

const loginHandle = async () => {
  const {userAccount, userPassword} = formData.value;
  if (userAccount.length < 4) {
    showFailToast('账号不能小于4位')
    return
  }
  else if (userPassword.length < 8) {
    showFailToast('密码不能小于8位')
    return
  }
  const { data } = await userLogin(formData.value)
  if (data.code === 0) {
    showSuccessToast('登陆成功')
    router.push({
      path: '/',
      replace: true
    })
  } else {
    showFailToast('登录失败')
  }
}
</script>

<style scoped>
#loginPage {
  background-color: var(--color-primary);
  height: 100vh;
}

.loginTitle {
  height: 192px;
  padding: 48px 0 16px 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      margin-top: 11px;
      height: 64px;
      width: 64px;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .welcome {
      height: 28px;
      font-weight: 700;
      font-size: 20px;
      color: #fff;
      margin-bottom: 4px;
    }

    .desc {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }
  }
}

.loginMain {
  height: 475px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 32px;
  padding-bottom: 0;
}

.loginForm > div {
  margin-bottom: 16px;
  .account {
    height: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #4B5563;
  }
  .accountInput {
    position: relative;
    input {
      width: 100%;
      height: 37px;
      padding: 8px 12px 9px 40px;
      border: 1px solid rgba(209, 213, 219, 1);
      border-radius: 8px;
      color: #9CA3AF;
      font-size: 16px;
      transition: border-color 0.3s;
    }
    input:focus {
      border-color: var(--color-primary);
      transition: border-color 0.3s;
    }

    .accountIcon {
      position: absolute;
      top: 10px;
      left: 12px;
    }

    .eye {
      position: absolute;
      top: 10px;
      right: 12px;
    }
  }
}

.loginForm .userRemember {
  height: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #4B5563;
  .forget {
    color: #7879F1;
  }
}

.loginButton button{
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
}

.or {
  height: 20px;
  text-align: center;
  color: #9CA3AF;
  font-size: 14px;
}

.otherLogin {
  display: flex;
  justify-content: space-between;
  button {
    width: 146px;
    height: 37px;
    color: #000000 !important;
    border: 1px solid #D1D5DB !important;
    border-radius: 8px;
    .icon {
      font-size: 16px;
      margin-right: 8px;
    }
  }
  button:active {
    background-color: var(--color-bg);
  }
}
.goRegister {
  height: 24px;
  text-align: center;
  font-size: 14px;
  color: #4B5563;
  span {
    color: #7879F1;
  }
}
</style>