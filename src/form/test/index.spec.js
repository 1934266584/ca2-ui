import { mountForm, submitForm } from './shared';

test('dynamic add/remove fileds', async () => {
  const onSubmit = jest.fn();
  const wrapper = mountForm({
    template: `
      <zv-form @submit="onSubmit">
        <zv-field
          v-for="item in list"
          :key="item"
          :name="item"
          value=""
        />
        <zv-button native-type="submit" />
      </zv-form>
    `,
    data() {
      return { list: ['A'] };
    },
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '' });

  wrapper.setData({ list: ['A', 'B'] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '', B: '' });

  wrapper.setData({ list: ['B'] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ B: '' });
});

test('dynamic add fileds when validate-first', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <zv-form validate-first @failed="onFailed">
        <zv-field
          v-if="show"
          name="A"
          value=""
          :rules="[{ required: true, message: 'A' }]"
        />
        <zv-field
          name="B"
          value=""
          :rules="[{ required: true, message: 'B' }]"
        />
        <zv-button native-type="submit" />
      </zv-form>
    `,
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);
  expect(onFailed.mock.calls[0][0].errors[0].name).toEqual('B');

  wrapper.setData({ show: true });

  await submitForm(wrapper);
  expect(onFailed.mock.calls[1][0].errors[0].name).toEqual('A');
});
