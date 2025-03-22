<template>
  <div v-if="state === 'first'" class="register">
    <h3 class="register-title">Sign up</h3>
    <!-- <ButtonOracle class="register-button" text="Full sign up" icon="message" @click="setSecond" /> -->
    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="oracle22_test_bot"
      data-size="large" data-onauth="onTelegramAuth(user)"></script>
    <!-- <ButtonOracle class="register-button" text="Sign up with telegram" icon="telegram"
      @click="() => TWidgetLogin.auth()" /> -->
    <div class="register-desc">Do you already have an account?</div>
    <nuxt-link class="register-link" to="/login">Log in</nuxt-link>
  </div>
  <!-- 
  <div v-else-if="state === 'second'" class="register2">
    <h3 class="register2-title">Registration</h3>
    <InputOracle ref="login" class="register2-input" placeholder="e-mail" type="text" />
    <InputOracle ref="password" class="register2-input" placeholder="Create your password" type="password" />
    <div class="register2-desc">Do you already have an account?</div>
    <nuxt-link class="register2-link" to="/login">Log in</nuxt-link>
    <ButtonOracle class="register2-button" text="Continue" color="orange" @click="setThird" />
  </div> -->

  <div v-else-if="state === 'second'" class="register3">
    <h3 class="register2-title">Registration</h3>
    <div class="register2-desc">We have sent a confirmation code.</div>
    <div class="register2-code">
      <InputOracle ref="code" class="register2-input" placeholder="0" type="text" size="big" />
      <!-- <InputOracle class="register3-input" placeholder="0" type="text" size="big" /> -->
      <!-- <InputOracle class="register3-input" placeholder="0" type="text" size="big" /> -->
      <!-- <InputOracle class="register3-input" placeholder="0" type="text" size="big" /> -->
    </div>
    <ButtonOracle class="register3-button" text="Continue" color="orange" @click="setThird" />
    <ModalSeed v-if="showModal" :handler="setFourth" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Action } from 'vuex-class'
import InputOracle from '@/components/input-oracle.vue'
import ButtonOracle from '@/components/button-oracle.vue'
import ModalSeed from '@/components/modal-seed.vue'

enum State {
  First = 'first',
  Second = 'second',
  Third = 'third',
  Fourth = 'fourth',
}

interface IRef {
  computedValue: string
}

interface IAuthData {
  login: string
  password: string
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

declare global {
  interface Window {
    onTelegramAuth: (user: ITGUser) => void
  }
}

@Component({
  components: {
    InputOracle,
    ButtonOracle,
    ModalSeed,
  },
})
export default class SignUp1Page extends Vue {
  @Action('auth/register') readonly register!: (data: IAuthData) => Promise<void>
  @Action('auth/registerWithTg') readonly registerWithTg!: (data: ITgAuthData) => Promise<void>
  @Action('auth/confirmWithTg') readonly confirmWithTg!: (data: ITgAuthData) => Promise<void>
  
  fields: ITgAuthData = {}
  name = 'SignUp1Page'
  state = State.First
  showModal = false

  async setThird() {
    const login = (this.$refs.login as unknown as IRef).computedValue
    const password = (this.$refs.password as unknown as IRef).computedValue
    const code = (this.$refs.code as unknown as IRef).computedValue

    if (login && password) {
      await this.register({ login, password })
        .then(() => {
          this.state = State.Third
        })
        .catch()
    }
    if (code) {
      await this.confirmWithTg({ telegramID: this.fields.telegramID })
        .then(() => {
          this.redir();
        })
        .catch()
    }
  }

  setShowModal() {
    this.showModal = true
  }

  setFourth() {
    this.showModal = false
    this.state = State.Fourth
  }

  redir() {
    this.$router.push('/whitelist/my-profile')
  }

  created() {
    if (process.client) {
      window.onTelegramAuth = async (user: ITGUser) => {
        this.fields.telegramID = user.id
        await this.registerWithTg({ telegramID: this.fields.telegramID })
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
.register {
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

  &-button {
    margin-top: 20px;
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
}

.register2 {
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
    max-width: 327px;
  }
}

.register3 {
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
