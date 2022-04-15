"use strict";(self["webpackChunktraveljp"]=self["webpackChunktraveljp"]||[]).push([[864],{4232:function(e,a,l){l.r(a),l.d(a,{default:function(){return se}});l(6905),l(9007);var t=l(3266),o=l(730),n=l(6807),s=l(3652),r=l(3396);const i={class:"flex flex-wrap"},c=["onClick"],d=["onClick"];function p(e,a,l,p,u,m){const g=s.$Y,f=s.eI,h=n.Z,_=(0,r.up)("Template"),v=o.Z,D=(0,r.up)("Form"),b=t.Z;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r._)("button",{type:"button",onClick:a[0]||(a[0]=e=>{p.isNew=!0,p.isOpenModal=!0,p.getModalData()}),class:"primaryBtn mb-3"}," 新增 ")]),(0,r.Wm)(f,{data:p.rows,stripe:"",style:{width:"100%"},border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{align:"center",sortable:"",prop:"category",label:"類別"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"title",label:"名稱"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"content",label:"說明"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"origin_price",label:"原價"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"price",label:"價格"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"cn_is_enable",label:"是否啟用"}),(0,r.Wm)(g,null,{default:(0,r.w5)((e=>[(0,r._)("div",i,[(0,r._)("button",{type:"button",class:"primaryBtn mr-2",onClick:a=>{p.isNew=!1,p.isOpenModal=!0,p.getModalData(e.row)}}," 編輯 ",8,c),(0,r._)("button",{class:"dangerBtn",type:"button",onClick:a=>{p.isNew=!1,p.isOpenDelModal=!0,p.getModalData(e.row)}}," 刪除 ",8,d)])])),_:1})])),_:1},8,["data"]),p.rows?.length>0?((0,r.wg)(),(0,r.j4)(h,{key:0,onHandleCurrentPage:p.changePage,total:p.paginationInfo.total_pages},null,8,["onHandleCurrentPage","total"])):(0,r.kq)("",!0),(0,r.Wm)(D,null,{default:(0,r.w5)((({errors:e,handleSubmit:l})=>[(0,r.Wm)(v,{onChangeVisible:a[1]||(a[1]=e=>p.isOpenModal=!1),onSendModalData:a[2]||(a[2]=e=>p.sendModalData(p.productData)),isOpenModal:p.isOpenModal,isNew:p.isNew,handleSubmit:l},{content:(0,r.w5)((()=>[(0,r.Wm)(_,{errors:e,onGetFormData:p.getFormData,productData:p.productData},null,8,["errors","onGetFormData","productData"])])),_:2},1032,["isOpenModal","isNew","handleSubmit"])])),_:1}),(0,r.Wm)(b,{itemTitle:p.productData.title,onChangeVisible:a[3]||(a[3]=e=>p.isOpenDelModal=!1),isOpenDelModal:p.isOpenDelModal,onSendModalData:a[4]||(a[4]=e=>p.delProduct(p.productData))},null,8,["itemTitle","isOpenDelModal"])],64)}var u=l(6265),m=l.n(u),g=l(4870),f=l(65),h=(l(4566),l(797)),_=l(7139),v=l(9242);const D={class:"flex flex-wrap"},b={class:"flex-1"},I={class:"flex flex-col"},w=(0,r._)("span",{class:"modalTitle"},"產品圖片",-1),x={class:"flex flex-col mt-3 p-2"},y={class:"modalTitle border-t"},M=(0,r.Uk)(" 圖片預覽 "),F=["onDblclick","src","alt"],O={class:"flex-1"},N={class:"flex flex-col"},k=(0,r._)("span",{class:"modalTitle"},"類別",-1),S=["value"],U={class:"flex flex-col"},C=(0,r._)("span",{class:"modalTitle"},"名稱",-1),V={class:"primary-red font-bold"},W={class:"flex flex-col"},T=(0,r._)("span",{class:"modalTitle"},"旅程(天數)",-1),G=["value"],H={class:"flex flex-col"},A=(0,r._)("span",{class:"modalTitle"},[(0,r.Uk)("說明 "),(0,r._)("span",{class:"primary-retouch align-top pl-1 text-sm"},"(*非必填)")],-1),L={class:"flex flex-col"},$=(0,r._)("span",{class:"modalTitle"},"原價",-1),P={class:"primary-red font-bold"},j={class:"flex flex-col"},Z=(0,r._)("span",{class:"modalTitle"},"價格",-1),q={class:"primary-red font-bold"},z={class:"flex flex-col"},Y=(0,r._)("span",{class:"modalTitle"},"是否啟用",-1),B=(0,r._)("option",{value:1},"是",-1),E=(0,r._)("option",{value:0},"否",-1),K=[B,E],R={class:"flex flex-col"},Q=(0,r._)("span",{class:"modalTitle"},"詳細",-1);function J(e,a,l,t,o,n){const s=(0,r.up)("font-awesome-icon"),i=h.Q0,c=(0,r.up)("Field");return(0,r.wg)(),(0,r.iD)("section",D,[(0,r._)("section",b,[(0,r._)("div",I,[w,(0,r._)("input",{name:"file-to-upload",type:"file",ref:"file",accept:"image/*",onChange:a[0]||(a[0]=e=>t.getFile(e))},null,544)]),(0,r._)("div",x,[(0,r._)("span",y,[M,(0,r.Wm)(i,{class:"box-item",effect:"dark",content:"雙擊以刪除圖片",placement:"top-start"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{icon:["fas","info-circle"]})])),_:1})]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.product.imagesUrl,((e,a)=>((0,r.wg)(),(0,r.iD)("img",{onDblclick:e=>t.removeImage(a),key:e,src:e,alt:`圖片預覽${a+1}`},null,40,F)))),128))])]),(0,r._)("section",O,[(0,r._)("div",N,[k,(0,r.wy)((0,r._)("select",{onChange:a[1]||(a[1]=(...e)=>t.handleForm&&t.handleForm(...e)),"onUpdate:modelValue":a[2]||(a[2]=e=>t.product.category=e),class:"modalInput"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.allPlace,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,_.zw)(e),9,S)))),128))],544),[[v.bM,t.product.category]])]),(0,r._)("div",U,[C,(0,r.Wm)(c,{name:"名稱",rules:"required",onInput:t.handleForm,modelValue:t.product.title,"onUpdate:modelValue":a[3]||(a[3]=e=>t.product.title=e),modelModifiers:{trim:!0},class:"modalInput",placeholder:"請輸入產品名稱",type:"text"},null,8,["onInput","modelValue"]),(0,r._)("span",V,(0,_.zw)(l.errors.名稱),1)]),(0,r._)("div",W,[T,(0,r.wy)((0,r._)("select",{onChange:a[4]||(a[4]=(...e)=>t.handleForm&&t.handleForm(...e)),"onUpdate:modelValue":a[5]||(a[5]=e=>t.product.unit=e),class:"modalInput"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.allUnit,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,_.zw)(e),9,G)))),128))],544),[[v.bM,t.product.unit]])]),(0,r._)("div",H,[A,(0,r.wy)((0,r._)("input",{onInput:a[6]||(a[6]=(...e)=>t.handleForm&&t.handleForm(...e)),"onUpdate:modelValue":a[7]||(a[7]=e=>t.product.content=e),class:"modalInput",placeholder:"請輸入產品說明",type:"text"},null,544),[[v.nr,t.product.content]])]),(0,r._)("div",L,[$,(0,r.Wm)(c,{name:"原價",rules:"required",onInput:t.handleForm,modelValue:t.product.origin_price,"onUpdate:modelValue":a[8]||(a[8]=e=>t.product.origin_price=e),modelModifiers:{number:!0},class:"modalInput",placeholder:"請輸入產品原價",type:"number"},null,8,["onInput","modelValue"]),(0,r._)("span",P,(0,_.zw)(l.errors.原價),1)]),(0,r._)("div",j,[Z,(0,r.Wm)(c,{name:"價格",rules:"required",onInput:t.handleForm,modelValue:t.product.price,"onUpdate:modelValue":a[9]||(a[9]=e=>t.product.price=e),modelModifiers:{number:!0},class:"modalInput",placeholder:"請輸入產品價格",type:"number"},null,8,["onInput","modelValue"]),(0,r._)("span",q,(0,_.zw)(l.errors.價格),1)]),(0,r._)("div",z,[Y,(0,r.wy)((0,r._)("select",{onChange:a[10]||(a[10]=(...e)=>t.handleForm&&t.handleForm(...e)),"onUpdate:modelValue":a[11]||(a[11]=e=>t.product.is_enabled=e),class:"modalInput"},K,544),[[v.bM,t.product.is_enabled]])]),(0,r._)("div",R,[Q,(0,r.wy)((0,r._)("textarea",{onInput:a[12]||(a[12]=(...e)=>t.handleForm&&t.handleForm(...e)),"onUpdate:modelValue":a[13]||(a[13]=e=>t.product.description=e),class:"modalInput",placeholder:"請輸入產品詳細描述"},null,544),[[v.nr,t.product.description,void 0,{trim:!0}]])])])])}var X=l(5708),ee={name:"StrictPlanTemplate",props:{productData:{type:Object,required:!0},errors:{type:Object}},emits:["getFormData"],setup(e,{emit:a}){const l=["北海道","東北","東京","北陸","中部","關西","山陽山陰","四國","九州","沖繩"],t=["當天來回","2天1夜","3天2夜","4天3夜","5天4夜","6天5夜","7天6夜","8天7夜","9天8夜","10天9夜"],o=(0,f.oR)(),n=(0,r.f3)("$ElNotification"),s=(0,g.Vh)(e,"productData"),i=(0,g.iH)(null),c=()=>{a("getFormData",s.value)},d=e=>{i.value=e.target.files[0],p(i.value)},p=e=>{if(!e)return;const a=new FormData;a.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/traveljp/admin/upload";o.commit("ISLOADING",!0),m().post(l,a).then((e=>{e.data.success?(s.value.imagesUrl.push(e.data.imageUrl),c()):n({title:"錯誤",message:`${e.data.message}`,type:"error"}),o.commit("ISLOADING",!1)})).catch((e=>{e&&o.commit("ISLOADING",!1)}))},u=e=>{s.value.imagesUrl.splice(e,1)};return{props:e,allPlace:l,allUnit:t,product:s,handleForm:c,getFile:d,removeImage:u}},components:{Field:X.gN}},ae=l(89);const le=(0,ae.Z)(ee,[["render",J]]);var te=le,oe={name:"BStrictPlan",setup(){const e=(0,g.iH)(!1),a=(0,g.iH)(!1),l=(0,g.iH)(!1),t=(0,r.f3)("$ElNotification"),o=(0,f.oR)(),n=(0,g.iH)([]),s=(0,g.iH)({}),i=(0,g.iH)({}),c=e=>{u(e)},d=e=>{l.value?i.value={title:"",category:"北海道",origin_price:Number(0),price:Number(0),unit:"當天來回",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:[]}:i.value=e},p=e=>{i.value=e},u=e=>{const a=`https://vue3-course-api.hexschool.io/api/traveljp/admin/products?page=${e}`;o.commit("ISLOADING",!0),m().get(a).then((e=>{e.data.success?(n.value=e.data.products,n.value.forEach((e=>{e.cn_is_enable=e.is_enabled?"是":"否"})),s.value=e.data.pagination):t({title:"錯誤",message:e.data.message,type:"error"}),o.commit("ISLOADING",!1)})).catch((e=>{e&&o.commit("ISLOADING",!1)}))},h=e=>{let a="",n="";l.value?(a="https://vue3-course-api.hexschool.io/api/traveljp/admin/product",n="post"):(a=`https://vue3-course-api.hexschool.io/api/traveljp/admin/product/${e.id}`,n="put"),o.commit("ISLOADING",!0),m()[n](a,{data:e}).then((e=>{e.data.success?(t({title:"成功",message:`${e.data.message}`,type:"success"}),u(1)):(t({title:"錯誤",message:`${e.data.message}`,type:"error"}),o.commit("ISLOADING",!1))})).catch((e=>{e&&o.commit("ISLOADING",!1)}))},_=e=>{const l=`https://vue3-course-api.hexschool.io/api/traveljp/admin/product/${e.id}`;o.commit("ISLOADING",!0),m()["delete"](l).then((e=>{e.data.success?(t({title:"成功",message:`${e.data.message}`,type:"success"}),u(1),a.value=!1):(o.commit("ISLOADING",!1),t({title:"錯誤",message:`${e.data.message}`,type:"error"}))})).catch((e=>{e&&o.commit("ISLOADING",!1)}))};return(0,r.bv)((()=>{u(1)})),{rows:n,paginationInfo:s,isNew:l,productData:i,isOpenModal:e,isOpenDelModal:a,changePage:c,getFormData:p,sendModalData:h,getModalData:d,delProduct:_}},components:{Pagination:n.Z,CommonModal:o.Z,DelCommonModal:t.Z,Template:te,Form:X.l0}};const ne=(0,ae.Z)(oe,[["render",p]]);var se=ne}}]);