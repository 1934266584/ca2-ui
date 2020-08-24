<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </ca2-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <ca2-panel :title="t('title')" :desc="t('desc')" :status="t('status')" is-row>
        <div>{{ t('content') }}</div>
        <template #footer>
          <ca2-button size="small" plain type="primary">{{ t('button') }}</ca2-button>
          <ca2-button size="small" type="primary">
            {{ t('button') }}
          </ca2-button>
        </template>
      </ca2-panel>

      <div class="demo-panel-row">
        <ca2-panel>
          <template #header>
            <ca2-cell :title="t('title')" :label="t('desc')">
              <template #right-icon>
                <ca2-checkbox v-model="checked" />
              </template>
            </ca2-cell>
          </template>
          <div>{{ t('content') }}</div>
          <template #footer>
            <ca2-button size="small" plain type="primary">{{ t('button') }}</ca2-button>
            <ca2-button size="small" type="primary">
              {{ t('button') }}
            </ca2-button>
          </template>
        </ca2-panel>
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
  .ca2-panel__footer {
    text-align: right;

    .ca2-button {
      margin-left: 8px;
    }
  }

  .ca2-panel__content {
    padding: 20px;
  }

  &-row {
    margin-top: 10px;
  }
}
</style>
