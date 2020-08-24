<template>
  <div class="ca2-hairline--bottom">
    <ca2-field
      readonly
      clickable
      name="datetimePicker"
      :value="value"
      :border="false"
      :label="t('label')"
      :placeholder="t('placeholder')"
      @click="showPicker = true"
    />
    <ca2-popup v-model="showPicker" position="bottom">
      <ca2-datetime-picker
        type="time"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </ca2-popup>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '时间选择',
      placeholder: '点击选择时间',
    },
    'en-US': {
      label: 'Datetime Picker',
      placeholder: 'Select time',
    },
  },

  data() {
    return {
      value: '',
      showPicker: false,
    };
  },

  methods: {
    onConfirm(time) {
      console.log('time', time);
      this.value = time;
      this.showPicker = false;
    },
    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
