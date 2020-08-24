import { mount, later } from '../../../test';

function renderWrapper(options = {}) {
  return mount({
    template: `
      <ca2-dropdown-menu :direction="direction" :close-on-click-outside="closeOnClickOutside">
        <ca2-dropdown-item v-model="value" :title="title" :options="options" />
        <ca2-dropdown-item v-model="value" :title="title" :options="options" />
      </ca2-dropdown-menu>
    `,
    data() {
      return {
        value: options.value || 0,
        title: options.title || '',
        direction: options.direction || 'down',
        closeOnClickOutside: options.closeOnClickOutside,
        options: [
          { text: 'A', value: 0, icon: options.icon },
          { text: 'B', value: 1, icon: options.icon },
        ],
      };
    },
  });
}

test('show dropdown item', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();

  titles.at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('render option icon', async () => {
  const wrapper = renderWrapper({
    icon: 'success',
  });

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');

  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: true,
  });

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');

  titles.at(0).trigger('click');
  document.body.click();
  expect(wrapper).toMatchSnapshot();
});

test('disable close-on-click-outside', async () => {
  const wrapper = renderWrapper({
    closeOnClickOutside: false,
  });

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');

  titles.at(0).trigger('click');
  document.body.click();
  expect(wrapper).toMatchSnapshot();
});

test('direction up', async () => {
  const { innerHeight } = window;
  window.innerHeight = 1000;

  const wrapper = renderWrapper({
    direction: 'up',
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');
  titles.at(0).trigger('click');
  expect(wrapper).toMatchSnapshot();

  window.innerHeight = innerHeight;
});

test('click option', async () => {
  const wrapper = renderWrapper();

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');
  titles.at(0).trigger('click');

  const options = wrapper.findAll('.ca2-dropdown-item .ca2-cell');
  options.at(1).trigger('click');

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('title prop', async () => {
  const wrapper = renderWrapper({ title: 'Title' });
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('didn`t find matched option', async () => {
  const wrapper = renderWrapper({ value: -1 });
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('destroy one item', async () => {
  const wrapper = mount({
    template: `
      <ca2-dropdown-menu>
        <ca2-dropdown-item v-if="render" v-model="value" :options="options" />
        <ca2-dropdown-item v-model="value" :options="options" />
      </ca2-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        render: true,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
  });

  await later();
  wrapper.setData({ render: false });
  expect(wrapper).toMatchSnapshot();
});

test('disable dropdown item', async () => {
  const wrapper = mount({
    template: `
      <ca2-dropdown-menu>
        <ca2-dropdown-item disabled v-model="value" :options="options" />
      </ca2-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
  });

  const title = wrapper.find('.ca2-dropdown-menu__title');
  title.trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('change event', async () => {
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <ca2-dropdown-menu>
        <ca2-dropdown-item v-model="value" :options="options" @change="onChange" />
        <ca2-dropdown-item v-model="value" :options="options" />
      </ca2-dropdown-menu>
    `,
    data() {
      return {
        value: 0,
        options: [
          { text: 'A', value: 0 },
          { text: 'B', value: 1 },
        ],
      };
    },
    methods: {
      onChange,
    },
  });

  await later();

  const titles = wrapper.findAll('.ca2-dropdown-menu__title');
  titles.at(0).trigger('click');

  const options = wrapper.findAll('.ca2-dropdown-item .ca2-cell');
  options.at(0).trigger('click');

  expect(onChange).toHaveBeenCalledTimes(0);

  options.at(1).trigger('click');
  expect(onChange).toHaveBeenCalledWith(1);
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('toggle method', async done => {
  const wrapper = mount({
    template: `
      <ca2-dropdown-menu>
        <ca2-dropdown-item ref="item" />
      </ca2-dropdown-menu>
    `,
    async mounted() {
      // show
      this.$refs.item.toggle(true, { immediate: true });
      await later();
      expect(wrapper).toMatchSnapshot();

      // hide
      this.$refs.item.toggle(false, { immediate: true });
      await later();
      expect(wrapper).toMatchSnapshot();

      done();
    },
  });
});

test('title slot', () => {
  const wrapper = mount({
    template: `
      <ca2-dropdown-menu>
        <ca2-dropdown-item>
          <template #title>
            Custom Title
          </template>
        </ca2-dropdown-item>
      </ca2-dropdown-menu>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});
