<template>
  <div class="oracle-fee">
    <div class="fee-info">
      <div class="fee-label">Oracle Transaction <span>Fee for this transfer:</span> </div>
      <div class="fee-amount">{{ feeAmount }} {{ feeCurrency }} <span>(~{{ feeInUSD }} USD)</span> </div>
    </div>
    <div class="fee-notice">
      Fee will be deducted from your {{ feeCurrency }} account.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class OracleFee extends Vue {
  @Prop({ default: '0.001' }) readonly feeAmount!: string
  @Prop({ default: 'BTC' }) readonly feeCurrency!: string
  @Prop({ default: '5' }) readonly feeInUSD!: string
}
</script>

<style lang="scss" scoped>
.oracle-fee {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;

  .fee-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 10px;
    gap: 8px;

    .fee-label {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      span {
        opacity: 0.5;
      }
    }

    .fee-amount {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      font-family: 'Hanson';
      span{
        opacity: 0.5;
      }
    }
  }

  .fee-notice {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    font-family: "Reza Zulmi Alfaizi Sans";
  }
}
</style>
