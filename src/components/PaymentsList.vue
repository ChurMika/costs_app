<template>
  <div>
    <!--<div v-for="(item, index) in currentElements" :key="index" class="table_row">
      <p class="table_cell">{{ index+1 }}</p>
      <p class="table_cell">{{ item.date }}</p>
      <p class="table_cell">{{ item.category }}</p>
      <p class="table_cell">{{ item.price }}</p>
      <Modal>
        <p class="slot">{{index}}</p>
      </Modal>
    </div> -->
    <v-data-table
      :headers="tableHeaders"
      :items="listWithIndex"
    >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal: () => import('./modalwindows/Modal')
  },
  data () {
    return {
      page: 1,
      n: 10,
      tableHeaders: [
        { text: '#', value: 'index' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'price' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
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
    listWithIndex () {
      return this.getPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
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
