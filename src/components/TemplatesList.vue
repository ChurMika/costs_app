<template>
    <div>
        <router-link to="/dashboard/add/payment/Food?value=200" @click.native="clickLink">Food 200</router-link> |
        <router-link to="/dashboard/add/payment/Transport?value=50" @click.native="clickLink">Transport 50</router-link> |
        <router-link to="/dashboard/add/payment/Education?value=2000" @click.native="clickLink">Education 2000</router-link>        
        <router-view/>
    </div>    
</template>

<script>
export default ({
    data () {
        return {
            value: ''
        }
    },
    methods: {
        clickLink () {
            this.$emit('use', this.$route.params.value)
        }
    },
    mounted () {
        this.value = this.$route.params.value
    }
})
</script>

<style lang="scss">
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
