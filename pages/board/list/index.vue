<template>
  <div class="mt-5">
    <BoardList />
    <PageNav style="display: flex; justify-content: center" />
  </div>
</template>

<script>
import BoardList from '../../../components/board/BoardList.vue'
import PageNav from '@/components/pagenation/PageNav.vue'

export default {
  components: { PageNav, BoardList },
  layout: 'Main',
  async asyncData({ store }) {
    await store.dispatch('board/setList')
  },
}
</script>
