(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{50:function(t,e,c){t.exports={item:"QuoteItem_item__2dOvb"}},51:function(t,e,c){t.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},54:function(t,e,c){"use strict";c.r(e);var s=c(14),n=c(2),i=c(0),r=c(8),o=c(50),u=c.n(o),a=c(1),d=function(t){return Object(a.jsxs)("li",{className:u.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:t.text})}),Object(a.jsx)("figcaption",{children:t.author})]}),Object(a.jsx)(r.b,{to:"/quotes/".concat(t.id),className:"btn",children:"View Fullscreen"})]})},j=c(51),l=c.n(j),b=function(t,e){return t.sort((function(t,c){return e?t.id>c.id?1:-1:t.id<c.id?1:-1}))},h=function(t){var e=Object(n.h)(),c=Object(n.i)(),s="asc"===new URLSearchParams(c.search).get("sort"),r=b(t.quotes,!!s);return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)("div",{className:l.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){e.push("/quotes?sort=".concat(s?"dsc":"asc"))},children:["Sort ",s?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:l.a.list,children:r.map((function(t){return Object(a.jsx)(d,{id:t.id,author:t.author,text:t.text},t.id)}))})]})},x=c(35),O=c(36);e.default=function(t){var e=Object(x.a)(O.d,!0),c=e.sendRequest,n=e.data,r=e.status;return Object(i.useEffect)((function(){c()}),[c]),"pending"===r?Object(a.jsxs)("div",{className:"centered",children:[Object(a.jsx)(s.a,{}),";"]}):Object(a.jsx)(h,{quotes:n||[]})}}}]);
//# sourceMappingURL=5.df25aba8.chunk.js.map