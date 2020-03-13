<template>
  <div class="grid gap-5 grid-flow-row grid-rows-1" :class="gridCols">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PanelGrid",

  props: {
    cols: {
      retuired: true,
      type: [Number, String],
      default: 1,
    }
  },

  computed: {
    gridCols() {
      return `grid-cols-${this.cols}`;
    }
  }
}
</script>
