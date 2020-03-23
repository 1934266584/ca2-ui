# Tag

### Install

```js
import Vue from 'vue';
import { Tag } from 'vant';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<zv-tag>Tag</zv-tag>
<zv-tag type="primary">Tag</zv-tag>
<zv-tag type="success">Tag</zv-tag>
<zv-tag type="danger">Tag</zv-tag>
<zv-tag type="warning">Tag</zv-tag>
```

### Round style

```html
<zv-tag round>Tag</zv-tag>
<zv-tag round type="primary">Tag</zv-tag>
<zv-tag round type="success">Tag</zv-tag>
<zv-tag round type="danger">Tag</zv-tag>
<zv-tag round type="warning">Tag</zv-tag>
```

### Mark style

```html
<zv-tag mark>Tag</zv-tag>
<zv-tag mark type="primary">Tag</zv-tag>
<zv-tag mark type="success">Tag</zv-tag>
<zv-tag mark type="danger">Tag</zv-tag>
<zv-tag mark type="warning">Tag</zv-tag>
```

### Plain style

```html
<zv-tag plain>Tag</zv-tag>
<zv-tag plain type="primary">Tag</zv-tag>
<zv-tag plain type="success">Tag</zv-tag>
<zv-tag plain type="danger">Tag</zv-tag>
<zv-tag plain type="warning">Tag</zv-tag>
```

### Custom Color

```html
<zv-tag color="#f2826a">Tag</zv-tag>
<zv-tag color="#f2826a" plain>Tag</zv-tag>
<zv-tag color="#7232dd">Tag</zv-tag>
<zv-tag color="#7232dd" plain>Tag</zv-tag>
<zv-tag color="#ffe1e1" text-color="#ad0000">Tag</zv-tag>
```

### Custom Size

```html
<zv-tag type="danger">Tag</zv-tag>
<zv-tag type="danger" size="medium">Tag</zv-tag>
<zv-tag type="danger" size="large">Tag</zv-tag>
```

### Closeable

```html
<zv-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</zv-tag>
<zv-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
</zv-tag>
```

```js
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    }
  },
  methods: {
    close(type) {
      this.show[type] = false;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` `warning` | *string* | `default` |
| size | Size, can be set to `large` `medium` | *string* | - |
| color | Custom color | *string* | - |
| plain | Whether to be plain style | *boolean* | `false` |
| round | Whether to be round style | *boolean* | `false` |
| mark | Whether to be mark style | *boolean* | `false` |
| text-color | Text color | *string* | `white` |
| closeable `v2.2.9` | Whether to be closeable | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Default slot |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |
| close | Triggered when click close icon | - |
