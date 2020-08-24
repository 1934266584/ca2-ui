import { mount, later } from '../../../test';

export async function submitForm(wrapper) {
  wrapper.find('.ca2-button').trigger('click');
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
      <ca2-form ref="form" @failed="onFailed">
        <ca2-field name="A" :rules="rulesA" value="" />
        <ca2-field name="B" :rules="rulesB" value="" />
        <ca2-button native-type="submit" />
      </ca2-form>
    `,
    data: getSimpleRules,
    ...options,
  });
}
