import{a as r}from"./avatar-D7bYp5xr.js";import{c as s,a as t,n as c,u as l,t as o,f as n,o as a}from"./index-Dqwt7bdd.js";const i={class:"flex gap-2.5 w-full"},d={class:"flex flex-col grow"},x={class:"flex justify-between"},m={key:0,class:"text-[14px] text-[#7C7C7C]"},g={key:1,class:"text-[11px] font-bold text-[#FDF74B] uppercase"},u={class:"text-[#3D3F43] text-[13px]"},f=["innerHTML"],b={__name:"MessageCard",props:["message"],setup(e){return(p,h)=>(a(),s("div",i,[t("div",{class:"w-[40px] shrink-0 h-[40px] rounded-[8px] bg-white/10 bg-no-repeat bg-contain bg-center",style:c({"background-image":"url("+l(r)+")"})},null,4),t("div",d,[t("div",x,[e.message.isModerator?n("",!0):(a(),s("h2",m,o(e.message.player.name),1)),e.message.isModerator?(a(),s("h2",g,"Moderator")):n("",!0),t("span",u,o(e.message.time),1)]),t("p",{class:"text-[#BCBCBC] text-[15px] font-[400]",innerHTML:e.message.text},null,8,f)])]))}};export{b as default};
