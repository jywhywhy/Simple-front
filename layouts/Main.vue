<template>
  <div>
    <TopNav />
    <Nuxt />
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  components: { TopNav },
  beforeCreate() {
    this.$store.dispatch('member/authentication')
  },
}
</script>
