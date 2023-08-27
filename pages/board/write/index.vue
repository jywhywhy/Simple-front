<template>
  <div>
    <form @submit.prevent="write()">
      <label for="bTitle" class="form-label">title</label>
      <input
        id="bTitle"
        ref="bTitle"
        v-model="bTitle"
        type="text"
        class="form-control"
        placeholder="제목을 입력하세요."
      />
      <label for="bContent" class="form-label">content</label>
      <textarea
        id="bContent"
        ref="bContent"
        v-model="bContent"
        type="text"
        rows="5"
        class="form-control"
        placeholder="내용을 입력하세요."
      />
      <button class="btn btn-success">작성</button>
    </form>
  </div>
</template>
<script>
export default {
  layout: 'Main',
  computed: {
    bTitle: {
      get() {
        return this.$store.state.board.boardForm.bTitle
      },
      set(value) {
        this.$store.commit('board/updateItem', {
          field: 'boardForm',
          subField: 'bTitle',
          value,
        })
      },
    },
    bContent: {
      get() {
        return this.$store.state.board.boardForm.bContent
      },
      set(value) {
        this.$store.commit('board/updateItem', {
          field: 'boardForm',
          subField: 'bContent',
          value,
        })
      },
    },
  },
  methods: {
    write() {
      if (this.bTitle == null || this.bTitle === '') {
        alert('제목을 입력하세요.')
        this.$refs.bTitle.focus()
        return
      }
      if (this.bContent == null || this.bContent === '') {
        alert('내용을 입력하세요.')
        this.$refs.bContent.focus()
        return
      }
      this.$store.dispatch('board/write')
    },
  },
}
</script>
