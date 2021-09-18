<template>
  <div>
    <h1>Nuxt.js Rendering mode: Universal</h1>
    <div class="container">
      <p>スライドページ3</p>
      <div class="flex">
        <p><NuxtLink to="/slide2">戻る</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: (to, from): string => {
    if (to?.name === 'slide2') return 'slide-right'
    if (from?.name === 'slide2') return 'slide-left'
    return ''
  },
})
</script>

<style scoped>
@import "@/assets/css/slide.css";
</style>
