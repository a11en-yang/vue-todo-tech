<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
     <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>

    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
    </b-alert>

    <b-btn @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-btn>
    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
    </b-btn>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'

export default {
  components: {
    Header,
    Todo
  },
   data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


