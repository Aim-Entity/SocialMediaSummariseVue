<script setup lang="ts">
import { ref } from 'vue';
import ScanComponent from '@/modules/WhatsAppSummarise/components/ExtendedComponents/ScanComponent.vue';
import OverviewComponent from '@/modules/WhatsAppSummarise/components/ExtendedComponents/OverviewComponent.vue';
</script>

<template>
  <div class="bodyGridTemplate">
    <ScanComponent />
    <OverviewComponent />
  </div>
</template>

<style scoped>
.bodyGridTemplate {
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 1fr;
  gap: 1.5rem;
}
</style>
