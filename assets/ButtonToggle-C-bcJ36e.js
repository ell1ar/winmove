import{u as a,o as n,c as r,w as c,v as d,a as e}from"./index-DcVZ5mdt.js";const u={class:"relative inline-flex h-[20px] w-[41px] items-center rounded-full p-[1px]"},i=e("span",{class:"duration-400 z-[1] absolute inset-[1px] cursor-pointer rounded-full bg-[#777777] transition peer-checked:bg-[#5BC32A]"},null,-1),p=e("span",{class:"duration-400 z-[1] absolute left-1 h-[15px] w-[15px] rounded-full pointer-events-none bg-white shadow-md transition-transform peer-checked:translate-x-[18px] peer-checked:transform"},null,-1),m=e("div",{class:"absolute inset-0 w-full rounded-full h-full z-0 from-[#c1c1c1] to-[#383838] peer-checked:from-[#c5fbab] peer-checked:to-[#347216] bg-gradient-to-b"},null,-1),b={__name:"ButtonToggle",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const o=a(l,"modelValue");return(f,t)=>(n(),r("label",u,[c(e("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),class:"peer h-0 w-0 opacity-0"},null,512),[[d,o.value]]),i,p,m]))}};export{b as default};
