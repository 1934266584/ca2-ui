<!--
 * @Author: Joran Yang
 * @Date: 2020-06-14 11:22:09
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-17 09:59:26
--> 
# ItemPanel 单元格组

### 引入

```js
import Vue from 'vue';
import { ItemPanel } from 'ca2-ui';

Vue.use(ItemPanel);
```

## 代码演示

### 基础用法

```html
<ca2-item-panel
  :item-object-list="itemObjectList"
  @slot-event="slotEvent"
/>
```

```js
export default {
  data() {
    return {
      itemObjectList: [
        {
          title: '标题',
          value: '内容'
        },
        {
          title: '标题',
          value: '插槽内容是文字',
          slot() {
            return <div>插槽</div>
          }
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        }
      ]
    };
  },
  methods: {
    slotEvent(data) {
      console.log(data) // 当前插槽数据
    }
  }
};
```

### 核心用法

```html
<ca2-item-panel
  :item-object-list="itemObjectList"
  :line="1"
  :is-two-col="true"
/>
```

```js
export default {
  data() {
    return {
      itemObjectList: [
        {
          title: '标题',
          value: '内容'
        },
        {
          title: '标题',
          value: '内容'
        },
        {
          title: '标题',
          value: '插槽内容是组件',
          slot() {
            return <ca2-tag round type="primary">标签</ca2-tag>
          }
        },
        {
          title: '标题',
          value: '插槽内容是图片',
          slot() {
            return <img src="https://img.yzcdn.cn/vant/logo.png" style="height: 24px; vertical-align: bottom;" />
          }
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 0,
          isTwoCol: false
        },
        {
          title: '标题',
          value: '内容'
        },
        {
          title: '标题',
          value: '内容'
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 2,
          isTwoCol: false
        },
        {
          title: '标题',
          value: '内容',
          isTwoCol: false
        },
        {
          title: '标题',
          value: '内容',
          isTwoCol: false
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          line: 4
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        },
        {
          title: '标题',
          value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        },
        {
          title: '标题',
          value: '内容'
        }
      ]
    };
  },
  methods: {
    slotEvent(data) {
      console.log(data) // 当前插槽数据
    }
  }
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| item-object-list | 展示数据,可通过数组中的项重写全局line和is-two-col | _array[object]_ | `[]` |
| line | 全局设置显示行数 | _number_ | `0` |
| is-two-col | 全局设置分栏显示 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| slot-event | 点击触发 | 当前插槽数据 |

### item-object-list Attributes

| 属性名 | 说明 |
|------|------|
| slot | jsx Dom |
