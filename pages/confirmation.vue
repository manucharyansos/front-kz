<template>
  <main>
    <div class="title">
      <nuxt-link to="/">
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
      </nuxt-link>

      <TitleOracle text="External Crypto Transfer" classes="title-oracle" />
    </div>

<!--    Crypto info-->

    <div class="crypto-info">
      <CryptoInfo />
    </div>

<!--    from-->

    <div class="from">
      <TitleOracle class="from-oracle" text="From" />
    </div>

    <!--    Crypto Wallet Info-->

    <CryptoWalletInfo icon="/crypto.png" />

    <!--    Destination Wallet-->

    <div class="destination">
      <TitleOracle class="destination-wallet" text="Destination Wallet"/>
    </div>

    <!--      TextInput-->
    <div class="text_input">
      <TextInput
        text="12jdfj438sdfjkbfgslardiogue3496adfh3g46g"
        classes="custom-class"
        :is-icon="false"
      />
    </div>

<!--    Oracle-->
    <div class="oracle">
      <OracleFee fee-amount="0.001" fee-currency="BTC" fee-in-u-s-d="5" />
    </div>

    <!--      oracle button-->

    <div class="oracle_button">
      <button-oracle text="Confirm Transfer" color="orange" @clickTo="toCheck"/>
    </div>

  </main>
</template>
<script>
export default {
  layout: 'mobile',
  methods: {
    toCheck() {
      this.$router.push('/check')
    }
  }
}
</script>
<style scoped>
main{
  margin-top: 16px;
  .title {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .icon {
      display: flex;
      align-items: normal;
      justify-content: center;
      margin-right: 10px;
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
  .crypto-info {
    margin-top: 24px;
  }
  .from {
    margin-top: 24px;
    .from-oracle {
      font-family: 'Hanson';
      font-weight: 700;
      text-transform: uppercase;
      font-size: 15px;
      line-height: 100%;
      width: 100%;
      color: #fff;
    }
  }
  .destination {
    margin-top: 24px;
    .destination-wallet {
      font-family: 'Hanson';
      font-weight: 700;
      text-transform: uppercase;
      font-size: 15px;
      line-height: 100%;
      width: 100%;
      color: #fff;
    }
  }
  .text_input {
    margin-top: 24px;
    .custom-class{
      padding: 11px;
    }
  }
  .oracle {
    margin-top: 24px;
  }
  .oracle_button {
    margin-top: 150px;
    margin-bottom: 20px;
    .oracle_button_component {
      background: #f64e2a;
    }
  }
}

</style>
