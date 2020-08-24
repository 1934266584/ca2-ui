# IndexBar

### Install

```js
import Vue from 'vue';
import { IndexBar } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
```

## Usage

### Basic Usage

```html
<ca2-index-bar>
  <ca2-index-anchor index="A" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />

  <ca2-index-anchor index="B" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />

  ...
</ca2-index-bar>
```

### Custom Index List

```html
<ca2-index-bar :index-list="indexList">
  <ca2-index-anchor index="1">Title 1</ca2-index-anchor>
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />

  <ca2-index-anchor index="2">Title 2</ca2-index-anchor>
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />
  <ca2-cell title="Text" />

  ...
</ca2-index-bar>
```

```js
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
```

## API

### IndexBar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| index-list | Index List | *string[] \| number[]* | `A-Z` |
| z-index | z-index | *number \| string* | `1` |
| sticky | Whether to enable anchor sticky top | *boolean* | `true` |
| sticky-offset-top `v2.0.7` | Anchor offset top when sticky | *number* | `0` |
| highlight-color | Index character highlight color | *string* | `#07c160` | - |

### IndexAnchor Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| index | Index | *number \| string* | - |

### IndexBar Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when select index | index |

### IndexAnchor Slots

| Name | Description |
|------|------|
| default | Anchor content, show index by default |
