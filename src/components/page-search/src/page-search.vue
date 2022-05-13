<template>
  <div class="search">
    <ly-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button
            ><el-icon><Refresh /></el-icon>重置</el-button
          >
          <el-button type="primary"
            ><el-icon><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </ly-form>
  </div>
</template>

<script setup>
import LyForm from '@/base-ui/form'
import { ref, defineProps } from 'vue'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  creatTime: ''
})
</script>

<style lang="less" scoped>
.header {
  text-align: center;
}
.handle-btns {
  text-align: right;
  padding-right: 30px;
}
</style>
