<template>
  <div>
    <p>total: {{ totalElements }}</p>
    <p>Pages: {{ totalPages }}</p>

    <w-button @click="write()">WRITE</w-button>

  <div style="text-align: center">
    <div class="divTable">
      <div class="divTableBody">
        <div class="divTableRow" v-for="item in items" v-bind:key="item.id">
          <div class="divTableCell" style="width: 10%;">{{ item.id }}</div>
          <div class="divTableCell" style="width: 70%;">
            <router-link :to="`/bbsDetail/${item.id}`">{{ item.title }}</router-link>
          </div>
          <div class="divTableCell" style="width: 20%;">{{ item.writer }}</div>
        </div>
      </div>
    </div>

  </div>

  </div>

</template>

<script>

import axios from "axios";
import router from "@/router";

export default {

  name: "BbsListView",
  data() {
    return {
      items: [],
      totalElements: 0,
      totalPages: 0,
    }
  },
  methods: {
    write() {
      router.push('bbsCreate');
    },

    update(id, params) {
      axios.put(`/api/bbs/${id}`, {
        params: params,
      }).then(response => {
        const {data} = response
        console.log("U data:", data)
      }).catch(error => {
        alert(error)
      })
    },
  },
  created() {
    axios.get("http://localhost:8080/api/bbs/", {})
        .then(response => {
          const {data} = response
          console.log("R data:", response)
          this.items = data.content
          this.totalElements = data.totalElements
          this.totalPages = data.totalPages
        }).catch(error => {
      alert(error)
    })
  }
}
</script>

<style scoped>
.divTable {
  display: table;
  width: 100%;
}

.divTableRow {
  display: table-row;
}

.divTableHeading {
  background-color: #EEE;
  display: table-header-group;
}

.divTableCell, .divTableHead {
  border: 1px solid #999999;
  display: table-cell;
  padding: 3px 10px;
}

.divTableHeading {
  background-color: #EEE;
  display: table-header-group;
  font-weight: bold;
}

.divTableFoot {
  background-color: #EEE;
  display: table-footer-group;
  font-weight: bold;
}

.divTableBody {
  display: table-row-group;
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