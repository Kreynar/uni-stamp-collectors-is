<template>
  <div>
    <SearchAndSort></SearchAndSort>
    <StampList></StampList>
    <StampDialogForCreateAndEditAndView></StampDialogForCreateAndEditAndView>
  </div>


</template>

<script>
  import StampDialogForCreateAndEditAndView from './StampDialogForCreateAndEditAndView.vue'
  import StampList from './StampList.vue'
  import SearchAndSort from './SearchAndSortPanel.vue'

  export default {
    data: () => ({}),
    components: {
      StampDialogForCreateAndEditAndView,
      StampList,
      SearchAndSort
    }
  }
</script>
