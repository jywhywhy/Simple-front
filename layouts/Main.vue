<template>
  <div>
    <TopNav />
    <Nuxt />
  </div>
</template>

<script>
import TopNav from '../components/common/TopNav.vue'

export default {
  components: { TopNav },
  async mounted() {
    await this.$store.dispatch('member/authentication')
  },
}
</script>
