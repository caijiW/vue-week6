"use strict";(self["webpackChunkmission"]=self["webpackChunkmission"]||[]).push([[764],{5764:function(s,e,o){o.r(e),o.d(e,{default:function(){return v}});var n=o(6252),t=o(9963);const a=s=>((0,n.dD)("data-v-36504ddf"),s=s(),(0,n.Cn)(),s),r={class:"login"},i={class:"container"},l=a((()=>(0,n._)("h3",{class:"fs-big text-center"},"後台登入",-1))),u={class:"login-form"},c={class:"row justify-content-center"},d={class:"col-6"},m={class:"form-floating mb-5"},p=a((()=>(0,n._)("label",{for:"floatingemail"},"Email address",-1))),f={class:"form-floating mb-5"},h=a((()=>(0,n._)("label",{for:"floatingPassword"},"Password",-1)));function g(s,e,o,a,g,w){return(0,n.wg)(),(0,n.iD)("main",r,[(0,n._)("section",i,[l,(0,n._)("form",u,[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"floatingemail",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=s=>g.user.username=s),onKeyup:e[1]||(e[1]=(0,t.D2)(((...s)=>w.login&&w.login(...s)),["enter"]))},null,544),[[t.nr,g.user.username]]),p]),(0,n._)("div",f,[(0,n.wy)((0,n._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":e[2]||(e[2]=s=>g.user.password=s),onKeyup:e[3]||(e[3]=(0,t.D2)(((...s)=>w.login&&w.login(...s)),["enter"]))},null,544),[[t.nr,g.user.password]]),h]),(0,n._)("button",{type:"button",class:"login-btn btn btn-primary w-100",onClick:e[4]||(e[4]=(...s)=>w.login&&w.login(...s))}," 登入")])])])])])}var w={data(){return{user:{username:"",password:""}}},methods:{login(){if(""===this.user.username||""===this.user.password)return void alert("請輸入完整資訊");const s="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(s,this.user).then((s=>{console.log(s);const{token:e,expires:o}=s.data;document.cookie=`hextoken=${e}; expires=${new Date(o)}`,this.$router.push("/admin/Products")})).catch((s=>{console.log(s),alert("登入失敗"),this.user.username="",this.user.password=""}))}}},_=o(3744);const b=(0,_.Z)(w,[["render",g],["__scopeId","data-v-36504ddf"]]);var v=b}}]);
//# sourceMappingURL=764.114ffbbc.js.map