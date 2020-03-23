<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <zv-grid>
        <zv-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </zv-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <zv-grid :column-num="3">
        <zv-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </zv-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <zv-grid :border="false" :column-num="3">
        <zv-grid-item>
          <zv-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </zv-grid-item>
        <zv-grid-item>
          <zv-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </zv-grid-item>
        <zv-grid-item>
          <zv-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </zv-grid-item>
      </zv-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <zv-grid square>
        <zv-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </zv-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <zv-grid :gutter="10">
        <zv-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </zv-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <zv-grid clickable :column-num="2">
        <zv-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <zv-grid-item
          icon="search"
          :text="t('urlRoute')"
          url="/vant/mobile.html"
        />
      </zv-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <zv-grid :column-num="2">
        <zv-grid-item icon="home-o" :text="t('text')" dot />
        <zv-grid-item icon="search" :text="t('text')" badge="99+" />
      </zv-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showBadge: '徽标提示',
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showBadge: 'Show Badge',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
