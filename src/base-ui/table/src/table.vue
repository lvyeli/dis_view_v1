<template>
  <div class="ly-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      fit
      style="width: 100%"
      align="center"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="100"
      />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          :prop="propItem.prop"
          :label="propItem.label"
          :width="propItem.minWidth"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '数据列表'
  },
  propList: {
    type: Array,
    required: true
  },
  listData: {
    type: Array,
    default: () => []
  },
  listCount: {
    type: Number,
    default: 0
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 1,
      pageSize: 10
    })
  }
})
const emits = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (value) => {
  emits('selectionChange', value)
}
const handleCurrentChange = (currentPage) => {
  emits('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
}
.footer {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
