<template>
  <Panel>
    <select>
      <option value="2020/03/08">08 March</option>
    </select>

    <DailySummaryChart :summary-data="data" />
  </Panel>
</template>

<script>
//import { parse, parseISO, format } from "date-fns";
import Panel from "@/components/Panel.vue";
import DailySummaryChart from "@/components/DailySummaryChart.vue";

export default {
  name: "DailySummary",

  components: {
    Panel,
    DailySummaryChart
  },

  data: () => ({
    parsedDate: () => new Date().toISOString()
  }),

  computed: {
    data() {
      // Filtered from the api request based on the select and reportDateString
      // TODO make it works with the API!
      return {
        reportDate: 1583643600000,
        mainlandChina: 80699,
        otherLocations: 29136,
        totalConfirmed: 109835,
        totalRecovered: 60695,
        reportDateString: "2020/03/08",
        deltaConfirmed: 3999,
        deltaRecovered: 2336,
        objectid: 49
      };
    }
  }
};
</script>
