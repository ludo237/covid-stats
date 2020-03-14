<template>
  <div class="container mx-auto p-5">
    <Summary class="mb-5" />

    <DailySummary />
  </div>
</template>

<script>
import Summary from "@/components/Summary.vue";
import DailySummary from "@/components/DailySummary.vue";

export default {
  name: "App",

  components: {
    Summary,
    DailySummary
  }
};
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
