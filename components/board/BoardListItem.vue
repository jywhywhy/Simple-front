<template>
  <tr>
    <td>
      <NuxtLink :to="`/board/detail/${item.bid}`"
        ><a href="javascript:void(0)">{{ item.btitle }}</a></NuxtLink
      >
    </td>
    <td>{{ item.mname }}</td>
    <td>{{ item.bcreateDate }}</td>
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
