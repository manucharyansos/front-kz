<template>
  <div class="text-input-container">
    <div class="text-input" :class="classes" :title="text">
      {{ showFullText ? text : truncatedText }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class TextInput extends Vue {
  @Prop({ default: '' }) readonly text!: string;
  @Prop({ default: '' }) readonly classes!: string;
  @Prop({ default: true }) readonly isIcon!: Boolean;

  showFullText = false;

  get truncatedText(): string {
    return this.isIcon && this.text.length > 20 ? this.text.slice(0, 20) + '...' : this.text + '...';
  }

  toggleText() {
    this.showFullText = !this.showFullText;
  }

  clearText() {
    this.$emit('clear');
  }
}
</script>

<style lang="scss" scoped>
.text-input-container {
  display: flex;
  align-items: center;
  border: #1D1C24;
  border-radius: 8px;
  padding-left: 11px;
  padding-right: 11px;
  background: #1D1C24;
  color: white;
  //gap: 8px;
  height: 43px;
}

.text-input {
  width: 100%;
  font-size: 13px;
  line-height: 100%;
  font-weight: 400;
  font-family: 'Reza Zulmi Alfaizi Sans';
}

</style>
