webpackJsonp([35],{"+q0G":function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,"",""])},"3kee":function(t,n,o){"use strict";(function(t){var e=o("Dd8w"),i=o.n(e),a=o("//Fk"),s=o.n(a),c=o("5cTm"),r=o("NYxO");o("NFYZ"),o("62+5"),o("IdIt");n.a={layout:"notabbar",components:{Coupon:c.a},fetch:function(t){var n=t.store,o=t.query;return s.a.all([n.dispatch("coupons/queryListCoupon",{projectId:o.id})])},data:function(){return{code:this.$route.query.code,active:0,tabList:{points:{title:"积分兑换",data:[],type:"points"},cash:{title:"现金购买",data:[],type:"cash"}},sourceOrderList:[{discountInfor:"新楼盘打折促销优惠券",gainDate:"2018.09.02",voucherEffecttime:"2018年8月1日到2018年8月3日",voucherCondition:"仅限广州楼盘使用",availableAmount:"10000",voucherType:"折扣券/限量",totalAmount:"111",earnInPrice:"500",earnInPoint:"1000"},{discountInfor:"新楼盘打折促销优惠券",gainDate:"2018.09.02",voucherEffecttime:"2018年8月1日到2018年8月3日",voucherCondition:"仅限广州楼盘使用",availableAmount:"10000",voucherType:"折扣券/限量",totalAmount:"111",earnInPrice:"500",earnInPoint:"1000"},{discountInfor:"新楼盘打折促销优惠券",gainDate:"2018.09.02",voucherEffecttime:"2018年8月1日到2018年8月3日",voucherCondition:"全场通用",availableAmount:"10000",voucherType:"折扣券/限量",totalAmount:"111",earnInPrice:"500",earnInPoint:"1000"}]}},computed:i()({},Object(r.mapGetters)({getListCoupons:"coupons/getListCoupons",isAuthorized:"authorization/isAuthorized"})),mounted:function(){this.tabList.points.data=t.filter(this.getListCoupons.data,function(t){return t.earnInPoint>0}),this.tabList.cash.data=t.filter(this.getListCoupons.data,function(t){return t.earnInPrice>0});try{this.wechatAuth(this)}catch(t){console.log("微信授权失败",t)}},methods:{}}}).call(n,o("M4fF"))},"5cTm":function(t,n,o){"use strict";var e=o("ZvNc"),i=o("av00"),a=!1;var s=function(t){a||o("MwSR")},c=o("VU/8")(e.a,i.a,!1,s,"data-v-0fbf9bc2",null);c.options.__file="components\\common\\Coupon.vue",n.a=c.exports},M4dP:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n.coupon-list .notice[data-v-0fbf9bc2] {\n  font-size: 0.26667rem;\n  padding: 0px 0.93333rem;\n}\n.coupon-list .noresult[data-v-0fbf9bc2] {\n  padding: 0.4rem 0.93333rem;\n  font-size: 0.64rem;\n}\n.coupon-list .box[data-v-0fbf9bc2] {\n  margin: 5PX 0.4rem 0.4rem 0.4rem;\n  padding: 0.4rem 0.66667rem;\n  border: 1PX solid #f8f8f8;\n}\n.coupon-list .box[data-v-0fbf9bc2]:not(.selectable), .coupon-list .box.is-selected[data-v-0fbf9bc2] {\n    border: 1PX solid #FF6E6E;\n}\n.coupon-list .box .type[data-v-0fbf9bc2] {\n    color: #FF6E6E;\n    font-size: 0.58667rem;\n    text-align: right;\n}\n.coupon-list .box .button-section[data-v-0fbf9bc2] {\n    margin: 0 0.93333rem;\n}\n.coupon-list .box .button-section button[data-v-0fbf9bc2] {\n      border-radius: 8PX !important;\n}\n.coupon-list .box .coupon-wrap[data-v-0fbf9bc2] {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: flex !important;\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n            align-items: center !important;\n    margin-bottom: 0.93333rem;\n}\n.coupon-list .box .coupon-wrap .coupon-left[data-v-0fbf9bc2] {\n      margin-right: 0.93333rem;\n      padding-right: 0.93333rem;\n      text-align: center;\n      width: 50%;\n      border-right: 1PX solid #DADADA;\n}\n.coupon-list .box .coupon-wrap .coupon-left strong[data-v-0fbf9bc2] {\n        color: #252525;\n        font-size: 1.33333rem;\n}\n.coupon-list .box .coupon-wrap .coupon-left p[data-v-0fbf9bc2] {\n        color: #B2B2B2;\n        font-size: 0.74667rem;\n}\n.coupon-list .box .coupon-wrap .coupon-right .description[data-v-0fbf9bc2] {\n      color: #252525;\n      font-size: 0.74667rem;\n}\n.coupon-list .box .coupon-wrap .coupon-right .eff-time[data-v-0fbf9bc2] {\n      color: #7A7A7A;\n      font-size: 0.69333rem;\n}\n.coupon-list .box .coupon-wrap .coupon-right .time[data-v-0fbf9bc2] {\n      margin-top: 0.4rem;\n      color: #C40224;\n      font-size: 0.58667rem;\n}\n.coupon-list .confirm-popup[data-v-0fbf9bc2] {\n  width: 80%;\n}\n.coupon-list .confirm-popup .confirm-details[data-v-0fbf9bc2] {\n    padding: 15PX;\n}\n.coupon-list .confirm-popup .confirm-details .confirm-title[data-v-0fbf9bc2] {\n      font-size: 0.85333rem;\n      font-weight: bold;\n      color: #C40224;\n      padding: 15PX 0;\n      text-align: center;\n}\n.coupon-list .confirm-popup .confirm-details .confirm-title h3[data-v-0fbf9bc2] {\n        margin-top: 0.93333rem;\n}\n.coupon-list .confirm-popup .confirm-details .confirm-content[data-v-0fbf9bc2] {\n      color: #7A7A7A;\n      font-size: 0.74667rem;\n}\n.coupon-list .confirm-popup .confirm-details .button-section[data-v-0fbf9bc2] {\n      margin-top: 2.13333rem;\n}\n.coupon-list .confirm-popup .confirm-details .button-section .van-button--warning[data-v-0fbf9bc2] {\n        background-color: #BA1C28;\n        border-color: #BA1C28;\n}\n",""])},MwSR:function(t,n,o){var e=o("M4dP");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("rjj0")("6c98dacd",e,!1,{sourceMap:!1})},RdFu:function(t,n,o){t.exports=o.p+"img/below_ic_inedx_selected.eecde3e.png"},RhkN:function(t,n,o){var e=o("+q0G");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("rjj0")("3ce8390c",e,!1,{sourceMap:!1})},ZvNc:function(t,n,o){"use strict";(function(t){var e=o("Dd8w"),i=o.n(e),a=o("NYxO");n.a={name:"timesshop-coupon",computed:i()({},Object(a.mapGetters)({isAuthorized:"authorization/isAuthorized",getClaimSuccess:"coupons/getClaimSuccess"})),props:{source:{type:Array,required:!0},type:{type:String,default:function(){return"points"}},buttons:{type:Object,default:function(){return!1}},couponPage:{type:String,default:function(){return"coupons"}},canBeSelected:{type:Boolean,default:function(){return!1}}},data:function(){return{selected:[]}},methods:{makeConfirm:function(){this.$store.dispatch("coupons/setClaimSuccess",{})},useItNow:function(t,n){if(!this.isAuthorized)return this.$store.commit("authorization/SET_VISIT_PATH","/coupons?name=积分商城"),this.$router.push({name:"mine-account-sso",query:{login:"true",from:"/coupons?name=积分商城"}});this.$router.push({name:"coupons-id",params:{id:n.id},query:{type:t}})},makeItSelected:function(n){this.canBeSelected&&(t.find(this.selected,n)?this.selected.splice(t.findIndex(this.selected,n),1):this.selected.push(n),this.$emit("receiveFromChild",this.selected))},hasSelected:function(n){return t.find(this.selected,n)?"is-selected":""}}}}).call(n,o("M4fF"))},av00:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"coupon-list"},[t.source.length?[t._l(t.source,function(n,e){return o("div",{key:e,staticClass:"box is-shadowless",class:[{selectable:t.canBeSelected},t.hasSelected(n)],on:{click:function(o){t.makeItSelected(n)}}},[o("div",{staticClass:"type"},[t._v(t._s(t._f("findCouponMapping")(n.couponType)))]),o("div",{staticClass:"coupon-wrap"},[o("div",{staticClass:"coupon-left"},[o("strong",[t._v(t._s("mine"===t.couponPage?n.couponName:"points"==t.type?n.earnInPoint:n.earnInPrice))]),o("p",[t._v(t._s(n.couponTag))])]),o("div",{staticClass:"coupon-right"},["mine"===t.couponPage?[o("p",{staticClass:"description"},[t._v(t._s(n.couponDescription))]),o("p",{staticClass:"eff-time"},[t._v(t._s(n.couponInstanceValidFrom)+" 到 "+t._s(n.couponInstanceValidTo))]),o("p",{staticClass:"time"},[t._v("获取时间: "+t._s(n.gainDate))])]:[o("p",{staticClass:"description"},[t._v(t._s(n.name))]),o("p",{staticClass:"eff-time"},[t._v(t._s(t._f("timeToDate")(n.couponValidFrom))+" 到 "+t._s(t._f("timeToDate")(n.couponValidTo)))]),o("p",{staticClass:"time"},[t._v("剩余: "+t._s(n.availableAmount))])]],2),t.canBeSelected?o("div",{staticClass:"checkbox"},[o("van-icon",{attrs:{name:"checked",color:t.hasSelected(n)?"#FF6E6E":"#FFFFFF"}})],1):t._e()]),t.buttons.status?o("div",{staticClass:"button-section"},[o("van-button",{attrs:{type:"danger",size:"normal",block:""},on:{click:function(o){t.useItNow(t.buttons.type,n)}}},[t._v(t._s("points"===t.buttons.type?"立即兑换":"立即购买"))])],1):t._e()])}),o("van-popup",{staticClass:"confirm-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.getClaimSuccess.status,callback:function(n){t.$set(t.getClaimSuccess,"status",n)},expression:"getClaimSuccess.status"}},[o("div",{staticClass:"confirm-details"},[o("div",{staticClass:"confirm-title"},[o("van-icon",{attrs:{name:"checked",size:"6em",color:"#FF6E6E"}}),o("h3",[t._v("恭喜您，"+t._s(t.getClaimSuccess.words)+"成功")])],1),o("div",{staticClass:"button-section"},[o("van-button",{attrs:{block:"",type:"warning"},on:{click:t.makeConfirm}},[t._v("确定")])],1)])])]:o("p",{staticClass:"noresult"},[t._v("找不到优惠券信息")])],2)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};n.a=i},pfcL:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"mine-conpons-list"}},[e("van-nav-bar",{attrs:{"left-arrow":"",title:"积分商城",id:"navbar"},on:{"click-left":function(n){t.$router.back()}}},[e("van-icon",{attrs:{slot:"right"},slot:"right"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[e("img",{attrs:{src:o("RdFu"),alt:""}})])],1)],1),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.tabList,function(n,o,i){return e("van-tab",{key:o,attrs:{title:n.title}},[n.data.length?[e("Coupon",{attrs:{source:n.data,type:n.type,buttons:{status:!0,type:o}}})]:e("p",{staticClass:"noresult"},[t._v("没找到"+t._s(n.title)+"的优惠券")])],2)}))],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};n.a=i},qw6S:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("3kee"),i=o("pfcL"),a=!1;var s=function(t){a||o("RhkN")},c=o("VU/8")(e.a,i.a,!1,s,"data-v-e28d18e6",null);c.options.__file="pages\\coupons\\index.vue",n.default=c.exports}});