<script setup lang="ts">
import { ref } from 'vue';

type statusOptions = 'Basic' | 'Premium';

const props = defineProps<{
  username: string;
  userMembershipStatus: statusOptions;
}>();
</script>

<template>
  <div class="flex gap-2">
    <img src="@/assets/icons/avatar.svg" alt="" class="w-10 h-10" />

    <div class="">
      <p class="text-color-reg text-style-bold text-sm">{{ username }}</p>
      <p class="text-color-mute text-xs">{{ userMembershipStatus }}</p>
    </div>
  </div>
</template>
