(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),c=(n(0),n(119)),i={id:"check",title:"Verification Check (Simple)",sidebar_label:"Verification Check (Simple)"},l={id:"check",title:"Verification Check (Simple)",description:"This resource will allow the creation and retrieval of check enrollments and access links\r",source:"@site/..\\docs\\check.md",permalink:"/api/docs/check",sidebar_label:"Verification Check (Simple)",sidebar:"someSidebar",previous:{title:"Authentication",permalink:"/api/docs/auth"},next:{title:"Verification Check (Advanced)",permalink:"/api/docs/check-advanced"}},s=[{value:"POST /api/check/create",id:"post-apicheckcreate",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response Parameters",id:"response-parameters",children:[]}]},{value:"GET /api/check/{id}",id:"get-apicheckid",children:[{value:"Request Parameters",id:"request-parameters-1",children:[]},{value:"Response Parameters",id:"response-parameters-1",children:[]}]},{value:"GET /api/check/getbythirdpartyidentifier/{id}",id:"get-apicheckgetbythirdpartyidentifierid",children:[{value:"Request Parameters",id:"request-parameters-2",children:[]},{value:"Response Parameters",id:"response-parameters-2",children:[]}]},{value:"GET /api/check/{id}/results",id:"get-apicheckidresults",children:[{value:"Request Parameters",id:"request-parameters-3",children:[]},{value:"Response Parameters",id:"response-parameters-3",children:[]}]},{value:"POST /api/check/{id}/accesslink",id:"post-apicheckidaccesslink",children:[{value:"Request Parameters",id:"request-parameters-4",children:[]},{value:"Response Parameters",id:"response-parameters-4",children:[]}]}],o={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This resource will allow the creation and retrieval of check enrollments and access links"),Object(c.b)("h2",{id:"post-apicheckcreate"},"POST /api/check/create"),Object(c.b)("p",null,"Creates a new check enrollment"),Object(c.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"thirdPartyIdentifier (required)")," - A unique identifier for this create request to ensure uniqueness and prevent multiple checks being created on your behalf.  This could be a user account number or unique identifier within your existing application or randomly generated."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId (required)")," - The check group context you want this check to be created under.  (For details on managing your check groups, please see the GoAver.com product documentation)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"email (required)")," - The e-mail address of the user the check is being created for that will be used to send access links to the user if necessary."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"language (optional)"),' - The default language to use for the check enrollment for the user (they can change the language during enrollment).  Options are "en"(English), "zh-Hans"(Chinese), "es" (Spanish), and "fr"(French).  Default is English if this is not provided.'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"returnUrl (optional)")," - The url to redirect to for the user once they have completed the check enrollment workflow.  This is generally used for inline workflows.  The status / complete page will be shown at the end of enrollment if this is not set."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"skipPersonalAccessCode (optional)")," - This option will skip the enrollment step of asking the user to create their own personal access code to access their enrollment.  NOTE: When this option is used, if the user is removed from the enrollment process for any reason (session timeout, error, exit, etc) they will be unable to re-access the enrollment without being provided a new access url from the API caller.  See https://github.com/goaver/api-integration/blob/master/docs/check.md#post-apicheckidaccesslink")),Object(c.b)("h4",{id:"example-request"},"Example Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "groupId":"2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "thirdPartyIdentifier":"123456",\n  "email":"someone@somewhere.com",\n  "language":"en",\n  "returnUrl":"https://www.yoursite.com/page"\n}\n')),Object(c.b)("h3",{id:"response-parameters"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkId")," - The unique identifier of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"thirdPartyIdentifier")," - The third party identifier for the created check (provided above)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"url")," - The link url to be passed to the user to allow them to access this created enrollment and continue the process")),Object(c.b)("h4",{id:"example-response"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"thirdPartyIdentifier": "123456",\n"url": "https://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=a34bdce9b3b2412981f3aac6cb46ee3d&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage"\n}\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"get-apicheckid"},"GET /api/check/{id}"),Object(c.b)("p",null,"Gets the check information and status for a check using the Aver checkId returned when creating the check<"),Object(c.b)("h3",{id:"request-parameters-1"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The unique identifier returned from the check create call")),Object(c.b)("h3",{id:"response-parameters-1"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique identifier of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The parent organization of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group the check is in"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"statusReason")," - If the check was rejected, detail as to the reason (unreadable documents, underage, etc)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkTypes")," - The list of check types / verifications performed as part of the check")),Object(c.b)("h4",{id:"example-response-1"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"id": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"organiationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n"groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n"thirdPartyIdentifier": "123456",\n"status": "Created",\n"checkTypes": [\n  "DocumentVerification",\n  "EmailVerification",\n  "PhotoVerification",\n  "AccreditedInvestor",\n  "Watchlist",\n  "VisualWatchlist",\n  "RiskProfiling",\n  "AddressVerification"\n]\n}\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"get-apicheckgetbythirdpartyidentifierid"},"GET /api/check/getbythirdpartyidentifier/{id}"),Object(c.b)("p",null,"Gets the check information and status for a check from the third party identifier provided when creating the check"),Object(c.b)("h3",{id:"request-parameters-2"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The third party identifier provided during the check create call")),Object(c.b)("h3",{id:"response-parameters-2"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique identifier of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The parent organization of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group the check is in"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"statusReason")," - If the check was rejected, detail as to the reason (unreadable documents, underage, etc)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkTypes")," - The list of check types / verifications performed as part of the check")),Object(c.b)("h4",{id:"example-response-2"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"id": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"organiationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n"groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n"thirdPartyIdentifier": "123456",\n"status": "Created",\n"checkTypes": [\n  "DocumentVerification",\n  "EmailVerification",\n  "PhotoVerification",\n  "AccreditedInvestor",\n  "Watchlist",\n  "VisualWatchlist",\n  "RiskProfiling",\n  "AddressVerification"\n]\n}\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"get-apicheckidresults"},"GET /api/check/{id}/results"),Object(c.b)("p",null,"Gets the check information and status for a check including all results (if the status is Complete or Failed)"),Object(c.b)("h3",{id:"request-parameters-3"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The unique identifier for the check returned from the check create call")),Object(c.b)("h3",{id:"response-parameters-3"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique identifier of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The parent organization of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group the check is in"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkTypes")," - The list of check types / verifications performed as part of the check"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkResults")," - The result of the requested checks"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"warnings")," - The warnings found based on the configured warnings in group settings")),Object(c.b)("h4",{id:"example-response-3"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "id": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n  "organiationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n  "groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "thirdPartyIdentifier": "123456",\n  "status": "Completed",\n  "checkTypes": [\n    "DocumentVerification",\n    "EmailVerification",\n    "PhotoVerification",\n    "AccreditedInvestor",\n    "Watchlist",\n    "VisualWatchlist",\n    "RiskProfiling",\n    "AddressVerification"\n  ],\n  "checkResults": {\n    "watchlistSearchId": "207e458b-1ad0-4e8d-a05b-13dfcd29d199",\n    "attestations": {\n      "accreditedInvestor": true,\n      "over18": true,\n      "over21": true\n    },\n    "personalInformation": {\n      "email": "someone@somewhere.com",\n      "firstName": "Some",\n      "middleName": null,\n      "lastName": "One",\n      "gender": "M",\n      "dateOfBirth": "12/03/1980",\n      "stateProvince": "California",\n      "country": "US"\n    },\n    "identificationDocument": {\n      "type": "USALicenseIdCard",\n      "frontId": "03f3795877c743c3807259e269ee1152",\n      "backId": "6eae803539074522a720e15c2c392eb8",\n      "expirationDate": "12/03/2020",\n      "documentNumber": "CA222307"\n    },\n    "photoVerification": {\n      "id": "58453080357e4e75b1d7b070b2501b07",\n      "type": "CamPhoto"\n    },\n    "addressVerification": {\n      "validAddress": false,\n      "reportedFraud": false,\n      "streetAddress1": "1234 Main St",\n      "streetAddress2": null,\n      "city": "San Diego",\n      "stateOrProvince": "California",\n      "postalCode": "22434",\n      "country": "US"\n    },\n    "riskProfile": {\n      "facialMatchConfidence": 100,\n      "ipAndDeviceAnalysisResults": {\n        "vpnOrTor": false,\n        "ip": null,\n        "fraudScore": 0,\n        "recentAbuse": false,\n        "isp": null,\n        "host": null,\n        "timezone": null,\n        "localTime": null,\n        "position": null,\n        "country": null,\n        "city": null,\n        "state": null,\n        "operatingSystem": null,\n        "browser": null,\n        "deviceBrand": null,\n        "deviceModel": null\n      },\n      "emailAnalysisResults": {\n        "overallScore": 1,\n        "suspect": false,\n        "validAddress": false,\n        "temporaryDisposable": false,\n        "catchAllShared": false,\n        "honeyPotSpamTrap": true,\n        "recentAbuse": false,\n        "commonProvider": false,\n        "deliverability": "medium",\n        "validDNSConfig": false,\n        "smtpConfigScore": 1,\n        "frequentComplainer": true\n      }\n    }\n  },\n  "warnings": [\n    "country",\n    "state"\n  ]\n}\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"post-apicheckidaccesslink"},"POST /api/check/{id}/accesslink"),Object(c.b)("p",null,"Generates a new one-time use access link for end users to access their check enrollment."),Object(c.b)("h3",{id:"request-parameters-4"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The unique identifier for the check returned from the check create call")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"language (optional)"),' - The default language to use for the check enrollment for the user (they can change the language during enrollment).  Options are "en"(English), "zh-Hans"(Chinese), and "fr"(French).  Default is English if this is not provided.'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"returnUrl (optional)")," - The url to redirect to for the user once they have completed the check enrollment workflow.  This is generally used for inline workflows.  The status / complete page will be shown at the end of enrollment if this is not set.")),Object(c.b)("h4",{id:"example-request-1"},"Example Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "language":"en",\n  "returnUrl":"https://www.yoursite.com/page"\n}\n')),Object(c.b)("h3",{id:"response-parameters-4"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"url")," - The url for the user to access their check enrollment")),Object(c.b)("h4",{id:"example-response-4"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"url": "http://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=904ec9f005224cbdbe431709c285fb22&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage"\n}\n')))}b.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=b(n),h=r,p=u["".concat(i,".").concat(h)]||u[h]||d[h]||c;return n?a.a.createElement(p,l({ref:t},o,{components:n})):a.a.createElement(p,l({ref:t},o))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);