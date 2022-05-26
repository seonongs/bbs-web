<template>
  <div>
    create
    <w-form
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
      <w-button type="button" @click="create">Submit</w-button>
    </w-form>
  </div>
</template>

<script>
import {bbsCreate} from "@/api";

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
      let param = {
        'title': this.title,
        'content': this.content,
        'writer': this.writer
      }
      bbsCreate(param).then(response => {
        console.log("C data: ", response);
        this.$router.push(`/bbsDetail/${response.data.id}`);
      }).catch(error => {
        console.log(error);
      })
    },
  },

}
</script>

<style scoped>

</style>
