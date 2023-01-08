<script lang="ts">
import { mapStores } from 'pinia'
import { useOptionsStore } from '@/modules/options/store'

export default {
  name: 'ComponentOptions',
  created() {
    this.changeLocale(
      !this.optionsStore.locale ? this.$i18n.locale : this.optionsStore.locale
    )
  },
  computed: {
    ...mapStores(useOptionsStore),
  },
  methods: {
    changeLocale(value: string) {
      this.$i18n.locale = value
      this.optionsStore.changeLocale(value)
    },
  },
}
</script>

<template lang="pug">
.options
  .options-title {{ $t('LANGUAGE OPTIONS:') }}
  .wrap.xl-2.xl-gutter-8
    .col(v-for="locale in $i18n.availableLocales")
      .options-item(@click="changeLocale(locale)" :class="{ 'active': optionsStore.locale == locale}")
        | {{ $t('Language', locale) }}
</template>

<style lang="scss" scoped>
.options {
  position: absolute;
  top: 24rem;
  right: 24rem;
  display: inline-block;
  background-color: var(--white);
  padding: 0 16rem 8rem 16rem;
  border-radius: 8rem;
  width: 100%;
  max-width: 280rem;
  text-align: center;
}
.options-title {
  color: var(--gray-500);
  font-size: 12rem;
  font-weight: 700;
  padding-top: 16rem;
  padding-bottom: 4rem;
  text-transform: uppercase;
}
.options-item {
  cursor: pointer;
  padding: 4rem 8rem;
  border: 2rem solid var(--gray-300);
  border-radius: 4rem;
  font-weight: 700;
  text-align: center;
  font-size: 14rem;
  margin-bottom: 8rem;
  &.active {
    background-color: var(--gray-300);
  }
}
</style>
