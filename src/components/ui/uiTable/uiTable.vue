<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="ui-table"
    hide-default-footer
    :items-per-page="-1"
  >
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="{ ...scope }" />
    </template>

    <template #no-data>
      <div class="text-center py-4">Ещё ничего не добавлено</div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import type { ITableHeader, ITableItem } from './uiTable.types';

const props = defineProps<{
  headers: ITableHeader[];
  items: ITableItem[];
}>();

</script>

<script lang="ts">
export default {
  name: "UiTable",
};
</script>

<style scoped>
.ui-table :deep(tbody tr) {
  height: 60px; 
}

.ui-table :deep(tbody tr td) {
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 8px solid transparent !important; 
}
</style>