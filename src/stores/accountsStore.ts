import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountsStore = defineStore('accountStore',()=> {

const accounts = ref([
    {
id: 1,
      title: 'Documentation',
    },
    {
id: 2,
      title: 'Features',
    },
    {
id: 3,
      title: 'Components',
    },
    {
id: 4,
      title: 'Community',
    },
  ])
 


return {accounts}
    
})