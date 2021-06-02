<template>
  <div>
      <input type="text" v-model="category">
      <button @click="createCategory">Create new category</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            category: ''
        }       
    },
    props: {
        items: Array
    },
    methods: {
        createCategory () {
            let {category, items} = this
            items.push(category)
            this.$emit('create')
        }
    }
}
</script>

<style module lang="scss">

</style>