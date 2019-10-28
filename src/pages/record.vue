<template>
  <div class="record">
    <recordHeader></recordHeader>
    <recordMain></recordMain>
  </div>
</template>

<script>
import recordHeader from "../components/record-header";
import recordMain from "../components/record-main";
export default {
  name: "record",
  components: {
    recordHeader: recordHeader,
    recordMain: recordMain
  }
};
</script>

<style>
.record {
  display: flex;
  flex-direction: column;
}
</style>