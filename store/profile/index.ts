import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import axios from 'axios'
import { store } from '..'


interface Data {
  selectedCategories?: string[]
  name?: string 
}


@Module({
  namespaced: true,
  name: 'profile',
  stateFactory: true,
  store,
})
export default class Auth extends VuexModule {
  profile = {}
  profiles = []

  @Mutation
  setProfile(profile: any): void {
    this.profile = profile
  }

  @Mutation
  setProfiles(profiles: any): void {
    this.profiles = profiles
  }

  @Action
  async fetchMyProfile(): Promise<void> {
    const { data } = await axios.get('/api/v1/user/my-profile')
    this.context.commit("setProfile", data)
  }

  @Action
  async fetchProfile(id: number): Promise<void> {
    const { data } = await axios.get('/api/v1/user/profile/' + id)
    this.context.commit("setProfile", data)
  }

  @Action
  async fetchListProfiles({ selectedCategories = [], name = '' }: Data = {}) {
    let url = '/api/v1/user/list';
    const params = new URLSearchParams();

    if (selectedCategories.length) {
      params.append('cat', selectedCategories.join(';'))    
    }
    if (name) {
      params.append('name', name)
    }

    url += '?' + params.toString();
    
    const { data } = await axios.get(url)
    this.context.commit("setProfiles", data)
  }

  get getMyProfile() {
    return this.profile
  }

  get getProfile() {
    return this.profile
  }

  get getProfiles() {
    return this.profiles
  }
}
