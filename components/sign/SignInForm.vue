<template>
  <div class="form-signin w-100 mx-auto mt-5">
    <form @submit.prevent="signIn()">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-floating">
        <input
          id="floatingInput"
          ref="username"
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
          ref="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <NuxtLink :to="{ name: 'sign-up' }">Sign Up</NuxtLink>
      <button class="btn btn-primary w-100 py-2">Sign in</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignInForm',
  computed: {
    username: {
      get() {
        return this.$store.getters['member/getItem'].signForm.username
      },
      set(item) {
        this.$store.commit('member/setItem', {
          field: 'signForm',
          subField: 'username',
          item,
        })
      },
    },
    password: {
      get() {
        return this.$store.getters['member/getItem'].signForm.password
      },
      set(item) {
        this.$store.commit('member/setItem', {
          field: 'signForm',
          subField: 'password',
          item,
        })
      },
    },
  },
  methods: {
    signIn() {
      if (this.username === '') {
        alert('아이디를 입력하세요.')
        this.$refs.username.focus()
        return
      }
      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        this.$refs.password.focus()
        return
      }
      this.$store.dispatch('member/signIn')
    },
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
