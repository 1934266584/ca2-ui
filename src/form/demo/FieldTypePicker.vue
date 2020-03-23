<template>
  <div class="zv-hairline--bottom">
    <zv-field
      readonly
      clickable
      name="picker"
      :value="value"
      :border="false"
      :label="t('picker')"
      :placeholder="t('placeholder')"
      @click="showPicker = true"
    />
    <zv-popup v-model="showPicker" position="bottom">
      <zv-picker
        show-toolbar
        :columns="t('textColumns')"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </zv-popup>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      picker: '选择器',
      placeholder: '点击选择城市',
      textColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    },
    'en-US': {
      picker: 'Picker',
      placeholder: 'Select city',
      textColumns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
    },
  },

  data() {
    return {
      value: '',
      showPicker: false,
    };
  },

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
