<template>
    <div>


      title: {{ item.title }}<br>
      content: {{ item.content }}<br>
      writer: {{ item.writer }}<br>
      createdDate: {{ item.createdDate }}<br>
      modifiedDate: {{ item.modifiedDate }}<br>




      <w-button @click="list()"> List</w-button>
      <w-button @click="updateBbsPage(item.id)"> Update</w-button>
      <w-button @click="deleteBbs(item.id)"> Delete</w-button>


    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "BbsDetailView",
  data() {
    return {
      item: [],
    }
  },
  methods: {
    list() {
      router.back();
    },
    updateBbsPage(id) {
      router.replace(`/bbsUpdate/${id}`);
    },
    deleteBbs(id) {
      axios.delete("http://localhost:8080/api/bbs/" + id, {

      }).then(response => {
        const {data} = response;
        console.log("D data:", data);
        router.replace('/bbsList/');

      })
          .catch(error => {
            alert(error)
          })
    },
  },
  created() {
    const id = this.$route.params.id;
    axios.get("http://localhost:8080/api/bbs/" + id, {})
        .then(response => {
          const {data} = response
          console.log("R data:", data)
          this.item = data
        }).catch(error => {
      alert(error)
    })
  }
}
</script>

<style scoped>

</style>