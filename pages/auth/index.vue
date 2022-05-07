<template>
  <div id="authentication">
    <p class="name-box">user: <span class="name">{{ this.email }}</span></p>
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="email" placeholder="eメール">
      <input type="password" v-model="password" placeholder="パスワード">
      <button type="submit">{{ isLogin ? 'ログインする' : 'サインアップする' }}</button>
      <button type="button" @click="isLogin = !isLogin">{{ isLogin ? 'サインアップ' : 'ログイン' }}へ切り替える</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLogin: false,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      // デフォルトのURL(ログインとする）を設定
      let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmRAL1SbKNnYzAuFSN8UgamTjngyB7CDQ`

      // ログインモードでない場合、サインアップのURLをセット
      if(!this.isLogin) {
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmRAL1SbKNnYzAuFSN8UgamTjngyB7CDQ`
      }
      
      // ログイン/サインアップの処理
      axios.post(authUrl,{
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then(result => {
          console.log('success');
          console.log(result)
        })
        .catch(e => {
          console.log(e);
          console.log('error');
          console.log(authUrl);
        })
      }
  }
}</script>