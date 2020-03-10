(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var i=n(1),a=n(6),r=(n(0),n(119)),c={id:"check-advanced",title:"Verification Check (Advanced)",sidebar_label:"Verification Check (Advanced)"},l={id:"check-advanced",title:"Verification Check (Advanced)",description:"Using advanced functionality of the check resource will allow deeper and more custom integration as well as offline checking using the Aver API.  This documentation extends the documentation for Verification Check (Simple)\r",source:"@site/..\\docs\\check-advanced.md",permalink:"/docs/check-advanced",sidebar_label:"Verification Check (Advanced)",sidebar:"someSidebar",previous:{title:"Verification Check (Simple)",permalink:"/docs/check"},next:{title:"Watchlist Search",permalink:"/docs/watchlist"}},o=[{value:"POST /api/check/create",id:"post-apicheckcreate",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response Parameters",id:"response-parameters",children:[]}]},{value:"POST /api/check/{id}/personalinfo",id:"post-apicheckidpersonalinfo",children:[{value:"Request Parameters",id:"request-parameters-1",children:[]}]},{value:"POST /api/check/{id}/iddocument",id:"post-apicheckididdocument",children:[{value:"Request Parameters",id:"request-parameters-2",children:[]}]},{value:"POST /api/check/{id}/photodocument",id:"post-apicheckidphotodocument",children:[{value:"Request Parameters",id:"request-parameters-3",children:[]}]},{value:"POST /api/check/{id}/supplementaldocument",id:"post-apicheckidsupplementaldocument",children:[{value:"Request Parameters",id:"request-parameters-4",children:[]}]},{value:"GET /api/check/{id}/submit",id:"get-apicheckidsubmit",children:[{value:"Request Parameters",id:"request-parameters-5",children:[]}]}],s={rightToc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using advanced functionality of the check resource will allow deeper and more custom integration as well as offline checking using the Aver API.  This documentation extends the documentation for Verification Check (Simple)"),Object(r.b)("h1",{id:"creating-a-check-with-check-group-default-overrides"},"Creating a Check With Check Group Default Overrides"),Object(r.b)("p",null,"Basic Check Create functionality will use the Check Group defaults configured to determine the Check Types, the required Supplemental Document Types, and Watchlist Search recurrence (if applicable).  If more control is needed in certain cases, the create call can override these defaults with extended parameters."),Object(r.b)("h2",{id:"post-apicheckcreate"},"POST /api/check/create"),Object(r.b)("p",null,"Creates a new check enrollment overriding the Check Types and Supplemental Document Types required"),Object(r.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"thirdPartyIdentifier (required)")," - A unique identifier for this create request to ensure idempotentcy and prevent multiple checks being created on your behalf.  This could be a user account number or unique identifier within your existing application or randomly generated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"groupId (required)")," - The check group context you want this check to be created under.  (For details on managing your check groups, please see the GoAver.com product documentation)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"email (required)")," - The e-mail address of the user the check is being created for that will be used to send access links to the user if necessary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"language (optional)"),' - The default language to use for the check enrollment for the user (they can change the language during enrollment).  Options are "en"(English), "zh-Hans"(Chinese), "es" (Spanish), and "fr"(French).  Default is English if this is not provided.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"returnUrl (optional)")," - The url to redirect to for the user once they have completed the check enrollment workflow.  This is generally used for inline workflows.  The status / complete page will be shown at the end of enrollment if this is not set."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"checkTypes (optional)")," - The check types to be used for this check.  When set, this will override the Check Type defaults and Supplemental Document Types defined in Check Group Settings configuration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"supplementalDocumentTypes (optional)")," - The supplemental document types required to be submitted with this check"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"watchlistSearchCategories (optional)")," The watchlist categories to be searched - NOTE: if omitted, the default will use the group settings."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"watchlistRecheckInterval (optional)")," - This will set the watchlist search that is created and searched as a result of this check as a recurring check to be performed automatically in the future at the specified interval.  Valid values are 7 (weekly) and 30 (monthly).  NOTE: This only applies if you are overriding the default check types and include Watchlist Search, otherwise group settings will be used to set the recurring watchlist search interval."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"skipPersonalAccessCode (optional)")," - This option will skip the enrollment step of asking the user to create their own personal access code to access their enrollment.",Object(r.b)("p",{parentName:"li"},"NOTE: When this option is used, if the user is removed from the enrollment process for any reason (session timeout, error, exit, etc) they will be unable to re-access the enrollment without being provided a new access url from the API caller.  See ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/goaver/api-integration/blob/master/docs/check.md#post-apicheckidaccesslink"}),"https://github.com/goaver/api-integration/blob/master/docs/check.md#post-apicheckidaccesslink")),Object(r.b)("h4",Object(i.a)({parentName:"li"},{id:"example-request"}),"Example Request"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "groupId":"2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "thirdPartyIdentifier":"123456",\n  "email":"someone@somewhere.com",\n  "language":"en",\n  "returnUrl":"https://www.yoursite.com/page",\n  "checkTypes":[\n    "DocumentVerification",\n    "EmailVerification",\n    "PhotoVerification",\n    "AccreditedInvestor",\n    "RiskProfiling",\n    "AddressVerification",\n    "Watchlist",\n    "VisualWatchlist"\n  ],\n  "supplementalDocumentTypes":[\n    "AccreditedInvestor",\n    "CreditCard",\n    "BankCard",\n    "UtilityBill"\n  ],\n  "watchlistSearchCategories":[\n        "Criminal",\n        "Terrorism",\n        "Financial",\n        "FinancialNotices",\n        "BorrowerDefaults",\n        "Political",\n        "Medical",\n        "Sexual",\n        "Gambling",\n        "Education"\n  ],\n  "watchlistRecheckInterval":30\n}\n')),Object(r.b)("h3",{id:"response-parameters"},"Response Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"checkId")," - The unique identifier of the check"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"thirdPartyIdentifier")," - The third party identifier for the created check (provided above)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"url")," - The link url that can be passed to the end user to allow them to proceed and provide their information via live enrollment. Note: if Document Verification is not defined as a Check Type, the url will be null since end user enrollment requires document verification at a minimum.")),Object(r.b)("h4",{id:"example-response"},"Example Response"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n"checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"thirdPartyIdentifier": "123456",\n"url": "https://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=a34bdce9b3b2412981f3aac6cb46ee3d&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage"\n}\n')),Object(r.b)("h1",{id:"completing-the-check-via-api-without-end-user-enrollment"},"Completing the Check via API Without End User Enrollment"),Object(r.b)("p",null,"If the check doesn't have a Check Type of Document Verification (in which case there is no URL), or you want to perform the check without live interaction with the end user, you can complete the check by providing all the data via the API on behalf of the user and then submitting the application to obtain your risk and report results."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"post-apicheckidpersonalinfo"},"POST /api/check/{id}/personalinfo"),Object(r.b)("p",null,"Provide all the user information required by the check type(s)"),Object(r.b)("h3",{id:"request-parameters-1"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"ipAddress (optional - depends on check types)")," - individual's IP address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"companyName (optional - depends on check types)")," - individual's company name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"firstName (required)")," - individual's first name (given name)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"middleName (optional)")," - individual's middle name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"lastName (required)")," - individual's last name (surname)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"suffix (optional)")," - individual's name suffix"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"gender (optional)"),' - individual\'s gender - "M" (male), "F" (female), "U" (unknown / not provided)'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"dateOfBirth (optional - depends on check types)")," - individual's date of birth in MM/DD/YYYY format"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"stateOrProvince (optional - depends on check types)")," - individual's state or province of residence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"country (optional - depends on check types)")," - individuals country of residence (use ISO 3166 2-digit alpha country code, see https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"streetAddress1 (optional - depends on check types)")," - individual's residence street address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"streetAddress2 (optional)")," - individual's residence street address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"city (optional - depends on check types)")," - individual's city of residence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"postalCode (optional - depends on check types)")," - individual's residential postal code")),Object(r.b)("h4",{id:"example-request-1"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "email":"someone@somewhere.com",\n  "ipAddress":"192.168.1.1",\n  "companyName":"Some Company",\n  "firstName":"Someone",\n  "middleName":null,\n  "lastName":"One",\n  "suffix":null,\n  "gender":"M",\n  "dateOfBirth":"12/03/1980",\n  "stateOrProvince":"California",\n  "country":"US",\n  "streetAddress1":"1234 Main St",\n  "city":"San Diego",\n  "postalCode":"22434"\n}\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"post-apicheckididdocument"},"POST /api/check/{id}/iddocument"),Object(r.b)("p",null,"Use this endpoint to upload the ID document to be used in the check.  This is only required for Document Verification and Photo Verification check types that were specified at check create or at the group level"),Object(r.b)("h3",{id:"request-parameters-2"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"forceCommit (optional)"),' - if "true" this will ignore any errors in document processing (facial recognition, OCR, etc) and may result in a delayed result requiring additional processing or a failed check result if the image is unreadable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"docType (required)")," - the type of identification document being provided "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"side (required)"),' - the side of the document being provided "Front","Back" '),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of image containing the specified side of the document.  Information about Data URL can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)")),Object(r.b)("h4",{id:"example-request-2"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "forceCommit":false,\n  "docType":"USALicenseIdCard",\n  "side":"Front",\n  "fileName":"front.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZAmY7PhCfv..."\n}\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"post-apicheckidphotodocument"},"POST /api/check/{id}/photodocument"),Object(r.b)("p",null,"Use this endpoint to upload the photo / selfie document to be used in the check.  This is only required for Photo Verification and Visual Watchlist check types that were specified at check create or at the group level."),Object(r.b)("h3",{id:"request-parameters-3"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"forceCommit (optional)"),' - if "true" this will ignore any errors in document processing (facial recognition) and may result in a delayed result requiring additional processing or a failed check result if the image is unreadable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of the image containing the individual's face.  Information about Data URL can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)")),Object(r.b)("h4",{id:"example-request-3"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "forceCommit":false,\n  "fileName":"selfie.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZJRg..."\n}\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"post-apicheckidsupplementaldocument"},"POST /api/check/{id}/supplementaldocument"),Object(r.b)("p",null,"Use this endpoint to upload one or more supplemental documents to be used / included in the check.  This is only required for Accredited Investor check type or if any Supplemental Document Types were provided at the time the check was created or at the group level."),Object(r.b)("h4",{id:"example-request-4"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "docType":"AccreditedInvestor",\n  "fileName":"accredited.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZJR..."\n}\n')),Object(r.b)("h3",{id:"request-parameters-4"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"docType (required)")," - the type of supplemental document being provided "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of the image containing page of the document to be uploaded.  Information about Data URL can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"get-apicheckidsubmit"},"GET /api/check/{id}/submit"),Object(r.b)("p",null,"After all the required data and images are uploaded for the required check types and supplemental document types, this endpoint is called to finalize and process the check.  If the check is able to be completed immediately, it will return the full results of the check, otherwise the status will be returned and the results can be retrieved after the check is completed asynchronously.  This will perform all validation required based on the specified check types defined as to what user information and documents need to be present - if any element is missing, an error will be returned reflecting the missing information."),Object(r.b)("h3",{id:"request-parameters-5"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call")))}d.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(c,".").concat(p)]||u[p]||b[p]||r;return n?a.a.createElement(h,l({ref:t},s,{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);