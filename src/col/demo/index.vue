<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-row>
        <zv-col span="8">span: 8</zv-col>
        <zv-col span="8">span: 8</zv-col>
        <zv-col span="8">span: 8</zv-col>
      </zv-row>

      <zv-row>
        <zv-col span="4">span: 4</zv-col>
        <zv-col span="10" offset="4">
          offset: 4, span: 10
        </zv-col>
      </zv-row>

      <zv-row>
        <zv-col offset="12" span="12">
          offset: 12, span: 12
        </zv-col>
      </zv-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <zv-row gutter="20">
        <zv-col span="8">span: 8</zv-col>
        <zv-col span="8">span: 8</zv-col>
        <zv-col span="8">span: 8</zv-col>
      </zv-row>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title3')">
      <zv-row type="flex">
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
      </zv-row>

      <zv-row type="flex" justify="center">
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
      </zv-row>

      <zv-row type="flex" justify="end">
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
      </zv-row>

      <zv-row type="flex" justify="space-between">
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
      </zv-row>

      <zv-row type="flex" justify="space-around">
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
        <zv-col span="6">span: 6</zv-col>
      </zv-row>
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

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .zv-doc-demo-block {
    padding: 0 @padding-md;
  }

  .zv-doc-demo-block__title {
    padding-left: 0;
  }

  .zv-col {
    margin-bottom: 10px;
    color: @white;
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
