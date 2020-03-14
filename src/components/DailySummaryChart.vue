<template>
  <BarChart :chart-data="data" :options="options" />
</template>

<script>
import BarChart from "@/components/charts/BarChart";

export default {
  name: "DailySummaryChart",

  props: {
    summaryData: {
      required: false,
      type: Object,
      default: () => {}
    }
  },

  components: {
    BarChart
  },

  data: () => ({
    data: {
      labels: ["Mainland China", "Rest of The World", "Total Recovered"],
      datasets: [
        {
          // Directly taken from red-300, teal-300 and green-300 of tailwind
          backgroundColor: ["#feb2b2", "#81e6d9", "#9ae6b4"],
          // Pre fill the data
          data: [0, 0, 0]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "{totalConfirmed} cases"
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
    this.options.title.text = `${this.summaryData.totalConfirmed} Cases so far`;

    this.data.datasets[0].data = [
      this.summaryData.mainlandChina,
      this.summaryData.otherLocations,
      this.summaryData.totalRecovered
    ];
  }
};
</script>
