import{m as w,d as h,l as k,w as g,o as a,c as n,a as t,k as i,n as r,F as b,r as B,i as y,s as C}from"./index-g_G1nzln.js";const D=t("span",{class:"absolute right-4"},[t("svg",{width:"9",height:"7",viewBox:"0 0 9 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4.5002 7L8.2241 0.55L0.776286 0.55L4.5002 7Z",fill:"#4E4F51"})])],-1),V=["onClick"],L={__name:"Select",props:w(["options","classes"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const c=h(e,"modelValue"),l=k(!1),m=s=>{l.value=!1,c.value=s};return(s,p)=>{var u,d,x;const v=C("click-outside");return g((a(),n("div",{class:r([((u=e.classes)==null?void 0:u.base)??[],"relative flex w-full items-center rounded-[8px] border-[1px] border-[#17181A] bg-[#121315] text-[#ABABAB]"])},[t("button",{onClick:p[0]||(p[0]=o=>l.value=!l.value),class:"flex h-full w-full items-center px-[15px]"},[c.value?i(s.$slots,"selectedOption",{key:0,option:c.value}):i(s.$slots,"unSelectedOption",{key:1}),D]),l.value?(a(),n("div",{key:0,class:r(["absolute top-[calc(100%+10px)] z-20 flex w-full flex-col gap-[15px] overflow-hidden rounded-[15px] bg-[#161719] py-[15px] pl-[15px] pr-[7.5px]",((d=e.classes)==null?void 0:d.optionWrapper)??[]])},[i(s.$slots,"optionContent"),t("div",{class:r(["max-h-[150px] space-y-[5px] overflow-y-auto pr-[7.5px]",((x=e.classes)==null?void 0:x.optionList)??[]])},[(a(!0),n(b,null,B(e.options,o=>{var f;return a(),n("button",{class:r(["flex h-10 w-full shrink-0 items-center gap-2.5 rounded-[10px] bg-[#1A1B1D] px-2.5 text-[13px] font-normal uppercase text-[#D4D4D4]",((f=e.classes)==null?void 0:f.option)??[]]),onClick:$=>m(o),key:o},[i(s.$slots,"option",{option:o})],10,V)}),128))],2)],2)):y("",!0)],2)),[[v,()=>l.value=!1]])}}};export{L as default};
