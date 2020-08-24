# Divider

### Install

```js
import Vue from 'vue';
import { Divider } from 'vant';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<ca2-divider />
```

### With Text

```html
<ca2-divider>Text</ca2-divider>
```

### Content Position

```html
<ca2-divider content-position="left">Text</ca2-divider>
<ca2-divider content-position="right">Text</ca2-divider>
```

### Dashed

```html
<ca2-divider dashed>Text</ca2-divider>
```

### Custom Style

```html
<ca2-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</ca2-divider>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| dashed | Whether to use dashed border | *boolean* | `false` |
| hairline | Whether to use hairline | *boolean* | `true` |
| content-position | Content position，can be set to `left` `right` | *string* | `center` |

### Slots

| Name | Description |
|------|------|
| default | content |
