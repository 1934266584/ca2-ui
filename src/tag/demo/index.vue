<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-tag>{{ t('tag') }}</ca2-tag>
      <ca2-tag type="primary">{{ t('tag') }}</ca2-tag>
      <ca2-tag type="success">{{ t('tag') }}</ca2-tag>
      <ca2-tag type="danger">{{ t('tag') }}</ca2-tag>
      <ca2-tag type="warning">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('round')">
      <ca2-tag round>{{ t('tag') }}</ca2-tag>
      <ca2-tag round type="primary">{{ t('tag') }}</ca2-tag>
      <ca2-tag round type="success">{{ t('tag') }}</ca2-tag>
      <ca2-tag round type="danger">{{ t('tag') }}</ca2-tag>
      <ca2-tag round type="warning">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('mark')">
      <ca2-tag mark>{{ t('tag') }}</ca2-tag>
      <ca2-tag mark type="primary">{{ t('tag') }}</ca2-tag>
      <ca2-tag mark type="success">{{ t('tag') }}</ca2-tag>
      <ca2-tag mark type="danger">{{ t('tag') }}</ca2-tag>
      <ca2-tag mark type="warning">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('plain')">
      <ca2-tag plain>{{ t('tag') }}</ca2-tag>
      <ca2-tag plain type="primary">{{ t('tag') }}</ca2-tag>
      <ca2-tag plain type="success">{{ t('tag') }}</ca2-tag>
      <ca2-tag plain type="danger">{{ t('tag') }}</ca2-tag>
      <ca2-tag plain type="warning">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('customColor')">
      <ca2-tag color="#f2826a">{{ t('tag') }}</ca2-tag>
      <ca2-tag color="#f2826a" plain>{{ t('tag') }}</ca2-tag>
      <ca2-tag color="#7232dd">{{ t('tag') }}</ca2-tag>
      <ca2-tag color="#7232dd" plain>{{ t('tag') }}</ca2-tag>
      <ca2-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('customSize')">
      <ca2-tag type="success">{{ t('tag') }}</ca2-tag>
      <ca2-tag type="success" size="medium">{{ t('tag') }}</ca2-tag>
      <ca2-tag type="success" size="large">{{ t('tag') }}</ca2-tag>
    </demo-block>

    <demo-block :title="t('closeable')">
      <ca2-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ t('tag') }}
      </ca2-tag>
      <ca2-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ t('tag') }}
      </ca2-tag>
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

<style lang="scss">
@import '../../style/var.scss';

.demo-tag {
  background-color: $white;

  .ca2-tag + .ca2-tag {
    margin-left: $padding-xs;
  }

  .ca2-tag {
    &:first-of-type {
      margin-left: $padding-md;
    }
  }
}
</style>
