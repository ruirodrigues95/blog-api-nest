var B=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var R=(e,r)=>{var n={};for(var s in e)te.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&B)for(var s of B(e))r.indexOf(s)<0&&re.call(e,s)&&(n[s]=e[s]);return n};import{W as oe,a as ne,j as N,R as O,r as h,s as o,U as se,b as A,u as L,c as I,f as ie,E as ae,D as ce,L as w,d as U,e as j,C as le,g as de,A as ue,h as me,i as y,M as he,k as pe,Q as ge,F as fe,l as xe,B as ye}from"./vendor.6499ac04.js";const be=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};be();const ve={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var we=oe`
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
`;class ke{getLocalRefreshToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.refreshToken}getLocalAccessToken(){const r=JSON.parse(localStorage.getItem("user"));return r==null?void 0:r.accessToken}updateLocalAccessToken(r){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalRefreshToken(r){let n=JSON.parse(localStorage.getItem("user"));n.refreshToken=r,localStorage.setItem("user",JSON.stringify(n))}updateLocalTokens(r,n){let s=JSON.parse(localStorage.getItem("user"));s.accessToken=r,s.refreshToken=n,localStorage.setItem("user",JSON.stringify(s))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(r){localStorage.setItem("user",JSON.stringify(r))}removeUser(){localStorage.removeItem("user")}}var k=new ke;const x=ne.create({baseURL:"/"});x.interceptors.request.use(e=>{const r=k.getLocalAccessToken();return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));x.interceptors.response.use(e=>e,async e=>{const r=e.config;if(r.url!=="/auth/login"&&e.response&&e.response.status===401&&!r._retry){r._retry=!0;try{const n=await x.post("/auth/refreshtoken",{refreshToken:k.getLocalRefreshToken()}),{access_token:s,refresh_token:i}=n.data;return k.updateLocalTokens(s,i),x(r)}catch(n){return Promise.reject(n)}}return Promise.reject(e)});const t=N.exports.jsx,a=N.exports.jsxs,p=N.exports.Fragment,H=O.createContext({}),Ce=({children:e})=>{const[r,n]=h.exports.useState(null);h.exports.useEffect(()=>{const l=k.getUser();l&&n(l)},[]);const s=async(l,m)=>{const d=await x.post("/auth/login",{email:l,password:m}),g={email:d.data.user.email,firstName:d.data.user.firstName,lastName:d.data.user.lastName,avatar:d.data.user.avatar,accessToken:d.data.access_token,refreshToken:d.data.refresh_token};n(g),k.setUser(g)},i=async(l,m,d,g,v)=>{const C=await x.post("/users",{email:l,password:m,firstName:d,lastName:g,avatar:v});return console.log(C),C.data},c=()=>{n(null),k.removeUser()},u={user:r,isAuthenticated:Boolean(r),signIn:s,signUp:i,signOut:c};return t(H.Provider,{value:u,children:e})},S=()=>h.exports.useContext(H),$e=o.div``,Fe=o.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }
`,J=o.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,M=o.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,P=o.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,E=o.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,b=o(E)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,T=o(E)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,Se=o(E)`
  background-color: ${({theme:e})=>e.colors.secondary.main};
  border: 1px solid ${({theme:e})=>e.colors.secondary.dark};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary.dark};
  }
`,Q=o.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,Ae=se`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`,D=o.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,Ne=o(Q)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  animation: ${Ae} 0.2s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80vw;
    top: 0;
    margin: auto;
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 60vw;
  }
`,z=document.getElementById("overlay"),_=({children:e,onClose:r})=>a(p,{children:[A.createPortal(t(D,{onClick:r}),z),A.createPortal(t(Ne,{children:e}),z)]}),Le=async()=>(await x.get("/posts")).data,Ie=async({title:e,content:r})=>(await x.post("/posts",{title:e,content:r})).data,Pe=async({postId:e})=>(await x.delete(`/posts/${e}`)).data,Ee=e=>{const[r,n]=h.exports.useState(""),[s,i]=h.exports.useState(""),c=L(),u=I(Ie,{onSuccess:()=>{c.invalidateQueries("posts")}});return t($e,{children:a(_,{onClose:()=>e.hide(),children:[t("h3",{children:"Create Post"}),a(Fe,{onSubmit:async m=>{m.preventDefault(),u.mutate({title:r,content:s}),e.hide()},children:[t(M,{placeholder:"Title",onChange:m=>n(m.target.value)}),t(P,{placeholder:"Content",rows:5,onChange:m=>i(m.target.value)}),a(J,{children:[t(T,{onClick:()=>e.hide(),children:"Cancel"}),t(b,{type:"submit",children:"Submit"})]})]})]})})},q=e=>ie(new Date(e),{addSuffix:!0}),X=o.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,Te=o(Q)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,W=o.div`
  display: flex;
  justify-content: space-between;
`,De=o(ae)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.dark};
  cursor: pointer;
`,Be=o(ce)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.secondary.dark};
  cursor: pointer;
`,Y=o.div`
  display: flex;
  align-items: center;
`,G=o.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,K=o.div`
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
`,Re=o.h3`
  padding: 0.5rem 0 0.2rem;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,ze=o.p`
  padding: 0.2rem 0 0.5rem;
`,Oe=o.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Ue=o.div``,je=o.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,He=o.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,V=s=>{var i=s,{postData:e,isAuthor:r}=i,n=R(i,["postData","isAuthor"]);const[c,u]=h.exports.useState(!1),l=q(e.createdAt);return a(Te,{children:[c&&t(p,{children:a(_,{onClose:()=>u(!1),children:[t("p",{style:{marginBottom:"1rem"},children:"Are you sure you want to delete the post?"}),a(J,{children:[t(T,{onClick:()=>u(!1),children:"Cancel"}),t(Se,{onClick:()=>{n.onDelete(e.id),u(!1)},children:"Delete"})]})]})}),a(W,{children:[a(Y,{children:[t(G,{src:e.author.avatar}),a(K,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),r&&a("div",{children:[t(De,{})," ",t(Be,{onClick:()=>u(!0)})]})]}),t(Re,{children:t(w,{to:`/posts/${e.id}`,state:{postData:e,isAuthor:r,onDelete:n.onDelete},children:e.title})}),t(ze,{children:e.content}),t(X,{}),a(Oe,{children:[t(Ue,{children:t(je,{children:l})}),a(He,{children:[e._count.comments," comments"]})]})]})},Je=o.section`
  > div {
    margin-bottom: 1rem;
  }
`,Me=()=>{const e=S(),{data:r,isLoading:n,isError:s,error:i}=U("posts",Le),c=L(),u=I(d=>Pe(d),{onSuccess:()=>{c.invalidateQueries("posts")}}),l=d=>{u.mutate({postId:d})};if(n)return t(p,{children:"Loading..."});if(s)return t(p,{children:i.message});const m=r.slice().sort((d,g)=>new Date(g.createdAt).getTime()-new Date(d.createdAt).getTime());return t(Je,{children:m==null?void 0:m.map(d=>{var g;return t(V,{postData:d,isAuthor:((g=e.user)==null?void 0:g.email)===d.author.email,onDelete:v=>l(v)},d.id)})})},Z=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,Qe=()=>{const[e,r]=h.exports.useState(!1),n=S();return a(p,{children:[a(Z,{children:[t("h2",{children:"Recent Posts"}),n.isAuthenticated&&t(b,{onClick:()=>r(!0),children:"Create Post"})]}),e&&t(Ee,{hide:()=>r(!1)}),t(Me,{})]})},_e=o.form``,$=o(M)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,ee=e=>{const[r,n]=h.exports.useState(""),[s,i]=h.exports.useState(""),[c,u]=h.exports.useState(""),[l,m]=h.exports.useState(""),[d,g]=h.exports.useState(""),v=j(),C=S();return a(_e,{onSubmit:async f=>{f.preventDefault(),e.isLogin?(await C.signIn(d,r),v("/",{replace:!0})):(await C.signUp(d,r,c,l),v("/auth/login"))},children:[t($,{placeholder:"Email",value:d,onChange:f=>g(f.target.value)}),t($,{placeholder:"Password",value:r,type:"password",onChange:f=>n(f.target.value)}),!e.isLogin&&a(p,{children:[t($,{placeholder:"Confirm Password",value:s,type:"password",onChange:f=>i(f.target.value)}),t($,{placeholder:"First Name",value:c,type:"text",onChange:f=>u(f.target.value)}),t($,{placeholder:"Last Name",value:l,type:"text",onChange:f=>m(f.target.value)})]}),t(b,{children:e.isLogin?"Login":"Sign up"})]})},qe=()=>a(p,{children:[t("h2",{children:"Login"}),t(ee,{isLogin:!0})]}),Xe=async e=>(await x.get(`/posts/${e}/comments`)).data,We=async({content:e,postId:r})=>(await x.post(`/posts/${r}/comments`,{content:e})).data,Ye=o.li`
  margin-top: 1rem;
`,Ge=o.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;o.div``;o.div``;o.span``;const Ke=o.p`
  padding: 0.5rem 3rem;

`,Ve=({commentData:e})=>{const r=q(e.createdAt);return a(Ye,{children:[a(W,{children:[a(Y,{children:[t(G,{src:e.author.avatar}),a(K,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(Ge,{children:r})]}),t(Ke,{children:e.content})]})},Ze=o.div`
  margin-top: 1rem;
`,et=o.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${P} {
    width: 100%;
  }

  > ${b} {
    display: block;
    margin: 0.5rem 0;
  }
`,tt=({postId:e,hide:r})=>{const n=h.exports.useRef(null),s=L(),i=I(We,{onSuccess:()=>{s.invalidateQueries("comments")}});return t(Ze,{children:a(et,{onSubmit:async u=>{var l;u.preventDefault(),((l=n.current)==null?void 0:l.value)&&(i.mutate({content:n.current.value,postId:e}),r(),n.current.value)},children:[t(P,{rows:5,ref:n}),t(b,{children:"Submit"})]})})},rt=o.div`
  margin-top: 2rem;
`,ot=o.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,nt=o(le)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,st=o.ul`
  list-style: none;
`,it=e=>{const[r,n]=h.exports.useState(!1),{data:s,isLoading:i,isError:c,error:u}=U("comments",()=>Xe(e.postId));return i?t(p,{children:"Loading..."}):c?t(p,{children:u.message}):a(rt,{children:[a(ot,{children:[t("h3",{children:"Comments"}),t(nt,{onClick:()=>n(l=>!l)})]}),r&&t(tt,{postId:e.postId,hide:()=>n(!1)}),a(st,{children:[s==null?void 0:s.map(l=>t(Ve,{commentData:l},l.id)),t(X,{})]})]})},at=()=>{const e=de(),r=j(),{postData:n,isAuthor:s,onDelete:i}=e.state;return a(p,{children:[t(ue,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>r(-1)}),t(V,{postData:n,isAuthor:s,onDelete:()=>i(n.id)}),t(it,{postId:n.id})]})},ct=()=>t(p,{children:t(Z,{children:t("h2",{children:"Profile"})})}),lt=()=>a(p,{children:[t("h2",{children:"Signup"}),t(ee,{isLogin:!1})]}),dt=o.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,ut=()=>{const e=S();return t(dt,{children:a(me,{children:[t(y,{path:"/",element:t(Qe,{})}),e.isAuthenticated&&t(y,{path:"profile",element:t(ct,{})}),!e.isAuthenticated&&a(y,{path:"auth",children:[t(y,{path:"login",element:t(qe,{})}),t(y,{path:"signup",element:t(lt,{})})]}),t(y,{path:"posts/:postId",element:t(at,{})}),t(y,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},mt=o.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,ht=()=>a(mt,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),pt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.alt};
  width: 100vw;
  box-shadow: ${({theme:e})=>e.shadow.base};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    > ${D} {
      display: none;
    }
  }
`,gt=o.h1``,ft=o(he)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,xt=o(pe)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,yt=o.nav`
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
`,bt=o.ul`
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
`,F=o.li`
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
`,vt=()=>{const[e,r]=h.exports.useState(!1),n=S(),s=()=>{r(c=>!c)},i=()=>{n.signOut()};return a(pt,{children:[t(gt,{children:"App"}),!e&&t(ft,{onClick:s}),e&&t(xt,{onClick:s}),e&&t(D,{onClick:s}),t(yt,{show:e,children:a(bt,{children:[t(F,{onClick:s,children:t(w,{to:"/",children:"Home"})}),n.isAuthenticated&&t(F,{onClick:s,children:t(w,{to:"/profile",children:"Profile"})}),!n.isAuthenticated&&a(p,{children:[t(F,{onClick:s,children:t(w,{to:"/auth/login",children:t(b,{children:"Sign in"})})}),t(F,{onClick:s,children:t(w,{to:"/auth/signup",children:t(T,{children:"Sign up"})})})]}),n.isAuthenticated&&t(F,{children:t(w,{to:"/",children:t(b,{onClick:i,children:"Sign out"})})})]})})]})},wt=o.header``,kt=()=>t(wt,{children:t(vt,{})}),Ct=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,$t=({children:e})=>t(Ct,{children:e});function Ft(){return a($t,{children:[t(kt,{}),t(ut,{}),t(ht,{})]})}const St=new ge;A.render(t(O.StrictMode,{children:a(fe,{theme:ve,children:[t(we,{}),t(xe,{client:St,children:t(Ce,{children:t(ye,{children:t(Ft,{})})})})]})}),document.getElementById("root"));
