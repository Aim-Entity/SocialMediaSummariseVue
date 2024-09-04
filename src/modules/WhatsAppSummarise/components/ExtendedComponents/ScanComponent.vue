<script setup lang="ts">
import { ref } from 'vue';
import FileUploadForm from '@/modules/WhatsAppSummarise/components/ExtendedComponents/FileUploadForm.vue';
</script>

<template>
  <div class="w-full p-5 component-border">
    <h3 class="component-color-header text-style-bold text-lg">Scan WhatsApp File</h3>
    <FileUploadForm class="mt-5" />
  </div>
</template>

<style scoped>
.component-color-header {
  color: #878a99;
}
</style>
