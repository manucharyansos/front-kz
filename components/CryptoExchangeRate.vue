<template>
  <div class="exchange-rate">
    <div class="crypto-amount">
      <span>{{ amount }}</span> <span>{{ currency }}</span>
    </div>
    <div class="crypto_logo">
      <div class="exchange-icon">
        <img src="/money-send.png" alt="Exchange Icon">
      </div>
      <div class="usd-value">≈ {{ formattedUsdValue }} USD</div>
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
  @Prop({ default: 1 }) readonly amount!: number;
  @Prop({ default: 'BTC' }) readonly currency!: string;
  @Prop({ default: 92704.62 }) readonly usdValue!: number;

  get formattedUsdValue() {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(this.usdValue);
  }
}
</script>

<style scoped lang="scss">
.exchange-rate {
  background: #1D1C24;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;

}

.crypto-amount {
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
    width: 24px;
    height: 24px;
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
</style>
