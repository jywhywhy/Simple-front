<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>Sign Up</h2>
    </div>

    <div class="row g-5">
      <div class="col-12">
        <form class="needs-validation" novalidate @submit.prevent="signUp()">
          <div class="row g-3">
            <div class="col-12">
              <label for="name" class="form-label">Name</label>
              <input
                id="mname"
                ref="mname"
                v-model="mname"
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
                  ref="username"
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
                  ref="password"
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
export default {
  name: 'SignUpForm',
  computed: {
    mname: {
      get() {
        return this.$store.getters['member/getItem'].signForm.mname
      },
      set(item) {
        this.$store.commit('member/setItem', {
          field: 'signForm',
          subField: 'mname',
          item,
        })
      },
    },
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
    async signUp() {
      const mnameExp = /^[가-힣]{1,12}$/
      const usernameExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const passwordExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      if (!mnameExp.test(this.mname)) {
        alert('닉네임은 12글자 이하의 한글로만 입력해주세요.')
        this.$refs.mname.focus()
        return
      }
      if (!usernameExp.test(this.username)) {
        alert('유효한 이메일 주소를 입력해주세요.')
        this.$refs.username.focus()
        return
      }
      if (!passwordExp.test(this.password)) {
        alert(
          '비밀번호는 최소 8자 이상이어야 하며, 알파벳, 숫자, 특수 문자를 포함해야 합니다.'
        )
        this.$refs.password.focus()
        return
      }
      await this.$store.dispatch('member/signUp')
    },
  },
}
</script>
<style scoped>
.container {
  max-width: 500px;
}
</style>
