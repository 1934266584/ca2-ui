import { mountForm, submitForm } from './shared';

function mountFormWithChild({ template, data }) {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <zv-form @submit="onSubmit" @failed="onFailed">
        <zv-field name="A" :rules="[{ required: true, message: 'foo' }]">
          <template #input>${template}</template>
        </zv-field>
        <zv-button native-type="submit" />
      </zv-form>
    `,
    data,
    methods: {
      onSubmit,
      onFailed,
    },
  });

  return {
    wrapper,
    onSubmit,
    onFailed,
  };
}

test('use switch', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-switch v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-checkbox v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox-group', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <zv-checkbox-group v-model="checkboxGroup">
        <zv-checkbox name="1">1</zv-checkbox>
        <zv-checkbox name="2">2</zv-checkbox>
      </zv-checkbox-group>
    `,
    data() {
      return { checkboxGroup: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ checkboxGroup: ['1'] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: ['1'] });
});

test('use radio', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <zv-radio-group v-model="radio">
        <zv-radio name="1">1</zv-radio>
        <zv-radio name="2">2</zv-radio>
      </zv-radio-group>
    `,
    data() {
      return { radio: '' };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '' },
  });

  wrapper.setData({ radio: '1' });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '1' });
});

test('use stepper', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-stepper v-model="value" :min="0" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use rate', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-rate v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use slider', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-slider v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: 0 },
  });

  wrapper.setData({ value: 50 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 50 });
});

test('use uploader', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<zv-uploader v-model="value" />',
    data() {
      return { value: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ value: [{ url: 'foo' }] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: [{ url: 'foo' }] });
});

test('should not get formValue from button slot', async () => {
  const onSubmit = jest.fn();

  const wrapper = mountForm({
    template: `
      <zv-form @submit="onSubmit">
        <zv-field name="A" value="foo" :rules="[{ required: true, message: 'foo' }]">
          <template #button>
            <zv-checkbox :value="false" />
          </template>
        </zv-field>
        <zv-button native-type="submit" />
      </zv-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo' });
});
