<template>
    <span class="block-title-oracle">{{ text }}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class BlockTitleOracle extends Vue {
    @Prop({ default: '' }) readonly text!: string
}
</script>
<style lang="scss">
.block-title-oracle {
    font-family: "Kenyan Coffee";
    font-weight: 400;
    letter-spacing: 1.5px;
    font-size: 17px;
    line-height: 17px;
    text-transform: uppercase;
    width: 100%;
    color: #fff;
}
</style>