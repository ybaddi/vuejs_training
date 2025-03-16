<template>
    <h1>Counter</h1>
    <button @click="increment">+</button> 
    {{ counter }}
    <button @click="decrement">-</button>
</template>

<script>
import { ref } from 'vue';

export default{
    setup (){
        const counter = ref(0);

        const increment = () => {
            counter.value++;
        }

        const decrement = () => {
            counter.value--;
        }
        
        const onMounted = () => {
console.log('mounted')
}

const onBeforeUpdate = () => {
console.log('before update')
} 

        return {
            counter,
            increment,
            decrement,
            onMounted,
            onBeforeUpdate
        }
    }

}
</script>