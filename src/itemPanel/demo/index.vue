<!--
 * @Author: Joran Yang
 * @Date: 2020-05-29 14:11:24
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-17 10:10:21
-->
<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-item-panel
        :item-object-list="t('itemObjectList')"
        @slot-event="slotEvent"
      />
    </demo-block>
    <demo-block :title="t('coreUsage')">
      <zv-item-panel
        :item-object-list="t('itemObjectList2')"
        :line="1"
        :is-two-col="true"
        @slot-event="slotEvent"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      itemObjectList: [
        {
          title: '标题',
          value: '内容',
        },
        {
          title: '标题',
          value: '插槽内容是文字',
          slot() {
            return <div>插槽</div>;
          },
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
      ],
      itemObjectList2: [
        {
          title: '标题',
          value: '内容',
        },
        {
          title: '标题',
          value: '内容',
        },
        {
          title: '标题',
          value: '插槽内容是组件',
          slot() {
            return (
              <zv-tag round type="primary">
                标签
              </zv-tag>
            );
          },
        },
        {
          title: '标题',
          value: '插槽内容是图片',
          slot() {
            return (
              <img
                src="https://img.yzcdn.cn/vant/logo.png"
                style="height: 24px; vertical-align: bottom;"
              />
            );
          },
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 0,
          isTwoCol: false,
        },
        {
          title: '标题',
          value: '内容',
        },
        {
          title: '标题',
          value: '内容',
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 2,
          isTwoCol: false,
        },
        {
          title: '标题',
          value: '内容',
          isTwoCol: false,
        },
        {
          title: '标题',
          value: '内容',
          isTwoCol: false,
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 4,
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
        {
          title: '标题',
          value:
            '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
        {
          title: '标题',
          value: '内容',
        },
      ],
    },
    'en-US': {
      itemObjectList: [
        {
          title: 'title',
          value: 'content',
        },
        {
          title: 'title',
          value: 'text slot',
          slot() {
            return <div>text</div>;
          },
        },
        {
          title: 'title',
          value:
            'content content content content content content content content',
        },
      ],
      itemObjectList2: [
        {
          title: 'title',
          value: 'content',
        },
        {
          title: 'title',
          value: 'content',
        },
        {
          title: 'title',
          value: `slot's content is component`,
          slot() {
            return (
              <zv-tag round type="primary">
                tag
              </zv-tag>
            );
          },
        },
        {
          title: 'title',
          value: "slot' content is img",
          slot() {
            return (
              <img
                src="https://img.yzcdn.cn/vant/logo.png"
                style="height: 24px; vertical-align: bottom;"
              />
            );
          },
        },
        {
          title: 'title',
          value:
            'content content content content content content content content',
        },
        {
          title: 'title',
          value:
            'content content content content content content content content',
        },
        {
          title: 'title',
          value:
            'content content content content content content content content content content content content content content content content',
          line: 0,
          isTwoCol: false,
        },
        {
          title: 'title',
          value: 'content',
        },
        {
          title: 'title',
          value: 'content',
        },
        {
          title: 'title',
          value:
            'content content content content content content content content content content content content content content content content',
          line: 2,
          isTwoCol: false,
        },
        {
          title: 'title',
          value: 'content',
          isTwoCol: false,
        },
        {
          title: 'title',
          value: 'content',
          isTwoCol: false,
        },
        {
          title: 'title',
          value:
            'content content content content content content content content content content content content content content content content content content content content content content content content',
          line: 4,
        },
        {
          title: 'title',
          value:
            'content content content content content content content content',
        },
        {
          title: 'title',
          value:
            'content content content content content content content content',
        },
        {
          title: 'title',
          value: 'content',
        },
      ],
    },
  },
  methods: {
    slotEvent(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.demo-item-panel {
  .zv-item-panel {
    background: #fff;
  }
}
</style>
