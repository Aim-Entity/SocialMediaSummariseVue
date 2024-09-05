<script setup lang="ts">
import { ref } from 'vue';
import FileFormField from '@/components/BaseComponents/FileFormField.vue';
import DateFormField from '@/components/BaseComponents/DateFormField.vue';
import TimeFormField from '@/components/BaseComponents/TimeFormField.vue';

import { useUpdateSessionData } from '@/modules/WhatsAppSummarise/composable/useUpdateSessionData';
import { useSubmitForm } from '@/modules/WhatsAppSummarise/composable/useSubmitForm';
import { SummariseAPICall } from '@/modules/WhatsAppSummarise/utils/SummariseAPICall';
import { GetTodaysDateAsString } from '@/modules/WhatsAppSummarise/utils/GetTodaysDateAsString';
import { GetTodaysTimeAsString } from '@/modules/WhatsAppSummarise/utils/GetTodaysTimeAsString';

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
      <FileFormField
        label-name="Drop File Or Click To Upload"
        v-model:model-value="nullValue"
        :file-func="updateFileModel"
        @change="formFieldUpdated()"
      />
      <div class="flex justify-between mt-8 max-lg:block">
        <DateFormField
          label-name="Select Date"
          v-model="formFieldValues.dateValue"
          class="w-80 max-lg:w-full"
          @change="formFieldUpdated()"
          :max-date="GetTodaysDateAsString()"
        />
        <TimeFormField
          label-name="Select Time"
          v-model="formFieldValues.timeValue"
          class="w-80 max-lg:w-full max-lg:mt-4"
          @change="formFieldUpdated()"
          :max-time="GetTodaysTimeAsString()"
        />
      </div>

      <br />

      <p>{{ formFieldValues.dateValue }}</p>
      <p>{{ formFieldValues.timeValue }}</p>
    </form>
  </div>
</template>
