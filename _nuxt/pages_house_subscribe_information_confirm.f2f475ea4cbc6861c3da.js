webpackJsonp([82],{"6m2X":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("EJWo"),s=r("tSGM"),a=!1;var n=function(e){a||r("NgrD")},o=r("VU/8")(i.a,s.a,!1,n,"data-v-185ef7e8",null);o.options.__file="pages\\house\\subscribe\\information\\confirm.vue",t.default=o.exports},EJWo:function(e,t,r){"use strict";var i=r("Dd8w"),s=r.n(i),a=r("//Fk"),n=r.n(a),o=r("NYxO");t.a={layout:"notabbar",middleware:["authorizationRequired","orderChecking"],fetch:function(e){var t=e.store;return n.a.all([t.dispatch("orders/getSubscribeOrderDetails")])},computed:s()({},Object(o.mapGetters)({getTempSubscribeRoomList:"tempSubscribe/getTempSubscribeRoomList",getTempSubscribeParkingList:"tempSubscribe/getTempSubscribeParkingList",getSubscribeOrderDetails:"orders/getSubscribeOrderDetails",getOrderResponse:"orders/getOrderResponse",getHouseDetails:"house/getHouseDetails",isAuthentication:"authorization/isAuthentication"})),methods:{activityForm:function(){}}}},FQr4:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n#house-subscribe-information-confirm .button-section[data-v-185ef7e8] {\n  margin: 50PX 35PX 0;\n}\n",""])},NgrD:function(e,t,r){var i=r("FQr4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("39d1f49a",i,!1,{sourceMap:!1})},tSGM:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"house-subscribe-information-confirm"}},[r("van-nav-bar",{attrs:{"left-arrow":"",title:"确认认购信息",id:"navbar"},on:{"click-left":function(t){e.$router.back()}}}),r("van-cell-group",[r("van-cell",{attrs:{title:"楼盘",value:"显示价格"}})],1),r("h2",{staticClass:"van-block__title"},[e._v("温馨提示...")]),r("div",{staticClass:"button-section"},[r("van-button",{attrs:{type:"danger",size:"normal",block:""},on:{click:e.activityForm}},[e._v("支付")])],1)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s}});