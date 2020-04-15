# Screen 筛选

### 引入

```js
import Vue from 'vue';
import { Screen } from '@zvalley/zv-ui';

Vue.use(Screen);
```

## 代码演示

### 基础用法

```html
<zv-screen
  v-model="showBase"
  :data-array="dataArray"
  @on-sure="onSure"
  :section-count="3"
  :column-count="3"
/>
```

```js
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
              menuWidth: 24,
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
```

### 全屏展示

```html
<zv-screen
  :data-array="dataArray"
  @on-change="onChange"
  is-full
/>
```

`触发反馈后，会将当前选中的tag值通过originalTags / originalTag 返回`

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 抽屉模式下显示/隐藏 | *boolean* | `false` |
| data-array | 数据源 | *array* | - |
| section-count | 收起状态下，展示多少个tag标签 | *number* | - |
| column-count | 一列展示多少个tag标签 | *number* | `3` |
| is-full | 是否全屏展示 | *boolean* | `false` |
| clickable | 是否开启点击效果 | *boolean* | `true` |

#### data-array-item

| 参数 | 说明 | 类型 |
|------|------|------|
| title | 分组title | *string* |
| isMutliple | 当前分组是否支持多选 | *boolean* |
| columnCount | 当前分组，一列展示多少个tag标签 | *boolean* |
| tags | 当前分组下，tag标签数据源 | *array* |

#### data-array-item-tag

| 参数 | 说明 | 类型 |
|------|------|------|
| tagName | tag标签内容 | *number* |
| tagSelected | tag标签是否被选中 | *boolean* |
| tagWidth | tag标签宽度(可被24整除的数) | *number* |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| on-change | 点击tag标签时触发 | 当前被点击的tag标签数据 |
| on-sure | 抽屉模式下，点击确认按钮或点击遮罩层触发 | 当前被选中的数据 |
| on-reset | 抽屉模式下，点击重置按钮触发 | - |
