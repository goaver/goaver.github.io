(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(119)),o={id:"auth",title:"Authentication",sidebar_label:"Authentication"},c={id:"auth",title:"Authentication",description:"<p>This endpoint provides authentication token generation and management.</p>\r",source:"@site/..\\docs\\auth.md",permalink:"/docs/auth",sidebar_label:"Authentication",sidebar:"someSidebar",previous:{title:"Active Notifications",permalink:"/docs/webhook"},next:{title:"Verification Check (Simple)",permalink:"/docs/check"}},p=[{value:"GET /api/auth/token",id:"get-apiauthtoken",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This endpoint provides authentication token generation and management."),Object(i.b)("h3",{id:"get-apiauthtoken"},"GET /api/auth/token"),Object(i.b)("p",null,"Creates / retrieves a bearer token to be used for authentication with all other API endpoints."),Object(i.b)("h4",{id:"request-parameters"},"Request Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[Header]"," ",Object(i.b)("b",null,"Basic Authorization (required)")," - Set the Authorization header to the base64 encoded key:secret pair as per ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Basic_access_authentication"}),"https://en.wikipedia.org/wiki/Basic_access_authentication"))),Object(i.b)("h4",{id:"example-request-header"},"Example Request Header"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"content-type: application/json\nauthorization: Basic Z3E1ZTkwMDMtZTQ2Yy00ZjMzLTk0ZGUtOWIxZWVkZmViOTRiOk9EUTJOVGsyTmpOallUbG1NakV6TW1OaU5ERTBZV0kzWVRaaU9HTXhaR014TkdZeFlqYzRORFkxT1RZPQ==\n")),Object(i.b)("h4",{id:"response-parameters"},"Response Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("b",null,"token")," - The bearer token to be used for all other API calls")),Object(i.b)("h4",{id:"example-response"},"Example Response"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1bmlxdWVfbmFtZSI6ImFmYTIyMTczLTZhNDYtNDc2MS04MzA4LTI3YWQ0YjIxMWM0MCIsInJvbGUiOiJQb3J0YWxVc2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IntcIklkXCI6XCJhZmEyMjE3My02YTQ2LTQ3NjEtODMwOC0yN2FkNGIyMTFjNDBcIixcIkF1dGhUeXBlXCI6MixcIkRhdGFcIjpudWxsfSIsIm5iZiI6MTU3MDE5NjE4NiwiZXhwIjoxNTcwMTk5Nzg2LCJpYXQiOjE1NzAxOTYxODYsImlzcyI6InNlbGYiLCJhdWQiOiJodHRwOi8vZ29hdmVyLmNvbSJ9XZmHyG_IVurCvpsNM_8R-ACzz9jReafpww9hrr3vyr4'\n}\n")))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);