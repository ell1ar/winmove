import{o as a,c as s,a as l,h as d,n as u,F as f,t as x,b as o,u as r,g as c}from"./index-CictNthB.js";const p={class:"text-[15px] font-medium uppercase text-[#ffffff]"},h={__name:"LinkCard",props:["isFull","color","title"],setup(e){const{isFull:m,color:n,title:b}=e,t={blue:{color:"#91E2FD"},yellow:{color:"#FDF74B"}}[n];return(i,y)=>(a(),s("div",{class:u(["relative flex w-full items-center overflow-hidden rounded-[10px] border-[1px] border-[#191A1C] bg-[#141517]",[e.isFull?"h-[60px]":"h-[50px] w-[50px] justify-center"]])},[l("span",{class:u(["relative z-10 flex h-full items-center justify-center",[e.isFull?"w-[60px]":"w-[30px]"]])},[d(i.$slots,"image")],2),e.isFull?(a(),s(f,{key:0},[l("span",p,x(e.title),1),l("div",{class:"absolute -left-10 z-[0] h-[60px] w-[120px] rounded-full opacity-25 blur-[20px]",style:o({background:`radial-gradient(${r(t).color}, #141517)`})},null,4),l("div",{class:"absolute -bottom-10 -right-10 z-[0] h-[70px] w-[100px] rounded-full opacity-25 blur-[40px]",style:o({"background-color":r(t).color})},null,4)],64)):c("",!0),e.isFull?c("",!0):(a(),s("div",{key:1,class:"absolute -left-10 z-[0] h-[60px] w-[120px] rounded-full opacity-25 blur-[20px]",style:o({background:`radial-gradient(${r(t).color}, #141517)`})},null,4))],2))}};export{h as default};
