<template>
  <div class="container mx-auto p-5">
    <PanelGrid cols="3">
      <Panel
        icon="users"
        color="blue"
        title="136390"
        subtitle="confirmed cases"
      />

      <Panel
        icon="hand-holding-heart"
        color="green"
        title="69598"
        subtitle="recovered"
      />

      <Panel
        icon="skull-crossbones"
        color="red"
        title="5058"
        subtitle="unfortunate deaths"
      />
    </PanelGrid>
  </div>
</template>

<script>
import PanelGrid from "@/components/PanelGrid.vue";
import Panel from "@/components/Panel.vue";

export default {
  name: "App",

  components: {
    PanelGrid,
    Panel
  }
};
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
