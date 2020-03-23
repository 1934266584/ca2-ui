<template>
  <demo-section>
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <zv-button type="default">{{ t('default') }}</zv-button>
        <zv-button type="primary">{{ t('primary') }}</zv-button>
        <zv-button type="info">{{ t('info') }}</zv-button>
      </div>
      <zv-button type="danger">{{ t('danger') }}</zv-button>
      <zv-button type="warning">{{ t('warning') }}</zv-button>
    </demo-block>

    <demo-block :title="t('plain')">
      <zv-button plain type="primary" :text="t('plain')" />
      <zv-button plain type="info" :text="t('plain')" />
    </demo-block>

    <demo-block :title="t('hairline')">
      <zv-button plain hairline type="primary" :text="t('hairlineButton')" />
      <zv-button plain hairline type="info" :text="t('hairlineButton')" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <zv-button disabled type="primary" :text="t('disabled')" />
      <zv-button disabled type="info" :text="t('disabled')" />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <zv-button loading type="primary" />
      <zv-button loading type="primary" loading-type="spinner" />
      <zv-button loading :loading-text="t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="t('shape')">
      <zv-button type="primary" square :text="t('square')" />
      <zv-button type="info" round :text="t('round')" />
    </demo-block>

    <demo-block :title="t('icon')">
      <zv-button type="primary" icon="star-o" />
      <zv-button type="primary" icon="star-o" :text="t('button')" />
      <zv-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/vant/logo.png"
        :text="t('button')"
      />
    </demo-block>

    <demo-block :title="t('size')">
      <zv-button type="primary" size="large">{{ t('large') }}</zv-button>
      <zv-button type="primary" size="normal">{{ t('normal') }}</zv-button>
      <zv-button type="primary" size="small">{{ t('small') }}</zv-button>
      <zv-button type="primary" size="mini">{{ t('mini') }}</zv-button>
    </demo-block>

    <demo-block :title="t('blockElement')">
      <zv-button type="primary" block>{{ t('blockElement') }}</zv-button>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('router')">
      <zv-button
        :text="t('urlRoute')"
        type="primary"
        url="/vant/mobile.html"
      />
      <zv-button :text="t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <zv-button color="#7232dd" :text="t('pure')" />
      <zv-button plain color="#7232dd" :text="t('pure')" />
      <zv-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        :text="t('gradient')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      blockElement: '块级元素',
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient',
      blockElement: 'Block Element',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  background: @white;

  .zv-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .zv-doc-demo-block {
    padding: 0 @padding-md;
  }

  .zv-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
