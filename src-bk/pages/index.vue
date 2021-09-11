<template>
  <div>
    <p>▼SSR(Server Side Renderging)ページ遷移</p>
    <p><a href="/test">aタグでページ遷移</a></p>
    <p><button @click="next">window.location.hrefでページ遷移</button></p>
    <p>▼SPA(Client Side Renderging)ページ遷移</p>
    <p><NuxtLink to="/test">NuxtLinkでページ遷移</NuxtLink></p>
    <p><button @click="push">$router.pushでページ遷移</button></p>
  </div>
</template>

<script lang="ts">

export default {
  fetch() {
    console.log('index.vue')
  },
  methods: {
    push() {
      this.$router.push('/test')
    },
    next() {
      window.location.href = '/test'
    },
  },
}
</script>
