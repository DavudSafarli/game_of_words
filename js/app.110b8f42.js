(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],n[s]&&m.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/game_of_words/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"017a":function(e,t,a){"use strict";var i=a("2e9e"),n=a.n(i);n.a},"20d5":function(e,t,a){},"2e9e":function(e,t,a){},"30d6":function(e,t,a){},3980:function(e,t,a){"use strict";var i=a("a4cf"),n=a.n(i);n.a},"39db":function(e,t,a){},"40c9":function(e,t,a){},5434:function(e,t,a){"use strict";var i=a("d18d"),n=a.n(i);n.a},5467:function(e,t,a){"use strict";var i=a("871d"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"page",mode:"out-in"}},[e.layout?a(e.layout,{tag:"component"}):e._e()],1)],1)},r=[];const s=a("81be"),o=s.keys().map(e=>[e.replace(/(^.\/)|(\.vue$)/g,""),s(e)]).reduce((e,[t,a])=>{return e[t]=a.default||a,e},{});var l={el:"#app",data:()=>({layout:null,defaultLayout:"default"}),methods:{setLayout(e){e&&o[e]||(e=this.defaultLayout),this.layout=o[e]}}},c=l,u=(a("9993"),a("2877")),d=Object(u["a"])(c,n,r,!1,null,null,null);d.options.__file="App.vue";var m=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"page",mode:"out-in"}},[e._t("default",[a("router-view")])],2)],1)},f=[],v={name:"Child",mounted(){window.onload=function(){console.log("loaded"),document.body.classList.remove("preload")}}},g=v,h=(a("c632"),Object(u["a"])(g,p,f,!1,null,null,null));h.options.__file="Child.vue";var b=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{attrs:{height:"50","max-width":"1200"}},[a("v-toolbar-items",[a("v-btn",{attrs:{flat:"","active-class":"false height",to:{name:"home"}}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("English")]),a("span",{staticClass:"font-weight-light"},[e._v("Game")])])],1)],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{staticClass:"new_button",attrs:{flat:"",to:{name:"game1"}}},[a("v-chip",{staticClass:"new_chip",attrs:{small:"",color:"red","text-color":"white"}},[e._v("new")]),a("span",[e._v("Words Checker")])],1)],1),a("v-toolbar-items",[a("v-menu",{attrs:{"offset-y":"",left:""}},[a("v-btn",{staticClass:"white--text",attrs:{slot:"activator",flat:"",color:"secondary"},slot:"activator"},[e._v("\n                Games "),a("v-icon",[e._v("arrow_drop_down")])],1),a("v-list",[a("v-list-tile",{attrs:{"active-class":"false",to:{name:"game1"}}},[a("v-list-tile-content",[e._v("\n                        Words Checker\n                    ")])],1),a("v-list-tile",{attrs:{"active-class":"false",to:"/asdas"}},[a("v-list-tile-content",[e._v("\n                        Game 2\n                    ")])],1)],1)],1)],1)],1)},y=[],w={name:"Navbar"},k=w,x=(a("5dfc"),Object(u["a"])(k,_,y,!1,null,null,null));x.options.__file="Navbar.vue";var j=x.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"preview"==e.game_state?a("div",{staticClass:"game_info"},[e._m(0),a("div",{attrs:{id:"start_button"},on:{click:e.start_game}},[a("v-btn",[e._v("Start")])],1)]):e._e()},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game_preview columns"},[a("div",{staticClass:"pic_preview none"},[a("p",[e._v("This is Word itself")])]),a("div",{staticClass:"pic_preview none"},[a("p",[e._v("This is Definition")])])])}],T={default:{numberOfCards:"12",numberOfPairs:"6",timeout:"600"}},E=a("2f62"),L={name:"StartButton",data(){return{destroyed:!1}},computed:{...Object(E["b"])(["button_state","game_state"])},methods:{...Object(E["c"])(["buttonState","set_game_state","set_time"]),start_game(){this.set_game_state("loading"),this.set_time((new Date).getTime()),this.buttonState(!1),this.$store.dispatch("hacume"),window.addEventListener("end",()=>this.$store.dispatch("finish"))}},beforeMount(){this.set_game_state("preview")},beforeDestroy(){console.log("before destroy")},async mounted(){let e=document.querySelectorAll(".pic_preview"),t=(e.length,this);async function a(){"preview"==t.game_state&&(await i(),await n(),await r(),await s(),a())}function i(){return new Promise(t=>{setTimeout(()=>{return e[0].classList.remove("none","found"),e[1].classList.remove("none","found"),t()},300)})}function n(){return new Promise(t=>{setTimeout(()=>{e[0].classList.add("selected"),setTimeout(()=>{return e[1].classList.add("selected"),t()},600)},800)})}function r(){return new Promise(t=>{setTimeout(()=>{return e[0].classList.remove("selected"),e[0].classList.add("found"),e[1].classList.remove("selected"),e[1].classList.add("found"),t()},300)})}function s(){return new Promise(t=>{setTimeout(()=>{return e[0].classList.add("none"),e[1].classList.add("none"),t()},700)})}a()}},P=L,$=(a("5cd4"),Object(u["a"])(P,O,C,!1,null,null,null));$.options.__file="StartButton.vue";var q=$.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.game_state||"paused"==e.game_state?a("div",{staticClass:"columns is-mobile fixed"},[a("div",{staticClass:"column"},[a("v-btn",{attrs:{"active-class":"home-link v-btn--active",to:{name:"home"}}},[a("v-icon",[e._v("arrow_back")])],1)],1),a("v-spacer"),a("div",{staticClass:"column"},[a("v-btn",{attrs:{color:"grey lighten-4"},on:{click:e.pause}},[a("v-icon",[e._v("pause")])],1)],1)],1):e._e()},V=[],z={name:"BottomButtons",computed:{...Object(E["b"])(["game_state"])},methods:{...Object(E["c"])(["set_game_state","set_offset","set_time"]),pause(){console.log("paused"),this.set_game_state("paused"),this.set_offset()}}},S=z,D=(a("9932"),Object(u["a"])(S,M,V,!1,null,null,null));D.options.__file="ButtomButtons.vue";var H=D.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{value:e.game_finished,width:"500"}},[a("v-card",[a("v-card-text",{style:{"text-align":"center",color:e.game_status?"#4BB543":"#ED5249"}},[e._v("\r\n            "+e._s(e.game_status?"You won, but It's not over!":"You Suck!!! Try Again!")+"\r\n        ")]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",to:{name:"home"},flat:""}},[e._v("\r\n                back\r\n            ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.$store.dispatch("hacume")}}},[e._v("\r\n                try again\r\n            ")])],1)],1)],1)},I=[],A={name:"TryAgain",computed:{...Object(E["b"])(["game_finished","game_status"])}},W=A,G=(a("591e"),Object(u["a"])(W,B,I,!1,null,null,null));G.options.__file="TryAgain.vue";var N=G.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.game_ready_state?a("div",{attrs:{id:"timeout"}},[a("span",{attrs:{id:"countdown"}})]):e._e()},F=[],R={name:"Timeout",computed:{...Object(E["b"])(["game_ready_state"])},methods:{...Object(E["c"])(["set_game_state","set_offset"])},mounted(){var e,t,a=this,i=document.title;"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange");document.getElementById("videoElement");function n(){document[e]?(a.set_game_state("paused"),a.set_offset(),document.title="Paused"):document.title=i}"undefined"===typeof document.addEventListener||void 0===e?console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."):document.addEventListener(t,n,!1)}},Y=R,J=(a("7306"),Object(u["a"])(Y,U,F,!1,null,null,null));J.options.__file="Timeout.vue";var K=J.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.game_state||"paused"==e.game_state?a("div",{staticClass:"columns is-mobile",attrs:{id:"game"}},e._l(e.game_words,function(t,i){return a("div",{key:i,staticClass:"column is-one-third"},[a("div",{staticClass:"rel"},[a("div",{ref:"pic",refInFor:!0,staticClass:"pic",attrs:{"data-id":i+1},domProps:{innerHTML:e._s(t.key)},on:{click:e.clickHandler}})])])}),0):e._e()},X=[],Z={name:"WordCard",data(){return{selected:[]}},computed:{...Object(E["b"])(["game_words","game_state"])},methods:{async clickHandler(e){let t=e.currentTarget,a=t.getAttribute("data-id")-1,i=this.game_words[a].p_id,n=this.selected;if(0==n.length)n.push({data_id:a,pair_id:i,cube:t}),t.classList.add("selected");else if(1==n.length){if(n[0].data_id==a)return n[0].cube.classList.remove("selected"),void(this.selected=[]);n.push({data_id:a,pair_id:i,cube:t}),t.classList.add("selected")}n=this.selected,2==n.length&&(n[0].cube.classList.remove("selected"),n[1].cube.classList.remove("selected"),n[0].pair_id==n[1].pair_id&&(n[0].cube.classList.add("found"),n[1].cube.classList.add("found"),setTimeout(async()=>{n[0].cube.parentElement.style.visibility="hidden",n[1].cube.parentElement.style.visibility="hidden";await this.$store.dispatch("add_found_pair",n[0].pair_id)},200)),this.selected=[])},resizeHandler(){let e=document.querySelector(".pic");if(!e)return;console.log("resized");let t=document.querySelector("#game");t.style.setProperty("--width",e.offsetWidth+"px")},debounce(e,t,a){var i;return function(){var n=this,r=arguments,s=function(){i=null,a||e.apply(n,r)},o=a&&!i;clearTimeout(i),i=setTimeout(s,t),o&&e.apply(n,r)}}},mounted(){console.log("mounted"),window.addEventListener("resize",this.debounce(this.resizeHandler,50,!1)),this.resizeHandler()},updated(){1==this.game_state&&this.resizeHandler()}},ee=Z,te=(a("017a"),Object(u["a"])(ee,Q,X,!1,null,null,null));te.options.__file="WordCard.vue";var ae=te.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{value:"paused"==e.game_state,persistent:"","max-width":"450"}},[a("v-card",[a("v-card-title",{staticClass:"headline justify-center"},[e._v("Paused")]),a("v-card-actions",[a("v-btn",{attrs:{light:"","active-class":"home-link v-btn--active",to:{name:"home"}}},[a("v-icon",{attrs:{color:"black"}},[e._v("arrow_back")])],1),a("v-spacer"),a("v-btn",{attrs:{light:""},on:{click:e.resume}},[a("v-icon",{attrs:{color:"black"}},[e._v("play_arrow")])],1)],1)],1)],1)},ne=[],re={name:"PauseWindow",computed:{...Object(E["b"])(["game_state"])},methods:{...Object(E["c"])(["set_game_state","set_time"]),resume(){this.set_game_state(!0),this.set_time()}}},se=re,oe=(a("3980"),Object(u["a"])(se,ie,ne,!1,null,null,null));oe.options.__file="PauseWindow.vue";var le=oe.exports;[le,ae,K,N,H,q,b,j].forEach(e=>{i["a"].component(e.name,e)});var ce=a("bb71"),ue=a("7496"),de=a("71d9"),me=a("a523"),pe=a("549c"),fe=a("2a7f"),ve=a("8336"),ge=a("9910"),he=a("e449"),be=a("8860"),_e=a("ba95"),ye=a("5d23"),we=a("132d"),ke=a("b0af"),xe=a("12b2"),je=a("169a"),Oe=a("99d9"),Ce=a("ce7e"),Te=a("cc20");a("da64"),a("953f");i["a"].use(ce["a"],{iconfont:"md",components:{VApp:ue["a"],VToolbar:de["a"],VContainer:me["a"],VContent:pe["a"],VToolbarItems:fe["a"],VBtn:ve["a"],VToolbarTitle:fe["b"],VSpacer:ge["a"],VMenu:he["a"],VList:be["a"],VListTile:_e["a"],VListTileContent:ye["a"],VIcon:we["a"],VCard:ke["a"],VCardTitle:xe["a"],VDialog:je["a"],VCardText:Oe["b"],VDivider:Ce["a"],VCardActions:Oe["a"],VChip:Te["a"]}});var Ee=a("bc13"),Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v("This will be something great in the near future. Stay cool")])])},Pe=[],$e={},qe=Object(u["a"])($e,Le,Pe,!1,null,null,null);qe.options.__file="Games.vue";var Me=qe.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-full"},[a("v-btn",{attrs:{to:{name:"playgame1"}}},[e._v("Play")])],1)]),a("v-btn",{attrs:{to:{name:"home"}}},[e._v("Back")])],1)},ze=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-third"},[i("img",{attrs:{src:a("f0d6"),alt:""}})]),i("div",{staticClass:"column is-one-third"},[e._v("Match the words with their closest synonyms.\nYou have 30 seconds total.\nOther features will be added in the near future!"),i("p",[e._v("The Game is fun and full of errors...")])])])}],Se={},De=Se,He=(a("5434"),Object(u["a"])(De,Ve,ze,!1,null,null,null));He.options.__file="WordsChecker.vue";var Be=He.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"columns is-mobile w100":!0,overlay:"paused"==e.game_state||"loading"==e.game_state}},[a("div",{class:{"column is-two-fifths-fullhd is-two-fifths-widescreen is-three-fifths-desktop is-three-fifths-tablet is-four-fifths-mobile wrapper":!0}},[a("svg",{staticClass:"blur-svg",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("filter",{attrs:{id:"blur-filter"}},[a("feGaussianBlur",{attrs:{stdDeviation:"3"}})],1)])]),a("timeout"),a("word-card"),a("start-button")],1),a("pause-window"),a("try-again"),a("bottom-buttons",{staticClass:"mb-0"})],1)},Ae=[],We={layout:"game",data(){return{}},mounted(){},computed:{...Object(E["b"])(["game_words","game_ready_state","game_state"])},methods:{...Object(E["c"])(["set_game_state"])},beforeDestroy(){console.log("before destroyyy"),this.set_game_state(!1)}},Ge=We,Ne=(a("d922"),Object(u["a"])(Ge,Ie,Ae,!1,null,null,null));Ne.options.__file="WordsChecker.vue";var Ue=Ne.exports,Fe=[{path:"/",name:"home",component:Ee["default"]},{path:"games",name:"games",component:Me},{path:"/words-checker",name:"game1",component:Be},{path:"/words-checker/play",name:"playgame1",component:Ue}],Re=a("8c4f");i["a"].use(Re["a"]);const Ye=Je(a("9091"));function Je(e){return e.keys().map(t=>{return[t.replace(/(^.\/)|(\.js$)/g,""),e(t)]}).reduce((e,[t,a])=>{return{...e,[t]:a.default}},{})}const Ke=[],Qe=Ze();var Xe=Qe;function Ze(){const e=new Re["a"]({base:"/game_of_words/",mode:"history",routes:Fe});return e.beforeEach(tt),e.afterEach(it),e}function et(e){return Promise.all(e.map(e=>{return"function"===typeof e?e():e}))}async function tt(e,t,a){const i=await et(Qe.getMatchedComponents({...e}));if(0===i.length)return a();const n=nt(i);at(n,e,t,(...e)=>{0===e.length&&Qe.app.setLayout(i[0].layout||""),a(...e)})}function at(e,t,a,i){const n=e.reverse();const r=(...e)=>{if(e.length>0||0===n.length)return i(...e);const s=n.pop();if("function"===typeof s)s(t,a,r);else{if(!Ye[s])throw Error(`Undefined middleware [${s}]`);Ye[s](t,a,r)}};r()}async function it(e,t,a){await Qe.app.$nextTick()}function nt(e){const t=[...Ke];return e.filter(e=>e.middleware).forEach(e=>{Array.isArray(e.middleware)?t.push(...e.middleware):t.push(e.middleware)}),t}var rt,st=a("bc3a"),ot=a.n(st);i["a"].use(E["a"]);const lt=new E["a"].Store({state:{offset:0,time:null,game_state:!1,button_state:!0,game_finished:null,game_status:null,found_pairs:[],game_words:[],game_ready_state:!1,words_hard:["consider","minute","accord","evident","practice","intend","concern","commit","issue","approach","establish","utter","conduct","engage","obtain","scarce","policy","straight","stock","apparent","property","fancy","concept","court","appoint","passage","vain","instance","coast","project","commission","constant","circumstances","constitute","level","affect","institute","render","appeal","generate","theory","range","campaign","league","labor","confer","grant","dwell","entertain","contract","earnest","yield","wander","insist","knight","convince","inspire","convention","skill","harry","financial","reflect","novel","furnish","compel","venture","territory","temper","bent","intimate","undertake","majority","assert","crew","chamber","humble","scheme","keen","liberal","despair","tide","attitude","justify","flag","merit","manifest","notion","scale","formal","resource","persist","contempt","tour","plead","weigh","mode","distinction","inclined","attribute","exert","oppress","contend","stake","toil","perish","disposition","rail","cardinal","boast","advocate","bestow","allege","notwithstanding","lofty","multitude","steep","heed","modest","partial","apt","esteem","credible","provoke","tread","ascertain","fare","cede","perpetual","decree","contrive","derived","elaborate","substantial","frontier","facile","cite","warrant","sob","rider","dense","afflict","flourish","ordain","pious","vex","gravity","suspended","conspicuous","retort","jet","bolt","assent","purse","plus","sanction","proceeding","exalt","siege","malice","extravagant","wax","throng","venerate","assail","sublime","exploit","exertion","kindle","endow","imposed","humiliate","suffrage","ensue","brook","gale","muse","satire","intrigue","indication","dispatch","cower","wont","tract","canon","impel","latitude","vacate","undertaking","slay","predecessor","delicacy","forsake","beseech","philosophical","grove","frustrate","illustrious","device","pomp","entreat","impart","propriety","consecrate","proceeds","fathom","objective","clad","partisan","faction","contrived","venerable","restrained","besiege","manifestation","rebuke","insurgent","rhetoric","scrupulous","ratify","stump","discreet","wistful","mortify","ripple","premise","subside","adverse","caprice","muster","comprehensive","accede","fervent","cohere","tribunal","austere","recovering","stratum","conscientious","arbitrary","exasperate","conjure","ominous","edifice","elude","pervade","foster","admonish","repeal","retiring","incidental","acquiesce","slew","usurp","sentinel","precision","depose","wanton","odium","precept","deference","fray","candid","enduring","impertinent","bland","insinuate","nominal","suppliant","languid","rave","monetary","headlong","infallible","coax","explicate","gaunt","morbid","ranging","pacify","pastoral","dogged","ebb","aide","appease","stipulate","recourse","constrained","bate","aversion","conceit","loath","rampart","extort","tarry","perpetrate","decorum","luxuriant","cant","enjoin","avarice","edict","disconcert","symmetry","capitulate","arbitrate","cleave","append","visage","horde","parable","chastise","foil","veritable","grapple","gentry","pall","maxim","projection","prowess","dingy","semblance","tout","fortitude","asunder","rout","staid","beguile","purport","deprave","bequeath","enigma","assiduous","vassal","quail","outskirts","bulwark","swerve","gird","betrothed","prospective","advert","peremptory","rudiment","deduce","halting","ignominy","ideology","pallid","chagrin","obtrude","audacious","construe","ford","repast","stint","fresco","dutiful","hew","parity","affable","interminable","pillage","foreboding","rend","livelihood","deign","capricious","stupendous","chaff","innate","reverie","wrangle","crevice","ostensible","craven","vestige","plumb","reticent","propensity","chide","espouse","raiment","intrepid","seemly","allay","fitful","erode","unaffected","canto","docile","patronize","teem","estrange","spat","warble","mien","sate","constituency","patrician","parry","practitioner","ravel","infest","actuate","surly","convalesce","demoralize","devolve","alacrity","waive","unwonted","seethe","scrutinize","diffident","execrate","implacable","pique","mite","encumber","uncouth","petulant","expiate","cavalier","banter","bluster","debase","retainer","subjugate","extol","fraught","august","fissure","knoll","callous","inculcate","nettle","blanch","inscrutable","tenacious","thrall","exigency","disconsolate","impetus","auspices","sonorous","exploitation","bane","dint","ignominious","amicable","onset","conservatory","zenith","voluble","yeoman","levity","rapt","sultry","pinion","axiom","descry","retinue","functionary","imbibe","diversified","maraud","grudging","partiality","philology","wry","caucus","permeate","propitious","salient","propitiate","excise","betoken","palatable","upbraid","renegade","hoary","pedantic","coy","troth","encroachment","belie","armada","succor","imperturbable","irresolute","knack","unseemly","accentuate","divulge","brawn","burnish","palpitate","promiscuous","dissemble","flotilla","invective","hermitage","despoil","sully","malevolent","irksome","prattle","subaltern","welt","wreak","tenable","inimitable","depredation","amalgamate","immutable","proxy","dote","reactionary","rationalism","endue","discriminating","brooch","pert","disembark","aria","trappings","abet","clandestine","distend","glib","pucker","rejoinder","spangle","blighted","nicety","aggrieve","vestment","urbane","defray","spectral","munificent","dictum","fad","scabbard","adulterate","beleaguer","gripe","remission","exorbitant","invocation","cajole","inclusive","interdict","abase","obviate","hurtle","unanimity","mettle","interpolate","surreptitious","dissimulate","ruse","specious","revulsion","hale","palliate","obtuse","querulous","vagary","incipient","obdurate","grovel","refractory","dregs","ascendancy","supercilious","pundit","commiserate","alcove","assay","parochial","conjugal","abjure","frieze","ornate","inflammatory","machination","mendicant","meander","bullion","diffidence","makeshift","husbandry","podium","dearth","granary","whet","imposture","diadem","fallow","hubbub","dispassionate","harrowing","askance","lancet","rankle","ramify","gainsay","polity","credence","indemnify","ingratiate","declivity","importunate","passe","whittle","repine","flay","larder","threadbare","grisly","untoward","idiosyncrasy","quip","blatant","stanch","incongruity","perfidious","platitude","revelry","delve","extenuate","polemic","enrapture","virtuoso","glower","mundane","fatuous","incorrigible","postulate","gist","vociferous","purvey","baleful","gibe","dyspeptic","prude","luminary","amenable","willful","overbearing","dais","automate","enervate","wheedle","gusto","bouillon","omniscient","apostate","carrion","emolument","ungainly","impiety","decadence","homily","avocation","circumvent","syllogism","collation","haggle","waylay","savant","cohort","unction","adjure","acrimony","clarion","turbid","cupidity","disaffected","preternatural","eschew","expatiate","didactic","sinuous","rancor","puissant","homespun","embroil","pathological","resonant","libretto","flail","bandy","gratis","upshot","aphorism","redoubtable","corpulent","benighted","sententious","cabal","paraphernalia","vitiate","adulation","quaff","unassuming","libertine","maul","adage","expostulation","tawdry","trite","hireling","ensconce","egregious","cogent","incisive","errant","sedulous","incandescent","derelict","entomology","execrable","sluice","moot","evanescent","vat","dapper","asperity","flair","mote","circumspect","inimical","apropos","gruel","gentility","disapprobation","cameo","gouge","oratorio","inclement","scintilla","confluence","squalor","stricture","emblazon","augury","abut","banal","congeal","pilfer","malcontent","sublimate","eugenic","lineament","firebrand","fiasco","foolhardy","retrench","ulterior","equable","inured","invidious","unmitigated","concomitant","cozen","phlegmatic","dormer","pontifical","disport","apologist","abeyance","enclave","improvident","disquisition","categorical","placate","redolent","felicitous","gusty","natty","pacifist","buxom","heyday","herculean","burgeon","crone","prognosticate","lout","simper","iniquitous","rile","sentient","garish","readjustment","erstwhile","aquiline","bilious","vilify","nuance","gawk","refectory","palatial","mincing","trenchant","emboss","proletarian","careen","debacle","sycophant","crabbed","archetype","cryptic","penchant","bauble","mountebank","fawning","hummock","apotheosis","discretionary","pithy","comport","checkered","ambrosia","factious","disgorge","filch","wraith","demonstrable","pertinacious","emend","laggard","waffle","loquacious","venial","peon","effulgence","lode","fanfare","dilettante","pusillanimous","ingrained","quagmire","reprobation","mannered","squeamish","proclivity","miserly","vapid","mercurial","perspicuous","nonplus","enamor","hackneyed","spate","pedagogue","acme","masticate","sinecure","indite","emetic","temporize","unimpeachable","genesis","mordant","smattering","suavity","stentorian","junket","appurtenance","nostrum","immure","astringent","unfaltering","tutelage","testator","elysian","fulminate","fractious","pummel","manumit","unexceptionable","triumvirate","sybarite","jibe","magisterial","roseate","obloquy","hoodwink","striate","arrogate","rarefied","chary","credo","superannuated","impolitic","aspersion","abysmal","poignancy","stilted","effete","provender","endemic","jocund","procedural","rakish","skittish","peroration","nonentity","abstemious","viscid","doggerel","sleight","rubric","plenitude","rebus","wizened","whorl","fracas","iconoclast","saturnine","madrigal","discursive","zealot","moribund","modicum","connotation","adventitious","recondite","zephyr","countermand","captious","cognate","forebear","cadaverous","foist","dotage","nexus","choleric","garble","bucolic","denouement","animus","overweening","tyro","preen","largesse","retentive","unconscionable","badinage","insensate","sherbet","beatific","bemuse","microcosm","factitious","gestate","traduce","sextant","coiffure","malleable","rococo","fructify","nihilist","ellipsis","accolade","codicil","roil","grandiloquent","inconsequential","effervescence","stultify","tureen","pellucid","euphony","apocryphal","veracious","pendulous","exegesis","effluvium","apposite","viscous","misanthrope","vintner","halcyon","anthropomorphic","turgid","malaise","polemical","gadfly","atavism","contusion","parsimonious","dulcet","reprise","anodyne","bemused"]},getters:{game_state:e=>e.game_state,timeout:e=>e.timeout,game_words:e=>e.game_words,get_button_state:e=>e.game_words,game_status:e=>e.game_status,button_state:e=>e.button_state,game_finished:e=>e.game_finished,game_ready_state:e=>e.game_ready_state},mutations:{set_time(e,t){e.time=(new Date).getTime()/1e3},set_offset(e){e.offset+=(new Date).getTime()/1e3-e.time},set_game_state(e,t){e.game_state=t},buttonState(e,t){e.button_state=t},add_found_pair(e,t){e.found_pairs.push(t)},save_game_words(e,t){e.game_words=t}},actions:{check_finish({commit:e,state:t}){t.found_pairs.length==T.default.numberOfPairs&&(t.game_finished=!0,t.game_status=!0,clearInterval(rt))},add_found_pair({commit:e,dispatch:t},a){e("add_found_pair",a),t("check_finish")},finish({commit:e,state:t,dispatch:a},i){t.game_finished=!0,6==t.found_pairs.length?t.game_status=!0:t.game_status=!1},countdown({state:e}){let t=T.default.timeout;e.offset=0,e.time=(new Date).getTime()/1e3;let a=t,i=document.getElementById("countdown");i.innerHTML=a,rt=setInterval(function(){console.log(1),1==e.game_state?(a=t-(e.offset+(new Date).getTime()/1e3-e.time),i.innerHTML=Math.ceil(a),a<=0&&(clearInterval(rt),window.dispatchEvent(new Event("end")))):0==e.game_state&&clearInterval(rt)},50)},hacume({commit:e,state:t,dispatch:a},i){e("set_game_state","loading"),t.game_ready_state=!0,t.game_finished=null,t.game_status=null,t.game_words="",t.found_pairs=[];let n=[],r=[],s=1;for(let u=0;u<T.default.numberOfPairs;u++){const e=Math.floor(1e3*Math.random());let a=t.words_hard[e];r.push({id:s,p_id:u+1,key:"<p>"+a+"</p>"}),s++,n.push(l(a,u))}function o(e){return`https://api.wordnik.com/v4/word.json/${e}/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=bdc7a844dda214d7b942a0622ef0d47ee6c4a6acb836dc532`}async function l(e,t){return new Promise(async(a,i)=>{let n=await ot.a.get(o(e));n=n.data;let r=n.length,s=0;for(let e=1;e<r;e++)s=n[e].text&&n[e].text.length<n[0].text.length?e:s;let l="ERROR";n[s].text&&(l=n[s].text.replace(".","").replace(/\s*\(.*?\)\s*/g,"")),l.length>10&&(l=l.split(";")[0]);let c=l.length,u=l.split(" "),d="";if(c<6*u.length&&u.length<3){let e=100-6*Math.ceil(u.length/2-1);e<65&&(e=65),d='style="font-size:'+e+'%;"'}else if(u.length>10){let e=100-7*Math.ceil(u.length/2-1);e<65&&(e=65),d='style="font-size:'+e+'%;padding:0 8px;"'}else if(u.length>2){let e=100-6*Math.ceil(u.length/2-1);e<65&&(e=65),d='style="font-size:'+e+'%;"'}a({p_id:t+1,key:"<p "+d+">"+l+"</p>"})})}function c(e){var t,a,i;for(i=e.length-1;i>0;i--)t=Math.floor(Math.random()*(i+1)),a=e[i],e[i]=e[t],e[t]=a;return e}Promise.all(n).then(t=>{for(let e=0;e<T.default.numberOfPairs;e++)t[e].id=s,s++,r.push(t[e]);e("save_game_words",c(r)),e("set_game_state",!0),clearInterval(rt),window.dispatchEvent(new Event("start")),a("countdown")})}}});i["a"].use(E["a"]);var ct=lt;a("eb46");i["a"].config.productionTip=!1,new i["a"]({store:ct,router:Xe,...m})},"591e":function(e,t,a){"use strict";var i=a("39db"),n=a.n(i);n.a},"5c40":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"game-color"},[a("v-container",{staticClass:"game-container"},[a("child")],1)],1)},n=[],r={name:"GameLayout"},s=r,o=(a("5467"),a("2877")),l=Object(o["a"])(s,i,n,!1,null,null,null);l.options.__file="game.vue";t["default"]=l.exports},"5cd4":function(e,t,a){"use strict";var i=a("89e1"),n=a.n(i);n.a},"5dfc":function(e,t,a){"use strict";var i=a("30d6"),n=a.n(i);n.a},6837:function(e,t,a){},"6c5a":function(e,t){},7306:function(e,t,a){"use strict";var i=a("40c9"),n=a.n(i);n.a},"7b3d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("navbar"),a("v-container",[a("child")],1)],1)},n=[],r={name:"DefaultLayout"},s=r,o=(a("f70f"),a("2877")),l=Object(o["a"])(s,i,n,!1,null,null,null);l.options.__file="default.vue";t["default"]=l.exports},"81be":function(e,t,a){var i={"./default.vue":"7b3d","./game.vue":"5c40"};function n(e){var t=r(e);return a(t)}function r(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="81be"},"871d":function(e,t,a){},"89e1":function(e,t,a){},9091:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="9091"},9932:function(e,t,a){"use strict";var i=a("be6c"),n=a.n(i);n.a},9993:function(e,t,a){"use strict";var i=a("c352"),n=a.n(i);n.a},a4cf:function(e,t,a){},a8ae:function(e,t,a){},bc13:function(e,t,a){"use strict";var i=a("dc0c"),n=a("edfd"),r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="Home.vue",t["default"]=s.exports},be6c:function(e,t,a){},c352:function(e,t,a){},c632:function(e,t,a){"use strict";var i=a("a8ae"),n=a.n(i);n.a},d18d:function(e,t,a){},d922:function(e,t,a){"use strict";var i=a("6837"),n=a.n(i);n.a},dc0c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v("This will be something great in the near future. Stay cool")])])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},edfd:function(e,t,a){"use strict";var i=a("6c5a"),n=a.n(i);t["default"]=n.a},f0d6:function(e,t,a){e.exports=a.p+"img/game1.ce809a3d.png"},f70f:function(e,t,a){"use strict";var i=a("20d5"),n=a.n(i);n.a}});
//# sourceMappingURL=app.110b8f42.js.map