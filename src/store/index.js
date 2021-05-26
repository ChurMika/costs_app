import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve([
              {
                date: '13.05.2021',
                category: 'Education',
                price: 123
              },
              {
                date: '12.05.2021',
                category: 'Education',
                price: 456
              },
              {
                date: '11.05.2021',
                category: 'Education',
                price: 789
              },
              {
                date: '10.05.2021',
                category: 'Education',
                price: 0
              }
            ])
        }, 1000)
      })
      .then(res => {
        commit('setPaymentsListData', res)
      })
    }
  }
})