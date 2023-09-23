<template>
  <div class="container mt-5">
    <div class="add-button mb-3">
      <NuxtLink v-if="isAuthentication" :to="{ name: 'board-write' }"
        ><a href="javascript:void(0)" class="btn btn-primary"
          >글쓰기</a
        ></NuxtLink
      >
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">게시물 제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <BoardListItem
          v-for="(item, idx) in paging.list"
          :key="idx"
          :item="item"
          :idx="idx"
        />
      </tbody>
    </table>
    <PageNav :paging="paging" page-type="board" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BoardListItem from './BoardListItem.vue'
import PageNav from '@/components/common/PageNav.vue'

export default {
  name: 'BoardList',
  components: { PageNav, BoardListItem },
  computed: {
    ...mapGetters({
      isAuthentication: 'member/getIsAuthentication',
      paging: 'board/getList',
    }),
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
.add-button {
  text-align: right;
}
</style>
