import{r as l,j as t,c as a,f as p,u as m}from"./index-C4bKup-f.js";import{S as f}from"./section-title-7eWmpxvl.js";import"./split-screen-Dnv6tVXH.js";import{V as h}from"./video-0Lvtvrh1.js";import"./title-AwyvOQMm.js";const i={tour:{title:"START TOUR"},"main-entry":{title:"MAIN ENTRY"},reception:{title:"RECEPTION"},"lift-lobby":{title:"LIFT LOBBY"},"lounge-lobby":{title:"LOUNGE LOBBY"},"work-lobby":{title:"WORK LOBBY"},servery:{title:"SERVERY"},"cafe-pavilion":{title:"CAFE PAVILION"},"meeting-room":{title:"MEETING ROOM"},courtyard:{title:"COURTYARD"}},d=l.createContext(null),u=()=>{const e=l.useContext(d);if(!e)throw new Error("designContext has to be used within <DesignContext.Provider>");return e},g=({children:e})=>{const[r,s]=l.useState("tour");return t.jsx(d.Provider,{value:{activeSource:r,setActiveSource:s},children:e})},b=({id:e,activeVideo:r,variant:s,onClick:n,children:c})=>t.jsx("button",{onClick:n,className:"group",children:t.jsx("p",{className:a("font-secondaryLight text-base font-light uppercase text-white/70 group-hover:text-white group-hover:font-bold",s?"border-r pr-8":"",r===e?"font-bold text-white":""),children:c})}),v=()=>{const{activeSource:e,setActiveSource:r}=u();return t.jsx("div",{className:"absolute bottom-0 z-10 hidden w-full pb-[5vw] md:flex",children:t.jsx("div",{className:"box-border flex w-full flex-row justify-center gap-8",children:Object.keys(i).map(s=>t.jsx(b,{activeVideo:e,variant:s==="tour",id:s,onClick:()=>r(s),children:i[s].title},s))})})},w=()=>{const{activeSource:e,setActiveSource:r}=u();let s=Object.keys(i).map(o=>({key:o,...i[o]}));s=[{key:"tour",title:"TOUR"},...s];const n=()=>s.findIndex(o=>o.key===e),c=()=>{const o=n();o>0&&r(s[o-1].key)},x=()=>{const o=n();o<s.length-1&&r(s[o+1].key)};return t.jsx("div",{className:"absolute top-0 z-10 w-full pt-[1vw] md:hidden",children:t.jsxs("div",{className:"box-border flex w-full flex-row justify-between px-4 py-[17.5px]",children:[t.jsx("button",{className:a("flex items-center justify-center -rotate-90",e==="tour"?"opacity-0":""),onClick:()=>c(),children:t.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})}),t.jsx("p",{className:a("font-secondaryLight text-base font-light uppercase text-white/70 ","font-bold text-white"),children:e==="tour"?"TOUR":i[e].title}),t.jsx("button",{className:a("flex items-center justify-center rotate-90",e==="courtyard"?"opacity-0":""),onClick:()=>x(),children:t.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})})]})})},j=p.vid,y=()=>{const{activeSource:e}=u();return t.jsxs(h,{options:{src:j[e].src,controls:!0,autoplay:!0,muted:!0},children:[t.jsx(w,{}),t.jsx(v,{})]})},S=()=>{const{pageRefs:e}=m();return t.jsx(g,{children:t.jsxs("section",{className:"h-fit w-screen bg-background-secondary",ref:e.design,children:[t.jsx("div",{className:"box-border flex  flex-row gap-32 overflow-hidden px-4 pb-8 pt-32 md:px-40",children:t.jsx(f,{titleVariant:"light",subtitle:"DESIGN",title:`A memorable arrival
experience`})}),t.jsx("div",{className:"h-screen md:h-fit",children:t.jsx(y,{})})]})})};export{S as DesignRoute};
