(self.webpackChunkscopa_calculator=self.webpackChunkscopa_calculator||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},8177:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),i=r(5444),o=function(e){var t=e.siteTitle;return n.createElement("header",{style:{background:"#3969E3",marginBottom:"1.45rem"}},n.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.createElement("h1",{style:{margin:0,color:"white"}},t)))};o.defaultProps={siteTitle:""};var a=o,c=function(){return n.createElement("svg",{width:"60",height:"60",viewBox:"0 0 640 640",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{"clip-path":"url(#clip0)"},n.createElement("circle",{cx:"320",cy:"320",r:"300",fill:"#11100B"}),n.createElement("path",{d:"M278.514 170C274.365 170 271.468 165.889 272.864 161.982L314.35 45.8213C316.246 40.512 323.754 40.512 325.65 45.8213L367.136 161.982C368.532 165.889 365.635 170 361.486 170H278.514Z",fill:"#EFC61E"}),n.createElement("path",{d:"M470 278.514C470 274.365 474.111 271.468 478.018 272.864L594.179 314.35C599.488 316.246 599.488 323.754 594.179 325.65L478.018 367.136C474.111 368.532 470 365.635 470 361.486L470 278.514Z",fill:"#EFC61E"}),n.createElement("path",{d:"M170 278.514C170 274.365 165.889 271.468 161.982 272.864L45.8213 314.35C40.512 316.246 40.512 323.754 45.8213 325.65L161.982 367.136C165.889 368.532 170 365.635 170 361.486L170 278.514Z",fill:"#EFC61E"}),n.createElement("path",{d:"M278.514 470C274.365 470 271.468 474.111 272.864 478.018L314.35 594.179C316.246 599.488 323.754 599.488 325.65 594.179L367.136 478.018C368.532 474.111 365.635 470 361.486 470H278.514Z",fill:"#EFC61E"}),n.createElement("path",{d:"M396.731 184.599C393.797 181.665 394.655 176.71 398.405 174.934L509.878 122.131C514.973 119.717 520.283 125.027 517.869 130.122L465.066 241.595C463.29 245.345 458.335 246.203 455.401 243.269L396.731 184.599Z",fill:"#EFC61E"}),n.createElement("path",{d:"M455.401 396.731C458.335 393.797 463.29 394.655 465.066 398.405L517.869 509.878C520.283 514.973 514.973 520.282 509.878 517.869L398.405 465.066C394.655 463.29 393.797 458.335 396.731 455.401L455.401 396.731Z",fill:"#EFC61E"}),n.createElement("path",{d:"M243.269 184.599C246.203 181.665 245.345 176.71 241.595 174.934L130.122 122.131C125.027 119.717 119.717 125.027 122.131 130.122L174.934 241.595C176.71 245.345 181.665 246.203 184.599 243.269L243.269 184.599Z",fill:"#EFC61E"}),n.createElement("path",{d:"M184.599 396.731C181.665 393.797 176.71 394.655 174.934 398.405L122.131 509.878C119.717 514.973 125.027 520.282 130.122 517.869L241.595 465.066C245.345 463.29 246.203 458.335 243.269 455.401L184.599 396.731Z",fill:"#EFC61E"}),n.createElement("circle",{cx:"320",cy:"320",r:"155",fill:"#11100B"}),n.createElement("circle",{cx:"320",cy:"320",r:"140",fill:"#EFC61E"}),n.createElement("circle",{cx:"320",cy:"320",r:"125",fill:"#11100B"}),n.createElement("circle",{cx:"320",cy:"320",r:"105",fill:"#EFC61E"}),n.createElement("circle",{cx:"404.19",cy:"116.746",r:"20",transform:"rotate(22.5 404.19 116.746)",fill:"#EFC61E"}),n.createElement("circle",{cx:"235.81",cy:"523.253",r:"20",transform:"rotate(22.5 235.81 523.253)",fill:"#EFC61E"}),n.createElement("circle",{cx:"523.253",cy:"404.19",r:"20",transform:"rotate(112.5 523.253 404.19)",fill:"#EFC61E"}),n.createElement("circle",{cx:"116.746",cy:"235.81",r:"20",transform:"rotate(112.5 116.746 235.81)",fill:"#EFC61E"}),n.createElement("circle",{cx:"523.253",cy:"235.81",r:"20",transform:"rotate(67.5 523.253 235.81)",fill:"#EFC61E"}),n.createElement("circle",{cx:"116.746",cy:"404.19",r:"20",transform:"rotate(67.5 116.746 404.19)",fill:"#EFC61E"}),n.createElement("circle",{cx:"404.19",cy:"523.253",r:"20",transform:"rotate(157.5 404.19 523.253)",fill:"#EFC61E"}),n.createElement("circle",{cx:"235.81",cy:"116.747",r:"20",transform:"rotate(157.5 235.81 116.747)",fill:"#EFC61E"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0"},n.createElement("rect",{width:"640",height:"640",fill:"white"}))))},u=function(e){var t=e.children,r=(0,i.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(a,{siteTitle:r.site.siteMetadata.title}),n.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.createElement("main",null,t),n.createElement(c,null),n.createElement("footer",{style:{marginTop:"60px",marginBottom:"20px"}},"Built with"," ",n.createElement("span",{role:"img","aria-label":"coffee emoji"},"☕")," ","by ",n.createElement("a",{href:"https://andreidobrinski.com/"},"Andrei Dobrinski"))))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ee}});var n,i,o,a,c=r(7294),u=r(5697),l=r.n(u),s=r(4839),f=r.n(s),p=r(2993),d=r.n(p),m=r(6494),y=r.n(m),h="bodyAttributes",b="htmlAttributes",E="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(T).map((function(e){return T[e]})),"charset"),v="cssText",C="href",w="http-equiv",A="innerHTML",O="itemprop",S="name",L="property",x="rel",j="src",k="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",F="encodeSpecialCharacters",N="onChangeClientState",B="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),_=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,T.TITLE),r=J(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,M);return t||n||void 0},V=function(e){return J(e,N)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||r===x&&"canonical"===e[r].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==A&&c!==v&&c!==O||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=y()({},n[c],i[c]);n[c]=u}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,i),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,i=fe(r,n),[c.createElement(T.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=se(r),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===A||r===v){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===A||e===v)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(b,i,n),link:pe(T.LINK,o,n),meta:pe(T.META,a,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:$([C,k],e),bodyAttributes:Q(h,e),defer:J(e,I),encode:J(e,F),htmlAttributes:Q(b,e),linkTags:G(T.LINK,[x,C],e),metaTags:G(T.META,[S,g,w,L,O],e),noscriptTags:G(T.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:G(T.SCRIPT,[j,A],e),styleTags:G(T.STYLE,[v],e),title:W(e),titleAttributes:Q(E,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),ye=(i=me,a=o=function(e){function t(){return q(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case T.TITLE:return Z({},i,((t={})[n.type]=a,t.titleAttributes=Z({},o),t));case T.BODY:return Z({},i,{bodyAttributes:Z({},o)});case T.HTML:return Z({},i,{htmlAttributes:Z({},o)})}return Z({},i,((r={})[n.type]=Z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(U(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=Z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(i,n)},Y(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var he=ye,be=r(5444);var Ee=function(){var e=(0,be.useStaticQuery)("63159454").site,t=e.siteMetadata.description,r=e.siteMetadata.title,n=e.siteMetadata.author;return c.createElement(he,{htmlAttributes:{lang:"en"},title:r,titleTemplate:r,meta:[{name:"description",content:t},{property:"og:title",content:r},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n},{name:"twitter:title",content:r},{name:"twitter:description",content:t}]})}}}]);
//# sourceMappingURL=commons-ea406d46d968050afd22.js.map