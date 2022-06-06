<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <ly-form v-model="formData" v-bind="modalConfig"></ly-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCofirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import LyForm from '@/base-ui/form'
import { ref, defineProps, defineExpose, watch } from 'vue'
import { useStore } from 'vuex'
const dialogVisible = ref(false)
const formData = ref({})
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => {}
  },
  pageName: {
    type: String,
    required: true
  }
})
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
defineExpose({ dialogVisible })
//点击确定按钮的逻辑
const store = useStore()
const handleCofirmClick = () => {
  dialogVisible.value = false
  //区分是编辑还是新建
  if (Object.keys(props.defaultInfo).length) {
    //编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      id: props.defaultInfo.id,
      editData: { ...formData.value }
    })
  } else {
    //新建
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}
</script>

<style lang="less" scoped></style>
