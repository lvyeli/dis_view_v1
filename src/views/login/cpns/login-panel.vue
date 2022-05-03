<template>
  <div class="login-panel">
    <h2 class="title">地震灾害损失预测系统</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon class="icon"><avatar /></el-icon>账户登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon class="icon"><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
//1.定义属性
const isKeepPassword = ref(true)
const accountRef = ref(null)
const phoneRef = ref(null)
const currentTab = ref('account')
//2.定义方法
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value.loginAction(isKeepPassword.value)
  } else {
    console.log('phoneRef调用登录逻辑')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 100px;
  width: 320px;
  .title {
    text-align: center;
  }
  .icon {
    height: 16px;
    vertical-align: middle;
    margin-right: 3px;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
