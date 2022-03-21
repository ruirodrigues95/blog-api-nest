var D=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var O=(e,r)=>{var o={};for(var s in e)oe.call(e,s)&&r.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&D)for(var s of D(e))r.indexOf(s)<0&&ne.call(e,s)&&(o[s]=e[s]);return o};import{W as se,a as ie,j as I,R as j,r as p,s as n,U as ae,b as L,u as N,c as P,d as A,f as ce,E as le,D as de,L as k,e as E,C as ue,g as me,A as he,h as pe,i as v,M as ge,k as fe,Q as xe,F as ye,l as be,B as ve}from"./vendor.5ea9bc47.js";const we=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=o(i);fetch(i.href,c)}};we();const ke={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var Ce=se`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  button {
    user-select: none;
  }
`;class $e{getLocalRefreshToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.refreshToken}getLocalAccessToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.accessToken}updateLocalAccessToken(r){let o=JSON.parse(localStorage.getItem("user"));o.accessToken=r,localStorage.setItem("user",JSON.stringify(o))}updateLocalRefreshToken(r){let o=JSON.parse(localStorage.getItem("user"));o.refreshToken=r,localStorage.setItem("user",JSON.stringify(o))}updateLocalTokens(r,o){let s=JSON.parse(localStorage.getItem("user"));s.accessToken=r,s.refreshToken=o,localStorage.setItem("user",JSON.stringify(s))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(r){localStorage.setItem("user",JSON.stringify(r))}removeUser(){localStorage.removeItem("user")}}var C=new $e;const g=ie.create({baseURL:"/"});g.interceptors.request.use(e=>{const r=C.getLocalAccessToken();return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));g.interceptors.response.use(e=>e,async e=>{const r=e.config;if(r.url!=="/auth/login"&&e.response&&e.response.status===401&&!r._retry){r._retry=!0;try{const o=await g.post("/auth/refreshtoken",{refreshToken:C.getLocalRefreshToken()}),{access_token:s,refresh_token:i}=o.data;return C.updateLocalTokens(s,i),g(r)}catch(o){return Promise.reject(o)}}return Promise.reject(e)});const t=I.exports.jsx,a=I.exports.jsxs,m=I.exports.Fragment,H=j.createContext({}),Fe=({children:e})=>{const[r,o]=p.exports.useState(null);p.exports.useEffect(()=>{const l=C.getUser();l&&o(l)},[]);const s=async(l,x)=>{const h=await g.post("/auth/login",{email:l,password:x}),f={email:h.data.user.email,firstName:h.data.user.firstName,lastName:h.data.user.lastName,avatar:h.data.user.avatar,accessToken:h.data.access_token,refreshToken:h.data.refresh_token};o(f),C.setUser(f)},i=async(l,x,h,f,y)=>{const b=await g.post("/users",{email:l,password:x,firstName:h,lastName:f,avatar:y});return console.log(b),b.data},c=()=>{o(null),C.removeUser()},d={user:r,isAuthenticated:Boolean(r),signIn:s,signUp:i,signOut:c};return t(H.Provider,{value:d,children:e})},$=()=>p.exports.useContext(H),Se=n.div``,Ae=n.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }
`,J=n.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,Q=n.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,T=n.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,B=n.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,w=n(B)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,R=n(B)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,Ne=n(B)`
  background-color: ${({theme:e})=>e.colors.secondary.main};
  border: 1px solid ${({theme:e})=>e.colors.secondary.dark};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary.dark};
  }
`,M=n.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,Le=ae`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`,z=n.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,Ie=n(M)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  animation: ${Le} 0.2s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80vw;
    top: 0;
    margin: auto;
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 60vw;
  }
`,U=document.getElementById("overlay"),_=({children:e,onClose:r})=>a(m,{children:[L.createPortal(t(z,{onClick:r}),U),L.createPortal(t(Ie,{children:e}),U)]}),Pe=async()=>(await g.get("/posts")).data,Ee=async e=>(await g.get(`/posts/${e}`)).data,Te=async({title:e,content:r})=>(await g.post("/posts",{title:e,content:r})).data,Be=async e=>{const{postId:r,title:o,content:s}=e,i=await g.put(`/posts/${r}`,{title:o,content:s});return console.log(i.data),i.data},Re=async({postId:e})=>(await g.delete(`/posts/${e}`)).data,q=s=>{var i=s,{initialTitle:e,initialContent:r}=i,o=O(i,["initialTitle","initialContent"]);const[c,d]=p.exports.useState(e||""),[l,x]=p.exports.useState(r||""),h=N(),f=P(),y=A(Te,{onSuccess:u=>{f.invalidateQueries("posts"),h(`/posts/${u.id}`)}}),b=A(Be,{onSuccess:()=>{f.invalidateQueries("post"),f.invalidateQueries("posts")}});return t(Se,{children:a(_,{onClose:()=>o.hide(),children:[e?t("h3",{children:"Edit Post"}):t("h3",{children:"Create Post"}),a(Ae,{onSubmit:async u=>{u.preventDefault(),c&&l&&(o.postId?b.mutate({postId:o.postId,title:c,content:l}):y.mutate({title:c,content:l})),o.hide()},children:[t(Q,{placeholder:"Title",onChange:u=>d(u.target.value),value:c}),t(T,{placeholder:"Content",rows:5,onChange:u=>x(u.target.value),value:l}),a(J,{children:[t(R,{onClick:()=>o.hide(),children:"Cancel"}),t(w,{type:"submit",children:"Submit"})]})]})]})})},X=e=>ce(new Date(e),{addSuffix:!0}),W=n.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,ze=n(M)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,Y=n.div`
  display: flex;
  justify-content: space-between;
`,De=n(le)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.dark};
  cursor: pointer;
`,Oe=n(de)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.secondary.dark};
  cursor: pointer;
`,G=n.div`
  display: flex;
  align-items: center;
`,K=n.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,V=n.div`
  margin-left: 0.5rem;
  > span {
    display: block;
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 0.8rem;
  }

  > span:first-child {
    font-weight: bold;
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.secondary.main};
  }
`,Ue=n.h3`
  padding: 0.5rem 0 0.2rem;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,je=n.p`
  padding: 0.2rem 0 0.5rem;
`,He=n.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Je=n.div``,Qe=n.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,Me=n.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,Z=({postData:e,isAuthor:r})=>{const[o,s]=p.exports.useState(!1),[i,c]=p.exports.useState(!1),d=N(),l=X(e.createdAt),x=P(),h=A(y=>Re(y),{onSuccess:()=>{x.invalidateQueries("posts")}});return a(ze,{children:[o&&t(m,{children:a(_,{onClose:()=>s(!1),children:[t("p",{style:{marginBottom:"1rem"},children:"Are you sure you want to delete the post?"}),a(J,{children:[t(R,{onClick:()=>s(!1),children:"Cancel"}),t(Ne,{onClick:async()=>{h.mutate({postId:e.id}),s(!1),d("/",{replace:!0})},children:"Delete"})]})]})}),i&&t(q,{initialTitle:e.title,initialContent:e.content,hide:()=>c(!1),postId:e.id}),e&&a(m,{children:[a(Y,{children:[a(G,{children:[t(K,{src:e.author.avatar}),a(V,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),r&&a("div",{children:[t(De,{onClick:()=>c(!0)}),t(Oe,{onClick:()=>s(!0)})]})]}),t(Ue,{children:t(k,{to:`/posts/${e.id}`,children:e.title})}),t(je,{children:e.content}),t(W,{}),a(He,{children:[t(Je,{children:t(Qe,{children:l})}),a(Me,{children:[e._count.comments," comments"]})]})]})]})},_e=n.section`
  > div {
    margin-bottom: 1rem;
  }
`,qe=()=>{const e=$(),{data:r,isLoading:o,isError:s,error:i}=E("posts",Pe);if(o)return t(m,{children:"Loading..."});if(s)return t(m,{children:i.message});const c=r.slice().sort((d,l)=>new Date(l.createdAt).getTime()-new Date(d.createdAt).getTime());return t(_e,{children:c==null?void 0:c.map(d=>{var l;return t(Z,{postData:d,isAuthor:((l=e.user)==null?void 0:l.email)===d.author.email},d.id)})})},ee=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,Xe=()=>{const[e,r]=p.exports.useState(!1),o=$();return a(m,{children:[a(ee,{children:[t("h2",{children:"Recent Posts"}),o.isAuthenticated&&t(w,{onClick:()=>r(!0),children:"Create Post"})]}),e&&t(q,{hide:()=>r(!1)}),t(qe,{})]})},We=n.form``,F=n(Q)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,te=e=>{const[r,o]=p.exports.useState(""),[s,i]=p.exports.useState(""),[c,d]=p.exports.useState(""),[l,x]=p.exports.useState(""),[h,f]=p.exports.useState(""),y=N(),b=$();return a(We,{onSubmit:async u=>{u.preventDefault(),e.isLogin?(await b.signIn(h,r),y("/",{replace:!0})):(await b.signUp(h,r,c,l),y("/auth/login"))},children:[t(F,{placeholder:"Email",value:h,onChange:u=>f(u.target.value)}),t(F,{placeholder:"Password",value:r,type:"password",onChange:u=>o(u.target.value)}),!e.isLogin&&a(m,{children:[t(F,{placeholder:"Confirm Password",value:s,type:"password",onChange:u=>i(u.target.value)}),t(F,{placeholder:"First Name",value:c,type:"text",onChange:u=>d(u.target.value)}),t(F,{placeholder:"Last Name",value:l,type:"text",onChange:u=>x(u.target.value)})]}),t(w,{children:e.isLogin?"Login":"Sign up"})]})},Ye=()=>a(m,{children:[t("h2",{children:"Login"}),t(te,{isLogin:!0})]}),Ge=async e=>(await g.get(`/posts/${e}/comments`)).data,Ke=async({content:e,postId:r})=>(await g.post(`/posts/${r}/comments`,{content:e})).data,Ve=n.li`
  margin-top: 1rem;
`,Ze=n.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;n.div``;n.div``;n.span``;const et=n.p`
  padding: 0.5rem 3rem;

`,tt=({commentData:e})=>{const r=X(e.createdAt);return a(Ve,{children:[a(Y,{children:[a(G,{children:[t(K,{src:e.author.avatar}),a(V,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(Ze,{children:r})]}),t(et,{children:e.content})]})},rt=n.div`
  margin-top: 1rem;
`,ot=n.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${T} {
    width: 100%;
  }

  > ${w} {
    display: block;
    margin: 0.5rem 0;
  }
`,nt=({postId:e,hide:r})=>{const o=p.exports.useRef(null),s=P(),i=A(Ke,{onSuccess:()=>{s.invalidateQueries("comments")}});return t(rt,{children:a(ot,{onSubmit:async d=>{var l;d.preventDefault(),((l=o.current)==null?void 0:l.value)&&(i.mutate({content:o.current.value,postId:e}),r(),o.current.value)},children:[t(T,{rows:5,ref:o}),t(w,{children:"Submit"})]})})},st=n.div`
  margin-top: 2rem;
`,it=n.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,at=n(ue)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,ct=n.ul`
  list-style: none;
`,lt=({postId:e})=>{const[r,o]=p.exports.useState(!1),{data:s,isLoading:i,isError:c,error:d}=E("comments",()=>Ge(e));return i?t(m,{children:"Loading..."}):c?t(m,{children:d.message}):a(st,{children:[a(it,{children:[t("h3",{children:"Comments"}),t(at,{onClick:()=>o(l=>!l)})]}),r&&t(nt,{postId:e,hide:()=>o(!1)}),a(ct,{children:[s==null?void 0:s.map(l=>t(tt,{commentData:l},l.id)),t(W,{})]})]})},dt=()=>{var l;const e=N(),{postId:r}=me(),o=$(),{data:s,isLoading:i,isError:c,error:d}=E("post",()=>Ee(+r));return i?t(m,{children:"Loading..."}):c?t(m,{children:d.message}):!s&&!i?t(m,{children:"No post found"}):a(m,{children:[t(he,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>e(-1)}),s&&a(m,{children:[t(Z,{postData:s,isAuthor:((l=o.user)==null?void 0:l.email)===s.author.email}),t(lt,{postId:s.id})]})]})},ut=()=>t(m,{children:t(ee,{children:t("h2",{children:"Profile"})})}),mt=()=>a(m,{children:[t("h2",{children:"Signup"}),t(te,{isLogin:!1})]}),ht=n.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,pt=()=>{const e=$();return t(ht,{children:a(pe,{children:[t(v,{path:"/",element:t(Xe,{})}),e.isAuthenticated&&t(v,{path:"profile",element:t(ut,{})}),!e.isAuthenticated&&a(v,{path:"auth",children:[t(v,{path:"login",element:t(Ye,{})}),t(v,{path:"signup",element:t(mt,{})})]}),t(v,{path:"posts/:postId",element:t(dt,{})}),t(v,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},gt=n.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,ft=()=>a(gt,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),xt=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.alt};
  width: 100vw;
  box-shadow: ${({theme:e})=>e.shadow.base};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    > ${z} {
      display: none;
    }
  }
`,yt=n.h1``,bt=n(ge)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,vt=n(fe)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,wt=n.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>e.colors.primary.dark};
  height: 100vh;
  width: 65vw;
  max-width: 500px;
  transition: transform 0.2s ease-out;
  transform: ${({show:e})=>e?"translateX(0)":"translateX(100%)"};
  display: flex;
  flex-direction: column;
  z-index: 50;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    position: relative;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    transform: translateX(0);
    background-color: transparent;
    box-shadow: none;
  }
`,kt=n.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`,S=n.li`
  margin: 0.5rem 0;
  width: 100%;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.white};
    line-height: 2.5rem;
    display: block;
    margin: 0 auto;
  }

  & button {
    width: 100%;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin: 0 0.5rem;
    > a {
      color: ${({theme:e})=>e.colors.text.primary};
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &:nth-child(3) > a,
    &:nth-child(4) > a {
      padding: 0;
    }

    > button {
      width: 100%;
    }
  }
`,Ct=()=>{const[e,r]=p.exports.useState(!1),o=$(),s=()=>{r(c=>!c)},i=()=>{o.signOut()};return a(xt,{children:[t(yt,{children:"App"}),!e&&t(bt,{onClick:s}),e&&t(vt,{onClick:s}),e&&t(z,{onClick:s}),t(wt,{show:e,children:a(kt,{children:[t(S,{onClick:s,children:t(k,{to:"/",children:"Home"})}),o.isAuthenticated&&t(S,{onClick:s,children:t(k,{to:"/profile",children:"Profile"})}),!o.isAuthenticated&&a(m,{children:[t(S,{onClick:s,children:t(k,{to:"/auth/login",children:t(w,{children:"Sign in"})})}),t(S,{onClick:s,children:t(k,{to:"/auth/signup",children:t(R,{children:"Sign up"})})})]}),o.isAuthenticated&&t(S,{children:t(k,{to:"/",children:t(w,{onClick:i,children:"Sign out"})})})]})})]})},$t=n.header``,Ft=()=>t($t,{children:t(Ct,{})}),St=n.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,At=({children:e})=>t(St,{children:e});function Nt(){return a(At,{children:[t(Ft,{}),t(pt,{}),t(ft,{})]})}const Lt=new xe;L.render(t(j.StrictMode,{children:a(ye,{theme:ke,children:[t(Ce,{}),t(be,{client:Lt,children:t(Fe,{children:t(ve,{children:t(Nt,{})})})})]})}),document.getElementById("root"));
