<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('discountInfo')">
      <ca2-card
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
      <ca2-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <ca2-tag plain type="danger" style="margin-right: 5px;">
              标签
            </ca2-tag>
            <ca2-tag plain type="danger">
              标签
            </ca2-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <ca2-button round size="mini">
              {{ t('button') }}
            </ca2-button>
            <ca2-button round size="mini">
              {{ t('button') }}
            </ca2-button>
          </div>
        </template>
      </ca2-card>
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
