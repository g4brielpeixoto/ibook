<template>
  <div class="chip">
    <NuxtLink :to="`/category/${text}`">
      {{ text }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.chip {
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  display: inline-block;
  background: #292929;
  font-weight: 700;
  font-size: 13px;
  color: #f7f7f7;
  padding: 6px 19px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: black;
  }
}
</style>
