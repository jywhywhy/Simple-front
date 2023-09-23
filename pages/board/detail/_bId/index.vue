<template>
  <div>
    <BoardDetail />
  </div>
</template>
<script>
import BoardDetail from '../../../../components/board/BoardDetail.vue'

export default {
  components: { BoardDetail },
  layout: 'Main',
  async asyncData({ store, params }) {
    const { bId } = params
    await store.dispatch('board/setItem', bId)
    await store.commit('reply/setItem', {
      field: 'replyForm',
      subField: 'bid',
      item: bId,
    })
    await store.dispatch('reply/setList')
  },
  async created() {
    await this.$store.dispatch('board/writer')
    await this.$store.commit('reply/setItem', {
      field: 'replyForm',
      subField: 'mid',
      item: sessionStorage.getItem('mId'),
    })
  },
}
</script>
