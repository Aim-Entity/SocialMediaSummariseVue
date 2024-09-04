<script setup lang="ts">
import { ref } from 'vue';
import FormButton from '@/components/BaseComponents/FormButton.vue';
</script>

<template>
  <div class="w-full h-12 border flex justify-between items-center px-2">
    <div class="flex items-center gap-2">
      <img src="@/assets/icons/files.svg" alt="Files" class="h-8" />
      <div>
        <p class="text-xs text-color-reg">FileExample.txt</p>
        <p class="text-[10px] text-color-reg"><b>16.6</b> KB</p>
      </div>
    </div>
    <FormButton
      button-label="Delete"
      custom-styling="w-16 h-8 text-sm rounded flex justify-center items-center bg-red-100 text-red-400 hover:bg-red-200 transition-all ease-in duration-200 text-base"
    />
  </div>
  <div class="mt-5 flex flex-col gap-2 justify-between text-sm">
    <p>Word Length - <b>1200</b></p>
    <p>Word Length - <b>1200</b></p>
    <p>Word Length - <b>1200</b></p>
    <p>Word Length - <b>1200</b></p>
  </div>
</template>

<style scoped></style>
