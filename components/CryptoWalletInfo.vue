<template>
  <div class="container">
    <div class="btc_logo">
      <img :src="icon" alt="Crypto Logo">
    </div>
    <div class="wallet-info">
      <strong>{{ balance }} {{ currency }}</strong>
      <span class="usdValue">(≈ ${{ usdValue }})</span>
      <p>{{ accountLabel }} {{ accountLastDigits }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class CryptoWalletInfo extends Vue {
  @Prop({ default: "" }) readonly icon!: string;
  @Prop({ default: '0,015424' }) readonly balance!: string;
  @Prop({ default: 'BTC' }) readonly currency!: string;
  @Prop({ default: '1,456' }) readonly usdValue!: string;
  @Prop({ default: 'BTC Account:' }) readonly accountLabel!: string;
  @Prop({ default: ' ***2235' }) readonly accountLastDigits!: string;
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  background: #1D1D2966;
  height: 92px;
  margin-top: 16px;
  border-radius: 10px;
  font-family: "Hanson";
  line-height: 100%;
}

.btc_logo img {
  width: 75px;
  height: 68px;
  margin: 12px;
}

.wallet-info {
  padding-top: 20px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
}

.wallet-info strong {
  margin-left: 10px;
  line-height: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 6px;
}

.usdValue {
  font-family: "Reza Zulmi Alfaizi Sans";
  opacity: 0.7;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
}
.wallet-info p {
  width: 166px;
  background: #191823;
  border-radius: 8px;
  padding: 6px 10px 6px 10px;
  font-family: "Reza Zulmi Alfaizi Sans";
  opacity: 0.7;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 160%;
  margin-left: 10px;
}
</style>
