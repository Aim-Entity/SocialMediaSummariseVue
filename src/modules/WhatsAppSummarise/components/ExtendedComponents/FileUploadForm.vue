<script setup lang="ts">
import { ref } from 'vue';
import FormField from '@/components/BaseComponents/FormField.vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
import { useSubmitForm } from '@/modules/WhatsAppSummarise/composable/useSubmitForm';

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
  updateStartDateTime(
    formFieldValues.value.dateValue as string,
    formFieldValues.value.timeValue as string
  );
};

let updateFileModel = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  formFieldValues.value.fileValue = files;
};
</script>

<template>
  <div>
    <form @submit.prevent="SubmitForm">
      <FormField
        label-name="Drop File Or Click To Upload"
        :is-file-input="true"
        v-model:model-value="nullValue"
        :file-func="updateFileModel"
      />
      <div class="flex justify-between mt-5">
        <FormField
          label-name="Select Date"
          field-type="date"
          v-model="formFieldValues.dateValue"
          :formal-date-formatting="true"
        />
        <FormField label-name="Select Time" field-type="time" v-model="formFieldValues.timeValue" />
      </div>
      <FormButton button-label="Submit" />
      <br />

      <p>{{ formFieldValues.dateValue }}</p>
      <p>{{ formFieldValues.timeValue }}</p>
    </form>
  </div>
</template>
