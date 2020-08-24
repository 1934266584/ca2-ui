# CountDown

### Install

```js
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
```

## Usage

### Basic Usage

```html
<ca2-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
}
```

### Custom Format

```html
<ca2-count-down :time="time" format="DD Day, HH:mm:ss" />
```

### Millisecond

```html
<ca2-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### Custom Style

```html
<ca2-count-down :time="time">
  <template v-slot="timeData">
    <span class="item">{{ timeData.hours }}</span>
    <span class="item">{{ timeData.minutes }}</span>
    <span class="item">{{ timeData.seconds }}</span>
  </template>
</ca2-count-down>

<style>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
```

### Manual Control

```html
<ca2-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finish"
/>
<ca2-grid clickable :column-num="3">
  <ca2-grid-item text="Start" icon="play-circle-o" @click="start" />
  <ca2-grid-item text="Pause" icon="pause-circle-o" @click="pause" />
  <ca2-grid-item text="Reset" icon="replay" @click="reset" />
</ca2-grid>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast('Finished');
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| time | Total time | *number \| string* | `0` |
| format | Time format | *string* | `HH:mm:ss` |
| auto-start | Whether to auto start count down | *boolean* | `true` |
| millisecond | Whether to enable millisecond render | *boolean* | `false` |

### Available formats

| Format | Description |
|------|------|
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Events

| Event | Description | Arguments |
|------|------|------|
| finish | Triggered when count down finished | - |
| change `v2.4.4` | Triggered when count down changed | *timeData: TimeData* |

### Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom Content | *timeData: TimeData* |

### TimeData Structure

| Name | Description | Type |
|------|------|------|
| days | Remain days | *number* |
| hours | Remain hours | *number* |
| minutes | Remain minutes | *number* |
| seconds | Remain seconds | *number* |
| milliseconds | Remain milliseconds | *number* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CountDown instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| start | Start count down | - | - |
| pause | Pause count down | - | - |
| reset | Reset count down | - | - |
