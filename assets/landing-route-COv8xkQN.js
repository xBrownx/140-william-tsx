import{r as c,j as t,c as r,m as i,S as u,u as p,n as x}from"./index-C4bKup-f.js";import{V as g}from"./video-0Lvtvrh1.js";const h=i(["group","relative","flex","w-fit","overflow-hidden","rounded-lg","border","border-white","bg-transparent","md:after:absolute","md:after:inset-x-0","md:after:-top-full","md:after:bottom-full","md:md:md:after:z-[-1]","md:after:block","md:md:after:bg-button-primary","after:py-4 md:after:px-2","md:after:transition-all","md:after:duration-300","md:after:content-['']","md:hover:bg-transparent","md:hover:after:inset-x-0","md:after:hover:bottom-0","md:hover:after:top-0"],{variants:{direction:{default:"",up:"rotate-180",down:"",left:"rotate-90",right:"-rotate-90"},size:{default:"",sm:"",lg:""}},defaultVariants:{direction:"default",size:"default"}}),n=c.forwardRef(({className:e,direction:a,size:s,asChild:d=!1,...l},m)=>{const f=d?u:"button";return t.jsx(f,{className:r(h({direction:a,size:s,className:e})),ref:m,...l,children:t.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/down-arrow.svg",alt:"arrow-button"})})});n.displayName="Button";const b=i(["font-primaryLight","md:text-[138px]","font-light","uppercase","md:leading-[128px]","text-[#d9d9d9]/50","text-5xl"],{variants:{align:{default:"",right:"text-right"}},defaultVariants:{align:"default"}}),o=({children:e,align:a})=>t.jsx("h1",{className:r(b({align:a})),children:e}),j=()=>{const{pageRefs:e,navigateToPage:a}=p(),s=x.vid["background-video"];return t.jsx("section",{ref:e.landing,className:"overflow-x-hidden",children:t.jsx("div",{className:"relative box-border flex h-screen max-h-screen w-screen justify-center overflow-hidden px-0 align-middle",children:t.jsxs(g,{options:{src:s.src,controls:!1,autoplay:!0,loop:!0,muted:!0},children:[t.jsxs("div",{className:r("absolute bottom-0 z-10 flex h-fit md:w-[70rem] flex-col md:justify-center gap-4 md:pb-16 md:pl-8 align-middle","w-full p-4 pb-[10rem]"),children:[t.jsx(o,{align:"right",children:"AN ICONIC"}),t.jsx(o,{children:"MELBOURNE"}),t.jsx(o,{align:"right",children:"LANDMARK"})]}),t.jsx("div",{className:r("absolute bottom-0 md:right-0 z-10 flex h-fit px-8 py-16 md:w-auto","w-full justify-center"),children:t.jsx(n,{onClick:()=>a("home")})})]})})})};export{j as LandingRoute};
