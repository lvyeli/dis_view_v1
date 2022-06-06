import { ref } from 'vue'
export function usePageModal(newCallback, editCallback) {
  const pageModalRef = ref()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModalRef.value.dialogVisible = true
    newCallback && newCallback()
  }
  const handleEditData = (item) => {
    defaultInfo.value = { ...item }
    pageModalRef.value.dialogVisible = true
    editCallback && editCallback()
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
