import { mountForm, submitForm } from './shared';

function mountFormWithChild({ template, data }) {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <ca2-form @submit="onSubmit" @failed="onFailed">
        <ca2-field name="A" :rules="[{ required: true, message: 'foo' }]">
          <template #input>${template}</template>
        </ca2-field>
        <ca2-button native-type="submit" />
      </ca2-form>
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
    template: '<ca2-switch v-model="value" />',
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
    template: '<ca2-checkbox v-model="value" />',
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
      <ca2-checkbox-group v-model="checkboxGroup">
        <ca2-checkbox name="1">1</ca2-checkbox>
        <ca2-checkbox name="2">2</ca2-checkbox>
      </ca2-checkbox-group>
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
      <ca2-radio-group v-model="radio">
        <ca2-radio name="1">1</ca2-radio>
        <ca2-radio name="2">2</ca2-radio>
      </ca2-radio-group>
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
    template: '<ca2-stepper v-model="value" :min="0" />',
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
    template: '<ca2-rate v-model="value" />',
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
    template: '<ca2-slider v-model="value" />',
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
    template: '<ca2-uploader v-model="value" />',
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
      <ca2-form @submit="onSubmit">
        <ca2-field name="A" value="foo" :rules="[{ required: true, message: 'foo' }]">
          <template #button>
            <ca2-checkbox :value="false" />
          </template>
        </ca2-field>
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo' });
});
