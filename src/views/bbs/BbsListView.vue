<template>
  <div>



    <w-flex wrap class="text-center">
      <div class="xs1 pa1">
        <div class="primary-dark1--bg py3">xs1</div>
      </div>
      <div class="xs11 pa1">
        <div class="primary-dark1--bg py3">xs11</div>
      </div>

      <div class="xs2 pa1">
        <div class="primary--bg py3">xs2</div>
      </div>
      <div class="xs10 pa1">
        <div class="primary--bg py3">xs10</div>
      </div>

      <div class="xs3 pa1">
        <div class="primary-light1--bg white py3">xs3</div>
      </div>
      <div class="xs9 pa1">
        <div class="primary-light1--bg white py3">xs9</div>
      </div>

      <div class="xs4 pa1">
        <div class="primary-light2--bg white py3">xs4</div>
      </div>
      <div class="xs8 pa1">
        <div class="primary-light2--bg white py3">xs8</div>
      </div>

      <div class="xs5 pa1">
        <div class="primary-light3--bg py3">xs5</div>
      </div>
      <div class="xs7 pa1">
        <div class="primary-light3--bg py3">xs7</div>
      </div>
    </w-flex>

    <w-flex wrap :gap="2">
      <div class="xs10 pa1">
        <div class="primary-light3--bg py3">total: {{ totalElements }} // Pages: {{ totalPages }}</div>
      </div>
      <div class="xs2 pa1">
        <div class="primary-light3--bg py3"><w-button @click="write()">WRITE</w-button></div>
      </div>
      <div class="xs10 pa1">
        <w-input class="mb1" label="입력하슈" v-model="keyword" @keyup.enter="search"></w-input>
      </div>
      <div class="xs2 pa1">
        <w-button @click="search">검색</w-button>
      </div>
    </w-flex>
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
    <select v-model="pageSize" @change="search">
      <option value="5">5개씩</option>
      <option value="10">10개씩</option>
    </select>
    <PaginationCom :totalPages="totalPages" :currentPage="currentPage" :pageSize="pageSize"
                   :pagePointerQty="pagePointerQty" @pageChanged="pageChanged"></PaginationCom>
  </div>
</template>

<script>

import {bbsList,} from "@/api";
import PaginationCom from "@/components/PaginationCom";

export default {

  name: "BbsListView",
  components: {PaginationCom},
  data() {
    return {
      items: [],
      totalElements: 0,
      totalPages: 0,
      currentPage: 0,
      pageBlockSize: 5,
      pageSize: 5,
      pagePointerQty: 10,
      keyword: '',
    }
  },
  methods: {
    write() {
      this.$router.push('/bbsCreate')
    },
    search() {
      bbsList(this.currentPage, this.pageSize, this.keyword).then(response => {
        if (this.pageSize > response.data.totalElements) {
          this.pageSize = response.data.totalElements;
        }
        this.items = response.data.content;
        this.totalPages = response.data.totalPages;
        this.totalElements = response.data.totalElements;
        console.log("R data: ", response.data)
      }).catch(error => {
        alert(error)
      })
    },
    pageChanged(val) {
      this.currentPage = val;
      this.search();
    },
  },
  created() {
    this.search();
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
