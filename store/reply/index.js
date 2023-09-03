export const state = () => ({
  item: {
    replyForm: {
      bid: '',
      mid: '',
      rcontent: '',
      rparentId: '',
    },
  },
  list: [],
})

export const getters = {
  getItem: (state) => state.item,
  getList: (state) => state.list,
}

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  setItem(state, { field, subField, item }) {
    subField ? (state.item[field][subField] = item) : (state.item[field] = item)
  },
}

export const actions = {
  async setList({ commit, getters }, bId) {
    await this.$axios
      .get(`/api/reply/list/${bId}`)
      .then((res) => {
        commit('setList', res.data)
      })
      .catch((e) => {})
  },
  write({ commit, getters, dispatch }) {
    const item = getters.getItem.replyForm
    this.$axios
      .post('/api/reply/write', item)
      .then((res) => {
        alert('댓글작성 성공')
        commit('setItem', {
          field: 'replyForm',
          subField: 'rcontent',
          item: '',
        })
        commit('setItem', {
          field: 'replyForm',
          subField: 'rdept',
          item: '',
        })
        commit('setItem', {
          field: 'replyForm',
          subField: 'rparentId',
          item: '',
        })
        dispatch('setList', item.bid)
      })
      .catch((e) => {
        alert('댓글작성 실패')
      })
  },
}
