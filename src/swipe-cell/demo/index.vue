<template>
  <div>
    <demo-section>
      <demo-block :title="t('basicUsage')">
        <zv-swipe-cell>
          <template #left>
            <zv-button square type="primary" :text="t('select')" />
          </template>
          <zv-cell :border="false" :title="t('title')" :value="t('content')" />
          <template #right>
            <zv-button square type="danger" :text="t('delete')" />
            <zv-button square type="primary" :text="t('collect')" />
          </template>
        </zv-swipe-cell>
      </demo-block>

      <demo-block :title="t('customContent')">
        <zv-swipe-cell>
          <zv-card
            num="2"
            price="2.00"
            :desc="t('desc')"
            :title="t('cardTitle')"
            :thumb="imageURL"
          />
          <template #right>
            <zv-button
              square
              type="danger"
              class="delete-button"
              :text="t('delete')"
            />
          </template>
        </zv-swipe-cell>
      </demo-block>

      <demo-block :title="t('beforeClose')">
        <zv-swipe-cell :before-close="beforeClose">
          <template #left>
            <zv-button square type="primary" :text="t('select')" />
          </template>
          <zv-cell :border="false" :title="t('title')" :value="t('content')" />
          <template #right>
            <zv-button square type="danger" :text="t('delete')" />
          </template>
        </zv-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      select: '选择',
      delete: '删除',
      collect: '收藏',
      title: '单元格',
      confirm: '确定删除吗？',
      cardTitle: '商品标题',
      beforeClose: '异步关闭',
      customContent: '自定义内容',
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      title: 'Cell',
      confirm: 'Are you sure to delete?',
      cardTitle: 'Title',
      beforeClose: 'Before Close',
      customContent: 'Custom Content',
    },
  },

  data() {
    return {
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    };
  },

  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog
            .confirm({
              message: this.t('confirm'),
            })
            .then(() => {
              instance.close();
            });
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-swipe-cell {
  user-select: none;

  .zv-card {
    margin: 0;
    background-color: $white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>
