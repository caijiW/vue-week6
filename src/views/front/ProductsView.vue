<template>
  <section class="productsTitle">
    <h3 class="fs-lg">porducts</h3>
  </section>
  <main>
    <div class="container">
      <div class="row row-cols-4">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card  mb-5" style="width: 18rem">
            <div class="productsImg">
              <img :src="product.imageUrl" alt="">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <router-link :to="`/product/${product.id}`" class="btn btn-primary">Go somewhere</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
const url = process.env.VUE_APP_API
const api = process.env.VUE_APP_PATH

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${url}/api/${api}/products/all`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
  .productsTitle{
    margin-top: 70px;
  }

  .productsImg{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
