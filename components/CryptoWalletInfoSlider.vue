<template>
  <client-only>
    <carousel id="carousel" :per-page="1" :loop="true" :autoplay="true" :pagination="true">
      <slide v-for="(wallet, index) in wallets" :key="index">
        <div class="container">
          <div class="btc_logo">
            <img :src="wallet.icon" alt="Crypto Logo">
          </div>
          <div class="wallet-info">
            <strong>{{ wallet.balance }} {{ wallet.currency }}</strong>
            <span class="usdValue">(≈ ${{ wallet.usdValue }})</span>
            <p>{{ wallet.accountLabel }} {{ wallet.accountLastDigits }}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </client-only>
</template>

<script>
let Carousel, Slide;
if (process.client) {
  Carousel = require('vue-carousel').Carousel;
  Slide = require('vue-carousel').Slide;
}

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      wallets: [
        {
          icon: "/crypto.png",
          balance: "0.015424",
          currency: "BTC",
          usdValue: "1,456",
          accountLabel: "BTC Account:",
          accountLastDigits: "***2235",
        },
        {
          icon: "/crypto.png",
          balance: "2.4567",
          currency: "ETH",
          usdValue: "4,523",
          accountLabel: "ETH Account:",
          accountLastDigits: "***9876",
        },
        {
          icon: "/crypto.png",
          balance: "2.4567",
          currency: "ETH",
          usdValue: "4,523",
          accountLabel: "ETH Account:",
          accountLastDigits: "***9876",
        },
        {
          icon: "/crypto.png",
          balance: "2.4567",
          currency: "ETH",
          usdValue: "4,523",
          accountLabel: "ETH Account:",
          accountLastDigits: "***9876",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
/* Style for the entire carousel */
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
  //font-size: 14px !important;
  font-weight: 400;
  line-height: 160%;
  margin-left: 10px;
}
#carousel .VueCarousel-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 18px;
}

#carousel .VueCarousel-dot {
  background: #211e2e !important;
  border-radius: 50%;
  width: 0 !important; /* Փոքրացնել չափը */
  height: 0 !important; /* Փոքրացնել չափը */
  margin: 3px !important;
  transition: background 0.3s ease, transform 0.3s ease;
  padding: 6px !important;
  //margin: 0 !important;
}

#carousel .VueCarousel-dot--active {
  background: #f64e2a !important;
  //transform: scale(1.3) !important;
}


</style>
