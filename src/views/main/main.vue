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
        <el-main>
          <nav-header @foldChange="handleFoldChange"></nav-header>
          <div class="page-info">
            <router-view></router-view>
          </div>
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
import BackTop from '@/base-ui/backtop'
const isFold = ref(false)
const handleFoldChange = (isCollapse) => {
  isFold.value = isCollapse
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main .page {
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
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  transition: width 0.3s linear;
}
.el-main {
  padding: 0;
  height: 100%;
  text-align: center;
}
</style>
