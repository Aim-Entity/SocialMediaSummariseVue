<script setup lang="ts">
import { computed, ref } from 'vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import OverviewTextDescription from '@/modules/WhatsAppSummarise/components/BaseComponents/OverviewTextDescription.vue';

import { useWhatsappStore } from '@/store/WhatsappSummarise/whatsapp';
import { storeToRefs } from 'pinia';

const whatsappStore = useWhatsappStore();
const { hasFileUploaded, fileReadyToScan } = storeToRefs(whatsappStore);

let customButtonStyling = computed(() => {
  if (fileReadyToScan.value == true) {
    return 'h-10 w-full rounded flex justify-center items-center bg-[#E6F9F6] text-[#00BD9D] hover:bg-teal-100 transition-all ease-in duration-200 cursor-pointer text-base';
  } else {
    return 'h-10 w-full rounded flex justify-center items-center bg-gray-200 text-gray-500 transition-all ease-in duration-200 cursor-not-allowed text-base';
  }
});
</script>

<template>
  <div class="w-full p-5 component-border">
    <h3 class="component-color-header text-style-bold text-lg">Overview</h3>
    <div class="">
      <div class="mt-5" v-if="hasFileUploaded">
        <img src="@/assets/icons/upload-ready.svg" alt="Upload Wait" class="w-24 mx-auto" />
        <p class="text-color-reg text-lg text-center mt-4">File Ready To Scan</p>
      </div>
      <div class="mt-5" v-else>
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
          :custom-styling="customButtonStyling"
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
