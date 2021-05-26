<template>
  <div>
    <div v-for="(item, index) in getPaymentsList" :key="index" class="table_row">
      <p class="table_cell">{{ item.date }}</p> 
      <p class="table_cell">{{ item.category }}</p> 
      <p class="table_cell">{{ item.price }}</p> 
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    items: Array
  },
  methods: {
    doSomething () {
      console.log(this.items)
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
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