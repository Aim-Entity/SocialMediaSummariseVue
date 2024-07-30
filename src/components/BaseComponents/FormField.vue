<script setup lang="ts">
import { ref } from 'vue';

type FieldTypeOptions = 'text' | 'email' | 'time';
withDefaults(
  defineProps<{
    labelName: string;
    fieldType?: FieldTypeOptions;
  }>(),
  {
    fieldType: 'text'
  }
);
</script>

<template>
  <label class="form-label">{{ labelName }}</label>
  <input :type="fieldType" />
</template>
