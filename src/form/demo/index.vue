<template>
  <demo-section>
    <basic-usage />
    <validate-rules />
    <field-type />
  </demo-section>
</template>

<script>
import BasicUsage from './BasicUsage';
import ValidateRules from './ValidateRules';
import FieldType from './FieldType';

export default {
  components: {
    BasicUsage,
    FieldType,
    ValidateRules,
  },
};
</script>

<style lang="scss">
.demo-form {
  width: 100vw;
  overflow: hidden;

  .ca2-hairline--bottom::after {
    margin-left: 16px;
  }
}
</style>
