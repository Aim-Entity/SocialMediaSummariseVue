<script setup lang="ts">
import { ref, computed, defineEmits, onMounted, onUpdated } from 'vue';

const props = withDefaults(
  defineProps<{
    labelName: string;
    modelValue: string | null;
    minDate?: string;
    maxDate?: string;
  }>(),
  {
    minDate: '0000-01-01',
    maxDate: '3000-01-01'
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
  <div>
    <div class="flex flex-col gap-1">
      <label class="text-color-reg">{{ labelName }}</label>
      <input
        v-model="proxyValue"
        type="date"
        class="field-border h-10 w-full px-3 text-color-reg"
        :min="minDate"
        :max="maxDate"
      />
    </div>
  </div>
</template>

<style scoped></style>
