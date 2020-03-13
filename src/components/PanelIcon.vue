<template>
  <div
    class="rounded-full h-16 w-16 flex items-center justify-center text-2xl"
    :class="colorClasses"
  >
    <Icon :icon="icon" />
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  name: "PanelIcon",

  props: {
    icon: {
      required: true,
      type: String,
    },

    color: {
      type: String,
      default: "blue"
    }
  },

  components: {
    Icon
  },

  computed: {
    colorClasses() {
      return [`bg-${this.color}-100`, `text-${this.color}-500`];
    }
  }
}
</script>
