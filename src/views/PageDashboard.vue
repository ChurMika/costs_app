<template>
  <div id="app">
    <div class="text-h5 text-md-h3 my-8">My personal costs</div>
    <v-row>
      <v-col>
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              color="teal"
              v-on="on"
              dark
            >
              ADD PAYMENT <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <PaymentForm />
          </v-card>
        </v-dialog>
        <br><br>
        <PaymentsList />
      </v-col>
      <v-col>Diagram</v-col>
    </v-row>
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'

import { mapActions } from 'vuex'

export default {
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      dialog: false
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
