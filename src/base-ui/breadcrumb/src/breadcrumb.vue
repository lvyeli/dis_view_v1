<template>
  <div class="ly-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{}">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
