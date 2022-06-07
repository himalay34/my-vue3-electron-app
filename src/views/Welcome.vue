<template>
  <h1 class="text-slate-600">message.value</h1>
  <router-link to="/about">About</router-link>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Welcome",
  setup() {
    const message = ref("welcome to vue composition api");

    return {
      message,
    };
  },
};
</script>
