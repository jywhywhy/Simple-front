export const state = () => ({
  boardForm: {
    bTitle: '',
    bContent: '',
  },
  list: [],
})

export const getters = {
  getList: (state) => state.list,
}

export const mutations = {
  updateItem(state, { field, subField, value }) {
    subField ? (state[field][subField] = value) : (state[field] = value)
  },
}

export const actions = {
  write({ commit, state }) {
    const formData = new FormData()
    formData.append('mId', sessionStorage.getItem('mId'))
    formData.append('bTitle', state.boardForm.bTitle)
    formData.append('bContent', state.boardForm.bContent)
    this.$axios
      .post('/api/board/write', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('글작성 성공')
        this.$router.push('/board/list')
      })
      .catch((e) => {
        alert('글작성 실패')
      })
  },
  async setList({ commit, state }) {
    await this.$axios
      .get('/api/board/list')
      .then((res) => {
        commit('updateItem', {
          field: 'list',
          value: res.data,
        })
      })
      .catch((e) => {
        alert('리스트 없음')
        this.$router.push('/')
      })
  },
}
