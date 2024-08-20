import{o as n,c as g,a as o,f as a,g as d,d as H,j as m,e as l}from"./index-CictNthB.js";const u={class:"flex h-[65px] shrink-0 items-center justify-between border-[1px] border-[#191A1C] bg-[#111214] px-[15px] md:h-[77px] 2xl:h-[90px]"},x={class:"flex lg:gap-[42px]"},f=o("svg",{width:"9",height:"10",viewBox:"0 0 9 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M0.200196 5.30012L8.1502 9.89006L8.1502 0.710187L0.200196 5.30012Z",fill:"#3B3C3E"})],-1),L=[f],w=m('<svg class="w-[49px] lg:w-[72px]" width="72" height="51" viewBox="0 0 72 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M71.9997 19.936V51H64.7103V34.3957L57.928 50.986H49.5225L49.0548 34.0796L41.8418 50.986H33.1816L47.4038 19.936H55.7908L56.2191 37.1982L63.4622 19.936H71.9997Z" fill="#FDF74B"></path><path d="M27.0388 32.4759H33.0755L24.5959 50.986H16.2089L15.7805 33.7284L8.53747 50.986H0V19.9219H7.28938V36.5286L14.0717 19.936H22.4748L22.9449 36.847L30.1578 19.936H39.4363L27.0388 32.4759Z" fill="#FDF74B"></path><path d="M40.5195 4.64743V4.87219H35.9277V0H36.3793C36.9767 1.55929 38.2294 3.91461 40.5195 4.64743Z" fill="#FDF74B"></path><path d="M40.5195 4.87219V5.09461C38.2294 5.82977 36.9744 8.1851 36.3793 9.74205H35.9277V4.87219H40.5195Z" fill="#FDF74B"></path><path d="M35.9277 4.87219V9.74205H35.4762C34.8811 8.1851 33.626 5.82977 31.3359 5.09461V4.87219H35.9277Z" fill="#FDF74B"></path><path d="M35.9277 0V4.87219H31.3359V4.64743C33.626 3.91461 34.8787 1.55929 35.4762 0L35.9277 0Z" fill="#FDF74B"></path></svg>',1),V={class:"flex gap-2.5"},B={__name:"Index",props:["isAuth"],setup(i){return(t,e)=>{const r=l("HeaderAuth"),p=l("HeaderGuest"),h=l("HeaderButtonList");return n(),g("header",u,[o("div",x,[o("button",{onClick:e[0]||(e[0]=s=>t.$emit("toggle-sidebar")),class:"hidden h-[53px] w-[53px] items-center justify-center rounded-[8px] bg-[#141517] xl:flex"},L),w]),o("div",V,[i.isAuth?(n(),a(r,{key:0,onLogout:e[1]||(e[1]=s=>t.$emit("logout"))})):d("",!0),i.isAuth?d("",!0):(n(),a(p,{key:1,onAuth:e[2]||(e[2]=s=>t.$emit("auth")),onModalRegister:e[3]||(e[3]=s=>t.$emit("modal-register"))})),H(h,{onToggleChat:e[4]||(e[4]=s=>t.$emit("toggle-chat")),class:"hidden md:flex"})])])}}};export{B as default};
