<template>
  <div class="zv-doc-demo-block">
    <h2 class="zv-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    title: String,
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.zv-oc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @zv-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &:first-of-type {
    .zv-oc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
