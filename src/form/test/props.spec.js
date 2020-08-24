import { later, mockScrollIntoView } from '../../../test';
import { mountForm, submitForm, getSimpleRules } from './shared';

test('rules prop - execute order', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ca2-form @failed="onFailed">
        <ca2-field name="A" :rules="rules" value="123" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        rules: [
          { required: true, message: 'A' },
          { validator: (val) => val.length > 6, message: 'B' },
          { validator: (val) => val !== 'foo', message: 'C' },
        ],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'B', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - pattern', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ca2-form @failed="onFailed">
        <ca2-field name="A" :rules="rules" value="123" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        rules: [{ pattern: /\d{6}/, message: 'foo' }],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - message function', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ca2-form @failed="onFailed">
        <ca2-field name="A" :rules="rules" value="123" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        rules: [{ pattern: /\d{6}/, message: (val) => val }],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: '123', name: 'A' }],
    values: { A: '123' },
  });
});

test('rules prop - formatter', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ca2-form @failed="onFailed">
        <ca2-field name="A" :rules="rules" value=" " />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        rules: [
          {
            message: 'foo',
            required: true,
            formatter: (val, rule) => {
              expect(rule.message).toEqual('foo');
              return val.trim();
            },
          },
        ],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: ' ' },
  });
});

test('rules prop - async validator', async () => {
  const onFailed = jest.fn();
  const wrapper = mountForm({
    template: `
      <ca2-form @failed="onFailed">
        <ca2-field name="A" :rules="rules" value="123" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        rules: [
          {
            validator: (value, rule) => {
              expect(value).toEqual('123');
              expect(typeof rule).toEqual('object');
              return new Promise((resolve) => resolve(true));
            },
            message: 'should pass',
          },
          {
            validator: () => new Promise((resolve) => resolve(false)),
            message: 'should fail',
          },
        ],
      };
    },
    methods: {
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'should fail', name: 'A' }],
    values: { A: '123' },
  });
});

test('validate-first prop', async () => {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <ca2-form validate-first @submit="onSubmit" @failed="onFailed">
        <ca2-field name="A" :rules="rulesA" :value="value" />
        <ca2-field name="B" :rules="rulesB" :value="value" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
    methods: {
      onSubmit,
      onFailed,
    },
  });

  await submitForm(wrapper);

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'A failed', name: 'A' }],
    values: { A: '', B: '' },
  });

  wrapper.setData({ value: 'foo' });
  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo', B: 'foo' });
});

test('colon prop', () => {
  const wrapper = mountForm({
    template: `
      <ca2-form colon>
        <ca2-field label="Label" />
        <ca2-field>
          <template #label>Custom Label</template>
        </ca2-field>
      </ca2-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('label-align prop', () => {
  const wrapper = mountForm({
    template: `
      <ca2-form label-align="right">
        <ca2-field label="Label" />
        <ca2-field label="Label" label-align="center" />
      </ca2-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('label-width prop', () => {
  const wrapper = mountForm({
    template: `
      <ca2-form label-width="5rem">
        <ca2-field label="Label" />
        <ca2-field label="Label" label-width="10vw" />
      </ca2-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('input-align prop', () => {
  const wrapper = mountForm({
    template: `
      <ca2-form input-align="right">
        <ca2-field />
        <ca2-field>
          <template #input>
            <div />
          </template>
        </ca2-field>
      </ca2-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('error-message-align prop', () => {
  const wrapper = mountForm({
    template: `
      <ca2-form error-message-align="right">
        <ca2-field error-message="Error" />
      </ca2-form>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('validate-trigger - onBlur', async () => {
  const wrapper = mountForm({
    template: `
      <ca2-form ref="form">
        <ca2-field name="A" :rules="rulesA" value="" />
      </ca2-form>
    `,
    data: getSimpleRules,
  });

  const input = wrapper.find('input');

  input.trigger('input');
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeFalsy();

  input.trigger('blur');
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeTruthy();
});

test('validate-trigger - onChange', async () => {
  const wrapper = mountForm({
    template: `
      <ca2-form validate-trigger="onChange" ref="form">
        <ca2-field v-model="value" name="A" :rules="rulesA" />
      </ca2-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
  });

  const input = wrapper.find('input');

  input.trigger('blur');
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeFalsy();

  wrapper.setData({ value: '1' });
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeFalsy();

  wrapper.setData({ value: '' });
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeTruthy();
});

test('validate-trigger - custom trigger in rules', async () => {
  const wrapper = mountForm({
    template: `
      <ca2-form validate-trigger="none" ref="form">
        <ca2-field name="A" :rules="rulesA" :value="valueA" />
        <ca2-field name="B" :rules="rulesB" :value="valueB" />
      </ca2-form>
    `,
    data() {
      return {
        valueA: '',
        valueB: '',
        rulesA: [
          {
            message: 'A',
            required: true,
            trigger: 'onChange',
          },
        ],
        rulesB: [
          {
            message: 'B',
            required: true,
            trigger: 'onBlur',
          },
        ],
      };
    },
  });

  const inputs = wrapper.findAll('input');

  inputs.at(0).trigger('blur');
  wrapper.setData({ valueB: '1' });
  await later();
  wrapper.setData({ valueB: '' });
  await later();
  expect(wrapper.contains('.ca2-field__error-message')).toBeFalsy();

  inputs.at(1).trigger('blur');
  wrapper.setData({ valueA: '1' });
  await later();
  wrapper.setData({ valueA: '' });
  await later();
  expect(
    wrapper.element.querySelectorAll('.ca2-field__error-message').length
  ).toEqual(2);
});

test('scroll-to-error prop', async () => {
  const fn = mockScrollIntoView();
  const wrapper = mountForm({
    template: `
      <ca2-form scroll-to-error>
        <ca2-field name="A" :rules="rulesA" value="" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data: getSimpleRules,
  });

  await submitForm(wrapper);

  expect(fn).toHaveBeenCalledTimes(1);
});

test('show-error-message prop', async () => {
  const wrapper = mountForm({
    template: `
      <ca2-form :show-error-message="showErrorMessage">
        <ca2-field name="A" :rules="rulesA" value="" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        showErrorMessage: false,
      };
    },
  });

  await submitForm(wrapper);
  expect(wrapper.contains('.ca2-field__error-message')).toBeFalsy();

  wrapper.setData({ showErrorMessage: true });

  await submitForm(wrapper);
  expect(wrapper.contains('.ca2-field__error-message')).toBeTruthy();
});

test('show-error prop', async () => {
  const wrapper = mountForm({
    template: `
      <ca2-form :show-error="showError">
        <ca2-field name="A" :rules="rulesA" value="" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data() {
      return {
        ...getSimpleRules(),
        showError: false,
      };
    },
  });

  await submitForm(wrapper);
  expect(wrapper.contains('.ca2-field--error')).toBeFalsy();

  wrapper.setData({ showError: true });

  await submitForm(wrapper);
  expect(wrapper.contains('.ca2-field--error')).toBeTruthy();
});
