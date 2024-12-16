<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-focus>
    <button @click="logMessage">Log Message</button>
  </div>
</template>
 
<script>

export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  created() {
    console.log('Vue instance created.');
    console.log('Message:', this.message);
  },
  methods: {
    logMessage() {
      console.log('Message from method:', this.message);
    }
  },
  // 注册局部指令
  directives: {
      focus: {
         // 指令的定义
         mounted(el) {
            el.focus()
         }
      }
   },
};
</script>