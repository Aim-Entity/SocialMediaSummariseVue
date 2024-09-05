<script setup lang="ts">
import { ref } from 'vue';
import FormField from '@/components/BaseComponents/FormField.vue';
import { useUpdateSessionData } from '@/modules/WhatsAppSummarise/composable/useUpdateSessionData';
import { useSubmitForm } from '@/modules/WhatsAppSummarise/composable/useSubmitForm';
import { SummariseAPICall } from '@/modules/WhatsAppSummarise/utils/SummariseAPICall';
import { FileRead } from '@/modules/WhatsAppSummarise/utils/FileRead';

import { useWhatsappStore } from '@/store/WhatsappSummarise/whatsapp';
import { storeToRefs } from 'pinia';

const nullValue = ref(null);

const whatsappStore = useWhatsappStore();
const { messageArray, messageString, startDateTime } = storeToRefs(whatsappStore);
const { updateStartDateTime } = whatsappStore;

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
  SummariseAPICall(whatsappStore);
  updateStartDateTime(
    formFieldValues.value.dateValue as string,
    formFieldValues.value.timeValue as string
  );
};

let updateFileModel = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  formFieldValues.value.fileValue = files;
};

let formFieldUpdated = () => {
  useUpdateSessionData(formFieldValues.value, whatsappStore);
};
</script>

<template>
  <div>
    <form @submit.prevent="SubmitForm" id="WhatsappForm">
      <FormField
        label-name="Drop File Or Click To Upload"
        :is-file-input="true"
        v-model:model-value="nullValue"
        :file-func="updateFileModel"
        @change="formFieldUpdated()"
      />
      <div class="flex justify-between mt-8 max-lg:block">
        <FormField
          label-name="Select Date"
          field-type="date"
          v-model="formFieldValues.dateValue"
          :formal-date-formatting="true"
          class="w-80 max-lg:w-full"
          @change="formFieldUpdated()"
        />
        <FormField
          label-name="Select Time"
          field-type="time"
          v-model="formFieldValues.timeValue"
          class="w-80 max-lg:w-full max-lg:mt-4"
          @change="formFieldUpdated()"
        />
      </div>

      <br />

      <p>{{ formFieldValues.dateValue }}</p>
      <p>{{ formFieldValues.timeValue }}</p>
    </form>
  </div>
</template>
