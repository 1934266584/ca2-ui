# Layout 布局

### 介绍

Layout 提供了`zv-row`和`zv-col`两个组件来进行行列布局

### 引入

```js
import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<zv-row>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
</zv-row>

<zv-row>
  <zv-col span="4">span: 4</zv-col>
  <zv-col span="10" offset="4">offset: 4, span: 10</zv-col>
</zv-row>

<zv-row>
  <zv-col offset="12" span="12">offset: 12, span: 12</zv-col>
</zv-row>
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<zv-row gutter="20">
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
  <zv-col span="8">span: 8</zv-col>
</zv-row>
```

### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<zv-row type="flex">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<!-- 居中 -->
<zv-row type="flex" justify="center">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<!-- 右对齐 -->
<zv-row type="flex" justify="end">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<!-- 两端对齐 -->
<zv-row type="flex" justify="space-between">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>

<!-- 每个元素的两侧间隔相等 -->
<zv-row type="flex" justify="space-around">
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
  <zv-col span="6">span: 6</zv-col>
</zv-row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 布局方式，可选值为`flex` | *string* | - |
| gutter | 列元素之间的间距（单位为px） | *number \| string* | - |
| tag | 自定义元素标签 | *string* | `div` |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | *string* | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | *string* | `top` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| span | 列元素宽度 | *number \| string* | - |
| offset | 列元素偏移距离 | *number \| string* | - |
| tag | 自定义元素标签 | *string* | `div` |

### Row Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | *event: Event* |

### Col Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | *event: Event* |
