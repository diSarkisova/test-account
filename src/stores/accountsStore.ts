import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountsStore = defineStore('accountStore',()=> {

const accountStore = ref([])
 
return 
    accountStore
})