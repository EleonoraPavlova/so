"use strict";(self.webpackChunksocial_net=self.webpackChunksocial_net||[]).push([[87],{5040:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});var o=s(8094),r=s(414),l=s(3373);const a="userForm_container__7t0nP",n="userForm_photoBox__XX21x",i="userForm_btnInput__6wKx9",c="userForm_input__Agzt4",d="userForm_meId__GmSw1";var u=s(6746),m=s(8821),p=s(5917),f=s(8058);var x=s(2189),h=s(8014),_=s(5712),g=s(5678);const j=(0,o.memo)((e=>{let{editMode:t,saveForm:s}=e;return(0,g.jsx)(u.A,{sx:{height:"100%",alignSelf:"baseline"},children:(0,g.jsx)(x.A,{color:"success","aria-label":"change text",onClick:e=>{e.stopPropagation(),s()},children:t?(0,g.jsx)(_.A,{fontSize:"small"}):(0,g.jsx)(h.A,{fontSize:"small"})})})})),b="UserFormList_user__box__jdgni",k="UserFormList_user__item__u64TL",S="UserFormList_user__name__xANjZ",F="UserFormList_user__social__xH-US";var A=s(3678),C=s(4748),v=s(8298),N=s(2321),P=s(7383),U=s(5051);const M=(0,o.memo)((e=>{let{profileUserState:t,editMode:s,formRef:r,setProfileUserState:l,setEditMode:a,saveForm:n}=e;const{errorLocal:i,formItems:c,collectionOfForm:d,collectionOfFormCheckbox:m,collectionOfFormSocial:p}=function(e,t){const[s,r]=(0,o.useState)({});return{errorLocal:s,formItems:[{label:"Name",prop:"fullName",title:e&&e.fullName?e.fullName[0].toUpperCase()+e.fullName.slice(1):""},{label:"Status",prop:"status",title:e.status},{label:"About me",prop:"aboutMe",title:e.aboutMe},{label:"Skills",prop:"lookingForAJobDescription",title:e.lookingForAJobDescription}],collectionOfForm:(e,s)=>{s.length>=300?r((t=>({...t,[e]:"More than 300 symbols"}))):(r((t=>({...t,[e]:void 0}))),t((t=>({...t,[e]:s}))))},collectionOfFormCheckbox:e=>{t((t=>({...t,lookingForAJob:e.currentTarget.checked})))},collectionOfFormSocial:e=>{t((t=>({...t,contacts:{...t.contacts,...e}})))}}}(t,l);return(0,g.jsxs)(u.A,{className:b,ref:r,children:[(0,g.jsxs)(A.A,{sx:{width:"118%"},children:[c.map((e=>(0,g.jsxs)(C.Ay,{className:k,children:[(0,g.jsxs)(v.A,{sx:{fontWeight:"bold",padding:"10px 9px",lineHeight:"0px"},children:[e.label,":"]}),(0,g.jsx)(P.l,{error:i&&void 0!==i[e.prop],helperText:i&&i[e.prop],title:e.title,label:e.label,additionalClass:S,editMode:s,setEditMode:a,onChange:t=>d(e.prop,t),saveForm:n})]},e.label))),(0,g.jsxs)(C.Ay,{className:k,children:[(0,g.jsx)(v.A,{sx:{fontWeight:"bold",padding:"10px 9px"},children:"Job Seeker:"}),(0,g.jsx)(N.A,{name:"lookingForAJob",color:"success",checked:t.lookingForAJob,disabled:!s,onChange:e=>m(e),sx:{width:"fit-content",padding:"0"}})]})]}),(0,g.jsx)(U.f,{editMode:s,additionalClass:F,saveForm:n,setEditMode:a,collectionOfFormSocial:p})]})}));var E=s(3043),I=s(6092),w=s(3494);const L=(0,o.memo)((e=>{let{profileUserState:t,setProfileUserState:s}=e;const l=(0,r.d4)(E.$),{editMode:x,formRef:h,filePicker:_,setEditMode:b,updatePhotoUser:k,saveForm:S,handlePick:F}=function(e,t){const s=(0,r.d4)(p.tB),l=(0,o.useRef)(null),a=(0,o.useRef)(null),[n,i]=(0,o.useState)(!1),{updateProfileUserTC:c,updateProfileUserStatusTC:d,updateProfileUserPhotoTC:u}=(0,f.d)(p.HS),m=(0,o.useCallback)((async()=>{if(n){i(!1);const o={...e};t((e=>({...e}))),s.status!==e.status&&d({status:o.status}),s.photos!==e.photos&&u({small:o.photos.small,large:o.photos.large});const{status:r,photos:l,...a}=o;c({params:a})}else i(!0)}),[n,e,t,c,d,u]);return(0,o.useEffect)((()=>{const e=e=>{e.preventDefault(),a&&a.current&&!a.current.contains(e.target)&&(i(!1),t(s))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}})),{editMode:n,filePicker:l,formRef:a,setEditMode:i,updatePhotoUser:e=>{var s;if(null!==(s=e.target.files)&&void 0!==s&&s.length){const s=e.target.files[0];t((e=>({...e,photos:{small:s,large:s}})))}},saveForm:m,handlePick:()=>{null!==l.current&&l.current.click()}}}(t,s),A={container:(0,w.A)(a,"flex-start"),photoBox:n,btnInput:i,input:c,meId:d};return(0,g.jsxs)(u.A,{className:A.container,tabIndex:0,children:[(0,g.jsxs)(u.A,{className:A.photoBox,onClick:e=>e.stopPropagation(),children:[(0,g.jsx)(m.K,{link:t.photos.large,additionalClass:l?A.meId:""}),x&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(I.$,{className:A.btnInput,onClick:F,children:"Upload"}),(0,g.jsx)("input",{type:"file",name:"photo",ref:_,hidden:!0,className:A.input,accept:"image/*, .png, .jpg, .gif, .jpeg",onChange:k})]})]}),(0,g.jsx)(M,{editMode:x,profileUserState:t,formRef:h,setEditMode:b,setProfileUserState:s,saveForm:S}),(0,g.jsx)(j,{editMode:x,saveForm:S})]})})),y=()=>{const e=(0,r.d4)(p.tB),[t,s]=(0,o.useState)(e),{getProfileUserTC:l}=(0,f.d)(p.HS),a=(0,r.d4)(E.$);return(0,o.useEffect)((()=>{a&&l({userId:a})}),[l,a]),(0,o.useEffect)((()=>{s(e)}),[e]),(0,g.jsx)(L,{profileUserState:t,setProfileUserState:s})},O="banner_banner__OAumi",R=()=>(0,g.jsx)("div",{className:O});var T=s(1358),B=s(1856),z=s(2895),H=s(8080),J=s(9630);const K="Friend_friend__rtxKS",$="Friend_friend__foto__kQ9aP",D=e=>{let{friend:t}=e;const{photos:s,name:o,status:r}=t;return(0,g.jsxs)(u.A,{className:K,children:[(0,g.jsx)(m.K,{link:s.large,additionalClass:$}),(0,g.jsxs)(u.A,{children:[(0,g.jsx)(v.A,{variant:"h5",sx:{fontSize:"15px",fontWeight:"bold",paddingBottom:"15px"},children:o}),(0,g.jsxs)(v.A,{children:[" ",r||"My status will be here soon"," "]})]})]})},W=e=>{let{item:t}=e;const{id:s,followed:r,likeCounter:l}=t;let[a,n]=(0,o.useState)(!1);const i=(0,H.j)();return r?(0,g.jsxs)(u.A,{className:"post",id:"".concat(s),children:[(0,g.jsx)(u.A,{className:"flex-start",children:(0,g.jsx)(D,{friend:t})}),(0,g.jsxs)(u.A,{className:"post__wrap-icon",children:[(0,g.jsx)(B.g,{icon:z.qcK,className:"post__icon ".concat(a?"red":""),onClick:()=>a?(i((0,J.kq)({userId:s})),n(!1)):(i((0,J.CB)({userId:s})),n(!0))}),(0,g.jsx)(v.A,{variant:"h6",sx:{fontSize:"12px"},children:l})]})]}):null};var q=s(4529),X=s(9840);const Z=()=>{let[e,t]=(0,o.useState)("");const s=(0,o.useCallback)((e=>{t("")}),[e]);return(0,g.jsxs)(u.A,{className:"form-posts",children:[(0,g.jsx)("label",{htmlFor:"posts",className:"form-posts__label",children:"My posts"}),(0,g.jsx)("textarea",{minLength:10,className:"form-posts__texarea",placeholder:"My news....",id:"posts",name:"posts",value:e,onChange:e=>{t(e.currentTarget.value)}}),(0,g.jsx)("div",{className:"flex-end",children:(0,g.jsx)(I.$,{fontSize:"medium",onClick:()=>s(e),children:"Send"})})]})},G=()=>{let e=sessionStorage.getItem("profile");const[t,s]=(0,o.useState)(e?+e:1),a=(0,r.d4)(J.fd);let n=(0,r.d4)(q.Ep),i=(0,r.d4)(E.CR);const c=(0,l.Zp)();(0,o.useEffect)((()=>{!n&&i&&c("/login")}),[n,i,c]);const{pagesCount:d,setCurrentPageHandle:u}=(0,X.R)("profile",t,!0,s);let m=a.map((e=>(0,g.jsx)(W,{item:e},e.id)));return(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(R,{}),(0,g.jsx)(y,{}),(0,g.jsx)(Z,{}),m,(0,g.jsx)(T.H,{pagesCount:d,currentPage:t,setCurrentPage:u})]})}}}]);