import { mount, later } from '../../../test';

// this case will throw wierd error in index.spec.js
// so separate it
test('insert tab dynamically', async () => {
  const wrapper = mount({
    template: `
      <zv-tabs v-model="active">
        <zv-tab title="1">1</zv-tab>
        <div v-if="insert">
          <zv-tab title="2">2</zv-tab>
        </div>
        <zv-tab title="3">3</zv-tab>
      </zv-tabs>
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
      <zv-tabs v-model="active">
        <zv-tab title="1">1</zv-tab>
        <my-tab />
        <zv-tab title="3">3</zv-tab>
      </zv-tabs>
    `,
    components: {
      'my-tab': {
        template: `<zv-tab title="2">2</zv-tab>`,
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});
