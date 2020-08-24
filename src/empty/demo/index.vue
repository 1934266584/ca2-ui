<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <ca2-tabs v-model="active">
        <ca2-tab name="error" :title="t('error')">
          <ca2-empty image="error" :description="t('description')" />
        </ca2-tab>
        <ca2-tab name="network" :title="t('network')">
          <ca2-empty image="network" :description="t('description')" />
        </ca2-tab>
        <ca2-tab name="search" :title="t('search')">
          <ca2-empty image="search" :description="t('description')" />
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <ca2-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <ca2-empty :description="t('description')">
        <ca2-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </ca2-button>
      </ca2-empty>
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
    .ca2-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
  }
}
</style>
