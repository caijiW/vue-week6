<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{temp.title}}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
              <div class="col-4">
                  <input type="file" @change="uploadImg">
              </div>
              <div class="col-8">456</div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const url = process.env.VUE_APP_API
const api = process.env.VUE_APP_PATH

export default {
  props: ['temp'],
  methods: {
    openModal () {
      console.log(this.temp)
      this.myModal.show()
    },
    closeModal () {
      this.myModal.hide()
    },
    uploadImg (e) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http.post(`${url}/api/${api}/admin/upload`, formData)
        .then((res) => {
          console.log(res)
        //   this.productImg = res.data.imageUrl
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.myModal = new Modal(document.querySelector('#productModal'))
  }
}
</script>

<style lang="scss" scoped>
  .modal-dialog{
      max-width: 800px;
  }
</style>
