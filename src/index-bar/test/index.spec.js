import { mount, trigger, triggerDrag, mockScrollIntoView } from '../../../test';

function mockOffsetHeight(offsetHeight) {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    get() {
      return offsetHeight;
    },
  });
}

test('custom anchor text', () => {
  const wrapper = mount({
    template: `
      <zv-index-bar>
        <zv-index-anchor index="A">Title A</zv-index-anchor>
        <zv-index-anchor index="B">Title B</zv-index-anchor>
      </zv-index-bar>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('click and scroll to anchor', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <zv-index-bar @select="onSelect">
        <zv-index-anchor index="A" />
        <zv-index-anchor index="B" />
      </zv-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.zv-ndex-bar__index');
  indexes.at(0).trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('touch and scroll to anchor', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <zv-index-bar @select="onSelect">
        <zv-index-anchor index="A" />
        <zv-index-anchor index="B" />
        <zv-index-anchor index="XXX" />
      </zv-index-bar>
    `,
    methods: {
      onSelect,
    },
  });

  const fn = mockScrollIntoView();
  const sidebar = wrapper.find('.zv-ndex-bar__sidebar');
  const indexes = wrapper.findAll('.zv-ndex-bar__index');

  document.elementFromPoint = function(x, y) {
    const index = y / 100;

    if (index === 1 || index === 2) {
      return indexes.at(index).element;
    }

    if (index === 3) {
      return {
        dataset: {},
      };
    }
  };

  // horizontal drag
  triggerDrag(sidebar, 100, 0);
  expect(fn).toHaveBeenCalledTimes(0);

  // vertical drag
  trigger(sidebar, 'touchstart', 0, 0);
  trigger(sidebar, 'touchmove', 0, 100);
  trigger(sidebar, 'touchmove', 0, 200);
  trigger(sidebar, 'touchmove', 0, 300);
  trigger(sidebar, 'touchmove', 0, 400);
  trigger(sidebar, 'touchend', 0, 400);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('B');
});

test('scroll and update active anchor', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function() {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0,
    };
  };

  mockOffsetHeight(10);

  const wrapper = mount({
    template: `
      <zv-index-bar :sticky="sticky">
        <zv-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </zv-index-bar>
    `,
    data() {
      return {
        sticky: false,
      };
    },
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ sticky: true });
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();
  wrapper.vm.$destroy();

  Element.prototype.getBoundingClientRect = nativeRect;
});
