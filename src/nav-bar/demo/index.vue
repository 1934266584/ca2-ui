<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-nav-bar
        :title="t('title')"
        :left-text="t('back')"
        :right-text="t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <zv-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
        <template #right>
          <zv-icon name="search" />
        </template>
      </zv-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
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
