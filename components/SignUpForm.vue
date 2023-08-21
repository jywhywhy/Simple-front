<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>Sign Up</h2>
    </div>

    <div class="row g-5">
      <div class="col-12">
        <form class="needs-validation" novalidate @submit.prevent="signUp">
          <div class="row g-3">
            <div class="col-12">
              <label for="name" class="form-label">Name</label>
              <input
                id="name"
                v-model="mName"
                type="text"
                class="form-control"
                placeholder="name"
                value="name"
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Id</label>
              <div class="input-group has-validation">
                <input
                  id="username"
                  v-model="username"
                  type="email"
                  class="form-control"
                  placeholder="id"
                  required
                />
                <div class="invalid-feedback">Your username is required.</div>
              </div>
            </div>

            <div class="col-12">
              <label for="password" class="form-label">Password</label>
              <div class="input-group has-validation">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="password"
                  required
                />
                <div class="invalid-feedback">Your password is required.</div>
              </div>
            </div>
          </div>
          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignUpForm',
  computed: {
    mName: {
      get() {
        return this.$store.state.member.signForm.mName
      },
      set(value) {
        this.$store.commit('member/updateItem', {
          field: 'signForm',
          subField: 'mName',
          value,
        })
      },
    },
    username: {
      get() {
        return this.$store.state.member.signForm.username
      },
      set(value) {
        this.$store.commit('member/updateItem', {
          field: 'signForm',
          subField: 'username',
          value,
        })
      },
    },
    password: {
      get() {
        return this.$store.state.member.signForm.password
      },
      set(value) {
        this.$store.commit('member/updateItem', {
          field: 'signForm',
          subField: 'password',
          value,
        })
      },
    },
  },
  methods: {
    ...mapActions({
      signUp: 'member/signUp',
    }),
  },
}
</script>
<style>
.container {
  max-width: 500px;
}
</style>
