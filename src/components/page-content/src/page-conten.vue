<template>
  <div class="page-content">
    <ly-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick">新建用户</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            <el-icon class="icon"><Edit /></el-icon>
            编辑
          </el-button>
          <el-button
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon class="icon"><Delete /></el-icon>
            删除
          </el-button>
        </div>
      </template>
      <!-- 2.1单独插槽已经抽取到主页面中-user -->
      <!-- page-content中动态插入剩余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ly-table>
  </div>
</template>

<script setup>
import LyTable from '@/base-ui/table'
import {
  defineProps,
  defineEmits,
  computed,
  defineExpose,
  ref,
  watch
} from 'vue'
import { useStore } from 'vuex'
const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  pageName: {
    type: String,
    require: true
  }
})
const emit = defineEmits(['newBtnClick', 'editBtnClick'])
const store = useStore()
//1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => {
  getPageData()
  console.log(pageInfo.value)
})
//2.发送网络请求
const getPageData = (queryInfo = {}) => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
//3.从vuex中获取数据
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)
defineExpose({
  getPageData
})
//4.动态绑定插槽-获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig.propList.filter((item) => {
  if (item.slotName === 'handler') return false
  return true
})
//5.删除/编辑/新建操作
const handleDeleteClick = (item) => {
  console.log(item)
  store.dispatch('system/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id
  })
}
const handleNewClick = () => {
  emit('newBtnClick')
}
const handleEditClick = (item) => {
  emit('editBtnClick', item)
}
</script>

<style lang="less" scoped>
.page-content {
  padding-top: 20px;
  text-align: center;
  border-top: 20px solid #f5f5f5;
}
</style>
