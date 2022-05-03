<template>
  <div class="login-account">
    <el-form label-width="65px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
const store = useStore()
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const formRef = ref(null)
const loginAction = (isKeepPassword) => {
  formRef.value.validate((vaild) => {
    if (vaild) {
      //1.判断是否需要记住密码
      if (isKeepPassword) {
        //本地缓存
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
      //2.登录验证
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
