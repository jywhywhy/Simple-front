export const state = () => ({
  item: {
    signForm: {
      username: '',
      password: '',
      mname: '',
    },
    isAuthentication: '',
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
}

export const actions = {
  async signIn({ commit, getters }) {
    await this.$axios
      .post('/api/member/signIn', getters.getItem.signForm)
      .then((res) => {
        commit('setItem', {
          field: 'signForm',
          item: {
            username: '',
            password: '',
            mname: '',
          },
        })
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
    await commit('setItem', {
      field: 'isAuthentication',
      item: false,
    })
    sessionStorage.removeItem('mId')
    alert('로그아웃 성공')
    this.$router.push('/')
  },
  async signUp({ commit, getters }) {
    await this.$axios
      .post('/api/member/signUp', getters.getItem.signForm)
      .then(() => {
        commit('setItem', {
          field: 'signForm',
          item: {
            username: '',
            password: '',
            mName: '',
          },
        })
        alert('회원가입 성공')
        this.$router.push('/sign')
      })
      .catch((e) => {
        alert('회원가입 실패')
      })
  },
}
