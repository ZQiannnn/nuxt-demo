webpackJsonp([57],{WjeC:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#payment span.price[data-v-56fa5546] {\n  display: block;\n  width: 50%;\n  text-align: center;\n}\n#payment span.price span[data-v-56fa5546] {\n    color: #ba1c28;\n    font-weight: bold;\n}\n#payment .button-section[data-v-56fa5546] {\n  padding: 15PX;\n}\n#payment .button-section[data-v-56fa5546]:last-child {\n    padding: 0 !important;\n    margin-top: 35PX;\n}\n#payment .button-section button[data-v-56fa5546] {\n    margin-right: 15PX;\n}\n#payment .qrcode[data-v-56fa5546] {\n  text-align: center;\n  margin-top: 0.26667rem;\n}\n",""])},aLbR:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"payment"}},[n("van-nav-bar",{attrs:{"left-arrow":"",title:"立即支付",id:"navbar"},on:{"click-left":function(e){t.$router.back()}}}),n("div",{staticClass:"button-section"},t._l(t.paymentMethod,function(e,a){return n("van-button",{key:a,attrs:{type:e.code===t.selected?"warning":"default",size:"small"},on:{click:function(n){t.changeMethod(e)}}},[t._v(t._s(e.title))])})),n("van-cell-group",[t._l(t.getOrderResponse.data.orderList,function(t,e){return[n("van-cell",{key:e,attrs:{title:"车位"==t.orderType?"车位认购金":"房间认购金",value:t.price}})]}),n("van-cell",{attrs:{title:"销售顾问",value:t.getTempSales.salesName}})],2),n("div",{staticClass:"button-section"},[n("van-cell-group",[n("van-cell",[n("van-checkbox",{attrs:{slot:"icon"},slot:"icon",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),n("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t我已认真阅读并确认\n\t\t\t\t\t"),n("nuxt-link",{staticClass:"content-title",attrs:{to:{name:"cms-slug",params:{slug:"认购须知"},query:{code:"SYS_RGXZ_MOB"}}}},[t._v("\n\t\t\t\t\t\t《认购须知》\n\t\t\t\t\t")])],1)],1)],1),n("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.pay}},[t._v("下一步")])],1),n("div",{domProps:{innerHTML:t._s(t.formHtml)}})],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},kc49:function(t,e,n){"use strict";(function(t){var a=n("woOf"),s=n.n(a),o=n("Dd8w"),r=n.n(o),i=n("NYxO"),c=n("NFYZ"),l=n("62+5"),d=n("IdIt");e.a={layout:"notabbar",data:function(){return{paymentMethod:[{title:"银联支付",code:"UNIONPAY"},{code:"wxPay",title:"微信支付"},{title:"线下支付",code:"offline"}],payment:{bankAccount:null,phoneNumber:null,smsCode:null,sales:null},checked:!0,selected:"UNIONPAY",payByBank:!1,formHtml:""}},computed:r()({},Object(i.mapGetters)({getOrderResponse:"orders/getOrderResponse",getTempSales:"salesconsultant/getTempSales",getUserInfoResponse:"authorization/getUserInfoResponse"}),{getSalesByDefault:function(){this.payment.sales=t.head(this.sales)}}),methods:{changeMethod:function(t){s()(this.$data,this.$options.data()),this.payByBank=t.code===this.selected,this.selected=t.code},pay:function(){var t=this,e=this.getOrderResponse.data.orderList[0];if("wxPay"!=this.selected||c.a.isWeixin())if("offline"==this.selected){var n=this.$store.getters["authorization/getUserLoginResponse"].data.token,a=0;this.getOrderResponse.data.orderList.forEach(function(t){a+=parseFloat(t.price)});var s=this.getUserInfoResponse.userId;l.a.getRequest(d.a.pay.changePayType(s,e.orderId,this.selected),{},n).then(function(n){if(!n||"true"!==n.success)return"SYS_ERR_000"==n.errorCode?void 0:void t.$toast(n&&n.exception||"支付出错");t.$router.push({path:"/payment/success",query:{orderId:e.orderId,orderSum:a}})})}else{var o={orderId:e.orderId,orderType:"RG_ORDER",device:"Mobile",paymentMethod:this.selected,returnUrl:"http://"+location.host+"/payment/success?orderId="+e.orderId};this.$store.dispatch("payment/pay",o).then(function(e){if("true"!==e.success)return"SYS_ERR_000"===e.errorCode?void 0:void t.$toast(e.exception||"支付失败");t.formHtml=e.data.htmlPayForm,setTimeout(function(){document.all.pay_form.submit()},1e3)})}else this.$toast("请在微信环境中支付")}},created:function(){this.$toast.clear()}}}).call(e,n("M4fF"))},pSvA:function(t,e,n){var a=n("WjeC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2e755918",a,!1,{sourceMap:!1})},vgsP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("kc49"),s=n("aLbR"),o=!1;var r=function(t){o||n("pSvA")},i=n("VU/8")(a.a,s.a,!1,r,"data-v-56fa5546",null);i.options.__file="pages\\payment\\index.vue",e.default=i.exports}});