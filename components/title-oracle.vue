<template>
    <div class="title-oracle" :class="classes">{{ text }}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TitleOracle extends Vue {
    @Prop({ default: '' }) readonly text!: string
    @Prop({default: ''}) readonly classes!: string
}
</script>
<style lang="scss">
.title-oracle{
  margin-top: 3px;
  font-family: 'Hanson';

}
</style>
