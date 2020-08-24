<template>
  <div class="ca2-hairline--bottom">
    <ca2-field
      readonly
      clickable
      name="picker"
      :value="value"
      :border="false"
      :label="t('picker')"
      :placeholder="t('placeholder')"
      @click="showPicker = true"
    />
    <ca2-popup v-model="showPicker" position="bottom">
      <ca2-picker
        show-toolbar
        :columns="t('textColumns')"
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
