<template>
  <div>
    <HeaderCom></HeaderCom>
    <router-view></router-view>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom from "@/components/HeaderCom";
import FooterCom from "@/components/FooterCom";

export default {
  name: 'App',
  components: {
    FooterCom,
    HeaderCom
  },
}
</script>

