<template>
  <div>
    <BoardDetail />
    <ReplyContainer />
  </div>
</template>
<script>
import BoardDetail from '../../../../components/board/BoardDetail.vue'
import ReplyContainer from '../../../../components/reply/ReplyContainer.vue'

export default {
  components: { ReplyContainer, BoardDetail },
  layout: 'Main',
  async asyncData({ store, params }) {
    const { bId } = params
    await store.dispatch('board/setItem', bId)
    await store.dispatch('reply/setList', bId)

    await store.commit('reply/setItem', {
      field: 'replyForm',
      subField: 'bid',
      item: bId,
    })
  },
  mounted() {
    this.$store.commit('reply/setItem', {
      field: 'replyForm',
      subField: 'mid',
      item: sessionStorage.getItem('mId'),
    })
  },
  destroyed() {
    this.$store.commit('board/setItem', {
      field: 'boardForm',
      subField: 'btitle',
      item: '',
    })
    this.$store.commit('board/setItem', {
      field: 'boardForm',
      subField: 'bcontent',
      item: '',
    })
  },
}
</script>
