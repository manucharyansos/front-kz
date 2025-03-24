<template>
  <div class="exchange-rate">
    <div class="crypto-amount">
      <input v-model="amountWithCurrency" type="text">
    </div>
    <div class="crypto_logo">
      <button class="exchange-icon" type="button">
<!--        <img src="/money-send.png" alt="Exchange Icon">-->
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.25 10.53C10.25 11.07 10.4 11.15 10.74 11.27L11.25 11.45V9.75H10.95C10.57 9.75 10.25 10.1 10.25 10.53Z" fill="#F64E2A"/>
          <path d="M12.75 15.2508H13.05C13.44 15.2508 13.75 14.9008 13.75 14.4708C13.75 13.9308 13.6 13.8508 13.26 13.7308L12.75 13.5508V15.2508Z" fill="#F64E2A"/>
          <path d="M19.58 5.98L17.53 8.03C17.38 8.18 17.19 8.25 17 8.25C16.81 8.25 16.62 8.18 16.47 8.03C16.18 7.74 16.18 7.26 16.47 6.97L18.52 4.92C16.76 3.42 14.49 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 10.01 21.08 7.74 19.58 5.98ZM13.75 12.32C14.39 12.55 15.25 13.01 15.25 14.48C15.25 15.73 14.26 16.76 13.05 16.76H12.75V17.01C12.75 17.42 12.41 17.76 12 17.76C11.59 17.76 11.25 17.42 11.25 17.01V16.76H11.17C9.84 16.76 8.75 15.64 8.75 14.26C8.75 13.84 9.09 13.5 9.5 13.5C9.91 13.5 10.25 13.84 10.25 14.25C10.25 14.8 10.66 15.25 11.17 15.25H11.25V13.03L10.25 12.68C9.61 12.45 8.75 11.99 8.75 10.52C8.75 9.27 9.74 8.24 10.95 8.24H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V8.25H12.83C14.16 8.25 15.25 9.37 15.25 10.75C15.25 11.16 14.91 11.5 14.5 11.5C14.09 11.5 13.75 11.16 13.75 10.75C13.75 10.2 13.34 9.75 12.83 9.75H12.75V11.97L13.75 12.32Z" fill="#F64E2A"/>
          <path d="M22.69 2.21C22.61 2.03 22.47 1.88 22.28 1.8C22.19 1.77 22.1 1.75 22 1.75H18C17.59 1.75 17.25 2.09 17.25 2.5C17.25 2.91 17.59 3.25 18 3.25H20.19L18.52 4.92C18.9 5.25 19.25 5.6 19.58 5.98L21.25 4.31V6.5C21.25 6.91 21.59 7.25 22 7.25C22.41 7.25 22.75 6.91 22.75 6.5V2.5C22.75 2.4 22.73 2.31 22.69 2.21Z" fill="#F64E2A"/>
        </svg>
      </button>
      <div class="usd-value">≈ {{ usdValue }} USD</div>
      <div class="crypto-icon">
<!--        <img src="/Group.png" alt="Crypto Icon">-->
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6553 14.2821C21.1194 20.4429 14.8795 24.1923 8.71804 22.6559C2.55907 21.12 -1.19029 14.8798 0.3464 8.71937C1.88165 2.55789 8.12148 -1.19183 14.2812 0.344136C20.4423 1.8801 24.1913 8.12101 22.6553 14.2821Z" fill="white"/>
          <path d="M16.5708 9.86239C16.7997 8.33217 15.6346 7.50956 14.0415 6.9608L14.5583 4.88792L13.2965 4.57347L12.7934 6.59172C12.4617 6.50906 12.121 6.43108 11.7825 6.35381L12.2892 4.32227L11.0282 4.00781L10.511 6.07997C10.2365 6.01744 9.96694 5.95562 9.70531 5.89058L9.70675 5.88411L7.96666 5.44962L7.631 6.79728C7.631 6.79728 8.56717 7.01183 8.54741 7.02512C9.05844 7.1527 9.1508 7.49087 9.13534 7.75897L8.54669 10.1204C8.58191 10.1294 8.62755 10.1423 8.67786 10.1625C8.63581 10.152 8.59089 10.1405 8.54453 10.1294L7.71941 13.4375C7.65687 13.5927 7.49839 13.8256 7.14117 13.7372C7.15375 13.7555 6.22405 13.5082 6.22405 13.5082L5.59766 14.9526L7.23964 15.3619C7.54511 15.4385 7.84447 15.5186 8.13916 15.5941L7.61698 17.6907L8.87731 18.0051L9.39445 15.9308C9.73873 16.0242 10.073 16.1105 10.4 16.1917L9.88464 18.2563L11.1464 18.5708L11.6686 16.4781C13.8202 16.8853 15.4381 16.7211 16.1191 14.775C16.6678 13.2082 16.0918 12.3043 14.9597 11.715C15.7841 11.5249 16.4051 10.9826 16.5708 9.86239ZM13.6879 13.905C13.298 15.4719 10.6598 14.6248 9.8045 14.4124L10.4974 11.6348C11.3527 11.8483 14.0954 12.2709 13.6879 13.905ZM14.0782 9.83975C13.7224 11.265 11.5266 10.5409 10.8143 10.3634L11.4425 7.84414C12.1548 8.02167 14.4487 8.35302 14.0782 9.83975Z" fill="#3C3C48"/>
        </svg>

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
    cursor: pointer;
    opacity: 100%;
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
.crypto-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
