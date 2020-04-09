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
<zv-panel title=Title desc="Description" :status="Status" is-row>
  <div>Content</div>
  <template #footer>
    <zv-button size="small" plain type="primary">Button</zv-button>
    <zv-button size="small" type="primary">
      Button
    </zv-button>
  </template>
</zv-panel>

<zv-panel>
  <template #header>
    <zv-cell title="Title" label="Description">
      <template #right-icon>
        <zv-checkbox v-model="checked" />
      </template>
    </zv-cell>
  </template>
  <div>Content</div>
  <template #footer>
    <zv-button size="small" plain type="primary">Button</zv-button>
    <zv-button size="small" type="primary">
      Button
    </zv-button>
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
| is-row `v2.5.8` | title and label show one line in header | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |
