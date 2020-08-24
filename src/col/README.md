# Layout

### Intro

Quickly and easily create layouts with `ca2-row` and `ca2-col`

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
<ca2-row>
  <ca2-col span="8">span: 8</ca2-col>
  <ca2-col span="8">span: 8</ca2-col>
  <ca2-col span="8">span: 8</ca2-col>
</ca2-row>

<ca2-row>
  <ca2-col span="4">span: 4</ca2-col>
  <ca2-col span="10" offset="4">offset: 4, span: 10</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>

<ca2-row>
  <ca2-col offset="12" span="12">offset: 12, span: 12</ca2-col>
</ca2-row>
```


### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<ca2-row gutter="20">
  <ca2-col span="8">span: 8</ca2-col>
  <ca2-col span="8">span: 8</ca2-col>
  <ca2-col span="8">span: 8</ca2-col>
</ca2-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<ca2-row type="flex">
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>

<ca2-row type="flex" justify="center">
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>

<ca2-row type="flex" justify="end">
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>

<ca2-row type="flex" justify="space-between">
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>

<ca2-row type="flex" justify="space-around">
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
  <ca2-col span="6">span: 6</ca2-col>
</ca2-row>
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
