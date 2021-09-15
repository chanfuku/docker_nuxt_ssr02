<template>
  <div>
    <h1>Nuxt.js Rendering mode: Universal</h1>
    <p>アニメーションの実験ページ</p>
    <p><NuxtLink to="/">トップに戻る</NuxtLink></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'slide-test',
})
</script>

<style scoped>
.slide-test-enter-active {
  animation: slide-in 1s;
}

.slide-test-leave-active {
  animation: slide-out 1s;
}

@keyframes slide-in {
  0% {
    opacity: 0;/*初期状態では透明に*/
    transform: translateX(64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(64px);
  }
}
</style>
