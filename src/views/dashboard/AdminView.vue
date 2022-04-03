<template>
  <h3 class="fs-lg container">後台</h3>
  <dashboardNav/>
  <router-view v-if="LoginSucess"></router-view>
</template>

<script>
import dashboardNav from '@/components/DashboardNav.vue'
export default {
  data () {
    return {
      LoginSucess: false
    }
  },
  methods: {
    checkLogin () {
      const Token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (Token) {
        this.$http.defaults.headers.common.Authorization = `${Token}`
        const api = `${process.env.VUE_APP_API}/api/user/check`
        this.$http.post(api, { api_token: this.Token })
          .then((res) => {
            console.log(res)
            this.LoginSucess = true
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('請先登入')
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.checkLogin()
  },
  components: {
    dashboardNav
  }
}
</script>
