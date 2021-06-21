<template>
  <div>
    <AddButton @open="showForm" />
    <br>
    <div v-if="choice">
      <input type="date" placeholder="01.01.1900" v-model="date" />
      <select v-model="category">
        <option v-for="(value, index) in getPaymentsValues" :key="index">{{ value }}</option>
      </select>
      <input placeholder="Price" v-model.number="price" />
      <button @click="save">Save</button>
    </div>
    <CreateCategory
      v-if="this.category === 'Add new'"
      @create="addCategory"
    />
    <br>
    <TemplatesList 
      v-if="choice"
      @use="useTemplate"
    />
  </div>
</template>

<script>
import AddButton from './AddButton'
import CreateCategory from './CreateCategory'
import TemplatesList from './TemplatesList'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    AddButton,
    CreateCategory,
    TemplatesList
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      choice: false
    }
  },
  methods: {
    ...mapMutations([
      'addNewLine',
      'addNewValue'
    ]),
    save () {
      const { date, category, price } = this
      this.addNewLine({ date, category, price })
    },
    showForm (choice) {
      this.choice = !this.choice
    },
    addCategory (data) {
      this.addNewValue(data)
    },
    useTemplate () {
      this.category = this.$route.params.value
      this.date = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
      this.price = this.$route.query.value
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getPaymentsValues'
    ])
  }
}
</script>

<style lang="scss">
</style>
