export const state = () => ({
  signInForm: {
    username: '',
    password: '',
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
  signIn({ commit, state }) {
    this.$axios
      .post('/api/member/signIn', state.signInForm)
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
  authentication({ commit }) {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('mId') > 0) {
        commit('updateItem', {
          field: 'isAuthentication',
          value: true,
        })
      } else {
        commit('updateItem', {
          field: 'isAuthentication',
          value: false,
        })
      }
    }
  },
}
