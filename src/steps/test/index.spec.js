import { mount } from '../../../test';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <zv-steps :active="1">
      <zv-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </zv-step>
      <zv-step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </zv-step>
      <zv-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </zv-step>
    </zv-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('click-step event', () => {
  const onClickStep = jest.fn();
  const wrapper = mount({
    template: `
      <zv-steps :active="1" @click-step="onClickStep">
        <zv-step>A</zv-step>
        <zv-step>B</zv-step>
        <zv-step>C</zv-step>
      </zv-steps>
    `,
    methods: {
      onClickStep,
    },
  });

  wrapper.find('.zv-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.zv-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.zv-step__circle-container').at(2).trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});
