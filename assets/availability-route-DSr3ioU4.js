import{e as g,j as e,f as n,g as r,v as A,h as o,r as h,i as p,u as S,k as z}from"./index-Cn4uW7Pt.js";import{S as w,P as v}from"./section-title-d-_oWwQX.js";import{S as M}from"./swiper-gallery-B2_VM513.js";import"./title-D4zQa4-6.js";const b=({lvlKey:s,children:t})=>{const{onLevelHover:l,onLevelClick:a}=n();return e.jsx("button",{onMouseEnter:()=>l(s),onMouseLeave:()=>l(null),onClick:()=>a(s),className:r("size-[2vw] rounded-lg",g[s].isActive?"bg-button-primary hover:cursor-pointer":"bg-[rgba(0,0,0,0.15)] hover:cursor-auto"),children:e.jsx("p",{className:"font-primaryLight text-white",children:t})})},C=()=>{const s=Object.keys(g).map(a=>({key:a,...g[a]})).reverse(),t=s.slice(0,17),l=s.slice(17);return e.jsxs("div",{className:"absolute z-10 ml-[69%] flex flex-col gap-[5vw] pt-[35.55%]",children:[e.jsx("div",{className:"box-border flex w-fit flex-col gap-[0.43vw]",children:t.map(a=>e.jsx(b,{lvlKey:a.key,children:a.lvl?a.lvl:null},a.key))}),e.jsx("div",{className:"box-border flex w-fit flex-col gap-[0.45vw]",children:l.map(a=>e.jsx(b,{lvlKey:a.key,children:a.lvl},a.key))})]})},j=o.img["shadow-vectors"],B=()=>{const{activeHover:s,onLevelHover:t,onLevelClick:l}=n();return e.jsx("div",{className:"absolute z-10 box-border h-full w-[66.1%] pl-[33.81%] pt-[46.7%] mix-blend-overlay",children:Object.keys(j).map(a=>e.jsx("button",{onMouseEnter:()=>t(a),onMouseLeave:()=>t(null),onClick:()=>l(a),className:"absolute z-10 box-border w-[51.45%]",style:{marginTop:`${A[a].positionTop}%`},children:e.jsx("img",{src:j[a].src,alt:j[a].alt,className:r("box-border inline-block size-full w-full transition-opacity duration-200 hover:cursor-pointer ease-linear opacity-0",`${s===a?"opacity-100":"opacity-0 "}`)})},a))})},y=()=>{const{activeLevel:s,activeLevelArray:t}=n(),[l,a]=h.useState(null),i=()=>t.findIndex(c=>c.key===s);return h.useEffect(()=>{const c=i();if(c<3){const u=t.slice(0,5);a(u)}else if(c>t.length-3){const u=t.slice(t.length-5);a(u)}else{const u=c-2,k=c+3,L=t.slice(u,k);a(L)}},[s]),l},E=({level:s})=>{const{activeLevel:t,onLevelClick:l}=n(),a=y();return e.jsx("button",{className:r("size-16 rounded-lg border text-white transition-all duration-200",s.key===t?"bg-button-primary":"bg-transparent",a!=null&&a.find(i=>i.key===s.key)?"h-16 my-1 opacity-1":"h-0 opacity-0 my-0 border-0"),onClick:()=>l(s.key),children:s.lvl})},F=({children:s})=>{const{activeLevelArray:t,activeLevel:l,navigateUp:a,navigateDown:i}=n();return e.jsx("div",{className:"flex h-full w-fit items-center justify-center",children:e.jsxs("div",{className:r("flex flex-col "),children:[e.jsx("button",{className:r("mb-4 flex items-center justify-center",l==="l35"?"opacity-0":""),onClick:a,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})}),t.map(c=>e.jsx(E,{level:c},c.key)),e.jsx("button",{className:r("flex rotate-180 items-center justify-center mt-4",l==="l05"?"opacity-0":""),onClick:i,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})})]})})},T=o.img["tenancy-vectors"],x=p.tenancyDetails,V=g,m=({isSpecial:s,name:t,value:l})=>e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:t}),e.jsx("p",{className:r("font-secondaryLight text-sm font-light text-[#84936e] w-[75px]",s?"text-[#84936e]":"text-white"),children:l})]}),R=()=>{const{activeLevel:s}=n();return e.jsxs("div",{className:"flex h-full flex-col gap-4 py-16",children:[e.jsxs("h1",{className:"font-primaryLight text-5xl font-light leading-[57.60px] text-white",children:["Level  ",V[s].lvl]}),e.jsxs("div",{className:"flex flex-col gap-4 border-l border-white pl-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(m,{isSpecial:!0,name:"Status",value:x[s][0].status}),e.jsx(m,{isSpecial:!1,name:"Floor Area",value:x[s][0].floorArea}),e.jsx(m,{isSpecial:!1,name:"Timing",value:x[s][0].timing}),e.jsx(m,{isSpecial:!1,name:"Fitout",value:x[s][0].fitout}),e.jsx(m,{isSpecial:!1,name:"Lease Type",value:x[s][0].leaseType})]}),e.jsxs("div",{className:"flex flex-col",children:[x[s][0].paragraph&&e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:x[s][0].paragraph}),x[s][0].furtherDetails.map(t=>e.jsx(m,{name:t.label,value:t.value},t.label))]})]}),e.jsxs("button",{className:"flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-8 py-2",children:[e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg",alt:"download-floor-plan"}),e.jsx("p",{className:"font-secondaryLight text-base font-normal text-white",children:"Floor Plan"})]})]})},D=()=>e.jsxs("div",{className:"relative box-border flex size-full flex-col gap-4 overflow-hidden py-16",children:[e.jsx("h1",{className:"font-primaryLight text-5xl font-light leading-[57.60px] text-white",children:"Level 5 Third Space"}),e.jsx("div",{className:"relative box-border size-full w-[532px] rounded-lg object-contain",children:e.jsx(M,{images:o.img["third-space"]})})]}),I=({children:s})=>{const{activeLevel:t}=n();if(t)return e.jsxs("div",{className:"flex h-full flex-row items-center gap-16 px-8 py-6",children:[e.jsx(F,{}),t==="l05"?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx("div",{children:e.jsx("img",{src:T[t].src,alt:"level-floor-plan"})})]})]})},O=({children:s})=>{const{isModalOpen:t,closeModal:l}=n(),[a,i]=h.useState(!1);return h.useEffect(()=>{t?setTimeout(()=>i(!0),100):i(!1)},[t]),e.jsxs("div",{className:r("z-20 fixed flex h-[562.5px] w-[1000px] flex-col rounded-lg bg-background-modal shadow-modal backdrop-blur-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500",a?"opacity-1":"opacity-0"),children:[e.jsxs("button",{onClick:l,className:"absolute right-0 top-0 z-30 box-border flex items-center justify-center px-8 pt-7",children:[e.jsx("p",{className:"font-secondaryLight text-sm font-normal text-white",children:"Close"}),e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg",alt:"close-icon",className:""})]}),e.jsx(I,{children:s})]})},$=({children:s})=>{const{isModalOpen:t,closeModal:l}=n();return e.jsxs("div",{className:r("fixed box-border inset-0 z-10 none",t?"block":"hidden"),children:[e.jsx("div",{onClick:l,className:"fixed z-10 h-screen w-screen"}),e.jsx(O,{children:s})]})},P=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute top-0 box-border size-full mix-blend-normal",children:[e.jsx(B,{}),e.jsx(C,{}),e.jsx($,{})]})}),H=()=>e.jsxs("div",{className:"relative h-0 w-full overflow-hidden bg-availability bg-contain bg-no-repeat pt-[143.88%]",children:[e.jsx(P,{}),e.jsx("div",{className:"absolute inset-0 box-border flex size-full flex-row gap-32 overflow-hidden px-40 py-32",children:e.jsxs(w,{subtitleVariant:"dark",indentVariant:"dark-no-padding",titleVariant:"dark",paragraphVariant:"dark",subtitle:p.subtitle,title:p.title,paragraph:p.paragraph,children:[e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:o.icon["rating-two"].src,alt:o.icon["rating-two"].alt}),e.jsx(v,{paragraphVariant:"dark",children:"NABERS Energy Rating"})]}),e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:o.icon["rating-one"].src,alt:o.icon["rating-one"].alt}),e.jsx(v,{paragraphVariant:"dark",children:"NABERS Water Rating"})]})]})})]}),U=o.img["tenancy-vectors"],W=o.img["third-space"],d=p.tenancyDetails,G=g,f=({isSpecial:s,name:t,value:l})=>e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:t}),e.jsx("p",{className:r("font-secondaryLight text-sm font-light text-[#84936e] w-[75px]",s?"text-[#84936e]":"text-white"),children:l})]}),q=()=>{const{activeLevel:s}=n();return e.jsxs("div",{className:"flex size-full flex-col items-center gap-4 px-4",children:[e.jsxs("div",{className:"flex w-[257px]  flex-col gap-4 border-l border-white pl-4",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx(f,{isSpecial:!0,name:"Status",value:d[s][0].status}),e.jsx(f,{isSpecial:!1,name:"Floor Area",value:d[s][0].floorArea}),e.jsx(f,{isSpecial:!1,name:"Timing",value:d[s][0].timing}),e.jsx(f,{isSpecial:!1,name:"Fitout",value:d[s][0].fitout}),e.jsx(f,{isSpecial:!1,name:"Lease Type",value:d[s][0].leaseType})]}),e.jsxs("div",{className:"flex flex-col",children:[d[s][0].paragraph&&e.jsx("p",{className:"font-secondaryLight text-sm font-light text-white",children:d[s][0].paragraph}),d[s][0].furtherDetails.map(t=>e.jsx(f,{name:t.label,value:t.value},t.label))]})]}),e.jsxs("button",{className:"flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-8 py-2",children:[e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg",alt:"download-floor-plan"}),e.jsx("p",{className:"font-secondaryLight text-base font-normal text-white",children:"Floor Plan"})]})]})},J=()=>e.jsxs("div",{className:"flex flex-col gap-8 overflow-y-scroll px-4 pb-8",children:[e.jsx("div",{className:"flex w-full justify-start",children:e.jsx("h1",{className:"font-primaryLight text-4xl font-light leading-[57.60px] text-white",children:"Level 5 Third Space"})}),W.map((s,t)=>e.jsx("img",{src:s.src,role:"presentation",alt:"",className:"rounded-lg"},t))]}),K=({children:s})=>{const{activeLevel:t}=n();if(t)return e.jsxs("div",{className:"flex h-full flex-col items-center gap-[39px]  py-11",children:[e.jsxs("div",{className:"top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]",children:[e.jsx("h1",{className:"text-center font-secondaryRegular text-sm font-bold text-white",children:"AVAILABLE TENANCIES"}),e.jsx(N,{})]}),t==="l05"?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full justify-start px-4",children:e.jsxs("h1",{className:"font-primaryLight text-4xl font-light leading-[57.60px] text-white",children:["Level  ",G[t].lvl]})}),e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:U[t].src,alt:"level-floor-plan",className:"flex w-full justify-start pr-10"})}),e.jsx(q,{})]})]})]})},Q=({children:s})=>{const{isModalOpen:t,closeModal:l}=n(),[a,i]=h.useState(!1);return h.useEffect(()=>{t?setTimeout(()=>i(!0),100):i(!1)},[t]),e.jsxs("div",{className:r("z-50 fixed flex size-full flex-col rounded-lg bg-background-modal shadow-modal backdrop-blur-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500",a?"opacity-1":"opacity-0"),children:[e.jsx("button",{onClick:l,className:"absolute right-0 top-0 z-30 box-border flex items-center justify-center px-8 pt-7",children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg",alt:"close-icon",className:""})}),e.jsx(K,{children:s})]})},X=({children:s})=>{const{isModalOpen:t}=n();return e.jsx("div",{className:r("fixed box-border inset-0 z-10 none",t?"block":"hidden"),children:e.jsx(Q,{children:s})})},Y=({level:s})=>{const{activeLevel:t,onLevelClick:l}=n(),a=y();return e.jsx("button",{className:r("size-10 rounded-lg border text-white transition-all duration-200",s.key===t?"bg-button-primary":"bg-transparent",a!=null&&a.find(i=>i.key===s.key)?"w-10 mx-1 opacity-1":"w-0  opacity-0 mx-0 border-0"),onClick:()=>l(s.key),children:s.lvl})},N=()=>{const{activeLevelArray:s,activeLevel:t,navigateUp:l,navigateDown:a}=n();return e.jsx("div",{className:"flex h-fit w-full items-center justify-center",children:e.jsxs("div",{className:r("flex flex-row justify-between w-full px-4"),children:[e.jsx("button",{className:r("flex items-center justify-center -rotate-90",t==="l35"?"opacity-0":""),onClick:l,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})}),e.jsx("div",{children:s.map(i=>e.jsx(Y,{level:i},i.key))}),e.jsx("button",{className:r("flex rotate-90 items-center justify-center",t==="l05"?"opacity-0":""),onClick:a,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})})]})})},Z=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"box-border h-fit w-screen bg-background-primary pb-12 pt-16",children:e.jsx(w,{variant:"mobile",subtitleVariant:"dark",indentVariant:"dark-no-padding",titleVariant:"dark",paragraphVariant:"dark",subtitle:p.subtitle,title:p.title,paragraph:p.paragraph,children:e.jsxs("div",{className:"flex flex-col gap-4 pt-4",children:[e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:o.icon["rating-two"].src,alt:o.icon["rating-two"].alt}),e.jsx(v,{paragraphVariant:"dark",children:"NABERS Energy Rating"})]}),e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:o.icon["rating-one"].src,alt:o.icon["rating-one"].alt}),e.jsx(v,{paragraphVariant:"dark",children:"NABERS Water Rating"})]})]})})}),e.jsx("div",{className:"relative h-0 w-full overflow-hidden bg-availability-mobile bg-contain bg-no-repeat pt-[225.45%]",children:e.jsxs("div",{className:"absolute top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]",children:[e.jsx("h1",{className:"text-center font-secondaryRegular text-sm font-bold text-[#162425]/70",children:"AVAILABLE TENANCIES"}),e.jsx(N,{})]})}),e.jsx(X,{})]}),ae=()=>{const{pageRefs:s}=S(),t=z();return e.jsx("section",{className:"h-fit w-screen",ref:s.availability,children:t?e.jsx(Z,{}):e.jsx(H,{})})};export{ae as AvailabilityRoute};
