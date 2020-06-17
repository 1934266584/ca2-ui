/*
 * @Author: Joran Yang
 * @Date: 2020-06-14 11:22:09
 * @Description: Description
 * @LastEditors: Joran Yang
 * @LastEditTime: 2020-06-16 23:44:36
 */

// Utils
import { createNamespace } from '../utils';

// Components
import Item from '../item';

const [createComponent, bem, t] = createNamespace('item-panel');

export default createComponent({
  props: {
    itemObjectList: {
      type: Array,
      default: () => {
        return [];
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
  },

  computed: {
    itemObjectArr() {
      return this.itemObjectList.map((element) => {
        if (isNaN(element.line)) {
          element.line = this.line;
        }
        if (isNaN(element.isTwoCol)) {
          element.isTwoCol = this.isTwoCol;
        }
        return element;
      });
    },
  },

  methods: {
    slotEvent(data) {
      // console.log(data, 1)
      this.$emit('slot-event', data);
    },
  },

  render(h) {
    const { itemObjectArr, slotEvent } = this;
    let current = ''; // 单元格位置 left: 左侧, right: 右侧, '': 一行显示
    const eles = itemObjectArr.map((itemObjectArr, i) => {
      // 如果是分栏显示
      if (itemObjectArr.isTwoCol) {
        // 当前一个位置为 '' 或 right,重置当前位置为left
        if (current === '' || current === 'right') {
          current = 'left';
        } else {
          // 当前一个位置为left,重置当前位置为right
          current = 'right';
        }
      } else {
        // 不是分栏显示,重置current为''
        current = '';
      }
      return (
        <Item
          itemObject={itemObjectArr}
          isTwoCol={itemObjectArr.isTwoCol}
          line={itemObjectArr.line}
          position={current}
          index={i}
          on-slot-event={slotEvent.bind(this)}
        >
          {itemObjectArr.slot && itemObjectArr.slot.bind(this)()}
        </Item>
      );
    });
    const box = bem();
    return <div class={box}>{eles}</div>;
  },
});
