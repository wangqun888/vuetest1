<template>
	<!-- <router-link to="/test/hello">跳转</router-link>
	<router-view/> -->
	<div class="ttt">
<!-- 		<button @click="consoleName">测试一下</button>-->
		<h2>{{age}}</h2>
		<button @click="addAge">年龄+1</button>
		<h2>{{age2}}</h2> 
		<!-- <li v-for="data in reactive2" :key="data.name">{{data.name}}</li> -->
		<h2>{{reactive3.name}}</h2>
		<h2>{{reactive4.a.b.c.d}}</h2>
		<button @click="updateReactive2">更新数据</button>
<!-- 		<h2>{{objectRef.two}}</h2> -->
<!-- 		<h2>{{score}}</h2>
		<h2>{{name}}</h2>
		<h2>{{refObj}}</h2>
		<h2>toRefid:{{toRefId}}</h2> -->
		<h2>{{fullName}}</h2>
		<h2>{{name3}}</h2>
		<h2>refObj:{{refObj}}</h2>
		<h2>reactive3:{{reactive3}}</h2>
		<button @click="test">测试一下</button>
		<h2>{{reactive5}}</h2>
		<h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
		<button @click="changeCar">修改整个车</button>
	</div>
</template>

<script setup lang="ts" name="testName">
	import {ref} from 'vue'
	import {reactive} from 'vue'
	import {toRefs} from 'vue'
	import {toRef} from 'vue'
	import {computed} from 'vue'
	import {watch} from 'vue'
	
	let age2 = 1
	
	const obj = {
		one:Number,
		two:Number
	}
	
	let objectRef = ref<obj>({
		one:1,
		two:2
	})
	
	let reactive4 = reactive({a:{b:{c:{d:233}}}})
	
	let reactive3 = reactive({id:1,name:'13123132测试数据'})
	
	let reactive2 = reactive([
	{
		name:'测试1'
	},
	{
		name:'测试2'
	},
	])
	
	let student = reactive({id:1,score:25,name:'数学'})
	
	let {score,name} = toRefs(student);
	let toRefId = toRef(student,'id');
	
	let refObj = ref([
		{id:1,name:'ref对象'},
		{id:2,name:'测试咯'}
	])
	
	function updateReactive2(){
		reactive2[0].name = "更新数据"
		reactive4.a.b.c.d = 6666
		objectRef.value.two = 6
		score.value = 99
		// refObj.value[1].name = '更新的数据'
		refObj.value = {id:3,name:'测试一下'}
		reactive3.name= "reactive3更新数据"
		toRefId.value = 2 +1
		fullName.value = "啦啦啦啦啦"
	}
	
	
	
	
	
	
	  // 数据
	  let person = reactive({
	    name:'张三',
	    age:18,
	    car:{
	      c1:'奔驰',
	      c2:'宝马'
	    }
	  })
	
	  function changeCar(){
	    person.car = {c1:'雅迪',c2:'爱玛'}
	  }
	
	  // 监视，情况五：监视上述的多个数据
	  watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
		  debugger
	    console.log('person.car变化了',newValue,oldValue)
	  },{deep:true})
	
	
	
	
	let reactive5 = reactive({
		id:1,
		name:{
			xing:'wang',
			ming:'sansan'
		}
	})
	
	function test(){
		reactive5.name = {xing:'2',ming:'测试'}
	}
	
	const reactiveWatch = watch(reactive3,(newValue,oldValue)=>{
		console.log("reactive对象值变化",newValue,oldValue)
	})
	
	watch([()=>reactive5.id,reactive5.name],(newValue,oldValue)=>{
		console.log("reactive5对象多属性变化",newValue,oldValue)
	},{deep:true})
	
	watch(refObj,(newValue,oldValue)=>{
		console.log("ref对象变化",newValue,oldValue)
	},{deep:true})
	
	watch(reactive3,(newValue,oldValue)=>{
		console.log("reactive对象变化",newValue,oldValue)
	})
	
	let age = ref(1)
	function addAge(){
		age.value = age.value + 1 
		age2 += 1
		refObj.value.name= 6666
	}
	
	const swatch = watch(age,(newValue,oldValue)=>{
		console.log("ref变量值变化"+newValue+oldValue)
		if(newValue>5){
			swatch()
		}
	})

	
	let name3 = ref('李莉莉')
	let fullName = computed({
		get(){
			return name3
		},
		set(value){
			console.log("赋值方法")
			name3.value = value
		}
	})

</script>

<style>
	.ttt{
		color:red
	}
</style>
