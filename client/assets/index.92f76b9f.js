import{W as Y,a as G,j as N,R as P,r as u,s as o,U as K,u as I,b as T,f as V,L as v,c as E,d as B,C as Z,e as ee,A as te,g as re,h as x,M as oe,i as ne,Q as se,k as ie,F as ae,l as ce,B as le}from"./vendor.88107835.js";const de=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};de();const ue={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var me=Y`
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
`;class he{getLocalRefreshToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.refreshToken}getLocalAccessToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.accessToken}updateLocalAccessToken(r){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalRefreshToken(r){let n=JSON.parse(localStorage.getItem("user"));n.refreshToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalTokens(r,n){let s=JSON.parse(localStorage.getItem("user"));s.accessToken=r,s.refreshToken=n,localStorage.setItem("user",JSON.stringify(s))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(r){localStorage.setItem("user",JSON.stringify(r))}removeUser(){localStorage.removeItem("user")}}var w=new he;const f=G.create({baseURL:"/"});f.interceptors.request.use(e=>{const r=w.getLocalAccessToken();return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));f.interceptors.response.use(e=>e,async e=>{const r=e.config;if(r.url!=="/auth/login"&&e.response&&e.response.status===401&&!r._retry){r._retry=!0;try{const n=await f.post("/auth/refreshtoken",{refreshToken:w.getLocalRefreshToken()}),{access_token:s,refresh_token:i}=n.data;return w.updateLocalTokens(s,i),f(r)}catch(n){return Promise.reject(n)}}return Promise.reject(e)});const t=N.exports.jsx,a=N.exports.jsxs,g=N.exports.Fragment,R=P.createContext({}),pe=({children:e})=>{const[r,n]=u.exports.useState(null);u.exports.useEffect(()=>{const l=w.getUser();l&&n(l)},[]);const s=async(l,h)=>{const m=await f.post("/auth/login",{email:l,password:h}),y={email:m.data.user.email,firstName:m.data.user.firstName,lastName:m.data.user.lastName,avatar:m.data.user.avatar,accessToken:m.data.access_token,refreshToken:m.data.refresh_token};n(y),w.setUser(y)},i=async(l,h,m,y,S)=>{const C=await f.post("/users",{email:l,password:h,firstName:m,lastName:y,avatar:S});return console.log(C),C.data},c=()=>{n(null),w.removeUser()},d={user:r,isAuthenticated:Boolean(r),signIn:s,signUp:i,signOut:c};return t(R.Provider,{value:d,children:e})},F=()=>u.exports.useContext(R),ge=o.div``,fe=o.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }
`,xe=o.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,O=o.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,be=K`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;o.div`
  width: 100vw;
`;const ye=o(O)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  animation: ${be} 0.2s ease-out forwards;
`,A=o.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,z=o.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,L=o.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,D=o.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,b=o(D)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,U=o(D)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,ve=async()=>(await f.get("/posts")).data,we=async({title:e,content:r})=>(await f.post("/posts",{title:e,content:r})).data,Ce=e=>{const[r,n]=u.exports.useState(""),[s,i]=u.exports.useState(""),c=I(),d=T(we,{onSuccess:()=>{c.invalidateQueries("posts")}});return a(ge,{children:[a(ye,{children:[t("h3",{children:"Create Post"}),a(fe,{onSubmit:async h=>{h.preventDefault(),d.mutate({title:r,content:s}),e.hide()},children:[t(z,{placeholder:"Title",onChange:h=>n(h.target.value)}),t(L,{placeholder:"Content",rows:5,onChange:h=>i(h.target.value)}),a(xe,{children:[t(U,{onClick:e.hide,children:"Cancel"}),t(b,{type:"submit",children:"Submit"})]})]})]}),t(A,{onClick:e.hide})]})},j=e=>V(new Date(e),{addSuffix:!0}),H=o.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,ke=o(O)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,J=o.div`
  display: flex;
  justify-content: space-between;
`,_=o.div`
  display: flex;
  align-items: center;
`,M=o.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,Q=o.div`
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
`,$e=o.h3`
  padding: 0.5rem 0 0.2rem;
   > a {
     text-decoration: none;
     color: ${({theme:e})=>e.colors.text.primary};
   }
`,Fe=o.p`
  padding: 0.2rem 0 0.5rem;
`,Se=o.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Ne=o.div``,Ae=o.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,Le=o.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,q=({postData:e,isAuthor:r})=>{const n=j(e.createdAt);return a(ke,{children:[a(J,{children:[a(_,{children:[t(M,{src:e.author.avatar}),a(Q,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),r&&t("button",{children:"Edit"})]}),t($e,{children:t(v,{to:`/posts/${e.id}`,state:{postData:e,isAuthor:r},children:e.title})}),t(Fe,{children:e.content}),t(H,{}),a(Se,{children:[t(Ne,{children:t(Ae,{children:n})}),a(Le,{children:[e._count.comments," comments"]})]})]})},Pe=o.section`
  > div {
    margin-bottom: 1rem;
  }
`,Ie=()=>{const e=F(),{data:r,isLoading:n,isError:s,error:i}=E("posts",ve);if(n)return t(g,{children:"Loading..."});if(s)return t(g,{children:i.message});const c=r.slice().sort((d,l)=>new Date(l.createdAt).getTime()-new Date(d.createdAt).getTime());return t(Pe,{children:c==null?void 0:c.map(d=>{var l;return t(q,{postData:d,isAuthor:((l=e.user)==null?void 0:l.email)===d.author.email},d.id)})})},X=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,Te=()=>{const[e,r]=u.exports.useState(!1),n=F(),s=()=>{r(i=>!i)};return a(g,{children:[a(X,{children:[t("h2",{children:"Recent Posts"}),n.isAuthenticated&&t(b,{onClick:s,children:"Create Post"})]}),e&&t(Ce,{hide:s}),t(Ie,{})]})},Ee=o.form``,k=o(z)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,W=e=>{const[r,n]=u.exports.useState(""),[s,i]=u.exports.useState(""),[c,d]=u.exports.useState(""),[l,h]=u.exports.useState(""),[m,y]=u.exports.useState(""),S=B(),C=F();return a(Ee,{onSubmit:async p=>{p.preventDefault(),e.isLogin?(await C.signIn(m,r),S("/",{replace:!0})):(await C.signUp(m,r,c,l),S("/auth/login"))},children:[t(k,{placeholder:"Email",value:m,onChange:p=>y(p.target.value)}),t(k,{placeholder:"Password",value:r,type:"password",onChange:p=>n(p.target.value)}),!e.isLogin&&a(g,{children:[t(k,{placeholder:"Confirm Password",value:s,type:"password",onChange:p=>i(p.target.value)}),t(k,{placeholder:"First Name",value:c,type:"text",onChange:p=>d(p.target.value)}),t(k,{placeholder:"Last Name",value:l,type:"text",onChange:p=>h(p.target.value)})]}),t(b,{children:e.isLogin?"Login":"Sign up"})]})},Be=()=>a(g,{children:[t("h2",{children:"Login"}),t(W,{isLogin:!0})]}),Re=async e=>(await f.get(`/posts/${e}/comments`)).data,Oe=async({content:e,postId:r})=>(await f.post(`/posts/${r}/comments`,{content:e})).data,ze=o.li`
  margin-top: 1rem;
`,De=o.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;o.div``;o.div``;o.span``;const Ue=o.p`
  padding: 0.5rem 3rem;

`,je=({commentData:e})=>{const r=j(e.createdAt);return a(ze,{children:[a(J,{children:[a(_,{children:[t(M,{src:e.author.avatar}),a(Q,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(De,{children:r})]}),t(Ue,{children:e.content})]})},He=o.div`
  margin-top: 1rem;
`,Je=o.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${L} {
    width: 100%;
  }

  > ${b} {
    display: block;
    margin: 0.5rem 0;
  }
`,_e=({postId:e,hide:r})=>{const n=u.exports.useRef(null),s=I(),i=T(Oe,{onSuccess:()=>{s.invalidateQueries("comments")}});return t(He,{children:a(Je,{onSubmit:async d=>{var l;d.preventDefault(),((l=n.current)==null?void 0:l.value)&&(i.mutate({content:n.current.value,postId:e}),r(),n.current.value)},children:[t(L,{rows:5,ref:n}),t(b,{children:"Submit"})]})})},Me=o.div`
  margin-top: 2rem;
`,Qe=o.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,qe=o(Z)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,Xe=o.ul`
  list-style: none;
`,We=e=>{const[r,n]=u.exports.useState(!1),{data:s,isLoading:i,isError:c,error:d}=E("comments",()=>Re(e.postId));return i?t(g,{children:"Loading..."}):c?t(g,{children:d.message}):a(Me,{children:[a(Qe,{children:[t("h3",{children:"Comments"}),t(qe,{onClick:()=>n(l=>!l)})]}),r&&t(_e,{postId:e.postId,hide:()=>n(!1)}),a(Xe,{children:[s==null?void 0:s.map(l=>t(je,{commentData:l},l.id)),t(H,{})]})]})},Ye=()=>{const e=ee(),r=B(),{postData:n,isAuthor:s}=e.state;return a(g,{children:[t(te,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>r(-1)}),t(q,{postData:n,isAuthor:s}),t(We,{postId:n.id})]})},Ge=()=>t(g,{children:t(X,{children:t("h2",{children:"Profile"})})}),Ke=()=>a(g,{children:[t("h2",{children:"Signup"}),t(W,{isLogin:!1})]}),Ve=o.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,Ze=()=>{const e=F();return t(Ve,{children:a(re,{children:[t(x,{path:"/",element:t(Te,{})}),e.isAuthenticated&&t(x,{path:"profile",element:t(Ge,{})}),!e.isAuthenticated&&a(x,{path:"auth",children:[t(x,{path:"login",element:t(Be,{})}),t(x,{path:"signup",element:t(Ke,{})})]}),t(x,{path:"posts/:postId",element:t(Ye,{})}),t(x,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},et=o.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,tt=()=>a(et,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),rt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.alt};
  width: 100vw;
  box-shadow: ${({theme:e})=>e.shadow.base};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    > ${A} {
      display: none;
    }
  }
`,ot=o.h1``,nt=o(oe)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,st=o(ne)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,it=o.nav`
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
`,at=o.ul`
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
`,$=o.li`
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
`,ct=()=>{const[e,r]=u.exports.useState(!1),n=F(),s=()=>{r(c=>!c)},i=()=>{n.signOut()};return a(rt,{children:[t(ot,{children:"App"}),!e&&t(nt,{onClick:s}),e&&t(st,{onClick:s}),e&&t(A,{onClick:s}),t(it,{show:e,children:a(at,{children:[t($,{onClick:s,children:t(v,{to:"/",children:"Home"})}),n.isAuthenticated&&t($,{onClick:s,children:t(v,{to:"/profile",children:"Profile"})}),!n.isAuthenticated&&a(g,{children:[t($,{onClick:s,children:t(v,{to:"/auth/login",children:t(b,{children:"Sign in"})})}),t($,{onClick:s,children:t(v,{to:"/auth/signup",children:t(U,{children:"Sign up"})})})]}),n.isAuthenticated&&t($,{children:t(v,{to:"/",children:t(b,{onClick:i,children:"Sign out"})})})]})})]})},lt=o.header``,dt=()=>t(lt,{children:t(ct,{})}),ut=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,mt=({children:e})=>t(ut,{children:e});function ht(){return a(mt,{children:[t(dt,{}),t(Ze,{}),t(tt,{})]})}const pt=new se;ie.render(t(P.StrictMode,{children:a(ae,{theme:ue,children:[t(me,{}),t(ce,{client:pt,children:t(pe,{children:t(le,{children:t(ht,{})})})})]})}),document.getElementById("root"));
