import{j as e,m as l,u as o,c as i,d as r}from"./index-CaUZsmks.js";import{S as n}from"./section-title-BzvJNdTr.js";import{V as a}from"./video-DGjUgrh8.js";import"./title-C-Kil6Qg.js";const m=({children:t})=>e.jsx(l.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{margin:"0px 0px -200px 0px",amount:"some",once:!0},transition:{duration:.5,ease:"linear"},children:t}),s=i.menuItems,c=r.icon,d=()=>e.jsx("div",{className:"mt-4 border-l border-[#84936E] pl-8 md:mt-0",children:e.jsx(m,{children:e.jsx("ul",{className:"flex list-none flex-col justify-between gap-8",children:Object.keys(s).map(t=>e.jsxs("li",{className:"flex flex-row items-center gap-4 opacity-70",children:[e.jsx("img",{src:c[t].src,alt:s[t].title}),e.jsx("p",{className:"font-secondaryLight text-lg font-normal leading-[27px] tracking-[0.031rem] text-white/70",children:s[t].title})]},t))})})}),j=()=>{const{pageRefs:t}=o();return e.jsx("section",{className:"flex w-screen items-center justify-center bg-background-secondary pt-16 md:min-h-screen md:py-16",ref:t.amenities,children:e.jsxs("div",{className:"box-border flex w-full flex-col gap-8 overflow-hidden md:h-[50.875rem] md:w-[70rem] md:flex-row md:gap-16",children:[e.jsxs("div",{className:"box-border size-full w-full flex-1 px-4 md:px-0",children:[e.jsx(n,{titleVariant:"light",subtitle:i.subtitle,title:i.title}),e.jsx(d,{})]}),e.jsx("div",{className:"box-border size-full flex-1 overflow-hidden md:rounded-lg",children:e.jsx(a,{options:{src:r.vid["hero-video"].src,loop:!0,autoplay:!0,muted:!0}})})]})})};export{j as AmenitiesRoute};