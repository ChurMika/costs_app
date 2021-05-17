<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="table_row">
      <p class="table_cell">{{ item.date }}</p> 
      <p class="table_cell">{{ item.category }}</p> 
      <p class="table_cell">{{ item.price }}</p> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  methods: {
    doSomething () {
      console.log(this.items)
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
