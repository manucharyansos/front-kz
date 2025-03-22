<template>
  <div :class="checkBoxClass">
    <input :id="identifier ? identifier : 'checkbox'" type="checkbox" v-on="$listeners"/>
    <label :for="identifier ? identifier : 'checkbox'" @click="checked = !checked"></label>
    <div class="checkbox-text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CheckboxOracle extends Vue {
  @Prop({ default: '' }) readonly text!: string;
  @Prop({ default: false }) readonly round!: string;
  @Prop({ default: '' }) readonly id!: string;

  identifier = '';
  checked = false

  get checkBoxClass() {
    return this.round ? `checkbox-round${this.checked ? '--checked' : ''}` : 'checkbox';
  }

  created() {
    this.identifier = this.id;
  }
}
</script>
<style lang="scss">
.checkbox {
  display: flex;
  gap: 10px;
  padding: 0 38px;
  align-items: center;
  cursor: pointer;

  &-round,
  &-round--checked {
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    border-radius: 100px;
    position: relative;
    cursor: pointer;

    input {
      display: none;
    }

    label {
      position: absolute;
      width: 11px;
      height: 11px;
      left: calc(50% - 11px/2);
      top: calc(50% - 11px/2);
      border-radius: 50%;
      cursor: pointer;
    }

    input:checked+label {
      background: #F64E2A;
    }
  }

  &-round {
    border: 2px solid #343147;

    &--checked {
      border: 2px solid #F64E2A;
    }
  }


  input {
    display: none;
  }

  label {
    position: relative;
    display: block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    background: #343242;
    border-radius: 3px;
    cursor: pointer;
  }

  input:checked+label::after {
    content: url('@/assets/svg/arrow.svg');
    display: block;
    position: absolute;
    left: 3px;
  }

  &-text {
    height: 26px;
    font-family: 'Reza Zulmi Alfaizi Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #ffffff;
  }
}
</style>
