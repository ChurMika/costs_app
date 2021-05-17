<template>
  <div>
    <input type="date" placeholder="01.01.1900" v-model="date" />
    <select v-model="category"> 
      <option v-for="(value, index) in values" :key="index">{{ value }}</option>
    </select>
    <input placeholder="Price" v-model.number="price" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      values: ['Food', 'Transport', 'Education', 'Clothes', 'Others']
    }
  },
  props: {
    items: Array
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
    }
  }
}
</script>


<style lang="scss">

</style>
