(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"22ne":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.default=i},"9xed":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=m(o),c=m(n("JNCH")),u=m(n("Hsck")),s=m(n("o6Jd")),l=n("DfQ9"),d=m(n("zeTQ")),f=m(n("22ne")),p=m(n("Uelz")),v=m(n("bo4g")),h=n("h//d");function m(e){return e&&e.__esModule?e:{default:e}}var y=function(e){return void 0!==e?{style:void 0!==e.style?e.style:{},className:void 0!==e.className?e.className:""}:{style:{},className:""}},b=function(e){var t=void 0!==e.animation?e.animation:"fade",n=void 0!==e.timeout?e.timeout:"fade"===t?500:200;return{className:void 0!==e.className?e.className:"",children:e.children?e.children:[],index:void 0!==e.index?e.index:0,strictIndexing:void 0===e.strictIndexing||e.strictIndexing,autoPlay:void 0===e.autoPlay||e.autoPlay,stopAutoPlayOnHover:void 0===e.stopAutoPlayOnHover||e.stopAutoPlayOnHover,interval:void 0!==e.interval?e.interval:4e3,animation:t,timeout:n,swipe:void 0===e.swipe||e.swipe,navButtonsAlwaysInvisible:void 0!==e.navButtonsAlwaysInvisible&&e.navButtonsAlwaysInvisible,navButtonsAlwaysVisible:void 0!==e.navButtonsAlwaysVisible&&e.navButtonsAlwaysVisible,cycleNavigation:void 0===e.cycleNavigation||e.cycleNavigation,fullHeightHover:void 0===e.fullHeightHover||e.fullHeightHover,navButtonsWrapperProps:y(e.navButtonsWrapperProps),navButtonsProps:y(e.navButtonsProps),NavButton:e.NavButton,NextIcon:void 0!==e.NextIcon?e.NextIcon:i.default.createElement(v.default,null),PrevIcon:void 0!==e.PrevIcon?e.PrevIcon:i.default.createElement(p.default,null),indicators:void 0===e.indicators||e.indicators,indicatorContainerProps:y(e.indicatorContainerProps),indicatorIconButtonProps:y(e.indicatorIconButtonProps),activeIndicatorIconButtonProps:y(e.activeIndicatorIconButtonProps),IndicatorIcon:e.IndicatorIcon,onChange:void 0!==e.onChange?e.onChange:function(){},changeOnFirstRender:void 0!==e.changeOnFirstRender&&e.changeOnFirstRender,next:void 0!==e.next?e.next:function(){},prev:void 0!==e.prev?e.prev:function(){}}},g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return(0,d.default)(n),n.state={active:0,prevActive:0,displayed:0},n.timer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=b(this.props),t=e.index,n=e.changeOnFirstRender;this.setActive(t,void 0,n),this.start()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentDidUpdate",value:function(e,t){e=b(e);var n=b(this.props),r=n.autoPlay,a=n.interval,o=n.children,i=n.index;r===e.autoPlay&&a===e.interval||this.reset(),o.length!==e.children.length&&this.setActive(i),e.index!==i&&this.setActive(i)}},{key:"stop",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"start",value:function(){var e=b(this.props),t=e.autoPlay,n=e.interval;t&&(this.timer=setInterval(this.next,n))}},{key:"reset",value:function(){var e=b(this.props).autoPlay;this.stop(),e&&this.start()}},{key:"setActive",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=b(this.props),o=a.onChange,i=a.timeout,c=a.children,u=a.strictIndexing;Array.isArray(c)?(u&&e>c.length-1&&(e=c.length-1),u&&e<0&&(e=0)):e=0;var s=this.state.active;this.setState({active:e,prevActive:s,displayed:s},this.reset),setTimeout((function(){t.setState({displayed:e},(function(){r&&(n(e,s),o(e,s))}))}),i.exit?i.exit:i)}},{key:"next",value:function(e){var t=b(this.props),n=t.children,r=t.next,a=t.cycleNavigation,o=this.state.active+1>n.length-1?a?0:this.state.active:this.state.active+1;this.setActive(o,r),e&&e.stopPropagation()}},{key:"prev",value:function(e){var t=b(this.props),n=t.children,r=t.prev,a=t.cycleNavigation,o=this.state.active-1<0?a?n.length-1:this.state.active:this.state.active-1;this.setActive(o,r),e&&e.stopPropagation()}},{key:"render",value:function(){var e=this,t=b(this.props),n=t.children,r=t.className,a=t.stopAutoPlayOnHover,o=t.animation,c=t.timeout,u=t.swipe,l=t.navButtonsAlwaysInvisible,d=t.navButtonsAlwaysVisible,f=t.cycleNavigation,p=t.fullHeightHover,v=t.navButtonsProps,h=t.navButtonsWrapperProps,m=t.NavButton,y=t.NextIcon,g=t.PrevIcon,E=t.indicators,O=t.indicatorContainerProps,P=t.indicatorIconButtonProps,N=t.activeIndicatorIconButtonProps,I=t.IndicatorIcon,S=this.props.classes,j=(d?S.buttonVisible:S.buttonHidden)+"}",k=S.button+" "+j+" "+(p?S.fullHeightHoverButton:"")+" "+v.className,T=S.buttonWrapper+" "+(p?S.fullHeightHoverWrapper:"")+" "+h.className,M=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!f||!(t&&e.state.active+1>n.length-1)&&!(!t&&e.state.active-1<0)};return i.default.createElement("div",{className:S.root+" "+(r||""),onMouseOver:function(){a&&e.stop()},onMouseOut:function(){a&&e.reset()}},Array.isArray(n)?n.map((function(t,r){return i.default.createElement(x,{key:"carousel-item"+r,display:r===e.state.displayed,active:r===e.state.active,isNext:(0!==e.state.active||e.state.prevActive!==n.length-1)&&(e.state.active===n.length-1&&0===e.state.prevActive||e.state.active>e.state.prevActive),child:t,animation:o,timeout:c,swipe:u,next:e.next,prev:e.prev})})):i.default.createElement(x,{key:"carousel-item0",display:!0,active:!0,child:n,animation:o,timeout:c}),!l&&M(!0)&&i.default.createElement("div",{className:T+" "+S.next,style:h.style},void 0!==m?m({onClick:this.next,className:k,style:v.style,next:!0,prev:!1}):i.default.createElement(s.default,{className:""+k,onClick:this.next,"aria-label":"Next",style:v.style},y)),!l&&M(!1)&&i.default.createElement("div",{className:T+" "+S.prev,style:h.style},void 0!==m?m({onClick:this.prev,className:k,style:v.style,next:!1,prev:!0}):i.default.createElement(s.default,{className:""+k,onClick:this.prev,"aria-label":"Previous",style:v.style},g)),E?i.default.createElement(w,{classes:S,length:n.length,active:this.state.active,press:this.setActive,indicatorContainerProps:O,indicatorIconButtonProps:P,activeIndicatorIconButtonProps:N,IndicatorIcon:I}):null)}}]),t}(o.Component);function x(e){var t=(0,h.useSwipeable)({onSwipedLeft:function(){return e.next()},onSwipedRight:function(){return e.prev()}});return t=e.swipe?t:{},e.display?i.default.createElement("div",r({},t,{className:"CarouselItem"}),"slide"===e.animation?i.default.createElement(u.default,{direction:e.active?e.isNext?"left":"right":e.isNext?"right":"left",in:e.active,timeout:e.timeout},i.default.createElement("div",null,e.child)):i.default.createElement(c.default,{in:e.active,timeout:e.timeout},i.default.createElement("div",null,e.child))):null}function w(e){for(var t=e.classes,n=void 0!==e.IndicatorIcon?e.IndicatorIcon:i.default.createElement(f.default,{size:"small",className:t.indicatorIcon}),r=[],a=function(a){var o=a===e.active?t.indicator+" "+e.indicatorIconButtonProps.className+" "+t.active+" "+e.activeIndicatorIconButtonProps.className:t.indicator+" "+e.indicatorIconButtonProps.className,c=a===e.active?Object.assign({},e.indicatorIconButtonProps.style,e.activeIndicatorIconButtonProps.style):e.indicatorIconButtonProps.style,u=i.default.createElement(s.default,{key:a,className:o,style:c,onClick:function(){e.press(a)},size:"small"},n);r.push(u)},o=0;o<e.length;o++)a(o);var c=void 0!==e.indicatorContainerProps?e.indicatorContainerProps.style:void 0,u=void 0!==e.indicatorContainerProps?e.indicatorContainerProps.className:"";return i.default.createElement("div",{className:t.indicators+" "+u,style:c},r)}t.default=(0,l.withStyles)({root:{position:"relative",overflow:"hidden"},indicators:{width:"100%",marginTop:"10px",textAlign:"center"},indicator:{cursor:"pointer",transition:"200ms",padding:0,color:"#afafaf","&:hover":{color:"#1f1f1f"},"&:active":{color:"#1f1f1f"}},indicatorIcon:{fontSize:"15px"},active:{color:"#494949"},buttonWrapper:{position:"absolute",height:"100px",backgroundColor:"transparent",top:"calc(50% - 70px)","&:hover":{"& $button":{backgroundColor:"black",filter:"brightness(120%)",opacity:"0.4"}}},fullHeightHoverWrapper:{height:"100%",top:"0"},buttonVisible:{opacity:"1"},buttonHidden:{opacity:"0"},button:{margin:"0 10px",position:"relative",backgroundColor:"#494949",top:"calc(50% - 20px) !important",color:"white",fontSize:"30px",transition:"200ms",cursor:"pointer","&:hover":{opacity:"0.6 !important"}},next:{right:0},prev:{left:0}})(g)},DfQ9:function(e,t,n){"use strict";n.r(t),n.d(t,"hexToRgb",(function(){return r.g})),n.d(t,"rgbToHex",(function(){return r.k})),n.d(t,"hslToRgb",(function(){return r.h})),n.d(t,"decomposeColor",(function(){return r.b})),n.d(t,"recomposeColor",(function(){return r.j})),n.d(t,"getContrastRatio",(function(){return r.e})),n.d(t,"getLuminance",(function(){return r.f})),n.d(t,"emphasize",(function(){return r.c})),n.d(t,"fade",(function(){return r.d})),n.d(t,"darken",(function(){return r.a})),n.d(t,"lighten",(function(){return r.i})),n.d(t,"createMuiTheme",(function(){return a.a})),n.d(t,"unstable_createMuiStrictModeTheme",(function(){return i})),n.d(t,"createStyles",(function(){return c})),n.d(t,"makeStyles",(function(){return u.a})),n.d(t,"responsiveFontSizes",(function(){return b})),n.d(t,"styled",(function(){return j})),n.d(t,"easing",(function(){return k.c})),n.d(t,"duration",(function(){return k.b})),n.d(t,"useTheme",(function(){return T.a})),n.d(t,"withStyles",(function(){return M.a})),n.d(t,"withTheme",(function(){return _})),n.d(t,"createGenerateClassName",(function(){return B.a})),n.d(t,"jssPreset",(function(){return R.a})),n.d(t,"ServerStyleSheets",(function(){return F})),n.d(t,"StylesProvider",(function(){return D.b})),n.d(t,"MuiThemeProvider",(function(){return L})),n.d(t,"ThemeProvider",(function(){return L}));var r=n("ye/S"),a=n("viY9"),o=n("2+6g");function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return a.a.apply(void 0,[Object(o.a)({unstable_strictMode:!0},e)].concat(n))}function c(e){return e}var u=n("R/WZ"),s=n("wx14"),l=n("TrhM"),d=n("rePB");function f(e){return String(parseFloat(e)).length===String(e).length}function p(e){return parseFloat(e)}function v(e){return function(t,n){var r=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return t;var a=p(t);if("px"!==r)if("em"===r)a=p(t)*p(e);else if("rem"===r)return a=p(t)*p(e),t;var o=a;if("px"!==n)if("em"===n)o=a/p(e);else{if("rem"!==n)return t;o=a/p(e)}return parseFloat(o.toFixed(5))+n}}function h(e){var t=e.size,n=e.grid,r=t-t%n,a=r+n;return t-r<a-t?r:a}function m(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function y(e){var t=e.cssProperty,n=e.min,r=e.max,a=e.unit,o=void 0===a?"rem":a,i=e.breakpoints,c=void 0===i?[600,960,1280]:i,u=e.transform,s=void 0===u?null:u,l=Object(d.a)({},t,"".concat(n).concat(o)),f=(r-n)/c[c.length-1];return c.forEach((function(e){var r=n+f*e;null!==s&&(r=s(r)),l["@media (min-width:".concat(e,"px)")]=Object(d.a)({},t,"".concat(Math.round(1e4*r)/1e4).concat(o))})),l}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,r=void 0===n?["sm","md","lg"]:n,a=t.disableAlign,o=void 0!==a&&a,i=t.factor,c=void 0===i?2:i,u=t.variants,d=void 0===u?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:u,p=Object(s.a)({},e);p.typography=Object(s.a)({},p.typography);var b=p.typography,g=v(b.htmlFontSize),x=r.map((function(e){return p.breakpoints.values[e]}));return d.forEach((function(e){var t=b[e],n=parseFloat(g(t.fontSize,"rem"));if(!(n<=1)){var r=n,a=1+(r-1)/c,i=t.lineHeight;if(!f(i)&&!o)throw new Error(Object(l.a)(6));f(i)||(i=parseFloat(g(i,"rem"))/parseFloat(n));var u=null;o||(u=function(e){return h({size:e,grid:m({pixels:4,lineHeight:i,htmlFontSize:b.htmlFontSize})})}),b[e]=Object(s.a)({},t,y({cssProperty:"fontSize",min:a,max:r,unit:"rem",breakpoints:x,transform:u}))}})),p}var g=n("Ff2n"),x=n("q1tI"),w=n.n(x),E=n("iuhU"),O=n("2mql"),P=n.n(O),N=n("RD7I");function I(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}var S=n("cNwE"),j=function(e){var t=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.name,a=Object(g.a)(n,["name"]);var o,i=r,c="function"==typeof t?function(e){return{root:function(n){return t(Object(s.a)({theme:e},n))}}}:{root:t},u=Object(N.a)(c,Object(s.a)({Component:e,name:r||e.displayName,classNamePrefix:i},a));t.filterProps&&(o=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=w.a.forwardRef((function(t,n){var r=t.children,a=t.className,i=t.clone,c=t.component,l=Object(g.a)(t,["children","className","clone","component"]),d=u(t),f=Object(E.a)(d.root,a),p=l;if(o&&(p=I(p,o)),i)return w.a.cloneElement(r,Object(s.a)({className:Object(E.a)(r.props.className,f)},p));if("function"==typeof r)return r(Object(s.a)({className:f},p));var v=c||e;return w.a.createElement(v,Object(s.a)({ref:n,className:f},p),r)}));return P()(l,e),l}}(e);return function(e,n){return t(e,Object(s.a)({defaultTheme:S.a},n))}},k=n("wpWl"),T=n("tr08"),M=n("H2TA"),A=n("aXM8");function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=function(e){var n=w.a.forwardRef((function(n,r){var a=n.innerRef,o=Object(g.a)(n,["innerRef"]),i=Object(A.a)()||t;return w.a.createElement(e,Object(s.a)({theme:i,ref:a||r},o))}));return P()(n,e),n};return n}C();var _=C({defaultTheme:S.a}),B=n("PRV4"),R=n("w0j3"),H=n("1OyB"),U=n("vuIU"),z=n("/ceM"),D=n("o8Rm"),F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(H.a)(this,e),this.options=t}return Object(U.a)(e,[{key:"collect",value:function(e){var t=new Map;this.sheetsRegistry=new z.b;var n=Object(B.a)();return w.a.createElement(D.b,Object(s.a)({sheetsManager:t,serverGenerateClassName:n,sheetsRegistry:this.sheetsRegistry},this.options),e)}},{key:"toString",value:function(){return this.sheetsRegistry?this.sheetsRegistry.toString():""}},{key:"getStyleElement",value:function(e){return w.a.createElement("style",Object(s.a)({id:"jss-server-side",key:"jss-server-side",dangerouslySetInnerHTML:{__html:this.toString()}},e))}}]),e}(),W=n("OKji"),J=n("hfi/");var L=function(e){var t=e.children,n=e.theme,r=Object(A.a)(),a=w.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"==typeof t?t(e):Object(s.a)({},e,t)}(r,n);return null!=e&&(e[J.a]=null!==r),e}),[n,r]);return w.a.createElement(W.a.Provider,{value:a},t)}},FB0a:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),o=n.n(a),i=n("6u8J"),c=n("aqT/"),u=n.n(c),s=n("Z3vd");t.a=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return o.a.createElement(u.a,{partialVisibility:!0,onChange:function(e){n(e)}},o.a.createElement("div",{id:"wallpaper"},o.a.createElement(i.a,{in:t,timeout:{enter:3e3}},o.a.createElement("p",{id:"wallpaperp"},"Snapdragon 821|128 GB ROM, 14.48 cm (5.7 inch) Display| 23MP Rear Camera| 8MP Front Camera| 3300 mAh Polymer Battery",o.a.createElement("span",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null," ",o.a.createElement(r.Link,{to:"/products#products"},o.a.createElement(s.a,{variant:"contained"},"Learn More"))))))))}},Hsck:function(e,t,n){"use strict";n.r(t);var r=n("6u8J");n.d(t,"default",(function(){return r.a}))},J4zp:function(e,t,n){var r=n("wTVA"),a=n("m0LI"),o=n("ZhPi"),i=n("wkBT");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},JNCH:function(e,t,n){"use strict";n.r(t);var r=n("kKU3");n.d(t,"default",(function(){return r.a}))},Jk59:function(e,t,n){e.exports=n.p+"static/home-background-bright-fee776b8220460edacb2a52187d14d2c.png"},Joqw:function(e,t,n){e.exports=n.p+"static/phonel-a5395290d8f2b00519f5da2323d8374c.png"},PU0c:function(e,t,n){"use strict";n("Wbzz");var r=n("q1tI"),a=n.n(r),o=(n("Jk59"),n("Ji2X")),i=(n("aD5C"),n("Joqw"),n("sCJN"),n("RNts"),n("aqT/")),c=n.n(i),u=n("W6dB"),s=n.n(u),l=n("reCY"),d=(n("lcmO"),n("FB0a"));t.a=function(){var e=Object(r.useState)(!1),t=(e[0],e[1]);return a.a.createElement(c.a,{partialVisibility:!0,onChange:function(e){t(e)}},a.a.createElement("div",null,a.a.createElement(o.a,{maxWidth:"xl",style:{margin:0,padding:0}},a.a.createElement(s.a,null,a.a.createElement("center",null,a.a.createElement("div",{className:"slide"},a.a.createElement(l.a,null))),a.a.createElement("center",null,a.a.createElement("div",{className:"slide"},a.a.createElement(d.a,null)))))))}},RNts:function(e,t,n){e.exports=n.p+"static/phone-middle-def6f7ff1be7cf7bb47221e253160961.png"},Uelz:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.default=i},W6dB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("9xed"),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},aD5C:function(e,t,n){e.exports=n.p+"static/phone-f09f3bb17a4b605cd9c7f0654056f221.gif"},bo4g:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=i},"h//d":function(e,t,n){"use strict";n.r(t),n.d(t,"DOWN",(function(){return d})),n.d(t,"LEFT",(function(){return u})),n.d(t,"RIGHT",(function(){return s})),n.d(t,"Swipeable",(function(){return m})),n.d(t,"UP",(function(){return l})),n.d(t,"useSwipeable",(function(){return h}));var r=n("q1tI"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},c={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},u="Left",s="Right",l="Up",d="Down";function f(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function p(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",r),document.addEventListener("mouseup",p));var a=t.touches?t.touches[0]:t,i=f([a.clientX,a.clientY],n.rotationAngle);return o({},e,c,{eventData:{initial:[].concat(i),first:!0},xy:i,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,a=f([r.clientX,r.clientY],n.rotationAngle),i=a[0],c=a[1],p=e.xy[0]-i,v=e.xy[1]-c,h=Math.abs(p),m=Math.abs(v),y=(t.timeStamp||0)-e.start,b=Math.sqrt(h*h+m*m)/(y||1);if(h<n.delta&&m<n.delta&&!e.swiping)return e;var g=function(e,t,n,r){return e>t?n>0?u:s:r>0?l:d}(h,m,p,v),x=o({},e.eventData,{event:t,absX:h,absY:m,deltaX:p,deltaY:v,velocity:b,dir:g});n.onSwiping&&n.onSwiping(x);var w=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+g])&&(w=!0),w&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),o({},e,{eventData:o({},x,{first:!1}),swiping:!0})}))},a=function(t){e((function(e,n){var r;return e.swiping&&(r=o({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),o({},e,c,{eventData:r})}))},i=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",p)},p=function(e){i(),a(e)},v=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",r],["touchend",a]];return t.forEach((function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)})),function(){return t.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}},h={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=v(t)),o({},e,{el:t},r)}))}};return t.trackMouse&&(h.onMouseDown=n),[h,v]}function v(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),o({},e,r)}function h(e){var t=e.trackMouse,n=a.a.useRef(o({},c,{type:"hook"})),r=a.a.useRef();r.current=o({},i,e);var u=a.a.useMemo((function(){return p((function(e){return n.current=e(n.current,r.current)}),{trackMouse:t})}),[t]),s=u[0],l=u[1];return n.current=v(n.current,r.current,l),s}var m=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=o({},c,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,i=void 0===r?"div":r,c=e.innerRef,u=e.children,s=e.trackMouse,l=p(this._set,{trackMouse:s}),d=l[0],f=l[1];this.transientState=v(this.transientState,this.props,f);var h=c?function(e){return c(e),d.ref(e)}:d.ref;return a.a.createElement(i,o({},d,{className:t,style:n,ref:h}),u)},r}(a.a.PureComponent);m.defaultProps=i},lcmO:function(e,t,n){e.exports=n.p+"static/pageswallpaper-eee1b7b44a57a0ba9ff00fc0fecf801b.png"},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},o6Jd:function(e,t,n){"use strict";n.r(t);var r=n("PsDL");n.d(t,"default",(function(){return r.a}))},reCY:function(e,t,n){"use strict";n("Wbzz");var r=n("q1tI"),a=n.n(r),o=(n("Jk59"),n("6u8J")),i=(n("aD5C"),n("Joqw")),c=n.n(i),u=n("sCJN"),s=n.n(u),l=n("RNts"),d=n.n(l),f=n("aqT/"),p=n.n(f);t.a=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{partialVisibility:!0,onChange:function(e){n(e)}},a.a.createElement("div",{id:"home"},a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},id:"home_"},a.a.createElement(o.a,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,timeout:2e3},a.a.createElement("img",{src:c.a,className:"homephone"})),a.a.createElement(o.a,{direction:"down",in:t,mountOnEnter:!0,unmountOnExit:!0,timeout:1e3},a.a.createElement("img",{src:d.a,className:"homephonemid"})),a.a.createElement(o.a,{direction:"left",in:t,mountOnEnter:!0,unmountOnExit:!0,timeout:2e3},a.a.createElement("img",{src:s.a,className:"homephone"}))),a.a.createElement("h4",{id:"heading_"},"Augmented Reality - The Ultimate Technology ")))))}},sCJN:function(e,t,n){e.exports=n.p+"static/phoner-bd2cf32dd98def2ba7be9ceb1088ad57.png"},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},zeTQ:function(e,t,n){"use strict";var r=n("J4zp");function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e,t){t=Object.assign({},t);var n,o=function(e){var n=function(t){return"string"==typeof t?e===t:t.test(e)};return t.include?t.include.some(n):!t.exclude||!t.exclude.some(n)},i=a(function(e){var t=new Set;do{var n,r=a(Reflect.ownKeys(e));try{for(r.s();!(n=r.n()).done;){var o=n.value;t.add([e,o])}}catch(i){r.e(i)}finally{r.f()}}while((e=Reflect.getPrototypeOf(e))&&e!==Object.prototype);return t}(e.constructor.prototype));try{for(i.s();!(n=i.n()).done;){var c=r(n.value,2),u=c[0],s=c[1];if("constructor"!==s&&o(s)){var l=Reflect.getOwnPropertyDescriptor(u,s);l&&"function"==typeof l.value&&(e[s]=e[s].bind(e))}}}catch(d){i.e(d)}finally{i.f()}return e};var i=["componentWillMount","UNSAFE_componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate"];e.exports.react=function(t,n){return(n=Object.assign({},n)).exclude=(n.exclude||[]).concat(i),e.exports(t,n)}}}]);
//# sourceMappingURL=74f2eeab674a0726fc5bd2440c709b7b7120de45-4e5c079c965ace8eb870.js.map