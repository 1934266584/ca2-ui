# Layout

### Intro

Quickly and easily create layouts with `zv-row` and `zv-col`

### Install

```js
import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<zv-row>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
</zv-row>

<zv-row>
  <zv-col span="4">span: 4</zv-col>
  <zv-col span="10" offset="4">offset: 4, span: 10</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<zv-row>
  <zv-col offset="12" span="12">offset: 12, span: 12</zv-col>
</zv-row>
```


### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<zv-row gutter="20">
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
</zv-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<zv-row type="flex">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<zv-row type="flex" justify="center">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<zv-row type="flex" justify="end">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<zv-row type="flex" justify="space-between">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<zv-row type="flex" justify="space-around">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>
```

## API

### Row Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Layout type, can be set to `flex` | *string* | - |
| gutter | Grid spacing（px） | *number \| string* | - |
| tag | Custom element tag | *string* | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | *string* | `start` |
| align | Flex cross axis, be set to  center/bottom | *string* | `top` |

### Col Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| span | number of column the grid spans | *number \| string* | - |
| offset | number of spacing on the left side of the grid | *number \| string* | - |
| tag | Custom element tag | *string* | `div` |

### Row Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click row | *event: Event* |

### Col Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click col | *event: Event* |
