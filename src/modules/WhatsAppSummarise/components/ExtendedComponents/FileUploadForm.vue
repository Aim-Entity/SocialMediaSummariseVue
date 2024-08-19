<script setup lang="ts">
import { ref } from 'vue';
import FormField from '@/components/BaseComponents/FormField.vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import { useSubmitForm } from '@/modules/WhatsAppSummarise/composable/useSubmitForm';

import { useWhatsappStore } from '@/store/WhatsappSummarise/whatsapp';
import { storeToRefs } from 'pinia';

const nullValue = ref(null);

const whatsappStore = useWhatsappStore();
const { messageArray, messageString, dateRange, timeRange } = storeToRefs(whatsappStore);

type formFieldObject = {
  fileValue: FileList | null;
  dateValue: string | null;
  timeValue: string | null;
};

const formFieldValues = ref<formFieldObject>({
  fileValue: null,
  dateValue: null,
  timeValue: null
});

let SubmitForm = (): void => {
  useSubmitForm(formFieldValues.value, whatsappStore);
};

let updateFileModel = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  formFieldValues.value.fileValue = files;
};
</script>

<template>
  <form @submit.prevent="SubmitForm">
    <FormField
      label-name="File"
      :is-file-input="true"
      v-model:model-value="nullValue"
      :file-func="updateFileModel"
    />
    <FormField
      label-name="Date To Analyse Messages From"
      field-type="date"
      v-model="formFieldValues.dateValue"
    />
    <FormField
      label-name="Time To Analyse Messages From"
      field-type="time"
      v-model="formFieldValues.timeValue"
    />
    <FormButton button-label="Submit" />
    <br />

    <!-- <p>{{ messageString }}</p> -->
  </form>
</template>
