<template>
  <div class="exchange-rate">
    <div class="crypto-amount">
      <input v-model="amountWithCurrency" type="text">
    </div>
    <div class="crypto_logo">
      <button class="exchange-icon" type="button">
        <img src="/money-send.png" alt="Exchange Icon">
      </button>
      <div class="usd-value">≈ {{ usdValue }} USD</div>
      <div class="crypto-icon">
        <img src="/Group.png" alt="Crypto Icon">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class CryptoExchangeRate extends Vue {
  @Prop({ default: '1 BTC' }) readonly amountWithCurrency!: string;
  @Prop({ default: 92704.62 }) readonly usdValue!: number;

}
</script>

<style scoped lang="scss">
.exchange-rate {
  background: #1D1C24;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
}

.crypto-amount {
  font-family: 'Reza Zulmi Alfaizi Sans';
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  line-height: 100%;
  font-weight: 400;
}
.crypto_logo {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  margin-left: auto;
  .exchange-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
.exchange-icon img,

.usd-value {
  opacity: 0.7;
  font-weight: 400;
  font-family: "Reza Zulmi Alfaizi Sans";
  font-size: 16px;
  line-height: 100%;
}
input {
  box-sizing: border-box;
  //padding: 10px 12px;
  width: 120px;
  height: 43px;
  background: #1e1d26;
  border-radius: 8px;
  font-family: 'Reza Zulmi Alfaizi Sans';
  font-weight: 400;
  color: #ffffff;
  border: none;
  outline: none;
  font-size: 14px;
  max-width: 280px;
}
</style>
