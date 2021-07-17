import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsValues: ['Add new', 'Food', 'Transport', 'Education', 'Clothes', 'Others']
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addNewLine (state, line) {
      state.paymentsList.push(line)
    },
    addNewValue (state, value) {
      state.paymentsValues.push(value)
    },
    deleteLine (state, index) {
      state.paymentsList.splice(index, 1)
    },
    dateChange (state, payload) {
      Vue.set(state.paymentsList[payload[0]], 'date', payload[1])
    },
    categoryChange (state, payload) {
      Vue.set(state.paymentsList[payload[0]], 'category', payload[1])
    },
    priceChange (state, payload) {
      Vue.set(state.paymentsList[payload[0]], 'price', payload[1])
    }
  },
  getters: {
    getPaymentsList (state) {
      return state.paymentsList
    },
    getPaymentsValues (state) {
      return state.paymentsValues
    }
  },
  actions: {
    addLine ({ commit }, line) {
      commit('addNewLine', line)
    },
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              date: '13.05.2021',
              category: 'Education',
              price: 123
            },
            {
              date: '12.05.2021',
              category: 'Food',
              price: 456
            },
            {
              date: '11.05.2021',
              category: 'Transport',
              price: 789
            },
            {
              date: '10.05.2021',
              category: 'Education',
              price: 536
            }
          ])
        }, 1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },
    addValue ({ commit }, value) {
      commit('addNewValue', value)
    },
    delLine ({ commit }, index) {
      commit('deleteLine', index)
    },
    dateCng ({ commit }, payload) {
      commit('dateChange', payload)
    },
    categoryCng ({ commit }, payload) {
      commit('categoryChange', payload)
    },
    priceCng ({ commit }, payload) {
      commit('priceChange', payload)
    }
  }
})
