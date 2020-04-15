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
    clickable: {
      type: Boolean,
      default: true,
    },
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
      sectionList: [],
      show: this.value,
    };
  },

  watch: {
    dataArray: {
      handler(val) {
        this.valueList = [];
        this.mutliple = [];
        this.sectionList = [];
        val.forEach(item => {
          this.sectionList.push({
            title: item.title,
            columnCount: item.columnCount,
          });
          this.valueList.push(deepClone(item.tags));
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
          this.valueList[indexPath.section] = this.valueList[
            indexPath.section
          ].map(item => {
            item.tagSelected = false;
            return item;
          });
        }

        value.tagSelected = true;
      }

      const section = this.sectionList[indexPath.section];
      this.$emit('on-change', {
        sectionTitle: section.title,
        tagName: value.tagName,
        originalTag: value,
      });
    },

    getSection() {
      return this.sectionList.map((item, index) => (
        <div class={bem('section')}>
          <div class={bem('title')}>{item.title}</div>
          <Row gutter="8">{this.getRow(index)}</Row>
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

        const tagWidth = this.currentSectionCount(sectionIndex, item);
        rows.push(
          <Col span={tagWidth}>
            <ScreenItem
              class="zv-ellipsis"
              tag-name={item.tagName}
              tag-selected={this.clickable && item.tagSelected}
              section-index={sectionIndex}
              index={valueIndex}
              onClick={this.onItemClick}
              key={`${sectionIndex}-${valueIndex}`}
            />
          </Col>
        );
      });
      return rows;
    },

    onReset() {
      const valueList = [];
      this.dataArray.forEach(item => {
        valueList.push(deepClone(item.tags));
      });

      const result = this.filterSelectedTag(valueList);
      this.$emit('on-reset', result);
      this.valueList = valueList;
    },

    onSure() {
      this.show = false;
    },

    filterSelectedTag(list) {
      const result = [];
      list.forEach((values, index) => {
        const valuesTmp = values.filter(item => item.tagSelected);
        const tagsTmp = valuesTmp.map(item => item.tagName);

        const section = this.sectionList[index];
        if (valuesTmp.length) {
          const dic = {
            sectionTitle: section.title,
            tags: tagsTmp,
            originalTags: valuesTmp,
          };
          result.push(dic);
        }
      });

      return result;
    },

    currentSectionCount(sectionIndex, item) {
      if (item.tagWidth) {
        return item.tagWidth;
      }

      const section = this.sectionList[sectionIndex];
      if (section.columnCount) {
        return 24 / section.columnCount;
      }

      return this.columnCount ? 24 / this.columnCount : 8;
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
          <div class={footerSty}>
            <Button plain type="primary" onClick={this.onReset}>
              重 置
            </Button>
            <Button type="primary" onClick={this.onSure}>
              确 定
            </Button>
          </div>
        );
      }
    };

    if (this.isFull) {
      return <div class={bem('body')}>{this.getSection()}</div>;
    }

    return (
      <Popup
        class="zv-screen"
        vModel={this.show}
        style="width: 85%"
        position="right"
      >
        <div class={bem('body')}>{this.getSection()}</div>
        {footer()}
      </Popup>
    );
  },
});
