<template>
  <div>
    <input ref="datePicker" class="form-input" type="text" @input="parseDate" />
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import flatpickr from "flatpickr";

export default {
  name: "DatePicker",


  async mounted() {
    flatpickr(this.$refs.datePicker, {
      // Based on the first date from APIs
      // TODO Move to an env file maybe?
      minDate: new Date(2020, 0, 20),
      maxDate: new Date(),
      defaultDate: new Date(),
      altInput: true,
      altFormat: "d-m-Y"
    });
  },

  methods: {
    parseDate(e) {
      const date = format(
        parseISO(e.target.value),
        "Y/MM/dd" // To accomodate APIs
      );

      this.$emit("date:change", date);
    }
  }
}
</script>
