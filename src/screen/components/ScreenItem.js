import { createNamespace } from '../../utils';

const [createComponent, bem] = createNamespace('screen-item');

export default createComponent({
  props: {
    sectionIndex: Number,
    index: Number,
    disabled: Boolean,
    tagSelected: false,
    tagName: String,
  },

  computed: {
    select() {
      return true;
    },
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', { section: this.sectionIndex, row: this.index });
    },
  },

  render() {
    const valueSty = bem('', { select: this.tagSelected });

    return (
      <span class={ valueSty } onClick={ this.onClick }>
        { this.tagName }
      </span>
    );
  },
});
