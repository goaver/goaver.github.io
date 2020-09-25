(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var c=r(2),n=r(6),a=(r(0),r(74)),i={id:"quickstart",title:"Creating a Basic Check",sidebar_label:"Quickstart"},o={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Creating a Basic Check",description:"Getting started with the Aver API is simple.  The most common use case is to make a request to create a basic check for the user on the behalf of your organization and allow the user to use hosted enrollment to provide their data and complete verification.",source:"@site/docs\\quickstart.md",slug:"/quickstart",permalink:"/docs/quickstart",version:"current",sidebar_label:"Quickstart",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Accessing the API",permalink:"/docs/accessing"}},s=[{value:"1. Get your Authentication Token",id:"1-get-your-authentication-token",children:[]},{value:"2. Find the Check Group ID",id:"2-find-the-check-group-id",children:[]},{value:"3. Send the Check Create Request",id:"3-send-the-check-create-request",children:[]},{value:"4. Get the Check Create Response",id:"4-get-the-check-create-response",children:[]},{value:"5. Get the Check Results",id:"5-get-the-check-results",children:[]}],h={rightToc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Getting started with the Aver API is simple.  The most common use case is to make a request to create a basic check for the user on the behalf of your organization and allow the user to use hosted enrollment to provide their data and complete verification."),Object(a.b)("h3",{id:"1-get-your-authentication-token"},"1. Get your Authentication Token"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create your API key in the Aver portal and get your secret and key"),Object(a.b)("li",{parentName:"ol"},"Create your basic authentication request using your secret and key"),Object(a.b)("li",{parentName:"ol"},"Call the ",Object(a.b)("a",{href:"/docs/auth"},"Authentication")," endpoint to get your authentication bearer token")),Object(a.b)("p",null,"For more details, see: ",Object(a.b)("a",{href:"/docs/accessing"},"Accessing the API")),Object(a.b)("h3",{id:"2-find-the-check-group-id"},"2. Find the Check Group ID"),Object(a.b)("p",null,"When creating a new check, you must specify which check group you want to create the check under.  Check groups serve as a unit of organization as well as provide extended configuration options to be defaulted via the portal.  Login to the Aver portal and view the settings of your desired check group to retrieve the id."),Object(a.b)("p",null,Object(a.b)("img",{src:"/static/img/get-group-id.jpg"})),Object(a.b)("h3",{id:"3-send-the-check-create-request"},"3. Send the Check Create Request"),Object(a.b)("h4",{id:"set-the-authentication-header"},"Set the Authentication Header"),Object(a.b)("p",null,"Use the bearer token from above to set the authorization header for your API endpoint request"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{}),"content-type: application/json\nauthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1bmlxdWVfbmFtZSI6ImFmYTIyMTczLTZhNDYtNDc2MS04MzA4LTI3YWQ0YjIxMWM0MCIsInJvbGUiOiJQb3J0YWxVc2VyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IntcIklkXCI6XCJhZmEyMjE3My02YTQ2LTQ3NjEtODMwOC0yN2FkNGIyMTFjNDBcIixcIkF1dGhUeXBlXCI6MixcIkRhdGFcIjpudWxsfSIsIm5iZiI6MTU3MDE5NjE4NiwiZXhwIjoxNTcwMTk5Nzg2LCJpYXQiOjE1NzAxOTYxODYsImlzcyI6InNlbGYiLCJhdWQiOiJodHRwOi8vZ29hdmVyLmNvbSJ9XZmHyGIVurCvpsNM8RACzz9jReafpww9hrr3vyr4\n")),Object(a.b)("h4",{id:"create-the-check-request"},"Create the Check Request"),Object(a.b)("p",null,"Create the basic check request body with the e-mail address of the user, a third party identifier (an identifier that will help you identify this user in your system, generally this is an account id or username), and the check group to create the check under."),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{}),'{\n  "groupId":"2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "thirdPartyIdentifier":"123456",\n  "email":"someone@somewhere.com"\n}\n')),Object(a.b)("p",null,"For more details and options, see: ",Object(a.b)("a",{href:"/docs/check"},"Verification Check")),Object(a.b)("h4",{id:"send-the-request"},"Send the Request"),Object(a.b)("p",null,"POST the check request body with the authentication header to the ",Object(a.b)("a",{href:"/docs/check#post-apicheckcreate"},"Verification Check Create")," endpoint"),Object(a.b)("h3",{id:"4-get-the-check-create-response"},"4. Get the Check Create Response"),Object(a.b)("p",null,"After you send your request, the response will return a unique identifier for the check, the third party identifier you provided, as well as a url that can be provided to the end user to begin their enrollment."),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{}),'{\n"checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"thirdPartyIdentifier": "123456",\n"url": "https://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=a34bdce9b3b2412981f3aac6cb46ee3d&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage"\n}\n')),Object(a.b)("h4",{id:"redirect-the-user-to-enrollment"},"Redirect the User to Enrollment"),Object(a.b)("p",null,"To prompt the user to begin enrollment, either redirect the user or provide a link to the URL provided in the response"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{}),'<a href="https://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=a34bdce9b3b2412981f3aac6cb46ee3d&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage">Begin Enrollment</a>\n')),Object(a.b)("h3",{id:"5-get-the-check-results"},"5. Get the Check Results"),Object(a.b)("p",null,"Once the check is created, the user must complete enrollmment and then Aver must process the check to provide results.  You can check the status of a check at any time, and if complete, retrieve the results via the API.  For additional efficiency, instead of polling for status, you can simply set up Active Notifications to receive real-time updates as checks are completed and results become available."),Object(a.b)("h4",{id:"retrieve-the-status"},"Retrieve the Status"),Object(a.b)("p",null,"You can get the status of the created check by sending a GET request to the ",Object(a.b)("a",{href:"/docs/check#get-apicheckid"},"Check Status")," endpoint using the check id from the response.  Alternatively, you can use ",Object(a.b)("a",{href:"/docs/check#get-apicheckid"},"Check Status by Third Party Identifier")," endpoint to retrieve the check status."),Object(a.b)("h4",{id:"receive-active-notifications"},"Receive Active Notifications"),Object(a.b)("p",null,"You can autommatically receive notifications about check status updates without manually calling the check status endpoint.  Please see ",Object(a.b)("a",{href:"/docs/webhook"},"Active Notifications")," for more options."),Object(a.b)("h4",{id:"retrieve-the-check-results"},"Retrieve the Check Results"),Object(a.b)("p",null,'If the manually checked status of a check is "Completed" or you have received a notification that the check is complete, you can simply call the check results endpoint to get the full results of the check.  See ',Object(a.b)("a",{href:"/docs/check#get-apicheckidresults"},"Verification Check Results")," for more details."))}u.isMDXComponent=!0},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return p}));var c=r(0),n=r.n(c);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=n.a.createContext({}),u=function(e){var t=n.a.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=c,p=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?n.a.createElement(p,o(o({ref:t},h),{},{components:r})):n.a.createElement(p,o({ref:t},h))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var h=2;h<a;h++)i[h]=r[h];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);