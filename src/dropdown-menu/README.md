# DropdownMenu

### Install

```js
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
```

## Usage

### Basic Usage

```html
<ca2-dropdown-menu>
  <ca2-dropdown-item v-model="value1" :options="option1" />
  <ca2-dropdown-item v-model="value2" :options="option2" />
</ca2-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      option2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
      ]
    }
  }
};
```

### Custom Content

```html
<ca2-dropdown-menu>
  <ca2-dropdown-item v-model="value" :options="option" />
  <ca2-dropdown-item title="Title" ref="item">
    <ca2-switch-cell v-model="switch1" title="Title" />
    <ca2-switch-cell v-model="switch2" title="Title" />
    <ca2-button block type="info" @click="onConfirm">Confirm</ca2-button>
  </ca2-dropdown-item>
</ca2-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ]
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
```

### Custom Active Color

Use `active-color` prop to custom active color of the title and options

```html
<ca2-dropdown-menu active-color="#ee0a24">
  <ca2-dropdown-item v-model="value1" :options="option1" />
  <ca2-dropdown-item v-model="value2" :options="option2" />
</ca2-dropdown-menu>
```

### Expand Direction

```html
<ca2-dropdown-menu direction="up">
  <ca2-dropdown-item v-model="value1" :options="option1" />
  <ca2-dropdown-item v-model="value2" :options="option2" />
</ca2-dropdown-menu>
```

### Disabled

```html
<ca2-dropdown-menu>
  <ca2-dropdown-item v-model="value1" disabled :options="option1" />
  <ca2-dropdown-item v-model="value2" disabled :options="option2" />
</ca2-dropdown-menu>
```

## API

### DropdownMenu Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| active-color | Active color of title and option | *string* | `#1989fa` |
| direction `v2.0.1` | Expand direction, can be set to `up` | *string* | `down` |
| z-index | z-index of menu item | *number \| string* | `10` |
| duration | Transition duration, unit second | *number \| string* | `0.2` |
| overlay | Whether to show overlay | *boolean* | `true` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| close-on-click-outside `v2.0.7` | Whether to close when click outside | *boolean* | `true` |

### DropdownItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Value of current option，can use `v-model` | *number \| string* | - |
| title | Item title | *string* | Text of selected option |
| options | Options | *Option[]* | `[]` |
| disabled | Whether to disable dropdown item | *boolean* | `false` |
| title-class | Title class | *string* | - |
| get-container `v2.2.4` | Return the mount node for menu | *string \| () => Element* | - |

### DropdownItem Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered select option and value changed | value |
| open | Triggered when open menu | - |
| close | Triggered when close menu | - |
| opened | Triggered when menu opened | - |
| closed | Triggered when menu closed | - |

### DropdownItem Slots

| Name | Description |
|------|------|
| default | Content |
| title | Custom title |

### DropdownItem Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get DropdownItem instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggle | Toggle display | show: boolean | - |

### Data Structure of Option

| Key | Description | Type |
|------|------|------|
| text | Text | *string* |
| value | Value | *number \| string* |
| icon | Left icon | *string* |
