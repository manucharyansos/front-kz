<template>
    <div :class="navStyle">
        <div class="whitelist-catalogue-nav">
            <div class="whitelist-catalogue-nav-back">
                <ArrowBackIcon />
                <InputOracle placeholder="Search..." class="whitelist-catalogue-nav-back-input" search="true" @changed="searchChanged" />
            </div>
            <div class="whitelist-catalogue-nav-burger">
                <BurgerIcon @click="openCategories" />
            </div>
        </div>
        <template v-if="profiles">
                <div class="whitelist-catalogue-categories" :style="categoriesStyle">
                    <div v-for="(category, id) of profiles.categories" :key="category"
                        class="whitelist-catalogue-categories-item">
                        <BlockTitleOracle :text="category" class="whitelist-catalogue-category-name" />
                        <CheckboxOracle :id="id" :ref="category" round="true" @click="toggleCategory(category)" />
                    </div>
                </div>
                <div v-for="(users, title) of profiles.users" :key="title" class="whitelist-catalogue-category">
                    <BlockTitleOracle :text="title" class="whitelist-catalogue-category-name" />
                    <div class="whitelist-catalogue-category-list">
                        <div v-for="user of users" :key="user.id" class="whitelist-catalogue-category-item"
                            @click="$router.push('/whitelist/profile/' + user.id)">
                            <div class="whitelist-catalogue-category-item-left">
                                <img :src="require('@/assets/png/zaglushka.png')" alt="">
                            </div>
                            <div class="whitelist-catalogue-category-item-right">
                                <div class="whitelist-catalogue-category-item-username">@{{ user.username }} (ID: {{ user.id
                                }})
                                </div>
                                <div class="whitelist-catalogue-category-item-verified-for">{{user.category.map(e =>
                                    e.name).join(', ')}}</div>
                                <div class="whitelist-catalogue-category-item-verified-period">Verified sinсe {{
                                    formatDate(user.verifiedSince) }} to {{ formatDate(user.verifiedUntil) }}
                                </div>
                                <div class="whitelist-catalogue-category-item-desc">{{ user.rating }}/5 - (702) Reviews -
                                    <span class="green">${{ user.deposit }}</span> Deposit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>
        <div class="whitelist-catalogue-footer">
            <ButtonOracle text="Become @OracleVerified" color="gray" />
            <ButtonOracle text="Oracle's Market" color="gray" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import { shortFormattedDate } from '@/helpers'
// @ts-ignore
import BurgerIcon from '@/assets/svg/burger-menu.svg?inline'
// @ts-ignore
import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
import BlockTitleOracle from '~/components/block-title-oracle.vue'

interface Category {
    name: string
}

interface User {
    id: number
    username: string
    category: Category[]
    verifiedSince: Date
    verifiedUntil: Date
    rating: number
    deposit: number
}

interface Profiles {
    users ? : Record < string, User[] >
        categories: string[]
    selectedCategories: string[]
}

@Component({
    components: {
        BurgerIcon,
        ArrowBackIcon,
        BlockTitleOracle
    }
})
export default class WhiteListCataloguePage extends Vue {
    @Action('profile/fetchListProfiles') readonly fetchProfiles!: Function
    @Getter('profile/getProfiles') readonly profiles ? : Profiles
    searchInput = ''
    show = false
    selectedCategories: string[] = []


    async searchChanged(v: string) {
        this.searchInput = v;
        const { selectedCategories, searchInput } = this
        await this.fetchProfiles({ selectedCategories: [...selectedCategories], name: searchInput })

    }

    @Watch('profiles')
    onChangeProfiles() {
        const { profiles } = this
        if (profiles) {
            const { selectedCategories = [] } = profiles
            this.selectedCategories = selectedCategories ? [...selectedCategories] : []
        }
    }

    openCategories() {
        this.show = !this.show;
        const body = document.querySelector('body') as HTMLBodyElement
        body.style.overflow = this.show ? 'hidden' : 'auto'
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async toggleCategory(category: string) {
        (this.selectedCategories.includes(category)) ?
        this.selectedCategories = this.selectedCategories.filter(item => item !== category): this.selectedCategories.push(category);
        const { selectedCategories, searchInput } = this
        await this.fetchProfiles({ selectedCategories: [...selectedCategories], name: searchInput })
        this.openCategories();
    }

    formatDate(d: Date) {
        return shortFormattedDate(d)
    }

    get navStyle() {
        return ['whitelist-catalogue', { open: this.show }]
    }

    get categoriesStyle() {
        return { display: this.show ? 'block' : 'none' }
    }

    async created() {
        if (process.client)
            await this.fetchProfiles({});
    }

    layout() {
        return 'mobile'
    }
}
</script>

<style lang="scss">
.whitelist-catalogue {
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    padding: 0 10px;
    &.open {
        background: #121119;
    }
    &-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 0 0;
        &-back {
            display: flex;
            width: 100%;
            gap: 10px;
            align-items: center;
            font-family: "Hanson";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 11px;
            text-transform: uppercase;
            &-input {
                width: 92%;
            }
        }
        &-burger {
            cursor: pointer;
        }
    }
    &:last-child {
        margin-bottom: 165px;
    }
    &-categories {
        position: absolute;
        width: 375px;
        height: 604px;
        left: 0px;
        top: 64px;
        background: #121119;
        &-item {
            /* Frame 72 */
            box-sizing: border-box;
            /* Auto layout */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 14px 4px 14px 12px;
            gap: 8px;
            width: 353px;
            height: 49px;
            border-bottom: 1px solid #252334;
            /* Inside auto layout */
            flex: none;
            order: 8;
            align-self: stretch;
            flex-grow: 0;
        }
    }
    &-category {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        &-name {
            margin: 20px 0;
            text-align: center;
        }
        &-item {
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
            gap: 12px;
            align-items: center;
            padding: 12px;
            min-width: 351px;
            min-height: 104px;
            background: #121119;
            border-radius: 12px;
            cursor: pointer;
            &-left {
                img {
                    width: 80px;
                    height: 80px;
                    background: #121119;
                    border-radius: 8px;
                }
            }
            &-username {
                font-family: 'Reza Zulmi Alfaizi Sans';
                font-size: 16px;
                line-height: 20px;
            }
            &-verified-for {
                font-family: 'Reza Zulmi Alfaizi Sans';
                font-size: 14px;
                line-height: 17px;
            }
            &-verified-period {
                font-family: 'Reza Zulmi Alfaizi Sans';
                font-size: 14px;
                line-height: 17px;
                color: rgba(255, 255, 255, 0.4);
            }
            &-desc {
                font-family: 'Reza Zulmi Alfaizi Sans';
                font-size: 14px;
                line-height: 17px;
                color: rgba(255, 255, 255, 0.4);
                .green {
                    color: green;
                }
            }
        }
    }
    &-footer {
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        min-height: 124px;
        left: 0;
        bottom: 0px;
        background: #1F1E27;
        border-top: 1px solid #2E2D3B;
    }
}
</style>
