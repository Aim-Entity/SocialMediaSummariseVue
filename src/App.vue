<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navigation from '@/components/ExtendedComponents/navigation/Navigation.vue';

window.onload = function () {
  sessionStorage.clear();
};
</script>

<template>
  <div class="mx-auto">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped></style>
