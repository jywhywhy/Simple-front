<template>
  <tr>
    <td>{{ idx + 1 }}</td>
    <NuxtLink :to="`/board/detail/${item.bid}`" tag="td">{{
      item.btitle
    }}</NuxtLink>
    <td>{{ item.bcontent }}</td>
  </tr>
</template>
<script>
export default {
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
