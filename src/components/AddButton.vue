<template>
  <div>
    <button @click="openForm">Add new cost</button>
  </div>
</template>

<script>
export default {
  methods: {
      openForm () {
          this.$emit('open')
      }
  }
}
</script>


<style lang="scss">

</style>
