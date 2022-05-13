<template>
  <div class="nav-header">
    <div class="fold">
      <el-icon @click="handleClick" :size="30">
        <component :is="icon"></component>
      </el-icon>
    </div>
    <div class="content">
      <ly-breadcrumb :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue'
import LyBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'
const isCollapse = ref(false)
const icon = ref('expand')
const emit = defineEmits(['foldChange'])
const handleClick = () => {
  isCollapse.value = !isCollapse.value
  icon.value = isCollapse.value ? 'fold' : 'expand'
  emit('foldChange', isCollapse.value)
}
//面包屑的数据
const store = useStore()
const route = useRoute()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return pathMapToBreadcrumbs(userMenus, currentPath)
})
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  height: 48px;
  background-color: #f8c723;
  display: flex;
  align-items: center;
  .fold {
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 10px;
  }
}
</style>
