<!--
 * @Author: Joran Yang
 * @Date: 2020-06-14 11:22:09
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-17 09:59:05
--> 
# ItemPanel

### Install

```js
import Vue from 'vue';
import { ItemPanel } from 'ca2-ui';

Vue.use(ItemPanel);
```

## Usage

### Basic Usage

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
          title: 'title',
          value: 'content'
        },
        {
          title: 'title',
          value: 'text slot',
          slot() {
            return <div>text</div>
          }
        },
        {
          title: 'title',
          value: 'content content content content content content content content'
        }
      ],
    };
  },
  methods: {
    slotEvent(data) {
      console.log(data) // slot's data
    }
  }
};
```

### Core Usage

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
          title: 'title',
          value: 'content'
        },
        {
          title: 'title',
          value: 'content'
        },
        {
          title: 'title',
          value: `slot's content is component`,
          slot() {
            return <ca2-tag round type="primary">tag</ca2-tag>
          }
        },
        {
          title: 'title',
          value: `slot's content is img`,
          slot() {
            return <img src="https://img.yzcdn.cn/vant/logo.png" style="height: 24px; vertical-align: bottom;" />
          }
        },
        {
          title: 'title',
          value: 'content content content content content content content content'
        },
        {
          title: 'title',
          value: 'content content content content content content content content'
        },
        {
          title: 'title',
          value: 'content content content content content content content content content content content content content content content content',
          line: 0,
          isTwoCol: false
        },
        {
          title: 'title',
          value: 'content'
        },
        {
          title: 'title',
          value: 'content'
        },
        {
          title: 'title',
          value: 'content content content content content content content content content content content content content content content content',
          line: 2,
          isTwoCol: false
        },
        {
          title: 'title',
          value: 'content',
          isTwoCol: false
        },
        {
          title: 'title',
          value: 'content',
          isTwoCol: false
        },
        {
          title: 'title',
          value: 'content content content content content content content content content content content content content content content content content content content content content content content content',
          line: 4
        },
        {
          title: 'title',
          value: 'content content content content content content content content'
        },
        {
          title: 'title',
          value: 'content content content content content content content content'
        },
        {
          title: 'title',
          value: 'content'
        }
      ]
    };
  },
  methods: {
    slotEvent(data) {
      console.log(data) // slot's data
    }
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| item-object-list | show data, Attributes line and is-two-col can rewrite by item in array | _array[object]_ | `[]` |
| line | set show line global | _number_ | `0` |
| is-two-col | set row global | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| slot-event | click to trigger | current slot's data |

### item-object-list Attributes

| Attributes | Description |
|------|------|
| slot | jsx Dom |
