(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("test form")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-content",[a("MainForm")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("v-card",{attrs:{flat:""}},[a("v-snackbar",{attrs:{absolute:"",top:"",right:"",color:"success"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[a("span",[e._v("Registration successful!")]),a("v-icon",{attrs:{dark:""}},[e._v("mdi-checkbox-marked-circle")])],1),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:e.rules.name,color:"purple darken-2",label:e.displayLabel.name,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:e.rules.name,color:"blue darken-2",label:e.displayLabel.kanaName,required:""},model:{value:e.kanaName,callback:function(t){e.kanaName=t},expression:"kanaName"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:e.rules.phoneNumber,label:e.displayLabel.phoneNumber,required:""},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:e.emailRules,label:e.displayLabel.email,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:e.displayLabel.zipcode,required:""},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"warning",dark:""},on:{click:e.fetchAddress}},[e._v("zipCodeSearch")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:e.displayLabel.prefecture,required:""},model:{value:e.prefecture,callback:function(t){e.prefecture=t},expression:"prefecture"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:e.displayLabel.address,required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{color:"teal"},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",[e._v("Bio "),a("small",[e._v("(optional)")])])]},proxy:!0}]),model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:e.prefectures.map((function(e){return e.displayText})),rules:e.rules.animal,color:"pink",label:"お住まいの都県をお選びください",required:""},model:{value:e.prefecture,callback:function(t){e.prefecture=t},expression:"prefecture"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-slider",{attrs:{rules:e.rules.age,color:"orange",label:"Age",hint:"Be honest",min:"1",max:"100","thumb-label":""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-checkbox",{attrs:{color:"green"},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",{on:{click:function(e){e.stopPropagation()}}},[e._v(" Do you accept the "),a("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.terms=!0}}},[e._v("terms")]),e._v(" and "),a("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.conditions=!0}}},[e._v("conditions?")])])]},proxy:!0}]),model:{value:e.form.terms,callback:function(t){e.$set(e.form,"terms",t)},expression:"form.terms"}})],1)],1)],1),a("v-card-actions")],1),a("v-dialog",{attrs:{width:"70%"},model:{value:e.terms,callback:function(t){e.terms=t},expression:"terms"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[e._v("Terms")]),e._l(5,(function(t){return a("v-card-text",{key:t},[e._v(" "+e._s(e.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(t){e.terms=!1}}},[e._v("Ok")])],1)],2)],1),a("v-dialog",{attrs:{width:"70%"},model:{value:e.conditions,callback:function(t){e.conditions=t},expression:"conditions"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[e._v("Conditions")]),e._l(5,(function(t){return a("v-card-text",{key:t},[e._v(" "+e._s(e.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(t){e.conditions=!1}}},[e._v("Ok")])],1)],2)],1)],1)],1),a("div",[a("v-bottom-sheet",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{color:"green",dark:""}},r),[e._v(" Open Persistent ")])]}}]),model:{value:e.sheet,callback:function(t){e.sheet=t},expression:"sheet"}},[a("v-sheet",{staticClass:"text-center",attrs:{height:"200px"}},[a("v-btn",{staticClass:"mt-6",attrs:{flat:"",color:"error"},on:{click:function(t){e.sheet=!e.sheet}}},[e._v("close")]),a("div",{staticClass:"py-3"},[e._v(" This is a bottom sheet using the persistent prop ")])],1)],1)],1)])},i=[],l=(a("a15b"),a("dca8"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),c=a("3e84"),d=a("4fbf"),u=a.n(d),p=a("bc3a"),m=a.n(p),f="http://zipcloud.ibsnet.co.jp/api/search",v={name:"mainForm",data:function(){var e=Object.freeze({first:"",last:"",bio:"",favoriteAnimal:"",age:null,terms:!1});return{form:Object.assign({},e),rules:{age:[function(e){return e<10||"I don't believe you!"}],animal:[function(e){return(e||"").length>0||"入力必須です"}],name:[function(e){return(e||"").length>0||"入力必須です"}],phoneNumber:[function(e){return(e||"").length>0||"入力必須です"},function(e){return 13===(e||"").length||"-を入れて13桁です"},function(e){var t=new c["a"]("JP").input(e),a=e===t;return a||"電話番号を正しく入力してください"}]},animals:["Dog","Cat","Rabbit","Turtle","Snake"],conditions:!1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",snackbar:!1,terms:!1,defaultForm:e,sheet:!1,name:"山田太郎",kanaName:"ヤマダタロウ",zipcode:"150-0022",prefecture:"",address:"",phoneNumber:"090-1234-5678",email:"info@famm.us",brithday:"19901212",youngestChildAge:"",extraComment:"「Famm」からお試し申し込みです",whichAdForm:"",ReferrerLink:99,isEnrolled:1,availableTimeToContact:11,reason:1,request:5}},methods:{fetchAddress:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=/^\d{3}-\d{4}$/,a.test(e.zipcode)){t.next=3;break}return t.abrupt("return");case 3:return r=e.zipcode.split("-").join(""),console.log(r),t.next=7,m.a.get(f,{adapter:u.a,params:{zipcode:r}});case 7:if(n=t.sent,200===n.status){t.next=10;break}return t.abrupt("return");case 10:console.log(n),o=n.data.results[0],e.prefecture=o.address1,e.address=o.address2+o.address3,console.log(n,e.prefecture,e.address);case 15:case"end":return t.stop()}}),t)})))()}},computed:{emailRules:function(){return[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"入力されたメールアドレスは有効ではありません"}]},displayLabel:function(){return{name:"名前",kanaName:"フリガナ",zipcode:"郵便番号",prefecture:"都県",address:"住所",phoneNumber:"電話",email:"E-mail",brithday:"生年月日",youngestChildAge:"育児状況（末子年齢）",extraComment:"その他コメント",whichAdForm:"経由広告",ReferrerLink:"リンク元",isEnrolled:"コープデリ加入の有無",availableTimeToContact:"連絡希望日",reason:"応募項目への同意",request:"要望"}},prefectures:function(){return[{code:1,displayText:"東京都"},{code:2,displayText:"埼玉県"},{code:3,displayText:"千葉県"},{code:4,displayText:"茨城県"},{code:5,displayText:"栃木県"},{code:6,displayText:"群馬県"},{code:7,displayText:"長野県"},{code:8,displayText:"新潟県"}]},youngestChildAgeOptions:function(){return[{code:8,displayText:"0歳児"},{code:9,displayText:"1〜3歳児"},{code:10,displayText:"4歳〜未就学児"},{code:13,displayText:"小学生以上"},{code:15,displayText:"その他"}]},enrollment:function(){return[{code:1,displayText:"加入している"},{code:1,displayText:"加入していない"}]},availableTimeToContacts:function(){return[{code:11,displayText:"10-12時"},{code:12,displayText:"12-15時"},{code:13,displayText:"15-17時"},{code:14,displayText:"17-19時"},{code:15,displayText:"19-20時"}]},emailAccept:function(){return[{code:1,displayText:"許可"},{code:2,displayText:"不可"}]},reasonOptions:function(){return[{code:1,displayText:"買い物が不便"},{code:2,displayText:"食の安全に関心がある"},{code:3,displayText:"価格が安い"},{code:4,displayText:"共済加入を検討している"},{code:5,displayText:"コープの店舗を利用したい"},{code:6,displayText:"試しに購入してみたい"},{code:8,displayText:"できるだけ安心・安全な食品を買いたい"},{code:9,displayText:"料理・家事を時短したい"},{code:10,displayText:"オーガニック・産直商品に興味がある"}]},requestOptions:function(){return[{code:5,displayText:"利用したい"},{code:6,displayText:"興味がある"},{code:7,displayText:"少し興味がある"},{code:7,displayText:"まだわからない"}]}}},b=v,x=a("2877"),h=a("6544"),y=a.n(h),g=a("288c"),k=a("8336"),T=a("b0af"),_=a("99d9"),C=a("ac7c"),V=a("62ad"),w=a("a523"),j=a("169a"),O=a("4bd4"),S=a("132d"),N=a("0fd9"),q=a("b974"),A=a("8dd9"),P=a("ba0d"),z=a("2db4"),L=a("2fa4"),F=a("8654"),R=a("a844"),M=Object(x["a"])(b,s,i,!1,null,null,null),$=M.exports;y()(M,{VBottomSheet:g["a"],VBtn:k["a"],VCard:T["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCheckbox:C["a"],VCol:V["a"],VContainer:w["a"],VDialog:j["a"],VForm:O["a"],VIcon:S["a"],VRow:N["a"],VSelect:q["a"],VSheet:A["a"],VSlider:P["a"],VSnackbar:z["a"],VSpacer:L["a"],VTextField:F["a"],VTextarea:R["a"]});var B={name:"App",components:{MainForm:$},data:function(){return{}}},E=B,D=a("7496"),I=a("40dc"),J=a("a75b"),G=a("adda"),H=Object(x["a"])(E,n,o,!1,null,null,null),K=H.exports;y()(H,{VApp:D["a"],VAppBar:I["a"],VBtn:k["a"],VContent:J["a"],VIcon:S["a"],VImg:G["a"],VSpacer:L["a"]});var Q=a("f309"),U=a("dca6"),W=a.n(U);r["a"].use(Q["a"]);var X=new Q["a"]({lang:{locales:{ja:W.a},current:"ja"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:X,render:function(e){return e(K)}}).$mount("#app")}});
//# sourceMappingURL=app.e083c974.js.map