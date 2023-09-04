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
  mounted() {
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
    this.$store.commit('board/setItem', {
      field: 'boardForm',
      subField: 'files',
      item: [],
    })
  }
}
</script>
