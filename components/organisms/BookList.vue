<template>
  <div class="book-list">
    <BookCard v-for="book in $books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
import { Book } from '@/models'

export default Vue.extend({
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  computed: {
    $books() {
      // Filtro se passar uma prop de categoria mostrará somente livros da categoria escolhida
      if (this.category !== '') {
        const booksInCategory = [] as Book[]
        books.$all.forEach((book) => {
          book.categories.forEach((category) => {
            if (category.name === this.category) booksInCategory.push(book)
          })
        })
        return booksInCategory
      }
      return books.$all
    }
  }
})
</script>

<style lang="scss" scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
