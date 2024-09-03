<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TopNav from '@/components/ExtendedComponents/navigation/TopNav.vue';

window.onload = function () {
  sessionStorage.clear();
};
</script>

<template>
  <TopNav />
  <RouterView />
</template>

<style scoped></style>
