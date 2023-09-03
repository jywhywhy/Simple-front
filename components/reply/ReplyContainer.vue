<template>
  <div>
    <ReplyInput />
    <ReplyList />
  </div>
</template>
<script>
import ReplyInput from './ReplyInput.vue'
import ReplyList from './ReplyList.vue'

export default {
  components: { ReplyList, ReplyInput },
}
</script>
