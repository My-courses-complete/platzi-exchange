<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#68d391'" />
    <slot></slot>
  </button>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader";

export default {
  name: "PxButton",

  components: { BeatLoader },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
