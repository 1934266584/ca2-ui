# Sidebar

### Install

```js
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<ca2-sidebar v-model="activeKey">
  <ca2-sidebar-item title="Title" />
  <ca2-sidebar-item title="Title" />
  <ca2-sidebar-item title="Title" />
</ca2-sidebar>
```

```js
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
```

### Show Badge

```html
<ca2-sidebar v-model="activeKey">
  <ca2-sidebar-item title="Title" dot />
  <ca2-sidebar-item title="Title" badge="5" />
  <ca2-sidebar-item title="Title" badge="99+" />
</ca2-sidebar>
```

### Disabled

```html
<ca2-sidebar v-model="activeKey">
  <ca2-sidebar-item title="Title" />
  <ca2-sidebar-item title="Title" disabled />
  <ca2-sidebar-item title="Title" />
</ca2-sidebar>
```

### Change Event

```html
<ca2-sidebar v-model="activeKey" @change="onChange">
  <ca2-sidebar-item title="Title1" />
  <ca2-sidebar-item title="Title2" />
  <ca2-sidebar-item title="Title3" />
</ca2-sidebar>
```

```js
import { Notify } from 'vant';

export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    },
  },
};
```

## API

### Sidebar Props

| Attribute | Description          | Type               | Default |
| --------- | -------------------- | ------------------ | ------- |
| v-model   | Index of chosen item | _number \| string_ | `0`     |

### Sidebar Events

| Event  | Description                 | Arguments                    |
| ------ | --------------------------- | ---------------------------- |
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Content | _string_ | `''` |
| dot `v2.2.1` | Whether to show red dot | _boolean_ | `false` |
| badge `v2.5.6` | Content of the badge | _number \| string_ | `''` |
| disabled `v2.2.0` | Whether to be disabled | _boolean_ | `false` |
| url | Link | _string_ | - |
| to `v2.0.4` | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace `v2.0.4` | If true, the navigation will not leave a history record | _boolean_ | `false` |

### SidebarItem Events

| Event | Description               | Arguments                    |
| ----- | ------------------------- | ---------------------------- |
| click | Triggered when click item | index: index of current item |
