import{l as h,j as e,d as o,c as r,v as k,e as c,t as i,r as p,u as L,A}from"./index-C4bKup-f.js";import{S as j,P as u}from"./section-title-7eWmpxvl.js";import"./split-screen-Dnv6tVXH.js";import{S}from"./swiper-gallery-DXgTbvoz.js";import"./title-AwyvOQMm.js";const g=({lvlKey:s,children:t})=>{const{onLevelHover:l,onLevelClick:a}=o();return e.jsx("button",{onMouseEnter:()=>l(s),onMouseLeave:()=>l(null),onClick:()=>a(s),className:r("size-[2vw] rounded-lg",h[s].isActive?"bg-button-primary hover:cursor-pointer":"bg-[rgba(0,0,0,0.15)] hover:cursor-auto"),children:e.jsx("p",{className:"font-primaryLight text-white",children:t})})},z=()=>{const s=Object.keys(h).map(a=>({key:a,...h[a]})).reverse(),t=s.slice(0,17),l=s.slice(17);return e.jsxs("div",{className:"absolute z-10 ml-[69%] flex flex-col gap-[5vw] pt-[35.55%]",children:[e.jsx("div",{className:"box-border flex w-fit flex-col gap-[0.43vw]",children:t.map(a=>e.jsx(g,{lvlKey:a.key,children:a.lvl?a.lvl:null},a.key))}),e.jsx("div",{className:"box-border flex w-fit flex-col gap-[0.45vw]",children:l.map(a=>e.jsx(g,{lvlKey:a.key,children:a.lvl},a.key))})]})},v=c.img["shadow-vectors"],M=()=>{const{activeHover:s,onLevelHover:t,onLevelClick:l}=o();return e.jsx("div",{className:"absolute z-10 box-border h-full w-[66.1%] pl-[33.81%] pt-[46.7%] mix-blend-overlay",children:Object.keys(v).map(a=>e.jsx("button",{onMouseEnter:()=>t(a),onMouseLeave:()=>t(null),onClick:()=>l(a),className:"absolute z-10 box-border w-[51.45%]",style:{marginTop:`${k[a].positionTop}%`},children:e.jsx("img",{src:v[a].src,alt:v[a].alt,className:r("box-border inline-block size-full w-full transition-opacity duration-200 hover:cursor-pointer ease-linear opacity-0",`${s===a?"opacity-100":"opacity-0 "}`)})},a))})},d=({isSpecial:s,name:t,value:l})=>e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:t}),e.jsx("p",{className:r("font-secondaryLight text-sm font-light text-[#84936e] w-[75px]",s?"text-[#84936e]":"text-white"),children:l})]}),C=()=>{const{activeLevel:s}=o();return e.jsxs("div",{className:"flex h-full flex-col gap-4 py-16",children:[e.jsxs("h1",{className:"font-primaryLight text-5xl font-light leading-[57.60px] text-white",children:["Level  ",h[s].lvl]}),e.jsxs("div",{className:"flex flex-col gap-4 border-l border-white pl-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(d,{isSpecial:!0,name:"Status",value:i[s][0].status}),e.jsx(d,{isSpecial:!1,name:"Floor Area",value:i[s][0].floorArea}),e.jsx(d,{isSpecial:!1,name:"Timing",value:i[s][0].timing}),e.jsx(d,{isSpecial:!1,name:"Fitout",value:i[s][0].fitout}),e.jsx(d,{isSpecial:!1,name:"Lease Type",value:i[s][0].leaseType})]}),e.jsxs("div",{className:"flex flex-col",children:[i[s][0].paragraph&&e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:i[s][0].paragraph}),i[s][0].furtherDetails.map(t=>e.jsx(d,{name:t.label,value:t.value},t.label))]})]}),e.jsxs("button",{className:"flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-8 py-2",children:[e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg",alt:"download-floor-plan"}),e.jsx("p",{className:"font-secondaryLight text-base font-normal text-white",children:"Floor Plan"})]})]})},B=()=>e.jsxs("div",{className:"relative box-border flex size-full flex-col gap-4 overflow-hidden py-16",children:[e.jsx("h1",{className:"font-primaryLight text-5xl font-light leading-[57.60px] text-white",children:"Level 5 Third Space"}),e.jsx("div",{className:"relative box-border size-full w-[532px] rounded-lg object-contain",children:e.jsx(S,{images:c.img["third-space"]})})]}),b=()=>{const{activeLevel:s,activeLevelArray:t}=o(),[l,a]=p.useState(null),n=()=>t.findIndex(x=>x.key===s);return p.useEffect(()=>{const x=n();if(x<3){const f=t.slice(0,5);a(f)}else if(x>t.length-3){const f=t.slice(t.length-5);a(f)}else{const f=x-2,y=x+3,N=t.slice(f,y);a(N)}},[s]),l},E=({level:s})=>{const{activeLevel:t,onLevelClick:l}=o(),a=b();return e.jsx("button",{className:r("size-16 rounded-lg border text-white transition-all duration-200",s.key===t?"bg-button-primary":"bg-transparent",a!=null&&a.find(n=>n.key===s.key)?"h-16 my-1 opacity-1":"h-0 opacity-0 my-0 border-0"),onClick:()=>l(s.key),children:s.lvl})},T=()=>{const{activeLevelArray:s,activeLevel:t,navigateUp:l,navigateDown:a}=o();return e.jsx("div",{className:"flex h-full w-fit items-center justify-center",children:e.jsxs("div",{className:r("flex flex-col "),children:[e.jsx("button",{className:r("mb-4 flex items-center justify-center",t==="l35"?"opacity-0":""),onClick:l,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})}),s.map(n=>e.jsx(E,{level:n},n.key)),e.jsx("button",{className:r("flex rotate-180 items-center justify-center mt-4",t==="l05"?"opacity-0":""),onClick:a,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})})]})})},V=({level:s})=>{const{activeLevel:t,onLevelClick:l}=o(),a=b();return e.jsx("button",{className:r("size-10 rounded-lg border text-white transition-all duration-200",s.key===t?"bg-button-primary":"bg-transparent",a!=null&&a.find(n=>n.key===s.key)?"w-10 mx-1 opacity-1":"w-0  opacity-0 mx-0 border-0"),onClick:()=>l(s.key),children:s.lvl})},w=()=>{const{activeLevelArray:s,activeLevel:t,navigateUp:l,navigateDown:a}=o();return e.jsx("div",{className:"flex h-fit w-full items-center justify-center",children:e.jsxs("div",{className:r("flex flex-row justify-between w-full px-4"),children:[e.jsx("button",{className:r("flex items-center justify-center -rotate-90",t==="l35"?"opacity-0":""),onClick:l,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})}),e.jsx("div",{children:s.map(n=>e.jsx(V,{level:n},n.key))}),e.jsx("button",{className:r("flex rotate-90 items-center justify-center",t==="l05"?"opacity-0":""),onClick:a,children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg",alt:"down-arrow"})})]})})},I=c.img["tenancy-vectors"],F=()=>{const{activeLevel:s}=o();if(s)return e.jsxs("div",{className:"flex h-full flex-row items-center gap-16 px-8 py-6",children:[e.jsx(T,{}),s==="l05"?e.jsx(B,{}):e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx("div",{children:e.jsx("img",{src:I[s].src,alt:"level-floor-plan"})})]})]})},R=()=>{const{isModalOpen:s,closeModal:t}=o(),[l,a]=p.useState(!1);return p.useEffect(()=>{s?setTimeout(()=>a(!0),100):a(!1)},[s]),e.jsxs("div",{className:r("z-20 fixed flex h-[562.5px] w-[1000px] flex-col rounded-lg bg-background-modal shadow-modal backdrop-blur-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500",l?"opacity-1":"opacity-0"),children:[e.jsxs("button",{onClick:t,className:"absolute right-0 top-0 z-30 box-border flex items-center justify-center px-8 pt-7",children:[e.jsx("p",{className:"font-secondaryLight text-sm font-normal text-white",children:"Close"}),e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg",alt:"close-icon",className:""})]}),e.jsx(F,{})]})},D=()=>{const{isModalOpen:s,closeModal:t}=o();return e.jsxs("div",{className:r("fixed box-border inset-0 z-10 none",s?"block":"hidden"),children:[e.jsx("div",{onClick:t,className:"fixed z-10 h-screen w-screen"}),e.jsx(R,{})]})},O=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute top-0 box-border size-full mix-blend-normal",children:[e.jsx(M,{}),e.jsx(z,{}),e.jsx(D,{})]})}),P=()=>e.jsxs("div",{className:"relative hidden h-0 w-full overflow-hidden bg-availability bg-contain bg-no-repeat pt-[143.88%] md:block",children:[e.jsx(O,{}),e.jsx("div",{className:"absolute inset-0 box-border flex size-full flex-row gap-32 overflow-hidden px-40 py-32",children:e.jsxs(j,{subtitleVariant:"dark",indentVariant:"dark-no-padding",titleVariant:"dark",paragraphVariant:"dark",subtitle:"AVAILABILITY",title:"Your future workplace",paragraph:"Discover a new home for your business at 140 William Street, whereconnection and community thrive for today's and tomorrow's workforce.",children:[e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:c.icon["rating-two"].src,alt:c.icon["rating-two"].alt}),e.jsx(u,{paragraphVariant:"dark",children:"NABERS Energy Rating"})]}),e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:c.icon["rating-one"].src,alt:c.icon["rating-one"].alt}),e.jsx(u,{paragraphVariant:"dark",children:"NABERS Water Rating"})]})]})})]}),$=c.img["tenancy-vectors"],W=c.img["third-space"],m=({isSpecial:s,name:t,value:l})=>e.jsxs("div",{className:"flex flex-row gap-8",children:[e.jsx("p",{className:"w-[150px] font-secondaryLight text-sm font-light text-white",children:t}),e.jsx("p",{className:r("font-secondaryLight text-sm font-light text-[#84936e] w-[75px]",s?"text-[#84936e]":"text-white"),children:l})]}),Y=()=>{const{activeLevel:s}=o();return e.jsxs("div",{className:"flex size-full flex-col items-center gap-4 px-4",children:[e.jsxs("div",{className:"flex w-[257px]  flex-col gap-4 border-l border-white pl-4",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx(m,{isSpecial:!0,name:"Status",value:i[s][0].status}),e.jsx(m,{isSpecial:!1,name:"Floor Area",value:i[s][0].floorArea}),e.jsx(m,{isSpecial:!1,name:"Timing",value:i[s][0].timing}),e.jsx(m,{isSpecial:!1,name:"Fitout",value:i[s][0].fitout}),e.jsx(m,{isSpecial:!1,name:"Lease Type",value:i[s][0].leaseType})]}),e.jsxs("div",{className:"flex flex-col",children:[i[s][0].paragraph&&e.jsx("p",{className:"font-secondaryLight text-sm font-light text-white",children:i[s][0].paragraph}),i[s][0].furtherDetails.map(t=>e.jsx(m,{name:t.label,value:t.value},t.label))]})]}),e.jsxs("button",{className:"flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-8 py-2",children:[e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg",alt:"download-floor-plan"}),e.jsx("p",{className:"font-secondaryLight text-base font-normal text-white",children:"Floor Plan"})]})]})},H=()=>e.jsxs("div",{className:"flex flex-col gap-8 overflow-y-scroll px-4 pb-8",children:[e.jsx("div",{className:"flex w-full justify-start",children:e.jsx("h1",{className:"font-primaryLight text-4xl font-light leading-[57.60px] text-white",children:"Level 5 Third Space"})}),W.map((s,t)=>e.jsx("img",{src:s.src,role:"presentation",alt:"",className:"rounded-lg"},t))]}),U=()=>{const{activeLevel:s}=o();if(s)return e.jsxs("div",{className:"flex h-full flex-col items-center gap-[39px]  py-11",children:[e.jsxs("div",{className:"top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]",children:[e.jsx("h1",{className:"text-center font-secondaryRegular text-sm font-bold text-white",children:"AVAILABLE TENANCIES"}),e.jsx(w,{})]}),s==="l05"?e.jsx(H,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full justify-start px-4",children:e.jsxs("h1",{className:"font-primaryLight text-4xl font-light leading-[57.60px] text-white",children:["Level  ",h[s].lvl]})}),e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:$[s].src,alt:"level-floor-plan",className:"flex w-full justify-start pr-10"})}),e.jsx(Y,{})]})]})]})},G=({children:s})=>{const{isModalOpen:t,closeModal:l}=o(),[a,n]=p.useState(!1);return p.useEffect(()=>{t?setTimeout(()=>n(!0),100):n(!1)},[t]),e.jsxs("div",{className:r("z-50 fixed flex size-full flex-col rounded-lg bg-background-modal shadow-modal backdrop-blur-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500",a?"opacity-1":"opacity-0"),children:[e.jsx("button",{onClick:l,className:"absolute right-0 top-0 z-30 box-border flex items-center justify-center px-8 pt-7",children:e.jsx("img",{src:"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg",alt:"close-icon",className:""})}),e.jsx(U,{})]})},q=({children:s})=>{const{isModalOpen:t}=o();return e.jsx("div",{className:r("fixed box-border inset-0 z-10 none",t?"block":"hidden"),children:e.jsx(G,{children:s})})},J=()=>e.jsxs("div",{className:"flex md:hidden",children:[e.jsx("div",{className:"box-border h-fit w-screen bg-background-primary pb-12 pt-16",children:e.jsx(j,{variant:"mobile",subtitleVariant:"dark",indentVariant:"dark-no-padding",titleVariant:"dark",paragraphVariant:"dark",subtitle:"AVAILABILITY",title:"Your future workplace",paragraph:"Discover a new home for your business at 140 William Street, whereconnection and community thrive for today's and tomorrow's workforce.",children:e.jsxs("div",{className:"flex flex-col gap-4 pt-4",children:[e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:c.icon["rating-two"].src,alt:c.icon["rating-two"].alt}),e.jsx(u,{paragraphVariant:"dark",children:"NABERS Energy Rating"})]}),e.jsxs("div",{className:"flex w-fit flex-col gap-1",children:[e.jsx("img",{className:"w-fit",src:c.icon["rating-one"].src,alt:c.icon["rating-one"].alt}),e.jsx(u,{paragraphVariant:"dark",children:"NABERS Water Rating"})]})]})})}),e.jsx("div",{className:"relative h-0 w-full overflow-hidden bg-availability-mobile bg-contain bg-no-repeat pt-[225.45%]",children:e.jsxs("div",{className:"absolute top-0 box-border flex h-fit w-full flex-col gap-4 pt-[46px]",children:[e.jsx("h1",{className:"text-center font-secondaryRegular text-sm font-bold text-[#162425]/70",children:"AVAILABLE TENANCIES"}),e.jsx(w,{})]})}),e.jsx(q,{})]}),ee=()=>{const{pageRefs:s}=L();return e.jsx(A,{children:e.jsxs("section",{className:"h-fit w-screen",ref:s.availability,children:[e.jsx(J,{}),e.jsx(P,{})]})})};export{ee as AvailabilityRoute};
