<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </zv-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <zv-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
        <template #footer>
          <zv-button size="small">{{ t('button') }}</zv-button>
          <zv-button size="small" type="danger">
            {{ t('button') }}
          </zv-button>
        </template>
      </zv-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .zv-anel__footer {
    text-align: right;

    .zv-utton {
      margin-left: 5px;
    }
  }

  .zv-anel__content {
    padding: 20px;
  }
}
</style>
