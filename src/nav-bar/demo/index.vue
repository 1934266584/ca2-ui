<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-nav-bar
        :title="t('title')"
        :left-text="t('back')"
        :right-text="t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="t('useSlot')">
      <ca2-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
        <template #right>
          <ca2-icon name="search" size="18" />
        </template>
      </ca2-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      useSlot: '使用插槽',
    },
    'en-US': {
      useSlot: 'Use Slot',
    },
  },

  methods: {
    onClickLeft() {
      this.$toast(this.t('back'));
    },
    onClickRight() {
      this.$toast(this.t('button'));
    },
  },
};
</script>
