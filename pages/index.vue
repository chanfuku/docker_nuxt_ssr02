<template>
  <div>
    <h1>Nuxt.js Rendering mode: Universal</h1>
    <p>▼SSR(Server Side Renderging)ページ遷移</p>
    <p><a href="/test">aタグでテストページへ</a></p>
    <p><button @click="next">window.location.hrefでテストページへ</button></p>
    <p>▼SPA(Client Side Renderging)ページ遷移</p>
    <p><NuxtLink to="/test">NuxtLinkでテストページへ</NuxtLink></p>
    <p><button @click="push">$router.pushでテストページへ</button></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async fetch(): Promise<void> {
    console.log('index.vueです')
  },
  methods: {
    async push(): Promise<void> {
      this.$router.push('/test')
    },
    async next(): Promise<void> {
      window.location.href = '/test'
    },
  },
})
</script>
