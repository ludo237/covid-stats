import { Line, mixins } from "vue-chartjs";

export default {
  name: "LineChart",

  extends: Line,

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

  async mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
