<template>
  <div class="text-center">
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
          v-for="(item, idx) in list"
          :key="idx"
          :item="item"
          :idx="idx"
        />
      </tbody>
    </table>
    <NuxtLink :to="{ name: 'board-write' }"
      ><button class="btn btn-primary">글쓰기</button></NuxtLink
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardListItem from './BoardListItem.vue'

export default {
  name: 'BoardList',
  components: { BoardListItem },
  computed: {
    ...mapGetters({
      list: 'board/getList',
    }),
  },
}
</script>
