import VueRouter from 'vue-router';
import { mount, later } from '../../../test';
import Vue from 'vue';
import Tabbar from '..';

Vue.use(VueRouter);

test('route mode', async () => {
  const router = new VueRouter();
  const wrapper = mount({
    router,
    template: `
      <zv-tabbar route>
        <zv-tabbar-item replace to="/">
          Tab
        </zv-tabbar-item>
        <zv-tabbar-item replace to="/search">
          Tab
        </zv-tabbar-item>
        <zv-tabbar-item replace :to="{ path: '/star' }">
          Tab
        </zv-tabbar-item>
        <zv-tabbar-item>
          Tab
        </zv-tabbar-item>
      </zv-tabbar>
    `,
  });

  expect(wrapper).toMatchSnapshot();

  const items = wrapper.findAll('.zv-abbar-item');

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(2).trigger('click');
  items.at(3).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('route mode match by name', async () => {
  const Foo = { render: () => 'Foo' };
  const Bar = { render: () => 'Bar' };
  const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo, name: 'foo' },
      { path: '/bar', component: Bar, name: 'bar' },
    ],
  });

  const wrapper = mount({
    router,
    template: `
      <zv-tabbar route>
        <zv-tabbar-item :to="{ name: 'foo' }">
          Tab
        </zv-tabbar-item>
        <zv-tabbar-item :to="{ name: 'bar' }">
          Tab
        </zv-tabbar-item>
      </zv-tabbar>
    `,
  });

  const items = wrapper.findAll('.zv-abbar-item');
  items.at(0).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('router NavigationDuplicated', async done => {
  expect(async () => {
    const router = new VueRouter();
    const wrapper = mount({
      router,
      template: `
      <zv-tabbar route>
        <zv-tabbar-item replace to="/home">
          Tab
        </zv-tabbar-item>
      </zv-tabbar>
    `,
    });

    const item = wrapper.find('.zv-abbar-item');
    item.trigger('click');
    item.trigger('click');

    await later();
    done();
  }).not.toThrow();
});

test('watch tabbar value', () => {
  const wrapper = mount({
    template: `
      <zv-tabbar :value="value">
        <zv-tabbar-item>Tab</zv-tabbar-item>
        <zv-tabbar-item>Tab</zv-tabbar-item>
      </zv-tabbar>
    `,
    data() {
      return {
        value: 0,
      };
    },
  });

  wrapper.setData({ value: 1 });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <zv-tabbar @change="onChange">
        <zv-tabbar-item @click="onClick">Tab</zv-tabbar-item>
      </zv-tabbar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.zv-abbar-item').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('name prop', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <zv-tabbar :value="value" @change="onChange">
        <zv-tabbar-item name="a">Tab</zv-tabbar-item>
        <zv-tabbar-item name="b">Tab</zv-tabbar-item>
      </zv-tabbar>
    `,
    data() {
      return {
        value: 'a',
      };
    },
    methods: {
      onChange,
    },
  });

  wrapper
    .findAll('.zv-abbar-item')
    .at(1)
    .trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
