<template>
  <div>
    <v-virtual-scroll class="item-wrapper" :item-height="50" :items="items">
      <template v-slot:default="{ item, index }">
        <span v-if="index === items.length - 1" v-intersect.once="onIntersect"></span>
        <v-list-item>
          {{ item.name }}
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <v-list-item v-if="isLoading" class="loading">
      <v-progress-circular indeterminate width="3" />
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { 
      page: 1,
      isLoading: false,
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    },
  },
  async fetch(): Promise<void> {
    await this.$store.dispatch('fetchPaginationItems', { page: this.page })
  },
  methods: {
    async onIntersect() {
      try {
        this.page = this.page + 1;
        this.isLoading = true;
        // ローディングアイコンが目立つ様にあえて0.5秒待たせる
        await new Promise(resolved => setTimeout(resolved, 500));
        await this.$store.dispatch('fetchPaginationItems', { page: this.page })
      } catch (e) {
        console.error(e)
      } finally {
        this.isLoading = false;
      }
    }
  }
})
</script>

<style scoped>
.item-wrapper {
  height: calc(100vh - 30px);
  width: 200px;
  margin: 0 auto;
  overflow-y: scroll;
}

.item {
  height: 50px;
}

.loading {
  display: flex;
  justify-content: center;
  bottom: 45px;
}

</style>
