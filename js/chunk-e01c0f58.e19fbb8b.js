(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01c0f58"],{1822:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"works"}},[e("div",{staticClass:"container"},[e("hooper",{staticClass:"workSlide",attrs:{infiniteScroll:!0,centerMode:""}},[e("slide",{attrs:{id:"look"}},[e("div",{staticClass:"glass"}),e("h2",[t._v("LOOK360")]),e("p",[t._v("LOOK360 포털입니다.(등의 소개 및 설명)")])]),e("slide",{attrs:{id:"campus"}},[e("div",{staticClass:"glass"}),e("h2",[t._v("CAMPUSTOWN")]),e("p",[t._v("CAMPUSTOWN 사이트입니다.(등의 소개 및 설명)")])]),e("slide",{attrs:{id:"skate"}},[e("div",{staticClass:"glass"}),e("h2",[t._v("SK8SPOT")]),e("p",[t._v("SK8SPOT 사이트입니다.(등의 소개 및 설명)")])]),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),e("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],1)],1)])},o=[],r=e("2b0e");
/**
  * Hopper 0.3.4
  * (c) 2019
    * @license MIT
    */
function s(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),n.forEach((function(i){s(t,i,e[i])}))}return t}function h(t){return l(t)||c(t)||u()}function l(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t,i,e){return Math.max(Math.min(t,e),i)}function p(){return Date.now()}function f(t,i){this.create=function(){return window.setInterval(t,i)},this.stop=function(){this.timer&&(window.clearInterval(this.timer),this.timer=null)},this.start=function(){this.timer||(this.timer=this.create())},this.restart=function(t){i=t||i,this.stop(),this.start()},this.timer=this.create()}function g(t){return t=t.replace(/([A-Z]+)/g," $1"),t.charAt(0).toUpperCase()+t.slice(1)}function v(t,i){var e;return e=t<0?(t+i)%i:t%i,e!==e?0:e}function m(t,i){var e=i.children||i.componentOptions.children||i.text,n=i.componentOptions.Ctor;return t(n,i.data,e)}function S(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var i=Object(t),e=1;e<arguments.length;e++){var n=arguments[e];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(Object(n)),r=0,s=o.length;r<s;r++){var a=o[r],h=Object.getOwnPropertyDescriptor(n,a);void 0!==h&&h.enumerable&&(i[a]=n[a])}}}return i}var y=Object.assign||S;function w(t){return t<0?-1:t>0?1:0}var T=Math.sign||w;function $(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.$scopedSlots.default?t.$scopedSlots.default(i)||[]:t.$slots.default||[]}var b=new r["a"],x={name:"Hooper",provide:function(){return{$hooper:this}},props:{itemsToShow:{default:1,type:Number},itemsToSlide:{default:1,type:Number},initialSlide:{default:0,type:Number},infiniteScroll:{default:!1,type:Boolean},centerMode:{default:!1,type:Boolean},vertical:{default:!1,type:Boolean},rtl:{default:null,type:Boolean},autoPlay:{default:!1,type:Boolean},playSpeed:{default:2e3,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean},wheelControl:{default:!0,type:Boolean},keysControl:{default:!0,type:Boolean},shortDrag:{default:!0,type:Boolean},transition:{default:300,type:Number},hoverPause:{default:!0,type:Boolean},trimWhiteSpace:{default:!1,type:Boolean},settings:{default:function(){return{}},type:Object},group:{type:String,default:null}},data:function(){return{isDragging:!1,isSliding:!1,isTouch:!1,isHover:!1,isFocus:!1,initialized:!1,slideWidth:0,slideHeight:0,slidesCount:0,trimStart:0,trimEnd:1,currentSlide:null,timer:null,defaults:{},breakpoints:{},delta:{x:0,y:0},config:{}}},computed:{slideBounds:function(){var t=this.config,i=this.currentSlide,e=t.itemsToShow,n=t.centerMode?Math.ceil(i-e/2):i,o=t.centerMode?Math.floor(i+e/2):Math.floor(i+e-1);return{lower:n,upper:o}},trackTransform:function(){var t=this.config,i=t.infiniteScroll,e=t.vertical,n=t.rtl,o=t.centerMode,r=n?-1:1,s=e?this.slideHeight:this.slideWidth,a=e?this.containerHeight:this.containerWidth,h=e?this.delta.y:this.delta.x,l=i?s*this.slidesCount:0,c=o?(a-s)/2:0,u=h+r*(c-l-this.currentSlide*s);return e?"transform: translate(0, ".concat(u,"px);"):"transform: translate(".concat(u,"px, 0);")},trackTransition:function(){return this.initialized&&this.isSliding?"transition: ".concat(this.config.transition,"ms"):""}},watch:{group:function(t,i){t!==i&&(b.$off("slideGroup:".concat(i),this._groupSlideHandler),this.addGroupListeners())}},methods:{slideTo:function(t){var i=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.isSliding&&t!==this.currentSlide){this.$emit("beforeSlide",{currentSlide:this.currentSlide,slideTo:a});var n=this.config,o=n.infiniteScroll,r=n.transition,s=this.currentSlide,a=o?t:d(t,this.trimStart,this.slidesCount-this.trimEnd);this.group&&e&&b.$emit("slideGroup:".concat(this.group),t),this.currentSlide=a,this.isSliding=!0,window.setTimeout((function(){i.isSliding=!1,i.currentSlide=v(a,i.slidesCount)}),r),this.$emit("slide",{currentSlide:this.currentSlide,slideFrom:s})}},slideNext:function(){this.slideTo(this.currentSlide+this.config.itemsToSlide)},slidePrev:function(){this.slideTo(this.currentSlide-this.config.itemsToSlide)},initEvents:function(){null===this.defaults.rtl&&(this.defaults.rtl="rtl"===getComputedStyle(this.$el).direction),this.config.autoPlay&&this.initAutoPlay(),this.config.mouseDrag&&this.$refs.list.addEventListener("mousedown",this.onDragStart),this.config.touchDrag&&this.$refs.list.addEventListener("touchstart",this.onDragStart,{passive:!0}),this.config.keysControl&&this.$el.addEventListener("keydown",this.onKeypress),this.config.wheelControl&&(this.lastScrollTime=p(),this.$el.addEventListener("wheel",this.onWheel,{passive:!1})),window.addEventListener("resize",this.update)},initAutoPlay:function(){var t=this;this.timer=new f((function(){t.isSliding||t.isDragging||t.isHover&&t.config.hoverPause||t.isFocus||(t.currentSlide!==t.slidesCount-1||t.config.infiniteScroll?t.slideNext():t.slideTo(0))}),this.config.playSpeed)},initDefaults:function(){this.breakpoints=this.settings.breakpoints,this.defaults=y({},this.$props,this.settings),this.config=y({},this.defaults)},update:function(){this.breakpoints&&this.updateConfig(),this.updateWidth(),this.updateTrim(),this.$emit("updated",{containerWidth:this.containerWidth,containerHeight:this.containerHeight,slideWidth:this.slideWidth,slideHeight:this.slideHeight,settings:this.config})},updateTrim:function(){var t=this.config,i=t.trimWhiteSpace,e=t.itemsToShow,n=t.centerMode,o=t.infiniteScroll;if(!i||o)return this.trimStart=0,void(this.trimEnd=1);this.trimStart=n?Math.floor((e-1)/2):0,this.trimEnd=n?Math.ceil(e/2):e},updateWidth:function(){var t=this.$el.getBoundingClientRect();this.containerWidth=t.width,this.containerHeight=t.height,this.config.vertical?this.slideHeight=this.containerHeight/this.config.itemsToShow:this.slideWidth=this.containerWidth/this.config.itemsToShow},updateConfig:function(){var t,i=this,e=Object.keys(this.breakpoints).sort((function(t,i){return i-t}));e.some((function(e){if(t=window.matchMedia("(min-width: ".concat(e,"px)")).matches,t)return i.config=y({},i.config,i.defaults,i.breakpoints[e]),!0})),t||(this.config=y(this.config,this.defaults))},restartTimer:function(){this.timer&&this.timer.restart()},restart:function(){var t=this;this.$nextTick((function(){t.update()}))},onDragStart:function(t){this.isTouch="touchstart"===t.type,(this.isTouch||0===t.button)&&(this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.isDragging=!0,this.startPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.startPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.addEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd))},isInvalidDirection:function(t,i){return this.config.vertical?!!this.config.vertical&&Math.abs(i)<=Math.abs(t):Math.abs(t)<=Math.abs(i)},onDrag:function(t){if(!this.isSliding){this.endPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.endPosition.y=this.isTouch?t.touches[0].clientY:t.clientY;var i=this.endPosition.x-this.startPosition.x,e=this.endPosition.y-this.startPosition.y;this.isInvalidDirection(i,e)||(this.delta.y=e,this.delta.x=i,this.isTouch||t.preventDefault())}},onDragEnd:function(){var t=this.config.shortDrag?.5:.15;if(this.isDragging=!1,this.config.vertical){var i=Math.round(Math.abs(this.delta.y/this.slideHeight)+t);this.slideTo(this.currentSlide-T(this.delta.y)*i)}if(!this.config.vertical){var e=(this.config.rtl?-1:1)*T(this.delta.x),n=Math.round(Math.abs(this.delta.x/this.slideWidth)+t);this.slideTo(this.currentSlide-e*n)}this.delta.x=0,this.delta.y=0,document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),this.restartTimer()},onTransitionend:function(){this.isSliding=!1,this.$emit("afterSlide",{currentSlide:this.currentSlide})},onKeypress:function(t){var i=t.key;return i.startsWith("Arrow")&&t.preventDefault(),this.config.vertical?("ArrowUp"===i&&this.slidePrev(),void("ArrowDown"===i&&this.slideNext())):this.config.rtl?("ArrowRight"===i&&this.slidePrev(),void("ArrowLeft"===i&&this.slideNext())):("ArrowRight"===i&&this.slideNext(),void("ArrowLeft"===i&&this.slidePrev()))},onWheel:function(t){if(t.preventDefault(),!(p()-this.lastScrollTime<200)){this.lastScrollTime=p();var i=t.wheelDelta||-t.deltaY,e=T(i);-1===e&&this.slideNext(),1===e&&this.slidePrev()}},addGroupListeners:function(){var t=this;this.group&&(this._groupSlideHandler=function(i){t.slideTo(i,!1)},b.$on("slideGroup:".concat(this.group),this._groupSlideHandler))}},created:function(){this.initDefaults()},mounted:function(){var t=this;this.initEvents(),this.addGroupListeners(),this.$nextTick((function(){t.update(),t.slideTo(t.config.initialSlide||0),setTimeout((function(){t.$emit("loaded"),t.initialized=!0}),t.transition)}))},beforeDestroy:function(){window.removeEventListener("resize",this.update),this.group&&b.$off("slideGroup:".concat(this.group),this._groupSlideHandler),this.timer&&this.timer.stop()},render:function(t){var i=this,e=D.call(this,t);return t("section",{class:{hooper:!0,"is-vertical":this.config.vertical,"is-rtl":this.config.rtl},attrs:{tabindex:"0"},on:{focusin:function(){return i.isFocus=!0},focusout:function(){return i.isFocus=!1},mouseover:function(){return i.isHover=!0},mouseleave:function(){return i.isHover=!1}}},e)}};function O(t,i){for(var e=[],n=[],o=i.length,r=0;r<o;r++){var s=i[r],a=m(t,s),l=r-o;a.data.key="before_".concat(r),a.key=a.data.key,a.componentOptions.propsData.index=l,a.data.props={index:l,isClone:!0},e.push(a);var c=m(t,s);l=r+o,c.data.key="after_".concat(l),c.componentOptions.propsData.index=l,c.key=c.data.key,c.data.props={index:l,isClone:!0},n.push(c)}return[].concat(e,h(i),n)}function P(t){for(var i=$(this),e=i.length,n=0,o=[],r=0;r<e;r++){var s=i[r],h=s.componentOptions&&s.componentOptions.Ctor;h&&"HooperSlide"===h.options.name&&(s.componentOptions.propsData.index=n,s.data.key=n,s.key=n,s.data.props=a({},s.data.props||{},{isClone:!1,index:n++}),o.push(s))}return this.slidesCount=o.length,this.config.infiniteScroll&&(o=O(t,o)),t("ul",{class:{"hooper-track":!0,"is-dragging":this.isDragging},style:this.trackTransform+this.trackTransition,ref:"track",on:{transitionend:this.onTransitionend}},o)}function D(t){var i=P.call(this,t),e=this.$slots["hooper-addons"]||[],n=t("div",{class:"hooper-liveregion hooper-sr-only",attrs:{"aria-live":"polite","aria-atomic":"true"}},"Item ".concat(this.currentSlide+1," of ").concat(this.slidesCount)),o=[i].concat(h(e),[n]);return[t("div",{class:"hooper-list",ref:"list"},o)]}var C={name:"HooperSlide",inject:["$hooper"],props:{isClone:{type:Boolean,default:!1},index:{type:Number,required:!0}},computed:{style:function(){var t=this.$hooper||{},i=t.config,e=t.slideHeight,n=t.slideWidth;return i.vertical?"height: ".concat(e,"px"):"width: ".concat(n,"px")},isActive:function(){var t=this.$hooper.slideBounds,i=t.upper,e=t.lower;return this.index>=e&&this.index<=i},isPrev:function(){var t=this.$hooper.slideBounds.lower,i=this.$hooper.config.itemsToSlide;return this.index<t&&this.index>=t-i},isNext:function(){var t=this.$hooper.slideBounds.upper,i=this.$hooper.config.itemsToSlide;return this.index>t&&this.index<=t+i},isCurrent:function(){return this.index===this.$hooper.currentSlide}},render:function(t){var i={"hooper-slide":!0,"is-clone":this.isClone,"is-active":this.isActive,"is-prev":this.isPrev,"is-next":this.isNext,"is-current":this.isCurrent},e=$(this);return t("li",{class:i,style:this.style,attrs:{"aria-hidden":!this.isActive}},e)}},k={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},M={name:"HooperIcon",functional:!0,inheritAttrs:!0,props:{name:{type:String,required:!0,validator:function(t){return t in k}}},render:function(t,i){var e=i.props,n=k[e.name],o=[];return o.push(t("title",g(e.name))),o.push(t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})),o.push(t("path",{attrs:{d:n}})),t("svg",{attrs:{class:"icon icon-".concat(e.name),viewBox:"0 0 24 24",width:"24px",height:"24px"}},o)}};function L(t,i,e){return[t("span",i+1),t("span","/"),t("span",e)]}function H(t,i,e,n){return t("li",[t("button",{class:{"hooper-indicator":!0,"is-active":e},on:{click:n},attrs:{type:"button"}},[t("span",{class:"hooper-sr-only"},"item ".concat(i))])])}function N(t,i,e,n){for(var o=[],r=function(e){o.push(H(t,e,e===i,(function(){return n(e)})))},s=0;s<e;s++)r(s);return[t("ol",{class:"hooper-indicators"},o)]}var A={inject:["$hooper"],name:"HooperPagination",props:{mode:{default:"indicator",type:String}},computed:{currentSlide:function(){return v(this.$hooper.currentSlide,this.$hooper.slidesCount)},slides:function(){var t=this.$hooper.slides.map((function(t,i){return i}));return t.slice(this.$hooper.trimStart,this.$hooper.slidesCount-this.$hooper.trimEnd+1)}},render:function(t){var i=this,e=this.$hooper.slidesCount,n="indicator"===this.mode?N(t,this.currentSlide,e,(function(t){return i.$hooper.slideTo(t)})):L(t,this.currentSlide,e);return t("div",{class:{"hooper-pagination":!0,"is-vertical":this.$hooper.config.vertical}},n)}};function E(t,i,e){return e?t?"arrowUp":i?"arrowRight":"arrowLeft":t?"arrowDown":i?"arrowLeft":"arrowRight"}function W(t,i,e,n,o,r){var a,h=o.isVertical,l=o.isRTL,c=e&&e.length?e:[t(M,{props:{name:E(h,l,n)}})];return t("button",{class:(a={},s(a,"hooper-".concat(n?"prev":"next"),!0),s(a,"is-disabled",i),a),attrs:{type:"button"},on:{click:r}},c)}var j={inject:["$hooper"],name:"HooperNavigation",computed:{isPrevDisabled:function(){return!this.$hooper.config.infiniteScroll&&0===this.$hooper.currentSlide},isNextDisabled:function(){return!this.$hooper.config.infiniteScroll&&(this.$hooper.config.trimWhiteSpace?this.$hooper.currentSlide===this.$hooper.slidesCount-Math.min(this.$hooper.config.itemsToShow,this.$hooper.slidesCount):this.$hooper.currentSlide===this.$hooper.slidesCount-1)}},methods:{slideNext:function(){this.$hooper.slideNext(),this.$hooper.restartTimer()},slidePrev:function(){this.$hooper.slidePrev(),this.$hooper.restartTimer()}},render:function(t){var i=this,e={isRTL:this.$hooper.config.rtl,isVertical:this.$hooper.config.vertical},n=[W(t,this.isPrevDisabled,this.$slots["hooper-prev"],!0,e,(function(){return i.slidePrev()})),W(t,this.isNextDisabled,this.$slots["hooper-next"],!1,e,(function(){return i.slideNext()}))];return t("div",{class:{"hooper-navigation":!0,"is-vertical":this.$hooper.config.vertical,"is-rtl":this.$hooper.config.rtl}},n)}},B=(e("955f"),{components:{Hooper:x,Slide:C,HooperNavigation:j,HooperPagination:A},data:function(){return{title:"최고가 아닌 <span>유일</span>이</br > 되려고 합니다.",works:[{name:"LOOK360",desc:"LOOK360 포털입니다.(등의 소개 및 설명)"},{name:"CAMPUSTOWN",desc:"CAMPUSTOWN 사이트입니다.(등의 소개 및 설명)"},{name:"SK8SPOT",desc:"SK8SPOT 사이트입니다.(등의 소개 및 설명)"}]}}}),_=B,z=(e("469d"),e("2877")),K=Object(z["a"])(_,n,o,!1,null,null,null);i["default"]=K.exports},"31d8":function(t,i,e){},"469d":function(t,i,e){"use strict";e("31d8")},"955f":function(t,i,e){}}]);
//# sourceMappingURL=chunk-e01c0f58.e19fbb8b.js.map