<script setup lang="ts">
import { ref } from 'vue';
import UserInfo from '@/components/BaseComponents/navigation/UserInfo.vue';
</script>

<template>
  <div class="border-b default-page-padding flex justify-between items-center h-[70px]">
    <div class="bg-slate-500 w-28 h-8 text-white text-style-bold flex justify-center items-center">
      Logo
    </div>
    <UserInfo username="Bilal Uddin" user-membership-status="Premium" />
  </div>
</template>
