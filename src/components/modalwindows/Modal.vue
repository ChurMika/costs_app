<template>
    <div>
        <button class="open" @click="openForm">
            <i class="material-icons btn_icon" >more_vert</i>
        </button>
        <div class="modal" v-show="modalView" >
            <div class="change" ref="mySlot">
                <button class="edit"><i class="material-icons">edit</i></button>
                <slot></slot>
                <div>
                    <input type="date" placeholder="date" v-model="date" />
                    <select v-model="category">
                        <option v-for="(value, index) in getPaymentsValues" :key="index">{{ value }}</option>
                    </select>
                    <input placeholder="Price" v-model.number="price" />
                    <button @click="saveCng">Save</button>
                </div>
            </div>
            <button class="delete" @click="delLine">
                <i class="material-icons">delete</i>
            </button>
        </div>
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
            chg: false,
            modalView: false
        }
    },
    methods: {
        ...mapMutations([
            'deleteLine',
            'changeLine'
        ]),
        delLine () {      
            let idx = parseInt(this.$refs.mySlot.textContent.slice(4))
            this.deleteLine(idx);
        },
        openForm () {
            this.modalView = !this.modalView
        },
        saveCng () {
            let idx = parseInt(this.$refs.mySlot.textContent.slice(4))
            this.$set(this.getPaymentsList[idx], 'date', this.date)
            this.$set(this.getPaymentsList[idx], 'category', this.category)
            this.$set(this.getPaymentsList[idx], 'price', this.price)
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
.edit, .delete {
    width: 20px;
    height: 20px;
    border: none;
    background-color: #fff;
}
</style>