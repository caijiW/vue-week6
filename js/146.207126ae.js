"use strict";(self["webpackChunkmission"]=self["webpackChunkmission"]||[]).push([[146],{7146:function(t,s,c){c.r(s),c.d(s,{default:function(){return x}});var o=c(6252),e=c(3577);const a=t=>((0,o.dD)("data-v-7578e3c6"),t=t(),(0,o.Cn)(),t),l=a((()=>(0,o._)("section",{class:"productsTitle"},[(0,o._)("h3",{class:"fs-lg"},"porducts")],-1))),r={class:"container"},i={class:"row row-cols-4"},d={class:"card mb-5",style:{width:"18rem"}},n={class:"productsImg"},u=["src"],p={class:"card-body"},h={class:"card-title"},m={class:"card-text"},_=(0,o.Uk)("Go somewhere");function v(t,s,c,a,v,g){const w=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("main",null,[(0,o._)("div",r,[(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col",key:t.id},[(0,o._)("div",d,[(0,o._)("div",n,[(0,o._)("img",{src:t.imageUrl,alt:""},null,8,u)]),(0,o._)("div",p,[(0,o._)("h5",h,(0,e.zw)(t.title),1),(0,o._)("p",m,(0,e.zw)(t.description)+" Some quick example text to build on the card title and make up the bulk of the card's content. ",1),(0,o.Wm)(w,{to:`/product/${t.id}`,class:"btn btn-primary"},{default:(0,o.w5)((()=>[_])),_:2},1032,["to"])])])])))),128))])])])],64)}const g="https://vue3-course-api.hexschool.io/v2",w="caiji-hexschool";var k={data(){return{products:[]}},methods:{getProducts(){this.$http.get(`${g}/api/${w}/products/all`).then((t=>{console.log(t),this.products=t.data.products})).catch((t=>{console.log(t)}))}},mounted(){this.getProducts()}},f=c(3744);const b=(0,f.Z)(k,[["render",v],["__scopeId","data-v-7578e3c6"]]);var x=b}}]);
//# sourceMappingURL=146.207126ae.js.map