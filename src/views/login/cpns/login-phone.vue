<template>
  <div class="login-phone">
    <el-form label-width="65px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="getCode">
          <el-input v-model="phone.password" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { rules } from '../config/phone-config'
const phone = reactive({
  name: '',
  password: ''
})
</script>

<style lang="less" scoped>
.getCode {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
