<template>
  <section class="productTitle">
      <h3>product</h3>
  </section>
  <main>
    <h4>{{ product.title }}</h4>
    <div class="productImg">
      <img :src="product.imageUrl" :alt="product.title">
    </div>
  </main>
</template>

<script>
const url = process.env.VUE_APP_API
const api = process.env.VUE_APP_PATH

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
    //   console.log(this.$route.params.id)
      const id = this.$route.params.id
      this.$http.get(`${url}/api/${api}/product/${id}`)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
  .productTitle{
      margin-top: 70px;
  }
  .productImg{
    width: 200px;
    height: 200px;
    overflow-y: scroll;
  }
</style>
