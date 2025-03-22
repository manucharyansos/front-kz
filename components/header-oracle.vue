<template>
    <header class="header">
        <div class="header-left">
            <UserIcon class="header-left-icon" />
            <div>
                <div class="header-left-username">@Username</div>
                <div class="header-left-userid">ID: 910491</div>
            </div>
        </div>
        <div class="header-right">
            <div class="header-right-bell">
                <BellIcon />
                <div class="header-right-bell-count">2</div>
            </div>

            <img :src="require('@/assets/svg/logo.png')" class="header-right-logo">
        </div>
    </header>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import BellIcon from '@/assets/svg/bell.svg?inline'
// @ts-ignore
import UserIcon from '@/assets/svg/user.svg?inline'

@Component({
    components: {
        BellIcon,
        UserIcon
    }
})
export default class HeaderOracle extends Vue { }
</script>
<style lang="scss">
.header {
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    z-index: 100;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background: #111016;
    border-bottom: 1px solid #21212D;

    &-left,
    &-right {
        display: flex;
        align-items: center;
    }

    &-left {
        &-icon {
            margin-right: 12px;
        }

        &-username {
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
        }

        &-userid {
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-size: 12px;
            line-height: 15px;
            color: rgba(255, 255, 255, 0.4);
        }
    }

    &-right {
        &-bell {
            position: relative;
            width: 40px;
            height: 40px;
            cursor: not-allowed;
            background: #1D1D29;
            box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.03);
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            &-count {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                right: 0;
                width: 14px;
                height: 14px;
                background: #F64E2A;
                border-radius: 100px;
                font-family: 'Gotham';
                font-style: normal;
                font-weight: 700;
                font-size: 10px;
                line-height: 12px;
                color: #FFFFFF;
            }
        }

        &-logo {
            margin-left: 12px;
        }
    }
}
</style>