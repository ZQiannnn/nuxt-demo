webpackJsonp([86],{Avdc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("RjCH"),i=a("sozH"),s=!1;var o=function(e){s||a("JByd")},r=a("VU/8")(n.a,i.a,!1,o,"data-v-404d13ae",null);r.options.__file="pages\\house\\detail\\type\\index.vue",t.default=r.exports},JByd:function(e,t,a){var n=a("OOzU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("797b90ea",n,!1,{sourceMap:!1})},OOzU:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n#house-detail-type .card .card-image .mask[data-v-404d13ae] {\n  /*position: absolute;*/\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n#house-detail-type .card .card-image .button[data-v-404d13ae] {\n  position: absolute;\n  z-index: 11;\n  bottom: 1rem;\n  right: 1rem;\n}\n#house-detail-type .card .card-image .button i[data-v-404d13ae] {\n    margin-right: 0.4rem;\n}\n#house-detail-type .columns[data-v-404d13ae] {\n  background: #ffffff;\n  border-bottom: 1PX solid #eee;\n}\n#house-detail-type .columns .column p[data-v-404d13ae] {\n    color: #252525;\n    font-size: 0.74667rem;\n}\n#house-detail-type .columns .column strong[data-v-404d13ae] {\n    color: #BA1C28;\n    font-size: 0.8rem;\n}\n#house-detail-type .additional[data-v-404d13ae] {\n  padding: 15PX;\n  background-color: #ffffff;\n}\n#house-detail-type .additional p[data-v-404d13ae] {\n    color: #525252;\n    font-size: 0.74667rem;\n    margin-bottom: 0.4rem;\n}\n#house-detail-type .additional p.description[data-v-404d13ae] {\n      color: #7A7A7A;\n      font-size: 0.64rem;\n}\n#house-detail-type .additional p[data-v-404d13ae]:last-child {\n      margin-bottom: 0 !important;\n}\n#house-detail-type .unit-description[data-v-404d13ae] {\n  margin-top: 15PX;\n  padding: 15PX;\n  background-color: #ffffff;\n  font-size: 0.74667rem;\n  color: #525252;\n}\n#house-detail-type .unit-description h3[data-v-404d13ae] {\n    color: #454545;\n    font-size: 0.8rem;\n    font-weight: bold;\n}\n#house-detail-type .unit-description div[data-v-404d13ae] {\n    color: #7A7A7A;\n}\n#house-detail-type .remarks[data-v-404d13ae] {\n  padding: 15PX;\n  color: #7A7A7A;\n  font-size: 0.64rem;\n}\n#house-detail-type .van-image-preview img[data-v-404d13ae] {\n  pointer-events: none;\n}\n#house-detail-type .van-overflow-hidden .van-modal[data-v-404d13ae] {\n  background-color: black !important;\n}\n",""])},RjCH:function(e,t,a){"use strict";var n=a("Dd8w"),i=a.n(n),s=a("//Fk"),o=a.n(s),r=a("NYxO");t.a={layout:"notabbar",fetch:function(e){var t=e.store,a=e.query;return o.a.all([t.dispatch("house/queryHouseDetails",a.id)])},data:function(){return{show:!0,imgPrefix:"",active:0,imageGallery:[],imagePreviewInstance:null}},computed:i()({},Object(r.mapGetters)({getHouseDetails:"house/getHouseDetails"})),methods:{},mounted:function(){}}},sozH:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"house-detail-type"}},[a("van-nav-bar",{attrs:{"left-arrow":"",title:e.$route.query.name||"未知标题",id:"navbar"},on:{"click-left":function(t){e.$router.back()}}}),a("van-tabs",{attrs:{"lazy-render":!1,sticky:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.getHouseDetails.houseTypesInfor,function(t,n,i){return a("van-tab",{key:n,attrs:{title:t.houseTypesArea+"m²"}},[a("div",{staticClass:"card is-shadowless"},[a("div",{staticClass:"card-image"},[a("div",{staticClass:"mask"}),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.imgPrefix+t.houseTypesImage[0],preview:"1"}})])])]),a("div",{staticClass:"columns is-marginless is-mobile"},[a("div",{staticClass:"column is-one-third"},[a("p",[e._v("参考总价")]),a("strong",[e._v(e._s(e.getHouseDetails.averagePrice*t.houseTypesArea)+"元")])]),a("div",{staticClass:"column is-one-third"},[a("p",[e._v("户型")]),a("strong",[e._v(e._s(t.houseTypesName))])]),a("div",{staticClass:"column is-one-third"},[a("p",[e._v("建筑面积")]),a("strong",[e._v("约"+e._s(t.houseTypesArea)+"m²")])])]),a("div",{staticClass:"additional"},[a("p",[e._v("单价（约）: "+e._s(e.getHouseDetails.averagePrice)+"元/m²")]),a("p",[e._v("楼盘亮点: "+e._s(e._f("arrayToString")(t.houseTypesSellingPoint,"、")))]),a("p",{staticClass:"description"},[e._v("以上均价仅供参考，具体一房一价以案场信息为准。")])]),a("div",{staticClass:"unit-description"},[a("h3",[e._v("户型描述")]),t.houseTypeDescription?a("div",{domProps:{innerHTML:e._s(t.houseTypeDescription)}}):a("div",{staticStyle:{padding:"10px 0"}},[e._v("\n                        暂无描述信息...\n                    ")])])])})),a("div",{staticClass:"remarks"},[e._v("\n            本户型图所标尺寸仅供参考，交房尺寸以合同约定为准；相同户型单位因楼栋、楼层、单元等差别，局部结构、面积等可能不同\n\t\t")])],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};t.a=i}});