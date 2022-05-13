<template>
  <div class="main">
    <el-container class="page">
      <el-header class="page-header">
        <nav-bar></nav-bar>
      </el-header>
      <el-container class="page-content">
        <el-aside :width="isFold ? '60px' : '210px'" class="aside">
          <nav-menu :isCollapse="isFold"></nav-menu>
        </el-aside>
        <el-main class="main">
          <nav-header @foldChange="handleFoldChange"></nav-header>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavBar from '@/components/nav-bar'
import NavHeader from '@/components/nav-header'
const isFold = ref(false)
const handleFoldChange = (isCollapse) => {
  isFold.value = isCollapse
}
</script>

<style lang="less" scoped>
.main,
.page {
  width: 100%;
  height: 100%;
}
.el-header,
.page-header {
  width: 100%;
  height: 89px;
  padding: 0;
}
.page-content {
  width: 100%;
  height: calc(100% - 89px);
}
.main {
  padding: 0;
}
</style>
