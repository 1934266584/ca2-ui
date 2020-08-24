<template>
  <demo-section>
    <demo-block :title="t('type')">
      <ca2-loading />
      <ca2-loading type="spinner" />
    </demo-block>

    <demo-block :title="t('color')">
      <ca2-loading color="#1989fa" />
      <ca2-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block :title="t('size')">
      <ca2-loading size="24" />
      <ca2-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="t('text')">
      <ca2-loading size="24px">
        {{ t('loading') }}
      </ca2-loading>
    </demo-block>

    <demo-block :title="t('vertical')">
      <ca2-loading size="24px" vertical>
        {{ t('loading') }}
      </ca2-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      text: '加载文案',
      size: '自定义大小',
      color: '自定义颜色',
      vertical: '垂直排列',
    },
    'en-US': {
      type: 'Type',
      text: 'Text',
      size: 'Size',
      color: 'Color',
      vertical: 'Vertical',
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-loading {
  background: $white;

  .ca2-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
