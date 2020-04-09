# Panel 面板

### 引入

```js
import Vue from 'vue';
import { Panel } from 'vant';

Vue.use(Panel);
```

## 代码演示

### 基础用法

面板只是一个容器，里面可以放入自定义的内容

```html
<zv-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
</zv-panel>
```

### 高级用法

使用`slot`自定义内容

```html
<zv-panel title="标题" desc="描述信息" status="状态" is-row>
  <div>内容</div>
  <template #footer>
    <zv-button size="small">按钮</zv-button>
    <zv-button size="small" type="danger">按钮</zv-button>
  </template>
</zv-panel>

<zv-panel>
  <template #header>
    <zv-cell title="标题" label="描述信息">
      <template #right-icon>
        <zv-checkbox v-model="checked" />
      </template>
    </zv-cell>
  </template>
  <div>内容</div>
  <template #footer>
    <zv-button size="small" plain type="primary">按钮</zv-button>
    <zv-button size="small" type="primary">
      按钮
    </zv-button>
  </template>
</zv-panel>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | *string* | - |
| desc | 描述 | *string* | - |
| status | 状态 | *string* | - |
| icon | 标题左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| is-row `v2.5.8` | title和label是否一行显示 | *boolean* | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |
| header | 自定义 header |
| footer | 自定义 footer |
