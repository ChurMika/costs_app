<template>
  <div>
    <div>
      <input type="date" placeholder="01.01.1900" v-model="date" class="choice_list"/>
      <select v-model="category" class="choice_list">
        <option v-for="(value, index) in getPaymentsValues" :key="index">{{ value }}</option>
      </select>
      <input placeholder="Price" v-model.number="price" class="choice_list"/>
      <v-btn @click="save">Save</v-btn>
    </div>
    <CreateCategory
      v-if="this.category === 'Add new'"
      @create="addCategory"
    />
    <br>
    <TemplatesList
      @use="useTemplate"
    />
  </div>
</template>

<script>
import CreateCategory from './CreateCategory'
import TemplatesList from './TemplatesList'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    CreateCategory,
    TemplatesList
  },
  data () {
    return {
      date: '',
      category: '',
      price: 0
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
    addCategory (data) {
      this.addNewValue(data)
    },
    useTemplate () {
      this.category = this.$route.params.value
      this.date = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2)
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
.choice_list {
  width: 150px;
  margin: 0 5px;
  border: 1px solid black;
}
</style>
