<template>
  <div>
      <input type="text" v-model="newCategory">
      <button @click="createCategory">Create new category</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            newCategory: ''
        }       
    },
    props: {
        items: Array
    },
    methods: {
        createCategory () {
            this.$emit('create', this.newCategory)
        }
    }
}
</script>

<style module lang="scss">

</style>