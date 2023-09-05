<template>
  <HoppSmartTabs
    v-model="selectedNavigationTab"
    styles="sticky overflow-x-auto flex-shrink-0 bg-primary z-10 top-0"
    vertical
    render-inactive-tabs
  >
    <HoppSmartTab
      :id="'history'"
      :icon="IconClock"
      :label="`${t('tab.history')}`"
    >
      <History :page="'websocket'" />
    </HoppSmartTab>
  </HoppSmartTabs>
</template>

<script setup lang="ts">
import IconClock from "~icons/lucide/clock"
import { ref } from "vue"
import { useI18n } from "@composables/i18n"

const t = useI18n()

type RequestOptionTabs = "history"

const selectedNavigationTab = ref<RequestOptionTabs>("history")
</script>
