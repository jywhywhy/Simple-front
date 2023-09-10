<template>
  <div>
    <b-form-textarea
      id="rcontent"
      ref="rcontent"
      v-model="rcontent"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button class="btn-success" @click="write()">작성</b-button>
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
