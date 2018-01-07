<template>
  <div>
    <SearchAndSort></SearchAndSort>
    <Statistics style="padding-top:10px !important"></Statistics>
    <!--<Loading v-if="$store.state.isSomethingLoading"></Loading>-->
    <StampList></StampList>
    <StampDialogForCreateAndEditAndView></StampDialogForCreateAndEditAndView>
  </div>


</template>

<script>
  import StampDialogForCreateAndEditAndView from './StampDialogForCreateAndEditAndView.vue'
  import StampList from './StampList.vue'
  import SearchAndSort from './SearchAndSortPanel.vue'
  import Statistics from './StatisticsPanel.vue'
//  import Loading from '../Loading_OLD.vue'

  export default {
    data: () => ({}),
    components: {
      StampDialogForCreateAndEditAndView,
      StampList,
      SearchAndSort,
      Statistics
//      Loading
    }
  }
</script>
