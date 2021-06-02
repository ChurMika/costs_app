<template>
  <div>
    <AddButton @open="showForm" />
    <div v-if="choice">
      <input type="date" placeholder="01.01.1900" v-model="date" />
      <select v-model="category"> 
        <option v-for="(value, index) in values" :key="index">{{ value }}</option>
      </select>
      <input placeholder="Price" v-model.number="price" />
      <button @click="save">Save</button>
    </div>
    <CreateCategory :items = "values"  v-if="this.category === 'Add new'"/>    
  </div>
</template>

<script>
import AddButton from './AddButton'
import CreateCategory from './CreateCategory'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    AddButton,
    CreateCategory
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
    ...mapMutations ([
      'addNewLine'
    ]),
    save () {
      const { date, category, price } = this
      this.addNewLine({ date, category, price })
    },
    showForm (choice) {
      this.choice = !this.choice
    },

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