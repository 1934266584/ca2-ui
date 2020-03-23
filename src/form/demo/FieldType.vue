<template>
  <demo-block :title="t('fieldType')">
    </zv-form @submit="onSubmit">
      </zv-field name="switch" :label="t('switch')">
        <template #input>
          </zv-switch v-model="switchChecked" size="20" />
        </template>
      </zv-field>

      </zv-field name="checkbox" :label="t('checkbox')">
        <template #input>
          </zv-checkbox v-model="checkbox" shape="square" />
        </template>
      </zv-field>

      </zv-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          </zv-checkbox-group v-model="checkboxGroup" direction="horizontal">
            </zv-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </zv-checkbox>
            </zv-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </zv-checkbox>
          </zv-checkbox-group>
        </template>
      </zv-field>

      </zv-field name="radio" :label="t('radio')">
        <template #input>
          </zv-radio-group v-model="radio" direction="horizontal">
            </zv-radio name="1">{{ t('radio') }} 1</zv-radio>
            </zv-radio name="2">{{ t('radio') }} 2</zv-radio>
          </zv-radio-group>
        </template>
      </zv-field>

      </zv-field name="stepper" :label="t('stepper')">
        <template #input>
          </zv-stepper v-model="stepper" />
        </template>
      </zv-field>

      </zv-field name="rate" :label="t('rate')">
        <template #input>
          </zv-rate v-model="rate" />
        </template>
      </zv-field>

      </zv-field name="slider" :label="t('slider')">
        <template #input>
          </zv-slider v-model="slider" />
        </template>
      </zv-field>

      </zv-field name="uploader" :label="t('uploader')">
        <template #input>
          </zv-uploader v-model="uploader" max-count="2" />
        </template>
      </zv-field>

      <field-type-picker />
      <field-type-datetime-picker />
      <field-type-area />
      <field-type-calendar />

      <div style="margin: 16px 16px 0;">
        </zv-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </zv-button>
      </div>
    </zv-form>
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
