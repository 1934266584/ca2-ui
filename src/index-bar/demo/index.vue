<template>
  <demo-section>
    <ca2-tabs v-model="activeTab" :color="BLUE">
      <ca2-tab :title="t('basicUsage')">
        <ca2-index-bar>
          <div v-for="index in indexList" :key="index">
            <ca2-index-anchor :index="index" />
            <ca2-cell :title="t('text')" />
            <ca2-cell :title="t('text')" />
            <ca2-cell :title="t('text')" />
          </div>
        </ca2-index-bar>
      </ca2-tab>

      <ca2-tab :title="t('customIndexList')">
        <ca2-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <ca2-index-anchor :index="index">
              {{ t('title') + index }}
            </ca2-index-anchor>
            <ca2-cell :title="t('text')" />
            <ca2-cell :title="t('text')" />
            <ca2-cell :title="t('text')" />
          </div>
        </ca2-index-bar>
      </ca2-tab>
    </ca2-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表',
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List',
    },
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      BLUE,
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    };
  },
};
</script>
