<script setup lang="ts">
import { ref, computed, defineEmits, onMounted, onUpdated } from 'vue';

const props = withDefaults(
  defineProps<{
    labelName: string;
    modelValue: string | null;
    maxTime?: string;
  }>(),
  {
    maxTime: '21:59'
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
        type="time"
        class="field-border h-10 w-full px-3 text-color-reg"
        :max="maxTime"
      />
    </div>
  </div>
</template>

<style scoped></style>
