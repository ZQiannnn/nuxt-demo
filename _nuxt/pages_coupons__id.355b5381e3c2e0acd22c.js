webpackJsonp([31],{"2Lld":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Tieo"),a=n("q3Om"),i=!1;var s=function(t){i||n("9FNd")},r=n("VU/8")(o.a,a.a,!1,s,"data-v-6d8e1596",null);r.options.__file="pages\\coupons\\_id.vue",e.default=r.exports},"8sHD":function(t,e,n){var o=n("kM2E"),a=n("KpO7");o(o.S+o.F*(Number.parseInt!=a),"Number",{parseInt:a})},"9FNd":function(t,e,n){var o=n("g9gj");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("29f21156",o,!1,{sourceMap:!1})},KpO7:function(t,e,n){var o=n("7KvD").parseInt,a=n("mnVu").trim,i=n("hyta"),s=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=a(String(t),3);return o(n,e>>>0||(s.test(n)?16:10))}:o},Tieo:function(t,e,n){"use strict";(function(t){var o=n("gBtx"),a=n.n(o),i=n("Dd8w"),s=n.n(i),r=n("NYxO");n("62+5"),n("IdIt");e.a={layout:"notabbar",middleware:"authorizationRequired",fetch:function(t){var e=t.store,n=(t.query,t.redirect);if(void 0===e.getters["coupons/getListCoupons"].data)return n("/coupons")},data:function(){return{getDefaultSelectValue:"银联支付",paymentMedthodSelected:"银联支付",showPaymentMethod:!1,htmlPayForm:"",fromMine:this.$route.query.fromMine||""}},computed:s()({},Object(r.mapGetters)({getListCoupons:"coupons/getListCoupons",getUserInfoResponse:"authorization/getUserInfoResponse"}),{getCouponPoint:function(){var e=t.head(t.filter(this.getListCoupons.data,{id:this.$route.params.id})),n=e.earnInPoint,o=e.earnInPrice;return n>0?n:o},getPaidAmount:function(){return t.head(t.filter(this.getListCoupons.data,{id:this.$route.params.id})).earnInPrice},getPaymentMethod:function(){return t.map([{code:"UNIONPAY",name:"银联支付"},{code:"wxPay",name:"微信支付"}],"name")},calculate:function(){var e=t.head(t.filter(this.getListCoupons.data,{id:this.$route.params.id})).earnInPoint;return a()(this.getUserInfoResponse.points-e)},getCouponDetail:function(){return t.head(t.filter(this.getListCoupons.data,{id:this.$route.params.id})).couponDetail}}),methods:{paymentMethodPickerOnConfirm:function(t,e){this.showPaymentMethod=!this.showPaymentMethod,this.paymentMedthodSelected=t},payIt:function(){var e=this,n=this.$route.query.type,o=this.getUserInfoResponse.userId;if("cash"===n&&null===this.paymentMedthodSelected)return this.$toast("请先选择支付方式");if("points"===n&&this.getUserInfoResponse.points<this.getCouponPoint)return this.$toast("积分不够");var a="UNIONPAY";if("cash"===n){var i=t.head([{code:"UNIONPAY",name:"银联支付"},{code:"wxPay",name:"微信支付"}].filter(function(t){return t.name==e.paymentMedthodSelected}));if("wxPay"==(a=i.code)&&!this.is_weixin())return void this.$toast("请在微信环境中支付")}var s=this;"cash"===n?this.$store.dispatch("coupons/gainCoupon",{couponId:this.$route.params.id,earnType:"cash"===n?0:1,customerId:o}).then(function(t){if(t&&"true"==t.success){var n=t.data,i=s.$store.getters["authorization/getUserLoginResponse"].data.token,r=n.orderId;e.$store.dispatch("payment/pay",{orderId:r,OrderyType:"COUPON_ORDER",device:"Mobile",paymentMethod:a,returnUrl:"http://"+location.host+"/payment/success1?orderId="+r+"&userId="+o+"&token="+i}).then(function(t){t&&"true"==t.success?(s.htmlPayForm=t.data.htmlPayForm,setTimeout(function(){document.all.pay_form.submit()},1e3)):e.$toast(t.exception||"购买失败")})}else e.$toast(t.exception||"购买失败")}).catch(function(t){e.$toast(response.exception||"购买失败")}):this.$store.dispatch("coupons/gainCoupon",{couponId:this.$route.params.id,earnType:"cash"===n?0:1,customerId:o}).then(function(t){e.$store.dispatch("coupons/setClaimSuccess",{status:!0,words:"cash"===n?"支付":"兑换"})}).then(function(){e.$router.push({name:"coupons"})}).catch(function(t){e.$toast(t)})},is_weixin:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}}}}).call(e,n("M4fF"))},g9gj:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#mine-conpons-list-details .van-cell-group[data-v-6d8e1596] {\n  margin-bottom: 15px;\n}\n#mine-conpons-list-details .button-section[data-v-6d8e1596] {\n  margin-top: 50PX;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n}\n#mine-conpons-list-details .getCouponDetail[data-v-6d8e1596] {\n  margin-bottom: 60PX;\n}\n#mine-conpons-list-details .getCouponDetail p[data-v-6d8e1596] {\n    padding-left: 14PX;\n    padding-right: 14PX;\n    padding-bottom: 10PX;\n}\n#mine-conpons-list-details .getCouponDetail p[data-v-6d8e1596]:first-child {\n      font-size: 14PX;\n      padding: 10PX 14PX;\n}\n",""])},gBtx:function(t,e,n){t.exports={default:n("qrpI"),__esModule:!0}},hyta:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},mnVu:function(t,e,n){var o=n("kM2E"),a=n("52gC"),i=n("S82l"),s=n("hyta"),r="["+s+"]",u=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),p=function(t,e,n){var a={},r=i(function(){return!!s[t]()||"​"!="​"[t]()}),u=a[t]=r?e(d):s[t];n&&(a[n]=u),o(o.P+o.F*r,"String",a)},d=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=p},q3Om:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mine-conpons-list-details"}},[n("van-nav-bar",{attrs:{"left-arrow":"",title:"确认信息",id:"navbar"},on:{"click-left":function(e){t.$router.back()}}}),"points"===t.$route.query.type?[n("van-cell-group",[n("van-cell",{staticClass:"is-highlighted",attrs:{title:"支付积分",value:t.getCouponPoint}})],1),n("van-cell-group",[n("van-cell",{attrs:{title:"我的积分余额",value:t.getUserInfoResponse.points}}),n("van-cell",{attrs:{title:"兑换后剩余积分",value:t.calculate}}),t.getCouponDetail?n("div",{staticClass:"getCouponDetail"},[n("p",[t._v("优惠券细则")]),n("p",{domProps:{innerHTML:t._s(t.getCouponDetail)}})]):t._e()],1)]:t._e(),"cash"===t.$route.query.type?[n("van-cell-group",[n("van-cell",{staticClass:"is-highlighted",attrs:{title:"支付金额",value:t.getCouponPoint}}),n("van-cell",{attrs:{title:"支付方式","is-link":"",value:t.paymentMedthodSelected||t.getDefaultSelectValue},on:{click:function(e){t.showPaymentMethod=!0}}}),t.getCouponDetail?n("div",{staticClass:"getCouponDetail"},[n("p",[t._v("优惠券细则")]),n("p",{domProps:{innerHTML:t._s(t.getCouponDetail)}})]):t._e()],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPaymentMethod,callback:function(e){t.showPaymentMethod=e},expression:"showPaymentMethod"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.getPaymentMethod},on:{confirm:t.paymentMethodPickerOnConfirm,cancel:function(e){t.showPaymentMethod=!1}}})],1)]:t._e(),"y"!=t.fromMine?n("div",{staticClass:"button-section"},[n("van-button",{attrs:{type:"danger",size:"normal",block:""},on:{click:t.payIt}},[t._v(t._s("cash"===t.$route.query.type?"立即支付":"立即兑换")+"\n        ")])],1):t._e(),n("div",{domProps:{innerHTML:t._s(t.htmlPayForm)}})],2)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},qrpI:function(t,e,n){n("8sHD"),t.exports=n("FeBl").Number.parseInt}});