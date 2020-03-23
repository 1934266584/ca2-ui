<template>
  <demo-section>
    <zv-tabs v-model="activeTab" :color="BLUE">
      <zv-tab :title="t('basicUsage')">
        <zv-index-bar>
          <div v-for="index in indexList" :key="index">
            <zv-index-anchor :index="index" />
            <zv-cell :title="t('text')" />
            <zv-cell :title="t('text')" />
            <zv-cell :title="t('text')" />
          </div>
        </zv-index-bar>
      </zv-tab>

      <zv-tab :title="t('customIndexList')">
        <zv-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <zv-index-anchor :index="index">
              {{ t('title') + index }}
            </zv-index-anchor>
            <zv-cell :title="t('text')" />
            <zv-cell :title="t('text')" />
            <zv-cell :title="t('text')" />
          </div>
        </zv-index-bar>
      </zv-tab>
    </zv-tabs>
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
