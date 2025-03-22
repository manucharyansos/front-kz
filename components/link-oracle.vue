<template>
    <NuxtLink :to="to">{{ text }}
        <ArrowRightIcon v-if="arrow == 'right'" />
    </NuxtLink>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import ArrowRightIcon from '@/assets/svg/arrow-right.svg?inline'

@Component({ components: { ArrowRightIcon } })
export default class ProfilePage extends Vue {
    @Prop({ default: '' }) readonly text!: string
    @Prop({ default: '' }) readonly to!: string
    @Prop({ default: '' }) readonly arrow!: string
}
</script>
<style>
.nuxt-link-exact-active {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Reza Zulmi Alfaizi Sans';
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    color: #F64E2A;
    text-decoration: none;
}
</style>