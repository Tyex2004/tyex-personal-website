/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */var e='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,t=function(){for(var t=['Edge','Trident','Firefox'],o=0;o<t.length;o+=1)if(e&&0<=navigator.userAgent.indexOf(t[o]))return 1;return 0}();function o(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function n(e){var o=!1;return function(){o||(o=!0,setTimeout(function(){o=!1,e()},t))}}var i=e&&window.Promise,r=i?o:n;function p(e){return e&&'[object Function]'==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function d(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function a(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var t=s(e),o=t.overflow,n=t.overflowX,i=t.overflowY;return /(auto|scroll|overlay)/.test(o+i+n)?e:a(d(e))}function l(e){return e&&e.referenceNode?e.referenceNode:e}var f=e&&!!(window.MSInputMethodContext&&document.documentMode),m=e&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?f:10===e?m:f||m}function c(e){if(!e)return document.documentElement;for(var t=h(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&'BODY'!==n&&'HTML'!==n?-1!==['TH','TD','TABLE'].indexOf(o.nodeName)&&'static'===s(o,'position')?c(o):o:e?e.ownerDocument.documentElement:document.documentElement}function g(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||c(e.firstElementChild)===e)}function u(e){return null===e.parentNode?e:u(e.parentNode)}function b(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var p=r.commonAncestorContainer;if(e!==p&&t!==p||n.contains(i))return g(p)?p:c(p);var s=u(e);return s.host?b(s.host,t):b(e,u(t).host)}function w(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function y(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=w(t,'top'),i=w(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function E(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'])+parseFloat(e['border'+n+'Width'])}function x(e,t,o,n){return Math.max(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],h(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function v(e){var t=e.body,o=e.documentElement,n=h(10)&&getComputedStyle(o);return{height:x('Height',t,o,n),width:x('Width',t,o,n)}}var O=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},L=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),S=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},T=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function C(e){return T({},e,{right:e.left+e.width,bottom:e.top+e.height})}function D(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var o=w(e,'top'),n=w(e,'left');t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(t){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?v(e.ownerDocument):{},p=r.width||e.clientWidth||i.width,d=r.height||e.clientHeight||i.height,a=e.offsetWidth-p,l=e.offsetHeight-d;if(a||l){var f=s(e);a-=E(f,'x'),l-=E(f,'y'),i.width-=a,i.height-=l}return C(i)}function N(e,t){var o=Math.max,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=h(10),r='HTML'===t.nodeName,p=D(e),d=D(t),l=a(e),f=s(t),m=parseFloat(f.borderTopWidth),c=parseFloat(f.borderLeftWidth);n&&r&&(d.top=o(d.top,0),d.left=o(d.left,0));var g=C({top:p.top-d.top-m,left:p.left-d.left-c,width:p.width,height:p.height});if(g.marginTop=0,g.marginLeft=0,!i&&r){var u=parseFloat(f.marginTop),b=parseFloat(f.marginLeft);g.top-=m-u,g.bottom-=m-u,g.left-=c-b,g.right-=c-b,g.marginTop=u,g.marginLeft=b}return(i&&!n?t.contains(l):t===l&&'BODY'!==l.nodeName)&&(g=y(g,t)),g}function P(e){var t=Math.max,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=N(e,n),r=t(n.clientWidth,window.innerWidth||0),p=t(n.clientHeight,window.innerHeight||0),s=o?0:w(n),d=o?0:w(n,'left'),a={top:s-i.top+i.marginTop,left:d-i.left+i.marginLeft,width:r,height:p};return C(a)}function k(e){var t=e.nodeName;if('BODY'===t||'HTML'===t)return!1;if('fixed'===s(e,'position'))return!0;var o=d(e);return!!o&&k(o)}function W(e){if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&'none'===s(t,'transform');)t=t.parentElement;return t||document.documentElement}function B(e,t,o,n){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},p=i?W(e):b(e,l(t));if('viewport'===n)r=P(p,i);else{var s;'scrollParent'===n?(s=a(d(t)),'BODY'===s.nodeName&&(s=e.ownerDocument.documentElement)):'window'===n?s=e.ownerDocument.documentElement:s=n;var f=N(s,p,i);if('HTML'===s.nodeName&&!k(p)){var m=v(e.ownerDocument),h=m.height,c=m.width;r.top+=f.top-f.marginTop,r.bottom=h+f.top,r.left+=f.left-f.marginLeft,r.right=c+f.left}else r=f}o=o||0;var g='number'==typeof o;return r.left+=g?o:o.left||0,r.top+=g?o:o.top||0,r.right-=g?o:o.right||0,r.bottom-=g?o:o.bottom||0,r}function H(e){var t=e.width,o=e.height;return t*o}function A(e,t,o,n,i){var r=5<arguments.length&&arguments[5]!==void 0?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=B(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return T({key:e},s[e],{area:H(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function M(e,t,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null,i=n?W(t):b(t,l(o));return N(o,i,n)}function F(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function I(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function R(e,t,o){o=o.split('-')[0];var n=F(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[I(s)],i}function U(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Y(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=U(e,function(e){return e[t]===o});return e.indexOf(n)}function V(e,t,o){var n=void 0===o?e:e.slice(0,Y(e,'name',o));return n.forEach(function(e){e['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o=e['function']||e.fn;e.enabled&&p(o)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=o(t,e))}),t}function j(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=M(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=A(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=R(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=V(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function q(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function K(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function z(){return this.state.isDestroyed=!0,q(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[K('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function G(e){var t=e.ownerDocument;return t?t.defaultView:window}function _(e,t,o,n){var i='BODY'===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),i||_(a(r.parentNode),t,o,n),n.push(r)}function X(e,t,o,n){o.updateBound=n,G(e).addEventListener('resize',o.updateBound,{passive:!0});var i=a(e);return _(i,'scroll',o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function J(){this.state.eventsEnabled||(this.state=X(this.reference,this.options,this.state,this.scheduleUpdate))}function Q(e,t){return G(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function Z(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Q(this.reference,this.state))}function $(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ee(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&$(t[o])&&(n='px'),e.style[o]=t[o]+n})}function te(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function oe(e){return ee(e.instance.popper,e.styles),te(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&ee(e.arrowElement,e.arrowStyles),e}function ne(e,t,o,n,i){var r=M(i,t,e,o.positionFixed),p=A(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),ee(t,{position:o.positionFixed?'fixed':'absolute'}),o}function ie(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=Math.round,p=Math.floor,s=function(e){return e},d=r(i.width),a=r(n.width),l=-1!==['left','right'].indexOf(e.placement),f=-1!==e.placement.indexOf('-'),m=t?l||f||d%2==a%2?r:p:s,h=t?r:s;return{left:m(1==d%2&&1==a%2&&!f&&t?n.left-1:n.left),top:h(n.top),bottom:h(n.bottom),right:m(n.right)}}var re=e&&/Firefox/i.test(navigator.userAgent);function pe(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=U(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p,s,d=void 0===r?t.gpuAcceleration:r,a=c(e.instance.popper),l=D(a),f={position:i.position},m=ie(e,2>window.devicePixelRatio||!re),h='bottom'===o?'top':'bottom',g='right'===n?'left':'right',u=K('transform');if(s='bottom'==h?'HTML'===a.nodeName?-a.clientHeight+m.bottom:-l.height+m.bottom:m.top,p='right'==g?'HTML'===a.nodeName?-a.clientWidth+m.right:-l.width+m.right:m.left,d&&u)f[u]='translate3d('+p+'px, '+s+'px, 0)',f[h]=0,f[g]=0,f.willChange='transform';else{var b='bottom'==h?-1:1,w='right'==g?-1:1;f[h]=s*b,f[g]=p*w,f.willChange=h+', '+g}var y={"x-placement":e.placement};return e.attributes=T({},y,e.attributes),e.styles=T({},f,e.styles),e.arrowStyles=T({},e.offsets.arrow,e.arrowStyles),e}function se(e,t,o){var n=U(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function de(e,t){var o;if(!se(e.instance.modifiers,'arrow','keepTogether'))return e;var n=t.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],r=e.offsets,p=r.popper,d=r.reference,a=-1!==['left','right'].indexOf(i),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',g=F(n)[l];d[c]-g<p[m]&&(e.offsets.popper[m]-=p[m]-(d[c]-g)),d[m]+g>p[c]&&(e.offsets.popper[m]+=d[m]+g-p[c]),e.offsets.popper=C(e.offsets.popper);var u=d[m]+d[l]/2-g/2,b=s(e.instance.popper),w=parseFloat(b['margin'+f]),y=parseFloat(b['border'+f+'Width']),E=u-e.offsets.popper[m]-w-y;return E=Math.max(Math.min(p[l]-g,E),0),e.arrowElement=n,e.offsets.arrow=(o={},S(o,m,Math.round(E)),S(o,h,''),o),e}function ae(e){if('end'===e)return'start';return'start'===e?'end':e}var le=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],fe=le.slice(3);function me(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],o=fe.indexOf(e),n=fe.slice(o+1).concat(fe.slice(0,o));return t?n.reverse():n}var he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function ce(e,t){if(q(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=B(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=I(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=me(n);break;case he.COUNTERCLOCKWISE:p=me(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=I(n);var a=e.offsets.popper,l=e.offsets.reference,f=Math.floor,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),x=y||E;(m||b||x)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),x&&(r=ae(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=T({},e.offsets.popper,R(e.instance.popper,e.offsets.reference,e.placement)),e=V(e.instance.modifiers,e,'flip'))}),e}function ge(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Math.floor,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}function ue(e,t,o,n){var i=Math.max,r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),p=+r[1],s=r[2];if(!p)return e;if(0===s.indexOf('%')){var d;switch(s){case'%p':d=o;break;case'%':case'%r':default:d=n;}var a=C(d);return a[t]/100*p}if('vh'===s||'vw'===s){var l;return l='vh'===s?i(document.documentElement.clientHeight,window.innerHeight||0):i(document.documentElement.clientWidth,window.innerWidth||0),l/100*p}return p}function be(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(U(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return ue(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){$(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function we(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=$(+n)?[+n,0]:be(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}function ye(e,t){var o=t.boundariesElement||c(e.instance.popper);e.instance.reference===o&&(o=c(o));var n=K('transform'),i=e.instance.popper.style,r=i.top,p=i.left,s=i[n];i.top='',i.left='',i[n]='';var d=B(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=p,i[n]=s,t.boundaries=d;var a=t.priority,l=e.offsets.popper,f={primary:function(e){var o=l[e];return l[e]<d[e]&&!t.escapeWithReference&&(o=Math.max(l[e],d[e])),S({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=l[o];return l[e]>d[e]&&!t.escapeWithReference&&(n=Math.min(l[o],d[e]-('right'===e?l.width:l.height))),S({},o,n)}};return a.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';l=T({},l,f[t](e))}),e.offsets.popper=l,e}function Ee(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:S({},d,r[d]),end:S({},d,r[d]+r[a]-p[a])};e.offsets.popper=T({},p,l[n])}return e}function xe(e){if(!se(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=U(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}function ve(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=I(t),e.offsets.popper=C(i),e}var Oe={shift:{order:100,enabled:!0,fn:Ee},offset:{order:200,enabled:!0,fn:we,offset:0},preventOverflow:{order:300,enabled:!0,fn:ye,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:ge},arrow:{order:500,enabled:!0,fn:de,element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:ce,behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:ve},hide:{order:800,enabled:!0,fn:xe},computeStyle:{order:850,enabled:!0,fn:pe,gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:oe,onLoad:ne,gpuAcceleration:void 0}},Le={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Oe},Se=function(){function e(t,o){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};O(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=r(this.update.bind(this)),this.options=T({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(T({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=T({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return T({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&p(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return L(e,[{key:'update',value:function(){return j.call(this)}},{key:'destroy',value:function(){return z.call(this)}},{key:'enableEventListeners',value:function(){return J.call(this)}},{key:'disableEventListeners',value:function(){return Z.call(this)}}]),e}();Se.Utils=('undefined'==typeof window?global:window).PopperUtils,Se.placements=le,Se.Defaults=Le;export default Se;
//# sourceMappingURL=popper.min.js.map