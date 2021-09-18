<template>
  <div>
    <h1>Nuxt.js Rendering mode: Universal</h1>
    <div class="container">
      <p>スライドページ1</p>
      <div class="flex">
        <p><NuxtLink to="/">トップに戻る</NuxtLink></p>
        <p><NuxtLink to="/slide2">次へ</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: (to, from): string => {
    if (to?.name === 'slide2' || from?.name === 'index') return 'slide-left'
    if (from?.name === 'slide2' || to?.name === 'index') return 'slide-right'
    return ''
  },
})
</script>

<style scoped>
@import "@/assets/css/slide.css";
</style>
