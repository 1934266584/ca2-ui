# Steps

### Install

```js
import Vue from 'vue';
import { Step, Steps } from 'vant';

Vue.use(Step);
Vue.use(Steps);
```

## Usage

### Basic Usage

```html
<zv-steps :active="active">
  <zv-step>Step1</zv-step>
  <zv-step>Step2</zv-step>
  <zv-step>Step3</zv-step>
  <zv-step>Step4</zv-step>
</zv-steps>
```

```js
export default {
  data() {
    return {
      active: 1,
    };
  },
};
```

### Custom Style

```html
<zv-steps :active="active" active-icon="success" active-color="#38f">
  <zv-step>Step1</zv-step>
  <zv-step>Step2</zv-step>
  <zv-step>Step3</zv-step>
  <zv-step>Step4</zv-step>
</zv-steps>
```

### Vertical Steps

```html
<zv-steps direction="vertical" :active="0">
  <zv-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </zv-step>
  <zv-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </zv-step>
  <zv-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </zv-step>
</zv-steps>
```

## API

### Steps Props

| Attribute     | Description              | Type               | Default      |
| ------------- | ------------------------ | ------------------ | ------------ |
| active        | Active step              | _number \| string_ | `0`          |
| direction     | Can be set to `vertical` | _string_           | `horizontal` |
| active-color  | Active step color        | _string_           | `#07c160`    |
| active-icon   | Active icon name         | _string_           | `checked`    |
| inactive-icon | Active icon name         | _string_           | -            |

### Step Slots

| Name          | Description          |
| ------------- | -------------------- |
| active-icon   | Custom active icon   |
| inactive-icon | Custom inactive icon |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-step `v2.5.9` | Triggered when a step's title or icon is clicked | _index: number_ |
