# Form

### Install

```js
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
```

## Usage

### Basic Usage

```html
<zv-form @submit="onSubmit">
  <zv-field
    v-model="username"
    name="Username"
    label="Username"
    placeholder="Username"
    :rules="[{ required: true, message: 'Username is required' }]"
  />
  <zv-field
    v-model="password"
    type="password"
    name="Password"
    label="Password"
    placeholder="Password"
    :rules="[{ required: true, message: 'Password is required' }]"
  />
  <div style="margin: 16px;">
    <zv-button round block type="info" native-type="submit">
      Submit
    </zv-button>
  </div>
</zv-form>
```

```js
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
```

### Validate Rules

```html
<zv-form validate-first @failed="onFailed">
  <zv-field
    v-model="value1"
    name="pattern"
    placeholder="USe pattern"
    :rules="[{ pattern, message: 'Error message' }]"
  />
  <zv-field
    v-model="value2"
    name="validator"
    placeholder="Use validator"
    :rules="[{ validator, message: 'Error message' }]"
  />
  <zv-field
    v-model="value3"
    name="asyncValidator"
    placeholder="Use async validator"
    :rules="[{ validator: asyncValidator, message: 'Error message' }]"
  />
  <div style="margin: 16px;">
    <zv-button round block type="info" native-type="submit">
      Submit
    </zv-button>
  </div>
</zv-form>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
    };
  },
  methods: {
    validator(val) {
      return /1\d{10}/.test(val);
    },
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading('Validating...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
```

### Field Type - Switch

```html
<zv-field name="switch" label="Switch">
  <template #input>
    <zv-switch v-model="switchChecked" size="20" />
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      switchChecked: false,
    };
  },
};
```

### Field Type - Checkbox

```html
<zv-field name="checkbox" label="Checkbox">
  <template #input>
    <zv-checkbox v-model="checkbox" shape="square" />
  </template>
</zv-field>
<zv-field name="checkboxGroup" label="CheckboxGroup">
  <template #input>
    <zv-checkbox-group v-model="checkboxGroup" direction="horizontal">
      <zv-checkbox name="1" shape="square">Checkbox 1</zv-checkbox>
      <zv-checkbox name="2" shape="square">Checkbox 2</zv-checkbox>
    </zv-checkbox-group>
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      checkbox: false,
      checkboxGroup: [],
    };
  },
};
```

### Field Type - Radio

```html
<zv-field name="radio" label="Radio">
  <template #input>
    <zv-radio-group v-model="radio" direction="horizontal">
      <zv-radio name="1">Radio 1</zv-radio>
      <zv-radio name="2">Radio 2</zv-radio>
    </zv-radio-group>
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      radio: '1',
    };
  },
};
```

### Field Type - Stepper

```html
<zv-field name="stepper" label="Stepper">
  <template #input>
    <zv-stepper v-model="stepper"/>
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      stepper: 1,
    };
  },
};
```

### Field Type - Rate

```html
<zv-field name="rate" label="Rate">
  <template #input>
    <zv-rate v-model="rate" />
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      rate: 3,
    };
  },
};
```

### Field Type - Slider

```html
<zv-field name="slider" label="Slider">
  <template #input>
    <zv-slider v-model="slider" />
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      slider: 50,
    };
  },
};
```

### Field Type - Uploader

```html
<zv-field name="uploader" label="Uploader">
  <template #input>
    <zv-uploader v-model="uploader" />
  </template>
</zv-field>
```

```js
export default {
  data() {
    return {
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
    };
  },
};
```

### Field Type - Picker

```html
<zv-field
  readonly
  clickable
  name="picker"
  :value="value"
  label="Picker"
  placeholder="Select city"
  @click="showPicker = true"
/>
<zv-popup v-model="showPicker" position="bottom">
  <zv-picker
    show-toolbar
    :columns="columns"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</zv-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
```

### Field Type - DatetimePicker

```html
<zv-field
  readonly
  clickable
  name="datetimePicker"
  :value="value"
  label="Datetime Picker"
  placeholder="Select time"
  @click="showPicker = true"
/>
<zv-popup v-model="showPicker" position="bottom">
  <zv-datetime-picker
    type="time"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</zv-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
    };
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
  },
};
```

### Field Type - Area

```html
<zv-field
  readonly
  clickable
  name="area"
  :value="value"
  label="Area Picker"
  placeholder="Select area"
  @click="showArea = true"
/>
<zv-popup v-model="showArea" position="bottom">
  <zv-area
    :area-list="areaList"
    @confirm="onConfirm"
    @cancel="showArea = false"
  />
</zv-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showArea: false,
      areaList: {},
    };
  },
  methods: {
    onConfirm(values) {
      this.value = values.map(item => item.name).join('/');
      this.showArea = false;
    },
  },
};
```

### Field Type - Calendar

```html
<zv-field
  readonly
  clickable
  name="calendar"
  :value="value"
  label="Calendar"
  placeholder="Select date"
  @click="showCalendar = true"
/>
<zv-calendar v-model="showCalendar" @confirm="onConfirm" />
```

```js
export default {
  data() {
    return {
      value: '',
      showCalendar: false,
    };
  },
  methods: {
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| label-width | Field label width | *number \| string* | `90px` |
| label-align | Field label align, can be set to `center` `right` | *string* | `left` |
| input-align | Field input align, can be set to `center` `right` | *string* | `left` |
| error-message-align | Error message align, can be set to `center` `right` | *string* | `left` |
| validate-trigger `v2.5.2` | When to validate the form，can be set to `onChange`、`onSubmit` | *string* | `onBlur` |
| colon | Whether to display `:` after label | *boolean* | `false` |
| validate-first | Whether to stop the validation when a rule fails | *boolean* | `false` |
| scroll-to-error `v2.5.2` | Whether to scroll to the error field when submit failed | *boolean* | `false` |

### Data Structure of Rule 

| Key | Description | Type |
|------|------|------|
| required | Whether to be a required field | *boolean* |
| message `v2.5.3` | Error message | *string \| (value, rule) => string* |
| validator `v2.5.3` | Custom validator | *(value, rule) => boolean \| Promise* |
| pattern `v2.5.3` | Regex pattern | *RegExp* |
| trigger `v2.5.2` | When to validate the form，can be set to `onChange`、`onBlur` | *string* |
| formatter `v2.5.3` | Format value before validate | *(value, rule) => any* |

### Events

| Event | Description | Arguments |
|------|------|------|
| submit | Triggered after submitting the form and validation passed | *values: object* |
| failed | Triggered after submitting the form and validation failed |  *errorInfo: { values: object, errors: object[] }* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Form instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| submit | Submit form | - | - |
| validate | Validate form | *name?: string* | *Promise* |
| resetValidation | Reset validation | *name?: string* | - |
| scrollToField `v2.5.2` | Scroll to field | *name: string* | - |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Form content |
