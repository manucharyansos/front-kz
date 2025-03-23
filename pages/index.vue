<template>
  <main class="main">
    <!--      title block-->
    <div class="title">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
      >
        <path
          d="M6.75 1.5835L1.25 8.00016L6.75 14.4168"
          stroke="#F64E2A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <TitleOracle text="External Crypto Transfer" classes="title-oracle" />
    </div>
    <!--      Debiting Account-->

    <div class="debiting">
      <TitleOracle class="debiting-oracle" text="Debiting Account" />
    </div>

    <!--    Crypto Wallet Info-->
    <CryptoWalletInfoSlider icon="/crypto.png" />

    <!--    Transfer amount-->
    <div>
      <button class="transfer">
        <TitleOracle text="Transfer amount" />
      </button>

    </div>

    <div class="crypto_exchange">
      <crypto-exchange-rate
        :amount="1"
        currency="BTC"
        :usd-value="92704.62"
        icon="/icons/bitcoin.svg"
      />
    </div>

    <!--      info-->
    <div class="info">
      <p>
        Oracle Transaction Fee: <span>0.0001 BTC (~500 USD)</span> Fee will be
        deducted from your BTC account.
      </p>
    </div>

    <!--      Destination Wallet-->

    <div class="destination">
      <title-oracle text="Destination Wallet" />
    </div>

    <!--      TextInput-->
    <div class="text_input">
      <input-oracle-clear
        :value="inputOracleClear"
        input-class="custom-class"
        :trash-action="true"
        @inputClear="clearInput"
      />
    </div>

    <!--      frome save-->

    <div class="chose">
      <button-oracle text="Choose from Saved Addresses" classes="title-oracle" />
    </div>

    <!--      oracle button-->

    <div class="oracle_button">
      <button-oracle text="Continue" color="orange" @clickTo="toConfirmation"/>
    </div>
  </main>
</template>
<script>
import TitleOracle from '~/components/title-oracle.vue'
import CryptoWalletInfoSlider from '~/components/CryptoWalletInfoSlider.vue'
export default {
  components: {
    TitleOracle,
    CryptoWalletInfoSlider,
  },
  layout: 'mobile',
  data() {
    return {
      inputOracleClear: '12jdfj438sdfjkbfgslardiogue3496adfh3g46g' ,
    }
  },
  methods: {
    toConfirmation() {
      this.$router.push('/confirmation')
    },
    clearInput(){
      this.inputOracleClear = ''
    }
  }
}
</script>
<style scoped lang="scss">
.main {
  margin-top: 18px;
  .title {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .icon {
      display: flex;
      align-items: normal;
      justify-content: center;
      width: 22px;
      height: 20px;
    }
    .title-oracle {
      font-family: 'Hanson';
      font-weight: 700;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 100%;
      width: 100%;
      color: #fff;
    }
  }

  .debiting {
    margin-top: 24px;
    .debiting-oracle {
      font-family: 'Hanson';
      font-weight: 700;
      text-transform: uppercase;
      font-size: 15px;
      line-height: 100%;
      width: 100%;
      color: #fff;
    }
  }

  .transfer {
    background: transparent;
    text-align: start;
    border: none;
    margin-top: 32px;
    font-family: 'Hanson';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 100%;
    width: 100%;
    color: #fff;
  }
  .crypto_exchange {
    margin-top: 24px;
  }
  .info {
    margin-top: 14px;
    p {
      font-family: 'Reza Zulmi Alfaizi Sans';
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      span {
        opacity: 0.5;
      }
    }
  }
  .destination {
    margin-top: 24px;
    font-family: 'Hanson';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 100%;
    width: 100%;
    color: #fff;
  }
  .text_input {
    background: #1e1d26;
    border-radius: 8px;
    margin-top: 24px;
  }

  .chose {
    margin-top: 24px;
    font-family: 'Hanson';
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 100%;
    width: 100%;
    color: #fff;

    .title-oracle {
      border: 1px solid #f64e2a;
      border-radius: 8px;
      //padding: 11px;
    }
  }
  .oracle_button {
    margin-bottom: 20px;
    margin-top: 100px;
    .oracle_button_component {
      background: #f64e2a;
    }
  }
}
</style>
