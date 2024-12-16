<template>
    <div>
        <button @click="greet">Greet</button>
    </div>
</template>
  
<script>
    export default {
    methods: {
            greet() {  
                alert('Hello!');
                console.log("hh");
            }
        }
    }
</script>