webpackJsonp([22],{"+0HQ":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"house-pledge-room"}},[n("van-nav-bar",{attrs:{"left-arrow":"",title:t.$route.query.name||"未知标题",id:"navbar"},on:{"click-left":function(e){t.$router.back()}}}),n("FloorLayout",{attrs:{pledgeType:!0,terms:!0,propertyConsultantSource:t.getSalesResponse,apiType:"1",limit:3}},[n("p",{staticClass:"description",attrs:{slot:"description"},slot:"description"},[t._v("温馨提示：一个筹单最多只能选择3个房间")])])],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},"+UU5":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"05VS":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.van-area .van-picker__frame[data-v-6e9f18c2] {\n  position: absolute !important;\n}\n#floor-layout .button-section[data-v-6e9f18c2] {\n  margin-top: 0.93333rem;\n}\n#floor-layout p.description[data-v-6e9f18c2] {\n  padding: 15PX;\n  font-size: 0.64rem;\n  color: #B2B2B2;\n}\n#floor-layout .house-pickup[data-v-6e9f18c2] {\n  background: #fff;\n  margin-top: 15PX;\n  padding: 15PX;\n  border-bottom: 1PX solid #e5e5e5;\n}\n#floor-layout .house-pickup .status .is-pulled-left[data-v-6e9f18c2], #floor-layout .house-pickup .status .is-pulled-right[data-v-6e9f18c2] {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: flex !important;\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n            align-items: center !important;\n}\n#floor-layout .house-pickup .status .is-pulled-left span[data-v-6e9f18c2], #floor-layout .house-pickup .status .is-pulled-right span[data-v-6e9f18c2] {\n      display: -webkit-box !important;\n      display: -webkit-flex !important;\n      display: flex !important;\n      -webkit-box-align: center !important;\n      -webkit-align-items: center !important;\n              align-items: center !important;\n}\n#floor-layout .house-pickup .status .is-pulled-left span[data-v-6e9f18c2]:not(.default), #floor-layout .house-pickup .status .is-pulled-right span[data-v-6e9f18c2]:not(.default) {\n        margin-right: 15PX;\n}\n#floor-layout .house-pickup .status .is-pulled-left span img[data-v-6e9f18c2], #floor-layout .house-pickup .status .is-pulled-right span img[data-v-6e9f18c2] {\n        width: 0.90667rem;\n        height: 0.88rem;\n}\n#floor-layout .house-pickup .status .is-pulled-right span[data-v-6e9f18c2]:not(.default) {\n    margin-left: 15PX;\n    margin-right: 0 !important;\n}\n#floor-layout .house-pickup .status span[data-v-6e9f18c2] {\n    font-size: 0.64rem;\n    color: #7a7a7a;\n}\n#floor-layout .house-pickup .status span.default[data-v-6e9f18c2] {\n      width: 0.64rem;\n      height: 0.64rem;\n      display: inline-block;\n      margin-right: 0.10667rem;\n      border-radius: 2PX;\n}\n#floor-layout .house-pickup .status span.is-light[data-v-6e9f18c2] {\n      background: #f0f0f0;\n}\n#floor-layout .house-pickup .status span.is-warning[data-v-6e9f18c2] {\n      background: #facb6d;\n}\n#floor-layout .house-pickup .status span.is-info[data-v-6e9f18c2] {\n      background: #82acff;\n}\n#floor-layout .house-pickup .status span.is-danger[data-v-6e9f18c2] {\n      background: #ff6e6e;\n}\n#floor-layout .house-table[data-v-6e9f18c2] {\n  margin: 15PX 0;\n}\n#floor-layout .house-table .columns[data-v-6e9f18c2] {\n    margin: 0;\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n            align-items: center !important;\n}\n#floor-layout .house-table .columns[data-v-6e9f18c2]:first-child {\n      background: #f0f0f0;\n      margin-bottom: 0.4rem;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:first-child span[data-v-6e9f18c2] {\n      background: #f0f0f0;\n}\n#floor-layout .house-table .columns:not(:first-child) .column.is-wishlist[data-v-6e9f18c2] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center !important;\n      -webkit-justify-content: center !important;\n              justify-content: center !important;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span[data-v-6e9f18c2] {\n      background: #f0f0f0;\n      width: 24PX;\n      display: inline-block;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-danger[data-v-6e9f18c2], #floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-danger.is-warning[data-v-6e9f18c2] {\n        background: #ff6e6e;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-danger span[data-v-6e9f18c2], #floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-danger.is-warning span[data-v-6e9f18c2] {\n          background: #ff6e6e;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-wishlist[data-v-6e9f18c2] {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: center !important;\n        -webkit-justify-content: center !important;\n                justify-content: center !important;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-wishlist .hidden[data-v-6e9f18c2] {\n          display: none !important;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-warning[data-v-6e9f18c2] {\n        background: #facb6d;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span.is-warning span[data-v-6e9f18c2] {\n          background: #facb6d;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span .hidden[data-v-6e9f18c2] {\n        text-indent: -266.64rem;\n}\n#floor-layout .house-table .columns:not(:first-child) .column:not(:first-child) span img[data-v-6e9f18c2] {\n        width: 0.90667rem;\n        height: 0.88rem;\n}\n#floor-layout .house-table .columns .column[data-v-6e9f18c2] {\n      font-size: 0.58667rem;\n      color: #7a7a7a;\n      padding: 0.4rem 0;\n      text-align: center;\n}\n#floor-layout .house-table .columns .column[data-v-6e9f18c2]:first-child {\n        background: #f0f0f0;\n        -webkit-box-flex: 0;\n        -webkit-flex: none;\n                flex: none;\n        width: 30PX;\n}\n#floor-layout .confirm-popup[data-v-6e9f18c2] {\n  width: 80%;\n}\n#floor-layout .confirm-popup .confirm-details[data-v-6e9f18c2] {\n    padding: 15PX;\n}\n#floor-layout .confirm-popup .confirm-details .confirm-title[data-v-6e9f18c2] {\n      font-size: 0.85333rem;\n      color: #525252;\n      padding: 15PX 0;\n      text-align: center;\n}\n#floor-layout .confirm-popup .confirm-details .confirm-content[data-v-6e9f18c2] {\n      color: #7A7A7A;\n      font-size: 0.74667rem;\n}\n#floor-layout .confirm-popup .confirm-details .button-section[data-v-6e9f18c2] {\n      margin-top: 2.13333rem;\n}\n#floor-layout .confirm-popup .confirm-details .button-section .van-button--warning[data-v-6e9f18c2] {\n        background-color: #BA1C28;\n        border-color: #BA1C28;\n}\n#floor-layout .room-details[data-v-6e9f18c2] {\n  width: 260PX;\n}\n#floor-layout .room-details .room-content[data-v-6e9f18c2] {\n    padding: 15PX;\n}\n#floor-layout .house-pickup-result[data-v-6e9f18c2] {\n  padding: 15PX;\n  background: #fff;\n}\n#floor-layout .house-pickup-result .title[data-v-6e9f18c2] {\n    margin-bottom: 0.4rem;\n}\n#floor-layout .house-pickup-result .columns[data-v-6e9f18c2] {\n    margin: 0;\n}\n#floor-layout .house-pickup-result .columns .column span.tag[data-v-6e9f18c2] {\n      position: relative;\n      border: 1PX solid #dadada;\n      width: 100%;\n      color: #525252;\n      font-size: 0.74667rem;\n}\n#floor-layout .house-pickup-result .columns .column span.tag button[data-v-6e9f18c2] {\n        position: absolute;\n        top: -6PX;\n        right: -2PX;\n        background: #ff6e6e;\n}\n#floor-layout .house-pickup-result .columns .column p[data-v-6e9f18c2] {\n      color: #b2b2b2;\n}\n",""])},"2ntV":function(t,e,n){"use strict";(function(t){var s=n("woOf"),o=n.n(s),i=n("Dd8w"),a=n.n(i),l=n("VLjt"),r=n("NYxO");e.a={name:"timesshop-floorlayout",components:{PropertyConsultant:l.a},props:{subscribeType:{type:Boolean,default:function(){return!1}},pledgeType:{type:Boolean,default:function(){return!1}},collectionType:{type:Boolean,default:function(){return!1}},transferType:{type:Boolean,default:function(){return!1}},openType:{type:Boolean,default:function(){return!1}},apiType:{type:String,required:!0},limit:{type:Number,default:function(){return 3}},wishlist:{type:Object,default:function(){return{}}},terms:{type:Boolean,default:function(){return!1}},propertyConsultantSource:{type:Object},originOrderId:{type:String,default:function(){return""}},showBuyBtn:{type:String,default:function(){return""}}},data:function(){return{building:{selected:null,show:!1,cols:[]},tempHouseList:{},tempHouseSelected:{},tempHouseId:null,tempHouseUnit:null,SalesConsultantId:null,showHouseRoomDetails:null,findHouseIsWarning:[],findHouseIsWishlist:[],dreamHouseList:[],dreamHouseIds:[],houseList:[],newTmepAPIData:[],termsChecked:!0,showHousePicker:!1,showHouseRoom:!1,showConfirmPopup:!1,getDefaultSelectValue:"请选择"}},computed:a()({},Object(r.mapGetters)({getListProjects:"projects/getListProjects",getHouseDetails:"house/getHouseDetails",isAuthentication:"authorization/isAuthentication"})),created:function(){var t=this.getHouseDetails.buildings||[];this.building.cols=t.filter(function(t){return"车位"!=t.fproductName}).map(function(t){return{bldId:t.bldId,text:t.bldName}})},methods:{receiveFromChild:function(t){this.SalesConsultantId=t},housePickerOnConfirm:function(e,n){var s=this;o()(this.building,{show:!1,selected:e.text}),o()(this.$data,t.omit(this.$options.data(),["building","dreamHouseList","SalesConsultantId"]));var i=e.bldId;this.$toast.loading({mask:!1,duration:0,forbidClick:!0,message:"数据加载中..."}),this.$store.dispatch("projects/getSalesStatus",{projectId:this.$route.query.id,buildingId:i,type:this.apiType}).then(function(){var e=s.getListProjects.data,n=e.floorList,o=e.roomList,i=e.unitList;s.houseList.push({title:"楼栋",data:i}),t.forEach(n,function(t){return s.houseList.push({title:t,data:i})}),t.forEach(s.wishlist.data,function(e){void 0!==t.head(t.filter(o,{id:e.iteamId}))&&s.findHouseIsWishlist.push(t.head(t.filter(o,{id:e.iteamId})))}),t.forEach(o,function(t){"0"===t.salesStatus&&s.findHouseIsWarning.push({floor:t.floor,unit:t.unit,salesStatus:t.salesStatus})})}).catch(function(t){s.$toast(t)}).finally(function(){s.$toast.clear()})},goToNextStep:function(){var e=this;if(!this.dreamHouseList.length)return this.$toast("请先选择意向房间");if((this.subscribeType||this.pledgeType)&&null===this.SalesConsultantId)return this.$toast("请先置业顾问");if(this.terms&&!this.termsChecked)return this.$toast("请先同意接受《购买资格说明》");if(this.collectionType)this.$store.dispatch("wishlist/multiWishlist",{typeId:"APARTMENT",iteamId:this.dreamHouseIds}).then(function(){e.showConfirmPopup=!e.showConfirmPopup}).catch(function(t){e.$toast(t)});else if(this.subscribeType){var n=t.head(t.filter(this.getHouseDetails.buildings,{bldName:this.building.selected})).allowbinding;this.getHouseDetails.carportSeperateSale;this.$store.dispatch("tempSubscribe/setTempSubscribeRoomList",this.dreamHouseList).then(function(){e.$router.push({name:"house-subscribe-parking",query:{id:e.getHouseDetails.projId,name:e.getHouseDetails.name,binding:"false"!==n}})})}else if(this.transferType){var s=t.head(t.filter(this.getHouseDetails.buildings,{bldName:this.building.selected})).allowbinding,o=this.getHouseDetails.carportSeperateSale;this.$store.dispatch("tempSubscribe/setTempSubscribeRoomList",this.dreamHouseList).then(function(){"true"===o?e.$router.push({name:"house-transfer-parking",query:{id:e.getHouseDetails.projId,name:e.getHouseDetails.name,binding:"false"!==s,originOrderId:e.originOrderId}}):e.goToAuthentication(e.$route.query.id,"transfer",e.isAuthentication)})}else if(this.pledgeType){var i=t.head(t.filter(this.getHouseDetails.buildings,{bldName:this.building.selected})).allowbinding,a=this.getHouseDetails.carportSeperateSale;this.$store.dispatch("tempPledge/setTempPledgeRoomList",this.dreamHouseList).then(function(){"true"===a?e.$router.push({name:"house-pledge-parking",query:{id:e.getHouseDetails.projId,name:e.getHouseDetails.name,binding:"false"!==i}}):e.goToAuthentication(e.$route.query.id,"pledge",e.isAuthentication)})}else this.openType&&this.$store.dispatch("tempSubscribe/setTempSubscribeRoomList",this.dreamHouseList).then(function(){e.goToAuthentication(e.$route.query.id,"transfer",e.isAuthentication)})},makeConfirm:function(){this.showConfirmPopup=!this.showConfirmPopup,this.$router.push({name:"mine-collection",query:{name:"我的收藏"}})},cancelHouse:function(){this.showHouseRoom=!this.showHouseRoom},selectHouse:function(){this.showHouseRoom=!this.showHouseRoom,this.dreamHouseList.push(this.tempHouseList),this.dreamHouseIds.push(this.tempHouseIds)},hasRoom:function(e,n,s){if(!s)return!0;var o=this.getListProjects.data.roomList,i=this.getHouseDetails.buildings,a=(t.head(t.filter(i,{bldName:this.building.selected})).bldId,t.filter(o,{floor:e.title,unit:n}));return!(!a||a.length<=0)},showRoomPopup:function(e,n,s){if(s){if(t.find(this.dreamHouseList,{title:this.building.selected+e.title+n}))return this.$toast("您已选择"+(this.building.selected+e.title+n)+"为意向房间");if(this.dreamHouseList.length>=this.limit)return this.$toast("最多只能选择"+this.limit+"个意向房间");if(!this.collectionType&&t.find(this.findHouseIsWarning,function(t){return t.floor===e.title&&t.unit===n}))return this.$toast(this.building.selected+e.title+n+"房间已售");var o=this.getListProjects.data.roomList,i=this.getHouseDetails.buildings,a=t.head(t.filter(i,{bldName:this.building.selected})).bldId,l=t.filter(o,{floor:e.title,unit:n});if(!l||l.length<=0)return this.$toast("您好，该房间不存在");var r=t.head(t.filter(o,{floor:e.title,unit:n})),u=r.id,c=r.name;this.showHouseRoom=!this.showHouseRoom,this.showHouseRoomDetails=c,this.tempHouseUnit=c,this.tempHouseIds=u,this.tempHouseList={title:this.building.selected+c,buildingId:a,floor:e.title,unit:n,apartmentId:u,originOrderId:this.originOrderId,isOpen:this.openType}}},removeDreamHouse:function(e){var n=this.getListProjects.data.roomList,s=t.head(t.filter(n,{floor:e.floor,unit:e.unit})).id;this.dreamHouseList.splice(t.findIndex(this.dreamHouseList,e),1),this.dreamHouseIds.splice(t.findIndex(this.dreamHouseIds,s),1)},isActived:function(e,n,s){return this.collectionType?"":t.find(this.dreamHouseList,function(t){return t.title===e+n.title+s})?"is-danger":""},isWishlisted:function(e,n){return t.find(this.findHouseIsWishlist,function(t){return t.floor===e.title&&t.unit===n})?"is-wishlist":""},isWarning:function(e,n){return this.collectionType?"is-warning":t.find(this.findHouseIsWarning,function(t){return t.floor===e.title&&t.unit===n})?"is-warning":""}}}}).call(e,n("M4fF"))},BpJO:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAAXNSR0IArs4c6QAAAsRJREFUSA2lVd9LU2EYfs5xzC2nOUEL2SgwwvBXeJEg2UUQEXQjiFp4rV13UX9CVNBNt14KeSEIelU3QQSCF6KyMCVDmD/y10J33I6b8+t5j52NbaftjF54973f+z7P875n3/k2oAJTf60CCnS3YGo/xsFBHPv7hhW7JbrFqWRyRY2PK8sZu+W5egJO/AiGEcLyMixnbOVcdHHVAKb5BrOzgayexKb5NrsvEZRtwEkfIJG4jqWlnMziIpBMXrNquaxj9M8GJDfQe5BKvbemVypfYGZGnuiTYASbX8ztPCw+5DZIv8lJb0OpW6iuDiOd9kDTPIjHFRYWcgw7klxfXwq1tR9RX+9T6fQZTk+j0PUV+P3yuGv0mKZMcwax2H1EIj7s7VXRwVcRODmxpdytNTVAYyPQ1CSeQUdHEsHgZ53TDqKhYQcezxnm54GNjcrFZQQZSLiiIVrB4C/R1jVNMxncQW/vTwwMnAr2v0w0RIuaoq3ZYjyLy/wOv/L7voHJSZ+dr2gdHjbR3f2D4ncpfiTcbAPZsEmATb7wMrViYsIvOdc2MpJEZ+d3it+juGHz8l5Tq8DuPKBv6OqyJrCBJddQKEa8iMvkWXHh5DWQBAEJ+HyvMTR0SfaubHDQC6/3lcUtIBQ1sOrn5+2Ym3OuFQhY27U1P4TjYM4iptmDra0qB7xzanu7ij8dPU5F5waa1o6dnWJ8WxsgXmiC1XXHJ/AUYvkmeZHJXLVutF1saQHviMELecBDUjg8bMTUVADr6xeI3V3wgK8Il+eQsmmyFjVgrhXHxwk2qUM4DPT3GwiFTijwnLUPQkJz8xOMjb3D5mYNpqcDiEaBo6MEb28rq/zTKGGc4qlaXY2rSMRQqdRvlck8Y65oEMlZNcEIVjjklpC+KBE0Slckv+Rn2RstGGJfCIU26qaBl8C6ssACgHDo3oI0/gB5+FcgtTpL8QAAAABJRU5ErkJggg=="},Gedr:function(t,e,n){var s=n("05VS");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("280f06dc",s,!1,{sourceMap:!1})},IxJk:function(t,e,n){"use strict";(function(t){n("NYxO");var s=n("NFYZ");e.a={name:"timesshop-propertyconsultant",props:{propertyConsultantSource:{type:Object,required:!0}},data:function(){return{showPropertyConsultant:!1,getDefaultSelectValue:"请选择",propertyConsultantSelected:null}},computed:{getSalesConsultantList:function(){return t.map(this.propertyConsultantSource.data,"salesName")}},mounted:function(){if(this.propertyConsultantSource&&this.propertyConsultantSource.data&&this.propertyConsultantSource.data.length){var t=s.a.randomNum(0,this.propertyConsultantSource.data.length-1),e=this.propertyConsultantSource.data[t];this.propertyConsultantSelected=e.salesName,this.$emit("receiveFromChild",e.salesId),this.$store.dispatch("salesconsultant/setTempSales",{salesName:e.salesName,salesId:e.salesId})}},methods:{propertyConsultantPickerOnConfirm:function(e,n){if(this.showPropertyConsultant=!this.showPropertyConsultant,this.propertyConsultantSelected!==e){var s=t.head(t.filter(this.propertyConsultantSource.data,{salesName:e})).salesId;this.propertyConsultantSelected=e,this.$emit("receiveFromChild",s),this.$store.dispatch("salesconsultant/setTempSales",{salesName:e,salesId:s})}}}}}).call(e,n("M4fF"))},T8qr:function(t,e,n){"use strict";var s=n("Dd8w"),o=n.n(s),i=n("//Fk"),a=n.n(i),l=n("TDPp"),r=n("NYxO");e.a={layout:"notabbar",middleware:"authorizationRequired",fetch:function(t){var e=t.store,n=t.query;return a.a.all([e.dispatch("salesconsultant/querySalesConsultant",{projectId:n.id}),e.dispatch("house/queryHouseDetails",n.id)])},computed:o()({},Object(r.mapGetters)({getSalesResponse:"salesconsultant/getSalesResponse",getHouseDetails:"house/getHouseDetails"})),components:{FloorLayout:l.a}}},TDPp:function(t,e,n){"use strict";var s=n("2ntV"),o=n("vP1f"),i=!1;var a=function(t){i||n("Gedr")},l=n("VU/8")(s.a,o.a,!1,a,"data-v-6e9f18c2",null);l.options.__file="components\\house\\FloorLayout.vue",e.a=l.exports},VLjt:function(t,e,n){"use strict";var s=n("IxJk"),o=n("X9gf"),i=n("VU/8")(s.a,o.a,!1,null,null,null);i.options.__file="components\\house\\PropertyConsultant.vue",e.a=i.exports},X9gf:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"property-consultant"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"置业顾问","is-link":"",value:t.propertyConsultantSelected||t.getDefaultSelectValue+"置业顾问"},on:{click:function(e){t.showPropertyConsultant=!0}}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPropertyConsultant,callback:function(e){t.showPropertyConsultant=e},expression:"showPropertyConsultant"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.getSalesConsultantList},on:{confirm:t.propertyConsultantPickerOnConfirm,cancel:function(e){t.showPropertyConsultant=!1}}})],1)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},aAYr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("T8qr"),o=n("+0HQ"),i=!1;var a=function(t){i||n("gzqu")},l=n("VU/8")(s.a,o.a,!1,a,"data-v-6915dfbc",null);l.options.__file="pages\\house\\pledge\\room\\index.vue",e.default=l.exports},gzqu:function(t,e,n){var s=n("+UU5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("8e6e84e8",s,!1,{sourceMap:!1})},vP1f:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"floor-layout"}},[s("van-cell-group",[t.collectionType?s("van-cell",{attrs:{title:"我要收藏",value:"房间"}}):t._e(),s("van-cell",{attrs:{title:"请选择楼栋","is-link":"",value:t.building.selected||t.getDefaultSelectValue},on:{click:function(e){t.showHousePicker=!0}}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showHousePicker,callback:function(e){t.showHousePicker=e},expression:"showHousePicker"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.building.cols},on:{confirm:t.housePickerOnConfirm,cancel:function(e){t.showHousePicker=!1}}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.building.selected,expression:"building.selected"}],staticClass:"house-pickup"},[t.collectionType?t._e():s("div",{staticClass:"status is-clearfix"},[t._m(0),t._m(1)]),s("div",{staticClass:"house-table"},t._l(t.houseList,function(e,o){return s("div",{key:o,staticClass:"columns is-mobile"},[s("div",{staticClass:"column"},[s("span",[t._v(t._s(e.title))])]),t._l(e.data,function(i,a){return s("div",{key:a,staticClass:"column",class:t.isWishlisted(e,i)},[t.hasRoom(e,i,o)?s("span",{class:[t.isActived(t.building.selected,e,i),t.isWarning(e,i),t.isWishlisted(e,i)],on:{click:function(n){t.showRoomPopup(e,i,o)}}},[t.isWishlisted(e,i)?s("img",{attrs:{src:n("BpJO")}}):t._e(),s("span",{staticClass:"hidden"},[t._v(t._s(i))])]):t._e()])})],2)})),s("van-popup",{on:{"click-overlay":t.cancelHouse},model:{value:t.showHouseRoom,callback:function(e){t.showHouseRoom=e},expression:"showHouseRoom"}},[s("div",{staticClass:"room-details"},[s("div",{staticClass:"room-content"},[t._v("\n\t    \t\t\t"+t._s(t.showHouseRoomDetails)+" 房\n\t    \t\t\t")]),s("div",{staticClass:"button-section"},[s("van-row",[s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{block:"",type:"warning"},on:{click:t.selectHouse}},[t._v("确认")])],1),s("van-col",{attrs:{span:"12"}},[s("van-button",{attrs:{block:"",type:"default"},on:{click:t.cancelHouse}},[t._v("取消")])],1)],1)],1)])])],1),s("div",{staticClass:"house-pickup-result"},[s("p",{staticClass:"title is-size-7"},[t._v("已选房间:")]),s("div",{staticClass:"columns is-mobile"},t._l(t.dreamHouseList,function(e,n){return s("div",{key:n,staticClass:"column is-one-third"},[s("span",{staticClass:"tag is-white is-radiusless"},[t._v("\n\t\t\t\t\t  "+t._s(e.title)+"\n\t\t\t\t\t\t"),s("button",{staticClass:"delete is-small is-danger",on:{click:function(n){t.removeDreamHouse(e)}}})]),t.collectionType?t._e():s("p",{staticClass:"help has-text-centered"},[t._v("第"+t._s(t._f("changeNum")(n+1))+"意向")])])}))]),t.terms?s("PropertyConsultant",{attrs:{propertyConsultantSource:t.propertyConsultantSource},on:{receiveFromChild:t.receiveFromChild}}):t._e(),t._t("description"),s("div",{staticClass:"button-section"},[t.terms?s("van-cell-group",[t.subscribeType?s("van-cell",[s("van-checkbox",{attrs:{slot:"icon"},slot:"icon",model:{value:t.termsChecked,callback:function(e){t.termsChecked=e},expression:"termsChecked"}}),s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t我已阅读并同意\n\t\t\t\t\t\t"),s("nuxt-link",{staticClass:"content-title",attrs:{to:{name:"cms-slug",params:{slug:"认购须知"},query:{code:"SYS_RGMZSM_MOB"}}}},[t._v("\n\t\t\t\t\t\t\t《认购须知》\n\t\t\t\t\t\t")])],1)],1):t._e(),t.pledgeType?s("van-cell",[s("van-checkbox",{attrs:{slot:"icon"},slot:"icon",model:{value:t.termsChecked,callback:function(e){t.termsChecked=e},expression:"termsChecked"}}),s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t我已阅读并同意\n\t\t\t\t\t\t"),s("nuxt-link",{staticClass:"content-title",attrs:{to:{name:"cms-slug",params:{slug:"诚意登记须知"},query:{code:"SYS_RCDJSZJSM_MOB"}}}},[t._v("\n\t\t\t\t\t\t\t《诚意登记须知》\n\t\t\t\t\t\t")])],1)],1):t._e()],1):t._e(),t.openType?"1"==t.showBuyBtn?s("van-goods-action",[s("van-row",{staticStyle:{width:"100%"}},[s("van-goods-action-big-btn",{attrs:{text:"确认选房"},on:{click:t.goToNextStep}})],1)],1):t._e():s("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.goToNextStep}},[t._v("下一步")])],1),s("van-popup",{staticClass:"confirm-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.showConfirmPopup,callback:function(e){t.showConfirmPopup=e},expression:"showConfirmPopup"}},[s("div",{staticClass:"confirm-details"},[s("div",{staticClass:"confirm-title"},[s("h3",[t._v("房源收藏成功")])]),s("div",{staticClass:"confirm-content"},[t._v("\n\t    \t\t\t\t您可以在我的-我的收藏-房源收藏中查看收藏的房源情况。\n\t    \t\t\t")]),s("div",{staticClass:"button-section"},[s("van-button",{attrs:{block:"",type:"warning"},on:{click:t.makeConfirm}},[t._v("确定")])],1)])])],2)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-pulled-left"},[e("span",[e("span",{staticClass:"default is-light"}),this._v("待售")]),e("span",[e("span",{staticClass:"default is-warning"}),this._v("已售")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-pulled-right"},[e("span",[e("img",{attrs:{src:n("BpJO")}}),this._v(" 已收藏")]),e("span",[e("span",{staticClass:"default is-danger"}),this._v("已选")])])}];s._withStripped=!0;var i={render:s,staticRenderFns:o};e.a=i}});