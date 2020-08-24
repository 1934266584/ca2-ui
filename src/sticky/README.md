# Sticky

### Install

```js
import Vue from 'vue';
import { Sticky } from 'ca2t';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<ca2-sticky>
  <ca2-button type="primary">Basic Usage</ca2-button>
</ca2-sticky>
```

### Offset Top

```html
<ca2-sticky :offset-top="50">
  <ca2-button type="info">Offset Top</ca2-button>
</ca2-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <ca2-sticky :container="container">
    <ca2-button type="warning">Set Container</ca2-button>
  </ca2-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
};
```

## API

### Props

| Attribute  | Description         | Type               | Default |
| ---------- | ------------------- | ------------------ | ------- |
| offset-top | Offset top          | _number \| string_ | `0`     |
| z-index    | z-index when sticky | _number \| string_ | `99`    |
| container  | Container DOM       | _Element_          | -       |

### Events

| Event  | Description           | Arguments                      |
| ------ | --------------------- | ------------------------------ |
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
