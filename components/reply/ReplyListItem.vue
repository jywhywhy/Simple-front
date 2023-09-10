<template>
  <div>
    <div style="display: flex">
      <div
        v-for="(d, dIdx) in item.rdept"
        :key="dIdx"
        style="width: 40px"
      ></div>
      <div>
        <div>
          {{ item.rcontent }}
        </div>
        <textarea
          v-if="reReply"
          ref="rcontent"
          v-model="rcontent"
          rows="5"
        ></textarea>
        <button @click="writeReReply">답글</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReplyListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      reReply: false,
    }
  },
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
    writeReReply() {
      const reReply = this.reReply
      if (reReply) {
        const rcontent = this.rcontent
        if (rcontent == null || rcontent === '') {
          alert('내용을 입력하세요.')
          this.$refs.rcontent.focus()
          return
        }
        this.$store.dispatch('reply/write')
        this.reReply = !reReply
        return
      }
      this.reReply = !reReply
      this.$store.commit('reply/setItem', {
        field: 'replyForm',
        subField: 'rparentId',
        item: this.item.rid,
      })
      this.$store.commit('reply/setItem', {
        field: 'replyForm',
        subField: 'rdept',
        item: this.item.rdept + 1,
      })
    },
  },
}
</script>
