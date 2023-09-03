<template>
  <div class="mt-5">
    <BoardList />
  </div>
</template>

<script>
import BoardList from '../../../components/board/BoardList.vue'

export default {
  components: { BoardList },
  layout: 'Main',
  async asyncData({ store }) {
    await store.dispatch('board/setList')
  },
}
</script>
