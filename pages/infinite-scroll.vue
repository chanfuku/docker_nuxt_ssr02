<template>
  <v-virtual-scroll
    :items="items"
    :item-height="50"
    height="300"
  >
    <template v-slot:default="{ item }">
      <v-list-item>
        {{ item.name }}
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    items (): string[] {
      return this.$store.state.items
    },
  },
  async fetch(): Promise<void> {
    await this.$store.dispatch('fetchPaginationItems', { page: 1 })
  },
})
</script>
