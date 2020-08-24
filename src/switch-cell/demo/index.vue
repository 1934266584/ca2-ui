<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-cell-group>
        <ca2-switch-cell v-model="checked" :title="t('title')" />
      </ca2-cell-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <ca2-cell-group>
        <ca2-switch-cell v-model="checked" disabled :title="t('title')" />
      </ca2-cell-group>
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <ca2-cell-group>
        <ca2-switch-cell v-model="checked" loading :title="t('title')" />
      </ca2-cell-group>
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
