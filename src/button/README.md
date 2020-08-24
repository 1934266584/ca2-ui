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
<ca2-button type="default">Default</ca2-button>
<ca2-button type="primary">Primary</ca2-button>
<ca2-button type="info">Info</ca2-button>
<ca2-button type="danger">Danger</ca2-button>
<ca2-button type="warning">Warning</ca2-button>
```

### Plain

```html
<ca2-button plain type="primary">Primary</ca2-button>
<ca2-button plain type="info">Danger</ca2-button>
```

### Hairline

```html
<ca2-button plain hairline type="primary">Hairline</ca2-button>
<ca2-button plain hairline type="info">Hairline</ca2-button>
```

### Disabled

```html
<ca2-button disabled type="primary">Diabled</ca2-button>
<ca2-button disabled type="info">Diabled</ca2-button>
```

### Loading

```html 
<ca2-button loading type="primary" />
<ca2-button loading type="primary" loading-type="spinner" />
<ca2-button loading type="info" loading-text="Loading..." />
```

### Shape

```html 
<ca2-button square type="primary">Square</ca2-button>
<ca2-button round type="info">Round</ca2-button>
```

### Icon

```html 
<ca2-button icon="star-o" type="primary" />
<ca2-button icon="star-o" type="primary">Button</ca2-button>
<ca2-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">Button</ca2-button>
```

### Size

```html 
<ca2-button type="primary" size="large">Large</ca2-button>
<ca2-button type="primary" size="normal">Normal</ca2-button>
<ca2-button type="primary" size="small">Small</ca2-button>
<ca2-button type="primary" size="mini">Mini</ca2-button>
```

### Block Element

```html
<ca2-button type="primary" block>Block Element</ca2-button>
```

### Route

```html
<ca2-button type="primary" url="/vant/mobile.html">URL</ca2-button>
<ca2-button type="primary" to="index">Vue Router</ca2-button>
```

### Custom Color

```html
<ca2-button color="#7232dd">Pure</ca2-button>
<ca2-button color="#7232dd" plain>Pure</ca2-button>
<ca2-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient</ca2-button>
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
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `ca2-icon` |
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
