<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    buttonLabel?: string;
    customStyling?: string;
    formId?: string;
  }>(),
  {
    buttonLabel: 'Submit',
    customStyling:
      'h-10 w-full border-r-4 border-none flex justify-center items-center bg-gray-200 text-gray-500 hover:bg-gray-300 transition-all ease-in duration-200 cursor-pointer text-base'
  }
);
</script>

<template>
  <button v-if="formId" :class="customStyling" type="submit" :form="formId">
    {{ buttonLabel }}
  </button>
  <button v-else :class="customStyling" type="submit">
    {{ buttonLabel }}
  </button>
</template>
