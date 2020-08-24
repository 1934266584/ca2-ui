<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-checkbox v-model="checkbox1">{{ t('checkbox') }}</ca2-checkbox>
    </demo-block>

    <demo-block :title="t('disabled')">
      <ca2-checkbox :value="false" disabled>
        {{ t('checkbox') }}
      </ca2-checkbox>
      <ca2-checkbox :value="true" disabled>
        {{ t('checkbox') }}
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('customShape')">
      <ca2-checkbox v-model="checkboxShape" shape="square">
        {{ t('customColor') }}
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('customColor')">
      <ca2-checkbox v-model="checkbox2" checked-color="#07c160">
        {{ t('customColor') }}
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('customIconSize')">
      <ca2-checkbox v-model="checboxIcon" icon-size="24px">
        {{ t('customIconSize') }}
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <ca2-checkbox v-model="checkbox3">
        {{ t('customIcon') }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <ca2-checkbox v-model="checkboxLabel" label-disabled>
        {{ t('checkbox') }}
      </ca2-checkbox>
    </demo-block>

    <demo-block :title="t('title3')">
      <ca2-checkbox-group v-model="result">
        <ca2-checkbox name="a">{{ t('checkbox') }} a</ca2-checkbox>
        <ca2-checkbox name="b">{{ t('checkbox') }} b</ca2-checkbox>
      </ca2-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('horizontal')">
      <ca2-checkbox-group v-model="horizontalResult" direction="horizontal">
        <ca2-checkbox name="a">{{ t('checkbox') }} a</ca2-checkbox>
        <ca2-checkbox name="b">{{ t('checkbox') }} b</ca2-checkbox>
      </ca2-checkbox-group>
    </demo-block>

    <demo-block :title="t('title4')">
      <ca2-checkbox-group v-model="result2" :max="2">
        <ca2-checkbox name="a">{{ t('checkbox') }} a</ca2-checkbox>
        <ca2-checkbox name="b">{{ t('checkbox') }} b</ca2-checkbox>
        <ca2-checkbox name="c">{{ t('checkbox') }} c</ca2-checkbox>
      </ca2-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('toggleAll')">
      <ca2-checkbox-group v-model="checkAllResult" ref="group">
        <ca2-checkbox name="a">{{ t('checkbox') }} a</ca2-checkbox>
        <ca2-checkbox name="b">{{ t('checkbox') }} b</ca2-checkbox>
        <ca2-checkbox name="c">{{ t('checkbox') }} c</ca2-checkbox>
      </ca2-checkbox-group>

      <div class="demo-checkbox-buttons">
        <ca2-button type="primary" @click="checkAll">
          {{ t('checkAll') }}
        </ca2-button>
        <ca2-button type="info" @click="toggleAll">
          {{ t('inverse') }}
        </ca2-button>
      </div>
    </demo-block>

    <demo-block :title="t('title5')">
      <ca2-checkbox-group v-model="result3">
        <ca2-cell-group>
          <ca2-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${t('checkbox')} ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <ca2-checkbox ref="checkboxes" :name="item" />
            </template>
          </ca2-cell>
        </ca2-cell-group>
      </ca2-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '限制最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      horizontal: '水平排列',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      horizontal: 'Horizontal',
      disableLabel: 'Disable label click',
    },
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },

    checkAll() {
      this.$refs.group.toggleAll(true);
    },

    toggleAll() {
      this.$refs.group.toggleAll();
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-checkbox {
  background: $white;

  .ca2-checkbox {
    margin: 0 0 8px 20px;
  }

  .ca2-cell {
    .ca2-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: $padding-md;

    .ca2-button {
      margin-left: $padding-md;
    }
  }

  .ca2-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
