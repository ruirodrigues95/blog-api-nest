var H=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,o)=>{var r={};for(var n in e)me.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&H)for(var n of H(e))o.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r};import{W as ge,a as fe,j as A,R,r as u,s,U as xe,b as I,u as L,c as B,d as E,l as be,f as ye,E as ve,D as we,L as $,e as Ce,C as ke,g as _,h as $e,A as Fe,i as Se,k,M as Ne,m as Pe,Q as Te,F as Ee,n as Le,B as Ie}from"./vendor.9bee2e8b.js";const Ae=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}};Ae();const Re={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var Be=ge`
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
`;class Oe{getLocalRefreshToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.refreshToken}getLocalAccessToken(){const o=JSON.parse(localStorage.getItem("user"));return o==null?void 0:o.accessToken}updateLocalAccessToken(o){let r=JSON.parse(localStorage.getItem("user"));r.accessToken=o,localStorage.setItem("user",JSON.stringify(r))}updateLocalRefreshToken(o){let r=JSON.parse(localStorage.getItem("user"));r.refreshToken=o,localStorage.setItem("user",JSON.stringify(r))}updateLocalTokens(o,r){let n=JSON.parse(localStorage.getItem("user"));n.accessToken=o,n.refreshToken=r,localStorage.setItem("user",JSON.stringify(n))}getUser(){return JSON.parse(localStorage.getItem("user"))}setUser(o){localStorage.setItem("user",JSON.stringify(o))}removeUser(){localStorage.removeItem("user")}}var N=new Oe;const y=fe.create({baseURL:"/"});y.interceptors.request.use(e=>{const o=N.getLocalAccessToken();return o&&(e.headers.Authorization=`Bearer ${o}`),e},e=>Promise.reject(e));y.interceptors.response.use(e=>e,async e=>{const o=e.config;if(o.url!=="/auth/login"&&e.response&&e.response.status===401&&!o._retry){o._retry=!0;try{const r=await y.post("/auth/refreshtoken",{refreshToken:N.getLocalRefreshToken()}),{access_token:n,refresh_token:i}=r.data;return N.updateLocalTokens(n,i),y(o)}catch(r){return Promise.reject(r)}}return Promise.reject(e)});const t=A.exports.jsx,a=A.exports.jsxs,g=A.exports.Fragment,q=R.createContext({}),ze=({children:e})=>{const[o,r]=u.exports.useState(null);u.exports.useEffect(()=>{const l=N.getUser();l&&r(l)},[]);const n=async(l,p)=>{const f=await y.post("/auth/login",{email:l,password:p}),x={email:f.data.user.email,firstName:f.data.user.firstName,lastName:f.data.user.lastName,avatar:f.data.user.avatar,accessToken:f.data.access_token,refreshToken:f.data.refresh_token};r(x),N.setUser(x)},i=async(l,p,f,x,m)=>{const b=await y.post("/users",{email:l,password:p,firstName:f,lastName:x,avatar:m});return console.log(b),b.data},c=()=>{r(null),N.removeUser()},d={user:o,isAuthenticated:Boolean(o),signIn:n,signUp:i,signOut:c};return t(q.Provider,{value:d,children:e})},S=()=>u.exports.useContext(q),Ue=s.div``,je=s.form`
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
`,Me=s.div`
  height: 300px;
`,X=s.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,W=s.input`
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
`,F=s(O)`
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
`,De=s(O)`
  background-color: ${({theme:e})=>e.colors.secondary.main};
  border: 1px solid ${({theme:e})=>e.colors.secondary.dark};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary.dark};
  }
`,Y=s.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,He=xe`
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
`,Je=s(Y)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  animation: ${He} 0.2s ease-out forwards;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80vw;
    top: 0;
    margin: auto;
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 60vw;
  }
`,Q=document.getElementById("overlay"),G=({children:e,onClose:o})=>a(g,{children:[I.createPortal(t(U,{onClick:o}),Q),I.createPortal(t(Je,{children:e}),Q)]}),Qe=async({pageParam:e=0},o)=>(console.log(e),o?(console.log("fetching user posts"),console.log(o),(await y.get(`/posts/my-posts?page=${e}`)).data):(console.log("fetching all posts"),(await y.get(`/posts?page=${e}`)).data)),_e=async e=>(await y.get(`/posts/${e}`)).data,qe=async({title:e,content:o,contentDelta:r,published:n})=>(await y.post("/posts",{title:e,content:o,contentDelta:r,published:n})).data,Xe=async e=>{const{postId:o,title:r,content:n,contentDelta:i,published:c}=e,d=await y.put(`/posts/${o}`,{title:r,content:n,contentDelta:i,published:c});return console.log(d.data),d.data},We=async({postId:e})=>(await y.delete(`/posts/${e}`)).data,Ye=s.input.attrs({type:"checkbox"})``,Ge=s.div`
  position: fixed;
  background-color: ${e=>e.type==="error"?"red":"lightgreen"};
  bottom: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: ${({theme:e})=>e.borderRadius.card};
  color: white;
  box-shadow: ${({theme:e})=>e.shadow.base};
`,K=u.exports.createContext({}),Ke=({children:e})=>{const[o,r]=u.exports.useState(null);u.exports.useEffect(()=>{if(o){const i=setTimeout(()=>r(null),3e3);return()=>clearTimeout(i)}},[o]);const n=i=>{r(i)};return a(K.Provider,{value:{addToast:n},children:[e,o&&t(Ge,{type:o.type,children:o.message})]})},V=()=>u.exports.useContext(K),Z=i=>{var c=i,{initialTitle:e,initialContent:o,initialPublished:r}=c,n=J(c,["initialTitle","initialContent","initialPublished"]);const[d,l]=u.exports.useState(e||""),[p,f]=u.exports.useState(o?JSON.parse(o):""),[x,m]=u.exports.useState(r!=null?r:!0),b=L(),v=u.exports.useRef(null),h=B(),C=V(),ue=E(qe,{onSuccess:w=>{h.invalidateQueries("posts"),b(`/posts/${w.id}`),C.addToast({type:"success",message:"Post created successfully"})},onError:w=>{C.addToast({type:"error",message:`Error: ${w.message}`})}}),he=E(Xe,{onSuccess:()=>{h.invalidateQueries("post"),h.invalidateQueries("posts"),C.addToast({type:"success",message:"Post updated successfully"})},onError:w=>{C.addToast({type:"error",message:`Error: ${w.message}`})}});return t(Ue,{children:a(G,{onClose:()=>n.hide(),children:[e?t("h3",{children:"Edit Post"}):t("h3",{children:"Create Post"}),a(je,{onSubmit:async w=>{var M,D;w.preventDefault();const j=JSON.stringify((D=(M=v.current)==null?void 0:M.editor)==null?void 0:D.getContents());d&&p&&(n.postId?he.mutate({postId:n.postId,title:d,content:p,published:x,contentDelta:j}):ue.mutate({title:d,content:p,published:x,contentDelta:j})),n.hide()},children:[t(W,{placeholder:"Title",onChange:w=>l(w.target.value),value:d}),t(Me,{children:t(be,{theme:"snow",style:{height:"85%"},value:p,onChange:f,ref:v,modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]}})}),t(Ye,{checked:x,onChange:w=>m(w.target.checked),id:"published"}),t("label",{htmlFor:"published",children:"Published"}),a(X,{children:[t(z,{onClick:()=>n.hide(),children:"Cancel"}),t(F,{type:"submit",children:"Submit"})]})]})]})})},ee=e=>ye(new Date(e),{addSuffix:!0}),te=s.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,Ve=s(Y)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
  opacity: ${({isPublished:e})=>e?1:.5};
`,oe=s.div`
  display: flex;
  justify-content: space-between;
`,Ze=s(ve)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.dark};
  cursor: pointer;
`,et=s(we)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.secondary.dark};
  cursor: pointer;
`,re=s.div`
  display: flex;
  align-items: center;
`,ne=s.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,se=s.div`
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
`,tt=s.h3`
  padding: 0.5rem 0 0.2rem;
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,ot=s.p`
  margin: 0.2rem 0 0.5rem;
  line-height: 1.3rem;
`,rt=s.div`
  > a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.primary.main};
  }
`,nt=s.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,st=s.div``,it=s.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,at=s.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,ie=({postData:e,isAuthor:o,isPreview:r})=>{const[n,i]=u.exports.useState(!1),[c,d]=u.exports.useState(!1),l=L(),p=V(),f=ee(e.createdAt);let x=e.content.substring(0,e.content.indexOf("</p>")+4),m=!!(e.content.length>x.length&&r);const b=B(),v=E(C=>We(C),{onSuccess:()=>{b.invalidateQueries("posts"),p.addToast({type:"success",message:"Post deleted successfully"})},onError:C=>{p.addToast({type:"error",message:`Error: ${C.message}`})}}),h=async()=>{v.mutate({postId:e.id}),i(!1),l("/",{replace:!0})};return a(Ve,{isPublished:e.published,children:[n&&t(g,{children:a(G,{onClose:()=>i(!1),children:[t("p",{style:{marginBottom:"1rem"},children:"Are you sure you want to delete the post?"}),a(X,{children:[t(z,{onClick:()=>i(!1),children:"Cancel"}),t(De,{onClick:h,children:"Delete"})]})]})}),c&&t(Z,{initialTitle:e.title,initialContent:e.contentDelta,initialPublished:e.published,hide:()=>d(!1),postId:e.id}),e&&a(g,{children:[a(oe,{children:[a(re,{children:[t(ne,{src:e.author.avatar}),a(se,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),o&&a("div",{children:[t(Ze,{onClick:()=>d(!0)}),t(et,{onClick:()=>i(!0)})]})]}),t(tt,{children:t($,{to:`/posts/${e.id}`,children:e.title})}),t(ot,{dangerouslySetInnerHTML:{__html:r?x:e.content}}),m&&t(rt,{children:t($,{to:`/posts/${e.id}`,children:"Read more"})}),t(te,{}),a(nt,{children:[t(st,{children:t(it,{children:f})}),a(at,{children:[e._count.comments," comments"]})]})]})]})},ct=s.section`
  > div {
    margin-bottom: 1rem;
  }
`,ae=({token:e})=>{const o=S(),r=u.exports.useRef(null),{data:n,error:i,isError:c,isLoading:d,fetchNextPage:l,hasNextPage:p,isFetching:f,isFetchingNextPage:x}=Ce(["posts",e],m=>Qe(m!=null?m:0,e),{getNextPageParam:m=>m.nextCursor});return u.exports.useEffect(()=>{if(!p)return;const m=new IntersectionObserver(v=>v.forEach(h=>{h.isIntersecting&&l()})),b=r&&r.current;if(!!b)return m.observe(b),()=>{m.unobserve(b)}},[r.current,p]),d?t(g,{children:"Loading..."}):c?t(g,{children:i.message}):a(ct,{children:[n==null?void 0:n.pages.map((m,b)=>t(R.Fragment,{children:m.posts.map(v=>{var h;return t(ie,{postData:v,isAuthor:((h=o.user)==null?void 0:h.email)===v.author.email,isPreview:!0},v.id)})},b)),t("button",{onClick:()=>l(),disabled:!p||x,ref:r,children:x?"Loading more...":p?"Load More":"Nothing more to load"})]})},ce=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,lt=()=>{const[e,o]=u.exports.useState(!1),r=S();return a(g,{children:[a(ce,{children:[t("h2",{children:"Recent Posts"}),r.isAuthenticated&&t(F,{onClick:()=>o(!0),children:"Create Post"})]}),e&&t(Z,{hide:()=>o(!1)}),t(ae,{})]})},dt=s.form``,P=s(W)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,le=e=>{const[o,r]=u.exports.useState(""),[n,i]=u.exports.useState(""),[c,d]=u.exports.useState(""),[l,p]=u.exports.useState(""),[f,x]=u.exports.useState(""),m=L(),b=S();return a(dt,{onSubmit:async h=>{h.preventDefault(),e.isLogin?(await b.signIn(f,o),m("/",{replace:!0})):(await b.signUp(f,o,c,l),m("/auth/login"))},children:[t(P,{placeholder:"Email",value:f,onChange:h=>x(h.target.value)}),t(P,{placeholder:"Password",value:o,type:"password",onChange:h=>r(h.target.value)}),!e.isLogin&&a(g,{children:[t(P,{placeholder:"Confirm Password",value:n,type:"password",onChange:h=>i(h.target.value)}),t(P,{placeholder:"First Name",value:c,type:"text",onChange:h=>d(h.target.value)}),t(P,{placeholder:"Last Name",value:l,type:"text",onChange:h=>p(h.target.value)})]}),t(F,{children:e.isLogin?"Login":"Sign up"})]})},ut=()=>a(g,{children:[t("h2",{children:"Login"}),t(le,{isLogin:!0})]}),ht=async e=>{const o=await y.get(`/posts/${e}/comments`);return console.log(e),console.log("response",o.data),o.data},mt=async({content:e,postId:o})=>(await y.post(`/posts/${o}/comments`,{content:e})).data,pt=s.li`
  margin-top: 1rem;
`,gt=s.time`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;s.div``;s.div``;s.span``;const ft=s.p`
  padding: 0.5rem 3rem;

`,xt=({commentData:e})=>{const o=ee(e.createdAt);return a(pt,{children:[a(oe,{children:[a(re,{children:[t(ne,{src:e.author.avatar}),a(se,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),t(gt,{children:o})]}),t(ft,{children:e.content})]})},de=s.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,bt=s.div`
  margin-top: 1rem;
`,yt=s.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  > ${de} {
    width: 100%;
  }

  > ${F} {
    display: block;
    margin: 0.5rem 0;
  }
`,vt=({postId:e,hide:o})=>{const r=u.exports.useRef(null),n=B(),i=E(mt,{onSuccess:()=>{n.invalidateQueries("comments")}});return t(bt,{children:a(yt,{onSubmit:async d=>{var l;d.preventDefault(),((l=r.current)==null?void 0:l.value)&&(i.mutate({content:r.current.value,postId:e}),o(),r.current.value)},children:[t(de,{rows:5,ref:r}),t(F,{children:"Submit"})]})})},wt=s.div`
  margin-top: 2rem;
`,Ct=s.div`
  > h3 {
    display: inline;
    margin-right: 1rem;
  }
`,kt=s(ke)`
  width: ${({theme:e})=>e.sizes.icons.md};
  color: ${({theme:e})=>e.colors.primary.light};
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.primary.dark};
  }
`,$t=s.ul`
  list-style: none;
`,Ft=({postId:e})=>{const[o,r]=u.exports.useState(!1),{data:n,isLoading:i,isError:c,error:d}=_(["comments",e],()=>ht(e));return i?t(g,{children:"Loading..."}):c?t(g,{children:d.message}):a(wt,{children:[a(Ct,{children:[t("h3",{children:"Comments"}),t(kt,{onClick:()=>r(l=>!l)})]}),o&&t(vt,{postId:e,hide:()=>r(!1)}),a($t,{children:[n==null?void 0:n.map(l=>t(xt,{commentData:l},l.id)),t(te,{})]})]})},St=()=>{var l;const e=L(),{postId:o}=$e(),r=S(),{data:n,isLoading:i,isError:c,error:d}=_(["post",o],()=>_e(+o));return i?t(g,{children:"Loading..."}):c?t(g,{children:d.message}):!n&&!i?t(g,{children:"No post found"}):a(g,{children:[t(Fe,{style:{width:"2rem",cursor:"pointer",marginBottom:"1rem"},onClick:()=>e(-1)}),n&&a(g,{children:[t(ie,{postData:n,isAuthor:((l=r.user)==null?void 0:l.email)===n.author.email,isPreview:!1}),t(Ft,{postId:n.id})]})]})},Nt=()=>{const e=S();return a(g,{children:[t(ce,{children:t("h2",{children:"Profile"})}),t("h2",{children:"My Posts"}),t(ae,{token:e.user.accessToken})]})},Pt=()=>a(g,{children:[t("h2",{children:"Signup"}),t(le,{isLogin:!1})]}),Tt=s.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,Et=()=>{const e=S();return t(Tt,{children:a(Se,{children:[t(k,{path:"/",element:t(lt,{})}),e.isAuthenticated&&t(k,{path:"profile",element:t(Nt,{})}),!e.isAuthenticated&&a(k,{path:"auth",children:[t(k,{path:"login",element:t(ut,{})}),t(k,{path:"signup",element:t(Pt,{})})]}),t(k,{path:"posts/:postId",element:t(St,{})}),t(k,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},Lt=s.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,It=()=>a(Lt,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),At=s.div`
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
`,Rt=s.h1``,Bt=s(Ne)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Ot=s(Pe)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,zt=s.nav`
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
`,Ut=s.ul`
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
`,jt=()=>{const[e,o]=u.exports.useState(!1),r=S(),n=()=>{o(c=>!c)},i=()=>{r.signOut()};return a(At,{children:[t(Rt,{children:"App"}),!e&&t(Bt,{onClick:n}),e&&t(Ot,{onClick:n}),e&&t(U,{onClick:n}),t(zt,{show:e,children:a(Ut,{children:[t(T,{onClick:n,children:t($,{to:"/",children:"Home"})}),r.isAuthenticated&&t(T,{onClick:n,children:t($,{to:"/profile",children:"Profile"})}),!r.isAuthenticated&&a(g,{children:[t(T,{onClick:n,children:t($,{to:"/auth/login",children:t(F,{children:"Sign in"})})}),t(T,{onClick:n,children:t($,{to:"/auth/signup",children:t(z,{children:"Sign up"})})})]}),r.isAuthenticated&&t(T,{children:t($,{to:"/",children:t(F,{onClick:i,children:"Sign out"})})})]})})]})},Mt=s.header``,Dt=()=>t(Mt,{children:t(jt,{})}),Ht=s.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,Jt=({children:e})=>t(Ht,{children:e});function Qt(){return a(Jt,{children:[t(Dt,{}),t(Et,{}),t(It,{})]})}const _t=new Te;I.render(t(R.StrictMode,{children:a(Ee,{theme:Re,children:[t(Be,{}),t(Le,{client:_t,children:t(ze,{children:t(Ke,{children:t(Ie,{children:t(Qt,{})})})})})]})}),document.getElementById("root"));
