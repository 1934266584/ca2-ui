# Radio

### Install

```js
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
```

## Usage

### Basic Usage

Use `v-model` to bind the name of checked radio

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1">Radio 1</ca2-radio>
  <ca2-radio name="2">Radio 2</ca2-radio>
</ca2-radio-group>
```

```js
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

### Horizontal

```html
<ca2-radio-group v-model="radio" direction="horizontal">
  <ca2-radio name="1">Radio 1</ca2-radio>
  <ca2-radio name="2">Radio 2</ca2-radio>
</ca2-radio-group>
```

### Disabled

```html
<ca2-radio-group v-model="radio" disabled>
  <ca2-radio name="1">Radio 1</ca2-radio>
  <ca2-radio name="2">Radio 2</ca2-radio>
</ca2-radio-group>
```

### Custom Shape

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1" shape="square">Radio 1</ca2-radio>
  <ca2-radio name="2" shape="square">Radio 2</ca2-radio>
</ca2-radio-group>
```

### Custom Color

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1" checked-color="#07c160">Radio 1</ca2-radio>
  <ca2-radio name="2" checked-color="#07c160">Radio 2</ca2-radio>
</ca2-radio-group>
```

### Custom Icon Size

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1" icon-size="24px">Radio 1</ca2-radio>
  <ca2-radio name="2" icon-size="24px">Radio 2</ca2-radio>
</ca2-radio-group>
```

### Custom Icon

Use icon slot to custom icon

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1">
    Radio 1
    <template #icon="props">
      <img
        class="img-icon"
        :src="props.checked ? activeIcon : inactiveIcon"
      >
    </template>
  </ca2-radio>
  <ca2-radio name="2">
    Radio 2
    <template #icon="props">
      <img
        class="img-icon"
        :src="props.checked ? activeIcon : inactiveIcon"
      />
    </template>
  </ca2-radio>
</ca2-radio-group>

<style>
  .img-icon {
    height: 20px;  
}
</style>>
```

```js
export default {
  data() {
    return {
      radio: '1',
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
    };
  }
};
```

### Disable Label Click

```html
<ca2-radio-group v-model="radio">
  <ca2-radio name="1" label-disabled>Radio 1</ca2-radio>
  <ca2-radio name="2" label-disabled>Radio 2</ca2-radio>
</ca2-radio-group>
```

### Inside a Cell

```html
<ca2-radio-group v-model="radio">
  <ca2-cell-group>
    <ca2-cell title="Radio 1" clickable @click="radio = '1'">
      <template #right-icon>      
        <ca2-radio name="1" />
      </template>
    </ca2-cell>
    <ca2-cell title="Radio 2" clickable @click="radio = '2'">
      <template #right-icon>
        <ca2-radio name="2" />
      </template>
    </ca2-cell>
  </ca2-cell-group>
</ca2-radio-group>
```

## API

### Radio Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Radio name | *any* | - |
| shape | Can be set to `square` | *string* | `round` |
| disabled | Whether to disable radio | *boolean* | `false` |
| label-disabled | Whether to disable label click | *boolean* | `false` |
| label-position | Can be set to `left` | *string* | `right` |
| icon-size | Icon size | *number \| string* | `20px` |
| checked-color | Checked color | *string* | `#1989fa` | - |

### RadioGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model (v-model) | Name of checked radio | *any* | - |
| disabled | Disable all radios | *boolean* | `false` |
| direction `v2.5.0` | Direction, can be set to `horizontal` | *string* | `vertical` |
| icon-size `v2.2.3` | Icon size of all radios | *number \| string* | `20px` |
| checked-color `v2.2.3` | Checked color of all radios | *string* | `#1989fa` | - |

### Radio Events

| Event | Description | Parameters |
|------|------|------|
| click | Triggered when click radio | *event: Event* |

### RadioGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | *name: string* |

### Radio Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | *checked: boolean* |
