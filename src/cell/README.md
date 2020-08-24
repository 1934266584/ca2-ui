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
<ca2-cell-group>
  <ca2-cell title="Cell title" value="Content" />
  <ca2-cell :title="Cell title" :value="Content" pur-display />
  <ca2-cell title="Cell title" value="Content" label="Description" />
  <ca2-cell title="Cell title" value="Content" label="Description" is-row />
</ca2-cell-group>
```

### Size

```html
<ca2-cell-group>
  <ca2-cell title="Cell title" value="Content" size="large" />
  <ca2-cell title="Cell title" value="Content" size="large" label="Description" />
</ca2-cell-group>
```

### Left Icon

```html
<ca2-cell-group>
  <ca2-cell title="Cell title" icon="location-o" />
</ca2-cell-group>
```

### Value only

```html
<ca2-cell-group>
  <ca2-cell value="Content" />
</ca2-cell-group>
```

### Link

```html
<ca2-cell-group>
  <ca2-cell title="Cell title" is-link />
  <ca2-cell title="Cell title" is-link value="Content" />
  <ca2-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</ca2-cell-group>
```

### Router

```html
<ca2-cell-group>
  <ca2-cell title="URL" is-link url="/vant/mobile.html" />
  <ca2-cell title="Vue Router" is-link to="index" />
</ca2-cell-group>
```

### Group Title

```html
<ca2-cell-group title="Group 1">
  <ca2-cell title="Cell title" value="Content" />
</ca2-cell-group>
<ca2-cell-group title="Group 2">
  <ca2-cell title="Cell title" value="Content" />
</ca2-cell-group>
```

### Use Slots

```html
<ca2-cell value="内容" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">单元格</span>
    <ca2-tag type="danger">标签</ca2-tag>
  </template>
</ca2-cell>

<ca2-cell title="单元格" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <ca2-icon
      name="search"
      style="line-height: inherit;"
    />
  </template>
</ca2-cell>
```

### Vertical Center

```html
<ca2-cell center title="Cell title" value="Content" label="Description" />
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
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `ca2-icon` |
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
| pur-display `v2.5.8` | pur dispaly style | *boolean* | `false` |
| is-row `v2.5.8` | title and label show one line | *boolean* | `false` |

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
