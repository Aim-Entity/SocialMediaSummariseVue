<script setup lang="ts">
import { ref } from 'vue';
import ScanComponent from '@/modules/WhatsAppSummarise/components/ExtendedComponents/ScanComponent.vue';
import OverviewComponent from '@/modules/WhatsAppSummarise/components/ExtendedComponents/OverviewComponent.vue';
</script>

<template>
  <div class="max-[1280px]:bodyGridTemplate-tablet max-[960px]:block bodyGridTemplate">
    <ScanComponent />
    <OverviewComponent class="max-[960px]:mt-4" />
  </div>
</template>

<style scoped></style>
