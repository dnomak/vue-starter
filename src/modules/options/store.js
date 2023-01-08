import { defineStore } from 'pinia'
import { cacheControlForLocalStorage } from '@/modules/utils'

const storeName = 'options'
const storeVersion = '0.1.0'

export const useOptionsStore = defineStore(storeName, {
  state: () => {
    return {
      locale: '',
    }
  },
  actions: {
    changeLocale(value) {
      this.locale = value
    },
  },
  persist: {
    storage: localStorage,
    paths: ['locale'],
    key: `${storeName}_v${storeVersion}`,
  },
})

cacheControlForLocalStorage(storeName, storeVersion)
