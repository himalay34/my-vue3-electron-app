<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden select-none">
    <h2>{{ msg }}</h2>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Welcome to vue3_webpack_electron_forge ");
</script>
