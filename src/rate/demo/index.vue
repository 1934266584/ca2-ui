<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-rate v-model="value1" />
    </demo-block>

    <demo-block :title="t('customIcon')">
      <ca2-rate v-model="value2" icon="like" void-icon="like-o" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <ca2-rate
        v-model="value3"
        :size="25"
        color="#ee0a24"
        void-icon="star"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="t('halfStar')">
      <ca2-rate
        v-model="value4"
        :size="25"
        allow-half
        void-icon="star"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="t('customCount')">
      <ca2-rate v-model="value5" :count="6" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <ca2-rate v-model="value6" disabled />
    </demo-block>

    <demo-block :title="t('readonly')">
      <ca2-rate v-model="value6" readonly />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('changeEvent')">
      <ca2-rate v-model="value7" @change="onChange" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      halfStar: '半星',
      disabled: '禁用状态',
      customIcon: '自定义图标',
      customStyle: '自定义样式',
      customCount: '自定义数量',
      readonly: '只读状态',
      changeEvent: '监听 change 事件',
      toastContent: value => `当前值：${value}`,
    },
    'en-US': {
      halfStar: 'Half Star',
      disabled: 'Disabled',
      customIcon: 'Custom Icon',
      customStyle: 'Custom Style',
      customCount: 'Custom Count',
      readonly: 'Readonly',
      changeEvent: 'Change Event',
      toastContent: value => `current value：${value}`,
    },
  },

  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 3,
      value7: 2,
    };
  },

  methods: {
    onChange(value) {
      this.value7 = value;
      this.$toast(this.t('toastContent', value));
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-rate {
  padding-bottom: 20px;
  background-color: #fff;

  .ca2-rate {
    margin-left: $padding-md;
  }
}
</style>
