<template>
  <div id="top">
    <!-- <TopHeader /> -->
    <div class="fv">
      <div class="fv_box">
        <div class="img-box">
          <img :src="fvImg" alt="">
        </div>
        <div class="txt-box">
          <!-- <p class="txt1">地元の人のみぞ知るお店に行くなら</p> -->
          <h2 class="title"><img :src="logoImg" alt=""></h2>
          <div class="btn-box">
            <div class="search-box">
              <router-link to="/search" class="anchor search">お店を探す</router-link>
            </div>
            <div class="login-box">
              <router-link to="/auth" class="anchor login">ログインする</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TopHeader from "../frontpage/TopHeader.vue";
import Fv1 from "@/assets/images/fv/fv_1.jpg"
import Logo1 from "@/assets/images/logo/logo-w.png"

// setting Swiper

// setting module

export default {
  data() {
    return {
      fvImg: Fv1,
      logoImg: Logo1,
    };
  },
  components: {
    // TopHeader,
  }
};
</script>