<script setup lang="ts">
import { ref } from 'vue';
import { useConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/composable/useConvertStringToArray';
import { useFileRead } from '@/modules/WhatsAppSummarise/composable/useFileRead';
import { useFetchJson } from '@/composable/useFetchJson';
import FormField from '@/components/BaseComponents/FormField.vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import axios from 'axios';
import process from 'process';
import { summariseKey } from '@/secrets/secret';

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

console.log(process.env.TZ);

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

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/summarize',
      headers: {
        authorization: summariseKey()
      },
      data: {
        output_sentences: 13,
        providers: 'openai/gpt-4o-mini',
        text: `2024-07-15, 23:42 - honufa: Am I allowed to go Bradford tmr ?? 🤔
2024-07-15, 23:42 - honufa changed the group name from "puddins and ferdousis" to "family"
2024-07-15, 23:58 - Dad: No, go back to sleep now
2024-07-16, 07:51 - Bilal: womp
2024-07-16, 08:39 - honufa: Okay 🫡
2024-07-16, 08:39 - honufa: IKR it’s my friends bday time
2024-07-16, 09:56 - Bilal: ask em again
2024-07-16, 10:29 - honufa: I did
2024-07-16, 17:47 - honufa: <Media omitted>
2024-07-16, 17:47 - honufa: <Media omitted>
2024-07-16, 17:47 - honufa: This message was deleted
2024-07-16, 17:48 - honufa: <Media omitted>
2024-07-16, 17:59 - Bilal: paninis in cha cha chai is probably not the best choice
2024-07-16, 18:03 - Dad: 😋
2024-07-16, 18:04 - Dad: <Media omitted>
2024-07-16, 18:04 - honufa: It was good ALRIGJT
2024-07-16, 18:04 - honufa: Plus I didnt want to spend a lot 😔
2024-07-17, 17:26 - Dad: <Media omitted>
2024-07-17, 17:28 - honufa: <Media omitted>
2024-07-17, 17:28 - honufa: <Media omitted>
2024-07-17, 17:28 - honufa: <Media omitted>
2024-07-17, 17:28 - honufa: <Media omitted>
2024-07-17, 17:28 - honufa: <Media omitted>
2024-07-17, 17:28 - honufa: He probably yelled at them after this 😭
2024-07-17, 20:20 - Mum: Bilal honufa sultan 3 roses
2024-07-18, 11:49 - honufa: I played an official superdrug game and they gave me a code for a free shower gel at the end 😭
`,
        language: 'en'
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
