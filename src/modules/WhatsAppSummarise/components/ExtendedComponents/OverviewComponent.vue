<script setup lang="ts">
import { ref } from 'vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import OverviewTextDescription from '@/modules/WhatsAppSummarise/components/BaseComponents/OverviewTextDescription.vue';
</script>

<template>
  <div class="w-full p-5 component-border">
    <h3 class="component-color-header text-style-bold text-lg">Overview</h3>
    <div class="">
      <div class="mt-5">
        <img src="@/assets/icons/upload-waiting.svg" alt="Upload Wait" class="w-24 mx-auto" />
        <p class="text-color-reg text-lg text-center mt-4">Awaiting For File</p>
      </div>

      <div class="mt-4">
        <OverviewTextDescription />
      </div>

      <div class="mt-4 w-full h-10 border">
        <FormButton
          form-id="WhatsappForm"
          button-label="Summarise"
          custom-styling="h-10 w-full rounded flex justify-center items-center bg-gray-200 text-gray-500 transition-all ease-in duration-200  text-base"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-color-header {
  color: #878a99;
}
</style>
