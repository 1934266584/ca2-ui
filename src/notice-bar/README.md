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
<zv-notice-bar text="Notice Content" left-icon="volume-o" />
```

### Disable scroll

```html
<zv-notice-bar :scrollable="false">
  Notice Content
</zv-notice-bar>
```

### Wrapable

```html
<zv-notice-bar wrapable :scrollable="false">
  Notice Content
</zv-notice-bar>
```

### Mode

```html
<zv-notice-bar mode="closeable">
  Notice Content
</zv-notice-bar>

<zv-notice-bar mode="link">
  Notice Content
</zv-notice-bar>
```

### Custom Style

```html
<zv-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  Notice Content
</zv-notice-bar>
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
