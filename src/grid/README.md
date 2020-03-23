# Grid

### Install

```js
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
```

## Usage

### Basic Usage

```html
<zv-grid>
  <zv-grid-item icon="photo-o" text="Text" />
  <zv-grid-item icon="photo-o" text="Text" />
  <zv-grid-item icon="photo-o" text="Text" />
  <zv-grid-item icon="photo-o" text="Text" />
</zv-grid>
```

### Column Num

```html
<zv-grid :column-num="3">
  <zv-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</zv-grid>
```

### Custom Content

```html
<zv-grid :border="false" :column-num="3">
  <zv-grid-item>
    <zv-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </zv-grid-item>
  <zv-grid-item>
    <zv-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </zv-grid-item>
  <zv-grid-item>
    <zv-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </zv-grid-item>
</zv-grid>
```

### Square

```html
<zv-grid square>
  <zv-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</zv-grid>
```

### Gutter

```html
<zv-grid :gutter="10">
  <zv-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</zv-grid>
```

### Route

```html
<zv-grid clickable :column-num="2">
  <zv-grid-item icon="home-o" text="Vue Router" to="/" />
  <zv-grid-item icon="search" text="URL" url="/vant/mobile.html" />
</zv-grid>
```

### Show Badge

```html
<zv-grid :column-num="2">
  <zv-grid-item icon="home-o" text="Text" dot />
  <zv-grid-item icon="search" text="Text" badge="99+" />
</zv-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| column-num `v2.0.4` | Column Num | *number \| string* | `4` |
| icon-size `v2.2.6` | Icon size | *number \| string* | `28px` |
| gutter | Gutter | *number \| string* | `0` |
| border | Whether to show border | *boolean* | `true` |
| center | Whether to center content | *boolean* | `true` |
| square | Whether to be square shape | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |

### GridItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Text | *string* | - |
| icon | Icon name or URL | *string* | - |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `zv-icon` |
| dot `v2.2.1` | Whether to show red dot | *boolean* | `false` |
| badge `v2.5.6` | Content of the badge | *number \| string* | - |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GridItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |

### GridItem Slots

| Name | Description |
|------|------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
