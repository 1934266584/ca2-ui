<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-cell is-link :title="t('basicUsage')" @click="show.basic = true" />
      <ca2-cell is-link :title="t('showCancel')" @click="show.cancel = true" />
      <ca2-cell
        is-link
        :title="t('showDescription')"
        @click="show.description = true"
      />
    </demo-block>

    <demo-block :title="t('optionStatus')">
      <ca2-cell
        is-link
        :title="t('optionStatus')"
        @click="show.status = true"
      />
    </demo-block>

    <demo-block :title="t('customPanel')">
      <ca2-cell is-link :title="t('customPanel')" @click="show.title = true" />
    </demo-block>

    <ca2-action-sheet
      v-model="show.basic"
      :actions="simpleActions"
      @select="onSelect"
    />

    <ca2-action-sheet
      v-model="show.status"
      close-on-click-action
      :actions="statusActions"
      :cancel-text="t('cancel')"
    />

    <ca2-action-sheet
      v-model="show.cancel"
      :actions="simpleActions"
      close-on-click-action
      :cancel-text="t('cancel')"
      @cancel="onCancel"
    />

    <ca2-action-sheet
      v-model="show.description"
      :actions="simpleActions"
      close-on-click-action
      :description="t('description')"
    />

    <ca2-action-sheet v-model="show.title" :title="t('title')">
      <div class="demo-action-sheet-content">{{ t('content') }}</div>
    </ca2-action-sheet>
  </demo-section>
</template>

<script>
import { GREEN } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      subname: '副文本',
      showCancel: '展示取消按钮',
      buttonText: '弹出菜单',
      customPanel: '自定义面板',
      description: '这是一段描述信息',
      optionStatus: '选项状态',
      disabledOption: '禁用选项',
      showDescription: '展示描述信息',
    },
    'en-US': {
      subname: 'Subname',
      showCancel: 'Show Cancel Button',
      buttonText: 'Show ActionSheet',
      customPanel: 'Custom Panel',
      description: 'Description',
      optionStatus: 'Option Status',
      disabledOption: 'Disabled Option',
      showDescription: 'Show Description',
    },
  },

  data() {
    return {
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false,
      },
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.t('option') },
        { name: this.t('option') },
        { name: this.t('option'), subname: this.t('subname') },
      ];
    },

    statusActions() {
      return [
        { name: this.t('option'), color: GREEN },
        { loading: true },
        { name: this.t('disabledOption'), disabled: true },
      ];
    },
  },

  methods: {
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-action-sheet {
  &-content {
    padding: $padding-md $padding-md $padding-md * 10;
  }
}
</style>
