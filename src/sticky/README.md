# Sticky

### Install

```js
import Vue from 'vue';
import { Sticky } from 'vant';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<zv-sticky>
  <zv-button type="primary">Basic Usage</zv-button>
</zv-sticky>
```

### Offset Top

```html
<zv-sticky :offset-top="50">
  <zv-button type="info">Offset Top</zv-button>
</zv-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <zv-sticky :container="container">
    <zv-button type="warning">Set Container</zv-button>
  </zv-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| offset-top | Offset top | *number \| string* | `0` |
| z-index | z-index when sticky | *number \| string* | `99` |
| container | Container DOM | *Element* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
