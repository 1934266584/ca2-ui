# Loading

### Install

```js
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
```

## Usage

### Type

```html
<ca2-loading />
<ca2-loading type="spinner" />
```

### Color

```html
<ca2-loading color="#1989fa" />
<ca2-loading type="spinner" color="#1989fa" />
```

### Size

```html
<ca2-loading size="24" />
<ca2-loading type="spinner" size="24px" />
```

### Text

```html
<ca2-loading size="24px">Loading...</ca2-loading>
```

### Vertical

```html
<ca2-loading size="24px" vertical>Loading...</ca2-loading>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` |
| type | Can be set to `spinner` | *string* | `circular` |
| size | Icon size | *number \| string* | `30px` |
| text-size | Text font size | *number \| string* | `14px` |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
