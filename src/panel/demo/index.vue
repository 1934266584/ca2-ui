<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </zv-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <zv-panel :title="t('title')" :desc="t('desc')" :status="t('status')" is-row>
        <div>{{ t('content') }}</div>
        <template #footer>
          <zv-button size="small" plain type="primary">{{ t('button') }}</zv-button>
          <zv-button size="small" type="primary">
            {{ t('button') }}
          </zv-button>
        </template>
      </zv-panel>

      <div class="demo-panel-row">
        <zv-panel>
          <template #header>
            <zv-cell :title="t('title')" :label="t('desc')">
              <template #right-icon>
                <zv-checkbox v-model="checked" />
              </template>
            </zv-cell>
          </template>
          <div>{{ t('content') }}</div>
          <template #footer>
            <zv-button size="small" plain type="primary">{{ t('button') }}</zv-button>
            <zv-button size="small" type="primary">
              {{ t('button') }}
            </zv-button>
          </template>
        </zv-panel>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="scss">
.demo-panel {
  .zv-panel__footer {
    text-align: right;

    .zv-button {
      margin-left: 8px;
    }
  }

  .zv-panel__content {
    padding: 20px;
  }

  &-row {
    margin-top: 10px;
  }
}
</style>
