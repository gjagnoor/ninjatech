/*! For license information please see component---src-pages-index-js-d674ff79295852b5505f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{BvKN:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,E=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case i:case s:case h:return e;default:switch(e=e&&e.$$typeof){case l:case p:case b:case m:case u:return e;default:return t}}case a:return t}}}function C(e){return w(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===i||e===s||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===S||e.$$typeof===E||e.$$typeof===g||e.$$typeof===v)},t.typeOf=w},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),c=n("Z3vd"),s=n("zLVn"),i=n("wx14"),u=n("JX7q"),l=n("dI71"),f=n("uTUB"),d=n("2mql"),p=n.n(d);function h(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var y=o.a.createContext();var m={initialChunks:{}};var b=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?b:t,r=e.render,a=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),d={};function b(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):"static"}function v(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(f.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return p()(o,a,{preload:!0}),a}var S,E=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:b(n)},h(!n.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(c.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(c.chunkName(n))),Object(u.a)(r)):(!1!==t.ssr&&(c.isReady&&c.isReady(n)||c.chunkName&&m.initialChunks[c.chunkName(n)])&&r.loadSync(),r)}Object(l.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=b(e);return Object(i.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return b(this.props)},o.getCache=function(){return d[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=v(c.requireSync(this.props),this.props,w);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:c.resolve(this.props),chunkName:c.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=v(t,e.props,{Loadable:w});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,Object(s.a)(t,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=c.requireAsync(n)).status="PENDING",this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:c.resolve(e.props),chunkName:c.chunkName(e.props),error:t?t.message:t}),r.status="REJECTED"}))),r},o.render=function(){var e=this.props,n=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(s.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,l=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(u)throw u;var d=o||t.fallback||null;return l?d:r({fallback:d,result:f,options:t,props:Object(i.a)({},a,{ref:n})})},n}(o.a.Component),g=(S=E,function(e){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(S,Object.assign({__chunkExtractor:t},e))}))}),w=o.a.forwardRef((function(e,t){return o.a.createElement(g,Object.assign({forwardedRef:t},e))}));return w.preload=function(e){c.requireAsync(e)},w.load=function(e){return c.requireAsync(e)},w}return{loadable:c,lazy:function(e,t){return c(e,Object(i.a)({},t,{suspense:!0}))}}}var S=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return o.a.createElement(t,n)}}),E=S.loadable,g=S.lazy,w=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),C=w.loadable,k=w.lazy;var _=E;_.lib=C,g.lib=k;var $=_((function(){return n.e(22).then(n.bind(null,"cOfe"))}));t.default=function(){return Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){console.log("scrollin"),document.body.style.setProperty("--scroll__",window.pageYOffset/(document.body.offsetHeight-window.innerHeight))}),!1)}),[]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"landingimg",style:{display:"flex",justifyContent:"space-around"}},o.a.createElement("center",null,o.a.createElement(a.Link,{to:"/home",id:"enterlink"},o.a.createElement(c.a,{variant:"contained",style:{zIndex:1,textDecoration:"none",boxShadow:"none",backgroundColor:"#3bba9c",color:"#2e3047"},id:"enterbutton"},"Enter")),o.a.createElement("center",null,o.a.createElement("p",{id:"orscroll"},"or scroll")))),o.a.createElement($,null))}},uTUB:function(e,t,n){"use strict";e.exports=n("BvKN")}}]);
//# sourceMappingURL=component---src-pages-index-js-d674ff79295852b5505f.js.map