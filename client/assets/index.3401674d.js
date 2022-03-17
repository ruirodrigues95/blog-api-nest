import{W as T,a as Q,j as S,R as L,r as u,s as r,U as q,u as X,b as J,f as W,L as b,c as Y,d as _,e as G,g as f,M as K,C as V,Q as Z,h as ee,F as te,i as re,B as oe}from"./vendor.aa1a1a7a.js";const ne=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};ne();const ie={colors:{primary:{light:"#3F95FF",main:"#1C6DD0",dark:"#08458F"},secondary:{light:"#FCA5A5",main:"#EF4444",dark:"#B91C1C"},warning:{light:"#FFED8E",main:"#EAC608",dark:"#CB9200"},info:{light:"#BFDBFE",main:"#60A5FA",dark:"#2563EB"},success:{light:"#86EFAC",main:"#22C55E",dark:"#15803D"},error:{light:"#FECACA",main:"#F87171",dark:"#DC2626"},text:{primary:"#202020",secondary:"#6B7280",deactivated:"#D1D5DB",altPrimary:"#FFFFFF"},button:{active:"#1C6DD0",hover:"#08458F",selected:"#EEF6FF",deactivated:"#E0E0E0",deactivatedBackground:"#FFFFFF"},background:{default:"#F3F4F6",alt:"#FFFFFF"},overlay:"rgba(62, 62, 62, 0.25)",white:"#FFFFFF",divider:"#E5E7EB"},borderRadius:{button:"40px",card:"6px",input:"6px"},shadow:{base:"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",medium:"0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);",large:"0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);",inner:"inset 0px 2px 4px rgba(0, 0, 0, 0.06);"},sizes:{icons:{sm:"16px",md:"24px",lg:"32px"}},breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}};var se=T`
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
`;const y=Q.create({baseURL:"/"}),t=S.exports.jsx,o=S.exports.jsxs,p=S.exports.Fragment,N=L.createContext({}),ae=({children:e})=>{const[i,s]=u.exports.useState(null),[c,n]=u.exports.useState(!0);u.exports.useEffect(()=>{const d=localStorage.getItem("user");if(d){const x=JSON.parse(d);s(x),y.defaults.headers.common.Authorization=`Bearer ${x.token}`}n(!1)},[]);const a=async(d,x)=>{n(!0);const h=await y.post("/auth/login",{email:d,password:x}),k={email:h.data.user.email,firstName:h.data.user.firstName,lastName:h.data.user.lastName,avatar:h.data.user.avatar,token:h.data.access_token};s(k),y.defaults.headers.common.Authorization=`Bearer ${h.data.access_token}`,localStorage.setItem("user",JSON.stringify(k)),n(!1)},l=async(d,x)=>{const h=await y.post("/users",{email:d,password:x});return console.log(h),h.data},g=()=>{s(null),localStorage.removeItem("user")},F={user:i,isAuthenticated:Boolean(i),signIn:a,signUp:l,signOut:g};return c?t(p,{}):t(N.Provider,{value:F,children:e})},v=()=>u.exports.useContext(N),ce=r.div``,de=r.form`
  > input,
  > textarea {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
  }
`,le=r.div`
  display: flex;
  gap: 1rem;

  > button {
    flex: 1;
  }
`,P=r.div`
  background-color: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.shadow.medium};
  border-radius: ${({theme:e})=>e.borderRadius.card};
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,ue=q`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;r.div`
  width: 100vw;
`;const he=r(P)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  animation: ${ue} 0.2s ease-out forwards;
`,A=r.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({theme:e})=>e.colors.overlay};
  z-index: 49;
`,E=r.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,me=r.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({theme:e})=>e.colors.primary.dark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,B=r.button`
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.colors.primary.main};
  padding: 1rem 2rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  min-width: 8rem;
`,$=r(B)`
  background-color: ${({theme:e})=>e.colors.button.active};
  color: ${({theme:e})=>e.colors.white};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.hover};
  }
`,z=r(B)`
  background-color: ${({theme:e})=>e.colors.background.alt};
  color: ${({theme:e})=>e.colors.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.active};
    color: ${({theme:e})=>e.colors.white};
  }
`,pe=async()=>(await y.get("/posts")).data,ge=async({title:e,content:i,email:s})=>(await y.post("/posts",{title:e,content:i,email:s})).data,xe=e=>{const[i,s]=u.exports.useState(""),[c,n]=u.exports.useState(""),a=v(),l=X(),g=J(ge,{onSuccess:()=>{l.invalidateQueries("posts")}});return o(ce,{children:[o(he,{children:[t("h3",{children:"Create Post"}),o(de,{onSubmit:async d=>{d.preventDefault(),a.user&&g.mutate({title:i,content:c,email:a.user.email}),e.hide()},children:[t(E,{placeholder:"Title",onChange:d=>s(d.target.value)}),t(me,{placeholder:"Content",rows:5,onChange:d=>n(d.target.value)}),o(le,{children:[t(z,{onClick:e.hide,children:"Cancel"}),t($,{type:"submit",children:"Submit"})]})]})]}),t(A,{onClick:e.hide})]})},R=r.hr`
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.divider};
  margin: 0.3rem 0;
`,fe=r(P)`
  padding-bottom: 0.5rem;
  color: ${({theme:e})=>e.colors.text.primary};
`,I=r.div`
  display: flex;
  justify-content: space-between;
`,j=r.div`
  display: flex;
  align-items: center;
`,D=r.div`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${({theme:e})=>e.colors.primary.light};
`,O=r.div`
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
`,be=r.h3`
  padding: 0.5rem 0 0.2rem;
   > a {
     text-decoration: none;
     color: ${({theme:e})=>e.colors.text.primary};
   }
`,ye=r.p`
  padding: 0.2rem 0 0.5rem;
`,ve=r.footer`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`,Ce=r.div``,we=r.time`
  color: ${({theme:e})=>e.colors.text.secondary};
`,$e=r.div`
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
`,H=({postData:e,isAuthor:i})=>{const s=W(new Date(e.createdAt),{addSuffix:!0});return o(fe,{children:[o(I,{children:[o(j,{children:[t(D,{src:e.author.avatar}),o(O,{children:[t("span",{children:e.author.firstName+" "+e.author.lastName}),t("span",{children:e.author.email})]})]}),i&&t("button",{children:"Edit"})]}),t(be,{children:t(b,{to:`/posts/${e.id}`,state:{postData:e,isAuthor:i},children:e.title})}),t(ye,{children:e.content}),t(R,{}),o(ve,{children:[t(Ce,{children:t(we,{children:s})}),o($e,{children:[e.comments.length," comments"]})]})]})},Fe=r.section`
  > div {
    margin-bottom: 1rem;
  }
`,ke=()=>{const e=v(),{data:i,isLoading:s,isError:c,error:n}=Y("posts",pe);if(s)return t(p,{children:"Loading..."});if(c)return t(p,{children:n.message});const a=i.slice().reverse();return t(Fe,{children:a==null?void 0:a.map(l=>{var g;return t(H,{postData:l,isAuthor:((g=e.user)==null?void 0:g.email)===l.author.email},l.id)})})},U=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 4rem;
`,Se=()=>{const[e,i]=u.exports.useState(!1),s=v(),c=()=>{i(n=>!n)};return o(p,{children:[o(U,{children:[t("h2",{children:"Recent Posts"}),s.isAuthenticated&&t($,{onClick:c,children:"Create Post"})]}),e&&t(xe,{hide:c}),t(ke,{})]})},Ae=r.form``,C=r(E)`
  display: block;
  margin: 1rem 0;
  width: 60%;
  color: ${({theme:e})=>e.colors.text.primary};
`,M=e=>{const[i,s]=u.exports.useState(""),[c,n]=u.exports.useState(""),[a,l]=u.exports.useState(""),[g,F]=u.exports.useState(""),[d,x]=u.exports.useState(""),h=v();return o(Ae,{onSubmit:async m=>{m.preventDefault(),await h.signIn(d,i)},children:[t(C,{placeholder:"Email",value:d,onChange:m=>x(m.target.value)}),t(C,{placeholder:"Password",value:i,type:"password",onChange:m=>s(m.target.value)}),!e.isLogin&&o(p,{children:[t(C,{placeholder:"Confirm Password",value:c,type:"password",onChange:m=>n(m.target.value)}),t(C,{placeholder:"First Name",value:a,type:"text",onChange:m=>l(m.target.value)}),t(C,{placeholder:"Last Name",value:g,type:"text",onChange:m=>F(m.target.value)})]}),t($,{children:e.isLogin?"Login":"Sign up"})]})},Le=()=>o(p,{children:[t("h2",{children:"Login"}),t(M,{isLogin:!0})]}),Ne=r.li`
  margin-top: 1rem;
`,Pe=r.time`
  font-size: 0.8rem;
  padding-right: 3rem;
  color: ${({theme:e})=>e.colors.text.secondary};
`;r.div``;r.div``;r.span``;const Ee=r.p`
  padding: 0.5rem 3rem;

`,Be=({commentData:e})=>o(Ne,{children:[o(I,{children:[o(j,{children:[t(D,{src:e.author.avatar}),o(O,{children:[t("span",{children:e.author.email}),t("span",{children:e.author.firstName+" "+e.author.lastName})]})]}),t(Pe,{children:e.createdAt})]}),t(Ee,{children:e.content})]}),ze=r.div`
  margin-top: 2rem;
`,Re=r.ul`
  list-style: none;
`,Ie=({comments:e})=>o(ze,{children:[t("h3",{children:"Comments"}),o(Re,{children:[e.map(i=>t(Be,{commentData:i},i.id)),t(R,{})]})]}),je=()=>{const e=_(),{postData:i,isAuthor:s}=e.state;return o(p,{children:[t(H,{postData:i,isAuthor:s}),t(Ie,{comments:i.comments})]})},De=()=>t(p,{children:t(U,{children:t("h2",{children:"Profile"})})}),Oe=()=>o(p,{children:[t("h2",{children:"Signup"}),t(M,{isLogin:!1})]}),He=r.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem;
`,Ue=()=>{const e=v();return t(He,{children:o(G,{children:[t(f,{path:"/",element:t(Se,{})}),e.isAuthenticated&&t(f,{path:"profile",element:t(De,{})}),!e.isAuthenticated&&o(f,{path:"auth",children:[t(f,{path:"login",element:t(Le,{})}),t(f,{path:"signup",element:t(Oe,{})})]}),t(f,{path:"posts/:postId",element:t(je,{})}),t(f,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})},Me=r.footer`
  text-align: center;
  background-color: ${({theme:e})=>e.colors.background.alt};
  padding: 1rem;
  font-size: 0.8rem;
`,Te=()=>o(Me,{children:["Developed by ",t("strong",{children:"Rui Rodrigues"})]}),Qe=r.div`
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
`,qe=r.h1``,Xe=r(K)`
  width: 2.5rem;
  z-index: 99;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Je=r(V)`
  width: 2.5rem;
  z-index: 99;
  color: ${({theme:e})=>e.colors.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,We=r.nav`
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
`,Ye=r.ul`
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
`,w=r.li`
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
`,_e=()=>{const[e,i]=u.exports.useState(!1),s=v(),c=()=>{i(a=>!a)},n=()=>{s.signOut()};return o(Qe,{children:[t(qe,{children:"App"}),!e&&t(Xe,{onClick:c}),e&&t(Je,{onClick:c}),e&&t(A,{onClick:c}),t(We,{show:e,children:o(Ye,{children:[t(w,{onClick:c,children:t(b,{to:"/",children:"Home"})}),s.isAuthenticated&&t(w,{onClick:c,children:t(b,{to:"/profile",children:"Profile"})}),!s.isAuthenticated&&o(p,{children:[t(w,{onClick:c,children:t(b,{to:"/auth/login",children:t($,{children:"Sign in"})})}),t(w,{onClick:c,children:t(b,{to:"/auth/signup",children:t(z,{children:"Sign up"})})})]}),s.isAuthenticated&&t(w,{children:t(b,{to:"/",children:t($,{onClick:n,children:"Sign out"})})})]})})]})},Ge=r.header``,Ke=()=>t(Ge,{children:t(_e,{})}),Ve=r.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({theme:e})=>e.colors.background.default};
`,Ze=({children:e})=>t(Ve,{children:e});function et(){return o(Ze,{children:[t(Ke,{}),t(Ue,{}),t(Te,{})]})}const tt=new Z;ee.render(t(L.StrictMode,{children:o(te,{theme:ie,children:[t(se,{}),t(re,{client:tt,children:t(ae,{children:t(oe,{children:t(et,{})})})})]})}),document.getElementById("root"));
