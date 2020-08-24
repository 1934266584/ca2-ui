<template>
  <demo-section>
    <ca2-cell is-link @touchstart.native.stop="keyboard = 'default'">
      {{ t('button1') }}
    </ca2-cell>
    <ca2-cell is-link @touchstart.native.stop="keyboard = 'custom'">
      {{ t('button2') }}
    </ca2-cell>
    <ca2-cell is-link @touchstart.native.stop="keyboard = 'extraKey'">
      {{ t('button3') }}
    </ca2-cell>
    <ca2-cell is-link @touchstart.native.stop="keyboard = 'title'">
      {{ t('button4') }}
    </ca2-cell>
    <ca2-field
      readonly
      clickable
      :value="value"
      :label="t('bindValue')"
      :placeholder="t('clickToInput')"
      @touchstart.native.stop="keyboard = 'bindValue'"
    />

    <ca2-number-keyboard
      :show="keyboard === 'default'"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <ca2-number-keyboard
      :show="keyboard === 'custom'"
      :close-button-text="t('close')"
      theme="custom"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <ca2-number-keyboard
      :show="keyboard === 'extraKey'"
      :close-button-text="t('close')"
      extra-key="X"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <ca2-number-keyboard
      :show="keyboard === 'title'"
      :close-button-text="t('close')"
      :title="t('title')"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <ca2-number-keyboard
      v-model="value"
      :show="keyboard === 'bindValue'"
      maxlength="6"
      @blur="keyboard = ''"
    />
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      close: '完成',
      input: '输入',
      title: '键盘标题',
      button1: '弹出默认键盘',
      button2: '弹出带右侧栏的键盘',
      button3: '弹出身份证号键盘',
      button4: '弹出带标题的键盘',
      bindValue: '双向绑定',
      clickToInput: '点此输入',
      extraKey: '左下角按键内容',
    },
    'en-US': {
      close: 'Close',
      input: 'Input',
      title: 'Keyboard Title',
      button1: 'Show Default Keyboard',
      button2: 'Show Keyboard With Sidebar',
      button3: 'Show IdNumber Keyboard',
      button4: 'Show Keyboard With Title',
      bindValue: 'Bind Value',
      clickToInput: 'Click To Input',
      extraKey: 'IdNumber Keyboard',
    },
  },

  data() {
    return {
      value: '',
      keyboard: 'default',
    };
  },

  methods: {
    onInput(value) {
      this.$toast(`${this.t('input')}: ${value}`);
    },

    onDelete() {
      this.$toast(this.t('delete'));
    },
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-number-keyboard {
  padding-bottom: 300px;

  .ca2-button {
    margin-left: $padding-md;
  }
}
</style>
