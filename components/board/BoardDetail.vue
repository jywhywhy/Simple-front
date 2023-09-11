<template>
  <div>
    <div>번호 : {{ item.bid }}</div>
    <div>작성자 : {{ item.mid }}</div>
    <div>제목 : {{ item.btitle }}</div>
    <div>조회수 : {{ item.bviews }}</div>
    <div>작성일 : {{ item.bcreateDate }}</div>
    <div>내용 : {{ item.bcontent }}</div>
    <NuxtLink v-if="isWriter" :to="`/board/update/${item.bid}`"
      ><button>수정</button></NuxtLink
    >
    <button @click="deleteBoard()">삭제</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BoardDetail',
  computed: {
    ...mapGetters({
      item: 'board/getItemBoardForm',
      isWriter: 'board/isWriter'
    }),
  },

  methods: {
    deleteBoard() {
      this.$store.dispatch('board/delete', this.item.bid)
    },
  }
}
</script>
