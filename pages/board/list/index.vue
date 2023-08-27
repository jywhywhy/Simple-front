<template>
  <div class="text-center">
    <table class="table table-success">
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
      </tr>
      <tr v-for="(board, idx) in list" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ board.btitle }}</td>
        <td>{{ board.bcontent }}</td>
      </tr>
    </table>
    <NuxtLink to="/board/write" tag="button" class="btn btn-primary">글쓰기</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'Main',
  async asyncData({ store }) {
    await store.dispatch('board/setList')
    const list = store.getters['board/getList']
    return {
      list,
    }
  },
}
</script>
