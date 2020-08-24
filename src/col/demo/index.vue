<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-row>
        <ca2-col span="8">span: 8</ca2-col>
        <ca2-col span="8">span: 8</ca2-col>
        <ca2-col span="8">span: 8</ca2-col>
      </ca2-row>

      <ca2-row>
        <ca2-col span="4">span: 4</ca2-col>
        <ca2-col span="10" offset="4">
          offset: 4, span: 10
        </ca2-col>
      </ca2-row>

      <ca2-row>
        <ca2-col offset="12" span="12">
          offset: 12, span: 12
        </ca2-col>
      </ca2-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <ca2-row gutter="20">
        <ca2-col span="8">span: 8</ca2-col>
        <ca2-col span="8">span: 8</ca2-col>
        <ca2-col span="8">span: 8</ca2-col>
      </ca2-row>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title3')">
      <ca2-row type="flex">
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
      </ca2-row>

      <ca2-row type="flex" justify="center">
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
      </ca2-row>

      <ca2-row type="flex" justify="end">
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
      </ca2-row>

      <ca2-row type="flex" justify="space-between">
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
      </ca2-row>

      <ca2-row type="flex" justify="space-around">
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
        <ca2-col span="6">span: 6</ca2-col>
      </ca2-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局',
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout',
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-col {
  background: $white;

  .van-doc-demo-block {
    padding: 0 $padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .ca2-col {
    margin-bottom: 10px;
    color: $white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
