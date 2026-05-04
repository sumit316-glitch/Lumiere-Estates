(function(){const G=document.createElement("link").relList;if(G&&G.supports&&G.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))Fe(B);new MutationObserver(B=>{for(const K of B)if(K.type==="childList")for(const Se of K.addedNodes)Se.tagName==="LINK"&&Se.rel==="modulepreload"&&Fe(Se)}).observe(document,{childList:!0,subtree:!0});function h(B){const K={};return B.integrity&&(K.integrity=B.integrity),B.referrerPolicy&&(K.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?K.credentials="include":B.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function Fe(B){if(B.ep)return;B.ep=!0;const K=h(B);fetch(B.href,K)}})();function Pu(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var Na={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu;function zd(){if(xu)return A;xu=1;var O=Symbol.for("react.element"),G=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),Fe=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),De=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),ae=Symbol.iterator;function ie(d){return d===null||typeof d!="object"?null:(d=ae&&d[ae]||d["@@iterator"],typeof d=="function"?d:null)}var Qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oe=Object.assign,X={};function $(d,v,j){this.props=d,this.context=v,this.refs=X,this.updater=j||Qe}$.prototype.isReactComponent={},$.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},$.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ae(){}Ae.prototype=$.prototype;function Ye(d,v,j){this.props=d,this.context=v,this.refs=X,this.updater=j||Qe}var Ge=Ye.prototype=new Ae;Ge.constructor=Ye,Oe(Ge,$.prototype),Ge.isPureReactComponent=!0;var ce=Array.isArray,Ue=Object.prototype.hasOwnProperty,Ce={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function we(d,v,j){var U,b={},W=null,Z=null;if(v!=null)for(U in v.ref!==void 0&&(Z=v.ref),v.key!==void 0&&(W=""+v.key),v)Ue.call(v,U)&&!pe.hasOwnProperty(U)&&(b[U]=v[U]);var Q=arguments.length-2;if(Q===1)b.children=j;else if(1<Q){for(var le=Array(Q),qe=0;qe<Q;qe++)le[qe]=arguments[qe+2];b.children=le}if(d&&d.defaultProps)for(U in Q=d.defaultProps,Q)b[U]===void 0&&(b[U]=Q[U]);return{$$typeof:O,type:d,key:W,ref:Z,props:b,_owner:Ce.current}}function ht(d,v){return{$$typeof:O,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function et(d){return typeof d=="object"&&d!==null&&d.$$typeof===O}function P(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(j){return v[j]})}var T=/\/+/g;function F(d,v){return typeof d=="object"&&d!==null&&d.key!=null?P(""+d.key):v.toString(36)}function ee(d,v,j,U,b){var W=typeof d;(W==="undefined"||W==="boolean")&&(d=null);var Z=!1;if(d===null)Z=!0;else switch(W){case"string":case"number":Z=!0;break;case"object":switch(d.$$typeof){case O:case G:Z=!0}}if(Z)return Z=d,b=b(Z),d=U===""?"."+F(Z,0):U,ce(b)?(j="",d!=null&&(j=d.replace(T,"$&/")+"/"),ee(b,v,j,"",function(qe){return qe})):b!=null&&(et(b)&&(b=ht(b,j+(!b.key||Z&&Z.key===b.key?"":(""+b.key).replace(T,"$&/")+"/")+d)),v.push(b)),1;if(Z=0,U=U===""?".":U+":",ce(d))for(var Q=0;Q<d.length;Q++){W=d[Q];var le=U+F(W,Q);Z+=ee(W,v,j,le,b)}else if(le=ie(d),typeof le=="function")for(d=le.call(d),Q=0;!(W=d.next()).done;)W=W.value,le=U+F(W,Q++),Z+=ee(W,v,j,le,b);else if(W==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return Z}function q(d,v,j){if(d==null)return d;var U=[],b=0;return ee(d,U,"","",function(W){return v.call(j,W,b++)}),U}function re(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(j){(d._status===0||d._status===-1)&&(d._status=1,d._result=j)},function(j){(d._status===0||d._status===-1)&&(d._status=2,d._result=j)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var M={current:null},x={transition:null},L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:x,ReactCurrentOwner:Ce};function N(){throw Error("act(...) is not supported in production builds of React.")}return A.Children={map:q,forEach:function(d,v,j){q(d,function(){v.apply(this,arguments)},j)},count:function(d){var v=0;return q(d,function(){v++}),v},toArray:function(d){return q(d,function(v){return v})||[]},only:function(d){if(!et(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},A.Component=$,A.Fragment=h,A.Profiler=B,A.PureComponent=Ye,A.StrictMode=Fe,A.Suspense=Ee,A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,A.act=N,A.cloneElement=function(d,v,j){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var U=Oe({},d.props),b=d.key,W=d.ref,Z=d._owner;if(v!=null){if(v.ref!==void 0&&(W=v.ref,Z=Ce.current),v.key!==void 0&&(b=""+v.key),d.type&&d.type.defaultProps)var Q=d.type.defaultProps;for(le in v)Ue.call(v,le)&&!pe.hasOwnProperty(le)&&(U[le]=v[le]===void 0&&Q!==void 0?Q[le]:v[le])}var le=arguments.length-2;if(le===1)U.children=j;else if(1<le){Q=Array(le);for(var qe=0;qe<le;qe++)Q[qe]=arguments[qe+2];U.children=Q}return{$$typeof:O,type:d.type,key:b,ref:W,props:U,_owner:Z}},A.createContext=function(d){return d={$$typeof:Se,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:K,_context:d},d.Consumer=d},A.createElement=we,A.createFactory=function(d){var v=we.bind(null,d);return v.type=d,v},A.createRef=function(){return{current:null}},A.forwardRef=function(d){return{$$typeof:Re,render:d}},A.isValidElement=et,A.lazy=function(d){return{$$typeof:it,_payload:{_status:-1,_result:d},_init:re}},A.memo=function(d,v){return{$$typeof:De,type:d,compare:v===void 0?null:v}},A.startTransition=function(d){var v=x.transition;x.transition={};try{d()}finally{x.transition=v}},A.unstable_act=N,A.useCallback=function(d,v){return M.current.useCallback(d,v)},A.useContext=function(d){return M.current.useContext(d)},A.useDebugValue=function(){},A.useDeferredValue=function(d){return M.current.useDeferredValue(d)},A.useEffect=function(d,v){return M.current.useEffect(d,v)},A.useId=function(){return M.current.useId()},A.useImperativeHandle=function(d,v,j){return M.current.useImperativeHandle(d,v,j)},A.useInsertionEffect=function(d,v){return M.current.useInsertionEffect(d,v)},A.useLayoutEffect=function(d,v){return M.current.useLayoutEffect(d,v)},A.useMemo=function(d,v){return M.current.useMemo(d,v)},A.useReducer=function(d,v,j){return M.current.useReducer(d,v,j)},A.useRef=function(d){return M.current.useRef(d)},A.useState=function(d){return M.current.useState(d)},A.useSyncExternalStore=function(d,v,j){return M.current.useSyncExternalStore(d,v,j)},A.useTransition=function(){return M.current.useTransition()},A.version="18.3.1",A}var ku;function Lu(){return ku||(ku=1,Na.exports=zd()),Na.exports}var ye=Lu();const a=Pu(ye);var Pl={},Sa={exports:{}},$e={},Ca={exports:{}},za={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function _d(){return Nu||(Nu=1,(function(O){function G(x,L){var N=x.length;x.push(L);e:for(;0<N;){var d=N-1>>>1,v=x[d];if(0<B(v,L))x[d]=L,x[N]=v,N=d;else break e}}function h(x){return x.length===0?null:x[0]}function Fe(x){if(x.length===0)return null;var L=x[0],N=x.pop();if(N!==L){x[0]=N;e:for(var d=0,v=x.length,j=v>>>1;d<j;){var U=2*(d+1)-1,b=x[U],W=U+1,Z=x[W];if(0>B(b,N))W<v&&0>B(Z,b)?(x[d]=Z,x[W]=N,d=W):(x[d]=b,x[U]=N,d=U);else if(W<v&&0>B(Z,N))x[d]=Z,x[W]=N,d=W;else break e}}return L}function B(x,L){var N=x.sortIndex-L.sortIndex;return N!==0?N:x.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var K=performance;O.unstable_now=function(){return K.now()}}else{var Se=Date,Re=Se.now();O.unstable_now=function(){return Se.now()-Re}}var Ee=[],De=[],it=1,ae=null,ie=3,Qe=!1,Oe=!1,X=!1,$=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ge(x){for(var L=h(De);L!==null;){if(L.callback===null)Fe(De);else if(L.startTime<=x)Fe(De),L.sortIndex=L.expirationTime,G(Ee,L);else break;L=h(De)}}function ce(x){if(X=!1,Ge(x),!Oe)if(h(Ee)!==null)Oe=!0,re(Ue);else{var L=h(De);L!==null&&M(ce,L.startTime-x)}}function Ue(x,L){Oe=!1,X&&(X=!1,Ae(we),we=-1),Qe=!0;var N=ie;try{for(Ge(L),ae=h(Ee);ae!==null&&(!(ae.expirationTime>L)||x&&!P());){var d=ae.callback;if(typeof d=="function"){ae.callback=null,ie=ae.priorityLevel;var v=d(ae.expirationTime<=L);L=O.unstable_now(),typeof v=="function"?ae.callback=v:ae===h(Ee)&&Fe(Ee),Ge(L)}else Fe(Ee);ae=h(Ee)}if(ae!==null)var j=!0;else{var U=h(De);U!==null&&M(ce,U.startTime-L),j=!1}return j}finally{ae=null,ie=N,Qe=!1}}var Ce=!1,pe=null,we=-1,ht=5,et=-1;function P(){return!(O.unstable_now()-et<ht)}function T(){if(pe!==null){var x=O.unstable_now();et=x;var L=!0;try{L=pe(!0,x)}finally{L?F():(Ce=!1,pe=null)}}else Ce=!1}var F;if(typeof Ye=="function")F=function(){Ye(T)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,q=ee.port2;ee.port1.onmessage=T,F=function(){q.postMessage(null)}}else F=function(){$(T,0)};function re(x){pe=x,Ce||(Ce=!0,F())}function M(x,L){we=$(function(){x(O.unstable_now())},L)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(x){x.callback=null},O.unstable_continueExecution=function(){Oe||Qe||(Oe=!0,re(Ue))},O.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<x?Math.floor(1e3/x):5},O.unstable_getCurrentPriorityLevel=function(){return ie},O.unstable_getFirstCallbackNode=function(){return h(Ee)},O.unstable_next=function(x){switch(ie){case 1:case 2:case 3:var L=3;break;default:L=ie}var N=ie;ie=L;try{return x()}finally{ie=N}},O.unstable_pauseExecution=function(){},O.unstable_requestPaint=function(){},O.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=ie;ie=x;try{return L()}finally{ie=N}},O.unstable_scheduleCallback=function(x,L,N){var d=O.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?d+N:d):N=d,x){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=N+v,x={id:it++,callback:L,priorityLevel:x,startTime:N,expirationTime:v,sortIndex:-1},N>d?(x.sortIndex=N,G(De,x),h(Ee)===null&&x===h(De)&&(X?(Ae(we),we=-1):X=!0,M(ce,N-d))):(x.sortIndex=v,G(Ee,x),Oe||Qe||(Oe=!0,re(Ue))),x},O.unstable_shouldYield=P,O.unstable_wrapCallback=function(x){var L=ie;return function(){var N=ie;ie=L;try{return x.apply(this,arguments)}finally{ie=N}}}})(za)),za}var Su;function Pd(){return Su||(Su=1,Ca.exports=_d()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Ld(){if(Cu)return $e;Cu=1;var O=Lu(),G=Pd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fe=new Set,B={};function K(e,t){Se(e,t),Se(e+"Capture",t)}function Se(e,t){for(B[e]=t,e=0;e<t.length;e++)Fe.add(t[e])}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ee=Object.prototype.hasOwnProperty,De=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,it={},ae={};function ie(e){return Ee.call(ae,e)?!0:Ee.call(it,e)?!1:De.test(e)?ae[e]=!0:(it[e]=!0,!1)}function Qe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oe(e,t,n,r){if(t===null||typeof t>"u"||Qe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ae=/[\-:]([a-z])/g;function Ye(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ae,Ye);$[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ae,Ye);$[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ae,Ye);$[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ge(e,t,n,r){var l=$.hasOwnProperty(t)?$[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Oe(t,n,l,r)&&(n=null),r||l===null?ie(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ce=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),et=Symbol.for("react.provider"),P=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),x=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var j=!1;function U(e,t){if(!e||j)return"";j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{j=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function b(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case Ce:return"Portal";case ht:return"Profiler";case we:return"StrictMode";case F:return"Suspense";case ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case et:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}function Z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qe(e){var t=le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=qe(e))}function _a(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=le(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function La(e,t){t=t.checked,t!=null&&Ge(e,"checked",t,!1)}function Tl(e,t){La(e,t);var n=Q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,Q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Dn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function Ra(e,t){var n=Q(t.value),r=Q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ia=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tu=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Tu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function ja(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Fa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ja(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Mu=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Mu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,un=null,cn=null;function Aa(e){if(e=rr(e)){if(typeof Al!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Wr(t),Al(e.stateNode,e.type,t))}}function Ua(e){un?cn?cn.push(e):cn=[e]:un=e}function Ba(){if(un){var e=un,t=cn;if(cn=un=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Va(e,t){return e(t)}function ba(){}var Ul=!1;function Wa(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return Va(e,t,n)}finally{Ul=!1,(un!==null||cn!==null)&&(ba(),Ba())}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Wr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Bl=!1;if(Re)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Bl=!1}function Ru(e,t,n,r,l,o,i,s,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var An=!1,xr=null,kr=!1,Vl=null,Du={onError:function(e){An=!0,xr=e}};function Ou(e,t,n,r,l,o,i,s,u){An=!1,xr=null,Ru.apply(Du,arguments)}function Iu(e,t,n,r,l,o,i,s,u){if(Ou.apply(this,arguments),An){if(An){var p=xr;An=!1,xr=null}else throw Error(h(198));kr||(kr=!0,Vl=p)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ha(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $a(e){if(Gt(e)!==e)throw Error(h(188))}function ju(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return $a(l),e;if(o===r)return $a(l),t;o=o.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Qa(e){return e=ju(e),e!==null?Ya(e):null}function Ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ya(e);if(t!==null)return t;e=e.sibling}return null}var Ga=G.unstable_scheduleCallback,qa=G.unstable_cancelCallback,Fu=G.unstable_shouldYield,Au=G.unstable_requestPaint,fe=G.unstable_now,Uu=G.unstable_getCurrentPriorityLevel,bl=G.unstable_ImmediatePriority,Ka=G.unstable_UserBlockingPriority,Nr=G.unstable_NormalPriority,Bu=G.unstable_LowPriority,Xa=G.unstable_IdlePriority,Sr=null,gt=null;function Vu(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Hu,bu=Math.log,Wu=Math.LN2;function Hu(e){return e>>>=0,e===0?32:31-(bu(e)/Wu|0)|0}var Cr=64,zr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Un(s):(o&=i,o!==0&&(r=Un(o)))}else i=n&~l,i!==0?r=Un(i):o!==0&&(r=Un(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),l=1<<n,r|=e[n],t&=~l;return r}function $u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-st(o),s=1<<i,u=l[i];u===-1?((s&n)===0||(s&r)!==0)&&(l[i]=$u(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Za(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function Yu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-st(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function $l(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Y=0;function Ja(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ei,Ql,ti,ni,ri,Yl=!1,Pr=[],Lt=null,Tt=null,Mt=null,Vn=new Map,bn=new Map,Rt=[],Gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function li(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Wn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&Ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qu(e,t,n,r,l){switch(t){case"focusin":return Lt=Wn(Lt,e,t,n,r,l),!0;case"dragenter":return Tt=Wn(Tt,e,t,n,r,l),!0;case"mouseover":return Mt=Wn(Mt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Vn.set(o,Wn(Vn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,bn.set(o,Wn(bn.get(o)||null,e,t,n,r,l)),!0}return!1}function oi(e){var t=qt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ha(n),t!==null){e.blockedOn=t,ri(e.priority,function(){ti(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=rr(n),t!==null&&Ql(t),e.blockedOn=n,!1;t.shift()}return!0}function ai(e,t,n){Lr(e)&&n.delete(t)}function Ku(){Yl=!1,Lt!==null&&Lr(Lt)&&(Lt=null),Tt!==null&&Lr(Tt)&&(Tt=null),Mt!==null&&Lr(Mt)&&(Mt=null),Vn.forEach(ai),bn.forEach(ai)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,G.unstable_scheduleCallback(G.unstable_NormalPriority,Ku)))}function $n(e){function t(l){return Hn(l,e)}if(0<Pr.length){Hn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Hn(Lt,e),Tt!==null&&Hn(Tt,e),Mt!==null&&Hn(Mt,e),Vn.forEach(t),bn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)oi(n),n.blockedOn===null&&Rt.shift()}var dn=ce.ReactCurrentBatchConfig,Tr=!0;function Xu(e,t,n,r){var l=Y,o=dn.transition;dn.transition=null;try{Y=1,Gl(e,t,n,r)}finally{Y=l,dn.transition=o}}function Zu(e,t,n,r){var l=Y,o=dn.transition;dn.transition=null;try{Y=4,Gl(e,t,n,r)}finally{Y=l,dn.transition=o}}function Gl(e,t,n,r){if(Tr){var l=ql(e,t,n,r);if(l===null)mo(e,t,r,Mr,n),li(e,r);else if(qu(l,e,t,n,r))r.stopPropagation();else if(li(e,r),t&4&&-1<Gu.indexOf(e)){for(;l!==null;){var o=rr(l);if(o!==null&&ei(o),o=ql(e,t,n,r),o===null&&mo(e,t,r,Mr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else mo(e,t,r,null,n)}}var Mr=null;function ql(e,t,n,r){if(Mr=null,e=Fl(r),e=qt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ha(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function ii(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uu()){case bl:return 1;case Ka:return 4;case Nr:case Bu:return 16;case Xa:return 536870912;default:return 16}default:return 16}}var Dt=null,Kl=null,Rr=null;function si(){if(Rr)return Rr;var e,t=Kl,n=t.length,r,l="value"in Dt?Dt.value:Dt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function ui(){return!1}function Ke(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Or:ui,this.isPropagationStopped=ui,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ke(fn),Qn=N({},fn,{view:0,detail:0}),Ju=Ke(Qn),Zl,Jl,Yn,Ir=N({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Zl=e.screenX-Yn.screenX,Jl=e.screenY-Yn.screenY):Jl=Zl=0,Yn=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),ci=Ke(Ir),ec=N({},Ir,{dataTransfer:0}),tc=Ke(ec),nc=N({},Qn,{relatedTarget:0}),eo=Ke(nc),rc=N({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),lc=Ke(rc),oc=N({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ac=Ke(oc),ic=N({},fn,{data:0}),di=Ke(ic),sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cc[e])?!!t[e]:!1}function to(){return dc}var fc=N({},Qn,{key:function(e){if(e.key){var t=sc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mc=Ke(fc),pc=N({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fi=Ke(pc),hc=N({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),gc=Ke(hc),vc=N({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yc=Ke(vc),Ec=N({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wc=Ke(Ec),xc=[9,13,27,32],no=Re&&"CompositionEvent"in window,Gn=null;Re&&"documentMode"in document&&(Gn=document.documentMode);var kc=Re&&"TextEvent"in window&&!Gn,mi=Re&&(!no||Gn&&8<Gn&&11>=Gn),pi=" ",hi=!1;function gi(e,t){switch(e){case"keyup":return xc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Nc(e,t){switch(e){case"compositionend":return vi(t);case"keypress":return t.which!==32?null:(hi=!0,pi);case"textInput":return e=t.data,e===pi&&hi?null:e;default:return null}}function Sc(e,t){if(mn)return e==="compositionend"||!no&&gi(e,t)?(e=si(),Rr=Kl=Dt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mi&&t.locale!=="ko"?null:t.data;default:return null}}var Cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cc[e.type]:t==="textarea"}function Ei(e,t,n,r){Ua(r),t=Br(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Kn=null;function zc(e){Fi(e,0)}function jr(e){var t=yn(e);if(_a(t))return e}function _c(e,t){if(e==="change")return t}var wi=!1;if(Re){var ro;if(Re){var lo="oninput"in document;if(!lo){var xi=document.createElement("div");xi.setAttribute("oninput","return;"),lo=typeof xi.oninput=="function"}ro=lo}else ro=!1;wi=ro&&(!document.documentMode||9<document.documentMode)}function ki(){qn&&(qn.detachEvent("onpropertychange",Ni),Kn=qn=null)}function Ni(e){if(e.propertyName==="value"&&jr(Kn)){var t=[];Ei(t,Kn,e,Fl(e)),Wa(zc,t)}}function Pc(e,t,n){e==="focusin"?(ki(),qn=t,Kn=n,qn.attachEvent("onpropertychange",Ni)):e==="focusout"&&ki()}function Lc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(Kn)}function Tc(e,t){if(e==="click")return jr(t)}function Mc(e,t){if(e==="input"||e==="change")return jr(t)}function Rc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Rc;function Xn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ee.call(t,l)||!ut(e[l],t[l]))return!1}return!0}function Si(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ci(e,t){var n=Si(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Si(n)}}function zi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _i(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dc(e){var t=_i(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zi(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ci(n,o);var i=Ci(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oc=Re&&"documentMode"in document&&11>=document.documentMode,pn=null,ao=null,Zn=null,io=!1;function Pi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;io||pn==null||pn!==Er(r)||(r=pn,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Xn(Zn,r)||(Zn=r,r=Br(ao,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},so={},Li={};Re&&(Li=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ar(e){if(so[e])return so[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Li)return so[e]=t[n];return e}var Ti=Ar("animationend"),Mi=Ar("animationiteration"),Ri=Ar("animationstart"),Di=Ar("transitionend"),Oi=new Map,Ii="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Oi.set(e,t),K(t,[e])}for(var uo=0;uo<Ii.length;uo++){var co=Ii[uo],Ic=co.toLowerCase(),jc=co[0].toUpperCase()+co.slice(1);Ot(Ic,"on"+jc)}Ot(Ti,"onAnimationEnd"),Ot(Mi,"onAnimationIteration"),Ot(Ri,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Di,"onTransitionEnd"),Se("onMouseEnter",["mouseout","mouseover"]),Se("onMouseLeave",["mouseout","mouseover"]),Se("onPointerEnter",["pointerout","pointerover"]),Se("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function ji(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iu(r,t,void 0,e),e.currentTarget=null}function Fi(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;ji(l,s,p),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,p=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;ji(l,s,p),o=u}}}if(kr)throw e=Vl,kr=!1,Vl=null,e}function te(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Ai(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Ai(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Ur]){e[Ur]=!0,Fe.forEach(function(n){n!=="selectionchange"&&(Fc.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,fo("selectionchange",!1,t))}}function Ai(e,t,n,r){switch(ii(t)){case 1:var l=Xu;break;case 4:l=Zu;break;default:l=Gl}n=l.bind(null,t,n,e),l=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function mo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=qt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Wa(function(){var p=o,y=Fl(n),E=[];e:{var g=Oi.get(e);if(g!==void 0){var k=Xl,C=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":k=mc;break;case"focusin":C="focus",k=eo;break;case"focusout":C="blur",k=eo;break;case"beforeblur":case"afterblur":k=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ci;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=gc;break;case Ti:case Mi:case Ri:k=lc;break;case Di:k=yc;break;case"scroll":k=Ju;break;case"wheel":k=wc;break;case"copy":case"cut":case"paste":k=ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=fi}var z=(t&4)!==0,me=!z&&e==="scroll",f=z?g!==null?g+"Capture":null:g;z=[];for(var c=p,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=jn(c,f),w!=null&&z.push(tr(c,w,m)))),me)break;c=c.return}0<z.length&&(g=new k(g,C,null,n,y),E.push({event:g,listeners:z}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==jl&&(C=n.relatedTarget||n.fromElement)&&(qt(C)||C[xt]))break e;if((k||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,k?(C=n.relatedTarget||n.toElement,k=p,C=C?qt(C):null,C!==null&&(me=Gt(C),C!==me||C.tag!==5&&C.tag!==6)&&(C=null)):(k=null,C=p),k!==C)){if(z=ci,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=fi,w="onPointerLeave",f="onPointerEnter",c="pointer"),me=k==null?g:yn(k),m=C==null?g:yn(C),g=new z(w,c+"leave",k,n,y),g.target=me,g.relatedTarget=m,w=null,qt(y)===p&&(z=new z(f,c+"enter",C,n,y),z.target=m,z.relatedTarget=me,w=z),me=w,k&&C)t:{for(z=k,f=C,c=0,m=z;m;m=gn(m))c++;for(m=0,w=f;w;w=gn(w))m++;for(;0<c-m;)z=gn(z),c--;for(;0<m-c;)f=gn(f),m--;for(;c--;){if(z===f||f!==null&&z===f.alternate)break t;z=gn(z),f=gn(f)}z=null}else z=null;k!==null&&Ui(E,g,k,z,!1),C!==null&&me!==null&&Ui(E,me,C,z,!0)}}e:{if(g=p?yn(p):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var _=_c;else if(yi(g))if(wi)_=Mc;else{_=Lc;var R=Pc}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=Tc);if(_&&(_=_(e,p))){Ei(E,_,n,y);break e}R&&R(e,g,p),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&Ml(g,"number",g.value)}switch(R=p?yn(p):window,e){case"focusin":(yi(R)||R.contentEditable==="true")&&(pn=R,ao=p,Zn=null);break;case"focusout":Zn=ao=pn=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,Pi(E,n,y);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":Pi(E,n,y)}var D;if(no)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else mn?gi(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(mi&&n.locale!=="ko"&&(mn||I!=="onCompositionStart"?I==="onCompositionEnd"&&mn&&(D=si()):(Dt=y,Kl="value"in Dt?Dt.value:Dt.textContent,mn=!0)),R=Br(p,I),0<R.length&&(I=new di(I,e,null,n,y),E.push({event:I,listeners:R}),D?I.data=D:(D=vi(n),D!==null&&(I.data=D)))),(D=kc?Nc(e,n):Sc(e,n))&&(p=Br(p,"onBeforeInput"),0<p.length&&(y=new di("onBeforeInput","beforeinput",null,n,y),E.push({event:y,listeners:p}),y.data=D))}Fi(E,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=jn(e,n),o!=null&&r.unshift(tr(e,o,l)),o=jn(e,t),o!=null&&r.push(tr(e,o,l))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ui(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,p=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&p!==null&&(s=p,l?(u=jn(n,o),u!=null&&i.unshift(tr(n,u,s))):l||(u=jn(n,o),u!=null&&i.push(tr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ac=/\r\n?/g,Uc=/\u0000|\uFFFD/g;function Bi(e){return(typeof e=="string"?e:""+e).replace(Ac,`
`).replace(Uc,"")}function Vr(e,t,n){if(t=Bi(t),Bi(e)!==t&&n)throw Error(h(425))}function br(){}var po=null,ho=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Bc=typeof clearTimeout=="function"?clearTimeout:void 0,Vi=typeof Promise=="function"?Promise:void 0,Vc=typeof queueMicrotask=="function"?queueMicrotask:typeof Vi<"u"?function(e){return Vi.resolve(null).then(e).catch(bc)}:vo;function bc(e){setTimeout(function(){throw e})}function yo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),vt="__reactFiber$"+vn,nr="__reactProps$"+vn,xt="__reactContainer$"+vn,Eo="__reactEvents$"+vn,Wc="__reactListeners$"+vn,Hc="__reactHandles$"+vn;function qt(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bi(e);e!==null;){if(n=e[vt])return n;e=bi(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[vt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Wr(e){return e[nr]||null}var wo=[],En=-1;function jt(e){return{current:e}}function ne(e){0>En||(e.current=wo[En],wo[En]=null,En--)}function J(e,t){En++,wo[En]=e.current,e.current=t}var Ft={},Pe=jt(Ft),Be=jt(!1),Kt=Ft;function wn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ve(e){return e=e.childContextTypes,e!=null}function Hr(){ne(Be),ne(Pe)}function Wi(e,t,n){if(Pe.current!==Ft)throw Error(h(168));J(Pe,t),J(Be,n)}function Hi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,Z(e)||"Unknown",l));return N({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Kt=Pe.current,J(Pe,e),J(Be,Be.current),!0}function $i(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Hi(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Pe),J(Pe,e)):ne(Be),J(Be,n)}var kt=null,Qr=!1,xo=!1;function Qi(e){kt===null?kt=[e]:kt.push(e)}function $c(e){Qr=!0,Qi(e)}function At(){if(!xo&&kt!==null){xo=!0;var e=0,t=Y;try{var n=kt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Qr=!1}catch(l){throw kt!==null&&(kt=kt.slice(e+1)),Ga(bl,At),l}finally{Y=t,xo=!1}}return null}var xn=[],kn=0,Yr=null,Gr=0,tt=[],nt=0,Xt=null,Nt=1,St="";function Zt(e,t){xn[kn++]=Gr,xn[kn++]=Yr,Yr=e,Gr=t}function Yi(e,t,n){tt[nt++]=Nt,tt[nt++]=St,tt[nt++]=Xt,Xt=e;var r=Nt;e=St;var l=32-st(r)-1;r&=~(1<<l),n+=1;var o=32-st(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Nt=1<<32-st(t)+l|n<<l|r,St=o+e}else Nt=1<<o|n<<l|r,St=e}function ko(e){e.return!==null&&(Zt(e,1),Yi(e,1,0))}function No(e){for(;e===Yr;)Yr=xn[--kn],xn[kn]=null,Gr=xn[--kn],xn[kn]=null;for(;e===Xt;)Xt=tt[--nt],tt[nt]=null,St=tt[--nt],tt[nt]=null,Nt=tt[--nt],tt[nt]=null}var Xe=null,Ze=null,oe=!1,ct=null;function Gi(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:Nt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ze=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(oe){var t=Ze;if(t){var n=t;if(!qi(e,t)){if(So(e))throw Error(h(418));t=It(n.nextSibling);var r=Xe;t&&qi(e,t)?Gi(r,n):(e.flags=e.flags&-4097|2,oe=!1,Xe=e)}}else{if(So(e))throw Error(h(418));e.flags=e.flags&-4097|2,oe=!1,Xe=e}}}function Ki(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function qr(e){if(e!==Xe)return!1;if(!oe)return Ki(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=Ze)){if(So(e))throw Xi(),Error(h(418));for(;t;)Gi(e,t),t=It(t.nextSibling)}if(Ki(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Xe?It(e.stateNode.nextSibling):null;return!0}function Xi(){for(var e=Ze;e;)e=It(e.nextSibling)}function Nn(){Ze=Xe=null,oe=!1}function zo(e){ct===null?ct=[e]:ct.push(e)}var Qc=ce.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zi(e){var t=e._init;return t(e._payload)}function Ji(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Qt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,w){return c===null||c.tag!==6?(c=va(m,f.mode,w),c.return=f,c):(c=l(c,m),c.return=f,c)}function u(f,c,m,w){var _=m.type;return _===pe?y(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===re&&Zi(_)===c.type)?(w=l(c,m.props),w.ref=lr(f,c,m),w.return=f,w):(w=wl(m.type,m.key,m.props,null,f.mode,w),w.ref=lr(f,c,m),w.return=f,w)}function p(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ya(m,f.mode,w),c.return=f,c):(c=l(c,m.children||[]),c.return=f,c)}function y(f,c,m,w,_){return c===null||c.tag!==7?(c=an(m,f.mode,w,_),c.return=f,c):(c=l(c,m),c.return=f,c)}function E(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=va(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ue:return m=wl(c.type,c.key,c.props,null,f.mode,m),m.ref=lr(f,null,c),m.return=f,m;case Ce:return c=ya(c,f.mode,m),c.return=f,c;case re:var w=c._init;return E(f,w(c._payload),m)}if(Dn(c)||L(c))return c=an(c,f.mode,m,null),c.return=f,c;Kr(f,c)}return null}function g(f,c,m,w){var _=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:s(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ue:return m.key===_?u(f,c,m,w):null;case Ce:return m.key===_?p(f,c,m,w):null;case re:return _=m._init,g(f,c,_(m._payload),w)}if(Dn(m)||L(m))return _!==null?null:y(f,c,m,w,null);Kr(f,m)}return null}function k(f,c,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,s(c,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ue:return f=f.get(w.key===null?m:w.key)||null,u(c,f,w,_);case Ce:return f=f.get(w.key===null?m:w.key)||null,p(c,f,w,_);case re:var R=w._init;return k(f,c,m,R(w._payload),_)}if(Dn(w)||L(w))return f=f.get(m)||null,y(c,f,w,_,null);Kr(c,w)}return null}function C(f,c,m,w){for(var _=null,R=null,D=c,I=c=0,Ne=null;D!==null&&I<m.length;I++){D.index>I?(Ne=D,D=null):Ne=D.sibling;var H=g(f,D,m[I],w);if(H===null){D===null&&(D=Ne);break}e&&D&&H.alternate===null&&t(f,D),c=o(H,c,I),R===null?_=H:R.sibling=H,R=H,D=Ne}if(I===m.length)return n(f,D),oe&&Zt(f,I),_;if(D===null){for(;I<m.length;I++)D=E(f,m[I],w),D!==null&&(c=o(D,c,I),R===null?_=D:R.sibling=D,R=D);return oe&&Zt(f,I),_}for(D=r(f,D);I<m.length;I++)Ne=k(D,f,I,m[I],w),Ne!==null&&(e&&Ne.alternate!==null&&D.delete(Ne.key===null?I:Ne.key),c=o(Ne,c,I),R===null?_=Ne:R.sibling=Ne,R=Ne);return e&&D.forEach(function(Yt){return t(f,Yt)}),oe&&Zt(f,I),_}function z(f,c,m,w){var _=L(m);if(typeof _!="function")throw Error(h(150));if(m=_.call(m),m==null)throw Error(h(151));for(var R=_=null,D=c,I=c=0,Ne=null,H=m.next();D!==null&&!H.done;I++,H=m.next()){D.index>I?(Ne=D,D=null):Ne=D.sibling;var Yt=g(f,D,H.value,w);if(Yt===null){D===null&&(D=Ne);break}e&&D&&Yt.alternate===null&&t(f,D),c=o(Yt,c,I),R===null?_=Yt:R.sibling=Yt,R=Yt,D=Ne}if(H.done)return n(f,D),oe&&Zt(f,I),_;if(D===null){for(;!H.done;I++,H=m.next())H=E(f,H.value,w),H!==null&&(c=o(H,c,I),R===null?_=H:R.sibling=H,R=H);return oe&&Zt(f,I),_}for(D=r(f,D);!H.done;I++,H=m.next())H=k(D,f,I,H.value,w),H!==null&&(e&&H.alternate!==null&&D.delete(H.key===null?I:H.key),c=o(H,c,I),R===null?_=H:R.sibling=H,R=H);return e&&D.forEach(function(Cd){return t(f,Cd)}),oe&&Zt(f,I),_}function me(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===pe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ue:e:{for(var _=m.key,R=c;R!==null;){if(R.key===_){if(_=m.type,_===pe){if(R.tag===7){n(f,R.sibling),c=l(R,m.props.children),c.return=f,f=c;break e}}else if(R.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===re&&Zi(_)===R.type){n(f,R.sibling),c=l(R,m.props),c.ref=lr(f,R,m),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}m.type===pe?(c=an(m.props.children,f.mode,w,m.key),c.return=f,f=c):(w=wl(m.type,m.key,m.props,null,f.mode,w),w.ref=lr(f,c,m),w.return=f,f=w)}return i(f);case Ce:e:{for(R=m.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=l(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ya(m,f.mode,w),c.return=f,f=c}return i(f);case re:return R=m._init,me(f,c,R(m._payload),w)}if(Dn(m))return C(f,c,m,w);if(L(m))return z(f,c,m,w);Kr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,m),c.return=f,f=c):(n(f,c),c=va(m,f.mode,w),c.return=f,f=c),i(f)):n(f,c)}return me}var Sn=Ji(!0),es=Ji(!1),Xr=jt(null),Zr=null,Cn=null,_o=null;function Po(){_o=Cn=Zr=null}function Lo(e){var t=Xr.current;ne(Xr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Zr=e,_o=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(be=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Zr===null)throw Error(h(308));Cn=e,Zr.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Jt=null;function Mo(e){Jt===null?Jt=[e]:Jt.push(e)}function ts(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ct(e,n)}return l=r.interleaved,l===null?(t.next=t,Mo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ct(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$l(e,n)}}function rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var l=e.updateQueue;Ut=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,p=u.next;u.next=null,i===null?o=p:i.next=p,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=u))}if(o!==null){var E=l.baseState;i=0,y=p=u=null,s=o;do{var g=s.lane,k=s.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,z=s;switch(g=t,k=n,z.tag){case 1:if(C=z.payload,typeof C=="function"){E=C.call(k,E,g);break e}E=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=z.payload,g=typeof C=="function"?C.call(k,E,g):C,g==null)break e;E=N({},E,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=k,u=E):y=y.next=k,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(y===null&&(u=E),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=E}}function ls(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var or={},yt=jt(or),ar=jt(or),ir=jt(or);function en(e){if(e===or)throw Error(h(174));return e}function Do(e,t){switch(J(ir,t),J(ar,e),J(yt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}ne(yt),J(yt,t)}function _n(){ne(yt),ne(ar),ne(ir)}function os(e){en(ir.current);var t=en(yt.current),n=Dl(t,e.type);t!==n&&(J(ar,e),J(yt,n))}function Oo(e){ar.current===e&&(ne(yt),ne(ar))}var se=jt(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function jo(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var nl=ce.ReactCurrentDispatcher,Fo=ce.ReactCurrentBatchConfig,tn=0,ue=null,ge=null,xe=null,rl=!1,sr=!1,ur=0,Yc=0;function Le(){throw Error(h(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,l,o){if(tn=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nl.current=e===null||e.memoizedState===null?Xc:Zc,e=n(r,l),sr){o=0;do{if(sr=!1,ur=0,25<=o)throw Error(h(301));o+=1,xe=ge=null,t.updateQueue=null,nl.current=Jc,e=n(r,l)}while(sr)}if(nl.current=al,t=ge!==null&&ge.next!==null,tn=0,xe=ge=ue=null,rl=!1,t)throw Error(h(300));return e}function Bo(){var e=ur!==0;return ur=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ue.memoizedState=xe=e:xe=xe.next=e,xe}function lt(){if(ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=xe===null?ue.memoizedState:xe.next;if(t!==null)xe=t,ge=e;else{if(e===null)throw Error(h(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ue.memoizedState=xe=e:xe=xe.next=e}return xe}function cr(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=lt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ge,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,p=o;do{var y=p.lane;if((tn&y)===y)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var E={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=E,i=r):u=u.next=E,ue.lanes|=y,nn|=y}p=p.next}while(p!==null&&p!==o);u===null?i=r:u.next=s,ut(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ue.lanes|=o,nn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=lt(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ut(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function as(){}function is(e,t){var n=ue,r=lt(),l=t(),o=!ut(r.memoizedState,l);if(o&&(r.memoizedState=l,be=!0),r=r.queue,Wo(cs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,dr(9,us.bind(null,n,r,l,t),void 0,null),ke===null)throw Error(h(349));(tn&30)!==0||ss(n,t,l)}return l}function ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function us(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&fs(e)}function cs(e,t,n){return n(function(){ds(t)&&fs(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function fs(e){var t=Ct(e,1);t!==null&&pt(t,e,1,-1)}function ms(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Kc.bind(null,ue,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ps(){return lt().memoizedState}function ll(e,t,n,r){var l=Et();ue.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var l=lt();r=r===void 0?null:r;var o=void 0;if(ge!==null){var i=ge.memoizedState;if(o=i.destroy,r!==null&&Ao(r,i.deps)){l.memoizedState=dr(t,n,o,r);return}}ue.flags|=e,l.memoizedState=dr(1|t,n,o,r)}function hs(e,t){return ll(8390656,8,e,t)}function Wo(e,t){return ol(2048,8,e,t)}function gs(e,t){return ol(4,2,e,t)}function vs(e,t){return ol(4,4,e,t)}function ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Es(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,ys.bind(null,t,e),n)}function Ho(){}function ws(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ks(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n):(ut(n,t)||(n=Za(),ue.lanes|=n,nn|=n,e.baseState=!0),t)}function Gc(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),t()}finally{Y=n,Fo.transition=r}}function Ns(){return lt().memoizedState}function qc(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ss(e))Cs(t,n);else if(n=ts(e,t,n,r),n!==null){var l=je();pt(n,e,r,l),zs(n,t,r)}}function Kc(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))Cs(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ut(s,i)){var u=t.interleaved;u===null?(l.next=l,Mo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ts(e,t,l,r),n!==null&&(l=je(),pt(n,e,r,l),zs(n,t,r))}}function Ss(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Cs(e,t){sr=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$l(e,n)}}var al={readContext:rt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Xc={readContext:rt,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:hs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ll(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return ll(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qc.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:ms,useDebugValue:Ho,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=ms(!1),t=e[0];return e=Gc.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,l=Et();if(oe){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ke===null)throw Error(h(349));(tn&30)!==0||ss(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,hs(cs.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,us.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=ke.identifierPrefix;if(oe){var n=St,r=Nt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zc={readContext:rt,useCallback:ws,useContext:rt,useEffect:Wo,useImperativeHandle:Es,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:xs,useReducer:Vo,useRef:ps,useState:function(){return Vo(cr)},useDebugValue:Ho,useDeferredValue:function(e){var t=lt();return ks(t,ge.memoizedState,e)},useTransition:function(){var e=Vo(cr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:is,useId:Ns,unstable_isNewReconciler:!1},Jc={readContext:rt,useCallback:ws,useContext:rt,useEffect:Wo,useImperativeHandle:Es,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:xs,useReducer:bo,useRef:ps,useState:function(){return bo(cr)},useDebugValue:Ho,useDeferredValue:function(e){var t=lt();return ge===null?t.memoizedState=e:ks(t,ge.memoizedState,e)},useTransition:function(){var e=bo(cr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:is,useId:Ns,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=N({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $o(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),l=Ht(e),o=zt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(pt(t,e,l,r),Jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),l=Ht(e),o=zt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(pt(t,e,l,r),Jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Ht(e),l=zt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(pt(t,e,r,n),Jr(t,e,r))}};function _s(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,o):!0}function Ps(e,t,n){var r=!1,l=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(l=Ve(t)?Kt:Pe.current,r=t.contextTypes,o=(r=r!=null)?wn(e,l):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ro(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=rt(o):(o=Ve(t)?Kt:Pe.current,l.context=wn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($o(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&il.enqueueReplaceState(l,l.state,null),el(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=b(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Go(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ed=typeof WeakMap=="function"?WeakMap:Map;function Ts(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl||(pl=!0,ua=r),Go(e,t)},n}function Ms(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Go(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Go(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Rs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ed;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=pd.bind(null,e,t,n),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var td=ce.ReactCurrentOwner,be=!1;function Ie(e,t,n,r){t.child=e===null?es(t,null,n,r):Sn(t,e.child,n,r)}function Is(e,t,n,r,l){n=n.render;var o=t.ref;return zn(t,l),r=Uo(e,t,n,r,o,l),n=Bo(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(oe&&n&&ko(t),t.flags|=1,Ie(e,t,r,l),t.child)}function js(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Fs(e,t,o,r,l)):(e=wl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(i,r)&&e.ref===t.ref)return _t(e,t,l)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Fs(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Xn(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,_t(e,t,l)}return qo(e,t,n,r,l)}function As(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Tn,Je),Je|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Tn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(Tn,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,J(Tn,Je),Je|=r;return Ie(e,t,l,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qo(e,t,n,r,l){var o=Ve(n)?Kt:Pe.current;return o=wn(t,o),zn(t,l),n=Uo(e,t,n,r,o,l),r=Bo(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(oe&&r&&ko(t),t.flags|=1,Ie(e,t,n,l),t.child)}function Bs(e,t,n,r,l){if(Ve(n)){var o=!0;$r(t)}else o=!1;if(zn(t,l),t.stateNode===null)ul(e,t),Ps(t,n,r),Qo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=rt(p):(p=Ve(n)?Kt:Pe.current,p=wn(t,p));var y=n.getDerivedStateFromProps,E=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==p)&&Ls(t,i,r,p),Ut=!1;var g=t.memoizedState;i.state=g,el(t,r,i,l),u=t.memoizedState,s!==r||g!==u||Be.current||Ut?(typeof y=="function"&&($o(t,n,y,r),u=t.memoizedState),(s=Ut||_s(t,n,s,r,g,u,p))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=p,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ns(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:dt(t.type,s),i.props=p,E=t.pendingProps,g=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=Ve(n)?Kt:Pe.current,u=wn(t,u));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==E||g!==u)&&Ls(t,i,r,u),Ut=!1,g=t.memoizedState,i.state=g,el(t,r,i,l);var C=t.memoizedState;s!==E||g!==C||Be.current||Ut?(typeof k=="function"&&($o(t,n,k,r),C=t.memoizedState),(p=Ut||_s(t,n,p,r,g,C,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),i.props=r,i.state=C,i.context=u,r=p):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ko(e,t,n,r,o,l)}function Ko(e,t,n,r,l,o){Us(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&$i(t,n,!1),_t(e,t,o);r=t.stateNode,td.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,o),t.child=Sn(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,l&&$i(t,n,!0),t.child}function Vs(e){var t=e.stateNode;t.pendingContext?Wi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(e,t.context,!1),Do(e,t.containerInfo)}function bs(e,t,n,r,l){return Nn(),zo(l),t.flags|=256,Ie(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ws(e,t,n){var r=t.pendingProps,l=se.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(se,l&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=xl(i,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zo(n),t.memoizedState=Xo,e):Jo(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return nd(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Qt(s,o):(o=an(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Zo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jo(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sl(e,t,n,r){return r!==null&&zo(r),Sn(t,e.child,null,n),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Yo(Error(h(422))),sl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=xl({mode:"visible",children:r.children},l,0,null),o=an(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Sn(t,e.child,null,i),t.child.memoizedState=Zo(i),t.memoizedState=Xo,o);if((t.mode&1)===0)return sl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(h(419)),r=Yo(o,r,void 0),sl(e,t,i,r)}if(s=(i&e.childLanes)!==0,be||s){if(r=ke,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ct(e,l),pt(r,e,l,-1))}return ha(),r=Yo(Error(h(421))),sl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=hd.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ze=It(l.nextSibling),Xe=t,oe=!0,ct=null,e!==null&&(tt[nt++]=Nt,tt[nt++]=St,tt[nt++]=Xt,Nt=e.id,St=e.overflow,Xt=t),t=Jo(t,r.children),t.flags|=4096,t)}function Hs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function ea(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $s(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hs(e,n,t);else if(e.tag===19)Hs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ea(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ea(t,!0,n,null,o);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rd(e,t,n){switch(t.tag){case 3:Vs(t),Nn();break;case 5:os(t);break;case 1:Ve(t.type)&&$r(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ws(e,t,n):(J(se,se.current&1),e=_t(e,t,n),e!==null?e.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return $s(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,As(e,t,n)}return _t(e,t,n)}var Qs,ta,Ys,Gs;Qs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ta=function(){},Ys=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,en(yt.current);var o=null;switch(n){case"input":l=Ll(e,l),r=Ll(e,r),o=[];break;case"select":l=N({},l,{value:void 0}),r=N({},r,{value:void 0}),o=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=br)}Ol(n,r);var i;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var s=l[p];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(B.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var u=r[p];if(s=l?.[p],r.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(B.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(p,u))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},Gs=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ld(e,t,n){var r=t.pendingProps;switch(No(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&Hr(),Te(t),null;case 3:return r=t.stateNode,_n(),ne(Be),ne(Pe),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(fa(ct),ct=null))),ta(e,t),Te(t),null;case 5:Oo(t);var l=en(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Ys(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Te(t),null}if(e=en(yt.current),qr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[nr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(l=0;l<Jn.length;l++)te(Jn[l],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Pa(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":Ma(r,o),te("invalid",r)}Ol(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vr(r.textContent,s,e),l=["children",""+s]):B.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&te("scroll",r)}switch(n){case"input":yr(r),Ta(r,o,!0);break;case"textarea":yr(r),Da(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[vt]=t,e[nr]=r,Qs(e,t,!1,!1),t.stateNode=e;e:{switch(i=Il(n,r),n){case"dialog":te("cancel",e),te("close",e),l=r;break;case"iframe":case"object":case"embed":te("load",e),l=r;break;case"video":case"audio":for(l=0;l<Jn.length;l++)te(Jn[l],e);l=r;break;case"source":te("error",e),l=r;break;case"img":case"image":case"link":te("error",e),te("load",e),l=r;break;case"details":te("toggle",e),l=r;break;case"input":Pa(e,r),l=Ll(e,r),te("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=N({},r,{value:void 0}),te("invalid",e);break;case"textarea":Ma(e,r),l=Rl(e,r),te("invalid",e);break;default:l=r}Ol(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Fa(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ia(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(B.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&Ge(e,o,u,i))}switch(n){case"input":yr(e),Ta(e,r,!1);break;case"textarea":yr(e),Da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Gs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=en(ir.current),en(yt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Xi(),Nn(),t.flags|=98560,o=!1;else if(o=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[vt]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ct!==null&&(fa(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ve===0&&(ve=3):ha())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return _n(),ta(e,t),e===null&&er(t.stateNode.containerInfo),Te(t),null;case 10:return Lo(t.type._context),Te(t),null;case 17:return Ve(t.type)&&Hr(),Te(t),null;case 19:if(ne(se),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)fr(o,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=tl(e),i!==null){for(t.flags|=128,fr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>Mn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=tl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!oe)return Te(t),null}else 2*fe()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=se.current,J(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Je&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function od(e,t){switch(No(t),t.tag){case 1:return Ve(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),ne(Be),ne(Pe),jo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oo(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return _n(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var cl=!1,Me=!1,ad=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){de(e,t,r)}}var qs=!1;function id(e,t){if(po=Tr,e=_i(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,p=0,y=0,E=e,g=null;t:for(;;){for(var k;E!==n||l!==0&&E.nodeType!==3||(s=i+l),E!==o||r!==0&&E.nodeType!==3||(u=i+r),E.nodeType===3&&(i+=E.nodeValue.length),(k=E.firstChild)!==null;)g=E,E=k;for(;;){if(E===e)break t;if(g===n&&++p===l&&(s=i),g===o&&++y===r&&(u=i),(k=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},Tr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var z=C.memoizedProps,me=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?z:dt(t.type,z),me);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){de(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return C=qs,qs=!1,C}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&na(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ks(e){var t=e.alternate;t!==null&&(e.alternate=null,Ks(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[nr],delete t[Eo],delete t[Wc],delete t[Hc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xs(e){return e.tag===5||e.tag===3||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=br));else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ze=null,ft=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Js(e,t,n),n=n.sibling}function Js(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Sr,n)}catch{}switch(n.tag){case 5:Me||Ln(n,t);case 6:var r=ze,l=ft;ze=null,Vt(e,t,n),ze=r,ft=l,ze!==null&&(ft?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(ft?(e=ze,n=n.stateNode,e.nodeType===8?yo(e.parentNode,n):e.nodeType===1&&yo(e,n),$n(e)):yo(ze,n.stateNode));break;case 4:r=ze,l=ft,ze=n.stateNode.containerInfo,ft=!0,Vt(e,t,n),ze=r,ft=l;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&na(n,t,i),l=l.next}while(l!==r)}Vt(e,t,n);break;case 1:if(!Me&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Vt(e,t,n),Me=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ad),t.forEach(function(r){var l=gd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ze=s.stateNode,ft=!1;break e;case 3:ze=s.stateNode.containerInfo,ft=!0;break e;case 4:ze=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(ze===null)throw Error(h(160));Js(o,i,l),ze=null,ft=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){de(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tu(t,e),t=t.sibling}function tu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),wt(e),r&4){try{mr(3,e,e.return),dl(3,e)}catch(z){de(e,e.return,z)}try{mr(5,e,e.return)}catch(z){de(e,e.return,z)}}break;case 1:mt(t,e),wt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(mt(t,e),wt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(z){de(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&La(l,o),Il(s,i);var p=Il(s,o);for(i=0;i<u.length;i+=2){var y=u[i],E=u[i+1];y==="style"?Fa(l,E):y==="dangerouslySetInnerHTML"?Ia(l,E):y==="children"?On(l,E):Ge(l,y,E,p)}switch(s){case"input":Tl(l,o);break;case"textarea":Ra(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?sn(l,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?sn(l,!!o.multiple,o.defaultValue,!0):sn(l,!!o.multiple,o.multiple?[]:"",!1))}l[nr]=o}catch(z){de(e,e.return,z)}}break;case 6:if(mt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(z){de(e,e.return,z)}}break;case 3:if(mt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(z){de(e,e.return,z)}break;case 4:mt(t,e),wt(e);break;case 13:mt(t,e),wt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(sa=fe())),r&4&&eu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(p=Me)||y,mt(t,e),Me=p):mt(t,e),wt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(S=e,y=e.child;y!==null;){for(E=S=y;S!==null;){switch(g=S,k=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:Ln(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(z){de(r,n,z)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){lu(E);continue}}k!==null?(k.return=g,S=k):lu(E)}y=y.sibling}e:for(y=null,E=e;;){if(E.tag===5){if(y===null){y=E;try{l=E.stateNode,p?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=E.stateNode,u=E.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ja("display",i))}catch(z){de(e,e.return,z)}}}else if(E.tag===6){if(y===null)try{E.stateNode.nodeValue=p?"":E.memoizedProps}catch(z){de(e,e.return,z)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;y===E&&(y=null),E=E.return}y===E&&(y=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:mt(t,e),wt(e),r&4&&eu(e);break;case 21:break;default:mt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xs(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=Zs(e);oa(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Zs(e);la(e,s,i);break;default:throw Error(h(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sd(e,t,n){S=e,nu(e)}function nu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||cl;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||Me;s=cl;var p=Me;if(cl=i,(Me=u)&&!p)for(S=l;S!==null;)i=S,u=i.child,i.tag===22&&i.memoizedState!==null?ou(l):u!==null?(u.return=i,S=u):ou(l);for(;o!==null;)S=o,nu(o),o=o.sibling;S=l,cl=s,Me=p}ru(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,S=o):ru(e)}}function ru(e){for(;S!==null;){var t=S;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ls(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ls(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var E=y.dehydrated;E!==null&&$n(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Me||t.flags&512&&ra(t)}catch(g){de(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function lu(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function ou(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){de(t,l,u)}}var o=t.return;try{ra(t)}catch(u){de(t,o,u)}break;case 5:var i=t.return;try{ra(t)}catch(u){de(t,i,u)}}}catch(u){de(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var ud=Math.ceil,fl=ce.ReactCurrentDispatcher,aa=ce.ReactCurrentOwner,ot=ce.ReactCurrentBatchConfig,V=0,ke=null,he=null,_e=0,Je=0,Tn=jt(0),ve=0,pr=null,nn=0,ml=0,ia=0,hr=null,We=null,sa=0,Mn=1/0,Pt=null,pl=!1,ua=null,bt=null,hl=!1,Wt=null,gl=0,gr=0,ca=null,vl=-1,yl=0;function je(){return(V&6)!==0?fe():vl!==-1?vl:vl=fe()}function Ht(e){return(e.mode&1)===0?1:(V&2)!==0&&_e!==0?_e&-_e:Qc.transition!==null?(yl===0&&(yl=Za()),yl):(e=Y,e!==0||(e=window.event,e=e===void 0?16:ii(e.type)),e)}function pt(e,t,n,r){if(50<gr)throw gr=0,ca=null,Error(h(185));Bn(e,n,r),((V&2)===0||e!==ke)&&(e===ke&&((V&2)===0&&(ml|=n),ve===4&&$t(e,_e)),He(e,r),n===1&&V===0&&(t.mode&1)===0&&(Mn=fe()+500,Qr&&At()))}function He(e,t){var n=e.callbackNode;Qu(e,t);var r=_r(e,e===ke?_e:0);if(r===0)n!==null&&qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qa(n),t===1)e.tag===0?$c(iu.bind(null,e)):Qi(iu.bind(null,e)),Vc(function(){(V&6)===0&&At()}),n=null;else{switch(Ja(r)){case 1:n=bl;break;case 4:n=Ka;break;case 16:n=Nr;break;case 536870912:n=Xa;break;default:n=Nr}n=hu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(vl=-1,yl=0,(V&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=_r(e,e===ke?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=El(e,r);else{t=r;var l=V;V|=2;var o=uu();(ke!==e||_e!==t)&&(Pt=null,Mn=fe()+500,ln(e,t));do try{fd();break}catch(s){su(e,s)}while(!0);Po(),fl.current=o,V=l,he!==null?t=0:(ke=null,_e=0,t=ve)}if(t!==0){if(t===2&&(l=Wl(e),l!==0&&(r=l,t=da(e,l))),t===1)throw n=pr,ln(e,0),$t(e,r),He(e,fe()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!cd(l)&&(t=El(e,r),t===2&&(o=Wl(e),o!==0&&(r=o,t=da(e,o))),t===1))throw n=pr,ln(e,0),$t(e,r),He(e,fe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:on(e,We,Pt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=sa+500-fe(),10<t)){if(_r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vo(on.bind(null,e,We,Pt),t);break}on(e,We,Pt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-st(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ud(r/1960))-r,10<r){e.timeoutHandle=vo(on.bind(null,e,We,Pt),r);break}on(e,We,Pt);break;case 5:on(e,We,Pt);break;default:throw Error(h(329))}}}return He(e,fe()),e.callbackNode===n?au.bind(null,e):null}function da(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=El(e,t),e!==2&&(t=We,We=n,t!==null&&fa(t)),e}function fa(e){We===null?We=e:We.push.apply(We,e)}function cd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ut(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~ia,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function iu(e){if((V&6)!==0)throw Error(h(327));Rn();var t=_r(e,0);if((t&1)===0)return He(e,fe()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=da(e,r))}if(n===1)throw n=pr,ln(e,0),$t(e,t),He(e,fe()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,We,Pt),He(e,fe()),null}function ma(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Mn=fe()+500,Qr&&At())}}function rn(e){Wt!==null&&Wt.tag===0&&(V&6)===0&&Rn();var t=V;V|=1;var n=ot.transition,r=Y;try{if(ot.transition=null,Y=1,e)return e()}finally{Y=r,ot.transition=n,V=t,(V&6)===0&&At()}}function pa(){Je=Tn.current,ne(Tn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bc(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(No(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:_n(),ne(Be),ne(Pe),jo();break;case 5:Oo(r);break;case 4:_n();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Lo(r.type._context);break;case 22:case 23:pa()}n=n.return}if(ke=e,he=e=Qt(e.current,null),_e=Je=t,ve=0,pr=null,ia=ml=nn=0,We=hr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Jt=null}return e}function su(e,t){do{var n=he;try{if(Po(),nl.current=al,rl){for(var r=ue.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}rl=!1}if(tn=0,xe=ge=ue=null,sr=!1,ur=0,aa.current=null,n===null||n.return===null){ve=1,pr=t,he=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=_e,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,y=s,E=y.tag;if((y.mode&1)===0&&(E===0||E===11||E===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ds(i);if(k!==null){k.flags&=-257,Os(k,i,s,o,t),k.mode&1&&Rs(o,p,t),t=k,u=p;var C=t.updateQueue;if(C===null){var z=new Set;z.add(u),t.updateQueue=z}else C.add(u);break e}else{if((t&1)===0){Rs(o,p,t),ha();break e}u=Error(h(426))}}else if(oe&&s.mode&1){var me=Ds(i);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Os(me,i,s,o,t),zo(Pn(u,s));break e}}o=u=Pn(u,s),ve!==4&&(ve=2),hr===null?hr=[o]:hr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ts(o,u,t);rs(o,f);break e;case 1:s=u;var c=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bt===null||!bt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ms(o,s,t);rs(o,w);break e}}o=o.return}while(o!==null)}du(n)}catch(_){t=_,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function uu(){var e=fl.current;return fl.current=al,e===null?al:e}function ha(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||(nn&268435455)===0&&(ml&268435455)===0||$t(ke,_e)}function El(e,t){var n=V;V|=2;var r=uu();(ke!==e||_e!==t)&&(Pt=null,ln(e,t));do try{dd();break}catch(l){su(e,l)}while(!0);if(Po(),V=n,fl.current=r,he!==null)throw Error(h(261));return ke=null,_e=0,ve}function dd(){for(;he!==null;)cu(he)}function fd(){for(;he!==null&&!Fu();)cu(he)}function cu(e){var t=pu(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?du(e):he=t,aa.current=null}function du(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ld(n,t,Je),n!==null){he=n;return}}else{if(n=od(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function on(e,t,n){var r=Y,l=ot.transition;try{ot.transition=null,Y=1,md(e,t,n,r)}finally{ot.transition=l,Y=r}return null}function md(e,t,n,r){do Rn();while(Wt!==null);if((V&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yu(e,o),e===ke&&(he=ke=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||hl||(hl=!0,hu(Nr,function(){return Rn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ot.transition,ot.transition=null;var i=Y;Y=1;var s=V;V|=4,aa.current=null,id(e,n),tu(n,e),Dc(ho),Tr=!!po,ho=po=null,e.current=n,sd(n),Au(),V=s,Y=i,ot.transition=o}else e.current=n;if(hl&&(hl=!1,Wt=e,gl=l),o=e.pendingLanes,o===0&&(bt=null),Vu(n.stateNode),He(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(pl)throw pl=!1,e=ua,ua=null,e;return(gl&1)!==0&&e.tag!==0&&Rn(),o=e.pendingLanes,(o&1)!==0?e===ca?gr++:(gr=0,ca=e):gr=0,At(),null}function Rn(){if(Wt!==null){var e=Ja(gl),t=ot.transition,n=Y;try{if(ot.transition=null,Y=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,gl=0,(V&6)!==0)throw Error(h(331));var l=V;for(V|=4,S=e.current;S!==null;){var o=S,i=o.child;if((S.flags&16)!==0){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(S=p;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:mr(8,y,o)}var E=y.child;if(E!==null)E.return=y,S=E;else for(;S!==null;){y=S;var g=y.sibling,k=y.return;if(Ks(y),y===p){S=null;break}if(g!==null){g.return=k,S=g;break}S=k}}}var C=o.alternate;if(C!==null){var z=C.child;if(z!==null){C.child=null;do{var me=z.sibling;z.sibling=null,z=me}while(z!==null)}}S=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:mr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){i=S;var m=i.child;if((i.subtreeFlags&2064)!==0&&m!==null)m.return=i,S=m;else e:for(i=c;S!==null;){if(s=S,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:dl(9,s)}}catch(_){de(s,s.return,_)}if(s===i){S=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,S=w;break e}S=s.return}}if(V=l,At(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Sr,e)}catch{}r=!0}return r}finally{Y=n,ot.transition=t}}return!1}function fu(e,t,n){t=Pn(n,t),t=Ts(e,t,1),e=Bt(e,t,1),t=je(),e!==null&&(Bn(e,1,t),He(e,t))}function de(e,t,n){if(e.tag===3)fu(e,e,n);else for(;t!==null;){if(t.tag===3){fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Pn(n,e),e=Ms(t,e,1),t=Bt(t,e,1),e=je(),t!==null&&(Bn(t,1,e),He(t,e));break}}t=t.return}}function pd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(_e&n)===n&&(ve===4||ve===3&&(_e&130023424)===_e&&500>fe()-sa?ln(e,0):ia|=n),He(e,t)}function mu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=je();e=Ct(e,t),e!==null&&(Bn(e,t,n),He(e,n))}function hd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mu(e,n)}function gd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),mu(e,n)}var pu;pu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return be=!1,rd(e,t,n);be=(e.flags&131072)!==0}else be=!1,oe&&(t.flags&1048576)!==0&&Yi(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ul(e,t),e=t.pendingProps;var l=wn(t,Pe.current);zn(t,n),l=Uo(null,t,r,e,l,n);var o=Bo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(o=!0,$r(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ro(t),l.updater=il,t.stateNode=l,l._reactInternals=t,Qo(t,r,e,n),t=Ko(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&ko(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=yd(r),e=dt(r,e),l){case 0:t=qo(null,t,r,e,n);break e;case 1:t=Bs(null,t,r,e,n);break e;case 11:t=Is(null,t,r,e,n);break e;case 14:t=js(null,t,r,dt(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:dt(r,l),qo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:dt(r,l),Bs(e,t,r,l,n);case 3:e:{if(Vs(t),e===null)throw Error(h(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ns(e,t),el(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Pn(Error(h(423)),t),t=bs(e,t,r,n,l);break e}else if(r!==l){l=Pn(Error(h(424)),t),t=bs(e,t,r,n,l);break e}else for(Ze=It(t.stateNode.containerInfo.firstChild),Xe=t,oe=!0,ct=null,n=es(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===l){t=_t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return os(t),e===null&&Co(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Us(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&Co(t),null;case 13:return Ws(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:dt(r,l),Is(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,J(Xr,r._currentValue),r._currentValue=i,o!==null)if(ut(o.value,i)){if(o.children===l.children&&!Be.current){t=_t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=zt(-1,n&-n),u.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?u.next=u:(u.next=y.next,y.next=u),p.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),To(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(h(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),To(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=rt(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=dt(r,t.pendingProps),l=dt(r.type,l),js(e,t,r,l,n);case 15:return Fs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:dt(r,l),ul(e,t),t.tag=1,Ve(r)?(e=!0,$r(t)):e=!1,zn(t,n),Ps(t,r,l),Qo(t,r,l,n),Ko(null,t,r,!0,e,n);case 19:return $s(e,t,n);case 22:return As(e,t,n)}throw Error(h(156,t.tag))};function hu(e,t){return Ga(e,t)}function vd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new vd(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yd(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===T)return 11;if(e===q)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ga(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case pe:return an(n.children,l,o,t);case we:i=8,l|=8;break;case ht:return e=at(12,n,t,l|2),e.elementType=ht,e.lanes=o,e;case F:return e=at(13,n,t,l),e.elementType=F,e.lanes=o,e;case ee:return e=at(19,n,t,l),e.elementType=ee,e.lanes=o,e;case M:return xl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case et:i=10;break e;case P:i=9;break e;case T:i=11;break e;case q:i=14;break e;case re:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=at(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=at(22,e,r,t),e.elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function va(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ed(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,l,o,i,s,u){return e=new Ed(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(o),e}function wd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gu(e){if(!e)return Ft;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Hi(e,n,t)}return t}function vu(e,t,n,r,l,o,i,s,u){return e=Ea(n,r,!0,e,l,o,i,s,u),e.context=gu(null),n=e.current,r=je(),l=Ht(n),o=zt(r,l),o.callback=t??null,Bt(n,o,l),e.current.lanes=l,Bn(e,l,r),He(e,r),e}function kl(e,t,n,r){var l=t.current,o=je(),i=Ht(l);return n=gu(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,i),e!==null&&(pt(e,l,i,o),Jr(e,l,i)),i}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wa(e,t){yu(e,t),(e=e.alternate)&&yu(e,t)}function xd(){return null}var Eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Sl.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));kl(e,t,null,null)},Sl.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){kl(null,e,null,null)}),t[xt]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ni();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&oi(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function kd(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var p=Nl(i);o.call(p)}}var i=vu(t,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=i,e[xt]=i.current,er(e.nodeType===8?e.parentNode:e),rn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var p=Nl(u);s.call(p)}}var u=Ea(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=u,e[xt]=u.current,er(e.nodeType===8?e.parentNode:e),rn(function(){kl(t,u,n,r)}),u}function zl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=Nl(i);s.call(u)}}kl(t,i,e,l)}else i=kd(n,t,e,l,r);return Nl(i)}ei=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&($l(t,n|1),He(t,fe()),(V&6)===0&&(Mn=fe()+500,At()))}break;case 13:rn(function(){var r=Ct(e,1);if(r!==null){var l=je();pt(r,e,1,l)}}),wa(e,1)}},Ql=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=je();pt(t,e,134217728,n)}wa(e,134217728)}},ti=function(e){if(e.tag===13){var t=Ht(e),n=Ct(e,t);if(n!==null){var r=je();pt(n,e,t,r)}wa(e,t)}},ni=function(){return Y},ri=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}},Al=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Wr(r);if(!l)throw Error(h(90));_a(r),Tl(r,l)}}}break;case"textarea":Ra(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Va=ma,ba=rn;var Nd={usingClientEntryPoint:!1,Events:[rr,yn,Wr,Ua,Ba,ma]},vr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sd={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qa(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||xd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Sr=_l.inject(Sd),gt=_l}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd,$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(h(200));return wd(e,t,null,n)},$e.createRoot=function(e,t){if(!ka(e))throw Error(h(299));var n=!1,r="",l=Eu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,l),e[xt]=t.current,er(e.nodeType===8?e.parentNode:e),new xa(t)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Qa(t),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return rn(e)},$e.hydrate=function(e,t,n){if(!Cl(t))throw Error(h(200));return zl(null,e,t,!0,n)},$e.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Eu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=vu(t,null,e,1,n??null,l,!1,o,i),e[xt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)},$e.render=function(e,t,n){if(!Cl(t))throw Error(h(200));return zl(null,e,t,!1,n)},$e.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(h(40));return e._reactRootContainer?(rn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},$e.unstable_batchedUpdates=ma,$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return zl(e,t,n,!1,r)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var zu;function Td(){if(zu)return Sa.exports;zu=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(G){console.error(G)}}return O(),Sa.exports=Ld(),Sa.exports}var _u;function Md(){if(_u)return Pl;_u=1;var O=Td();return Pl.createRoot=O.createRoot,Pl.hydrateRoot=O.hydrateRoot,Pl}var Rd=Md();const Dd=Pu(Rd),Od=`
  :root {
    --gold: #c9a84c;
    --gold-light: #e8c87a;
    --gold-dim: #8b6f35;
    --bg: #080a0f;
    --bg2: #0d1018;
    --bg3: #111520;
    --surface: #161b27;
    --surface2: #1e2535;
    --text: #e8e4dc;
    --text-muted: #8a8070;
    --text-dim: #5a5548;
    --white: #f8f5ef;
    --accent: #2a6b8c;
    --radius: 2px;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    cursor: none;
  }

  /* === CUSTOM CURSOR === */
  #cursor {
    width: 12px; height: 12px;
    background: var(--gold);
    border-radius: 50%;
    position: fixed; pointer-events: none;
    z-index: 9999; mix-blend-mode: difference;
    transition: transform 0.15s ease, width 0.3s, height 0.3s;
    transform: translate(-50%, -50%);
  }
  #cursor-ring {
    width: 40px; height: 40px;
    border: 1px solid rgba(201,168,76,0.5);
    border-radius: 50%;
    position: fixed; pointer-events: none;
    z-index: 9998;
    transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), width 0.3s, height 0.3s, border-color 0.3s;
    transform: translate(-50%, -50%);
  }
  body:has(a:hover) #cursor, body:has(button:hover) #cursor { transform: translate(-50%,-50%) scale(2); }
  body:has(a:hover) #cursor-ring, body:has(button:hover) #cursor-ring { width: 60px; height: 60px; border-color: var(--gold); }

  /* === CANVAS BACKGROUND === */
  #particle-canvas {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0; pointer-events: none;
    opacity: 0.4;
  }

  /* === SCROLLBAR === */
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  /* === NAV === */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 0 5%;
    display: flex; align-items: center; justify-content: space-between;
    height: 80px;
    transition: background 0.5s, backdrop-filter 0.5s, border-bottom 0.5s;
  }
  nav.scrolled {
    background: rgba(8,10,15,0.92);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }
  .nav-logo {
    font-family: 'Cinzel', serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--gold);
    letter-spacing: 0.2em;
    text-decoration: none;
  }
  .nav-logo span { color: var(--text); font-weight: 400; }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -4px; left: 0;
    width: 0; height: 1px; background: var(--gold);
    transition: width 0.3s ease;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 0.55rem 1.5rem;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    cursor: none;
    transition: background 0.3s, color 0.3s;
  }
  .nav-cta:hover { background: var(--gold); color: var(--bg); }
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: none; }
  .hamburger span { display: block; width: 24px; height: 1px; background: var(--gold); transition: all 0.3s; }

  /* === HERO === */
  #hero {
    position: relative; z-index: 1;
    min-height: 100vh;
    display: flex; align-items: center;
    overflow: hidden;
  }
  .hero-bg-wrap {
    position: absolute; inset: 0; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: -5%;
    background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.35) contrast(1.1);
    animation: cinematicZoom 20s ease-in-out infinite alternate;
  }
  .hero-bg::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(8,10,15,0.85) 0%, rgba(13,18,32,0.4) 50%, #080a0f 100%);
  }
  @keyframes cinematicZoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.08); }
  }
  .hero-grid-overlay {
    position: absolute; inset: 0;
    background-image: 
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  }
  .hero-content {
    position: relative; z-index: 2;
    padding: 0 5%;
    max-width: 900px;
    padding-top: 100px; /* Safely clear the 80px navbar on short screens */
  }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 1rem;
    margin-bottom: 2rem;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.3s forwards;
  }
  .hero-eyebrow-line { width: 50px; height: 1px; background: var(--gold); }
  .hero-eyebrow-text {
    font-size: 0.72rem; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--gold);
    font-weight: 500;
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    font-weight: 300;
    line-height: 0.95;
    color: var(--white);
    margin-bottom: 2rem;
    opacity: 0; transform: translateY(30px);
    animation: fadeUp 1s 0.5s forwards;
  }
  .hero-title em {
    font-style: italic;
    color: var(--gold);
    display: block;
  }
  .hero-subtitle {
    font-size: 1.05rem;
    color: var(--text-muted);
    max-width: 480px;
    line-height: 1.8;
    margin-bottom: 3rem;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.7s forwards;
  }
  .hero-actions {
    display: flex; gap: 1.5rem; align-items: center;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.9s forwards;
  }
  .btn-primary {
    background: var(--gold);
    color: var(--bg);
    border: none;
    padding: 1rem 2.5rem;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: none;
    text-decoration: none;
    display: inline-block;
    position: relative; overflow: hidden;
    transition: transform 0.3s;
  }
  .btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%); transition: transform 0.4s;
  }
  .btn-primary:hover::before { transform: translateX(0); }
  .btn-secondary {
    color: var(--text);
    text-decoration: none;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    display: flex; align-items: center; gap: 0.6rem;
    transition: color 0.3s;
  }
  .btn-secondary:hover { color: var(--gold); }
  .btn-secondary .arrow {
    width: 32px; height: 32px;
    border: 1px solid currentColor;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem;
    transition: transform 0.3s;
  }
  .btn-secondary:hover .arrow { transform: rotate(45deg); }

  .hero-stats {
    position: absolute; right: 5%; bottom: 10%;
    display: flex; flex-direction: column; gap: 2rem;
    opacity: 0; animation: fadeLeft 0.8s 1.2s forwards;
    z-index: 2;
  }
  .hero-stat { text-align: right; }
  .hero-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; font-weight: 300;
    color: var(--gold); line-height: 1;
  }
  .hero-stat-label {
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--text-dim);
    margin-top: 0.3rem;
  }



  /* === SECTION COMMON === */
  section { position: relative; z-index: 1; }
  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }
  .section-tag {
    display: inline-flex; align-items: center; gap: 1rem;
    font-size: 0.7rem; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--gold);
    font-weight: 500; margin-bottom: 1.5rem;
  }
  .section-tag::before, .section-tag::after {
    content: ''; width: 30px; height: 1px; background: var(--gold-dim);
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    color: var(--white);
    line-height: 1.1;
  }
  .section-title em { font-style: italic; color: var(--gold); }
  .section-desc {
    margin-top: 1.5rem;
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 550px;
    margin-inline: auto;
    line-height: 1.8;
  }

  /* === SEARCH BAR === */
  #search-section {
    padding: 3rem 5% 0;
    margin-bottom: 4rem;
    position: relative; z-index: 10;
  }
  .search-box {
    background: var(--surface);
    border: 1px solid rgba(201,168,76,0.2);
    padding: 2rem 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 1.5rem;
    align-items: end;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  }
  .search-field label {
    display: block;
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 0.6rem;
  }
  .search-field select, .search-field input {
    width: 100%;
    background: transparent;
    border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
    color: var(--text);
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    padding: 0.5rem 0;
    outline: none;
    appearance: none;
    cursor: none;
    transition: border-color 0.3s;
  }
  .search-field select:focus, .search-field input:focus { border-bottom-color: var(--gold); }
  .search-field select option { background: var(--surface); }
  .search-btn {
    background: var(--gold);
    border: none; color: var(--bg);
    padding: 0.85rem 2rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: none;
    white-space: nowrap;
    transition: background 0.3s, transform 0.2s;
  }
  .search-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

  /* === FEATURED PROPERTIES === */
  #properties {
    padding: 8rem 5%;
  }
  .properties-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .property-card {
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.04);
    position: relative;
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.3s, box-shadow 0.5s;
    opacity: 0; transform: translateY(40px);
  }
  .property-card.visible { opacity: 1; transform: translateY(0); }
  .property-card:hover {
    transform: translateY(-8px);
    border-color: rgba(201,168,76,0.3);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.1);
  }
  .property-card.featured {
    grid-column: span 2; grid-row: span 1;
  }
  .property-img-wrap {
    position: relative; overflow: hidden;
    height: 280px;
  }
  .property-card.featured .property-img-wrap { height: 380px; }
  .property-img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .property-card:hover .property-img { transform: scale(1.08); }
  .property-img-bg {
    width: 100%; height: 100%;
    transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
    position: relative;
  }
  .property-card:hover .property-img-bg { transform: scale(1.08); }
  .property-badge {
    position: absolute; top: 1.2rem; left: 1.2rem;
    background: var(--gold);
    color: var(--bg);
    font-size: 0.62rem; letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    font-weight: 500;
  }
  .property-badge.new { background: #2a8c6b; }
  .property-badge.sold { background: #8c2a2a; }
  .property-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(8,10,15,0.9) 0%, transparent 50%);
  }
  .property-quick-view {
    position: absolute; bottom: -50px; left: 50%; transform: translateX(-50%);
    background: rgba(201,168,76,0.95);
    color: var(--bg);
    padding: 0.6rem 1.5rem;
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: bottom 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    cursor: none;
  }
  .property-card:hover .property-quick-view { bottom: 1.5rem; }
  .property-body { padding: 1.5rem; }
  .property-type {
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold-dim);
    margin-bottom: 0.5rem;
  }
  .property-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; font-weight: 400;
    color: var(--white); margin-bottom: 0.4rem;
  }
  .property-location {
    font-size: 0.8rem; color: var(--text-muted);
    display: flex; align-items: center; gap: 0.3rem;
    margin-bottom: 1.2rem;
  }
  .property-features {
    display: flex; gap: 1.2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 1.2rem;
  }
  .property-feature {
    font-size: 0.75rem; color: var(--text-muted);
    display: flex; align-items: center; gap: 0.35rem;
  }
  .property-feature .icon { font-size: 0.9rem; }
  .property-footer {
    display: flex; justify-content: space-between; align-items: center;
  }
  .property-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem; font-weight: 400;
    color: var(--gold);
  }
  .property-price small { font-size: 0.7rem; color: var(--text-dim); }
  .property-link {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.3);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold); font-size: 0.8rem;
    text-decoration: none;
    transition: background 0.3s, border-color 0.3s;
    cursor: none;
  }
  .property-link:hover { background: var(--gold); color: var(--bg); border-color: var(--gold); }

  /* === STATS MARQUEE === */
  #stats-bar {
    background: var(--surface);
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    padding: 2rem 0;
    overflow: hidden;
  }
  .marquee-track {
    display: flex; gap: 5rem;
    animation: marqueeAnim 20s linear infinite;
    width: max-content;
  }
  @keyframes marqueeAnim { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .marquee-item {
    display: flex; align-items: center; gap: 2rem;
    white-space: nowrap;
  }
  .marquee-item .num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem; color: var(--gold);
  }
  .marquee-item .label {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-dim);
  }
  .marquee-dot { width: 4px; height: 4px; background: var(--gold-dim); border-radius: 50%; }

  /* === WHY US === */
  #why-us { padding: 8rem 5%; background: var(--bg2); }
  .why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .why-visual {
    position: relative;
  }
  .why-main-img {
    width: 100%; height: 550px;
    background: linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%);
    border: 1px solid rgba(201,168,76,0.15);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .why-img-art {
    width: 100%; height: 100%;
    position: relative;
    background: 
      linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 50%),
      repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.02) 30px, rgba(201,168,76,0.02) 31px);
  }
  .why-img-art::before {
    content: '';
    position: absolute; inset: 15%;
    border: 1px solid rgba(201,168,76,0.2);
  }
  .why-img-art::after {
    content: 'LUMIÈRE';
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 4rem; letter-spacing: 0.5em;
    color: rgba(201,168,76,0.08);
    font-weight: 700;
  }
  .why-accent-card {
    position: absolute; bottom: -2rem; right: -2rem;
    background: var(--surface2);
    border: 1px solid rgba(201,168,76,0.25);
    padding: 1.8rem 2rem;
    width: 200px;
  }
  .why-accent-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem; color: var(--gold); line-height: 1;
  }
  .why-accent-label {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-muted);
    margin-top: 0.5rem; line-height: 1.5;
  }
  .why-content { padding-right: 2rem; }
  .why-features { margin-top: 3rem; display: flex; flex-direction: column; gap: 1.5rem; }
  .why-feature {
    display: flex; gap: 1.5rem;
    padding: 1.5rem;
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.04);
    border-left: 3px solid transparent;
    transition: border-left-color 0.3s, transform 0.3s;
    opacity: 0; transform: translateX(-20px);
  }
  .why-feature.visible { opacity: 1; transform: translateX(0); }
  .why-feature:hover { border-left-color: var(--gold); transform: translateX(5px); }
  .why-feature-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
  }
  .why-feature-text h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem; color: var(--white);
    margin-bottom: 0.3rem;
  }
  .why-feature-text p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

  /* === PROCESS === */
  #process { padding: 8rem 5%; }
  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin-top: 5rem;
    position: relative;
  }
  .process-steps::before {
    content: '';
    position: absolute;
    top: 3rem; left: 12.5%; right: 12.5%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold-dim), var(--gold-dim), transparent);
    z-index: 0;
  }
  .process-step {
    padding: 0 2rem;
    text-align: center;
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(30px);
    transition: all 0.6s ease;
  }
  .process-step.visible { opacity: 1; transform: translateY(0); }
  .process-num {
    width: 60px; height: 60px;
    background: var(--bg);
    border: 1px solid var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    color: var(--gold);
    position: relative;
    transition: background 0.3s;
  }
  .process-step:hover .process-num { background: var(--gold); color: var(--bg); }
  .process-step h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; color: var(--white);
    margin-bottom: 0.8rem;
  }
  .process-step p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.7; }

  /* === TESTIMONIALS === */
  #testimonials { padding: 8rem 5%; background: var(--bg2); overflow: hidden; }
  .testimonials-track-wrap { position: relative; }
  .testimonials-track {
    --slide-pct: 50%;
    display: flex; gap: 2rem;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
    transform: translateX(calc(var(--slide-pct) * -1 * var(--t-index) - var(--t-index) * 2rem));
  }
  .testimonial-card {
    min-width: calc(50% - 1rem);
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.05);
    padding: 2.5rem;
    position: relative;
    flex-shrink: 0;
  }
  .testimonial-card::before {
    content: '\\201C';
    font-family: 'Cormorant Garamond', serif;
    font-size: 6rem; color: rgba(201,168,76,0.12);
    position: absolute; top: 0.5rem; left: 1.5rem;
    line-height: 1;
  }
  .testimonial-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem; font-style: italic;
    color: var(--text); line-height: 1.8;
    margin-bottom: 2rem;
    position: relative; z-index: 1;
  }
  .testimonial-author { display: flex; gap: 1rem; align-items: center; }
  .testimonial-avatar {
    width: 50px; height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-dim), var(--surface2));
    border: 2px solid rgba(201,168,76,0.3);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 0.9rem; color: var(--gold);
  }
  .testimonial-author-name {
    font-weight: 500; font-size: 0.9rem; color: var(--white);
  }
  .testimonial-author-role {
    font-size: 0.72rem; letter-spacing: 0.1em;
    color: var(--text-muted); margin-top: 0.2rem;
  }
  .testimonial-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 0.3rem; }
  .testimonials-nav {
    display: flex; gap: 1rem; justify-content: center;
    margin-top: 3rem;
  }
  .tslide-btn {
    width: 44px; height: 44px;
    border: 1px solid rgba(201,168,76,0.3);
    background: transparent;
    color: var(--gold);
    font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    cursor: none;
    transition: background 0.3s, border-color 0.3s;
  }
  .tslide-btn:hover { background: var(--gold); color: var(--bg); border-color: var(--gold); }

  /* === AGENTS === */
  #agents { padding: 8rem 5%; }
  .agents-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .agent-card {
    text-align: center;
    opacity: 0; transform: translateY(30px);
    transition: all 0.6s;
  }
  .agent-card.visible { opacity: 1; transform: translateY(0); }
  .agent-photo-wrap {
    position: relative; margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .agent-photo {
    width: 100%; height: 280px;
    background: var(--surface);
    border: 1px solid rgba(201,168,76,0.1);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 3rem; color: rgba(201,168,76,0.3);
    transition: border-color 0.3s;
    position: relative; overflow: hidden;
  }
  .agent-photo::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(201,168,76,0.1) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.3s;
  }
  .agent-card:hover .agent-photo { border-color: rgba(201,168,76,0.4); }
  .agent-card:hover .agent-photo::after { opacity: 1; }
  .agent-social {
    position: absolute; bottom: -50px; left: 0; right: 0;
    display: flex; justify-content: center; gap: 0.5rem;
    transition: bottom 0.4s;
    padding-bottom: 1rem;
  }
  .agent-card:hover .agent-social { bottom: 0; }
  .agent-social-btn {
    width: 32px; height: 32px;
    background: rgba(8,10,15,0.9);
    border: 1px solid rgba(201,168,76,0.4);
    color: var(--gold); font-size: 0.7rem;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; cursor: none;
    transition: background 0.3s;
  }
  .agent-social-btn:hover { background: var(--gold); color: var(--bg); }
  .agent-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem; color: var(--white);
  }
  .agent-title {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--gold-dim);
    margin-top: 0.3rem;
  }
  .agent-deals {
    font-size: 0.78rem; color: var(--text-muted);
    margin-top: 0.5rem;
  }

  /* === CTA BANNER === */
  #cta {
    padding: 7rem 5%;
    background: linear-gradient(135deg, var(--surface) 0%, var(--bg3) 100%);
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    text-align: center;
    position: relative; overflow: hidden;
  }
  #cta::before {
    content: 'LUMIÈRE';
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 15rem; letter-spacing: 0.3em;
    color: rgba(201,168,76,0.025);
    font-weight: 700; pointer-events: none;
    white-space: nowrap;
  }
  #cta .section-title { margin-bottom: 1.5rem; }
  .cta-desc {
    color: var(--text-muted); font-size: 1rem;
    max-width: 500px; margin: 0 auto 3rem;
    line-height: 1.8;
  }
  .cta-actions { display: flex; gap: 1.5rem; justify-content: center; }

  /* === NEWSLETTER === */
  #newsletter { padding: 5rem 5%; background: var(--bg2); }
  .newsletter-box {
    display: flex; gap: 1.5rem; align-items: end;
    max-width: 600px; margin: 0 auto;
  }
  .newsletter-input-wrap { flex: 1; }
  .newsletter-input-wrap label {
    display: block;
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 0.6rem;
  }
  .newsletter-input {
    width: 100%;
    background: transparent;
    border: none; border-bottom: 1px solid rgba(255,255,255,0.15);
    color: var(--text);
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    padding: 0.6rem 0; outline: none;
    transition: border-color 0.3s;
  }
  .newsletter-input:focus { border-bottom-color: var(--gold); }
  .newsletter-input::placeholder { color: var(--text-dim); }

  /* === FOOTER === */
  footer {
    background: var(--bg);
    border-top: 1px solid rgba(255,255,255,0.04);
    padding: 5rem 5% 2rem;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }
  .footer-brand .nav-logo { font-size: 1.5rem; display: block; margin-bottom: 1.5rem; }
  .footer-brand p {
    font-size: 0.85rem; color: var(--text-muted);
    line-height: 1.8; max-width: 280px;
  }
  .footer-socials { display: flex; gap: 0.8rem; margin-top: 1.5rem; }
  .footer-social {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-muted); font-size: 0.75rem;
    text-decoration: none;
    transition: all 0.3s; cursor: none;
  }
  .footer-social:hover { border-color: var(--gold); color: var(--gold); }
  .footer-col h4 {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem; letter-spacing: 0.2em;
    color: var(--gold); margin-bottom: 1.5rem;
  }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .footer-col ul a {
    font-size: 0.85rem; color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s; display: flex; align-items: center; gap: 0.5rem;
  }
  .footer-col ul a::before { content: '—'; font-size: 0.6rem; color: var(--gold-dim); }
  .footer-col ul a:hover { color: var(--gold); }
  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.04);
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-copy {
    font-size: 0.72rem; color: var(--text-dim);
    letter-spacing: 0.05em;
  }
  .footer-legal { display: flex; gap: 2rem; }
  .footer-legal a {
    font-size: 0.72rem; color: var(--text-dim);
    text-decoration: none; letter-spacing: 0.05em;
    transition: color 0.3s;
  }
  .footer-legal a:hover { color: var(--gold); }

  /* === KEYFRAMES === */
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeLeft { to { opacity: 1; transform: translateX(0); } }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
  @keyframes shimmer {
    0%{background-position:-200% center}
    100%{background-position:200% center}
  }
  .shimmer-text {
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 40%, var(--gold) 60%, var(--gold-light) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 4s linear infinite;
  }

  /* === PROPERTY VISUAL PLACEHOLDERS === */
  .prop-bg-1 {
    background: linear-gradient(135deg, #1a2035 0%, #0f1520 50%, #1a1a2e 100%);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem; color: rgba(201,168,76,0.15);
    position: relative; overflow: hidden;
  }
  .prop-bg-1::before {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 40%;
    background: linear-gradient(to top, rgba(201,168,76,0.05), transparent);
  }
  .prop-bg-2 { background: linear-gradient(135deg, #1a2830 0%, #0f1a20 100%); }
  .prop-bg-3 { background: linear-gradient(135deg, #20181a 0%, #1a1015 100%); }
  .prop-bg-4 { background: linear-gradient(135deg, #151a25 0%, #0d1015 100%); }

  /* property icon decoration */
  .prop-deco {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 1rem;
  }
  .prop-deco-icon { font-size: 4rem; opacity: 0.15; }
  .prop-deco-name {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem; letter-spacing: 0.3em;
    color: rgba(201,168,76,0.2); text-transform: uppercase;
  }

  /* === RESPONSIVE === */
  @media (max-width: 1100px) {
    .properties-grid { grid-template-columns: 1fr 1fr; }
    .property-card.featured { grid-column: span 1; }
    .search-box { grid-template-columns: 1fr 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
    .hero-location-tag, .hero-stats { display: none; }
    .nav-links, .nav-cta { display: none; }
    .hamburger { display: flex; }
  }
  @media (max-width: 768px) {
    .search-box { grid-template-columns: 1fr; }
    .properties-grid { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: 1fr; }
    .why-visual { display: none; }
    .process-steps { grid-template-columns: 1fr 1fr; }
    .process-steps::before { display: none; }
    .agents-grid { grid-template-columns: 1fr 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .testimonials-track { --slide-pct: 100%; }
    .testimonial-card { min-width: 100%; }
    .cta-actions { flex-direction: column; align-items: center; }
    .newsletter-box { flex-direction: column; }
  }

  /* === MOBILE NAV === */
  .mobile-menu {
    position: fixed; inset: 0;
    background: rgba(8,10,15,0.98);
    backdrop-filter: blur(20px);
    z-index: 999;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 2rem;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem; color: var(--text);
    text-decoration: none;
    transition: color 0.3s;
  }
  .mobile-menu a:hover { color: var(--gold); }

  /* === LOADING SCREEN === */
  #loader {
    position: fixed; inset: 0;
    background: var(--bg);
    z-index: 99999;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 2rem;
    transition: opacity 0.8s, visibility 0.8s;
  }
  #loader.hidden { opacity: 0; visibility: hidden; }
  .loader-logo {
    font-family: 'Cinzel', serif;
    font-size: 2rem; letter-spacing: 0.4em;
    color: var(--gold);
    animation: pulse 1.5s ease infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .loader-bar-wrap { width: 200px; height: 1px; background: rgba(201,168,76,0.2); }
  .loader-bar {
    height: 100%; background: var(--gold);
    animation: loadBar 1.5s ease forwards;
  }
  @keyframes loadBar { from{width:0} to{width:100%} }

  /* Gold separator */
  .gold-sep { width: 60px; height: 1px; background: var(--gold); margin: 2rem auto; }

  /* map pin on hero */
  .hero-location-tag {
    position: absolute; right: 5%; top: 40%;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.3);
    padding: 0.8rem 1.5rem;
    display: flex; align-items: center; gap: 0.8rem;
    animation: float 4s ease infinite;
    opacity: 0; animation: fadeLeft 0.8s 1.4s forwards, float 4s 2.2s ease infinite;
    z-index: 2;
    backdrop-filter: blur(10px);
  }
  .hero-location-tag .pin { color: var(--gold); font-size: 1rem; }
  .hero-location-tag .loc-text { font-size: 0.75rem; color: var(--text); }
  .hero-location-tag .loc-text strong { display: block; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-dim); }

  /* === AI CHATBOT === */
  .chatbot-fab {
    position: fixed; bottom: 2rem; right: 2rem;
    width: 60px; height: 60px;
    background: var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--bg); font-size: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 9999; cursor: none;
    transition: transform 0.3s, background 0.3s;
    border: none;
  }
  .chatbot-fab:hover { transform: scale(1.1); background: var(--gold-light); }
  
  .chatbot-window {
    position: fixed; bottom: 6rem; right: 2rem;
    width: 350px; height: 500px;
    background: rgba(13, 16, 24, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 10px;
    z-index: 9999;
    display: flex; flex-direction: column;
    transform: translateY(20px); opacity: 0; pointer-events: none;
    transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    overflow: hidden;
  }
  .chatbot-window.open {
    transform: translateY(0); opacity: 1; pointer-events: auto;
  }
  .chatbot-header {
    padding: 1.2rem;
    background: var(--surface);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    display: flex; align-items: center; justify-content: space-between;
  }
  .chatbot-title {
    font-family: 'Cinzel', serif; font-size: 1rem; color: var(--gold); letter-spacing: 0.1em;
  }
  .chatbot-close { background: none; border: none; color: var(--text); font-size: 1.2rem; cursor: none; }
  .chatbot-body {
    flex: 1; padding: 1.5rem; overflow-y: auto;
    display: flex; flex-direction: column; gap: 1rem;
  }
  .chat-msg { max-width: 80%; padding: 0.8rem 1rem; font-size: 0.85rem; line-height: 1.5; }
  .chat-msg.ai {
    background: var(--surface2); color: var(--text);
    border-radius: 10px 10px 10px 0; align-self: flex-start;
    border: 1px solid rgba(255,255,255,0.05);
  }
  .chat-msg.user {
    background: var(--gold); color: var(--bg);
    border-radius: 10px 10px 0 10px; align-self: flex-end;
  }
  .chatbot-input-area {
    padding: 1rem; background: var(--surface);
    border-top: 1px solid rgba(201,168,76,0.15);
    display: flex; gap: 0.5rem;
  }
  .chatbot-input {
    flex: 1; background: var(--bg); border: 1px solid rgba(255,255,255,0.1);
    color: var(--text); padding: 0.6rem 1rem; font-family: 'DM Sans', sans-serif;
    border-radius: 20px; outline: none; transition: border-color 0.3s;
    font-size: 0.85rem;
  }
  .chatbot-input:focus { border-color: var(--gold); }
  .chatbot-send {
    background: var(--gold); color: var(--bg); border: none;
    width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    cursor: none; transition: transform 0.2s;
  }
  .chatbot-send:hover { transform: scale(1.1); }
`;function Id(){const[O,G]=ye.useState(!0),[h,Fe]=ye.useState(!1),[B,K]=ye.useState(!1),[Se,Re]=ye.useState(0),[Ee,De]=ye.useState("Search →"),it=ye.useRef(null),ae=ye.useRef(null),ie=ye.useRef(null),[Qe,Oe]=ye.useState(!1),[X,$]=ye.useState([{sender:"ai",text:"Welcome to Lumière Estates. How may I assist you with your luxury property search today?"}]),[Ae,Ye]=ye.useState("");ye.useEffect(()=>{const P=document.createElement("link");return P.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap",P.rel="stylesheet",document.head.appendChild(P),()=>{document.head.removeChild(P)}},[]),ye.useEffect(()=>{const P=setTimeout(()=>{G(!1)},1800);return()=>clearTimeout(P)},[]),ye.useEffect(()=>{let P=0,T=0,F=0,ee=0,q;const re=x=>{P=x.clientX,T=x.clientY},M=()=>{it.current&&ae.current&&(it.current.style.left=P+"px",it.current.style.top=T+"px",F+=(P-F)*.12,ee+=(T-ee)*.12,ae.current.style.left=F+"px",ae.current.style.top=ee+"px"),q=requestAnimationFrame(M)};return window.addEventListener("mousemove",re),M(),()=>{window.removeEventListener("mousemove",re),cancelAnimationFrame(q)}},[]),ye.useEffect(()=>{const P=()=>{Fe(window.scrollY>50)};return window.addEventListener("scroll",P),()=>window.removeEventListener("scroll",P)},[]),ye.useEffect(()=>{const P=ie.current;if(!P)return;const T=P.getContext("2d");let F=[],ee;const q=()=>{P.width=window.innerWidth,P.height=window.innerHeight};window.addEventListener("resize",q),q();for(let M=0;M<60;M++)F.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:Math.random()*1.5+.3,dx:(Math.random()-.5)*.3,dy:(Math.random()-.5)*.3,opacity:Math.random()*.6+.1});const re=()=>{T.clearRect(0,0,P.width,P.height),F.forEach(M=>{T.beginPath(),T.arc(M.x,M.y,M.r,0,Math.PI*2),T.fillStyle=`rgba(201,168,76,${M.opacity})`,T.fill(),M.x+=M.dx,M.y+=M.dy,(M.x<0||M.x>P.width)&&(M.dx*=-1),(M.y<0||M.y>P.height)&&(M.dy*=-1)}),F.forEach((M,x)=>{F.slice(x+1).forEach(L=>{const N=Math.hypot(M.x-L.x,M.y-L.y);N<120&&(T.beginPath(),T.moveTo(M.x,M.y),T.lineTo(L.x,L.y),T.strokeStyle=`rgba(201,168,76,${.06*(1-N/120)})`,T.lineWidth=.5,T.stroke())})}),ee=requestAnimationFrame(re)};return re(),()=>{window.removeEventListener("resize",q),cancelAnimationFrame(ee)}},[]),ye.useEffect(()=>{const P=new IntersectionObserver(T=>{T.forEach(F=>{F.isIntersecting&&F.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".property-card, .why-feature, .process-step, .agent-card").forEach(T=>{P.observe(T)}),()=>P.disconnect()},[]),ye.useEffect(()=>{const P=document.querySelectorAll("[data-count]"),T=new IntersectionObserver(F=>{F.forEach(ee=>{if(ee.isIntersecting){const q=ee.target,re=+q.dataset.count;let M=0;const x=re/60,L=setInterval(()=>{M+=x,M>=re?(q.textContent=re+"+",clearInterval(L)):q.textContent=Math.floor(M)},25);T.unobserve(q)}})});return P.forEach(F=>T.observe(F)),()=>T.disconnect()},[]);const Ge=()=>K(!B),ce=()=>K(!1),Ue=P=>{Re(T=>Math.max(0,Math.min(2,T+P)))},Ce=P=>{const T=P.currentTarget.getBoundingClientRect(),F=(P.clientX-T.left)/T.width-.5,ee=(P.clientY-T.top)/T.height-.5,q=document.querySelector(".hero-grid-overlay");q&&(q.style.transform=`translate(${F*20}px, ${ee*20}px)`)},pe=P=>{const T=P.currentTarget,F=T.getBoundingClientRect(),ee=(P.clientX-F.left)/F.width-.5,q=(P.clientY-F.top)/F.height-.5;T.style.transform=`translateY(-8px) rotateX(${-q*4}deg) rotateY(${ee*4}deg)`},we=P=>{P.currentTarget.style.transform=""},ht=()=>{De("Searching..."),setTimeout(()=>De("Search →"),1500)},et=()=>{if(!Ae.trim())return;$(T=>[...T,{sender:"user",text:Ae}]);const P=Ae;Ye(""),setTimeout(()=>{let T="I can connect you with one of our senior partners to discuss this further. Would you like me to schedule a private consultation?";P.toLowerCase().includes("price")||P.toLowerCase().includes("cost")?T="Our exclusive properties range from ₹5 Cr to over ₹100 Cr. I can filter options based on your specific investment criteria.":(P.toLowerCase().includes("location")||P.toLowerCase().includes("where"))&&(T="We have prime listings in Mumbai, Delhi NCR, Bangalore, Dubai, London, and New York. Which city interests you?"),$(F=>[...F,{sender:"ai",text:T}])},1e3)};return a.createElement(a.Fragment,null,a.createElement("style",null,Od),a.createElement("div",{id:"loader",className:O?"":"hidden"},a.createElement("div",{className:"loader-logo"},"LUMIÈRE"),a.createElement("div",{className:"loader-bar-wrap"},a.createElement("div",{className:"loader-bar"}))),a.createElement("div",{id:"cursor",ref:it}),a.createElement("div",{id:"cursor-ring",ref:ae}),a.createElement("canvas",{id:"particle-canvas",ref:ie}),a.createElement("div",{className:`mobile-menu ${B?"open":""}`,id:"mobileMenu"},a.createElement("a",{href:"#properties",onClick:ce},"Properties"),a.createElement("a",{href:"#why-us",onClick:ce},"About"),a.createElement("a",{href:"#agents",onClick:ce},"Agents"),a.createElement("a",{href:"#process",onClick:ce},"Process"),a.createElement("a",{href:"#cta",onClick:ce},"Contact")),a.createElement("nav",{id:"navbar",className:h?"scrolled":""},a.createElement("a",{href:"#hero",className:"nav-logo"},"LUMIÈRE ",a.createElement("span",null,"ESTATES")),a.createElement("ul",{className:"nav-links"},a.createElement("li",null,a.createElement("a",{href:"#properties"},"Properties")),a.createElement("li",null,a.createElement("a",{href:"#why-us"},"About")),a.createElement("li",null,a.createElement("a",{href:"#agents"},"Agents")),a.createElement("li",null,a.createElement("a",{href:"#process"},"Process")),a.createElement("li",null,a.createElement("a",{href:"#testimonials"},"Reviews"))),a.createElement("button",{className:"nav-cta",onClick:()=>document.getElementById("cta")?.scrollIntoView({behavior:"smooth"})},"Schedule Viewing"),a.createElement("div",{className:"hamburger",onClick:Ge,id:"hamburger"},a.createElement("span",{style:B?{transform:"rotate(45deg) translate(4px, 4px)"}:{}}),a.createElement("span",{style:B?{opacity:"0"}:{}}),a.createElement("span",{style:B?{transform:"rotate(-45deg) translate(4px, -4px)"}:{}}))),a.createElement("section",{id:"hero",onMouseMove:Ce},a.createElement("div",{className:"hero-bg-wrap"},a.createElement("div",{className:"hero-bg"})),a.createElement("div",{className:"hero-grid-overlay"}),a.createElement("div",{className:"hero-content"},a.createElement("div",{className:"hero-eyebrow"},a.createElement("div",{className:"hero-eyebrow-line"}),a.createElement("span",{className:"hero-eyebrow-text"},"Luxury Real Estate Group · Est. 2008")),a.createElement("h1",{className:"hero-title"},"Find Your",a.createElement("br",null),a.createElement("em",null,"Dream Estate"),a.createElement("br",null),"Live Differently."),a.createElement("p",{className:"hero-subtitle"},"We curate the world's most exceptional residences — from oceanfront villas to sky-high penthouses — for clients who demand nothing less than extraordinary."),a.createElement("div",{className:"hero-actions"},a.createElement("a",{href:"#properties",className:"btn-primary"},"Explore Properties"),a.createElement("a",{href:"#why-us",className:"btn-secondary"},a.createElement("span",{className:"arrow"},"→"),"Our Story"))),a.createElement("div",{className:"hero-location-tag"},a.createElement("span",{className:"pin"},"📍"),a.createElement("div",{className:"loc-text"},a.createElement("strong",null,"Featured Location"),"Mumbai · Delhi · Dubai")),a.createElement("div",{className:"hero-stats"},a.createElement("div",{className:"hero-stat"},a.createElement("div",{className:"hero-stat-num","data-count":"1400"},"0"),a.createElement("div",{className:"hero-stat-label"},"Properties Sold")),a.createElement("div",{className:"hero-stat"},a.createElement("div",{className:"hero-stat-num","data-count":"16"},"0"),a.createElement("div",{className:"hero-stat-label"},"Years Experience")),a.createElement("div",{className:"hero-stat"},a.createElement("div",{className:"hero-stat-num","data-count":"98"},"0"),a.createElement("div",{className:"hero-stat-label"},"Client Satisfaction %")))),a.createElement("div",{id:"search-section"},a.createElement("div",{className:"search-box"},a.createElement("div",{className:"search-field"},a.createElement("label",null,"Location"),a.createElement("select",null,a.createElement("option",null,"Any City"),a.createElement("option",null,"Mumbai"),a.createElement("option",null,"Delhi NCR"),a.createElement("option",null,"Bangalore"),a.createElement("option",null,"Dubai"),a.createElement("option",null,"London"),a.createElement("option",null,"New York"))),a.createElement("div",{className:"search-field"},a.createElement("label",null,"Property Type"),a.createElement("select",null,a.createElement("option",null,"All Types"),a.createElement("option",null,"Penthouse"),a.createElement("option",null,"Villa"),a.createElement("option",null,"Mansion"),a.createElement("option",null,"Apartment"),a.createElement("option",null,"Townhouse"))),a.createElement("div",{className:"search-field"},a.createElement("label",null,"Budget"),a.createElement("select",null,a.createElement("option",null,"Any Budget"),a.createElement("option",null,"₹1Cr – ₹5Cr"),a.createElement("option",null,"₹5Cr – ₹20Cr"),a.createElement("option",null,"₹20Cr – ₹50Cr"),a.createElement("option",null,"₹50Cr+"))),a.createElement("button",{className:"search-btn",onClick:ht},Ee))),a.createElement("div",{id:"stats-bar"},a.createElement("div",{className:"marquee-track",id:"marqueeTrack"},a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"1,400+"),a.createElement("span",{className:"label"},"Properties Sold"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"₹8,000Cr+"),a.createElement("span",{className:"label"},"Total Portfolio Value"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"16 Years"),a.createElement("span",{className:"label"},"Market Experience"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"98%"),a.createElement("span",{className:"label"},"Client Satisfaction"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"12"),a.createElement("span",{className:"label"},"Cities Covered"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"250+"),a.createElement("span",{className:"label"},"Expert Agents"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"1,400+"),a.createElement("span",{className:"label"},"Properties Sold"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"₹8,000Cr+"),a.createElement("span",{className:"label"},"Total Portfolio Value"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"16 Years"),a.createElement("span",{className:"label"},"Market Experience"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"98%"),a.createElement("span",{className:"label"},"Client Satisfaction"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"12"),a.createElement("span",{className:"label"},"Cities Covered"),a.createElement("span",{className:"marquee-dot"})),a.createElement("div",{className:"marquee-item"},a.createElement("span",{className:"num"},"250+"),a.createElement("span",{className:"label"},"Expert Agents"),a.createElement("span",{className:"marquee-dot"})))),a.createElement("section",{id:"properties"},a.createElement("div",{className:"section-header"},a.createElement("div",{className:"section-tag"},"Our Portfolio"),a.createElement("h2",{className:"section-title"},"Featured ",a.createElement("em",null,"Residences")),a.createElement("p",{className:"section-desc"},"Handpicked properties that redefine luxury living. Each listing is meticulously vetted for excellence.")),a.createElement("div",{className:"properties-grid"},a.createElement("div",{className:"property-card featured",style:{transitionDelay:"0.1s"},onMouseMove:pe,onMouseLeave:we},a.createElement("div",{className:"property-img-wrap"},a.createElement("div",{className:"property-img-bg",style:{height:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"prop-deco"},a.createElement("div",{className:"prop-deco-icon"},"🏙️"),a.createElement("div",{className:"prop-deco-name"},"Skyline Penthouse")),a.createElement("div",{className:"property-overlay"})),a.createElement("div",{className:"property-badge"},"Featured"),a.createElement("div",{className:"property-quick-view"},"Quick View →")),a.createElement("div",{className:"property-body"},a.createElement("div",{className:"property-type"},"Luxury Penthouse"),a.createElement("div",{className:"property-name"},"The Skyline Residences, Tower A"),a.createElement("div",{className:"property-location"},"📍 Worli, Mumbai"),a.createElement("div",{className:"property-features"},a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🛏")," 5 Beds"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚿")," 5 Baths"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"📐")," 6,200 sqft"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚗")," 3 Parking")),a.createElement("div",{className:"property-footer"},a.createElement("div",{className:"property-price"},"₹42 Cr ",a.createElement("small",null,"/ freehold")),a.createElement("a",{href:"#",className:"property-link"},"→")))),a.createElement("div",{className:"property-card",style:{transitionDelay:"0.2s"},onMouseMove:pe,onMouseLeave:we},a.createElement("div",{className:"property-img-wrap"},a.createElement("div",{className:"property-img-bg",style:{height:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"prop-deco"},a.createElement("div",{className:"prop-deco-icon"},"🌴"),a.createElement("div",{className:"prop-deco-name"},"Garden Villa")),a.createElement("div",{className:"property-overlay"})),a.createElement("div",{className:"property-badge new"},"New"),a.createElement("div",{className:"property-quick-view"},"Quick View →")),a.createElement("div",{className:"property-body"},a.createElement("div",{className:"property-type"},"Private Villa"),a.createElement("div",{className:"property-name"},"The Palm Gardens Estate"),a.createElement("div",{className:"property-location"},"📍 Juhu, Mumbai"),a.createElement("div",{className:"property-features"},a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🛏")," 4 Beds"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚿")," 4 Baths"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"📐")," 4,800 sqft")),a.createElement("div",{className:"property-footer"},a.createElement("div",{className:"property-price"},"₹28 Cr"),a.createElement("a",{href:"#",className:"property-link"},"→")))),a.createElement("div",{className:"property-card",style:{transitionDelay:"0.3s"},onMouseMove:pe,onMouseLeave:we},a.createElement("div",{className:"property-img-wrap"},a.createElement("div",{className:"property-img-bg",style:{height:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"prop-deco"},a.createElement("div",{className:"prop-deco-icon"},"🏛️"),a.createElement("div",{className:"prop-deco-name"},"Golf Estate")),a.createElement("div",{className:"property-overlay"})),a.createElement("div",{className:"property-badge"},"Premium"),a.createElement("div",{className:"property-quick-view"},"Quick View →")),a.createElement("div",{className:"property-body"},a.createElement("div",{className:"property-type"},"Luxury Bungalow"),a.createElement("div",{className:"property-name"},"Golf Links Heritage Mansion"),a.createElement("div",{className:"property-location"},"📍 Golf Links, New Delhi"),a.createElement("div",{className:"property-features"},a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🛏")," 6 Beds"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚿")," 6 Baths"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"📐")," 9,000 sqft")),a.createElement("div",{className:"property-footer"},a.createElement("div",{className:"property-price"},"₹65 Cr"),a.createElement("a",{href:"#",className:"property-link"},"→")))),a.createElement("div",{className:"property-card",style:{transitionDelay:"0.4s"},onMouseMove:pe,onMouseLeave:we},a.createElement("div",{className:"property-img-wrap"},a.createElement("div",{className:"property-img-bg",style:{height:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"prop-deco"},a.createElement("div",{className:"prop-deco-icon"},"🌊"),a.createElement("div",{className:"prop-deco-name"},"Beachfront")),a.createElement("div",{className:"property-overlay"})),a.createElement("div",{className:"property-badge new"},"New"),a.createElement("div",{className:"property-quick-view"},"Quick View →")),a.createElement("div",{className:"property-body"},a.createElement("div",{className:"property-type"},"Beach Villa"),a.createElement("div",{className:"property-name"},"Azure Shores Beachfront Villa"),a.createElement("div",{className:"property-location"},"📍 Goa, India"),a.createElement("div",{className:"property-features"},a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🛏")," 5 Beds"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚿")," 5 Baths"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"📐")," 5,500 sqft")),a.createElement("div",{className:"property-footer"},a.createElement("div",{className:"property-price"},"₹18 Cr"),a.createElement("a",{href:"#",className:"property-link"},"→")))),a.createElement("div",{className:"property-card",style:{transitionDelay:"0.5s"},onMouseMove:pe,onMouseLeave:we},a.createElement("div",{className:"property-img-wrap"},a.createElement("div",{className:"property-img-bg",style:{height:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"prop-deco"},a.createElement("div",{className:"prop-deco-icon"},"🏙️"),a.createElement("div",{className:"prop-deco-name"},"Sky Apartment")),a.createElement("div",{className:"property-overlay"})),a.createElement("div",{className:"property-badge sold"},"Sold"),a.createElement("div",{className:"property-quick-view"},"Quick View →")),a.createElement("div",{className:"property-body"},a.createElement("div",{className:"property-type"},"Sky Apartment"),a.createElement("div",{className:"property-name"},"One Raisina — Level 42"),a.createElement("div",{className:"property-location"},"📍 Aerocity, New Delhi"),a.createElement("div",{className:"property-features"},a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🛏")," 3 Beds"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"🚿")," 3 Baths"),a.createElement("div",{className:"property-feature"},a.createElement("span",{className:"icon"},"📐")," 3,200 sqft")),a.createElement("div",{className:"property-footer"},a.createElement("div",{className:"property-price"},"₹12 Cr"),a.createElement("a",{href:"#",className:"property-link"},"→"))))),a.createElement("div",{style:{textAlign:"center",marginTop:"4rem"}},a.createElement("a",{href:"#",className:"btn-primary"},"View All Properties →"))),a.createElement("section",{id:"why-us"},a.createElement("div",{className:"why-grid"},a.createElement("div",{className:"why-visual"},a.createElement("div",{className:"why-main-img",style:{backgroundImage:"url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80')",backgroundSize:"cover",backgroundPosition:"center"}},a.createElement("div",{className:"why-img-art"})),a.createElement("div",{className:"why-accent-card"},a.createElement("div",{className:"why-accent-num"},"16+"),a.createElement("div",{className:"why-accent-label"},"Years of",a.createElement("br",null),"Luxury Excellence"))),a.createElement("div",{className:"why-content"},a.createElement("div",{className:"section-tag",style:{justifyContent:"flex-start"}},"Why Choose Us"),a.createElement("h2",{className:"section-title",style:{textAlign:"left"}},"Where ",a.createElement("em",null,"Luxury"),a.createElement("br",null),"Meets Expertise"),a.createElement("p",{className:"section-desc",style:{marginInline:"0",marginTop:"1.5rem"}},"We are not just a real estate firm — we are curators of exceptional living. Our white-glove service transforms the property search into an unforgettable journey."),a.createElement("div",{className:"why-features"},a.createElement("div",{className:"why-feature"},a.createElement("div",{className:"why-feature-icon"},"🏆"),a.createElement("div",{className:"why-feature-text"},a.createElement("h4",null,"Award-Winning Service"),a.createElement("p",null,"Recognized 7 consecutive years as India's #1 Luxury Real Estate Agency by Property Awards."))),a.createElement("div",{className:"why-feature"},a.createElement("div",{className:"why-feature-icon"},"🔒"),a.createElement("div",{className:"why-feature-text"},a.createElement("h4",null,"Private & Confidential"),a.createElement("p",null,"Discretion is our foundation. Off-market listings and private viewings for ultra-HNI clients."))),a.createElement("div",{className:"why-feature"},a.createElement("div",{className:"why-feature-icon"},"🌐"),a.createElement("div",{className:"why-feature-text"},a.createElement("h4",null,"Global Network"),a.createElement("p",null,"Access to premium listings across 12 cities in India, UAE, UK, and USA through our partner network."))),a.createElement("div",{className:"why-feature"},a.createElement("div",{className:"why-feature-icon"},"💎"),a.createElement("div",{className:"why-feature-text"},a.createElement("h4",null,"Concierge After-Sale"),a.createElement("p",null,"Interior design partnerships, legal support, NRI services — we stay with you well beyond closing."))))))),a.createElement("section",{id:"process"},a.createElement("div",{className:"section-header"},a.createElement("div",{className:"section-tag"},"How We Work"),a.createElement("h2",{className:"section-title"},"Our ",a.createElement("em",null,"Process")),a.createElement("p",{className:"section-desc"},"A seamless, white-glove experience from first consultation to handing over the keys.")),a.createElement("div",{className:"process-steps"},a.createElement("div",{className:"process-step",style:{transitionDelay:"0.1s"}},a.createElement("div",{className:"process-num"},"01"),a.createElement("h3",null,"Discovery Consultation"),a.createElement("p",null,"We understand your vision, lifestyle, and investment goals through a private one-on-one session.")),a.createElement("div",{className:"process-step",style:{transitionDelay:"0.2s"}},a.createElement("div",{className:"process-num"},"02"),a.createElement("h3",null,"Curated Selection"),a.createElement("p",null,"Our experts handpick properties that align perfectly with your criteria — often including off-market gems.")),a.createElement("div",{className:"process-step",style:{transitionDelay:"0.3s"}},a.createElement("div",{className:"process-num"},"03"),a.createElement("h3",null,"Private Viewings"),a.createElement("p",null,"Exclusive, arranged viewings at your convenience with detailed property insights and guidance.")),a.createElement("div",{className:"process-step",style:{transitionDelay:"0.4s"}},a.createElement("div",{className:"process-num"},"04"),a.createElement("h3",null,"Seamless Closing"),a.createElement("p",null,"Legal, financial, and documentation support through our trusted partner network for a stress-free close.")))),a.createElement("section",{id:"testimonials"},a.createElement("div",{className:"section-header"},a.createElement("div",{className:"section-tag"},"Client Stories"),a.createElement("h2",{className:"section-title"},"Words That ",a.createElement("em",null,"Matter"))),a.createElement("div",{className:"testimonials-track-wrap"},a.createElement("div",{className:"testimonials-track",id:"testimonialsTrack",style:{"--t-index":Se}},a.createElement("div",{className:"testimonial-card"},a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("p",{className:"testimonial-text"},`"Lumière Estates found us a penthouse we didn't even know existed. Their off-market network is extraordinary, and the service throughout was nothing short of exceptional."`),a.createElement("div",{className:"testimonial-author"},a.createElement("div",{className:"testimonial-avatar"},"RK"),a.createElement("div",null,a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("div",{className:"testimonial-author-name"},"Rahul Kapoor"),a.createElement("div",{className:"testimonial-author-role"},"CEO, TechVentures India · Mumbai")))),a.createElement("div",{className:"testimonial-card"},a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("p",{className:"testimonial-text"},'"As an NRI, I was anxious about purchasing property remotely. Lumière made the entire process completely transparent and handled everything flawlessly. I cannot recommend them enough."'),a.createElement("div",{className:"testimonial-author"},a.createElement("div",{className:"testimonial-avatar"},"PS"),a.createElement("div",null,a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("div",{className:"testimonial-author-name"},"Priya Sharma"),a.createElement("div",{className:"testimonial-author-role"},"Investment Banker · Dubai")))),a.createElement("div",{className:"testimonial-card"},a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("p",{className:"testimonial-text"},`"The Golf Links property they sourced for us was beyond our expectations. Their knowledge of Delhi's luxury market is unparalleled, and they negotiated brilliantly on our behalf."`),a.createElement("div",{className:"testimonial-author"},a.createElement("div",{className:"testimonial-avatar"},"AM"),a.createElement("div",null,a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("div",{className:"testimonial-author-name"},"Arjun Malhotra"),a.createElement("div",{className:"testimonial-author-role"},"Industrialist · New Delhi")))),a.createElement("div",{className:"testimonial-card"},a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("p",{className:"testimonial-text"},`"I've worked with luxury real estate firms worldwide. Lumière Estates stands in a class of their own — meticulous, discreet, and genuinely invested in finding the perfect home for you."`),a.createElement("div",{className:"testimonial-author"},a.createElement("div",{className:"testimonial-avatar"},"SJ"),a.createElement("div",null,a.createElement("div",{className:"testimonial-stars"},"★★★★★"),a.createElement("div",{className:"testimonial-author-name"},"Sofia Jensen"),a.createElement("div",{className:"testimonial-author-role"},"Private Equity Director · London")))))),a.createElement("div",{className:"testimonials-nav"},a.createElement("button",{className:"tslide-btn",onClick:()=>Ue(-1)},"←"),a.createElement("button",{className:"tslide-btn",onClick:()=>Ue(1)},"→"))),a.createElement("section",{id:"agents"},a.createElement("div",{className:"section-header"},a.createElement("div",{className:"section-tag"},"Our Team"),a.createElement("h2",{className:"section-title"},"Meet the ",a.createElement("em",null,"Experts")),a.createElement("p",{className:"section-desc"},"Our award-winning agents bring decades of combined experience and a deeply personal approach to every transaction.")),a.createElement("div",{className:"agents-grid"},a.createElement("div",{className:"agent-card",style:{transitionDelay:"0.1s"}},a.createElement("div",{className:"agent-photo-wrap"},a.createElement("div",{className:"agent-photo"},"DEMO"),a.createElement("div",{className:"agent-social"},a.createElement("a",{href:"#",className:"agent-social-btn"},"in"),a.createElement("a",{href:"#",className:"agent-social-btn"},"@"),a.createElement("a",{href:"#",className:"agent-social-btn"},"☎"))),a.createElement("div",{className:"agent-name"},"Agent Placeholder 01"),a.createElement("div",{className:"agent-title"},"Senior Director (Demo)"),a.createElement("div",{className:"agent-deals"},"000 deals · Location A")),a.createElement("div",{className:"agent-card",style:{transitionDelay:"0.2s"}},a.createElement("div",{className:"agent-photo-wrap"},a.createElement("div",{className:"agent-photo"},"DEMO"),a.createElement("div",{className:"agent-social"},a.createElement("a",{href:"#",className:"agent-social-btn"},"in"),a.createElement("a",{href:"#",className:"agent-social-btn"},"@"),a.createElement("a",{href:"#",className:"agent-social-btn"},"☎"))),a.createElement("div",{className:"agent-name"},"Agent Placeholder 02"),a.createElement("div",{className:"agent-title"},"Luxury Specialist (Demo)"),a.createElement("div",{className:"agent-deals"},"000 deals · Location B")),a.createElement("div",{className:"agent-card",style:{transitionDelay:"0.3s"}},a.createElement("div",{className:"agent-photo-wrap"},a.createElement("div",{className:"agent-photo"},"DEMO"),a.createElement("div",{className:"agent-social"},a.createElement("a",{href:"#",className:"agent-social-btn"},"in"),a.createElement("a",{href:"#",className:"agent-social-btn"},"@"),a.createElement("a",{href:"#",className:"agent-social-btn"},"☎"))),a.createElement("div",{className:"agent-name"},"Agent Placeholder 03"),a.createElement("div",{className:"agent-title"},"Investment Lead (Demo)"),a.createElement("div",{className:"agent-deals"},"000 deals · Location C")),a.createElement("div",{className:"agent-card",style:{transitionDelay:"0.4s"}},a.createElement("div",{className:"agent-photo-wrap"},a.createElement("div",{className:"agent-photo"},"DEMO"),a.createElement("div",{className:"agent-social"},a.createElement("a",{href:"#",className:"agent-social-btn"},"in"),a.createElement("a",{href:"#",className:"agent-social-btn"},"@"),a.createElement("a",{href:"#",className:"agent-social-btn"},"☎"))),a.createElement("div",{className:"agent-name"},"Agent Placeholder 04"),a.createElement("div",{className:"agent-title"},"Portfolio Manager (Demo)"),a.createElement("div",{className:"agent-deals"},"000 deals · Location D")))),a.createElement("section",{id:"cta"},a.createElement("div",{className:"section-tag"},"Begin Your Journey"),a.createElement("h2",{className:"section-title shimmer-text"},"Ready to Find Your",a.createElement("br",null),a.createElement("em",null,"Perfect Estate?")),a.createElement("div",{className:"gold-sep"}),a.createElement("p",{className:"cta-desc"},"Schedule a private consultation with our experts. No obligations, just an extraordinary conversation about your dream home."),a.createElement("div",{className:"cta-actions"},a.createElement("a",{href:"tel:+911234567890",className:"btn-primary"},"Call +91 12345 67890"),a.createElement("a",{href:"mailto:hello@lumiereestates.com",className:"btn-secondary"},a.createElement("span",{className:"arrow"},"✉"),"hello@lumiereestates.com"))),a.createElement("section",{id:"newsletter"},a.createElement("div",{className:"section-header",style:{marginBottom:"3rem"}},a.createElement("div",{className:"section-tag"},"Stay Informed"),a.createElement("h2",{className:"section-title",style:{fontSize:"2rem"}},"Get ",a.createElement("em",null,"Exclusive")," Listings First")),a.createElement("div",{className:"newsletter-box"},a.createElement("div",{className:"newsletter-input-wrap"},a.createElement("label",null,"Your Email Address"),a.createElement("input",{type:"email",className:"newsletter-input",placeholder:"name@example.com"})),a.createElement("button",{className:"btn-primary"},"Subscribe →"))),a.createElement("button",{className:"chatbot-fab",onClick:()=>Oe(!Qe)},Qe?"✕":"💬"),a.createElement("div",{className:`chatbot-window ${Qe?"open":""}`},a.createElement("div",{className:"chatbot-header"},a.createElement("div",{className:"chatbot-title"},"AI CONCIERGE"),a.createElement("button",{className:"chatbot-close",onClick:()=>Oe(!1)},"✕")),a.createElement("div",{className:"chatbot-body"},X.map((P,T)=>a.createElement("div",{key:T,className:`chat-msg ${P.sender}`},P.text))),a.createElement("div",{className:"chatbot-input-area"},a.createElement("input",{type:"text",className:"chatbot-input",placeholder:"Type your message...",value:Ae,onChange:P=>Ye(P.target.value),onKeyDown:P=>P.key==="Enter"&&et()}),a.createElement("button",{className:"chatbot-send",onClick:et},"➤"))),a.createElement("footer",null,a.createElement("div",{className:"footer-grid"},a.createElement("div",{className:"footer-brand"},a.createElement("a",{href:"#",className:"nav-logo"},"LUMIÈRE ",a.createElement("span",null,"ESTATES")),a.createElement("p",null,"India's premier luxury real estate group. Connecting exceptional people with extraordinary properties since 2008."),a.createElement("div",{className:"footer-socials"},a.createElement("a",{href:"#",className:"footer-social"},"in"),a.createElement("a",{href:"#",className:"footer-social"},"ig"),a.createElement("a",{href:"#",className:"footer-social"},"fb"),a.createElement("a",{href:"#",className:"footer-social"},"yt"))),a.createElement("div",{className:"footer-col"},a.createElement("h4",null,"Properties"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"#"},"Penthouses")),a.createElement("li",null,a.createElement("a",{href:"#"},"Villas")),a.createElement("li",null,a.createElement("a",{href:"#"},"Mansions")),a.createElement("li",null,a.createElement("a",{href:"#"},"Apartments")),a.createElement("li",null,a.createElement("a",{href:"#"},"Commercial")))),a.createElement("div",{className:"footer-col"},a.createElement("h4",null,"Company"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"#"},"About Us")),a.createElement("li",null,a.createElement("a",{href:"#"},"Our Team")),a.createElement("li",null,a.createElement("a",{href:"#"},"Awards")),a.createElement("li",null,a.createElement("a",{href:"#"},"Press")),a.createElement("li",null,a.createElement("a",{href:"#"},"Careers")))),a.createElement("div",{className:"footer-col"},a.createElement("h4",null,"Contact"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"#"},"Mumbai Office")),a.createElement("li",null,a.createElement("a",{href:"#"},"Delhi Office")),a.createElement("li",null,a.createElement("a",{href:"#"},"Dubai Office")),a.createElement("li",null,a.createElement("a",{href:"#"},"Schedule Viewing")),a.createElement("li",null,a.createElement("a",{href:"#"},"NRI Services"))))),a.createElement("div",{className:"footer-bottom"},a.createElement("div",{className:"footer-copy"},"© 2024 Lumière Estates. All rights reserved."),a.createElement("div",{className:"footer-legal"},a.createElement("a",{href:"#"},"Privacy Policy"),a.createElement("a",{href:"#"},"Terms of Service"),a.createElement("a",{href:"#"},"RERA Registrations")))))}Dd.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(Id,null)));
