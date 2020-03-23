import { mountForm, submitForm, mountSimpleRulesForm } from './shared';

test('submit event', async () => {
  const onSubmit = jest.fn();
  const wrapper = mountForm({
    template: `
      <zv-form @submit="onSubmit">
        <zv-field name="A" value="bar" />
        <zv-button native-type="submit" />
      </zv-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('failed event', async () => {
  const onFailed = jest.fn();
  const wrapper = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});
