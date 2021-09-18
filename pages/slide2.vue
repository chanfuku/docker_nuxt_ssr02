<template>
  <div>
    <h1>Nuxt.js Rendering mode: Universal</h1>
    <div class="container">
      <p>スライドページ2</p>
      <div class="flex">
        <p><NuxtLink to="/slide1">戻る</NuxtLink></p>
        <p><NuxtLink to="/slide3">次へ</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: (to, from): string => {
    if (to?.name === 'slide1' || from?.name === 'slide3') return 'slide-right'
    if (from?.name === 'slide1' || to?.name === 'slide3') return 'slide-left'
    return ''
  },
})
</script>

<style scoped>
@import "@/assets/css/slide.css";
</style>
