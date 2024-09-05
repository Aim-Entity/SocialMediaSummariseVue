<script setup lang="ts">
import { ref, computed, defineEmits, onMounted, onUpdated } from 'vue';

const props = withDefaults(
  defineProps<{
    labelName: string;
    modelValue: string | null;
    fileFunc?: any;
  }>(),
  {}
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
    <label class="upload-border h-72 flex flex-col items-center justify-center cursor-pointer">
      <input type="file" @change="fileFunc" class="hidden" />
      <div class="flex flex-col items-center justify-center gap-1">
        <img src="@/assets/icons/upload.svg" alt="Upload Icon" />

        <h3 class="text-style-bold text-2xl upload-text-color">{{ labelName }}</h3>
      </div>
    </label>
  </div>
</template>

<style scoped>
.upload-border {
  border: 4px dashed #6d7080;
  border-radius: 2px;
}
.upload-text-color {
  color: #6d7080;
}
</style>
