export function removeOldLocalStorageData(storeName, storeVersion) {
  Object.keys(localStorage).forEach(key => {
    if (key.includes(storeName) && key != `${storeName}_v${storeVersion}`) {
      localStorage.removeItem(key)
    }
  })
}

export default {
  removeOldLocalStorageData,
}
