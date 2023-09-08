<template>
  <div>
    <BoardWriteForm type="write" />
  </div>
</template>
<script>
import BoardWriteForm from '../../../components/board/BoardWriteForm.vue'

export default {
  components: { BoardWriteForm },
  layout: 'Main',
  async asyncData({ store }) {
    await store.dispatch('board/initItem')
  },
}
</script>
