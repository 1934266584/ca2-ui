<!--
 * @Author: Joran Yang
 * @Date: 2020-05-29 14:11:24
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-16 23:05:14
-->
<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-item :item-object="t('itemObject')" />
    </demo-block>
    <demo-block :title="t('auto')">
      <ca2-item :item-object="t('itemObjectLong')" />
    </demo-block>
    <demo-block :title="t('slot')">
      <ca2-item :item-object="t('itemObjectSlot')" @slot-event="slotEvent">
        <div>
          {{ t('slot') }}
        </div>
      </ca2-item>
    </demo-block>
    <demo-block :title="t('setLine')">
      <ca2-item
        :item-object="t('itemObjectSet')"
        :is-two-col="false"
        :line="2"
      />
    </demo-block>
    <demo-block :title="t('setRow')">
      <ca2-item :item-object="t('itemObjectLong')" :is-two-col="true" />
    </demo-block>
    <demo-block :title="t('setRowAndLine')">
      <ca2-item
        :item-object="t('itemObjectLong')"
        :is-two-col="true"
        :line="2"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import areaList from '../../area/demo/area';

export default {
  i18n: {
    'zh-CN': {
      itemObject: {
        title: '标题',
        value: '这是一条内容',
      },
      itemObjectLong: {
        title: '标题',
        value: '这是一条内容,很长很长很长很长很长很长很长很长很长很长很长',
      },
      itemObjectSlot: {
        title: '标题',
        value: '点击插槽查看数据',
      },
      itemObjectSet: {
        title: '标题',
        value:
          '这是一条内容,设置最多显示2行,很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很长很长很长很长',
      },
      auto: '超过长度自动换行',
      setLine: '设置显示行数',
      setRow: '设置分栏显示',
      setRowAndLine: '设置分栏及显示行数',
      slot: '设置插槽',
    },
    'en-US': {
      itemObject: {
        title: 'title',
        value: 'content',
      },
      itemObjectLong: {
        title: 'title',
        value:
          'This is the content, long long long long long long long long long long.',
      },
      itemObjectSlot: {
        title: 'title',
        value: 'click slot to show data',
      },
      itemObjectSet: {
        title: 'title',
        value:
          'This is the content, set two line to show. long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long.',
      },
      auto: 'auto wrap',
      setLine: 'set show line',
      setRow: 'set row',
      setRowAndLine: 'set row and line',
      slot: 'set slot',
    },
  },

  data() {
    return {
      areaList,
      searchResult: [],
    };
  },

  methods: {
    slotEvent(data) {
      console.log(data); // {title: "标题", value: "这是一条内容"}
    },
  },
};
</script>

<style lang="scss">
.demo-item {
  .ca2-item {
    background: #fff;
  }
}
</style>
