<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params, error }) {
    try {
      await books.show({ id: params.id as any })
    } catch {
      return error({ statusCode: 404 })
    }
  },
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
