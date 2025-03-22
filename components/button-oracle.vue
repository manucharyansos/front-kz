<template>
  <button :class="backgrounColor" v-on="$listeners" @click="$emit('clickTo')">
    <TelegramIcon v-if="icon == 'telegram'" />
    <MessageIcon v-if="icon == 'message'" />
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import TelegramIcon from '@/assets/svg/telegram.svg?inline'
// @ts-ignore
import MessageIcon from '@/assets/svg/message.svg?inline'

@Component({
  components: {
    TelegramIcon,
    MessageIcon,
  },
})
export default class ButtonOracle extends Vue {
  name = 'ButtonOracle'
  @Prop({ default: '' }) readonly text!: string
  @Prop({ default: '' }) readonly icon!: string
  @Prop({ default: 'black' }) readonly color!: string

  get backgrounColor() {
    return this.color
  }
}
</script>

<style lang="scss">
button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  width: 100%;
  height: 52px;
  border: 2px solid #f64e2a;
  box-shadow: 0px 0px 10px 2px rgba(246, 78, 42, 0.25);
  border-radius: 8px;
  cursor: pointer;

  span {
    font-family: 'Hanson';
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
  }

  &.black {
    background-color: #0a090f;
  }

  &.orange {
    background-color: #f64e2a;
  }

  &.gray {
    background-color: #1F1E27;
  }
}
</style>
