import { mount } from '../../../test';

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <ca2-grid>
        <ca2-grid-item @click="onClick" />
      </ca2-grid>
    `,
    methods: {
      onClick,
    },
  });

  const Item = wrapper.find('.ca2-grid-item__content');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('sqaure and set gutter', () => {
  const wrapper = mount({
    template: `
      <ca2-grid square :column-num="2" gutter="10rem">
        <ca2-grid-item />
        <ca2-grid-item />
        <ca2-grid-item />
      </ca2-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <ca2-grid icon-size="10">
        <ca2-grid-item icon="success" />
      </ca2-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render icon-slot', () => {
  const wrapper = mount({
    template: `
      <ca2-grid icon-size="10">
        <ca2-grid-item info="1">
          <div slot="icon" />
        </ca2-grid-item>
      </ca2-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
