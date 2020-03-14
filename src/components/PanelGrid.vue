<template>
	<div
		class="grid gap-5 md:gap-12 grid-flow-col md:grid-flow-row"
		:class="responsiveGrid"
	>
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
			default: 1
		}
	},

	computed: {
		responsiveGrid() {
			return [
				`grid-rows-${this.cols}`,
				"grid-cols-1",
				`md:grid-cols-${this.cols}`,
				"md:grid-rows-1"
			];
		}
	}
};
</script>
