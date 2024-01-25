/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,I=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),q=new WeakMap;let dt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new dt(typeof r=="string"?r:r+"",void 0,ot),$t=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},K=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:_t,getOwnPropertyDescriptor:yt,getOwnPropertyNames:At,getOwnPropertySymbols:gt,getPrototypeOf:mt}=Object,_=globalThis,J=_.trustedTypes,vt=J?J.emptyScript:"",D=_.reactiveElementPolyfillSupport,P=(r,t)=>r,V={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!ft(r,t),Z={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const c=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...At(e),...gt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:V;this._$Em=i,this[i]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(i?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[P("elementProperties")]=new Map,v[P("finalized")]=new Map,D==null||D({ReactiveElement:v}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,T=w.trustedTypes,F=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,at="?"+f,bt=`<${at}>`,m=document,C=()=>m.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",ct=Array.isArray,Et=r=>ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,y=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Y=/"/g,lt=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ht=St(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),tt=new WeakMap,A=m.createTreeWalker(m,129);function pt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=S;for(let c=0;c<e;c++){const h=r[c];let l,d,a=-1,u=0;for(;u<h.length&&(n.lastIndex=u,d=n.exec(h),d!==null);)u=n.lastIndex,n===S?d[1]==="!--"?n=G:d[1]!==void 0?n=Q:d[2]!==void 0?(lt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=i??S,a=-1):d[1]===void 0?a=-2:(a=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?y:d[3]==='"'?Y:X):n===Y||n===X?n=y:n===G||n===Q?n=S:(n=y,i=void 0);const $=n===y&&r[c+1].startsWith("/>")?" ":"";o+=n===S?h+bt:a>=0?(s.push(l),h.slice(0,a)+ht+h.slice(a)+f+$):h+f+(a===-2?c:$)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const c=t.length-1,h=this.parts,[l,d]=Pt(t,e);if(this.el=M.createElement(l,s),A.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(ht)){const u=d[n++],$=i.getAttribute(a).split(f),U=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:U[2],strings:$,ctor:U[1]==="."?Ct:U[1]==="?"?kt:U[1]==="@"?Mt:R}),i.removeAttribute(a)}else a.startsWith(f)&&(h.push({type:6,index:o}),i.removeAttribute(a));if(lt.test(i.tagName)){const a=i.textContent.split(f),u=a.length-1;if(u>0){i.textContent=T?T.emptyScript:"";for(let $=0;$<u;$++)i.append(a[$],C()),A.nextNode(),h.push({type:2,index:++o});i.append(a[u],C())}}}else if(i.nodeType===8)if(i.data===at)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(f,a+1))!==-1;)h.push({type:7,index:o}),a+=f.length-1}o++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){var n,c;if(t===b)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=k(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??m).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,c=0,h=s[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new x(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new xt(o,this,t)),this._$AV.push(l),h=s[++c]}n!==(h==null?void 0:h.index)&&(o=A.nextNode(),n++)}return A.currentNode=m,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),k(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(pt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new wt(i,this),c=n.u(this.options);n.p(e),this.$(c),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new M(t)),e}T(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new x(this.k(C()),this.k(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const c=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=E(this,c[s+h],e,h),l===b&&(l=this._$AH[h]),n||(n=!k(l)||l!==this._$AH[h]),l===p?t=p:t!==p&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!i&&this.O(t)}O(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===p?void 0:t}}class kt extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Mt extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===b)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const L=w.litHtmlPolyfillSupport;L==null||L(M,x),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.1.0");const Ut=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new x(t.insertBefore(C(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var rt;O._$litElement$=!0,O.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:O});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(r,t,e){return r?t(r):e==null?void 0:e(r)}function Nt(r){return typeof r=="function"?r():r}const H=class H extends Event{constructor(t,e,s){super(H.eventName,{cancelable:!1}),this.key=t,this.value=e,this.state=s}};H.eventName="lit-state-changed";let g=H;const Ot=(r,t)=>t!==r&&(t===t||r===r),B=class B extends EventTarget{static initPropertyMap(){this.propertyMap||(this.propertyMap=new Map)}get propertyMap(){return this.constructor.propertyMap}get stateValue(){return Object.fromEntries([...this.propertyMap].map(([t])=>[t,this[t]]))}constructor(){super(),this.hookMap=new Map,this.constructor.finalize(),this.propertyMap&&[...this.propertyMap].forEach(([t,e])=>{if(e.initialValue!==void 0){const s=Nt(e.initialValue);this[t]=s,e.value=s}})}static finalize(){if(this.finalized)return!1;this.finalized=!0;const t=Object.keys(this.properties||{});for(const e of t)this.createProperty(e,this.properties[e]);return!0}static createProperty(t,e){this.finalize();const s=typeof t=="symbol"?Symbol():`__${t}`,i=this.getPropertyDescriptor(String(t),s,e);Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){const i=(s==null?void 0:s.hasChanged)||Ot;return{get(){return this[e]},set(o){const n=this[t];this[e]=o,i(o,n)===!0&&this.dispatchStateEvent(t,o,this)},configurable:!0,enumerable:!0}}reset(){this.hookMap.forEach(t=>t.reset()),[...this.propertyMap].filter(([t,e])=>!(e.skipReset===!0||e.resetValue===void 0)).forEach(([t,e])=>{this[t]=e.resetValue})}subscribe(t,e,s){e&&!Array.isArray(e)&&(e=[e]);const i=o=>{(!e||e.includes(o.key))&&t(o.key,o.value,this)};return this.addEventListener(g.eventName,i,s),()=>this.removeEventListener(g.eventName,i)}dispatchStateEvent(t,e,s){this.dispatchEvent(new g(t,e,s))}};B.finalized=!1;let et=B;const st="DONOTUSE",W=class W{constructor(t){if(this.state=t,!this.constructor.hookName||this.constructor.hookName===st)throw new Error("hook subclass must have their own hookName");this.unsubscribe=this.subscribe(),t.hookMap.set(this.constructor.hookName,this)}subscribe(){return this.state.subscribe(this.fromState.bind(this),this.hookedProps.map(([t])=>t))}get hookedProps(){const t=Object.getPrototypeOf(this.state);return t.propertyMap||t.initPropertyMap(),[...t.propertyMap].filter(([,e])=>(e==null?void 0:e.hook)&&(e==null?void 0:e.hook[this.constructor.hookName]))}isHookedProp(t){var e,s;return(s=(e=this.getDefinition(t))==null?void 0:e.hook)==null?void 0:s[this.constructor.hookName]}getDefinition(t){return this.state.propertyMap.get(t)}toState(t){Object.entries(t).filter(([e])=>this.isHookedProp(e)).forEach(([e,s])=>this.state[e]=s)}fromState(t,e,s){throw"fromState must be implemented in subclasses"}reset(){throw"reset hook must be implemented in subclasses"}};W.hookName=st;let it=W;class zt{constructor(t,e,s){this.host=t,this.state=e,this.callback=s||(()=>this.host.requestUpdate()),this.host.addController(this)}hostConnected(){this.state.addEventListener(g.eventName,this.callback),this.callback()}hostDisconnected(){this.state.removeEventListener(g.eventName,this.callback)}}function Lt(r){return(t,e)=>{if(Object.getOwnPropertyDescriptor(t,e))throw new Error("@property must be called before all state decorators");const s=t.constructor;s.initPropertyMap();const i=t.hasOwnProperty(e);return s.propertyMap.set(e,{...r,initialValue:r==null?void 0:r.value,resetValue:r==null?void 0:r.value}),s.createProperty(e,r),i?Object.getOwnPropertyDescriptor(t,e):void 0}}new URL(location.href);export{et as S,zt as a,Dt as b,dt as n,Lt as p,ut as r,O as s,Rt as t,Ht as x};
