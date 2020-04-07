# Button

### Install

```js
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
```

## Usage

### Type

```html
<zv-button type="default">Default</zv-button>
<zv-button type="primary">Primary</zv-button>
<zv-button type="info">Info</zv-button>
<zv-button type="danger">Danger</zv-button>
<zv-button type="warning">Warning</zv-button>
```

### Plain

```html
<zv-button plain type="primary">Primary</zv-button>
<zv-button plain type="info">Danger</zv-button>
```

### Hairline

```html
<zv-button plain hairline type="primary">Hairline</zv-button>
<zv-button plain hairline type="info">Hairline</zv-button>
```

### Disabled

```html
<zv-button disabled type="primary">Diabled</zv-button>
<zv-button disabled type="info">Diabled</zv-button>
```

### Loading

```html 
<zv-button loading type="primary" />
<zv-button loading type="primary" loading-type="spinner" />
<zv-button loading type="info" loading-text="Loading..." />
```

### Shape

```html 
<zv-button square type="primary">Square</zv-button>
<zv-button round type="info">Round</zv-button>
```

### Icon

```html 
<zv-button icon="star-o" type="primary" />
<zv-button icon="star-o" type="primary">Button</zv-button>
<zv-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">Button</zv-button>
```

### Size

```html 
<zv-button type="primary" size="large">Large</zv-button>
<zv-button type="primary" size="normal">Normal</zv-button>
<zv-button type="primary" size="small">Small</zv-button>
<zv-button type="primary" size="mini">Mini</zv-button>
```

### Block Element

```html
<zv-button type="primary" block>Block Element</zv-button>
```

### Route

```html
<zv-button type="primary" url="/vant/mobile.html">URL</zv-button>
<zv-button type="primary" to="index">Vue Router</zv-button>
```

### Custom Color

```html
<zv-button color="#7232dd">Pure</zv-button>
<zv-button color="#7232dd" plain>Pure</zv-button>
<zv-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient</zv-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| size | Can be set to `large` `small` `mini` | *string* | `normal` |
| text | Text | *string* | - |
| color `v2.1.8` | Color, support linear-gradient | *string* | - |
| icon | Left Icon | *string* | - |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `zv-icon` |
| tag | HTML Tag | *string* | `button` |
| native-type | Native Type Attribute | *string* | `''` |
| plain | Whether to be plain button | *boolean* | `false` |
| block | Whether to set display block | *boolean* | `false` |
| round | Whether to be round button | *boolean* | `true` |
| square | Whether to be square button | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether show loading status | *boolean* | `false` |
| loading-text | Loading text | *string* | - |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` |
| loading-size | Loading icon size | *string* | `20px` |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | *event: Event* |
| touchstart | Triggered when touch start | *event: TouchEvent* |
