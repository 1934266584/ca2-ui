# 单元格

### 引入

```js
import Vue from 'vue';
import { Item } from '@zvalley/zv-ui';

Vue.use(Item);
```

## 代码演示

### 基础用法和自动换行

```html
<zv-item
  :item-object="itemObject"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: '标题',
        value: '这是一条内容'
      }
    }
  }
};
```

### 设置插槽

```html
<zv-item
  :item-object="itemObjectSlot"
  @slot-event="slotEvent"
>
  <div>
    插槽
  </div>
</zv-item>
```

```js

export default {
  data() {
    return {
      itemObjectSlot: {
        title: '标题',
        value: '点击插槽查看数据'
      }
    }
  },
  methods: {
    slotEvent(data) {
      console.log(data) // {title: "标题", value: "点击插槽查看数据"}
    }
  }
};
```

### 设置显示行数

```html
<zv-item
  :item-object="itemObject"
  :line="2"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: '标题',
        value: '这是一条内容,设置最多显示2行,很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很长很长很长很长'
      }
    }
  }
};
```

### 设置分栏显示

```html
<zv-item
  :item-object="itemObject"
  :is-two-col="true"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: 'title',
        value: '这是一条内容,很长很长很长很长很长很长很长很长很长很长很长'
      }
    }
  }
};
```

### 设置分栏及显示行数

```html
<zv-item
  :item-object="itemObject"
  :line="2"
  :is-two-col="true"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: '标题',
        value: '这是一条内容,设置最多显示2行,很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很长很长很长很长'
      }
    }
  }
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| item-object | 展示数据 | _object_ | { title: '标题', value: '内容'} |
| line | 设置显示行数 | _number_ | 0 |
| is-two-col | 设置分栏显示 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| slot-event | 点击触发 | 当前插槽数据 |

### Item Slots

| 名称 | 说明 |
|------|------|
| default | 右侧插槽 |