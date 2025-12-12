var Ml=Object.defineProperty;var xi=n=>{throw TypeError(n)};var xl=(n,t,e)=>t in n?Ml(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var $t=(n,t,e)=>xl(n,typeof t!="symbol"?t+"":t,e),Ll=(n,t,e)=>t.has(n)||xi("Cannot "+e);var Li=(n,t,e)=>t.has(n)?xi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var ze=(n,t,e)=>(Ll(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Xt,Hr,zr;const z=class z extends HTMLElement{constructor(){super();Li(this,Xt);this.attachShadow({mode:"open"})}static get SHAPES(){return Object.keys(z.SHAPE_DATA)}static shapeTag(e){return z.SHAPE_DATA[e].tag}static getUniqueRandomCardsAsHTML(e,r){if(e>this.COMBINATIONS.length)throw new Error(`Cannot get ${e} unique shape cards. Maximum is ${this.COMBINATIONS.length}.`);return z.COMBINATIONS.reduce((i,o)=>i.toSpliced(Math.floor(Math.random()*(i.length+1)),0,o),[]).slice(0,e).reduce((i,o)=>{for(let l=0;l<(r?2:1);++l)i.splice(Math.floor(Math.random()*(i.length+1)),0,o);return i},[]).map(([i,o])=>`<shape-card type="${i}" colour="${o}"></shape-card>`).join("")}connectedCallback(){this.shadowRoot.appendChild(document.getElementById("shape-card-template").content.cloneNode(!0)),ze(this,Xt,Hr).call(this,null,this.getAttribute("type")),ze(this,Xt,zr).call(this,this.getAttribute("colour")),this.style.setProperty("--card-width",z.WIDTH),this.style.setProperty("--card-height",z.HEIGHT),this.style.setProperty("--card-border",z.BORDER)}attributeChangedCallback(e,r,i){this.shadowRoot&&(e=="type"?ze(this,Xt,Hr).call(this,r,i):e=="colour"&&ze(this,Xt,zr).call(this,i))}isFaceUp(){return this.shadowRoot.querySelector(".card").classList.contains("card-face-up")}flip(){const e=this.shadowRoot.querySelector(".card");e.classList.toggle("card-face-down"),e.classList.toggle("card-face-up")}};Xt=new WeakSet,Hr=function(e,r){var i,o;if(r&&!(r in z.SHAPE_DATA))throw new Error(`Invalid shape type attribute ${newType}. Expected one of ${z.SHAPES.join(", ")}.`);e&&((i=this.shadowRoot.querySelector(z.shapeTag(e)))==null||i.setAttribute("fill-opacity","0")),r&&((o=this.shadowRoot.querySelector(z.shapeTag(r)))==null||o.setAttribute("fill-opacity","1"))},zr=function(e){var r;if(e&&!z.COLOURS.includes(e))throw new Error(`Invalid colour attribute ${e}. Expected one of ${z.COLOURS.join(", ")}.`);e&&((r=this.shadowRoot.querySelector(z.shapeTag(this.getAttribute("type"))))==null||r.setAttribute("fill",e))},$t(z,"observedAttributes",["type","colour"]),$t(z,"HEIGHT","100px"),$t(z,"WIDTH","100px"),$t(z,"BORDER","1px"),$t(z,"SHAPE_DATA",{circle:{tag:"circle"},square:{tag:"rect"},triangle:{tag:"polygon"}}),$t(z,"COLOURS",["red","green","blue","yellow","orange","purple"]),$t(z,"COMBINATIONS",z.SHAPES.map(e=>z.COLOURS.map(r=>[e,r])).flat());let Bn=z;customElements.define("shape-card",Bn);const Fl=()=>{};var Fi={};/**
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
 */const Fo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ul=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,I=o>>2,A=(o&3)<<4|h>>4;let R=(h&15)<<2|d>>6,b=d&63;f||(b=64,l||(R=64)),r.push(e[I],e[A],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Fo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ul(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||d==null||A==null)throw new Bl;const R=o<<2|h>>4;if(r.push(R),d!==64){const b=h<<4&240|d>>2;if(r.push(b),A!==64){const N=d<<6&192|A;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jl=function(n){const t=Fo(n);return Uo.encodeByteArray(t,!0)},jn=function(n){return jl(n).replace(/\./g,"")},$l=function(n){try{return Uo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hl=()=>ql().__FIREBASE_DEFAULTS__,zl=()=>{if(typeof process>"u"||typeof Fi>"u")return;const n=Fi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&$l(n[1]);return t&&JSON.parse(t)},cs=()=>{try{return Fl()||Hl()||zl()||Gl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kl=n=>{var t,e;return(e=(t=cs())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Wl=n=>{const t=Kl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Bo=()=>{var n;return(n=cs())==null?void 0:n.config};/**
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
 */class Ql{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[jn(JSON.stringify(e)),jn(JSON.stringify(l)),""].join(".")}const We={};function Yl(){const n={prod:[],emulator:[]};for(const t of Object.keys(We))We[t]?n.emulator.push(t):n.prod.push(t);return n}function Zl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ui=!1;function tc(n,t){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||We[n]===t||We[n]||Ui)return;We[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Yl().prod.length>0;function l(){const R=document.getElementById(r);R&&R.remove()}function h(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Ui=!0,l()},R}function I(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=Zl(r),b=e("text"),N=document.getElementById(b)||document.createElement("span"),k=e("learnmore"),O=document.getElementById(k)||document.createElement("a"),W=e("preprendIcon"),j=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const Q=R.element;h(Q),I(O,k);const ct=d();f(j,W),Q.append(j,N,O,ct),document.body.appendChild(Q)}o?(N.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function ec(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nc(){var t;const n=(t=cs())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rc(){return!nc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sc(){try{return typeof indexedDB=="object"}catch{return!1}}function ic(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const oc="FirebaseError";class Se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=oc,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?ac(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Se(i,h,r)}}function ac(n,t){return n.replace(lc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const lc=/\{\$([^}]+)}/g;function $n(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Bi(o)&&Bi(l)){if(!$n(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Bi(n){return n!==null&&typeof n=="object"}/**
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
 */function tn(n){return n&&n._delegate?n._delegate:n}class en{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const re="[DEFAULT]";/**
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
 */class cc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ql;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hc(t))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=re){return this.instances.has(t)}getOptions(t=re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=re){return this.component?this.component.multipleInstances?t:re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uc(n){return n===re?void 0:n}function hc(n){return n.instantiationMode==="EAGER"}/**
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
 */class fc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new cc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const dc={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},pc=U.INFO,mc={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},gc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=mc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $o{constructor(t){this.name=t,this._logLevel=pc,this._logHandler=gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const _c=(n,t)=>t.some(e=>n instanceof e);let ji,$i;function yc(){return ji||(ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ec(){return $i||($i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qo=new WeakMap,Gr=new WeakMap,Ho=new WeakMap,xr=new WeakMap,hs=new WeakMap;function Tc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(qt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&qo.set(e,n)}).catch(()=>{}),hs.set(t,n),t}function vc(n){if(Gr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Gr.set(n,t)}let Kr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ho.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ic(n){Kr=n(Kr)}function Ac(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Lr(this),t,...e);return Ho.set(r,t.sort?t.sort():[t]),qt(r)}:Ec().includes(n)?function(...t){return n.apply(Lr(this),t),qt(qo.get(this))}:function(...t){return qt(n.apply(Lr(this),t))}}function wc(n){return typeof n=="function"?Ac(n):(n instanceof IDBTransaction&&vc(n),_c(n,yc())?new Proxy(n,Kr):n)}function qt(n){if(n instanceof IDBRequest)return Tc(n);if(xr.has(n))return xr.get(n);const t=wc(n);return t!==n&&(xr.set(n,t),hs.set(t,n)),t}const Lr=n=>hs.get(n);function Rc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=qt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(qt(l.result),f.oldVersion,f.newVersion,qt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),h}const Sc=["get","getKey","getAll","getAllKeys","count"],Cc=["put","add","delete","clear"],Fr=new Map;function qi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fr.get(t))return Fr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Cc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sc.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(h.shift())),(await Promise.all([d[e](...h),i&&f.done]))[0]};return Fr.set(t,o),o}Ic(n=>({...n,get:(t,e,r)=>qi(t,e)||n.get(t,e,r),has:(t,e)=>!!qi(t,e)||n.has(t,e)}));/**
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
 */class Pc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(bc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function bc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",Hi="0.14.6";/**
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
 */const Mt=new $o("@firebase/app"),Vc="@firebase/app-compat",Dc="@firebase/analytics-compat",Nc="@firebase/analytics",Oc="@firebase/app-check-compat",kc="@firebase/app-check",Mc="@firebase/auth",xc="@firebase/auth-compat",Lc="@firebase/database",Fc="@firebase/data-connect",Uc="@firebase/database-compat",Bc="@firebase/functions",jc="@firebase/functions-compat",$c="@firebase/installations",qc="@firebase/installations-compat",Hc="@firebase/messaging",zc="@firebase/messaging-compat",Gc="@firebase/performance",Kc="@firebase/performance-compat",Wc="@firebase/remote-config",Qc="@firebase/remote-config-compat",Xc="@firebase/storage",Jc="@firebase/storage-compat",Yc="@firebase/firestore",Zc="@firebase/ai",tu="@firebase/firestore-compat",eu="firebase",nu="12.6.0";/**
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
 */const Qr="[DEFAULT]",ru={[Wr]:"fire-core",[Vc]:"fire-core-compat",[Nc]:"fire-analytics",[Dc]:"fire-analytics-compat",[kc]:"fire-app-check",[Oc]:"fire-app-check-compat",[Mc]:"fire-auth",[xc]:"fire-auth-compat",[Lc]:"fire-rtdb",[Fc]:"fire-data-connect",[Uc]:"fire-rtdb-compat",[Bc]:"fire-fn",[jc]:"fire-fn-compat",[$c]:"fire-iid",[qc]:"fire-iid-compat",[Hc]:"fire-fcm",[zc]:"fire-fcm-compat",[Gc]:"fire-perf",[Kc]:"fire-perf-compat",[Wc]:"fire-rc",[Qc]:"fire-rc-compat",[Xc]:"fire-gcs",[Jc]:"fire-gcs-compat",[Yc]:"fire-fst",[tu]:"fire-fst-compat",[Zc]:"fire-vertex","fire-js":"fire-js",[eu]:"fire-js-all"};/**
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
 */const qn=new Map,su=new Map,Xr=new Map;function zi(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Hn(n){const t=n.name;if(Xr.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,n);for(const e of qn.values())zi(e,n);for(const e of su.values())zi(e,n);return!0}function iu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ou(n){return n==null?!1:n.settings!==void 0}/**
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
 */const au={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new jo("app","Firebase",au);/**
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
 */class lu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const cu=nu;function zo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Qr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(e||(e=Bo()),!e)throw Ht.create("no-options");const o=qn.get(i);if(o){if($n(e,o.options)&&$n(r,o.config))return o;throw Ht.create("duplicate-app",{appName:i})}const l=new fc(i);for(const f of Xr.values())l.addComponent(f);const h=new lu(e,r,l);return qn.set(i,h),h}function uu(n=Qr){const t=qn.get(n);if(!t&&n===Qr&&Bo())return zo();if(!t)throw Ht.create("no-app",{appName:n});return t}function ye(n,t,e){let r=ru[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}Hn(new en(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const hu="firebase-heartbeat-database",fu=1,nn="firebase-heartbeat-store";let Ur=null;function Go(){return Ur||(Ur=Rc(hu,fu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(nn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Ur}async function du(n){try{const e=(await Go()).transaction(nn),r=await e.objectStore(nn).get(Ko(n));return await e.done,r}catch(t){if(t instanceof Se)Mt.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function Gi(n,t){try{const r=(await Go()).transaction(nn,"readwrite");await r.objectStore(nn).put(t,Ko(n)),await r.done}catch(e){if(e instanceof Se)Mt.warn(e.message);else{const r=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(r.message)}}}function Ko(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pu=1024,mu=30;class gu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ki();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>mu){const l=Eu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ki(),{heartbeatsToSend:r,unsentEntries:i}=_u(this._heartbeatsCache.heartbeats),o=jn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function Ki(){return new Date().toISOString().substring(0,10)}function _u(n,t=pu){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Wi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Wi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class yu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?ic().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await du(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Wi(n){return jn(JSON.stringify({version:2,heartbeats:n})).length}function Eu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Tu(n){Hn(new en("platform-logger",t=>new Pc(t),"PRIVATE")),Hn(new en("heartbeat",t=>new gu(t),"PRIVATE")),ye(Wr,Hi,n),ye(Wr,Hi,"esm2020"),ye("fire-js","")}Tu("");var vu="firebase",Iu="12.6.0";/**
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
 */ye(vu,Iu,"app");var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)m[yt-2]=arguments[yt];return p.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const E=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)E[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=p+(v^g&(_^v))+E[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(v^g&(_^v))+E[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(_^p&(g^_))+E[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(g^v&(p^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(p^_&(v^p))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^v&(g^_))+E[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(g^_))+E[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(p^g))+E[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(v^p))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^v)+E[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^v)+E[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^_)+E[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^p)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~v))+E[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~v))+E[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~_))+E[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~p))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<p;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<p;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<p;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[p++]=this.g[g]>>>E&255;return y};function o(y,p){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function l(y,p){this.h=p;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==p||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(p){return new l([p|0],p<0?-1:0)}):new l([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return A;if(y<0)return O(d(-y));const p=[];let g=1;for(let E=0;y>=g;E++)p[E]=y/g|0,g*=4294967296;return new l(p,0)}function I(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return O(I(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let E=A;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),p);_<8?(_=d(Math.pow(p,_)),E=E.j(_).add(d(m))):(E=E.j(g),E=E.add(d(m)))}return E}var A=f(0),R=f(1),b=f(16777216);n=l.prototype,n.m=function(){if(k(this))return-O(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(k(this))return"-"+O(this).toString(y);const p=d(Math.pow(y,6));var g=this;let E="";for(;;){const _=ct(g,p).g;g=W(g,_.j(p));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function k(y){return y.h==-1}n.l=function(y){return y=W(this,y),k(y)?-1:N(y)?0:1};function O(y){const p=y.g.length,g=[];for(let E=0;E<p;E++)g[E]=~y.g[E];return new l(g,~y.h).add(R)}n.abs=function(){return k(this)?O(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=p;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new l(g,g[g.length-1]&-2147483648?-1:0)};function W(y,p){return y.add(O(p))}n.j=function(y){if(N(this)||N(y))return A;if(k(this))return k(y)?O(this).j(O(y)):O(O(this).j(y));if(k(y))return O(this.j(O(y)));if(this.l(b)<0&&y.l(b)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,yt=y.i(_)>>>16,Jt=y.i(_)&65535;g[2*E+2*_]+=m*Jt,j(g,2*E+2*_),g[2*E+2*_+1]+=v*Jt,j(g,2*E+2*_+1),g[2*E+2*_+1]+=m*yt,j(g,2*E+2*_+1),g[2*E+2*_+2]+=v*yt,j(g,2*E+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function j(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function Q(y,p){this.g=y,this.h=p}function ct(y,p){if(N(p))throw Error("division by zero");if(N(y))return new Q(A,A);if(k(y))return p=ct(O(y),p),new Q(O(p.g),O(p.h));if(k(p))return p=ct(y,O(p)),new Q(O(p.g),p.h);if(y.g.length>30){if(k(y)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=p;E.l(y)<=0;)g=It(g),E=It(E);var _=ut(g,1),v=ut(E,1);for(E=ut(E,2),g=ut(g,2);!N(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=ut(E,1),g=ut(g,1)}return p=W(y,_.j(p)),new Q(_,p)}for(_=A;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=d(g),m=v.j(p);k(m)||m.l(y)>0;)g-=E,v=d(g),m=v.j(p);N(v)&&(v=R),_=_.add(v),y=W(y,m)}return new Q(_,y)}n.B=function(y){return ct(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function It(y){const p=y.g.length+1,g=[];for(let E=0;E<p;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function ut(y,p){const g=p>>5;p%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=p>0?y.i(v+g)>>>p|y.i(v+g+1)<<32-p:y.i(v+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=I,fs=l}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,Ke,Qo,Mn,Jr,Xo,Jo,Yo;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var T=s[u];if(!(T in c))break t;c=c[T]}s=s[s.length-1],u=c[s],a=a(u),a!=u&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&c.push([u,a[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,c){return s.call.apply(s.bind,arguments)}function d(s,a,c){return d=f,d.apply(null,arguments)}function I(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function A(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(u,T,w){for(var P=Array(arguments.length-2),x=2;x<arguments.length;x++)P[x-2]=arguments[x];return a.prototype[T].apply(u,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function b(s){const a=s.length;if(a>0){const c=Array(a);for(let u=0;u<a;u++)c[u]=s[u];return c}return[]}function N(s,a){for(let u=1;u<arguments.length;u++){const T=arguments[u];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=s.length||0;const w=T.length||0;s.length=c+w;for(let P=0;P<w;P++)s[c+P]=T[P]}else s.push(T)}}class k{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function O(s){l.setTimeout(()=>{throw s},0)}function W(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class j{constructor(){this.h=this.g=null}add(a,c){const u=Q.get();u.set(a,c),this.h?this.h.next=u:this.g=u,this.h=u}}var Q=new k(()=>new ct,s=>s.reset());class ct{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let It,ut=!1,y=new j,p=()=>{const s=Promise.resolve(void 0);It=()=>{s.then(g)}};function g(){for(var s;s=W();){try{s.h.call(s.g)}catch(c){O(c)}var a=Q;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}ut=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function yt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}A(yt,_),yt.prototype.init=function(s,a){const c=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&yt.Z.h.call(this)},yt.prototype.h=function(){yt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Jt="closure_listenable_"+(Math.random()*1e6|0),rl=0;function sl(s,a,c,u,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!u,this.ha=T,this.key=++rl,this.da=this.fa=!1}function pn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function mn(s,a,c){for(const u in s)a.call(c,s[u],u,s)}function il(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function Ms(s){const a={};for(const c in s)a[c]=s[c];return a}const xs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ls(s,a){let c,u;for(let T=1;T<arguments.length;T++){u=arguments[T];for(c in u)s[c]=u[c];for(let w=0;w<xs.length;w++)c=xs[w],Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,c,u,T){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const P=dr(s,a,u,T);return P>-1?(a=s[P],c||(a.fa=!1)):(a=new sl(a,this.src,w,!!u,T),a.fa=c,s.push(a)),a};function fr(s,a){const c=a.type;if(c in s.g){var u=s.g[c],T=Array.prototype.indexOf.call(u,a,void 0),w;(w=T>=0)&&Array.prototype.splice.call(u,T,1),w&&(pn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function dr(s,a,c,u){for(let T=0;T<s.length;++T){const w=s[T];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==u)return T}return-1}var pr="closure_lm_"+(Math.random()*1e6|0),mr={};function Fs(s,a,c,u,T){if(Array.isArray(a)){for(let w=0;w<a.length;w++)Fs(s,a[w],c,u,T);return null}return c=js(c),s&&s[Jt]?s.J(a,c,h(u)?!!u.capture:!1,T):ol(s,a,c,!1,u,T)}function ol(s,a,c,u,T,w){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let x=_r(s);if(x||(s[pr]=x=new gn(s)),c=x.add(a,c,u,P,w),c.proxy)return c;if(u=al(),c.proxy=u,u.src=s,u.listener=c,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),u,T);else if(s.attachEvent)s.attachEvent(Bs(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function al(){function s(c){return a.call(s.src,s.listener,c)}const a=ll;return s}function Us(s,a,c,u,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Us(s,a[w],c,u,T);else u=h(u)?!!u.capture:!!u,c=js(c),s&&s[Jt]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],c=dr(a,c,u,T),c>-1&&(pn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=_r(s))&&(a=s.g[a.toString()],s=-1,a&&(s=dr(a,c,u,T)),(c=s>-1?a[s]:null)&&gr(c))}function gr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Jt])fr(a.i,s);else{var c=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(c,u,s.capture):a.detachEvent?a.detachEvent(Bs(c),u):a.addListener&&a.removeListener&&a.removeListener(u),(c=_r(a))?(fr(c,s),c.h==0&&(c.src=null,a[pr]=null)):pn(s)}}}function Bs(s){return s in mr?mr[s]:mr[s]="on"+s}function ll(s,a){if(s.da)s=!0;else{a=new yt(a,this);const c=s.listener,u=s.ha||s.src;s.fa&&gr(s),s=c.call(u,a)}return s}function _r(s){return s=s[pr],s instanceof gn?s:null}var yr="__closure_events_fn_"+(Math.random()*1e9>>>0);function js(s){return typeof s=="function"?s:(s[yr]||(s[yr]=function(a){return s.handleEvent(a)}),s[yr])}function ht(){E.call(this),this.i=new gn(this),this.M=this,this.G=null}A(ht,E),ht.prototype[Jt]=!0,ht.prototype.removeEventListener=function(s,a,c,u){Us(this,s,a,c,u)};function gt(s,a){var c,u=s.G;if(u)for(c=[];u;u=u.G)c.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(u,s),Ls(a,T)}T=!0;let w,P;if(c)for(P=c.length-1;P>=0;P--)w=a.g=c[P],T=_n(w,u,!0,a)&&T;if(w=a.g=s,T=_n(w,u,!0,a)&&T,T=_n(w,u,!1,a)&&T,c)for(P=0;P<c.length;P++)w=a.g=c[P],T=_n(w,u,!1,a)&&T}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let u=0;u<c.length;u++)pn(c[u]);delete s.g[a],s.h--}}this.G=null},ht.prototype.J=function(s,a,c,u){return this.i.add(String(s),a,!1,c,u)},ht.prototype.K=function(s,a,c,u){return this.i.add(String(s),a,!0,c,u)};function _n(s,a,c,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let w=0;w<a.length;++w){const P=a[w];if(P&&!P.da&&P.capture==c){const x=P.listener,et=P.ha||P.src;P.fa&&fr(s.i,P),T=x.call(et,u)!==!1&&T}}return T&&!u.defaultPrevented}function cl(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function $s(s){s.g=cl(()=>{s.g=null,s.i&&(s.i=!1,$s(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ul extends E{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:$s(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function be(s){E.call(this),this.h=s,this.g={}}A(be,E);var qs=[];function Hs(s){mn(s.g,function(a,c){this.g.hasOwnProperty(c)&&gr(a)},s),s.g={}}be.prototype.N=function(){be.Z.N.call(this),Hs(this)},be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=l.JSON.stringify,hl=l.JSON.parse,fl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function zs(){}function Gs(){}var Ve={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tr(){_.call(this,"d")}A(Tr,_);function vr(){_.call(this,"c")}A(vr,_);var Yt={},Ks=null;function yn(){return Ks=Ks||new ht}Yt.Ia="serverreachability";function Ws(s){_.call(this,Yt.Ia,s)}A(Ws,_);function De(s){const a=yn();gt(a,new Ws(a))}Yt.STAT_EVENT="statevent";function Qs(s,a){_.call(this,Yt.STAT_EVENT,s),this.stat=a}A(Qs,_);function _t(s){const a=yn();gt(a,new Qs(a,s))}Yt.Ja="timingevent";function Xs(s,a){_.call(this,Yt.Ja,s),this.size=a}A(Xs,_);function Ne(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Oe(){this.g=!0}Oe.prototype.ua=function(){this.g=!1};function dl(s,a,c,u,T,w){s.info(function(){if(s.g)if(w){var P="",x=w.split("&");for(let $=0;$<x.length;$++){var et=x[$].split("=");if(et.length>1){const nt=et[0];et=et[1];const Pt=nt.split("_");P=Pt.length>=2&&Pt[1]=="type"?P+(nt+"="+et+"&"):P+(nt+"=redacted&")}}}else P=null;else P=w;return"XMLHTTP REQ ("+u+") [attempt "+T+"]: "+a+`
`+c+`
`+P})}function pl(s,a,c,u,T,w,P){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+T+"]: "+a+`
`+c+`
`+w+" "+P})}function de(s,a,c,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+gl(s,c)+(u?" "+u:"")})}function ml(s,a){s.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function gl(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var c=w[s];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var T=u[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<u.length;P++)u[P]=""}}}}return Er(w)}catch{return a}}var En={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Js={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ys;function Ir(){}A(Ir,zs),Ir.prototype.g=function(){return new XMLHttpRequest},Ys=new Ir;function ke(s){return encodeURIComponent(String(s))}function _l(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function xt(s,a,c,u){this.j=s,this.i=a,this.l=c,this.S=u||1,this.V=new be(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zs}function Zs(){this.i=null,this.g="",this.h=!1}var ti={},Ar={};function wr(s,a,c){s.M=1,s.A=vn(Ct(a)),s.u=c,s.R=!0,ei(s,null)}function ei(s,a){s.F=Date.now(),Tn(s),s.B=Ct(s.A);var c=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),pi(c.i,"t",u),s.C=0,c=s.j.L,s.h=new Zs,s.g=Ni(s.j,c?a:null,!s.u),s.P>0&&(s.O=new ul(d(s.Y,s,s.g),s.P)),a=s.V,c=s.g,u=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(qs[0]=T.toString()),T=qs);for(let w=0;w<T.length;w++){const P=Fs(c,T[w],u||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Ms(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),De(),dl(s.i,s.v,s.B,s.l,s.S,s.u)}xt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ut(s)==3?a.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)t:{const x=Ut(this.g),et=this.g.ya(),$=this.g.ca();if(!(x<3)&&(x!=3||this.g&&(this.h.h||this.g.la()||vi(this.g)))){this.K||x!=4||et==7||(et==8||$<=0?De(3):De(2)),Rr(this);var a=this.g.ca();this.X=a;var c=yl(this);if(this.o=a==200,pl(this.i,this.v,this.B,this.l,this.S,x,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,T=this.g;if((u=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var w=u;break e}}w=null}if(s=w)de(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sr(this,s);else{this.o=!1,this.m=3,_t(12),Zt(this),Me(this);break t}}if(this.R){s=!0;let nt;for(;!this.K&&this.C<c.length;)if(nt=El(this,c),nt==Ar){x==4&&(this.m=4,_t(14),s=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==ti){this.m=4,_t(15),de(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else de(this.i,this.l,nt,null),Sr(this,nt);if(ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),x!=4||c.length!=0||this.h.h||(this.m=1,_t(16),s=!1),this.o=this.o&&s,!s)de(this.i,this.l,c,"[Invalid Chunked Response]"),Zt(this),Me(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),kr(P),P.P=!0,_t(11))}}else de(this.i,this.l,c,null),Sr(this,c);x==4&&Zt(this),this.o&&!this.K&&(x==4?Pi(this.j,this):(this.o=!1,Tn(this)))}else Ol(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),Zt(this),Me(this)}}}catch{}finally{}};function yl(s){if(!ni(s))return s.g.la();const a=vi(s.g);if(a==="")return"";let c="";const u=a.length,T=Ut(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Zt(s),Me(s),"";s.h.i=new l.TextDecoder}for(let w=0;w<u;w++)s.h.h=!0,c+=s.h.i.decode(a[w],{stream:!(T&&w==u-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function ni(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function El(s,a){var c=s.C,u=a.indexOf(`
`,c);return u==-1?Ar:(c=Number(a.substring(c,u)),isNaN(c)?ti:(u+=1,u+c>a.length?Ar:(a=a.slice(u,u+c),s.C=u+c,a)))}xt.prototype.cancel=function(){this.K=!0,Zt(this)};function Tn(s){s.T=Date.now()+s.H,ri(s,s.H)}function ri(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Ne(d(s.aa,s),a)}function Rr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}xt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ml(this.i,this.B),this.M!=2&&(De(),_t(17)),Zt(this),this.m=2,Me(this)):ri(this,this.T-s)};function Me(s){s.j.I==0||s.K||Pi(s.j,s)}function Zt(s){Rr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Hs(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Sr(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||Cr(c.h,s))){if(!s.L&&Cr(c.h,s)&&c.I==3){try{var u=c.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var T=u;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Sn(c),wn(c);else break t;Or(c),_t(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Ne(d(c.Va,c),6e3));oi(c.h)<=1&&c.ta&&(c.ta=void 0)}else ee(c,11)}else if((s.L||c.g==s)&&Sn(c),!m(a))for(T=c.Ba.g.parse(a),a=0;a<T.length;a++){let $=T[a];const nt=$[0];if(!(nt<=c.K))if(c.K=nt,$=$[1],c.I==2)if($[0]=="c"){c.M=$[1],c.ba=$[2];const Pt=$[3];Pt!=null&&(c.ka=Pt,c.j.info("VER="+c.ka));const ne=$[4];ne!=null&&(c.za=ne,c.j.info("SVER="+c.za));const Bt=$[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(u=1.5*Bt,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const jt=s.g;if(jt){const Pn=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pn){var w=u.h;w.g||Pn.indexOf("spdy")==-1&&Pn.indexOf("quic")==-1&&Pn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Pr(w,w.h),w.h=null))}if(u.G){const Mr=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mr&&(u.wa=Mr,H(u.J,u.G,Mr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var P=s;if(u.na=Di(u,u.L?u.ba:null,u.W),P.L){ai(u.h,P);var x=P,et=u.O;et&&(x.H=et),x.D&&(Rr(x),Tn(x)),u.g=P}else Si(u);c.i.length>0&&Rn(c)}else $[0]!="stop"&&$[0]!="close"||ee(c,7);else c.I==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ee(c,7):Nr(c):$[0]!="noop"&&c.l&&c.l.qa($),c.A=0)}}De(4)}catch{}}var Tl=class{constructor(s,a){this.g=s,this.map=a}};function si(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ii(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function oi(s){return s.h?1:s.g?s.g.size:0}function Cr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Pr(s,a){s.g?s.g.add(a):s.h=a}function ai(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}si.prototype.cancel=function(){if(this.i=li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function li(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return b(s.i)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vl(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const u=s[c].indexOf("=");let T,w=null;u>=0?(T=s[c].substring(0,u),w=s[c].substring(u+1)):T=s[c],a(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Lt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Lt?(this.l=s.l,xe(this,s.j),this.o=s.o,this.g=s.g,Le(this,s.u),this.h=s.h,br(this,mi(s.i)),this.m=s.m):s&&(a=String(s).match(ci))?(this.l=!1,xe(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),Le(this,a[4]),this.h=Fe(a[5]||"",!0),br(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.l=!1,this.i=new Be(null,this.l))}Lt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Ue(a,ui,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ue(a,ui,!0),"@"),s.push(ke(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ue(c,c.charAt(0)=="/"?wl:Al,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ue(c,Sl)),s.join("")},Lt.prototype.resolve=function(s){const a=Ct(this);let c=!!s.j;c?xe(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var u=s.h;if(c)Le(a,s.u);else if(c=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var T=a.h.lastIndexOf("/");T!=-1&&(u=a.h.slice(0,T+1)+u)}if(T=u,T==".."||T==".")u="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){u=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let P=0;P<T.length;){const x=T[P++];x=="."?u&&P==T.length&&w.push(""):x==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),u&&P==T.length&&w.push("")):(w.push(x),u=!0)}u=w.join("/")}else u=T}return c?a.h=u:c=s.i.toString()!=="",c?br(a,mi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function Ct(s){return new Lt(s)}function xe(s,a,c){s.j=c?Fe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Le(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function br(s,a,c){a instanceof Be?(s.i=a,Cl(s.i,s.l)):(c||(a=Ue(a,Rl)),s.i=new Be(a,s.l))}function H(s,a,c){s.i.set(a,c)}function vn(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Fe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ue(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Il),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Il(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ui=/[#\/\?@]/g,Al=/[#\?:]/g,wl=/[#\?]/g,Rl=/[#\?@]/g,Sl=/#/g;function Be(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function te(s){s.g||(s.g=new Map,s.h=0,s.i&&vl(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Be.prototype,n.add=function(s,a){te(this),this.i=null,s=pe(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function hi(s,a){te(s),a=pe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function fi(s,a){return te(s),a=pe(s,a),s.g.has(a)}n.forEach=function(s,a){te(this),this.g.forEach(function(c,u){c.forEach(function(T){s.call(a,T,u,this)},this)},this)};function di(s,a){te(s);let c=[];if(typeof a=="string")fi(s,a)&&(c=c.concat(s.g.get(pe(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return te(this),this.i=null,s=pe(this,s),fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=di(this,s),s.length>0?String(s[0]):a):a};function pi(s,a,c){hi(s,a),c.length>0&&(s.i=null,s.g.set(pe(s,a),b(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var c=a[u];const T=ke(c);c=di(this,c);for(let w=0;w<c.length;w++){let P=T;c[w]!==""&&(P+="="+ke(c[w])),s.push(P)}}return this.i=s.join("&")};function mi(s){const a=new Be;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function pe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Cl(s,a){a&&!s.j&&(te(s),s.i=null,s.g.forEach(function(c,u){const T=u.toLowerCase();u!=T&&(hi(this,u),pi(this,T,c))},s)),s.j=a}function Pl(s,a){const c=new Oe;if(l.Image){const u=new Image;u.onload=I(Ft,c,"TestLoadImage: loaded",!0,a,u),u.onerror=I(Ft,c,"TestLoadImage: error",!1,a,u),u.onabort=I(Ft,c,"TestLoadImage: abort",!1,a,u),u.ontimeout=I(Ft,c,"TestLoadImage: timeout",!1,a,u),l.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function bl(s,a){const c=new Oe,u=new AbortController,T=setTimeout(()=>{u.abort(),Ft(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(w=>{clearTimeout(T),w.ok?Ft(c,"TestPingServer: ok",!0,a):Ft(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ft(c,"TestPingServer: error",!1,a)})}function Ft(s,a,c,u,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),u(c)}catch{}}function Vl(){this.g=new fl}function Vr(s){this.i=s.Sb||null,this.h=s.ab||!1}A(Vr,zs),Vr.prototype.g=function(){return new In(this.i,this.h)};function In(s,a){ht.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(In,ht),n=In.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,$e(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;gi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function gi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?je(this):$e(this),this.readyState==3&&gi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,je(this))},n.Na=function(s){this.g&&(this.response=s,je(this))},n.ga=function(){this.g&&je(this)};function je(s){s.readyState=4,s.l=null,s.j=null,s.B=null,$e(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function $e(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function _i(s){let a="";return mn(s,function(c,u){a+=u,a+=":",a+=c,a+=`\r
`}),a}function Dr(s,a,c){t:{for(u in c){var u=!1;break t}u=!0}u||(c=_i(c),typeof s=="string"?c!=null&&ke(c):H(s,a,c))}function J(s){ht.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(J,ht);var Dl=/^https?$/i,Nl=["POST","PUT"];n=J.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ys.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){yi(this,w);return}if(s=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var T in u)c.set(T,u[T]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const w of u.keys())c.set(w,u.get(w));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Nl,a,void 0)>=0)||u||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of c)this.g.setRequestHeader(w,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){yi(this,w)}};function yi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Ei(s),An(s)}function Ei(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,gt(this,"complete"),gt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),J.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ti(this):this.Xa())},n.Xa=function(){Ti(this)};function Ti(s){if(s.h&&typeof o<"u"){if(s.v&&Ut(s)==4)setTimeout(s.Ca.bind(s),0);else if(gt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var u;if(u=w===0){let P=String(s.D).match(ci)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),u=!Dl.test(P?P.toLowerCase():"")}c=u}if(c)gt(s,"complete"),gt(s,"success");else{s.o=6;try{var T=Ut(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",Ei(s)}}finally{An(s)}}}}function An(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||gt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),hl(a)}};function vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ol(s){const a={};s=(s.g&&Ut(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(m(s[u]))continue;var c=_l(s[u]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[T]||[];a[T]=w,w.push(c)}il(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qe(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ii(s){this.za=0,this.i=[],this.j=new Oe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qe("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qe("baseRetryDelayMs",5e3,s),this.Za=qe("retryDelaySeedMs",1e4,s),this.Ta=qe("forwardChannelMaxRetries",2,s),this.va=qe("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new si(s&&s.concurrentRequestLimit),this.Ba=new Vl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ii.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,u){_t(0),this.W=s,this.H=a||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Di(this,null,this.W),Rn(this)};function Nr(s){if(Ai(s),s.I==3){var a=s.V++,c=Ct(s.J);if(H(c,"SID",s.M),H(c,"RID",a),H(c,"TYPE","terminate"),He(s,c),a=new xt(s,s.j,a),a.M=2,a.A=vn(Ct(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=Ni(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Tn(a)}Vi(s)}function wn(s){s.g&&(kr(s),s.g.cancel(),s.g=null)}function Ai(s){wn(s),s.v&&(l.clearTimeout(s.v),s.v=null),Sn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function Rn(s){if(!ii(s.h)&&!s.m){s.m=!0;var a=s.Ea;It||p(),ut||(It(),ut=!0),y.add(a,s),s.D=0}}function kl(s,a){return oi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Ne(d(s.Ea,s,a),bi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new xt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=Ms(w),Ls(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ri(this,T,a),c=Ct(this.J),H(c,"RID",s),H(c,"CVER",22),this.G&&H(c,"X-HTTP-Session-Id",this.G),He(this,c),w&&(this.R?a="headers="+ke(_i(w))+"&"+a:this.u&&Dr(c,this.u,w)),Pr(this.h,T),this.Ra&&H(c,"TYPE","init"),this.S?(H(c,"$req",a),H(c,"SID","null"),T.U=!0,wr(T,c,null)):wr(T,c,a),this.I=2}}else this.I==3&&(s?wi(this,s):this.i.length==0||ii(this.h)||wi(this))};function wi(s,a){var c;a?c=a.l:c=s.V++;const u=Ct(s.J);H(u,"SID",s.M),H(u,"RID",c),H(u,"AID",s.K),He(s,u),s.u&&s.o&&Dr(u,s.u,s.o),c=new xt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ri(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Pr(s.h,c),wr(c,u,a)}function He(s,a){s.H&&mn(s.H,function(c,u){H(a,u,c)}),s.l&&mn({},function(c,u){H(a,u,c)})}function Ri(s,a,c){c=Math.min(s.i.length,c);const u=s.l?d(s.l.Ka,s.l,s):null;t:{var T=s.i;let x=-1;for(;;){const et=["count="+c];x==-1?c>0?(x=T[0].g,et.push("ofs="+x)):x=0:et.push("ofs="+x);let $=!0;for(let nt=0;nt<c;nt++){var w=T[nt].g;const Pt=T[nt].map;if(w-=x,w<0)x=Math.max(0,T[nt].g-100),$=!1;else try{w="req"+w+"_"||"";try{var P=Pt instanceof Map?Pt:Object.entries(Pt);for(const[ne,Bt]of P){let jt=Bt;h(Bt)&&(jt=Er(Bt)),et.push(w+ne+"="+encodeURIComponent(jt))}}catch(ne){throw et.push(w+"type="+encodeURIComponent("_badmap")),ne}}catch{u&&u(Pt)}}if($){P=et.join("&");break t}}P=void 0}return s=s.i.splice(0,c),a.G=s,P}function Si(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;It||p(),ut||(It(),ut=!0),y.add(a,s),s.A=0}}function Or(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Ne(d(s.Da,s),bi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ci(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Ne(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),wn(this),Ci(this))};function kr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Ci(s){s.g=new xt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=Ct(s.na);H(a,"RID","rpc"),H(a,"SID",s.M),H(a,"AID",s.K),H(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(a,"TO",s.ia),H(a,"TYPE","xmlhttp"),He(s,a),s.u&&s.o&&Dr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=vn(Ct(a)),c.u=null,c.R=!0,ei(c,s)}n.Va=function(){this.C!=null&&(this.C=null,wn(this),Or(this),_t(19))};function Sn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Pi(s,a){var c=null;if(s.g==a){Sn(s),kr(s),s.g=null;var u=2}else if(Cr(s.h,a))c=a.G,ai(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;u=yn(),gt(u,new Xs(u,c)),Rn(s)}else Si(s);else if(T=a.m,T==3||T==0&&a.X>0||!(u==1&&kl(s,a)||u==2&&Or(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),T){case 1:ee(s,5);break;case 4:ee(s,10);break;case 3:ee(s,6);break;default:ee(s,2)}}}function bi(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function ee(s,a){if(s.j.info("Error code "+a),a==2){var c=d(s.bb,s),u=s.Ua;const T=!u;u=new Lt(u||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xe(u,"https"),vn(u),T?Pl(u.toString(),c):bl(u.toString(),c)}else _t(2);s.I=0,s.l&&s.l.pa(a),Vi(s),Ai(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Vi(s){if(s.I=0,s.ja=[],s.l){const a=li(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.oa()}}function Di(s,a,c){var u=c instanceof Lt?Ct(c):new Lt(c);if(u.g!="")a&&(u.g=a+"."+u.g),Le(u,u.u);else{var T=l.location;u=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const w=new Lt(null);u&&xe(w,u),a&&(w.g=a),T&&Le(w,T),c&&(w.h=c),u=w}return c=s.G,a=s.wa,c&&a&&H(u,c,a),H(u,"VER",s.ka),He(s,u),u}function Ni(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Vr({ab:c})):new J(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oi(){}n=Oi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Cn(){}Cn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ht.call(this),this.g=new Ii(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new me(this)}A(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Nr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=Er(s),s=c);a.i.push(new Tl(a.Ya++,s)),a.I==3&&Rn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,vt.Z.N.call(this)};function ki(s){Tr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}A(ki,Tr);function Mi(){vr.call(this),this.status=1}A(Mi,vr);function me(s){this.g=s}A(me,Oi),me.prototype.ra=function(){gt(this.g,"a")},me.prototype.qa=function(s){gt(this.g,new ki(s))},me.prototype.pa=function(s){gt(this.g,new Mi)},me.prototype.oa=function(){gt(this.g,"b")},Cn.prototype.createWebChannel=Cn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Yo=function(){return new Cn},Jo=function(){return yn()},Xo=Yt,Jr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Mn=En,Js.COMPLETE="complete",Qo=Js,Gs.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Ke=Gs,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Wo=J}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});const Xi="@firebase/firestore",Ji="4.9.2";/**
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
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ce="12.3.0";/**
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
 */const ae=new $o("@firebase/firestore");function ge(){return ae.logLevel}function V(n,...t){if(ae.logLevel<=U.DEBUG){const e=t.map(ds);ae.debug(`Firestore (${Ce}): ${n}`,...e)}}function le(n,...t){if(ae.logLevel<=U.ERROR){const e=t.map(ds);ae.error(`Firestore (${Ce}): ${n}`,...e)}}function rr(n,...t){if(ae.logLevel<=U.WARN){const e=t.map(ds);ae.warn(`Firestore (${Ce}): ${n}`,...e)}}function ds(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Zo(n,r,e)}function Zo(n,t,e){let r=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw le(r),new Error(r)}function Y(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Zo(t,i,r)}function q(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ie{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ta{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Au{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(dt.UNAUTHENTICATED)))}shutdown(){}}class wu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ru{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new ta(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new dt(t)}}class Su{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Su(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ou(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Yi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ps{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=bu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Yr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Br(i)===Br(o)?B(i,o):Br(i)?1:-1}return B(n.length,t.length)}const Vu=55296,Du=57343;function Br(n){const t=n.charCodeAt(0);return t>=Vu&&t<=Du}function ve(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const Zi="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),i=bt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Yr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fs.fromString(t.substring(4,t.length-2))}}class X extends bt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const Nu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends bt{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Nu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zi}static keyField(){return new at([Zi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
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
 */function ea(n,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ou(n,t,e,r){if(t===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function to(n){if(!M.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function eo(n){if(M.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function na(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function ra(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ms(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,t){const e={typeString:n};return t&&(e.value=t),e}function ln(n,t){if(!na(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const no=-62135596800,ro=1e6;class K{static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ro);return new K(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<no)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ro}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:K._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ln(t,K._jsonSchema))return new K(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-no;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}K._jsonSchemaVersion="firestore/timestamp/1.0",K._jsonSchema={type:tt("string",K._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new K(0,0))}static max(){return new G(new K(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rn=-1;function ku(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new K(e+1,0):new K(e,r));return new Gt(i,M.empty(),t)}function Mu(n){return new Gt(n.readTime,n.key,rn)}class Gt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Gt(G.min(),M.empty(),rn)}static max(){return new Gt(G.max(),M.empty(),rn)}}function xu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const Lu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function gs(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Lu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,l=!1;t.forEach((h=>{++i,h.next((()=>{++o,l&&o===i&&e()}),(f=>r(f)))})),l=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((I=>{l[d]=I,++h,h===o&&r(l)}),(I=>i(I)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Uu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _s{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}_s.ce=-1;/**
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
 */const ys=-1;function Es(n){return n==null}function zn(n){return n===0&&1/n==-1/0}function Bu(n){return typeof n=="number"&&Number.isInteger(n)&&!zn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sa="";function ju(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=so(t)),t=$u(n.get(e),t);return so(t)}function $u(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case sa:e+="";break;default:e+=o}}return e}function so(n){return n+sa+""}/**
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
 */function io(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ia(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Tt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new Tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new it(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oo(this.data.getIterator())}getIteratorFrom(t){return new oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new St([])}unionWith(t){let e=new lt(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ve(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qu("Invalid base64 string: "+o):o}})(t);return new Vt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o})(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Hu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ce(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=Hu.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ie(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */const oa="server_timestamp",aa="__type__",la="__previous_value__",ca="__local_write_time__";function Ts(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[aa])==null?void 0:r.stringValue)===oa}function vs(n){const t=n.mapValue.fields[la];return Ts(t)?vs(t):t}function Gn(n){const t=ce(n.mapValue.fields[ca].timestampValue);return new K(t.seconds,t.nanos)}/**
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
 */class zu{constructor(t,e,r,i,o,l,h,f,d,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=I}}const Kn="(default)";class Wn{constructor(t,e){this.projectId=t,this.database=e||Kn}static empty(){return new Wn("","")}get isDefaultDatabase(){return this.database===Kn}isEqual(t){return t instanceof Wn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ua="__type__",Gu="__max__",Dn={mapValue:{}},ha="__vector__",Zr="value";function ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ts(n)?4:Wu(n)?9007199254740991:Ku(n)?10:11:L(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=ue(n);if(e!==ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Gn(n).isEqual(Gn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ce(i.timestampValue),h=ce(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Ie(i.bytesValue).isEqual(Ie(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ot(i.doubleValue),h=ot(o.doubleValue);return l===h?zn(l)===zn(h):isNaN(l)&&isNaN(h)}return!1})(n,t);case 9:return ve(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return(function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(io(l)!==io(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Dt(l[f],h[f])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function sn(n,t){return(n.values||[]).find((e=>Dt(e,t)))!==void 0}function Ae(n,t){if(n===t)return 0;const e=ue(n),r=ue(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,l){const h=ot(o.integerValue||o.doubleValue),f=ot(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,t);case 3:return ao(n.timestampValue,t.timestampValue);case 4:return ao(Gn(n),Gn(t));case 5:return Yr(n.stringValue,t.stringValue);case 6:return(function(o,l){const h=Ie(o),f=Ie(l);return h.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,l){const h=o.split("/"),f=l.split("/");for(let d=0;d<h.length&&d<f.length;d++){const I=B(h[d],f[d]);if(I!==0)return I}return B(h.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,l){const h=B(ot(o.latitude),ot(l.latitude));return h!==0?h:B(ot(o.longitude),ot(l.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return lo(n.arrayValue,t.arrayValue);case 10:return(function(o,l){var R,b,N,k;const h=o.fields||{},f=l.fields||{},d=(R=h[Zr])==null?void 0:R.arrayValue,I=(b=f[Zr])==null?void 0:b.arrayValue,A=B(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((k=I==null?void 0:I.values)==null?void 0:k.length)||0);return A!==0?A:lo(d,I)})(n.mapValue,t.mapValue);case 11:return(function(o,l){if(o===Dn.mapValue&&l===Dn.mapValue)return 0;if(o===Dn.mapValue)return 1;if(l===Dn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),d=l.fields||{},I=Object.keys(d);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const R=Yr(f[A],I[A]);if(R!==0)return R;const b=Ae(h[f[A]],d[I[A]]);if(b!==0)return b}return B(f.length,I.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ao(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ce(n),r=ce(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function lo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ae(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function we(n){return ts(n)}function ts(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ce(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ie(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ts(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${ts(e.fields[l])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function xn(n){switch(ue(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=vs(n);return t?16+xn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+xn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Pe(r.fields,((o,l)=>{i+=o.length+xn(l)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function es(n){return!!n&&"integerValue"in n}function Is(n){return!!n&&"arrayValue"in n}function Ln(n){return!!n&&"mapValue"in n}function Ku(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ua])==null?void 0:r.stringValue)===ha}function Qe(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Pe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Qe(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qe(n.arrayValue.values[e]);return t}return{...n}}function Wu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Gu}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ln(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(e)}setAll(t){let e=at.emptyPath(),r={},i=[];t.forEach(((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=Qe(l):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Ln(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Ln(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Pe(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(Qe(this.value))}}function fa(n){const t=[];return Pe(n.fields,((e,r)=>{const i=new at([e]);if(Ln(r)){const o=fa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)})),new St(t)}/**
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
 */class At{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new At(t,0,G.min(),G.min(),G.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new At(t,1,e,G.min(),r,i,0)}static newNoDocument(t,e){return new At(t,2,e,G.min(),G.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,G.min(),G.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qn{constructor(t,e){this.position=t,this.inclusive=e}}function co(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(l.referenceValue),e.key):r=Ae(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class da{}class st extends da{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ju(t,e,r):e==="array-contains"?new th(t,r):e==="in"?new eh(t,r):e==="not-in"?new nh(t,r):e==="array-contains-any"?new rh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Yu(t,r):new Zu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ae(e,this.value)):e!==null&&ue(this.value)===ue(e)&&this.matchesComparison(Ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends da{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Kt(t,e)}matches(t){return pa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pa(n){return n.op==="and"}function ma(n){return Xu(n)&&pa(n)}function Xu(n){for(const t of n.filters)if(t instanceof Kt)return!1;return!0}function ns(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+we(n.value);if(ma(n))return n.filters.map((t=>ns(t))).join(",");{const t=n.filters.map((e=>ns(e))).join(",");return`${n.op}(${t})`}}function ga(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)})(n,t):n instanceof Kt?(function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,l,h)=>o&&ga(l,i.filters[h])),!0):!1})(n,t):void L(19439)}function _a(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`})(n):n instanceof Kt?(function(e){return e.op.toString()+" {"+e.getFilters().map(_a).join(" ,")+"}"})(n):"Filter"}class Ju extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yu extends st{constructor(t,e){super(t,"in",e),this.keys=ya("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Zu extends st{constructor(t,e){super(t,"not-in",e),this.keys=ya("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ya(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class th extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Is(e)&&sn(e.arrayValue,this.value)}}class eh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&sn(this.value.arrayValue,e)}}class nh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!sn(this.value.arrayValue,e)}}class rh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Is(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>sn(this.value.arrayValue,r)))}}/**
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
 */class sh{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function ho(n,t=null,e=[],r=[],i=null,o=null,l=null){return new sh(n,t,e,r,i,o,l)}function As(n){const t=q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ns(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Es(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>we(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>we(r))).join(",")),t.Te=e}return t.Te}function ws(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Qu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ga(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uo(n.startAt,t.startAt)&&uo(n.endAt,t.endAt)}/**
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
 */class sr{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ih(n,t,e,r,i,o,l,h){return new sr(n,t,e,r,i,o,l,h)}function oh(n){return new sr(n)}function fo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ah(n){return n.collectionGroup!==null}function Xe(n){const t=q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new lt(at.comparator);return l.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(h=h.add(d.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Xn(o,r))})),e.has(at.keyField().canonicalString())||t.Ie.push(new Xn(at.keyField(),r))}return t.Ie}function oe(n){const t=q(n);return t.Ee||(t.Ee=lh(t,Xe(n))),t.Ee}function lh(n,t){if(n.limitType==="F")return ho(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Xn(i.field,o)}));const e=n.endAt?new Qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qn(n.startAt.position,n.startAt.inclusive):null;return ho(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function rs(n,t,e){return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ea(n,t){return ws(oe(n),oe(t))&&n.limitType===t.limitType}function Ta(n){return`${As(oe(n))}|lt:${n.limitType}`}function Ge(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>_a(i))).join(", ")}]`),Es(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>we(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>we(i))).join(",")),`Target(${r})`})(oe(n))}; limitType=${n.limitType})`}function Rs(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Xe(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(l,h,f){const d=co(l,h,f);return l.inclusive?d<=0:d<0})(r.startAt,Xe(r),i)||r.endAt&&!(function(l,h,f){const d=co(l,h,f);return l.inclusive?d>=0:d>0})(r.endAt,Xe(r),i))})(n,t)}function ch(n){return(t,e)=>{let r=!1;for(const i of Xe(n)){const o=uh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function uh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,l,h){const f=l.data.field(o),d=h.data.field(o);return f!==null&&d!==null?Ae(f,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return ia(this.inner)}size(){return this.innerSize}}/**
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
 */const hh=new Tt(M.comparator);function Jn(){return hh}const va=new Tt(M.comparator);function Nn(...n){let t=va;for(const e of n)t=t.insert(e.key,e);return t}function Ia(n){let t=va;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function se(){return Je()}function Aa(){return Je()}function Je(){return new he((n=>n.toString()),((n,t)=>n.isEqual(t)))}const fh=new Tt(M.comparator),dh=new lt(M.comparator);function pt(...n){let t=dh;for(const e of n)t=t.add(e);return t}const ph=new lt(B);function mh(){return ph}/**
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
 */function Ss(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zn(t)?"-0":t}}function wa(n){return{integerValue:""+n}}function gh(n,t){return Bu(t)?wa(t):Ss(n,t)}/**
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
 */class ir{constructor(){this._=void 0}}function _h(n,t,e){return n instanceof Yn?(function(i,o){const l={fields:{[aa]:{stringValue:oa},[ca]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ts(o)&&(o=vs(o)),o&&(l.fields[la]=o),{mapValue:l}})(e,t):n instanceof on?Sa(n,t):n instanceof an?Ca(n,t):(function(i,o){const l=Ra(i,o),h=po(l)+po(i.Ae);return es(l)&&es(i.Ae)?wa(h):Ss(i.serializer,h)})(n,t)}function yh(n,t,e){return n instanceof on?Sa(n,t):n instanceof an?Ca(n,t):e}function Ra(n,t){return n instanceof Zn?(function(r){return es(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Yn extends ir{}class on extends ir{constructor(t){super(),this.elements=t}}function Sa(n,t){const e=Pa(t);for(const r of n.elements)e.some((i=>Dt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class an extends ir{constructor(t){super(),this.elements=t}}function Ca(n,t){let e=Pa(t);for(const r of n.elements)e=e.filter((i=>!Dt(i,r)));return{arrayValue:{values:e}}}class Zn extends ir{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function po(n){return ot(n.integerValue||n.doubleValue)}function Pa(n){return Is(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Eh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof on&&i instanceof on||r instanceof an&&i instanceof an?ve(r.elements,i.elements,Dt):r instanceof Zn&&i instanceof Zn?Dt(r.Ae,i.Ae):r instanceof Yn&&i instanceof Yn})(n.transform,t.transform)}class Th{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class or{}function ba(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Da(n.key,Nt.none()):new un(n.key,n.data,Nt.none());{const e=n.data,r=wt.empty();let i=new lt(at.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new fe(n.key,r,new St(i.toArray()),Nt.none())}}function vh(n,t,e){n instanceof un?(function(i,o,l){const h=i.value.clone(),f=go(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(n,t,e):n instanceof fe?(function(i,o,l){if(!Fn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=go(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Va(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function Ye(n,t,e,r){return n instanceof un?(function(o,l,h,f){if(!Fn(o.precondition,l))return h;const d=o.value.clone(),I=_o(o.fieldTransforms,f,l);return d.setAll(I),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof fe?(function(o,l,h,f){if(!Fn(o.precondition,l))return h;const d=_o(o.fieldTransforms,f,l),I=l.data;return I.setAll(Va(o)),I.setAll(d),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,l,h){return Fn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h})(n,t,e)}function Ih(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ra(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ve(r,i,((o,l)=>Eh(o,l)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class un extends or{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fe extends or{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Va(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function go(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,yh(l,h,e[i]))}return r}function _o(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,_h(o,l,t))}return r}class Da extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ah extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&vh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ye(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ye(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Aa();return this.mutations.forEach((i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=ba(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(G.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pt())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,((e,r)=>mo(e,r)))&&ve(this.baseMutations,t.baseMutations,((e,r)=>mo(e,r)))}}class Cs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return fh})();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Cs(t,e,r,i)}}/**
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
 */class Rh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Z,F;function Sh(n){switch(n){case C.OK:return L(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Ch(n){if(n===void 0)return le("GRPC error has no .code"),C.UNKNOWN;switch(n){case Z.OK:return C.OK;case Z.CANCELLED:return C.CANCELLED;case Z.UNKNOWN:return C.UNKNOWN;case Z.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Z.INTERNAL:return C.INTERNAL;case Z.UNAVAILABLE:return C.UNAVAILABLE;case Z.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Z.NOT_FOUND:return C.NOT_FOUND;case Z.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Z.ABORTED:return C.ABORTED;case Z.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Z.DATA_LOSS:return C.DATA_LOSS;default:return L(39323,{code:n})}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new fs([4294967295,4294967295],0);class Ph{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ss(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Vh(n,t){return ss(n,t.toTimestamp())}function Ee(n){return Y(!!n,49232),G.fromTimestamp((function(e){const r=ce(e);return new K(r.seconds,r.nanos)})(n))}function Na(n,t){return is(n,t).canonicalString()}function is(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Dh(n){const t=X.fromString(n);return Y(Uh(t),10190,{key:t.toString()}),t}function os(n,t){return Na(n.databaseId,t.path)}function Nh(n){const t=Dh(n);return t.length===4?X.emptyPath():kh(t)}function Oh(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kh(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yo(n,t,e){return{name:os(n,t),fields:e.value.mapValue.fields}}function Mh(n,t){let e;if(t instanceof un)e={update:yo(n,t.key,t.value)};else if(t instanceof Da)e={delete:os(n,t.key)};else if(t instanceof fe)e={update:yo(n,t.key,t.data),updateMask:Fh(t.fieldMask)};else{if(!(t instanceof Ah))return L(16599,{Vt:t.type});e={verify:os(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,l){const h=l.transform;if(h instanceof Yn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof on)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof an)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Zn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw L(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Vh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function xh(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(i,o){let l=i.updateTime?Ee(i.updateTime):Ee(o);return l.isEqual(G.min())&&(l=Ee(o)),new Th(l,i.transformResults||[])})(e,t)))):[]}function Lh(n){let t=Nh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(A){const R=Oa(A);return R instanceof Kt&&ma(R)?R.getFilters():[R]})(e.where));let l=[];e.orderBy&&(l=(function(A){return A.map((R=>(function(N){return new Xn(_e(N.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(R)))})(e.orderBy));let h=null;e.limit&&(h=(function(A){let R;return R=typeof A=="object"?A.value:A,Es(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(A){const R=!!A.before,b=A.values||[];return new Qn(b,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(A){const R=!A.before,b=A.values||[];return new Qn(b,R)})(e.endAt)),ih(t,i,l,o,h,"F",f,d)}function Oa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_e(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_e(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_e(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=_e(e.unaryFilter.field);return st.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(_e(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Kt.create(e.compositeFilter.filters.map((r=>Oa(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function _e(n){return at.fromServerFormat(n.fieldPath)}function Fh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Uh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Bh{constructor(t){this.yt=t}}function jh(n){const t=Lh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rs(t,t.limit,"L"):t}/**
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
 */class $h{constructor(){this.Cn=new qh}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Gt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class qh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(X.comparator)).toArray()}}/**
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
 */const Eo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ka=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(ka,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class Re{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Re(0)}static cr(){return new Re(-1)}}/**
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
 */const To="LruGarbageCollector",Hh=1048576;function vo([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class zh{constructor(t){this.Ir=t,this.buffer=new lt(vo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();vo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Gh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(To,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cn(e)?V(To,"Ignoring IndexedDB error during garbage collection: ",e):await gs(e)}await this.Vr(3e5)}))}}class Kh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(_s.ce);const r=new zh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Eo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,l,h,f,d;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,l=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,h=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(d=Date.now(),ge()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-I}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function Wh(n,t){return new Kh(n,t)}/**
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
 */class Qh{constructor(){this.changes=new he((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Ye(r.mutation,i,St.empty(),K.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,pt()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=pt()){const i=se();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let l=Nn();return o.forEach(((h,f)=>{l=l.insert(h,f.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=se();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,pt())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((l,h)=>{e.set(l,h)}))}))}computeViews(t,e,r,i){let o=Jn();const l=Je(),h=(function(){return Je()})();return e.forEach(((f,d)=>{const I=r.get(d.key);i.has(d.key)&&(I===void 0||I.mutation instanceof fe)?o=o.insert(d.key,d):I!==void 0?(l.set(d.key,I.mutation.getFieldMask()),Ye(I.mutation,d,I.mutation.getFieldMask(),K.now())):l.set(d.key,St.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,I)=>l.set(d,I))),e.forEach(((d,I)=>h.set(d,new Xh(I,l.get(d)??null)))),h)))}recalculateAndSaveOverlays(t,e){const r=Je();let i=new Tt(((l,h)=>l-h)),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const h of l)h.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let I=r.get(f)||St.empty();I=h.applyToLocalView(d,I),r.set(f,I);const A=(i.get(h.batchId)||pt()).add(f);i=i.insert(h.batchId,A)}))})).next((()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),d=f.key,I=f.value,A=Aa();I.forEach((R=>{if(!o.has(R)){const b=ba(e.get(R),r.get(R));b!==null&&A.set(R,b),o=o.add(R)}})),l.push(this.documentOverlayCache.saveOverlays(t,d,A))}return S.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(l){return M.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ah(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(se());let h=rn,f=o;return l.next((d=>S.forEach(d,((I,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(I)?S.resolve():this.remoteDocumentCache.getEntry(t,I).next((R=>{f=f.insert(I,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,pt()))).next((I=>({batchId:h,changes:Ia(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let i=Nn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Nn();return this.indexManager.getCollectionParents(t,o).next((h=>S.forEach(h,(f=>{const d=(function(A,R){return new sr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((I=>{I.forEach(((A,R)=>{l=l.insert(A,R)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((l=>{o.forEach(((f,d)=>{const I=d.getKey();l.get(I)===null&&(l=l.insert(I,At.newInvalidDocument(I)))}));let h=Nn();return l.forEach(((f,d)=>{const I=o.get(f);I!==void 0&&Ye(I.mutation,d,St.empty(),K.now()),Rs(e,d)&&(h=h.insert(f,d))})),h}))}}/**
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
 */class Yh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ee(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:jh(i.bundledQuery),readTime:Ee(i.readTime)}})(e)),S.resolve()}}/**
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
 */class Zh{constructor(){this.overlays=new Tt(M.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=se();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=se(),o=e.length+1,l=new M(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Tt(((d,I)=>d-I));const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let I=o.get(d.largestBatchId);I===null&&(I=se(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const h=se(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,I)=>h.set(d,I))),!(h.size()>=i)););return S.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Rh(e,r));let o=this.qr.get(e);o===void 0&&(o=pt(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class tf{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class Ps{constructor(){this.Qr=new lt(rt.$r),this.Ur=new lt(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new rt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new M(new X([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),o.push(l.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new X([])),r=new rt(e,t),i=new rt(e,t+1);let o=pt();return this.Ur.forEachInRange([r,i],(l=>{o=o.add(l.key)})),o}containsKey(t){const e=new rt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
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
 */class ef{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new lt(rt.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new wh(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Zr=this.Zr.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return S.resolve(l)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ys:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(l=>{const h=this.Xr(l.Yr);o.push(h)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(B);return e.forEach((i=>{const o=new rt(i,0),l=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],(h=>{r=r.add(h.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const l=new rt(new M(o),0);let h=new lt(B);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(h=h.add(f.Yr)),!0)}),l),S.resolve(this.ti(h))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){Y(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new rt(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class nf{constructor(t){this.ri=t,this.docs=(function(){return new Tt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Jn();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():At.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Jn();const l=e.path,h=new M(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:d,value:{document:I}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||xu(Mu(I),r)<=0||(i.has(I.key)||Rs(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new rf(this)}getSize(t){return S.resolve(this.size)}}class rf extends Qh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class sf{constructor(t){this.persistence=t,this.si=new he((e=>As(e)),ws),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new Ps,this.targetCount=0,this.ai=Re.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((l=>{o.push(i.markPotentiallyOrphaned(t,l))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
 */class Ma{constructor(t,e){this.ui={},this.overlays={},this.ci=new _s(0),this.li=!1,this.li=!0,this.hi=new tf,this.referenceDelegate=t(this),this.Pi=new sf(this),this.indexManager=new $h,this.remoteDocumentCache=(function(i){return new nf(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Bh(e),this.Ii=new Yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Zh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new ef(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new of(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class of extends Fu{constructor(t){super(),this.currentSequenceNumber=t}}class bs{constructor(t){this.persistence=t,this.Ri=new Ps,this.Vi=null}static mi(t){return new bs(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=M.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,G.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class tr{constructor(t,e){this.persistence=t,this.pi=new he((r=>ju(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Wh(this,e)}static mi(t,e){return new tr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(l=>this.br(t,l,e).next((h=>{h||(r++,o.removeEntry(l,G.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=xn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Vs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=pt(),i=pt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vs(t,e.fromCache,r,i)}}/**
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
 */class af{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class lf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rc()?8:Uu(ec())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((l=>{o.result=l})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((l=>{o.result=l}))})).next((()=>{if(o.result)return;const l=new af;return this.Ss(t,e,l).next((h=>{if(o.result=h,this.Vs)return this.bs(t,e,l,h.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(ge()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(ge()<=U.DEBUG&&V("QueryEngine","Query:",Ge(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ge()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oe(e))):S.resolve())}ys(t,e){if(fo(e))return S.resolve(null);let r=oe(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=rs(e,null,"F"),r=oe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const l=pt(...o);return this.ps.getDocuments(t,l).next((h=>this.indexManager.getMinOffset(t,r).next((f=>{const d=this.Ds(e,h);return this.Cs(e,d,l,f.readTime)?this.ys(t,rs(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,r,i){return fo(e)||i.isEqual(G.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const l=this.Ds(e,o);return this.Cs(e,l,r,i)?S.resolve(null):(ge()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ge(e)),this.vs(t,l,e,ku(i,rn)).next((h=>h)))}))}Ds(t,e){let r=new lt(ch(t));return e.forEach(((i,o)=>{Rs(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return ge()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.ps.getDocumentsMatchingQuery(t,e,Gt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((l=>{o=o.insert(l.key,l)})),o)))}}/**
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
 */const cf="LocalStore";class uf{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Tt(B),this.xs=new he((o=>As(o)),ws),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function hf(n,t,e,r){return new uf(n,t,e,r)}async function xa(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const l=[],h=[];let f=pt();for(const d of i){l.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}for(const d of o){h.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next((d=>({Ls:d,removedBatchIds:l,addedBatchIds:h})))}))}))}function ff(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(h,f,d,I){const A=d.batch,R=A.keys();let b=S.resolve();return R.forEach((N=>{b=b.next((()=>I.getEntry(f,N))).next((k=>{const O=d.docVersions.get(N);Y(O!==null,48541),k.version.compareTo(O)<0&&(A.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),I.addEntry(k)))}))})),b.next((()=>h.mutationQueue.removeMutationBatch(f,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=pt();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(f=f.add(h.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function df(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function pf(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=ys),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Io{constructor(){this.activeTargetIds=mh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mf{constructor(){this.Mo=new Io,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Io,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gf{Oo(t){}shutdown(){}}/**
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
 */const Ao="ConnectivityMonitor";class wo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Ao,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(Ao,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function as(){return On===null?On=(function(){return 268435456+Math.round(2147483648*Math.random())})():On++,"0x"+On.toString(16)}/**
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
 */const jr="RestConnection",_f={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Kn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const l=as(),h=this.zo(t,e.toUriEncodedString());V(jr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(h),I=us(d);return this.Jo(t,h,f,r,I).then((A=>(V(jr,`Received RPC '${t}' ${l}: `,A),A)),(A=>{throw rr(jr,`RPC '${t}' ${l} failed with error: `,A,"url: ",h,"request:",r),A}))}Ho(t,e,r,i,o,l){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ce})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=_f[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Ef{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const ft="WebChannelConnection";class Tf extends yf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const l=as();return new Promise(((h,f)=>{const d=new Wo;d.setWithCredentials(!0),d.listenOnce(Qo.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Mn.NO_ERROR:const A=d.getResponseJson();V(ft,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(A)),h(A);break;case Mn.TIMEOUT:V(ft,`RPC '${t}' ${l} timed out`),f(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Mn.HTTP_ERROR:const R=d.getStatus();if(V(ft,`RPC '${t}' ${l} failed with status:`,R,"response text:",d.getResponseText()),R>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const k=(function(W){const j=W.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN})(N.status);f(new D(k,N.message))}else f(new D(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new D(C.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(ft,`RPC '${t}' ${l} completed.`)}}));const I=JSON.stringify(i);V(ft,`RPC '${t}' ${l} sending request:`,i),d.send(e,"POST",I,r,15)}))}T_(t,e,r){const i=as(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Yo(),h=Jo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ft,`Creating RPC '${t}' stream ${i}: ${I}`,f);const A=l.createWebChannel(I,f);this.I_(A);let R=!1,b=!1;const N=new Ef({Yo:O=>{b?V(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,O):(R||(V(ft,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),V(ft,`RPC '${t}' stream ${i} sending:`,O),A.send(O))},Zo:()=>A.close()}),k=(O,W,j)=>{O.listen(W,(Q=>{try{j(Q)}catch(ct){setTimeout((()=>{throw ct}),0)}}))};return k(A,Ke.EventType.OPEN,(()=>{b||(V(ft,`RPC '${t}' stream ${i} transport opened.`),N.o_())})),k(A,Ke.EventType.CLOSE,(()=>{b||(b=!0,V(ft,`RPC '${t}' stream ${i} transport closed`),N.a_(),this.E_(A))})),k(A,Ke.EventType.ERROR,(O=>{b||(b=!0,rr(ft,`RPC '${t}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),N.a_(new D(C.UNAVAILABLE,"The operation could not be completed")))})),k(A,Ke.EventType.MESSAGE,(O=>{var W;if(!b){const j=O.data[0];Y(!!j,16349);const Q=j,ct=(Q==null?void 0:Q.error)||((W=Q[0])==null?void 0:W.error);if(ct){V(ft,`RPC '${t}' stream ${i} received error:`,ct);const It=ct.status;let ut=(function(g){const E=Z[g];if(E!==void 0)return Ch(E)})(It),y=ct.message;ut===void 0&&(ut=C.INTERNAL,y="Unknown error status: "+It+" with message "+ct.message),b=!0,N.a_(new D(ut,y)),A.close()}else V(ft,`RPC '${t}' stream ${i} received:`,j),N.u_(j)}})),k(h,Xo.STAT_EVENT,(O=>{O.stat===Jr.PROXY?V(ft,`RPC '${t}' stream ${i} detected buffering proxy`):O.stat===Jr.NOPROXY&&V(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function $r(){return typeof document<"u"?document:null}/**
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
 */function ar(n){return new Ph(n,!0)}/**
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
 */class La{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ro="PersistentStream";class vf{constructor(t,e,r,i,o,l,h,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new La(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(le(e.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(Ro,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(Ro,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class If extends vf{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=xh(t.writeResults,t.commitTime),r=Ee(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Oh(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Mh(this.serializer,r)))};this.q_(e)}}/**
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
 */class Af{}class wf extends Af{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Go(t,is(e,r),i,o,l))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Ho(t,is(e,r),i,l,h,o))).catch((l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(C.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Rf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(le(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const hn="RemoteStore";class Sf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{dn(this)&&(V(hn,"Restarting streams for network reachability change."),await(async function(f){const d=q(f);d.Ea.add(4),await fn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await lr(d)})(this))}))})),this.Ra=new Rf(r,i)}}async function lr(n){if(dn(n))for(const t of n.da)await t(!0)}async function fn(n){for(const t of n.da)await t(!1)}function dn(n){return q(n).Ea.size===0}async function Fa(n,t,e){if(!cn(t))throw t;n.Ea.add(1),await fn(n),n.Ra.set("Offline"),e||(e=()=>df(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(hn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await lr(n)}))}function Ua(n,t){return t().catch((e=>Fa(n,e,t)))}async function cr(n){const t=q(n),e=Wt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ys;for(;Cf(t);)try{const i=await pf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Pf(t,i)}catch(i){await Fa(t,i)}Ba(t)&&ja(t)}function Cf(n){return dn(n)&&n.Ta.length<10}function Pf(n,t){n.Ta.push(t);const e=Wt(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Ba(n){return dn(n)&&!Wt(n).x_()&&n.Ta.length>0}function ja(n){Wt(n).start()}async function bf(n){Wt(n).ra()}async function Vf(n){const t=Wt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Df(n,t,e){const r=n.Ta.shift(),i=Cs.from(r,t,e);await Ua(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await cr(n)}async function Nf(n,t){t&&Wt(n).X_&&await(async function(r,i){if((function(l){return Sh(l)&&l!==C.ABORTED})(i.code)){const o=r.Ta.shift();Wt(r).B_(),await Ua(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await cr(r)}})(n,t),Ba(n)&&ja(n)}async function So(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V(hn,"RemoteStore received new credentials");const r=dn(e);e.Ea.add(3),await fn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await lr(e)}async function Of(n,t){const e=q(n);t?(e.Ea.delete(2),await lr(e)):t||(e.Ea.add(2),await fn(e),e.Ra.set("Unknown"))}function Wt(n){return n.fa||(n.fa=(function(e,r,i){const o=q(e);return o.sa(),new If(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:bf.bind(null,n),r_:Nf.bind(null,n),ta:Vf.bind(null,n),na:Df.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await cr(n)):(await n.fa.stop(),n.Ta.length>0&&(V(hn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ds{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new Ds(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(n,t){if(le("AsyncQueue",`${t}: ${n}`),cn(n))return new D(C.UNAVAILABLE,`${t}: ${n}`);throw n}class kf{constructor(){this.queries=Co(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=q(e),o=i.queries;i.queries=Co(),o.forEach(((l,h)=>{for(const f of h.Sa)f.onError(r)}))})(this,new D(C.ABORTED,"Firestore shutting down"))}}function Co(){return new he((n=>Ta(n)),Ea)}function Mf(n){n.Ca.forEach((t=>{t.next()}))}var Po,bo;(bo=Po||(Po={})).Ma="default",bo.Cache="cache";const xf="SyncEngine";class Lf{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new he((h=>Ta(h)),Ea),this.Iu=new Map,this.Eu=new Set,this.du=new Tt(M.comparator),this.Au=new Map,this.Ru=new Ps,this.Vu={},this.mu=new Map,this.fu=Re.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ff(n,t,e){const r=$f(n);try{const i=await(function(l,h){const f=q(l),d=K.now(),I=h.reduce(((b,N)=>b.add(N.key)),pt());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let N=Jn(),k=pt();return f.Ns.getEntries(b,I).next((O=>{N=O,N.forEach(((W,j)=>{j.isValidDocument()||(k=k.add(W))}))})).next((()=>f.localDocuments.getOverlayedDocuments(b,N))).next((O=>{A=O;const W=[];for(const j of h){const Q=Ih(j,A.get(j.key).overlayedDocument);Q!=null&&W.push(new fe(j.key,Q,fa(Q.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,d,W,h)})).next((O=>{R=O;const W=O.applyToLocalDocumentSet(A,k);return f.documentOverlayCache.saveOverlays(b,O.batchId,W)}))})).then((()=>({batchId:R.batchId,changes:Ia(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(l,h,f){let d=l.Vu[l.currentUser.toKey()];d||(d=new Tt(B)),d=d.insert(h,f),l.Vu[l.currentUser.toKey()]=d})(r,i.batchId,e),await ur(r,i.changes),await cr(r.remoteStore)}catch(i){const o=$a(i,"Failed to persist write");e.reject(o)}}function Vo(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,l)=>{const h=l.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(l,h){const f=q(l);f.onlineState=h;let d=!1;f.queries.forEach(((I,A)=>{for(const R of A.Sa)R.va(h)&&(d=!0)})),d&&Mf(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uf(n,t){const e=q(n),r=t.batch.batchId;try{const i=await ff(e.localStore,t);Ha(e,r,null),qa(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ur(e,i)}catch(i){await gs(i)}}async function Bf(n,t,e){const r=q(n);try{const i=await(function(l,h){const f=q(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let I;return f.mutationQueue.lookupMutationBatch(d,h).next((A=>(Y(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(d,A)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,I,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I))).next((()=>f.localDocuments.getDocuments(d,I)))}))})(r.localStore,t);Ha(r,t,e),qa(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ur(r,i)}catch(i){await gs(i)}}function qa(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Ha(n,t,e){const r=q(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function ur(n,t,e){const r=q(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,f)=>{l.push(r.pu(f,t,e).then((d=>{var I;if((d||e)&&r.isPrimaryClient){const A=d?!d.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){i.push(d);const A=Vs.As(f.targetId,d);o.push(A)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(f,d){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>S.forEach(d,(R=>S.forEach(R.Es,(b=>I.persistence.referenceDelegate.addReference(A,R.targetId,b))).next((()=>S.forEach(R.ds,(b=>I.persistence.referenceDelegate.removeReference(A,R.targetId,b)))))))))}catch(A){if(!cn(A))throw A;V(cf,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const b=I.Ms.get(R),N=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(N);I.Ms=I.Ms.insert(R,k)}}})(r.localStore,o))}async function jf(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V(xf,"User change. New user:",t.toKey());const r=await xa(e.localStore,t);e.currentUser=t,(function(o,l){o.mu.forEach((h=>{h.forEach((f=>{f.reject(new D(C.CANCELLED,l))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ur(e,r.Ls)}}function $f(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bf.bind(null,t),t}class er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ar(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return hf(this.persistence,new lf,t.initialUser,this.serializer)}Cu(t){return new Ma(bs.mi,this.serializer)}Du(t){return new mf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}er.provider={build:()=>new er};class qf extends er{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof tr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Gh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Ma((r=>tr.mi(r,e)),this.serializer)}}class ls{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jf.bind(null,this.syncEngine),await Of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new kf})()}createDatastore(t){const e=ar(t.databaseInfo.databaseId),r=(function(o){return new Tf(o)})(t.databaseInfo);return(function(o,l,h,f){return new wf(o,l,h,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,l,h){return new Sf(r,i,o,l,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Vo(this.syncEngine,e,0)),(function(){return wo.v()?new wo:new gf})())}createSyncEngine(t,e){return(function(i,o,l,h,f,d,I){const A=new Lf(i,o,l,h,f,d);return I&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=q(i);V(hn,"RemoteStore shutting down."),o.Ea.add(5),await fn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ls.provider={build:()=>new ls};/**
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
 */const Qt="FirestoreClient";class Hf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async l=>{V(Qt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(V(Qt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$a(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function qr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Qt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await xa(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Do(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zf(n);V(Qt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>So(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>So(t.remoteStore,i))),n._onlineComponents=t}async function zf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Qt,"Using user provided OfflineComponentProvider");try{await qr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;rr("Error using user provided cache. Falling back to memory cache: "+e),await qr(n,new er)}}else V(Qt,"Using default OfflineComponentProvider"),await qr(n,new qf(void 0));return n._offlineComponents}async function Gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Qt,"Using user provided OnlineComponentProvider"),await Do(n,n._uninitializedComponentsProvider._online)):(V(Qt,"Using default OnlineComponentProvider"),await Do(n,new ls))),n._onlineComponents}function Kf(n){return Gf(n).then((t=>t.syncEngine))}/**
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
 */function za(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const No=new Map;/**
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
 */const Ga="firestore.googleapis.com",Oo=!0;class ko{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ga,this.ssl=Oo}else this.host=t.host,this.ssl=t.ssl??Oo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ka;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Hh)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ou("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=za(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ko({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ko(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Au;switch(r.type){case"firstParty":return new Cu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=No.get(e);r&&(V("ComponentProvider","Removing Datastore"),No.delete(e),r.terminate())})(this),Promise.resolve()}}function Wf(n,t,e,r={}){var d;n=ra(n,hr);const i=us(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Xl(`https://${h}`),tc("Firestore",!0)),o.host!==Ga&&o.host!==h&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!$n(f,l)&&(n._setSettings(f),r.mockUserToken)){let I,A;if(typeof r.mockUserToken=="string")I=r.mockUserToken,A=dt.MOCK_USER;else{I=Jl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new dt(R)}n._authCredentials=new wu(new ta(I,A))}}/**
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
 */class Ns{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ns(this.firestore,t,this._query)}}class mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ln(e,mt._jsonSchema))return new mt(t,r||null,new M(X.fromString(e.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:tt("string",mt._jsonSchemaVersion),referencePath:tt("string")};class zt extends Ns{constructor(t,e,r){super(t,e,oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new M(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function Qf(n,t,...e){if(n=tn(n),ea("collection","path",t),n instanceof hr){const r=X.fromString(t,...e);return eo(r),new zt(n,null,r)}{if(!(n instanceof mt||n instanceof zt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return eo(r),new zt(n.firestore,null,r)}}function Xf(n,t,...e){if(n=tn(n),arguments.length===1&&(t=ps.newId()),ea("doc","path",t),n instanceof hr){const r=X.fromString(t,...e);return to(r),new mt(n,null,new M(r))}{if(!(n instanceof mt||n instanceof zt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return to(r),new mt(n.firestore,n instanceof zt?n.converter:null,new M(r))}}/**
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
 */const Mo="AsyncQueue";class xo{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new La(this,"async_queue_retry"),this._c=()=>{const r=$r();r&&V(Mo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=$r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ie;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!cn(t))throw t;V(Mo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,le("INTERNAL UNHANDLED ERROR: ",Lo(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Lo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Lo(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ka extends hr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new xo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xo(t),this._firestoreClient=void 0,await t}}}function Jf(n,t){const e=typeof n=="object"?n:uu(),r=typeof n=="string"?n:Kn,i=iu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Wl("firestore");o&&Wf(i,...o)}return i}function Yf(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zf(n),n._firestoreClient}function Zf(n){var r,i,o;const t=n._freezeSettings(),e=(function(h,f,d,I){return new zu(h,f,d,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,za(I.experimentalLongPollingOptions),I.useFetchStreams,I.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Hf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(Vt.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ln(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:tt("string",Rt._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class Os{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Wa{constructor(t){this._methodName=t}}/**
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
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(ln(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:tt("string",Ot._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class kt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ln(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new kt(t.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:tt("string",kt._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const td=/^__.*__$/;class ed{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Qa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class ks{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ks({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return nr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Qa(this.Ac)&&td.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class nd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ar(t)}Cc(t,e,r,i=!1){return new ks({Ac:t,methodName:e,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rd(n){const t=n._freezeSettings(),e=ar(n._databaseId);return new nd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sd(n,t,e,r,i,o={}){const l=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);Za("Data must be an object, but it was:",l,r);const h=Ja(r,l);let f,d;if(o.merge)f=new St(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const R=id(t,A,e);if(!l.contains(R))throw new D(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ad(I,R)||I.push(R)}f=new St(I),d=l.fieldTransforms.filter((A=>f.covers(A.field)))}else f=null,d=l.fieldTransforms;return new ed(new wt(h),f,d)}function Xa(n,t){if(Ya(n=tn(n)))return Za("Unsupported field value:",t,n),Ja(n,t);if(n instanceof Wa)return(function(r,i){if(!Qa(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const h of r){let f=Xa(h,i.wc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=K.fromDate(r);return{timestampValue:ss(i.serializer,o)}}if(r instanceof K){const o=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ss(i.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:bh(i.serializer,r._byteString)};if(r instanceof mt){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Na(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kt)return(function(l,h){return{mapValue:{fields:{[ua]:{stringValue:ha},[Zr]:{arrayValue:{values:l.toArray().map((d=>{if(typeof d!="number")throw h.Sc("VectorValues must only contain numeric values.");return Ss(h.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${ms(r)}`)})(n,t)}function Ja(n,t){const e={};return ia(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(n,((r,i)=>{const o=Xa(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Ya(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Ot||n instanceof Rt||n instanceof mt||n instanceof Wa||n instanceof kt)}function Za(n,t,e){if(!Ya(e)||!na(e)){const r=ms(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function id(n,t,e){if((t=tn(t))instanceof Os)return t._internalPath;if(typeof t=="string")return tl(n,t);throw nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const od=new RegExp("[~\\*/\\[\\]]");function tl(n,t,e){if(t.search(od)>=0)throw nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Os(...t.split("."))._internalPath}catch{throw nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function nr(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(C.INVALID_ARGUMENT,h+n+f)}function ad(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class el{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ld(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(nl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ld extends el{data(){return super.data()}}function nl(n,t){return typeof t=="string"?tl(n,t):t instanceof Os?t._internalPath:t._delegate._internalPath}/**
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
 */function cd(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class kn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Te extends el{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Un(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(nl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Te._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Te._jsonSchemaVersion="firestore/documentSnapshot/1.0",Te._jsonSchema={type:tt("string",Te._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Un extends Te{data(t={}){return super.data(t)}}class Ze{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new kn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Un(this._firestore,this._userDataWriter,r.key,r,new kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((h=>{const f=new Un(i._firestore,i._userDataWriter,h.doc.key,h.doc,new kn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const f=new Un(i._firestore,i._userDataWriter,h.doc.key,h.doc,new kn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,I=-1;return h.type!==0&&(d=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),I=l.indexOf(h.doc.key)),{type:ud(h.type),doc:f,oldIndex:d,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ze._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ud(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}Ze._jsonSchemaVersion="firestore/querySnapshot/1.0",Ze._jsonSchema={type:tt("string",Ze._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};function hd(n,t){const e=ra(n.firestore,Ka),r=Xf(n),i=cd(n.converter,t);return fd(e,[sd(rd(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then((()=>r))}function fd(n,t){return(function(r,i){const o=new ie;return r.asyncQueue.enqueueAndForget((async()=>Ff(await Kf(r),i,o))),o.promise})(Yf(n),t)}(function(t,e=!0){(function(i){Ce=i})(cu),Hn(new en("firestore",((r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Ka(new Ru(r.getProvider("auth-internal")),new Pu(l,r.getProvider("app-check-internal")),(function(d,I){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wn(d.options.projectId,I)})(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),ye(Xi,Ji,t),ye(Xi,Ji,"esm2020")})();const dd={apiKey:"AIzaSyDTfXC2zcr4W_Rc8gc92CQRDC6smdYTBRo",authDomain:"ca2-assignment-3d86e.firebaseapp.com",projectId:"ca2-assignment-3d86e",storageBucket:"ca2-assignment-3d86e.firebasestorage.app",messagingSenderId:"146936498604",appId:"1:146936498604:web:7f007eb7fa6c6b38669209"},pd=zo(dd),md=Jf(pd);function gd(){const n=document.querySelector('head link[rel="stylesheet"]'),t=n==null?void 0:n.getAttribute("href");if(!t)return;document.querySelectorAll('#shape-card-template link[rel="stylesheet"], #memory-game-template link[rel="stylesheet"]').forEach(r=>r.setAttribute("href",t))}gd();class _d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.firstCard=null,this.secondCard=null,this.lockBoard=!1,this.matchedPairs=0,this.clickCount=0}connectedCallback(){const t=document.getElementById("memory-game-template");this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.querySelector(".reset-btn").addEventListener("click",()=>this.resetGame()),this.setupGame()}setupGame(){const e=this.getAttribute("dimensions").split("x"),r=parseInt(e[0]),i=parseInt(e[1]),l=r*i/2;this.totalPairs=l;const h=this.shadowRoot.querySelector(".game-board");h.style.gridTemplateColumns="repeat("+i+", 1fr)",h.style.gridTemplateRows="repeat("+r+", 1fr)",h.innerHTML=Bn.getUniqueRandomCardsAsHTML(l,!0),this.shadowRoot.querySelectorAll("shape-card").forEach(d=>{d.addEventListener("click",()=>this.handleCardClick(d))})}handleCardClick(t){if(!(this.lockBoard||t.isFaceUp())){if(t.flip(),this.clickCount++,this.updateClickDisplay(),!this.firstCard){this.firstCard=t;return}this.secondCard=t,this.lockBoard=!0,this.checkForMatch()}}checkForMatch(){this.firstCard.getAttribute("type")===this.secondCard.getAttribute("type")&&this.firstCard.getAttribute("colour")===this.secondCard.getAttribute("colour")?this.handleMatch():this.handleMismatch()}handleMatch(){console.log("Match found!"),this.matchedPairs++,this.resetBoard(),this.matchedPairs===this.totalPairs&&setTimeout(()=>{this.saveGameResult(),alert("Congratulations! You won the game in "+this.clickCount+" clicks!")},500)}handleMismatch(){console.log("Not a match"),setTimeout(()=>{this.firstCard.flip(),this.secondCard.flip(),this.resetBoard()},1e3)}resetBoard(){this.firstCard=null,this.secondCard=null,this.lockBoard=!1}updateClickDisplay(){const t=this.shadowRoot.querySelector(".click-count");t.textContent="Clicks: "+this.clickCount}resetGame(){this.clickCount=0,this.matchedPairs=0,this.updateClickDisplay(),this.resetBoard(),this.setupGame()}async saveGameResult(){try{const t={clicks:this.clickCount,timestamp:new Date};await hd(Qf(md,"gameResults"),t),console.log("Game result saved to Firestore")}catch(t){console.error("Error saving game result:",t)}}}customElements.define("memory-game",_d);
