<template>
    <h1>Counter: {{ counter.state }}</h1>
    <button @click="increment">+</button> 
    {{ counter.valeur }}
    <button @click="decrement">-</button>
</template>

<script setup>
import { computed, isReactive, isRef, onBeforeMount, onBeforeUnmount, onBeforeUpdate, 
    onUnmounted, onUpdated, reactive, ref, 
    watch} from 'vue';

const compteur = {valeur: 0, state: 'nul'};
const counter = reactive(compteur);

        const increment = () => {
            counter.valeur++;
        }

        const decrement = () => {
            counter.valeur--;
        }

// counter.state = computed( () => {
   
// if (counter.valeur > 0) {
//      return 'positive';
// }else if (counter.valeur < 0) {
//     return 'negatif';
// }else {
//     return 'nul';
// }
// }
// )
watch( () => counter.valeur, (newVal, oldVal) => {
    
console.log('updated')
if (counter.valeur > 0) {
    counter.state = 'positive';
}else if (counter.valeur < 0) {
    counter.state = 'negatif';
}else {
    counter.state = 'nul';
}
});

// onBeforeMount(() => {
// console.log('before mount')
// })
const onMounted = () => {

}

onBeforeUpdate(() => {
console.log('before update')
console.log(isReactive(counter));

console.log(isRef(counter));
})



onBeforeUnmount(() => {
console.log('before unmount')
})
onUnmounted(() => {
console.log('unmounted')
})
</script>