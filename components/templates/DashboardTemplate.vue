<template>
  <div class="dashboard-template">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.dashboard-template {
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
}
</style>
