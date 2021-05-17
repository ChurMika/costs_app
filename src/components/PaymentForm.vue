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
  </div>
</template>

<script>
import AddButton from './AddButton'

export default {
  components: {
    AddButton
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      values: ['Food', 'Transport', 'Education', 'Clothes', 'Others'],
      choice: false
    }
  },
  props: {
    items: Array
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
    },
    showForm (choice) {
      if (this.choice === false) {
        this.choice = true
      } else {
        this.choice = false
      }
      
    }
  }
}
</script>


<style lang="scss">

</style>
