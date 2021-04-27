<template>
  <div class="category">
    <h1>{{ $route.params.name }}</h1>
    <BookList :category="$route.params.name" class="book-list" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'ibook',
  computed: {
    nome() {
      return this.$route.params.name
    }
  }
})
</script>

<style lang="scss" scoped>
.book-list {
  margin-top: 2rem;
}
</style>
