<template>
  <form @submit.prevent="submitForm">
    <input v-model="formData.name" type="text" placeholder="姓名">
    <input v-model="formData.email" type="email" placeholder="邮箱">
    <button type="submit">提交</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
      }
    };
  },
  methods: {
    submitForm() {
      axios.post('/api/submit', this.formData)
        .then(response => {
          // 处理后端返回的响应数据
          console.log(this.formData.email);
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    }
  }
};
</script>
