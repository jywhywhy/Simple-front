export const state = () => ({
  item: {
    signForm: {
      username: '',
      password: '',
      mname: '',
    },
    isAuthentication: false,
  },
})

export const getters = {
  getItem: (state) => state.item,
  getIsAuthentication: (state) => state.item.isAuthentication,
}

export const mutations = {
  setItem(state, { field, subField, item }) {
    subField ? (state.item[field][subField] = item) : (state.item[field] = item)
  },
  initItem(state, item) {
    state.item = item
  },
}

export const actions = {
  initItem({ commit }) {
    commit('initItem', {
      signForm: {
        username: '',
        password: '',
        mname: '',
      },
      isAuthentication: false,
    })
  },
  async signIn({ getters, dispatch, commit }) {
    await this.$axios
      .post('/api/member/signIn', getters.getItem.signForm)
      .then((res) => {
        dispatch('initItem')
        commit('setItem', {
          field: 'isAuthentication',
          item: true,
        })
        sessionStorage.setItem('mId', res.data.mid)
        alert('로그인 성공')
        this.$router.push('/')
      })
      .catch((e) => {
        alert('아이디나 비밀번호를 확인하세요')
      })
  },
  async authentication({ commit }) {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('mId') > 0) {
        await commit('setItem', {
          field: 'isAuthentication',
          item: true,
        })
      } else {
        await commit('setItem', {
          field: 'isAuthentication',
          item: false,
        })
      }
    }
  },
  async signOut({ commit }) {
    await sessionStorage.removeItem('mId')
    await commit('setItem', {
      field: 'isAuthentication',
      item: false,
    })
    alert('로그아웃 성공')
    await this.$router.push('/')
  },
  async signUp({ getters, dispatch }) {
    await this.$axios
      .post('/api/member/signUp', getters.getItem.signForm)
      .then(() => {
        alert('회원가입 성공')
        dispatch('initItem')
        this.$router.push('/sign')
      })
      .catch((e) => {
        alert('회원가입 실패')
      })
  },
}
