import{W,a as Y,j as N,R as P,r as u,s as o,U as G,u as I,b as T,f as K,L as v,c as E,d as V,C as Z,e as ee,g as te,h as x,M as re,i as oe,Q as ne,k as se,F as ie,l as ae,B as ce}from"./vendor.2b7972f7.js";const le=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};le();const de={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var ue=W`
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
`;class me{getLocalRefreshToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.refreshToken}getLocalAccessToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.accessToken}updateLocalAccessToken(r){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalRefreshToken(r){let n=JSON.parse(localStorage.getItem("user"));n.refreshToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalTokens(r,n){let s=JSON.parse(localStorage.getItem("user"));s.accessToken=r,s.refreshToken=n,localStorage.setItem("user",JSON.stringify(s))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(r){localStorage.setItem("user",JSON.stringify(r))}removeUser(){localStorage.removeItem("user")}}var w=new me;const f=Y.create({baseURL:"/"});f.interceptors.request.use(e=>{const r=w.getLocalAccessToken();return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));f.interceptors.response.use(e=>e,async e=>{const r=e.config;if(r.url!=="/auth/login"&&e.response&&e.response.status===401&&!r._retry){r._retry=!0;try{const n=await f.post("/auth/refreshtoken",{refreshToken:w.getLocalRefreshToken()}),{access_token:s,refresh_token:i}=n.data;return w.updateLocalTokens(s,i),f(r)}catch(n){return Promise.reject(n)}}return Promise.reject(e)});const t=N.exports.jsx,a=N.exports.jsxs,g=N.exports.Fragment,R=P.createContext({}),he=({children:e})=>{const[r,n]=u.exports.useState(null);u.exports.useEffect(()=>{const l=w.getUser();l&&n(l)},[]);const s=async(l,h)=>{const m=await f.post("/auth/login",{email:l,password:h}),y={email:m.data.user.email,firstName:m.data.user.firstName,lastName:m.data.user.lastName,avatar:m.data.user.avatar,accessToken:m.data.access_token,refreshToken:m.data.refresh_token};n(y),w.setUser(y)},i=async(l,h,m,y,S)=>{const C=await f.post("/users",{email:l,password:h,firstName:m,lastName:y,avatar:S});return console.log(C),C.data},c=()=>{n(null),w.removeUser()},d={user:r,isAuthenticated:Boolean(r),signIn:s,signUp:i,signOut:c};return t(R.Provider,{value:d,children:e})},F=()=>u.exports.useContext(R),pe=o.div``,ge=o.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }
`,fe=o.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,B=o.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,xe=G`
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
`;const be=o(B)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  animation: ${xe} 0.2s ease-out forwards;
`,L=o.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,O=o.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,A=o.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,z=o.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,b=o(z)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,U=o(z)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,ye=async()=>(await f.get("/posts")).data,ve=async({title:e,content:r})=>(await f.post("/posts",{title:e,content:r})).data,we=e=>{const[r,n]=u.exports.useState(""),[s,i]=u.exports.useState(""),c=I(),d=T(ve,{onSuccess:()=>{c.invalidateQueries("posts")}});return a(pe,{children:[a(be,{children:[t("h3",{children:"Create Post"}),a(ge,{onSubmit:async h=>{h.preventDefault(),d.mutate({title:r,content:s}),e.hide()},children:[t(O,{placeholder:"Title",onChange:h=>n(h.target.value)}),t(A,{placeholder:"Content",rows:5,onChange:h=>i(h.target.value)}),a(fe,{children:[t(U,{onClick:e.hide,children:"Cancel"}),t(b,{type:"submit",children:"Submit"})]})]})]}),t(L,{onClick:e.hide})]})},j=e=>K(new Date(e),{addSuffix:!0}),D=o.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,Ce=o(B)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,H=o.div`
  display: flex;
  justify-content: space-between;
`,J=o.div`
  display: flex;
  align-items: center;
`,_=o.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,M=o.div`
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
`,ke=o.h3`
  padding: 0.5rem 0 0.2rem;
   > a {
     text-decoration: none;
     color: ${({theme:e})=>e.colors.text.primary};
   }
`,$e=o.p`
  padding: 0.2rem 0 0.5rem;
`,Fe=o.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Se=o.div``,Ne=o.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,Le=o.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,Q=({postData:e,isAuthor:r})=>{const n=j(e.createdAt);return a(Ce,{children:[a(H,{children:[a(J,{children:[t(_,{src:e.author.avatar}),a(M,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),r&&t("button",{children:"Edit"})]}),t(ke,{children:t(v,{to:`/posts/${e.id}`,state:{postData:e,isAuthor:r},children:e.title})}),t($e,{children:e.content}),t(D,{}),a(Fe,{children:[t(Se,{children:t(Ne,{children:n})}),a(Le,{children:[e._count.comments," comments"]})]})]})},Ae=o.section`
  > div {
    margin-bottom: 1rem;
  }
`,Pe=()=>{const e=F(),{data:r,isLoading:n,isError:s,error:i}=E("posts",ye);if(n)return t(g,{children:"Loading..."});if(s)return t(g,{children:i.message});const c=r.slice().reverse();return t(Ae,{children:c==null?void 0:c.map(d=>{var l;return t(Q,{postData:d,isAuthor:((l=e.user)==null?void 0:l.email)===d.author.email},d.id)})})},q=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,Ie=()=>{const[e,r]=u.exports.useState(!1),n=F(),s=()=>{r(i=>!i)};return a(g,{children:[a(q,{children:[t("h2",{children:"Recent Posts"}),n.isAuthenticated&&t(b,{onClick:s,children:"Create Post"})]}),e&&t(we,{hide:s}),t(Pe,{})]})},Te=o.form``,k=o(O)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,X=e=>{const[r,n]=u.exports.useState(""),[s,i]=u.exports.useState(""),[c,d]=u.exports.useState(""),[l,h]=u.exports.useState(""),[m,y]=u.exports.useState(""),S=V(),C=F();return a(Te,{onSubmit:async p=>{p.preventDefault(),e.isLogin?(await C.signIn(m,r),S("/",{replace:!0})):(await C.signUp(m,r,c,l,""),S("/auth/login"))},children:[t(k,{placeholder:"Email",value:m,onChange:p=>y(p.target.value)}),t(k,{placeholder:"Password",value:r,type:"password",onChange:p=>n(p.target.value)}),!e.isLogin&&a(g,{children:[t(k,{placeholder:"Confirm Password",value:s,type:"password",onChange:p=>i(p.target.value)}),t(k,{placeholder:"First Name",value:c,type:"text",onChange:p=>d(p.target.value)}),t(k,{placeholder:"Last Name",value:l,type:"text",onChange:p=>h(p.target.value)})]}),t(b,{children:e.isLogin?"Login":"Sign up"})]})},Ee=()=>a(g,{children:[t("h2",{children:"Login"}),t(X,{isLogin:!0})]}),Re=async e=>(await f.get(`/posts/${e}/comments`)).data,Be=async({content:e,postId:r})=>(await f.post(`/posts/${r}/comments`,{content:e})).data,Oe=o.li`
  margin-top: 1rem;
`,ze=o.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;o.div``;o.div``;o.span``;const Ue=o.p`
  padding: 0.5rem 3rem;

`,je=({commentData:e})=>{const r=j(e.createdAt);return a(Oe,{children:[a(H,{children:[a(J,{children:[t(_,{src:e.author.avatar}),a(M,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(ze,{children:r})]}),t(Ue,{children:e.content})]})},De=o.div`
  margin-top: 1rem;
`,He=o.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${A} {
    width: 100%;
  }

  > ${b} {
    display: block;
    margin: 0.5rem 0;
  }
`,Je=({postId:e,hide:r})=>{const n=u.exports.useRef(null),s=I(),i=T(Be,{onSuccess:()=>{s.invalidateQueries("comments")}});return t(De,{children:a(He,{onSubmit:async d=>{var l;d.preventDefault(),((l=n.current)==null?void 0:l.value)&&(i.mutate({content:n.current.value,postId:e}),r(),n.current.value)},children:[t(A,{rows:5,ref:n}),t(b,{children:"Submit"})]})})},_e=o.div`
  margin-top: 2rem;
`,Me=o.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,Qe=o(Z)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,qe=o.ul`
  list-style: none;
`,Xe=e=>{const[r,n]=u.exports.useState(!1),{data:s,isLoading:i,isError:c,error:d}=E("comments",()=>Re(e.postId));return i?t(g,{children:"Loading..."}):c?t(g,{children:d.message}):a(_e,{children:[a(Me,{children:[t("h3",{children:"Comments"}),t(Qe,{onClick:()=>n(l=>!l)})]}),r&&t(Je,{postId:e.postId,hide:()=>n(!1)}),a(qe,{children:[s==null?void 0:s.map(l=>t(je,{commentData:l},l.id)),t(D,{})]})]})},We=()=>{const e=ee(),{postData:r,isAuthor:n}=e.state;return a(g,{children:[t(Q,{postData:r,isAuthor:n}),t(Xe,{postId:r.id})]})},Ye=()=>t(g,{children:t(q,{children:t("h2",{children:"Profile"})})}),Ge=()=>a(g,{children:[t("h2",{children:"Signup"}),t(X,{isLogin:!1})]}),Ke=o.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,Ve=()=>{const e=F();return t(Ke,{children:a(te,{children:[t(x,{path:"/",element:t(Ie,{})}),e.isAuthenticated&&t(x,{path:"profile",element:t(Ye,{})}),!e.isAuthenticated&&a(x,{path:"auth",children:[t(x,{path:"login",element:t(Ee,{})}),t(x,{path:"signup",element:t(Ge,{})})]}),t(x,{path:"posts/:postId",element:t(We,{})}),t(x,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},Ze=o.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,et=()=>a(Ze,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),tt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.alt};
  width: 100vw;
  box-shadow: ${({theme:e})=>e.shadow.base};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    > ${L} {
      display: none;
    }
  }
`,rt=o.h1``,ot=o(re)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,nt=o(oe)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,st=o.nav`
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
`,it=o.ul`
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
`,at=()=>{const[e,r]=u.exports.useState(!1),n=F(),s=()=>{r(c=>!c)},i=()=>{n.signOut()};return a(tt,{children:[t(rt,{children:"App"}),!e&&t(ot,{onClick:s}),e&&t(nt,{onClick:s}),e&&t(L,{onClick:s}),t(st,{show:e,children:a(it,{children:[t($,{onClick:s,children:t(v,{to:"/",children:"Home"})}),n.isAuthenticated&&t($,{onClick:s,children:t(v,{to:"/profile",children:"Profile"})}),!n.isAuthenticated&&a(g,{children:[t($,{onClick:s,children:t(v,{to:"/auth/login",children:t(b,{children:"Sign in"})})}),t($,{onClick:s,children:t(v,{to:"/auth/signup",children:t(U,{children:"Sign up"})})})]}),n.isAuthenticated&&t($,{children:t(v,{to:"/",children:t(b,{onClick:i,children:"Sign out"})})})]})})]})},ct=o.header``,lt=()=>t(ct,{children:t(at,{})}),dt=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,ut=({children:e})=>t(dt,{children:e});function mt(){return a(ut,{children:[t(lt,{}),t(Ve,{}),t(et,{})]})}const ht=new ne;se.render(t(P.StrictMode,{children:a(ie,{theme:de,children:[t(ue,{}),t(ae,{client:ht,children:t(he,{children:t(ce,{children:t(mt,{})})})})]})}),document.getElementById("root"));
