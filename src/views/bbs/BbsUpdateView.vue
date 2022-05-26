<template>
  <div>
    <w-form
        @submit="updateBbs"
        allow-submit>
      <w-input
          v-model="items.title"
          class="mb3"
          placeholder="title"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-input
          v-model="items.content"
          class="mb3"
          placeholder="content"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-input
          v-model="items.writer"
          class="mb3"
          placeholder="writer"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-button @click="list()"> List</w-button>
      <w-button @click="updateBbs()">Update</w-button>
      <w-button @click="deleteBbs()">Delete</w-button>
    </w-form>
  </div>
</template>

<script>
import {bbsDelete, bbsDetail, bbsUpdate} from "@/api";

export default {
  name: "BbsDetailView",
  data() {
    return {
      items: {
        id: '',
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
      this.$router.push(`/bbsList`)
    },
    updateBbs() {
      let param = {
        'title': this.items.title,
        'content': this.items.content,
        'writer': this.items.writer
      }
      bbsUpdate(this.items.id, param).then(response => {
        console.log("U data: ", response)
        this.$router.push(`/bbsDetail/${response.data.id}`);
      }).catch(error => {
        console.log(error)
      })
    },
    deleteBbs() {
      bbsDelete(this.items.id).then(response => {
        console.log("D data:", response);
        this.$router.push(`/bbsList`)
      }).catch(error => {
        console.log(error)
      })
    }
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
