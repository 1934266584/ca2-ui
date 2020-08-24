<template>
  <demo-block :title="t('basicUsage')">
    <ca2-cell-group>
      <ca2-field v-model="value" :placeholder="t('placeholder')" />
    </ca2-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      placeholder: '请输入文本',
    },
    'en-US': {
      placeholder: 'Text',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
