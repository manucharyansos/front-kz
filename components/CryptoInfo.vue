<template>
  <div class="crypto" :class="classes">
    <div class="crypto-logo">
      <svg width="49" height="65" viewBox="0 0 49 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.766 26.3066C49.7714 19.587 44.6543 15.9747 37.6575 13.565L39.9271 4.46244L34.3855 3.0816L32.1758 11.9443C30.719 11.5813 29.2227 11.2388 27.7359 10.8995L29.9614 1.9785L24.4229 0.597656L22.1516 9.69703C20.9458 9.42244 19.762 9.151 18.6129 8.86536L18.6193 8.83696L10.9768 6.92902L9.50264 12.8469C9.50264 12.8469 13.6143 13.7891 13.5275 13.8474C15.7719 14.4077 16.1775 15.8927 16.1097 17.0699L13.5243 27.4397C13.679 27.4791 13.8794 27.536 14.1004 27.6243C13.9157 27.5786 13.7184 27.5281 13.5148 27.4791L9.89091 42.0056C9.61628 42.6874 8.92022 43.71 7.35133 43.3218C7.40657 43.4023 3.32335 42.3165 3.32335 42.3165L0.572266 48.6589L7.7838 50.4564C9.12541 50.7925 10.4402 51.1444 11.7344 51.4759L9.44108 60.6825L14.9764 62.0634L17.2477 52.9545C18.7597 53.3648 20.2276 53.7436 21.6639 54.1002L19.4005 63.1665L24.9422 64.5473L27.2355 55.358C36.6852 57.146 43.791 56.4248 46.782 47.8793C49.1921 40.9988 46.662 37.0299 41.6902 34.4418C45.3109 33.6069 48.0383 31.2256 48.766 26.3066ZM36.1043 44.0587C34.3918 50.9393 22.8051 47.2197 19.0486 46.287L22.0916 34.0898C25.8481 35.0272 37.8942 36.8831 36.1043 44.0587ZM37.8184 26.2072C36.2559 32.466 26.6121 29.2861 23.4838 28.5065L26.2427 17.444C29.3711 18.2235 39.4457 19.6786 37.8184 26.2072Z" fill="#3C3C48"/>
      </svg>
    </div>

    <div class="crypto-info">
      <div class="currency">{{ quantity }} {{ currency }} </div>
      <div class="price">{{ price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CryptoInfo extends Vue {
  @Prop({ default: '1' }) readonly quantity!: string
  @Prop({ default: 'BTC' }) readonly currency!: string
  @Prop({ default:  '≈ 92704,62 USD' }) readonly price!: string
  @Prop({ default:  '' }) readonly classes!: string
}
</script>

<style lang="scss">
.crypto {
  display: flex;
  flex-direction: column;
  align-items: center;
  .crypto-logo {
    width: 101px;
    height: 101px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .crypto-info {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-family: "Hanson";
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    .price {
      opacity: 0.3 ;
    }
  }
}
</style>
