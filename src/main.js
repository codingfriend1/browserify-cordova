const Vue = require('vue')
const Framework7 = require('framework7')
const Framework7Vue = require('framework7-vue')

require('./css')

const Routes = require('./routes.js')
const App = require('./app.vue')

Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
