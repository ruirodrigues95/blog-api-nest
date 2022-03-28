var j=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var D=(e,o)=>{var n={};for(var r in e)le.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&j)for(var r of j(e))o.indexOf(r)<0&&de.call(e,r)&&(n[r]=e[r]);return n};import{W as ue,a as he,j as I,R as A,r as d,s,U as me,b as L,u as T,c as B,d as E,f as pe,E as ge,D as fe,L as F,e as xe,C as ye,g as M,h as be,A as ve,i as we,k as C,M as Ce,l as ke,Q as $e,F as Fe,m as Se,B as Ne}from"./vendor.efee98e6.js";const Pe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};Pe();const Ee={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var Te=ue`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  button,
  label {
    user-select: none;
  }
`;class Le{getLocalRefreshToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.refreshToken}getLocalAccessToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.accessToken}updateLocalAccessToken(o){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=o,localStorage.setItem("user",JSON.stringify(n))}updateLocalRefreshToken(o){let n=JSON.parse(localStorage.getItem("user"));n.refreshToken=o,localStorage.setItem("user",JSON.stringify(n))}updateLocalTokens(o,n){let r=JSON.parse(localStorage.getItem("user"));r.accessToken=o,r.refreshToken=n,localStorage.setItem("user",JSON.stringify(r))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(o){localStorage.setItem("user",JSON.stringify(o))}removeUser(){localStorage.removeItem("user")}}var S=new Le;const b=he.create({baseURL:"/"});b.interceptors.request.use(e=>{const o=S.getLocalAccessToken();return o&&(e.headers.Authorization=`Bearer ${o}`),e},e=>Promise.reject(e));b.interceptors.response.use(e=>e,async e=>{const o=e.config;if(o.url!=="/auth/login"&&e.response&&e.response.status===401&&!o._retry){o._retry=!0;try{const n=await b.post("/auth/refreshtoken",{refreshToken:S.getLocalRefreshToken()}),{access_token:r,refresh_token:i}=n.data;return S.updateLocalTokens(r,i),b(o)}catch(n){return Promise.reject(n)}}return Promise.reject(e)});const t=I.exports.jsx,a=I.exports.jsxs,p=I.exports.Fragment,Q=A.createContext({}),Ie=({children:e})=>{const[o,n]=d.exports.useState(null);d.exports.useEffect(()=>{const l=S.getUser();l&&n(l)},[]);const r=async(l,g)=>{const f=await b.post("/auth/login",{email:l,password:g}),y={email:f.data.user.email,firstName:f.data.user.firstName,lastName:f.data.user.lastName,avatar:f.data.user.avatar,accessToken:f.data.access_token,refreshToken:f.data.refresh_token};n(y),S.setUser(y)},i=async(l,g,f,y,m)=>{const x=await b.post("/users",{email:l,password:g,firstName:f,lastName:y,avatar:m});return console.log(x),x.data},c=()=>{n(null),S.removeUser()},u={user:o,isAuthenticated:Boolean(o),signIn:r,signUp:i,signOut:c};return t(Q.Provider,{value:u,children:e})},$=()=>d.exports.useContext(Q),Ae=s.div``,Be=s.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }

  > input[type="checkbox"] {
    display: inline;
    width: auto;
    margin-right: 0.3rem;
  }
`,J=s.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,_=s.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,R=s.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,z=s.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,k=s(z)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,O=s(z)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,Re=s(z)`
  background-color: ${({theme:e})=>e.colors.secondary.main};
  border: 1px solid ${({theme:e})=>e.colors.secondary.dark};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary.dark};
  }
`,q=s.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,ze=me`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`,U=s.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,Oe=s(q)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  animation: ${ze} 0.2s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80vw;
    top: 0;
    margin: auto;
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 60vw;
  }
`,H=document.getElementById("overlay"),X=({children:e,onClose:o})=>a(p,{children:[L.createPortal(t(U,{onClick:o}),H),L.createPortal(t(Oe,{children:e}),H)]}),Ue=async({pageParam:e=0},o)=>(console.log(e),o?(console.log("fetching user posts"),console.log(o),(await b.get(`/posts/my-posts?page=${e}`)).data):(console.log("fetching all posts"),(await b.get(`/posts?page=${e}`)).data)),je=async e=>(await b.get(`/posts/${e}`)).data,De=async({title:e,content:o,published:n})=>(await b.post("/posts",{title:e,content:o,published:n})).data,He=async e=>{const{postId:o,title:n,content:r,published:i}=e,c=await b.put(`/posts/${o}`,{title:n,content:r,published:i});return console.log(c.data),c.data},Me=async({postId:e})=>(await b.delete(`/posts/${e}`)).data,Qe=s.input.attrs({type:"checkbox"})``,Je=s.div`
  position: fixed;
  background-color: ${e=>e.type==="error"?"red":"lightgreen"};
  bottom: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: ${({theme:e})=>e.borderRadius.card};
  color: white;
  box-shadow: ${({theme:e})=>e.shadow.base};
`,W=d.exports.createContext({}),_e=({children:e})=>{const[o,n]=d.exports.useState(null);d.exports.useEffect(()=>{if(o){const i=setTimeout(()=>n(null),3e3);return()=>clearTimeout(i)}},[o]);const r=i=>{n(i)};return a(W.Provider,{value:{addToast:r},children:[e,o&&t(Je,{type:o.type,children:o.message})]})},Y=()=>d.exports.useContext(W),G=i=>{var c=i,{initialTitle:e,initialContent:o,initialPublished:n}=c,r=D(c,["initialTitle","initialContent","initialPublished"]);const[u,l]=d.exports.useState(e||""),[g,f]=d.exports.useState(o||""),[y,m]=d.exports.useState(n!=null?n:!0),x=T(),w=B(),h=Y(),ae=E(De,{onSuccess:v=>{w.invalidateQueries("posts"),x(`/posts/${v.id}`),h.addToast({type:"success",message:"Post created successfully"})},onError:v=>{h.addToast({type:"error",message:`Error: ${v.message}`})}}),ce=E(He,{onSuccess:()=>{w.invalidateQueries("post"),w.invalidateQueries("posts"),h.addToast({type:"success",message:"Post updated successfully"})},onError:v=>{h.addToast({type:"error",message:`Error: ${v.message}`})}});return t(Ae,{children:a(X,{onClose:()=>r.hide(),children:[e?t("h3",{children:"Edit Post"}):t("h3",{children:"Create Post"}),a(Be,{onSubmit:async v=>{v.preventDefault(),u&&g&&(r.postId?ce.mutate({postId:r.postId,title:u,content:g,published:y}):ae.mutate({title:u,content:g,published:y})),r.hide()},children:[t(_,{placeholder:"Title",onChange:v=>l(v.target.value),value:u}),t(R,{placeholder:"Content",rows:5,onChange:v=>f(v.target.value),value:g}),t(Qe,{checked:y,onChange:v=>m(v.target.checked),id:"published"}),t("label",{htmlFor:"published",children:"Published"}),a(J,{children:[t(O,{onClick:()=>r.hide(),children:"Cancel"}),t(k,{type:"submit",children:"Submit"})]})]})]})})},K=e=>pe(new Date(e),{addSuffix:!0}),V=s.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,qe=s(q)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
  opacity: ${({isPublished:e})=>e?1:.5};
`,Z=s.div`
  display: flex;
  justify-content: space-between;
`,Xe=s(ge)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.dark};
  cursor: pointer;
`,We=s(fe)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.secondary.dark};
  cursor: pointer;
`,ee=s.div`
  display: flex;
  align-items: center;
`,te=s.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,oe=s.div`
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
`,Ye=s.h3`
  padding: 0.5rem 0 0.2rem;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,Ge=s.p`
  padding: 0.2rem 0 0.5rem;
`,Ke=s.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Ve=s.div``,Ze=s.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,et=s.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,re=({postData:e,isAuthor:o})=>{const[n,r]=d.exports.useState(!1),[i,c]=d.exports.useState(!1),u=T(),l=Y(),g=K(e.createdAt),f=B(),y=E(x=>Me(x),{onSuccess:()=>{f.invalidateQueries("posts"),l.addToast({type:"success",message:"Post deleted successfully"})},onError:x=>{l.addToast({type:"error",message:`Error: ${x.message}`})}}),m=async()=>{y.mutate({postId:e.id}),r(!1),u("/",{replace:!0})};return a(qe,{isPublished:e.published,children:[n&&t(p,{children:a(X,{onClose:()=>r(!1),children:[t("p",{style:{marginBottom:"1rem"},children:"Are you sure you want to delete the post?"}),a(J,{children:[t(O,{onClick:()=>r(!1),children:"Cancel"}),t(Re,{onClick:m,children:"Delete"})]})]})}),i&&t(G,{initialTitle:e.title,initialContent:e.content,initialPublished:e.published,hide:()=>c(!1),postId:e.id}),e&&a(p,{children:[a(Z,{children:[a(ee,{children:[t(te,{src:e.author.avatar}),a(oe,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),o&&a("div",{children:[t(Xe,{onClick:()=>c(!0)}),t(We,{onClick:()=>r(!0)})]})]}),t(Ye,{children:t(F,{to:`/posts/${e.id}`,children:e.title})}),t(Ge,{children:e.content}),t(V,{}),a(Ke,{children:[t(Ve,{children:t(Ze,{children:g})}),a(et,{children:[e._count.comments," comments"]})]})]})]})},tt=s.section`
  > div {
    margin-bottom: 1rem;
  }
`,ne=({token:e})=>{const o=$(),n=d.exports.useRef(null),{data:r,error:i,isError:c,isLoading:u,fetchNextPage:l,hasNextPage:g,isFetching:f,isFetchingNextPage:y}=xe(["posts",e],m=>Ue(m!=null?m:0,e),{getNextPageParam:m=>m.nextCursor});return d.exports.useEffect(()=>{if(!g)return;const m=new IntersectionObserver(w=>w.forEach(h=>{h.isIntersecting&&l()})),x=n&&n.current;if(!!x)return m.observe(x),()=>{m.unobserve(x)}},[n.current,g]),u?t(p,{children:"Loading..."}):c?t(p,{children:i.message}):a(tt,{children:[r==null?void 0:r.pages.map((m,x)=>t(A.Fragment,{children:m.posts.map(w=>{var h;return t(re,{postData:w,isAuthor:((h=o.user)==null?void 0:h.email)===w.author.email},w.id)})},x)),t("button",{onClick:()=>l(),disabled:!g||y,ref:n,children:y?"Loading more...":g?"Load More":"Nothing more to load"})]})},se=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,ot=()=>{const[e,o]=d.exports.useState(!1),n=$();return a(p,{children:[a(se,{children:[t("h2",{children:"Recent Posts"}),n.isAuthenticated&&t(k,{onClick:()=>o(!0),children:"Create Post"})]}),e&&t(G,{hide:()=>o(!1)}),t(ne,{})]})},rt=s.form``,N=s(_)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,ie=e=>{const[o,n]=d.exports.useState(""),[r,i]=d.exports.useState(""),[c,u]=d.exports.useState(""),[l,g]=d.exports.useState(""),[f,y]=d.exports.useState(""),m=T(),x=$();return a(rt,{onSubmit:async h=>{h.preventDefault(),e.isLogin?(await x.signIn(f,o),m("/",{replace:!0})):(await x.signUp(f,o,c,l),m("/auth/login"))},children:[t(N,{placeholder:"Email",value:f,onChange:h=>y(h.target.value)}),t(N,{placeholder:"Password",value:o,type:"password",onChange:h=>n(h.target.value)}),!e.isLogin&&a(p,{children:[t(N,{placeholder:"Confirm Password",value:r,type:"password",onChange:h=>i(h.target.value)}),t(N,{placeholder:"First Name",value:c,type:"text",onChange:h=>u(h.target.value)}),t(N,{placeholder:"Last Name",value:l,type:"text",onChange:h=>g(h.target.value)})]}),t(k,{children:e.isLogin?"Login":"Sign up"})]})},nt=()=>a(p,{children:[t("h2",{children:"Login"}),t(ie,{isLogin:!0})]}),st=async e=>{const o=await b.get(`/posts/${e}/comments`);return console.log(e),console.log("response",o.data),o.data},it=async({content:e,postId:o})=>(await b.post(`/posts/${o}/comments`,{content:e})).data,at=s.li`
  margin-top: 1rem;
`,ct=s.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;s.div``;s.div``;s.span``;const lt=s.p`
  padding: 0.5rem 3rem;

`,dt=({commentData:e})=>{const o=K(e.createdAt);return a(at,{children:[a(Z,{children:[a(ee,{children:[t(te,{src:e.author.avatar}),a(oe,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(ct,{children:o})]}),t(lt,{children:e.content})]})},ut=s.div`
  margin-top: 1rem;
`,ht=s.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${R} {
    width: 100%;
  }

  > ${k} {
    display: block;
    margin: 0.5rem 0;
  }
`,mt=({postId:e,hide:o})=>{const n=d.exports.useRef(null),r=B(),i=E(it,{onSuccess:()=>{r.invalidateQueries("comments")}});return t(ut,{children:a(ht,{onSubmit:async u=>{var l;u.preventDefault(),((l=n.current)==null?void 0:l.value)&&(i.mutate({content:n.current.value,postId:e}),o(),n.current.value)},children:[t(R,{rows:5,ref:n}),t(k,{children:"Submit"})]})})},pt=s.div`
  margin-top: 2rem;
`,gt=s.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,ft=s(ye)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,xt=s.ul`
  list-style: none;
`,yt=({postId:e})=>{const[o,n]=d.exports.useState(!1),{data:r,isLoading:i,isError:c,error:u}=M(["comments",e],()=>st(e));return i?t(p,{children:"Loading..."}):c?t(p,{children:u.message}):a(pt,{children:[a(gt,{children:[t("h3",{children:"Comments"}),t(ft,{onClick:()=>n(l=>!l)})]}),o&&t(mt,{postId:e,hide:()=>n(!1)}),a(xt,{children:[r==null?void 0:r.map(l=>t(dt,{commentData:l},l.id)),t(V,{})]})]})},bt=()=>{var l;const e=T(),{postId:o}=be(),n=$(),{data:r,isLoading:i,isError:c,error:u}=M(["post",o],()=>je(+o));return i?t(p,{children:"Loading..."}):c?t(p,{children:u.message}):!r&&!i?t(p,{children:"No post found"}):a(p,{children:[t(ve,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>e(-1)}),r&&a(p,{children:[t(re,{postData:r,isAuthor:((l=n.user)==null?void 0:l.email)===r.author.email}),t(yt,{postId:r.id})]})]})},vt=()=>{const e=$();return a(p,{children:[t(se,{children:t("h2",{children:"Profile"})}),t("h2",{children:"My Posts"}),t(ne,{token:e.user.accessToken})]})},wt=()=>a(p,{children:[t("h2",{children:"Signup"}),t(ie,{isLogin:!1})]}),Ct=s.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,kt=()=>{const e=$();return t(Ct,{children:a(we,{children:[t(C,{path:"/",element:t(ot,{})}),e.isAuthenticated&&t(C,{path:"profile",element:t(vt,{})}),!e.isAuthenticated&&a(C,{path:"auth",children:[t(C,{path:"login",element:t(nt,{})}),t(C,{path:"signup",element:t(wt,{})})]}),t(C,{path:"posts/:postId",element:t(bt,{})}),t(C,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},$t=s.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,Ft=()=>a($t,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),St=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({theme:e})=>e.colors.background.alt};
  width: 100vw;
  box-shadow: ${({theme:e})=>e.shadow.base};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    > ${U} {
      display: none;
    }
  }
`,Nt=s.h1``,Pt=s(Ce)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Et=s(ke)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Tt=s.nav`
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
`,Lt=s.ul`
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
`,P=s.li`
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
`,It=()=>{const[e,o]=d.exports.useState(!1),n=$(),r=()=>{o(c=>!c)},i=()=>{n.signOut()};return a(St,{children:[t(Nt,{children:"App"}),!e&&t(Pt,{onClick:r}),e&&t(Et,{onClick:r}),e&&t(U,{onClick:r}),t(Tt,{show:e,children:a(Lt,{children:[t(P,{onClick:r,children:t(F,{to:"/",children:"Home"})}),n.isAuthenticated&&t(P,{onClick:r,children:t(F,{to:"/profile",children:"Profile"})}),!n.isAuthenticated&&a(p,{children:[t(P,{onClick:r,children:t(F,{to:"/auth/login",children:t(k,{children:"Sign in"})})}),t(P,{onClick:r,children:t(F,{to:"/auth/signup",children:t(O,{children:"Sign up"})})})]}),n.isAuthenticated&&t(P,{children:t(F,{to:"/",children:t(k,{onClick:i,children:"Sign out"})})})]})})]})},At=s.header``,Bt=()=>t(At,{children:t(It,{})}),Rt=s.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,zt=({children:e})=>t(Rt,{children:e});function Ot(){return a(zt,{children:[t(Bt,{}),t(kt,{}),t(Ft,{})]})}const Ut=new $e;L.render(t(A.StrictMode,{children:a(Fe,{theme:Ee,children:[t(Te,{}),t(Se,{client:Ut,children:t(Ie,{children:t(_e,{children:t(Ne,{children:t(Ot,{})})})})})]})}),document.getElementById("root"));
