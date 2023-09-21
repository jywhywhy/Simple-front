<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item">
        <span class="page-link">&lt;&lt;</span>
      </li>
      <li class="page-item">
        <span class="page-link">&lt;</span>
      </li>
      <li
        v-for="(pageIndex, idx) in pageNumbers"
        :key="idx"
        class="page-item"
        :class="{ active: pageIndex === paging.pageIndex }"
      >
        <a
          class="page-link"
          href="javascript:void(0)"
          @click="movePage(pageIndex)"
        >
          {{ pageIndex }}
        </a>
      </li>
      <li class="page-item">
        <span class="page-link">&gt;</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">&gt;&gt;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageNav',
  computed: {
    ...mapGetters({
      paging: 'board/getPaging',
    }),
    pageNumbers() {
      const pages = []
      for (let i = this.paging.startPage; i <= this.paging.endPage; i++) {
        pages.push(i)
      }
      return pages
    },
  },
  methods: {
    movePage(pageIndex) {
      this.$store.dispatch('board/setList', pageIndex)
    },
  },
}
</script>
