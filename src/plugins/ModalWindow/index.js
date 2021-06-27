export default {
    install (Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),

            show () {
                this.EventBus.$emit('show')
            },

            close () {
                this.EventBus.$emit('close')
            }
        }
    }
}