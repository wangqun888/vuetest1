<template>
    <div>
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">添加 todo</label>
            <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="例如：明天早上跑步"
            />
            <button>添加</button>
        </form>
        <ul>
            <li v-for="(i,index) in todos" :key="i.id" :title="i.title">
                {{ i.title }}<button @click="removeTodo(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            newTodoText: '',
            todos: [
                {
                id: 1,
                title: '看电影'
                },
                {
                id: 2,
                title: '吃饭'
                },
                {
                id: 3,
                title: '上 RUNOOB 学习'
                }
            ],
        nextTodoId: 4
        } 
    },
    methods: {
      addNewTodo() {
        this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
        })
        this.newTodoText = ''
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
      },
    },
    props: {
      title: {
        type: String,
        required: true,
        validator(value) {
            return value.length > 3;
        }
        }
    }
}

</script>