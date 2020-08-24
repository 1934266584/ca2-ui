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
<ca2-steps :active="active">
  <ca2-step>Step1</ca2-step>
  <ca2-step>Step2</ca2-step>
  <ca2-step>Step3</ca2-step>
  <ca2-step>Step4</ca2-step>
</ca2-steps>
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
<ca2-steps :active="active" active-icon="success" active-color="#38f">
  <ca2-step>Step1</ca2-step>
  <ca2-step>Step2</ca2-step>
  <ca2-step>Step3</ca2-step>
  <ca2-step>Step4</ca2-step>
</ca2-steps>
```

### Vertical Steps

```html
<ca2-steps direction="vertical" :active="0">
  <ca2-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </ca2-step>
  <ca2-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </ca2-step>
  <ca2-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </ca2-step>
</ca2-steps>
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
