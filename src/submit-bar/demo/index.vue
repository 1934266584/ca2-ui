<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-submit-bar
        :price="3050"
        :button-text="t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="t('disabled')">
      <ca2-submit-bar
        disabled
        :price="3050"
        :button-text="t('submit')"
        :tip="t('tip1')"
        tip-icon="info-o"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <ca2-submit-bar
        loading
        :price="3050"
        :button-text="t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <ca2-submit-bar
        :price="3050"
        :button-text="t('submit')"
        @submit="onClickButton"
      >
        <ca2-checkbox v-model="checked">{{ t('check') }}</ca2-checkbox>
        <template #tip>
          {{ t('tip2') }}
          <span class="edit-address" @click="onClickLink">
            {{ t('tip3') }}
          </span>
        </template>
      </ca2-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交订单',
      tip1: '你的收货地址不支持同城送, 我们已为你推荐快递',
      tip2: '你的收货地址不支持同城送, ',
      tip3: '修改地址',
      check: '全选',
      clickButton: '点击按钮',
      clickLink: '修改地址',
    },
    'en-US': {
      submit: 'Submit',
      tip1: 'Some tips',
      tip2: 'Some tips, ',
      tip3: 'Link',
      check: 'Label',
      clickButton: 'Click button',
      clickLink: 'Click Link',
    },
  },

  data() {
    return {
      checked: true,
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.t('clickButton'));
    },
    onClickLink() {
      this.$toast(this.t('clickLink'));
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-submit-bar {
  .ca2-submit-bar {
    position: relative;
    padding-bottom: 0;
  }

  .edit-address {
    color: $blue;
  }

  .ca2-checkbox {
    margin-right: $padding-sm;
  }
}
</style>
