<template>
  <div class="page-search">
    <ly-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handlerResetClick">
            <el-icon><Refresh /></el-icon>重置
          </el-button>
          <el-button type="primary" @click="handleSearchClick">
            <el-icon><Search /></el-icon>搜索
          </el-button>
        </div>
      </template>
    </ly-form>
  </div>
</template>

<script setup>
import LyForm from '@/base-ui/form'
import { ref, defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['resetBtnClick', 'selectClick'])
//1.formData动态绑定
const formItems = computed(() => {
  return props.searchFormConfig.formItems
})
const formOriginData = {}
for (const item of formItems.value) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
//2.重置（修改对象的属性，不是直接对象赋值）
const handlerResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
    emits('resetBtnClick')
  }
}
//3.搜索
const handleSearchClick = () => {
  emits('selectClick', formData.value)
}
</script>

<style lang="less" scoped>
.page-search {
  padding-bottom: 20px;
}
.header {
  text-align: center;
}
.handle-btns {
  text-align: right;
  padding-right: 30px;
}
</style>
