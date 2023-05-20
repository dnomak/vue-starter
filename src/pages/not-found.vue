<script>
export default {
  name: 'PageNotFound',
}
</script>

<template lang="pug">
h1 {{ $t('Page not found.') }}
</template>

<style lang="scss" scoped>
h1 {
  font-size: 42rem;
  letter-spacing: -2rem;
  line-height: 1;
  font-weight: 800;
  padding-bottom: 8rem;
  color: var(--red-300);
}
</style>
