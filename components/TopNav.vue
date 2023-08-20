<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <NuxtLink to="/" tag="b-navbar-brand" href="#" class="nav_title"
      >title</NuxtLink
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">테스트링크</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <NuxtLink v-if="!isAuthentication" to="/sign" tag="b-dropdown-item"
            >Sign In</NuxtLink
          >
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item v-if="isAuthentication" href="#" @click="signOut()"
            >Sign Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopNav',
  computed: {
    ...mapGetters({
      isAuthentication: 'member/getIsAuthentication',
    }),
  },
  methods: {
    signOut() {},
  },
}
</script>

<style scoped>
.nav_title {
  cursor: pointer;
}
</style>
