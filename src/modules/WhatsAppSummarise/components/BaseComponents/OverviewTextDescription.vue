<script setup lang="ts">
import { ref, computed } from 'vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import { useUIPlaceholderEmptyNum } from '@/modules/WhatsAppSummarise/composable/useUIPlaceholderEmptyNum';
import { useUIPlaceholderEmptyString } from '@/modules/WhatsAppSummarise/composable/useUIPlaceholderEmptyString';

import { useWhatsappStore } from '@/store/WhatsappSummarise/whatsapp';
import { storeToRefs } from 'pinia';

const whatsappStore = useWhatsappStore();
const { startDateUI, startTimeUI, fileWordLength, fileCharLength, fileObject, hasFileUploaded } =
  storeToRefs(whatsappStore);
const { resetFileData } = whatsappStore;

const DateNow = computed(() => {
  let date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
});
const TimeNow = computed(() => {
  let time = new Date();
  return time.toLocaleTimeString().slice(0, 5);
});
const calculateFileSize = computed(() => {
  return (fileObject.value.size / 1000).toFixed(2);
});
</script>

<template>
  <div class="w-full h-12 border grid items-center px-2">
    <div v-if="hasFileUploaded" class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="@/assets/icons/files.svg" alt="Files" class="h-8" />
        <div>
          <p class="text-xs text-color-reg">{{ fileObject.name }}</p>
          <p class="text-[10px] text-color-reg">
            <b>{{ calculateFileSize }}</b> KB
          </p>
        </div>
      </div>
      <FormButton
        button-label="Delete"
        custom-styling="w-16 h-8 text-sm rounded flex justify-center items-center bg-red-100 text-red-400 hover:bg-red-200 transition-all ease-in duration-200 text-base"
        @click="resetFileData()"
      />
    </div>
  </div>
  <div class="mt-5 flex flex-col gap-2 justify-between text-sm text-color-reg">
    <p>
      Word Length - <b>{{ useUIPlaceholderEmptyNum(fileWordLength) }}</b>
    </p>
    <p>
      Character Length - <b>{{ useUIPlaceholderEmptyNum(fileCharLength) }}</b>
    </p>
    <p>
      Date Range - <b>{{ useUIPlaceholderEmptyString(startDateUI) }} - {{ DateNow }}</b>
    </p>
    <p>
      Time Range - <b>{{ useUIPlaceholderEmptyString(startTimeUI) }} - {{ TimeNow }}</b>
    </p>
  </div>
</template>

<style scoped></style>
