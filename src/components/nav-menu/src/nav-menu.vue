<template>
  <div class="nav-menu">
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      background-color="#ebeef2"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === '1'">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <!-- <component :is="item.icon"></component> -->
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === '2'">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
const router = useRouter()
const route = useRoute()
const currentPath = route.path
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.id + '')
const handleMenuItemClick = (item) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  width: 100%;
  background-color: #ebeef2;

  .el-menu {
    border-right: none;
  }
  .el-sub-menu {
    .el-menu-item {
      padding-left: 41px !important;
      background-color: #ebeef2 !important;
      border-left-style: solid;
      border-left-width: 8px !important;
      border-left-color: transparent !important;
    }
  }
  .el-menu-item:hover {
    background-color: #d8e0e9 !important;
    color: #002147 !important;
  }
  .el-menu-item.is-active {
    background-color: #d8e0e9 !important;
    border-left-color: #002147 !important;
    color: #002147 !important;
  }
}
</style>
