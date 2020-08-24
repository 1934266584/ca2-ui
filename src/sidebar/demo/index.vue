<template>
  <demo-section>
    <ca2-grid :column-num="2" :border="false">
      <ca2-grid-item>
        <h3 class="demo-sidebar-title">{{ t('basicUsage') }}</h3>
        <ca2-sidebar v-model="activeKey1">
          <ca2-sidebar-item :title="t('title')" />
          <ca2-sidebar-item :title="t('title')" />
          <ca2-sidebar-item :title="t('title')" />
        </ca2-sidebar>
      </ca2-grid-item>

      <ca2-grid-item>
        <h3 class="demo-sidebar-title">{{ t('showBadge') }}</h3>
        <ca2-sidebar v-model="activeKey2">
          <ca2-sidebar-item :title="t('title')" dot />
          <ca2-sidebar-item :title="t('title')" badge="5" />
          <ca2-sidebar-item :title="t('title')" badge="99+" />
        </ca2-sidebar>
      </ca2-grid-item>

      <ca2-grid-item>
        <h3 class="demo-sidebar-title">{{ t('disabled') }}</h3>
        <ca2-sidebar v-model="activeKey3">
          <ca2-sidebar-item :title="t('title')" />
          <ca2-sidebar-item :title="t('title')" disabled />
          <ca2-sidebar-item :title="t('title')" />
        </ca2-sidebar>
      </ca2-grid-item>

      <ca2-grid-item>
        <h3 class="demo-sidebar-title">{{ t('changeEvent') }}</h3>
        <ca2-sidebar v-model="activeKey4" @change="onChange">
          <ca2-sidebar-item :title="t('title') + 1" />
          <ca2-sidebar-item :title="t('title') + 2" />
          <ca2-sidebar-item :title="t('title') + 3" />
        </ca2-sidebar>
      </ca2-grid-item>
    </ca2-grid>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名',
      showBadge: '徽标提示',
      disabled: '禁用选项',
      changeEvent: '监听切换事件',
      selectTip: '你切换到了',
    },
    'en-US': {
      showBadge: 'Show Badge',
      disabled: 'Disabled',
      changeEvent: 'Change Event',
      selectTip: 'You select ',
    },
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0,
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.t('selectTip')} ${this.t('title')}${index + 1}`,
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-sidebar {
  background-color: $white;

  .ca2-sidebar {
    margin-left: $padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: $gray-6;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
