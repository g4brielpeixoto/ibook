<template>
  <BookReaderTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.description
        }
      ]
    }
  }
})
</script>
