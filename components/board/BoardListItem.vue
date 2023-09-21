<template>
  <tr>
    <td>{{ item.bid }}</td>
    <td>
      <NuxtLink :to="`/board/detail/${item.bid}`">{{ item.btitle }}</NuxtLink>
    </td>
    <td>{{ item.bcontent }}</td>
  </tr>
</template>
<script>
export default {
  name: 'BoardListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
}
</script>
