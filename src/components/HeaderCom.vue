<template>
  <div class="header">
    <router-link to="/"><w-button icon="mdi mdi-home" text lg class="ml3"></w-button></router-link>
    <router-link to="/bbsList"><w-button icon="mdi mdi-bulletin-board" text lg class="ml3"></w-button></router-link>
    <router-link to="/login"><w-button icon="mdi mdi-login" text lg class="ml3"></w-button></router-link>
  </div>
</template>

<script>

export default {
  name: "HeaderCom",
  methods: {
  }
}
</script>

<style scoped>
.header {
  /*margin: 4px;*/
  padding: 20px;
  /*text-transform: uppercase;*/
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}

a:link { /*링크 방문 전*/
  color: #244781;
}

a:visited { /*링크를 방문한 이후*/
  color: #244781;
}

a:hover { /*마우스를 올려놓을 때*/
  color: green;
}

a:active { /*클릭하는 순간*/
  color: yellow;
}

</style>