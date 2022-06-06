import { ref } from 'vue'
export function usePageSearch() {
  const pageContentRef = ref()
  const handlerResetClick = () => {
    pageContentRef.value.getPageData()
  }
  const handleSearchClick = (queryInfo) => {
    pageContentRef.value.getPageData(queryInfo)
  }
  return [pageContentRef, handlerResetClick, handleSearchClick]
}
