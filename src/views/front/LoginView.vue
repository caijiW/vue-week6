<template>
<main class="login">
  <section class="container">
      <h3 class="fs-big text-center">後台登入</h3>
    <form class="login-form">
          <div class="row  justify-content-center">
              <div class="col-6">
                  <div class="form-floating mb-5">
          <input
            type="email"
            class="form-control"
            id="floatingemail"
            placeholder="name@example.com"
            v-model="user.username"
            @keyup.enter="login"
          />
          <label for="floatingemail">Email address</label>
          </div>
          <div class="form-floating  mb-5">
            <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="user.password"
            @keyup.enter="login"
            />
            <label for="floatingPassword">Password</label>
          </div>
           <button type="button" class="login-btn btn btn-primary w-100"
           @click="login">
           登入</button>
        </div>
       </div>
    </form>
  </section>
</main>
</template>

<style lang="scss" scoped>
// body {
//   padding-top: 70px;
// }

// .form-control{
//   font-size: 18px;
// }

.login{
  margin-top: 70px;
  min-height: calc(100vh - 70px) ;
}

// .login{
//   border: solid 1px;
//   width: 600px;
// }

.login-form{
    margin-top: 72px;
   input {
    -webkit-background-clip: text;
  }
  .login-btn{
    padding: 1rem 0.75rem;
    letter-spacing: 1rem;
    text-indent: 1rem;
    &:focus{
      // outline-color: red;
      box-shadow: none;
    }
  }
}

</style>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.user.username === '' || this.user.password === '') {
        alert('請輸入完整資訊')
        return
      }
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          console.log(res)
          const { token, expires } = res.data
          document.cookie = `hextoken=${token}; expires=${new Date(expires)}`
          this.$router.push('/admin/Products') // 轉址
        })
        .catch((err) => {
          console.log(err)
          alert('登入失敗')
          this.user.username = ''
          this.user.password = ''
        })
    }
  }
}
</script>
