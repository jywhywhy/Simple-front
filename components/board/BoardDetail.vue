<template>
  <div>
    <div>제목 : {{ item.btitle }}</div>
    <div>조회수 : {{ item.bviews }}</div>
    <div>작성일 : {{ item.bcreateDate }}</div>
    <div>내용 : {{ item.bcontent }}</div>
    <NuxtLink v-if="isWriter" :to="`/board/update/${item.bid}`" tag="button">수정</NuxtLink>
    <button @click='deleteBoard()'>삭제</button>
    <button @click="check()">체크</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'board/getItemBoardForm',
      isWriter: "board/isWriter"
    }),
  },
  methods: {
    deleteBoard() {
      this.$store.dispatch('board/delete', this.item.bid);
    },
    check() {
      alert(this.isWriter)
    },
  }
}
</script>
