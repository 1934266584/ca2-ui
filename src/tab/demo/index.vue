<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-tabs v-model="active">
        <zv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <zv-tabs v-model="activeName">
        <zv-tab name="a" :title="t('tab') + 1"> {{ t('content') }} 1 </zv-tab>
        <zv-tab name="b" :title="t('tab') + 2"> {{ t('content') }} 2 </zv-tab>
        <zv-tab name="c" :title="t('tab') + 3"> {{ t('content') }} 3 </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title2')">
      <zv-tabs>
        <zv-tab v-for="index in 8" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title3')">
      <zv-tabs @disabled="onClickDisabled">
        <zv-tab
          v-for="index in 3"
          :title="t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title4')">
      <zv-tabs type="card">
        <zv-tab v-for="index in 3" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title5')">
      <zv-tabs @click="onClick">
        <zv-tab v-for="index in 2" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title6')">
      <zv-tabs :active="active" sticky>
        <zv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title7')">
      <zv-tabs :active="active">
        <zv-tab v-for="index in 2" :key="index">
          <template #title> <zv-icon name="more-o" />{{ t('tab') }} </template>
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title8')">
      <zv-tabs animated>
        <zv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block :title="t('title9')">
      <zv-tabs :active="active" swipeable>
        <zv-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title10')">
      <zv-tabs scrollspy sticky>
        <zv-tab :title="t('tab') + index" v-for="index in 8" :key="index">
          {{ t('content') }} {{ index }}
        </zv-tab>
      </zv-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      title10: '滚动导航',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配',
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      title10: 'Scrollspy',
      disabled: ' is disabled',
      matchByName: 'Match By Name',
    },
  },

  data() {
    return {
      active: 2,
      activeName: 'b',
      tabs: [1, 2, 3, 4],
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-tab {
  margin-bottom: 80vh;

  .zv-tab .zv-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .zv-tab__pane {
    padding: 25px 20px;
    background-color: $white;
  }

  .zv-tabs--card .zv-tab__pane {
    background-color: transparent;
  }
}
</style>
