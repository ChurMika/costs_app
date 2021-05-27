<template>
  <div id="app">
     <header class="header">
      My personal costs
    </header>
    <main>
      <PaymentForm />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>