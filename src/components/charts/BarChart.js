import { Bar, mixins } from "vue-chartjs";

export default {
  name: "BarChart",

  extends: Bar,

  mixins: [mixins.reactiveProp],

  props: {
    chartData: {
      required: true,
      type: Object,
    },
    options: {
      required: false,
      type: Object,
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
