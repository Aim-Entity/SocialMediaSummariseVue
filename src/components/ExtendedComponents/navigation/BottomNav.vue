<script setup lang="ts">
import { ref } from 'vue';
import UserInfo from '@/components/BaseComponents/navigation/UserInfo.vue';
import NavLinkList from '@/components/BaseComponents/navigation/NavLinkList.vue';

import dashboardIconMute from '@/assets/icons/home-mute.svg';
</script>

<template>
  <div class="default-page-padding h-12 flex items-center shadow-md w-full">
    <NavLinkList list-title="Dashboard" :list-icon-src="dashboardIconMute" />
  </div>
</template>
