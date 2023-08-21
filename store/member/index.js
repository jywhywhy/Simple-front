export const state = () => ({
  signForm: {
    username: '',
    password: '',
    mName: '',
  },
  isAuthentication: '',
})

export const getters = {
  getIsAuthentication: (state) => state.isAuthentication,
}

export const mutations = {
  updateItem(state, { field, subField, value }) {
    subField ? (state[field][subField] = value) : (state[field] = value)
  },
}

export const actions = {
  async signIn({ commit, state }) {
    await this.$axios
      .post('/api/member/signIn', state.signForm)
      .then((res) => {
        commit('updateItem', {
          field: 'isAuthentication',
          value: true,
        })
        sessionStorage.setItem('mId', res.data.mid)
        alert('환영합니다')
        this.$router.push('/')
      })
      .catch((e) => {
        alert('아이디나 비밀번호를 확인하세요')
      })
  },
  async authentication({ commit }) {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('mId') > 0) {
        await commit('updateItem', {
          field: 'isAuthentication',
          value: true,
        })
      } else {
        await commit('updateItem', {
          field: 'isAuthentication',
          value: false,
        })
      }
    }
  },
  async signOut({ commit }) {
    await commit('updateItem', {
      field: 'isAuthentication',
      value: false,
    })
    sessionStorage.removeItem('mId')
    alert('로그아웃')
    this.$router.push('/')
  },
  async signUp({ state, commit }) {
    await this.$axios
      .post('/api/member/signUp', state.signForm)
      .then((res) => {
        alert('회원가입 완료')
        this.$router.push('/sign')
      })
      .catch((e) => {
        alert('회원가입 실패')
      })
  },
}
