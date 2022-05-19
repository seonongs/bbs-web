<template>
    <div>
      <w-form
          @submit="updateBbs"
          allow-submit>
        <w-input
            v-model="item.title"
            class="mb3"
            placeholder="title"
            :validators="[validators.required]"
            outline>
        </w-input>
        <w-input
            v-model="item.content"
            class="mb3"
            placeholder="content"
            :validators="[validators.required]"
            outline>
        </w-input>
        <w-input
            v-model="item.writer"
            class="mb3"
            placeholder="writer"
            :validators="[validators.required]"
            outline>
        </w-input>
        <w-button @click="list()"> List</w-button>
        <w-button @click="updateBbs(item.id)"> Update</w-button>
        <w-button @click="deleteBbs(item.id)"> Delete</w-button>
      </w-form>



    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "BbsDetailView",
  data() {
    return {
      item: {
        title: '',
        content: '',
        writer: '',
      },

      validators: {
        required: value => !!value || 'This field is required'
      }
    }
  },
  methods: {
    list() {
      router.back();
    },
    updateBbs(id) {
      let data = {
        'title': this.item.title,
        'content': this.item.content,
        'writer': this.item.writer
      }
      axios.put(`http://localhost:8080/api/bbs/${id}`, {data})
          .then(response => {
        const {data} = response
        console.log("U data:", data);

            router.replace(`/bbsDetail/${id}`);
            axios.get(`http://localhost:8080/api/bbs/${id}`, {})


      }).catch(error => {
        alert(error)
      })
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