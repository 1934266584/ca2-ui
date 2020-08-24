<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-collapse v-model="active1">
        <ca2-collapse-item :title="t('title') + 1">
          {{ t('text') }}
        </ca2-collapse-item>
        <ca2-collapse-item :title="t('title') + 2">
          {{ t('text') }}
        </ca2-collapse-item>
        <ca2-collapse-item :title="t('title') + 3" disabled>
          {{ t('text') }}
        </ca2-collapse-item>
      </ca2-collapse>
    </demo-block>

    <demo-block :title="t('accordion')">
      <ca2-collapse v-model="active2" accordion>
        <ca2-collapse-item :title="t('title') + 1">
          {{ t('text') }}
        </ca2-collapse-item>
        <ca2-collapse-item :title="t('title') + 2">
          {{ t('text') }}
        </ca2-collapse-item>
        <ca2-collapse-item :title="t('title') + 3">
          {{ t('text') }}
        </ca2-collapse-item>
      </ca2-collapse>
    </demo-block>

    <demo-block :title="t('titleSlot')">
      <ca2-collapse v-model="active3">
        <ca2-collapse-item>
          <template #title>
            {{ t('title') + 1 }}<ca2-icon name="question-o" />
          </template>
          {{ t('text') }}
        </ca2-collapse-item>
        <ca2-collapse-item
          :title="t('title') + 2"
          :value="t('content')"
          icon="shop-o"
        >
          {{ t('text') }}
        </ca2-collapse-item>
      </ca2-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行',
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content',
    },
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: [],
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-collapse {
  .ca2-icon-question-o {
    margin-left: 5px;
    color: $blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
