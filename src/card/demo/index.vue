<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('discountInfo')">
      <zv-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="t('tag')"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('customContent')">
      <zv-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <zv-tag plain type="danger" style="margin-right: 5px;">
              标签
            </zv-tag>
            <zv-tag plain type="danger">
              标签
            </zv-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <zv-button round size="mini">
              {{ t('button') }}
            </zv-button>
            <zv-button round size="mini">
              {{ t('button') }}
            </zv-button>
          </div>
        </template>
      </zv-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '商品名称',
      discountInfo: '营销信息',
      customContent: '自定义内容',
    },
    'en-US': {
      discountInfo: 'Discount Info',
      customContent: 'Custom Content',
    },
  },

  data() {
    return {
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-card {
  background-color: $white;
}
</style>
