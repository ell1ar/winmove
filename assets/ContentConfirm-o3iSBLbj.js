import{o as a,c as r,a as t,F as i,r as _,d as e,p as x,w as g,y as w,A as y}from"./index-CY3qBWzi.js";import{u as B}from"./useDigitInput-lUEmTJt9.js";const h=t("h2",{class:"mt-[21px] text-center text-[20px] text-[#E5E5E5]"},"Подтвержденияе новой электронной почты",-1),E=t("p",{class:"mt-[15px] px-[15px] text-center text-[15px] font-medium leading-5 text-[#999999]"},[x(" Пожалуйста введите код, полученный по электронной почте: "),t("strong",{class:"text-[#E2E2E2]"},"filup287@gmail.com")],-1),k={class:"mt-[25px] flex w-full flex-nowrap justify-center gap-[7px]"},v=["onUpdate:modelValue","onInput","onKeydown"],C=t("p",{class:"mt-[15px] text-[13px] font-medium text-[#626262]"},[x("Не получили код? Отправить "),t("strong",{class:"text-[#C1C1C1]"},"еще")],-1),V={__name:"ContentConfirm",emits:["next"],setup(b,{emit:D}){const{digits:p,digitRefs:l,onInput:u,onBackspace:c,onPaste:m}=B();return(d,o)=>(a(),r(i,null,[h,E,t("div",k,[(a(!0),r(i,null,_(e(p),(f,s)=>g((a(),r("input",{key:s,type:"text",maxlength:"1",class:"h-[45px] w-[45px] rounded-[10px] bg-[#161719] p-[5px] text-center text-[20px] text-[#B5B5B5] focus:outline-none focus:ring-1 focus:ring-[#84FD4B]","onUpdate:modelValue":n=>e(p)[s]=n,onInput:n=>e(u)(s),onKeydown:y(n=>e(c)(s),["backspace"]),onPaste:o[0]||(o[0]=n=>e(m)(n)),ref_for:!0,ref_key:"digitRefs",ref:l},null,40,v)),[[w,e(p)[s]]])),128))]),t("button",{onClick:o[1]||(o[1]=f=>d.$emit("next")),class:"mt-[32px] flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#84FD4B] uppercase text-[#101010]"},"Подтвердить Email"),C],64))}};export{V as default};
