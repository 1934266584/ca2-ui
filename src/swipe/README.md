# Swipe

### Install

```js
import Vue from 'vue';
import { Swipe, SwipeItem } from 'ca2t';

Vue.use(Swipe);
Vue.use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval

```html
<ca2-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <ca2-swipe-item>1</ca2-swipe-item>
  <ca2-swipe-item>2</ca2-swipe-item>
  <ca2-swipe-item>3</ca2-swipe-item>
  <ca2-swipe-item>4</ca2-swipe-item>
</ca2-swipe>

<style>
  .my-swipe .ca2-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
```

### Image Lazyload

Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<ca2-swipe>
  <ca2-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </ca2-swipe-item>
</ca2-swipe>
```

```js
import Vue from 'vue';
import { Lazyload } from 'ca2t';

Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/ca2t/apple-1.jpg',
        'https://img.yzcdn.cn/ca2t/apple-2.jpg',
      ],
    };
  },
};
```

### Change Event

```html
<ca2-swipe @change="onChange">
  <ca2-swipe-item>1</ca2-swipe-item>
  <ca2-swipe-item>2</ca2-swipe-item>
  <ca2-swipe-item>3</ca2-swipe-item>
  <ca2-swipe-item>4</ca2-swipe-item>
</ca2-swipe>
```

```js
import { Toast } from 'ca2t';

export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    },
  },
};
```

### Vertical Scrolling

```html
<ca2-swipe :autoplay="3000" vertical>
  <ca2-swipe-item>1</ca2-swipe-item>
  <ca2-swipe-item>2</ca2-swipe-item>
  <ca2-swipe-item>3</ca2-swipe-item>
  <ca2-swipe-item>4</ca2-swipe-item>
</ca2-swipe>
```

### Set SwipeItem Size

```html
<ca2-swipe :loop="false" :width="300">
  <ca2-swipe-item>1</ca2-swipe-item>
  <ca2-swipe-item>2</ca2-swipe-item>
  <ca2-swipe-item>3</ca2-swipe-item>
  <ca2-swipe-item>4</ca2-swipe-item>
</ca2-swipe>
```

> It's not supported to set SwipeItem size in the loop mode

### Custom Indicator

```html
<ca2-swipe @change="onChange">
  <ca2-swipe-item>1</ca2-swipe-item>
  <ca2-swipe-item>2</ca2-swipe-item>
  <ca2-swipe-item>3</ca2-swipe-item>
  <ca2-swipe-item>4</ca2-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
</ca2-swipe>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
```

```js
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Autoplay interval (ms) | _number \| string_ | - |
| duration | Animation duration (ms) | _number \| string_ | `500` |
| initial-swipe | Index of initial swipe, start from 0 | _number \| string_ | `0` |
| width | Set Swiper Item Width | _number \| string_ | `0` |
| height | Set Swiper Item Height | _number \| string_ | `0` |
| loop | Whether to enable loop | _boolean_ | `true` |
| show-indicators | Whether to show indicators | _boolean_ | `true` |
| vertical | Whether to be vertical Scrolling | _boolean_ | `false` |
| touchable | Whether to allow swipe by touch gesture | _boolean_ | `true` |
| stop-propagation `v2.1.0` | Whether to stop touchmove event propagation | _boolean_ | `false` |
| lazy-render `v2.5.8` | Whether to enable lazy render | _boolean_ | `false` |
| indicator-color | Indicator color | _string_ | `#1989fa` |

### Swipe Events

| Event  | Description                         | Arguments                     |
| ------ | ----------------------------------- | ----------------------------- |
| change | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| click | Triggered when clicked | _event: Event_ |

### Swipe Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Swipe instance and call instance methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| prev `v2.4.2` | Swipe to prev item | - | - |
| next `v2.4.2` | Swipe to next item | - | - |
| swipeTo | Swipe to target index | index: target index, options: Options | void |
| resize `v2.2.14` | Resize Swipe when container element resized | - | void |

### swipeTo Options

| Name      | Description               | Type      |
| --------- | ------------------------- | --------- |
| immediate | Whether to skip animation | _boolean_ |

### Swipe Slots

| Name      | Description      |
| --------- | ---------------- |
| default   | Content          |
| indicator | Custom indicator |
