<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-row>
        <zv-image width="100" height="100" :src="image" />
      </zv-row>
    </demo-block>

    <demo-block :title="t('fitMode')">
      <zv-row gutter="20">
        <zv-col v-for="fit in fits" span="8" :key="fit">
          <zv-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </zv-col>
      </zv-row>
    </demo-block>

    <demo-block :title="t('round')">
      <zv-row gutter="20">
        <zv-col v-for="fit in fits" span="8" :key="fit">
          <zv-image round :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </zv-col>
      </zv-row>
    </demo-block>

    <demo-block :title="t('loading')">
      <zv-row gutter="20">
        <zv-col span="8">
          <zv-image width="100%" height="27vw" />
          <div class="text">{{ t('defaultTip') }}</div>
        </zv-col>

        <zv-col span="8">
          <zv-image width="100%" height="27vw">
            <template #loading>
              <zv-loading type="spinner" size="20" />
            </template>
          </zv-image>
          <div class="text">{{ t('customTip') }}</div>
        </zv-col>
      </zv-row>
    </demo-block>

    <demo-block :title="t('error')">
      <zv-row gutter="20">
        <zv-col span="8">
          <zv-image width="100%" height="27vw" src="x" />
          <div class="text">{{ t('defaultTip') }}</div>
        </zv-col>

        <zv-col span="8">
          <zv-image width="100%" height="27vw" src="x">
            <template #error>{{ t('loadFail') }}</template>
          </zv-image>
          <div class="text">{{ t('customTip') }}</div>
        </zv-col>
      </zv-row>
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

<style lang="less">
@import '../../style/var';

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .zv-ow {
    padding: 0 @padding-md;
  }

  .zv-ol {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
