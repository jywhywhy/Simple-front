<template>
  <div class="text-center">
    <NuxtLink v-if="isAuthentication" :to="{ name: 'board-write' }"
      ><button class="btn btn-primary mb-3">글쓰기</button></NuxtLink
    >
    <table class="table table-success">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
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
import PageNav from '@/components/pagenation/PageNav.vue'

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
