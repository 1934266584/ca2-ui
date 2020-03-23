<template>
  <div :class="['zv-doc-simulator', { 'zv-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'zv-doc-simulator',

  props: {
    src: String,
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px',
      };
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.zv-doc-simulator {
  position: absolute;
  top: @zv-doc-padding + @zv-doc-header-top-height;
  right: @zv-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: @zv-doc-simulator-width;
  min-width: @zv-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: @zv-doc-border-radius;
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: @zv-doc-row-max-width) {
    right: 50%;
    margin-right: -@zv-doc-row-max-width / 2 + 40px;
  }

  &-fixed {
    position: fixed;
    top: @zv-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
