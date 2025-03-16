import { defineRule } from "vee-validate";


defineRule('minMax', (value, [min,max]) =>{
    if(!value){
        return "this field  is required";
    }
    if(value < min ){
        return `the age must be greater then ${min}`;
    }
    if(value > max){
        return `the age must be less then ${max}`;
    }
    return true;
})