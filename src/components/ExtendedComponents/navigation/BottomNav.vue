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
  <div
    class="default-page-padding max-sm:default-page-padding-mobile h-12 shadow-md w-full flex justify-between"
  >
    <img
      src="@/assets/icons/hamburger-temp.svg"
      alt=""
      class="w-8 cursor-pointer hidden max-sm:block"
    />

    <div class="flex items-center gap-8 max-sm:hidden">
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

    <div class="flex items-center gap-2 cursor-pointer max-sm:hidden">
      <img src="@/assets/icons/logout.svg" alt="" class="w-5" />
      <p class="text-color-mute">Logout</p>
    </div>
  </div>
</template>
