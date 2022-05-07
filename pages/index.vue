<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
    <router-link to="/signup">会員登録へ</router-link>
    <router-link to="/login">ログインする</router-link>
  </div>
</template>

<script>

export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>