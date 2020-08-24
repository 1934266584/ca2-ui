<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-sticky>
        <ca2-button type="primary" style="margin-left: 15px;">
          {{ t('basicUsage') }}
        </ca2-button>
      </ca2-sticky>
    </demo-block>

    <demo-block :title="t('offsetTop')">
      <ca2-sticky :offset-top="50">
        <ca2-button type="info" style="margin-left: 115px;">
          {{ t('offsetTop') }}
        </ca2-button>
      </ca2-sticky>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('setContainer')">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <ca2-sticky :container="container">
          <ca2-button type="warning" style="margin-left: 215px;">
            {{ t('setContainer') }}
          </ca2-button>
        </ca2-sticky>
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

<style lang="scss">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .ca2-button {
    margin-left: $padding-md;
  }
}
</style>
