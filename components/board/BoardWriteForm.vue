<template>
  <form @submit.prevent="write()">
    <label for="bTitle" class="form-label">title</label>
    <input
      id="btitle"
      ref="btitle"
      v-model="btitle"
      type="text"
      class="form-control"
      placeholder="제목을 입력하세요."
    />
    <label for="bContent" class="form-label">content</label>
    <textarea
      id="bcontent"
      ref="bcontent"
      v-model="bcontent"
      type="text"
      rows="5"
      class="form-control"
      placeholder="내용을 입력하세요."
    />
        <div>
          <!-- Styled -->
          <b-form-file
            class="my-3"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            @change="addFile($event)"
          ></b-form-file>
        </div>
    <button class="btn btn-success">작성</button>
  </form>
</template>
<script>
export default {
  computed: {
    btitle: {
      get() {
        return this.$store.getters['board/getItem'].boardForm.btitle
      },
      set(item) {
        this.$store.commit('board/setItem', {
          field: 'boardForm',
          subField: 'btitle',
          item,
        })
      },
    },
    bcontent: {
      get() {
        return this.$store.getters['board/getItem'].boardForm.bcontent
      },
      set(item) {
        this.$store.commit('board/setItem', {
          field: 'boardForm',
          subField: 'bcontent',
          item,
        })
      },
    },
  },
  methods: {
    write() {
      if (this.btitle == null || this.btitle === '') {
        alert('제목을 입력하세요.')
        this.$refs.btitle.focus()
        return
      }
      if (this.bcontent == null || this.bcontent === '') {
        alert('내용을 입력하세요.')
        this.$refs.bcontent.focus()
        return
      }
      this.$store.dispatch('board/write')
    },
    // addFile(e) {
    //   this.$store.commit('board/setItem', {
    //     field: 'boardForm',
    //     subField: 'file',
    //     item: [e.target.files[0], ...this.$store.getters["board/getItem"].boardForm.files]
    //   })
    // },
  },
}
</script>
