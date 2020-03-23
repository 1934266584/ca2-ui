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
<zv-divider />
```

### With Text

```html
<zv-divider>Text</zv-divider>
```

### Content Position

```html
<zv-divider content-position="left">Text</zv-divider>
<zv-divider content-position="right">Text</zv-divider>
```

### Dashed

```html
<zv-divider dashed>Text</zv-divider>
```

### Custom Style

```html
<zv-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</zv-divider>
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
