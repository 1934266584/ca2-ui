<template>
  <demo-block :title="t('fieldType')">
    <ca2-form @submit="onSubmit">
      <ca2-field name="switch" :label="t('switch')">
        <template #input>
          <ca2-switch v-model="switchChecked" size="20" />
        </template>
      </ca2-field>

      <ca2-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <ca2-checkbox v-model="checkbox" shape="square" />
        </template>
      </ca2-field>

      <ca2-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <ca2-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <ca2-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </ca2-checkbox>
            <ca2-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </ca2-checkbox>
          </ca2-checkbox-group>
        </template>
      </ca2-field>

      <ca2-field name="radio" :label="t('radio')">
        <template #input>
          <ca2-radio-group v-model="radio" direction="horizontal">
            <ca2-radio name="1">{{ t('radio') }} 1</ca2-radio>
            <ca2-radio name="2">{{ t('radio') }} 2</ca2-radio>
          </ca2-radio-group>
        </template>
      </ca2-field>

      <ca2-field name="stepper" :label="t('stepper')">
        <template #input>
          <ca2-stepper v-model="stepper" />
        </template>
      </ca2-field>

      <ca2-field name="rate" :label="t('rate')">
        <template #input>
          <ca2-rate v-model="rate" />
        </template>
      </ca2-field>

      <ca2-field name="slider" :label="t('slider')">
        <template #input>
          <ca2-slider v-model="slider" />
        </template>
      </ca2-field>

      <ca2-field name="uploader" :label="t('uploader')">
        <template #input>
          <ca2-uploader v-model="uploader" max-count="2" />
        </template>
      </ca2-field>

      <field-type-picker />
      <field-type-datetime-picker />
      <field-type-area />
      <field-type-calendar />

      <div style="margin: 16px 16px 0;">
        <ca2-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </ca2-button>
      </div>
    </ca2-form>
  </demo-block>
</template>

<script>
import FieldTypeArea from './FieldTypeArea';
import FieldTypePicker from './FieldTypePicker';
import FieldTypeCalendar from './FieldTypeCalendar';
import FieldTypeDatetimePicker from './FieldTypeDatetimePicker';

export default {
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      picker: '选择器',
      stepper: '步进器',
      checkbox: '复选框',
      uploader: '文件上传',
      fieldType: '表单项类型',
      checkboxGroup: '复选框组',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      picker: 'Picker',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      uploader: 'Uploader',
      fieldType: 'Field Type',
      checkboxGroup: 'Checkbox Group',
      requireCheckbox: 'Checkbox is required',
    },
  },

  components: {
    FieldTypeArea,
    FieldTypePicker,
    FieldTypeCalendar,
    FieldTypeDatetimePicker,
  },

  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
