<template><v-card   class="py-1"   color="surface-variant" rounded="lg" variant="tonal" >Приветики- {{ accounts.title }}</v-card></template>

   <!-- <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            variant="tonal"
          /> -->

          <script setup lang="ts">
import type { IProps } from './accounts.types';

        
const props = defineProps<IProps>()
        </script>