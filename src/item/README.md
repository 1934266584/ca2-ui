# Item

### Install

```js
import Vue from 'vue';
import { Item } from 'ca2-ui';

Vue.use(Item);
```

## Usage

### Basic Usage And Auto Wrap

```html
<ca2-item
  :item-object="itemObject"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: 'title',
        value: 'content'
      }
    }
  }
};
```

### Set Slot

```html
<ca2-item
  :item-object="itemObjectSlot"
  @slot-event="slotEvent"
>
  <div>
    slot
  </div>
</ca2-item>
```

```js

export default {
  data() {
    return {
      itemObjectSlot: {
        title: 'title',
        value: 'click slot to show data'
      }
    }
  },
  methods: {
    slotEvent(data) {
      console.log(data) // {title: "title", value: "click slot to show data"}
    }
  }
};
```

### Set Show Line

```html
<ca2-item
  :item-object="itemObject"
  :line="2"
/>
```

```js

export default {
  data() {
    return {
      itemObject: {
        title: 'title',
        value: 'This is the content, set two line to show. long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long.'
      }
    }
  }
};
```

### Set Row

```html
<ca2-item
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
        value: 'This is the content, long long long long long long long long long long.'
      }
    }
  }
};
```

### Set Row And Line

```html
<ca2-item
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
        title: 'title',
        value: 'This is the content, set two line to show. long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long.'
      }
    }
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| item-object | show data | _object_ | { title: 'title', value: 'content'} |
| line | set show line | _number_ | 0 |
| is-two-col | set row | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| slot-event | click to trigger | current slot's data |

### CollapseItem Slots

| Name | Description |
|------|------|
| default | slot for right. |