"use strict";(self["webpackChunkmission"]=self["webpackChunkmission"]||[]).push([[227],{7227:function(e,a,l){l.r(a),l.d(a,{default:function(){return k}});var s=l(6252),r=l(3577);const m=e=>((0,s.dD)("data-v-0ae6721c"),e=e(),(0,s.Cn)(),e),o=m((()=>(0,s._)("h3",{class:"orderTitle fs-lg"},"結帳頁",-1))),d={class:"container"},t={class:"my-5 row justify-content-center"},n={class:"mb-3"},i=m((()=>(0,s._)("label",{for:"email",class:"form-label"},"Email",-1))),c={class:"mb-3"},u=m((()=>(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1))),f={class:"mb-3"},b=m((()=>(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1))),_={class:"mb-3"},v=m((()=>(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1))),p=m((()=>(0,s._)("div",{class:"mb-3"},[(0,s._)("label",{for:"message",class:"form-label"},"留言"),(0,s._)("textarea",{id:"message",class:"form-control",cols:"30",rows:"10"})],-1))),V=m((()=>(0,s._)("div",{class:"text-end"},[(0,s._)("button",{type:"submit",class:"btn btn-danger"}," 送出訂單 ")],-1)));function h(e,a,l,m,h,D){const W=(0,s.up)("v-field"),g=(0,s.up)("error-message"),k=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s._)("main",d,[(0,s._)("div",t,[(0,s.Wm)(k,{ref:"form",class:"col-md-6",onSubmit:D.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",n,[i,(0,s.Wm)(W,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:h.formData.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>h.formData.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",c,[u,(0,s.Wm)(W,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:h.formData.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>h.formData.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",f,[b,(0,s.Wm)(W,{id:"tel",name:"電話",type:"tel",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:D.isPhone,modelValue:h.formData.user.tel,"onUpdate:modelValue":a[2]||(a[2]=e=>h.formData.user.tel=e)},null,8,["class","rules","modelValue"]),(0,s.Wm)(g,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",_,[v,(0,s.Wm)(W,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:h.formData.user.address,"onUpdate:modelValue":a[3]||(a[3]=e=>h.formData.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(g,{name:"地址",class:"invalid-feedback"})]),p,V])),_:1},8,["onSubmit"])])])],64)}var D={data(){return{formData:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder(){console.log("order")},isPhone(e){const a=/^(09)[0-9]{8}$/;return!!a.test(e)||"需要正確的電話號碼"}}},W=l(3744);const g=(0,W.Z)(D,[["render",h],["__scopeId","data-v-0ae6721c"]]);var k=g}}]);
//# sourceMappingURL=227.dd00f09f.js.map