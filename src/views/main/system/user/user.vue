<template>
  <div class="user">
    <page-search :searchFormConfig="formConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script setup>
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
</script>

<style lang="less" scoped></style>
