(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},PqFP:function(t,e,n){"use strict";var r=n("zLVn"),c=(n("q1tI"),n("MXbp")),o=n("ZdEh"),i=n("Xoyq"),a=n("Wbzz"),l=function(){return Object(a.c)("3090755652").blogThemeConfig},u=n("TJpk"),s=n.n(u),p=n("JI7f"),b=n("qKvR");e.a=function(t){var e=t.children,n=Object(r.a)(t,["children"]),a=l().webfontURL;return Object(b.c)(c.b.root,null,Object(b.c)(s.a,null,Object(b.c)("link",{rel:"stylesheet",href:a})),Object(b.c)(i.a,n),Object(b.c)(p.a,null),Object(b.c)("div",null,Object(b.c)("div",{css:Object(o.a)({maxWidth:"container",mx:"auto",px:3,py:4})},e)))}},RIqP:function(t,e,n){var r=n("Ijbi"),c=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||c(t)||o(t)||i()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),c=n("RIqP"),o=n("lSNA"),i=n("8OQS");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("q1tI"),s=n("7ljp"),p=s.useMDXComponents,b=s.mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,a=i(t,["scope","components","children"]),s=p(n),O=f(e),m=u.useMemo((function(){if(!o)return null;var t=l({React:u,mdx:b},O),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,e]);return u.createElement(m,l({components:s},a))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},dlzO:function(t,e,n){"use strict";n("q1tI");var r=n("TJpk"),c=n.n(r),o=n("Wbzz"),i=n("qKvR");function a(t){var e=t.description,n=t.lang,r=t.meta,a=t.title,l=t.imageSource,u=t.imageAlt,s=Object(o.c)("764694655").site,p=e||s.siteMetadata.description,b=l?""+s.siteMetadata.siteUrl+l:null,f=u||p;return Object(i.c)(c.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:a},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:p}].concat(l?[{name:"og:image",content:b},{name:"og:image:alt",content:f},{name:"twitter:image",content:b},{name:"twitter:image:alt",content:f},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(r)})}a.defaultProps={lang:"en",meta:[]},e.a=a},sXyB:function(t,e,n){var r=n("SksO"),c=n("b48C");function o(e,n,i){return c()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var c=[null];c.push.apply(c,e);var o=new(Function.bind.apply(t,c));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},xjC2:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return A}));var r=n("rePB"),c=n("q1tI"),o=n.n(c),i=n("A2+M"),a=n("PqFP"),l=n("dlzO"),u=n("MXbp"),s=n("qKvR"),p=function(t){return Object(s.c)(u.b.h1,t)},b=n("wx14"),f=n("2A+t"),O=function(t){return Object(f.c)(u.b.p,Object(b.a)({sx:{fontSize:1,mt:-3,mb:3}},t))},m=n("Wbzz"),d=n("ZdEh"),j=n("izhR"),y=n("s/18"),g=function(t){var e=t.previous,n=t.next;return Object(s.c)("footer",{css:Object(d.a)({mt:4,pt:3})},Object(s.c)(u.b.hr,null),Object(s.c)(y.a,null),(e||n)&&Object(s.c)(j.b,{as:"ul",css:Object(d.a)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(s.c)("li",null,e&&Object(s.c)(u.b.a,{as:m.a,to:e.slug,rel:"prev"},"← ",e.title)),Object(s.c)("li",null,n&&Object(s.c)(u.b.a,{as:m.a,to:n.slug,rel:"next"},n.title," →"))))},v=n("9eSz"),h=n.n(v),w=function(t){var e,n=t.post;return Object(s.c)(o.a.Fragment,null,(null==n||null===(e=n.image)||void 0===e?void 0:e.childImageSharp)&&Object(s.c)(h.a,{fluid:n.image.childImageSharp.fluid,alt:n.imageAlt?n.imageAlt:n.excerpt}))},x=function(t){var e,n,r,c,o=t.data,u=o.post,b=o.site.siteMetadata.title,f=t.location,m=t.previous,d=t.next;return Object(s.c)(a.a,{location:f,title:b},Object(s.c)(l.a,{title:u.title,description:u.excerpt,imageSource:u.socialImage?null===(e=u.socialImage)||void 0===e||null===(n=e.childImageSharp)||void 0===n?void 0:n.fluid.src:null===(r=u.image)||void 0===r||null===(c=r.childImageSharp)||void 0===c?void 0:c.fluid.src,imageAlt:u.imageAlt}),Object(s.c)("main",null,Object(s.c)("article",null,Object(s.c)("header",null,Object(s.c)(w,{post:u}),Object(s.c)(p,null,u.title),Object(s.c)(O,null,u.date)),Object(s.c)("section",null,Object(s.c)(i.MDXRenderer,null,u.body)))),Object(s.c)(g,{previous:m,next:d}))};function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=function(t){var e=t.location,n=t.data,r=n.blogPost,c=n.previous,o=n.next;return Object(s.c)(x,{data:S(S({},n),{},{post:r}),location:e,previous:c,next:o})},A=(e.default=I,"2093620386")}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-8c697bb8161815c28e0f.js.map