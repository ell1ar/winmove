import{m as d,u as i,o as n,c,a as o,w as a,v as m,i as u,d as h,n as g,j as p}from"./index-BdCfnIti.js";const v="data:image/svg+xml,%3csvg%20width='11'%20height='10'%20viewBox='0%200%2011%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.33301%206.33333L3.48834%207.95C3.62591%208.05315%203.79802%208.09916%203.96872%208.07842C4.13941%208.05767%204.29549%207.97177%204.40434%207.83867L9.99967%201'%20stroke='%23161719'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",f=["for"],w=["id"],x=["src"],k={__name:"Checkbox",props:d(["id"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const e=i(s,"modelValue");return(t,l)=>(n(),c("label",{for:s.id,class:"flex cursor-pointer items-center gap-3"},[o("span",{class:g(["flex h-5 w-5 shrink-0 flex-col items-center justify-center rounded-md border-[1px]",[e.value?"border-[#84FD4B] bg-[#84FD4B]":"border-[#1E1F21] bg-[#161719]"]])},[a(o("input",{id:s.id,type:"checkbox",class:"hidden","onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},null,8,w),[[m,e.value]]),a(o("img",{class:"w-3",src:h(v)},null,8,x),[[u,e.value]])],2),p(t.$slots,"label")],8,f))}};export{k as default};
