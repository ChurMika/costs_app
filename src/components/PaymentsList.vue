<template>
  <div>
    <v-data-table
      :headers="tableHeaders"
      :items="listWithIndex"
    >
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      page: 1,
      n: 10,
      tableHeaders: [
        { text: '#', value: 'index' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'price' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    listWithIndex () {
      return this.getPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    }
  }
}
</script>

<style lang="scss">
 .table_btn {
   margin-top: 12px;
   height: 50%;
 }
 .menu_img {
   height: 12px;
 }
 .open {
    width: 20px;
    height: 20px;
    border: none;
    background-color: #fff;
}
.btn_icon {
    display: block;
    font-size: 15px;
    width: 15px;
    margin-left: -5px;
}
.slot {
  display: none;
}
</style>
