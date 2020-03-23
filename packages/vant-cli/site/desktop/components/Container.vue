<template>
  <div
    class="zv-doc-container zv-doc-row"
    :class="{ 'zv-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zv-doc-container',

  props: {
    hasSimulator: Boolean,
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.zv-doc-container {
  box-sizing: border-box;
  padding-left: @zv-doc-nav-width;
  overflow: hidden;

  &--with-simulator {
    padding-right: @zv-doc-simulator-width + @zv-doc-padding;
  }
}
</style>
