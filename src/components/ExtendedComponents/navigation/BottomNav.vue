<script setup lang="ts">
import { ref } from 'vue';
import UserInfo from '@/components/BaseComponents/navigation/UserInfo.vue';
import NavLinkList from '@/components/BaseComponents/navigation/NavLinkList.vue';

import dashboardIconMute from '@/assets/icons/home-mute.svg';
import appIconMute from '@/assets/icons/apps-active.svg';
import moreIconMute from '@/assets/icons/more-mute.svg';
import type { link } from 'fs';
</script>

<template>
  <div class="default-page-padding h-12 flex items-center shadow-md w-full gap-8">
    <NavLinkList
      list-title="Dashboards"
      :list-icon-src="dashboardIconMute"
      :links="[{ link: '#', title: 'Home' }]"
    />
    <NavLinkList
      list-title="Apps"
      :list-icon-src="appIconMute"
      :active="true"
      :links="[
        { link: '#', title: 'WhatsApp Summary' },
        { link: '#', title: 'Text Decoration' },
        { link: '#', title: 'Something Else' }
      ]"
    />
    <NavLinkList
      list-title="More"
      :list-icon-src="moreIconMute"
      :links="[{ link: '#', title: 'Contact' }]"
    />
  </div>
</template>
