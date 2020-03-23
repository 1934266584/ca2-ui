# Cell

### Install

```js
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
```

## Usage

### Basic Usage

```html
<zv-cell-group>
  <zv-cell title="Cell title" value="Content" />
  <zv-cell title="Cell title" value="Content" label="Description" />
</zv-cell-group>
```

### Size

```html
<zv-cell-group>
  <zv-cell title="Cell title" value="Content" size="large" />
  <zv-cell title="Cell title" value="Content" size="large" label="Description" />
</zv-cell-group>
```

### Left Icon

```html
<zv-cell-group>
  <zv-cell title="Cell title" icon="location-o" />
</zv-cell-group>
```

### Value only

```html
<zv-cell-group>
  <zv-cell value="Content" />
</zv-cell-group>
```

### Link

```html
<zv-cell-group>
  <zv-cell title="Cell title" is-link />
  <zv-cell title="Cell title" is-link value="Content" />
  <zv-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</zv-cell-group>
```

### Router

```html
<zv-cell-group>
  <zv-cell title="URL" is-link url="/vant/mobile.html" />
  <zv-cell title="Vue Router" is-link to="index" />
</zv-cell-group>
```

### Group Title

```html
<zv-cell-group title="Group 1">
  <zv-cell title="Cell title" value="Content" />
</zv-cell-group>
<zv-cell-group title="Group 2">
  <zv-cell title="Cell title" value="Content" />
</zv-cell-group>
```

### Use Slots

```html
<zv-cell value="内容" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">单元格</span>
    <zv-tag type="danger">标签</zv-tag>
  </template>
</zv-cell>

<zv-cell title="单元格" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <zv-icon
      name="search"
      style="line-height: inherit;"
    />
  </template>
</zv-cell>
```

### Vertical Center

```html
<zv-cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Group title | *string* | - |
| border | Whether to show outer border | *boolean* | `true` |

### Cell Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | *number \| string* | - |
| value | Right text | *number \| string* | - |
| label | Description below the title | *string* | - |
| size | Size，can be set to `large` | *string* | - |
| icon | Left Icon | *string* | - |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `zv-icon` |
| border | Whether to show inner border | *boolean* | `true` |
| center | Whether to center content vertically | *boolean* | `true` |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| is-link | Whether to show link icon | *boolean* | `false` |
| required | Whether to show required mark | *boolean* | `false` |
| arrow-direction | Can be set to `left` `up` `down` | *string* | `right` |
| title-style | Title style | *any* | - |
| title-class | Title className | *any* | - |
| value-class | Value className | *any* | - |
| label-class | Label className | *any* | - |

### Cell Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | *event: Event* |

### CellGroup Slots

| Name | Description |
|------|------|
| default | Default slot |
| title | Custom title |

### Cell Slots

| Name | Description |
|------|------|
| default | Custom value |
| icon | Custom icon |
| title | Custom title |
| label | Custom label |
| right-icon | Custom right icon |
