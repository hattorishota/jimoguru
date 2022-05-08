<template>
  <div id="top-header">
    <h1 class="logo"><router-link to="/"><img :src="logoImg" alt="Logo" class="header__logo"></router-link></h1>
    <nav class="nav">
      <div class="name-box">
        <router-link to="/worker/dashboard"><img :src="userImg" alt=""></router-link>
        <div class="name-box2">
          <span class="ruby">ﾀﾅｶ ﾀﾛｳ</span>
          <p class="name">田中 太郎</p>
        </div>
      </div>
    </nav>
  </div>
<!-- // 画像の高さを40pxにする -->
</template>

<script>
import LogoImg from '~/assets/images/logo/logo.png'
import UserDef from '~/assets/images/user.png'

export default {
  data() {
    return {
      logoImg: LogoImg,
      userImg: UserDef,
    };
  },
  computed: {


  }
}
</script>