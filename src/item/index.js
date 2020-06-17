/*
 * @Author: Joran Yang
 * @Date: 2020-05-29 14:11:24
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-17 10:00:44
 */

// Utils
import { createNamespace } from '../utils';

// Components
const [createComponent, bem, t] = createNamespace('item');

export default createComponent({
  i18n: {
    'zh-CN': {
      itemObject: {
        title: '标题',
        value: '内容',
      },
    },
    'en-US': {
      itemObject: {
        title: 'title',
        value: 'content',
      },
    },
  },
  props: {
    itemObject: {
      type: Object,
      default: () => {
        return t('itemObject');
      },
    },
    line: {
      type: Number,
      default: 0,
    },
    isTwoCol: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      data: {},
    };
  },

  methods: {
    slotEvent() {
      this.$emit('slot-event', this.itemObject);
    },
  },

  render(h) {
    const { slotEvent } = this;
    const box = this.isTwoCol ? bem({ active: 'active' }) : bem();
    let padding = '';
    if (this.position === 'left') {
      padding = bem('padding', { left: 'left' });
    } else if (this.position === 'right') {
      padding = bem('padding', { right: 'right' });
    } else {
      padding = bem('padding');
    }
    const title = bem('title');
    const value = bem('value');
    const style = this.line ? `-webkit-line-clamp: ${this.line}` : '';

    return (
      <div class={box}>
        <div class={padding}>
          <div class={title}>
            {this.itemObject.title}
            <span>:</span>
          </div>
          <div class={value} style={style}>
            {this.itemObject.value}
          </div>
          <div onClick={slotEvent.bind(this)}>
            {this.$slots.default ? this.$slots.default : ''}
          </div>
        </div>
      </div>
    );
  },
});
