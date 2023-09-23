<template>
  <div class="container mt-5">
    <h1 class="display-4">{{ item.btitle }}</h1>
    <p class="lead">{{ item.bcontent }}</p>
    <p><strong>작성자:</strong> {{ item.mname }}</p>
    <p><strong>작성일:</strong> {{ item.bcreateDate }}</p>
    <p><strong>조회수:</strong> {{ item.bviews }}</p>
    <div v-if="isWriter" class="btn-group">
      <NuxtLink :to="`/board/update/${item.bid}`"
        ><a href="#" class="btn btn-warning">수정</a></NuxtLink
      >
      <a href="javascript:void(0)" class="btn btn-danger" @click="deleteBoard()"
        >삭제</a
      >
    </div>
    <ReplyContainer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BoardDetail',
  computed: {
    ...mapGetters({
      isWriter: 'board/isWriter',
      item: 'board/getItemBoardForm',
    }),
  },
  methods: {
    deleteBoard() {
      if (confirm('게시물을 삭제하시겠습니까?')) {
        this.$store.dispatch('board/delete', this.item.bid)
      }
    },
  },
}
</script>
<style scoped>
body {
  background-color: #f8f9fa;
}
.container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.btn-group {
  margin-top: 20px;
}
</style>
