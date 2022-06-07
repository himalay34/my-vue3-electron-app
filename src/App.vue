<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden select-none">
    <div class="w-full h-full overflow-hidden bg-gray-100">
      <router-view />
    </div>
    <!-- STATUSBAR -->
    <div class="flex flex-row-reverse bg-gray-900 h-[20px]">
      <Statusbar></Statusbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Statusbar from "./components/Statusbar.vue";
const msg = ref("voila");
</script>
