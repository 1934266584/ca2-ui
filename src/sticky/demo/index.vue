<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-sticky>
        <zv-button type="primary" style="margin-left: 15px;">
          {{ t('basicUsage') }}
        </zv-button>
      </zv-sticky>
    </demo-block>

    <demo-block :title="t('offsetTop')">
      <zv-sticky :offset-top="50">
        <zv-button type="info" style="margin-left: 115px;">
          {{ t('offsetTop') }}
        </zv-button>
      </zv-sticky>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('setContainer')">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <zv-sticky :container="container">
          <zv-button type="warning" style="margin-left: 215px;">
            {{ t('setContainer') }}
          </zv-button>
        </zv-sticky>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      setContainer: '指定容器',
    },
    'en-US': {
      offsetTop: 'Offset Top',
      setContainer: 'Set Container',
    },
  },

  data() {
    return {
      container: null,
    };
  },

  mounted() {
    this.container = this.$refs.container;
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .zv-button {
    margin-left: @padding-md;
  }
}
</style>
