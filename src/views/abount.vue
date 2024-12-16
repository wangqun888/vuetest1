<template>
  <div>
    input 元素：
    <input v-model.lazy="message" placeholder="编辑我……">
    输入消息是: {{ message }}
    <p></p> 

    textarea 元素：
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
    <p style="white-space: pre">textarea 表单消息是: {{ message2 }}</p>

    单个复选框：
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <p></p> 
    
    多个复选框：
    <template v-for="(option,index) in options" :option="option" :index="index" :key="index">
    <input type="checkbox" :id=index :value=option.value v-model="checkedNames">
    <label :for=option.text>{{ option.text }}</label>
    <!-- <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label> -->
    </template> 
    <span>选择的值为: {{ checkedNames }}</span>
    <p></p> 
    单选：
    <template v-for="(item,index) in options" :itemid="item" :key="index" >
      <input type="radio" :id=index :value=item.text v-model="picked">
      <label :for=item.text>{{item.text}}</label>
    </template>"
      <!-- <input type="radio" id="google" value="Google" v-model="picked">
      <label for="google">Google</label> -->
      <span>选中值为: {{ picked }}</span>
      <p></p> 
      选择框：
      <!-- <select v-model="selected" name="site">
          <option v-for="option in options" :value="option.value" selected>{{ option.text }}</option>
      </select> -->
      <select @change="changeVal($event)" v-model="selected">
      <template v-for="(option,index) in options">
         <!-- 索引为 1 的设为默认值，索引值从0 开始-->
         <option v-if = "index == 0" :value="option.value" selected>{{option.text}}</option>
         <option v-else :value="option.value">{{option.text}}</option>
      </template>
    </select>
          选择的网站是: {{selected}}
  </div>
</template>

<script>
export default {
data() {
    return {
      message: '',
      message2: '菜鸟教程\r\nhttps://www.runoob.com',
      checked : false,
      checkedNames: ["www.runoob.com"],
      picked : 'Runoob',
      selected: 'www.google.com',
      options: [
        { text: 'Runoob', value: 'www.runoob.com' },
        { text: 'Google', value: 'www.google.com' },
        { text: 'Taobao', value: 'www.taobao.com' }
      ]
    }
  },
  methods: {
      changeVal:function(event){
            this.selected = event.target.value;
            alert("你选中了"+this.selected);
    }
  }
}
</script>