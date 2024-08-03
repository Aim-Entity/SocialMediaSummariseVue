<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';

type FieldTypeOptions = 'text' | 'email' | 'time' | 'date';

const props = withDefaults(
  defineProps<{
    labelName: string;
    fieldType?: FieldTypeOptions;
    modelValue: string | null;
    isFileInput?: boolean;
    fileFunc?: any;
  }>(),
  {
    fieldType: 'text',
    isFileInput: false
  }
);

const emit = defineEmits(['update:modelValue', 'update-file-model']);

const proxyValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  }
});
</script>

<template>
  <label class="form-label">{{ labelName }}</label>
  <input v-if="isFileInput == false" :type="fieldType" v-model="proxyValue" />
  <input v-else type="file" @change="fileFunc" />
</template>
