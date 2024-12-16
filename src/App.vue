<template>
<img alt="Vue logo" :src="logo" width="30" height="30" />&nbsp
<router-link to="/">首页</router-link>&nbsp
<router-link to="/test">测试</router-link>&nbsp
<router-link to="/formadd">表单添加</router-link>&nbsp
<router-link to="/form">表单提交</router-link>&nbsp
<router-link to="/click">个人中心</router-link>&nbsp
<router-link to="/abount">关于我们</router-link>&nbsp
<router-link to="/test1">test1</router-link>&nbsp
<router-view/>
</template>

<script setup>
import { ref } from 'vue';

const logo = ref('./src/assets/logo.png');
console.log(logo.value);

// console.info("hello world");
// console.log('text'); // 日志的输出
// console.info('信息'); // 信息提示
// console.error('错误'); // 错误信息
// console.warn('警告'); // 警告信息

// const foo = { id: 1, verified: true, color: 'green' };
// const bar = { id: 2, verified: false, color: 'red' };
// console.table({ foo, bar }); // 通过表格的形式进行展示
</script>

<style>
@import "./css/index.css";
</style>
