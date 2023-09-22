<template>
  <nav v-if="paging.totalCount > 0" aria-label="...">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: paging.startPage === 1 }"
        @click="movePage(1)"
      >
        <span class="page-link">&lt;&lt;</span>
      </li>
      <li class="page-item" :class="{ disabled: paging.pageIndex === 1 }">
        <span class="page-link" @click="movePage(prevPage)">&lt;</span>
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
      <li
        class="page-item"
        :class="{ disabled: isLastPages }"
        @click="movePage(nextPage)"
      >
        <span class="page-link">&gt;</span>
      </li>
      <li
        class="page-item"
        :class="{ disabled: isLastPages }"
        @click="movePage(lastPage)"
      >
        <a class="page-link" href="#">&gt;&gt;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  props: {
    paging: {
      type: Object,
      default() {
        return {}
      },
    },
    pageType: {
      type: String,
      default: ''
    }
  },
  computed: {
    prevPage() {
      return this.paging.startPage - 1 - (this.paging.pageSize - 1)
    },
    nextPage() {
      return this.paging.endPage + 1
    },
    lastPage() {
      return Math.ceil(this.paging.totalCount / this.paging.pageSize)
    },
    pageNumbers() {
      const pages = []
      for (let i = this.paging.startPage; i <= this.paging.endPage; i++) {
        if (i > this.lastPage) {
          break
        }
        pages.push(i)
      }
      return pages
    },
    isLastPages() {
      const lastPage = this.pageNumbers[this.pageNumbers.length - 1]
      return lastPage === this.lastPage
    },
  },
  methods: {
    movePage(pageIndex) {
      this.$store.dispatch(`${this.pageType}/setList`, pageIndex)
    },
  },
}
</script>
<style scoped>
li {
  cursor: pointer;
}
nav {
  display: flex;
  justify-content: center;
}
</style>
