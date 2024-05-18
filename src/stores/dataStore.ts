import { defineStore } from "pinia";
import { ref } from "vue";
export const useDataStore =defineStore('datastore',()=>{
    const name=ref('vishnue')
    return {
        name
    }
})