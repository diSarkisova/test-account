<template>
  <v-container
    class="fill-height d-flex align-center justify-center"
    max-width="900"
  >
    <div>
      <v-card class="pa-4">
        <v-row align-center class="mb-3">
          <v-col cols="auto">
            <h3 class="ma-0">Учетные записи</h3>
          </v-col>
          <v-spacer />
          <v-col cols="auto">
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-alert type="info" dense text class="mb-4">
          Для указания нескольких меток для одной пары логин/пароль используйте
          разделитель ;
        </v-alert>

        <!-- Передаем formData как массив из одного элемента -->
        <ui-table :headers="headers" :items="[formData]" class="accounts-table">
          <!-- Слот для меток -->
          <template #[`item.tags`]="{ item }">
            <v-text-field
              :model-value="item.tags"
              placeholder="XXX; YYYYY; ..."
              dense
              hide-details
              @update:model-value="onUpdateRowValue($event, 'tags')"
            />
          </template>

          <!-- Слот для типа записи -->
          <template #[`item.type`]="{ item }">
            <v-select
              :model-value="item.type"
              :items="typeOptions"
              dense
              hide-details
              @update:model-value="onUpdateRowValue($event, 'type')"
            />
          </template>

          <!-- Слот для логина -->
          <template #[`item.login`]="{ item }">
            <v-text-field
              :model-value="item.login"
              dense
              hide-details
              @update:model-value="onUpdateRowValue($event, 'login')"
            />
          </template>

          <!-- Слот для пароля -->
          <template #[`item.password`]="{ item }">
            <v-text-field
              :model-value="item.password"
              :type="item.showPassword ? 'text' : 'password'"
              dense
              hide-details
              :append-inner-icon="item.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="item.showPassword = !item.showPassword"
              @update:model-value="onUpdateRowValue($event, 'password')"
            />
          </template>

          <!-- Слот для действий -->
          <template #[`item.actions`]="{ item }">
            <v-btn variant="text" icon class="delete-row-btn">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </ui-table>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useAccountsStore } from "@/stores/accountsStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const accountsStore = useAccountsStore();
const { formData, headers } = storeToRefs(accountsStore);
const { onUpdateRowValue } = accountsStore;

const typeOptions = ["Локальная", "LDAP"];
</script>

<style scoped>
.fw-medium {
  font-weight: 500;
}

.accounts-table {
  width: 100%;
}
</style>
