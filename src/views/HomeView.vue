<template>
  <div style="text-align: center">

    <w-image :src="require(`@/assets/images/pngegg.png`)"
             :fallback="require(`@/assets/images/not-found.jpg`)"
             tag="안녕"
             @error="showError = true">
    </w-image>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      showError: 'false',
    }
  }
}
</script>

<style scoped>

</style>