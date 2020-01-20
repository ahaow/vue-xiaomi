<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    getUser() {
      this.axios.get('/user').then(res => {
        console.log(res)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  }
}
</script>

<style lang="scss" >
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/base.scss';
  @import './assets/scss/button.scss';
</style>
