<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="ui-table"
    hide-default-footer
    :items-per-page="-1"
  >
    <!-- Пробрасываем все слоты как у вас -->
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="{ ...scope }" />
    </template>

    <!-- Слот для пустого состояния -->
    <template #no-data>
      <div class="text-center py-4">Ещё ничего не добавлено</div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
defineProps<{
  headers: any[];
  items: any[];
}>();
</script>

<script lang="ts">
export default {
  name: "UiTable",
};
</script>
