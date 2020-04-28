<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <zv-tabs v-model="active">
        <zv-tab name="error" :title="t('error')">
          <zv-empty image="error" :description="t('description')" />
        </zv-tab>
        <zv-tab name="network" :title="t('network')">
          <zv-empty image="network" :description="t('description')" />
        </zv-tab>
        <zv-tab name="search" :title="t('search')">
          <zv-empty image="search" :description="t('description')" />
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <zv-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <zv-empty :description="t('description')">
        <zv-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </zv-button>
      </zv-empty>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      error: '通用错误',
      search: '搜索提示',
      network: '网络错误',
      imageType: '图片类型',
      description: '描述文字',
      customImage: '自定义图片',
      bottomContent: '底部内容',
    },
    'en-US': {
      error: 'Error',
      search: 'Search',
      network: 'Network',
      imageType: 'Image Type',
      description: 'Description',
      customImage: 'Custom Image',
      bottomContent: 'Bottom Content',
    },
  },

  data() {
    return {
      active: 'error',
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-empty {
  background: $white;

  .custom-image {
    .zv-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
  }
}
</style>
