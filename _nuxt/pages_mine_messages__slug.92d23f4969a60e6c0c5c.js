webpackJsonp([70],{"87p7":function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"\n#mine-messages-slug .content[data-v-b5ed1726] {\n  padding: 15PX;\n}\n#mine-messages-slug .content .title[data-v-b5ed1726] {\n    color: #252525;\n    font-size: 0.8rem;\n}\n#mine-messages-slug .content time[data-v-b5ed1726] {\n    color: #7A7A7A;\n    font-size: 0.64rem;\n}\n",""])},aYtU:function(e,t,s){var a=s("87p7");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("584a662d",a,!1,{sourceMap:!1})},avfj:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("l+Oh"),n=s("o1IG"),i=!1;var r=function(e){i||s("aYtU")},o=s("VU/8")(a.a,n.a,!1,r,"data-v-b5ed1726",null);o.options.__file="pages\\mine\\messages\\_slug.vue",t.default=o.exports},"l+Oh":function(e,t,s){"use strict";var a=s("Dd8w"),n=s.n(a),i=s("//Fk"),r=s.n(i),o=s("NYxO");t.a={layout:"notabbar",middleware:"authorizationRequired",fetch:function(e){var t=e.store,s=e.query;return r.a.all([t.dispatch("messages/queryMessagesDetails",{msgId:s.id})])},computed:n()({},Object(o.mapGetters)({getMessageDetails:"messages/getMessageDetails"}))}},o1IG:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"mine-messages-slug"}},[s("van-nav-bar",{attrs:{"left-arrow":"",title:e.$route.params.slug||"未知标题",id:"navbar"},on:{"click-left":function(t){e.$router.back()}}}),s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[e._v(e._s(e.getMessageDetails.msgBody))]),s("time",[e._v("时间: "+e._s(e.getMessageDetails.msgDate))])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n}});