import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <zv-sidebar @change="onChange">
        <zv-sidebar-item @click="onClick">Text</zv-sidebar-item>
      </zv-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.zv-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const wrapper = mount({
    template: `
      <zv-sidebar v-model="active">
        <zv-sidebar-item>Text</zv-sidebar-item>
        <zv-sidebar-item>Text</zv-sidebar-item>
      </zv-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper
    .findAll('.zv-sidebar-item')
    .at(1)
    .trigger('click');
  expect(wrapper.vm.active).toEqual(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <zv-sidebar v-model="active">
        <zv-sidebar-item>Text</zv-sidebar-item>
        <zv-sidebar-item disabled>Text</zv-sidebar-item>
      </zv-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper
    .findAll('.zv-sidebar-item')
    .at(1)
    .trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Sidebar);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});
