<template>
  <div v-if="state === 'first'" class="login">
    <h3 class="login-title">Log in</h3>
    <!-- <InputOracle
      ref="login"
      class="login-input"
      placeholder="Phone number / nickname"
      type="text"
    /> -->
    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="oracle22_test_bot"
      data-size="large" data-onauth="onTelegramAuth(user)"></script>
    <div class="login-desc">Don't have an account yet?</div>
    <nuxt-link class="login-link" to="/signup">Register</nuxt-link>
    <!-- <ButtonOracle
      class="login-button"
      text="Continue"
      color="orange"
      @click.prevent="setSecond"
    /> -->
  </div>
  <div v-else-if="state === 'second'" class="login2">
    <h3 class="login-title">Log in</h3>
    <div class="login2-desc">We have sent a confirmation code.</div>
    <div class="login-code">
      <InputOracle ref="code" class="login-input" placeholder="0" type="text" size="big" />
      <!-- <InputOracle
        class="login2-input"
        placeholder="0"
        type="text"
        size="big"
      />
      <InputOracle
        class="login2-input"
        placeholder="0"
        type="text"
        size="big"
      />
      <InputOracle
        class="login2-input"
        placeholder="0"
        type="text"
        size="big"
      /> -->
    </div>
    <ButtonOracle class="login2-button" text="Continue" color="orange" @click="setThird" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action } from 'vuex-class'
import { AxiosResponse } from 'axios';

enum State {
  First = 'first',
  Second = 'second',
  Third = 'third',
}

interface ITgAuthData {
  telegramID?: number
  code?: string
}

interface ITGUser {
  first_name: string;
  last_name: string;
  id: number;
  username: string;
}

interface IRef {
  computedValue: string
}

@Component
export default class LoginPage extends Vue {
  @Action('auth/login') readonly login!: Function
  @Action('auth/loginWithTg') readonly loginWithTg!: (data: ITgAuthData) => Promise<AxiosResponse>
  @Action('auth/confirmWithTg') readonly confirmWithTg!: (data: ITgAuthData) => Promise<AxiosResponse>
  fields: ITgAuthData = {}
  state = State.First

  setSecond() {
    this.state = State.Second
  }

  async setThird() {
    const code = (this.$refs.code as unknown as IRef).computedValue
    console.log(this.$refs)
    if (code) {
      const { status } = await this.confirmWithTg({ ...this.fields, code })
      if (status === 200) {
        this.$router.push('/whitelist/my-profile')
      }
    } else {
      const { status } = await this.login({ login: 'zzzz', password: 'pass' })
      if (status === 200) {
        this.$router.push('/whitelist/my-profile')
      }
    }

    this.state = State.Third
  }

  created() {
    if (process.client) {
      window.onTelegramAuth = async (user: ITGUser) => {
        this.fields.telegramID = user.id
        await this.loginWithTg({ telegramID: this.fields.telegramID })
          .then(() => {
            this.state = State.Second
          })
          .catch()
      }
    }
  }

  layout() {
    return 'auth'
  }
}
</script>

<style lang="scss">
.login {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    height: 21px;
    font-family: 'Hanson';
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  &-input {
    margin-top: 12px;
    width: 311px;
  }

  &-desc {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-family: 'Reza Zulmi Alfaizi Sans';
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.4);
  }

  &-link {
    margin-top: 12px;
    height: 10px;

    font-family: 'Hanson';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    text-transform: uppercase;
    text-decoration: none;
    color: #f64e2a;
  }

  &-button {
    position: fixed;
    bottom: 40px;
    width: 327px;
  }
}

.login2 {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    height: 21px;
    left: calc(50% - 110px / 2 - 0.5px);
    top: 219px;
    font-family: 'Hanson';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 20px;
  }

  &-desc {
    display: flex;
    justify-content: center;
    font-family: 'Reza Zulmi Alfaizi Sans';
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.4);
  }

  &-button {
    position: fixed;
    bottom: 40px;
    width: 327px;
  }

  &-code {
    display: flex;
    gap: 12px;
    margin-top: 42px;
  }

  &-input {
    width: 47px;
    font-size: 24px;
  }
}
</style>
