<template>
  <font-awesome-icon
    :icon="icon"
    :rotation="rotation"
    :size="size"
    :spin="spin"
    :pulse="pulse"
  />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Icon",

  props: {
    icon: {
      required: true,
      type: [String, Array]
    },

    size: String,

    rotation: {
      type: Number,
      default: null
    },

    spin: Boolean,

    pulse: Boolean
  },

  components: {
    FontAwesomeIcon
  }
};
</script>
