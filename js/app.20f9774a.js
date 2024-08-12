(function(){"use strict";var a={975:function(a,n,e){var t=e(751),o=e(935),r=(e(188),e(641)),l=e(33);const s={id:"app"},i=["src"],u={key:0,class:"success-message"},g={key:1,class:"error-message"},c={key:0,class:"success-message"},h={key:1,class:"error-message"},d=(0,r.Lk)("br",null,null,-1),k=(0,r.Lk)("br",null,null,-1);function f(a,n,e,o,f,_){const b=(0,r.g2)("el-menu-item"),p=(0,r.g2)("el-menu"),m=(0,r.g2)("el-header"),w=(0,r.g2)("el-col"),F=(0,r.g2)("el-text"),y=(0,r.g2)("el-input"),v=(0,r.g2)("el-row"),C=(0,r.g2)("el-button"),V=(0,r.g2)("el-tab-pane"),x=(0,r.g2)("el-tabs"),E=(0,r.g2)("el-card"),z=(0,r.g2)("el-main"),S=(0,r.g2)("el-container");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(S,null,{default:(0,r.k6)((()=>[(0,r.bF)(m,null,{default:(0,r.k6)((()=>[(0,r.bF)(p,{"default-active":f.activeIndex,class:"el-menu-demo",mode:"horizontal",onSelect:_.handleSelect},{default:(0,r.k6)((()=>[(0,r.bF)(b,{index:"1"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.bF)(b,{index:"2"},{default:(0,r.k6)((()=>[(0,r.eW)("Game")])),_:1}),(0,r.bF)(b,{index:"3"},{default:(0,r.k6)((()=>[(0,r.eW)("Contact")])),_:1})])),_:1},8,["default-active","onSelect"])])),_:1}),(0,r.bF)(z,null,{default:(0,r.k6)((()=>[(0,r.bF)(E,{shadow:"hover",class:"custom-card"},{default:(0,r.k6)((()=>[(0,r.bF)(v,null,{default:(0,r.k6)((()=>[(0,r.bF)(w,{span:8,class:"image-section"},{default:(0,r.k6)((()=>[(0,r.Lk)("img",{src:f.imgURL,alt:"GIF Image",class:"card-image"},null,8,i)])),_:1}),(0,r.bF)(w,{span:16,class:"tabs-section"},{default:(0,r.k6)((()=>[(0,r.bF)(x,{modelValue:f.activeName,"onUpdate:modelValue":n[5]||(n[5]=a=>f.activeName=a),class:"demo-tabs"},{default:(0,r.k6)((()=>[(0,r.bF)(V,{label:"单词：単語（たんご）",name:"first"},{default:(0,r.k6)((()=>[(0,r.bF)(v,{gutter:20,class:"input-row"},{default:(0,r.k6)((()=>[(0,r.bF)(w,{span:4,class:"label-col"},{default:(0,r.k6)((()=>[(0,r.bF)(F,{size:"large",type:"primary"},{default:(0,r.k6)((()=>[(0,r.eW)("中文释义")])),_:1})])),_:1}),(0,r.bF)(w,{span:10},{default:(0,r.k6)((()=>[(0,r.bF)(y,{id:"tyuugokugo",modelValue:f.tyuugokugo,"onUpdate:modelValue":n[0]||(n[0]=a=>f.tyuugokugo=a),size:"large"},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.bF)(v,{gutter:20,class:"input-row"},{default:(0,r.k6)((()=>[(0,r.bF)(w,{span:4,class:"label-col"},{default:(0,r.k6)((()=>[(0,r.bF)(F,{size:"large",type:"primary"},{default:(0,r.k6)((()=>[(0,r.eW)("日文（汉字）")])),_:1})])),_:1}),(0,r.bF)(w,{span:8,class:"input-container"},{default:(0,r.k6)((()=>[(0,r.bF)(y,{id:"nihonngo",modelValue:f.nihonngo,"onUpdate:modelValue":n[1]||(n[1]=a=>f.nihonngo=a),size:"large",style:(0,l.Tr)({color:f.nihonngoColor})},null,8,["modelValue","style"])])),_:1}),(0,r.bF)(w,{span:2},{default:(0,r.k6)((()=>[f.nihonngoSuccess?((0,r.uX)(),(0,r.CE)("span",u,"✔")):(0,r.Q3)("",!0),f.nihonngoError?((0,r.uX)(),(0,r.CE)("span",g,"✖")):(0,r.Q3)("",!0)])),_:1}),(0,r.bo)((0,r.bF)(w,{span:10},{default:(0,r.k6)((()=>[(0,r.bF)(y,{id:"nihonngo_answer",modelValue:f.nihonngo_answer,"onUpdate:modelValue":n[2]||(n[2]=a=>f.nihonngo_answer=a),size:"large",readonly:""},null,8,["modelValue"])])),_:1},512),[[t.aG,f.showAnswers]])])),_:1}),(0,r.bF)(v,{gutter:20,class:"input-row"},{default:(0,r.k6)((()=>[(0,r.bF)(w,{span:4,class:"label-col"},{default:(0,r.k6)((()=>[(0,r.bF)(F,{size:"large",type:"primary"},{default:(0,r.k6)((()=>[(0,r.eW)("日文（假名）")])),_:1})])),_:1}),(0,r.bF)(w,{span:8,class:"input-container"},{default:(0,r.k6)((()=>[(0,r.bF)(y,{id:"hiragana_katakana",modelValue:f.hiragana_katakana,"onUpdate:modelValue":n[3]||(n[3]=a=>f.hiragana_katakana=a),size:"large",style:(0,l.Tr)({color:f.hiraganaKatakanaColor})},null,8,["modelValue","style"])])),_:1}),(0,r.bF)(w,{span:2},{default:(0,r.k6)((()=>[f.hiraganaKatakanaSuccess?((0,r.uX)(),(0,r.CE)("span",c,"✔")):(0,r.Q3)("",!0),f.hiraganaKatakanaError?((0,r.uX)(),(0,r.CE)("span",h,"✖")):(0,r.Q3)("",!0)])),_:1}),(0,r.bo)((0,r.bF)(w,{span:10},{default:(0,r.k6)((()=>[(0,r.bF)(y,{id:"hiragana_katakana_answer",modelValue:f.hiragana_katakana_answer,"onUpdate:modelValue":n[4]||(n[4]=a=>f.hiragana_katakana_answer=a),size:"large",readonly:""},null,8,["modelValue"])])),_:1},512),[[t.aG,f.showAnswers]])])),_:1}),d,k,(0,r.bF)(v,{gutter:20,class:"input-row"},{default:(0,r.k6)((()=>[(0,r.bF)(w,{span:7,class:"label-col"},{default:(0,r.k6)((()=>[(0,r.bF)(C,{size:"large",type:"primary",round:"",onClick:_.generateRandomData},{default:(0,r.k6)((()=>[(0,r.eW)("伪随机生成")])),_:1},8,["onClick"])])),_:1}),(0,r.bF)(w,{span:7},{default:(0,r.k6)((()=>[(0,r.bF)(C,{size:"large",type:"success",round:"",onClick:_.submitAnswer},{default:(0,r.k6)((()=>[(0,r.eW)("提交答案")])),_:1},8,["onClick"])])),_:1}),(0,r.bF)(w,{span:10})])),_:1})])),_:1}),(0,r.bF)(V,{label:"Tab 2",name:"second"},{default:(0,r.k6)((()=>[(0,r.eW)("Content of Tab 2")])),_:1}),(0,r.bF)(V,{label:"Tab 3",name:"third"},{default:(0,r.k6)((()=>[(0,r.eW)("Content of Tab 3")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var _={name:"App",data(){return{activeIndex:"1",imgURL:e(482),activeTab:"first",activeName:"first",tyuugokugo:"",nihonngo:"",hiragana_katakana:"",tyuugokugo_answer:"",nihonngo_answer:"",hiragana_katakana_answer:"",showAnswers:!1,nihonngoColor:"#000000",hiraganaKatakanaColor:"#000000",nihonngoSuccess:!1,nihonngoError:!1,hiraganaKatakanaSuccess:!1,hiraganaKatakanaError:!1,dataCollection:[{tyuugokugo:"人数",nihonngo_answer:"人数",hiragana_katakana_answer:"にんずう"},{tyuugokugo:"年级",nihonngo_answer:"年級",hiragana_katakana_answer:"ねんきゅう"},{tyuugokugo:"岁数",nihonngo_answer:"歳数",hiragana_katakana_answer:"さいすう"}]}},methods:{handleSelect(a,n){console.log(a,n)},generateRandomData(){const a=Math.floor(Math.random()*this.dataCollection.length),n=this.dataCollection[a];this.tyuugokugo=n.tyuugokugo,this.nihonngo_answer=n.nihonngo_answer,this.hiragana_katakana_answer=n.hiragana_katakana_answer,this.showAnswers=!1,this.nihonngo="",this.hiragana_katakana="",this.nihonngoColor="#000000",this.hiraganaKatakanaColor="#000000",this.nihonngoSuccess=!1,this.nihonngoError=!1,this.hiraganaKatakanaSuccess=!1,this.hiraganaKatakanaError=!1},submitAnswer(){this.showAnswers=!0,this.nihonngoSuccess=this.nihonngo==this.nihonngo_answer,this.hiraganaKatakanaSuccess=this.hiragana_katakana==this.hiragana_katakana_answer,this.nihonngoError=this.nihonngo!==this.nihonngo_answer,this.hiraganaKatakanaError=this.hiragana_katakana!==this.hiragana_katakana_answer}}},b=e(262);const p=(0,b.A)(_,[["render",f]]);var m=p;const w=(0,t.Ef)(m);w.use(o.A,{size:"small",zIndex:3e3}),w.mount("#app")},482:function(a,n,e){a.exports=e.p+"img/IMG_7862.f9bdaf54.gif"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return a[t].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(n,t,o,r){if(!t){var l=1/0;for(g=0;g<a.length;g++){t=a[g][0],o=a[g][1],r=a[g][2];for(var s=!0,i=0;i<t.length;i++)(!1&r||l>=r)&&Object.keys(e.O).every((function(a){return e.O[a](t[i])}))?t.splice(i--,1):(s=!1,r<l&&(l=r));if(s){a.splice(g--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var g=a.length;g>0&&a[g-1][2]>r;g--)a[g]=a[g-1];a[g]=[t,o,r]}}(),function(){e.d=function(a,n){for(var t in n)e.o(n,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){e.p=""}(),function(){var a={524:0};e.O.j=function(n){return 0===a[n]};var n=function(n,t){var o,r,l=t[0],s=t[1],i=t[2],u=0;if(l.some((function(n){return 0!==a[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(i)var g=i(e)}for(n&&n(t);u<l.length;u++)r=l[u],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(g)},t=self["webpackChunkjapanese_word_exercise"]=self["webpackChunkjapanese_word_exercise"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=e.O(void 0,[504],(function(){return e(975)}));t=e.O(t)})();
//# sourceMappingURL=app.20f9774a.js.map