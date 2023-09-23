<template>
  <li class="list-group-item">
    <div class="d-flex align-items-center">
      <div v-for="i in item.rdept" :key="i" style="width: 20px"></div>
      <svg
        v-if="item.rdept >= 1"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-return-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
        />
      </svg>
      <span v-if="item.rdept >= 1">&nbsp;&nbsp;</span>
      <div>
        {{ item.rcontent }}
        <small class="text-muted"> - 작성자: {{ item.mname }}</small>
      </div>
    </div>
    <div class="comment-button">
      <!--      <a href="#" class="btn btn-sm btn-warning mr-2">수정</a>-->
      <!--      <a href="#" class="btn btn-sm btn-danger mr-2">삭제</a>-->
      <a
        v-if="isAuthentication"
        href="javascript:void(0)"
        class="btn btn-sm btn-primary"
        @click="writeReReply"
        >답글</a
      >
    </div>
    <div v-if="reReply" class="comment-form">
      <form>
        <div class="form-group">
          <textarea
            ref="rcontent"
            v-model="rcontent"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  </li>
</template>
<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters({
      isAuthentication: 'member/getIsAuthentication',
    }),
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
<style scoped>
.comment-form {
  margin-top: 20px;
}
.comment-button {
  text-align: right;
}
</style>
