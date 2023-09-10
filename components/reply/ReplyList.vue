<template>
  <div>
    <ReplyListItem
      v-for="(item, idx) in list"
      :key="idx"
      :item="item"
      :idx="idx"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ReplyListItem from './ReplyListItem.vue'

export default {
  name: 'ReplyList',
  components: { ReplyListItem },
  computed: {
    ...mapGetters({
      list: 'reply/getList',
    }),
  },
}
</script>
