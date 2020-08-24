<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-grid>
        <ca2-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <ca2-grid :column-num="3">
        <ca2-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <ca2-grid :border="false" :column-num="3">
        <ca2-grid-item>
          <ca2-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </ca2-grid-item>
        <ca2-grid-item>
          <ca2-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </ca2-grid-item>
        <ca2-grid-item>
          <ca2-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </ca2-grid-item>
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <ca2-grid square>
        <ca2-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <ca2-grid :gutter="10">
        <ca2-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <ca2-grid clickable :column-num="2">
        <ca2-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <ca2-grid-item
          icon="search"
          :text="t('urlRoute')"
          url="/vant/mobile.html"
        />
      </ca2-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <ca2-grid :column-num="2">
        <ca2-grid-item icon="home-o" :text="t('text')" dot />
        <ca2-grid-item icon="search" :text="t('text')" badge="99+" />
      </ca2-grid>
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

<style lang="scss">
@import '../../style/var.scss';
</style>
