"use strict";(self["webpackChunktraveljp"]=self["webpackChunktraveljp"]||[]).push([[603],{3857:function(e,t,a){a.d(t,{vL:function(){return o},zp:function(){return l}});a(8675),a(3462);const l=(e,t="已複製",a="該瀏覽器不支援複製功能")=>{const l=navigator.clipboard.writeText(e);l.then((()=>{"已複製"!==t&&alert(t)})).catch((()=>{alert(a)}))},o=e=>e<10?`0${e}`:e},8670:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});a(6905),a(9007);var l=a(3266),o=a(730),s=a(6807),n=a(3652),r=a(3396);const i={class:"flex flex-wrap"},d=["onClick"],c=["onClick"];function p(e,t,a,p,u,m){const g=n.$Y,_=n.eI,D=s.Z,b=(0,r.up)("Template"),f=o.Z,h=(0,r.up)("Form"),w=l.Z;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_,{data:p.rows,stripe:"",style:{width:"100%"},border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{align:"center",sortable:"",prop:"id",label:"訂單編號"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"user.name",label:"顧客"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"user.tel",label:"連絡電話"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"total",label:"總金額"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"cn_is_paid",label:"是否結帳"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"paid_date_form",label:"結帳日期"}),(0,r.Wm)(g,{align:"center",sortable:"",prop:"message",label:"留言"}),(0,r.Wm)(g,null,{default:(0,r.w5)((e=>[(0,r._)("div",i,[(0,r._)("button",{type:"button",class:"primaryBtn mr-2",onClick:t=>{p.isOpenModal=!0,p.getModalData(e.row)}}," 編輯 ",8,d),(0,r._)("button",{class:"dangerBtn",type:"button",onClick:t=>{p.isOpenDelModal=!0,p.getModalData(e.row)}}," 刪除 ",8,c)])])),_:1})])),_:1},8,["data"]),p.rows?.length>0?((0,r.wg)(),(0,r.j4)(D,{key:0,onHandleCurrentPage:p.changePage,total:p.paginationInfo.total_pages},null,8,["onHandleCurrentPage","total"])):(0,r.kq)("",!0),(0,r.Wm)(h,null,{default:(0,r.w5)((({errors:e,handleSubmit:a})=>[(0,r.Wm)(f,{onChangeVisible:t[0]||(t[0]=e=>p.isOpenModal=!1),onSendModalData:t[1]||(t[1]=e=>p.sendModalData(p.orderData)),isOpenModal:p.isOpenModal,isNew:!1,handleSubmit:a},{content:(0,r.w5)((()=>[(0,r.Wm)(b,{errors:e,onGetFormData:p.getFormData,orderData:p.orderData},null,8,["errors","onGetFormData","orderData"])])),_:2},1032,["isOpenModal","handleSubmit"])])),_:1}),(0,r.Wm)(w,{itemTitle:`${p.orderData?.user?.name}(${p.orderData.id})`,onChangeVisible:t[2]||(t[2]=e=>p.isOpenDelModal=!1),isOpenDelModal:p.isOpenDelModal,onSendModalData:t[3]||(t[3]=e=>p.delProduct(p.orderData))},null,8,["itemTitle","isOpenDelModal"])],64)}var u=a(6265),m=a.n(u),g=a(4870),_=a(65),D=a(7139),b=a(9242);const f={class:"container primary-black"},h=(0,r._)("thead",null,[(0,r._)("tr",{class:"leading-loose"},[(0,r._)("th"),(0,r._)("th",null,"商品"),(0,r._)("th",null,"人數"),(0,r._)("th",null,"單價"),(0,r._)("th",null,"優惠"),(0,r._)("th",null,"小計")])],-1),w={class:"w-1/5"},y=["src"],v={class:"pl-1"},x={class:"text-lg text-justify"},I={class:"primary-red text-justify"},O={class:"text-center"},M={class:"text-center font-bold"},k={class:"font-bold"},S={key:0},$={class:"block"},L={class:"text-center font-bold"},C={key:0,class:"primary-red"},N={class:"text-right font-bold text-lg"},W={class:"border-t-4 pt-4"},G={class:"flex flex-col"},T=(0,r._)("label",{class:"modalTitle"},"訂購人名稱",-1),z={class:"flex flex-col"},j=(0,r._)("label",{class:"modalTitle"},"聯絡信箱",-1),A={class:"flex flex-col"},H=(0,r._)("label",{class:"modalTitle"},"連絡電話",-1),V={class:"flex flex-col"},Z=(0,r._)("label",{class:"modalTitle"},"訂購地址",-1),F={class:"flex flex-col"},P=(0,r._)("label",{class:"modalTitle"},"備註",-1);function U(e,t,a,l,o,s){return(0,r.wg)(),(0,r.iD)("section",f,[(0,r._)("table",null,[h,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.itemData.products,(e=>((0,r.wg)(),(0,r.iD)("tr",{class:"border-b-2",key:e.id},[(0,r._)("td",w,[(0,r._)("img",{src:e.product?.imagesUrl[0],alt:""},null,8,y)]),(0,r._)("td",v,[(0,r._)("h3",x,(0,D.zw)(e.product?.title),1),(0,r._)("p",I,(0,D.zw)(e.product?.category),1)]),(0,r._)("td",O,(0,D.zw)(e.qty),1),(0,r._)("td",M,(0,D.zw)(e.product?.price),1),(0,r._)("td",k,[e?.coupon?((0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("span",$,(0,D.zw)(e?.coupon.title),1),(0,r._)("span",null,(0,D.zw)(e?.coupon.percent)+"%",1)])):(0,r.kq)("",!0)]),(0,r._)("td",L,[(0,r._)("span",{class:(0,D.C_)(["primary-black block",e.total!==e.final_total?"line-through":""])},(0,D.zw)(e.total),3),e.total!==e.final_total?((0,r.wg)(),(0,r.iD)("span",C,(0,D.zw)(e.final_total),1)):(0,r.kq)("",!0)])])))),128))])]),(0,r._)("p",N,"總金額："+(0,D.zw)(l.itemData.total),1),(0,r._)("section",W,[(0,r._)("div",G,[T,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.itemData.user.name=e),class:"modalInput"},null,512),[[b.nr,l.itemData.user.name]])]),(0,r._)("div",z,[j,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.itemData.user.email=e),class:"modalInput"},null,512),[[b.nr,l.itemData.user.email]])]),(0,r._)("div",A,[H,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.itemData.user.tel=e),class:"modalInput"},null,512),[[b.nr,l.itemData.user.tel]])]),(0,r._)("div",V,[Z,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>l.itemData.user.address=e),class:"modalInput"},null,512),[[b.nr,l.itemData.user.address]])]),(0,r._)("div",F,[P,(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.itemData.message=e),class:"modalInput"},null,512),[[b.nr,l.itemData.message]])])])])}var q={name:"OrderListTemplate",props:{orderData:{type:Object,required:!0}},setup(e){const t=(0,g.Vh)(e,"orderData");return{itemData:t}}},Y=a(89);const B=(0,Y.Z)(q,[["render",U]]);var E=B,J=a(5708),K=a(3857),R={name:"BOrderList",setup(){const e=(0,g.iH)(!1),t=(0,g.iH)(!1),a=(0,r.f3)("$ElNotification"),l=(0,_.oR)(),o=(0,g.iH)([]),s=(0,g.iH)({}),n=(0,g.iH)({}),i=e=>{p(e)},d=e=>{n.value=e,console.log(JSON.parse(JSON.stringify(n.value)))},c=e=>{n.value=e},p=e=>{const t=`https://vue3-course-api.hexschool.io/api/traveljp/admin/orders?page=${e}`;l.commit("ISLOADING",!0),m().get(t).then((e=>{e.data.success?(o.value=e.data.orders,o.value.forEach((e=>{if(e.cn_is_paid=e.is_paid?"是":"否",e.is_paid){const t=new Date(1e3*e.paid_date),a=t.getFullYear(),l=(0,K.vL)(t.getMonth()+1),o=(0,K.vL)(t.getDate());e.paid_date_form=`${a}-${l}-${o}`}})),s.value=e.data.pagination):a({title:"錯誤",message:e.data.message,type:"error"}),l.commit("ISLOADING",!1)})).catch((e=>{e&&l.commit("ISLOADING",!1)}))},u=e=>{let t=`https://vue3-course-api.hexschool.io/api/traveljp/admin/order/${e.id}`;l.commit("ISLOADING",!0),m().put(t,{data:e}).then((e=>{e.data.success?(a({title:"成功",message:`${e.data.message}`,type:"success"}),p(1)):(a({title:"錯誤",message:`${e.data.message}`,type:"error"}),l.commit("ISLOADING",!1))})).catch((e=>{e&&l.commit("ISLOADING",!1)}))},D=e=>{const o=`https://vue3-course-api.hexschool.io/api/traveljp/admin/order/${e.id}`;l.commit("ISLOADING",!0),m()["delete"](o).then((e=>{e.data.success?(a({title:"成功",message:`${e.data.message}`,type:"success"}),p(1),t.value=!1):a({title:"錯誤",message:`${e.data.message}`,type:"error"}),l.commit("ISLOADING",!1)})).catch((e=>{e&&l.commit("ISLOADING",!1)}))};return(0,r.bv)((()=>{p(1)})),{rows:o,paginationInfo:s,orderData:n,isOpenModal:e,isOpenDelModal:t,changePage:i,getFormData:c,sendModalData:u,getModalData:d,delProduct:D}},components:{Pagination:s.Z,CommonModal:o.Z,DelCommonModal:l.Z,Template:E,Form:J.l0}};const Q=(0,Y.Z)(R,[["render",p]]);var X=Q}}]);