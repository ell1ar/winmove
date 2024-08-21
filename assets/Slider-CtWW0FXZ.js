import{_ as l,o as d,c as o,a as n,b as h,h as u,F as a,r as c,n as w}from"./index-xAd5YhI2.js";const f={props:{breakpoints:{type:Object}},data(){return{currentIndex:0,startX:0,slidesPerView:1,slideWidth:100,slideCount:0}},computed:{dotCount(){return Math.ceil(this.slideCount/this.slidesPerView)}},mounted(){this.slideCount=this.$refs.slides.children.length,this.$nextTick(()=>{this.updateSlidesPerView(),window.addEventListener("resize",this.updateSlidesPerView)})},beforeUnmount(){window.removeEventListener("resize",this.updateSlidesPerView)},methods:{touchStart(e){this.startX=e.touches[0].clientX},touchMove(e){this.endX=e.touches[0].clientX},touchEnd(){const e=this.startX-this.endX;e>50&&this.nextSlide(),e<-50&&this.prevSlide(),this.startX=0,this.endX=0},updateSlidesPerView(){this.slidesPerView=1,this.breakpoints&&Object.keys(this.breakpoints).forEach(e=>{window.innerWidth>=parseInt(e)&&(this.slidesPerView=this.breakpoints[e])}),this.slideWidth=100/this.slidesPerView;for(let e of this.$refs.slides.children)e.style.width=`${this.slideWidth}%`,e.style.flexShrink=0},prevSlide(){if(this.currentIndex>0){this.currentIndex--;return}this.currentIndex=this.dotCount-1},nextSlide(){if(this.currentIndex<this.dotCount-1){this.currentIndex++;return}this.currentIndex=0},goToSlide(e){this.currentIndex=e}}},x={class:"relative mx-auto w-full overflow-hidden"},p={class:"mx-auto mt-[12px] flex items-center justify-center gap-4"},v=n("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M6 1L1 5.5L6 10",stroke:"#1B1C1E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),m=[v],S={class:"flex items-center gap-2.5"},k=n("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M1 1L6 5.5L1 10",stroke:"#1B1C1E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),g=[k];function C(e,t,b,I,r,s){return d(),o("section",x,[n("div",{class:"overflow-hidden",onTouchstart:t[0]||(t[0]=(...i)=>s.touchStart&&s.touchStart(...i)),onTouchmove:t[1]||(t[1]=(...i)=>s.touchMove&&s.touchMove(...i)),onTouchend:t[2]||(t[2]=(...i)=>s.touchEnd&&s.touchEnd(...i))},[n("div",{ref:"slides",class:"ease flex gap-2 transition-transform duration-[0.5s]",style:h({transform:`translateX(-${r.currentIndex*r.slideWidth}%)`})},[u(e.$slots,"slides")],4)],32),n("div",p,[n("button",{onClick:t[3]||(t[3]=(...i)=>s.prevSlide&&s.prevSlide(...i))},m),n("div",S,[(d(!0),o(a,null,c(s.dotCount,i=>(d(),o("button",{key:i,class:w([r.currentIndex===i-1?"w-[30px] bg-[#606060]":"w-[14px] bg-[#1B1C1E]","ease h-[5px] rounded-[30px] transition-all duration-300"]),onClick:t[4]||(t[4]=X=>s.goToSlide(e.index))},null,2))),128))]),n("button",{onClick:t[5]||(t[5]=(...i)=>s.nextSlide&&s.nextSlide(...i))},g)])])}const V=l(f,[["render",C]]);export{V as default};
