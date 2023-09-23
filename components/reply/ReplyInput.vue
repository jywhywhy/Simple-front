<template>
  <div class="comment-form">
    <form>
      <div class="form-group">
        <textarea
          id="rcontent"
          ref="rcontent"
          v-model="rcontent"
          class="form-control"
          rows="3"
        ></textarea>
      </div>
      <div class="comment-button">
        <button type="submit" class="btn btn-primary" @click="write()">
          댓글 작성
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ReplyInput',
  computed: {
    rcontent: {
      get() {
        return this.$store.getters['reply/getItem'].replyForm.rcontent
      },
      set(item) {
        this.$store.commit('reply/setItem', {
          field: 'replyForm',
          subField: 'rcontent',
          item,
        })
      },
    },
  },
  methods: {
    write() {
      if (this.rcontent == null || this.rcontent === '') {
        alert('내용을 입력하세요.')
        this.$refs.rcontent.focus()
        return
      }
      this.$store.dispatch('reply/write')
    },
  },
}
</script>
<style scoped>
.comment-form {
  margin-top: 20px;
}
.comment-button {
  text-align: right;
}
</style>
