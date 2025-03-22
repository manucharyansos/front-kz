import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import axios, { AxiosResponse } from 'axios'
import { store } from '..'

@Module({
  namespaced: true,
  name: 'auth',
  stateFactory: true,
  store,
})
export default class Auth extends VuexModule {
  usersAndRoles = []

  @Mutation
  setUsers(): void {
    this.usersAndRoles = []
  }

  @Action
  async logout(): Promise<void> {
    await axios.post('/api/auth/logout')
  }

  @Action
  async login(loginData: {
    login: string
    password: string
  }): Promise<void> {
    return await axios.post('/api/v1/auth/login', loginData)
  }

  @Action
  async register(loginData: {
    login: string
    password: string
  }): Promise<AxiosResponse> {
    return await axios.post('/api/v1/auth/register', loginData)
  }

  @Action
  async loginWithTg(loginData: {
    telegramID: string
    code: string
  }): Promise<AxiosResponse> {
    return await axios.post('/api/v1/auth/loginwithtg', loginData)
  }

  @Action
  async registerWithTg(loginData: {
    telegramID: string
    code: string
  }): Promise<AxiosResponse> {
    return await axios.post('/api/v1/auth/regwithtg', loginData)
  }

  @Action
  async confirmWithTg(loginData: {
    telegramID: string
    code: string
  }): Promise<AxiosResponse> {
    return await axios.post('/api/v1/auth/confirmTgLogin', loginData)
  }

  get getUsersAndRoles() {
    return this.usersAndRoles
  }
}
