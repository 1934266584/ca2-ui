<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-button block type="primary" @click="showBase = true">
        滑动展示筛选面板
      </zv-button>

      <zv-screen
        v-model="showBase"
        :data-array="dataArray"
        @on-sure="onSure"
        :section-count="3"
        :column-count="3"
      />
    </demo-block>

    <demo-block title="全屏展示">
      <zv-screen
        :data-array="dataArray"
        @on-change="onChange"
        is-full
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      showBase: false,
      dataArray: [
        {
          title: '分组1',
          isMutliple: true,
          tags: [
            {
              tagName: '测试省略号测试省略号',
              tagSelected: true,
            }, {
              tagName: '1',
              tagSelected: false,
              tagWidth: 16,
            }, {
              tagName: '2',
              tagSelected: false,
            }, {
              tagName: '3',
              tagSelected: false,
            },
          ],
        }, {
          title: '分组2',
          tags: [
            {
              tagName: '测试省略号测试省略号',
              tagSelected: true,
              tagWidth: 24,
            }, {
              tagName: '1',
              tagSelected: false,
            }, {
              tagName: '2',
              tagSelected: false,
            }, {
              tagName: '3',
              tagSelected: false,
            },
          ],
        },
      ],
    };
  },

  methods: {
    onSure(val) {
      console.log(val);
    },

    onChange(val) {
      console.log(val);
    },
  },
};
</script>
