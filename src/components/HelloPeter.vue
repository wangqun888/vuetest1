<template>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    <a :href="url" :target="target" :style="{ color: activeColor }">{{msg}}</a> 
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
        target: '_blank',
        activeColor: 'blue',
        fontSize: 30,
        url: 'https://www.runoob.com'
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
h2 {
  color: blue;
}
</style>