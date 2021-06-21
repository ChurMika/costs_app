<template>
  <div>
      <button class="table_btn" @click="modalShow">
        <img src="./../assets/dots.png" alt="menu" class="menu_img">
      </button>
    <div v-for="(item, index) in currentElements" :key="index" class="table_row">
      <p class="table_cell">{{ item.date }}</p>
      <p class="table_cell">{{ item.category }}</p>
      <p class="table_cell">{{ item.price }}</p>
      <Modal v-if="modalView" :name="modalView" />
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
    Pagination,
    Modal: () => import('./modalwindows/Modal')
  },
  data () {
    return {
      page: 1,
      n: 10,
      modalView: false
    }
  },
  methods: {
    onPgaginate (p) {
      this.page = p
    },
    modalShow () {
      this.modalView = !this.modalView
    },
    onShown ({ name }) {
      this.modalShown = name
    },
    onClose () {
      this.modalShown = ''
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
 .table_row {
   margin: 0 auto;
   min-width: 360px;
   display: flex;
   justify-content: space-around;
 }
 .table_cell {
   width: 25%;
 }
 .table_btn {
   margin-top: 12px;
   height: 50%;
 }
 .menu_img {
   height: 12px;
 }
</style>
