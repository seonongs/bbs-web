<template>
  <div>
      <main class="grow">
        <w-input class="mb2"
                 label=""
                 label-position="left"
                 outline
                 inner-icon-left="mdi mdi-account">
        </w-input>
        <w-input class="mb2"
                 label=""
                 :type="isPassword ? 'password' : 'text'"
                 label-position="left"
                 outline
                 :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
                 @click:inner-icon-left="isPassword = !isPassword">
        </w-input>
        <w-button @click="loginBtn()">ㅇㅇ</w-button>
      </main>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: "LoginView",
  data() {
    return {
      isPassword: "password",
    }
  },
  methods: {
    loginBtn() {
      router.push("/")
    }
  }
}
</script>

<style scoped>
main {background-color: #efffed;}
</style>