<template>
  <div>
    <SearchAndSort></SearchAndSort>
    <!--<Loading v-if="$store.state.isSomethingLoading"></Loading>-->
    <StampList></StampList>
    <StampDialogForCreateAndEditAndView></StampDialogForCreateAndEditAndView>
  </div>


</template>

<script>
  import StampDialogForCreateAndEditAndView from './StampDialogForCreateAndEditAndView.vue'
  import StampList from './StampList.vue'
  import SearchAndSort from './SearchAndSortPanel.vue'
//  import Loading from '../Loading_OLD.vue'

  export default {
    data: () => ({}),
    components: {
      StampDialogForCreateAndEditAndView,
      StampList,
      SearchAndSort
//      Loading
    }
  }
</script>
