import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <ca2-sidebar @change="onChange">
        <ca2-sidebar-item @click="onClick">Text</ca2-sidebar-item>
      </ca2-sidebar>
    `,
    methods: {
      onClick,
      onChange,
    },
  });

  wrapper.find('.ca2-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const wrapper = mount({
    template: `
      <ca2-sidebar v-model="active">
        <ca2-sidebar-item>Text</ca2-sidebar-item>
        <ca2-sidebar-item>Text</ca2-sidebar-item>
      </ca2-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper.findAll('.ca2-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <ca2-sidebar v-model="active">
        <ca2-sidebar-item>Text</ca2-sidebar-item>
        <ca2-sidebar-item disabled>Text</ca2-sidebar-item>
      </ca2-sidebar>
    `,
    data() {
      return {
        active: 0,
      };
    },
  });

  wrapper.findAll('.ca2-sidebar-item').at(1).trigger('click');
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
