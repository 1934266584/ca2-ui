import { mount } from '../../../test';

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <zv-grid>
        <zv-grid-item @click="onClick" />
      </zv-grid>
    `,
    methods: {
      onClick,
    },
  });

  const Item = wrapper.find('.zv-rid-item__content');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('sqaure and set gutter', () => {
  const wrapper = mount({
    template: `
      <zv-grid square :column-num="2" gutter="10rem">
        <zv-grid-item />
        <zv-grid-item />
        <zv-grid-item />
      </zv-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <zv-grid icon-size="10">
        <zv-grid-item icon="success" />
      </zv-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('render icon-slot', () => {
  const wrapper = mount({
    template: `
      <zv-grid icon-size="10">
        <zv-grid-item info="1">
          <div slot="icon" />
        </zv-grid-item>
      </zv-grid>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
