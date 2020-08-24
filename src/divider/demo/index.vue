<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-divider />
    </demo-block>

    <demo-block :title="t('withText')">
      <ca2-divider>
        {{ t('text') }}
      </ca2-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
      <ca2-divider content-position="left">
        {{ t('text') }}
      </ca2-divider>

      <ca2-divider content-position="right">
        {{ t('text') }}
      </ca2-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
      <ca2-divider dashed :hairline="false">
        {{ t('text') }}
      </ca2-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <ca2-divider
        :style="{ borderColor: BLUE, color: BLUE, padding: '0 16px' }"
      >
        {{ t('text') }}
      </ca2-divider>
    </demo-block>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式',
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style',
    },
  },

  data() {
    return {
      BLUE,
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-divider {
  background-color: $white;

  .van-doc-demo-block__title {
    padding-top: $padding-md;
  }
}
</style>
