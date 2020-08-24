import { mount, later } from '../../../test';

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab dynamically', async () => {
  const wrapper = mount({
    template: `
      <ca2-tabs v-model="active">
        <ca2-tab title="1">1</ca2-tab>
        <div v-if="insert">
          <ca2-tab title="2">2</ca2-tab>
        </div>
        <ca2-tab title="3">3</ca2-tab>
      </ca2-tabs>
    `,
    data() {
      return {
        insert: false,
        active: 1,
      };
    },
  });

  await later();
  wrapper.setData({ insert: true });
  expect(wrapper).toMatchSnapshot();
});

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab with child component', async () => {
  const wrapper = mount({
    template: `
      <ca2-tabs v-model="active">
        <ca2-tab title="1">1</ca2-tab>
        <my-tab />
        <ca2-tab title="3">3</ca2-tab>
      </ca2-tabs>
    `,
    components: {
      'my-tab': {
        template: `<ca2-tab title="2">2</ca2-tab>`,
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});
