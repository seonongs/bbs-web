<template>
  <div>
    title: {{ items.title }}<br>
    content: {{ items.content }}<br>
    writer: {{ items.writer }}<br>
    createdDate: {{ items.createdDate }}<br>
    modifiedDate: {{ items.modifiedDate }}<br>
    <w-button @click="list()"> List</w-button>
    <w-button @click="updateBbs(items.id)"> Update</w-button>
    <w-button @click="deleteBbs(items.id)"> Delete</w-button>
  </div>
</template>

<script>
import {bbsDelete, bbsDetail} from "@/api";

export default {
  name: "BbsDetailView",
  data() {
    return {
      items: [],
    }
  },
  methods: {
    list() {
      this.$router.push(`/bbsList`)
    },
    updateBbs(id) {
      this.$router.push(`/bbsUpdate/${id}`);
    },
    deleteBbs(id) {
      bbsDelete(id).then(response => {
        console.log("D data:", response);
        this.$router.push(`/bbsList`)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  created() {
    bbsDetail(this.$route.params.id).then(response => {
      this.items = response.data;
      console.log("R data: ", response.data)
    }).catch(error => {
      alert(error);
    })
  }
}
</script>

<style scoped>

</style>
