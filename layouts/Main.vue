<template>
  <div>
    <TopNav />
    <div class="container">
      <Nuxt />
    </div>
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
