import l from"./IconBonus-Dm6AfVof.js";import c from"./IconHistory-c0oTQQqN.js";import m from"./IconProfile-CPCdb53O.js";import p from"./IconRef-CIyd1q15.js";import u from"./IconTransaction-BWpHvy4k.js";import d from"./IconVerify-D-ekBgWK.js";import{d as f,o,c as s,F as x,r as _,a,h,E as v,t as B,n as I}from"./index-BGxMG7yQ.js";const k={class:"flex h-[61px] w-full overflow-x-auto rounded-[13px] bg-[#101113] p-2"},b=["onClick"],g={class:"whitespace-nowrap text-[15px] font-medium"},M={__name:"TabList",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(i){const t=f(i,"modelValue"),r=[{icon:m,title:"Профиль"},{icon:c,title:"История игр"},{icon:u,title:"Транзакции"},{icon:l,title:"Бонусы"},{icon:p,title:"Реферальная система"},{icon:d,title:"Верификация"}];return(y,C)=>(o(),s("div",k,[(o(),s(x,null,_(r,(n,e)=>a("button",{key:e,onClick:V=>t.value=e,class:I(["flex h-full items-center gap-2.5 rounded-[10px] px-[14px]",[t.value===e?"bg-[#1B1C1E] text-[#A8A9AB]":"text-[#7F8082]"]])},[(o(),h(v(n.icon))),a("span",g,B(n.title),1)],10,b)),64))]))}};export{M as default};
