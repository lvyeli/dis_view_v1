<template>
  <div>
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handlerResetClick"
      @selectClick="handleSearchClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="data"
    ></page-content>
  </div>
</template>

<script setup>
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
const [pageContentRef, handlerResetClick, handleSearchClick] = usePageSearch()
</script>

<style lang="less" scoped></style>
