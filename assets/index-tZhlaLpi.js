function Tm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Om(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nc={exports:{}},Po={},Lc={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),zm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),zu=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Ic={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||zc}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=Yn.prototype;function ha(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||zc}var fa=ha.prototype=new Rc;fa.constructor=ha;Mc(fa,Yn.prototype);fa.isPureReactComponent=!0;var Mu=Array.isArray,$c=Object.prototype.hasOwnProperty,pa={current:null},Dc={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)$c.call(t,r)&&!Dc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ni,type:e,key:o,ref:s,props:i,_owner:pa.current}}function jm(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Iu=/\/+/g;function ss(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hm(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ni:case Nm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ss(s,0):r,Mu(i)?(n="",e!=null&&(n=e.replace(Iu,"$&/")+"/"),zi(i,t,n,"",function(u){return u})):i!=null&&(ma(i)&&(i=jm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Iu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Mu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+ss(o,l);s+=zi(o,t,n,a,i)}else if(a=Um(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+ss(o,l++),s+=zi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ci(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Mi={transition:null},Wm={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Mi,ReactCurrentOwner:pa};N.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Yn;N.Fragment=Lm;N.Profiler=Mm;N.PureComponent=ha;N.StrictMode=zm;N.Suspense=Dm;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wm;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=pa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)$c.call(t,a)&&!Dc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ni,type:e.type,key:i,ref:o,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:Rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Im,_context:e},e.Consumer=e};N.createElement=Fc;N.createFactory=function(e){var t=Fc.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:$m,render:e}};N.isValidElement=ma;N.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Vm}};N.memo=function(e,t){return{$$typeof:Fm,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Mi.transition;Mi.transition={};try{e()}finally{Mi.transition=t}};N.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};N.useCallback=function(e,t){return ge.current.useCallback(e,t)};N.useContext=function(e){return ge.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};N.useEffect=function(e,t){return ge.current.useEffect(e,t)};N.useId=function(){return ge.current.useId()};N.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ge.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};N.useRef=function(e){return ge.current.useRef(e)};N.useState=function(e){return ge.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ge.current.useTransition()};N.version="18.2.0";Lc.exports=N;var Re=Lc.exports;const Bc=Om(Re),Qn=Tm({__proto__:null,default:Bc},[Re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=Re,Ym=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),qm=Object.prototype.hasOwnProperty,Gm=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xm={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)qm.call(t,r)&&!Xm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ym,type:e,key:o,ref:s,props:i,_owner:Gm.current}}Po.Fragment=Qm;Po.jsx=Uc;Po.jsxs=Uc;Nc.exports=Po;var q=Nc.exports,el={},jc={exports:{}},Ne={},Hc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var O=C.length;C.push(P);e:for(;0<O;){var Y=O-1>>>1,ee=C[Y];if(0<i(ee,P))C[Y]=P,C[O]=ee,O=Y;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],O=C.pop();if(O!==P){C[0]=O;e:for(var Y=0,ee=C.length,ui=ee>>>1;Y<ui;){var Rt=2*(Y+1)-1,os=C[Rt],$t=Rt+1,di=C[$t];if(0>i(os,O))$t<ee&&0>i(di,os)?(C[Y]=di,C[$t]=O,Y=$t):(C[Y]=os,C[Rt]=O,Y=Rt);else if($t<ee&&0>i(di,O))C[Y]=di,C[$t]=O,Y=$t;else break e}}return P}function i(C,P){var O=C.sortIndex-P.sortIndex;return O!==0?O:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,c=null,p=3,v=!1,g=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=C)r(u),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(u)}}function _(C){if(w=!1,m(C),!g)if(n(a)!==null)g=!0,rs(x);else{var P=n(u);P!==null&&is(_,P.startTime-C)}}function x(C,P){g=!1,w&&(w=!1,f(k),k=-1),v=!0;var O=p;try{for(m(P),c=n(a);c!==null&&(!(c.expirationTime>P)||C&&!Be());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,p=c.priorityLevel;var ee=Y(c.expirationTime<=P);P=e.unstable_now(),typeof ee=="function"?c.callback=ee:c===n(a)&&r(a),m(P)}else r(a);c=n(a)}if(c!==null)var ui=!0;else{var Rt=n(u);Rt!==null&&is(_,Rt.startTime-P),ui=!1}return ui}finally{c=null,p=O,v=!1}}var E=!1,S=null,k=-1,K=5,L=-1;function Be(){return!(e.unstable_now()-L<K)}function Zn(){if(S!==null){var C=e.unstable_now();L=C;var P=!0;try{P=S(!0,C)}finally{P?er():(E=!1,S=null)}}else E=!1}var er;if(typeof h=="function")er=function(){h(Zn)};else if(typeof MessageChannel<"u"){var Lu=new MessageChannel,Pm=Lu.port2;Lu.port1.onmessage=Zn,er=function(){Pm.postMessage(null)}}else er=function(){A(Zn,0)};function rs(C){S=C,E||(E=!0,er())}function is(C,P){k=A(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,rs(x))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var O=p;p=P;try{return C()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=p;p=C;try{return P()}finally{p=O}},e.unstable_scheduleCallback=function(C,P,O){var Y=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Y+O:Y):O=Y,C){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=O+ee,C={id:d++,callback:P,priorityLevel:C,startTime:O,expirationTime:ee,sortIndex:-1},O>Y?(C.sortIndex=O,t(u,C),n(a)===null&&C===n(u)&&(w?(f(k),k=-1):w=!0,is(_,O-Y))):(C.sortIndex=ee,t(a,C),g||v||(g=!0,rs(x))),C},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(C){var P=p;return function(){var O=p;p=P;try{return C.apply(this,arguments)}finally{p=O}}}})(Vc);Hc.exports=Vc;var Jm=Hc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=Re,Oe=Jm;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kc=new Set,zr={};function on(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(zr[e]=t,e=0;e<t.length;e++)Kc.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},$u={};function ev(e){return tl.call($u,e)?!0:tl.call(Ru,e)?!1:Zm.test(e)?$u[e]=!0:(Ru[e]=!0,!1)}function tv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nv(e,t,n,r){if(t===null||typeof t>"u"||tv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,ga);le[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,ga);le[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,ga);le[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nv(t,n,i,r)&&(n=null),r||i===null?ev(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ct=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),fn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),qc=Symbol.for("react.offscreen"),Du=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Du&&e[Du]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ls;function pr(e){if(ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ls=t&&t[1]||""}return`
`+ls+e}var as=!1;function us(e,t){if(!e||as)return"";as=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{as=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function rv(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case fn:return"Portal";case nl:return"Profiler";case ya:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qc:return(e.displayName||"Context")+".Consumer";case Yc:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function iv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ov(e){var t=Gc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=ov(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jc(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function ll(e,t){Jc(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?al(e,t.type,n):t.hasOwnProperty("defaultValue")&&al(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function al(e,t,n){(t!=="number"||qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(mr(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Zc(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,th=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function nh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function rh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lv=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(lv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,kn=null,An=null;function Hu(e){if(e=oi(e)){if(typeof pl!="function")throw Error(y(280));var t=e.stateNode;t&&(t=zo(t),pl(e.stateNode,e.type,t))}}function ih(e){kn?An?An.push(e):An=[e]:kn=e}function oh(){if(kn){var e=kn,t=An;if(An=kn=null,Hu(e),t)for(e=0;e<t.length;e++)Hu(t[e])}}function sh(e,t){return e(t)}function lh(){}var ds=!1;function ah(e,t,n){if(ds)return e(t,n);ds=!0;try{return sh(e,t,n)}finally{ds=!1,(kn!==null||An!==null)&&(lh(),oh())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ml=!1;if(lt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ml=!1}function av(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xr=!1,Gi=null,Xi=!1,vl=null,uv={onError:function(e){xr=!0,Gi=e}};function dv(e,t,n,r,i,o,s,l,a){xr=!1,Gi=null,av.apply(uv,arguments)}function cv(e,t,n,r,i,o,s,l,a){if(dv.apply(this,arguments),xr){if(xr){var u=Gi;xr=!1,Gi=null}else throw Error(y(198));Xi||(Xi=!0,vl=u)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vu(e){if(sn(e)!==e)throw Error(y(188))}function hv(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vu(i),e;if(o===r)return Vu(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function dh(e){return e=hv(e),e!==null?ch(e):null}function ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ch(e);if(t!==null)return t;e=e.sibling}return null}var hh=Oe.unstable_scheduleCallback,Wu=Oe.unstable_cancelCallback,fv=Oe.unstable_shouldYield,pv=Oe.unstable_requestPaint,Q=Oe.unstable_now,mv=Oe.unstable_getCurrentPriorityLevel,Ca=Oe.unstable_ImmediatePriority,fh=Oe.unstable_UserBlockingPriority,Ji=Oe.unstable_NormalPriority,vv=Oe.unstable_LowPriority,ph=Oe.unstable_IdlePriority,To=null,Xe=null;function gv(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:wv,_v=Math.log,yv=Math.LN2;function wv(e){return e>>>=0,e===0?32:31-(_v(e)/yv|0)|0}var mi=64,vi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=vr(l):(o&=s,o!==0&&(r=vr(o)))}else s=n&~i,s!==0?r=vr(s):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function xv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-We(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=xv(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mh(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Cv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ea(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function vh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gh,Sa,_h,yh,wh,_l=!1,gi=[],wt=null,xt=null,bt=null,Rr=new Map,$r=new Map,mt=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sv(e,t,n,r,i){switch(t){case"focusin":return wt=rr(wt,e,t,n,r,i),!0;case"dragenter":return xt=rr(xt,e,t,n,r,i),!0;case"mouseover":return bt=rr(bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,rr(Rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,rr($r.get(o)||null,e,t,n,r,i)),!0}return!1}function xh(e){var t=Ut(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=uh(n),t!==null){e.blockedOn=t,wh(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=oi(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function Yu(e,t,n){Ii(e)&&n.delete(t)}function kv(){_l=!1,wt!==null&&Ii(wt)&&(wt=null),xt!==null&&Ii(xt)&&(xt=null),bt!==null&&Ii(bt)&&(bt=null),Rr.forEach(Yu),$r.forEach(Yu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,kv)))}function Dr(e){function t(i){return ir(i,e)}if(0<gi.length){ir(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&ir(wt,e),xt!==null&&ir(xt,e),bt!==null&&ir(bt,e),Rr.forEach(t),$r.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)xh(n),n.blockedOn===null&&mt.shift()}var Pn=ct.ReactCurrentBatchConfig,eo=!0;function Av(e,t,n,r){var i=R,o=Pn.transition;Pn.transition=null;try{R=1,ka(e,t,n,r)}finally{R=i,Pn.transition=o}}function Pv(e,t,n,r){var i=R,o=Pn.transition;Pn.transition=null;try{R=4,ka(e,t,n,r)}finally{R=i,Pn.transition=o}}function ka(e,t,n,r){if(eo){var i=yl(e,t,n,r);if(i===null)xs(e,t,r,to,n),Ku(e,r);else if(Sv(i,e,t,n,r))r.stopPropagation();else if(Ku(e,r),t&4&&-1<Ev.indexOf(e)){for(;i!==null;){var o=oi(i);if(o!==null&&gh(o),o=yl(e,t,n,r),o===null&&xs(e,t,r,to,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var to=null;function yl(e,t,n,r){if(to=null,e=ba(r),e=Ut(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mv()){case Ca:return 1;case fh:return 4;case Ji:case vv:return 16;case ph:return 536870912;default:return 16}default:return 16}}var _t=null,Aa=null,Ri=null;function Ch(){if(Ri)return Ri;var e,t=Aa,n=t.length,r,i="value"in _t?_t.value:_t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Qu(){return!1}function Le(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_i:Qu,this.isPropagationStopped=Qu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Le(qn),ii=H({},qn,{view:0,detail:0}),Tv=Le(ii),hs,fs,or,Oo=H({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(hs=e.screenX-or.screenX,fs=e.screenY-or.screenY):fs=hs=0,or=e),hs)},movementY:function(e){return"movementY"in e?e.movementY:fs}}),qu=Le(Oo),Ov=H({},Oo,{dataTransfer:0}),Nv=Le(Ov),Lv=H({},ii,{relatedTarget:0}),ps=Le(Lv),zv=H({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=Le(zv),Iv=H({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=Le(Iv),$v=H({},qn,{data:0}),Gu=Le($v),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bv[e])?!!t[e]:!1}function Ta(){return Uv}var jv=H({},ii,{key:function(e){if(e.key){var t=Dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Le(jv),Vv=H({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Le(Vv),Wv=H({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),Kv=Le(Wv),Yv=H({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Le(Yv),qv=H({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Le(qv),Xv=[9,13,27,32],Oa=lt&&"CompositionEvent"in window,br=null;lt&&"documentMode"in document&&(br=document.documentMode);var Jv=lt&&"TextEvent"in window&&!br,Eh=lt&&(!Oa||br&&8<br&&11>=br),Ju=" ",Zu=!1;function Sh(e,t){switch(e){case"keyup":return Xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Zv(e,t){switch(e){case"compositionend":return kh(t);case"keypress":return t.which!==32?null:(Zu=!0,Ju);case"textInput":return e=t.data,e===Ju&&Zu?null:e;default:return null}}function eg(e,t){if(mn)return e==="compositionend"||!Oa&&Sh(e,t)?(e=Ch(),Ri=Aa=_t=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eh&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function Ah(e,t,n,r){ih(r),t=no(t,"onChange"),0<t.length&&(n=new Pa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Fr=null;function ng(e){Dh(e,0)}function No(e){var t=_n(e);if(Xc(t))return e}function rg(e,t){if(e==="change")return t}var Ph=!1;if(lt){var ms;if(lt){var vs="oninput"in document;if(!vs){var td=document.createElement("div");td.setAttribute("oninput","return;"),vs=typeof td.oninput=="function"}ms=vs}else ms=!1;Ph=ms&&(!document.documentMode||9<document.documentMode)}function nd(){Cr&&(Cr.detachEvent("onpropertychange",Th),Fr=Cr=null)}function Th(e){if(e.propertyName==="value"&&No(Fr)){var t=[];Ah(t,Fr,e,ba(e)),ah(ng,t)}}function ig(e,t,n){e==="focusin"?(nd(),Cr=t,Fr=n,Cr.attachEvent("onpropertychange",Th)):e==="focusout"&&nd()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Fr)}function sg(e,t){if(e==="click")return No(t)}function lg(e,t){if(e==="input"||e==="change")return No(t)}function ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:ag;function Br(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nh(){for(var e=window,t=qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qi(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ug(e){var t=Nh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Oh(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=id(n,o);var s=id(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=lt&&"documentMode"in document&&11>=document.documentMode,vn=null,wl=null,Er=null,xl=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||vn==null||vn!==qi(r)||(r=vn,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Br(Er,r)||(Er=r,r=no(wl,"onSelect"),0<r.length&&(t=new Pa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},gs={},Lh={};lt&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Lo(e){if(gs[e])return gs[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lh)return gs[e]=t[n];return e}var zh=Lo("animationend"),Mh=Lo("animationiteration"),Ih=Lo("animationstart"),Rh=Lo("transitionend"),$h=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){$h.set(e,t),on(t,[e])}for(var _s=0;_s<sd.length;_s++){var ys=sd[_s],cg=ys.toLowerCase(),hg=ys[0].toUpperCase()+ys.slice(1);Lt(cg,"on"+hg)}Lt(zh,"onAnimationEnd");Lt(Mh,"onAnimationIteration");Lt(Ih,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Rh,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cv(r,t,void 0,e),e.currentTarget=null}function Dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;ld(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;ld(i,l,u),o=a}}}if(Xi)throw e=vl,Xi=!1,vl=null,e}function D(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Fh(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),Fh(n,e,r,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[wi]){e[wi]=!0,Kc.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wi]||(t[wi]=!0,ws("selectionchange",!1,t))}}function Fh(e,t,n,r){switch(bh(t)){case 1:var i=Av;break;case 4:i=Pv;break;default:i=ka}n=i.bind(null,t,n,e),i=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ut(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}ah(function(){var u=o,d=ba(n),c=[];e:{var p=$h.get(e);if(p!==void 0){var v=Pa,g=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":v=Hv;break;case"focusin":g="focus",v=ps;break;case"focusout":g="blur",v=ps;break;case"beforeblur":case"afterblur":v=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kv;break;case zh:case Mh:case Ih:v=Mv;break;case Rh:v=Qv;break;case"scroll":v=Tv;break;case"wheel":v=Gv;break;case"copy":case"cut":case"paste":v=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xu}var w=(t&4)!==0,A=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var h=u,m;h!==null;){m=h;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,f!==null&&(_=Ir(h,f),_!=null&&w.push(jr(h,_,m)))),A)break;h=h.return}0<w.length&&(p=new v(p,g,null,n,d),c.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==fl&&(g=n.relatedTarget||n.fromElement)&&(Ut(g)||g[at]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Ut(g):null,g!==null&&(A=sn(g),g!==A||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(w=qu,_="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Xu,_="onPointerLeave",f="onPointerEnter",h="pointer"),A=v==null?p:_n(v),m=g==null?p:_n(g),p=new w(_,h+"leave",v,n,d),p.target=A,p.relatedTarget=m,_=null,Ut(d)===u&&(w=new w(f,h+"enter",g,n,d),w.target=m,w.relatedTarget=A,_=w),A=_,v&&g)t:{for(w=v,f=g,h=0,m=w;m;m=dn(m))h++;for(m=0,_=f;_;_=dn(_))m++;for(;0<h-m;)w=dn(w),h--;for(;0<m-h;)f=dn(f),m--;for(;h--;){if(w===f||f!==null&&w===f.alternate)break t;w=dn(w),f=dn(f)}w=null}else w=null;v!==null&&ad(c,p,v,w,!1),g!==null&&A!==null&&ad(c,A,g,w,!0)}}e:{if(p=u?_n(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var x=rg;else if(ed(p))if(Ph)x=lg;else{x=og;var E=ig}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=sg);if(x&&(x=x(e,u))){Ah(c,x,n,d);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&al(p,"number",p.value)}switch(E=u?_n(u):window,e){case"focusin":(ed(E)||E.contentEditable==="true")&&(vn=E,wl=u,Er=null);break;case"focusout":Er=wl=vn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,od(c,n,d);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":od(c,n,d)}var S;if(Oa)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else mn?Sh(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Eh&&n.locale!=="ko"&&(mn||k!=="onCompositionStart"?k==="onCompositionEnd"&&mn&&(S=Ch()):(_t=d,Aa="value"in _t?_t.value:_t.textContent,mn=!0)),E=no(u,k),0<E.length&&(k=new Gu(k,e,null,n,d),c.push({event:k,listeners:E}),S?k.data=S:(S=kh(n),S!==null&&(k.data=S)))),(S=Jv?Zv(e,n):eg(e,n))&&(u=no(u,"onBeforeInput"),0<u.length&&(d=new Gu("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=S))}Dh(c,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(jr(e,o,i)),o=Ir(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ad(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ir(n,o),a!=null&&s.unshift(jr(n,a,l))):i||(a=Ir(n,o),a!=null&&s.push(jr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var pg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function ud(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(mg,"")}function xi(e,t,n){if(t=ud(t),ud(e)!==t&&n)throw Error(y(425))}function ro(){}var bl=null,Cl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch(_g)}:Sl;function _g(e){setTimeout(function(){throw e})}function bs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Gn,Hr="__reactProps$"+Gn,at="__reactContainer$"+Gn,kl="__reactEvents$"+Gn,yg="__reactListeners$"+Gn,wg="__reactHandles$"+Gn;function Ut(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[Ge])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[Ge]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function zo(e){return e[Hr]||null}var Al=[],yn=-1;function zt(e){return{current:e}}function F(e){0>yn||(e.current=Al[yn],Al[yn]=null,yn--)}function $(e,t){yn++,Al[yn]=e.current,e.current=t}var Nt={},he=zt(Nt),be=zt(!1),Xt=Nt;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function io(){F(be),F(he)}function hd(e,t,n){if(he.current!==Nt)throw Error(y(168));$(he,t),$(be,n)}function Bh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,iv(e)||"Unknown",i));return H({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Xt=he.current,$(he,e),$(be,be.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Bh(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,F(be),F(he),$(he,e)):F(be),$(be,n)}var rt=null,Mo=!1,Cs=!1;function Uh(e){rt===null?rt=[e]:rt.push(e)}function xg(e){Mo=!0,Uh(e)}function Mt(){if(!Cs&&rt!==null){Cs=!0;var e=0,t=R;try{var n=rt;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Mo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),hh(Ca,Mt),i}finally{R=t,Cs=!1}}return null}var wn=[],xn=0,so=null,lo=0,ze=[],Me=0,Jt=null,it=1,ot="";function Ft(e,t){wn[xn++]=lo,wn[xn++]=so,so=e,lo=t}function jh(e,t,n){ze[Me++]=it,ze[Me++]=ot,ze[Me++]=Jt,Jt=e;var r=it;e=ot;var i=32-We(r)-1;r&=~(1<<i),n+=1;var o=32-We(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,it=1<<32-We(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function La(e){e.return!==null&&(Ft(e,1),jh(e,1,0))}function za(e){for(;e===so;)so=wn[--xn],wn[xn]=null,lo=wn[--xn],wn[xn]=null;for(;e===Jt;)Jt=ze[--Me],ze[Me]=null,ot=ze[--Me],ze[Me]=null,it=ze[--Me],ze[Me]=null}var Te=null,Pe=null,B=!1,Ve=null;function Hh(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Pe=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Pe=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(B){var t=Pe;if(t){var n=t;if(!pd(e,t)){if(Pl(e))throw Error(y(418));t=Ct(n.nextSibling);var r=Te;t&&pd(e,t)?Hh(r,n):(e.flags=e.flags&-4097|2,B=!1,Te=e)}}else{if(Pl(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,Te=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function bi(e){if(e!==Te)return!1;if(!B)return md(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Pe)){if(Pl(e))throw Vh(),Error(y(418));for(;t;)Hh(e,t),t=Ct(t.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Te?Ct(e.stateNode.nextSibling):null;return!0}function Vh(){for(var e=Pe;e;)e=Ct(e.nextSibling)}function $n(){Pe=Te=null,B=!1}function Ma(e){Ve===null?Ve=[e]:Ve.push(e)}var bg=ct.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ao=zt(null),uo=null,bn=null,Ia=null;function Ra(){Ia=bn=uo=null}function $a(e){var t=ao.current;F(ao),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){uo=e,Ia=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(uo===null)throw Error(y(308));bn=e,uo.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var jt=null;function Da(e){jt===null?jt=[e]:jt.push(e)}function Wh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Da(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pt=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Da(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}function vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;s=0,d=u=a=null,l=o;do{var p=l.lane,v=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,w=l;switch(p=t,v=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){c=g.call(v,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,p=typeof g=="function"?g.call(v,c,p):g,p==null)break e;c=H({},c,p);break e;case 2:pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);en|=s,e.lanes=s,e.memoizedState=c}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Yh=new Wc.Component().refs;function Nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=kt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,i),t!==null&&(Ke(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=kt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Et(e,o,i),t!==null&&(Ke(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=kt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=Et(e,i,r),t!==null&&(Ke(t,e,r,n),Di(t,e,r))}};function _d(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function Qh(e,t,n){var r=!1,i=Nt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=Ce(t)?Xt:he.current,r=t.contextTypes,o=(r=r!=null)?Rn(e,i):Nt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yh,Fa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=Ce(t)?Xt:he.current,i.context=Rn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Nl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Io.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Yh&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Ci(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wd(e){var t=e._init;return t(e._payload)}function qh(e){function t(f,h){if(e){var m=f.deletions;m===null?(f.deletions=[h],f.flags|=16):m.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=At(f,h),f.index=0,f.sibling=null,f}function o(f,h,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags|=2,h):m):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,h,m,_){return h===null||h.tag!==6?(h=Os(m,f.mode,_),h.return=f,h):(h=i(h,m),h.return=f,h)}function a(f,h,m,_){var x=m.type;return x===pn?d(f,h,m.props.children,_,m.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ft&&wd(x)===h.type)?(_=i(h,m.props),_.ref=sr(f,h,m),_.return=f,_):(_=Vi(m.type,m.key,m.props,null,f.mode,_),_.ref=sr(f,h,m),_.return=f,_)}function u(f,h,m,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ns(m,f.mode,_),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function d(f,h,m,_,x){return h===null||h.tag!==7?(h=Qt(m,f.mode,_,x),h.return=f,h):(h=i(h,m),h.return=f,h)}function c(f,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Os(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hi:return m=Vi(h.type,h.key,h.props,null,f.mode,m),m.ref=sr(f,null,h),m.return=f,m;case fn:return h=Ns(h,f.mode,m),h.return=f,h;case ft:var _=h._init;return c(f,_(h._payload),m)}if(mr(h)||tr(h))return h=Qt(h,f.mode,m,null),h.return=f,h;Ci(f,h)}return null}function p(f,h,m,_){var x=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:l(f,h,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hi:return m.key===x?a(f,h,m,_):null;case fn:return m.key===x?u(f,h,m,_):null;case ft:return x=m._init,p(f,h,x(m._payload),_)}if(mr(m)||tr(m))return x!==null?null:d(f,h,m,_,null);Ci(f,m)}return null}function v(f,h,m,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(m)||null,l(h,f,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hi:return f=f.get(_.key===null?m:_.key)||null,a(h,f,_,x);case fn:return f=f.get(_.key===null?m:_.key)||null,u(h,f,_,x);case ft:var E=_._init;return v(f,h,m,E(_._payload),x)}if(mr(_)||tr(_))return f=f.get(m)||null,d(h,f,_,x,null);Ci(h,_)}return null}function g(f,h,m,_){for(var x=null,E=null,S=h,k=h=0,K=null;S!==null&&k<m.length;k++){S.index>k?(K=S,S=null):K=S.sibling;var L=p(f,S,m[k],_);if(L===null){S===null&&(S=K);break}e&&S&&L.alternate===null&&t(f,S),h=o(L,h,k),E===null?x=L:E.sibling=L,E=L,S=K}if(k===m.length)return n(f,S),B&&Ft(f,k),x;if(S===null){for(;k<m.length;k++)S=c(f,m[k],_),S!==null&&(h=o(S,h,k),E===null?x=S:E.sibling=S,E=S);return B&&Ft(f,k),x}for(S=r(f,S);k<m.length;k++)K=v(S,f,k,m[k],_),K!==null&&(e&&K.alternate!==null&&S.delete(K.key===null?k:K.key),h=o(K,h,k),E===null?x=K:E.sibling=K,E=K);return e&&S.forEach(function(Be){return t(f,Be)}),B&&Ft(f,k),x}function w(f,h,m,_){var x=tr(m);if(typeof x!="function")throw Error(y(150));if(m=x.call(m),m==null)throw Error(y(151));for(var E=x=null,S=h,k=h=0,K=null,L=m.next();S!==null&&!L.done;k++,L=m.next()){S.index>k?(K=S,S=null):K=S.sibling;var Be=p(f,S,L.value,_);if(Be===null){S===null&&(S=K);break}e&&S&&Be.alternate===null&&t(f,S),h=o(Be,h,k),E===null?x=Be:E.sibling=Be,E=Be,S=K}if(L.done)return n(f,S),B&&Ft(f,k),x;if(S===null){for(;!L.done;k++,L=m.next())L=c(f,L.value,_),L!==null&&(h=o(L,h,k),E===null?x=L:E.sibling=L,E=L);return B&&Ft(f,k),x}for(S=r(f,S);!L.done;k++,L=m.next())L=v(S,f,k,L.value,_),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?k:L.key),h=o(L,h,k),E===null?x=L:E.sibling=L,E=L);return e&&S.forEach(function(Zn){return t(f,Zn)}),B&&Ft(f,k),x}function A(f,h,m,_){if(typeof m=="object"&&m!==null&&m.type===pn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case hi:e:{for(var x=m.key,E=h;E!==null;){if(E.key===x){if(x=m.type,x===pn){if(E.tag===7){n(f,E.sibling),h=i(E,m.props.children),h.return=f,f=h;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ft&&wd(x)===E.type){n(f,E.sibling),h=i(E,m.props),h.ref=sr(f,E,m),h.return=f,f=h;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===pn?(h=Qt(m.props.children,f.mode,_,m.key),h.return=f,f=h):(_=Vi(m.type,m.key,m.props,null,f.mode,_),_.ref=sr(f,h,m),_.return=f,f=_)}return s(f);case fn:e:{for(E=m.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Ns(m,f.mode,_),h.return=f,f=h}return s(f);case ft:return E=m._init,A(f,h,E(m._payload),_)}if(mr(m))return g(f,h,m,_);if(tr(m))return w(f,h,m,_);Ci(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=Os(m,f.mode,_),h.return=f,f=h),s(f)):n(f,h)}return A}var Dn=qh(!0),Gh=qh(!1),si={},Je=zt(si),Vr=zt(si),Wr=zt(si);function Ht(e){if(e===si)throw Error(y(174));return e}function Ba(e,t){switch($(Wr,t),$(Vr,e),$(Je,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}F(Je),$(Je,t)}function Fn(){F(Je),F(Vr),F(Wr)}function Xh(e){Ht(Wr.current);var t=Ht(Je.current),n=dl(t,e.type);t!==n&&($(Vr,e),$(Je,n))}function Ua(e){Vr.current===e&&(F(Je),F(Vr))}var U=zt(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function ja(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Fi=ct.ReactCurrentDispatcher,Ss=ct.ReactCurrentBatchConfig,Zt=0,j=null,X=null,te=null,fo=!1,Sr=!1,Kr=0,Cg=0;function ue(){throw Error(y(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Va(e,t,n,r,i,o){if(Zt=o,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?Ag:Pg,e=n(r,i),Sr){o=0;do{if(Sr=!1,Kr=0,25<=o)throw Error(y(301));o+=1,te=X=null,t.updateQueue=null,Fi.current=Tg,e=n(r,i)}while(Sr)}if(Fi.current=po,t=X!==null&&X.next!==null,Zt=0,te=X=j=null,fo=!1,t)throw Error(y(300));return e}function Wa(){var e=Kr!==0;return Kr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?j.memoizedState=te=e:te=te.next=e,te}function Fe(){if(X===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?j.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?j.memoizedState=te=e:te=te.next=e}return te}function Yr(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=Fe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((Zt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,s=r):a=a.next=c,j.lanes|=d,en|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Ye(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,j.lanes|=o,en|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function As(e){var t=Fe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ye(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jh(){}function Zh(e,t){var n=j,r=Fe(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,Ka(nf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Qr(9,tf.bind(null,n,r,i,t),void 0,null),re===null)throw Error(y(349));Zt&30||ef(n,t,i)}return i}function ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tf(e,t,n,r){t.value=n,t.getSnapshot=r,rf(t)&&of(e)}function nf(e,t,n){return n(function(){rf(t)&&of(e)})}function rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function of(e){var t=ut(e,1);t!==null&&Ke(t,e,1,-1)}function xd(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=kg.bind(null,j,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sf(){return Fe().memoizedState}function Bi(e,t,n,r){var i=qe();j.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(X!==null){var s=X.memoizedState;if(o=s.destroy,r!==null&&Ha(r,s.deps)){i.memoizedState=Qr(t,n,o,r);return}}j.flags|=e,i.memoizedState=Qr(1|t,n,o,r)}function bd(e,t){return Bi(8390656,8,e,t)}function Ka(e,t){return Ro(2048,8,e,t)}function lf(e,t){return Ro(4,2,e,t)}function af(e,t){return Ro(4,4,e,t)}function uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,uf.bind(null,t,e),n)}function Ya(){}function cf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ff(e,t,n){return Zt&21?(Ye(n,t)||(n=mh(),j.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Eg(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{R=n,Ss.transition=r}}function pf(){return Fe().memoizedState}function Sg(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mf(e))vf(t,n);else if(n=Wh(e,t,n,r),n!==null){var i=ve();Ke(n,e,r,i),gf(n,t,r)}}function kg(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mf(e))vf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ye(l,s)){var a=t.interleaved;a===null?(i.next=i,Da(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Wh(e,t,i,r),n!==null&&(i=ve(),Ke(n,e,r,i),gf(n,t,r))}}function mf(e){var t=e.alternate;return e===j||t!==null&&t===j}function vf(e,t){Sr=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}var po={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Ag={readContext:De,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sg.bind(null,j,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:Ya,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=Eg.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=j,i=qe();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),re===null)throw Error(y(349));Zt&30||ef(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bd(nf.bind(null,r,o,e),[e]),r.flags|=2048,Qr(9,tf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=re.identifierPrefix;if(B){var n=ot,r=it;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pg={readContext:De,useCallback:cf,useContext:De,useEffect:Ka,useImperativeHandle:df,useInsertionEffect:lf,useLayoutEffect:af,useMemo:hf,useReducer:ks,useRef:sf,useState:function(){return ks(Yr)},useDebugValue:Ya,useDeferredValue:function(e){var t=Fe();return ff(t,X.memoizedState,e)},useTransition:function(){var e=ks(Yr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Jh,useSyncExternalStore:Zh,useId:pf,unstable_isNewReconciler:!1},Tg={readContext:De,useCallback:cf,useContext:De,useEffect:Ka,useImperativeHandle:df,useInsertionEffect:lf,useLayoutEffect:af,useMemo:hf,useReducer:As,useRef:sf,useState:function(){return As(Yr)},useDebugValue:Ya,useDeferredValue:function(e){var t=Fe();return X===null?t.memoizedState=e:ff(t,X.memoizedState,e)},useTransition:function(){var e=As(Yr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Jh,useSyncExternalStore:Zh,useId:pf,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=rv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Og=typeof WeakMap=="function"?WeakMap:Map;function _f(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Hl=r),zl(e,t)},n}function yf(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Og;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vg.bind(null,e,t,n),t.then(e,e))}function Ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var Ng=ct.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?Gh(t,null,n,r):Dn(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var o=t.ref;return Tn(t,i),r=Va(e,t,n,r,o,i),n=Wa(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&n&&La(t),t.flags|=1,me(e,t,r,i),t.child)}function Ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wf(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function wf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Ml(e,t,n,r,i)}function xf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(En,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(En,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(En,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(En,Ae),Ae|=r;return me(e,t,i,n),t.child}function bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,i){var o=Ce(n)?Xt:he.current;return o=Rn(t,o),Tn(t,i),n=Va(e,t,n,r,o,i),r=Wa(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&r&&La(t),t.flags|=1,me(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if(Ce(n)){var o=!0;oo(t)}else o=!1;if(Tn(t,i),t.stateNode===null)Ui(e,t),Qh(t,n,r),Ll(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=Ce(n)?Xt:he.current,u=Rn(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&yd(t,s,r,u),pt=!1;var p=t.memoizedState;s.state=p,co(t,r,s,i),a=t.memoizedState,l!==r||p!==a||be.current||pt?(typeof d=="function"&&(Nl(t,n,d,r),a=t.memoizedState),(l=pt||_d(t,n,l,r,p,a,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:je(t.type,l),s.props=u,c=t.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=De(a):(a=Ce(n)?Xt:he.current,a=Rn(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||p!==a)&&yd(t,s,r,a),pt=!1,p=t.memoizedState,s.state=p,co(t,r,s,i);var g=t.memoizedState;l!==c||p!==g||be.current||pt?(typeof v=="function"&&(Nl(t,n,v,r),g=t.memoizedState),(u=pt||_d(t,n,u,r,p,g,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,i)}function Il(e,t,n,r,i,o){bf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fd(t,n,!1),dt(e,t,o);r=t.stateNode,Ng.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,l,o)):me(e,t,l,o),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function Cf(e){var t=e.stateNode;t.pendingContext?hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hd(e,t.context,!1),Ba(e,t.containerInfo)}function Td(e,t,n,r,i){return $n(),Ma(i),t.flags|=256,me(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,t,n){var r=t.pendingProps,i=U.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(U,i&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fo(s,r,0,null),e=Qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$l(n),t.memoizedState=Rl,e):Qa(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Lg(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=At(l,o):(o=Qt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$l(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&Ma(r),Dn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ps(Error(y(422))),Ei(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fo({mode:"visible",children:r.children},i,0,null),o=Qt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dn(t,e.child,null,s),t.child.memoizedState=$l(s),t.memoizedState=Rl,o);if(!(t.mode&1))return Ei(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(y(419)),r=Ps(o,r,void 0),Ei(e,t,s,r)}if(l=(s&e.childLanes)!==0,xe||l){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),Ke(r,e,i,-1))}return eu(),r=Ps(Error(y(421))),Ei(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=Ct(i.nextSibling),Te=t,B=!0,Ve=null,e!==null&&(ze[Me++]=it,ze[Me++]=ot,ze[Me++]=Jt,it=e.id,ot=e.overflow,Jt=t),t=Qa(t,r.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function Ts(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ts(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ts(t,!0,n,null,o);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zg(e,t,n){switch(t.tag){case 3:Cf(t),$n();break;case 5:Xh(t);break;case 1:Ce(t.type)&&oo(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ef(e,t,n):($(U,U.current&1),e=dt(e,t,n),e!==null?e.sibling:null);$(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,xf(e,t,n)}return dt(e,t,n)}var kf,Dl,Af,Pf;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Af=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ht(Je.current);var o=null;switch(n){case"input":i=sl(e,i),r=sl(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),r=ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}cl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mg(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ce(t.type)&&io(),de(t),null;case 3:return r=t.stateNode,Fn(),F(be),F(he),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Kl(Ve),Ve=null))),Dl(e,t),de(t),null;case 5:Ua(t);var i=Ht(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return de(t),null}if(e=Ht(Je.current),bi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[Hr]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)D(gr[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Fu(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Uu(r,o),D("invalid",r)}cl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xi(r.textContent,l,e),i=["children",""+l]):zr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&D("scroll",r)}switch(n){case"input":fi(r),Bu(r,o,!0);break;case"textarea":fi(r),ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ro)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ge]=t,e[Hr]=r,kf(e,t,!1,!1),t.stateNode=e;e:{switch(s=hl(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)D(gr[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Fu(e,r),i=sl(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":Uu(e,r),i=ul(e,r),D("invalid",e);break;default:i=r}cl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?rh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&th(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mr(e,a):typeof a=="number"&&Mr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&D("scroll",e):a!=null&&_a(e,o,a,s))}switch(n){case"input":fi(e),Bu(e,r,!1);break;case"textarea":fi(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ht(Wr.current),Ht(Je.current),bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return de(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Pe!==null&&t.mode&1&&!(t.flags&128))Vh(),$n(),t.flags|=98560,o=!1;else if(o=bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ge]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ve!==null&&(Kl(Ve),Ve=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?J===0&&(J=3):eu())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Fn(),Dl(e,t),e===null&&Ur(t.stateNode.containerInfo),de(t),null;case 10:return $a(t.type._context),de(t),null;case 17:return Ce(t.type)&&io(),de(t),null;case 19:if(F(U),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ho(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Un&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return de(t),null}else 2*Q()-o.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=U.current,$(U,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Ig(e,t){switch(za(t),t.tag){case 1:return Ce(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),F(be),F(he),ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ua(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return Fn(),null;case 10:return $a(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Si=!1,ce=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,b=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Fl(e,t,n){try{n()}catch(r){W(e,t,r)}}var Nd=!1;function $g(e,t){if(bl=eo,e=Nh(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=s+i),c!==o||r!==0&&c.nodeType!==3||(a=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break t;if(p===n&&++u===i&&(l=s),p===o&&++d===r&&(a=s),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},eo=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,A=g.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:je(t.type,w),A);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(_){W(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return g=Nd,Nd=!1,g}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fl(t,n,o)}i=i.next}while(i!==r)}}function $o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[Hr],delete t[kl],delete t[yg],delete t[wg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Of(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var oe=null,He=!1;function ht(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:ce||Cn(n,t);case 6:var r=oe,i=He;oe=null,ht(e,t,n),oe=r,He=i,oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(He?(e=oe,n=n.stateNode,e.nodeType===8?bs(e.parentNode,n):e.nodeType===1&&bs(e,n),Dr(e)):bs(oe,n.stateNode));break;case 4:r=oe,i=He,oe=n.stateNode.containerInfo,He=!0,ht(e,t,n),oe=r,He=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Fl(n,t,s),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!ce&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){W(n,t,l)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ht(e,t,n),ce=r):ht(e,t,n);break;default:ht(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rg),t.forEach(function(r){var i=Kg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,He=!1;break e;case 3:oe=l.stateNode.containerInfo,He=!0;break e;case 4:oe=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(oe===null)throw Error(y(160));Nf(o,s,i),oe=null,He=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){W(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lf(t,e),t=t.sibling}function Lf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Qe(e),r&4){try{kr(3,e,e.return),$o(3,e)}catch(w){W(e,e.return,w)}try{kr(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Ue(t,e),Qe(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ue(t,e),Qe(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(w){W(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Jc(i,o),hl(l,s);var u=hl(l,o);for(s=0;s<a.length;s+=2){var d=a[s],c=a[s+1];d==="style"?rh(i,c):d==="dangerouslySetInnerHTML"?th(i,c):d==="children"?Mr(i,c):_a(i,d,c,u)}switch(l){case"input":ll(i,o);break;case"textarea":Zc(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Sn(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hr]=o}catch(w){W(e,e.return,w)}}break;case 6:if(Ue(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){W(e,e.return,w)}}break;case 3:if(Ue(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Ue(t,e),Qe(e);break;case 13:Ue(t,e),Qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xa=Q())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||d,Ue(t,e),ce=u):Ue(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(b=e,d=e.child;d!==null;){for(c=b=d;b!==null;){switch(p=b,v=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:Cn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:Cn(p,p.return);break;case 22:if(p.memoizedState!==null){Id(c);continue}}v!==null?(v.return=p,b=v):Id(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,a=c.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nh("display",s))}catch(w){W(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){W(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ue(t,e),Qe(e),r&4&&zd(e);break;case 21:break;default:Ue(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Of(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var o=Ld(e);jl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Ld(e);Ul(e,l,s);break;default:throw Error(y(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dg(e,t,n){b=e,zf(e)}function zf(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Si;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ce;l=Si;var u=ce;if(Si=s,(ce=a)&&!u)for(b=i;b!==null;)s=b,a=s.child,s.tag===22&&s.memoizedState!==null?Rd(i):a!==null?(a.return=s,b=a):Rd(i);for(;o!==null;)b=o,zf(o),o=o.sibling;b=i,Si=l,ce=u}Md(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):Md(e)}}function Md(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||$o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Dr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ce||t.flags&512&&Bl(t)}catch(p){W(t,t.return,p)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Id(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Rd(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$o(4,t)}catch(a){W(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){W(t,i,a)}}var o=t.return;try{Bl(t)}catch(a){W(t,o,a)}break;case 5:var s=t.return;try{Bl(t)}catch(a){W(t,s,a)}}}catch(a){W(t,t.return,a)}if(t===e){b=null;break}var l=t.sibling;if(l!==null){l.return=t.return,b=l;break}b=t.return}}var Fg=Math.ceil,mo=ct.ReactCurrentDispatcher,qa=ct.ReactCurrentOwner,$e=ct.ReactCurrentBatchConfig,M=0,re=null,G=null,se=0,Ae=0,En=zt(0),J=0,qr=null,en=0,Do=0,Ga=0,Ar=null,we=null,Xa=0,Un=1/0,tt=null,vo=!1,Hl=null,St=null,ki=!1,yt=null,go=0,Pr=0,Vl=null,ji=-1,Hi=0;function ve(){return M&6?Q():ji!==-1?ji:ji=Q()}function kt(e){return e.mode&1?M&2&&se!==0?se&-se:bg.transition!==null?(Hi===0&&(Hi=mh()),Hi):(e=R,e!==0||(e=window.event,e=e===void 0?16:bh(e.type)),e):1}function Ke(e,t,n,r){if(50<Pr)throw Pr=0,Vl=null,Error(y(185));ri(e,n,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(Do|=n),J===4&&vt(e,se)),Ee(e,r),n===1&&M===0&&!(t.mode&1)&&(Un=Q()+500,Mo&&Mt()))}function Ee(e,t){var n=e.callbackNode;bv(e,t);var r=Zi(e,e===re?se:0);if(r===0)n!==null&&Wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wu(n),t===1)e.tag===0?xg($d.bind(null,e)):Uh($d.bind(null,e)),gg(function(){!(M&6)&&Mt()}),n=null;else{switch(vh(r)){case 1:n=Ca;break;case 4:n=fh;break;case 16:n=Ji;break;case 536870912:n=ph;break;default:n=Ji}n=Uf(n,Mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mf(e,t){if(ji=-1,Hi=0,M&6)throw Error(y(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Zi(e,e===re?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var i=M;M|=2;var o=Rf();(re!==e||se!==t)&&(tt=null,Un=Q()+500,Yt(e,t));do try{jg();break}catch(l){If(e,l)}while(!0);Ra(),mo.current=o,M=i,G!==null?t=0:(re=null,se=0,t=J)}if(t!==0){if(t===2&&(i=gl(e),i!==0&&(r=i,t=Wl(e,i))),t===1)throw n=qr,Yt(e,0),vt(e,r),Ee(e,Q()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bg(i)&&(t=_o(e,r),t===2&&(o=gl(e),o!==0&&(r=o,t=Wl(e,o))),t===1))throw n=qr,Yt(e,0),vt(e,r),Ee(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Bt(e,we,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Xa+500-Q(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sl(Bt.bind(null,e,we,tt),t);break}Bt(e,we,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-We(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fg(r/1960))-r,10<r){e.timeoutHandle=Sl(Bt.bind(null,e,we,tt),r);break}Bt(e,we,tt);break;case 5:Bt(e,we,tt);break;default:throw Error(y(329))}}}return Ee(e,Q()),e.callbackNode===n?Mf.bind(null,e):null}function Wl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=_o(e,t),e!==2&&(t=we,we=n,t!==null&&Kl(t)),e}function Kl(e){we===null?we=e:we.push.apply(we,e)}function Bg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ga,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function $d(e){if(M&6)throw Error(y(327));On();var t=Zi(e,0);if(!(t&1))return Ee(e,Q()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=gl(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=qr,Yt(e,0),vt(e,t),Ee(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,we,tt),Ee(e,Q()),null}function Ja(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Un=Q()+500,Mo&&Mt())}}function tn(e){yt!==null&&yt.tag===0&&!(M&6)&&On();var t=M;M|=1;var n=$e.transition,r=R;try{if($e.transition=null,R=1,e)return e()}finally{R=r,$e.transition=n,M=t,!(M&6)&&Mt()}}function Za(){Ae=En.current,F(En)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vg(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:Fn(),F(be),F(he),ja();break;case 5:Ua(r);break;case 4:Fn();break;case 13:F(U);break;case 19:F(U);break;case 10:$a(r.type._context);break;case 22:case 23:Za()}n=n.return}if(re=e,G=e=At(e.current,null),se=Ae=t,J=0,qr=null,Ga=Do=en=0,we=Ar=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}jt=null}return e}function If(e,t){do{var n=G;try{if(Ra(),Fi.current=po,fo){for(var r=j.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fo=!1}if(Zt=0,te=X=j=null,Sr=!1,Kr=0,qa.current=null,n===null||n.return===null){J=1,qr=t,G=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ed(s);if(v!==null){v.flags&=-257,Sd(v,s,l,o,t),v.mode&1&&Cd(o,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var w=new Set;w.add(a),t.updateQueue=w}else g.add(a);break e}else{if(!(t&1)){Cd(o,u,t),eu();break e}a=Error(y(426))}}else if(B&&l.mode&1){var A=Ed(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Sd(A,s,l,o,t),Ma(Bn(a,l));break e}}o=a=Bn(a,l),J!==4&&(J=2),Ar===null?Ar=[o]:Ar.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=_f(o,a,t);vd(o,f);break e;case 1:l=a;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(St===null||!St.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=yf(o,l,t);vd(o,_);break e}}o=o.return}while(o!==null)}Df(n)}catch(x){t=x,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Rf(){var e=mo.current;return mo.current=po,e===null?po:e}function eu(){(J===0||J===3||J===2)&&(J=4),re===null||!(en&268435455)&&!(Do&268435455)||vt(re,se)}function _o(e,t){var n=M;M|=2;var r=Rf();(re!==e||se!==t)&&(tt=null,Yt(e,t));do try{Ug();break}catch(i){If(e,i)}while(!0);if(Ra(),M=n,mo.current=r,G!==null)throw Error(y(261));return re=null,se=0,J}function Ug(){for(;G!==null;)$f(G)}function jg(){for(;G!==null&&!fv();)$f(G)}function $f(e){var t=Bf(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Df(e):G=t,qa.current=null}function Df(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ig(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=Mg(n,t,Ae),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Bt(e,t,n){var r=R,i=$e.transition;try{$e.transition=null,R=1,Hg(e,t,n,r)}finally{$e.transition=i,R=r}return null}function Hg(e,t,n,r){do On();while(yt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cv(e,o),e===re&&(G=re=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ki||(ki=!0,Uf(Ji,function(){return On(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var s=R;R=1;var l=M;M|=4,qa.current=null,$g(e,n),Lf(n,e),ug(Cl),eo=!!bl,Cl=bl=null,e.current=n,Dg(n),pv(),M=l,R=s,$e.transition=o}else e.current=n;if(ki&&(ki=!1,yt=e,go=i),o=e.pendingLanes,o===0&&(St=null),gv(n.stateNode),Ee(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vo)throw vo=!1,e=Hl,Hl=null,e;return go&1&&e.tag!==0&&On(),o=e.pendingLanes,o&1?e===Vl?Pr++:(Pr=0,Vl=e):Pr=0,Mt(),null}function On(){if(yt!==null){var e=vh(go),t=$e.transition,n=R;try{if($e.transition=null,R=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,go=0,M&6)throw Error(y(331));var i=M;for(M|=4,b=e.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:kr(8,d,o)}var c=d.child;if(c!==null)c.return=d,b=c;else for(;b!==null;){d=b;var p=d.sibling,v=d.return;if(Tf(d),d===u){b=null;break}if(p!==null){p.return=v,b=p;break}b=v}}}var g=o.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var h=e.current;for(b=h;b!==null;){s=b;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,b=m;else e:for(s=h;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$o(9,l)}}catch(x){W(l,l.return,x)}if(l===s){b=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,b=_;break e}b=l.return}}if(M=i,Mt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{R=n,$e.transition=t}}return!1}function Dd(e,t,n){t=Bn(n,t),t=_f(e,t,1),e=Et(e,t,1),t=ve(),e!==null&&(ri(e,1,t),Ee(e,t))}function W(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=Bn(n,e),e=yf(t,e,1),t=Et(t,e,1),e=ve(),t!==null&&(ri(t,1,e),Ee(t,e));break}}t=t.return}}function Vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(se&n)===n&&(J===4||J===3&&(se&130023424)===se&&500>Q()-Xa?Yt(e,0):Ga|=n),Ee(e,t)}function Ff(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=ve();e=ut(e,t),e!==null&&(ri(e,t,n),Ee(e,n))}function Wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Kg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ff(e,n)}var Bf;Bf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,zg(e,t,n);xe=!!(e.flags&131072)}else xe=!1,B&&t.flags&1048576&&jh(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ui(e,t),e=t.pendingProps;var i=Rn(t,he.current);Tn(t,n),i=Va(null,t,r,e,i,n);var o=Wa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fa(t),i.updater=Io,t.stateNode=i,i._reactInternals=t,Ll(t,r,e,n),t=Il(null,t,r,!0,o,n)):(t.tag=0,B&&o&&La(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qg(r),e=je(r,e),i){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Ml(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Pd(e,t,r,i,n);case 3:e:{if(Cf(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kh(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bn(Error(y(423)),t),t=Td(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(y(424)),t),t=Td(e,t,r,n,i);break e}else for(Pe=Ct(t.stateNode.containerInfo.firstChild),Te=t,B=!0,Ve=null,n=Gh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=dt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Xh(t),e===null&&Tl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,El(r,i)?s=null:o!==null&&El(r,o)&&(t.flags|=32),bf(e,t),me(e,t,s,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Ef(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),kd(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$(ao,r._currentValue),r._currentValue=s,o!==null)if(Ye(o.value,s)){if(o.children===i.children&&!be.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=st(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ol(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ol(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=De(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=je(r,t.pendingProps),i=je(r.type,i),Ad(e,t,r,i,n);case 15:return wf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Ui(e,t),t.tag=1,Ce(r)?(e=!0,oo(t)):e=!1,Tn(t,n),Qh(t,r,i),Ll(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return xf(e,t,n)}throw Error(y(156,t.tag))};function Uf(e,t){return hh(e,t)}function Yg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Yg(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===xa)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")tu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case pn:return Qt(n.children,i,o,t);case ya:s=8,i|=8;break;case nl:return e=Ie(12,n,t,i|2),e.elementType=nl,e.lanes=o,e;case rl:return e=Ie(13,n,t,i),e.elementType=rl,e.lanes=o,e;case il:return e=Ie(19,n,t,i),e.elementType=il,e.lanes=o,e;case qc:return Fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yc:s=10;break e;case Qc:s=9;break e;case wa:s=11;break e;case xa:s=14;break e;case ft:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ie(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Qt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=qc,e.lanes=n,e.stateNode={isHidden:!1},e}function Os(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Ns(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,o,s,l,a){return e=new qg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(o),e}function Gg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jf(e){if(!e)return Nt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Bh(e,n,t)}return t}function Hf(e,t,n,r,i,o,s,l,a){return e=nu(n,r,!0,e,i,o,s,l,a),e.context=jf(null),n=e.current,r=ve(),i=kt(n),o=st(r,i),o.callback=t??null,Et(n,o,i),e.current.lanes=i,ri(e,i,r),Ee(e,r),e}function Bo(e,t,n,r){var i=t.current,o=ve(),s=kt(i);return n=jf(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(i,t,s),e!==null&&(Ke(e,i,s,o),Di(e,i,s)),s}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function Xg(){return null}var Vf=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}Uo.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Bo(e,t,null,null)};Uo.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){Bo(null,e,null,null)}),t[at]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&xh(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function Jg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=yo(s);o.call(u)}}var s=Hf(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=s,e[at]=s.current,Ur(e.nodeType===8?e.parentNode:e),tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=yo(a);l.call(u)}}var a=nu(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=a,e[at]=a.current,Ur(e.nodeType===8?e.parentNode:e),tn(function(){Bo(t,a,n,r)}),a}function Ho(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=yo(s);l.call(a)}}Bo(t,s,e,i)}else s=Jg(n,t,e,i,r);return yo(s)}gh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Ea(t,n|1),Ee(t,Q()),!(M&6)&&(Un=Q()+500,Mt()))}break;case 13:tn(function(){var r=ut(e,1);if(r!==null){var i=ve();Ke(r,e,1,i)}}),ru(e,1)}};Sa=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ve();Ke(t,e,134217728,n)}ru(e,134217728)}};_h=function(e){if(e.tag===13){var t=kt(e),n=ut(e,t);if(n!==null){var r=ve();Ke(n,e,t,r)}ru(e,t)}};yh=function(){return R};wh=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};pl=function(e,t,n){switch(t){case"input":if(ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zo(r);if(!i)throw Error(y(90));Xc(r),ll(r,i)}}}break;case"textarea":Zc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};sh=Ja;lh=tn;var Zg={usingClientEntryPoint:!1,Events:[oi,_n,zo,ih,oh,Ja]},ar={findFiberByHostInstance:Ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e_={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dh(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{To=Ai.inject(e_),Xe=Ai}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(y(200));return Gg(e,t,null,n)};Ne.createRoot=function(e,t){if(!ou(e))throw Error(y(299));var n=!1,r="",i=Vf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Ur(e.nodeType===8?e.parentNode:e),new iu(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=dh(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return tn(e)};Ne.hydrate=function(e,t,n){if(!jo(t))throw Error(y(200));return Ho(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Vf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hf(t,null,e,1,n??null,i,!1,o,s),e[at]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};Ne.render=function(e,t,n){if(!jo(t))throw Error(y(200));return Ho(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!jo(e))throw Error(y(40));return e._reactRootContainer?(tn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ja;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ho(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function Wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)}catch(e){console.error(e)}}Wf(),jc.exports=Ne;var Yl=jc.exports,Ud=Yl;el.createRoot=Ud.createRoot,el.hydrateRoot=Ud.hydrateRoot;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Z(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.3.7"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class t_ extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Z(t_);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=globalThis,su=Wi.ShadowRoot&&(Wi.ShadyCSS===void 0||Wi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lu=Symbol(),jd=new WeakMap;let au=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==lu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(su&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=jd.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&jd.set(n,t))}return t}toString(){return this.cssText}};const n_=e=>new au(typeof e=="string"?e:e+"",void 0,lu),T=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new au(n,e,lu)},r_=(e,t)=>{if(su)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Wi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Hd=su?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return n_(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i_,defineProperty:o_,getOwnPropertyDescriptor:s_,getOwnPropertyNames:l_,getOwnPropertySymbols:a_,getPrototypeOf:u_}=Object,Pt=globalThis,Vd=Pt.trustedTypes,d_=Vd?Vd.emptyScript:"",Ls=Pt.reactiveElementPolyfillSupport,Tr=(e,t)=>e,Ql={toAttribute(e,t){switch(t){case Boolean:e=e?d_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Kf=(e,t)=>!i_(e,t),Wd={attribute:!0,type:String,converter:Ql,reflect:!1,hasChanged:Kf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Pt.litPropertyMetadata??(Pt.litPropertyMetadata=new WeakMap);let hn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Wd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&o_(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=s_(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wd}static _$Ei(){if(this.hasOwnProperty(Tr("elementProperties")))return;const t=u_(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr("properties"))){const n=this.properties,r=[...l_(n),...a_(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Hd(i))}else t!==void 0&&n.push(Hd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r_(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Ql).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Ql;this._$Em=i,this[i]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Kf)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};hn.elementStyles=[],hn.shadowRootOptions={mode:"open"},hn[Tr("elementProperties")]=new Map,hn[Tr("finalized")]=new Map,Ls==null||Ls({ReactiveElement:hn}),(Pt.reactiveElementVersions??(Pt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,wo=Or.trustedTypes,Kd=wo?wo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yf="$lit$",gt=`lit$${(Math.random()+"").slice(9)}$`,Qf="?"+gt,c_=`<${Qf}>`,nn=document,Gr=()=>nn.createComment(""),Xr=e=>e===null||typeof e!="object"&&typeof e!="function",qf=Array.isArray,h_=e=>qf(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",zs=`[ 	
\f\r]`,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yd=/-->/g,Qd=/>/g,Dt=RegExp(`>|${zs}(?:([^\\s"'>=/]+)(${zs}*=${zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qd=/'/g,Gd=/"/g,Gf=/^(?:script|style|textarea|title)$/i,jn=Symbol.for("lit-noChange"),ne=Symbol.for("lit-nothing"),Xd=new WeakMap,Vt=nn.createTreeWalker(nn,129);function Xf(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kd!==void 0?Kd.createHTML(t):t}const f_=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=ur;for(let l=0;l<n;l++){const a=e[l];let u,d,c=-1,p=0;for(;p<a.length&&(s.lastIndex=p,d=s.exec(a),d!==null);)p=s.lastIndex,s===ur?d[1]==="!--"?s=Yd:d[1]!==void 0?s=Qd:d[2]!==void 0?(Gf.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Dt):d[3]!==void 0&&(s=Dt):s===Dt?d[0]===">"?(s=i??ur,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?Dt:d[3]==='"'?Gd:qd):s===Gd||s===qd?s=Dt:s===Yd||s===Qd?s=ur:(s=Dt,i=void 0);const v=s===Dt&&e[l+1].startsWith("/>")?" ":"";o+=s===ur?a+c_:c>=0?(r.push(u),a.slice(0,c)+Yf+a.slice(c)+gt+v):a+gt+(c===-2?l:v)}return[Xf(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Jr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[u,d]=f_(t,n);if(this.el=Jr.createElement(u,r),Vt.currentNode=this.el.content,n===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Vt.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Yf)){const p=d[s++],v=i.getAttribute(c).split(gt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:g[2],strings:v,ctor:g[1]==="."?m_:g[1]==="?"?v_:g[1]==="@"?g_:Vo}),i.removeAttribute(c)}else c.startsWith(gt)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(Gf.test(i.tagName)){const c=i.textContent.split(gt),p=c.length-1;if(p>0){i.textContent=wo?wo.emptyScript:"";for(let v=0;v<p;v++)i.append(c[v],Gr()),Vt.nextNode(),a.push({type:2,index:++o});i.append(c[p],Gr())}}}else if(i.nodeType===8)if(i.data===Qf)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(gt,c+1))!==-1;)a.push({type:7,index:o}),c+=gt.length-1}o++}}static createElement(t,n){const r=nn.createElement("template");return r.innerHTML=t,r}}function Hn(e,t,n=e,r){var s,l;if(t===jn)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Xr(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Hn(e,i._$AS(e,t.values),i,r)),t}let p_=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??nn).importNode(n,!0);Vt.currentNode=i;let o=Vt.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new uu(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new __(o,this,t)),this._$AV.push(u),a=r[++l]}s!==(a==null?void 0:a.index)&&(o=Vt.nextNode(),s++)}return Vt.currentNode=nn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},uu=class Jf{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=ne,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Hn(this,t,n),Xr(t)?t===ne||t==null||t===""?(this._$AH!==ne&&this._$AR(),this._$AH=ne):t!==this._$AH&&t!==jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):h_(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ne&&Xr(this._$AH)?this._$AA.nextSibling.data=t:this.T(nn.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Jr.createElement(Xf(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new p_(i,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(t){let n=Xd.get(t.strings);return n===void 0&&Xd.set(t.strings,n=new Jr(t)),n}k(t){qf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Jf(this.S(Gr()),this.S(Gr()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Vo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=ne,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ne}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Hn(this,t,n,0),s=!Xr(t)||t!==this._$AH&&t!==jn,s&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=Hn(this,l[r+a],n,a),u===jn&&(u=this._$AH[a]),s||(s=!Xr(u)||u!==this._$AH[a]),u===ne?t=ne:t!==ne&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(t)}j(t){t===ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},m_=class extends Vo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ne?void 0:t}};class v_ extends Vo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ne)}}let g_=class extends Vo{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Hn(this,t,n,0)??ne)===jn)return;const r=this._$AH,i=t===ne&&r!==ne||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==ne&&(r===ne||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class __{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Hn(this,t)}}const Ms=Or.litHtmlPolyfillSupport;Ms==null||Ms(Jr,uu),(Or.litHtmlVersions??(Or.litHtmlVersions=[])).push("3.1.2");const y_=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new uu(t.insertBefore(Gr(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ki=class extends hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=y_(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return jn}};var Tc;Ki._$litElement$=!0,Ki.finalized=!0,(Tc=globalThis.litElementHydrateSupport)==null||Tc.call(globalThis,{LitElement:Ki});const Is=globalThis.litElementPolyfillSupport;Is==null||Is({LitElement:Ki});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const du=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,i){super.attributeChangedCallback(n,r,i),n==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zf=[];function ep(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function w_(e){return ep(customElements.get(e))}function x_(e=[]){return[e].flat(1/0).filter(t=>t instanceof au?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function z(e,t,n={}){e&&w_(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=x_(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):Zf.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId})}function ql(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Zf}function b_(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function C_(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function tp(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=ql().find(i=>i.moduleId===n);r?t.push(...tp(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function E_(e,t){const n=document.createElement("style");n.innerHTML=e.map(r=>r.cssText).join(`
`),t.content.appendChild(n)}function S_(e){const t=`${e}-default-theme`,n=ql().filter(r=>r.moduleId!==t&&b_(r.themeFor,e)).map(r=>({...r,styles:[...tp(r),...r.styles],includePriority:C_(r.moduleId)})).sort((r,i)=>i.includePriority-r.includePriority);return n.length>0?n:ql().filter(r=>r.moduleId===t)}const Se=e=>class extends du(e){static finalize(){if(super.finalize(),this.elementStyles)return;const n=this.prototype._template;!n||ep(this)||E_(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...super.finalizeStyles(n),...r]:r}static getStylesForThis(){const n=Object.getPrototypeOf(this.prototype),r=(n?n.constructor.__themes:[])||[];this.__themes=[...r,...S_(this.is)];const i=this.__themes.flatMap(o=>o.styles);return i.filter((o,s)=>s===i.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k_=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},Xn=(e,...t)=>{k_(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const A_=T`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Xn("color-props",A_);const P_=T`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;z("",P_,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T_=T`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Xn("sizing-props",T_);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const O_=T`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Xn("spacing-props",O_);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N_=T`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;T`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Xn("style-props",N_);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L_=T`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,z_=T`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;z("",z_,{moduleId:"lumo-typography"});Xn("typography-props",L_);const np=T`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;z("vaadin-button",np,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let M_=/(url\()([^)]*)(\))/g,I_=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Pi,ke;function Nr(e,t){if(e&&I_.test(e)||e==="//")return e;if(Pi===void 0){Pi=!1;try{const n=new URL("b","http://a");n.pathname="c%20d",Pi=n.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Pi)try{return new URL(e,t).href}catch{return e}return ke||(ke=document.implementation.createHTMLDocument("temp"),ke.base=ke.createElement("base"),ke.head.appendChild(ke.base),ke.anchor=ke.createElement("a"),ke.body.appendChild(ke.anchor)),ke.base.href=t,ke.anchor.href=e,ke.anchor.href||e}function cu(e,t){return e.replace(M_,function(n,r,i,o){return r+"'"+Nr(i.replace(/["']/g,""),t)+"'"+o})}function hu(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const R_=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const $_=R_&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let D_=window.Polymer&&window.Polymer.rootPath||hu(document.baseURI||window.location.href),xo=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Gl=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,F_=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,B_=window.Polymer&&window.Polymer.legacyOptimizations||!1,U_=window.Polymer&&window.Polymer.legacyWarnings||!1,j_=window.Polymer&&window.Polymer.syncInitialRender||!1,Xl=window.Polymer&&window.Polymer.legacyUndefined||!1,H_=window.Polymer&&window.Polymer.orderedComputed||!1,Jd=window.Polymer&&window.Polymer.removeNestedTemplates||!1,V_=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let W_=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let K_=0;const ie=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=K_++;function r(i){let o=i.__mixinSet;if(o&&o[n])return i;let s=t,l=s.get(i);if(!l){l=e(i),s.set(i,l);let a=Object.create(l.__mixinSet||o||null);a[n]=!0,l.__mixinSet=a}return l}return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fu={},rp={};function Zd(e,t){fu[e]=rp[e.toLowerCase()]=t}function ec(e){return fu[e]||rp[e.toLowerCase()]}function Y_(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Zr extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,n){if(t){let r=ec(t);return r&&n?r.querySelector(n):r}return null}attributeChangedCallback(t,n,r,i){n!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=Nr(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=hu(n)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Gl&&ec(t)!==void 0)throw Zd(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Zd(t,this),Y_(this)}}}Zr.prototype.modules=fu;customElements.define("dom-module",Zr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Q_="link[rel=import][type~=css]",q_="include",tc="shady-unscoped";function ip(e){return Zr.import(e)}function nc(e){let t=e.body?e.body:e;const n=cu(t.textContent,e.baseURI),r=document.createElement("style");return r.textContent=n,r}function G_(e){const t=e.trim().split(/\s+/),n=[];for(let r=0;r<t.length;r++)n.push(...X_(t[r]));return n}function X_(e){const t=ip(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const n=[];n.push(...sp(t));const r=t.querySelector("template");r&&n.push(...op(r,t.assetpath)),t._styles=n}return t._styles}function op(e,t){if(!e._styles){const n=[],r=e.content.querySelectorAll("style");for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute(q_);s&&n.push(...G_(s).filter(function(l,a,u){return u.indexOf(l)===a})),t&&(o.textContent=cu(o.textContent,t)),n.push(o)}e._styles=n}return e._styles}function J_(e){let t=ip(e);return t?sp(t):[]}function sp(e){const t=[],n=e.querySelectorAll(Q_);for(let r=0;r<n.length;r++){let i=n[r];if(i.import){const o=i.import,s=i.hasAttribute(tc);if(s&&!o._unscopedStyle){const l=nc(o);l.setAttribute(tc,""),o._unscopedStyle=l}else o._style||(o._style=nc(o));t.push(s?o._unscopedStyle:o._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Jl(e){return e.indexOf(".")>=0}function ln(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Z_(e,t){return e.indexOf(t+".")===0}function bo(e,t){return t.indexOf(e+".")===0}function Co(e,t,n){return t+n.slice(e.length)}function _r(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(".");for(let i=0;i<r.length;i++)t.push(r[i])}return t.join(".")}else return e}function lp(e){return Array.isArray(e)?_r(e).split("."):e.toString().split(".")}function ye(e,t,n){let r=e,i=lp(t);for(let o=0;o<i.length;o++){if(!r)return;let s=i[o];r=r[s]}return n&&(n.path=i.join(".")),r}function rc(e,t,n){let r=e,i=lp(t),o=i[i.length-1];if(i.length>1){for(let s=0;s<i.length-1;s++){let l=i[s];if(r=r[l],!r)return}r[o]=n}else r[t]=n;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eo={},ey=/-[a-z]/g,ty=/([A-Z])/g;function ap(e){return Eo[e]||(Eo[e]=e.indexOf("-")<0?e:e.replace(ey,t=>t[1].toUpperCase()))}function Wo(e){return Eo[e]||(Eo[e]=e.replace(ty,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ny=0,up=0,Nn=[],ry=0,Zl=!1,dp=document.createTextNode("");new window.MutationObserver(iy).observe(dp,{characterData:!0});function iy(){Zl=!1;const e=Nn.length;for(let t=0;t<e;t++){let n=Nn[t];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}Nn.splice(0,e),up+=e}const oy={run(e){return Zl||(Zl=!0,dp.textContent=ry++),Nn.push(e),ny++},cancel(e){const t=e-up;if(t>=0){if(!Nn[t])throw new Error("invalid async handle: "+e);Nn[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sy=oy,cp=ie(e=>{class t extends e{static createProperties(r){const i=this.prototype;for(let o in r)o in i||i._createPropertyAccessor(o)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,i){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,i))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[r];return i||(i=this.constructor.attributeNameForProperty(r),this.__dataAttributes[i]=r),i}_definePropertyAccessor(r,i){Object.defineProperty(this,r,{get(){return this.__data[r]},set:i?function(){}:function(o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,i){this._setPendingProperty(r,i)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,i,o){let s=this.__data[r],l=this._shouldPropertyChange(r,i,s);return l&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=s),this.__data[r]=i,this.__dataPending[r]=i),l}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,sy.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,i=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(r,i,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,i,o)),this.__dataCounter--}_shouldPropertiesChange(r,i,o){return!!i}_propertiesChanged(r,i,o){}_shouldPropertyChange(r,i,o){return o!==i&&(o===o||i===i)}attributeChangedCallback(r,i,o,s){i!==o&&this._attributeToProperty(r,o),super.attributeChangedCallback&&super.attributeChangedCallback(r,i,o,s)}_attributeToProperty(r,i,o){if(!this.__serializing){const s=this.__dataAttributes,l=s&&s[r]||r;this[l]=this._deserializeValue(i,o||this.constructor.typeForProperty(l))}}_propertyToAttribute(r,i,o){this.__serializing=!0,o=arguments.length<3?this[r]:o,this._valueToNodeAttribute(this,o,i||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,i,o){const s=this._serializeValue(i);(o==="class"||o==="name"||o==="slot")&&(r=qt(r)),s===void 0?r.removeAttribute(o):r.setAttribute(o,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r!=null?r.toString():void 0}}_deserializeValue(r,i){switch(i){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hp={};let Ti=HTMLElement.prototype;for(;Ti;){let e=Object.getOwnPropertyNames(Ti);for(let t=0;t<e.length;t++)hp[e[t]]=!0;Ti=Object.getPrototypeOf(Ti)}const ly=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function ay(e,t){if(!hp[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}const uy=ie(e=>{const t=cp(e);class n extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let o=0;o<i.length;o++)this.prototype._createPropertyAccessor(ap(i[o]))}static attributeNameForProperty(i){return Wo(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let o in i)this._setProperty(o,i[o])}_ensureAttribute(i,o){const s=this;s.hasAttribute(i)||this._valueToNodeAttribute(s,o,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(ly(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,o){let s;switch(o){case Object:try{s=JSON.parse(i)}catch{s=i}break;case Array:try{s=JSON.parse(i)}catch{s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:s=isNaN(i)?String(i):Number(i),s=new Date(s);break;default:s=super._deserializeValue(i,o);break}return s}_definePropertyAccessor(i,o){ay(this,i),super._definePropertyAccessor(i,o)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dy={"dom-if":!0,"dom-repeat":!0};let ic=!1,oc=!1;function cy(){if(!ic){ic=!0;const e=document.createElement("textarea");e.placeholder="a",oc=e.placeholder===e.textContent}return oc}function hy(e){cy()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const fy=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,n,r)=>{const i=n.getAttribute(r);if(e&&r.startsWith("on-")){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})();function py(e){let t=e.getAttribute("is");if(t&&dy[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){const{name:r}=n.attributes[0];fy(e,n,r),n.removeAttribute(r)}}return e}function fp(e,t){let n=t.parentInfo&&fp(e,t.parentInfo);if(n){for(let r=n.firstChild,i=0;r;r=r.nextSibling)if(t.parentIndex===i++)return r}else return e}function my(e,t,n,r){r.id&&(t[r.id]=n)}function vy(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,o;r<i.length&&(o=i[r]);r++)e._addMethodEventListenerToNode(t,o.name,o.value,e)}function gy(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function _y(e,t,n){return e=e._methodHost||e,function(i){e[n]?e[n](i,i.detail):console.warn("listener method `"+n+"` not defined")}}const yy=ie(e=>{class t extends e{static _parseTemplate(r,i){if(!r._templateInfo){let o=r._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!i,o.stripWhiteSpace=i&&i.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,o,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,i,o){return this._parseTemplateNode(r.content,i,o)}static _parseTemplateNode(r,i,o){let s=!1,l=r;return l.localName=="template"&&!l.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(l,i,o)||s:l.localName==="slot"&&(i.hasInsertionPoint=!0),hy(l),l.firstChild&&this._parseTemplateChildNodes(l,i,o),l.hasAttributes&&l.hasAttributes()&&(s=this._parseTemplateNodeAttributes(l,i,o)||s),s||o.noted}static _parseTemplateChildNodes(r,i,o){if(!(r.localName==="script"||r.localName==="style"))for(let s=r.firstChild,l=0,a;s;s=a){if(s.localName=="template"&&(s=py(s)),a=s.nextSibling,s.nodeType===Node.TEXT_NODE){let d=a;for(;d&&d.nodeType===Node.TEXT_NODE;)s.textContent+=d.textContent,a=d.nextSibling,r.removeChild(d),d=a;if(i.stripWhiteSpace&&!s.textContent.trim()){r.removeChild(s);continue}}let u={parentIndex:l,parentInfo:o};this._parseTemplateNode(s,i,u)&&(u.infoIndex=i.nodeInfoList.push(u)-1),s.parentNode&&l++}}static _parseTemplateNestedTemplate(r,i,o){let s=r,l=this._parseTemplate(s,i);return(l.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),o.templateInfo=l,!0}static _parseTemplateNodeAttributes(r,i,o){let s=!1,l=Array.from(r.attributes);for(let a=l.length-1,u;u=l[a];a--)s=this._parseTemplateNodeAttribute(r,i,o,u.name,u.value)||s;return s}static _parseTemplateNodeAttribute(r,i,o,s,l){return s.slice(0,3)==="on-"?(r.removeAttribute(s),o.events=o.events||[],o.events.push({name:s.slice(3),value:l}),!0):s==="id"?(o.id=l,!0):!1}static _contentForTemplate(r){let i=r._templateInfo;return i&&i.content||r.content}_stampTemplate(r,i){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),i=i||this.constructor._parseTemplate(r);let o=i.nodeInfoList,s=i.content||r.content,l=document.importNode(s,!0);l.__noInsertionPoint=!i.hasInsertionPoint;let a=l.nodeList=new Array(o.length);l.$={};for(let u=0,d=o.length,c;u<d&&(c=o[u]);u++){let p=a[u]=fp(l,c);my(this,l.$,p,c),gy(this,p,c,i),vy(this,p,c)}return l=l,l}_addMethodEventListenerToNode(r,i,o,s){s=s||r;let l=_y(s,i,o);return this._addEventListenerToNode(r,i,l),l}_addEventListenerToNode(r,i,o){r.addEventListener(i,o)}_removeEventListenerFromNode(r,i,o){r.removeEventListener(i,o)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ei=0;const ti=[],I={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},pp="__computeInfo",wy=/[A-Z]/;function Rs(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let i in r){let o=r[i],s=r[i]=Array(o.length);for(let l=0;l<o.length;l++)s[l]=o[l]}return r}function yr(e,t,n,r,i,o){if(t){let s=!1;const l=ei++;for(let a in n){let u=i?ln(a):a,d=t[u];if(d)for(let c=0,p=d.length,v;c<p&&(v=d[c]);c++)(!v.info||v.info.lastRun!==l)&&(!i||pu(a,v.trigger))&&(v.info&&(v.info.lastRun=l),v.fn(e,a,n,r,v.info,i,o),s=!0)}return s}return!1}function xy(e,t,n,r,i,o,s,l){let a=!1,u=s?ln(r):r,d=t[u];if(d)for(let c=0,p=d.length,v;c<p&&(v=d[c]);c++)(!v.info||v.info.lastRun!==n)&&(!s||pu(r,v.trigger))&&(v.info&&(v.info.lastRun=n),v.fn(e,r,i,o,v.info,s,l),a=!0);return a}function pu(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&Z_(n,e))||!!(t.wildcard&&bo(n,e))}else return!0}function sc(e,t,n,r,i){let o=typeof i.method=="string"?e[i.method]:i.method,s=i.property;o?o.call(e,e.__data[s],r[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function by(e,t,n,r,i){let o=e[I.NOTIFY],s,l=ei++;for(let u in t)t[u]&&(o&&xy(e,o,l,u,n,r,i)||i&&Cy(e,u,n))&&(s=!0);let a;s&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}function Cy(e,t,n){let r=ln(t);if(r!==t){let i=Wo(r)+"-changed";return mp(e,i,n[t],t),!0}return!1}function mp(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),qt(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Ey(e,t,n,r,i,o){let l=(o?ln(t):t)!=t?t:null,a=l?ye(e,l):e.__data[t];l&&a===void 0&&(a=n[t]),mp(e,i.eventName,a,l)}function Sy(e,t,n,r,i){let o,s=e.detail,l=s&&s.path;l?(r=Co(n,r,l),o=s&&s.value):o=e.currentTarget[n],o=i?!o:o,(!t[I.READ_ONLY]||!t[I.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,o,!0,!!l)&&(!s||!s.queueProperty)&&t._invalidateProperties()}function ky(e,t,n,r,i){let o=e.__data[t];xo&&(o=xo(o,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,o)}function Ay(e,t,n,r){let i=e[I.COMPUTE];if(i)if(H_){ei++;const o=Ty(e),s=[];for(let a in t)lc(a,i,s,o,r);let l;for(;l=s.shift();)vp(e,"",t,n,l)&&lc(l.methodInfo,i,s,o,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;yr(e,i,o,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const Py=(e,t,n)=>{let r=0,i=t.length-1,o=-1;for(;r<=i;){const s=r+i>>1,l=n.get(t[s].methodInfo)-n.get(e.methodInfo);if(l<0)r=s+1;else if(l>0)i=s-1;else{o=s;break}}o<0&&(o=i+1),t.splice(o,0,e)},lc=(e,t,n,r,i)=>{const o=i?ln(e):e,s=t[o];if(s)for(let l=0;l<s.length;l++){const a=s[l];a.info.lastRun!==ei&&(!i||pu(e,a.trigger))&&(a.info.lastRun=ei,Py(a.info,n,r))}};function Ty(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const n=e[I.COMPUTE];let{counts:r,ready:i,total:o}=Oy(e),s;for(;s=i.shift();){t.set(s,t.size);const l=n[s];l&&l.forEach(a=>{const u=a.info.methodInfo;--o,--r[u]===0&&i.push(u)})}o!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Oy(e){const t=e[pp],n={},r=e[I.COMPUTE],i=[];let o=0;for(let s in t){const l=t[s];o+=n[s]=l.args.filter(a=>!a.literal).length+(l.dynamicFn?1:0)}for(let s in r)t[s]||i.push(s);return{counts:n,ready:i,total:o}}function vp(e,t,n,r,i){let o=ea(e,t,n,r,i);if(o===ti)return!1;let s=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):(e[s]=o,!1)}function Ny(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let o in r){let s=r[o];bo(o,t)?(i=Co(o,s,t),e._setPendingPropertyOrPath(i,n,!0,!0)):bo(s,t)&&(i=Co(s,o,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function $s(e,t,n,r,i,o,s){n.bindings=n.bindings||[];let l={kind:r,target:i,parts:o,literal:s,isCompound:o.length!==1};if(n.bindings.push(l),Ry(l)){let{event:u,negate:d}=l.parts[0];l.listenerEvent=u||Wo(i)+"-changed",l.listenerNegate=d}let a=t.nodeInfoList.length;for(let u=0;u<l.parts.length;u++){let d=l.parts[u];d.compoundIndex=u,Ly(e,t,l,d,a)}}function Ly(e,t,n,r,i){if(!r.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,s={index:i,binding:n,part:r,evaluator:e};for(let l=0;l<o.length;l++){let a=o[l];typeof a=="string"&&(a=_p(a),a.wildcard=!0),e._addTemplatePropertyEffect(t,a.rootProperty,{fn:zy,info:s,trigger:a})}}}function zy(e,t,n,r,i,o,s){let l=s[i.index],a=i.binding,u=i.part;if(o&&u.source&&t.length>u.source.length&&a.kind=="property"&&!a.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[a.target]){let d=n[t];t=Co(u.source,a.target,t),l._setPendingPropertyOrPath(t,d,!1,!0)&&e._enqueueClient(l)}else{let d=i.evaluator._evaluateBinding(e,u,t,n,r,o);d!==ti&&My(e,l,a,u,d)}}function My(e,t,n,r,i){if(i=Iy(t,i,n,r),xo&&(i=xo(i,n.target,n.kind,t)),n.kind=="attribute")e._valueToNodeAttribute(t,i,n.target);else{let o=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[I.READ_ONLY]||!t[I.READ_ONLY][o])&&t._setPendingProperty(o,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,i)}}function Iy(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Ry(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function $y(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let i=0;i<r.length;i++){let o=r[i],s=n[i],l=o.bindings;if(l)for(let a=0;a<l.length;a++){let u=l[a];Dy(s,u),Fy(s,e,u)}s.__dataHost=e}}function Dy(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=new Array(r.length);for(let s=0;s<r.length;s++)i[s]=r[s].literal;let o=t.target;n[o]=i,t.literal&&t.kind=="property"&&(o==="className"&&(e=qt(e)),e[o]=t.literal)}}function Fy(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(i){Sy(i,t,n.target,r.source,r.negate)})}}function ac(e,t,n,r,i,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:o};for(let l=0,a;l<t.args.length&&(a=t.args[l]);l++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:s,trigger:a});return o&&e._addPropertyEffect(t.methodName,n,{fn:r,info:s}),s}function ea(e,t,n,r,i){let o=e._methodHost||e,s=o[i.methodName];if(s){let l=e._marshalArgs(i.args,t,n);return l===ti?ti:s.apply(o,l)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const By=[],gp="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Uy="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",jy="(?:'(?:[^'\\\\]|\\\\.)*')",Hy='(?:"(?:[^"\\\\]|\\\\.)*")',Vy="(?:"+jy+"|"+Hy+")",uc="(?:("+gp+"|"+Uy+"|"+Vy+")\\s*)",Wy="(?:"+uc+"(?:,\\s*"+uc+")*)",Ky="(?:\\(\\s*(?:"+Wy+"?)\\)\\s*)",Yy="("+gp+"\\s*"+Ky+"?)",Qy="(\\[\\[|{{)\\s*",qy="(?:]]|}})",Gy="(?:(!)\\s*)?",Xy=Qy+Gy+Yy+qy,dc=new RegExp(Xy,"g");function cc(e){let t="";for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||""}return t}function Ds(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:By};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return Jy(i,r)}else return r}return null}function Jy(e,t){return t.args=e.map(function(n){let r=_p(n);return r.literal||(t.static=!1),r},this),t}function _p(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},r=t[0];switch(r==="-"&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=ln(t),n.structured=Jl(t),n.structured&&(n.wildcard=t.slice(-2)==".*",n.wildcard&&(n.name=t.slice(0,-2)))),n}function hc(e,t,n){let r=ye(e,n);return r===void 0&&(r=t[n]),r}function yp(e,t,n,r){const i={indexSplices:r};Xl&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+".splices",i),e.notifyPath(n+".length",t.length),Xl&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function dr(e,t,n,r,i,o){yp(e,t,n,[{index:r,addedCount:i,removed:o,object:t,type:"splice"}])}function Zy(e){return e[0].toUpperCase()+e.substring(1)}const e0=ie(e=>{const t=yy(uy(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return I}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(cr.length){let i=cr[cr.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let o=this[I.READ_ONLY];for(let s in i)(!o||!o[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=i[s])}_addPropertyEffect(i,o,s){this._createPropertyAccessor(i,o==I.READ_ONLY);let l=Rs(this,o,!0)[i];l||(l=this[o][i]=[]),l.push(s)}_removePropertyEffect(i,o,s){let l=Rs(this,o,!0)[i],a=l.indexOf(s);a>=0&&l.splice(a,1)}_hasPropertyEffect(i,o){let s=this[o];return!!(s&&s[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,I.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,I.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,I.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,I.COMPUTE)}_setPendingPropertyOrPath(i,o,s,l){if(l||ln(Array.isArray(i)?i[0]:i)!==i){if(!l){let a=ye(this,i);if(i=rc(this,i,o),!i||!super._shouldPropertyChange(i,o,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,o,s))return Ny(this,i,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,o,s);this[i]=o}return!1}_setUnmanagedPropertyToNode(i,o,s){(s!==i[o]||typeof s=="object")&&(o==="className"&&(i=qt(i)),i[o]=s)}_setPendingProperty(i,o,s){let l=this.__dataHasPaths&&Jl(i),a=l?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,o,a[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),l?this.__dataTemp[i]=o:this.__data[i]=o,this.__dataPending[i]=o,(l||this[I.NOTIFY]&&this[I.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=s),!0):!1}_setProperty(i,o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let o=0;o<i.length;o++){let s=i[o];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,o){for(let s in i)(o||!this[I.READ_ONLY]||!this[I.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,i[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,o,s){let l=this.__dataHasPaths;this.__dataHasPaths=!1;let a;Ay(this,o,s,l),a=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,s,l),this._flushClients(),yr(this,this[I.REFLECT],o,s,l),yr(this,this[I.OBSERVE],o,s,l),a&&by(this,a,o,s,l),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,o,s){this[I.PROPAGATE]&&yr(this,this[I.PROPAGATE],i,o,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,o,s)}_runEffectsForTemplate(i,o,s,l){const a=(u,d)=>{yr(this,i.propertyEffects,u,s,d,i.nodeList);for(let c=i.firstChild;c;c=c.nextSibling)this._runEffectsForTemplate(c,u,s,d)};i.runEffects?i.runEffects(a,o,l):a(o,l)}linkPaths(i,o){i=_r(i),o=_r(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=o}unlinkPaths(i){i=_r(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,o){let s={path:""},l=ye(this,i,s);yp(this,l,s.path,o)}get(i,o){return ye(o||this,i)}set(i,o,s){s?rc(s,i,o):(!this[I.READ_ONLY]||!this[I.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,o,!0)&&this._invalidateProperties()}push(i,...o){let s={path:""},l=ye(this,i,s),a=l.length,u=l.push(...o);return o.length&&dr(this,l,s.path,a,o.length,[]),u}pop(i){let o={path:""},s=ye(this,i,o),l=!!s.length,a=s.pop();return l&&dr(this,s,o.path,s.length,0,[a]),a}splice(i,o,s,...l){let a={path:""},u=ye(this,i,a);o<0?o=u.length-Math.floor(-o):o&&(o=Math.floor(o));let d;return arguments.length===2?d=u.splice(o):d=u.splice(o,s,...l),(l.length||d.length)&&dr(this,u,a.path,o,l.length,d),d}shift(i){let o={path:""},s=ye(this,i,o),l=!!s.length,a=s.shift();return l&&dr(this,s,o.path,0,0,[a]),a}unshift(i,...o){let s={path:""},l=ye(this,i,s),a=l.unshift(...o);return o.length&&dr(this,l,s.path,0,o.length,[]),a}notifyPath(i,o){let s;if(arguments.length==1){let l={path:""};o=ye(this,i,l),s=l.path}else Array.isArray(i)?s=_r(i):s=i;this._setPendingPropertyOrPath(s,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,o){this._addPropertyEffect(i,I.READ_ONLY),o&&(this["_set"+Zy(i)]=function(s){this._setProperty(i,s)})}_createPropertyObserver(i,o,s){let l={property:i,method:o,dynamicFn:!!s};this._addPropertyEffect(i,I.OBSERVE,{fn:sc,info:l,trigger:{name:i}}),s&&this._addPropertyEffect(o,I.OBSERVE,{fn:sc,info:l,trigger:{name:o}})}_createMethodObserver(i,o){let s=Ds(i);if(!s)throw new Error("Malformed observer expression '"+i+"'");ac(this,s,I.OBSERVE,ea,null,o)}_createNotifyingProperty(i){this._addPropertyEffect(i,I.NOTIFY,{fn:Ey,info:{eventName:Wo(i)+"-changed",property:i}})}_createReflectedProperty(i){let o=this.constructor.attributeNameForProperty(i);o[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,I.REFLECT,{fn:ky,info:{attrName:o}})}_createComputedProperty(i,o,s){let l=Ds(o);if(!l)throw new Error("Malformed computed expression '"+o+"'");const a=ac(this,l,I.COMPUTE,vp,i,s);Rs(this,pp)[i]=a}_marshalArgs(i,o,s){const l=this.__data,a=[];for(let u=0,d=i.length;u<d;u++){let{name:c,structured:p,wildcard:v,value:g,literal:w}=i[u];if(!w)if(v){const A=bo(c,o),f=hc(l,s,A?o:c);g={path:A?o:c,value:f,base:A?ye(l,c):f}}else g=p?hc(l,s,c):l[c];if(Xl&&!this._overrideLegacyUndefined&&g===void 0&&i.length>1)return ti;a[u]=g}return a}static addPropertyEffect(i,o,s){this.prototype._addPropertyEffect(i,o,s)}static createPropertyObserver(i,o,s){this.prototype._createPropertyObserver(i,o,s)}static createMethodObserver(i,o){this.prototype._createMethodObserver(i,o)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,o){this.prototype._createReadOnlyProperty(i,o)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,o,s){this.prototype._createComputedProperty(i,o,s)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,o){let s=this.constructor._parseTemplate(i),l=this.__preBoundTemplateInfo==s;if(!l)for(let a in s.propertyEffects)this._createPropertyAccessor(a);if(o)if(s=Object.create(s),s.wasPreBound=l,!this.__templateInfo)this.__templateInfo=s;else{const a=i._parentTemplateInfo||this.__templateInfo,u=a.lastChild;s.parent=a,a.lastChild=s,s.previousSibling=u,u?u.nextSibling=s:a.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(i,o,s){let l=i.hostProps=i.hostProps||{};l[o]=!0;let a=i.propertyEffects=i.propertyEffects||{};(a[o]=a[o]||[]).push(s)}_stampTemplate(i,o){o=o||this._bindTemplate(i,!0),cr.push(this);let s=super._stampTemplate(i,o);if(cr.pop(),o.nodeList=s.nodeList,!o.wasPreBound){let l=o.childNodes=[];for(let a=s.firstChild;a;a=a.nextSibling)l.push(a)}return s.templateInfo=o,$y(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(i){const o=i.templateInfo,{previousSibling:s,nextSibling:l,parent:a}=o;s?s.nextSibling=l:a&&(a.firstChild=l),l?l.previousSibling=s:a&&(a.lastChild=s),o.nextSibling=o.previousSibling=null;let u=o.childNodes;for(let d=0;d<u.length;d++){let c=u[d];qt(qt(c).parentNode).removeChild(c)}}static _parseTemplateNode(i,o,s){let l=t._parseTemplateNode.call(this,i,o,s);if(i.nodeType===Node.TEXT_NODE){let a=this._parseBindings(i.textContent,o);a&&(i.textContent=cc(a)||" ",$s(this,o,s,"text","textContent",a),l=!0)}return l}static _parseTemplateNodeAttribute(i,o,s,l,a){let u=this._parseBindings(a,o);if(u){let d=l,c="property";wy.test(l)?c="attribute":l[l.length-1]=="$"&&(l=l.slice(0,-1),c="attribute");let p=cc(u);return p&&c=="attribute"&&(l=="class"&&i.hasAttribute("class")&&(p+=" "+i.getAttribute(l)),i.setAttribute(l,p)),c=="attribute"&&d=="disable-upgrade$"&&i.setAttribute(l,""),i.localName==="input"&&d==="value"&&i.setAttribute(d,""),i.removeAttribute(d),c==="property"&&(l=ap(l)),$s(this,o,s,c,l,u,p),!0}else return t._parseTemplateNodeAttribute.call(this,i,o,s,l,a)}static _parseTemplateNestedTemplate(i,o,s){let l=t._parseTemplateNestedTemplate.call(this,i,o,s);const a=i.parentNode,u=s.templateInfo,d=a.localName==="dom-if",c=a.localName==="dom-repeat";Jd&&(d||c)&&(a.removeChild(i),s=s.parentInfo,s.templateInfo=u,s.noted=!0,l=!1);let p=u.hostProps;if(V_&&d)p&&(o.hostProps=Object.assign(o.hostProps||{},p),Jd||(s.parentInfo.noted=!0));else{let v="{";for(let g in p){let w=[{mode:v,source:g,dependencies:[g],hostProp:!0}];$s(this,o,s,"property","_host_"+g,w)}}return l}static _parseBindings(i,o){let s=[],l=0,a;for(;(a=dc.exec(i))!==null;){a.index>l&&s.push({literal:i.slice(l,a.index)});let u=a[1][0],d=!!a[2],c=a[3].trim(),p=!1,v="",g=-1;u=="{"&&(g=c.indexOf("::"))>0&&(v=c.substring(g+2),c=c.substring(0,g),p=!0);let w=Ds(c),A=[];if(w){let{args:f,methodName:h}=w;for(let _=0;_<f.length;_++){let x=f[_];x.literal||A.push(x)}let m=o.dynamicFns;(m&&m[h]||w.static)&&(A.push(h),w.dynamicFn=!0)}else A.push(c);s.push({source:c,mode:u,negate:d,customEvent:p,signature:w,dependencies:A,event:v}),l=dc.lastIndex}if(l&&l<i.length){let u=i.substring(l);u&&s.push({literal:u})}return s.length?s:null}static _evaluateBinding(i,o,s,l,a,u){let d;return o.signature?d=ea(i,s,l,a,o.signature):s!=o.source?d=ye(i,o.source):u&&Jl(s)?d=ye(i,s):d=i.__data[s],o.negate&&(d=!d),d}}return n}),cr=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function t0(e){const t={};for(let n in e){const r=e[n];t[n]=typeof r=="function"?{type:r}:r}return t}const n0=ie(e=>{const t=cp(e);function n(o){const s=Object.getPrototypeOf(o);return s.prototype instanceof i?s:null}function r(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let s=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const l=o.properties;l&&(s=t0(l))}o.__ownProperties=s}return o.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const s=this._properties;this.__observedAttributes=s?Object.keys(s).map(l=>this.prototype._addPropertyToAttributeMap(l)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const s=n(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const s=r(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const s=n(this);this.__properties=Object.assign({},s&&s._properties,r(this))}return this.__properties}static typeForProperty(s){const l=this._properties[s];return l&&l.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const r0="3.5.1",fc=window.ShadyCSS&&window.ShadyCSS.cssBuild,i0=ie(e=>{const t=n0(e0(e));function n(a){if(!a.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",a))){a.__propertyDefaults=null;let u=a._properties;for(let d in u){let c=u[d];"value"in c&&(a.__propertyDefaults=a.__propertyDefaults||{},a.__propertyDefaults[d]=c)}}return a.__propertyDefaults}function r(a){return a.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",a))||(a.__ownObservers=a.hasOwnProperty(JSCompiler_renameProperty("observers",a))?a.observers:null),a.__ownObservers}function i(a,u,d,c){d.computed&&(d.readOnly=!0),d.computed&&(a._hasReadOnlyEffect(u)?console.warn(`Cannot redefine computed property '${u}'.`):a._createComputedProperty(u,d.computed,c)),d.readOnly&&!a._hasReadOnlyEffect(u)?a._createReadOnlyProperty(u,!d.computed):d.readOnly===!1&&a._hasReadOnlyEffect(u)&&console.warn(`Cannot make readOnly property '${u}' non-readOnly.`),d.reflectToAttribute&&!a._hasReflectEffect(u)?a._createReflectedProperty(u):d.reflectToAttribute===!1&&a._hasReflectEffect(u)&&console.warn(`Cannot make reflected property '${u}' non-reflected.`),d.notify&&!a._hasNotifyEffect(u)?a._createNotifyingProperty(u):d.notify===!1&&a._hasNotifyEffect(u)&&console.warn(`Cannot make notify property '${u}' non-notify.`),d.observer&&a._createPropertyObserver(u,d.observer,c[d.observer]),a._addPropertyToAttributeMap(u)}function o(a,u,d,c){if(!fc){const p=u.content.querySelectorAll("style"),v=op(u),g=J_(d),w=u.content.firstElementChild;for(let f=0;f<g.length;f++){let h=g[f];h.textContent=a._processStyleText(h.textContent,c),u.content.insertBefore(h,w)}let A=0;for(let f=0;f<v.length;f++){let h=v[f],m=p[A];m!==h?(h=h.cloneNode(!0),m.parentNode.insertBefore(h,m)):A++,h.textContent=a._processStyleText(h.textContent,c)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(u,d),W_&&fc&&$_){const p=u.content.querySelectorAll("style");if(p){let v="";Array.from(p).forEach(g=>{v+=g.textContent,g.parentNode.removeChild(g)}),a._styleSheet=new CSSStyleSheet,a._styleSheet.replaceSync(v)}}}function s(a){let u=null;if(a&&(!Gl||F_)&&(u=Zr.import(a,"template"),Gl&&!u))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${a}`);return u}class l extends t{static get polymerElementVersion(){return r0}static _finalizeClass(){t._finalizeClass.call(this);const u=r(this);u&&this.createObservers(u,this._properties),this._prepareTemplate()}static _prepareTemplate(){let u=this.template;u&&(typeof u=="string"?(console.error("template getter must return HTMLTemplateElement"),u=null):B_||(u=u.cloneNode(!0))),this.prototype._template=u}static createProperties(u){for(let d in u)i(this.prototype,d,u[d],u)}static createObservers(u,d){const c=this.prototype;for(let p=0;p<u.length;p++)c._createMethodObserver(u[p],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let u=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof u=="function"&&(u=u()),this._template=u!==void 0?u:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&s(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(u){this._template=u}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const u=this.importMeta;if(u)this._importPath=hu(u.url);else{const d=Zr.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=D_,this.importPath=this.constructor.importPath;let u=n(this.constructor);if(u)for(let d in u){let c=u[d];if(this._canApplyPropertyDefault(d)){let p=typeof c.value=="function"?c.value.call(this):c.value;this._hasAccessor(d)?this._setPendingProperty(d,p,!0):this[d]=p}}}_canApplyPropertyDefault(u){return!this.hasOwnProperty(u)}static _processStyleText(u,d){return cu(u,d)}static _finalizeTemplate(u){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const c=this.importPath,p=c?Nr(c):"";o(this,d,u,p),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(u){const d=qt(this);if(d.attachShadow)return u?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:u}),d.shadowRoot.appendChild(u),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),j_&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(u){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,u)}resolveUrl(u,d){return!d&&this.importPath&&(d=Nr(this.importPath)),Nr(u,d)}static _parseTemplateContent(u,d,c){return d.dynamicFns=d.dynamicFns||this._properties,t._parseTemplateContent.call(this,u,d,c)}static _addTemplatePropertyEffect(u,d,c){return U_&&!(d in this._properties)&&!(c.info.part.signature&&c.info.part.signature.static)&&!c.info.part.hostProp&&!u.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,u,d,c)}}return l});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pc=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class wp{constructor(t,n){bp(t,n);const r=n.reduce((i,o,s)=>i+xp(o)+t[s+1],t[0]);this.value=r.toString()}toString(){return this.value}}function xp(e){if(e instanceof wp)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function o0(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof wp)return xp(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const ae=function(t,...n){bp(t,n);const r=document.createElement("template");let i=n.reduce((o,s,l)=>o+o0(s)+t[l+1],t[0]);return pc&&(i=pc.createHTML(i)),r.innerHTML=i,r},bp=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fe=i0(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const It=ie(e=>typeof e.prototype.addController=="function"?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(n=>{n.hostConnected&&n.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(n=>{n.hostDisconnected&&n.hostDisconnected()})}addController(n){this.__controllers.add(n),this.$!==void 0&&this.isConnected&&n.hostConnected&&n.hostConnected()}removeController(n){this.__controllers.delete(n)}}),s0=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Yi=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function l0(){function e(){return!0}return Cp(e)}function a0(){try{return u0()?!0:d0()?Yi?!c0():!l0():!1}catch{return!1}}function u0(){return localStorage.getItem("vaadin.developmentmode.force")}function d0(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function c0(){return!!(Yi&&Object.keys(Yi).map(t=>Yi[t]).filter(t=>t.productionMode).length>0)}function Cp(e,t){if(typeof e!="function")return;const n=s0.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const mc=function(e,t){if(window.Vaadin.developmentMode)return Cp(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=a0());function h0(){}const f0=function(){if(typeof mc=="function")return mc(h0)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let vc=0,Ep=0;const Ln=[];let ta=!1;function p0(){ta=!1;const e=Ln.length;for(let t=0;t<e;t++){const n=Ln[t];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}Ln.splice(0,e),Ep+=e}const Sp={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},m0={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},v0={run(e){ta||(ta=!0,queueMicrotask(()=>p0())),Ln.push(e);const t=vc;return vc+=1,t},cancel(e){const t=e-Ep;if(t>=0){if(!Ln[t])throw new Error(`invalid async handle: ${e}`);Ln[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const na=new Set;class Vn{static debounce(t,n,r){return t instanceof Vn?t._cancelAsync():t=new Vn,t.setConfig(n,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,n){this._asyncModule=t,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,na.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),na.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function g0(e){na.add(e)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const et=[];function ra(e,t,n=e.getAttribute("dir")){t?e.setAttribute("dir",t):n!=null&&e.removeAttribute("dir")}function ia(){return document.documentElement.getAttribute("dir")}function _0(){const e=ia();et.forEach(t=>{ra(t,e)})}const y0=new MutationObserver(_0);y0.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ze=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:n=>n||"",toAttribute:n=>n===""?null:n}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),ra(this,ia(),null))}attributeChangedCallback(n,r,i){if(super.attributeChangedCallback(n,r,i),n!=="dir")return;const o=ia(),s=i===o&&et.indexOf(this)===-1,l=!i&&r&&et.indexOf(this)===-1;s||l?(this.__subscribe(),ra(this,o,i)):i!==o&&r===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=et.includes(this),this.__unsubscribe()}_valueToNodeAttribute(n,r,i){i==="dir"&&r===""&&!n.hasAttribute("dir")||super._valueToNodeAttribute(n,r,i)}_attributeToProperty(n,r,i){n==="dir"&&!r?this.dir="":super._attributeToProperty(n,r,i)}__subscribe(){et.includes(this)||et.push(this)}__unsubscribe(){et.includes(this)&&et.splice(et.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){f0()};let Fs;const gc=new Set,an=e=>class extends Ze(e){static finalize(){super.finalize();const{is:n}=this;n&&!gc.has(n)&&(window.Vaadin.registrations.push(this),gc.add(n),window.Vaadin.developmentModeCallback&&(Fs=Vn.debounce(Fs,m0,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),g0(Fs)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function w0(e){const t=[];for(;e;){if(e.nodeType===Node.DOCUMENT_NODE){t.push(e);break}if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(e),e=e.host;continue}if(e.assignedSlot){e=e.assignedSlot;continue}e=e.parentNode}return t}function kp(e){const t=[];let n;return e.localName==="slot"?n=e.assignedElements():(t.push(e),n=[...e.children]),n.forEach(r=>t.push(...kp(r))),t}function Ap(e,t){return t?t.closest(e)||Ap(e,t.getRootNode().host):null}function mu(e){return e?new Set(e.split(" ")):new Set}function Ko(e){return e?[...e].join(" "):""}function Pp(e,t,n){const r=mu(e.getAttribute(t));r.add(n),e.setAttribute(t,Ko(r))}function x0(e,t,n){const r=mu(e.getAttribute(t));if(r.delete(n),r.size===0){e.removeAttribute(t);return}e.setAttribute(t,Ko(r))}function b0(e){return e.nodeType===Node.TEXT_NODE&&e.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tp{constructor(t,n){this.slot=t,this.callback=n,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let n=[];const r=[],i=[];t.length&&(n=t.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,s)=>{const l=t.indexOf(o);l===-1?r.push(o):l!==s&&i.push(o)}),(n.length||r.length||i.length)&&this.callback({addedNodes:n,movedNodes:i,removedNodes:r}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let C0=0;function E0(){return C0++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li extends EventTarget{static generateId(t,n){return`${n||"default"}-${t.localName}-${E0()}`}constructor(t,n,r,i={}){super();const{initializer:o,multiple:s,observe:l,useUniqueId:a}=i;this.host=t,this.slotName=n,this.tagName=r,this.observe=typeof l=="boolean"?l:!0,this.multiple=typeof s=="boolean"?s:!1,this.slotInitializer=o,s&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(t,n))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const n=this.attachDefaultNode();n&&(this.nodes=[n],this.initNode(n))}else this.nodes=t,t.forEach(n=>{this.initAddedNode(n)})}attachDefaultNode(){const{host:t,slotName:n,tagName:r}=this;let i=this.defaultNode;return!i&&r&&(i=document.createElement(r),i instanceof Element&&(n!==""&&i.setAttribute("slot",n),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(n=>n.nodeType===Node.ELEMENT_NODE&&n.slot===t||n.nodeType===Node.TEXT_NODE&&n.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:n}=this;n&&n(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,n=t===""?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(n);this.__slotObserver=new Tp(r,({addedNodes:i,removedNodes:o})=>{const s=this.multiple?this.nodes:[this.node],l=i.filter(a=>!b0(a)&&!s.includes(a));o.length&&(this.nodes=s.filter(a=>!o.includes(a)),o.forEach(a=>{this.teardownNode(a)})),l&&l.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...s,...l].filter(a=>a!==this.defaultNode),l.forEach(a=>{this.initAddedNode(a)})):(this.node&&this.node.remove(),this.node=l[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yo extends li{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const n=this.node;n&&(n.ariaTarget=t)}setContext(t){this.context=t;const n=this.node;n&&(n.context=t)}setManual(t){this.manual=t;const n=this.node;n&&(n.manual=t)}setOpened(t){this.opened=t;const n=this.node;n&&(n.opened=t)}setPosition(t){this.position=t;const n=this.node;n&&(n._position=t)}setShouldShow(t){this.shouldShow=t;const n=this.node;n&&(n.shouldShow=t)}setTarget(t){this.target=t;const n=this.node;n&&(n.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S0=T`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,k0=e=>e`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A0=!1,P0=e=>e,vu=typeof document.head.style.touchAction=="string",So="__polymerGestures",Bs="__polymerGesturesHandled",oa="__polymerGesturesTouchAction",_c=25,yc=5,T0=2,O0=["mousedown","mousemove","mouseup","click"],N0=[0,1,4,2],L0=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function gu(e){return O0.indexOf(e)>-1}let Op=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){Op=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Np(e){if(!(gu(e)||e==="touchend")&&vu&&Op&&A0)return{passive:!0}}const z0=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),M0={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Gt(e){const t=e.type;if(!gu(t))return!1;if(t==="mousemove"){let r=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!L0&&(r=N0[e.which]||0),!!(r&1)}return(e.button===void 0?0:e.button)===0}function I0(e){if(e.type==="click"){if(e.detail===0)return!0;const t=Tt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const n=t.getBoundingClientRect(),r=e.pageX,i=e.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}const nt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function R0(e){let t="auto";const n=zp(e);for(let r=0,i;r<n.length;r++)if(i=n[r],i[oa]){t=i[oa];break}return t}function Lp(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function zn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const zp=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],rn={},Wt=[];function $0(e,t){let n=document.elementFromPoint(e,t),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const i=r;if(r=r.shadowRoot.elementFromPoint(e,t),i===r)break;r&&(n=r)}return n}function Tt(e){const t=zp(e);return t.length>0?t[0]:e.target}function Mp(e){const t=e.type,r=e.currentTarget[So];if(!r)return;const i=r[t];if(!i)return;if(!e[Bs]&&(e[Bs]={},t.startsWith("touch"))){const s=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(nt.touch.id=s.identifier),nt.touch.id!==s.identifier)return;vu||(t==="touchstart"||t==="touchmove")&&D0(e)}const o=e[Bs];if(!o.skip){for(let s=0,l;s<Wt.length;s++)l=Wt[s],i[l.name]&&!o[l.name]&&l.flow&&l.flow.start.indexOf(e.type)>-1&&l.reset&&l.reset();for(let s=0,l;s<Wt.length;s++)l=Wt[s],i[l.name]&&!o[l.name]&&(o[l.name]=!0,l[t](e))}}function D0(e){const t=e.changedTouches[0],n=e.type;if(n==="touchstart")nt.touch.x=t.clientX,nt.touch.y=t.clientY,nt.touch.scrollDecided=!1;else if(n==="touchmove"){if(nt.touch.scrollDecided)return;nt.touch.scrollDecided=!0;const r=R0(e);let i=!1;const o=Math.abs(nt.touch.x-t.clientX),s=Math.abs(nt.touch.y-t.clientY);e.cancelable&&(r==="none"?i=!0:r==="pan-x"?i=s>o:r==="pan-y"&&(i=o>s)),i?e.preventDefault():Wn("track")}}function sa(e,t,n){return rn[t]?(B0(e,t,n),!0):!1}function F0(e,t,n){return rn[t]?(U0(e,t,n),!0):!1}function B0(e,t,n){const r=rn[t],i=r.deps,o=r.name;let s=e[So];s||(e[So]=s={});for(let l=0,a,u;l<i.length;l++)a=i[l],!(z0&&gu(a)&&a!=="click")&&(u=s[a],u||(s[a]=u={_count:0}),u._count===0&&e.addEventListener(a,Mp,Np(a)),u[o]=(u[o]||0)+1,u._count=(u._count||0)+1);e.addEventListener(t,n),r.touchAction&&H0(e,r.touchAction)}function U0(e,t,n){const r=rn[t],i=r.deps,o=r.name,s=e[So];if(s)for(let l=0,a,u;l<i.length;l++)a=i[l],u=s[a],u&&u[o]&&(u[o]=(u[o]||1)-1,u._count=(u._count||1)-1,u._count===0&&e.removeEventListener(a,Mp,Np(a)));e.removeEventListener(t,n)}function Qo(e){Wt.push(e),e.emits.forEach(t=>{rn[t]=e})}function j0(e){for(let t=0,n;t<Wt.length;t++){n=Wt[t];for(let r=0,i;r<n.emits.length;r++)if(i=n.emits[r],i===e)return n}return null}function H0(e,t){vu&&e instanceof HTMLElement&&v0.run(()=>{e.style.touchAction=t}),e[oa]=t}function _u(e,t,n){const r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,P0(e).dispatchEvent(r),r.defaultPrevented){const i=n.preventer||n.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function Wn(e){const t=j0(e);t.info&&(t.info.prevent=!0)}Qo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){zn(this.info)},mousedown(e){if(!Gt(e))return;const t=Tt(e),n=this,r=o=>{Gt(o)||(hr("up",t,o),zn(n.info))},i=o=>{Gt(o)&&hr("up",t,o),zn(n.info)};Lp(this.info,r,i),hr("down",t,e)},touchstart(e){hr("down",Tt(e),e.changedTouches[0],e)},touchend(e){hr("up",Tt(e),e.changedTouches[0],e)}});function hr(e,t,n,r){t&&_u(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent(i){return Wn(i)}})}Qo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>T0&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,zn(this.info)},mousedown(e){if(!Gt(e))return;const t=Tt(e),n=this,r=o=>{const s=o.clientX,l=o.clientY;wc(n.info,s,l)&&(n.info.state=n.info.started?o.type==="mouseup"?"end":"track":"start",n.info.state==="start"&&Wn("tap"),n.info.addMove({x:s,y:l}),Gt(o)||(n.info.state="end",zn(n.info)),t&&Us(n.info,t,o),n.info.started=!0)},i=o=>{n.info.started&&r(o),zn(n.info)};Lp(this.info,r,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Tt(e),n=e.changedTouches[0],r=n.clientX,i=n.clientY;wc(this.info,r,i)&&(this.info.state==="start"&&Wn("tap"),this.info.addMove({x:r,y:i}),Us(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend(e){const t=Tt(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Us(this.info,t,n))}});function wc(e,t,n){if(e.prevent)return!1;if(e.started)return!0;const r=Math.abs(e.x-t),i=Math.abs(e.y-n);return r>=yc||i>=yc}function Us(e,t,n){if(!t)return;const r=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],o=i.x-e.x,s=i.y-e.y;let l,a=0;r&&(l=i.x-r.x,a=i.y-r.y),_u(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:o,dy:s,ddx:l,ddy:a,sourceEvent:n,hover(){return $0(n.clientX,n.clientY)}})}Qo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){Gt(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){Gt(e)&&xc(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){xc(this.info,e.changedTouches[0],e)}});function xc(e,t,n){const r=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),o=Tt(n||t);!o||M0[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=_c&&i<=_c||I0(t))&&(e.prevent||_u(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yu=ie(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(n){this._setAriaDisabled(n)}_setAriaDisabled(n){n?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qo=ie(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",n=>{this._onKeyDown(n)}),this.addEventListener("keyup",n=>{this._onKeyUp(n)})}_onKeyDown(n){switch(n.key){case"Enter":this._onEnter(n);break;case"Escape":this._onEscape(n);break}}_onKeyUp(n){}_onEnter(n){}_onEscape(n){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ip=e=>class extends yu(qo(e)){get _activeKeys(){return[" "]}ready(){super.ready(),sa(this,"down",n=>{this._shouldSetActive(n)&&this._setActive(!0)}),sa(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(n){return!this.disabled}_onKeyDown(n){super._onKeyDown(n),this._shouldSetActive(n)&&this._activeKeys.includes(n.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(n){this.toggleAttribute("active",n)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let wu=!1;window.addEventListener("keydown",()=>{wu=!0},{capture:!0});window.addEventListener("mousedown",()=>{wu=!1},{capture:!0});function la(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function Rp(){return wu}function $p(e){const t=e.style;if(t.visibility==="hidden"||t.display==="none")return!0;const n=window.getComputedStyle(e);return n.visibility==="hidden"||n.display==="none"}function V0(e,t){const n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function W0(e,t){const n=[];for(;e.length>0&&t.length>0;)V0(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)}function aa(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),r=aa(e.slice(0,n)),i=aa(e.slice(n));return W0(r,i)}function bc(e){return e.offsetParent===null&&e.clientWidth===0&&e.clientHeight===0?!0:$p(e)}function K0(e){return e.matches('[tabindex="-1"]')?!1:e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function xu(e){return e.getRootNode().activeElement===e}function Y0(e){if(!K0(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}function Dp(e,t){if(e.nodeType!==Node.ELEMENT_NODE||$p(e))return!1;const n=e,r=Y0(n);let i=r>0;r>=0&&t.push(n);let o=[];return n.localName==="slot"?o=n.assignedNodes({flatten:!0}):o=(n.shadowRoot||n).children,[...o].forEach(s=>{i=Dp(s,t)||i}),i}function Q0(e){const t=[];return Dp(e,t)?aa(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Go=ie(e=>class extends e{get _keyboardActive(){return Rp()}ready(){this.addEventListener("focusin",n=>{this._shouldSetFocus(n)&&this._setFocused(!0)}),this.addEventListener("focusout",n=>{this._shouldRemoveFocus(n)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(n){this.toggleAttribute("focused",n),this.toggleAttribute("focus-ring",n&&this._keyboardActive)}_shouldSetFocus(n){return!0}_shouldRemoveFocus(n){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fp=e=>class extends yu(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(n,r){super._disabledChanged(n,r),n?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(n){this.disabled&&n!==-1&&(this._lastTabIndex=n,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const q0=e=>class extends Ip(Fp(Go(e))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(n){super._onKeyDown(n),!(n.altKey||n.shiftKey||n.ctrlKey||n.metaKey)&&this._activeKeys.includes(n.key)&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-button",S0,{moduleId:"vaadin-button-styles"});class bu extends q0(an(Se(It(fe)))){static get is(){return"vaadin-button"}static get template(){return k0(ae)}ready(){super.ready(),this._tooltipController=new Yo(this),this.addController(this._tooltipController)}}Z(bu);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G0=new Set(["children","localName","ref","style","className"]),Cc=new WeakMap,X0=(e,t,n,r,i)=>{const o=i==null?void 0:i[t];o===void 0||n===r?n==null&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=n:((s,l,a)=>{let u=Cc.get(s);u===void 0&&Cc.set(s,u=new Map);let d=u.get(l);a!==void 0?d===void 0?(u.set(l,d={handleEvent:a}),s.addEventListener(l,d)):d.handleEvent=a:d!==void 0&&(u.delete(l),s.removeEventListener(l,d))})(e,o,n)},J0=(e,t)=>{typeof e=="function"?e(t):e.current=t};function Z0(e=window.React,t,n,r,i){let o,s,l;if(t===void 0){const v=e;({tagName:s,elementClass:l,events:r,displayName:i}=v),o=v.react}else o=e,l=n,s=t;const a=o.Component,u=o.createElement,d=new Set(Object.keys(r??{}));class c extends a{constructor(){super(...arguments),this.o=null}t(g){if(this.o!==null)for(const w in this.i)X0(this.o,w,this.props[w],g?g[w]:void 0,r)}componentDidMount(){var g;this.t(),(g=this.o)===null||g===void 0||g.removeAttribute("defer-hydration")}componentDidUpdate(g){this.t(g)}render(){const{_$Gl:g,...w}=this.props;this.h!==g&&(this.u=f=>{g!==null&&J0(g,f),this.o=f,this.h=g}),this.i={};const A={ref:this.u};for(const[f,h]of Object.entries(w))G0.has(f)?A[f==="className"?"class":f]=h:d.has(f)||f in l.prototype?this.i[f]=h:A[f]=h;return A.suppressHydrationWarning=!0,u(s,A)}}c.displayName=i??l.name;const p=o.forwardRef((v,g)=>u(c,{...v,_$Gl:g},v==null?void 0:v.children));return p.displayName=c.displayName,p}var Oc;window.Vaadin??(window.Vaadin={}),(Oc=window.Vaadin).registrations??(Oc.registrations=[]),window.Vaadin.registrations.push({is:"@hilla/react-components",version:"2.3.7"});function Jn(e){const{elementClass:t}=e;return Z0("_properties"in t?{...e,elementClass:{name:t.name,prototype:{...t._properties,hidden:Boolean}}}:e)}var ew={},fr=Jn({elementClass:bu,events:ew,react:Qn,tagName:"vaadin-button"});function Xo(){throw new Error("Cycle detected")}var tw=Symbol.for("preact-signals");function Cu(){if(Mn>1)Mn--;else{for(var e,t=!1;Lr!==void 0;){var n=Lr;for(Lr=void 0,ua++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Up(n))try{n.c()}catch(i){t||(e=i,t=!0)}n=r}}if(ua=0,Mn--,t)throw e}}var V=void 0,Lr=void 0,Mn=0,ua=0,ko=0;function Bp(e){if(V!==void 0){var t=e.n;if(t===void 0||t.t!==V)return t={i:0,S:e,p:V.s,n:void 0,t:V,e:void 0,x:void 0,r:t},V.s!==void 0&&(V.s.n=t),V.s=t,e.n=t,32&V.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=V.s,t.n=void 0,V.s.n=t,V.s=t),t}}function pe(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}pe.prototype.brand=tw;pe.prototype.h=function(){return!0};pe.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};pe.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};pe.prototype.subscribe=function(e){var t=this;return Wp(function(){var n=t.value,r=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=r}})};pe.prototype.valueOf=function(){return this.value};pe.prototype.toString=function(){return this.value+""};pe.prototype.toJSON=function(){return this.value};pe.prototype.peek=function(){return this.v};Object.defineProperty(pe.prototype,"value",{get:function(){var e=Bp(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(V instanceof un&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){ua>100&&Xo(),this.v=e,this.i++,ko++,Mn++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Cu()}}}});function nw(e){return new pe(e)}function Up(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function jp(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Hp(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function un(e){pe.call(this,void 0),this.x=e,this.s=void 0,this.g=ko-1,this.f=4}(un.prototype=new pe).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ko))return!0;if(this.g=ko,this.f|=1,this.i>0&&!Up(this))return this.f&=-2,!0;var e=V;try{jp(this),V=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return V=e,Hp(this),this.f&=-2,!0};un.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}pe.prototype.S.call(this,e)};un.prototype.U=function(e){if(this.t!==void 0&&(pe.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};un.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};un.prototype.peek=function(){if(this.h()||Xo(),16&this.f)throw this.v;return this.v};Object.defineProperty(un.prototype,"value",{get:function(){1&this.f&&Xo();var e=Bp(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Vp(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Mn++;var n=V;V=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,Eu(e),r}finally{V=n,Cu()}}}function Eu(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Vp(e)}function rw(e){if(V!==this)throw new Error("Out-of-order effect");Hp(this),V=e,this.f&=-2,8&this.f&&Eu(this),Cu()}function ai(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}ai.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};ai.prototype.S=function(){1&this.f&&Xo(),this.f|=1,this.f&=-9,Vp(this),jp(this),Mn++;var e=V;return V=this,rw.bind(this,e)};ai.prototype.N=function(){2&this.f||(this.f|=2,this.o=Lr,Lr=this)};ai.prototype.d=function(){this.f|=8,1&this.f||Eu(this)};function Wp(e){var t=new ai(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var Kp={exports:{}},Yp={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Re;function iw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ow=typeof Object.is=="function"?Object.is:iw,sw=Kn.useState,lw=Kn.useEffect,aw=Kn.useLayoutEffect,uw=Kn.useDebugValue;function dw(e,t){var n=t(),r=sw({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return aw(function(){i.value=n,i.getSnapshot=t,js(i)&&o({inst:i})},[e,n,t]),lw(function(){return js(i)&&o({inst:i}),e(function(){js(i)&&o({inst:i})})},[e]),uw(n),n}function js(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ow(e,n)}catch{return!0}}function cw(e,t){return t()}var hw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?cw:dw;Yp.useSyncExternalStore=Kn.useSyncExternalStore!==void 0?Kn.useSyncExternalStore:hw;Kp.exports=Yp;var fw=Kp.exports,Qp={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=Symbol.for("react.fragment");Qp.Fragment=pw;Qp.jsxDEV=void 0;var mw=[],vw=Symbol.for("react.element"),Ec=function(){},Kt,qp=Symbol.dispose||Symbol.for("Symbol.dispose");function Hs(e,t){var n=t.effect.S();return Kt=t,gw.bind(t,e,n)}function gw(e,t){t(),Kt=e}var Sc,Vs;(Sc={u:0,effect:{s:void 0,c:function(){},S:function(){return Ec},d:function(){}},subscribe:function(){return Ec},getSnapshot:function(){return 0},S:function(){},f:function(){}})[qp]=function(){};var _w=Promise.prototype.then.bind(Promise.resolve());function yw(){Vs||(Vs=_w(function(){var e;Vs=void 0,(e=Kt)==null||e.f()}))}function ww(e){e===void 0&&(e=0),yw();var t=Re.useRef();t.current==null&&(t.current=function(r){var i,o,s,l,a=0,u=Wp(function(){o=this});return o.c=function(){a=a+1|0,l&&l()},(i={u:r,effect:o,subscribe:function(d){return l=d,function(){a=a+1|0,l=void 0,u()}},getSnapshot:function(){return a},S:function(){if(Kt!=null){var d=Kt.u,c=this.u;d==0&&c==0||d==0&&c==1?(Kt.f(),s=Hs(void 0,this)):d==1&&c==0||d==2&&c==0||(s=Hs(Kt,this))}else s=Hs(void 0,this)},f:function(){s==null||s(),s=void 0}})[qp]=function(){this.f()},i}(e));var n=t.current;return fw.useSyncExternalStore(n.subscribe,n.getSnapshot,n.getSnapshot),n.S(),n}Object.defineProperties(pe.prototype,{$$typeof:{configurable:!0,value:vw},type:{configurable:!0,value:function(e){var t=e.data,n=ww(1);try{return t.value}finally{n.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function xw(e){return Re.useMemo(function(){return nw(e)},mw)}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jo=T`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;z("",Jo,{moduleId:"lumo-overlay"});z("vaadin-overlay",Jo,{moduleId:"lumo-vaadin-overlay"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Su(e){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(e);return}e.querySelector("template")&&console.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let da=!1,bw=[],Gp=[];function Cw(){da=!0,requestAnimationFrame(function(){da=!1,Ew(bw),setTimeout(function(){Sw(Gp)})})}function Ew(e){for(;e.length;)Xp(e.shift())}function Sw(e){for(let t=0,n=e.length;t<n;t++)Xp(e.shift())}function Xp(e){const t=e[0],n=e[1],r=e[2];try{n.apply(t,r)}catch(i){setTimeout(()=>{throw i})}}function kw(e,t,n){da||Cw(),Gp.push([e,t,n])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zo=e=>e.test(navigator.userAgent),ca=e=>e.test(navigator.platform),Aw=e=>e.test(navigator.vendor);Zo(/Android/u);Zo(/Chrome/u)&&Aw(/Google Inc/u);Zo(/Firefox/u);const Pw=ca(/^iPad/u)||ca(/^Mac/u)&&navigator.maxTouchPoints>1,Tw=ca(/^iPhone/u),Jp=Tw||Pw;Zo(/^((?!chrome|android).)*safari/iu);const es=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let cn=new WeakMap,Oi=new WeakMap,Ni={},Ws=0;const kc=e=>e&&e.nodeType===Node.ELEMENT_NODE,Ks=(...e)=>{console.error(`Error: ${e.join(" ")}. Skip setting aria-hidden.`)},Ow=(e,t)=>kc(e)?t.map(n=>{if(!kc(n))return Ks(n,"is not a valid element"),null;let r=n;for(;r&&r!==e;){if(e.contains(r))return n;r=r.getRootNode().host}return Ks(n,"is not contained inside",e),null}).filter(n=>!!n):(Ks(e,"is not a valid element"),[]),Nw=(e,t,n,r)=>{const i=Ow(t,Array.isArray(e)?e:[e]);Ni[n]||(Ni[n]=new WeakMap);const o=Ni[n],s=[],l=new Set,a=new Set(i),u=c=>{if(!c||l.has(c))return;l.add(c);const p=c.assignedSlot;p&&u(p),u(c.parentNode||c.host)};i.forEach(u);const d=c=>{if(!c||a.has(c))return;const p=c.shadowRoot;(p?[...c.children,...p.children]:[...c.children]).forEach(g=>{if(!["template","script","style"].includes(g.localName))if(l.has(g))d(g);else{const w=g.getAttribute(r),A=w!==null&&w!=="false",f=(cn.get(g)||0)+1,h=(o.get(g)||0)+1;cn.set(g,f),o.set(g,h),s.push(g),f===1&&A&&Oi.set(g,!0),h===1&&g.setAttribute(n,"true"),A||g.setAttribute(r,"true")}})};return d(t),l.clear(),Ws+=1,()=>{s.forEach(c=>{const p=cn.get(c)-1,v=o.get(c)-1;cn.set(c,p),o.set(c,v),p||(Oi.has(c)?Oi.delete(c):c.removeAttribute(r)),v||c.removeAttribute(n)}),Ws-=1,Ws||(cn=new WeakMap,cn=new WeakMap,Oi=new WeakMap,Ni={})}},Lw=(e,t=document.body,n="data-aria-hidden")=>{const r=Array.from(Array.isArray(e)?e:[e]);return t&&r.push(...Array.from(t.querySelectorAll("[aria-live]"))),Nw(r,t,n,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zw{constructor(t,n){this.host=t,this.callback=typeof n=="function"?n:()=>t}showModal(){const t=this.callback();this.__showOthers=Lw(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mw{saveFocus(t){this.focusNode=t||la()}restoreFocus(){const t=this.focusNode;t&&(la()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ys=[];class Iw{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Q0(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(xu).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Ys.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Ys.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(Ys).pop()&&t.key==="Tab"){t.preventDefault();const n=t.shiftKey;this.__focusNextElement(n)}}__focusNextElement(t=!1){const n=this.__focusableElements,r=t?-1:1,i=this.__focusedElementIndex,o=(n.length+i+r)%n.length,s=n[o];s.focus(),s.localName==="input"&&s.select()}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zp=e=>class extends It(e){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new zw(this),this.__focusTrapController=new Iw(this),this.__focusRestorationController=new Mw}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const n=la();return n===document.body||this._deepContains(n)}_deepContains(n){if(this.contains(n))return!0;let r=n;const i=n.ownerDocument;for(;r&&r!==i&&r!==this;)r=r.parentNode||r.host;return r===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qi=()=>Array.from(document.body.children).filter(e=>e instanceof HTMLElement&&e._hasOverlayStackMixin&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0),Rw=e=>e===Qi().pop(),$w=e=>class extends e{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Rw(this)}bringToFront(){let n="";const r=Qi().filter(i=>i!==this).pop();r&&(n=r.__zIndex+1),this.style.zIndex=n,this.__zIndex=n||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Qi().forEach(n=>{n!==this&&(n.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const n=Qi();let r;for(;(r=n.pop())&&!(r!==this&&(r.$.overlay.style.removeProperty("pointer-events"),!r.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ts=e=>class extends Zp($w(e)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Jp&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(n){const r=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),r.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const n=window.innerHeight,i=window.innerWidth>n,o=document.documentElement.clientHeight;i&&o>n?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${o-n}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(n,r,i,o){const s=this._oldOwner!==r||this._oldModel!==i;this._oldModel=i,this._oldOwner=r;const l=this._oldRenderer!==n;this._oldRenderer=n;const a=this._oldOpened!==o;this._oldOpened=o,l&&(this.innerHTML="",delete this._$litPart$),o&&n&&(l||a||s)&&this.requestContentUpdate()}_modelessChanged(n){n?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(n,r){n?(this._saveFocus(),this._animatedOpening(),kw(this,()=>{this._trapFocus();const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):r&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(n){n&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const n=getComputedStyle(this),r=n.getPropertyValue("animation-name");return!(n.getPropertyValue("display")==="none")&&r&&r!=="none"}_enqueueAnimation(n,r){const i=`__${n}Handler`,o=s=>{s&&s.target!==this||(r(),this.removeEventListener("animationend",o),delete this[i])};this[i]=o,this.addEventListener("animationend",o)}_flushAnimation(n){const r=`__${n}Handler`;typeof this[r]=="function"&&this[r]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(n){this._mouseDownInside=n.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(n){this._mouseUpInside=n.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(n){return this._last}_outsideClickListener(n){if(n.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(n))return;const r=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),this.opened&&!r.defaultPrevented&&this.close(n)}_keydownListener(n){if(this._last&&!(this.modeless&&!n.composedPath().includes(this.$.overlay))&&n.key==="Escape"){const r=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),this.opened&&!r.defaultPrevented&&this.close(n)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ns=T`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])) {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-overlay",ns,{moduleId:"vaadin-overlay-styles"});class Dw extends ts(Se(Ze(fe))){static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),Su(this)}}Z(Dw);const Fw=T`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;z("vaadin-dialog-overlay",[Jo,Fw],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bw=e=>class extends ts(e){static get properties(){return{headerTitle:{type:String},headerRenderer:{type:Object},footerRenderer:{type:Object}}}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(n){const r=document.createElement("div");return r.setAttribute("slot",n),r}__clearContainer(n){n.innerHTML="",delete n._$litPart$}__initContainer(n,r){return n?this.__clearContainer(n):n=this.__createContainer(r),n}_headerFooterRendererChange(n,r,i){const o=this.__oldHeaderRenderer!==n;this.__oldHeaderRenderer=n;const s=this.__oldFooterRenderer!==r;this.__oldFooterRenderer=r;const l=this._oldOpenedFooterHeader!==i;this._oldOpenedFooterHeader=i,this.toggleAttribute("has-header",!!n),this.toggleAttribute("has-footer",!!r),o&&(n?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),s&&(r?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(n&&(o||l)||r&&(s||l))&&i&&this.requestContentUpdate()}_headerTitleChanged(n,r){this.toggleAttribute("has-title",!!n),r&&(n||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=n}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(n){const r=this.$.overlay,i={...n};r.style.position!=="absolute"&&(r.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(i).forEach(o=>{typeof i[o]=="number"&&(i[o]=`${i[o]}px`)}),Object.assign(r.style,i)}getBounds(){const n=this.$.overlay.getBoundingClientRect(),r=this.getBoundingClientRect(),i=n.top-r.top,o=n.left-r.left,s=n.width,l=n.height;return{top:i,left:o,width:s,height:l}}__updateOverflow(){let n="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const i=this.$.content;i.scrollTop>0&&(n+=" top"),i.scrollTop<i.scrollHeight-i.clientHeight&&(n+=" bottom")}const r=n.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uw=T`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`,jw=T`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-dialog-overlay",[ns,Uw,jw],{moduleId:"vaadin-dialog-overlay-styles"});class Hw extends Bw(Ze(Se(fe))){static get is(){return"vaadin-dialog-overlay"}static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}}Z(Hw);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const em=e=>class extends e{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(n,r){if(!r||n===void 0)return;const{classList:i}=r;if(this.__initialClasses||(this.__initialClasses=new Set(i)),Array.isArray(this.__previousClasses)){const s=this.__previousClasses.filter(l=>!this.__initialClasses.has(l));s.length>0&&i.remove(...s)}const o=typeof n=="string"?n.split(" "):[];o.length>0&&i.add(...o),this.__previousClasses=o}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vw=e=>class extends e{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1}}}ready(){super.ready();const n=this.$.overlay;n.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),n.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=n}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(n){n.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(n){this.noCloseOnOutsideClick&&n.preventDefault()}_handleEscPress(n){this.noCloseOnEsc&&n.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ao(e){return e.touches?e.touches[0]:e}function tm(e){return e.clientX>=0&&e.clientX<=window.innerWidth&&e.clientY>=0&&e.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ww=e=>class extends e{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:es},__dragHandleClassName:{type:String}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),await new Promise(requestAnimationFrame),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(n){if(!(n.type==="touchstart"&&n.touches.length>1)&&this.draggable&&(n.button===0||n.touches)){const r=this.$.overlay.$.resizerContainer,i=n.target===r,o=n.offsetX>r.clientWidth||n.offsetY>r.clientHeight,s=n.target===this.$.overlay.$.content,l=n.composedPath().some((a,u)=>{if(!a.classList)return!1;const d=a.classList.contains(this.__dragHandleClassName||"draggable"),c=a.classList.contains("draggable-leaf-only"),p=u===0;return c&&p||d&&(!c||p)});if(i&&!o||s||l){l||n.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const a=Ao(n);this._originalMouseCoords={top:a.pageY,left:a.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(n){const r=Ao(n);if(tm(r)){const i=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top),o=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:i,left:o})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kw=e=>class extends e{static get properties(){return{renderer:{type:Object},headerTitle:String,headerRenderer:{type:Object},footerRenderer:{type:Object}}}requestContentUpdate(){this._overlayElement&&this._overlayElement.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yw=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},await new Promise(requestAnimationFrame),this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(n=>{const r=document.createElement("div");this._resizeListeners.start[n]=i=>this._startResize(i,n),this._resizeListeners.resize[n]=i=>this._resize(i,n),this._resizeListeners.stop[n]=()=>this._stopResize(n),n.length===1&&r.classList.add("edge"),r.classList.add("resizer"),r.classList.add(n),r.addEventListener("mousedown",this._resizeListeners.start[n]),r.addEventListener("touchstart",this._resizeListeners.start[n]),this.$.overlay.$.resizerContainer.appendChild(r)})}_startResize(n,r){if(!(n.type==="touchstart"&&n.touches.length>1)&&(n.button===0||n.touches)){n.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const i=Ao(n);this._originalMouseCoords={top:i.pageY,left:i.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[r]),window.addEventListener("touchmove",this._resizeListeners.resize[r]),window.addEventListener("mouseup",this._resizeListeners.stop[r]),window.addEventListener("touchend",this._resizeListeners.stop[r]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(n,r){const i=Ao(n);tm(i)&&r.split("").forEach(s=>{switch(s){case"n":{const l=this._originalBounds.height-(i.pageY-this._originalMouseCoords.top),a=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top);l>40&&this.$.overlay.setBounds({top:a,height:l});break}case"e":{const l=this._originalBounds.width+(i.pageX-this._originalMouseCoords.left);l>40&&this.$.overlay.setBounds({width:l});break}case"s":{const l=this._originalBounds.height+(i.pageY-this._originalMouseCoords.top);l>40&&this.$.overlay.setBounds({height:l});break}case"w":{const l=this._originalBounds.width-(i.pageX-this._originalMouseCoords.left),a=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);l>40&&this.$.overlay.setBounds({left:a,width:l});break}}})}_stopResize(n){window.removeEventListener("mousemove",this._resizeListeners.resize[n]),window.removeEventListener("touchmove",this._resizeListeners.resize[n]),window.removeEventListener("mouseup",this._resizeListeners.stop[n]),window.removeEventListener("touchend",this._resizeListeners.stop[n]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const n=this.$.overlay.$.resizerContainer.scrollTop,{width:r,height:i}=getComputedStyle(this.$.overlay.$.overlay),o=this.$.overlay.$.content;o.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:s,height:l}=getComputedStyle(o);return o.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=n,{width:r,height:i,contentWidth:s,contentHeight:l}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nm extends Ww(Yw(Kw(Vw(em(du(an(fe))))))){static get template(){return ae`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{ariaLabel:{type:String,value:""}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this._overlayElement.setAttribute("role","dialog"),Su(this)}_rendererChanged(t,n,r){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:n,footerRenderer:r})}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,n){t||n?this.$.overlay.setAttribute("aria-label",t||n):this.$.overlay.removeAttribute("aria-label")}}Z(nm);const Qw=new Map;function qw(e,[t,...n]){return new Map(e).set(t,n)}function rm(e,t,n){const[r,i]=Re.useReducer(qw,Qw),o=Re.useCallback((...s)=>{n!=null&&n.renderSync?Yl.flushSync(()=>i(s)):i(s)},[]);return e?[Array.from(r.entries()).map(([s,l])=>Yl.createPortal(t?Re.createElement(e,t(l)):e,s)),o]:[]}function Gw([e]){return{original:e}}function Xw(e,t){return rm(e,Gw,t)}function Qs(e,t,n){let r,i,o=!1;typeof t=="function"?(r=void 0,i=t,o=!0):(r=t,i=e,o=!!i);const s=rm(r,void 0,n),l=Xw(i,n);return o?l:s}var Jw={onOpenedChanged:"opened-changed"},Zw=Jn({elementClass:nm,events:Jw,react:Qn,tagName:"vaadin-dialog"});function ex({children:e,footer:t,header:n,...r},i){let[o,s]=Qs(r.footerRenderer,t),[l,a]=Qs(r.headerRenderer,n),[u,d]=Qs(r.renderer,e);return q.jsxs(Zw,{...r,ref:i,footerRenderer:s,headerRenderer:a,renderer:d,children:[l,o,u]})}var tx=Re.forwardRef(ex);z("vaadin-input-container",T`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid])::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nx=T`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Xn("font-icons",nx);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const im=T`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;z("",im,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rx=T`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const om=T`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;z("",om,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ix=T`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,ku=[om,im,rx,ix];z("",ku,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-text-field",ku,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ox=e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",n=>{n.target===this&&n.preventDefault()}),this.addEventListener("click",n=>{n.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(r=>r.focus&&r.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sx=T`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-input-container",sx,{moduleId:"vaadin-input-container-styles"});class lx extends ox(Se(Ze(fe))){static get is(){return"vaadin-input-container"}static get template(){return ae`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}Z(lx);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ax=T`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ux=T`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dx=T`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sm=[ux,dx,ax];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cx extends li{constructor(t,n){super(t,"input","input",{initializer:(r,i)=>{i.value&&(r.value=i.value),i.type&&r.setAttribute("type",i.type),r.id=this.defaultId,typeof n=="function"&&n(r)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hx=ie(e=>class extends Go(Fp(e)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(n,r){n?(n.disabled=this.disabled,this._addFocusListeners(n),this.__forwardTabIndex(this.tabindex)):r&&this._removeFocusListeners(r)}_addFocusListeners(n){n.addEventListener("blur",this._boundOnBlur),n.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(n){n.removeEventListener("blur",this._boundOnBlur),n.removeEventListener("focus",this._boundOnFocus)}_onFocus(n){n.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(n){n.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(n){return n.target===this.focusElement}_shouldRemoveFocus(n){return n.target===this.focusElement}_disabledChanged(n,r){super._disabledChanged(n,r),this.focusElement&&(this.focusElement.disabled=n),n&&this.blur()}_tabindexChanged(n){this.__forwardTabIndex(n)}__forwardTabIndex(n){n!==void 0&&this.focusElement&&(this.focusElement.tabIndex=n,n!==-1&&(this.tabindex=void 0)),this.disabled&&n&&(n!==-1&&(this._lastTabIndex=n),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qs=new WeakMap;function fx(e){return qs.has(e)||qs.set(e,new Set),qs.get(e)}function px(e,t){const n=document.createElement("style");n.textContent=e,t===document?document.head.appendChild(n):t.insertBefore(n,t.firstChild)}const mx=ie(e=>class extends e{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const n=this.getRootNode(),r=fx(n);this.slotStyles.forEach(i=>{r.has(i)||(px(i,n),r.add(i))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lm=ie(e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(n){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=n)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(n){n.addEventListener("input",this._boundOnInput),n.addEventListener("change",this._boundOnChange)}_removeInputListeners(n){n.removeEventListener("input",this._boundOnInput),n.removeEventListener("change",this._boundOnChange)}_forwardInputValue(n){this.inputElement&&(this._inputElementValue=n??"")}_inputElementChanged(n,r){n?this._addInputListeners(n):r&&this._removeInputListeners(r)}_hasInputValueChanged(n,r){(n||r)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(n){this._setHasInputValue(n),this._onInput(n)}_onInput(n){const r=n.composedPath()[0];this.__userInput=n.isTrusted,this.value=r.value,this.__userInput=!1}_onChange(n){}_toggleHasValue(n){this.toggleAttribute("has-value",n)}_valueChanged(n,r){this._toggleHasValue(this._hasValue),!(n===""&&r===void 0)&&(this.__userInput||this._forwardInputValue(n))}_setHasInputValue(n){const r=n.composedPath()[0];this._hasInputValue=r.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vx=e=>class extends lm(qo(e)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",n=>this._onClearButtonMouseDown(n)),this.clearElement.addEventListener("click",n=>this._onClearButtonClick(n)))}_onClearButtonClick(n){n.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(n){n.preventDefault(),es||this.inputElement.focus()}_onEscape(n){super._onEscape(n),this.clearButtonVisible&&this.value&&(n.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gs=new Map;function Au(e){return Gs.has(e)||Gs.set(e,new WeakMap),Gs.get(e)}function am(e,t){e&&e.removeAttribute(t)}function um(e,t){if(!e||!t)return;const n=Au(t);if(n.has(e))return;const r=mu(e.getAttribute(t));n.set(e,new Set(r))}function gx(e,t){if(!e||!t)return;const n=Au(t),r=n.get(e);!r||r.size===0?e.removeAttribute(t):Pp(e,t,Ko(r)),n.delete(e)}function Xs(e,t,n={newId:null,oldId:null,fromUser:!1}){if(!e||!t)return;const{newId:r,oldId:i,fromUser:o}=n,s=Au(t),l=s.get(e);if(!o&&l){i&&l.delete(i),r&&l.add(r);return}o&&(l?r||s.delete(e):um(e,t),am(e,t)),x0(e,t,i);const a=r||Ko(l);a&&Pp(e,t,a)}function _x(e,t){um(e,t),am(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yx{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,n=!1){const r=n?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,r,n),n?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(_x(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(gx(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,n,r){Xs(this.__target,"aria-labelledby",{newId:t,oldId:n,fromUser:r})}__setErrorIdToAriaAttribute(t,n){Xs(this.__target,"aria-describedby",{newId:t,oldId:n,fromUser:!1})}__setHelperIdToAriaAttribute(t,n){Xs(this.__target,"aria-describedby",{newId:t,oldId:n,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pu extends li{constructor(t,n,r,i={}){super(t,n,r,{...i,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const n=this.getSlotChild();n&&n!==this.defaultNode?this.__notifyChange(n):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(n=>{n.forEach(r=>{const i=r.target,o=i===this.node;r.type==="attributes"?o&&this.__updateNodeId(i):(o||i.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const n=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||n)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wx extends Pu{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:n,invalid:r}=this,i=!!(r&&n&&n.trim()!=="");t&&(t.textContent=i?n:"",t.hidden=!i,i?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xx extends Pu{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const n=this.attachDefaultNode();this.observeNode(n)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bx extends Pu{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const n=this.attachDefaultNode();this.observeNode(n)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cx=ie(e=>class extends It(e){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new bx(this),this._labelController.addEventListener("slot-content-changed",n=>{this.toggleAttribute("has-label",n.detail.hasContent)})}get _labelId(){const n=this._labelNode;return n&&n.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(n){this._labelController.setLabel(n)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dm=ie(e=>class extends e{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const n=this.checkValidity();return this._setInvalid(!n),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:n}})),n}checkValidity(){return!this.required||!!this.value}_setInvalid(n){this._shouldSetInvalid(n)&&(this.invalid=n)}_shouldSetInvalid(n){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ex=e=>class extends dm(Cx(It(e))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new yx(this),this._helperController=new xx(this),this._errorController=new wx(this),this._errorController.addEventListener("slot-content-changed",n=>{this.toggleAttribute("has-error-message",n.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",n=>{const{hasContent:r,node:i}=n.detail;this.__labelChanged(r,i)}),this._helperController.addEventListener("slot-content-changed",n=>{const{hasContent:r,node:i}=n.detail;this.toggleAttribute("has-helper",r),this.__helperChanged(r,i)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(n,r){n?this._fieldAriaController.setHelperId(r.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(n){this._fieldAriaController.setAriaLabel(n)}_accessibleNameRefChanged(n){this._fieldAriaController.setLabelId(n,!0)}__labelChanged(n,r){n?this._fieldAriaController.setLabelId(r.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(n){this._errorController.setErrorMessage(n)}_helperTextChanged(n){this._helperController.setHelperText(n)}_ariaTargetChanged(n){n&&this._fieldAriaController.setTarget(n)}_requiredChanged(n){this._fieldAriaController.setRequired(n)}_invalidChanged(n){this._errorController.setInvalid(n),setTimeout(()=>{if(n){const r=this._errorNode;this._fieldAriaController.setErrorId(r&&r.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sx=ie(e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(n){n&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(n=>{this._delegateAttribute(n,this[n])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(n=>{this._delegateProperty(n,this[n])})}_delegateAttrsChanged(...n){this.constructor.delegateAttrs.forEach((r,i)=>{this._delegateAttribute(r,n[i])})}_delegatePropsChanged(...n){this.constructor.delegateProps.forEach((r,i)=>{this._delegateProperty(r,n[i])})}_delegateAttribute(n,r){this.stateTarget&&(n==="invalid"&&this._delegateAttribute("aria-invalid",r?"true":!1),typeof r=="boolean"?this.stateTarget.toggleAttribute(n,r):r?this.stateTarget.setAttribute(n,r):this.stateTarget.removeAttribute(n))}_delegateProperty(n,r){this.stateTarget&&(this.stateTarget[n]=r)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kx=ie(e=>class extends Sx(dm(lm(e))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(n=>this[n]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(n){return n.some(r=>this.__isValidConstraint(r))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(n,...r){if(!n)return;const i=this._hasValidConstraints(r),o=this.__previousHasConstraints&&!i;(this._hasValue||this.invalid)&&i?this.validate():o&&this._setInvalid(!1),this.__previousHasConstraints=i}_onChange(n){n.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:n},bubbles:n.bubbles,cancelable:n.cancelable}))}__isValidConstraint(n){return!!n||n===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ax=e=>class extends mx(hx(kx(Ex(vx(qo(e)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(n){super._onFocus(n),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(n){n.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:n},bubbles:n.bubbles,cancelable:n.cancelable}))}_addInputListeners(n){super._addInputListeners(n),n.addEventListener("paste",this._boundOnPaste),n.addEventListener("drop",this._boundOnDrop),n.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(n){super._removeInputListeners(n),n.removeEventListener("paste",this._boundOnPaste),n.removeEventListener("drop",this._boundOnDrop),n.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(n){super._onKeyDown(n),this.allowedCharPattern&&!this.__shouldAcceptKey(n)&&(n.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Vn.debounce(this._preventInputDebouncer,Sp.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(n){return n.metaKey||n.ctrlKey||!n.key||n.key.length!==1||this.__allowedCharRegExp.test(n.key)}_onPaste(n){if(this.allowedCharPattern){const r=n.clipboardData.getData("text");this.__allowedTextRegExp.test(r)||(n.preventDefault(),this._markInputPrevented())}}_onDrop(n){if(this.allowedCharPattern){const r=n.dataTransfer.getData("text");this.__allowedTextRegExp.test(r)||(n.preventDefault(),this._markInputPrevented())}}_onBeforeInput(n){this.allowedCharPattern&&n.data&&!this.__allowedTextRegExp.test(n.data)&&(n.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(n){if(n)try{this.__allowedCharRegExp=new RegExp(`^${n}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${n}*$`,"u")}catch(r){console.error(r)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cm=e=>class extends Ax(e){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(n){this.__dataValue=n}_inputElementChanged(n){super._inputElementChanged(n),n&&(n.value&&n.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),n.value=""),this.value&&(n.value=this.value))}_setFocused(n){super._setFocused(n),!n&&document.hasFocus()&&this.validate()}_onInput(n){super._onInput(n),this.invalid&&this.validate()}_valueChanged(n,r){super._valueChanged(n,r),r!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hm{constructor(t,n){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),n.addEventListener("slot-content-changed",r=>{this.__initLabel(r.detail.node)}),this.__initLabel(n.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=n=>{n.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Px=e=>class extends cm(e){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new cx(this,n=>{this._setInputElement(n),this._setFocusElement(n),this.stateTarget=n,this.ariaTarget=n})),this.addController(new hm(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-text-field",sm,{moduleId:"vaadin-text-field-styles"});class fm extends Px(Se(an(fe))){static get is(){return"vaadin-text-field"}static get template(){return ae`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new Yo(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Z(fm);var Tx={onValidated:"validated",onChange:"change",onInput:"input",onInvalidChanged:"invalid-changed",onValueChanged:"value-changed"},Ox=Jn({elementClass:fm,events:Tx,react:Qn,tagName:"vaadin-text-field"});const Nx=T`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;z("vaadin-vertical-layout",Nx,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pm extends an(Se(fe)){static get template(){return ae`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}Z(pm);var Lx={},Ac=Jn({elementClass:pm,events:Lx,react:Qn,tagName:"vaadin-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zx=T`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;z("vaadin-text-area",[ku,zx],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Li=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.resizables?t.target.resizables.forEach(n=>{n._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),mm=ie(e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Li.observe(this),this._observeParent){const n=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;n.resizables||(n.resizables=new Set,Li.observe(n)),n.resizables.add(this),this.__parent=n}}disconnectedCallback(){super.disconnectedCallback(),Li.unobserve(this);const n=this.__parent;if(this._observeParent&&n){const r=n.resizables;r&&(r.delete(this),r.size===0&&Li.unobserve(n)),this.__parent=null}}_onResize(n){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mx extends li{constructor(t,n){super(t,"textarea","textarea",{initializer:(r,i)=>{const o=i.getAttribute("value");o&&(r.value=o);const s=i.getAttribute("name");s&&r.setAttribute("name",s),r.id=this.defaultId,typeof n=="function"&&n(r)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ix=e=>class extends mm(cm(e)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new Mx(this,n=>{this._setInputElement(n),this._setFocusElement(n),this.stateTarget=n,this.ariaTarget=n})),this.addController(new hm(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",n=>{const r=this._inputField.scrollTop;this._inputField.scrollTop+=n.deltaY,r!==this._inputField.scrollTop&&(n.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(n){n.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(n,r){super._valueChanged(n,r),this._updateHeight()}_updateHeight(){const n=this.inputElement,r=this._inputField;if(!n||!r)return;const i=r.scrollTop,o=this.value?this.value.length:0;if(this._oldValueLength>=o){const l=getComputedStyle(r).height,a=getComputedStyle(n).width;r.style.display="block",r.style.height=l,n.style.maxWidth=a,n.style.height="auto"}this._oldValueLength=o;const s=n.scrollHeight;s>n.clientHeight&&(n.style.height=`${s}px`),n.style.removeProperty("max-width"),r.style.removeProperty("display"),r.style.removeProperty("height"),r.scrollTop=i}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const n=this.inputElement.value.match(this.pattern);return n?n[0]===n.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rx=T`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-text-area",[sm,Rx],{moduleId:"vaadin-text-area-styles"});class vm extends Ix(Se(an(fe))){static get is(){return"vaadin-text-area"}static get template(){return ae`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Yo(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Z(vm);var $x={onValidated:"validated",onChange:"change",onInput:"input",onInvalidChanged:"invalid-changed",onValueChanged:"value-changed"},Dx=Jn({elementClass:vm,events:$x,react:Qn,tagName:"vaadin-text-area"});const Fx=T`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;z("vaadin-menu-bar-button",[np,Fx],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-menu-bar-button",T`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class Bx extends bu{static get is(){return"vaadin-menu-bar-button"}_onKeyDown(t){this.__triggeredWithActiveKeys=this._activeKeys.includes(t.key),super._onKeyDown(t),this.__triggeredWithActiveKeys=null}}Z(Bx);const Tu=T`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;z("vaadin-item",Tu,{moduleId:"lumo-item"});const gm=T`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;z("vaadin-context-menu-item",[Tu,gm],{moduleId:"lumo-context-menu-item"});const Ux=T`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;z("vaadin-menu-bar-item",[Tu,gm,Ux],{moduleId:"lumo-menu-bar-item"});const Ou=T`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;z("vaadin-list-box",Ou,{moduleId:"lumo-list-box"});const _m=T`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;z("vaadin-context-menu-list-box",[Ou,_m],{moduleId:"lumo-context-menu-list-box"});z("vaadin-menu-bar-list-box",[Ou,_m],{moduleId:"lumo-menu-bar-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ym=T`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;z("",ym,{moduleId:"lumo-menu-overlay-core"});const jx=T`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Nu=[Jo,ym,jx];z("",Nu,{moduleId:"lumo-menu-overlay"});const wm=T`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;z("vaadin-context-menu-overlay",[Nu,wm],{moduleId:"lumo-context-menu-overlay"});const Hx=T`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;z("vaadin-menu-bar-overlay",[Nu,wm,Hx],{moduleId:"lumo-menu-bar-overlay"});z("vaadin-menu-bar",T`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xm=e=>class extends Ip(Go(e)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(n){this._value=n}ready(){super.ready();const n=this.getAttribute("value");n!==null&&(this.value=n)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(n){return!this.disabled&&!(n.type==="keydown"&&n.defaultPrevented)}_selectedChanged(n){this.setAttribute("aria-selected",n)}_disabledChanged(n){super._disabledChanged(n),n&&(this.selected=!1,this.blur())}_onKeyDown(n){super._onKeyDown(n),this._activeKeys.includes(n.key)&&!n.defaultPrevented&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vx extends xm(Se(Ze(fe))){static get is(){return"vaadin-menu-bar-item"}static get template(){return ae`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}Z(Vx);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Wx(e,t){const{scrollLeft:n}=e;return t!=="rtl"?n:e.scrollWidth-e.clientWidth+n}function Kx(e,t,n){t!=="rtl"?e.scrollLeft=n:e.scrollLeft=e.clientWidth-e.scrollWidth+n}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bm=e=>class extends qo(e){get focused(){return(this._getItems()||[]).find(xu)}get _vertical(){return!0}focus(){const n=this._getItems();if(Array.isArray(n)){const r=this._getAvailableIndex(n,0,null,i=>!bc(i));r>=0&&n[r].focus()}}_getItems(){return Array.from(this.children)}_onKeyDown(n){if(super._onKeyDown(n),n.metaKey||n.ctrlKey)return;const{key:r}=n,i=this._getItems()||[],o=i.indexOf(this.focused);let s,l;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(r)?(l=-u,s=o-u):this.__isNextKey(r)?(l=u,s=o+u):r==="Home"?(l=1,s=0):r==="End"&&(l=-1,s=i.length-1),s=this._getAvailableIndex(i,s,l,d=>!bc(d)),s>=0&&(n.preventDefault(),this._focus(s,!0))}__isPrevKey(n){return this._vertical?n==="ArrowUp":n==="ArrowLeft"}__isNextKey(n){return this._vertical?n==="ArrowDown":n==="ArrowRight"}_focus(n,r=!1){const i=this._getItems();this._focusItem(i[n],r)}_focusItem(n){n&&(n.focus(),n.setAttribute("focus-ring",""))}_getAvailableIndex(n,r,i,o){const s=n.length;let l=r;for(let a=0;typeof l=="number"&&a<s;a+=1,l+=i||1){l<0?l=s-1:l>=s&&(l=0);const u=n[l];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,o))return l}return-1}__isMatchingItem(n,r){return typeof r=="function"?r(n):!0}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cm=e=>class extends bm(e){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const n=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(n)}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r));const n=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Tp(n,()=>{this._setItems(this._filterItems(kp(this)))})}_getItems(){return this.items}_enhanceItems(n,r,i,o){if(!o&&n){this.setAttribute("aria-orientation",r||"vertical"),n.forEach(l=>{r?l.setAttribute("orientation",r):l.removeAttribute("orientation")}),this._setFocusable(i||0);const s=n[i];n.forEach(l=>{l.selected=l===s}),s&&!s.disabled&&this._scrollToItem(i)}}_filterItems(n){return n.filter(r=>r._hasVaadinItemMixin)}_onClick(n){if(n.metaKey||n.shiftKey||n.ctrlKey||n.defaultPrevented)return;const r=this._filterItems(n.composedPath())[0];let i;r&&!r.disabled&&(i=this.items.indexOf(r))>=0&&(this.selected=i)}_searchKey(n,r){this._searchReset=Vn.debounce(this._searchReset,Sp.after(500),()=>{this._searchBuf=""}),this._searchBuf+=r.toLowerCase(),this.items.some(o=>this.__isMatchingKey(o))||(this._searchBuf=r.toLowerCase());const i=this._searchBuf.length===1?n+1:n;return this._getAvailableIndex(this.items,i,1,o=>this.__isMatchingKey(o)&&getComputedStyle(o).display!=="none")}__isMatchingKey(n){return n.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(n){if(n.metaKey||n.ctrlKey)return;const r=n.key,i=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(r)&&r.length===1){const o=this._searchKey(i,r);o>=0&&this._focus(o);return}super._onKeyDown(n)}_isItemHidden(n){return getComputedStyle(n).display==="none"}_setFocusable(n){n=this._getAvailableIndex(this.items,n,1);const r=this.items[n];this.items.forEach(i=>{i.tabIndex=i===r?0:-1})}_focus(n){this.items.forEach((r,i)=>{r.focused=i===n}),this._setFocusable(n),this._scrollToItem(n),super._focus(n)}_scrollToItem(n){const r=this.items[n];if(!r)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),s=(this.items[n+1]||r).getBoundingClientRect(),l=(this.items[n-1]||r).getBoundingClientRect();let a=0;!this._isRTL&&s[i[1]]>=o[i[1]]||this._isRTL&&s[i[1]]<=o[i[1]]?a=s[i[1]]-o[i[1]]:(!this._isRTL&&l[i[0]]<=o[i[0]]||this._isRTL&&l[i[0]]>=o[i[0]])&&(a=l[i[0]]-o[i[0]]),this._scroll(a)}_scroll(n){if(this._vertical)this._scrollerElement.scrollTop+=n;else{const r=this.getAttribute("dir")||"ltr",i=Wx(this._scrollerElement,r)+n;Kx(this._scrollerElement,r,i)}}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yx extends Cm(Se(Ze(It(fe)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return ae`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}Z(Yx);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Js={start:"top",end:"bottom"},Zs={start:"left",end:"right"},Pc=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),Qx=e=>class extends e{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=w0(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(n=>{n.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(n=>{n.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(n,r){if(this.__removeUpdatePositionEventListeners(),r&&(r.__overlay=null,Pc.unobserve(r),n&&(this.__addUpdatePositionEventListeners(),r.__overlay=this,Pc.observe(r))),n){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(o=>{this.__margins[o]=parseInt(i[o],10)})),this.setAttribute("dir",i.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(n){this.contains(n.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const n=this.positionTarget.getBoundingClientRect(),r=this.__shouldAlignStartVertically(n);this.style.justifyContent=r?"flex-start":"flex-end";const i=this.__isRTL,o=this.__shouldAlignStartHorizontally(n,i),s=!i&&o||i&&!o;this.style.alignItems=s?"flex-start":"flex-end";const l=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(n,l,this.noVerticalOverlap,Js,this,r),u=this.__calculatePositionInOneDimension(n,l,this.noHorizontalOverlap,Zs,this,o);Object.assign(this.style,a,u),this.toggleAttribute("bottom-aligned",!r),this.toggleAttribute("top-aligned",r),this.toggleAttribute("end-aligned",!s),this.toggleAttribute("start-aligned",s)}__shouldAlignStartHorizontally(n,r){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),s=!r&&this.horizontalAlign==="start"||r&&this.horizontalAlign==="end";return this.__shouldAlignStart(n,i,o,this.__margins,s,this.noHorizontalOverlap,Zs)}__shouldAlignStartVertically(n){const r=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(n,r,i,this.__margins,o,this.noVerticalOverlap,Js)}__shouldAlignStart(n,r,i,o,s,l,a){const u=i-n[l?a.end:a.start]-o[a.end],d=n[l?a.start:a.end]-o[a.start],c=s?u:d,v=c>(s?d:u)||c>r;return s===v}__adjustBottomProperty(n,r,i){let o;if(n===r.end){if(r.end===Js.end){const s=Math.min(window.innerHeight,document.documentElement.clientHeight);if(i>s&&this.__oldViewportHeight){const l=this.__oldViewportHeight-s;o=i-l}this.__oldViewportHeight=s}if(r.end===Zs.end){const s=Math.min(window.innerWidth,document.documentElement.clientWidth);if(i>s&&this.__oldViewportWidth){const l=this.__oldViewportWidth-s;o=i-l}this.__oldViewportWidth=s}}return o}__calculatePositionInOneDimension(n,r,i,o,s,l){const a=l?o.start:o.end,u=l?o.end:o.start,d=parseFloat(s.style[a]||getComputedStyle(s)[a]),c=this.__adjustBottomProperty(a,o,d),p=r[l?o.start:o.end]-n[i===l?o.end:o.start],v=c?`${c}px`:`${d+p*(l?-1:1)}px`;return{[a]:v,[u]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Em=e=>class extends Zp(Qx(e)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",n=>{if(!n.defaultPrevented&&n.composedPath()[0]===this.$.overlay&&[38,40].indexOf(n.keyCode)>-1){const r=this.getFirstChild();r&&Array.isArray(r.items)&&r.items.length&&(n.preventDefault(),n.keyCode===38?r.items[r.items.length-1].focus():r.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const n=this.getBoundingClientRect(),r=this.$.overlay.getBoundingClientRect();let i=n.bottom-r.height;const o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){const s=getComputedStyle(o);i=i-parseFloat(s.bottom)-parseFloat(s.height)}return{xMax:n.right-r.width,xMin:n.left+r.width,yMax:i}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const n=this.$.content,r=getComputedStyle(n);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(r.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(r.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(r.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(r.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(n){let r=Ap(this.localName,n);for(;r;){if(r===this)return!0;r=r.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sm=T`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-menu-bar-overlay",[ns,Sm],{moduleId:"vaadin-menu-bar-overlay-styles"});class qx extends Em(ts(Ze(Se(fe)))){static get is(){return"vaadin-menu-bar-overlay"}static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}Z(qx);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Qo({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(e){this.info.sourceEvent=e;const t=e.composedPath();this.info.sourceEvent.__composedPath=t},touchstart(e){this._setSourceEvent(e),this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};const t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{const n=e.changedTouches[0];e.shiftKey||(Jp&&(this._fired=!0,this.fire(t,n.clientX,n.clientY)),Wn("tap"))},500)},touchmove(e){const n=this.info.touchStartCoords;(Math.abs(n.x-e.changedTouches[0].clientX)>15||Math.abs(n.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu(e){e.shiftKey||(this._setSourceEvent(e),this.fire(e.target,e.clientX,e.clientY),Wn("tap"))},fire(e,t,n){const r=this.info.sourceEvent,i=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});i.detail={x:t,y:n,sourceEvent:r},e.dispatchEvent(i),i.defaultPrevented&&r&&r.preventDefault&&r.preventDefault()}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gx extends xm(Se(Ze(fe))){static get is(){return"vaadin-context-menu-item"}static get template(){return ae`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}Z(Gx);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xx extends Cm(Se(Ze(It(fe)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return ae`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}Z(Xx);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */z("vaadin-context-menu-overlay",[ns,Sm],{moduleId:"vaadin-context-menu-overlay-styles"});class Jx extends Em(ts(Ze(Se(fe)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}Z(Jx);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zx{constructor(t,n){this.query=t,this.callback=n,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e1=e=>class extends e{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=n=>{n.composedPath().some(r=>r.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const n=this._overlayElement,r=n.getFirstChild();if(n.parentOverlay){const i=n.parentOverlay.querySelector("[expanded]");i&&i.hasAttribute("focused")&&r?r.focus():n.$.overlay.focus()}else r&&r.focus()}__openSubMenu(n,r,i){n.items=r._item.children,n.listenOn=r,n.overlayClass=i;const o=this._overlayElement,s=n._overlayElement;s.positionTarget=r,s.noHorizontalOverlap=!0,s._setParentOverlay(o),o.hasAttribute("theme")?n.setAttribute("theme",o.getAttribute("theme")):n.removeAttribute("theme");const l=s.$.content;l.style.minWidth="",r.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:r._item.children}}))}__createComponent(n){let r;return n.component instanceof HTMLElement?r=n.component:r=document.createElement(n.component||`${this._tagNamePrefix}-item`),r._hasVaadinItemMixin&&r.setAttribute("role","menuitem"),r.localName==="hr"?r.setAttribute("role","separator"):r.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(r,n,this._theme),r._item=n,n.text&&(r.textContent=n.text),n.className&&r.setAttribute("class",n.className),this.__toggleMenuComponentAttribute(r,"menu-item-checked",n.checked),this.__toggleMenuComponentAttribute(r,"disabled",n.disabled),n.children&&n.children.length&&(this.__updateExpanded(r,!1),r.setAttribute("aria-haspopup","true")),r}__initListBox(){const n=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&n.setAttribute("theme",this._theme),n.addEventListener("selected-changed",r=>{const{value:i}=r.detail;if(typeof i=="number"){const o=n.items[i]._item;n.selected=null,o.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:o}}))}}),n}__initOverlay(){const n=this._overlayElement;n.$.backdrop.addEventListener("click",()=>{this.close()}),n.addEventListener(es?"click":"mouseover",r=>{this.__showSubMenu(r)}),n.addEventListener("keydown",r=>{const{key:i}=r,o=this.__isRTL,s=i==="ArrowRight",l=i==="ArrowLeft";!o&&s||o&&l||i==="Enter"||i===" "?this.__showSubMenu(r):!o&&l||o&&s||i==="Escape"?(i==="Escape"&&r.stopPropagation(),this.close(),this.listenOn.focus()):i==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const n=document.createElement(this.constructor.is);return n._modeless=!0,n.openOn="opensubmenu",n.setAttribute("hidden",""),this.addEventListener("opened-changed",r=>{r.detail.value||this._subMenu.close()}),n.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),n.addEventListener("item-selected",r=>{const{detail:i}=r;this.dispatchEvent(new CustomEvent("item-selected",{detail:i}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",r=>{const i=r.target,o=r.detail.value,s=i.items.indexOf(o);o.keepOpen&&s>-1?(i._overlayElement.requestContentUpdate(),i._listBox._observer.flush(),i._listBox.children[s].focus()):o.keepOpen||this.close()}),n.addEventListener("opened-changed",r=>{if(!r.detail.value){const i=this._listBox.querySelector("[expanded]");i&&this.__updateExpanded(i,!1)}}),n}__showSubMenu(n,r=n.composedPath().find(i=>i.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(n,r)});return}const i=this._subMenu;if(r){const{children:o}=r._item;if(i.items!==o&&i.close(),!this.opened)return;if(o&&o.length){this.__updateExpanded(r,!0);const{overlayClass:s}=this;this.__openSubMenu(i,r,s)}else i.listenOn.focus()}}__itemsRenderer(n,r,{detail:i}){this.__initMenu(n,r);const o=n.querySelector(this.constructor.is);o.closeOn=r.closeOn;const s=n.querySelector(`${this._tagNamePrefix}-list-box`);s.innerHTML="",[...i.children||r.items].forEach(l=>{const a=this.__createComponent(l);s.appendChild(a)})}_setMenuItemTheme(n,r,i){let o=n.getAttribute("theme")||i;r.theme!=null&&(o=Array.isArray(r.theme)?r.theme.join(" "):r.theme),this.__updateTheme(n,o)}__toggleMenuComponentAttribute(n,r,i){i?(n.setAttribute(r,""),n[`__has-${r}`]=!0):n[`__has-${r}`]&&(n.removeAttribute(r),n[`__has-${r}`]=!1)}__initMenu(n,r){if(n.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const i=this.__initListBox();this._listBox=i,n.appendChild(i);const o=this.__initSubMenu();this._subMenu=o,n.appendChild(o),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(n,r){n.setAttribute("aria-expanded",r.toString()),n.toggleAttribute("expanded",r)}__updateTheme(n,r){r?n.setAttribute("theme",r):n.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const t1=e=>class extends e1(e){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_touch:{type:Boolean,value:es},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new Zx(this._wideMediaQuery,n=>{this._wide=n}))}_createOverlay(){const n=document.createElement(`${this._tagNamePrefix}-overlay`);n.owner=this,n.addEventListener("opened-changed",r=>{this._onOverlayOpened(r)}),n.addEventListener("vaadin-overlay-open",r=>{this._onVaadinOverlayOpen(r)}),this._overlayElement=n}_onOverlayOpened(n){this._setOpened(n.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(n,r){n&&(n.model=r)}_overlayModelessChanged(n,r){n&&(n.modeless=r)}_overlayPhoneChanged(n,r){n&&(n.toggleAttribute("phone",r),n.withBackdrop=r)}_overlayThemeChanged(n,r){n&&(r?n.setAttribute("theme",r):n.removeAttribute("theme"))}_targetOrOpenOnChanged(n,r){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),n&&r&&(this._listen(n,r,this._boundOpen),this._oldListenOn=n,this._oldOpenOn=r)}_touchOrWideChanged(n,r){this._phone=!r&&n}_setListenOnUserSelect(n){this.listenOn.style.webkitTouchCallout=n,this.listenOn.style.webkitUserSelect=n,this.listenOn.style.userSelect=n,document.getSelection().removeAllRanges()}_closeOnChanged(n,r){const i="vaadin-overlay-outside-click",o=this._overlayElement;r&&this._unlisten(o,r,this._boundClose),n?(this._listen(o,n,this._boundClose),o.removeEventListener(i,this._boundPreventDefault)):o.addEventListener(i,this._boundPreventDefault)}_preventDefault(n){n.preventDefault()}_openedChanged(n){n?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=n}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(n,r){if(r){if(n)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),n=this.__itemsRenderer}this._overlayElement.renderer=n}close(){this._setOpened(!1)}_contextTarget(n){if(this.selector){const r=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(r,i=>n.composedPath().indexOf(i)>-1)[0]}return n.target}open(n){n&&!this.opened&&(this._context={detail:n.detail,target:this._contextTarget(n)},this._context.target&&(n.preventDefault(),n.stopPropagation(),this.__x=this._getEventCoordinate(n,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(n,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const n=window.pageYOffset-this.__pageYOffset,r=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-r),this.__adjustPosition("right",r),this.__adjustPosition("top",-n),this.__adjustPosition("bottom",n),this.__pageYOffset+=n,this.__pageXOffset+=r}__adjustPosition(n,r){const o=this._overlayElement.style;o[n]=`${(parseInt(o[n])||0)+r}px`}__alignOverlayPosition(){const n=this._overlayElement;if(n.positionTarget)return;const r=n.style;["top","right","bottom","left"].forEach(c=>r.removeProperty(c)),["right-aligned","end-aligned","bottom-aligned"].forEach(c=>n.removeAttribute(c));const{xMax:i,xMin:o,yMax:s}=n.getBoundaries(),l=this.__x,a=this.__y,u=document.documentElement.clientWidth,d=document.documentElement.clientHeight;this.__isRTL?l>u/2||l>o?r.right=`${Math.max(0,u-l)}px`:(r.left=`${l}px`,this._setEndAligned(n)):l<u/2||l<i?r.left=`${l}px`:(r.right=`${Math.max(0,u-l)}px`,this._setEndAligned(n)),a<d/2||a<s?r.top=`${a}px`:(r.bottom=`${Math.max(0,d-a)}px`,n.setAttribute("bottom-aligned",""))}_setEndAligned(n){n.setAttribute("end-aligned",""),this.__isRTL||n.setAttribute("right-aligned","")}_getEventCoordinate(n,r){if(n.detail instanceof Object){if(n.detail[r])return n.detail[r];if(n.detail.sourceEvent)return this._getEventCoordinate(n.detail.sourceEvent,r)}else{const i=`client${r.toUpperCase()}`,o=n.changedTouches?n.changedTouches[0][i]:n[i];if(o===0){const s=n.target.getBoundingClientRect();return r==="x"?s.left:s.top+s.height}return o}}_listen(n,r,i){rn[r]?sa(n,r,i):n.addEventListener(r,i)}_unlisten(n,r,i){rn[r]?F0(n,r,i):n.removeEventListener(r,i)}_onGlobalContextMenu(n){n.shiftKey||(n.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class km extends t1(em(It(an(du(fe))))){static get template(){return ae`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),Su(this)}_attachDom(t){const n=this.attachShadow({mode:"open"});return n.appendChild(t),n.appendChild(this._overlayElement),n}}Z(km);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class n1 extends km{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return ae`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(t){this._overlayElement.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}Z(n1);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const r1=e=>class extends bm(mm(Go(yu(It(e))))){static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String},openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(xu)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new li(this,"overflow","vaadin-menu-bar-button",{initializer:i=>{i.setAttribute("hidden","");const o=document.createElement("div");o.setAttribute("aria-hidden","true"),o.innerHTML="&centerdot;".repeat(3),i.appendChild(o),this._overflow=i,this._initButtonAttrs(i)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu._overlayElement.addEventListener("keydown",this.__boundOnContextMenuKeydown);const r=this.shadowRoot.querySelector('[part="container"]');r.addEventListener("click",this.__onButtonClick.bind(this)),r.addEventListener("mouseover",i=>this._onMouseOver(i)),this._container=r}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}_disabledChanged(n,r){super._disabledChanged(n,r),r!==n&&this.__updateButtonsDisabled(n)}_themeChanged(n,r,i){r&&i&&(this._buttons.forEach(o=>this._setButtonTheme(o,n)),this.__detectOverflow()),n?this._subMenu.setAttribute("theme",n):this._subMenu.removeAttribute("theme")}__hasOverflowChanged(n,r){r&&r.toggleAttribute("hidden",!n)}_menuItemsChanged(n,r,i){if(!r||!i)return;n!==this._oldItems&&(this._oldItems=n,this.__renderButtons(n));const o=this._subMenu;o&&o.opened&&o.close()}__i18nChanged(n,r){r&&n&&n.moreOptions!==void 0&&(n.moreOptions?r.setAttribute("aria-label",n.moreOptions):r.removeAttribute("aria-label"))}__getOverflowCount(n){return n.item&&n.item.children&&n.item.children.length||0}__restoreButtons(n){n.forEach(r=>{r.disabled=r.item&&r.item.disabled||this.disabled,r.style.visibility="",r.style.position="";const i=r.item&&r.item.component;i instanceof HTMLElement&&i.getAttribute("role")==="menuitem"&&this.__restoreItem(r,i)}),this.__updateOverflow([])}__restoreItem(n,r){n.appendChild(r),r.removeAttribute("role"),r.removeAttribute("aria-expanded"),r.removeAttribute("aria-haspopup"),r.removeAttribute("tabindex")}__updateButtonsDisabled(n){this._buttons.forEach(r=>{r.disabled=n||r.item&&r.item.disabled})}__updateOverflow(n){this._overflow.item={children:n},this._hasOverflow=n.length>0}__setOverflowItems(n,r){const i=this._container;if(i.offsetWidth<i.scrollWidth){this._hasOverflow=!0;const o=this.__isRTL,s=i.getBoundingClientRect().left;let l;for(l=n.length;l>0;l--){const d=n[l-1],c=getComputedStyle(d),p=d.getBoundingClientRect().left-s;if(!o&&p+d.offsetWidth<i.offsetWidth-r.offsetWidth||o&&p>=r.offsetWidth)break;d.disabled=!0,d.style.visibility="hidden",d.style.position="absolute",d.style.width=c.width}const a=n.filter((d,c)=>c>=l).map(d=>d.item);this.__updateOverflow(a);const u=n.slice(0,l);l>0&&!u.some(d=>d.getAttribute("tabindex")==="0")&&this._setTabindex(u[l-1],!0)}}__detectOverflow(){const n=this._overflow,r=this._buttons.filter(l=>l!==n),i=this.__getOverflowCount(n);this.__restoreButtons(r),this.__setOverflowItems(r,n);const o=this.__getOverflowCount(n);i!==o&&this._subMenu.opened&&this._subMenu.close();const s=o===r.length||o===0&&r.length===1;this.toggleAttribute("has-single-button",s)}_removeButtons(){this._buttons.forEach(n=>{n!==this._overflow&&this.removeChild(n)})}_initButton(n){const r=document.createElement("vaadin-menu-bar-button"),i={...n};if(r.item=i,n.component){const o=this.__getComponent(i);i.component=o,o.item=i,r.appendChild(o)}else n.text&&(r.textContent=n.text);return n.className&&(r.className=n.className),r}_initButtonAttrs(n){n.setAttribute("role","menuitem"),(n===this._overflow||n.item&&n.item.children)&&(n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded","false"))}_setButtonDisabled(n,r){n.disabled=r,n.setAttribute("tabindex",r?"-1":"0")}_setButtonTheme(n,r){let i=r;const o=n.item&&n.item.theme;o!=null&&(i=Array.isArray(o)?o.join(" "):o),i?n.setAttribute("theme",i):n.removeAttribute("theme")}__getComponent(n){const r=n.component;let i;const o=r instanceof HTMLElement;if(o&&r.localName==="vaadin-menu-bar-item"?i=r:(i=document.createElement("vaadin-menu-bar-item"),i.appendChild(o?r:document.createElement(r))),n.text){const s=i.firstChild||i;s.textContent=n.text}return i}__renderButtons(n=[]){this._removeButtons(),n.length!==0&&(n.forEach(r=>{const i=this._initButton(r);this.insertBefore(i,this._overflow),this._setButtonDisabled(i,r.disabled),this._initButtonAttrs(i),this._setButtonTheme(i,this._theme)}),this.__detectOverflow())}_showTooltip(n,r){const i=this._tooltipController.node;i&&i.isConnected&&(i.generator===void 0&&(i.generator=({item:o})=>o&&o.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(n),this._tooltipController.setContext({item:n.item}),i._stateController.open({hover:r,focus:!r})))}_hideTooltip(n){const r=this._tooltipController&&this._tooltipController.node;r&&r._stateController.close(n)}_setExpanded(n,r){n.toggleAttribute("expanded",r),n.toggleAttribute("active",r),n.setAttribute("aria-expanded",r?"true":"false")}_setTabindex(n,r){n.setAttribute("tabindex",r?"0":"-1")}_focusItem(n,r){const i=r&&this.focused===this._expandedButton;i&&this._close(),super._focusItem(n,r),this._buttons.forEach(o=>{this._setTabindex(o,o===n)}),i&&n.item&&n.item.children?this.__openSubMenu(n,!0,{keepFocus:!0}):n===this._overflow?this._hideTooltip():this._showTooltip(n)}_getButtonFromEvent(n){return Array.from(n.composedPath()).find(r=>r.localName==="vaadin-menu-bar-button")}_setFocused(n){if(n){const r=this.querySelector('[tabindex="0"]');r&&this._buttons.forEach(i=>{this._setTabindex(i,i===r),i===r&&i!==this._overflow&&Rp()&&this._showTooltip(i)})}else this._hideTooltip()}_onArrowDown(n){n.preventDefault();const r=this._getButtonFromEvent(n);r===this._expandedButton?this._focusFirstItem():this.__openSubMenu(r,!0)}_onArrowUp(n){n.preventDefault();const r=this._getButtonFromEvent(n);r===this._expandedButton?this._focusLastItem():this.__openSubMenu(r,!0,{focusLast:!0})}_onEscape(n){n.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(n){switch(n.key){case"ArrowDown":this._onArrowDown(n);break;case"ArrowUp":this._onArrowUp(n);break;default:super._onKeyDown(n);break}}_onMouseOver(n){const r=this._getButtonFromEvent(n);if(!r)this._hideTooltip();else if(r!==this._expandedButton){const i=this._subMenu.opened;r.item.children&&(this.openOnHover||i)?this.__openSubMenu(r,!1):i&&this._close(),r===this._overflow||this.openOnHover&&r.item.children?this._hideTooltip():this._showTooltip(r,!0)}}__onContextMenuKeydown(n){const r=Array.from(n.composedPath()).find(i=>i._item);if(r){const i=r.parentNode;n.keyCode===38&&r===i.items[0]&&this._close(!0),(n.keyCode===37||n.keyCode===39&&!r._item.children)&&(n.stopImmediatePropagation(),this._onKeyDown(n))}}__fireItemSelected(n){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:n}}))}__onButtonClick(n){n.stopPropagation();const r=this._getButtonFromEvent(n);r&&this.__openSubMenu(r,r.__triggeredWithActiveKeys)}__openSubMenu(n,r,i={}){const o=this._subMenu,s=n.item;if(o.opened&&(this._close(),o.listenOn===n))return;const l=s&&s.children;if(!l||l.length===0){this.__fireItemSelected(s);return}o.items=l,o.listenOn=n;const a=o._overlayElement;a.positionTarget=n,a.noVerticalOverlap=!0,this._expandedButton=n,requestAnimationFrame(()=>{n.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:l}})),this._hideTooltip(!0),this._setExpanded(n,!0)}),this.style.pointerEvents="auto",a.addEventListener("vaadin-overlay-open",()=>{i.focusLast&&this._focusLastItem(),i.keepFocus&&this._focusItem(this._expandedButton,!1),r||a.$.overlay.focus(),a._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu._overlayElement.firstElementChild.focus()}_focusLastItem(){const n=this._subMenu._overlayElement.firstElementChild,r=n.items[n.items.length-1];r&&r.focus()}__onItemSelected(n){n.stopPropagation(),this.__fireItemSelected(n.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(n){const r=this._expandedButton;r&&r.hasAttribute("expanded")&&(this._setExpanded(r,!1),n&&this._focusItem(r,!1),this._expandedButton=null)}_close(n){this.style.pointerEvents="",this.__deactivateButton(n),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Am extends r1(an(Se(fe))){static get template(){return ae`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}ready(){super.ready(),this._tooltipController=new Yo(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}}Z(Am);var i1={onItemSelected:"item-selected"},o1=Jn({elementClass:Am,events:i1,react:Qn,tagName:"vaadin-menu-bar"});function s1(){const[e,t]=Re.useState(!0),n=[{text:"View",theme:"custom-theme"},{text:"Edit"},{text:"Share"}],r=()=>{t(!0)},i=()=>{t(!1)},o=xw(0);return q.jsxs(q.Fragment,{children:[q.jsx(o1,{items:n}),q.jsx(tx,{"aria-label":"Add note",draggable:!0,modeless:!0,opened:e,onOpenedChanged:s=>{t(s.detail.value)},headerRenderer:()=>q.jsx("h2",{className:"draggable",style:{flex:1,cursor:"move",margin:0,fontSize:"1.5em",fontWeight:"bold",padding:"var(--lumo-space-m) 0"},children:"Add note"}),footerRenderer:()=>q.jsxs(q.Fragment,{children:[q.jsx(fr,{onClick:i,children:"Cancel"}),q.jsx(fr,{theme:"primary",onClick:i,children:"Add note"})]}),children:q.jsx(Ac,{theme:"spacing",style:{width:"300px",maxWidth:"100%",alignItems:"stretch"},children:q.jsxs(Ac,{style:{alignItems:"stretch"},children:[q.jsx(Ox,{label:"Title"}),q.jsx(Dx,{label:"Description"})]})})}),q.jsx(fr,{onClick:r,children:"Show dialog"}),q.jsx(fr,{className:"float-left",theme:"icon",onClick:()=>{document.documentElement.getAttribute("theme")==="dark"?document.documentElement.setAttribute("theme","light"):document.documentElement.setAttribute("theme","dark")}}),q.jsx("div",{className:"flex items-center justify-center h-screen",children:q.jsxs(fr,{onClick:()=>o.value++,children:["Count : ",o]})})]})}el.createRoot(document.getElementById("root")).render(q.jsx(Bc.StrictMode,{children:q.jsx(s1,{})}));
