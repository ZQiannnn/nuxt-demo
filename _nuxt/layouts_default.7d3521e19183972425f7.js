webpackJsonp([9],{"5BZQ":function(e,t,i){e.exports=i.p+"img/below_ic_service_selected.35dfbaf.png"},"6euq":function(e,t,i){"use strict";var n=i("Dd8w"),c=i.n(n),o=i("NYxO");i("62+5"),i("IdIt");t.a={name:"timesshop-tabbar",data:function(){return{active:0,tips:!1,content:"",imgPrefix:"",keye:"index",tabBarList:[{pathName:"index",url:"/",icon:"below_ic_index",iconActived:"below_ic_inedx_selected",name:"首页"},{pathName:"house",url:"/house",icon:"below_ic_ house",iconActived:"below_ic_house_selected",name:"楼盘"},{pathName:"service",url:"service",icon:"below_ic_service",iconActived:"below_ic_service_selected",name:"服务"},{pathName:"mineaccount",url:"/mine/account",icon:"below_ic_mine",iconActived:"below_ic_mine_selected",name:"我的"}]}},watch:{$route:"changeActive"},created:function(){var e=this.$route.name;this.setActive(e)},computed:c()({},Object(o.mapGetters)({tipsType:"page/getTipsType",projectId:"page/getProjectId"})),methods:{imgPath:function(e){return i("fHd/")("./"+e+".png")},changeActive:function(e){var t=e.name;this.setActive(t)},setActive:function(e){var t=this;this.tabBarList.forEach(function(i,n){if(i.pathName==e)return t.active=n,!1})}}}},Ma2J:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("g065"),c=i("STrE"),o=i("VU/8")(n.a,c.a,!1,null,null,null);o.options.__file="layouts\\default.vue",t.default=o.exports},Nsfh:function(e,t,i){e.exports=i.p+"img/below_ic_mine.ba5901e.png"},NxzH:function(e,t,i){var n=i("XYkL");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("302129bc",n,!1,{sourceMap:!1})},RdFu:function(e,t,i){e.exports=i.p+"img/below_ic_inedx_selected.eecde3e.png"},STrE:function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt",{attrs:{"keep-alive":""}}),t("Tabbar"),this.tips?t("div",{staticClass:"van-toast van-toast--text van-toast--middle",staticStyle:{"z-index":"2000"},on:{click:this.onlineChat}},[t("div",[this._v(this._s(this.content))])]):this._e()],1)};n._withStripped=!0;var c={render:n,staticRenderFns:[]};t.a=c},USzD:function(e,t,i){e.exports=i.p+"img/below_ic_service.bc02585.png"},XYkL:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n#footer img[data-v-63499657] {\n  width: 1.06667rem;\n  height: 1.06667rem;\n}\n#footer .van-tabbar-item--active .van-tabbar-item__text span[data-v-63499657] {\n  color: #ba1c28;\n}\n",""])},dF8c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA31JREFUWAntWEtrU0EUzs2TqODGhYGqUP0JUcSFhmqIYKIL0b+gtFRaQVeuXAr1gdS9CKKoC/Miu2RlQUEQ3IhaF1bIQgQJSN7xO9c7w8l08ph0oiC9MMyZM+fxzTln5t65Pt/2859HwOHr6/V6Tj6fXwZvHvRBPjcm/dVxnIexWOxmPB5vjakzVCzIZwkcgK1wniG9D/o3qtXqTuhdNdTVivcBhMQ8SSEKK+FweLXdbne1Whqm3+93IH8BAG+hXUK7BjsdjagRqy/F2Wy2R9qRSGQ2lUp9MbIE4XK5HKzVam5qAW4mk8l8M7WhyvtVBo1NIsf1E4mEjBgyoLXN5cehrRgRjhA1NwM0xiKt2FZrUPjS9oVCId3tdk9j8hXS91gnRCDxOFSTunlTntEqAe4InC+gzQ1yROhozhZAowgOAqXwXYCNRmM5l8v9UOYGDWld69FoNJtMJn9yIesAvRSTj0UvmNzfULper29gUXMon49C0DpAgHJrD0BfgK4JR8N6yFLhJtFmQN6F7Bkhbx2gMAxH1xGJdTEe1ReLxaPY+WsAeZzLGm0SrmibxoKqns1d3PY0ALopDoVC8kzkDk3paQA0xTBU3jpApMrKAS1Qm26SsZ3jUJcpRuEP1MN6pJwAxXtTgEONkWEdGHxnPgP/PHdMNMBl0Z1T+XxsPcXCOI+g4E3Sm0ZwYKpGOL+MaOm+sH+N0POZAhyZYuGQRxAH9nfBN+1NAT6Cg7VAILBh6mhSeSOA3ktcvshVp7RB8LJX2VsaGwE08YRPflkO2MX0ZXNY1Uddvk2n0/RxMPCxDVC7iQDuBNqmYwaodqNtHSAicAyGTsJJiC2VLkhvkPYi40my0+nICIL5BF/Y7+SkRyCCH1SeOh4ZQdRUBsBeommjQ5d9liatDBbxXHU87ngkQBiiyzgW67wG/Z4Z3g/+KbSL4G1KkxJBpmZGjgNwh2fyKSJxW5hH5M4SQIzFvJiy2lt91VUqFZli/J3gNTgx6D6ASKNrNBgM9vEntm6giJJwfQoMQrUvxUjZZ0wcarVai6VS6QG9rnBPoD9V9OzBvUH+ksPc3j9sX0TwcSuT9nDtPAB+1JMZ2tEdutlsLnhCn7iwTAkxUVdLcHyHC/xtGhFcQq3fE377ACKC9APzCibpN9wsjYXgNHsvrXQDXMWRdV9N8zR9b9v+5xH4DUe4TT1Azk0zAAAAAElFTkSuQmCC"},"fHd/":function(e,t,i){var n={"./below_ic_ house.png":"dF8c","./below_ic_house_selected.png":"uG/Q","./below_ic_index.png":"m49X","./below_ic_inedx_selected.png":"RdFu","./below_ic_mine.png":"Nsfh","./below_ic_mine_selected.png":"kWF7","./below_ic_service.png":"USzD","./below_ic_service_selected.png":"5BZQ"};function c(e){return i(o(e))}function o(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id="fHd/"},g065:function(e,t,i){"use strict";var n=i("mvHQ"),c=i.n(n),o=i("Dd8w"),s=i.n(o),a=i("zswl"),r=i("NYxO"),u=i("62+5"),p=i("IdIt");t.a={data:function(){return{imgPrefix:"",tips:!1,content:""}},components:{Tabbar:a.a},head:function(){return{script:[{src:"https://res.wx.qq.com/open/js/jweixin-1.4.0.js",async:!0,defer:!0}]}},computed:s()({},Object(r.mapGetters)({getUserLoginResponse:"authorization/getUserLoginResponse",tipsType:"page/getTipsType",projectId:"page/getProjectId"})),created:function(){this.$store.commit("page/setTipsType","index"),this.$store.commit("page/setProjectId","")},mounted:function(){var e=this,t=this,i=this.$store.state.share.shareType;if("activity"!==i||"auction"!==i||"falshbuy"!==i||"productDetail"!==i){u.a.postRequest(p.a.share.getConfig,{appid:"wx8b729213fa67ac2f",url:window.location.href.split("#")[0]}).then(function(i){if(i&&"true"==i.success){wx.config({appId:"wx8b729213fa67ac2f",timestamp:i.timestamp,nonceStr:"wm3WZYTPz0wzccnw",signature:i.signature,jsApiList:["onMenuShareAppMessage"]});var n=e.imgPrefix;wx.ready(function(){u.a.getRequest(p.a.share.getShareContent("index","index")).then(function(e){"true"===e.success&&wx.onMenuShareAppMessage({title:e.title,desc:e.desc,link:window.location.href,imgUrl:n+e.imgUrl,success:function(){}})})})}else t.$toast(i.exception||"获取sdk校验参数失败")})}switch(this.tipsType){case"detail":i=2,setTimeout(function(){u.a.postRequest(p.a.copywrite.getWriting,{type:"detail",productCode:t.projectId}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4);break;case"list":i=1,setTimeout(function(){u.a.postRequest(p.a.copywrite.getWriting,{type:"list",productCode:""}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4);break;default:i=0,setTimeout(function(){u.a.postRequest(p.a.copywrite.getWriting,{type:"index",productCode:""}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4)}u.a.getRequest(p.a.consultant.get,{type:this.tipsType,projectId:this.projectId}).then(function(t){var n=t.data;if(null!==n){var o="",s=e.getUserLoginResponse;s.data&&(o=s.data.userId||""),console.log(c()({user_id:o,user_mobile:o,asker_id:n.code,asker_phone:(n.mobile||"4009305151")+","+n.agent.code,product_code:e.projectId||"",type:i})),ChatInit("DS",{user_id:o,user_mobile:o,asker_id:n.code,asker_phone:(n.mobile||"4009305151")+","+n.agent.code,product_code:e.projectId||"",type:i})}})}}},g99q:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"footer"}},[i("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabBarList,function(t,n){return i("van-tabbar-item",{key:n,attrs:{replace:!0,url:t.url},scopedSlots:e._u([{key:"icon",fn:function(n){return i("img",{attrs:{alt:t.name,src:n.active?e.imgPath(t.iconActived):e.imgPath(t.icon)}})}}])},[i("span",[e._v(e._s(t.name))])])}))],1)};n._withStripped=!0;var c={render:n,staticRenderFns:[]};t.a=c},kWF7:function(e,t,i){e.exports=i.p+"img/below_ic_mine_selected.c0c0498.png"},m49X:function(e,t,i){e.exports=i.p+"img/below_ic_index.abf34fa.png"},"uG/Q":function(e,t,i){e.exports=i.p+"img/below_ic_house_selected.8c5d0bf.png"},zswl:function(e,t,i){"use strict";var n=i("6euq"),c=i("g99q"),o=!1;var s=function(e){o||i("NxzH")},a=i("VU/8")(n.a,c.a,!1,s,"data-v-63499657",null);a.options.__file="components\\common\\Tabbar.vue",t.a=a.exports}});