webpackJsonp([88],{"73T8":function(t,n,e){var a=e("RrYn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("e89126f0",a,!1,{sourceMap:!1})},EHpM:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-nav-bar",{attrs:{"left-arrow":"",title:"项目动态",id:"navbar"},on:{"click-left":function(n){t.$router.back()}}}),t._l(t.list,function(n,a){return e("van-cell-group",{key:a},[e("nuxt-link",{staticClass:"content-title",attrs:{to:{name:"cms-newDetail",params:{title:n.title},query:{code:n.code}}}},[e("div",{staticClass:"new-lists"},[e("span",{staticClass:"title"},[t._v(t._s(n.title))]),e("span",{staticClass:"date"},[t._v(t._s(n.date))])])])],1)})],2)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};n.a=i},LpcY:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Nxm5"),i=e("EHpM"),s=!1;var o=function(t){s||e("73T8")},c=e("VU/8")(a.a,i.a,!1,o,"data-v-49c50981",null);c.options.__file="pages\\house\\detail\\newsMore.vue",n.default=c.exports},Nxm5:function(t,n,e){"use strict";var a=e("62+5"),i=e("IdIt");n.a={name:"",data:function(){return{list:[],loading:!1,finished:!1}},created:function(){var t=this,n=t.$route.query.projId;a.a.getRequest(i.a.common.newsList,{projId:n,platform:"MOB"}).then(function(n){t.list=n.data})},methods:{onLoad:function(){}}}},RrYn:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.new-lists[data-v-49c50981] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 10PX;\n}\n.new-lists span[data-v-49c50981] {\n    display: inline-block;\n    line-height: 30PX;\n}\n.new-lists .title[data-v-49c50981] {\n    font-size: 16PX;\n    margin: 0;\n}\n.new-lists .date[data-v-49c50981] {\n    font-size: 14PX;\n}\n.content[data-v-49c50981] {\n  padding: 0 10PX 10PX;\n  font-size: 14PX;\n}\n",""])}});