<template>
    <v-btn 
    color="teal" 
    dark 
    @click="openForm">
      Add new cost
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
