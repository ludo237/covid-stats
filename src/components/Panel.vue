<template>
  <div
    class="h-64 sm:w-auto w-48 relative flex justify-center bg-white rounded px-5 pt-5 capitalize cursor-pointer shadow-sm transition duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-120"
  >
    <div class="flex flex-col items-center ">
      <PanelIcon :icon="icon" :color="color" class="mb-2" />
      <p class="text-5xl font-semibold -mb-2" v-text="title" />
      <span class="text-gray-600 capitalize" v-text="subtitle" />
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
    title: String,
    subtitle: String,
  },

  components: {
    PanelIcon,
  }
}
</script>
