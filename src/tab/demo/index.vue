<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-tabs v-model="active">
        <ca2-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <ca2-tabs v-model="activeName">
        <ca2-tab name="a" :title="t('tab') + 1"> {{ t('content') }} 1 </ca2-tab>
        <ca2-tab name="b" :title="t('tab') + 2"> {{ t('content') }} 2 </ca2-tab>
        <ca2-tab name="c" :title="t('tab') + 3"> {{ t('content') }} 3 </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title2')">
      <ca2-tabs>
        <ca2-tab v-for="index in 8" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title3')">
      <ca2-tabs @disabled="onClickDisabled">
        <ca2-tab
          v-for="index in 3"
          :title="t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title4')">
      <ca2-tabs type="card">
        <ca2-tab v-for="index in 3" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title5')">
      <ca2-tabs @click="onClick">
        <ca2-tab v-for="index in 2" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title6')">
      <ca2-tabs :active="active" sticky>
        <ca2-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title7')">
      <ca2-tabs :active="active">
        <ca2-tab v-for="index in 2" :key="index">
          <template #title> <ca2-icon name="more-o" />{{ t('tab') }} </template>
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title7')">
      <ca2-tabs :active="active">
        <ca2-tab v-for="index in 2" :key="index">
          <template #title>
            {{ t('tab') }}
            <div class="my-tag">
              {{ parseInt(index + Math.random() * 100) }}
            </div>
          </template>
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title8')">
      <ca2-tabs animated>
        <ca2-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block :title="t('title9')">
      <ca2-tabs :active="active" swipeable>
        <ca2-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title10')">
      <ca2-tabs scrollspy sticky>
        <ca2-tab :title="t('tab') + index" v-for="index in 8" :key="index">
          {{ t('content') }} {{ index }}
        </ca2-tab>
      </ca2-tabs>
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

  .ca2-tab .ca2-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .ca2-tab__pane {
    padding: 25px 20px;
    background-color: $white;
  }

  .ca2-tabs--card .ca2-tab__pane {
    background-color: transparent;
  }
}
.my-tag {
  display: inline-block;
  height: 10px;
  padding: 2px 2px;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
  background: red;
  border-radius: 4px;
}
</style>
