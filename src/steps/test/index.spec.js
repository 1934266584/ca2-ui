import { mount } from '../../../test';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <ca2-steps :active="1">
      <ca2-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </ca2-step>
      <ca2-step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </ca2-step>
      <ca2-step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </ca2-step>
    </ca2-steps>
    `,
  });
  expect(wrapper).toMatchSnapshot();
});

test('click-step event', () => {
  const onClickStep = jest.fn();
  const wrapper = mount({
    template: `
      <ca2-steps :active="1" @click-step="onClickStep">
        <ca2-step>A</ca2-step>
        <ca2-step>B</ca2-step>
        <ca2-step>C</ca2-step>
      </ca2-steps>
    `,
    methods: {
      onClickStep,
    },
  });

  wrapper.find('.ca2-step').trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(0);

  wrapper.find('.ca2-step__title').trigger('click');
  expect(onClickStep).toHaveBeenCalledWith(0);

  wrapper.findAll('.ca2-step__circle-container').at(2).trigger('click');
  expect(onClickStep).toHaveBeenCalledTimes(2);
  expect(onClickStep).toHaveBeenLastCalledWith(2);
});
