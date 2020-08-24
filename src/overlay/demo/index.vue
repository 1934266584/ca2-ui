<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ca2-button
        type="primary"
        :text="t('showOverlay')"
        style="margin-left: 16px;"
        @click="show = true"
      />

      <ca2-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block :title="t('embeddedContent')">
      <ca2-button
        type="primary"
        :text="t('embeddedContent')"
        style="margin-left: 16px;"
        @click="showEmbedded = true"
      />

      <ca2-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </ca2-overlay>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层',
      embeddedContent: '嵌入内容',
    },
    'en-US': {
      showOverlay: 'Show Overlay',
      embeddedContent: 'Embedded Content',
    },
  },

  data() {
    return {
      show: false,
      showEmbedded: false,
    };
  },
};
</script>

<style lang="scss">
@import '../../style/var';

.demo-overlay {
  background: $white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: $white;
  }
}
</style>
