<div v-if="chg"> 
        <input type="date" v-model="date">
        <select v-model="category" >
            <option v-for="(value, index) in getPaymentsValues" :key="index">{{ value }}</option>
        </select>
        <input v-model.number="price">
        <button @click="saveChange">save</button>
      </div>