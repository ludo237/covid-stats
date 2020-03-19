<template>
  <BarChart ref="chart" :chart-data="data" :options="options" />
</template>

<script>
import BarChart from "@/components/charts/BarChart";

export default {
  name: "DailySummaryChart",

  props: {
    summaryData: {
      required: false,
      type: Object,
      default: () => { }
    }
  },

  components: {
    BarChart
  },

  data: () => ({
    defaultLabels: ["Mainland China", "Rest of The World", "Total Recovered"],
    defaultDataset: {
      // Directly taken from red-300, teal-300 and green-300 of tailwind
      backgroundColor: ["#feb2b2", "#81e6d9", "#9ae6b4"],
      // Pre fill the data
      data: [0, 0, 0]
    },
    data: {
      labels: [],
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: false,
      },
      dataset: {
        barPercentage: 1,
        maxBarThickness: 10
      },
      scales: {
        xAxes: [
          {
            minBarLength: 1,
            gridLines: {
              offsetGridLines: true
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              precision: 1,
              min: 0
            }
          }
        ]
      }
    }
  }),

  async beforeMount() {
    this.defaultDataset.data = [this.summaryData.mainlandChina, this.summaryData.otherLocations, this.summaryData.totalRecovered]
    this.data = { datasets: [this.defaultDataset], labels: this.defaultLabels };
  },

  watch: {
    summaryData: function (newData) {
      this.defaultDataset.data = [newData.mainlandChina, newData.otherLocations, newData.totalRecovered];

      this.data = { datasets: [this.defaultDataset], labels: this.defaultLabels };
    }
  }
};
</script>
