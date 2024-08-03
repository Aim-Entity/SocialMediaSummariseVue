<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    buttonLabel?: string;
  }>(),
  {
    buttonLabel: 'Submit'
  }
);
</script>

<template>
  <button type="submit">{{ buttonLabel }}</button>
</template>
