<template>
  <div class="container mx-auto p-5">
    <PanelGrid cols="3">
      <Panel
        icon="users"
        color="blue"
        :title="confirmed"
        subtitle="confirmed cases"
      />

      <Panel
        icon="hand-holding-heart"
        color="green"
        :title="recovered"
        subtitle="recovered"
      />

      <Panel
        icon="skull-crossbones"
        color="red"
        :title="deaths"
        subtitle="unfortunate deaths"
      />
    </PanelGrid>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PanelGrid from "@/components/PanelGrid.vue";
import Panel from "@/components/Panel.vue";

export default {
  name: "App",

  components: {
    PanelGrid,
    Panel
  },

  data: () => ({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  }),

  async mounted() {
    this
      .getSummary()
      .then(({ confirmed, recovered, deaths }) => {
        this.deaths = deaths.value;
        this.confirmed = confirmed.value;
        this.recovered = recovered.value;
      })
      .catch((r) => {
        console.error(r);
        // TODO use an fancy HTML alert here!
        alert("Unable to fetch data");
      });
  },

  methods: mapActions(['getSummary'])
};
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
