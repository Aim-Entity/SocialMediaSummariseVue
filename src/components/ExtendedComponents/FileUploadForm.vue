<script setup lang="ts">
import { ref } from 'vue';
import { useFileRead } from '../../composable/useFileRead';
import { FormField } from '@/components/BaseComponents/FormField.vue';
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
  if (formFieldValues.value.fileValue) {
    messageArray.value = useFileRead(formFieldValues.value.fileValue);
  } else {
    new Error('File List Does Not Exist');
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
    <h2>{{ formFieldValues.fileValue }}</h2>
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
