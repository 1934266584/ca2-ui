<template>
  <demo-section>
    <demo-block :title="t('alert1')">
      <zv-button type="primary" @click="onClickAlert">
        {{ t('alert1') }}
      </zv-button>
      <zv-button type="primary" @click="onClickAlert2">
        {{ t('alert2') }}
      </zv-button>
    </demo-block>

    <demo-block :title="t('confirm')">
      <zv-button type="primary" @click="onClickConfirm">
        {{ t('confirm') }}
      </zv-button>
    </demo-block>

    <demo-block :title="t('asyncClose')">
      <zv-button type="primary" @click="onClickAsyncClose">
        {{ t('asyncClose') }}
      </zv-button>
    </demo-block>

    <demo-block :title="t('componentCall')">
      <zv-button type="primary" @click="show = true">
        {{ t('componentCall') }}
      </zv-button>
      <zv-dialog
        v-model="show"
        :title="t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <img :src="image" />
      </zv-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      alert1: '提示弹窗',
      alert2: '提示弹窗（无标题）',
      confirm: '确认弹窗',
      asyncClose: '异步关闭',
      componentCall: '组件调用',
      content: '代码是写出来给人看的，附带能在机器上运行',
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog',
      asyncClose: 'Async Close',
      componentCall: 'Component Call',
    },
  },

  data() {
    return {
      show: false,
      currentRate: 0,
      image: 'https://img.yzcdn.cn/vant/apple-3.jpg',
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.t('title'),
        message: this.t('content'),
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.t('content'),
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.t('title'),
        message: this.t('content'),
      });
    },

    onClickAsyncClose() {
      function beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: this.t('title'),
        message: this.t('content'),
        beforeClose,
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-dialog {
  background-color: $white;

  .zv-doc-demo-block > .zv-button {
    margin-left: $padding-md;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
