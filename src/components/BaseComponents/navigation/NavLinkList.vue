<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    listTitle: string;
    listIconSrc: string;
    active: boolean;
  }>(),
  {
    active: () => false
  }
);
</script>

<template>
  <div class="group/appear h-10 content-center">
    <div class="flex gap-1">
      <img :src="listIconSrc" alt="Icon" />
      <p class="ml-1 text-sm cursor-pointer">{{ listTitle }}</p>
      <img src="@/assets/icons/down-chev-mute.svg" class="cursor-pointer" alt="Arrow" />
    </div>

    <div
      class="absolute py-6 px-4 bg-white border mt-2 transition transform translate-y-2 ease-in invisible group-hover/appear:visible group-hover/appear:translate-y-0"
    >
      <ul class="flex flex-col gap-3">
        <li class="flex justify-between gap-10 cursor-pointer group/underline">
          <p class="text-color-mute group-hover/underline:underline">WhatsApp Summarise</p>
          <img src="@/assets/icons/right-chev-mute.svg" alt="Arrow" />
        </li>
        <li class="flex justify-between gap-10 cursor-pointer group/underline">
          <p class="text-color-mute group-hover/underline:underline">Text Detection</p>
          <img src="@/assets/icons/right-chev-mute.svg" alt="Arrow" />
        </li>
        <li class="flex justify-between gap-10 cursor-pointer group/underline">
          <p class="text-color-mute group-hover/underline:underline">Something Else</p>
          <img src="@/assets/icons/right-chev-mute.svg" alt="Arrow" />
        </li>
      </ul>
    </div>
  </div>
</template>
