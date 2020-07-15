(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(2),o=n(6),r=(n(0),n(117)),a={id:"webhook",title:"Active Notifications",sidebar_label:"Active Notifications"},c={id:"webhook",isDocsHomePage:!1,title:"Active Notifications",description:"Aver can send active notifications via webhooks and / or e-mail about the checks created and completed within an organization.  This removes the overhead of manually polling the API to retrieve the status of a given check and actively notifies you when results are available for the check.",source:"@site/..\\docs\\webhook.md",permalink:"/docs/webhook",sidebar_label:"Active Notifications",sidebar:"someSidebar",previous:{title:"Accessing the API",permalink:"/docs/accessing"},next:{title:"Authentication",permalink:"/docs/auth"}},l=[{value:"Configure Notification Options",id:"configure-notification-options",children:[]},{value:"Configure E-Mail Notifications",id:"configure-e-mail-notifications",children:[]},{value:"Configure Webhook Notifications",id:"configure-webhook-notifications",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Aver can send active notifications via webhooks and / or e-mail about the checks created and completed within an organization.  This removes the overhead of manually polling the API to retrieve the status of a given check and actively notifies you when results are available for the check."),Object(r.b)("h3",{id:"configure-notification-options"},"Configure Notification Options"),Object(r.b)("ol",null,Object(r.b)("li",null,"Login to the Aver portal"),Object(r.b)("li",null,"Go to Settings under your organization in the left nav bar"),Object(r.b)("li",null,"Set your desired notification types and delivery mechanism")),Object(r.b)("h3",{id:"configure-e-mail-notifications"},"Configure E-Mail Notifications"),Object(r.b)("ol",null,Object(r.b)("li",null,"Specify the delivery e-mail address"),Object(r.b)("li",null,"Configure the types of notifications you want to receive")),Object(r.b)("h3",{id:"configure-webhook-notifications"},"Configure Webhook Notifications"),Object(r.b)("p",null,"To receive notifications via webhook, you must configure an endpoint on your site that can receive POST requests.  After you have an endpoint running that can receive messages from Aver, simply set the configuration to send messages to that endpoint."),Object(r.b)("h4",{id:"configure-an-endpoint"},"Configure an Endpoint"),Object(r.b)("ol",null,Object(r.b)("li",null,"Configure the URL of your Webhook listener endpoint (Aver will POST to this endpoint)"),Object(r.b)("li",null,"Optionally add a security header key and security header value to be provided with each request from Aver to your endpoint"),Object(r.b)("li",null,"Configure the types of notifications you want to receive")),Object(r.b)("p",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/goaver/api-integration/master/images/webhooks.jpg"})),Object(r.b)("h4",{id:"test-the-configuration"},"Test the Configuration"),Object(r.b)("p",null,Object(r.b)("b",null,"Protip:")," To test the requests coming from Aver to know what to expect to your endpoint and to test your configuration, https://webhook.site provides temporary endpoint for testing to give full visibility"),Object(r.b)("h5",{id:"example-header"},"Example Header"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"content-type: application/json\nauthorization: my_security_header_value\n")),Object(r.b)("h5",{id:"example-message-content"},"Example Message content"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n   "statusMessage":{\n      "type": "LiveCheck",\n      "id": "12345",\n      "groupId": " 12345",\n      "status": "Completed"\n   }\n}\n')),Object(r.b)("h5",{id:"message-parameters"},"Message Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"type")," - The type of the entity (LiveCheck, OfflineCheck, WatchlistSearch, RecurringWatchlistSearch)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"id")," - The id of the entity with the status change"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"groupId")," - The group id of the entity with the status change"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"status")," - The updated status (Complete, Rejected, Failed)")))}s.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),f=i,h=b["".concat(a,".").concat(f)]||b[f]||p[f]||r;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);