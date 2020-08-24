<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-cell-group>
        <ca2-cell :title="t('cell')" :value="t('content')" />
        <ca2-cell :title="t('cell')" :value="t('content')" pur-display />
        <ca2-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
        <ca2-cell :title="t('cell')" :value="t('content')" :label="t('desc')" is-row />
      </ca2-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <ca2-cell :title="t('cell')" :value="t('content')" size="large" />
      <ca2-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <ca2-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('valueOnly')">
      <ca2-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <ca2-cell :title="t('cell')" is-link />
      <ca2-cell :title="t('cell')" is-link :value="t('content')" />
      <ca2-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <ca2-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <ca2-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <ca2-cell-group :title="`${t('group')} 1`">
        <ca2-cell :title="t('cell')" :value="t('content')" />
      </ca2-cell-group>
      <ca2-cell-group :title="`${t('group')} 2`">
        <ca2-cell :title="t('cell')" :value="t('content')" />
      </ca2-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <ca2-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <ca2-tag type="danger">{{ t('tag') }}</ca2-tag>
        </template>
      </ca2-cell>

      <ca2-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <ca2-icon name="search" style="line-height: inherit;" />
        </template>
      </ca2-cell>

      <ca2-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <ca2-checkbox v-model="checked" />
        </template>
      </ca2-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <ca2-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽',
      verticalCenter: '垂直居中',
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots',
      verticalCenter: 'Vertical center',
    },
  },

  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="scss">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
