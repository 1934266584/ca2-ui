<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-tabbar v-model="active">
        <ca2-tabbar-item icon="home-o">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="search">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="friends-o">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="setting-o">{{ t('tab') }}</ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <ca2-tabbar v-model="activeName">
        <ca2-tabbar-item name="home" icon="home-o">
          {{ t('tab') }}
        </ca2-tabbar-item>
        <ca2-tabbar-item name="search" icon="search">
          {{ t('tab') }}
        </ca2-tabbar-item>
        <ca2-tabbar-item name="friends" icon="friends-o">
          {{ t('tab') }}
        </ca2-tabbar-item>
        <ca2-tabbar-item name="setting" icon="setting-o">
          {{ t('tab') }}
        </ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>

    <demo-block :title="t('badge')">
      <ca2-tabbar v-model="active2">
        <ca2-tabbar-item icon="home-o">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="search" dot>{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="friends-o" badge="5">
          {{ t('tab') }}
        </ca2-tabbar-item>
        <ca2-tabbar-item icon="setting-o" badge="20">
          {{ t('tab') }}
        </ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <ca2-tabbar v-model="active3">
        <ca2-tabbar-item badge="3">
          <span>{{ t('custom') }}</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </ca2-tabbar-item>
        <ca2-tabbar-item icon="search">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="setting-o">{{ t('tab') }}</ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>

    <demo-block :title="t('customColor')">
      <ca2-tabbar
        v-model="active4"
        active-color="#07c160"
        inactive-color="#000"
      >
        <ca2-tabbar-item icon="home-o">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="search">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="friends-o">{{ t('tab') }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="setting-o">{{ t('tab') }}</ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>

    <demo-block :title="t('switchEvent')">
      <ca2-tabbar v-model="active5" @change="onChange">
        <ca2-tabbar-item icon="home-o">{{ t('tab') + 1 }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="search">{{ t('tab') + 2 }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="friends-o">{{ t('tab') + 3 }}</ca2-tabbar-item>
        <ca2-tabbar-item icon="setting-o">{{ t('tab') + 4 }}</ca2-tabbar-item>
      </ca2-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      badge: '徽标提示',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配',
      switchEvent: '监听切换事件',
      selectTip: '你切换到了',
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name',
      switchEvent: 'Change Event',
      selectTip: 'You select ',
    },
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.t('selectTip')} ${this.t('tab')}${index + 1}`,
      });
    },
  },
};
</script>

<style lang="scss">
.demo-tabbar {
  .ca2-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
