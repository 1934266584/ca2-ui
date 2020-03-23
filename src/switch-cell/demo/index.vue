<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-cell-group>
        <zv-switch-cell v-model="checked" :title="t('title')" />
      </zv-cell-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <zv-cell-group>
        <zv-switch-cell v-model="checked" disabled :title="t('title')" />
      </zv-cell-group>
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <zv-cell-group>
        <zv-switch-cell v-model="checked" loading :title="t('title')" />
      </zv-cell-group>
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
