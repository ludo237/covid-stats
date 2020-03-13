<template>
  <div
    class="h-64 max-w-xl relative flex justify-center bg-white rounded px-5 pt-5 capitalize cursor-pointer shadow-sm transition duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-120"
  >
    <div class="flex flex-col items-center ">
      <PanelIcon :icon="icon" :color="color" class="mb-2" />
      <p class="text-5xl font-bold -mb-1" v-text="displayTitle" />
      <span class="font-semibold text-gray-500 capitalize" v-text="subtitle" />
    </div>
  </div>
</template>

<script>
import PanelIcon from "@/components/PanelIcon.vue";

export default {
  name: "Panel",

  props: {
    icon: String,
    color: String,
    title: [Number, String],
    subtitle: String,
  },

  components: {
    PanelIcon,
  },

  data: () => ({
    displayTitle: 0,
    interval: false,
  }),

  watch: {
    title: function () {
      clearInterval(this.interval);

      // Failsafe since we cannot pass a true number as a prop
      if (isNaN(this.title)) {
        return;
      };

      if (this.title == this.displayTitle) {
        return;
      }

      this.interval = window.setInterval(function () {
        let change = (this.title - this.displayTitle) / 10;
        change = change >= 0 ? Math.ceil(change) : Math.floor(change);
        this.displayTitle += change;
      }.bind(this), 20);
    }
  }
}
</script>
