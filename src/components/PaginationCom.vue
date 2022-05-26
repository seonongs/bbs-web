<template>
  <div class="pointer">
    <a @click="onPageChange(currentPage - 1)">&lt;</a>
    <a v-for="paging in pages" :key="paging" @click="onPageChange(paging - 1)"
       :class="paging - 1 === currentPage ? 'currentPage' : ''">{{ paging }}</a>
    <a @click="onPageChange(currentPage + 1)">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'PaginationCom',
  props: ['currentPage', 'totalPages', 'pageSize', 'pagePointerQty'],
  data() {
    return {};
  },
  computed: {
    pages() {
      const list = [];
      for (let index = this.startPage; index <= this.endPage; index++) {
        list.push(index);
      }
      return list;
    },
    startPage() {
      return parseInt(this.currentPage / this.pagePointerQty) * this.pageSize + 1;
    },
    endPage() {
      let lastPage = parseInt(this.currentPage / this.pagePointerQty) * this.pageSize + 10;
      return lastPage <= this.totalPages ? lastPage : this.totalPages;
    }
  },
  methods: {
    onPageChange(val) {
      if (val < 0) {
        alert('첫 페이지입니다.');
        return;
      }
      if (val >= this.totalPages) {
        alert('마지막 페이지입니다.');
        return;
      }

      this.$emit('pageChanged', val);
    }
  }
}
</script>

<style scoped>
.pointer {
  text-align: center;
}
.pointer a {
  cursor: pointer;
  margin: 5px;
}

.currentPage {
  background: #A3C010;
}
</style>
