<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-tag>{{ t('tag') }}</zv-tag>
      <zv-tag type="primary">{{ t('tag') }}</zv-tag>
      <zv-tag type="success">{{ t('tag') }}</zv-tag>
      <zv-tag type="danger">{{ t('tag') }}</zv-tag>
      <zv-tag type="warning">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('round')">
      <zv-tag round>{{ t('tag') }}</zv-tag>
      <zv-tag round type="primary">{{ t('tag') }}</zv-tag>
      <zv-tag round type="success">{{ t('tag') }}</zv-tag>
      <zv-tag round type="danger">{{ t('tag') }}</zv-tag>
      <zv-tag round type="warning">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('mark')">
      <zv-tag mark>{{ t('tag') }}</zv-tag>
      <zv-tag mark type="primary">{{ t('tag') }}</zv-tag>
      <zv-tag mark type="success">{{ t('tag') }}</zv-tag>
      <zv-tag mark type="danger">{{ t('tag') }}</zv-tag>
      <zv-tag mark type="warning">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('plain')">
      <zv-tag plain>{{ t('tag') }}</zv-tag>
      <zv-tag plain type="primary">{{ t('tag') }}</zv-tag>
      <zv-tag plain type="success">{{ t('tag') }}</zv-tag>
      <zv-tag plain type="danger">{{ t('tag') }}</zv-tag>
      <zv-tag plain type="warning">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('customColor')">
      <zv-tag color="#f2826a">{{ t('tag') }}</zv-tag>
      <zv-tag color="#f2826a" plain>{{ t('tag') }}</zv-tag>
      <zv-tag color="#7232dd">{{ t('tag') }}</zv-tag>
      <zv-tag color="#7232dd" plain>{{ t('tag') }}</zv-tag>
      <zv-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('customSize')">
      <zv-tag type="success">{{ t('tag') }}</zv-tag>
      <zv-tag type="success" size="medium">{{ t('tag') }}</zv-tag>
      <zv-tag type="success" size="large">{{ t('tag') }}</zv-tag>
    </demo-block>

    <demo-block :title="t('closeable')">
      <zv-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ t('tag') }}
      </zv-tag>
      <zv-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ t('tag') }}
      </zv-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
    },
  },

  data() {
    return {
      show: {
        primary: true,
        success: true,
      },
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .zv-tag + .zv-tag {
    margin-left: @padding-xs;
  }

  .zv-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
