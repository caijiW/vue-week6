<template>
  <main class="container">
    <button type="button" class="btn" @click="productModal('isNew')">新增商品</button>
    <table class="table text-center mt-3">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">商品照片</th>
          <th scope="col">商品名稱</th>
          <th scope="col">分類</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row" class="align-middle">{{ `${index+1}.` }}</th>
          <td class="productsImg">
            <img :src="product.imageUrl"  alt="">
          </td>
          <td class="align-middle">{{ product.title }}</td>
          <td class="align-middle">{{ product.category }}</td>
          <td class="align-middle">{{ product.origin_price }}</td>
          <td class="align-middle">{{ product.price }}</td>
          <td class="align-middle text-start">
            <div class="form-check form-switch d-flex justify-content-center">
              <!-- <input class="form-check-input me-1" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked> -->
              <label :class="{'text-success':product.is_enabled}" for="flexSwitchCheckChecked">{{ product.is_enabled? '啟用':'未啟用' }}</label>
            </div>
          </td>
          <td class="align-middle">
            <button type="button" class="btn btn-primary me-2"
            @click="productModal('edit', product)"
            >編輯</button>
            <button type="button" class="btn btn-danger text-dark">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal ref="productModal" :temp=temp></modal>
  </main>
</template>

<script>
import modal from '../../components/productsModal.vue'
const url = process.env.VUE_APP_API
const api = process.env.VUE_APP_PATH

export default {
  data () {
    return {
      i: 1,
      products: [],
      temp: {}
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
            this.getProducts()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('請先登入')
        this.$router.push('/login')
      }
    },
    getProducts () {
      this.$http
        .get(`${url}/api/${api}/admin/products`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    productModal (status, product) {
      if (status === 'isNew') {
        console.log('123')
      } else if (status === 'edit') {
        this.$refs.productModal.openModal()
        this.temp = JSON.parse(JSON.stringify(product))
        // console.log(this.temp.title)
      }
    }
  },
  mounted () {
    this.checkLogin()
    console.log(this.$refs)
  },
  components: {
    modal
  }
}
</script>

<style lang="scss" scoped>
$primary: #9ECFD4;
$secondary: #FAD9E7;
  tbody tr{
    &:nth-child(even){
      background-color: rgba(158, 207, 212,0.3);
    }
    &:hover {
      background-color: $secondary;
    }
  }
  .productsImg{
    width: 150px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  // tbody tr:nth-child(even){
  // }
</style>
