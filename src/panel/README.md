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
<ca2-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</ca2-panel>
```

### Advanced Usage

```html
<ca2-panel title=Title desc="Description" :status="Status" is-row>
  <div>Content</div>
  <template #footer>
    <ca2-button size="small" plain type="primary">Button</ca2-button>
    <ca2-button size="small" type="primary">
      Button
    </ca2-button>
  </template>
</ca2-panel>

<ca2-panel>
  <template #header>
    <ca2-cell title="Title" label="Description">
      <template #right-icon>
        <ca2-checkbox v-model="checked" />
      </template>
    </ca2-cell>
  </template>
  <div>Content</div>
  <template #footer>
    <ca2-button size="small" plain type="primary">Button</ca2-button>
    <ca2-button size="small" type="primary">
      Button
    </ca2-button>
  </template>
</ca2-panel>
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
