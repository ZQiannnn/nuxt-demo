webpackJsonp([48],{BnlC:function(t,n,a){t.exports=a.p+"img/house_img_illustrate.1d24840.png"},CP3f:function(t,n,a){"use strict";var e=a("Dd8w"),i=a.n(e),o=a("NYxO");n.a={layout:"notabbar",head:function(){return{style:[{cssText:"html { background-color: #ffffff !important; }",type:"text/css"}]}},computed:i()({},Object(o.mapGetters)({getActiveInfo:"active/getActiveInfo"})),data:function(){return{imgPrefix:"",showConfirmPopup:!1,form:{name:{value:"",message:null,isvaild:!0},phoneNumber:{value:"",message:null,isvaild:!0},numbers:{value:"",message:null,isvaild:!0}}}},methods:{onChange:function(t){this.onChangeValidator(t)},activityForm:function(){var t=this;this.handleFormSubmit(this.$refs.activityForm,this.form)&&this.$store.dispatch("events/enrollment",{phone:this.form.phoneNumber.value,name:this.form.name.value,numbers:this.form.numbers.value,eventId:this.getActiveInfo.eventId}).then(function(){t.showConfirmPopup=!t.showConfirmPopup}).catch(function(n){t.$toast(n)})},makeConfirm:function(){this.showConfirmPopup=!this.showConfirmPopup,this.$router.back()}}}},Gngv:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("CP3f"),i=a("thMo"),o=!1;var r=function(t){o||a("tMPV")},s=a("VU/8")(e.a,i.a,!1,r,"data-v-353dda35",null);s.options.__file="pages\\activity\\signupActive.vue",n.default=s.exports},PkCz:function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#activity-signup .card[data-v-353dda35] {\n  margin-bottom: 0.93333rem;\n}\n#activity-signup .card .card-content[data-v-353dda35] {\n    padding: 0.93333rem;\n}\n#activity-signup .card .card-content .media[data-v-353dda35] {\n      -webkit-box-align: center !important;\n      -webkit-align-items: center !important;\n              align-items: center !important;\n}\n#activity-signup .card .card-content .media .media-content p[data-v-353dda35] {\n        margin: 0 0 0.4rem;\n}\n#activity-signup .card .card-content .media .media-content p.title[data-v-353dda35] {\n          color: #C40224;\n          font-size: 0.85333rem;\n}\n#activity-signup .card .card-content .media .media-content time[data-v-353dda35] {\n        color: #525252;\n        font-size: 0.74667rem;\n}\n#activity-signup .card .card-content form[data-v-353dda35] {\n      margin-top: 0.93333rem;\n}\n#activity-signup .card .card-content form .title[data-v-353dda35] {\n        color: #7A7A7A;\n        font-size: 0.74667rem;\n}\n#activity-signup .card .card-content form .field[data-v-353dda35] {\n        margin-top: 0.93333rem;\n        margin-bottom: 0;\n}\n#activity-signup .card .card-content form .field input[data-v-353dda35] {\n          height: 2.4rem;\n          background: #f4f4f4;\n          font-size: 0.74667rem;\n          color: #7a7a7a;\n          border: none;\n}\n#activity-signup .card .card-content .button-section[data-v-353dda35] {\n      margin: 50PX 35PX 0;\n}\n#activity-signup .card .card-content .confirm-popup[data-v-353dda35] {\n      width: 80%;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details[data-v-353dda35] {\n        padding: 15PX;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details .confirm-title[data-v-353dda35] {\n          font-size: 0.85333rem;\n          font-weight: bold;\n          color: #C40224;\n          padding: 15PX 0;\n          text-align: center;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details .confirm-title h3[data-v-353dda35] {\n            margin-top: 0.93333rem;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details .confirm-content[data-v-353dda35] {\n          color: #7A7A7A;\n          font-size: 0.74667rem;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details .button-section[data-v-353dda35] {\n          margin-top: 2.13333rem;\n}\n#activity-signup .card .card-content .confirm-popup .confirm-details .button-section .van-button--warning[data-v-353dda35] {\n            background-color: #BA1C28;\n            border-color: #BA1C28;\n}\n",""])},tMPV:function(t,n,a){var e=a("PkCz");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("6a75581f",e,!1,{sourceMap:!1})},thMo:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"activity-signup"}},[e("van-nav-bar",{attrs:{"left-arrow":"",title:"活动报名",id:"navbar"},on:{"click-left":function(n){t.$router.back()}}}),e("div",{staticClass:"card is-paddingless is-shadowless"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-2by1"},[t.getActiveInfo.imageUrl?e("img",{attrs:{src:t.imgPrefix+t.getActiveInfo.imageUrl,alt:"Placeholder image"}}):e("img",{attrs:{src:a("BnlC"),alt:"Placeholder image"}})])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title"},[t._v(t._s(t.getActiveInfo.eventName))]),e("time",[t._v("活动时间 "+t._s(t.getActiveInfo.eventStartTime))])])]),e("form",{ref:"activityForm",on:{submit:function(t){t.preventDefault()}}},[e("p",{staticClass:"title"},[t._v("填写报名信息")]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name.value,expression:"form.name.value",modifiers:{trim:!0}}],staticClass:"input is-radiusless is-shadowless",class:t.form.name.isvaild?"":"is-danger",attrs:{name:"name",autocomplete:"on",type:"text",placeholder:"请输入姓名"},domProps:{value:t.form.name.value},on:{change:t.onChange,input:function(n){n.target.composing||t.$set(t.form.name,"value",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}})]),t.form.name.isvaild?t._e():e("p",{staticClass:"help is-danger"},[t._v(t._s(t.form.name.message))])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.phoneNumber.value,expression:"form.phoneNumber.value",modifiers:{trim:!0}}],staticClass:"input is-radiusless is-shadowless",class:t.form.phoneNumber.isvaild?"":"is-danger",attrs:{name:"phoneNumber",autocomplete:"on",type:"text",placeholder:"请输入您的联系电话"},domProps:{value:t.form.phoneNumber.value},on:{change:t.onChange,input:function(n){n.target.composing||t.$set(t.form.phoneNumber,"value",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}})]),t.form.phoneNumber.isvaild?t._e():e("p",{staticClass:"help is-danger"},[t._v(t._s(t.form.phoneNumber.message))])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.numbers.value,expression:"form.numbers.value",modifiers:{trim:!0}}],staticClass:"input is-radiusless is-shadowless",class:t.form.numbers.isvaild?"":"is-danger",attrs:{name:"numbers",autocomplete:"on",type:"text",placeholder:"填写活动参与人数"},domProps:{value:t.form.numbers.value},on:{change:t.onChange,input:function(n){n.target.composing||t.$set(t.form.numbers,"value",n.target.value.trim())},blur:function(n){t.$forceUpdate()}}})]),t.form.numbers.isvaild?t._e():e("p",{staticClass:"help is-danger"},[t._v(t._s(t.form.numbers.message))])])]),e("div",{staticClass:"button-section"},[e("van-button",{attrs:{type:"danger",size:"normal",block:""},on:{click:t.activityForm}},[t._v("提交报名")])],1),e("van-popup",{staticClass:"confirm-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.showConfirmPopup,callback:function(n){t.showConfirmPopup=n},expression:"showConfirmPopup"}},[e("div",{staticClass:"confirm-details"},[e("div",{staticClass:"confirm-title"},[e("van-icon",{attrs:{name:"checked",size:"6em",color:"#FF6E6E"}}),e("h3",[t._v("恭喜您，报名成功")])],1),e("div",{staticClass:"confirm-content"},[t._v("\n\t\t    \t\t\t\t您已报名成功，您可以在用户中心我的活动中查看。我们工作人员会在12小时内和您联系。\n\t\t    \t\t\t")]),e("div",{staticClass:"button-section"},[e("van-button",{attrs:{block:"",type:"warning"},on:{click:t.makeConfirm}},[t._v("确定")])],1)])])],1)])],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};n.a=i}});