webpackJsonp([8],{"3+5+":function(e,t,n){e.exports=n.p+"img/below_ic_mine2.f7eb86d.png"},"5BZQ":function(e,t,n){e.exports=n.p+"img/below_ic_service_selected.35dfbaf.png"},"5gck":function(e,t,n){var i=n("9OZ3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("248cc79f",i,!1,{sourceMap:!1})},"9OHW":function(e,t,n){"use strict";var i=n("mvHQ"),o=n.n(i),c=n("Dd8w"),s=n.n(c),a=n("zswl"),r=n("NYxO"),p=n("62+5"),u=n("IdIt");t.a={data:function(){return{imgPrefix:"",tips:!1,content:""}},components:{Tabbar:a.a},head:function(){return{script:[{src:"https://res.wx.qq.com/open/js/jweixin-1.4.0.js",async:!0,defer:!0}]}},computed:s()({},Object(r.mapGetters)({getUserLoginResponse:"authorization/getUserLoginResponse",tipsType:"page/getTipsType",projectId:"page/getProjectId"})),created:function(){this.$store.commit("page/setTipsType","index"),this.$store.commit("page/setProjectId","")},mounted:function(){var e=this,t=this,n=this.$store.state.share.shareType;if("activity"!==n||"auction"!==n||"falshbuy"!==n||"productDetail"!==n){p.a.postRequest(u.a.share.getConfig,{appid:"wx8b729213fa67ac2f",url:window.location.href.split("#")[0]}).then(function(n){if(n&&"true"==n.success){wx.config({appId:"wx8b729213fa67ac2f",timestamp:n.timestamp,nonceStr:"wm3WZYTPz0wzccnw",signature:n.signature,jsApiList:["onMenuShareAppMessage"]});var i=e.imgPrefix;wx.ready(function(){p.a.getRequest(u.a.share.getShareContent("index","index")).then(function(e){"true"===e.success&&wx.onMenuShareAppMessage({title:e.title,desc:e.desc,link:window.location.href,imgUrl:i+e.imgUrl,success:function(){}})})})}else t.$toast(n.exception||"获取sdk校验参数失败")})}switch(this.tipsType){case"detail":n=2,setTimeout(function(){p.a.postRequest(u.a.copywrite.getWriting,{type:"detail",productCode:t.projectId}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4);break;case"list":n=1,setTimeout(function(){p.a.postRequest(u.a.copywrite.getWriting,{type:"list",productCode:""}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4);break;default:n=0,setTimeout(function(){p.a.postRequest(u.a.copywrite.getWriting,{type:"index",productCode:""}).then(function(e){e&&"true"==e.success&&(t.content=e.document,t.tips=!0,setTimeout(function(){return t.tips=!1},5e3))})},12e4)}p.a.getRequest(u.a.consultant.get,{type:this.tipsType,projectId:this.projectId}).then(function(t){var i=t.data;if(null!==i){var c="",s=e.getUserLoginResponse;s.data&&(c=s.data.userId||""),console.log(o()({user_id:c,user_mobile:c,asker_id:i.code,asker_phone:(i.mobile||"4009305151")+","+i.agent.code,product_code:e.projectId||"",type:n})),ChatInit("DS",{user_id:c,user_mobile:c,asker_id:i.code,asker_phone:(i.mobile||"4009305151")+","+i.agent.code,product_code:e.projectId||"",type:n})}})}}},"9OZ3":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#footer img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#footer .bigv {\n  line-height: 3 !important;\n}\n#footer .big {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n#footer .van-tabbar-item--active .van-tabbar-item__text span {\n  color: #ba1c28;\n}\n#footer .van-tabbar-item__text span {\n  font-size: 11PX;\n}\n#footer .van-tabbar {\n  height: 65PX;\n}\n#footer .van-tabbar-item {\n  line-height: 0.3;\n}\n#footer .van-tabbar-item__icon {\n  margin-bottom: 1PX;\n  z-index: 9999;\n}\n.bigs {\n  position: relative;\n  top: -18PX;\n}\n",""])},"9rgl":function(e,t,n){e.exports=n.p+"img/below_ic_zixun.191df73.png"},LDAn:function(e,t,n){e.exports=n.p+"img/below_ic_index1.cd6b6b4.png"},Ma2J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("9OHW"),o=n("STrE"),c=n("VU/8")(i.a,o.a,!1,null,null,null);c.options.__file="layouts\\default.vue",t.default=c.exports},Nsfh:function(e,t,n){e.exports=n.p+"img/below_ic_mine.ba5901e.png"},OxYG:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabBarList,function(t,i){return n("van-tabbar-item",{key:i,class:2==i?"bigv":"",attrs:{replace:!0,url:t.url},scopedSlots:e._u([{key:"icon",fn:function(o){return n("img",{class:2==i?"big":"",attrs:{alt:t.name,src:o.active?e.imgPath(t.iconActived):e.imgPath(t.icon)}})}}])},[n("span",{class:2==i?"bigs":""},[e._v(e._s(t.name))])])}))],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},Pk6E:function(e,t,n){e.exports=n.p+"img/below_ic_index1_select.b62e6d7.png"},RdFu:function(e,t,n){e.exports=n.p+"img/below_ic_inedx_selected.eecde3e.png"},STrE:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nuxt"),t("Tabbar"),this.tips?t("div",{staticClass:"van-toast van-toast--text van-toast--middle",staticStyle:{"z-index":"2000"},on:{click:this.onlineChat}},[t("div",[this._v(this._s(this.content))])]):this._e()],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},USzD:function(e,t,n){e.exports=n.p+"img/below_ic_service.bc02585.png"},YSwX:function(e,t,n){e.exports=n.p+"img/below_ic_house2.b423ef2.png"},YW9T:function(e,t,n){"use strict";var i=n("Dd8w"),o=n.n(i),c=n("NYxO");n("62+5"),n("IdIt");t.a={name:"timesshop-tabbar",data:function(){return{active:0,tips:!1,content:"",imgPrefix:"",onlineChatUrl:"",keye:"index",tabBarList:[{pathName:"index",url:"/",icon:"below_ic_index3_select",iconActived:"below_ic_index3",name:"首页"},{pathName:"house",url:"/house",icon:"below_ic_house2_select",iconActived:"below_ic_house2",name:"楼盘"},{pathName:"onlineChat",url:void 0,icon:"below_ic_zixun",iconActived:"below_ic_zixun",name:"我要咨询"},{pathName:"service",url:"/service",icon:"below_ic_index1_select",iconActived:"below_ic_index1",name:"服务"},{pathName:"mine-account",url:"/mine/account",icon:"below_ic_mine2_select",iconActived:"below_ic_mine2",name:"我的"}]}},watch:{$route:"changeActive"},created:function(){var e=this.$route.name;this.setActive(e)},computed:o()({},Object(c.mapGetters)({tipsType:"page/getTipsType",projectId:"page/getProjectId",user:"authorization/getUserLoginResponse"})),mounted:function(){document.querySelector("#footer img.big").addEventListener("click",this.onlineChat)},methods:{imgPath:function(e){return n("fHd/")("./"+e+".png")},changeActive:function(e){var t=e.name;this.setActive(t)},setActive:function(e){var t=this;this.tabBarList.forEach(function(n,i){if(n.pathName==e)return t.active=i,!1})}}}},dF8c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA31JREFUWAntWEtrU0EUzs2TqODGhYGqUP0JUcSFhmqIYKIL0b+gtFRaQVeuXAr1gdS9CKKoC/Miu2RlQUEQ3IhaF1bIQgQJSN7xO9c7w8l08ph0oiC9MMyZM+fxzTln5t65Pt/2859HwOHr6/V6Tj6fXwZvHvRBPjcm/dVxnIexWOxmPB5vjakzVCzIZwkcgK1wniG9D/o3qtXqTuhdNdTVivcBhMQ8SSEKK+FweLXdbne1Whqm3+93IH8BAG+hXUK7BjsdjagRqy/F2Wy2R9qRSGQ2lUp9MbIE4XK5HKzVam5qAW4mk8l8M7WhyvtVBo1NIsf1E4mEjBgyoLXN5cehrRgRjhA1NwM0xiKt2FZrUPjS9oVCId3tdk9j8hXS91gnRCDxOFSTunlTntEqAe4InC+gzQ1yROhozhZAowgOAqXwXYCNRmM5l8v9UOYGDWld69FoNJtMJn9yIesAvRSTj0UvmNzfULper29gUXMon49C0DpAgHJrD0BfgK4JR8N6yFLhJtFmQN6F7Bkhbx2gMAxH1xGJdTEe1ReLxaPY+WsAeZzLGm0SrmibxoKqns1d3PY0ALopDoVC8kzkDk3paQA0xTBU3jpApMrKAS1Qm26SsZ3jUJcpRuEP1MN6pJwAxXtTgEONkWEdGHxnPgP/PHdMNMBl0Z1T+XxsPcXCOI+g4E3Sm0ZwYKpGOL+MaOm+sH+N0POZAhyZYuGQRxAH9nfBN+1NAT6Cg7VAILBh6mhSeSOA3ktcvshVp7RB8LJX2VsaGwE08YRPflkO2MX0ZXNY1Uddvk2n0/RxMPCxDVC7iQDuBNqmYwaodqNtHSAicAyGTsJJiC2VLkhvkPYi40my0+nICIL5BF/Y7+SkRyCCH1SeOh4ZQdRUBsBeommjQ5d9liatDBbxXHU87ngkQBiiyzgW67wG/Z4Z3g/+KbSL4G1KkxJBpmZGjgNwh2fyKSJxW5hH5M4SQIzFvJiy2lt91VUqFZli/J3gNTgx6D6ASKNrNBgM9vEntm6giJJwfQoMQrUvxUjZZ0wcarVai6VS6QG9rnBPoD9V9OzBvUH+ksPc3j9sX0TwcSuT9nDtPAB+1JMZ2tEdutlsLnhCn7iwTAkxUVdLcHyHC/xtGhFcQq3fE377ACKC9APzCibpN9wsjYXgNHsvrXQDXMWRdV9N8zR9b9v+5xH4DUe4TT1Azk0zAAAAAElFTkSuQmCC"},"fHd/":function(e,t,n){var i={"./below_ic_ house.png":"dF8c","./below_ic_house2.png":"YSwX","./below_ic_house2_select.png":"t1bp","./below_ic_house_selected.png":"uG/Q","./below_ic_index.png":"m49X","./below_ic_index1.png":"LDAn","./below_ic_index1_select.png":"Pk6E","./below_ic_index3.png":"mRcq","./below_ic_index3_select.png":"feE0","./below_ic_inedx_selected.png":"RdFu","./below_ic_mine.png":"Nsfh","./below_ic_mine2.png":"3+5+","./below_ic_mine2_select.png":"gmev","./below_ic_mine_selected.png":"kWF7","./below_ic_service.png":"USzD","./below_ic_service_selected.png":"5BZQ","./below_ic_zixun.png":"9rgl"};function o(e){return n(c(e))}function c(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(i)},o.resolve=c,e.exports=o,o.id="fHd/"},feE0:function(e,t,n){e.exports=n.p+"img/below_ic_index3_select.d70a613.png"},gmev:function(e,t,n){e.exports=n.p+"img/below_ic_mine2_select.fd82188.png"},kWF7:function(e,t,n){e.exports=n.p+"img/below_ic_mine_selected.c0c0498.png"},m49X:function(e,t,n){e.exports=n.p+"img/below_ic_index.abf34fa.png"},mRcq:function(e,t,n){e.exports=n.p+"img/below_ic_index3.ed3d46e.png"},t1bp:function(e,t,n){e.exports=n.p+"img/below_ic_house2_select.f95c488.png"},"uG/Q":function(e,t,n){e.exports=n.p+"img/below_ic_house_selected.8c5d0bf.png"},zswl:function(e,t,n){"use strict";var i=n("YW9T"),o=n("OxYG"),c=!1;var s=function(e){c||n("5gck")},a=n("VU/8")(i.a,o.a,!1,s,null,null);a.options.__file="components\\common\\Tabbar.vue",t.a=a.exports}});