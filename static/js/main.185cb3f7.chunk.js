(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1);c(10);function s(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var r=c(2),o=c.n(r),j=c(0),d=function(e){var a=e.totalItems,c=e.itemsOnPage,t=e.selectedPage,n=e.changePage,i=Math.ceil(a/c);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t?"true":"false",onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),s(1,i).map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){n(e)}(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i?"true":"false",onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})},u=function(){var e=Object(l.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(1),r=Object(i.a)(n,2),o=r[0],u=r[1],b=o*c,h=b-c,m=b>42?42:b,p=s(1,42).slice(h,m);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(h+1," - ").concat(m," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(+e.target.value),u(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{totalItems:42,itemsOnPage:c,selectedPage:o,changePage:function(e){u(e)}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.185cb3f7.chunk.js.map