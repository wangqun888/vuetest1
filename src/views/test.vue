<template>
  <div>
    <ul>
      <li v-for="(i) in sites">{{ i.name }}</li>
    </ul>
  </div>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">反转字符串</button>
  </div>
  <div>
    <p v-if="seen">现在你看到我了</p>
  </div>
  <div>
    <div v-if="type === 'A'">
         A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
  </div>
  <div>
    <select @change="changeVal($event)" v-model="selOption">
      <template v-for="(site,index) in sites" :site="site" :index="index" :key="site.id">
         <!-- 索引为 1 的设为默认值，索引值从0 开始-->
         <option v-if = "index == 1" :value="site.name" selected>{{site.name}}</option>
         <option v-else :value="site.name">{{site.name}}</option>
      </template>
    </select>
    <div>您选中了:{{selOption}}</div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      message: 'Runoob!',
      seen: true,
      type: 'C',
      numbers: [ 1, 2, 3, 4, 5 ],
      selOption: "Runoob",
      sites: [
            {id:1,name:"Google"},
            {id:2,name:"Runoob"},
            {id:3,name:"Taobao"},
      ],
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
    changeVal:function(event){
            this.selOption = event.target.value;
            alert("你选中了"+this.selOption);
            console.log(this.selOption);
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
  },
  computed: {
        evenNumbers() {
            return this.numbers.filter(number => number % 2 === 0)
        }
    },
  }
</script>