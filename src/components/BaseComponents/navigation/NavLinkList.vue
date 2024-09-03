<script setup lang="ts">
import { ref } from 'vue';

type linkObject = {
  link: string;
  title: string;
};

const props = withDefaults(
  defineProps<{
    listTitle: string;
    listIconSrc: string;
    active: boolean;
    links: linkObject[];
  }>(),
  {
    active: () => false,
    links: () => []
  }
);
</script>

<template>
  <div class="group/appear h-10 content-center">
    <div class="flex gap-1">
      <img :src="listIconSrc" alt="Icon" />
      <p
        :class="
          active ? 'ml-1 text-sm cursor-pointer text-color-green' : 'ml-1 text-sm cursor-pointer'
        "
      >
        {{ listTitle }}
      </p>
      <img
        v-if="active"
        src="@/assets/icons/down-chev-active.svg"
        class="cursor-pointer"
        alt="Arrow"
      />
      <img v-else src="@/assets/icons/down-chev-mute.svg" class="cursor-pointer" alt="Arrow" />
    </div>

    <div
      v-if="links.length != 0"
      class="absolute py-6 px-4 bg-white border mt-2 transition transform translate-y-2 ease-in invisible group-hover/appear:visible group-hover/appear:translate-y-0"
    >
      <ul class="flex flex-col gap-3">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.link" class="flex justify-between gap-10 cursor-pointer group/underline">
            <p class="text-color-mute group-hover/underline:underline">{{ link.title }}</p>
            <img src="@/assets/icons/right-chev-mute.svg" alt="Arrow" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
