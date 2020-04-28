# Checkbox

### Install

```js
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<zv-checkbox v-model="checked">Checkbox</zv-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### Disabled

```html
<zv-checkbox v-model="checked" disabled>Checkbox</zv-checkbox>
```

### Custom Shape

```html
<zv-checkbox v-model="checked" shape="square">Checkbox</zv-checkbox>
```

### Custom Color

```html
<zv-checkbox v-model="checked" checked-color="#07c160">Checkbox</zv-checkbox>
```

### Custom Icon Size

```html
<zv-checkbox v-model="checked" icon-size="24px">Checkbox</zv-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<zv-checkbox v-model="checked">
  customize icon
  <template #icon="props">
    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</zv-checkbox>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### Disable Label Click

```html
<zv-checkbox v-model="checked" label-disabled>Checkbox</zv-checkbox>
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<zv-checkbox-group v-model="result">
  <zv-checkbox name="a">Checkbox a</zv-checkbox>
  <zv-checkbox name="b">Checkbox b</zv-checkbox>
</zv-checkbox-group>
```

```js
export default {
  data() {
    return {
      result: ['a', 'b'],
    };
  },
};
```

### Horizontal

```html
<zv-checkbox-group v-model="result" direction="horizontal">
  <zv-checkbox name="a">Checkbox a</zv-checkbox>
  <zv-checkbox name="b">Checkbox b</zv-checkbox>
</zv-checkbox-group>
```

```js
export default {
  data() {
    return {
      result: [],
    };
  },
};
```

### Maximum amount of checked options

```html
<zv-checkbox-group v-model="result" :max="2">
  <zv-checkbox name="a">Checkbox a</zv-checkbox>
  <zv-checkbox name="b">Checkbox b</zv-checkbox>
  <zv-checkbox name="c">Checkbox c</zv-checkbox>
</zv-checkbox-group>
```

### Toggle All

```html
<zv-checkbox-group v-model="result" ref="checkboxGroup">
  <zv-checkbox name="a">Checkbox a</zv-checkbox>
  <zv-checkbox name="b">Checkbox b</zv-checkbox>
  <zv-checkbox name="c">Checkbox c</zv-checkbox>
</zv-checkbox-group>

<zv-button type="primary" @click="checkAll">Check All</zv-button>
<zv-button type="info" @click="toggleAll">Toggle All</zv-button>
```

```js
export default {
  data() {
    return {
      result: [],
    };
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
  },
};
```

### Inside a Cell

```html
<zv-checkbox-group v-model="result">
  <zv-cell-group>
    <zv-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <zv-checkbox :name="item" ref="checkboxes" />
      </template>
    </zv-cell>
  </zv-cell-group>
</zv-checkbox-group>
```

```js
export default {
  data() {
    return {
      list: ['a', 'b']
      result: []
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) | Check status | _boolean_ | `false` |
| name | Checkbox name | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| disabled | Disable checkbox | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` | - |
| bind-group `v2.2.4` | Whether to bind with CheckboxGroup | _boolean_ | `true` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) | Names of all checked checkboxes | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | Maximum amount of checked options | _number \| string_ | `0`(Unlimited) |
| direction `v2.5.0` | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size `v2.2.3` | Icon size of all checkboxes | _number \| string_ | `20px` |
| checked-color `v2.2.3` | Checked color of all checkboxes | _string_ | `#1989fa` | - |

### Checkbox Events

| Event  | Description                   | Parameters         |
| ------ | ----------------------------- | ------------------ |
| change | Triggered when value changed  | _checked: boolean_ |
| click  | Triggered when click checkbox | _event: Event_     |

### CheckboxGroup Events

| Event  | Description                  | Parameters     |
| ------ | ---------------------------- | -------------- |
| change | Triggered when value changed | _names: any[]_ |

### Checkbox Slots

| Name    | Description  | SlotProps          |
| ------- | ------------ | ------------------ |
| default | Custom label | -                  |
| icon    | Custom icon  | _checked: boolean_ |

### CheckboxGroup Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CheckboxGroup instance and call instance methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle check status of all checkboxes | _checked?: boolean_ | - |

### Checkbox Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Checkbox instance and call instance methods

| Name   | Description         | Attribute           | Return value |
| ------ | ------------------- | ------------------- | ------------ |
| toggle | Toggle check status | _checked?: boolean_ | -            |
