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
            <v-btn icon @click="onAddRow">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-alert type="info" dense text-center class="mb-4">
          Для указания нескольких меток для одной пары логин/пароль используйте
          разделитель ;
        </v-alert>

        <ui-table
          :headers="HEADERS"
          :items="formData.infos"
          class="accounts-table"
        >
          <template #[`item.tags`]="{ item }">
            <v-text-field
              :model-value="item.tags"
              placeholder="XXX; YYYYY; ..."
              dense
              maxlength="50"
              :rules = "tagsRules"
              @update:model-value="onUpdateRowValue($event, 'tags', item)"
            />
          </template>

          <template #[`item.type`]="{ item }">
          <v-select
              :model-value="item.type"
              :items="TYPE_OPTIONS"
              dense
              @update:model-value="onUpdateRowValue($event, 'type', item)"
            />
          </template>

          <template #[`item.login`]="{ item }">
                  <v-text-field
              :model-value="item.login"
              dense
              maxlength="100"
              :error="item.loginError"
              :error-messages="item.loginError ? ['Поле обязательно'] : []"
              @update:model-value="onUpdateRowValue($event, 'login', item)"
              @blur="onUpdateRowValue(item.login, 'login', item)"
            />
          </template>

          <template #[`item.password`]="{ item }"  >

            <v-text-field
              v-if="item.type !== AccountType.LDAP"
              :model-value="item.password"
              :type="item.showPassword ? 'text' : 'password'"
              dense
              maxlength="100"
              required
              :append-inner-icon="item.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :error="item.passwordError"
              :error-messages="item.passwordError ? ['Поле обязательно'] : []"
              @click:append-inner="item.showPassword = !item.showPassword"
              @update:model-value="onUpdateRowValue($event, 'password', item)"
              @blur="onUpdateRowValue(item.password, 'password', item)"
            />
          </template>

          <template #[`item.actions`]="{ item }">
            <v-btn variant="text" icon class="delete-row-btn" @click="deleteAccount(item.id)">
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
import { HEADERS, TYPE_OPTIONS } from "./constants";
import uiTable from "../ui/uiTable/uiTable.vue";
import { onMounted } from "vue";
import { tagsRules } from "../ui/rules";
import { AccountType } from "./accountsForm.types";

const accountsStore = useAccountsStore();
const { formData } = storeToRefs(accountsStore);
const { onUpdateRowValue, onAddRow, loadFromLocalStorage,  setLocalStorage, deleteAccount } = accountsStore;

onMounted(()=> {
  loadFromLocalStorage()
})
</script>

<style scoped>
.fw-medium {
  font-weight: 500;
}

.accounts-table {
  width: 100%;
}

.wide-field {
  width: 200px;
}
</style>
