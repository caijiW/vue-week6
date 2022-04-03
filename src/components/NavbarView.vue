<template>
  <nav>
    <div class="container d-flex justify-content-between align-items-center">
      <router-link to="/">
        <h1 class="logo">
         布達羊
      </h1>
      </router-link>
      <ul class="menu d-flex">
        <li class="menu-item">
          <router-link class="fs-mid" to="/about">關於我們</router-link>
        </li>
        <li class="menu-item">
          <router-link class="fs-mid" to="/products">商品列表</router-link>
        </li>
      </ul>
      <router-link to="/order">
        <i class="cart bi bi-cart-fill fs-reg"></i>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss">
  nav{
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
  }
  .logo{
    width: 120px;
    height: 70px;
    background: url(../assets/img/logo.png) center/contain no-repeat ;
    text-indent:  110%;
    white-space: nowrap;
    overflow: hidden;
  }

  .menu{
    margin-left: auto;

    li+li{
      margin-left: 16px;
    }
    a{
      color: #000;
    }
  }

  .cart{
    margin-left: 40px;
  }
</style>
