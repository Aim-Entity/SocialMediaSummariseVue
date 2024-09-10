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
const { hasFileUploaded } = storeToRefs(whatsappStore);
const { updateStartDateTime, updateFiles, updateFileReadyToScan, checkIfFileReadyToScan } =
  whatsappStore;

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
  if (formFieldValues.value.fileValue) {
    updateFiles(formFieldValues.value.fileValue[0]);
  }
};

let formFieldUpdated = () => {
  useUpdateSessionData(formFieldValues.value, whatsappStore);
  checkIfFileReadyToScan();
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
        field-id="whatsAppFileField"
        :borderClass="
          hasFileUploaded
            ? 'upload-border-success group-hover/file:border-[#2C916E] transition ease-in duration-200'
            : ''
        "
        :labelClass="
          hasFileUploaded
            ? 'upload-text-color-success group-hover/file:text-[#2C916E] transition ease-in duration-200'
            : ''
        "
        :uploadClass="
          hasFileUploaded
            ? 'upload-logo-success group-hover/file:fill-[#2C916E] transition ease-in duration-200'
            : ''
        "
      />
      <div class="flex justify-between mt-8 max-xl:block">
        <DateFormField
          label-name="Select Date"
          v-model="formFieldValues.dateValue"
          class="w-80 max-[1280px]:w-full"
          @change="formFieldUpdated()"
          :max-date="GetTodaysDateAsString()"
        />
        <TimeFormField
          label-name="Select Time"
          v-model="formFieldValues.timeValue"
          class="w-80 max-[1280px]:w-full max-lg:mt-4"
          @change="formFieldUpdated()"
          :max-time="GetTodaysTimeAsString()"
        />
      </div>

      <br />
    </form>
  </div>
</template>
