<template>
  <div>
    <loading v-bind:active="loading" v-bind:message="loadingMessage"></loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from "@/components/loading";

export default {
  components: {
    Loading
  },
  computed: {
    loading: function() {
      return this.$store.state.system.loading.active;
    },
    loadingMessage: function() {
      return this.$store.state.system.loading.message;
    }
  }
};
</script>
