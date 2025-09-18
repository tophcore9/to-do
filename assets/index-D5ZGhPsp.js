(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Pe={},fi=[],dn=()=>{},LE=()=>!1,Ka=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bu=n=>n.startsWith("onUpdate:"),yt=Object.assign,Ru=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},FE=Object.prototype.hasOwnProperty,we=(n,e)=>FE.call(n,e),oe=Array.isArray,pi=n=>za(n)==="[object Map]",k_=n=>za(n)==="[object Set]",le=n=>typeof n=="function",$e=n=>typeof n=="string",ps=n=>typeof n=="symbol",Me=n=>n!==null&&typeof n=="object",D_=n=>(Me(n)||le(n))&&le(n.then)&&le(n.catch),O_=Object.prototype.toString,za=n=>O_.call(n),UE=n=>za(n).slice(8,-1),x_=n=>za(n)==="[object Object]",Su=n=>$e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yr=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},BE=/-(\w)/g,rs=Ga(n=>n.replace(BE,(e,t)=>t?t.toUpperCase():"")),$E=/\B([A-Z])/g,Ks=Ga(n=>n.replace($E,"-$1").toLowerCase()),V_=Ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),zl=Ga(n=>n?`on${V_(n)}`:""),Jn=(n,e)=>!Object.is(n,e),Ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},M_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Ac=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Kd;const Qa=()=>Kd||(Kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pu(n){if(oe(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],i=$e(s)?qE(s):Pu(s);if(i)for(const r in i)e[r]=i[r]}return e}else if($e(n)||Me(n))return n}const jE=/;(?![^(]*\))/g,HE=/:([^]+)/,WE=/\/\*[^]*?\*\//g;function qE(n){const e={};return n.replace(WE,"").split(jE).forEach(t=>{if(t){const s=t.split(HE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fn(n){let e="";if($e(n))e=n;else if(oe(n))for(let t=0;t<n.length;t++){const s=fn(n[t]);s&&(e+=s+" ")}else if(Me(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const KE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zE=Cu(KE);function L_(n){return!!n||n===""}const F_=n=>!!(n&&n.__v_isRef===!0),Nu=n=>$e(n)?n:n==null?"":oe(n)||Me(n)&&(n.toString===O_||!le(n.toString))?F_(n)?Nu(n.value):JSON.stringify(n,U_,2):String(n),U_=(n,e)=>F_(e)?U_(n,e.value):pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],r)=>(t[Gl(s,r)+" =>"]=i,t),{})}:k_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Gl(t))}:ps(e)?Gl(e):Me(e)&&!oe(e)&&!x_(e)?String(e):e,Gl=(n,e="")=>{var t;return ps(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class GE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tt;try{return Tt=this,e()}finally{Tt=t}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function B_(){return Tt}function QE(n,e=!1){Tt&&Tt.cleanups.push(n)}let Ne;const Ql=new WeakSet;class $_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ql.has(this)&&(Ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||H_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zd(this),W_(this);const e=Ne,t=Yt;Ne=this,Yt=!0;try{return this.fn()}finally{q_(this),Ne=e,Yt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ou(e);this.deps=this.depsTail=void 0,zd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cc(this)&&this.run()}get dirty(){return Cc(this)}}let j_=0,vr,Er;function H_(n,e=!1){if(n.flags|=8,e){n.next=Er,Er=n;return}n.next=vr,vr=n}function ku(){j_++}function Du(){if(--j_>0)return;if(Er){let e=Er;for(Er=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;vr;){let e=vr;for(vr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function W_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function q_(n){let e,t=n.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Ou(s),YE(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}n.deps=e,n.depsTail=t}function Cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(K_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function K_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mr))return;n.globalVersion=Mr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Cc(n)){n.flags&=-3;return}const t=Ne,s=Yt;Ne=n,Yt=!0;try{W_(n);const i=n.fn(n._value);(e.version===0||Jn(i,n._value))&&(n._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ne=t,Yt=s,q_(n),n.flags&=-3}}function Ou(n,e=!1){const{dep:t,prevSub:s,nextSub:i}=n;if(s&&(s.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ou(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function YE(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Yt=!0;const z_=[];function _s(){z_.push(Yt),Yt=!1}function ms(){const n=z_.pop();Yt=n===void 0?!0:n}function zd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let Mr=0;class XE{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Yt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new XE(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,G_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=s)}return t}trigger(e){this.version++,Mr++,this.notify(e)}notify(e){ku();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Du()}}}function G_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)G_(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bc=new WeakMap,xs=Symbol(""),Rc=Symbol(""),Lr=Symbol("");function dt(n,e,t){if(Yt&&Ne){let s=bc.get(n);s||bc.set(n,s=new Map);let i=s.get(t);i||(s.set(t,i=new xu),i.map=s,i.key=t),i.track()}}function Nn(n,e,t,s,i,r){const o=bc.get(n);if(!o){Mr++;return}const l=c=>{c&&c.trigger()};if(ku(),e==="clear")o.forEach(l);else{const c=oe(n),u=c&&Su(t);if(c&&t==="length"){const d=Number(s);o.forEach((p,_)=>{(_==="length"||_===Lr||!ps(_)&&_>=d)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),u&&l(o.get(Lr)),e){case"add":c?u&&l(o.get("length")):(l(o.get(xs)),pi(n)&&l(o.get(Rc)));break;case"delete":c||(l(o.get(xs)),pi(n)&&l(o.get(Rc)));break;case"set":pi(n)&&l(o.get(xs));break}}Du()}function ni(n){const e=Ie(n);return e===n?e:(dt(e,"iterate",Lr),$t(n)?e:e.map(ft))}function Ya(n){return dt(n=Ie(n),"iterate",Lr),n}const JE={__proto__:null,[Symbol.iterator](){return Yl(this,Symbol.iterator,ft)},concat(...n){return ni(this).concat(...n.map(e=>oe(e)?ni(e):e))},entries(){return Yl(this,"entries",n=>(n[1]=ft(n[1]),n))},every(n,e){return bn(this,"every",n,e,void 0,arguments)},filter(n,e){return bn(this,"filter",n,e,t=>t.map(ft),arguments)},find(n,e){return bn(this,"find",n,e,ft,arguments)},findIndex(n,e){return bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return bn(this,"findLast",n,e,ft,arguments)},findLastIndex(n,e){return bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Xl(this,"includes",n)},indexOf(...n){return Xl(this,"indexOf",n)},join(n){return ni(this).join(n)},lastIndexOf(...n){return Xl(this,"lastIndexOf",n)},map(n,e){return bn(this,"map",n,e,void 0,arguments)},pop(){return rr(this,"pop")},push(...n){return rr(this,"push",n)},reduce(n,...e){return Gd(this,"reduce",n,e)},reduceRight(n,...e){return Gd(this,"reduceRight",n,e)},shift(){return rr(this,"shift")},some(n,e){return bn(this,"some",n,e,void 0,arguments)},splice(...n){return rr(this,"splice",n)},toReversed(){return ni(this).toReversed()},toSorted(n){return ni(this).toSorted(n)},toSpliced(...n){return ni(this).toSpliced(...n)},unshift(...n){return rr(this,"unshift",n)},values(){return Yl(this,"values",ft)}};function Yl(n,e,t){const s=Ya(n),i=s[e]();return s!==n&&!$t(n)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=t(r.value)),r}),i}const ZE=Array.prototype;function bn(n,e,t,s,i,r){const o=Ya(n),l=o!==n&&!$t(n),c=o[e];if(c!==ZE[e]){const p=c.apply(n,r);return l?ft(p):p}let u=t;o!==n&&(l?u=function(p,_){return t.call(this,ft(p),_,n)}:t.length>2&&(u=function(p,_){return t.call(this,p,_,n)}));const d=c.call(o,u,s);return l&&i?i(d):d}function Gd(n,e,t,s){const i=Ya(n);let r=t;return i!==n&&($t(n)?t.length>3&&(r=function(o,l,c){return t.call(this,o,l,c,n)}):r=function(o,l,c){return t.call(this,o,ft(l),c,n)}),i[e](r,...s)}function Xl(n,e,t){const s=Ie(n);dt(s,"iterate",Lr);const i=s[e](...t);return(i===-1||i===!1)&&Fu(t[0])?(t[0]=Ie(t[0]),s[e](...t)):i}function rr(n,e,t=[]){_s(),ku();const s=Ie(n)[e].apply(n,t);return Du(),ms(),s}const eT=Cu("__proto__,__v_isRef,__isVue"),Q_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ps));function tT(n){ps(n)||(n=String(n));const e=Ie(this);return dt(e,"has",n),e.hasOwnProperty(n)}class Y_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?hT:em:r?Z_:J_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=oe(e);if(!i){let c;if(o&&(c=JE[t]))return c;if(t==="hasOwnProperty")return tT}const l=Reflect.get(e,t,it(e)?e:s);return(ps(t)?Q_.has(t):eT(t))||(i||dt(e,"get",t),r)?l:it(l)?o&&Su(t)?l:l.value:Me(l)?i?tm(l):Mu(l):l}}class X_ extends Y_{constructor(e=!1){super(!1,e)}set(e,t,s,i){let r=e[t];if(!this._isShallow){const c=Ls(r);if(!$t(s)&&!Ls(s)&&(r=Ie(r),s=Ie(s)),!oe(e)&&it(r)&&!it(s))return c?!1:(r.value=s,!0)}const o=oe(e)&&Su(t)?Number(t)<e.length:we(e,t),l=Reflect.set(e,t,s,it(e)?e:i);return e===Ie(i)&&(o?Jn(s,r)&&Nn(e,"set",t,s):Nn(e,"add",t,s)),l}deleteProperty(e,t){const s=we(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Nn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!ps(t)||!Q_.has(t))&&dt(e,"has",t),s}ownKeys(e){return dt(e,"iterate",oe(e)?"length":xs),Reflect.ownKeys(e)}}class nT extends Y_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sT=new X_,iT=new nT,rT=new X_(!0);const Sc=n=>n,Oo=n=>Reflect.getPrototypeOf(n);function oT(n,e,t){return function(...s){const i=this.__v_raw,r=Ie(i),o=pi(r),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...s),d=t?Sc:e?Pc:ft;return!e&&dt(r,"iterate",c?Rc:xs),{next(){const{value:p,done:_}=u.next();return _?{value:p,done:_}:{value:l?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function xo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function aT(n,e){const t={get(i){const r=this.__v_raw,o=Ie(r),l=Ie(i);n||(Jn(i,l)&&dt(o,"get",i),dt(o,"get",l));const{has:c}=Oo(o),u=e?Sc:n?Pc:ft;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!n&&dt(Ie(i),"iterate",xs),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Ie(r),l=Ie(i);return n||(Jn(i,l)&&dt(o,"has",i),dt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Ie(l),u=e?Sc:n?Pc:ft;return!n&&dt(c,"iterate",xs),l.forEach((d,p)=>i.call(r,u(d),u(p),o))}};return yt(t,n?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(i){!e&&!$t(i)&&!Ls(i)&&(i=Ie(i));const r=Ie(this);return Oo(r).has.call(r,i)||(r.add(i),Nn(r,"add",i,i)),this},set(i,r){!e&&!$t(r)&&!Ls(r)&&(r=Ie(r));const o=Ie(this),{has:l,get:c}=Oo(o);let u=l.call(o,i);u||(i=Ie(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,r),u?Jn(r,d)&&Nn(o,"set",i,r):Nn(o,"add",i,r),this},delete(i){const r=Ie(this),{has:o,get:l}=Oo(r);let c=o.call(r,i);c||(i=Ie(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&Nn(r,"delete",i,void 0),u},clear(){const i=Ie(this),r=i.size!==0,o=i.clear();return r&&Nn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oT(i,n,e)}),t}function Vu(n,e){const t=aT(n,e);return(s,i,r)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?s:Reflect.get(we(t,i)&&i in s?t:s,i,r)}const lT={get:Vu(!1,!1)},cT={get:Vu(!1,!0)},uT={get:Vu(!0,!1)};const J_=new WeakMap,Z_=new WeakMap,em=new WeakMap,hT=new WeakMap;function dT(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fT(n){return n.__v_skip||!Object.isExtensible(n)?0:dT(UE(n))}function Mu(n){return Ls(n)?n:Lu(n,!1,sT,lT,J_)}function pT(n){return Lu(n,!1,rT,cT,Z_)}function tm(n){return Lu(n,!0,iT,uT,em)}function Lu(n,e,t,s,i){if(!Me(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=i.get(n);if(r)return r;const o=fT(n);if(o===0)return n;const l=new Proxy(n,o===2?s:t);return i.set(n,l),l}function _i(n){return Ls(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function Ls(n){return!!(n&&n.__v_isReadonly)}function $t(n){return!!(n&&n.__v_isShallow)}function Fu(n){return n?!!n.__v_raw:!1}function Ie(n){const e=n&&n.__v_raw;return e?Ie(e):n}function _T(n){return!we(n,"__v_skip")&&Object.isExtensible(n)&&M_(n,"__v_skip",!0),n}const ft=n=>Me(n)?Mu(n):n,Pc=n=>Me(n)?tm(n):n;function it(n){return n?n.__v_isRef===!0:!1}function Kt(n){return nm(n,!1)}function mT(n){return nm(n,!0)}function nm(n,e){return it(n)?n:new gT(n,e)}class gT{constructor(e,t){this.dep=new xu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ie(e),this._value=t?e:ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||$t(e)||Ls(e);e=s?e:Ie(e),Jn(e,t)&&(this._rawValue=e,this._value=s?e:ft(e),this.dep.trigger())}}function zn(n){return it(n)?n.value:n}function Sn(n){return le(n)?n():zn(n)}const yT={get:(n,e,t)=>e==="__v_raw"?n:zn(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const i=n[e];return it(i)&&!it(t)?(i.value=t,!0):Reflect.set(n,e,t,s)}};function sm(n){return _i(n)?n:new Proxy(n,yT)}class vT{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new xu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return H_(this,!0),!0}get value(){const e=this.dep.track();return K_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ET(n,e,t=!1){let s,i;return le(n)?s=n:(s=n.get,i=n.set),new vT(s,i,t)}const Vo={},oa=new WeakMap;let Ss;function TT(n,e=!1,t=Ss){if(t){let s=oa.get(t);s||oa.set(t,s=[]),s.push(n)}}function IT(n,e,t=Pe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=t,u=M=>i?M:$t(M)||i===!1||i===0?kn(M,1):kn(M);let d,p,_,y,I=!1,P=!1;if(it(n)?(p=()=>n.value,I=$t(n)):_i(n)?(p=()=>u(n),I=!0):oe(n)?(P=!0,I=n.some(M=>_i(M)||$t(M)),p=()=>n.map(M=>{if(it(M))return M.value;if(_i(M))return u(M);if(le(M))return c?c(M,2):M()})):le(n)?e?p=c?()=>c(n,2):n:p=()=>{if(_){_s();try{_()}finally{ms()}}const M=Ss;Ss=d;try{return c?c(n,3,[y]):n(y)}finally{Ss=M}}:p=dn,e&&i){const M=p,ie=i===!0?1/0:i;p=()=>kn(M(),ie)}const N=B_(),$=()=>{d.stop(),N&&N.active&&Ru(N.effects,d)};if(r&&e){const M=e;e=(...ie)=>{M(...ie),$()}}let z=P?new Array(n.length).fill(Vo):Vo;const B=M=>{if(!(!(d.flags&1)||!d.dirty&&!M))if(e){const ie=d.run();if(i||I||(P?ie.some((ae,w)=>Jn(ae,z[w])):Jn(ie,z))){_&&_();const ae=Ss;Ss=d;try{const w=[ie,z===Vo?void 0:P&&z[0]===Vo?[]:z,y];c?c(e,3,w):e(...w),z=ie}finally{Ss=ae}}}else d.run()};return l&&l(B),d=new $_(p),d.scheduler=o?()=>o(B,!1):B,y=M=>TT(M,!1,d),_=d.onStop=()=>{const M=oa.get(d);if(M){if(c)c(M,4);else for(const ie of M)ie();oa.delete(d)}},e?s?B(!0):z=d.run():o?o(B.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function kn(n,e=1/0,t){if(e<=0||!Me(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,it(n))kn(n.value,e,t);else if(oe(n))for(let s=0;s<n.length;s++)kn(n[s],e,t);else if(k_(n)||pi(n))n.forEach(s=>{kn(s,e,t)});else if(x_(n)){for(const s in n)kn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&kn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,e,t,s){try{return s?n(...s):n()}catch(i){Xa(i,e,t)}}function mn(n,e,t,s){if(le(n)){const i=Zr(n,e,t,s);return i&&D_(i)&&i.catch(r=>{Xa(r,e,t)}),i}if(oe(n)){const i=[];for(let r=0;r<n.length;r++)i.push(mn(n[r],e,t,s));return i}}function Xa(n,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,u)===!1)return}l=l.parent}if(r){_s(),Zr(r,null,10,[n,c,u]),ms();return}}wT(n,t,i,s,o)}function wT(n,e,t,s=!0,i=!1){if(i)throw n;console.error(n)}const It=[];let an=-1;const mi=[];let Gn=null,ii=0;const im=Promise.resolve();let aa=null;function AT(n){const e=aa||im;return n?e.then(this?n.bind(this):n):e}function CT(n){let e=an+1,t=It.length;for(;e<t;){const s=e+t>>>1,i=It[s],r=Fr(i);r<n||r===n&&i.flags&2?e=s+1:t=s}return e}function Uu(n){if(!(n.flags&1)){const e=Fr(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=Fr(t)?It.push(n):It.splice(CT(e),0,n),n.flags|=1,rm()}}function rm(){aa||(aa=im.then(am))}function bT(n){oe(n)?mi.push(...n):Gn&&n.id===-1?Gn.splice(ii+1,0,n):n.flags&1||(mi.push(n),n.flags|=1),rm()}function Qd(n,e,t=an+1){for(;t<It.length;t++){const s=It[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;It.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function om(n){if(mi.length){const e=[...new Set(mi)].sort((t,s)=>Fr(t)-Fr(s));if(mi.length=0,Gn){Gn.push(...e);return}for(Gn=e,ii=0;ii<Gn.length;ii++){const t=Gn[ii];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gn=null,ii=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function am(n){try{for(an=0;an<It.length;an++){const e=It[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<It.length;an++){const e=It[an];e&&(e.flags&=-2)}an=-1,It.length=0,om(),aa=null,(It.length||mi.length)&&am()}}let Dt=null,lm=null;function la(n){const e=Dt;return Dt=n,lm=n&&n.type.__scopeId||null,e}function RT(n,e=Dt,t){if(!e||n._n)return n;const s=(...i)=>{s._d&&rf(-1);const r=la(e);let o;try{o=n(...i)}finally{la(r),s._d&&rf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zo(n,e){if(Dt===null)return n;const t=nl(Dt),s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Pe]=e[i];r&&(le(r)&&(r={mounted:r,updated:r}),r.deep&&kn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function bs(n,e,t,s){const i=n.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(_s(),mn(c,t,8,[n.el,l,n,e]),ms())}}const ST=Symbol("_vte"),PT=n=>n.__isTeleport;function Bu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ja(n,e){return le(n)?yt({name:n.name},e,{setup:n}):n}function cm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ca(n,e,t,s,i=!1){if(oe(n)){n.forEach((I,P)=>ca(I,e&&(oe(e)?e[P]:e),t,s,i));return}if(Tr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ca(n,e,t,s.component.subTree);return}const r=s.shapeFlag&4?nl(s.component):s.el,o=i?null:r,{i:l,r:c}=n,u=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,_=Ie(p),y=p===Pe?()=>!1:I=>we(_,I);if(u!=null&&u!==c&&($e(u)?(d[u]=null,y(u)&&(p[u]=null)):it(u)&&(u.value=null)),le(c))Zr(c,l,12,[o,d]);else{const I=$e(c),P=it(c);if(I||P){const N=()=>{if(n.f){const $=I?y(c)?p[c]:d[c]:c.value;i?oe($)&&Ru($,r):oe($)?$.includes(r)||$.push(r):I?(d[c]=[r],y(c)&&(p[c]=d[c])):(c.value=[r],n.k&&(d[n.k]=c.value))}else I?(d[c]=o,y(c)&&(p[c]=o)):P&&(c.value=o,n.k&&(d[n.k]=o))};o?(N.id=-1,kt(N,t)):N()}}}Qa().requestIdleCallback;Qa().cancelIdleCallback;const Tr=n=>!!n.type.__asyncLoader,um=n=>n.type.__isKeepAlive;function NT(n,e){hm(n,"a",e)}function kT(n,e){hm(n,"da",e)}function hm(n,e,t=mt){const s=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Za(e,s,t),t){let i=t.parent;for(;i&&i.parent;)um(i.parent.vnode)&&DT(s,e,t,i),i=i.parent}}function DT(n,e,t,s){const i=Za(e,n,s,!0);dm(()=>{Ru(s[e],i)},t)}function Za(n,e,t=mt,s=!1){if(t){const i=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{_s();const l=eo(t),c=mn(e,t,n,o);return l(),ms(),c});return s?i.unshift(r):i.push(r),r}}const Fn=n=>(e,t=mt)=>{(!$r||n==="sp")&&Za(n,(...s)=>e(...s),t)},OT=Fn("bm"),xT=Fn("m"),VT=Fn("bu"),MT=Fn("u"),LT=Fn("bum"),dm=Fn("um"),fm=Fn("sp"),FT=Fn("rtg"),UT=Fn("rtc");function BT(n,e=mt){Za("ec",n,e)}const $T=Symbol.for("v-ndc");function jT(n,e,t,s){let i;const r=t,o=oe(n);if(o||$e(n)){const l=o&&_i(n);let c=!1;l&&(c=!$t(n),n=Ya(n)),i=new Array(n.length);for(let u=0,d=n.length;u<d;u++)i[u]=e(c?ft(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){i=new Array(n);for(let l=0;l<n;l++)i[l]=e(l+1,l,void 0,r)}else if(Me(n))if(n[Symbol.iterator])i=Array.from(n,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(n);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(n[d],d,c,r)}}else i=[];return i}const Nc=n=>n?Mm(n)?nl(n):Nc(n.parent):null,Ir=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nc(n.parent),$root:n=>Nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_m(n),$forceUpdate:n=>n.f||(n.f=()=>{Uu(n.update)}),$nextTick:n=>n.n||(n.n=AT.bind(n.proxy)),$watch:n=>hI.bind(n)}),Jl=(n,e)=>n!==Pe&&!n.__isScriptSetup&&we(n,e),HT={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=n;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(Jl(s,e))return o[e]=1,s[e];if(i!==Pe&&we(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&we(u,e))return o[e]=3,r[e];if(t!==Pe&&we(t,e))return o[e]=4,t[e];kc&&(o[e]=0)}}const d=Ir[e];let p,_;if(d)return e==="$attrs"&&dt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Pe&&we(t,e))return o[e]=4,t[e];if(_=c.config.globalProperties,we(_,e))return _[e]},set({_:n},e,t){const{data:s,setupState:i,ctx:r}=n;return Jl(i,e)?(i[e]=t,!0):s!==Pe&&we(s,e)?(s[e]=t,!0):we(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!t[o]||n!==Pe&&we(n,o)||Jl(e,o)||(l=r[0])&&we(l,o)||we(s,o)||we(Ir,o)||we(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:we(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yd(n){return oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let kc=!0;function WT(n){const e=_m(n),t=n.proxy,s=n.ctx;kc=!1,e.beforeCreate&&Xd(e.beforeCreate,n,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:_,beforeUpdate:y,updated:I,activated:P,deactivated:N,beforeDestroy:$,beforeUnmount:z,destroyed:B,unmounted:M,render:ie,renderTracked:ae,renderTriggered:w,errorCaptured:g,serverPrefetch:v,expose:A,inheritAttrs:b,components:S,directives:T,filters:Pt}=e;if(u&&qT(u,s,null),o)for(const be in o){const ve=o[be];le(ve)&&(s[be]=ve.bind(t))}if(i){const be=i.call(t,t);Me(be)&&(n.data=Mu(be))}if(kc=!0,r)for(const be in r){const ve=r[be],Ht=le(ve)?ve.bind(t,t):le(ve.get)?ve.get.bind(t,t):dn,vs=!le(ve)&&le(ve.set)?ve.set.bind(t):dn,In=DI({get:Ht,set:vs});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>In.value,set:He=>In.value=He})}if(l)for(const be in l)pm(l[be],s,t,be);if(c){const be=le(c)?c.call(t):c;Reflect.ownKeys(be).forEach(ve=>{XT(ve,be[ve])})}d&&Xd(d,n,"c");function Je(be,ve){oe(ve)?ve.forEach(Ht=>be(Ht.bind(t))):ve&&be(ve.bind(t))}if(Je(OT,p),Je(xT,_),Je(VT,y),Je(MT,I),Je(NT,P),Je(kT,N),Je(BT,g),Je(UT,ae),Je(FT,w),Je(LT,z),Je(dm,M),Je(fm,v),oe(A))if(A.length){const be=n.exposed||(n.exposed={});A.forEach(ve=>{Object.defineProperty(be,ve,{get:()=>t[ve],set:Ht=>t[ve]=Ht})})}else n.exposed||(n.exposed={});ie&&n.render===dn&&(n.render=ie),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),T&&(n.directives=T),v&&cm(n)}function qT(n,e,t=dn){oe(n)&&(n=Dc(n));for(const s in n){const i=n[s];let r;Me(i)?"default"in i?r=yi(i.from||s,i.default,!0):r=yi(i.from||s):r=yi(i),it(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Xd(n,e,t){mn(oe(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function pm(n,e,t,s){let i=s.includes(".")?Sm(t,s):()=>t[s];if($e(n)){const r=e[n];le(r)&&wr(i,r)}else if(le(n))wr(i,n.bind(t));else if(Me(n))if(oe(n))n.forEach(r=>pm(r,e,t,s));else{const r=le(n.handler)?n.handler.bind(t):e[n.handler];le(r)&&wr(i,r,n)}}function _m(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!t&&!s?c=e:(c={},i.length&&i.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),Me(e)&&r.set(e,c),c}function ua(n,e,t,s=!1){const{mixins:i,extends:r}=e;r&&ua(n,r,t,!0),i&&i.forEach(o=>ua(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const l=KT[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const KT={data:Jd,props:Zd,emits:Zd,methods:dr,computed:dr,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:dr,directives:dr,watch:GT,provide:Jd,inject:zT};function Jd(n,e){return e?n?function(){return yt(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function zT(n,e){return dr(Dc(n),Dc(e))}function Dc(n){if(oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Et(n,e){return n?[...new Set([].concat(n,e))]:e}function dr(n,e){return n?yt(Object.create(null),n,e):e}function Zd(n,e){return n?oe(n)&&oe(e)?[...new Set([...n,...e])]:yt(Object.create(null),Yd(n),Yd(e??{})):e}function GT(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const s in e)t[s]=Et(n[s],e[s]);return t}function mm(){return{app:null,config:{isNativeTag:LE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let QT=0;function YT(n,e){return function(s,i=null){le(s)||(s=yt({},s)),i!=null&&!Me(i)&&(i=null);const r=mm(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:QT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:OI,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&le(d.install)?(o.add(d),d.install(u,...p)):le(d)&&(o.add(d),d(u,...p))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,p){return p?(r.components[d]=p,u):r.components[d]},directive(d,p){return p?(r.directives[d]=p,u):r.directives[d]},mount(d,p,_){if(!c){const y=u._ceVNode||Xt(s,i);return y.appContext=r,_===!0?_="svg":_===!1&&(_=void 0),n(y,d,_),c=!0,u._container=d,d.__vue_app__=u,nl(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(mn(l,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,p){return r.provides[d]=p,u},runWithContext(d){const p=gi;gi=u;try{return d()}finally{gi=p}}};return u}}let gi=null;function XT(n,e){if(mt){let t=mt.provides;const s=mt.parent&&mt.parent.provides;s===t&&(t=mt.provides=Object.create(s)),t[n]=e}}function yi(n,e,t=!1){const s=mt||Dt;if(s||gi){const i=gi?gi._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&le(e)?e.call(s&&s.proxy):e}}const gm={},ym=()=>Object.create(gm),vm=n=>Object.getPrototypeOf(n)===gm;function JT(n,e,t,s=!1){const i={},r=ym();n.propsDefaults=Object.create(null),Em(n,e,i,r);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=s?i:pT(i):n.type.props?n.props=i:n.props=r,n.attrs=r}function ZT(n,e,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=n,l=Ie(i),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(el(n.emitsOptions,_))continue;const y=e[_];if(c)if(we(r,_))y!==r[_]&&(r[_]=y,u=!0);else{const I=rs(_);i[I]=Oc(c,l,I,y,n,!1)}else y!==r[_]&&(r[_]=y,u=!0)}}}else{Em(n,e,i,r)&&(u=!0);let d;for(const p in l)(!e||!we(e,p)&&((d=Ks(p))===p||!we(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(i[p]=Oc(c,l,p,void 0,n,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!we(e,p))&&(delete r[p],u=!0)}u&&Nn(n.attrs,"set","")}function Em(n,e,t,s){const[i,r]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(yr(c))continue;const u=e[c];let d;i&&we(i,d=rs(c))?!r||!r.includes(d)?t[d]=u:(l||(l={}))[d]=u:el(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ie(t),u=l||Pe;for(let d=0;d<r.length;d++){const p=r[d];t[p]=Oc(i,c,p,u[p],n,!we(u,p))}}return o}function Oc(n,e,t,s,i,r){const o=n[t];if(o!=null){const l=we(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const d=eo(i);s=u[t]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Ks(t))&&(s=!0))}return s}const eI=new WeakMap;function Tm(n,e,t=!1){const s=t?eI:e.propsCache,i=s.get(n);if(i)return i;const r=n.props,o={},l=[];let c=!1;if(!le(n)){const d=p=>{c=!0;const[_,y]=Tm(p,e,!0);yt(o,_),y&&l.push(...y)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!c)return Me(n)&&s.set(n,fi),fi;if(oe(r))for(let d=0;d<r.length;d++){const p=rs(r[d]);ef(p)&&(o[p]=Pe)}else if(r)for(const d in r){const p=rs(d);if(ef(p)){const _=r[d],y=o[p]=oe(_)||le(_)?{type:_}:yt({},_),I=y.type;let P=!1,N=!0;if(oe(I))for(let $=0;$<I.length;++$){const z=I[$],B=le(z)&&z.name;if(B==="Boolean"){P=!0;break}else B==="String"&&(N=!1)}else P=le(I)&&I.name==="Boolean";y[0]=P,y[1]=N,(P||we(y,"default"))&&l.push(p)}}const u=[o,l];return Me(n)&&s.set(n,u),u}function ef(n){return n[0]!=="$"&&!yr(n)}const Im=n=>n[0]==="_"||n==="$stable",$u=n=>oe(n)?n.map(cn):[cn(n)],tI=(n,e,t)=>{if(e._n)return e;const s=RT((...i)=>$u(e(...i)),t);return s._c=!1,s},wm=(n,e,t)=>{const s=n._ctx;for(const i in n){if(Im(i))continue;const r=n[i];if(le(r))e[i]=tI(i,r,s);else if(r!=null){const o=$u(r);e[i]=()=>o}}},Am=(n,e)=>{const t=$u(e);n.slots.default=()=>t},Cm=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},nI=(n,e,t)=>{const s=n.slots=ym();if(n.vnode.shapeFlag&32){const i=e._;i?(Cm(s,e,t),t&&M_(s,"_",i,!0)):wm(e,s)}else e&&Am(n,e)},sI=(n,e,t)=>{const{vnode:s,slots:i}=n;let r=!0,o=Pe;if(s.shapeFlag&32){const l=e._;l?t&&l===1?r=!1:Cm(i,e,t):(r=!e.$stable,wm(e,i)),o=e}else e&&(Am(n,e),o={default:1});if(r)for(const l in i)!Im(l)&&o[l]==null&&delete i[l]},kt=yI;function iI(n){return rI(n)}function rI(n,e){const t=Qa();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:_,setScopeId:y=dn,insertStaticContent:I}=n,P=(E,C,D,L=null,V=null,F=null,q=void 0,H=null,j=!!C.dynamicChildren)=>{if(E===C)return;E&&!or(E,C)&&(L=wn(E),He(E,V,F,!0),E=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null);const{type:U,ref:ee,shapeFlag:G}=C;switch(U){case tl:N(E,C,D,L);break;case Fs:$(E,C,D,L);break;case ec:E==null&&z(C,D,L,q);break;case qt:S(E,C,D,L,V,F,q,H,j);break;default:G&1?ie(E,C,D,L,V,F,q,H,j):G&6?T(E,C,D,L,V,F,q,H,j):(G&64||G&128)&&U.process(E,C,D,L,V,F,q,H,j,sn)}ee!=null&&V&&ca(ee,E&&E.ref,F,C||E,!C)},N=(E,C,D,L)=>{if(E==null)s(C.el=l(C.children),D,L);else{const V=C.el=E.el;C.children!==E.children&&u(V,C.children)}},$=(E,C,D,L)=>{E==null?s(C.el=c(C.children||""),D,L):C.el=E.el},z=(E,C,D,L)=>{[E.el,E.anchor]=I(E.children,C,D,L,E.el,E.anchor)},B=({el:E,anchor:C},D,L)=>{let V;for(;E&&E!==C;)V=_(E),s(E,D,L),E=V;s(C,D,L)},M=({el:E,anchor:C})=>{let D;for(;E&&E!==C;)D=_(E),i(E),E=D;i(C)},ie=(E,C,D,L,V,F,q,H,j)=>{C.type==="svg"?q="svg":C.type==="math"&&(q="mathml"),E==null?ae(C,D,L,V,F,q,H,j):v(E,C,V,F,q,H,j)},ae=(E,C,D,L,V,F,q,H)=>{let j,U;const{props:ee,shapeFlag:G,transition:X,dirs:se}=E;if(j=E.el=o(E.type,F,ee&&ee.is,ee),G&8?d(j,E.children):G&16&&g(E.children,j,null,L,V,Zl(E,F),q,H),se&&bs(E,null,L,"created"),w(j,E,E.scopeId,q,L),ee){for(const ce in ee)ce!=="value"&&!yr(ce)&&r(j,ce,null,ee[ce],F,L);"value"in ee&&r(j,"value",null,ee.value,F),(U=ee.onVnodeBeforeMount)&&rn(U,L,E)}se&&bs(E,null,L,"beforeMount");const te=oI(V,X);te&&X.beforeEnter(j),s(j,C,D),((U=ee&&ee.onVnodeMounted)||te||se)&&kt(()=>{U&&rn(U,L,E),te&&X.enter(j),se&&bs(E,null,L,"mounted")},V)},w=(E,C,D,L,V)=>{if(D&&y(E,D),L)for(let F=0;F<L.length;F++)y(E,L[F]);if(V){let F=V.subTree;if(C===F||Nm(F.type)&&(F.ssContent===C||F.ssFallback===C)){const q=V.vnode;w(E,q,q.scopeId,q.slotScopeIds,V.parent)}}},g=(E,C,D,L,V,F,q,H,j=0)=>{for(let U=j;U<E.length;U++){const ee=E[U]=H?Qn(E[U]):cn(E[U]);P(null,ee,C,D,L,V,F,q,H)}},v=(E,C,D,L,V,F,q)=>{const H=C.el=E.el;let{patchFlag:j,dynamicChildren:U,dirs:ee}=C;j|=E.patchFlag&16;const G=E.props||Pe,X=C.props||Pe;let se;if(D&&Rs(D,!1),(se=X.onVnodeBeforeUpdate)&&rn(se,D,C,E),ee&&bs(C,E,D,"beforeUpdate"),D&&Rs(D,!0),(G.innerHTML&&X.innerHTML==null||G.textContent&&X.textContent==null)&&d(H,""),U?A(E.dynamicChildren,U,H,D,L,Zl(C,V),F):q||ve(E,C,H,null,D,L,Zl(C,V),F,!1),j>0){if(j&16)b(H,G,X,D,V);else if(j&2&&G.class!==X.class&&r(H,"class",null,X.class,V),j&4&&r(H,"style",G.style,X.style,V),j&8){const te=C.dynamicProps;for(let ce=0;ce<te.length;ce++){const pe=te[ce],ot=G[pe],Ze=X[pe];(Ze!==ot||pe==="value")&&r(H,pe,ot,Ze,V,D)}}j&1&&E.children!==C.children&&d(H,C.children)}else!q&&U==null&&b(H,G,X,D,V);((se=X.onVnodeUpdated)||ee)&&kt(()=>{se&&rn(se,D,C,E),ee&&bs(C,E,D,"updated")},L)},A=(E,C,D,L,V,F,q)=>{for(let H=0;H<C.length;H++){const j=E[H],U=C[H],ee=j.el&&(j.type===qt||!or(j,U)||j.shapeFlag&70)?p(j.el):D;P(j,U,ee,null,L,V,F,q,!0)}},b=(E,C,D,L,V)=>{if(C!==D){if(C!==Pe)for(const F in C)!yr(F)&&!(F in D)&&r(E,F,C[F],null,V,L);for(const F in D){if(yr(F))continue;const q=D[F],H=C[F];q!==H&&F!=="value"&&r(E,F,H,q,V,L)}"value"in D&&r(E,"value",C.value,D.value,V)}},S=(E,C,D,L,V,F,q,H,j)=>{const U=C.el=E?E.el:l(""),ee=C.anchor=E?E.anchor:l("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:se}=C;se&&(H=H?H.concat(se):se),E==null?(s(U,D,L),s(ee,D,L),g(C.children||[],D,ee,V,F,q,H,j)):G>0&&G&64&&X&&E.dynamicChildren?(A(E.dynamicChildren,X,D,V,F,q,H),(C.key!=null||V&&C===V.subTree)&&bm(E,C,!0)):ve(E,C,D,ee,V,F,q,H,j)},T=(E,C,D,L,V,F,q,H,j)=>{C.slotScopeIds=H,E==null?C.shapeFlag&512?V.ctx.activate(C,D,L,q,j):Pt(C,D,L,V,F,q,j):$n(E,C,j)},Pt=(E,C,D,L,V,F,q)=>{const H=E.component=bI(E,L,V);if(um(E)&&(H.ctx.renderer=sn),RI(H,!1,q),H.asyncDep){if(V&&V.registerDep(H,Je,q),!E.el){const j=H.subTree=Xt(Fs);$(null,j,C,D)}}else Je(H,E,C,D,V,F,q)},$n=(E,C,D)=>{const L=C.component=E.component;if(mI(E,C,D))if(L.asyncDep&&!L.asyncResolved){be(L,C,D);return}else L.next=C,L.update();else C.el=E.el,L.vnode=C},Je=(E,C,D,L,V,F,q)=>{const H=()=>{if(E.isMounted){let{next:G,bu:X,u:se,parent:te,vnode:ce}=E;{const at=Rm(E);if(at){G&&(G.el=ce.el,be(E,G,q)),at.asyncDep.then(()=>{E.isUnmounted||H()});return}}let pe=G,ot;Rs(E,!1),G?(G.el=ce.el,be(E,G,q)):G=ce,X&&Ko(X),(ot=G.props&&G.props.onVnodeBeforeUpdate)&&rn(ot,te,G,ce),Rs(E,!0);const Ze=nf(E),Ft=E.subTree;E.subTree=Ze,P(Ft,Ze,p(Ft.el),wn(Ft),E,V,F),G.el=Ze.el,pe===null&&gI(E,Ze.el),se&&kt(se,V),(ot=G.props&&G.props.onVnodeUpdated)&&kt(()=>rn(ot,te,G,ce),V)}else{let G;const{el:X,props:se}=C,{bm:te,m:ce,parent:pe,root:ot,type:Ze}=E,Ft=Tr(C);Rs(E,!1),te&&Ko(te),!Ft&&(G=se&&se.onVnodeBeforeMount)&&rn(G,pe,C),Rs(E,!0);{ot.ce&&ot.ce._injectChildStyle(Ze);const at=E.subTree=nf(E);P(null,at,D,L,E,V,F),C.el=at.el}if(ce&&kt(ce,V),!Ft&&(G=se&&se.onVnodeMounted)){const at=C;kt(()=>rn(G,pe,at),V)}(C.shapeFlag&256||pe&&Tr(pe.vnode)&&pe.vnode.shapeFlag&256)&&E.a&&kt(E.a,V),E.isMounted=!0,C=D=L=null}};E.scope.on();const j=E.effect=new $_(H);E.scope.off();const U=E.update=j.run.bind(j),ee=E.job=j.runIfDirty.bind(j);ee.i=E,ee.id=E.uid,j.scheduler=()=>Uu(ee),Rs(E,!0),U()},be=(E,C,D)=>{C.component=E;const L=E.vnode.props;E.vnode=C,E.next=null,ZT(E,C.props,L,D),sI(E,C.children,D),_s(),Qd(E),ms()},ve=(E,C,D,L,V,F,q,H,j=!1)=>{const U=E&&E.children,ee=E?E.shapeFlag:0,G=C.children,{patchFlag:X,shapeFlag:se}=C;if(X>0){if(X&128){vs(U,G,D,L,V,F,q,H,j);return}else if(X&256){Ht(U,G,D,L,V,F,q,H,j);return}}se&8?(ee&16&&Ts(U,V,F),G!==U&&d(D,G)):ee&16?se&16?vs(U,G,D,L,V,F,q,H,j):Ts(U,V,F,!0):(ee&8&&d(D,""),se&16&&g(G,D,L,V,F,q,H,j))},Ht=(E,C,D,L,V,F,q,H,j)=>{E=E||fi,C=C||fi;const U=E.length,ee=C.length,G=Math.min(U,ee);let X;for(X=0;X<G;X++){const se=C[X]=j?Qn(C[X]):cn(C[X]);P(E[X],se,D,null,V,F,q,H,j)}U>ee?Ts(E,V,F,!0,!1,G):g(C,D,L,V,F,q,H,j,G)},vs=(E,C,D,L,V,F,q,H,j)=>{let U=0;const ee=C.length;let G=E.length-1,X=ee-1;for(;U<=G&&U<=X;){const se=E[U],te=C[U]=j?Qn(C[U]):cn(C[U]);if(or(se,te))P(se,te,D,null,V,F,q,H,j);else break;U++}for(;U<=G&&U<=X;){const se=E[G],te=C[X]=j?Qn(C[X]):cn(C[X]);if(or(se,te))P(se,te,D,null,V,F,q,H,j);else break;G--,X--}if(U>G){if(U<=X){const se=X+1,te=se<ee?C[se].el:L;for(;U<=X;)P(null,C[U]=j?Qn(C[U]):cn(C[U]),D,te,V,F,q,H,j),U++}}else if(U>X)for(;U<=G;)He(E[U],V,F,!0),U++;else{const se=U,te=U,ce=new Map;for(U=te;U<=X;U++){const et=C[U]=j?Qn(C[U]):cn(C[U]);et.key!=null&&ce.set(et.key,U)}let pe,ot=0;const Ze=X-te+1;let Ft=!1,at=0;const jn=new Array(Ze);for(U=0;U<Ze;U++)jn[U]=0;for(U=se;U<=G;U++){const et=E[U];if(ot>=Ze){He(et,V,F,!0);continue}let Ut;if(et.key!=null)Ut=ce.get(et.key);else for(pe=te;pe<=X;pe++)if(jn[pe-te]===0&&or(et,C[pe])){Ut=pe;break}Ut===void 0?He(et,V,F,!0):(jn[Ut-te]=U+1,Ut>=at?at=Ut:Ft=!0,P(et,C[Ut],D,null,V,F,q,H,j),ot++)}const Ki=Ft?aI(jn):fi;for(pe=Ki.length-1,U=Ze-1;U>=0;U--){const et=te+U,Ut=C[et],go=et+1<ee?C[et+1].el:L;jn[U]===0?P(null,Ut,D,go,V,F,q,H,j):Ft&&(pe<0||U!==Ki[pe]?In(Ut,D,go,2):pe--)}}},In=(E,C,D,L,V=null)=>{const{el:F,type:q,transition:H,children:j,shapeFlag:U}=E;if(U&6){In(E.component.subTree,C,D,L);return}if(U&128){E.suspense.move(C,D,L);return}if(U&64){q.move(E,C,D,sn);return}if(q===qt){s(F,C,D);for(let G=0;G<j.length;G++)In(j[G],C,D,L);s(E.anchor,C,D);return}if(q===ec){B(E,C,D);return}if(L!==2&&U&1&&H)if(L===0)H.beforeEnter(F),s(F,C,D),kt(()=>H.enter(F),V);else{const{leave:G,delayLeave:X,afterLeave:se}=H,te=()=>s(F,C,D),ce=()=>{G(F,()=>{te(),se&&se()})};X?X(F,te,ce):ce()}else s(F,C,D)},He=(E,C,D,L=!1,V=!1)=>{const{type:F,props:q,ref:H,children:j,dynamicChildren:U,shapeFlag:ee,patchFlag:G,dirs:X,cacheIndex:se}=E;if(G===-2&&(V=!1),H!=null&&ca(H,null,D,E,!0),se!=null&&(C.renderCache[se]=void 0),ee&256){C.ctx.deactivate(E);return}const te=ee&1&&X,ce=!Tr(E);let pe;if(ce&&(pe=q&&q.onVnodeBeforeUnmount)&&rn(pe,C,E),ee&6)Es(E.component,D,L);else{if(ee&128){E.suspense.unmount(D,L);return}te&&bs(E,null,C,"beforeUnmount"),ee&64?E.type.remove(E,C,D,sn,L):U&&!U.hasOnce&&(F!==qt||G>0&&G&64)?Ts(U,C,D,!1,!0):(F===qt&&G&384||!V&&ee&16)&&Ts(j,C,D),L&&We(E)}(ce&&(pe=q&&q.onVnodeUnmounted)||te)&&kt(()=>{pe&&rn(pe,C,E),te&&bs(E,null,C,"unmounted")},D)},We=E=>{const{type:C,el:D,anchor:L,transition:V}=E;if(C===qt){kl(D,L);return}if(C===ec){M(E);return}const F=()=>{i(D),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:q,delayLeave:H}=V,j=()=>q(D,F);H?H(E.el,F,j):j()}else F()},kl=(E,C)=>{let D;for(;E!==C;)D=_(E),i(E),E=D;i(C)},Es=(E,C,D)=>{const{bum:L,scope:V,job:F,subTree:q,um:H,m:j,a:U}=E;tf(j),tf(U),L&&Ko(L),V.stop(),F&&(F.flags|=8,He(q,E,C,D)),H&&kt(H,C),kt(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Ts=(E,C,D,L=!1,V=!1,F=0)=>{for(let q=F;q<E.length;q++)He(E[q],C,D,L,V)},wn=E=>{if(E.shapeFlag&6)return wn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const C=_(E.anchor||E.el),D=C&&C[ST];return D?_(D):C};let Wi=!1;const mo=(E,C,D)=>{E==null?C._vnode&&He(C._vnode,null,null,!0):P(C._vnode||null,E,C,null,null,null,D),C._vnode=E,Wi||(Wi=!0,Qd(),om(),Wi=!1)},sn={p:P,um:He,m:In,r:We,mt:Pt,mc:g,pc:ve,pbc:A,n:wn,o:n};return{render:mo,hydrate:void 0,createApp:YT(mo)}}function Zl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Rs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function oI(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bm(n,e,t=!1){const s=n.children,i=e.children;if(oe(s)&&oe(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Qn(i[r]),l.el=o.el),!t&&l.patchFlag!==-2&&bm(o,l)),l.type===tl&&(l.el=o.el)}}function aI(n){const e=n.slice(),t=[0];let s,i,r,o,l;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(i=t[t.length-1],n[i]<u){e[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,n[t[l]]<u?r=l+1:o=l;u<n[t[r]]&&(r>0&&(e[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Rm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rm(e)}function tf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const lI=Symbol.for("v-scx"),cI=()=>yi(lI);function uI(n,e){return ju(n,null,e)}function wr(n,e,t){return ju(n,e,t)}function ju(n,e,t=Pe){const{immediate:s,deep:i,flush:r,once:o}=t,l=yt({},t),c=e&&s||!e&&r!=="post";let u;if($r){if(r==="sync"){const y=cI();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=dn,y.resume=dn,y.pause=dn,y}}const d=mt;l.call=(y,I,P)=>mn(y,d,I,P);let p=!1;r==="post"?l.scheduler=y=>{kt(y,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(y,I)=>{I?y():Uu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const _=IT(n,e,l);return $r&&(u?u.push(_):c&&_()),_}function hI(n,e,t){const s=this.proxy,i=$e(n)?n.includes(".")?Sm(s,n):()=>s[n]:n.bind(s,s);let r;le(e)?r=e:(r=e.handler,t=e);const o=eo(this),l=ju(i,r.bind(s),t);return o(),l}function Sm(n,e){const t=e.split(".");return()=>{let s=n;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const dI=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rs(e)}Modifiers`]||n[`${Ks(e)}Modifiers`];function fI(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Pe;let i=t;const r=e.startsWith("update:"),o=r&&dI(s,e.slice(7));o&&(o.trim&&(i=t.map(d=>$e(d)?d.trim():d)),o.number&&(i=t.map(Ac)));let l,c=s[l=zl(e)]||s[l=zl(rs(e))];!c&&r&&(c=s[l=zl(Ks(e))]),c&&mn(c,n,6,i);const u=s[l+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,mn(u,n,6,i)}}function Pm(n,e,t=!1){const s=e.emitsCache,i=s.get(n);if(i!==void 0)return i;const r=n.emits;let o={},l=!1;if(!le(n)){const c=u=>{const d=Pm(u,e,!0);d&&(l=!0,yt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!l?(Me(n)&&s.set(n,null),null):(oe(r)?r.forEach(c=>o[c]=null):yt(o,r),Me(n)&&s.set(n,o),o)}function el(n,e){return!n||!Ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(n,e[0].toLowerCase()+e.slice(1))||we(n,Ks(e))||we(n,e))}function nf(n){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:_,setupState:y,ctx:I,inheritAttrs:P}=n,N=la(n);let $,z;try{if(t.shapeFlag&4){const M=i||s,ie=M;$=cn(u.call(ie,M,d,p,y,_,I)),z=l}else{const M=e;$=cn(M.length>1?M(p,{attrs:l,slots:o,emit:c}):M(p,null)),z=e.props?l:pI(l)}}catch(M){Ar.length=0,Xa(M,n,1),$=Xt(Fs)}let B=$;if(z&&P!==!1){const M=Object.keys(z),{shapeFlag:ie}=B;M.length&&ie&7&&(r&&M.some(bu)&&(z=_I(z,r)),B=Ai(B,z,!1,!0))}return t.dirs&&(B=Ai(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(t.dirs):t.dirs),t.transition&&Bu(B,t.transition),$=B,la(N),$}const pI=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ka(t))&&((e||(e={}))[t]=n[t]);return e},_I=(n,e)=>{const t={};for(const s in n)(!bu(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function mI(n,e,t){const{props:s,children:i,component:r}=n,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?sf(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(o[_]!==s[_]&&!el(u,_))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?sf(s,o,u):!0:!!o;return!1}function sf(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==n[r]&&!el(t,r))return!0}return!1}function gI({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Nm=n=>n.__isSuspense;function yI(n,e){e&&e.pendingBranch?oe(n)?e.effects.push(...n):e.effects.push(n):bT(n)}const qt=Symbol.for("v-fgt"),tl=Symbol.for("v-txt"),Fs=Symbol.for("v-cmt"),ec=Symbol.for("v-stc"),Ar=[];let Ot=null;function Vs(n=!1){Ar.push(Ot=n?null:[])}function vI(){Ar.pop(),Ot=Ar[Ar.length-1]||null}let Ur=1;function rf(n,e=!1){Ur+=n,n<0&&Ot&&e&&(Ot.hasOnce=!0)}function km(n){return n.dynamicChildren=Ur>0?Ot||fi:null,vI(),Ur>0&&Ot&&Ot.push(n),n}function Br(n,e,t,s,i,r){return km(Ae(n,e,t,s,i,r,!0))}function Dm(n,e,t,s,i){return km(Xt(n,e,t,s,i,!0))}function Om(n){return n?n.__v_isVNode===!0:!1}function or(n,e){return n.type===e.type&&n.key===e.key}const xm=({key:n})=>n??null,Go=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$e(n)||it(n)||le(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function Ae(n,e=null,t=null,s=0,i=null,r=n===qt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xm(e),ref:e&&Go(e),scopeId:lm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Dt};return l?(Hu(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=$e(t)?8:16),Ur>0&&!o&&Ot&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ot.push(c),c}const Xt=EI;function EI(n,e=null,t=null,s=0,i=null,r=!1){if((!n||n===$T)&&(n=Fs),Om(n)){const l=Ai(n,e,!0);return t&&Hu(l,t),Ur>0&&!r&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(n)]=l:Ot.push(l)),l.patchFlag=-2,l}if(kI(n)&&(n=n.__vccOpts),e){e=TI(e);let{class:l,style:c}=e;l&&!$e(l)&&(e.class=fn(l)),Me(c)&&(Fu(c)&&!oe(c)&&(c=yt({},c)),e.style=Pu(c))}const o=$e(n)?1:Nm(n)?128:PT(n)?64:Me(n)?4:le(n)?2:0;return Ae(n,e,t,s,i,o,r,!0)}function TI(n){return n?Fu(n)||vm(n)?yt({},n):n:null}function Ai(n,e,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=n,u=e?wI(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&xm(u),ref:e&&e.ref?t&&r?oe(r)?r.concat(Go(e)):[r,Go(e)]:Go(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ai(n.ssContent),ssFallback:n.ssFallback&&Ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&Bu(d,c.clone(d)),d}function Ms(n=" ",e=0){return Xt(tl,null,n,e)}function II(n="",e=!1){return e?(Vs(),Dm(Fs,null,n)):Xt(Fs,null,n)}function cn(n){return n==null||typeof n=="boolean"?Xt(Fs):oe(n)?Xt(qt,null,n.slice()):Om(n)?Qn(n):Xt(tl,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ai(n)}function Hu(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(oe(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Hu(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!vm(e)?e._ctx=Dt:i===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),s&64?(t=16,e=[Ms(e)]):t=8);n.children=e,n.shapeFlag|=t}function wI(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fn([e.class,s.class]));else if(i==="style")e.style=Pu([e.style,s.style]);else if(Ka(i)){const r=e[i],o=s[i];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rn(n,e,t,s=null){mn(n,e,7,[t,s])}const AI=mm();let CI=0;function bI(n,e,t){const s=n.type,i=(e?e.appContext:n.appContext)||AI,r={uid:CI++,vnode:n,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new GE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(s,i),emitsOptions:Pm(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fI.bind(null,r),n.ce&&n.ce(r),r}let mt=null;const Vm=()=>mt||Dt;let ha,xc;{const n=Qa(),e=(t,s)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ha=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),xc=e("__VUE_SSR_SETTERS__",t=>$r=t)}const eo=n=>{const e=mt;return ha(n),n.scope.on(),()=>{n.scope.off(),ha(e)}},of=()=>{mt&&mt.scope.off(),ha(null)};function Mm(n){return n.vnode.shapeFlag&4}let $r=!1;function RI(n,e=!1,t=!1){e&&xc(e);const{props:s,children:i}=n.vnode,r=Mm(n);JT(n,s,r,e),nI(n,i,t);const o=r?SI(n,e):void 0;return e&&xc(!1),o}function SI(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,HT);const{setup:s}=t;if(s){_s();const i=n.setupContext=s.length>1?NI(n):null,r=eo(n),o=Zr(s,n,0,[n.props,i]),l=D_(o);if(ms(),r(),(l||n.sp)&&!Tr(n)&&cm(n),l){if(o.then(of,of),e)return o.then(c=>{af(n,c)}).catch(c=>{Xa(c,n,0)});n.asyncDep=o}else af(n,o)}else Lm(n)}function af(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Me(e)&&(n.setupState=sm(e)),Lm(n)}function Lm(n,e,t){const s=n.type;n.render||(n.render=s.render||dn);{const i=eo(n);_s();try{WT(n)}finally{ms(),i()}}}const PI={get(n,e){return dt(n,"get",""),n[e]}};function NI(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,PI),slots:n.slots,emit:n.emit,expose:e}}function nl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sm(_T(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}})):n.proxy}function kI(n){return le(n)&&"__vccOpts"in n}const DI=(n,e)=>ET(n,e,$r),OI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vc;const lf=typeof window<"u"&&window.trustedTypes;if(lf)try{Vc=lf.createPolicy("vue",{createHTML:n=>n})}catch{}const Fm=Vc?n=>Vc.createHTML(n):n=>n,xI="http://www.w3.org/2000/svg",VI="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,cf=Pn&&Pn.createElement("template"),MI={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const i=e==="svg"?Pn.createElementNS(xI,n):e==="mathml"?Pn.createElementNS(VI,n):t?Pn.createElement(n,{is:t}):Pn.createElement(n);return n==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:n=>Pn.createTextNode(n),createComment:n=>Pn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{cf.innerHTML=Fm(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const l=cf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},LI=Symbol("_vtc");function FI(n,e,t){const s=n[LI];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uf=Symbol("_vod"),UI=Symbol("_vsh"),BI=Symbol(""),$I=/(^|;)\s*display\s*:/;function jI(n,e,t){const s=n.style,i=$e(t);let r=!1;if(t&&!i){if(e)if($e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Qo(s,l,"")}else for(const o in e)t[o]==null&&Qo(s,o,"");for(const o in t)o==="display"&&(r=!0),Qo(s,o,t[o])}else if(i){if(e!==t){const o=s[BI];o&&(t+=";"+o),s.cssText=t,r=$I.test(t)}}else e&&n.removeAttribute("style");uf in n&&(n[uf]=r?s.display:"",n[UI]&&(s.display="none"))}const hf=/\s*!important$/;function Qo(n,e,t){if(oe(t))t.forEach(s=>Qo(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=HI(n,e);hf.test(t)?n.setProperty(Ks(s),t.replace(hf,""),"important"):n[s]=t}}const df=["Webkit","Moz","ms"],tc={};function HI(n,e){const t=tc[e];if(t)return t;let s=rs(e);if(s!=="filter"&&s in n)return tc[e]=s;s=V_(s);for(let i=0;i<df.length;i++){const r=df[i]+s;if(r in n)return tc[e]=r}return e}const ff="http://www.w3.org/1999/xlink";function pf(n,e,t,s,i,r=zE(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ff,e.slice(6,e.length)):n.setAttributeNS(ff,e,t):t==null||r&&!L_(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ps(t)?String(t):t)}function _f(n,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Fm(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=L_(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function ri(n,e,t,s){n.addEventListener(e,t,s)}function WI(n,e,t,s){n.removeEventListener(e,t,s)}const mf=Symbol("_vei");function qI(n,e,t,s,i=null){const r=n[mf]||(n[mf]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=KI(e);if(s){const u=r[e]=QI(s,i);ri(n,l,u,c)}else o&&(WI(n,l,o,c),r[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function KI(n){let e;if(gf.test(n)){e={};let s;for(;s=n.match(gf);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ks(n.slice(2)),e]}let nc=0;const zI=Promise.resolve(),GI=()=>nc||(zI.then(()=>nc=0),nc=Date.now());function QI(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;mn(YI(s,t.value),e,5,[s])};return t.value=n,t.attached=GI(),t}function YI(n,e){if(oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const yf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,XI=(n,e,t,s,i,r)=>{const o=i==="svg";e==="class"?FI(n,s,o):e==="style"?jI(n,t,s):Ka(e)?bu(e)||qI(n,e,t,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JI(n,e,s,o))?(_f(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pf(n,e,s,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!$e(s))?_f(n,rs(e),s,r,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),pf(n,e,s,o))};function JI(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&yf(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return yf(e)&&$e(t)?!1:e in n}const vf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return oe(e)?t=>Ko(e,t):e};function ZI(n){n.target.composing=!0}function Ef(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sc=Symbol("_assign"),Yo={created(n,{modifiers:{lazy:e,trim:t,number:s}},i){n[sc]=vf(i);const r=s||i.props&&i.props.type==="number";ri(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),r&&(l=Ac(l)),n[sc](l)}),t&&ri(n,"change",()=>{n.value=n.value.trim()}),e||(ri(n,"compositionstart",ZI),ri(n,"compositionend",Ef),ri(n,"change",Ef))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:i,number:r}},o){if(n[sc]=vf(o),n.composing)return;const l=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ac(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||i&&n.value.trim()===c)||(n.value=c))}},ew=["ctrl","shift","alt","meta"],tw={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ew.some(t=>n[`${t}Key`]&&!e.includes(t))},Um=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=tw[e[o]];if(l&&l(i,e))return}return n(i,...r)})},nw=yt({patchProp:XI},MI);let Tf;function sw(){return Tf||(Tf=iI(nw))}const iw=(...n)=>{const e=sw().createApp(...n),{mount:t}=e;return e.mount=s=>{const i=ow(s);if(!i)return;const r=e._component;!le(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,rw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function rw(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ow(n){return $e(n)?document.querySelector(n):n}const aw=Ja({__name:"TodoItem",props:{item:{type:Object,required:!0}},emits:["removeItem","updateItem","showItemDialog"],setup(n,{emit:e}){const t=e,s=()=>{t("updateItem")},i=()=>{t("showItemDialog")};return(r,o)=>(Vs(),Br("div",{onClick:Um(i,["self"]),class:fn(["card card-body p-2 pl-5 mb-5",{"has-background-success-light":n.item.done}])},[Ae("div",{type:"text",class:fn({"has-text-overline has-text-success":n.item.done})},Nu(n.item.content),3),Ae("div",null,[Ae("button",{onClick:s,class:fn(["button mr-2",{"has-background-success has-text-light":n.item.done}])}," ✓ ",2)])],2))}}),Bm=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},lw=Bm(aw,[["__scopeId","data-v-9f20ec48"]]),cw=Ja({__name:"TodoList",props:{items:{type:Object,required:!0}},emits:["removeItem","updateItem","showItemDialog"],setup(n,{emit:e}){const t=e,s=r=>{t("updateItem",r)},i=r=>{t("showItemDialog",r)};return(r,o)=>(Vs(!0),Br(qt,null,jT(n.items,(l,c)=>(Vs(),Br("div",null,[(Vs(),Dm(lw,{onShowItemDialog:u=>i(l.id),onUpdateItem:u=>s(l.id),item:l,key:c},null,8,["onShowItemDialog","onUpdateItem","item"]))]))),256))}}),uw={key:0,class:"dialog"},hw={class:"dialog-content theme-light"},dw={class:"label"},fw={class:"label"},pw={class:"label"},_w=Ja({__name:"Dialog",props:{item:{type:Object,required:!0},isShown:{type:Boolean,required:!0}},emits:["closeItemDialog","removeItem","updateItem"],setup(n,{emit:e}){const t=e,s=n,i=Kt({...s.item});wr(()=>s.item,c=>{i.value={...c}},{immediate:!0});const r=()=>{t("closeItemDialog")},o=()=>{t("updateItem",i.value)},l=c=>{t("removeItem",c)};return(c,u)=>n.isShown?(Vs(),Br("div",uw,[Ae("div",hw,[Ae("div",{class:"is-align-self-flex-end"},[Ae("button",{onClick:o,class:"button is-align-self-flex-end theme-light is-success has-text-light"},"Save"),Ae("button",{onClick:r,class:"button is-align-self-flex-end is-danger has-text-light ml-2"},"Cancel")]),Ae("label",dw,[u[5]||(u[5]=Ms(" Task: ")),zo(Ae("input",{class:"input","onUpdate:modelValue":u[0]||(u[0]=d=>i.value.content=d),type:"text"},null,512),[[Yo,i.value.content]])]),Ae("label",fw,[u[6]||(u[6]=Ms(" Description: ")),zo(Ae("textarea",{class:"textarea","onUpdate:modelValue":u[1]||(u[1]=d=>i.value.description=d),rows:"8"},null,512),[[Yo,i.value.description]])]),Ae("label",pw,[u[7]||(u[7]=Ms(" Created at: ")),zo(Ae("input",{class:"input","onUpdate:modelValue":u[2]||(u[2]=d=>i.value.createdAt=d),type:"text",disabled:""},null,512),[[Yo,i.value.createdAt]])]),Ae("button",{onClick:u[3]||(u[3]=d=>i.value.done=!i.value.done),class:fn(["button mt-3 is-align-self-flex-start has-text-light",i.value.done?"is-success":"is-danger"])},Nu(n.item.done?"Checked":"Unchecked"),3),Ae("button",{onClick:u[4]||(u[4]=d=>l(n.item.id)),class:"delete-button button is-danger has-text-light"}," Delete ")])])):II("",!0)}}),mw=Bm(_w,[["__scopeId","data-v-ca99b407"]]);var If={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(n,e){if(!n)throw xi(e)},xi=function(n){return new Error("Firebase Database ("+$m.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gw=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let _=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(_=64)),s.push(t[d],t[p],t[_],t[y])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new yw;const _=r<<2|l>>4;if(s.push(_),u!==64){const y=l<<4&240|u>>2;if(s.push(y),p!==64){const I=u<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hm=function(n){const e=jm(n);return sl.encodeByteArray(e,!0)},da=function(n){return Hm(n).replace(/\./g,"")},fa=function(n){try{return sl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n){return Wm(void 0,n)}function Wm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ew(t)||(n[t]=Wm(n[t],e[t]));return n}function Ew(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=()=>Tw().__FIREBASE_DEFAULTS__,ww=()=>{if(typeof process>"u"||typeof If>"u")return;const n=If.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Aw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fa(n[1]);return e&&JSON.parse(e)},il=()=>{try{return Iw()||ww()||Aw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cw=n=>{var e,t;return(t=(e=il())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},bw=n=>{const e=Cw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qm=()=>{var n;return(n=il())===null||n===void 0?void 0:n.config},Rw=n=>{var e;return(e=il())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[da(JSON.stringify(t)),da(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function Pw(){var n;const e=(n=il())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){return $m.NODE_ADMIN===!0}function Ow(){return!Pw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zm(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="FirebaseError";class Un extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Vw,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Mw(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Un(i,l,s)}}function Mw(n,e){return n.replace(Lw,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Lw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){return JSON.parse(n)}function nt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Hr(fa(r[0])||""),t=Hr(fa(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Fw=function(n){const e=Gm(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Uw=function(n){const e=Gm(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ci(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pa(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Mc(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Af(r)&&Af(o)){if(!Mc(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Af(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const _=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,d;for(let p=0;p<80;p++){p<40?p<20?(u=l^r&(o^l),d=1518500249):(u=r^o^l,d=1859775393):p<60?(u=r&o|l&(r|o),d=2400959708):(u=r^o^l,d=3395469782);const _=(i<<5|i>>>27)+u+c+d+s[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $w(n,e){const t=new jw(n,e);return t.subscribe.bind(t)}class jw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hw(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ic(){}function Ww(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,K(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new jr;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(n){return n===Ps?void 0:n}function Gw(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const Yw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Xw=ue.INFO,Jw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Zw=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Jw[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class to{constructor(e){this.name=e,this._logLevel=Xw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const eA=(n,e)=>e.some(t=>n instanceof t);let Cf,bf;function tA(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nA(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qm=new WeakMap,Lc=new WeakMap,Ym=new WeakMap,rc=new WeakMap,Ku=new WeakMap;function sA(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Zn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qm.set(t,n)}).catch(()=>{}),Ku.set(e,n),e}function iA(n){if(Lc.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Lc.set(n,e)}let Fc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Lc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ym.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rA(n){Fc=n(Fc)}function oA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(oc(this),e,...t);return Ym.set(s,e.sort?e.sort():[e]),Zn(s)}:nA().includes(n)?function(...e){return n.apply(oc(this),e),Zn(Qm.get(this))}:function(...e){return Zn(n.apply(oc(this),e))}}function aA(n){return typeof n=="function"?oA(n):(n instanceof IDBTransaction&&iA(n),eA(n,tA())?new Proxy(n,Fc):n)}function Zn(n){if(n instanceof IDBRequest)return sA(n);if(rc.has(n))return rc.get(n);const e=aA(n);return e!==n&&(rc.set(n,e),Ku.set(e,n)),e}const oc=n=>Ku.get(n);function lA(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Zn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Zn(o.result),c.oldVersion,c.newVersion,Zn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const cA=["get","getKey","getAll","getAllKeys","count"],uA=["put","add","delete","clear"],ac=new Map;function Rf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=uA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cA.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),i&&c.done]))[0]};return ac.set(e,r),r}rA(n=>({...n,get:(e,t,s)=>Rf(e,t)||n.get(e,t,s),has:(e,t)=>!!Rf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dA(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",Sf="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new to("@firebase/app"),fA="@firebase/app-compat",pA="@firebase/analytics-compat",_A="@firebase/analytics",mA="@firebase/app-check-compat",gA="@firebase/app-check",yA="@firebase/auth",vA="@firebase/auth-compat",EA="@firebase/database",TA="@firebase/data-connect",IA="@firebase/database-compat",wA="@firebase/functions",AA="@firebase/functions-compat",CA="@firebase/installations",bA="@firebase/installations-compat",RA="@firebase/messaging",SA="@firebase/messaging-compat",PA="@firebase/performance",NA="@firebase/performance-compat",kA="@firebase/remote-config",DA="@firebase/remote-config-compat",OA="@firebase/storage",xA="@firebase/storage-compat",VA="@firebase/firestore",MA="@firebase/vertexai",LA="@firebase/firestore-compat",FA="firebase",UA="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="[DEFAULT]",BA={[Uc]:"fire-core",[fA]:"fire-core-compat",[_A]:"fire-analytics",[pA]:"fire-analytics-compat",[gA]:"fire-app-check",[mA]:"fire-app-check-compat",[yA]:"fire-auth",[vA]:"fire-auth-compat",[EA]:"fire-rtdb",[TA]:"fire-data-connect",[IA]:"fire-rtdb-compat",[wA]:"fire-fn",[AA]:"fire-fn-compat",[CA]:"fire-iid",[bA]:"fire-iid-compat",[RA]:"fire-fcm",[SA]:"fire-fcm-compat",[PA]:"fire-perf",[NA]:"fire-perf-compat",[kA]:"fire-rc",[DA]:"fire-rc-compat",[OA]:"fire-gcs",[xA]:"fire-gcs-compat",[VA]:"fire-fst",[LA]:"fire-fst-compat",[MA]:"fire-vertex","fire-js":"fire-js",[FA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map,$A=new Map,$c=new Map;function Pf(n,e){try{n.container.addComponent(e)}catch(t){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if($c.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;$c.set(e,n);for(const t of _a.values())Pf(t,n);for(const t of $A.values())Pf(t,n);return!0}function jA(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new Vi("app","Firebase",HA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=UA;function Xm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw es.create("bad-app-name",{appName:String(i)});if(t||(t=qm()),!t)throw es.create("no-options");const r=_a.get(i);if(r){if(Mc(t,r.options)&&Mc(s,r.config))return r;throw es.create("duplicate-app",{appName:i})}const o=new Qw(i);for(const c of $c.values())o.addComponent(c);const l=new WA(t,s,o);return _a.set(i,l),l}function Jm(n=Bc){const e=_a.get(n);if(!e&&n===Bc&&qm())return Xm();if(!e)throw es.create("no-app",{appName:n});return e}function Vt(n,e,t){var s;let i=(s=BA[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}gn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="firebase-heartbeat-database",KA=1,Wr="firebase-heartbeat-store";let lc=null;function Zm(){return lc||(lc=lA(qA,KA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wr)}catch(t){console.warn(t)}}}}).catch(n=>{throw es.create("idb-open",{originalErrorMessage:n.message})})),lc}async function zA(n){try{const t=(await Zm()).transaction(Wr),s=await t.objectStore(Wr).get(eg(n));return await t.done,s}catch(e){if(e instanceof Un)Vn.warn(e.message);else{const t=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(t.message)}}}async function Nf(n,e){try{const s=(await Zm()).transaction(Wr,"readwrite");await s.objectStore(Wr).put(e,eg(n)),await s.done}catch(t){if(t instanceof Un)Vn.warn(t.message);else{const s=es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(s.message)}}}function eg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=1024,QA=30;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JA(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>QA){const o=ZA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kf(),{heartbeatsToSend:s,unsentEntries:i}=XA(this._heartbeatsCache.heartbeats),r=da(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Vn.warn(t),""}}}function kf(){return new Date().toISOString().substring(0,10)}function XA(n,e=GA){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Df(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Df(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class JA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zm()?xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Df(n){return da(JSON.stringify({version:2,heartbeats:n})).length}function ZA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(n){gn(new tn("platform-logger",e=>new hA(e),"PRIVATE")),gn(new tn("heartbeat",e=>new YA(e),"PRIVATE")),Vt(Uc,Sf,n),Vt(Uc,Sf,"esm2017"),Vt("fire-js","")}eC("");var tC="firebase",nC="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(tC,nC,"app");var Of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,tg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(A,b,S){for(var T=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)T[Pt-2]=arguments[Pt];return g.prototype[b].apply(A,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var A=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)A[b]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(b=0;16>b;++b)A[b]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],b=w.g[2];var S=w.g[3],T=g+(S^v&(b^S))+A[0]+3614090360&4294967295;g=v+(T<<7&4294967295|T>>>25),T=S+(b^g&(v^b))+A[1]+3905402710&4294967295,S=g+(T<<12&4294967295|T>>>20),T=b+(v^S&(g^v))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(g^b&(S^g))+A[3]+3250441966&4294967295,v=b+(T<<22&4294967295|T>>>10),T=g+(S^v&(b^S))+A[4]+4118548399&4294967295,g=v+(T<<7&4294967295|T>>>25),T=S+(b^g&(v^b))+A[5]+1200080426&4294967295,S=g+(T<<12&4294967295|T>>>20),T=b+(v^S&(g^v))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(g^b&(S^g))+A[7]+4249261313&4294967295,v=b+(T<<22&4294967295|T>>>10),T=g+(S^v&(b^S))+A[8]+1770035416&4294967295,g=v+(T<<7&4294967295|T>>>25),T=S+(b^g&(v^b))+A[9]+2336552879&4294967295,S=g+(T<<12&4294967295|T>>>20),T=b+(v^S&(g^v))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(g^b&(S^g))+A[11]+2304563134&4294967295,v=b+(T<<22&4294967295|T>>>10),T=g+(S^v&(b^S))+A[12]+1804603682&4294967295,g=v+(T<<7&4294967295|T>>>25),T=S+(b^g&(v^b))+A[13]+4254626195&4294967295,S=g+(T<<12&4294967295|T>>>20),T=b+(v^S&(g^v))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(g^b&(S^g))+A[15]+1236535329&4294967295,v=b+(T<<22&4294967295|T>>>10),T=g+(b^S&(v^b))+A[1]+4129170786&4294967295,g=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(g^v))+A[6]+3225465664&4294967295,S=g+(T<<9&4294967295|T>>>23),T=b+(g^v&(S^g))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^g&(b^S))+A[0]+3921069994&4294967295,v=b+(T<<20&4294967295|T>>>12),T=g+(b^S&(v^b))+A[5]+3593408605&4294967295,g=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(g^v))+A[10]+38016083&4294967295,S=g+(T<<9&4294967295|T>>>23),T=b+(g^v&(S^g))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^g&(b^S))+A[4]+3889429448&4294967295,v=b+(T<<20&4294967295|T>>>12),T=g+(b^S&(v^b))+A[9]+568446438&4294967295,g=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(g^v))+A[14]+3275163606&4294967295,S=g+(T<<9&4294967295|T>>>23),T=b+(g^v&(S^g))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^g&(b^S))+A[8]+1163531501&4294967295,v=b+(T<<20&4294967295|T>>>12),T=g+(b^S&(v^b))+A[13]+2850285829&4294967295,g=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(g^v))+A[2]+4243563512&4294967295,S=g+(T<<9&4294967295|T>>>23),T=b+(g^v&(S^g))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^g&(b^S))+A[12]+2368359562&4294967295,v=b+(T<<20&4294967295|T>>>12),T=g+(v^b^S)+A[5]+4294588738&4294967295,g=v+(T<<4&4294967295|T>>>28),T=S+(g^v^b)+A[8]+2272392833&4294967295,S=g+(T<<11&4294967295|T>>>21),T=b+(S^g^v)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^g)+A[14]+4259657740&4294967295,v=b+(T<<23&4294967295|T>>>9),T=g+(v^b^S)+A[1]+2763975236&4294967295,g=v+(T<<4&4294967295|T>>>28),T=S+(g^v^b)+A[4]+1272893353&4294967295,S=g+(T<<11&4294967295|T>>>21),T=b+(S^g^v)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^g)+A[10]+3200236656&4294967295,v=b+(T<<23&4294967295|T>>>9),T=g+(v^b^S)+A[13]+681279174&4294967295,g=v+(T<<4&4294967295|T>>>28),T=S+(g^v^b)+A[0]+3936430074&4294967295,S=g+(T<<11&4294967295|T>>>21),T=b+(S^g^v)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^g)+A[6]+76029189&4294967295,v=b+(T<<23&4294967295|T>>>9),T=g+(v^b^S)+A[9]+3654602809&4294967295,g=v+(T<<4&4294967295|T>>>28),T=S+(g^v^b)+A[12]+3873151461&4294967295,S=g+(T<<11&4294967295|T>>>21),T=b+(S^g^v)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^g)+A[2]+3299628645&4294967295,v=b+(T<<23&4294967295|T>>>9),T=g+(b^(v|~S))+A[0]+4096336452&4294967295,g=v+(T<<6&4294967295|T>>>26),T=S+(v^(g|~b))+A[7]+1126891415&4294967295,S=g+(T<<10&4294967295|T>>>22),T=b+(g^(S|~v))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~g))+A[5]+4237533241&4294967295,v=b+(T<<21&4294967295|T>>>11),T=g+(b^(v|~S))+A[12]+1700485571&4294967295,g=v+(T<<6&4294967295|T>>>26),T=S+(v^(g|~b))+A[3]+2399980690&4294967295,S=g+(T<<10&4294967295|T>>>22),T=b+(g^(S|~v))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~g))+A[1]+2240044497&4294967295,v=b+(T<<21&4294967295|T>>>11),T=g+(b^(v|~S))+A[8]+1873313359&4294967295,g=v+(T<<6&4294967295|T>>>26),T=S+(v^(g|~b))+A[15]+4264355552&4294967295,S=g+(T<<10&4294967295|T>>>22),T=b+(g^(S|~v))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~g))+A[13]+1309151649&4294967295,v=b+(T<<21&4294967295|T>>>11),T=g+(b^(v|~S))+A[4]+4149444226&4294967295,g=v+(T<<6&4294967295|T>>>26),T=S+(v^(g|~b))+A[11]+3174756917&4294967295,S=g+(T<<10&4294967295|T>>>22),T=b+(g^(S|~v))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~g))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}s.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,A=this.B,b=this.h,S=0;S<g;){if(b==0)for(;S<=v;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<g;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){i(this,A),b=0;break}}else for(;S<g;)if(A[b++]=w[S++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=g},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var A=0;32>A;A+=8)w[v++]=this.g[g]>>>A&255;return w};function r(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==g||(v[b]=S,A=!1)}this.g=v}var l={};function c(w){return-128<=w&&128>w?r(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(u(-w));for(var g=[],v=1,A=0;w>=v;A++)g[A]=w/v|0,v*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return N(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(g,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+S),g);8>S?(S=u(Math.pow(g,S)),A=A.j(S).add(u(T))):(A=A.j(v),A=A.add(u(T)))}return A}var p=c(0),_=c(1),y=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-N(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var A=this.i(v);w+=(0<=A?A:4294967296+A)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var g=u(Math.pow(w,6)),v=this,A="";;){var b=M(v,g).g;v=$(v,b.j(g));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=b,I(v))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=$(this,w),P(w)?-1:I(w)?0:1};function N(w){for(var g=w.g.length,v=[],A=0;A<g;A++)v[A]=~w.g[A];return new o(v,~w.h).add(_)}n.abs=function(){return P(this)?N(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],A=0,b=0;b<=g;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,v[b]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(w,g){return w.add(N(g))}n.j=function(w){if(I(this)||I(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(y)&&0>w.l(y))return u(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],A=0;A<2*g;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,Pt=w.i(b)>>>16,$n=w.i(b)&65535;v[2*A+2*b]+=T*$n,z(v,2*A+2*b),v[2*A+2*b+1]+=S*$n,z(v,2*A+2*b+1),v[2*A+2*b+1]+=T*Pt,z(v,2*A+2*b+1),v[2*A+2*b+2]+=S*Pt,z(v,2*A+2*b+2)}for(A=0;A<g;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=g;A<2*g;A++)v[A]=0;return new o(v,0)};function z(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function B(w,g){this.g=w,this.h=g}function M(w,g){if(I(g))throw Error("division by zero");if(I(w))return new B(p,p);if(P(w))return g=M(N(w),g),new B(N(g.g),N(g.h));if(P(g))return g=M(w,N(g)),new B(N(g.g),g.h);if(30<w.g.length){if(P(w)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,A=g;0>=A.l(w);)v=ie(v),A=ie(A);var b=ae(v,1),S=ae(A,1);for(A=ae(A,2),v=ae(v,2);!I(A);){var T=S.add(A);0>=T.l(w)&&(b=b.add(v),S=T),A=ae(A,1),v=ae(v,1)}return g=$(w,b.j(g)),new B(b,g)}for(b=p;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=u(v),T=S.j(g);P(T)||0<T.l(w);)v-=A,S=u(v),T=S.j(g);I(S)&&(S=_),b=b.add(S),w=$(w,T)}return new B(b,w)}n.A=function(w){return M(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],A=0;A<g;A++)v[A]=this.i(A)&w.i(A);return new o(v,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],A=0;A<g;A++)v[A]=this.i(A)|w.i(A);return new o(v,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],A=0;A<g;A++)v[A]=this.i(A)^w.i(A);return new o(v,this.h^w.h)};function ie(w){for(var g=w.g.length+1,v=[],A=0;A<g;A++)v[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(v,w.h)}function ae(w,g){var v=g>>5;g%=32;for(var A=w.g.length-v,b=[],S=0;S<A;S++)b[S]=0<g?w.i(S+v)>>>g|w.i(S+v+1)<<32-g:w.i(S+v);return new o(b,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,tg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ts=o}).apply(typeof Of<"u"?Of:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ng,fr,sg,Xo,jc,ig,rg,og;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function i(a,h){if(h)e:{var f=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in f))break e;f=f[R]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var f=0,m=!1,R={next:function(){if(!m&&f<a.length){var k=f++;return{value:h(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return r(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function _(a,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function I(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,R,k){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return h.prototype[R].apply(m,W)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const R=a.length||0,k=m.length||0;a.length=R+k;for(let W=0;W<k;W++)a[R+W]=m[W]}else a.push(m)}}class ${constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function z(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var ie=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ae(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)a[f]=m[f];for(let k=0;k<v.length;k++)f=v[k],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,f){const m=$n.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var $n=new $(()=>new Je,a=>a.reset());class Je{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let be,ve=!1,Ht=new Pt,vs=()=>{const a=l.Promise.resolve(void 0);be=()=>{a.then(In)}};var In=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){S(f)}var h=$n;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var kl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Es(a,h){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{M(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ts[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Es.aa.h.call(this)}}I(Es,We);var Ts={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),Wi=0;function mo(a,h,f,m,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=R,this.key=++Wi,this.da=this.fa=!1}function sn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qi(a){this.src=a,this.g={},this.h=0}qi.prototype.add=function(a,h,f,m,R){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var W=C(a,h,m,R);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new mo(h,this.src,k,!!m,R),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var m=a.g[f],R=Array.prototype.indexOf.call(m,h,void 0),k;(k=0<=R)&&Array.prototype.splice.call(m,R,1),k&&(sn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function C(a,h,f,m){for(var R=0;R<a.length;++R){var k=a[R];if(!k.da&&k.listener==h&&k.capture==!!f&&k.ha==m)return R}return-1}var D="closure_lm_"+(1e6*Math.random()|0),L={};function V(a,h,f,m,R){if(Array.isArray(h)){for(var k=0;k<h.length;k++)V(a,h[k],f,m,R);return null}return f=se(f),a&&a[wn]?a.K(h,f,u(m)?!!m.capture:!1,R):F(a,h,f,!1,m,R)}function F(a,h,f,m,R,k){if(!h)throw Error("Invalid event type");var W=u(R)?!!R.capture:!!R,Se=G(a);if(Se||(a[D]=Se=new qi(a)),f=Se.add(h,f,m,W,k),f.proxy)return f;if(m=q(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)kl||(R=W),R===void 0&&(R=!1),a.addEventListener(h.toString(),m,R);else if(a.attachEvent)a.attachEvent(U(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return h.call(a.src,a.listener,f)}const h=ee;return a}function H(a,h,f,m,R){if(Array.isArray(h))for(var k=0;k<h.length;k++)H(a,h[k],f,m,R);else m=u(m)?!!m.capture:!!m,f=se(f),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(k=a.g[h],f=C(k,f,m,R),-1<f&&(sn(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[h],a.h--)))):a&&(a=G(a))&&(h=a.g[h.toString()],a=-1,h&&(a=C(h,f,m,R)),(f=-1<a?h[a]:null)&&j(f))}function j(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])E(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(U(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=G(h))?(E(f,a),f.h==0&&(f.src=null,h[D]=null)):sn(a)}}}function U(a){return a in L?L[a]:L[a]="on"+a}function ee(a,h){if(a.da)a=!0;else{h=new Es(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&j(a),a=f.call(m,h)}return a}function G(a){return a=a[D],a instanceof qi?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[X]||(a[X]=function(h){return a.handleEvent(h)}),a[X])}function te(){He.call(this),this.i=new qi(this),this.M=this,this.F=null}I(te,He),te.prototype[wn]=!0,te.prototype.removeEventListener=function(a,h,f,m){H(this,a,h,f,m)};function ce(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new We(h,a);else if(h instanceof We)h.target=h.target||a;else{var R=h;h=new We(m,a),A(h,R)}if(R=!0,f)for(var k=f.length-1;0<=k;k--){var W=h.g=f[k];R=pe(W,m,!0,h)&&R}if(W=h.g=a,R=pe(W,m,!0,h)&&R,R=pe(W,m,!1,h)&&R,f)for(k=0;k<f.length;k++)W=h.g=f[k],R=pe(W,m,!1,h)&&R}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)sn(f[m]);delete a.g[h],a.h--}}this.F=null},te.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},te.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function pe(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,k=0;k<h.length;++k){var W=h[k];if(W&&!W.da&&W.capture==f){var Se=W.listener,tt=W.ha||W.src;W.fa&&E(a.i,W),R=Se.call(tt,m)!==!1&&R}}return R&&!m.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ze(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,Ze(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends He{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){He.call(this),this.h=a,this.g={}}I(at,He);var jn=[];function Ki(a){ae(a.g,function(h,f){this.g.hasOwnProperty(f)&&j(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Ki(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Ut=l.JSON.parse,go=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Dl(){}Dl.prototype.h=null;function td(a){return a.h||(a.h=a.i())}function nd(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ol(){We.call(this,"d")}I(Ol,We);function xl(){We.call(this,"c")}I(xl,We);var Is={},sd=null;function yo(){return sd=sd||new te}Is.La="serverreachability";function id(a){We.call(this,Is.La,a)}I(id,We);function Gi(a){const h=yo();ce(h,new id(h))}Is.STAT_EVENT="statevent";function rd(a,h){We.call(this,Is.STAT_EVENT,a),this.stat=h}I(rd,We);function vt(a){const h=yo();ce(h,new rd(h,a))}Is.Ma="timingevent";function od(a,h){We.call(this,Is.Ma,a),this.size=h}I(od,We);function Qi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function pE(a,h,f,m,R,k){a.info(function(){if(a.g)if(k)for(var W="",Se=k.split("&"),tt=0;tt<Se.length;tt++){var Ee=Se[tt].split("=");if(1<Ee.length){var lt=Ee[0];Ee=Ee[1];var ct=lt.split("_");W=2<=ct.length&&ct[1]=="type"?W+(lt+"="+Ee+"&"):W+(lt+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+f+`
`+W})}function _E(a,h,f,m,R,k,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+f+`
`+k+" "+W})}function Js(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+gE(a,f)+(m?" "+m:"")})}function mE(a,h){a.info(function(){return"TIMEOUT: "+h})}Yi.prototype.info=function(){};function gE(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<R.length;W++)R[W]=""}}}}return et(f)}catch{return h}}var vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ad={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vl;function Eo(){}I(Eo,Dl),Eo.prototype.g=function(){return new XMLHttpRequest},Eo.prototype.i=function(){return{}},Vl=new Eo;function Hn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ld}function ld(){this.i=null,this.g="",this.h=!1}var cd={},Ml={};function Ll(a,h,f){a.L=1,a.v=Ao(An(h)),a.m=f,a.P=!0,ud(a,null)}function ud(a,h){a.F=Date.now(),To(a),a.A=An(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ad(f.i,"t",m),a.C=0,f=a.j.J,a.h=new ld,a.g=jd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ft(_(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(jn[0]=R.toString()),R=jn);for(var k=0;k<R.length;k++){var W=V(f,R[k],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Gi(),pE(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Cn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Cn(this.g);var h=this.g.Ba();const ti=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||kd(this.g)))){this.J||ct!=4||h==7||(h==8||0>=ti?Gi(3):Gi(2)),Fl(this);var f=this.g.Z();this.X=f;t:if(hd(this)){var m=kd(this.g);a="";var R=m.length,k=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Xi(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(k&&h==R-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,_E(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,tt=this.g;if((Se=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Se)){var Ee=Se;break t}}Ee=null}if(f=Ee)Js(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,f);else{this.o=!1,this.s=3,vt(12),ws(this),Xi(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<W.length;)if(Wt=yE(this,W),Wt==Ml){ct==4&&(this.s=4,vt(14),f=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==cd){this.s=4,vt(15),Js(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Js(this.i,this.l,Wt,null),Ul(this,Wt);if(hd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||W.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)Js(this.i,this.l,W,"[Invalid Chunked Response]"),ws(this),Xi(this);else if(0<W.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ql(lt),lt.M=!0,vt(11))}}else Js(this.i,this.l,W,null),Ul(this,W);ct==4&&ws(this),this.o&&!this.J&&(ct==4?Fd(this.j,this):(this.o=!1,To(this)))}else VE(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ws(this),Xi(this)}}}catch{}finally{}};function hd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yE(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Ml:(f=Number(h.substring(f,m)),isNaN(f)?cd:(m+=1,m+f>h.length?Ml:(h=h.slice(m,m+f),a.C=m+f,h)))}Hn.prototype.cancel=function(){this.J=!0,ws(this)};function To(a){a.S=Date.now()+a.I,dd(a,a.I)}function dd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(_(a.ba,a),h)}function Fl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mE(this.i,this.A),this.L!=2&&(Gi(),vt(17)),ws(this),this.s=2,Xi(this)):dd(this,this.S-a)};function Xi(a){a.j.G==0||a.J||Fd(a.j,a)}function ws(a){Fl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ki(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ul(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Bl(f.h,a))){if(!a.K&&Bl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)No(f),So(f);else break e;Wl(f),vt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Qi(_(f.Za,f),6e3));if(1>=_d(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Cs(f,11)}else if((a.K||f.g==a)&&No(f),!z(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let Ee=R[h];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const lt=Ee[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ct=Ee[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const ti=Ee[5];ti!=null&&typeof ti=="number"&&0<ti&&(m=1.5*ti,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Wt=a.g;if(Wt){const Do=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var k=m.h;k.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&($l(k,k.h),k.h=null))}if(m.D){const Kl=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Kl&&(m.ya=Kl,De(m.I,m.D,Kl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=$d(m,m.J?m.ia:null,m.W),W.K){md(m.h,W);var Se=W,tt=m.L;tt&&(Se.I=tt),Se.B&&(Fl(Se),To(Se)),m.g=W}else Md(m);0<f.i.length&&Po(f)}else Ee[0]!="stop"&&Ee[0]!="close"||Cs(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Cs(f,7):Hl(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Gi(4)}catch{}}var vE=class{constructor(a,h){this.g=a,this.map=h}};function fd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _d(a){return a.h?1:a.g?a.g.size:0}function Bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $l(a,h){a.g?a.g.add(h):a.h=h}function md(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fd.prototype.cancel=function(){if(this.i=gd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function EE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function TE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function yd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=TE(a),m=EE(a),R=m.length,k=0;k<R;k++)h.call(void 0,m[k],f&&f[k],a)}var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),R=null;if(0<=m){var k=a[f].substring(0,m);R=a[f].substring(m+1)}else k=a[f];h(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function As(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof As){this.h=a.h,Io(this,a.j),this.o=a.o,this.g=a.g,wo(this,a.s),this.l=a.l;var h=a.i,f=new er;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ed(this,f),this.m=a.m}else a&&(h=String(a).match(vd))?(this.h=!1,Io(this,h[1]||"",!0),this.o=Ji(h[2]||""),this.g=Ji(h[3]||"",!0),wo(this,h[4]),this.l=Ji(h[5]||"",!0),Ed(this,h[6]||"",!0),this.m=Ji(h[7]||"")):(this.h=!1,this.i=new er(null,this.h))}As.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Zi(h,Td,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zi(h,Td,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Zi(f,f.charAt(0)=="/"?CE:AE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Zi(f,RE)),a.join("")};function An(a){return new As(a)}function Io(a,h,f){a.j=f?Ji(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ed(a,h,f){h instanceof er?(a.i=h,SE(a.i,a.h)):(f||(h=Zi(h,bE)),a.i=new er(h,a.h))}function De(a,h,f){a.i.set(h,f)}function Ao(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,wE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Td=/[#\/\?@]/g,AE=/[#\?:]/g,CE=/[#\?]/g,bE=/[#\?@]/g,RE=/#/g;function er(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&IE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=er.prototype,n.add=function(a,h){Wn(this),this.i=null,a=Zs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Id(a,h){Wn(a),h=Zs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wd(a,h){return Wn(a),h=Zs(a,h),a.g.has(h)}n.forEach=function(a,h){Wn(this),this.g.forEach(function(f,m){f.forEach(function(R){a.call(h,R,m,this)},this)},this)},n.na=function(){Wn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const R=a[m];for(let k=0;k<R.length;k++)f.push(h[m])}return f},n.V=function(a){Wn(this);let h=[];if(typeof a=="string")wd(this,a)&&(h=h.concat(this.g.get(Zs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return Wn(this),this.i=null,a=Zs(this,a),wd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ad(a,h,f){Id(a,h),0<f.length&&(a.i=null,a.g.set(Zs(a,h),P(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const k=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var R=k;W[m]!==""&&(R+="="+encodeURIComponent(String(W[m]))),a.push(R)}}return this.i=a.join("&")};function Zs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function SE(a,h){h&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,m){var R=m.toLowerCase();m!=R&&(Id(this,m),Ad(this,R,f))},a)),a.j=h}function PE(a,h){const f=new Yi;if(l.Image){const m=new Image;m.onload=y(qn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=y(qn,f,"TestLoadImage: error",!1,h,m),m.onabort=y(qn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(qn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function NE(a,h){const f=new Yi,m=new AbortController,R=setTimeout(()=>{m.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(R),k.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function kE(){this.g=new go}function DE(a,h,f){const m=f||"";try{yd(a,function(R,k){let W=R;u(R)&&(W=et(R)),h.push(m+k+"="+encodeURIComponent(W))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function Co(a){this.l=a.Ub||null,this.j=a.eb||!1}I(Co,Dl),Co.prototype.g=function(){return new bo(this.l,this.j)},Co.prototype.i=function(a){return function(){return a}}({});function bo(a,h){te.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(bo,te),n=bo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,nr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?tr(this):nr(this),this.readyState==3&&Cd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,tr(this))},n.Qa=function(a){this.g&&(this.response=a,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,nr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function nr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bd(a){let h="";return ae(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function jl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=bd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):De(a,h,f))}function Le(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Le,te);var OE=/^https?$/i,xE=["POST","PUT"];n=Le.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vl.g(),this.v=this.o?td(this.o):td(Vl),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Rd(this,k);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xE,h,void 0))||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of f)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nd(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Rd(this,k)}};function Rd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sd(a),Ro(a)}function Sd(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),Ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pd(this):this.bb())},n.bb=function(){Pd(this)};function Pd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)ot(a.Ea,0,a);else if(ce(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=W===0){var R=String(a.D).match(vd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!OE.test(R?R.toLowerCase():"")}f=m}if(f)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var k=2<Cn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Sd(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){Nd(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ce(a,"ready");try{f.onreadystatechange=m}catch{}}}function Nd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function kd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VE(a){const h={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(z(a[m]))continue;var f=b(a[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=h[R]||[];h[R]=k,k.push(f)}w(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Dd(a){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,a),this.cb=sr("retryDelaySeedMs",1e4,a),this.Wa=sr("forwardChannelMaxRetries",2,a),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fd(a&&a.concurrentRequestLimit),this.Da=new kE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dd.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,m){vt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=$d(this,null,this.W),Po(this)};function Hl(a){if(Od(a),a.G==3){var h=a.U++,f=An(a.I);if(De(f,"SID",a.K),De(f,"RID",h),De(f,"TYPE","terminate"),ir(a,f),h=new Hn(a,a.j,h),h.L=2,h.v=Ao(An(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=jd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),To(h)}Bd(a)}function So(a){a.g&&(ql(a),a.g.cancel(),a.g=null)}function Od(a){So(a),a.u&&(l.clearTimeout(a.u),a.u=null),No(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Po(a){if(!pd(a.h)&&!a.s){a.s=!0;var h=a.Ga;be||vs(),ve||(be(),ve=!0),Ht.add(h,a),a.B=0}}function ME(a,h){return _d(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(_(a.Ga,a,h),Ud(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Hn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=g(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Vd(this,R,h),f=An(this.I),De(f,"RID",a),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),ir(this,f),k&&(this.O?h="headers="+encodeURIComponent(String(bd(k)))+"&"+h:this.m&&jl(f,this.m,k)),$l(this.h,R),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",h),De(f,"SID","null"),R.T=!0,Ll(R,f,null)):Ll(R,f,h),this.G=2}}else this.G==3&&(a?xd(this,a):this.i.length==0||pd(this.h)||xd(this))};function xd(a,h){var f;h?f=h.l:f=a.U++;const m=An(a.I);De(m,"SID",a.K),De(m,"RID",f),De(m,"AID",a.T),ir(a,m),a.m&&a.o&&jl(m,a.m,a.o),f=new Hn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$l(a.h,f),Ll(f,m,h)}function ir(a,h){a.H&&ae(a.H,function(f,m){De(h,m,f)}),a.l&&yd({},function(f,m){De(h,m,f)})}function Vd(a,h,f){f=Math.min(a.i.length,f);var m=a.l?_(a.l.Na,a.l,a):null;e:{var R=a.i;let k=-1;for(;;){const W=["count="+f];k==-1?0<f?(k=R[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let Se=!0;for(let tt=0;tt<f;tt++){let Ee=R[tt].g;const lt=R[tt].map;if(Ee-=k,0>Ee)k=Math.max(0,R[tt].g-100),Se=!1;else try{DE(lt,W,"req"+Ee+"_")}catch{m&&m(lt)}}if(Se){m=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Md(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;be||vs(),ve||(be(),ve=!0),Ht.add(h,a),a.v=0}}function Wl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(_(a.Fa,a),Ud(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Ld(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(_(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),So(this),Ld(this))};function ql(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ld(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),ir(a,h),a.m&&a.o&&jl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ao(An(h)),f.m=null,f.P=!0,ud(f,a)}n.Za=function(){this.C!=null&&(this.C=null,So(this),Wl(this),vt(19))};function No(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fd(a,h){var f=null;if(a.g==h){No(a),ql(a),a.g=null;var m=2}else if(Bl(a.h,h))f=h.D,md(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;m=yo(),ce(m,new od(m,f)),Po(a)}else Md(a);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&ME(a,h)||m==2&&Wl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:Cs(a,5);break;case 4:Cs(a,10);break;case 3:Cs(a,6);break;default:Cs(a,2)}}}function Ud(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Cs(a,h){if(a.j.info("Error code "+h),h==2){var f=_(a.fb,a),m=a.Xa;const R=!m;m=new As(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Io(m,"https"),Ao(m),R?PE(m.toString(),f):NE(m.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(h),Bd(a),Od(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Bd(a){if(a.G=0,a.ka=[],a.l){const h=gd(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function $d(a,h,f){var m=f instanceof As?An(f):new As(f);if(m.g!="")h&&(m.g=h+"."+m.g),wo(m,m.s);else{var R=l.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var k=new As(null);m&&Io(k,m),h&&(k.g=h),R&&wo(k,R),f&&(k.l=f),m=k}return f=a.D,h=a.ya,f&&h&&De(m,f,h),De(m,"VER",a.la),ir(a,m),m}function jd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new Co({eb:f})):new Le(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hd(){}n=Hd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ko(){}ko.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){te.call(this),this.g=new Dd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!z(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!z(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ei(this)}I(Nt,te),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Hl(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=et(a),a=f);h.i.push(new vE(h.Ya++,a)),h.G==3&&Po(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Hl(this.g),delete this.g,Nt.aa.N.call(this)};function Wd(a){Ol.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}I(Wd,Ol);function qd(){xl.call(this),this.status=1}I(qd,xl);function ei(a){this.g=a}I(ei,Hd),ei.prototype.ua=function(){ce(this.g,"a")},ei.prototype.ta=function(a){ce(this.g,new Wd(a))},ei.prototype.sa=function(a){ce(this.g,new qd)},ei.prototype.ra=function(){ce(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,og=function(){return new ko},rg=function(){return yo()},ig=Is,jc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,Xo=vo,ad.COMPLETE="complete",sg=ad,nd.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",te.prototype.listen=te.prototype.K,fr=nd,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,ng=Le}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const xf="@firebase/firestore",Vf="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new to("@firebase/firestore");function oi(){return Us.logLevel}function Q(n,...e){if(Us.logLevel<=ue.DEBUG){const t=e.map(zu);Us.debug(`Firestore (${Li}): ${n}`,...t)}}function Mn(n,...e){if(Us.logLevel<=ue.ERROR){const t=e.map(zu);Us.error(`Firestore (${Li}): ${n}`,...t)}}function bi(n,...e){if(Us.logLevel<=ue.WARN){const t=e.map(zu);Us.warn(`Firestore (${Li}): ${n}`,...t)}}function zu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+n;throw Mn(e),new Error(e)}function ye(n,e){n||Z()}function re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ht.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ye(typeof s.accessToken=="string"),new ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new ht(e)}}class oC{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class aC{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new oC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Dn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0);const s=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Mf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string"),this.R=t.token,new Mf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=cC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function de(n,e){return n<e?-1:n>e?1:0}function Ri(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=-62135596800,Ff=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ff);return new Be(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Lf)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ff}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Lf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Be(0,0))}static max(){return new ne(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="__name__";class ln{constructor(e,t,s){t===void 0?t=0:t>e.length&&Z(),s===void 0?s=e.length-t:s>e.length-t&&Z(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=ln.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=ln.isNumericId(e),i=ln.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?ln.extractNumericId(e).compare(ln.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class ke extends ln{construct(e,t,s){return new ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ln{construct(e,t,s){return new st(e,t,s)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uf}static keyField(){return new st([Uf])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ke.fromString(e))}static fromName(e){return new J(ke.fromString(e).popFirst(5))}static empty(){return new J(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ke(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=-1;function hC(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(s===1e9?new Be(t+1,0):new Be(t,s));return new os(i,J.empty(),e)}function dC(n){return new os(n.readTime,n.key,qr)}class os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new os(ne.min(),J.empty(),qr)}static max(){return new os(ne.max(),J.empty(),qr)}}function fC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _C{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==pC)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,s)=>{t(e)})}static reject(e){return new O((t,s)=>{s(e)})}static waitFor(e){return new O((t,s)=>{let i=0,r=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=O.resolve(!1);for(const s of e)t=t.next(i=>i?O.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new O((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===r&&s(o)},d=>i(d))}})}static doWhile(e,t){return new O((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function mC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ui(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ol.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=-1;function no(n){return n==null}function ma(n){return n===0&&1/n==-1/0}function gC(n){return typeof n=="number"&&Number.isInteger(n)&&!ma(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="";function yC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bf(e)),e=vC(n.get(t),e);return Bf(e)}function vC(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case cg:t+="";break;default:t+=r}}return t}function Bf(n){return n+cg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ug(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let je=class Hc{constructor(e,t){this.comparator=e,this.root=t||ns.EMPTY}insert(e,t){return new Hc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ns.BLACK,null,null))}remove(e){return new Hc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ns.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}},Lo=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ns=class Rn{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Rn.RED,this.left=i??Rn.EMPTY,this.right=r??Rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Rn(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Rn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};ns.EMPTY=null,ns.RED=!0,ns.BLACK=!1;ns.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,t,s,i,r){return this}insert(e,t,s){return new ns(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new xt([])}unionWith(e){let t=new Ke(st.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new hg("Invalid base64 string: "+r):r}}(e);return new rt(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(n){if(ye(!!n),typeof n=="string"){let e=0;const t=EC.exec(n);if(ye(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ls(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="server_timestamp",fg="__type__",pg="__previous_value__",_g="__local_write_time__";function Qu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fg])===null||t===void 0?void 0:t.stringValue)===dg}function al(n){const e=n.mapValue.fields[pg];return Qu(e)?al(e):e}function Kr(n){const e=as(n.mapValue.fields[_g].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,s,i,r,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const ga="(default)";class zr{constructor(e,t){this.projectId=e,this.database=t||ga}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database===ga}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="__type__",IC="__max__",Fo={mapValue:{}},gg="__vector__",ya="value";function cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qu(n)?4:AC(n)?9007199254740991:wC(n)?10:11:Z()}function yn(n,e){if(n===e)return!0;const t=cs(n);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=as(i.timestampValue),l=as(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return ls(i.bytesValue).isEqual(ls(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Fe(i.geoPointValue.latitude)===Fe(r.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Fe(i.integerValue)===Fe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Fe(i.doubleValue),l=Fe(r.doubleValue);return o===l?ma(o)===ma(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Ri(n.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if($f(o)!==$f(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!yn(o[c],l[c])))return!1;return!0}(n,e);default:return Z()}}function Gr(n,e){return(n.values||[]).find(t=>yn(t,e))!==void 0}function Si(n,e){if(n===e)return 0;const t=cs(n),s=cs(e);if(t!==s)return de(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=Fe(r.integerValue||r.doubleValue),c=Fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Hf(n.timestampValue,e.timestampValue);case 4:return Hf(Kr(n),Kr(e));case 5:return de(n.stringValue,e.stringValue);case 6:return function(r,o){const l=ls(r),c=ls(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=de(l[u],c[u]);if(d!==0)return d}return de(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=de(Fe(r.latitude),Fe(o.latitude));return l!==0?l:de(Fe(r.longitude),Fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wf(n.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,d;const p=r.fields||{},_=o.fields||{},y=(l=p[ya])===null||l===void 0?void 0:l.arrayValue,I=(c=_[ya])===null||c===void 0?void 0:c.arrayValue,P=de(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Wf(y,I)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Fo.mapValue&&o===Fo.mapValue)return 0;if(r===Fo.mapValue)return 1;if(o===Fo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=de(c[p],d[p]);if(_!==0)return _;const y=Si(l[c[p]],u[d[p]]);if(y!==0)return y}return de(c.length,d.length)}(n.mapValue,e.mapValue);default:throw Z()}}function Hf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=as(n),s=as(e),i=de(t.seconds,s.seconds);return i!==0?i:de(t.nanos,s.nanos)}function Wf(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Si(t[i],s[i]);if(r)return r}return de(t.length,s.length)}function Pi(n){return Wc(n)}function Wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=as(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ls(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Wc(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Wc(t.fields[o])}`;return i+"}"}(n.mapValue):Z()}function Jo(n){switch(cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(n);return e?16+Jo(e):16;case 5:return 2*n.stringValue.length;case 6:return ls(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+Jo(r),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return gs(s.fields,(r,o)=>{i+=r.length+Jo(o)}),i}(n.mapValue);default:throw Z()}}function qc(n){return!!n&&"integerValue"in n}function Yu(n){return!!n&&"arrayValue"in n}function qf(n){return!!n&&"nullValue"in n}function Kf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zo(n){return!!n&&"mapValue"in n}function wC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[mg])===null||t===void 0?void 0:t.stringValue)===gg}function Cr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gs(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Cr(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function AC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Zo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(t)}setAll(e){let t=st.emptyPath(),s={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=l.popLast()}o?s[l.lastSegment()]=Cr(o):i.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Zo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Zo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){gs(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new wt(Cr(this.value))}}function yg(n){const e=[];return gs(n.fields,(t,s)=>{const i=new st([t]);if(Zo(s)){const r=yg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,s,i,r,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ye(e,0,ne.min(),ne.min(),ne.min(),wt.empty(),0)}static newFoundDocument(e,t,s,i){return new Ye(e,1,t,ne.min(),s,i,0)}static newNoDocument(e,t){return new Ye(e,2,t,ne.min(),ne.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new Ye(e,3,t,ne.min(),ne.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t){this.position=e,this.inclusive=t}}function zf(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),t.key):s=Si(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t="asc"){this.field=e,this.dir=t}}function CC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{}class qe extends vg{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RC(e,t,s):t==="array-contains"?new NC(e,s):t==="in"?new kC(e,s):t==="not-in"?new DC(e,s):t==="array-contains-any"?new OC(e,s):new qe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new SC(e,s):new PC(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Si(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(Si(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends vg{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new vn(e,t)}matches(e){return Eg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Eg(n){return n.op==="and"}function Tg(n){return bC(n)&&Eg(n)}function bC(n){for(const e of n.filters)if(e instanceof vn)return!1;return!0}function Kc(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+Pi(n.value);if(Tg(n))return n.filters.map(e=>Kc(e)).join(",");{const e=n.filters.map(t=>Kc(t)).join(",");return`${n.op}(${e})`}}function Ig(n,e){return n instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&yn(s.value,i.value)}(n,e):n instanceof vn?function(s,i){return i instanceof vn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,l)=>r&&Ig(o,i.filters[l]),!0):!1}(n,e):void Z()}function wg(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${Pi(t.value)}`}(n):n instanceof vn?function(t){return t.op.toString()+" {"+t.getFilters().map(wg).join(" ,")+"}"}(n):"Filter"}class RC extends qe{constructor(e,t,s){super(e,t,s),this.key=J.fromName(s.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class SC extends qe{constructor(e,t){super(e,"in",t),this.keys=Ag("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PC extends qe{constructor(e,t){super(e,"not-in",t),this.keys=Ag("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ag(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>J.fromName(s.referenceValue))}class NC extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yu(t)&&Gr(t.arrayValue,this.value)}}class kC extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gr(this.value.arrayValue,t)}}class DC extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gr(this.value.arrayValue,t)}}class OC extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Gr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.le=null}}function Qf(n,e=null,t=[],s=[],i=null,r=null,o=null){return new xC(n,e,t,s,i,r,o)}function Xu(n){const e=re(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Kc(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),no(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Pi(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Pi(s)).join(",")),e.le=t}return e.le}function Ju(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ig(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gf(n.startAt,e.startAt)&&Gf(n.endAt,e.endAt)}function zc(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function VC(n,e,t,s,i,r,o,l){return new ll(n,e,t,s,i,r,o,l)}function cl(n){return new ll(n)}function Yf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function MC(n){return n.collectionGroup!==null}function br(n){const e=re(n);if(e.he===null){e.he=[];const t=new Set;for(const r of e.explicitOrderBy)e.he.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(st.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.he.push(new Ea(r,s))}),t.has(st.keyField().canonicalString())||e.he.push(new Ea(st.keyField(),s))}return e.he}function _n(n){const e=re(n);return e.Pe||(e.Pe=LC(e,br(n))),e.Pe}function LC(n,e){if(n.limitType==="F")return Qf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Ea(i.field,r)});const t=n.endAt?new va(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new va(n.startAt.position,n.startAt.inclusive):null;return Qf(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Gc(n,e,t){return new ll(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ul(n,e){return Ju(_n(n),_n(e))&&n.limitType===e.limitType}function Cg(n){return`${Xu(_n(n))}|lt:${n.limitType}`}function ai(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>wg(i)).join(", ")}]`),no(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>Pi(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>Pi(i)).join(",")),`Target(${s})`}(_n(n))}; limitType=${n.limitType})`}function hl(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):J.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of br(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,l,c){const u=zf(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,br(s),i)||s.endAt&&!function(o,l,c){const u=zf(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,br(s),i))}(n,e)}function FC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bg(n){return(e,t)=>{let s=!1;for(const i of br(n)){const r=UC(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function UC(n,e,t){const s=n.field.isKeyField()?J.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Si(c,u):Z()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ug(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new je(J.comparator);function Ln(){return BC}const Rg=new je(J.comparator);function pr(...n){let e=Rg;for(const t of n)e=e.insert(t.key,t);return e}function Sg(n){let e=Rg;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ks(){return Rr()}function Pg(){return Rr()}function Rr(){return new zs(n=>n.toString(),(n,e)=>n.isEqual(e))}const $C=new je(J.comparator),jC=new Ke(J.comparator);function he(...n){let e=jC;for(const t of n)e=e.add(t);return e}const HC=new Ke(de);function WC(){return HC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function Ng(n){return{integerValue:""+n}}function qC(n,e){return gC(e)?Ng(e):Zu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this._=void 0}}function KC(n,e,t){return n instanceof Ta?function(i,r){const o={fields:{[fg]:{stringValue:dg},[_g]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Qu(r)&&(r=al(r)),r&&(o.fields[pg]=r),{mapValue:o}}(t,e):n instanceof Qr?Dg(n,e):n instanceof Yr?Og(n,e):function(i,r){const o=kg(i,r),l=Xf(o)+Xf(i.Ie);return qc(o)&&qc(i.Ie)?Ng(l):Zu(i.serializer,l)}(n,e)}function zC(n,e,t){return n instanceof Qr?Dg(n,e):n instanceof Yr?Og(n,e):t}function kg(n,e){return n instanceof Ia?function(s){return qc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ta extends dl{}class Qr extends dl{constructor(e){super(),this.elements=e}}function Dg(n,e){const t=xg(e);for(const s of n.elements)t.some(i=>yn(i,s))||t.push(s);return{arrayValue:{values:t}}}class Yr extends dl{constructor(e){super(),this.elements=e}}function Og(n,e){let t=xg(e);for(const s of n.elements)t=t.filter(i=>!yn(i,s));return{arrayValue:{values:t}}}class Ia extends dl{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Xf(n){return Fe(n.integerValue||n.doubleValue)}function xg(n){return Yu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function GC(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Qr&&i instanceof Qr||s instanceof Yr&&i instanceof Yr?Ri(s.elements,i.elements,yn):s instanceof Ia&&i instanceof Ia?yn(s.Ie,i.Ie):s instanceof Ta&&i instanceof Ta}(n.transform,e.transform)}class QC{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fl{}function Vg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pl(n.key,At.none()):new so(n.key,n.data,At.none());{const t=n.data,s=wt.empty();let i=new Ke(st.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ys(n.key,s,new xt(i.toArray()),At.none())}}function YC(n,e,t){n instanceof so?function(i,r,o){const l=i.value.clone(),c=Zf(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ys?function(i,r,o){if(!ea(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=Zf(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Mg(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Sr(n,e,t,s){return n instanceof so?function(r,o,l,c){if(!ea(r.precondition,o))return l;const u=r.value.clone(),d=ep(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof ys?function(r,o,l,c){if(!ea(r.precondition,o))return l;const u=ep(r.fieldTransforms,c,o),d=o.data;return d.setAll(Mg(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(r,o,l){return ea(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function XC(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=kg(s.transform,i||null);r!=null&&(t===null&&(t=wt.empty()),t.set(s.field,r))}return t||null}function Jf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ri(s,i,(r,o)=>GC(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class so extends fl{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ys extends fl{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Zf(n,e,t){const s=new Map;ye(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,zC(o,l,t[i]))}return s}function ep(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,KC(r,o,e))}return s}class pl extends fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lg extends fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&YC(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Sr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Sr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Pg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(i.key)?null:l;const c=Vg(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(t,s)=>Jf(t,s))&&Ri(this.baseMutations,e.baseMutations,(t,s)=>Jf(t,s))}}class eh{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){ye(e.mutations.length===s.length);let i=function(){return $C}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new eh(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,_e;function Fg(n){switch(n){case x.OK:return Z();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return Z()}}function Ug(n){if(n===void 0)return Mn("GRPC error has no .code"),x.UNKNOWN;switch(n){case Ue.OK:return x.OK;case Ue.CANCELLED:return x.CANCELLED;case Ue.UNKNOWN:return x.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return x.INTERNAL;case Ue.UNAVAILABLE:return x.UNAVAILABLE;case Ue.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ue.NOT_FOUND:return x.NOT_FOUND;case Ue.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ue.ABORTED:return x.ABORTED;case Ue.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ue.DATA_LOSS:return x.DATA_LOSS;default:return Z()}}(_e=Ue||(Ue={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new ts([4294967295,4294967295],0);function tp(n){const e=tb().encode(n),t=new tg;return t.update(e),new Uint8Array(t.digest())}function np(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ts([t,s],0),new ts([i,r],0)]}class th{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new _r(`Invalid padding: ${t}`);if(s<0)throw new _r(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new _r(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ts.fromNumber(this.Ee)}Ae(e,t,s){let i=e.add(t.multiply(ts.fromNumber(s)));return i.compare(nb)===1&&(i=new ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=tp(e),[s,i]=np(t);for(let r=0;r<this.hashCount;r++){const o=this.Ae(s,i,r);if(!this.Re(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new th(r,i,t);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const t=tp(e),[s,i]=np(t);for(let r=0;r<this.hashCount;r++){const o=this.Ae(s,i,r);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new _l(ne.min(),i,new je(de),Ln(),he())}}class io{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new io(s,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,s,i){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=i}}class Bg{constructor(e,t){this.targetId=e,this.ge=t}}class $g{constructor(e,t,s=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class sp{constructor(){this.pe=0,this.ye=ip(),this.we=rt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=he(),t=he(),s=he();return this.ye.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:Z()}}),new io(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=ip()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class sb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ln(),this.$e=Uo(),this.Ke=Uo(),this.Ue=new je(de)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,s=e.ge.count,i=this.Xe(t);if(i){const r=i.target;if(zc(r))if(s===0){const o=new J(r.path);this.ze(t,o,Ye.newNoDocument(o,ne.min()))}else ye(s===1);else{const o=this.et(t);if(o!==s){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,l;try{o=ls(s).toUint8Array()}catch(c){if(c instanceof hg)return bi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new th(o,i,r)}catch(c){return bi(c instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,r,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((r,o)=>{const l=this.Xe(o);if(l){if(r.current&&zc(l.target)){const c=new J(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Ye.newNoDocument(c,e))}r.ve&&(t.set(o,r.Fe()),r.Me())}});let s=he();this.Ke.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.Qe.forEach((r,o)=>o.setReadTime(e));const i=new _l(e,t,this.Ue,this.Qe,s);return this.Qe=Ln(),this.$e=Uo(),this.Ke=Uo(),this.Ue=new je(de),i}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new sp,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ke(de),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ke(de),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new sp),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Uo(){return new je(J.comparator)}function ip(){return new je(J.comparator)}const ib={asc:"ASCENDING",desc:"DESCENDING"},rb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ob={and:"AND",or:"OR"};class ab{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qc(n,e){return n.useProto3Json||no(e)?e:{value:e}}function wa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lb(n,e){return wa(n,e.toTimestamp())}function Mt(n){return ye(!!n),ne.fromTimestamp(function(t){const s=as(t);return new Be(s.seconds,s.nanos)}(n))}function nh(n,e){return Yc(n,e).canonicalString()}function Yc(n,e){const t=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hg(n){const e=ke.fromString(n);return ye(Qg(e)),e}function Aa(n,e){return nh(n.databaseId,e.path)}function Pr(n,e){const t=Hg(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(qg(t))}function Wg(n,e){return nh(n.databaseId,e)}function cb(n){const e=Hg(n);return e.length===4?ke.emptyPath():qg(e)}function Xc(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qg(n){return ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rp(n,e,t){return{name:Aa(n,e),fields:t.value.mapValue.fields}}function ub(n,e){return"found"in e?function(s,i){ye(!!i.found),i.found.name,i.found.updateTime;const r=Pr(s,i.found.name),o=Mt(i.found.updateTime),l=i.found.createTime?Mt(i.found.createTime):ne.min(),c=new wt({mapValue:{fields:i.found.fields}});return Ye.newFoundDocument(r,o,l,c)}(n,e):"missing"in e?function(s,i){ye(!!i.missing),ye(!!i.readTime);const r=Pr(s,i.missing),o=Mt(i.readTime);return Ye.newNoDocument(r,o)}(n,e):Z()}function hb(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,d){return u.useProto3Json?(ye(d===void 0||typeof d=="string"),rt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),rt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?x.UNKNOWN:Ug(u.code);return new Y(d,u.message||"")}(o);t=new $g(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Pr(n,s.document.name),r=Mt(s.document.updateTime),o=s.document.createTime?Mt(s.document.createTime):ne.min(),l=new wt({mapValue:{fields:s.document.fields}}),c=Ye.newFoundDocument(i,r,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];t=new ta(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Pr(n,s.document),r=s.readTime?Mt(s.readTime):ne.min(),o=Ye.newNoDocument(i,r),l=s.removedTargetIds||[];t=new ta([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Pr(n,s.document),r=s.removedTargetIds||[];t=new ta([],r,i,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new eb(i,r),l=s.targetId;t=new Bg(l,o)}}return t}function Kg(n,e){let t;if(e instanceof so)t={update:rp(n,e.key,e.value)};else if(e instanceof pl)t={delete:Aa(n,e.key)};else if(e instanceof ys)t={update:rp(n,e.key,e.data),updateMask:Eb(e.fieldMask)};else{if(!(e instanceof Lg))return Z();t={verify:Aa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const l=o.transform;if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw Z()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:lb(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(n,e.precondition)),t}function db(n,e){return n&&n.length>0?(ye(e!==void 0),n.map(t=>function(i,r){let o=i.updateTime?Mt(i.updateTime):Mt(r);return o.isEqual(ne.min())&&(o=Mt(r)),new QC(o,i.transformResults||[])}(t,e))):[]}function fb(n,e){return{documents:[Wg(n,e.path)]}}function pb(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Wg(n,i);const r=function(u){if(u.length!==0)return Gg(vn.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(d=>function(_){return{field:li(_.field),direction:gb(_.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Qc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:i}}function _b(n){let e=cb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){ye(s===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];t.where&&(r=function(p){const _=zg(p);return _ instanceof vn&&Tg(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(I){return new Ea(ci(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,no(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,y=p.values||[];return new va(y,_)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const _=!p.before,y=p.values||[];return new va(y,_)}(t.endAt)),VC(e,i,o,r,l,"F",c,u)}function mb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ci(t.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(t.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ci(t.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(t.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(n):n.fieldFilter!==void 0?function(t){return qe.create(ci(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vn.create(t.compositeFilter.filters.map(s=>zg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(t.compositeFilter.op))}(n):Z()}function gb(n){return ib[n]}function yb(n){return rb[n]}function vb(n){return ob[n]}function li(n){return{fieldPath:n.canonicalString()}}function ci(n){return st.fromServerFormat(n.fieldPath)}function Gg(n){return n instanceof qe?function(t){if(t.op==="=="){if(Kf(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NAN"}};if(qf(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kf(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NAN"}};if(qf(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(t.field),op:yb(t.op),value:t.value}}}(n):n instanceof vn?function(t){const s=t.getFilters().map(i=>Gg(i));return s.length===1?s[0]:{compositeFilter:{op:vb(t.op),filters:s}}}(n):Z()}function Eb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,s,i,r=ne.min(),o=ne.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Tt=e}}function Ib(n){const e=_b({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.Tn=new Ab}addToCollectionParentIndex(e,t){return this.Tn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(os.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(os.min())}updateCollectionGroup(e,t,s){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Ab{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Ke(ke.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ke(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yg=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Yg,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ni(0)}static Un(){return new Ni(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LruGarbageCollector",Cb=1048576;function lp([n,e],[t,s]){const i=de(n,t);return i===0?de(e,s):i}class bb{constructor(e){this.Hn=e,this.buffer=new Ke(lp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();lp(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rb{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Q(ap,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ui(t)?Q(ap,"Ignoring IndexedDB error during garbage collection: ",t):await Fi(t)}await this.er(3e5)})}}class Sb{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return O.resolve(ol.ae);const s=new bb(t);return this.tr.forEachTarget(e,i=>s.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>s.Zn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(op)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),op):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,i,r,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(s=p,l=Date.now(),this.removeTargets(e,s,t))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(u=Date.now(),oi()<=ue.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p})))}}function Pb(n,e){return new Sb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.changes=new zs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?O.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Sr(s.mutation,i,xt.empty(),Be.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,t,s=he()){const i=ks();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=pr();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ks();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,he()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,s,i){let r=Ln();const o=Rr(),l=function(){return Rr()}();return t.forEach((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof ys)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Sr(d.mutation,u,d.mutation.getFieldMask(),Be.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return l.set(u,new kb(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const s=Rr();let i=new je((o,l)=>o-l),r=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=s.get(c)||xt.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(i.get(l.batchId)||he()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Pg();d.forEach(_=>{if(!r.has(_)){const y=Vg(t.get(_),s.get(_));y!==null&&p.set(_,y),r=r.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):MC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):O.resolve(ks());let l=qr,c=r;return o.next(u=>O.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,he())).next(d=>({batchId:l,changes:Sg(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(s=>{let i=pr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=pr();return this.indexManager.getCollectionParents(e,r).next(l=>O.forEach(l,c=>{const u=function(p,_){return new ll(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(d=>{d.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ye.newInvalidDocument(d)))});let l=pr();return o.forEach((c,u)=>{const d=r.get(c);d!==void 0&&Sr(d.mutation,u,xt.empty(),Be.now()),hl(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return O.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:Ib(i.bundledQuery),readTime:Mt(i.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.overlays=new je(J.comparator),this.Rr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ks();return O.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.Et(e,t,r)}),O.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Rr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Rr.delete(s)),O.resolve()}getOverlaysForCollection(e,t,s){const i=ks(),r=t.length+1,o=new J(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new je((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=ks(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=ks(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i)););return O.resolve(l)}Et(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(s.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ZC(t,s));let r=this.Rr.get(t);r===void 0&&(r=he(),this.Rr.set(t,r)),this.Rr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Vr=new Ke(Ge.mr),this.gr=new Ke(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Ge(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Ge(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new J(new ke([])),s=new Ge(t,e),i=new Ge(t,e+1),r=[];return this.gr.forEachInRange([s,i],o=>{this.wr(o),r.push(o.key)}),r}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new J(new ke([])),s=new Ge(t,e),i=new Ge(t,e+1);let r=he();return this.gr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Ge(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ge{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return J.comparator(e.key,t.key)||de(e.Cr,t.Cr)}static pr(e,t){return de(e.Cr,t.Cr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ke(Ge.mr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JC(r,t,s,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Ge(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,t){return O.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Nr(s),r=i<0?0:i;return O.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Gu:this.Fr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ge(t,0),i=new Ge(t,Number.POSITIVE_INFINITY),r=[];return this.Mr.forEachInRange([s,i],o=>{const l=this.Or(o.Cr);r.push(l)}),O.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ke(de);return t.forEach(i=>{const r=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([r,o],l=>{s=s.add(l.Cr)})}),O.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;J.isDocumentKey(r)||(r=r.child(""));const o=new Ge(new J(r),0);let l=new Ke(de);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Cr)),!0)},o),O.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(s=>{const i=this.Or(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return O.forEach(t.mutations,i=>{const r=new Ge(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Ge(t,0),i=this.Mr.firstAfterOrEqual(s);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.kr=e,this.docs=function(){return new je(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return O.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let s=Ln();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ye.newInvalidDocument(i))}),O.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ln();const o=t.path,l=new J(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fC(dC(d),s)<=0||(i.has(d.key)||hl(t,d))&&(r=r.insert(d.key,d.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(e,t,s,i){Z()}qr(e,t){return O.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Fb(this)}getSize(e){return O.resolve(this.size)}}class Fb extends Nb{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(s)}),O.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.persistence=e,this.Qr=new zs(t=>Xu(t),Ju),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sh,this.targetCount=0,this.Ur=Ni.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),O.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.zn(t),O.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.Qr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(r).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return O.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),O.resolve()}removeMatchingKeys(e,t,s){this.Kr.Sr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),O.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return O.resolve(s)}containsKey(e,t){return O.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ol(0),this.zr=!1,this.zr=!0,this.jr=new Vb,this.referenceDelegate=e(this),this.Hr=new Ub(this),this.indexManager=new wb,this.remoteDocumentCache=function(i){return new Lb(i)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Tb(t),this.Yr=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new Mb(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){Q("MemoryPersistence","Starting transaction:",e);const i=new Bb(this.Gr.next());return this.referenceDelegate.Zr(),s(i).next(r=>this.referenceDelegate.Xr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}ei(e,t){return O.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class Bb extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.ti=new sh,this.ni=null}static ri(e){return new ih(e)}get ii(){if(this.ni)return this.ni;throw Z()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),O.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),O.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.ii.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.ii,s=>{const i=J.fromPath(s);return this.si(e,i).next(r=>{r||t.removeEntry(i,ne.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return O.or([()=>O.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Ca{constructor(e,t){this.persistence=e,this.oi=new zs(s=>yC(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=Pb(this,t)}static ri(e,t){return new Ca(e,t)}Zr(){}Xr(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return O.forEach(this.oi,(s,i)=>this.ar(e,s,i).next(r=>r?O.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,t).next(l=>{l||(s++,r.removeEntry(o,ne.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),O.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),O.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jo(e.data.value)),t}ar(e,t,s){return O.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return O.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=i}static Yi(e,t){let s=he(),i=he();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new rh(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ow()?8:mC(en())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.rs(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ss(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new $b;return this._s(e,t,o).next(l=>{if(r.result=l,this.Xi)return this.us(e,t,o,l.size)})}).next(()=>r.result)}us(e,t,s,i){return s.documentReadCount<this.es?(oi()<=ue.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",ai(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),O.resolve()):(oi()<=ue.DEBUG&&Q("QueryEngine","Query:",ai(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ts*i?(oi()<=ue.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",ai(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(t))):O.resolve())}rs(e,t){if(Yf(t))return O.resolve(null);let s=_n(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Gc(t,null,"F"),s=_n(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=he(...r);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.cs(t,l);return this.ls(t,u,o,c.readTime)?this.rs(e,Gc(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,s,i){return Yf(t)||i.isEqual(ne.min())?O.resolve(null):this.ns.getDocuments(e,s).next(r=>{const o=this.cs(t,r);return this.ls(t,o,s,i)?O.resolve(null):(oi()<=ue.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ai(t)),this.hs(e,o,t,hC(i,qr)).next(l=>l))})}cs(e,t){let s=new Ke(bg(e));return t.forEach((i,r)=>{hl(e,r)&&(s=s.add(r))}),s}ls(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}_s(e,t,s){return oi()<=ue.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",ai(t)),this.ns.getDocumentsMatchingQuery(e,t,os.min(),s)}hs(e,t,s,i){return this.ns.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="LocalStore",Hb=3e8;class Wb{constructor(e,t,s,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new je(de),this.Is=new zs(r=>Xu(r),Ju),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function qb(n,e,t,s){return new Wb(n,e,t,s)}async function Jg(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],l=[];let c=he();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function Kb(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,_=p.keys();let y=O.resolve();return _.forEach(I=>{y=y.next(()=>d.getEntry(c,I)).next(P=>{const N=u.docVersions.get(I);ye(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=he();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Zg(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function zb(n,e){const t=re(n),s=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const _=i.get(p);if(!_)return;l.push(t.Hr.removeMatchingKeys(r,d.removedDocuments,p).next(()=>t.Hr.addMatchingKeys(r,d.addedDocuments,p)));let y=_.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,s)),i=i.insert(p,y),function(P,N,$){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Hb?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,y,d)&&l.push(t.Hr.updateTargetData(r,y))});let c=Ln(),u=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(Gb(r,o,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!s.isEqual(ne.min())){const d=t.Hr.getLastRemoteSnapshotVersion(r).next(p=>t.Hr.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(d)}return O.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.Ts=i,r))}function Gb(n,e,t){let s=he(),i=he();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Ln();return t.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Q(oh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:i}})}function Qb(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Gu),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Yb(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Hr.getTargetData(s,e).next(r=>r?(i=r,O.resolve(i)):t.Hr.allocateTargetId(s).next(o=>(i=new Yn(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function Jc(n,e,t){const s=re(n),i=s.Ts.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ui(o))throw o;Q(oh,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ts=s.Ts.remove(e),s.Is.delete(i.target)}function cp(n,e,t){const s=re(n);let i=ne.min(),r=he();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=re(c),_=p.Is.get(d);return _!==void 0?O.resolve(p.Ts.get(_)):p.Hr.getTargetData(u,d)}(s,o,_n(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>s.Ps.getDocumentsMatchingQuery(o,e,t?i:ne.min(),t?r:he())).next(l=>(Xb(s,FC(e),l),{documents:l,gs:r})))}function Xb(n,e,t){let s=n.Es.get(e)||ne.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Es.set(e,s)}class up{constructor(){this.activeTargetIds=WC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this.ho=new up,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new up,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="ConnectivityMonitor";class dp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Q(hp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Q(hp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=null;function Zc(){return Bo===null?Bo=function(){return 268435456+Math.round(2147483648*Math.random())}():Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="RestConnection",eR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database===ga?`project_id=${s}`:`project_id=${s}&database_id=${i}`}So(e,t,s,i,r){const o=Zc(),l=this.bo(e,t.toUriEncodedString());Q(cc,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,r),this.vo(e,l,c,s).then(u=>(Q(cc,`Received RPC '${e}' ${o}: `,u),u),u=>{throw bi(cc,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",s),u})}Co(e,t,s,i,r,o){return this.So(e,t,s,i,r)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Li}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}bo(e,t){const s=eR[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class sR extends tR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,i){const r=Zc();return new Promise((o,l)=>{const c=new ng;c.setWithCredentials(!0),c.listenOnce(sg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xo.NO_ERROR:const d=c.getResponseJson();Q(ut,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(d)),o(d);break;case Xo.TIMEOUT:Q(ut,`RPC '${e}' ${r} timed out`),l(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const p=c.getStatus();if(Q(ut,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const I=function(N){const $=N.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf($)>=0?$:x.UNKNOWN}(y.status);l(new Y(I,y.message))}else l(new Y(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(x.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{Q(ut,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);Q(ut,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}Wo(e,t,s){const i=Zc(),r=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=og(),l=rg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");Q(ut,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);let _=!1,y=!1;const I=new nR({Fo:N=>{y?Q(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(_||(Q(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),Q(ut,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Mo:()=>p.close()}),P=(N,$,z)=>{N.listen($,B=>{try{z(B)}catch(M){setTimeout(()=>{throw M},0)}})};return P(p,fr.EventType.OPEN,()=>{y||(Q(ut,`RPC '${e}' stream ${i} transport opened.`),I.Qo())}),P(p,fr.EventType.CLOSE,()=>{y||(y=!0,Q(ut,`RPC '${e}' stream ${i} transport closed`),I.Ko())}),P(p,fr.EventType.ERROR,N=>{y||(y=!0,bi(ut,`RPC '${e}' stream ${i} transport errored:`,N),I.Ko(new Y(x.UNAVAILABLE,"The operation could not be completed")))}),P(p,fr.EventType.MESSAGE,N=>{var $;if(!y){const z=N.data[0];ye(!!z);const B=z,M=(B==null?void 0:B.error)||(($=B[0])===null||$===void 0?void 0:$.error);if(M){Q(ut,`RPC '${e}' stream ${i} received error:`,M);const ie=M.status;let ae=function(v){const A=Ue[v];if(A!==void 0)return Ug(A)}(ie),w=M.message;ae===void 0&&(ae=x.INTERNAL,w="Unknown error status: "+ie+" with message "+M.message),y=!0,I.Ko(new Y(ae,w)),p.close()}else Q(ut,`RPC '${e}' stream ${i} received:`,z),I.Uo(z)}}),P(l,ig.STAT_EVENT,N=>{N.stat===jc.PROXY?Q(ut,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===jc.NOPROXY&&Q(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.$o()},0),I}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){return new ab(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=i,this.jo=r,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-s);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="PersistentStream";class ey{constructor(e,t,s,i,r,o,l,c){this.Ti=e,this.n_=s,this.r_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ah(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Mn(t.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.i_===t&&this.V_(s,i)},s=>{e(()=>{const i=new Y(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(i)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{s(()=>this.m_(i))}),this.stream.onMessage(i=>{s(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Q(fp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(Q(fp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iR extends ey{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=hb(this.serializer,e),s=function(r){if(!("targetChange"in r))return ne.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Mt(o.readTime):ne.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=Xc(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=zc(c)?{documents:fb(r,c)}:{query:pb(r,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jg(r,o.resumeToken);const u=Qc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=wa(r,o.snapshotVersion.toTimestamp());const u=Qc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=mb(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=Xc(this.serializer),t.removeTarget=e,this.I_(t)}}class rR extends ey{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=db(e.writeResults,e.commitTime),s=Mt(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=Xc(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Kg(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{}class aR extends oR{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Yc(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Y(x.UNKNOWN,r.toString())})}Co(e,t,s,i,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Yc(t,s),i,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(x.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class lR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mn(t),this.N_=!1):Q("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class cR{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=r,this.z_.To(o=>{s.enqueueAndForget(async()=>{Gs(this)&&(Q(Bs,"Restarting streams for network reachability change."),await async function(c){const u=re(c);u.W_.add(4),await ro(u),u.j_.set("Unknown"),u.W_.delete(4),await gl(u)}(this))})}),this.j_=new lR(s,i)}}async function gl(n){if(Gs(n))for(const e of n.G_)await e(!0)}async function ro(n){for(const e of n.G_)await e(!1)}function ty(n,e){const t=re(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),hh(t)?uh(t):Bi(t).c_()&&ch(t,e))}function lh(n,e){const t=re(n),s=Bi(t);t.U_.delete(e),s.c_()&&ny(t,e),t.U_.size===0&&(s.c_()?s.P_():Gs(t)&&t.j_.set("Unknown"))}function ch(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bi(n).y_(e)}function ny(n,e){n.H_.Ne(e),Bi(n).w_(e)}function uh(n){n.H_=new sb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Bi(n).start(),n.j_.B_()}function hh(n){return Gs(n)&&!Bi(n).u_()&&n.U_.size>0}function Gs(n){return re(n).W_.size===0}function sy(n){n.H_=void 0}async function uR(n){n.j_.set("Online")}async function hR(n){n.U_.forEach((e,t)=>{ch(n,e)})}async function dR(n,e){sy(n),hh(n)?(n.j_.q_(e),uh(n)):n.j_.set("Unknown")}async function fR(n,e,t){if(n.j_.set("Online"),e instanceof $g&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const l of r.targetIds)i.U_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.U_.delete(l),i.H_.removeTarget(l))}(n,e)}catch(s){Q(Bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ba(n,s)}else if(e instanceof ta?n.H_.We(e):e instanceof Bg?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ne.min()))try{const s=await Zg(n.localStore);t.compareTo(s)>=0&&await function(r,o){const l=r.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.U_.get(u);d&&r.U_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=r.U_.get(c);if(!d)return;r.U_.set(c,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),ny(r,c);const p=new Yn(d.target,c,u,d.sequenceNumber);ch(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){Q(Bs,"Failed to raise snapshot:",s),await ba(n,s)}}async function ba(n,e,t){if(!Ui(e))throw e;n.W_.add(1),await ro(n),n.j_.set("Offline"),t||(t=()=>Zg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(Bs,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await gl(n)})}function iy(n,e){return e().catch(t=>ba(n,t,e))}async function yl(n){const e=re(n),t=us(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:Gu;for(;pR(e);)try{const i=await Qb(e.localStore,s);if(i===null){e.K_.length===0&&t.P_();break}s=i.batchId,_R(e,i)}catch(i){await ba(e,i)}ry(e)&&oy(e)}function pR(n){return Gs(n)&&n.K_.length<10}function _R(n,e){n.K_.push(e);const t=us(n);t.c_()&&t.S_&&t.b_(e.mutations)}function ry(n){return Gs(n)&&!us(n).u_()&&n.K_.length>0}function oy(n){us(n).start()}async function mR(n){us(n).C_()}async function gR(n){const e=us(n);for(const t of n.K_)e.b_(t.mutations)}async function yR(n,e,t){const s=n.K_.shift(),i=eh.from(s,e,t);await iy(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await yl(n)}async function vR(n,e){e&&us(n).S_&&await async function(s,i){if(function(o){return Fg(o)&&o!==x.ABORTED}(i.code)){const r=s.K_.shift();us(s).h_(),await iy(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await yl(s)}}(n,e),ry(n)&&oy(n)}async function pp(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),Q(Bs,"RemoteStore received new credentials");const s=Gs(t);t.W_.add(3),await ro(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await gl(t)}async function ER(n,e){const t=re(n);e?(t.W_.delete(2),await gl(t)):e||(t.W_.add(2),await ro(t),t.j_.set("Unknown"))}function Bi(n){return n.J_||(n.J_=function(t,s,i){const r=re(t);return r.M_(),new iR(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{xo:uR.bind(null,n),No:hR.bind(null,n),Lo:dR.bind(null,n),p_:fR.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),hh(n)?uh(n):n.j_.set("Unknown")):(await n.J_.stop(),sy(n))})),n.J_}function us(n){return n.Y_||(n.Y_=function(t,s,i){const r=re(t);return r.M_(),new rR(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:mR.bind(null,n),Lo:vR.bind(null,n),D_:gR.bind(null,n),v_:yR.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await yl(n)):(await n.Y_.stop(),n.K_.length>0&&(Q(Bs,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,l=new dh(e,t,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(n,e){if(Mn("AsyncQueue",`${e}: ${n}`),Ui(n))return new Y(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static emptySet(e){return new vi(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||J.comparator(t.key,s.key):(t,s)=>J.comparator(t.key,s.key),this.keyedMap=pr(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.Z_=new je(J.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Z():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ki{constructor(e,t,s,i,r,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ki(e,t,vi.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class IR{constructor(){this.queries=mp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const i=re(t),r=i.queries;i.queries=mp(),r.forEach((o,l)=>{for(const c of l.ta)c.onError(s)})})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function mp(){return new zs(n=>Cg(n),ul)}async function ph(n,e){const t=re(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.na()&&e.ra()&&(s=2):(r=new TR,s=e.ra()?0:1);try{switch(s){case 0:r.ea=await t.onListen(i,!0);break;case 1:r.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=fh(o,`Initialization of query '${ai(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.ta.push(e),e.sa(t.onlineState),r.ea&&e.oa(r.ea)&&mh(t)}async function _h(n,e){const t=re(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ta.indexOf(e);o>=0&&(r.ta.splice(o,1),r.ta.length===0?i=e.ra()?0:1:!r.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wR(n,e){const t=re(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const l of o.ta)l.oa(i)&&(s=!0);o.ea=i}}s&&mh(t)}function AR(n,e,t){const s=re(n),i=s.queries.get(e);if(i)for(const r of i.ta)r.onError(t);s.queries.delete(e)}function mh(n){n.ia.forEach(e=>{e.next()})}var eu,gp;(gp=eu||(eu={}))._a="default",gp.Cache="cache";class gh{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==eu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.key=e}}class ly{constructor(e){this.key=e}}class CR{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=he(),this.mutatedKeys=he(),this.ya=bg(e),this.wa=new vi(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new _p,i=t?t.wa:this.wa;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const _=i.get(d),y=hl(this.query,p)?p:null,I=!!_&&this.mutatedKeys.has(_.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;_&&y?_.data.isEqual(y.data)?I!==P&&(s.track({type:3,doc:y}),N=!0):this.va(_,y)||(s.track({type:2,doc:y}),N=!0,(c&&this.ya(y,c)>0||u&&this.ya(y,u)<0)&&(l=!0)):!_&&y?(s.track({type:0,doc:y}),N=!0):_&&!y&&(s.track({type:1,doc:_}),N=!0,(c||u)&&(l=!0)),N&&(y?(o=o.add(y),r=P?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{wa:o,Da:s,ls:l,mutatedKeys:r}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(y,I){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(y)-P(I)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(s),i=i!=null&&i;const l=t&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new ki(this.query,e.wa,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _p,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=he(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new ly(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new ay(s))}),t}Oa(e){this.fa=e.gs,this.pa=he();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return ki.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const yh="SyncEngine";class bR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class RR{constructor(e){this.key=e,this.Ba=!1}}class SR{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new zs(l=>Cg(l),ul),this.qa=new Map,this.Qa=new Set,this.$a=new je(J.comparator),this.Ka=new Map,this.Ua=new sh,this.Wa={},this.Ga=new Map,this.za=Ni.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function PR(n,e,t=!0){const s=py(n);let i;const r=s.ka.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Na()):i=await cy(s,e,t,!0),i}async function NR(n,e){const t=py(n);await cy(t,e,!0,!1)}async function cy(n,e,t,s){const i=await Yb(n.localStore,_n(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let l;return s&&(l=await kR(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&ty(n.remoteStore,i),l}async function kR(n,e,t,s,i){n.Ha=(p,_,y)=>async function(P,N,$,z){let B=N.view.ba($);B.ls&&(B=await cp(P.localStore,N.query,!1).then(({documents:w})=>N.view.ba(w,B)));const M=z&&z.targetChanges.get(N.targetId),ie=z&&z.targetMismatches.get(N.targetId)!=null,ae=N.view.applyChanges(B,P.isPrimaryClient,M,ie);return vp(P,N.targetId,ae.Ma),ae.snapshot}(n,p,_,y);const r=await cp(n.localStore,e,!0),o=new CR(e,r.gs),l=o.ba(r.documents),c=io.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(l,n.isPrimaryClient,c);vp(n,t,u.Ma);const d=new bR(e,t,o);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function DR(n,e,t){const s=re(n),i=s.ka.get(e),r=s.qa.get(i.targetId);if(r.length>1)return s.qa.set(i.targetId,r.filter(o=>!ul(o,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Jc(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&lh(s.remoteStore,i.targetId),tu(s,i.targetId)}).catch(Fi)):(tu(s,i.targetId),await Jc(s.localStore,i.targetId,!0))}async function OR(n,e){const t=re(n),s=t.ka.get(e),i=t.qa.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),lh(t.remoteStore,s.targetId))}async function xR(n,e,t){const s=$R(n);try{const i=await function(o,l){const c=re(o),u=Be.now(),d=l.reduce((y,I)=>y.add(I.key),he());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let I=Ln(),P=he();return c.ds.getEntries(y,d).next(N=>{I=N,I.forEach(($,z)=>{z.isValidDocument()||(P=P.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,I)).next(N=>{p=N;const $=[];for(const z of l){const B=XC(z,p.get(z.key).overlayedDocument);B!=null&&$.push(new ys(z.key,B,yg(B.value.mapValue),At.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,$,l)}).next(N=>{_=N;const $=N.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(y,N.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Sg(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new je(de)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(s,i.batchId,t),await oo(s,i.changes),await yl(s.remoteStore)}catch(i){const r=fh(i,"Failed to persist write");t.reject(r)}}async function uy(n,e){const t=re(n);try{const s=await zb(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Ka.get(r);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?ye(o.Ba):i.removedDocuments.size>0&&(ye(o.Ba),o.Ba=!1))}),await oo(t,s,e)}catch(s){await Fi(s)}}function yp(n,e,t){const s=re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ka.forEach((r,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=re(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const _ of p.ta)_.sa(l)&&(u=!0)}),u&&mh(c)}(s.eventManager,e),i.length&&s.La.p_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VR(n,e,t){const s=re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Ka.get(e),r=i&&i.key;if(r){let o=new je(J.comparator);o=o.insert(r,Ye.newNoDocument(r,ne.min()));const l=he().add(r),c=new _l(ne.min(),new Map,new je(de),o,l);await uy(s,c),s.$a=s.$a.remove(r),s.Ka.delete(e),vh(s)}else await Jc(s.localStore,e,!1).then(()=>tu(s,e,t)).catch(Fi)}async function MR(n,e){const t=re(n),s=e.batch.batchId;try{const i=await Kb(t.localStore,e);dy(t,s,null),hy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await oo(t,i)}catch(i){await Fi(i)}}async function LR(n,e,t){const s=re(n);try{const i=await function(o,l){const c=re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ye(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);dy(s,e,t),hy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await oo(s,i)}catch(i){await Fi(i)}}function hy(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function dy(n,e,t){const s=re(n);let i=s.Wa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Wa[s.currentUser.toKey()]=i}}function tu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.qa.get(e))n.ka.delete(s),t&&n.La.Ja(s,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(s=>{n.Ua.containsKey(s)||fy(n,s)})}function fy(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(lh(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),vh(n))}function vp(n,e,t){for(const s of t)s instanceof ay?(n.Ua.addReference(s.key,e),FR(n,s)):s instanceof ly?(Q(yh,"Document no longer in limbo: "+s.key),n.Ua.removeReference(s.key,e),n.Ua.containsKey(s.key)||fy(n,s.key)):Z()}function FR(n,e){const t=e.key,s=t.path.canonicalString();n.$a.get(t)||n.Qa.has(s)||(Q(yh,"New document in limbo: "+t),n.Qa.add(s),vh(n))}function vh(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new J(ke.fromString(e)),s=n.za.next();n.Ka.set(s,new RR(t)),n.$a=n.$a.insert(t,s),ty(n.remoteStore,new Yn(_n(cl(t.path)),s,"TargetPurposeLimboResolution",ol.ae))}}async function oo(n,e,t){const s=re(n),i=[],r=[],o=[];s.ka.isEmpty()||(s.ka.forEach((l,c)=>{o.push(s.Ha(c,e,t).then(u=>{var d;if((u||t)&&s.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=rh.Yi(c.targetId,u);r.push(p)}}))}),await Promise.all(o),s.La.p_(i),await async function(c,u){const d=re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(u,_=>O.forEach(_.Hi,y=>d.persistence.referenceDelegate.addReference(p,_.targetId,y)).next(()=>O.forEach(_.Ji,y=>d.persistence.referenceDelegate.removeReference(p,_.targetId,y)))))}catch(p){if(!Ui(p))throw p;Q(oh,"Failed to update sequence numbers: "+p)}for(const p of u){const _=p.targetId;if(!p.fromCache){const y=d.Ts.get(_),I=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(I);d.Ts=d.Ts.insert(_,P)}}}(s.localStore,r))}async function UR(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){Q(yh,"User change. New user:",e.toKey());const s=await Jg(t.localStore,e);t.currentUser=e,function(r,o){r.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Y(x.CANCELLED,o))})}),r.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oo(t,s.Rs)}}function BR(n,e){const t=re(n),s=t.Ka.get(e);if(s&&s.Ba)return he().add(s.key);{let i=he();const r=t.qa.get(e);if(!r)return i;for(const o of r){const l=t.ka.get(o);i=i.unionWith(l.view.Sa)}return i}}function py(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.La.p_=wR.bind(null,e.eventManager),e.La.Ja=AR.bind(null,e.eventManager),e}function $R(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LR.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ml(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return qb(this.persistence,new jb,e.initialUser,this.serializer)}Xa(e){return new Xg(ih.ri,this.serializer)}Za(e){return new Jb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class jR extends Ra{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ye(this.persistence.referenceDelegate instanceof Ca);const s=this.persistence.referenceDelegate.garbageCollector;return new Rb(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Xg(s=>Ca.ri(s,t),this.serializer)}}class nu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=UR.bind(null,this.syncEngine),await ER(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IR}()}createDatastore(e){const t=ml(e.databaseInfo.databaseId),s=function(r){return new sR(r)}(e.databaseInfo);return function(r,o,l,c){return new aR(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,l){return new cR(s,i,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yp(this.syncEngine,t,0),function(){return dp.D()?new dp:new Zb}())}createSyncEngine(e,t){return function(i,r,o,l,c,u,d){const p=new SR(i,r,o,l,c,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=re(i);Q(Bs,"RemoteStore shutting down."),r.W_.add(5),await ro(r),r.z_.shutdown(),r.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nu.provider={build:()=>new nu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Y(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,r){const o=re(i),l={documents:r.map(p=>Aa(o.serializer,p))},c=await o.Co("BatchGetDocuments",o.serializer.databaseId,ke.emptyPath(),l,r.length),u=new Map;c.forEach(p=>{const _=ub(o.serializer,p);u.set(_.key.toString(),_)});const d=[];return r.forEach(p=>{const _=u.get(p.toString());ye(!!_),d.push(_)}),d}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new pl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=J.fromPath(s);this.mutations.push(new Lg(i,this.precondition(i)))}),await async function(s,i){const r=re(s),o={writes:i.map(l=>Kg(r.serializer,l))};await r.So("Commit",r.serializer.databaseId,ke.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Z();t=ne.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new Y(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ne.min())?At.exists(!1):At.updateTime(t):At.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ne.min()))throw new Y(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return At.updateTime(t)}return At.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.Tu=s.maxAttempts,this.a_=new ah(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new HR(this.datastore),t=this.du(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Au(i)}))}).catch(s=>{this.Au(s)})})}du(e){try{const t=this.updateFunction(e);return!no(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Fg(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="FirestoreClient";class qR{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=lg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Q(hs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Q(hs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fh(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hc(n,e){n.asyncQueue.verifyOperationInProgress(),Q(hs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Jg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ep(n,e){n.asyncQueue.verifyOperationInProgress();const t=await KR(n);Q(hs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>pp(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>pp(e.remoteStore,i)),n._onlineComponents=e}async function KR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(hs,"Using user provided OfflineComponentProvider");try{await hc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;bi("Error using user provided cache. Falling back to memory cache: "+t),await hc(n,new Ra)}}else Q(hs,"Using default OfflineComponentProvider"),await hc(n,new jR(void 0));return n._offlineComponents}async function Th(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(hs,"Using user provided OnlineComponentProvider"),await Ep(n,n._uninitializedComponentsProvider._online)):(Q(hs,"Using default OnlineComponentProvider"),await Ep(n,new nu))),n._onlineComponents}function zR(n){return Th(n).then(e=>e.syncEngine)}function GR(n){return Th(n).then(e=>e.datastore)}async function Sa(n){const e=await Th(n),t=e.eventManager;return t.onListen=PR.bind(null,e.syncEngine),t.onUnlisten=DR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OR.bind(null,e.syncEngine),t}function QR(n,e,t={}){const s=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const d=new Eh({next:_=>{d.su(),o.enqueueAndForget(()=>_h(r,p));const y=_.docs.has(l);!y&&_.fromCache?u.reject(new Y(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&_.fromCache&&c&&c.source==="server"?u.reject(new Y(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new gh(cl(l.path),d,{includeMetadataChanges:!0,Ta:!0});return ph(r,p)}(await Sa(n),n.asyncQueue,e,t,s)),s.promise}function YR(n,e,t={}){const s=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const d=new Eh({next:_=>{d.su(),o.enqueueAndForget(()=>_h(r,p)),_.fromCache&&c.source==="server"?u.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new gh(l,d,{includeMetadataChanges:!0,Ta:!0});return ph(r,p)}(await Sa(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n,e,t){if(!t)throw new Y(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XR(n,e,t,s){if(e===!0&&s===!0)throw new Y(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ip(n){if(!J.isDocumentKey(n))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wp(n){if(J.isDocumentKey(n))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ih(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z()}function Jt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ih(n);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="firestore.googleapis.com",Ap=!0;class Cp{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gy,this.ssl=Ap}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ap;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Cb)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_y((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vl{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new sC;switch(s.type){case"firstParty":return new aC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Tp.get(t);s&&(Q("ComponentProvider","Removing Datastore"),Tp.delete(t),s.terminate())}(this),Promise.resolve()}}function JR(n,e,t,s={}){var i;const r=(n=Jt(n,vl))._getSettings(),o=`${e}:${t}`;if(r.host!==gy&&r.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=ht.MOCK_USER;else{l=Sw(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(u)}n._authCredentials=new iC(new ag(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ao(this.firestore,e,this._query)}}class St{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class ss extends ao{constructor(e,t,s){super(e,t,cl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new J(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function ZR(n,e,...t){if(n=Ct(n),my("collection","path",e),n instanceof vl){const s=ke.fromString(e,...t);return wp(s),new ss(n,null,s)}{if(!(n instanceof St||n instanceof ss))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ke.fromString(e,...t));return wp(s),new ss(n.firestore,null,s)}}function na(n,e,...t){if(n=Ct(n),arguments.length===1&&(e=lg.newId()),my("doc","path",e),n instanceof vl){const s=ke.fromString(e,...t);return Ip(s),new St(n,null,new J(s))}{if(!(n instanceof St||n instanceof ss))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ke.fromString(e,...t));return Ip(s),new St(n.firestore,n instanceof ss?n.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="AsyncQueue";class Rp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ah(this,"async_queue_retry"),this.Su=()=>{const s=uc();s&&Q(bp,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new pn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ui(e))throw e;Q(bp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Mn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=dh.createAndSchedule(this,e,t,s,r=>this.Fu(r));return this.fu.push(i),i}Du(){this.gu&&Z()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Sp(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class ds extends vl{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Rp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rp(e),this._firestoreClient=void 0,await e}}}function eS(n,e){const t=typeof n=="object"?n:Jm(),s=typeof n=="string"?n:ga,i=jA(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=bw("firestore");r&&JR(i,...r)}return i}function lo(n){if(n._terminated)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tS(n),n._firestoreClient}function tS(n){var e,t,s;const i=n._freezeSettings(),r=function(l,c,u,d){return new TC(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_y(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new qR(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(rt.fromBase64String(e))}catch(t){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $s(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=/^__.*__$/;class sS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new so(e,this.data,t,this.fieldTransforms)}}class yy{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ys(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Ch{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Bu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:s,Qu:!1});return i.$u(e),i}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:s,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Pa(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(vy(this.Lu)&&nS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class iS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ml(e)}ju(e,t,s,i=!1){return new Ch({Lu:e,methodName:t,zu:s,path:st.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ey(n){const e=n._freezeSettings(),t=ml(n._databaseId);return new iS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ty(n,e,t,s,i,r={}){const o=n.ju(r.merge||r.mergeFields?2:0,e,t,i);bh("Data must be an object, but it was:",o,s);const l=Iy(s,o);let c,u;if(r.merge)c=new xt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const _=su(e,p,t);if(!o.contains(_))throw new Y(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Ay(d,_)||d.push(_)}c=new xt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new sS(new wt(l),c,u)}class Il extends wh{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Il}}function rS(n,e,t,s){const i=n.ju(1,e,t);bh("Data must be an object, but it was:",i,s);const r=[],o=wt.empty();gs(s,(c,u)=>{const d=Rh(e,c,t);u=Ct(u);const p=i.Ku(d);if(u instanceof Il)r.push(d);else{const _=wl(u,p);_!=null&&(r.push(d),o.set(d,_))}});const l=new xt(r);return new yy(o,l,i.fieldTransforms)}function oS(n,e,t,s,i,r){const o=n.ju(1,e,t),l=[su(e,s,t)],c=[i];if(r.length%2!=0)throw new Y(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<r.length;_+=2)l.push(su(e,r[_])),c.push(r[_+1]);const u=[],d=wt.empty();for(let _=l.length-1;_>=0;--_)if(!Ay(u,l[_])){const y=l[_];let I=c[_];I=Ct(I);const P=o.Ku(y);if(I instanceof Il)u.push(y);else{const N=wl(I,P);N!=null&&(u.push(y),d.set(y,N))}}const p=new xt(u);return new yy(d,p,o.fieldTransforms)}function wl(n,e){if(wy(n=Ct(n)))return bh("Unsupported field value:",e,n),Iy(n,e);if(n instanceof wh)return function(s,i){if(!vy(i.Lu))throw i.Wu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const l of s){let c=wl(l,i.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qC(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Be.fromDate(s);return{timestampValue:wa(i.serializer,r)}}if(s instanceof Be){const r=new Be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wa(i.serializer,r)}}if(s instanceof Tl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $s)return{bytesValue:jg(i.serializer,s._byteString)};if(s instanceof St){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:nh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ah)return function(o,l){return{mapValue:{fields:{[mg]:{stringValue:gg},[ya]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Zu(l.serializer,u)})}}}}}}(s,i);throw i.Wu(`Unsupported field value: ${Ih(s)}`)}(n,e)}function Iy(n,e){const t={};return ug(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(n,(s,i)=>{const r=wl(i,e.qu(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function wy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Tl||n instanceof $s||n instanceof St||n instanceof wh||n instanceof Ah)}function bh(n,e,t){if(!wy(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=Ih(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function su(n,e,t){if((e=Ct(e))instanceof El)return e._internalPath;if(typeof e=="string")return Rh(n,e);throw Pa("Field path arguments must be of type string or ",n,!1,void 0,t)}const aS=new RegExp("[~\\*/\\[\\]]");function Rh(n,e,t){if(e.search(aS)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new El(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pa(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Y(x.INVALID_ARGUMENT,l+n+c)}function Ay(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lS extends Na{data(){return super.data()}}function Cy(n,e){return typeof e=="string"?Rh(n,e):e instanceof El?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ry{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return gs(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;const r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t[ya].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new Ah(r)}convertGeoPoint(e){return new Tl(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=al(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=as(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ke.fromString(e);ye(Qg(s));const i=new zr(s.get(1),s.get(3)),r=new J(s.popFirst(5));return i.isEqual(t)||Mn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class cS extends Ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sh extends Na{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Cy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class sa extends Sh{data(e={}){return super.data(e)}}class Py{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ui(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sa(this._firestore,this._userDataWriter,s.key,s,new ui(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ui(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:uS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n){n=Jt(n,St);const e=Jt(n.firestore,ds);return QR(lo(e),n._key).then(t=>Dy(e,n,t))}class Al extends Ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function hS(n){n=Jt(n,ao);const e=Jt(n.firestore,ds),t=lo(e),s=new Al(e);return by(n._query),YR(t,n._query).then(i=>new Py(e,s,n,i))}function dS(n){return ky(Jt(n.firestore,ds),[new pl(n._key,At.none())])}function fS(n,e){const t=Jt(n.firestore,ds),s=na(n),i=Sy(n.converter,e);return ky(t,[Ty(Ey(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,At.exists(!1))]).then(()=>s)}function Ph(n,...e){var t,s,i;n=Ct(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Sp(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Sp(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,d;if(n instanceof St)u=Jt(n.firestore,ds),d=cl(n._key.path),c={next:p=>{e[o]&&e[o](Dy(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=Jt(n,ao);u=Jt(p.firestore,ds),d=p._query;const _=new Al(u);c={next:y=>{e[o]&&e[o](new Py(u,_,p,y))},error:e[o+1],complete:e[o+2]},by(n._query)}return function(_,y,I,P){const N=new Eh(P),$=new gh(y,N,I);return _.asyncQueue.enqueueAndForget(async()=>ph(await Sa(_),$)),()=>{N.su(),_.asyncQueue.enqueueAndForget(async()=>_h(await Sa(_),$))}}(lo(u),d,l,c)}function ky(n,e){return function(s,i){const r=new pn;return s.asyncQueue.enqueueAndForget(async()=>xR(await zR(s),i,r)),r.promise}(lo(n),e)}function Dy(n,e,t){const s=t.docs.get(e._key),i=new Al(n);return new Sh(n,i,e._key,s,new ui(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={maxAttempts:5};function mr(n,e){if((n=Ct(n)).firestore!==e)throw new Y(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ey(e)}get(e){const t=mr(e,this._firestore),s=new cS(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return Z();const r=i[0];if(r.isFoundDocument())return new Na(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new Na(this._firestore,s,t._key,null,t.converter);throw Z()})}set(e,t,s){const i=mr(e,this._firestore),r=Sy(i.converter,t,s),o=Ty(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=mr(e,this._firestore);let o;return o=typeof(t=Ct(t))=="string"||t instanceof El?oS(this._dataReader,"Transaction.update",r._key,t,s,i):rS(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=mr(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends _S{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=mr(e,this._firestore),s=new Al(this._firestore);return super.get(e).then(i=>new Sh(this._firestore,s,t._key,i._document,new ui(!1,!1),t.converter))}}function Pp(n,e,t){n=Jt(n,ds);const s=Object.assign(Object.assign({},pS),t);return function(r){if(r.maxAttempts<1)throw new Y(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,l){const c=new pn;return r.asyncQueue.enqueueAndForget(async()=>{const u=await GR(r);new WR(r.asyncQueue,u,l,o,c).Iu()}),c.promise}(lo(n),i=>e(new mS(n,i)),s)}(function(e,t=!0){(function(i){Li=i})(Mi),gn(new tn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new ds(new rC(s.getProvider("auth-internal")),new lC(o,s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(u.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Vt(xf,Vf,e),Vt(xf,Vf,"esm2017")})();const Oy=Xm({apiKey:"AIzaSyCzII5Kb18oE7dBkQNeiHxbE1QOO87q8i0",authDomain:"todo-7cc6c.firebaseapp.com",projectId:"todo-7cc6c",storageBucket:"todo-7cc6c.firebasestorage.app",messagingSenderId:"272667976521",appId:"1:272667976521:web:d5ca6d42a2dd924a64b098"}),iu=eS(Oy),ar=ZR(iu,"todoList");var on=(n=>(n[n.All=0]="All",n[n.Done=1]="Done",n[n.Undone=2]="Undone",n))(on||{});function xy(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=Vy,My=new Vi("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new to("@firebase/auth");function yS(n,...e){ka.logLevel<=ue.WARN&&ka.warn(`Auth (${Mi}): ${n}`,...e)}function ia(n,...e){ka.logLevel<=ue.ERROR&&ka.error(`Auth (${Mi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n,...e){throw Nh(n,...e)}function Ly(n,...e){return Nh(n,...e)}function Fy(n,e,t){const s=Object.assign(Object.assign({},gS()),{[e]:t});return new Vi("auth","Firebase",s).create(e,{appName:n.name})}function ra(n){return Fy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return My.create(n,...e)}function Te(n,e,...t){if(!n)throw Nh(e,...t)}function Nr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ia(e),new Error(e)}function Da(n,e){n||Nr(e)}function vS(){return kp()==="http:"||kp()==="https:"}function kp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||kw()||"connection"in navigator)?navigator.onLine:!0}function TS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.shortDelay=e,this.longDelay=t,Da(t>e,"Short delay should be less than long delay!"),this.isMobile=Wu()||Km()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(n,e){Da(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=new co(3e4,6e4);function By(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Cl(n,e,t,s,i={}){return $y(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=qu(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},r);return Nw()||(u.referrerPolicy="no-referrer"),Uy.fetch()(jy(n,n.config.apiHost,t,l),u)})}async function $y(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},wS),e);try{const i=new CS(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $o(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fy(n,d,u);Np(n,d)}}catch(i){if(i instanceof Un)throw i;Np(n,"network-request-failed",{message:String(i)})}}function jy(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?IS(n.config,i):`${n.config.apiScheme}://${i}`}class CS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ly(this.auth,"network-request-failed")),AS.get())})}}function $o(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ly(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(n,e){return Cl(n,"POST","/v1/accounts:delete",e)}async function Hy(n,e){return Cl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RS(n,e=!1){const t=Ct(n),s=await t.getIdToken(e),i=Wy(s);Te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:kr(dc(i.auth_time)),issuedAtTime:kr(dc(i.iat)),expirationTime:kr(dc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function dc(n){return Number(n)*1e3}function Wy(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=fa(t);return i?JSON.parse(i):(ia("Failed to decode base64 JWT payload"),null)}catch(i){return ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dp(n){const e=Wy(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Un&&SS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function SS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n){var e;const t=n.auth,s=await n.getIdToken(),i=await ru(n,Hy(t,{idToken:s}));Te(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qy(r.providerUserInfo):[],l=kS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new ou(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function NS(n){const e=Ct(n);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function qy(n){return n.map(e=>{var{providerId:t}=e,s=xy(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(n,e){const t=await $y(n,{},async()=>{const s=qu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=jy(n,i,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uy.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function OS(n,e){return Cl(n,"POST","/v2/accounts:revokeToken",By(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=Dp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await DS(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Ei;return s&&(Te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Te(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=xy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ou(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ru(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RS(this,e)}reload(){return NS(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Oa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(ra(this.auth));const e=await this.getIdToken();return await ru(this,bS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,l,c,u,d;const p=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,y=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(u=t.createdAt)!==null&&u!==void 0?u:void 0,z=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:M,isAnonymous:ie,providerData:ae,stsTokenManager:w}=t;Te(B&&w,e,"internal-error");const g=Ei.fromJSON(this.name,w);Te(typeof B=="string",e,"internal-error"),Kn(p,e.name),Kn(_,e.name),Te(typeof M=="boolean",e,"internal-error"),Te(typeof ie=="boolean",e,"internal-error"),Kn(y,e.name),Kn(I,e.name),Kn(P,e.name),Kn(N,e.name),Kn($,e.name),Kn(z,e.name);const v=new Xn({uid:B,auth:e,email:_,emailVerified:M,displayName:p,isAnonymous:ie,photoURL:I,phoneNumber:y,tenantId:P,stsTokenManager:g,createdAt:$,lastLoginAt:z});return ae&&Array.isArray(ae)&&(v.providerData=ae.map(A=>Object.assign({},A))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,s=!1){const i=new Ei;i.updateFromServerResponse(t);const r=new Xn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Oa(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];Te(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?qy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new Ei;l.updateFromIdToken(s);const c=new Xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ou(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Map;function Ds(n){Da(n instanceof Function,"Expected a class definition");let e=Op.get(n);return e?(Da(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Op.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const xp=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n,e,t){return`firebase:${n}:${e}:${t}`}class Ti{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fc(this.userKey,i.apiKey,r),this.fullPersistenceKey=fc("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ti(Ds(xp),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ds(xp);const o=fc(s,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){const p=Xn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ti(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ti(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(US(e))return"Blackberry";if(BS(e))return"Webos";if(VS(e))return"Safari";if((e.includes("chrome/")||MS(e))&&!e.includes("edge/"))return"Chrome";if(FS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xS(n=en()){return/firefox\//i.test(n)}function VS(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MS(n=en()){return/crios\//i.test(n)}function LS(n=en()){return/iemobile/i.test(n)}function FS(n=en()){return/android/i.test(n)}function US(n=en()){return/blackberry/i.test(n)}function BS(n=en()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n,e=[]){let t;switch(n){case"Browser":t=Vp(en());break;case"Worker":t=`${Vp(en())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e={}){return Cl(n,"GET","/v2/passwordPolicy",By(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=6;class WS{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:HS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mp(this),this.idTokenSubscription=new Mp(this),this.beforeStateQueue=new $S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ds(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hy(this,{idToken:e}),s=await Xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(ra(this));const t=e?Ct(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(ra(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(ra(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ds(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),t=new WS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await OS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ds(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Ds(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function KS(n){return Ct(n)}class Mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function zS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ds);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new co(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(5e3,15e3);var Lp="@firebase/auth",Fp="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YS(n){gn(new tn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Te(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zy(n)},u=new qS(s,i,r,c);return zS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),gn(new tn("auth-internal",e=>{const t=KS(e.getProvider("auth").getImmediate());return(s=>new GS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Lp,Fp,QS(n)),Vt(Lp,Fp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=5*60;Rw("authIdTokenMaxAge");YS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Map,ZS={activated:!1,tokenObservers:[]};function nn(n){return JS.get(n)||Object.assign({},ZS)}const Up={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t,s,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new jr,this.pending.promise.catch(t=>{}),await t0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new jr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function t0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},xa=new Vi("appCheck","AppCheck",n0);function Gy(n){if(!nn(n).activated)throw xa.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="firebase-app-check-database",i0=1,au="firebase-app-check-store";let jo=null;function r0(){return jo||(jo=new Promise((n,e)=>{try{const t=indexedDB.open(s0,i0);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;e(xa.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(au,{keyPath:"compositeKey"})}}}catch(t){e(xa.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),jo)}function o0(n,e){return a0(l0(n),e)}async function a0(n,e){const s=(await r0()).transaction(au,"readwrite"),r=s.objectStore(au).put({compositeKey:n,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(xa.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function l0(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new to("@firebase/app-check");function Bp(n,e){return zm()?o0(n,e).catch(t=>{lu.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={error:"UNKNOWN_ERROR"};function u0(n){return sl.encodeString(JSON.stringify(n),!1)}async function cu(n,e=!1){const t=n.app;Gy(t);const s=nn(t);let i=s.token,r;if(i&&!gr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(gr(c)?i=c:await Bp(t,void 0))}if(!e&&i&&gr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await nn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?lu.warn(c.message):lu.error(c),r=c}let l;return i?r?gr(i)?l={token:i.token,internalError:r}:l=jp(r):(l={token:i.token},s.token=i,await Bp(t,i)):l=jp(r),o&&p0(t,l),l}async function h0(n){const e=n.app;Gy(e);const{provider:t}=nn(e);{const{token:s}=await t.getToken();return{token:s}}}function d0(n,e,t,s){const{app:i}=n,r=nn(i),o={next:t,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&gr(r.token)){const l=r.token;Promise.resolve().then(()=>{t({token:l.token}),$p(n)}).catch(()=>{})}r.cachedTokenPromise.then(()=>$p(n))}function Qy(n,e){const t=nn(n),s=t.tokenObservers.filter(i=>i.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function $p(n){const{app:e}=n,t=nn(e);let s=t.tokenRefresher;s||(s=f0(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function f0(n){const{app:e}=n;return new e0(async()=>{const t=nn(e);let s;if(t.token?s=await cu(n,!0):s=await cu(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=nn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Up.RETRIAL_MIN_WAIT,Up.RETRIAL_MAX_WAIT)}function p0(n,e){const t=nn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function gr(n){return n.expireTimeMillis-Date.now()>0}function jp(n){return{token:u0(c0),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=nn(this.app);for(const t of e)Qy(this.app,t.next);return Promise.resolve()}}function m0(n,e){return new _0(n,e)}function g0(n){return{getToken:e=>cu(n,e),getLimitedUseToken:()=>h0(n),addTokenListener:e=>d0(n,"INTERNAL",e),removeTokenListener:e=>Qy(n.app,e)}}const y0="@firebase/app-check",v0="0.8.11",E0="app-check",Hp="app-check-internal";function T0(){gn(new tn(E0,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return m0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Hp).initialize()})),gn(new tn(Hp,n=>{const e=n.getProvider("app-check").getImmediate();return g0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Vt(y0,v0)}T0();const Yy=Symbol("firebaseApp");function Xy(n){return Vm()&&yi(Yy,null)||Jm(n)}const un=()=>{};function kh(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function I0(n,e,t){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,l)=>o&&o[l],n);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,t):r[i]=t}function Qs(n){return!!n&&typeof n=="object"}const w0=Object.prototype;function A0(n){return Qs(n)&&Object.getPrototypeOf(n)===w0}function Dh(n){return Qs(n)&&n.type==="document"}function C0(n){return Qs(n)&&n.type==="collection"}function b0(n){return Dh(n)||C0(n)}function R0(n){return Qs(n)&&n.type==="query"}function S0(n){return Qs(n)&&"ref"in n}function P0(n){return Qs(n)&&typeof n.bucket=="string"}function N0(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const k0=Symbol.for("v-scx");function D0(){return!!yi(k0,0)}var Wp={};const qp="@firebase/database",Kp="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jy="";function O0(n){Jy=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new x0(e)}}catch{}return new V0},Os=Zy("localStorage"),M0=Zy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new to("@firebase/database"),L0=function(){let n=1;return function(){return n++}}(),ev=function(n){const e=qw(n),t=new Bw;t.update(e);const s=t.digest();return sl.encodeByteArray(s)},uo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=uo.apply(null,s):typeof s=="object"?e+=nt(s):e+=s,e+=" "}return e};let Dr=null,zp=!0;const F0=function(n,e){K(!0,"Can't turn on custom loggers persistently."),Ii.logLevel=ue.VERBOSE,Dr=Ii.log.bind(Ii)},pt=function(...n){if(zp===!0&&(zp=!1,Dr===null&&M0.get("logging_enabled")===!0&&F0()),Dr){const e=uo.apply(null,n);Dr(e)}},ho=function(n){return function(...e){pt(n,...e)}},uu=function(...n){const e="FIREBASE INTERNAL ERROR: "+uo(...n);Ii.error(e)},js=function(...n){const e=`FIREBASE FATAL ERROR: ${uo(...n)}`;throw Ii.error(e),new Error(e)},Lt=function(...n){const e="FIREBASE WARNING: "+uo(...n);Ii.warn(e)},U0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},B0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Di="[MIN_NAME]",Hs="[MAX_NAME]",$i=function(n,e){if(n===e)return 0;if(n===Di||e===Hs)return-1;if(e===Di||n===Hs)return 1;{const t=Gp(n),s=Gp(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},$0=function(n,e){return n===e?0:n<e?-1:1},lr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+nt(e))},Oh=function(n){if(typeof n!="object"||n===null)return nt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=nt(e[s]),t+=":",t+=Oh(n[e[s]]);return t+="}",t},nv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function jt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sv=function(n){K(!tv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const d=u.join("");let p="";for(c=0;c<64;c+=8){let _=parseInt(d.substr(c,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},j0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},W0=new RegExp("^-?(0*)\\d{1,10}$"),q0=-2147483648,K0=2147483647,Gp=function(n){if(W0.test(n)){const e=Number(n);if(e>=q0&&e<=K0)return e}return null},fo=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Lt("Exception was thrown by user callback.",t),e},Math.floor(0))}},z0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Or=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Dn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="5",iv="v",rv="s",ov="r",av="f",lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cv="ls",uv="p",hu="ac",hv="websocket",dv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,s,i,r=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function X0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function fv(n,e,t){K(typeof e=="string","typeof type must == string"),K(typeof t=="object","typeof params must == object");let s;if(e===hv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);X0(n)&&(t.ns=n.namespace);const i=[];return jt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.counters_={}}incrementCounter(e,t=1){Bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return vw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={},_c={};function Vh(n){const e=n.toString();return pc[e]||(pc[e]=new J0),pc[e]}function Z0(n,e){const t=n.toString();return _c[t]||(_c[t]=e()),_c[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="start",tP="close",nP="pLPCommand",sP="pRTLPCB",pv="id",_v="pw",mv="ser",iP="cb",rP="seg",oP="ts",aP="d",lP="dframe",gv=1870,yv=30,cP=gv-yv,uP=25e3,hP=3e4;class hi{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=Vh(t),this.urlFn=c=>(this.appCheckToken&&(c[hu]=this.appCheckToken),fv(t,dv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new eP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hP)),B0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mh((...r)=>{const[o,l,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qp)this.id=l,this.password=c;else if(o===tP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Qp]="t",s[mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[iv]=xh,this.transportSessionId&&(s[rv]=this.transportSessionId),this.lastSessionId&&(s[cv]=this.lastSessionId),this.applicationId&&(s[uv]=this.applicationId),this.appCheckToken&&(s[hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(s[ov]=av);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!j0()&&!H0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hm(t),i=nv(s,cP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[lP]="t",s[pv]=e,s[_v]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=nt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Mh{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=L0(),window[nP+this.uniqueCallbackIdentifier]=e,window[sP+this.uniqueCallbackIdentifier]=t,this.myIFrame=Mh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pt("frame writing exception"),l.stack&&pt(l.stack),pt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pv]=this.myID,e[_v]=this.myPW,e[mv]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yv+s.length<=gv;){const o=this.pendingSegs.shift();s=s+"&"+rP+i+"="+o.seg+"&"+oP+i+"="+o.ts+"&"+aP+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(uP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=16384,fP=45e3;let Va=null;typeof MozWebSocket<"u"?Va=MozWebSocket:typeof WebSocket<"u"&&(Va=WebSocket);class zt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=Vh(t),this.connURL=zt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[iv]=xh,typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(o[ov]=av),t&&(o[rv]=t),s&&(o[cv]=s),i&&(o[hu]=i),r&&(o[uv]=r),fv(e,hv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Os.set("previous_websocket_failure",!0);try{let s;Dw(),this.mySock=new Va(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Va!==null&&!zt.forceDisallow_}static previouslyFailed(){return Os.isInMemoryStorage||Os.get("previous_websocket_failure")===!0}markConnectionHealthy(){Os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hr(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nv(t,dP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static get ALL_TRANSPORTS(){return[hi,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=zt&&zt.isAvailable();let s=t&&!zt.previouslyFailed();if(e.webSocketOnly&&(t||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[zt];else{const i=this.transports_=[];for(const r of Xr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Xr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=6e4,_P=5e3,mP=10*1024,gP=100*1024,mc="t",Yp="d",yP="s",Xp="r",vP="e",Jp="o",Zp="a",e_="n",t_="p",EP="h";class TP{constructor(e,t,s,i,r,o,l,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new Xr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mc in e){const t=e[mc];t===Zp?this.upgradeIfSecondaryHealthy_():t===Xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Jp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=lr("t",e),s=lr("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:t_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:e_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=lr("t",e),s=lr("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=lr(mc,e);if(Yp in e){const s=e[Yp];if(t===EP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===e_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===yP?this.onConnectionShutdown_(s):t===Xp?this.onReset_(s):t===vP?uu("Server Error: "+s):t===Jp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xh!==s&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_P))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:t_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){K(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Ev{static getInstance(){return new Ma}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=32,s_=768;class Ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Re(){return new Ve("")}function me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function fs(n){return n.pieces_.length-n.pieceNum_}function xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ve(n.pieces_,e)}function Tv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function IP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Iv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function wv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ve(e,0)}function Xe(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ve(t,0)}function fe(n){return n.pieceNum_>=n.pieces_.length}function Bt(n,e){const t=me(n),s=me(e);if(t===null)return e;if(t===s)return Bt(xe(n),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Av(n,e){if(fs(n)!==fs(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Gt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(fs(n)>fs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wP{constructor(e,t){this.errorPrefix_=t,this.parts_=Iv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=rl(this.parts_[s]);Cv(this)}}function AP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rl(e),Cv(n)}function CP(n){const e=n.parts_.pop();n.byteLength_-=rl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Cv(n){if(n.byteLength_>s_)throw new Error(n.errorPrefix_+"has a key path longer than "+s_+" bytes ("+n.byteLength_+").");if(n.parts_.length>n_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+n_+") or object contains a cycle "+Ns(n))}function Ns(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Ev{static getInstance(){return new Lh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=1e3,bP=60*5*1e3,i_=30*1e3,RP=1.3,SP=3e4,PP="server_kill",r_=3;class xn extends vv{constructor(e,t,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=xn.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cr,this.maxReconnectDelay_=bP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ma.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(nt(r)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new jr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;xn.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Bn(e,"w")){const s=Ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=i_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Fw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):uu("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SP&&(this.reconnectDelay_=cr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(p){K(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,l=new TP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,y=>{Lt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(PP)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Lt(p),c())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wf(this.interruptReasons_)&&(this.reconnectDelay_=cr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Oh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){pt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=r_&&(this.reconnectDelay_=i_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=r_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Jy.replace(/\./g,"-")]=1,Wu()?e["framework.cordova"]=1:Km()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ma.getInstance().currentlyOnline();return wf(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ge(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ge(Di,e),i=new ge(Di,t);return this.compare(s,i)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;class bv extends bl{static get __EMPTY_NODE(){return Ho}static set __EMPTY_NODE(e){Ho=e}compare(e,t){return $i(e.name,t.name)}isDefinedOn(e){throw xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Hs,Ho)}makePost(e,t){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Ho)}toString(){return".key"}}const wi=new bv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Qe.RED,this.left=i??Rt.EMPTY_NODE,this.right=r??Rt.EMPTY_NODE}copy(e,t,s,i,r){return new Qe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class NP{copy(e,t,s,i,r){return this}insert(e,t,s){return new Qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wo(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new NP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n,e){return $i(n.name,e.name)}function Fh(n,e){return $i(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;function DP(n){du=n}const Rv=function(n){return typeof n=="number"?"number:"+sv(n):"string:"+n},Sv=function(n){if(n.isLeafNode()){const e=n.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bn(e,".sv"),"Priority must be a string or number.")}else K(n===du||n.isEmpty(),"priority of unexpected type.");K(n===du||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o_;class ze{static set __childrenNodeConstructor(e){o_=e}static get __childrenNodeConstructor(){return o_}constructor(e,t=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:me(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=me(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sv(this.value_):e+=this.value_,this.lazyHash_=ev(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(t),r=ze.VALUE_TYPE_ORDER.indexOf(s);return K(i>=0,"Unknown leaf type: "+t),K(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pv,Nv;function OP(n){Pv=n}function xP(n){Nv=n}class VP extends bl{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?$i(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Hs,new ze("[PRIORITY-POST]",Nv))}makePost(e,t){const s=Pv(e);return new ge(t,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const gt=new VP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=Math.log(2);class LP{constructor(e){const t=r=>parseInt(Math.log(r)/MP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const La=function(n,e,t,s){n.sort(e);const i=function(c,u){const d=u-c;let p,_;if(d===0)return null;if(d===1)return p=n[c],_=t?t(p):p,new Qe(_,p.node,Qe.BLACK,null,null);{const y=parseInt(d/2,10)+c,I=i(c,y),P=i(y+1,u);return p=n[y],_=t?t(p):p,new Qe(_,p.node,Qe.BLACK,I,P)}},r=function(c){let u=null,d=null,p=n.length;const _=function(I,P){const N=p-I,$=p;p-=I;const z=i(N+1,$),B=n[N],M=t?t(B):B;y(new Qe(M,B.node,P,null,z))},y=function(I){u?(u.left=I,u=I):(d=I,u=I)};for(let I=0;I<c.count;++I){const P=c.nextBitIsOne(),N=Math.pow(2,c.count-(I+1));P?_(N,Qe.BLACK):(_(N,Qe.BLACK),_(N,Qe.RED))}return d},o=new LP(n.length),l=r(o);return new Rt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const si={};class On{static get Default(){return K(si&&gt,"ChildrenNode.ts has not been loaded"),gc=gc||new On({".priority":si},{".priority":gt}),gc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ci(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return Bn(this.indexSet_,e.toString())}addIndex(e,t){K(e!==wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ge.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=La(s,e.getCompare()):l=si;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=l,new On(d,u)}addToIndexes(e,t){const s=pa(this.indexes_,(i,r)=>{const o=Ci(this.indexSet_,r);if(K(o,"Missing index implementation for "+r),i===si)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(ge.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),La(l,o.getCompare())}else return si;else{const l=t.get(e.name);let c=i;return l&&(c=c.remove(new ge(e.name,l))),c.insert(e,e.node)}});return new On(s,this.indexSet_)}removeFromIndexes(e,t){const s=pa(this.indexes_,i=>{if(i===si)return i;{const r=t.get(e.name);return r?i.remove(new ge(e.name,r)):i}});return new On(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;class Ce{static get EMPTY_NODE(){return ur||(ur=new Ce(new Rt(Fh),null,On.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Sv(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ur}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ur:t}}getChild(e){const t=me(e);return t===null?this:this.getImmediateChild(t).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(K(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ge(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ur:this.priorityNode_;return new Ce(i,o,r)}}updateChild(e,t){const s=me(e);if(s===null)return t;{K(me(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(xe(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(gt,(o,l)=>{t[o]=l.val(e),s++,r&&Ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rv(this.getPriority().val())+":"),this.forEachChild(gt,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ev(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ge(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ge(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ge(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===wi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(gt),i=t.getIterator(gt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wi?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FP extends Ce{constructor(){super(new Rt(Fh),Ce.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const po=new FP;Object.defineProperties(ge,{MIN:{value:new ge(Di,Ce.EMPTY_NODE)},MAX:{value:new ge(Hs,po)}});bv.__EMPTY_NODE=Ce.EMPTY_NODE;ze.__childrenNodeConstructor=Ce;DP(po);xP(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=!0;function _t(n,e=null){if(n===null)return Ce.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ze(t,_t(e))}if(!(n instanceof Array)&&UP){const t=[];let s=!1;if(jt(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=_t(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new ge(o,c)))}}),t.length===0)return Ce.EMPTY_NODE;const r=La(t,kP,o=>o.name,Fh);if(s){const o=La(t,gt.getCompare());return new Ce(r,_t(e),new On({".priority":o},{".priority":gt}))}else return new Ce(r,_t(e),On.Default)}else{let t=Ce.EMPTY_NODE;return jt(n,(s,i)=>{if(Bn(n,s)&&s.substring(0,1)!=="."){const r=_t(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(_t(e))}}OP(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP extends bl{constructor(e){super(),this.indexPath_=e,K(!fe(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?$i(e.name,t.name):r}makePost(e,t){const s=_t(e),i=Ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new ge(t,i)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,po);return new ge(Hs,e)}toString(){return Iv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P extends bl{compare(e,t){const s=e.node.compareTo(t.node);return s===0?$i(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,t){const s=_t(e);return new ge(t,s)}toString(){return".value"}}const jP=new $P;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(n){return{type:"value",snapshotNode:n}}function WP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function a_(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function KP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Di}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new Uh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function l_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===gt?t="$priority":n.index_===jP?t="$value":n.index_===wi?t="$key":(K(n.index_ instanceof BP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=nt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=nt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+nt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=nt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+nt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function c_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==gt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends vv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ho("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fa.getListenId_(e,s),l={};this.listens_[o]=l;const c=l_(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let p=d;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,s),Ci(this.listens_,o)===l){let _;u?u===401?_="permission_denied":_="rest_error:"+u:_="ok",i(_,null)}})}unlisten(e,t){const s=Fa.getListenId_(e,t);delete this.listens_[s]}get(e){const t=l_(e._queryParams),s=e._path.toString(),i=new jr;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Hr(l.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){return{value:null,children:new Map}}function kv(n,e,t){if(fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=me(e);n.children.has(s)||n.children.set(s,Ua());const i=n.children.get(s);e=xe(e),kv(i,e,t)}}function fu(n,e,t){n.value!==null?t(e,n.value):GP(n,(s,i)=>{const r=new Ve(e.toString()+"/"+s);fu(i,r,t)})}function GP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&jt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=10*1e3,YP=30*1e3,XP=5*60*1e3;class JP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QP(e);const s=u_+(YP-u_)*Math.random();Or(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;jt(e,(i,r)=>{r>0&&Bn(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Or(this.reportStats_.bind(this),Math.floor(Math.random()*2*XP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function Dv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ov(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=Dv()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ve(e));return new Ba(Re(),t,this.revert)}}else return K(me(this.path)===e,"operationForChild called for unrelated child."),new Ba(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return fe(this.path)?new Ws(this.source,Re(),this.snap.getImmediateChild(e)):new Ws(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=hn.MERGE}operationForChild(e){if(fe(this.path)){const t=this.children.subtree(new Ve(e));return t.isEmpty()?null:t.value?new Ws(this.source,Re(),t.value):new Jr(this.source,Re(),t)}else return K(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jr(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZP(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(KP(o.childName,o.snapshotNode))}),hr(n,i,"child_removed",e,s,t),hr(n,i,"child_added",e,s,t),hr(n,i,"child_moved",r,s,t),hr(n,i,"child_changed",e,s,t),hr(n,i,"value",e,s,t),i}function hr(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,c)=>tN(n,l,c)),o.forEach(l=>{const c=eN(n,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function eN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tN(n,e,t){if(e.childName==null||t.childName==null)throw xi("Should only compare child_ events.");const s=new ge(e.childName,e.snapshotNode),i=new ge(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e){return{eventCache:n,serverCache:e}}function xr(n,e,t,s){return Vv(new Bh(e,t,s),n.serverCache)}function Mv(n,e,t,s){return Vv(n.eventCache,new Bh(e,t,s))}function pu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;const nN=()=>(yc||(yc=new Rt($0)),yc);class Oe{static fromObject(e){let t=new Oe(null);return jt(e,(s,i)=>{t=t.set(new Ve(s),i)}),t}constructor(e,t=nN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Re(),value:this.value};if(fe(e))return null;{const s=me(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(xe(e),t);return r!=null?{path:Xe(new Ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const t=me(e),s=this.children.get(t);return s!==null?s.subtree(xe(e)):new Oe(null)}}set(e,t){if(fe(e))return new Oe(t,this.children);{const s=me(e),r=(this.children.get(s)||new Oe(null)).set(xe(e),t),o=this.children.insert(s,r);return new Oe(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=me(e),s=this.children.get(t);if(s){const i=s.remove(xe(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Oe(null):new Oe(this.value,r)}else return this}}get(e){if(fe(e))return this.value;{const t=me(e),s=this.children.get(t);return s?s.get(xe(e)):null}}setTree(e,t){if(fe(e))return t;{const s=me(e),r=(this.children.get(s)||new Oe(null)).setTree(xe(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Oe(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Xe(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Re(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(fe(e))return null;{const r=me(e),o=this.children.get(r);return o?o.findOnPath_(xe(e),Xe(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Re(),t)}foreachOnPath_(e,t,s){if(fe(e))return this;{this.value&&s(t,this.value);const i=me(e),r=this.children.get(i);return r?r.foreachOnPath_(xe(e),Xe(t,i),s):new Oe(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Xe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Oe(null))}}function Vr(n,e,t){if(fe(e))return new Zt(new Oe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Bt(i,e);return r=r.updateChild(o,t),new Zt(n.writeTree_.set(i,r))}else{const i=new Oe(t),r=n.writeTree_.setTree(e,i);return new Zt(r)}}}function h_(n,e,t){let s=n;return jt(t,(i,r)=>{s=Vr(s,Xe(e,i),r)}),s}function d_(n,e){if(fe(e))return Zt.empty();{const t=n.writeTree_.setTree(e,new Oe(null));return new Zt(t)}}function _u(n,e){return Ys(n,e)!=null}function Ys(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Bt(t.path,e)):null}function f_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(gt,(s,i)=>{e.push(new ge(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ge(s,i.value))}),e}function is(n,e){if(fe(e))return n;{const t=Ys(n,e);return t!=null?new Zt(new Oe(t)):new Zt(n.writeTree_.subtree(e))}}function mu(n){return n.writeTree_.isEmpty()}function Oi(n,e){return Lv(Re(),n.writeTree_,e)}function Lv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(K(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Lv(Xe(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Xe(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n,e){return Hv(e,n)}function sN(n,e,t,s,i){K(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Vr(n.visibleWrites,e,t)),n.lastWriteId=s}function iN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function rN(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);K(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&oN(l,s.path)?i=!1:Gt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return aN(n),!0;if(s.snap)n.visibleWrites=d_(n.visibleWrites,s.path);else{const l=s.children;jt(l,c=>{n.visibleWrites=d_(n.visibleWrites,Xe(s.path,c))})}return!0}else return!1}function oN(n,e){if(n.snap)return Gt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Gt(Xe(n.path,t),e))return!0;return!1}function aN(n){n.visibleWrites=Uv(n.allWrites,lN,Re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function lN(n){return n.visible}function Uv(n,e,t){let s=Zt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Gt(t,o)?(l=Bt(t,o),s=Vr(s,l,r.snap)):Gt(o,t)&&(l=Bt(o,t),s=Vr(s,Re(),r.snap.getChild(l)));else if(r.children){if(Gt(t,o))l=Bt(t,o),s=h_(s,l,r.children);else if(Gt(o,t))if(l=Bt(o,t),fe(l))s=h_(s,Re(),r.children);else{const c=Ci(r.children,me(l));if(c){const u=c.getChild(xe(l));s=Vr(s,Re(),u)}}}else throw xi("WriteRecord should have .snap or .children")}}return s}function Bv(n,e,t,s,i){if(!s&&!i){const r=Ys(n.visibleWrites,e);if(r!=null)return r;{const o=is(n.visibleWrites,e);if(mu(o))return t;if(t==null&&!_u(o,Re()))return null;{const l=t||Ce.EMPTY_NODE;return Oi(o,l)}}}else{const r=is(n.visibleWrites,e);if(!i&&mu(r))return t;if(!i&&t==null&&!_u(r,Re()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Gt(u.path,e)||Gt(e,u.path))},l=Uv(n.allWrites,o,e),c=t||Ce.EMPTY_NODE;return Oi(l,c)}}}function cN(n,e,t){let s=Ce.EMPTY_NODE;const i=Ys(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=is(n.visibleWrites,e);return t.forEachChild(gt,(o,l)=>{const c=Oi(is(r,new Ve(o)),l);s=s.updateImmediateChild(o,c)}),f_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=is(n.visibleWrites,e);return f_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function uN(n,e,t,s,i){K(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Xe(e,t);if(_u(n.visibleWrites,r))return null;{const o=is(n.visibleWrites,r);return mu(o)?i.getChild(t):Oi(o,i.getChild(t))}}function hN(n,e,t,s){const i=Xe(e,t),r=Ys(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=is(n.visibleWrites,i);return Oi(o,s.getNode().getImmediateChild(t))}else return null}function dN(n,e){return Ys(n.visibleWrites,e)}function fN(n,e,t,s,i,r,o){let l;const c=is(n.visibleWrites,e),u=Ys(c,Re());if(u!=null)l=u;else if(t!=null)l=Oi(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),_=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let y=_.getNext();for(;y&&d.length<i;)p(y,s)!==0&&d.push(y),y=_.getNext();return d}else return[]}function pN(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function gu(n,e,t,s){return Bv(n.writeTree,n.treePath,e,t,s)}function $v(n,e){return cN(n.writeTree,n.treePath,e)}function p_(n,e,t,s){return uN(n.writeTree,n.treePath,e,t,s)}function $a(n,e){return dN(n.writeTree,Xe(n.treePath,e))}function _N(n,e,t,s,i,r){return fN(n.writeTree,n.treePath,e,t,s,i,r)}function $h(n,e,t){return hN(n.writeTree,n.treePath,e,t)}function jv(n,e){return Hv(Xe(n.treePath,e),n.writeTree)}function Hv(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;K(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,a_(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,qP(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,WP(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,a_(s,e.snapshotNode,i.oldSnap));else throw xi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Wv=new gN;class jh{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $h(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qs(this.viewCache_),r=_N(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function yN(n,e){K(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vN(n,e,t,s,i){const r=new mN;let o,l;if(t.type===hn.OVERWRITE){const u=t;u.source.fromUser?o=yu(n,e,u.path,u.snap,s,i,r):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!fe(u.path),o=ja(n,e,u.path,u.snap,s,i,l,r))}else if(t.type===hn.MERGE){const u=t;u.source.fromUser?o=TN(n,e,u.path,u.children,s,i,r):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=vu(n,e,u.path,u.children,s,i,l,r))}else if(t.type===hn.ACK_USER_WRITE){const u=t;u.revert?o=AN(n,e,u.path,s,i,r):o=IN(n,e,u.path,u.affectedTree,s,i,r)}else if(t.type===hn.LISTEN_COMPLETE)o=wN(n,e,t.path,s,r);else throw xi("Unknown operation type: "+t.type);const c=r.getChanges();return EN(e,o,c),{viewCache:o,changes:c}}function EN(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=pu(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(HP(pu(e)))}}function qv(n,e,t,s,i,r){const o=e.eventCache;if($a(s,t)!=null)return e;{let l,c;if(fe(t))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qs(e),d=u instanceof Ce?u:Ce.EMPTY_NODE,p=$v(s,d);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=gu(s,qs(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=me(t);if(u===".priority"){K(fs(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const p=p_(s,t,d,c);p!=null?l=n.filter.updatePriority(d,p):l=o.getNode()}else{const d=xe(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const _=p_(s,t,o.getNode(),c);_!=null?p=o.getNode().getImmediateChild(u).updateChild(d,_):p=o.getNode().getImmediateChild(u)}else p=$h(s,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,d,i,r):l=o.getNode()}}return xr(e,l,o.isFullyInitialized()||fe(t),n.filter.filtersNodes())}}function ja(n,e,t,s,i,r,o,l){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(fe(t))u=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(t,s);u=d.updateFullNode(c.getNode(),y,null)}else{const y=me(t);if(!c.isCompleteForPath(t)&&fs(t)>1)return e;const I=xe(t),N=c.getNode().getImmediateChild(y).updateChild(I,s);y===".priority"?u=d.updatePriority(c.getNode(),N):u=d.updateChild(c.getNode(),y,N,I,Wv,null)}const p=Mv(e,u,c.isFullyInitialized()||fe(t),d.filtersNodes()),_=new jh(i,p,r);return qv(n,p,t,i,_,l)}function yu(n,e,t,s,i,r,o){const l=e.eventCache;let c,u;const d=new jh(i,e,r);if(fe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=xr(e,u,!0,n.filter.filtersNodes());else{const p=me(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=xr(e,u,l.isFullyInitialized(),l.isFiltered());else{const _=xe(t),y=l.getNode().getImmediateChild(p);let I;if(fe(_))I=s;else{const P=d.getCompleteChild(p);P!=null?Tv(_)===".priority"&&P.getChild(wv(_)).isEmpty()?I=P:I=P.updateChild(_,s):I=Ce.EMPTY_NODE}if(y.equals(I))c=e;else{const P=n.filter.updateChild(l.getNode(),p,I,_,d,o);c=xr(e,P,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function __(n,e){return n.eventCache.isCompleteForChild(e)}function TN(n,e,t,s,i,r,o){let l=e;return s.foreach((c,u)=>{const d=Xe(t,c);__(e,me(d))&&(l=yu(n,l,d,u,i,r,o))}),s.foreach((c,u)=>{const d=Xe(t,c);__(e,me(d))||(l=yu(n,l,d,u,i,r,o))}),l}function m_(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function vu(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;fe(t)?u=s:u=new Oe(null).setTree(t,s);const d=e.serverCache.getNode();return u.children.inorderTraversal((p,_)=>{if(d.hasChild(p)){const y=e.serverCache.getNode().getImmediateChild(p),I=m_(n,y,_);c=ja(n,c,new Ve(p),I,i,r,o,l)}}),u.children.inorderTraversal((p,_)=>{const y=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!d.hasChild(p)&&!y){const I=e.serverCache.getNode().getImmediateChild(p),P=m_(n,I,_);c=ja(n,c,new Ve(p),P,i,r,o,l)}}),c}function IN(n,e,t,s,i,r,o){if($a(i,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(fe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ja(n,e,t,c.getNode().getChild(t),i,r,l,o);if(fe(t)){let u=new Oe(null);return c.getNode().forEachChild(wi,(d,p)=>{u=u.set(new Ve(d),p)}),vu(n,e,t,u,i,r,l,o)}else return e}else{let u=new Oe(null);return s.foreach((d,p)=>{const _=Xe(t,d);c.isCompleteForPath(_)&&(u=u.set(d,c.getNode().getChild(_)))}),vu(n,e,t,u,i,r,l,o)}}function wN(n,e,t,s,i){const r=e.serverCache,o=Mv(e,r.getNode(),r.isFullyInitialized()||fe(t),r.isFiltered());return qv(n,o,t,s,Wv,i)}function AN(n,e,t,s,i,r){let o;if($a(s,t)!=null)return e;{const l=new jh(s,e,i),c=e.eventCache.getNode();let u;if(fe(t)||me(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gu(s,qs(e));else{const p=e.serverCache.getNode();K(p instanceof Ce,"serverChildren would be complete if leaf node"),d=$v(s,p)}d=d,u=n.filter.updateFullNode(c,d,r)}else{const d=me(t);let p=$h(s,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=c.getImmediateChild(d)),p!=null?u=n.filter.updateChild(c,d,p,xe(t),l,r):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,Ce.EMPTY_NODE,xe(t),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gu(s,qs(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||$a(s,Re())!=null,xr(e,u,o,n.filter.filtersNodes())}}function CN(n,e){const t=qs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!fe(e)&&!t.getImmediateChild(me(e)).isEmpty())?t.getChild(e):null}function g_(n,e,t,s){e.type===hn.MERGE&&e.source.queryId!==null&&(K(qs(n.viewCache_),"We should always have a full cache before handling merges"),K(pu(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=vN(n.processor_,i,e,t,s);return yN(n.processor_,r.viewCache),K(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,bN(n,r.changes,r.viewCache.eventCache.getNode())}function bN(n,e,t,s){const i=n.eventRegistrations_;return ZP(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y_;function RN(n){K(!y_,"__referenceConstructor has already been defined"),y_=n}function Hh(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return K(r!=null,"SyncTree gave us an op for an invalid query."),g_(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(g_(o,e,t,s));return r}}function Wh(n,e){let t=null;for(const s of n.views.values())t=t||CN(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_;function SN(n){K(!v_,"__referenceConstructor has already been defined"),v_=n}class E_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=pN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PN(n,e,t,s,i){return sN(n.pendingWriteTree_,e,t,s,i),i?Sl(n,new Ws(Dv(),e,t)):[]}function di(n,e,t=!1){const s=iN(n.pendingWriteTree_,e);if(rN(n.pendingWriteTree_,e)){let r=new Oe(null);return s.snap!=null?r=r.set(Re(),!0):jt(s.children,o=>{r=r.set(new Ve(o),!0)}),Sl(n,new Ba(s.path,r,t))}else return[]}function Rl(n,e,t){return Sl(n,new Ws(Ov(),e,t))}function NN(n,e,t){const s=Oe.fromObject(t);return Sl(n,new Jr(Ov(),e,s))}function kN(n,e,t,s){const i=Qv(n,s);if(i!=null){const r=Yv(i),o=r.path,l=r.queryId,c=Bt(o,e),u=new Ws(xv(l),c,t);return Xv(n,o,u)}else return[]}function DN(n,e,t,s){const i=Qv(n,s);if(i){const r=Yv(i),o=r.path,l=r.queryId,c=Bt(o,e),u=Oe.fromObject(t),d=new Jr(xv(l),c,u);return Xv(n,o,d)}else return[]}function Kv(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Bt(o,e),u=Wh(l,c);if(u)return u});return Bv(i,e,r,t,!0)}function Sl(n,e){return zv(e,n.syncPointTree_,null,Fv(n.pendingWriteTree_,Re()))}function zv(n,e,t,s){if(fe(n.path))return Gv(n,e,t,s);{const i=e.get(Re());t==null&&i!=null&&(t=Wh(i,Re()));let r=[];const o=me(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,d=jv(s,o);r=r.concat(zv(l,c,u,d))}return i&&(r=r.concat(Hh(i,n,s,t))),r}}function Gv(n,e,t,s){const i=e.get(Re());t==null&&i!=null&&(t=Wh(i,Re()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=jv(s,o),d=n.operationForChild(o);d&&(r=r.concat(Gv(d,l,c,u)))}),i&&(r=r.concat(Hh(i,n,s,t))),r}function Qv(n,e){return n.tagToQueryMap.get(e)}function Yv(n){const e=n.indexOf("$");return K(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ve(n.substr(0,e))}}function Xv(n,e,t){const s=n.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const i=Fv(n.pendingWriteTree_,e);return Hh(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qh(t)}node(){return this.node_}}class Kh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xe(this.path_,e);return new Kh(this.syncTree_,t)}node(){return Kv(this.syncTree_,this.path_)}}const ON=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},T_=function(n,e,t){if(!n||typeof n!="object")return n;if(K(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return VN(n[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:K(!1,"Unexpected server value: "+n)}},VN=function(n,e,t){n.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},MN=function(n,e,t,s){return zh(e,new Kh(t,n),s)},LN=function(n,e,t){return zh(n,new qh(e),t)};function zh(n,e,t){const s=n.getPriority().val(),i=T_(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=T_(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new ze(l,_t(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ze(i))),o.forEachChild(gt,(l,c)=>{const u=zh(c,e.getImmediateChild(l),t);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qh(n,e){let t=e instanceof Ve?e:new Ve(e),s=n,i=me(t);for(;i!==null;){const r=Ci(s.node.children,i)||{children:{},childCount:0};s=new Gh(i,s,r),t=xe(t),i=me(t)}return s}function ji(n){return n.node.value}function Jv(n,e){n.node.value=e,Eu(n)}function Zv(n){return n.node.childCount>0}function FN(n){return ji(n)===void 0&&!Zv(n)}function Pl(n,e){jt(n.node.children,(t,s)=>{e(new Gh(t,n,s))})}function eE(n,e,t,s){t&&e(n),Pl(n,i=>{eE(i,e,!0)})}function UN(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _o(n){return new Ve(n.parent===null?n.name:_o(n.parent)+"/"+n.name)}function Eu(n){n.parent!==null&&BN(n.parent,n.name,n)}function BN(n,e,t){const s=FN(t),i=Bn(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Eu(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Eu(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/[\[\].#$\/\u0000-\u001F\u007F]/,jN=/[\[\].#$\u0000-\u001F\u007F]/,vc=10*1024*1024,tE=function(n){return typeof n=="string"&&n.length!==0&&!$N.test(n)},HN=function(n){return typeof n=="string"&&n.length!==0&&!jN.test(n)},WN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),HN(n)},nE=function(n,e,t){const s=t instanceof Ve?new wP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ns(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ns(s)+" with contents = "+e.toString());if(tv(e))throw new Error(n+"contains "+e.toString()+" "+Ns(s));if(typeof e=="string"&&e.length>vc/3&&rl(e)>vc)throw new Error(n+"contains a string greater than "+vc+" utf8 bytes "+Ns(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(jt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!tE(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ns(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AP(s,o),nE(n,l,s),CP(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ns(s)+" in addition to actual children.")}},qN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!WN(t))throw new Error(Ww(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zN(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Av(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Xs(n,e,t){zN(n,t),GN(n,s=>Gt(s,e)||Gt(e,s))}function GN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(QN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function QN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Dr&&pt("event: "+t.toString()),fo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="repo_interrupt",XN=25;class JN{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ua(),this.transactionQueueTree_=new Gh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZN(n,e,t){if(n.stats_=Vh(n.repoInfo_),n.forceRestClient_||z0())n.server_=new Fa(n.repoInfo_,(s,i,r,o)=>{I_(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>w_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new xn(n.repoInfo_,e,(s,i,r,o)=>{I_(n,s,i,r,o)},s=>{w_(n,s)},s=>{tk(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Z0(n.repoInfo_,()=>new JP(n.stats_,n.server_)),n.infoData_=new zP,n.infoSyncTree_=new E_({startListening:(s,i,r,o)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=Rl(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yh(n,"connected",!1),n.serverSyncTree_=new E_({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);Xs(n.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ek(n){const t=n.infoData_.getNode(new Ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sE(n){return ON({timestamp:ek(n)})}function I_(n,e,t,s,i){n.dataUpdateCount++;const r=new Ve(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=pa(t,u=>_t(u));o=DN(n.serverSyncTree_,r,c,i)}else{const c=_t(t);o=kN(n.serverSyncTree_,r,c,i)}else if(s){const c=pa(t,u=>_t(u));o=NN(n.serverSyncTree_,r,c)}else{const c=_t(t);o=Rl(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Jh(n,r)),Xs(n.eventQueue_,l,o)}function w_(n,e){Yh(n,"connected",e),e===!1&&sk(n)}function tk(n,e){jt(e,(t,s)=>{Yh(n,t,s)})}function Yh(n,e,t){const s=new Ve("/.info/"+e),i=_t(t);n.infoData_.updateSnapshot(s,i);const r=Rl(n.infoSyncTree_,s,i);Xs(n.eventQueue_,s,r)}function nk(n){return n.nextWriteId_++}function sk(n){iE(n,"onDisconnectEvents");const e=sE(n),t=Ua();fu(n.onDisconnect_,Re(),(i,r)=>{const o=MN(i,r,n.serverSyncTree_,e);kv(t,i,o)});let s=[];fu(t,Re(),(i,r)=>{s=s.concat(Rl(n.serverSyncTree_,i,r));const o=ak(n,i);Jh(n,o)}),n.onDisconnect_=Ua(),Xs(n.eventQueue_,Re(),s)}function ik(n){n.persistentConnection_&&n.persistentConnection_.interrupt(YN)}function iE(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pt(t,...e)}function rE(n,e,t){return Kv(n.serverSyncTree_,e,t)||Ce.EMPTY_NODE}function Xh(n,e=n.transactionQueueTree_){if(e||Nl(n,e),ji(e)){const t=aE(n,e);K(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&rk(n,_o(e),t)}else Zv(e)&&Pl(e,t=>{Xh(n,t)})}function rk(n,e,t){const s=t.map(u=>u.currentWriteId),i=rE(n,e,s);let r=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];K(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Bt(e,d.path);r=r.updateChild(p,d.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,u=>{iE(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const p=[];for(let _=0;_<t.length;_++)t[_].status=2,d=d.concat(di(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&p.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Nl(n,Qh(n.transactionQueueTree_,e)),Xh(n,n.transactionQueueTree_),Xs(n.eventQueue_,e,d);for(let _=0;_<p.length;_++)fo(p[_])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Lt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Jh(n,e)}},o)}function Jh(n,e){const t=oE(n,e),s=_o(t),i=aE(n,t);return ok(n,i,s),s}function ok(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Bt(t,c.path);let d=!1,p;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,p=c.abortReason,i=i.concat(di(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=XN)d=!0,p="maxretry",i=i.concat(di(n.serverSyncTree_,c.currentWriteId,!0));else{const _=rE(n,c.path,o);c.currentInputSnapshot=_;const y=e[l].update(_.val());if(y!==void 0){nE("transaction failed: Data returned ",y,c.path);let I=_t(y);typeof y=="object"&&y!=null&&Bn(y,".priority")||(I=I.updatePriority(_.getPriority()));const N=c.currentWriteId,$=sE(n),z=LN(I,_,$);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=z,c.currentWriteId=nk(n),o.splice(o.indexOf(N),1),i=i.concat(PN(n.serverSyncTree_,c.path,z,c.currentWriteId,c.applyLocally)),i=i.concat(di(n.serverSyncTree_,N,!0))}else d=!0,p="nodata",i=i.concat(di(n.serverSyncTree_,c.currentWriteId,!0))}Xs(n.eventQueue_,t,i),i=[],d&&(e[l].status=2,function(_){setTimeout(_,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Nl(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)fo(s[l]);Xh(n,n.transactionQueueTree_)}function oE(n,e){let t,s=n.transactionQueueTree_;for(t=me(e);t!==null&&ji(s)===void 0;)s=Qh(s,t),e=xe(e),t=me(e);return s}function aE(n,e){const t=[];return lE(n,e,t),t.sort((s,i)=>s.order-i.order),t}function lE(n,e,t){const s=ji(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Pl(e,i=>{lE(n,i,t)})}function Nl(n,e){const t=ji(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Jv(e,t.length>0?t:void 0)}Pl(e,s=>{Nl(n,s)})}function ak(n,e){const t=_o(oE(n,e)),s=Qh(n.transactionQueueTree_,e);return UN(s,i=>{Ec(n,i)}),Ec(n,s),eE(s,i=>{Ec(n,i)}),t}function Ec(n,e){const t=ji(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(K(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(K(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(di(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Jv(e,void 0):t.length=r+1,Xs(n.eventQueue_,_o(e),i);for(let o=0;o<s.length;o++)fo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ck(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Lt(`Invalid query segment '${t}' in query '${n}'`)}return e}const A_=function(n,e){const t=uk(n),s=t.namespace;t.domain==="firebase.com"&&js(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||U0();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Y0(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ve(t.pathString)}},uk=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(d,p)),d<p&&(i=lk(n.substring(d,p)));const _=ck(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),r=s}"ns"in _&&(r=_.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return fe(this._path)?null:Tv(this._path)}get ref(){return new Hi(this._repo,this._path)}get _queryIdentifier(){const e=c_(this._queryParams),t=Oh(e);return t==="{}"?"default":t}get _queryObject(){return c_(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof Zh))return!1;const t=this._repo===e._repo,s=Av(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IP(this._path)}}class Hi extends Zh{constructor(e,t){super(e,t,new Uh,!1)}get parent(){const e=wv(this._path);return e===null?null:new Hi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}RN(Hi);SN(Hi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="FIREBASE_DATABASE_EMULATOR_HOST",Tu={};let dk=!1;function fk(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=A_(r,i),l=o.repoInfo,c;typeof process<"u"&&Wp&&(c=Wp[hk]),c?(r=`http://${c}?ns=${l.namespace}`,o=A_(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new Q0(n.name,n.options,e);qN("Invalid Firebase Database URL",o),fe(o.path)||js("Database URL must point to the root of a Firebase Database (not including a child path).");const d=_k(l,n,u,new G0(n,t));return new mk(d,n)}function pk(n,e){const t=Tu[e];(!t||t[n.key]!==n)&&js(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ik(n),delete t[n.key]}function _k(n,e,t,s){let i=Tu[e.name];i||(i={},Tu[e.name]=i);let r=i[n.toURLString()];return r&&js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new JN(n,dk,t,s),i[n.toURLString()]=r,r}class mk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hi(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&js("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(n){O0(Mi),gn(new tn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fk(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Vt(qp,Kp,n),Vt(qp,Kp,"esm2017")}xn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebasestorage.googleapis.com",yk="storageBucket",vk=2*60*1e3,Ek=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Un{constructor(e,t,s=0){super(Tc(e),`Firebase Storage: ${t} (${Tc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var En;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(En||(En={}));function Tc(n){return"storage/"+n}function Tk(){const n="An unknown error occurred, please check the error payload for server response.";return new Tn(En.UNKNOWN,n)}function Ik(){return new Tn(En.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wk(){return new Tn(En.CANCELED,"User canceled the upload/download.")}function Ak(n){return new Tn(En.INVALID_URL,"Invalid URL '"+n+"'.")}function Ck(n){return new Tn(En.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function C_(n){return new Tn(En.INVALID_ARGUMENT,n)}function uE(){return new Tn(En.APP_DELETED,"The Firebase app was deleted.")}function bk(n){return new Tn(En.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Qt.makeFromUrl(e,t)}catch{return new Qt(e,"")}if(s.path==="")return s;throw Ck(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${i}/o${_}`,"i"),I={bucket:1,path:3},P=t===cE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",$=new RegExp(`^https?://${P}/${i}/${N}`,"i"),B=[{regex:l,indices:c,postModify:r},{regex:y,indices:I,postModify:u},{regex:$,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<B.length;M++){const ie=B[M],ae=ie.regex.exec(e);if(ae){const w=ae[ie.indices.bucket];let g=ae[ie.indices.path];g||(g=""),s=new Qt(w,g),ie.postModify(s);break}}if(s==null)throw Ak(e);return s}}class Rk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n,e,t){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...N){u||(u=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,n(y,c())},N)}function _(){r&&clearTimeout(r)}function y(N,...$){if(u){_();return}if(N){_(),d.call(null,N,...$);return}if(c()||o){_(),d.call(null,N,...$);return}s<64&&(s*=2);let B;l===1?(l=2,B=0):B=(s+Math.random())*1e3,p(B)}let I=!1;function P(N){I||(I=!0,_(),!u&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function Pk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n){return n!==void 0}function b_(n,e,t,s){if(s<e)throw C_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw C_(`Invalid value for '${n}'. Expected ${t} or less.`)}function kk(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Ha;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ha||(Ha={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,t,s,i,r,o,l,c,u,d,p,_=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,I)=>{this.resolve_=y,this.reject_=I,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new qo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Ha.NO_ERROR,c=r.getStatus();if(!l||Dk(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===Ha.ABORT;s(!1,new qo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new qo(u,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Nk(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=Tk();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?uE():wk();o(c)}else{const c=Ik();o(c)}};this.canceled_?t(!1,new qo(!1,null,!0)):this.backoffId_=Sk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Pk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function xk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Vk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Mk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Lk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Fk(n,e,t,s,i,r,o=!0){const l=kk(n.urlParams),c=n.url+l,u=Object.assign({},n.headers);return Mk(u,e),xk(u,t),Vk(u,r),Lk(u,s),new Ok(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Bk(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this._service=e,t instanceof Qt?this._location=t:this._location=Qt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wa(e,t)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bk(this._location.path)}get storage(){return this._service}get parent(){const e=Uk(this._location.path);if(e===null)return null;const t=new Qt(this._location.bucket,e);return new Wa(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bk(e)}}function R_(n,e){const t=e==null?void 0:e[yk];return t==null?null:Qt.makeFromBucketSpec(t,n)}class $k{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=cE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vk,this._maxUploadRetryTime=Ek,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=R_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=R_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){b_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){b_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wa(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new Rk(uE());{const o=Fk(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const S_="@firebase/storage",P_="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="storage";function Hk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new $k(t,s,i,e,Mi)}function Wk(){gn(new tn(jk,Hk,"PUBLIC").setMultipleInstances(!0)),Vt(S_,P_,""),Vt(S_,P_,"esm2017")}Wk();const Ic=new WeakMap;function hE(n,e){return Ic.has(e)||Ic.set(e,{f:{},r:{},s:{},u:{}}),Ic.get(e)}function qk(n,e,t,s){if(!n)return t;const[i,r]=dE(n);if(!i)return t;const o=hE(void 0,s)[i]||{},l=e||r;return l&&l in o?o[l]:t}function Kk(n,e,t,s){if(!n)return;const[i,r]=dE(n);if(!i)return;const o=hE(void 0,s)[i],l=e||r;if(l)return t.then(c=>{o[l]=c}).catch(un),l}function dE(n){return b0(n)||R0(n)?["f",n.path]:S0(n)?["r",n.toString()]:P0(n)?["s",n.toString()]:[]}const wc=new WeakMap;function zk(n,e,t){const s=Xy();wc.has(s)||wc.set(s,new Map);const i=wc.get(s),r=Kk(e,t,n,s);return r&&i.set(r,n),r?()=>i.delete(r):un}const Gk={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Iu(n,e,t,s){if(!A0(n))return[n,{}];const i=[{},{}],r=Object.keys(t).reduce((l,c)=>{const u=t[c];return l[u.path]=u.data(),l},{});function o(l,c,u,d){c=c||{};const[p,_]=d;Object.getOwnPropertyNames(l).forEach(y=>{const I=Object.getOwnPropertyDescriptor(l,y);I&&!I.enumerable&&Object.defineProperty(p,y,I)});for(const y in l){const I=l[y];if(I==null||I instanceof Date||I instanceof Be||I instanceof Tl)p[y]=I;else if(Dh(I)){const P=u+y;p[y]=P in t?c[y]:I.path,_[P]=I.converter?I:I.withConverter(s.converter)}else if(Array.isArray(I)){p[y]=Array(I.length);for(let P=0;P<I.length;P++){const N=I[P];N&&N.path in r&&(p[y][P]=r[N.path])}o(I,c[y]||p[y],u+y+".",[p[y],_])}else Qs(I)?(p[y]={},o(I,c[y],u+y+".",[p[y],_])):p[y]=I}}return o(n,e,"",i),i}const ed={reset:!1,wait:!0,maxRefDepth:2,converter:Gk,snapshotOptions:{serverTimestamps:"estimate"}};function qa(n){for(const e in n)n[e].unsub()}function wu(n,e,t,s,i,r,o,l,c){const[u,d]=Iu(s.data(n.snapshotOptions),kh(e,t),i,n);r.set(e,t,u),Au(n,e,t,i,d,r,o,l,c)}function Qk({ref:n,target:e,path:t,depth:s,resolve:i,reject:r,ops:o},l){const c=Object.create(null);let u=un;return l.once?Ny(n).then(d=>{d.exists()?wu(l,e,t,d,c,o,s,i,r):(o.set(e,t,null),i())}).catch(r):u=Ph(n,d=>{d.exists()?wu(l,e,t,d,c,o,s,i,r):(o.set(e,t,null),i())},r),()=>{u(),qa(c)}}function Au(n,e,t,s,i,r,o,l,c){const u=Object.keys(i);if(Object.keys(s).filter(P=>u.indexOf(P)<0).forEach(P=>{s[P].unsub(),delete s[P]}),!u.length||++o>n.maxRefDepth)return l(t);let p=0;const _=u.length,y=Object.create(null);function I(P){P in y&&++p>=_&&l(t)}u.forEach(P=>{const N=s[P],$=i[P],z=`${t}.${P}`;if(y[z]=!0,N)if(N.path!==$.path)N.unsub();else return;s[P]={data:()=>kh(e,z),unsub:Qk({ref:$,target:e,path:z,depth:o,ops:r,resolve:I.bind(null,z),reject:c},n),path:$.path}})}function Yk(n,e,t,s,i,r){const o=Object.assign({},ed,r),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:d}=o,p="value";let _=Kt(u?[]:n.value);u||t.set(n,p,[]);const y=s;let I,P=un;const N=[],$={added:({newIndex:B,doc:M})=>{N.splice(B,0,Object.create(null));const ie=N[B],[ae,w]=Iu(M.data(c),void 0,ie,o);t.add(Sn(_),B,ae),Au(o,_,`${p}.${B}`,ie,w,t,0,s.bind(null,M),i)},modified:({oldIndex:B,newIndex:M,doc:ie})=>{const ae=Sn(_),w=N[B],g=ae[B],[v,A]=Iu(ie.data(c),g,w,o);N.splice(M,0,w),t.remove(ae,B),t.add(ae,M,v),Au(o,_,`${p}.${M}`,w,A,t,0,s,i)},removed:({oldIndex:B})=>{const M=Sn(_);t.remove(M,B),qa(N.splice(B,1)[0])}};function z(B){const M=B.docChanges(l);if(!I&&M.length){I=!0;let ie=0;const ae=M.length,w=Object.create(null);for(let g=0;g<ae;g++)w[M[g].doc.id]=!0;s=g=>{g&&g.id in w&&++ie>=ae&&(u&&(t.set(n,p,Sn(_)),_=n),y(Sn(_)),s=un)}}M.forEach(ie=>{$[ie.type](ie)}),M.length||(u&&(t.set(n,p,Sn(_)),_=n),s(Sn(_)))}return d?hS(e).then(z).catch(i):P=Ph(e,z,i),B=>{if(P(),B){const M=typeof B=="function"?B():[];t.set(n,p,M)}N.forEach(qa)}}function Xk(n,e,t,s,i,r){const o=Object.assign({},ed,r),l="value",c=Object.create(null);s=N0(s,()=>kh(n,l));let u=un;function d(p){p.exists()?wu(o,n,l,p,c,t,0,s,i):(t.set(n,l,null),s(null))}return o.once?Ny(e).then(d).catch(i):u=Ph(e,d,i),p=>{if(u(),p){const _=typeof p=="function"?p():null;t.set(n,l,_)}qa(c)}}const N_=Symbol();function Jk(n,e){let t=un;const s=Object.assign({},ed,e),i=Sn(n),r=s.target||Kt();D0()&&(s.once=!0);const o=qk(i,s.ssrKey,N_,Xy()),l=o!==N_;l&&(r.value=o);let c=!l;const u=Kt(!1),d=Kt(),p=mT(),_=B_();let y=un;function I(){let $=Sn(n);const z=new Promise((B,M)=>{if(t(s.reset),!$)return t=un,B(null);u.value=c,c=!0,$.converter||($=$.withConverter(s.converter)),t=(Dh($)?Xk:Yk)(r,$,Zk,B,M,s)}).catch(B=>(p.value===z&&(d.value=B),Promise.reject(B))).finally(()=>{p.value===z&&(u.value=!1)});p.value=z}let P=un;(it(n)||typeof n=="function")&&(P=wr(n,I)),I(),i&&(y=zk(p.value,i,s.ssrKey)),Vm()&&fm(()=>p.value),_&&QE(N);function N($=s.reset){P(),y(),t($)}return Object.defineProperties(r,{error:{get:()=>d},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>p},stop:{get:()=>N}})}const Zk={set:(n,e,t)=>I0(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function eD(n,e){return Jk(n,{target:Kt([]),...e})}function tD(n,{firebaseApp:e,modules:t=[]}){n.provide(Yy,e);for(const s of t)s(e,n)}const nD={class:"container theme-light"},sD={class:"add-todo"},iD=["disabled"],rD={class:"radios mb-5"},oD=Ja({__name:"App",setup(n){const e=eD(ar),t=Kt(!1),s=Kt({id:"",content:"",description:"",createdAt:"",done:!1}),i=Kt(""),r=Kt(on.All),o=Kt(e.value);uI(()=>{o.value=e.value.filter(y=>r.value===on.Done?y.done:r.value===on.Undone?!y.done:!0)});const l=async()=>{try{await fS(ar,{content:i.value,description:"",createdAt:new Date().toDateString(),done:!1}),i.value=""}catch(y){console.log("Error adding item",y)}},c=async y=>{try{await dS(na(ar,y))}catch(I){console.log("Error deleting item",I)}_()},u=async y=>{try{const I=na(ar,y.id);await Pp(iu,async P=>{(await P.get(I)).exists()&&P.update(I,{content:y.content,description:y.description,createdAt:y.createdAt,done:y.done})})}catch(I){console.log("Error editing item",I)}_()},d=async y=>{const I=na(ar,y);await Pp(iu,async P=>{const N=await P.get(I);N.exists()&&P.update(I,{done:!N.data().done})})},p=y=>{const I=e.value.findIndex(P=>P.id===y);s.value={id:e.value[I].id,content:e.value[I].content,description:e.value[I].description,createdAt:e.value[I].createdAt,done:e.value[I].done},t.value=!0},_=()=>{t.value=!1};return(y,I)=>(Vs(),Br(qt,null,[Xt(mw,{item:s.value,"is-shown":t.value,onRemoveItem:c,onCloseItemDialog:_,onUpdateItem:u},null,8,["item","is-shown"]),Ae("div",nD,[I[7]||(I[7]=Ae("h1",{class:"title has-text-centered m-6"},"Todo list",-1)),Ae("form",{onSubmit:Um(l,["prevent"])},[Ae("div",sD,[zo(Ae("input",{"onUpdate:modelValue":I[0]||(I[0]=P=>i.value=P),type:"text",class:"input mb-5 p-5",placeholder:"Add a task"},null,512),[[Yo,i.value]]),Ae("button",{class:"button w-3 mb-5 p-3 is-success has-text-light",disabled:!i.value},"Add",8,iD)]),Ae("div",rD,[Ae("label",{class:fn(["radio filter-label",r.value===zn(on).All?"has-background-warning has-text-light":""])},[Ae("input",{onClick:I[1]||(I[1]=P=>r.value=zn(on).All),type:"radio",value:"all",class:"filter",name:"filter-all",checked:""}),I[4]||(I[4]=Ms(" All "))],2),Ae("label",{class:fn(["radio filter-label",r.value===zn(on).Done?"has-background-warning has-text-light":""])},[Ae("input",{onClick:I[2]||(I[2]=P=>r.value=zn(on).Done),type:"radio",value:"done",class:"filter",name:"filter-done"}),I[5]||(I[5]=Ms(" Done "))],2),Ae("label",{class:fn(["radio filter-label",r.value===zn(on).Undone?"has-background-warning has-text-light":""])},[Ae("input",{onClick:I[3]||(I[3]=P=>r.value=zn(on).Undone),type:"radio",value:"undone",class:"filter",name:"filter-undone"}),I[6]||(I[6]=Ms(" Undone "))],2)])],32),Xt(cw,{onShowItemDialog:p,onUpdateItem:d,items:o.value},null,8,["items"])])],64))}}),fE=iw(oD);fE.use(tD,{firebaseApp:Oy});fE.mount("#app");
