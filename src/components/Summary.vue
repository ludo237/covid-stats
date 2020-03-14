<template>
  <PanelGrid cols="3">
    <SummaryPanel
      icon="users"
      color="blue"
      :title="confirmed"
      subtitle="confirmed cases"
      class="h-64 max-w-xl"
    />

    <SummaryPanel
      icon="hand-holding-heart"
      color="green"
      :title="recovered"
      subtitle="recovered"
      class="h-64 max-w-xl"
    />

    <SummaryPanel
      icon="skull-crossbones"
      color="red"
      :title="deaths"
      subtitle="unfortunate deaths"
      class="h-64 max-w-xl"
    />
  </PanelGrid>
</template>

<script>
import { mapActions } from "vuex";
import PanelGrid from "@/components/PanelGrid.vue";
import SummaryPanel from "@/components/SummaryPanel.vue";

export default {
  name: "Summary",

  components: {
    PanelGrid,
    SummaryPanel
  },

  data: () => ({
    confirmed: 0,
    recovered: 0,
    deaths: 0
  }),

  async mounted() {
    this.getSummary()
      .then(({ confirmed, recovered, deaths }) => {
        this.deaths = deaths.value;
        this.confirmed = confirmed.value;
        this.recovered = recovered.value;
      })
      .catch(() => {
        // TODO use an fancy HTML alert here!
        alert("Unable to fetch data");
      });
  },

  methods: mapActions(["getSummary"])
};
</script>
