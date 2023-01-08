export function cacheControlForLocalStorage(
  storeName: string,
  storeVersion: string
) {
  Object.keys(localStorage).forEach(key => {
    if (key.includes(storeName) && key != `${storeName}_v${storeVersion}`) {
      localStorage.removeItem(key)
    }
  })
}

export default {
  cacheControlForLocalStorage,
}
