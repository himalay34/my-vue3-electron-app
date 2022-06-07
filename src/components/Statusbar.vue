<template>
  <div class="status__btn">
    {{ btn }}
  </div>
  <div class="status__btn">
    <router-link to="/auth">Login</router-link>
  </div>
  <div class="status__btn">
    <router-link to="/about">About</router-link>
  </div>
  <div class="status__btn">
    <router-link to="/welcome">Welcome</router-link>
  </div>
  <div class="status__btn">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const btn = ref("Button One");
</script>

<style scoped>
.status__btn {
  @apply px-2 cursor-pointer text-center text-white text-sm;
}
</style>
