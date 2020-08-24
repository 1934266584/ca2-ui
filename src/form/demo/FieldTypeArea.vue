<template>
  <div class="ca2-hairline--bottom">
    <ca2-field
      readonly
      clickable
      name="area"
      :value="value"
      :border="false"
      :label="t('picker')"
      :placeholder="t('placeholder')"
      @click="showArea = true"
    />
    <ca2-popup v-model="showArea" position="bottom">
      <ca2-area
        :area-list="t('areaList')"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </ca2-popup>
  </div>
</template>

<script>
import AreaList from '../../area/demo/area';
import AreaListEn from '../../area/demo/area-en';

export default {
  i18n: {
    'zh-CN': {
      picker: '地区选择',
      areaList: AreaList,
      placeholder: '点击选择省市区',
    },
    'en-US': {
      picker: 'Area Picker',
      areaList: AreaListEn,
      placeholder: 'Select area',
    },
  },

  data() {
    return {
      value: '',
      showArea: false,
    };
  },

  methods: {
    onConfirm(values) {
      this.value = values.map((item) => item.name).join('/');
      this.showArea = false;
    },

    onCancel() {
      this.showArea = false;
    },
  },
};
</script>
