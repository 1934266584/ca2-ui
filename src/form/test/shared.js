import { mount, later } from '../../../test';

export async function submitForm(wrapper) {
  wrapper.find('.zv-button').trigger('click');
  return later();
}

export function mountForm(options) {
  return mount(options, { attachToDocument: true });
}

export function getSimpleRules() {
  return {
    rulesA: [{ required: true, message: 'A failed' }],
    rulesB: [{ required: true, message: 'B failed' }],
  };
}

export function mountSimpleRulesForm(options) {
  return mountForm({
    template: `
      <zv-form ref="form" @failed="onFailed">
        <zv-field name="A" :rules="rulesA" value="" />
        <zv-field name="B" :rules="rulesB" value="" />
        <zv-button native-type="submit" />
      </zv-form>
    `,
    data: getSimpleRules,
    ...options,
  });
}
