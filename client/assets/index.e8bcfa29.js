var H=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var U=(e,o)=>{var n={};for(var r in e)de.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&H)for(var r of H(e))o.indexOf(r)<0&&ue.call(e,r)&&(n[r]=e[r]);return n};import{W as he,a as me,j as A,R as B,r as d,s,U as pe,b as I,u as ge,c as P,d as R,e as E,f as fe,Q as xe,E as ye,D as be,L as F,g as ve,C as we,h as J,i as Ce,A as ke,k as $e,l as C,M as Fe,m as Se,n as Ne,F as Te,o as Ee,B as Pe}from"./vendor.2e673a38.js";const Le=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};Le();const Ie={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var Ae=he`
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
`;class Be{getLocalRefreshToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.refreshToken}getLocalAccessToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.accessToken}updateLocalAccessToken(o){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=o,localStorage.setItem("user",JSON.stringify(n))}updateLocalRefreshToken(o){let n=JSON.parse(localStorage.getItem("user"));n.refreshToken=o,localStorage.setItem("user",JSON.stringify(n))}updateLocalTokens(o,n){let r=JSON.parse(localStorage.getItem("user"));r.accessToken=o,r.refreshToken=n,localStorage.setItem("user",JSON.stringify(r))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(o){localStorage.setItem("user",JSON.stringify(o))}removeUser(){localStorage.removeItem("user")}}var S=new Be;const v=me.create({baseURL:"/"});v.interceptors.request.use(e=>{const o=S.getLocalAccessToken();return o&&(e.headers.Authorization=`Bearer ${o}`),e},e=>Promise.reject(e));v.interceptors.response.use(e=>e,async e=>{const o=e.config;if(o.url!=="/auth/login"&&e.response&&e.response.status===401&&!o._retry){o._retry=!0;try{const n=await v.post("/auth/refreshtoken",{refreshToken:S.getLocalRefreshToken()}),{access_token:r,refresh_token:i}=n.data;return S.updateLocalTokens(r,i),v(o)}catch(n){return Promise.reject(n)}}return Promise.reject(e)});const t=A.exports.jsx,a=A.exports.jsxs,p=A.exports.Fragment,M=B.createContext({}),Re=({children:e})=>{const[o,n]=d.exports.useState(null);d.exports.useEffect(()=>{const l=S.getUser();l&&n(l)},[]);const r=async(l,x)=>{const g=await v.post("/auth/login",{email:l,password:x}),f={email:g.data.user.email,firstName:g.data.user.firstName,lastName:g.data.user.lastName,avatar:g.data.user.avatar,accessToken:g.data.access_token,refreshToken:g.data.refresh_token};n(f),S.setUser(f)},i=async(l,x,g,f,m)=>{const y=await v.post("/users",{email:l,password:x,firstName:g,lastName:f,avatar:m});return console.log(y),y.data},c=()=>{n(null),S.removeUser()},u={user:o,isAuthenticated:Boolean(o),signIn:r,signUp:i,signOut:c};return t(M.Provider,{value:u,children:e})},$=()=>d.exports.useContext(M),Oe=s.div``,ze=s.form`
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
`,De=s.div`
  height: 300px;
`,Q=s.div`
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
`,O=s.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,k=s(O)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,z=s(O)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,He=s(O)`
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
`,Ue=pe`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`,D=s.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,je=s(q)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  animation: ${Ue} 0.2s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80vw;
    top: 0;
    margin: auto;
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 60vw;
  }
`,j=document.getElementById("overlay"),X=({children:e,onClose:o})=>a(p,{children:[I.createPortal(t(D,{onClick:o}),j),I.createPortal(t(je,{children:e}),j)]}),Je=async({pageParam:e=0},o)=>(console.log(e),o?(console.log("fetching user posts"),console.log(o),(await v.get(`/posts/my-posts?page=${e}`)).data):(console.log("fetching all posts"),(await v.get(`/posts?page=${e}`)).data)),Me=async e=>(await v.get(`/posts/${e}`)).data,Qe=async({title:e,content:o,published:n})=>(await v.post("/posts",{title:e,content:o,published:n})).data,_e=async e=>{const{postId:o,title:n,content:r,published:i}=e,c=await v.put(`/posts/${o}`,{title:n,content:r,published:i});return console.log(c.data),c.data},qe=async({postId:e})=>(await v.delete(`/posts/${e}`)).data,Xe=s.input.attrs({type:"checkbox"})``,We=s.div`
  position: fixed;
  background-color: ${e=>e.type==="error"?"red":"lightgreen"};
  bottom: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: ${({theme:e})=>e.borderRadius.card};
  color: white;
  box-shadow: ${({theme:e})=>e.shadow.base};
`,W=d.exports.createContext({}),Ye=({children:e})=>{const[o,n]=d.exports.useState(null);d.exports.useEffect(()=>{if(o){const i=setTimeout(()=>n(null),3e3);return()=>clearTimeout(i)}},[o]);const r=i=>{n(i)};return a(W.Provider,{value:{addToast:r},children:[e,o&&t(We,{type:o.type,children:o.message})]})},Y=()=>d.exports.useContext(W),G=i=>{var c=i,{initialTitle:e,initialContent:o,initialPublished:n}=c,r=U(c,["initialTitle","initialContent","initialPublished"]);const[u,l]=d.exports.useState(e||""),[x,g]=d.exports.useState(n!=null?n:!0),{quill:f,quillRef:m}=ge(),y=P(),b=R(),h=Y();d.exports.useEffect(()=>{f&&o&&f.setContents(JSON.parse(o))},[f]);const ce=E(Qe,{onSuccess:w=>{b.invalidateQueries("posts"),y(`/posts/${w.id}`),h.addToast({type:"success",message:"Post created successfully"})},onError:w=>{h.addToast({type:"error",message:`Error: ${w.message}`})}}),le=E(_e,{onSuccess:()=>{b.invalidateQueries("post"),b.invalidateQueries("posts"),h.addToast({type:"success",message:"Post updated successfully"})},onError:w=>{h.addToast({type:"error",message:`Error: ${w.message}`})}});return t(Oe,{children:a(X,{onClose:()=>r.hide(),children:[e?t("h3",{children:"Edit Post"}):t("h3",{children:"Create Post"}),a(ze,{onSubmit:async w=>{if(w.preventDefault(),!f)return;const{ops:L}=f.getContents();u&&L.length>0&&(r.postId?le.mutate({postId:r.postId,title:u,content:JSON.stringify(L),published:x}):ce.mutate({title:u,content:JSON.stringify(L),published:x})),r.hide()},children:[t(_,{placeholder:"Title",onChange:w=>l(w.target.value),value:u}),t(De,{children:t("div",{ref:m})}),t(Xe,{checked:x,onChange:w=>g(w.target.checked),id:"published"}),t("label",{htmlFor:"published",children:"Published"}),a(Q,{children:[t(z,{onClick:()=>r.hide(),children:"Cancel"}),t(k,{type:"submit",children:"Submit"})]})]})]})})},K=e=>fe(new Date(e),{addSuffix:!0}),Ge=e=>{const o={inlineStyles:!0};return new xe(e,o).convert()},V=s.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,Ke=s(q)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
  opacity: ${({isPublished:e})=>e?1:.5};
`,Z=s.div`
  display: flex;
  justify-content: space-between;
`,Ve=s(ye)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.dark};
  cursor: pointer;
`,Ze=s(be)`
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
`,et=s.h3`
  padding: 0.5rem 0 0.2rem;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,tt=s.p`
  padding: 0.2rem 0 0.5rem;
`,ot=s.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,rt=s.div``,nt=s.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,st=s.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,re=({postData:e,isAuthor:o})=>{const[n,r]=d.exports.useState(!1),[i,c]=d.exports.useState(!1),u=P(),l=Y(),x=K(e.createdAt),g=R(),f=E(b=>qe(b),{onSuccess:()=>{g.invalidateQueries("posts"),l.addToast({type:"success",message:"Post deleted successfully"})},onError:b=>{l.addToast({type:"error",message:`Error: ${b.message}`})}}),m=async()=>{f.mutate({postId:e.id}),r(!1),u("/",{replace:!0})},y=Ge(JSON.parse(e.content));return a(Ke,{isPublished:e.published,children:[n&&t(p,{children:a(X,{onClose:()=>r(!1),children:[t("p",{style:{marginBottom:"1rem"},children:"Are you sure you want to delete the post?"}),a(Q,{children:[t(z,{onClick:()=>r(!1),children:"Cancel"}),t(He,{onClick:m,children:"Delete"})]})]})}),i&&t(G,{initialTitle:e.title,initialContent:e.content,initialPublished:e.published,hide:()=>c(!1),postId:e.id}),e&&a(p,{children:[a(Z,{children:[a(ee,{children:[t(te,{src:e.author.avatar}),a(oe,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),o&&a("div",{children:[t(Ve,{onClick:()=>c(!0)}),t(Ze,{onClick:()=>r(!0)})]})]}),t(et,{children:t(F,{to:`/posts/${e.id}`,children:e.title})}),t(tt,{dangerouslySetInnerHTML:{__html:y}}),t(V,{}),a(ot,{children:[t(rt,{children:t(nt,{children:x})}),a(st,{children:[e._count.comments," comments"]})]})]})]})},it=s.section`
  > div {
    margin-bottom: 1rem;
  }
`,ne=({token:e})=>{const o=$(),n=d.exports.useRef(null),{data:r,error:i,isError:c,isLoading:u,fetchNextPage:l,hasNextPage:x,isFetching:g,isFetchingNextPage:f}=ve(["posts",e],m=>Je(m!=null?m:0,e),{getNextPageParam:m=>m.nextCursor});return d.exports.useEffect(()=>{if(!x)return;const m=new IntersectionObserver(b=>b.forEach(h=>{h.isIntersecting&&l()})),y=n&&n.current;if(!!y)return m.observe(y),()=>{m.unobserve(y)}},[n.current,x]),u?t(p,{children:"Loading..."}):c?t(p,{children:i.message}):a(it,{children:[r==null?void 0:r.pages.map((m,y)=>t(B.Fragment,{children:m.posts.map(b=>{var h;return t(re,{postData:b,isAuthor:((h=o.user)==null?void 0:h.email)===b.author.email},b.id)})},y)),t("button",{onClick:()=>l(),disabled:!x||f,ref:n,children:f?"Loading more...":x?"Load More":"Nothing more to load"})]})},se=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,at=()=>{const[e,o]=d.exports.useState(!1),n=$();return a(p,{children:[a(se,{children:[t("h2",{children:"Recent Posts"}),n.isAuthenticated&&t(k,{onClick:()=>o(!0),children:"Create Post"})]}),e&&t(G,{hide:()=>o(!1)}),t(ne,{})]})},ct=s.form``,N=s(_)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,ie=e=>{const[o,n]=d.exports.useState(""),[r,i]=d.exports.useState(""),[c,u]=d.exports.useState(""),[l,x]=d.exports.useState(""),[g,f]=d.exports.useState(""),m=P(),y=$();return a(ct,{onSubmit:async h=>{h.preventDefault(),e.isLogin?(await y.signIn(g,o),m("/",{replace:!0})):(await y.signUp(g,o,c,l),m("/auth/login"))},children:[t(N,{placeholder:"Email",value:g,onChange:h=>f(h.target.value)}),t(N,{placeholder:"Password",value:o,type:"password",onChange:h=>n(h.target.value)}),!e.isLogin&&a(p,{children:[t(N,{placeholder:"Confirm Password",value:r,type:"password",onChange:h=>i(h.target.value)}),t(N,{placeholder:"First Name",value:c,type:"text",onChange:h=>u(h.target.value)}),t(N,{placeholder:"Last Name",value:l,type:"text",onChange:h=>x(h.target.value)})]}),t(k,{children:e.isLogin?"Login":"Sign up"})]})},lt=()=>a(p,{children:[t("h2",{children:"Login"}),t(ie,{isLogin:!0})]}),dt=async e=>{const o=await v.get(`/posts/${e}/comments`);return console.log(e),console.log("response",o.data),o.data},ut=async({content:e,postId:o})=>(await v.post(`/posts/${o}/comments`,{content:e})).data,ht=s.li`
  margin-top: 1rem;
`,mt=s.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;s.div``;s.div``;s.span``;const pt=s.p`
  padding: 0.5rem 3rem;

`,gt=({commentData:e})=>{const o=K(e.createdAt);return a(ht,{children:[a(Z,{children:[a(ee,{children:[t(te,{src:e.author.avatar}),a(oe,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(mt,{children:o})]}),t(pt,{children:e.content})]})},ae=s.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,ft=s.div`
  margin-top: 1rem;
`,xt=s.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${ae} {
    width: 100%;
  }

  > ${k} {
    display: block;
    margin: 0.5rem 0;
  }
`,yt=({postId:e,hide:o})=>{const n=d.exports.useRef(null),r=R(),i=E(ut,{onSuccess:()=>{r.invalidateQueries("comments")}});return t(ft,{children:a(xt,{onSubmit:async u=>{var l;u.preventDefault(),((l=n.current)==null?void 0:l.value)&&(i.mutate({content:n.current.value,postId:e}),o(),n.current.value)},children:[t(ae,{rows:5,ref:n}),t(k,{children:"Submit"})]})})},bt=s.div`
  margin-top: 2rem;
`,vt=s.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,wt=s(we)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,Ct=s.ul`
  list-style: none;
`,kt=({postId:e})=>{const[o,n]=d.exports.useState(!1),{data:r,isLoading:i,isError:c,error:u}=J(["comments",e],()=>dt(e));return i?t(p,{children:"Loading..."}):c?t(p,{children:u.message}):a(bt,{children:[a(vt,{children:[t("h3",{children:"Comments"}),t(wt,{onClick:()=>n(l=>!l)})]}),o&&t(yt,{postId:e,hide:()=>n(!1)}),a(Ct,{children:[r==null?void 0:r.map(l=>t(gt,{commentData:l},l.id)),t(V,{})]})]})},$t=()=>{var l;const e=P(),{postId:o}=Ce(),n=$(),{data:r,isLoading:i,isError:c,error:u}=J(["post",o],()=>Me(+o));return i?t(p,{children:"Loading..."}):c?t(p,{children:u.message}):!r&&!i?t(p,{children:"No post found"}):a(p,{children:[t(ke,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>e(-1)}),r&&a(p,{children:[t(re,{postData:r,isAuthor:((l=n.user)==null?void 0:l.email)===r.author.email}),t(kt,{postId:r.id})]})]})},Ft=()=>{const e=$();return a(p,{children:[t(se,{children:t("h2",{children:"Profile"})}),t("h2",{children:"My Posts"}),t(ne,{token:e.user.accessToken})]})},St=()=>a(p,{children:[t("h2",{children:"Signup"}),t(ie,{isLogin:!1})]}),Nt=s.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,Tt=()=>{const e=$();return t(Nt,{children:a($e,{children:[t(C,{path:"/",element:t(at,{})}),e.isAuthenticated&&t(C,{path:"profile",element:t(Ft,{})}),!e.isAuthenticated&&a(C,{path:"auth",children:[t(C,{path:"login",element:t(lt,{})}),t(C,{path:"signup",element:t(St,{})})]}),t(C,{path:"posts/:postId",element:t($t,{})}),t(C,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},Et=s.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,Pt=()=>a(Et,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),Lt=s.div`
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
`,It=s.h1``,At=s(Fe)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Bt=s(Se)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Rt=s.nav`
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
`,Ot=s.ul`
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
`,T=s.li`
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
`,zt=()=>{const[e,o]=d.exports.useState(!1),n=$(),r=()=>{o(c=>!c)},i=()=>{n.signOut()};return a(Lt,{children:[t(It,{children:"App"}),!e&&t(At,{onClick:r}),e&&t(Bt,{onClick:r}),e&&t(D,{onClick:r}),t(Rt,{show:e,children:a(Ot,{children:[t(T,{onClick:r,children:t(F,{to:"/",children:"Home"})}),n.isAuthenticated&&t(T,{onClick:r,children:t(F,{to:"/profile",children:"Profile"})}),!n.isAuthenticated&&a(p,{children:[t(T,{onClick:r,children:t(F,{to:"/auth/login",children:t(k,{children:"Sign in"})})}),t(T,{onClick:r,children:t(F,{to:"/auth/signup",children:t(z,{children:"Sign up"})})})]}),n.isAuthenticated&&t(T,{children:t(F,{to:"/",children:t(k,{onClick:i,children:"Sign out"})})})]})})]})},Dt=s.header``,Ht=()=>t(Dt,{children:t(zt,{})}),Ut=s.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,jt=({children:e})=>t(Ut,{children:e});function Jt(){return a(jt,{children:[t(Ht,{}),t(Tt,{}),t(Pt,{})]})}const Mt=new Ne;I.render(t(B.StrictMode,{children:a(Te,{theme:Ie,children:[t(Ae,{}),t(Ee,{client:Mt,children:t(Re,{children:t(Ye,{children:t(Pe,{children:t(Jt,{})})})})})]})}),document.getElementById("root"));
