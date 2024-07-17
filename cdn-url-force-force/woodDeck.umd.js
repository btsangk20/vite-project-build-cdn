(function(C,L){typeof exports=="object"&&typeof module<"u"?L(require("react")):typeof define=="function"&&define.amd?define(["react"],L):(C=typeof globalThis<"u"?globalThis:C||self,L(C.React))})(this,function(C){"use strict";function L(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var fe={exports:{}},c=fe.exports={},E,_;function Z(){throw new Error("setTimeout has not been defined")}function ee(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=Z}catch{E=Z}try{typeof clearTimeout=="function"?_=clearTimeout:_=ee}catch{_=ee}})();function de(a){if(E===setTimeout)return setTimeout(a,0);if((E===Z||!E)&&setTimeout)return E=setTimeout,setTimeout(a,0);try{return E(a,0)}catch{try{return E.call(null,a,0)}catch{return E.call(this,a,0)}}}function Ne(a){if(_===clearTimeout)return clearTimeout(a);if((_===ee||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(a);try{return _(a)}catch{try{return _.call(null,a)}catch{return _.call(this,a)}}}var T=[],D=!1,S,q=-1;function Be(){!D||!S||(D=!1,S.length?T=S.concat(T):q=-1,T.length&&ve())}function ve(){if(!D){var a=de(Be);D=!0;for(var l=T.length;l;){for(S=T,T=[];++q<l;)S&&S[q].run();q=-1,l=T.length}S=null,D=!1,Ne(a)}}c.nextTick=function(a){var l=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)l[y-1]=arguments[y];T.push(new pe(a,l)),T.length===1&&!D&&de(ve)};function pe(a,l){this.fun=a,this.array=l}pe.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function w(){}c.on=w,c.addListener=w,c.once=w,c.off=w,c.removeListener=w,c.removeAllListeners=w,c.emit=w,c.prependListener=w,c.prependOnceListener=w,c.listeners=function(a){return[]},c.binding=function(a){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(a){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};var qe=fe.exports;const he=L(qe),Je=(a,l)=>a+l,Ke=(a,l)=>a+l;var re={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function Ge(){if(ge)return Y;ge=1;var a=C,l=Symbol.for("react.element"),y=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,J=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function M(P,p,F){var m,O={},j=null,G=null;F!==void 0&&(j=""+F),p.key!==void 0&&(j=""+p.key),p.ref!==void 0&&(G=p.ref);for(m in p)A.call(p,m)&&!K.hasOwnProperty(m)&&(O[m]=p[m]);if(P&&P.defaultProps)for(m in p=P.defaultProps,p)O[m]===void 0&&(O[m]=p[m]);return{$$typeof:l,type:P,key:j,ref:G,props:O,_owner:J.current}}return Y.Fragment=y,Y.jsx=M,Y.jsxs=M,Y}var V={},me;function ze(){return me||(me=1,he.env.NODE_ENV!=="production"&&function(){var a=C,l=Symbol.for("react.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),P=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),ye=Symbol.iterator,Qe="@@iterator";function Ze(e){if(e===null||typeof e!="object")return null;var r=ye&&e[ye]||e[Qe];return typeof r=="function"?r:null}var I=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];er("error",e,t)}}function er(e,r,t){{var n=I.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var s=t.map(function(i){return String(i)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var rr=!1,tr=!1,nr=!1,ar=!1,or=!1,be;be=Symbol.for("react.module.reference");function ir(e){return!!(typeof e=="string"||typeof e=="function"||e===A||e===K||or||e===J||e===F||e===m||ar||e===G||rr||tr||nr||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===O||e.$$typeof===M||e.$$typeof===P||e.$$typeof===p||e.$$typeof===be||e.getModuleId!==void 0))}function ur(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function Ee(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Portal";case K:return"Profiler";case J:return"StrictMode";case F:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case P:var r=e;return Ee(r)+".Consumer";case M:var t=e;return Ee(t._context)+".Provider";case p:return ur(e,e.render,"ForwardRef");case O:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case j:{var u=e,s=u._payload,i=u._init;try{return R(i(s))}catch{return null}}}return null}var x=Object.assign,U=0,_e,Re,Te,we,Oe,Ce,Se;function Pe(){}Pe.__reactDisabledLog=!0;function sr(){{if(U===0){_e=console.log,Re=console.info,Te=console.warn,we=console.error,Oe=console.group,Ce=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function lr(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:_e}),info:x({},e,{value:Re}),warn:x({},e,{value:Te}),error:x({},e,{value:we}),group:x({},e,{value:Oe}),groupCollapsed:x({},e,{value:Ce}),groupEnd:x({},e,{value:Se})})}U<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var te=I.ReactCurrentDispatcher,ne;function z(e,r,t){{if(ne===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||""}return`
`+ne+e}}var ae=!1,X;{var cr=typeof WeakMap=="function"?WeakMap:Map;X=new cr}function je(e,r){if(!e||ae)return"";{var t=X.get(e);if(t!==void 0)return t}var n;ae=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=te.current,te.current=null,sr();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(g){n=g}Reflect.construct(e,[],i)}else{try{i.call()}catch(g){n=g}e.call(i.prototype)}}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),h=n.stack.split(`
`),f=o.length-1,d=h.length-1;f>=1&&d>=0&&o[f]!==h[d];)d--;for(;f>=1&&d>=0;f--,d--)if(o[f]!==h[d]){if(f!==1||d!==1)do if(f--,d--,d<0||o[f]!==h[d]){var b=`
`+o[f].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&X.set(e,b),b}while(f>=1&&d>=0);break}}}finally{ae=!1,te.current=s,lr(),Error.prepareStackTrace=u}var $=e?e.displayName||e.name:"",k=$?z($):"";return typeof e=="function"&&X.set(e,k),k}function fr(e,r,t){return je(e,!1)}function dr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return je(e,dr(e));if(typeof e=="string")return z(e);switch(e){case F:return z("Suspense");case m:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return fr(e.render);case O:return H(e.type,r,t);case j:{var n=e,u=n._payload,s=n._init;try{return H(s(u),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,xe={},ke=I.ReactDebugCurrentFrame;function Q(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}function vr(e,r,t,n,u){{var s=Function.call.bind(N);for(var i in e)if(s(e,i)){var o=void 0;try{if(typeof e[i]!="function"){var h=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}o=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){o=f}o&&!(o instanceof Error)&&(Q(u),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof o),Q(null)),o instanceof Error&&!(o.message in xe)&&(xe[o.message]=!0,Q(u),v("Failed %s type: %s",t,o.message),Q(null))}}}var pr=Array.isArray;function oe(e){return pr(e)}function hr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function gr(e){try{return De(e),!1}catch{return!0}}function De(e){return""+e}function Ae(e){if(gr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",hr(e)),De(e)}var B=I.ReactCurrentOwner,mr={key:!0,ref:!0,__self:!0,__source:!0},Fe,Ie,ie;ie={};function yr(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function br(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Er(e,r){if(typeof e.ref=="string"&&B.current&&r&&B.current.stateNode!==r){var t=R(B.current.type);ie[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(B.current.type),e.ref),ie[t]=!0)}}function _r(e,r){{var t=function(){Fe||(Fe=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Rr(e,r){{var t=function(){Ie||(Ie=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Tr=function(e,r,t,n,u,s,i){var o={$$typeof:l,type:e,key:r,ref:t,props:i,_owner:s};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function wr(e,r,t,n,u){{var s,i={},o=null,h=null;t!==void 0&&(Ae(t),o=""+t),br(r)&&(Ae(r.key),o=""+r.key),yr(r)&&(h=r.ref,Er(r,u));for(s in r)N.call(r,s)&&!mr.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps){var f=e.defaultProps;for(s in f)i[s]===void 0&&(i[s]=f[s])}if(o||h){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&_r(i,d),h&&Rr(i,d)}return Tr(e,o,h,u,n,B.current,i)}}var ue=I.ReactCurrentOwner,We=I.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);We.setExtraStackFrame(t)}else We.setExtraStackFrame(null)}var se;se=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function $e(){{if(ue.current){var e=R(ue.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Or(e){return""}var Le={};function Cr(e){{var r=$e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ye(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Cr(r);if(Le[t])return;Le[t]=!0;var n="";e&&e._owner&&e._owner!==ue.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),W(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),W(null)}}function Ve(e,r){{if(typeof e!="object")return;if(oe(e))for(var t=0;t<e.length;t++){var n=e[t];le(n)&&Ye(n,r)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var u=Ze(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),i;!(i=s.next()).done;)le(i.value)&&Ye(i.value,r)}}}function Sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===p||r.$$typeof===O))t=r.propTypes;else return;if(t){var n=R(r);vr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!se){se=!0;var u=R(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){W(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),W(null);break}}e.ref!==null&&(W(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}var Me={};function Ue(e,r,t,n,u,s){{var i=ir(e);if(!i){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=Or();h?o+=h:o+=$e();var f;e===null?f="null":oe(e)?f="array":e!==void 0&&e.$$typeof===l?(f="<"+(R(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,o)}var d=wr(e,r,t,u,s);if(d==null)return d;if(i){var b=r.children;if(b!==void 0)if(n)if(oe(b)){for(var $=0;$<b.length;$++)Ve(b[$],e);Object.freeze&&Object.freeze(b)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ve(b,e)}if(N.call(r,"key")){var k=R(e),g=Object.keys(r).filter(function(Fr){return Fr!=="key"}),ce=g.length>0?"{key: someKey, "+g.join(": ..., ")+": ...}":"{key: someKey}";if(!Me[k+ce]){var Ar=g.length>0?"{"+g.join(": ..., ")+": ...}":"{}";v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ce,k,Ar,k),Me[k+ce]=!0}}return e===A?Pr(d):Sr(d),d}}function jr(e,r,t){return Ue(e,r,t,!0)}function xr(e,r,t){return Ue(e,r,t,!1)}var kr=xr,Dr=jr;V.Fragment=A,V.jsx=kr,V.jsxs=Dr}()),V}he.env.NODE_ENV==="production"?re.exports=Ge():re.exports=ze();var Xe=re.exports;const He=()=>{const[a,l]=C.useState(0);return Xe.jsxs("div",{onClick:()=>{l(y=>y+1)},children:["Button ",a]})};window.process={env:{NODE_ENV:"production"}},window.webGDL={add:Ke,sum:Je,Button:He}});