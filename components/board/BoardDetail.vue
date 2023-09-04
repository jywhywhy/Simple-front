<template>
  <div>
    <div>제목 : {{ item.btitle }}</div>
    <div>조회수 : {{ item.bviews }}</div>
    <div>작성일 : {{ item.bcreateDate }}</div>
    <div>내용 : {{ item.bcontent }}</div>
    <NuxtLink :to="`/board/update/${item.bid}`" tag="button">수정</NuxtLink>
    <button @click='deleteBoard()'>삭제</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'board/getItemBoardForm',
    }),
  },
  methods: {
    deleteBoard() {
      this.$store.dispatch('board/delete', this.item.bid);
    },
  }
}
</script>
