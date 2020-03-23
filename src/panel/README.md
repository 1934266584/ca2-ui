# Panel

### Install

```js
import Vue from 'vue';
import { Panel } from 'vant';

Vue.use(Panel);
```

## Usage

### Basic Usage

```html
<zv-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</zv-panel>
```

### Advanced Usage

```html
<zv-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <template #footer>
    <zv-button size="small">Button</zv-button>
    <zv-button size="small" type="danger">Button</zv-button>
  </template>
</zv-panel>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | *string* | - |
| title | Title | *string* | - |
| desc | Description | *string* | - |
| status | Status | *string* | - |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |
