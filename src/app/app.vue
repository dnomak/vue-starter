<script>
import Options from '@/components/options.vue'

export default {
  name: 'App',
  components: {
    Options,
  },
}
</script>

<template lang="pug">
div(:class="`route-${$route.name}`")
  Options
  .wrap.xl-flexbox.xl-center.xl-1.container
    .col
      router-view
      a.dnomak(href="https://github.com/dnomak/vue-starter" target="_blank")
        span.wrap.xl-auto.xl-middle.xl-center.xl-gutter-4
          span.col I
          span.col.love.icon
            font-awesome-icon(icon="fa-regular fa-heart")
            font-awesome-icon(icon="fa-solid fa-heart")
          span.col.love Love
          span.col JavaScript
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 24rem;
}
.dnomak {
  font-family: var(--source-code-pro);
  display: inline-block;
  color: var(--gray-500);
  font-weight: 600;
  line-height: 24rem;
  .col {
    font-size: 16rem;
  }
  .love {
    color: var(--red-300);
    &.icon {
      line-height: 0;
      font-size: 24rem;
    }
  }
  [data-prefix='fas'] {
    display: none;
  }
  &:hover {
    [data-prefix='far'] {
      display: none;
    }
    [data-prefix='fas'] {
      display: inline-block;
    }
  }
}
</style>
