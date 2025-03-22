<template>
    <div>
        <div class="profile">
            <div class="profile-nav">
                <div class="profile-nav-back">
                    <ArrowBackIcon /> MY ORACLE VERIFIED Profile
                </div>
                <div class="profile-nav-burger">
                    <BurgerIcon />
                </div>
            </div>
            {{ getMyProfile }}
            <div class="profile-card">
                <div class="profile-card-photo">
                    <img :src="require('@/assets/svg/user-image.png')" alt="">
                    <div class="profile-card-rating">
                        <div class="green">4.9</div>/5
                    </div>
                    <div class="profile-card-reviews">
                        <div class="positive">489+</div> /
                        <div class="negative">11-</div>
                    </div>
                </div>

                <div class="profile-card-info">
                    <div class="profile-card-username">@UserUser</div>
                    <div class="profile-card-userid">ID: {{ getMyProfile.id }}</div>
                    <div class="profile-card-since">Oracle Member Since
                        <div class="date"> {{ formatDate(getMyProfile.oracleMemberSince) }}</div>
                    </div>
                    <div class="profile-card-verifed">Oracle Verified Since
                        <div class="date">{{formatDate(getMyProfile.verifiedSince)}}</div>
                    </div>
                    <div class="profile-card-until">Oracle Verified Until
                        <div class="date">{{formatDate(getMyProfile.verifiedUntil)}}</div>
                    </div>
                </div>
            </div>
            <OrangeBlockModule 
                :title="`$ ${getMyProfile.deposit} deposit`" 
                btn-text="ADD more deposit"
                link-text="Check Oracle’s Verification Verdict" />
            <div class="profile-reviews">
                <div class="profile-reviews-title">
                    <div class="profile-reviews-title-left">
                        <BlockTitleOracle text="Reviews" />
                        <span class="profile-reviews-title-left-point"></span>
                        <span class="profile-reviews-title-left-count">Total 105</span>
                    </div>
                    <div class="profile-reviews-title-right">General score:
                        <span class="profile-reviews-title-right-score">4.8/5</span>
                    </div>
                </div>
                <div class="profile-reviews-items">
                    <div class="profile-reviews-item">
                        <div class="profile-reviews-item-img">
                            <img :src="require('@/assets/svg/p2p.png')" alt="">
                        </div>
                        <span class="profile-reviews-item-title">P2P</span>
                    </div>
                    <div class="profile-reviews-item">
                        <div class="profile-reviews-item-img">
                            <img :src="require('@/assets/svg/escrow.png')" alt="">
                        </div>
                        <span class="profile-reviews-item-title">Escrow</span>
                    </div>
                    <div class="profile-reviews-item">
                        <div class="profile-reviews-item-img">
                            <img :src="require('@/assets/svg/shops.png')" alt="">
                        </div>
                        <span class="profile-reviews-item-title">Shops</span>
                    </div>
                </div>
            </div>
            <div class="profile-contacts">
                <BlockTitleOracle text="Contacts" />
                <div v-for="contact of getMyProfile.links" :key="contact.name" class="profile-contacts-item">
                    <InputOracle :label="contact.name" :placeholder="contact.pl" :v="contact.link" :trash-action="'a'" />
                </div>
                <ButtonOracle text="Add" color="orange" class="profile-contacts-add" />
            </div>
            <div class="profile-currencies">
                <BlockTitleOracle text="Pick what Shops Listings you want to be displayed:" />
                <div class="profile-currencies-scroll">
                    <div class="profile-currencies-scroll-item-add">
                        <div class="profile-currencies-scroll-item-col">
                            <AddCurrencyIcon />
                        </div>
                    </div>
                    <div class="profile-currencies-scroll-item">
                        <div class="profile-currencies-scroll-item-col">
                            <BtcIcon class="profile-currencies-scroll-item-col-icon" />
                        </div>
                        <div class="profile-currencies-scroll-item-col">
                            <div class="profile-currencies-scroll-item-title">BTC/USD</div>
                            <div class="profile-currencies-scroll-item-amount">1.000.000$</div>
                            <div class="profile-currencies-scroll-item-desc">BTC to Venmo</div>
                        </div>
                    </div>
                    <div class="profile-currencies-scroll-item">
                        <div class="profile-currencies-scroll-item-col">
                            <BtcIcon class="profile-currencies-scroll-item-col-icon" />
                        </div>
                        <div class="profile-currencies-scroll-item-col">
                            <div class="profile-currencies-scroll-item-title">BTC/USD</div>
                            <div class="profile-currencies-scroll-item-amount">1.000.000$</div>
                            <div class="profile-currencies-scroll-item-desc">BTC to Venmo</div>
                        </div>
                    </div>
                    <div class="profile-currencies-scroll-item">
                        <div class="profile-currencies-scroll-item-col">
                            <BtcIcon class="profile-currencies-scroll-item-col-icon" />
                        </div>
                        <div class="profile-currencies-scroll-item-col">
                            <div class="profile-currencies-scroll-item-title">BTC/USD</div>
                            <div class="profile-currencies-scroll-item-amount">1.000.000$</div>
                            <div class="profile-currencies-scroll-item-desc">BTC to Venmo</div>
                        </div>
                    </div>
                    <div class="profile-currencies-scroll-item">
                        <div class="profile-currencies-scroll-item-col">
                            <BtcIcon class="profile-currencies-scroll-item-col-icon" />
                        </div>
                        <div class="profile-currencies-scroll-item-col">
                            <div class="profile-currencies-scroll-item-title">BTC/USD</div>
                            <div class="profile-currencies-scroll-item-amount">1.000.000$</div>
                            <div class="profile-currencies-scroll-item-desc">BTC to Venmo</div>
                        </div>
                    </div>
                    <div class="profile-currencies-scroll-item">
                        <div class="profile-currencies-scroll-item-col">
                            <BtcIcon class="profile-currencies-scroll-item-col-icon" />
                        </div>
                        <div class="profile-currencies-scroll-item-col">
                            <div class="profile-currencies-scroll-item-title">BTC/USD</div>
                            <div class="profile-currencies-scroll-item-amount">1.000.000$</div>
                            <div class="profile-currencies-scroll-item-desc">BTC to Venmo</div>
                        </div>
                    </div>
                </div>
            </div>
            <OrangeBlockModule title="Add more verification categories" btn-text="Contact support service" />
            <div class="profile-description">
                <BlockTitleOracle text="description" />
                <OrangeBlockModule
                    text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien." />
            </div>
            <ButtonOracle text="Oracle’s market" color="orange" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import { formattedDate } from '@/helpers'
// @ts-ignore
import BurgerIcon from '@/assets/svg/burger-menu.svg?inline'
// @ts-ignore
import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
// @ts-ignore
import BtcIcon from '@/assets/svg/btc.svg?inline'
// @ts-ignore
import AddCurrencyIcon from '@/assets/svg/add-currency.svg?inline'
import BlockTitleOracle from '~/components/block-title-oracle.vue'

@Component({
    components: {
        BurgerIcon,
        ArrowBackIcon,
        BtcIcon,
        AddCurrencyIcon,
        BlockTitleOracle
    }
})
export default class MyProfilePage extends Vue {
    @Action('profile/fetchMyProfile') readonly fetchMyProfile!: () => Promise<void>
    @Getter('profile/getMyProfile') readonly getMyProfile!: any;
    layout() {
        return 'mobile'
    }

    contacts = [
        { title: 'Telegram', pl: 'Your TG contact' },
        { title: 'Matrix', pl: 'Your Matrix contact' },
        { title: 'Signal', pl: 'Your TG contact' },
        { title: 'WhatsApp', pl: 'Your TG contact' }
    ]

    formatDate(d: Date) {
        return formattedDate(d)
    }

    async created() {
        await this.fetchMyProfile()
    }
}
</script>

<style lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    gap: 28px;

    &-nav {
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

    &-card {
        display: flex;
        gap: 16px;

        &-photo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            position: relative;
            width: 79px;
            height: 79px;
            background: #121119;
            border-radius: 100px;
        }

        &-reviews {
            display: flex;
            gap: 4px;
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-size: 12px;
            line-height: 15px;

            .positive {
                color: #00BD06;
            }

            .negative {
                color: #F64E2A;
            }
        }

        &-rating {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 6px 7px 6px 6px;
            gap: 2px;
            position: absolute;
            left: calc(50%);
            transform: translate(-50%, 50%);
            bottom: 0;
            background: #363441;
            border: 3px solid #0A090F;
            border-radius: 100px;
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            flex: none;
            order: 0;
            flex-grow: 0;

            .green {
                color: #00BD06;
            }
        }

        &-username {
            font-family: 'Kenyan Coffee';
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
        }

        &-userid {
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 12px;
        }

        &-since,
        &-verifed,
        &-until {
            display: flex;
            gap: 10px;
            font-family: 'Reza Zulmi Alfaizi Sans';
            font-size: 14px;
            line-height: 140%;
            color: rgba(255, 255, 255, 0.4);

            .date {
                color: #fff;
                text-decoration: underline;
            }
        }
    }

    &-reviews {
        &-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0px;
            gap: 8px;

            &-left {
                display: inline-block;

                &-point {
                    display: inline-block;
                    width: 3px;
                    height: 3px;
                    background: #FFFFFF;
                    border-radius: 50%;
                    margin: 2% 0;
                }

                &-count {
                    font-family: 'Reza Zulmi Alfaizi Sans';
                    font-size: 14px;
                    line-height: 160%;
                    color: rgba(255, 255, 255, 0.5);
                }
            }

            &-right {
                font-family: 'Reza Zulmi Alfaizi Sans';
                font-size: 14px;
                line-height: 160%;
                color: rgba(255, 255, 255, 0.5);

                &-score {
                    font-family: 'Reza Zulmi Alfaizi Sans';
                    color: #fff;
                }
            }
        }

        &-items {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;

            &-img {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 109px;
                height: 60px;
                background: #1D1D29;
                border-radius: 10px;
            }

            &-title {
                font-family: 'Kenyan Coffee';
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                color: #FFFFFF;
            }
        }
    }

    &-contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        &-item {
            width: 100%;
        }

        &-add {
            width: auto;
        }
    }

    &-currencies {
        display: flex;
        flex-direction: column;
        gap: 14px;

        &-scroll {
            display: flex;
            gap: 10px;
            overflow: auto;


            &-item {
                display: grid;
                grid-template-columns: 70px min(100px);
                gap: 12px;
                box-sizing: border-box;

                min-width: 189px;
                height: 74px;

                border: 1px solid #18171C;
                border-radius: 12px;

                flex: none;
                order: 0;
                flex-grow: 0;

                &-add {
                    box-sizing: border-box;
                    border: 1px solid #18171C;
                    border-radius: 12px;
                    display: flex;
                    padding: 6px;
                    width: 74px;
                    height: 74px;

                    .profile-currencies-scroll-item-col {
                        height: 40px !important;
                    }
                }

                &-title {
                    font-family: 'Hanson';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 12px;
                }

                &-amount {
                    font-family: 'Reza Zulmi Alfaizi Sans';
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                }

                &-desc {
                    font-family: 'Reza Zulmi Alfaizi Sans';
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                    color: rgba(255, 255, 255, 0.6);
                }

                &-col {
                    &-icon {
                        background: #fff;
                        padding: 6px 9px;
                        border-radius: 50%;
                    }

                    &:first-child {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        margin: auto;
                        width: 58px;
                        height: 58px;
                        background: rgba(60, 60, 72, 0.2);
                        border-radius: 8px;
                    }

                    &:last-child {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding: 10px 0;
                    }
                }
            }
        }
    }

    &-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
}
</style>
