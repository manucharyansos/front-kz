<template>
  <div class="transaction" :class="classes">
    <div class="transaction-logo">
      <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="97" height="97" rx="48.5" fill="#1B961F" fill-opacity="0.2"/>
        <path d="M31.0762 51.6389L42.0265 64.182L69.4023 32.8242" stroke="#1AAC1F" stroke-width="5.22414" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="transaction-message">
      <div class="message">{{ message }} </div>
      <div class="estimated">{{ estimated }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CryptoInfo extends Vue {
  @Prop({ default: 'Your Transfer Has Been Confirmed!' }) readonly message!: string
  @Prop({ default:  'Estimated Delivery: 01/15/25 01:25 PM' }) readonly estimated!: string
  @Prop({ default:  '' }) readonly classes!: string
}
</script>

<style lang="scss">
.transaction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .transaction-logo {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .transaction-message {
    margin-top: 14px;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    .message {
      text-align: center;
      font-family: "Hanson";
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
    }
    .estimated {
      font-family: "Reza Zulmi Alfaizi Sans";
      text-align: center;
      font-size: 14px;
      opacity: 0.3 ;
      line-height: 160%;
      font-weight: 400;
    }
  }
}
</style>
