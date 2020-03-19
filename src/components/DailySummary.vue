<template>
  <Panel>
    <span v-if="isLoading"></span>
    <div class="flex flex-col" v-else>
      <DatePicker class="self-end" @date:change="changeSummaryData" />

      <h3 class="text-lg font-semibold text-center">Total Cases</h3>

      <DailySummaryChart class="mt-4" :summary-data="day" />
    </div>
  </Panel>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Panel from "@/components/Panel.vue";

export default {
  name: "DailySummary",

  components: {
    Panel,
    DatePicker: () => import(/* webpackChunkName: "date-picker" */ "@/components/DatePicker.vue"),
    DailySummaryChart: () => import(/*webpackChunkName: "daily-summary-chart" */ "@/components/DailySummaryChart.vue")
  },

  data: () => ({
    isLoading: true,
    day: {}
  }),

  async beforeMount() {
    this
      .getDailySummary()
      .then(() => this.day = this.todaySummary)
      // Todo use a fancy alert
      .catch(() => alert("Error during fetch"))
      .finally(() => this.isLoading = false);
  },

  methods: {
    changeSummaryData(date) {
      this.day = this.dailySummary(date);
    },

    ...mapActions(["getDailySummary"])
  },

  computed: {
    ...mapGetters(["todaySummary", "dailySummary"])
  }
};
</script>
