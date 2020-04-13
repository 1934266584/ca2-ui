import { createNamespace } from '../utils';

// Components
import Row from '../row';
import Col from '../col';
import Popup from '../popup';
import ScreenItem from './components/ScreenItem';
import Button from '../button';
import { deepClone } from '../utils/deep-clone';

const [createComponent, bem] = createNamespace('screen');

export default createComponent({
  props: {
    value: Boolean,
    sectionCount: Number,
    columnCount: Number,
    isFull: {
      type: Boolean,
      default: false,
    },
    dataArray: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      valueList: [],
      titleList: [],
      show: this.value,
    };
  },

  watch: {
    dataArray: {
      handler(val) {
        const dataArray = deepClone(val);
        this.titleList = [];
        this.valueList = [];
        this.mutliple = [];
        dataArray.forEach(item => {
          this.titleList.push(item.title);
          this.valueList.push(item.tags);
          this.mutliple.push(!!item.isMutliple);
        });
      },
      deep: true,
      immediate: true,
    },

    show(val) {
      this.$emit('input', val);
      if (!val) {
        const result = this.filterSelectedTag(this.valueList);
        this.$emit('on-sure', result);
      }
    },
    value(val) {
      this.show = val;
    },
  },

  methods: {
    // 单选选中状态下
    onItemClick(indexPath) {
      const value = this.valueList[indexPath.section][indexPath.row];
      if (value.tagSelected) {
        value.tagSelected = false;
      } else {
        if (this.mutliple.length && !this.mutliple[indexPath.section]) {
          this.valueList[indexPath.section] = this.valueList[indexPath.section].map(item => {
            item.tagSelected = false;
            return item;
          });
        }

        value.tagSelected = true;
      }

      this.$emit('on-change', {
        sectionTitle: this.titleList[indexPath.section],
        tagName: value.tagName,
        tagSelected: value.tagSelected,
      });
    },

    getSection() {
      return this.titleList.map((item, index) => (
          <div class={ bem('section') }>
            <div class={bem('title')}>{ item }</div>
            <Row gutter="8">
              { this.getRow(index) }
            </Row>
          </div>
      ));
    },

    getRow(sectionIndex) {
      const rows = [];

      const values = this.valueList[sectionIndex];
      values.forEach((item, valueIndex) => {
        if (this.sectionCount !== -1 && this.sectionCount <= valueIndex) {
          return;
        }

        // 计算每一列tag的宽度
        const simpleWidth = this.columnCount ? 24 / this.columnCount : 8;
        const tagWidth = item.tagWidth || simpleWidth;
        rows.push(
          <Col span={ tagWidth }>
            <ScreenItem
              class="zv-ellipsis"
              tag-name={ item.tagName }
              tag-selected={ item.tagSelected }
              section-index={sectionIndex}
              index={valueIndex}
              onClick={ this.onItemClick }
              key={`${sectionIndex}-${valueIndex}`}
              />
          </Col>
        );
      });
      return rows;
    },

    onReset() {
      this.valueList = deepClone(this.dataArray);
      const result = this.filterSelectedTag(this.valueList);
      this.$emit('on-reset', result);
    },

    onSure() {
      this.show = false;
    },

    filterSelectedTag(list) {
      const result = [];
      list.forEach((values, index) => {
        const valuesTmp = values.filter(item => item.tagSelected).map(item => item.tagName);

        if (valuesTmp.length) {
          const dic = {
            sectionTitle: this.titleList[index],
            tags: valuesTmp,
          };
          result.push(dic);
        }
      });

      return result;
    },
  },

  render() {
    const { slots } = this;
    const footer = () => {
      const slot = slots('footer');

      if (slot) {
        return slot;
      }

      if (!this.isFull) {
        const footerSty = bem('footer') + ' zv-hairline--top';

        return (
         <div class={ footerSty }>
            <Button size="small" plain type="primary" onClick={ this.onReset }>重 置</Button>
            <Button size="small" type="primary" onClick={ this.onSure }>确 定</Button>
         </div>
        );
      }
    };

    if (this.isFull) {
      return (
        <div class={ bem('body') }>
          { this.getSection() }
        </div>
      );
    }

    return (
      <Popup class='zv-screen' vModel={this.show} style="width: 85%" position='right'>
        <div class={ bem('body') }>
          { this.getSection() }
        </div>
        { footer() }
      </Popup>
    );
  },
});
