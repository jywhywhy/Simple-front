<template>
  <div>
    <BoardWriteForm type="update" />
  </div>
</template>
<script>
import BoardWriteForm from '@/components/board/BoardWriteForm.vue'

export default {
  components: { BoardWriteForm },
  layout: 'Main',
  async asyncData({ store, params }) {
    const { bId } = params
    await store.dispatch('board/setItem', bId)
  },
}
</script>
