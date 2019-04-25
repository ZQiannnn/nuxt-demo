webpackJsonp([56],{XK6O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lIJO"),o=n("fITo"),a=!1;var s=function(t){a||n("jiUh")},i=n("VU/8")(r.a,o.a,!1,s,"data-v-443f9598",null);i.options.__file="pages\\payment\\subscribePayment.vue",e.default=i.exports},fITo:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"payment"}},[n("van-nav-bar",{attrs:{"left-arrow":"",title:"立即支付",id:"navbar"},on:{"click-left":function(e){t.$router.back()}}}),n("div",{staticClass:"button-section"},t._l(t.paymentMethod,function(e,r){return n("van-button",{key:r,attrs:{type:e.code===t.selected?"warning":"default",size:"small"},on:{click:function(n){t.changeMethod(e)}}},[t._v(t._s(e.title))])})),n("van-cell-group",[n("van-cell",{attrs:{title:"楼盘名称",value:t.orderInfo.projectName}}),t.orderInfo.room&&t.orderInfo.room.id?n("van-cell",{attrs:{title:"认购房间",value:t.orderInfo.room.building+"栋"+t.orderInfo.room.name}}):t._e(),t.orderInfo.carport&&t.orderInfo.carport.id?n("van-cell",{attrs:{title:"认购车位",value:t.orderInfo.carport.building+"栋"+t.orderInfo.carport.name}}):t._e(),n("van-cell",{attrs:{title:"认购金",value:t.orderInfo.price}}),n("van-cell",{attrs:{title:"销售顾问",value:t.orderInfo.salesman&&t.orderInfo.salesman.salesName}})],1),n("div",{staticClass:"button-section"},[n("van-cell-group",[n("van-cell",[n("van-checkbox",{attrs:{slot:"icon"},slot:"icon",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),n("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t我已认真阅读并确认\n\t\t\t\t\t\t"),n("nuxt-link",{staticClass:"content-title",attrs:{to:{name:"cms-slug",params:{slug:"认购须知"},query:{code:"SYS_RGXZ_MOB"}}}},[t._v("\n\t\t\t\t\t\t\t《认购须知》\n\t\t\t\t\t\t")])],1)],1)],1),n("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.pay}},[t._v("下一步")])],1),n("div",{domProps:{innerHTML:t._s(t.formHtml)}})],1)};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},jiUh:function(t,e,n){var r=n("pT7+");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6d331758",r,!1,{sourceMap:!1})},lIJO:function(t,e,n){"use strict";var r=n("woOf"),o=n.n(r),a=n("Dd8w"),s=n.n(a),i=n("Xxa5"),c=n.n(i),d=n("//Fk"),l=n.n(d),u=n("d7EF"),p=n.n(u),f=n("exGp"),m=n.n(f),v=n("NYxO"),h=n("62+5"),y=n("IdIt");e.a={layout:"notabbar",asyncData:function(){var t=m()(c.a.mark(function t(e){var n,r,o,a,s,i,d,u;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route.query.orderId||"",r=e.store.getters["authorization/getUserLoginResponse"].data,o=r.token,a=r.userId,t.next=4,l.a.all([h.a.getRequest(y.a.order.getOrderBUs(a,n),{},o)]);case 4:return s=t.sent,i=p()(s,1),d=i[0],u=void 0===d?{}:d,t.abrupt("return",{orderInfo:u.data||{},orderId:n,token:o,userId:a});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{paymentMethod:[{title:"银联支付",code:"bank"},{title:"线下支付",code:"offline"}],payment:{bankAccount:null,phoneNumber:null,smsCode:null,sales:null},checked:!0,selected:"bank",payByBank:!1,formHtml:""}},computed:s()({},Object(v.mapGetters)({getUserInfoResponse:"authorization/getUserInfoResponse"})),methods:{changeMethod:function(t){o()(this.$data,this.$options.data()),this.payByBank=t.code===this.selected,this.selected=t.code},pay:function(){var t=this;if("offline"==this.selected)h.a.getRequest(y.a.pay.changePayType(this.userId,this.orderId,this.selected),{},this.token).then(function(e){if(!e||"true"!==e.success)return"SYS_ERR_000"==e.errorCode?void 0:void t.$toast(e&&e.exception||"支付出错");t.$router.push({path:"/payment/success",query:{orderId:t.orderId,orderSum:t.orderInfo.price}})});else{var e={orderId:this.orderId,orderType:"RG_ORDER",device:"Mobile",paymentMethod:"UNIONPAY",returnUrl:"http://"+location.host+"/payment/success?orderId="+this.orderId};this.$store.dispatch("payment/pay",e).then(function(e){if("true"!==e.success)return"SYS_ERR_000"===e.errorCode?void 0:void t.$toast(e.exception||"支付失败");t.formHtml=e.data.htmlPayForm,setTimeout(function(){document.all.pay_form.submit()},1e3)})}}},created:function(){this.$toast.clear()}}},"pT7+":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#payment span.price[data-v-443f9598] {\n  display: block;\n  width: 50%;\n  text-align: center;\n}\n#payment span.price span[data-v-443f9598] {\n    color: #ba1c28;\n    font-weight: bold;\n}\n#payment .button-section[data-v-443f9598] {\n  padding: 15PX;\n}\n#payment .button-section[data-v-443f9598]:last-child {\n    padding: 0 !important;\n    margin-top: 35PX;\n}\n#payment .button-section button[data-v-443f9598] {\n    margin-right: 15PX;\n}\n",""])}});