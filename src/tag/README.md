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
<ca2-tag>Tag</ca2-tag>
<ca2-tag type="primary">Tag</ca2-tag>
<ca2-tag type="success">Tag</ca2-tag>
<ca2-tag type="danger">Tag</ca2-tag>
<ca2-tag type="warning">Tag</ca2-tag>
```

### Round style

```html
<ca2-tag round>Tag</ca2-tag>
<ca2-tag round type="primary">Tag</ca2-tag>
<ca2-tag round type="success">Tag</ca2-tag>
<ca2-tag round type="danger">Tag</ca2-tag>
<ca2-tag round type="warning">Tag</ca2-tag>
```

### Mark style

```html
<ca2-tag mark>Tag</ca2-tag>
<ca2-tag mark type="primary">Tag</ca2-tag>
<ca2-tag mark type="success">Tag</ca2-tag>
<ca2-tag mark type="danger">Tag</ca2-tag>
<ca2-tag mark type="warning">Tag</ca2-tag>
```

### Plain style

```html
<ca2-tag plain>Tag</ca2-tag>
<ca2-tag plain type="primary">Tag</ca2-tag>
<ca2-tag plain type="success">Tag</ca2-tag>
<ca2-tag plain type="danger">Tag</ca2-tag>
<ca2-tag plain type="warning">Tag</ca2-tag>
```

### Custom Color

```html
<ca2-tag color="#f2826a">Tag</ca2-tag>
<ca2-tag color="#f2826a" plain>Tag</ca2-tag>
<ca2-tag color="#7232dd">Tag</ca2-tag>
<ca2-tag color="#7232dd" plain>Tag</ca2-tag>
<ca2-tag color="#ffe1e1" text-color="#ad0000">Tag</ca2-tag>
```

### Custom Size

```html
<ca2-tag type="danger">Tag</ca2-tag>
<ca2-tag type="danger" size="medium">Tag</ca2-tag>
<ca2-tag type="danger" size="large">Tag</ca2-tag>
```

### Closeable

```html
<ca2-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</ca2-tag>
<ca2-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
</ca2-tag>
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
