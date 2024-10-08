import{j as w,o as x,c as r,a as t,F as u,r as C,u as s,e as _,l as v,i,f as b,w as k,v as y,x as B}from"./index-DgEng_tQ.js";import{u as V}from"./useDigitInput-BRjo0INH.js";const E={class:"relative flex items-center gap-[15px]"},F=t("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M2.18557e-07 5L7.5 9.33013L7.5 0.669872L2.18557e-07 5Z",fill:"#4B4C4E"})],-1),L=[F],$=t("h2",{class:"text-[18px] leading-6 text-white"},[i(" Подтверждения "),t("br"),i(" электронной почты ")],-1),I=t("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1.23234 12.9185C0.913628 12.9371 0.600176 12.8311 0.358078 12.623C-0.119359 12.1427 -0.119359 11.3671 0.358078 10.8868L10.8124 0.432433C11.309 -0.0322305 12.0882 -0.00640016 12.5528 0.490176C12.973 0.939228 12.9975 1.62943 12.6102 2.10711L2.09427 12.623C1.85532 12.8281 1.54687 12.9339 1.23234 12.9185Z",fill:"#2E2F31"}),t("path",{d:"M11.6739 12.9186C11.3509 12.9172 11.0413 12.789 10.812 12.5615L0.357612 2.1071C-0.0847085 1.59057 -0.0245726 0.813226 0.491955 0.370865C0.952969 -0.0239309 1.63287 -0.0239309 2.09385 0.370865L12.6097 10.8252C13.1062 11.29 13.1319 12.0692 12.6671 12.5657C12.6486 12.5855 12.6295 12.6045 12.6097 12.623C12.4824 12.7338 12.3335 12.8172 12.1726 12.8681C12.0116 12.9189 11.8418 12.9361 11.6739 12.9186Z",fill:"#2E2F31"})],-1),U=[I],j=t("p",{class:"mt-[25px] text-[14px] text-[#787878]"},[i("Пожалуйста введите код, полученный по электронной почте: "),t("strong",{class:"text-[#E2E2E2]"},"filup287@gmail.com")],-1),D={class:"mt-[20px] flex w-full flex-nowrap justify-center gap-[7px] sm:gap-[10px] xl:justify-start"},M=["onUpdate:modelValue","onInput","onKeydown"],K=t("span",{class:"text-[12px] text-[#626262]"},"Я хочу получать рекламные письма",-1),N=t("p",{class:"mt-[20px] text-[13px] font-medium text-[#626262]"},[i("Не получили код? Отправить "),t("a",{href:"",class:"text-[#C1C1C1]"},"еще")],-1),q={__name:"ContentVerify",emits:["login"],setup(Z,{emit:P}){const d=w(!1),{digits:a,digitRefs:c,onInput:m,onBackspace:f,onPaste:h}=V();return(p,e)=>{const g=b("UICheckbox");return x(),r(u,null,[t("div",E,[t("button",{onClick:e[0]||(e[0]=o=>p.$emit("login")),class:"flex h-[35px] w-[35px] items-center justify-center rounded-[8px] bg-[#202123]"},L),$,t("button",{class:"absolute right-0 top-0 flex xl:hidden",onClick:e[1]||(e[1]=o=>p.$emit("close"))},U)]),j,t("div",D,[(x(!0),r(u,null,C(s(a),(o,n)=>k((x(),r("input",{key:n,type:"text",maxlength:"1",class:"h-[45px] w-[45px] rounded-[10px] bg-[#161719] p-[5px] text-center text-[20px] text-[#B5B5B5] focus:outline-none focus:ring-1 focus:ring-[#FDF74B] sm:h-[50px] sm:w-[50px]","onUpdate:modelValue":l=>s(a)[n]=l,onInput:l=>s(m)(n),onKeydown:B(l=>s(f)(n),["backspace"]),onPaste:e[2]||(e[2]=l=>s(h)(l)),ref_for:!0,ref_key:"digitRefs",ref:c},null,40,M)),[[y,s(a)[n]]])),128))]),_(g,{id:"verify-checkbox",modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=o=>d.value=o),class:"mt-[20px]"},{label:v(()=>[K]),_:1},8,["modelValue"]),t("button",{onClick:e[4]||(e[4]=o=>p.$emit("verify")),type:"button",class:"mt-[20px] h-[35px] w-full rounded-[8px] bg-[#FDF74B] text-[16px] uppercase text-[#101010]"},"Подтвердить Email"),N],64)}}};export{q as default};
