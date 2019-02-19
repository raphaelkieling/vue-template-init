<template>
  <div id="system-loading" v-if="active">
    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: ["active", "message"]
};
</script>


<style>
#system-loading {
  position: fixed;
  background: rgba(117, 180, 239, 0.2);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>