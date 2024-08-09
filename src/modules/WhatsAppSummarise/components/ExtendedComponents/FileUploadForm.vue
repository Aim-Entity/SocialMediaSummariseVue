<script setup lang="ts">
import { ref } from 'vue';
import { useConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/composables/useConvertStringToArray';
import { useFileRead } from '@/modules/WhatsAppSummarise/composables/useFileRead';
import FormField from '@/components/BaseComponents/FormField.vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';

const nullValue = ref(null);
const messageArray = ref([] as string[]);

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
  let validSubmit: boolean = true;

  if (formFieldValues.value.fileValue == null) {
    new Error('File List Does Not Exist');
    validSubmit = false;
  }

  if (formFieldValues.value.dateValue == null) {
    new Error('Date Field Is Empty');
    validSubmit = false;
  }

  if (formFieldValues.value.timeValue == null) {
    new Error('Time Field Is Empty');
    validSubmit = false;
  }

  if (validSubmit) {
    useFileRead(formFieldValues.value.fileValue as FileList);
    messageArray.value = useConvertStringMessageToArray(
      sessionStorage['messageString']
    ) as string[];

    sessionStorage.setItem('formDateStart', formFieldValues.value.dateValue as string);
    sessionStorage.setItem('formTimeStart', formFieldValues.value.timeValue as string);
  } else {
    alert('Enter All Form Fields');
  }
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
  </form>
</template>
