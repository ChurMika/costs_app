<template>
  <div>
    <div v-for="(item, index) in currentElements" :key="index" class="table_row">
      <p class="table_cell">{{ item.date }}</p> 
      <p class="table_cell">{{ item.category }}</p> 
      <p class="table_cell">{{ item.price }}</p> 
    </div>
    <Pagination 
      :length="getPaymentsList.length"
      :n="n"
      :cur="page"
      @paginate="onPgaginate"
    />
  </div>
</template>

<script>
import Pagination from './Pagination'

import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination 
  },
  data () {
    return {
      page: 1,
      n: 10
    }
  },
  methods: {
    onPgaginate (p) {
      this.page = p
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements () {
      const { n, page } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  }
}
</script>


<style lang="scss">
 .table_row {
   margin: 0 auto;
   width: 360px;
   display: flex;
   justify-content: space-around;  
 }
 .table_cell {
   width: 60px;
 }
</style>