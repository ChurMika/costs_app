<template>
  <div>
    <AddButton @open="showForm" />
    <br>
    <div v-if="choice">
      <input type="date" placeholder="01.01.1900" v-model="date" />
      <select v-model="category">
        <option v-for="(value, index) in values" :key="index">{{ value }}</option>
      </select>
      <input placeholder="Price" v-model.number="price" />
      <button @click="save">Save</button>
    </div>
    <CreateCategory
      :items = "values"
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
      values: ['Add new', 'Food', 'Transport', 'Education', 'Clothes', 'Others'],
      choice: false
    }
  },
  methods: {
    ...mapMutations([
      'addNewLine'
    ]),
    save () {
      const { date, category, price } = this
      this.addNewLine({ date, category, price })
    },
    showForm (choice) {
      this.choice = !this.choice
    },
    addCategory (data) {
      this.values.push(data)
    },
    useTemplate () {
      let routeValue = this.$route.params.value
    
      if (routeValue === 'Food') {
        this.date = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        this.category = 'Food'
        this.price = 200
      } else if (routeValue === 'Transport') {
        this.date = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        this.category = 'Transport'
        this.price = 50
      } else {
        this.date = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        this.category = 'Education'
        this.price = 2000
      }
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
</style>
