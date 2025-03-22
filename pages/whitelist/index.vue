<template>
    <div class="whitelist-main">
        <div class="whitelist-main-nav">
            <div class="whitelist-main-nav-back">
                <ArrowBackIcon /> Oracle WhiteList
            </div>
        </div>
        <div class="whitelist-main-links">
            <div class="whitelist-main-link">
                Become @OracleVerified
            </div>
            <div class="whitelist-main-link">
                Post at Oracle’s Market
            </div>
        </div>
        <div class="whitelist-main-content">
            <img :src="require('@/assets/svg/big-logo.png')" alt="">
            Oracle WhiteList
        </div>


        <ButtonOracle text="Oracle's whitelist" class="whitelist-main-btn-first" />
        <ButtonOracle text="Oracle's Market" class="whitelist-main-btn-second" />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
import BlockTitleOracle from '~/components/block-title-oracle.vue'

@Component({
    components: {
        ArrowBackIcon,
        BlockTitleOracle
    }
})
export default class WhiteListPage extends Vue {
    layout() {
        return 'mobile'
    }
}
</script>
<style lang="scss">
.whitelist-main {
    position: relative;
    min-height: calc(100vh - 85px);
    background-image: url('@/assets/svg/whitelist-background.svg');

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(10, 9, 15, 0.9), rgba(10, 9, 15, 1));
        z-index: 1;
    }


    &-nav {
        position: absolute;
        z-index: 50;
        top: 18px;
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;

        &-back {
            display: flex;
            gap: 10px;
            align-items: end;
            font-family: "Hanson";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 11px;
            text-transform: uppercase;
        }
    }

    &-links {}

    &-link {
        box-sizing: border-box;
        position: absolute;
        width: 135px;
        height: 76px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 16px;
        gap: 10px;
        isolation: isolate;
        z-index: 50;
        background: #121119;
        border-radius: 12px;

        font-family: 'Kenyan Coffee';
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;

        &::after,
        &::before {
            position: absolute;
            width: 8px;
            height: 8px;
            left: 20px;
            background: #F64E2A;
            box-shadow: 0px 0px 4px 2px rgba(246, 78, 42, 0.25);
            border-radius: 50%;
        }

        &:first-child {
            right: 12px;
            top: 10%;

            &::before {
                content: '';
                top: 20px;
            }
        }

        &:last-child {
            right: 12px;
            top: 20%;

            &::after {
                content: '';
                bottom: 20px;
            }
        }
    }


    &-content {
        z-index: 50;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        left: 50%;
        right: 50%;
        top: 50%;
        bottom: 50%;
        text-align: center;


        font-family: 'Hanson';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        text-transform: uppercase;
    }

    &-btn {
        &-first {
            position: absolute;
            bottom: 64px;
            z-index: 50;
        }

        &-second {
            position: absolute;
            bottom: 0;
            z-index: 50;
        }
    }
}
</style>