<template>
  <div class="form-signin w-100 mx-auto mt-5">
    <form @submit.prevent="signIn">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          id="floatingInput"
          v-model="username"
          type="email"
          class="form-control"
          placeholder="Id"
        />
        <label for="floatingInput">Id</label>
      </div>
      <div class="form-floating">
        <input
          id="floatingPassword"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <NuxtLink to="/sign/up">Sign Up</NuxtLink>
      <button class="btn btn-primary w-100 py-2">Sign in</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignInForm',
  computed: {
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
      signIn: 'member/signIn',
    }),
  },
}
</script>
<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
