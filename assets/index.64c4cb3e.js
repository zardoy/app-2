var S=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var w=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&w(e,r,t[r]);if(l)for(var r of l(t))b.call(t,r)&&w(e,r,t[r]);return e},y=(e,t)=>C(e,I(t));var g=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&l)for(var n of l(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r};import{j as u,_ as c,I as L,m as N,a as T,C as h,c as _,r as f,b as $}from"./vendor.7c0d322e.js";const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};D();const a=u.exports.jsx,s=u.exports.jsxs,F=u.exports.Fragment,v=n=>{var o=n,{icon:e,active:t}=o,r=g(o,["icon","active"]);return a(j,y(m({path:e==="moon"?N:T,size:"48px"},r),{$_css:[!t&&{opacity:"0.6",cursor:"pointer"}]}))};var j=c(L).withConfig({displayName:"ThemeIcon___StyledIcon",componentId:"sc-1x6eckb-0"})(["",""],e=>e.$_css);const k=n=>{var o=n,{label:e,children:t}=o,r=g(o,["label","children"]);return s("label",{children:[a(z,{children:e}),a(B,y(m({},r),{$_css2:[h(["&:focus{outline:2px solid var(--color-primary);outline-offset:2px;}"]),{width:"100%",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",borderWidth:"1px",borderStyle:"none",borderRadius:"0.25rem"}]}))]})};var z=c("span").withConfig({displayName:"LoginField___StyledSpan",componentId:"sc-1ktbcqn-0"})({".dark &":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},width:"100%",fontSize:"0.875rem",lineHeight:"1.25rem",color:"var(--text-primary)"}),B=c("input").withConfig({displayName:"LoginField___StyledInput",componentId:"sc-1ktbcqn-1"})(["",""],e=>e.$_css2);const A=c.input.withConfig({displayName:"Login__StyledCheckbox",componentId:"sc-1k2k2x6-0"})([""," accent-color:var(--color-primary);"],{marginTop:"0.75rem",marginBottom:"0.75rem"}),H=c.h2.withConfig({displayName:"Login__LogoText",componentId:"sc-1k2k2x6-1"})(()=>[{marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"2.5rem",textAlign:"center",color:"var(--text-secondary)"}]),P=c.button.withConfig({displayName:"Login__LoginButton",componentId:"sc-1k2k2x6-2"})(({variant:e})=>[{transform:"var(--tw-transform)",transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":active":{"--tw-scale-x":".95","--tw-scale-y":".95",transform:"var(--tw-transform)"},"--tw-transform":"translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-scale-x":"1","--tw-scale-y":"1",backgroundColor:"var(--color-primary)"},h`
        :hover {
            background-color: ${d[e].bgHover};
        }
    `]),d={purple:{primary:"#7c3aed",bgHover:_(.05,"#7c3aed"),text:"#6d28d9",textDark:"#5b21b6"},yellow:{primary:"#d97706",bgHover:_(.05,"#d97706"),text:"#b45309",textDark:"#92400e"}},E={purple:{"--tw-bg-opacity":"1",backgroundColor:"rgba(245, 243, 255, var(--tw-bg-opacity))"},yellow:{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 251, 235, var(--tw-bg-opacity))"}},R=({variant:e})=>{const[t,r]=f.exports.useState(""),[n,o]=f.exports.useState("");return a(M,{$_css2:[h`
                    /* Scoped theming */
                    --color-primary: ${d[e].primary};
                    --text-secondary: ${d[e].text};
                    --text-primary: ${d[e].textDark};
                `,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}],children:s(O,{$_css3:[E[e],{width:"20rem",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"1.5rem",paddingBottom:"1.5rem",borderWidth:"1px",borderRadius:"0.375rem",borderColor:"var(--color-primary)"}],children:[a(H,{variant:e,children:"Nice."}),a(k,{label:"Email or login",value:t,type:"email",autoComplete:"email",onChange:i=>r(i.target.value)}),a(k,{label:"Password",value:n,type:"password",onChange:i=>o(i.target.value)}),s("label",{children:[a(A,{type:"checkbox"})," Maybe you want to check this?"]}),a(P,{type:"submit",variant:e,children:"GET ME IN!"})]})})};var M=c("div").withConfig({displayName:"Login___StyledDiv",componentId:"sc-1k2k2x6-3"})(["",""],e=>e.$_css2),O=c("form").withConfig({displayName:"Login___StyledForm",componentId:"sc-1k2k2x6-4"})(["",""],e=>e.$_css3);const W=()=>{const[e,t]=f.exports.useState("purple");return s(F,{children:[s(q,{children:[a(X,{icon:"moon",active:e==="purple",onClick:()=>t("purple")}),a(Y,{icon:"sun",active:e==="yellow",onClick:()=>t("yellow")})]}),a(R,{variant:e})]})};var q=c("div").withConfig({displayName:"App___StyledDiv",componentId:"sc-1ie5zm7-0"})({top:"0px",right:"0px",position:"absolute",display:"flex"}),X=c(v).withConfig({displayName:"App___StyledThemeIcon",componentId:"sc-1ie5zm7-1"})({"--tw-text-opacity":"1",color:"rgba(79, 70, 229, var(--tw-text-opacity))"}),Y=c(v).withConfig({displayName:"App___StyledThemeIcon2",componentId:"sc-1ie5zm7-2"})({"--tw-text-opacity":"1",color:"rgba(251, 191, 36, var(--tw-text-opacity))"});$.renderToDom(a(W,{}));
