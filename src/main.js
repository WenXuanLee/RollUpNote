import Vue from 'vue'
import './less/vue-test.less';
// Vue instance
//Vue components are also Vue instances, and so accept the same options object
var vm = new Vue({
  el: '#app',       //el 綁定的DOM ELEMENT

  //reactivity system
  //When the values of those properties change, the view will “react”, updating to match the new values.
  data: {
    message: 'Hello Vue !',
    score: 60,
    testHtml: `<span style="color: red">超級賽亞人 v-html</span>`,
    nowTime: '金罵系What time?' + new Date().toLocaleString()
  },
  methods: {
    rotateText: function() {
      this.message = this.message.split('').reverse().join('')
    }
  },

  beforeCreate: function() {
    //vue instance 被 constructor 建立前
    console.log('beforeCreate', this);
  },
  created: function() {
    //vue instance 被 constructor 建立後，在這裡完成 data binding
    console.log('created', this.message);
  },
  beforeMount: function() {
    //綁定 DOM 之前
    console.log('beforeMount', this.message);
  },
  mounted: function() {
    //綁定 DOM 之後
    console.log('mounted', this.message);
  },
  beforeUpdate: function() {
    //資料更新，但尚未更新 DOM
    console.log('beforeUpdate', this.score);
  },
  updated: function() {
    //因資料更新，而更新 DOM
    console.log('updated', this.score);
  },
  beforeDestroy: function() {
    //移除 vue instance 之前
    console.log('beforeDestroy', this.message);
  },
  destroyed: function() {
    //移除 vue instance 之後
    console.log('destroyed', this.message);
  }

});


//template 樣板
//用數據來推動內容

Vue.component('my-component', {
  template: '<div>Component test</div>'
})


var example = new Vue({
  el: '#example',
  data: {
    message: 'hello',
    firstName: 'Foo',
    lastName: 'Bar',
    loginType: 'username'
  },
  computed: {
    //getter by default
    reverseMessage: function() {
      return this.message.split('').reverse().join('');
    },

    fullName:  {
      //default getter
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      //provide setter
      set: function(val) {
        var names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }

    }

  },

  methods: {
    now: function() { //自動更新
      return new Date().toLocaleString();
    },

    change: function() {

      this.loginType == 'username' ? this.loginType=!this.loginType : this.loginType = 'username';
    }
  }
})

var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#example-2'
})

Vue.component('prompt-component', {
  template: `<button @click="sayHi(userName)">Show me</button>`,
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  props: [`userName`],
  methods: {
    sayHi: function(name) {
      alert('Hi' + name);
    }
  }
})

new Vue({
  el: '#example-3',
  data: {
    name: 'Peter'
  }
})

// v-on
// ```
// <div id="counter-event-example">
//   <p>{{ total }}</p>
//   <button-counter v-on:increment="incrementTotal"></button-counter>
//   <button-counter v-on:increment="incrementTotal"></button-counter>
// </div>

// ```

// ```
// Vue.component('button-counter', {
//   template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
//   data: function () {
//     return {
//       counter: 0
//     }
//   },
//   methods: {
//     incrementCounter: function () {
//       this.counter += 1
//       this.$emit('increment')
//     }
//   },
// })

// new Vue({
//   el: '#counter-event-example',
//   data: {
//     total: 0
//   },
//   methods: {
//     incrementTotal: function () {
//       this.total += 1
//     }
//   }
// })
// ```