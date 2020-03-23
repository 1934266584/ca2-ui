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
