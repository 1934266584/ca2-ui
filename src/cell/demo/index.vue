<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-cell-group>
        <zv-cell :title="t('cell')" :value="t('content')" />
        <zv-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </zv-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <zv-cell :title="t('cell')" :value="t('content')" size="large" />
      <zv-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <zv-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('valueOnly')">
      <zv-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <zv-cell :title="t('cell')" is-link />
      <zv-cell :title="t('cell')" is-link :value="t('content')" />
      <zv-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <zv-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <zv-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <zv-cell-group :title="`${t('group')} 1`">
        <zv-cell :title="t('cell')" :value="t('content')" />
      </zv-cell-group>
      <zv-cell-group :title="`${t('group')} 2`">
        <zv-cell :title="t('cell')" :value="t('content')" />
      </zv-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <zv-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <zv-tag type="danger">{{ t('tag') }}</zv-tag>
        </template>
      </zv-cell>

      <zv-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <zv-icon name="search" style="line-height: inherit;" />
        </template>
      </zv-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <zv-cell
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
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
