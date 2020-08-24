# NoticeBar

### Install

```js
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<ca2-notice-bar text="Notice Content" left-icon="volume-o" />
```

### Disable scroll

```html
<ca2-notice-bar :scrollable="false">
  Notice Content
</ca2-notice-bar>
```

### Wrapable

```html
<ca2-notice-bar wrapable :scrollable="false">
  Notice Content
</ca2-notice-bar>
```

### Mode

```html
<ca2-notice-bar mode="closeable">
  Notice Content
</ca2-notice-bar>

<ca2-notice-bar mode="link">
  Notice Content
</ca2-notice-bar>
```

### Custom Style

```html
<ca2-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  Notice Content
</ca2-notice-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| mode | Mode, can be set to `closeable` `link` | *string* | `''` |
| text | Notice text content | *string* | `''` | - |
| color | Text color | *string* | `#70b913` |
| background | Background color | *string* | `#f0f8e7` |
| left-icon | Left Icon | *string* | - |
| delay | Animation delay (s) | *number \| string* | `1` |
| speed | Scroll speed (px/s) | *number \| string* | `50` |
| scrollable | Whether to scroll content | *boolean* | `true` |
| wrapable | Whether to enable text wrap | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | *event: Event* |
| close | Triggered when closed | *event: Event* |

### Slots

| Name | Description |
|------|------|
| default | Notice text content |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
