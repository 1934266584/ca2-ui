<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-swipe :autoplay="3000" indicator-color="white">
        <zv-swipe-item>1</zv-swipe-item>
        <zv-swipe-item>2</zv-swipe-item>
        <zv-swipe-item>3</zv-swipe-item>
        <zv-swipe-item>4</zv-swipe-item>
      </zv-swipe>
    </demo-block>

    <demo-block :title="t('title2')">
      <zv-swipe :autoplay="3000">
        <zv-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </zv-swipe-item>
      </zv-swipe>
    </demo-block>

    <demo-block :title="t('title3')">
      <zv-swipe indicator-color="white" @change="onChange1">
        <zv-swipe-item>1</zv-swipe-item>
        <zv-swipe-item>2</zv-swipe-item>
        <zv-swipe-item>3</zv-swipe-item>
        <zv-swipe-item>4</zv-swipe-item>
      </zv-swipe>
    </demo-block>

    <demo-block :title="t('title4')">
      <zv-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        style="height: 200px;"
        class="demo-swipe--vertical"
      >
        <zv-swipe-item>1</zv-swipe-item>
        <zv-swipe-item>2</zv-swipe-item>
        <zv-swipe-item>3</zv-swipe-item>
        <zv-swipe-item>4</zv-swipe-item>
      </zv-swipe>
    </demo-block>

    <demo-block :title="t('title5')">
      <zv-swipe :width="300" :loop="false" indicator-color="white">
        <zv-swipe-item>1</zv-swipe-item>
        <zv-swipe-item>2</zv-swipe-item>
        <zv-swipe-item>3</zv-swipe-item>
        <zv-swipe-item>4</zv-swipe-item>
      </zv-swipe>
    </demo-block>

    <demo-block :title="t('title6')">
      <zv-swipe @change="onChange2">
        <zv-swipe-item>1</zv-swipe-item>
        <zv-swipe-item>2</zv-swipe-item>
        <zv-swipe-item>3</zv-swipe-item>
        <zv-swipe-item>4</zv-swipe-item>

        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </zv-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '图片懒加载',
      title3: '监听 change 事件',
      title4: '纵向滚动',
      title5: '自定义滑块大小',
      title6: '自定义指示器',
      message: '当前 Swipe 索引：',
    },
    'en-US': {
      title2: 'Image Lazyload',
      title3: 'Change Event',
      title4: 'Vertical Scrolling',
      title5: 'Set SwipeItem Size',
      title6: 'Custom indicator',
      message: 'Current Swipe index:',
    },
  },

  data() {
    return {
      current: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
      ],
    };
  },

  methods: {
    onChange1(index) {
      this.$toast(this.t('message') + index);
    },

    onChange2(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var.scss';

.demo-swipe {
  padding-bottom: 30px;

  .zv-swipe {
    &-item {
      color: $white;
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: $white;
      pointer-events: none;
    }
  }

  &--vertical {
    .zv-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: $white;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
