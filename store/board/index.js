export const state = () => ({
  item: {
    boardForm: {
      bid: '',
      mid: '',
      btitle: '',
      bcontent: '',
      files: [],
    },
    isWriter: '',
  },
  list: [],
})

export const getters = {
  getItem: (state) => state.item,
  getList: (state) => state.list,
  getItemBoardForm: (state) => state.item.boardForm,
  isWriter: (state) => state.item.isWriter,
  getFiles: (state) => state.item.boardForm.files,
}

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  setItem(state, { field, subField, item }) {
    subField ? (state.item[field][subField] = item) : (state.item[field] = item)
  },
  initItem(state, item) {
    state.item = item
  },
}

export const actions = {
  async initItem({ commit }) {
    await commit('initItem', {
      boardForm: {
        bid: '',
        mid: '',
        btitle: '',
        bcontent: '',
        files: [],
      },
    })
  },
  write({ getters, dispatch }) {
    const boardForm = getters.getItem.boardForm
    const formData = new FormData()
    formData.append('mId', sessionStorage.getItem('mId'))
    formData.append('bTitle', boardForm.btitle)
    formData.append('bContent', boardForm.bcontent)
    if (boardForm.files.length > 0) {
      boardForm.files.forEach((file) => formData.append('files', file))
    }
    this.$axios
      .post('/api/board/write', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('글작성 성공')
        dispatch('initItem')
        this.$router.push('/board/list')
      })
      .catch((e) => {
        alert('글작성 실패')
      })
  },
  async setList({ commit }, pageIndex) {
    await this.$axios
      .get('/api/board/list', { params: { pageIndex } })
      .then((res) => {
        commit('setList', res.data)
      })
      .catch((e) => {
        alert('게시물 없음')
      })
  },
  async setItem({ commit }, bId) {
    await this.$axios
      .get(`/api/board/detail/${bId}`)
      .then((res) => {
        commit('setItem', {
          field: 'boardForm',
          item: res.data,
        })
      })
      .catch((e) => {
        alert('정보 없음')
      })
  },
  delete({ commit }, bId) {
    this.$axios
      .delete(`/api/board/delete/${bId}`)
      .then((res) => {
        alert('글삭제 성공')
        this.$router.push('/board/list')
      })
      .catch((e) => {
        alert('글삭제 실패')
      })
  },
  update({ getters, dispatch }) {
    const boardForm = getters.getItem.boardForm
    const formData = new FormData()
    formData.append('bId', boardForm.bid)
    alert(boardForm.bid)
    formData.append('mId', sessionStorage.getItem('mId'))
    formData.append('bTitle', boardForm.btitle)
    formData.append('bContent', boardForm.bcontent)
    boardForm.files.forEach((file) => formData.append('files', file))
    this.$axios
      .put('/api/board/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('글수정 성공')
        dispatch('initItem')
        this.$router.push(`/board/detail/${boardForm.bid}`)
      })
      .catch((e) => {
        alert('글수정 실패')
      })
  },
  async writer({ state, commit }) {
    if (typeof window !== 'undefined') {
      if (String(state.item.boardForm.mid) === sessionStorage.getItem('mId')) {
        console.log('if')
        await commit('setItem', {
          field: 'isWriter',
          item: true,
        })
      } else {
        console.log('else')
        await commit('setItem', {
          field: 'isWriter',
          item: false,
        })
      }
    }
  },
}
