webpackJsonp([1],{"++il":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidearea"},[a("h4",[t._v("Only Show New Items")]),a("div",{staticClass:"can-toggle demo-rebrand-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.trigger,expression:"trigger"}],attrs:{id:"e",type:"checkbox"},domProps:{checked:Array.isArray(t.trigger)?t._i(t.trigger,null)>-1:t.trigger},on:{change:[function(e){var a=t.trigger,o=e.target,i=!!o.checked;if(Array.isArray(a)){var n=t._i(a,null);o.checked?n<0&&(t.trigger=a.concat([null])):n>-1&&(t.trigger=a.slice(0,n).concat(a.slice(n+1)))}else t.trigger=i},t.updateNew]}}),t._m(0)])])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"e"}},[e("div",{staticClass:"can-toggle__switch",attrs:{"data-checked":"Yes","data-unchecked":"No"}})])}]};e.a=i},"+ptz":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"capsule"},[a("app-masthead"),a("div",{staticClass:"contain"},[a("app-sidebar",{attrs:{usedamounts:t.highusage},on:{"update:usedamounts":function(e){t.highusage=e}}}),a("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},t._l(t.products,function(t,e){return a("app-item",{key:"item",attrs:{item:t,index:e}})}),1)],1)],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},"+tEi":function(t,e,a){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"masthead"},[this._m(0),e("h1",[this._v(this._s(this.title))])])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticClass:"ppl-banner",attrs:{src:"https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596533358/OU/logos/ou_logo_simple_w1.png",alt:"Banner Image"}}),e("span",{staticClass:"logo-title"},[this._v("OUINTRANET")])])}]};e.a=i},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("CynJ"),i=a("+ptz"),n=!1;var r=function(t){n||a("l7iI")},s=a("VU/8")(o.a,i.a,!1,r,null,null);s.options.__file="pages/index.vue",e.default=s.exports},"6iP1":function(t,e,a){"use strict";var o=a("whFf"),i=a("VYtz"),n=!1;var r=function(t){n||a("Tk5W")},s=a("VU/8")(o.a,i.a,!1,r,null,null);s.options.__file="components/AppModal.vue",e.a=s.exports},"8W1w":function(t,e,a){var o=a("yP9j");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("71f11e1c",o,!1,{sourceMap:!1})},CynJ:function(t,e,a){"use strict";var o=a("JufQ"),i=a("jlTb"),n=a("p/c1");e.a={components:{AppSidebar:o.a,AppMasthead:i.a,AppItem:n.a},data:function(){return{highusage:300}},computed:{products:function(){var t=this;return this.$store.state.products.filter(function(e){return t.$store.state.new?e.usage<t.highusage&&e.new:e.usage<t.highusage})}}}},DT5s:function(t,e,a){var o=a("jvuC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("0e4b349f",o,!1,{sourceMap:!1})},JufQ:function(t,e,a){"use strict";var o=a("am5y"),i=a("nXDZ"),n=!1;var r=function(t){n||a("8W1w")},s=a("VU/8")(o.a,i.a,!1,r,"data-v-7bd12016",null);s.options.__file="components/AppSidebar.vue",e.a=s.exports},Tk5W:function(t,e,a){var o=a("u+UY");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("1cfbe0b4",o,!1,{sourceMap:!1})},VYtz:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal-innner"},[a("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v("\n            Title: "+t._s(t.name)+"\n          "),a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v("\n            x\n          ")])])],2),a("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[a("img",{staticClass:"modal-image",attrs:{src:t.image,alt:t.name}})])],2),a("footer",{staticClass:"modal-footer"},[t._t("footer",[a("a",{staticClass:"button",attrs:{href:t.image,target:"_blank"}},[t._v("View Email In Full Page")])])],2)])])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},YJlR:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item[data-v-67a9bf49]{border-radius:5px;padding:20px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.item__bgImage[data-v-67a9bf49]{width:200px;height:200px;margin:15px auto;background-size:cover;background-position:50%}.new[data-v-67a9bf49]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:13px;font-weight:700;border-radius:1000px}p[data-v-67a9bf49]{font-size:18px;text-align:center}.quick-view[data-v-67a9bf49]{color:#c5182d;border-color:#c5182d}svg[data-v-67a9bf49]{color:#000}a.button[data-v-67a9bf49]{padding:10px 30px;font-size:13px;font-weight:600;border-radius:1000px;cursor:pointer;background:#fff;color:#3e64ea;border:1px solid #3e64ea;text-decoration:none;font-family:Barlow,sans-serif;text-transform:uppercase;margin:10px;-webkit-transition:all .15s ease-out;transition:all .15s ease-out}a.button[data-v-67a9bf49]:hover{background:#3e64ea;color:#fff;-webkit-transition:all .2s ease-in;transition:all .2s ease-in}",""])},ZN5v:function(t,e,a){"use strict";e.a={data:function(){return{trigger:this.checked}},computed:{checked:function(){return this.$store.state.new}},methods:{updateNew:function(){this.$store.commit("switchnew")}}}},am5y:function(t,e,a){"use strict";var o=a("sEUc");e.a={props:{newtype:{type:Boolean,default:!1},usedamounts:{type:[Number,String],default:300}},data:function(){return{min:0,max:400}},components:{AppSwitch:o.a}}},czLG:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h4[data-v-5182992c]{margin:20px 0}.can-toggle[data-v-5182992c]{position:relative}.can-toggle [data-v-5182992c],.can-toggle [data-v-5182992c]:after,.can-toggle [data-v-5182992c]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.can-toggle input[type=checkbox][data-v-5182992c]{opacity:0;position:absolute;top:0;left:0}.can-toggle input[type=checkbox][disabled]~label[data-v-5182992c]{pointer-events:none}.can-toggle input[type=checkbox][disabled]~label .can-toggle__switch[data-v-5182992c]{opacity:.4}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-unchecked);left:0}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-checked)}.can-toggle label[data-v-5182992c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.can-toggle label .can-toggle__label-text[data-v-5182992c]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:32px}.can-toggle label .can-toggle__switch[data-v-5182992c]{position:relative}.can-toggle label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-checked);position:absolute;top:0;text-transform:uppercase;text-align:center}.can-toggle label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-unchecked);position:absolute;z-index:5;text-transform:uppercase;text-align:center;background:#fff;-webkit-transform:translateZ(0);transform:translateZ(0)}.can-toggle.demo-rebrand-2[data-v-5182992c]{cursor:pointer}.can-toggle.demo-rebrand-2 input[type=checkbox][disabled]~label[data-v-5182992c]{color:hsla(0,0%,53%,.5)}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#6f6f6f}.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label[data-v-5182992c]{color:#7b7b7b}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label[data-v-5182992c]:hover{color:#3059e8}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]{background-color:#5576ed}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{color:#2752e7}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#3e64ea}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#1844dd}.can-toggle.demo-rebrand-2 label[data-v-5182992c]{font-family:Barlow,sans-serif;cursor:pointer}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;background:#959595}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:before{color:hsla(0,0%,100%,.7)}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:after{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;color:#888}.can-toggle.demo-rebrand-2 input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{-webkit-transform:translate3d(27px,0,0);transform:translate3d(27px,0,0)}.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.demo-rebrand-2 input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.demo-rebrand-2 label[data-v-5182992c]{font-size:0}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]{height:30px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;border-radius:22px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:before{left:22px;font-size:9px;line-height:30px;width:30px;padding:0 12px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:after{top:3px;left:3px;border-radius:11px;width:27px;line-height:24px;font-size:9px}.can-toggle.demo-rebrand-2 label .can-toggle__switch[data-v-5182992c]:hover:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.sidearea[data-v-5182992c]{padding-bottom:30px}",""])},g4l0:function(t,e,a){var o=a("czLG");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("3506f3ca",o,!1,{sourceMap:!1})},isx8:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"aside{float:left;width:19.1489%}.content{float:right;width:79.7872%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;padding:0!important}@supports (display:grid){.capsule>*{width:auto;margin:0}}",""])},jlTb:function(t,e,a){"use strict";var o=a("uUQr"),i=a("+tEi"),n=!1;var r=function(t){n||a("DT5s")},s=a("VU/8")(o.a,i.a,!1,r,"data-v-5209668b",null);s.options.__file="components/AppMasthead.vue",e.a=s.exports},jvuC:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'h1[data-v-5209668b]{color:#fff;font-size:60px;padding:8px}.ppl-banner[data-v-5209668b]{width:47px;padding-right:5px}.logo[data-v-5209668b]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.logo-title[data-v-5209668b]{color:#fff;font-weight:700;font-size:20px}.masthead[data-v-5209668b]{padding:0 10px;width:100%;height:100px;color:#fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:wrap;flex-flow:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;overflow:hidden;margin:10px 0;background-image:url("https://res.cloudinary.com/orthodox-union/image/upload/q_auto,b_black,o_80/v1596532898/OU/general-email/Screen_Shot_2020-08-04_at_12.21.01.jpg");background-position:50%;background-size:cover}',""])},l7iI:function(t,e,a){var o=a("isx8");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("3e6139b2",o,!1,{sourceMap:!1})},nXDZ:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("div",{staticClass:"sidearea"},[a("label",{attrs:{for:"usedamounts"}},[t._v("Most used: "),a("span",[t._v(t._s(t.usedamounts))])]),a("input",{staticClass:"slider",attrs:{id:"usedamounts",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.usedamounts},on:{input:function(e){return t.$emit("update:usedamounts",e.target.value)}}}),a("span",{staticClass:"min"},[t._v(t._s(t.min))]),a("span",{staticClass:"max"},[t._v(t._s(t.max))])]),t.newtype?t._e():a("app-switch"),t._m(0),a("div",{staticClass:"sidearea callout"},[a("ul",{staticClass:"sidebar-list"},[a("nuxt-link",{attrs:{to:"/OUTorah"}},[a("li",[t._v("OU Torah")])]),a("nuxt-link",{attrs:{to:"/shabbatshalom"}},[a("li",[t._v("Shabbat Shalom")])]),a("nuxt-link",{attrs:{to:"/OuPress"}},[a("li",[t._v("OU Press")])]),a("nuxt-link",{attrs:{to:"/OuJob"}},[a("li",[t._v("Job Board")])]),a("nuxt-link",{attrs:{to:"/Community"}},[a("li",[t._v("Community Engagement")])]),a("nuxt-link",{attrs:{to:"/Yachad"}},[a("li",[t._v("Yachad")])]),a("nuxt-link",{attrs:{to:"/NCSY"}},[a("li",[t._v("NCSY")])]),a("nuxt-link",{attrs:{to:"/Kosher"}},[a("li",[t._v("Kosher")])]),a("nuxt-link",{attrs:{to:"/IPA"}},[a("li",[t._v("IPA")])]),a("nuxt-link",{attrs:{to:"/JewishAction"}},[a("li",[t._v("Jewish Action")])]),a("nuxt-link",{attrs:{to:"/ifs"}},[a("li",[t._v("Israel Free Spirit")])]),a("nuxt-link",{attrs:{to:"/BoardAlerts"}},[a("li",[t._v("Board Newsletters")])]),a("nuxt-link",{attrs:{to:"/OUIsrael"}},[a("li",[t._v("OU Israel")])]),a("nuxt-link",{attrs:{to:"/RabbiWienrebs"}},[a("li",[t._v("Rabbi Weinrebs")])]),a("nuxt-link",{attrs:{to:"/OUGeneral"}},[a("li",[t._v("OU General")])]),a("nuxt-link",{attrs:{to:"/TeamYachad"}},[a("li",[t._v("Team Yachad")])]),a("nuxt-link",{attrs:{to:"/ArnoldGerson"}},[a("li",[t._v("Arnold Gerson")])]),a("nuxt-link",{attrs:{to:"/NextGen"}},[a("li",[t._v("NextGen")])]),a("nuxt-link",{attrs:{to:"/men"}},[a("li",[t._v("Men's")])]),a("nuxt-link",{attrs:{to:"/new"}},[a("li",[t._v("New")])])],1)])],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("h4",[this._v("Special !")]),e("p",[this._v("New interactiveiframe coming to GMAIL Email Templates.")]),e("p",[e("em",[this._v("Coming soon..... Live mobile view portal.")])])])}]};e.a=i},"p/c1":function(t,e,a){"use strict";var o=a("zEqJ"),i=a("wm3B"),n=!1;var r=function(t){n||a("vW0Z")},s=a("VU/8")(o.a,i.a,!1,r,"data-v-67a9bf49",null);s.options.__file="components/AppItem.vue",e.a=s.exports},sEUc:function(t,e,a){"use strict";var o=a("ZN5v"),i=a("++il"),n=!1;var r=function(t){n||a("g4l0")},s=a("VU/8")(o.a,i.a,!1,r,"data-v-5182992c",null);s.options.__file="components/AppSwitch.vue",e.a=s.exports},"u+UY":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".modal-backdrop{position:fixed;top:0;z-index:1;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.modal-innner{position:relative}.modal{background:#fff;-webkit-box-shadow:2px 2px 20px 1px;box-shadow:2px 2px 20px 1px;overflow-x:auto;width:100%;z-index:999;max-width:900px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.modal,.modal-footer{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-header{padding:15px;border-bottom:1px solid #eee;color:#4aae9b;font-size:24px;text-align:center;font-weight:600}.modal-footer{border-top:1px solid #eee;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.modal-body{max-height:500px;overflow-x:auto;position:relative;padding:0 10px}.btn-close{border:none;font-size:20px;padding:10px;position:absolute;right:10px;top:0;z-index:9;margin:0;cursor:pointer;font-weight:700;color:red;border-radius:50%;background:#fafafa;width:50px;height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-close:hover{color:#fafafa;background:red}.btn-green{color:#fff;background:#4aae9b;border:1px solid #4aae9b;border-radius:2px}img.modal-image{width:100%;max-width:100%}a.button{padding:10px 30px;font-size:13px;font-weight:600;border-radius:1000px;cursor:pointer;background:#fff;color:#3e64ea;border:1px solid #3e64ea;text-decoration:none;font-family:Barlow,sans-serif;text-transform:uppercase;margin:10px;-webkit-transition:all .15s ease-out;transition:all .15s ease-out}a.button:hover{background:#3e64ea;color:#fff;-webkit-transition:all .2s ease-in;transition:all .2s ease-in}",""])},uUQr:function(t,e,a){"use strict";e.a={props:{bkcolor:{type:String,default:"#3b60ed"},title:{type:String,default:"Ou Intranet Emails"},img:{type:String,default:"logo-email"}}}},vW0Z:function(t,e,a){var o=a("YJlR");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("68ddced1",o,!1,{sourceMap:!1})},whFf:function(t,e,a){"use strict";e.a={name:"modal",props:{image:{type:String},name:{type:String}},methods:{close:function(){this.$emit("close")}}}},wm3B:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.item.name))]),t.item.new?a("span",{staticClass:"new"},[t._v("New")]):t._e(),a("div",{staticClass:"item__bgImage",style:{backgroundImage:"url("+t.item.img+")"}}),a("button",{staticClass:"add",on:{click:t.showModal}},[t._v("View Email")]),a("AppModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],attrs:{image:t.item.img,name:t.item.name},on:{close:t.closeModal}})],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},yP9j:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"aside[data-v-7bd12016]{background:#fff;float:left;padding:20px}.sidearea[data-v-7bd12016]{border-bottom:1px solid #ccc}.sidearea[data-v-7bd12016]:last-of-type{border:none}.callout[data-v-7bd12016]{padding:20px 0}.callout h4[data-v-7bd12016]{padding-bottom:10px}.sidearea[data-v-7bd12016]:first-of-type{padding-bottom:40px}label[data-v-7bd12016]{font-family:Playfair Display,serif;padding:15px 0;text-align:center}span[data-v-7bd12016]{font-family:Barlow,sans-serif}.max[data-v-7bd12016]{font-size:12px;float:right;color:#565656}.min[data-v-7bd12016]{float:left;font-size:12px;color:#565656}ul.sidebar-list a[data-v-7bd12016]{text-decoration:none;padding-bottom:10px;display:block}",""])},zEqJ:function(t,e,a){"use strict";var o=a("6iP1");e.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{isModalVisible:!1}},filters:{usdollar:function(t){return"$"+t}},methods:{addItem:function(){this.$store.commit("addItem",this.item)},viewItem:function(){this.showModal=!0},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}},components:{AppModal:o.a}}}});