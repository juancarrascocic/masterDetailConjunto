import Vue from 'vue'
import Root from './root.vue'
import Master from './master.vue'
import Detail from './detail.vue'

new Vue({
  el: '#rootDiv',
  render: h => h(Root),
  components: {
    'master': Master,
    'detail': Detail
  }
})