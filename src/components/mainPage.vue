<template>
  <v-container class="fill-height" max-width="900">
    <div>
      <v-col v-for="item in accounts" :key="item.id">
 <accounts-form :accounts="item"></accounts-form>
      </v-col>
     
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useAccountsStore } from '@/stores/accountsStore';
import accountsForm from './accountsForm/accountsForm.vue';
import { storeToRefs } from 'pinia';

const accountsStore = useAccountsStore()

const { accounts } = storeToRefs(accountsStore)

</script>
