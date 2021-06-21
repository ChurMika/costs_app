<template>
  <div class="modal">
      <button class="modal_btn" @click="changeLine"><img src="./../../assets/pencil.png" alt="" class="modal_img"></button>
      <div v-if="chg"> 
        <input type="date" v-model="date">
        <select v-model="category" >
            <option v-for="(value, index) in getPaymentsValues" :key="index">{{ value }}</option>
        </select>
        <input v-model.number="price">
        <button @click="saveChange">save</button>
      </div>
      <button class="modal_btn" @click="deleteLine"><img src="./../../assets/delete.png" alt="" class="modal_img"></button>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    data () {
        return {
            date: '',
            category: '',
            price: 0,
            chg: false
        }
    },
    methods: {
        ...mapMutations([
            'deleteLine'
        ]),
        changeLine () {
            this.chg = !this.chg
        },
        saveChange () {
            console.log(5);
        },
        deleteLine () {
            //найти индекс строки
            //удалить строку
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
.modal {
    display: flex;
    padding-top: 12px;
    height: 50%;
}
.modal_img {
    height: 12px;
}
</style>