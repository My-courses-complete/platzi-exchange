<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      size="100px"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";
import BounceLoader from "vue-spinner/src/BounceLoader";

export default {
  name: "Home",

  components: { PxAssetsTable, BounceLoader },

  data() {
    return {
      isLoading: true,
      assets: [],
    };
  },

  created() {
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
