<template>
  <div>
    create
    <w-form
        @submit="create"
        allow-submit>
      <w-input
          v-model="title"
          class="mb3"
          placeholder="title"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-input
          v-model="content"
          class="mb3"
          placeholder="content"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-input
          v-model="writer"
          class="mb3"
          placeholder="writer"
          :validators="[validators.required]"
          outline>
      </w-input>
      <w-button type="submit">Submit</w-button>
    </w-form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "BbsCreateView",
  data() {
    return {
      title: '',
      content: '',
      writer: '',
      validators: {
        required: value => !!value || 'This field is required'
      }
    }
  },
  methods: {
    create() {
      let data = {
        'title': this.title,
        'content': this.content,
        'writer': this.writer
      }
      axios.post("http://localhost:8080/api/bbs/", data).then(response => {
        const {data} = response;
        console.log("C data: ", data);
        alert(data);
        alert(data.id);
        router.replace(`http://localhost:8080/api/bbs${data.id}`);

      }).catch(error => {
        alert(error)
      })
    },
  },

}
</script>

<style scoped>

</style>