<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-row>
        <ca2-image width="100" height="100" :src="image" />
      </ca2-row>
    </demo-block>

    <demo-block :title="t('fitMode')">
      <ca2-row gutter="20">
        <ca2-col v-for="fit in fits" span="8" :key="fit">
          <ca2-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </ca2-col>
      </ca2-row>
    </demo-block>

    <demo-block :title="t('round')">
      <ca2-row gutter="20">
        <ca2-col v-for="fit in fits" span="8" :key="fit">
          <ca2-image round :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </ca2-col>
      </ca2-row>
    </demo-block>

    <demo-block :title="t('loading')">
      <ca2-row gutter="20">
        <ca2-col span="8">
          <ca2-image width="100%" height="27vw" />
          <div class="text">{{ t('defaultTip') }}</div>
        </ca2-col>

        <ca2-col span="8">
          <ca2-image width="100%" height="27vw">
            <template #loading>
              <ca2-loading type="spinner" size="20" />
            </template>
          </ca2-image>
          <div class="text">{{ t('customTip') }}</div>
        </ca2-col>
      </ca2-row>
    </demo-block>

    <demo-block :title="t('error')">
      <ca2-row gutter="20">
        <ca2-col span="8">
          <ca2-image width="100%" height="27vw" src="x" />
          <div class="text">{{ t('defaultTip') }}</div>
        </ca2-col>

        <ca2-col span="8">
          <ca2-image width="100%" height="27vw" src="x">
            <template #error>{{ t('loadFail') }}</template>
          </ca2-image>
          <div class="text">{{ t('customTip') }}</div>
        </ca2-col>
      </ca2-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败',
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed',
    },
  },

  data() {
    return {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-image {
  overflow-x: hidden;
  background-color: $white;

  .ca2-row {
    padding: 0 $padding-md;
  }

  .ca2-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: $gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
