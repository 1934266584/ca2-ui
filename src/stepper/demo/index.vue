<template>
  <demo-section>
    <zv-cell center :title="t('basicUsage')">
      <zv-stepper v-model="stepper1" />
    </zv-cell>

    <zv-cell center :title="t('step')">
      <zv-stepper v-model="stepper2" step="2" />
    </zv-cell>

    <zv-cell center :title="t('range')">
      <zv-stepper v-model="stepper3" :min="5" :max="8" />
    </zv-cell>

    <zv-cell center :title="t('integer')">
      <zv-stepper v-model="stepper4" integer />
    </zv-cell>

    <zv-cell center :title="t('disabled')">
      <zv-stepper v-model="stepper5" disabled />
    </zv-cell>

    <zv-cell center :title="t('disableInput')">
      <zv-stepper v-model="disabledInput" disable-input />
    </zv-cell>

    <zv-cell center :title="t('decimalLength')">
      <zv-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </zv-cell>

    <zv-cell center :title="t('customSize')">
      <zv-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    </zv-cell>

    <zv-cell center :title="t('asyncChange')">
      <zv-stepper :value="stepper6" async-change @change="onChange" />
    </zv-cell>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      disableInput: '禁用输入框',
      decimalLength: '固定小数位数',
    },
    'en-US': {
      step: 'Step',
      range: 'Range',
      integer: 'Integer',
      asyncChange: 'Async Change',
      customSize: 'Custom Size',
      disableInput: 'Disable Input',
      decimalLength: 'Decimal Length',
    },
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1,
      disabledInput: 1,
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    },
  },
};
</script>
