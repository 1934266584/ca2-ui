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
<zv-sidebar v-model="activeKey">
  <zv-sidebar-item title="Title" />
  <zv-sidebar-item title="Title" />
  <zv-sidebar-item title="Title" />
</zv-sidebar>
```

```js
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### Show Badge

```html
<zv-sidebar v-model="activeKey">
  <zv-sidebar-item title="Title" dot />
  <zv-sidebar-item title="Title" badge="5" />
  <zv-sidebar-item title="Title" badge="99+" />
</zv-sidebar>
```

### Disabled

```html
<zv-sidebar v-model="activeKey">
  <zv-sidebar-item title="Title" />
  <zv-sidebar-item title="Title" disabled />
  <zv-sidebar-item title="Title" />
</zv-sidebar>
```

### Change Event

```html
<zv-sidebar v-model="activeKey" @change="onChange">
  <zv-sidebar-item title="Title1" />
  <zv-sidebar-item title="Title2" />
  <zv-sidebar-item title="Title3" />
</zv-sidebar>
```

```js
import { Notify } from 'vant';

export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    }
  }
}
```

## API

### Sidebar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of chosen item | *number \| string* | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | *string* | `''` |
| dot `v2.2.1` | Whether to show red dot | *boolean* | `false` |
| badge `v2.5.6` | Content of the badge | *number \| string* | `''` |
| disabled `v2.2.0` | Whether to be disabled | *boolean* | `false` |
| url | Link | *string* | - |
| to `v2.0.4` | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace `v2.0.4` | If true, the navigation will not leave a history record | *boolean* | `false` |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
