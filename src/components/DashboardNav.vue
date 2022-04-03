<template>
  <ul class="nav nav-tabs container">
    <li class="nav-item">
      <router-link to="/" class="nav-link" aria-current="page"
        >回前台</router-link
      >
    </li>
    <li class="nav-item">
      <router-link to="/admin/Products" class="nav-link">商品管理</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/admin/orders" class="nav-link">訂單管理</router-link>
    </li>
      <button type="button" class="btn-logout btn btn-primary text-white">登出</button>
  </ul>
</template>

<style lang="scss">
  .btn-logout {
    margin-left: auto;
    margin-bottom: 3px;
  }
  .nav-tabs .nav-link{
    border-top-right-radius: 1.25rem;
    border-top-left-radius: 1.25rem;
  }

</style>
