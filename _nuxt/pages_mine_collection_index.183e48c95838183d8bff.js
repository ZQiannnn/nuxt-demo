webpackJsonp([73],{"49JG":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#mine-account-collection h3[data-v-7e16b9c7] {\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n#mine-account-collection p[data-v-7e16b9c7] {\n  font-size: 0.64rem;\n  color: #7A7A7A;\n}\n#mine-account-collection p.noresult[data-v-7e16b9c7] {\n    padding: 15PX;\n}\n#mine-account-collection p.date[data-v-7e16b9c7] {\n    color: #B2B2B2;\n    font-size: 0.69333rem;\n    margin-top: 0.53333rem;\n}\n#mine-account-collection button[data-v-7e16b9c7] {\n  -webkit-align-self: center !important;\n          align-self: center !important;\n}\n",""])},JWsC:function(t,e,i){"use strict";(function(t){var n=i("Dd8w"),a=i.n(n),s=i("//Fk"),o=i.n(s),c=i("NYxO");e.a={layout:"notabbar",middleware:"authorizationRequired",fetch:function(t){var e=t.store;return o.a.all([e.dispatch("wishlist/myWishlist","APARTMENT"),e.dispatch("wishlist/myWishActivitys","EVENT")])},computed:a()({},Object(c.mapGetters)({getMyWishlist:"wishlist/getMyWishlist",getMyWishActivitys:"wishlist/getMyWishActivitys"})),methods:{gotoActivityDetail:function(t){this.$router.push({name:"activity-signup",query:{id:t.iteamId,title:t.projectName}})},gotoHouseDetail:function(t){t.projectId&&this.$router.push({name:"house-detail-id",params:{id:t.projectId},query:{name:t.projectName}})},cancelCollect:function(e,i){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"house",s="APARTMENT";"house"!=a&&(s="EVENT"),this.$store.dispatch("wishlist/wishlist",{method:"delete",typeId:s,iteamId:e.iteamId}).then(function(){"house"!=a?n.getMyWishActivitys.data.splice(t.findIndex(n.getMyWishlist.data,{iteamId:e.iteamId}),1):n.getMyWishlist.data.splice(t.findIndex(n.getMyWishlist.data,{iteamId:e.iteamId}),1),n.$toast({duration:500,forbidClick:!0,message:"取消收藏成功"})}).catch(function(t){n.$toast(t)})}}}}).call(e,i("M4fF"))},NJ60:function(t,e,i){var n=i("49JG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("00e0dfa6",n,!1,{sourceMap:!1})},iJ7D:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mine-account-collection"}},[i("van-nav-bar",{attrs:{"left-arrow":"",title:t.$route.query.name||"未知标题",id:"navbar"},on:{"click-left":function(e){t.$router.back()}}}),i("van-tabs",[i("van-tab",{attrs:{title:"房间/车位"}},[t.getMyWishlist.data.length?i("van-cell-group",t._l(t.getMyWishlist.data,function(e,n){return i("van-cell",{key:n},[i("template",{slot:"title"},[i("div",{on:{click:function(i){t.gotoHouseDetail(e)}}},[i("h3",[t._v(t._s(e.projectName))]),i("p",[t._v("单位号: "+t._s(e.buildingNumber)+t._s(e.apartmentNumber)+"号")]),i("p",[t._v("户型: "+t._s(e.huxing))]),i("p",{staticClass:"date"},[t._v(t._s(e.createdTime))])])]),i("template",{slot:"right-icon"},[i("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.cancelCollect(e,n)}}},[t._v("取消收藏")])],1)],2)})):i("p",{staticClass:"noresult"},[t._v("赶紧去添加收藏啊...")])],1),i("van-tab",{attrs:{title:"活动"}},[t.getMyWishActivitys.data.length?i("van-cell-group",t._l(t.getMyWishActivitys.data,function(e,n){return i("van-cell",{key:n},[i("template",{slot:"title"},[i("div",{on:{click:function(i){t.gotoActivityDetail(e)}}},[i("h3",[t._v("活动主题："+t._s(e.projectName))])])]),i("template",{slot:"right-icon"},[i("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.cancelCollect(e,n,"event")}}},[t._v("取消收藏")])],1)],2)})):i("p",{staticClass:"noresult"},[t._v("赶紧去添加收藏啊...")])],1)],1)],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},rlOi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("JWsC"),a=i("iJ7D"),s=!1;var o=function(t){s||i("NJ60")},c=i("VU/8")(n.a,a.a,!1,o,"data-v-7e16b9c7",null);c.options.__file="pages\\mine\\collection\\index.vue",e.default=c.exports}});