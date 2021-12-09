(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return o})),i.d(t,"default",(function(){return d}));var n=i(2),a=i(6),r=(i(0),i(74)),l={id:"check-advanced",title:"Verification Check (Advanced)",sidebar_label:"Verification Check (Advanced)"},c={unversionedId:"check-advanced",id:"check-advanced",isDocsHomePage:!1,title:"Verification Check (Advanced)",description:"Using advanced functionality of the check endpoint will allow deeper and more custom integration as well as offline checking using the Aver API.  This documentation extends the documentation for Verification Check (Simple)",source:"@site/docs/check-advanced.md",slug:"/check-advanced",permalink:"/docs/check-advanced",version:"current",sidebar_label:"Verification Check (Advanced)",sidebar:"someSidebar",previous:{title:"Verification Check (Simple)",permalink:"/docs/check"},next:{title:"Watchlist Search",permalink:"/docs/watchlist"}},o=[{value:"Create a Check with Check Group Default Overrides",id:"create-a-check-with-check-group-default-overrides",children:[{value:"POST /api/check/create",id:"post-apicheckcreate",children:[]}]},{value:"Complete the Check via API without User Enrollment",id:"complete-the-check-via-api-without-user-enrollment",children:[{value:"POST /api/check/{id}/personalinfo",id:"post-apicheckidpersonalinfo",children:[]},{value:"POST /api/check/{id}/iddocument",id:"post-apicheckididdocument",children:[]},{value:"POST /api/check/{id}/photodocument",id:"post-apicheckidphotodocument",children:[]},{value:"POST /api/check/{id}/supplementaldocument",id:"post-apicheckidsupplementaldocument",children:[]},{value:"GET /api/check/{id}/submit",id:"get-apicheckidsubmit",children:[]}]}],b={rightToc:o};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using advanced functionality of the check endpoint will allow deeper and more custom integration as well as offline checking using the Aver API.  This documentation extends the documentation for ",Object(r.b)("a",{href:"docs/check"},"Verification Check (Simple)")),Object(r.b)("h2",{id:"create-a-check-with-check-group-default-overrides"},"Create a Check with Check Group Default Overrides"),Object(r.b)("p",null,"Basic Check Create functionality will use the Check Group defaults configured to determine the Check Types, the required Supplemental Document Types, and Watchlist Search recurrence (if applicable).  If more control is needed in certain cases, the create call can override these defaults with extended parameters."),Object(r.b)("h3",{id:"post-apicheckcreate"},"POST /api/check/create"),Object(r.b)("p",null,"Creates a new check enrollment overriding the Check Types and Supplemental Document Types required"),Object(r.b)("h4",{id:"request-parameters"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"thirdPartyIdentifier (required)")," - A unique identifier for this create request to ensure idempotentcy and prevent multiple checks being created on your behalf.  This could be a user account number or unique identifier within your existing application or randomly generated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"groupId (required)")," - The check group context you want this check to be created under.  (For details on managing your check groups, please see the GoAver.com product documentation)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"email (required)")," - The e-mail address of the user the check is being created for that will be used to send access links to the user if necessary."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"language (optional)")," - The default language to use for the check enrollment for the user (they can change the language during enrollment).  Default is English if this is not provided",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"en")," - English"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zh-Hans")," - Chinese"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"es")," - Spanish"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fr")," - French"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"returnUrl (optional)")," - The url to redirect to for the user once they have completed the check enrollment workflow.  This is generally used for inline workflows.  The status / complete page will be shown at the end of enrollment if this is not set."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"checkTypes (optional)")," - The check types to be used for this check.  When set, this will override the Check Type defaults and Supplemental Document Types defined in Check Group Settings configuration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EmailVerification")," - Email verification performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DocumentVerification")," - Identification document verification performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PhotoVerification")," - Liveness verification performed with facial recognition matching"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AccreditedInvestor")," - Accredited investor verification performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Watchlist")," - Text based watchlist search performed for individual"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"VisualWatchlist")," - Facial match watchlist search performed for individual"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RiskProfiling")," - Risk profiling performed for individual"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AddressVerification")," - Address verification performed for individual")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"supplementalDocumentTypes (optional)")," - The supplemental document types required to be submitted with this check - NOTE: if omitted, the default will use the group settings.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BankOrCreditCard")," - Banking or credit card"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TaxDocument")," - Tax document"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UtilityBill")," - Utility bill"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MedicalCard")," - Medical card"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AccreditedInvestor")," - Accredited investor letter")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"watchlistSearchCategories (optional)")," The watchlist categories to be searched - NOTE: if omitted, the default will use the group settings.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/watchlist#post-apiwatchlistsearch",title:"Watchlist Search"}),"Watchlist Search")," for values")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"watchlistRecheckInterval (optional)")," - This will set the watchlist search that is created and searched as a result of this check as a recurring check to be performed automatically in the future at the specified interval.  NOTE: This only applies if you are overriding the default check types and include Watchlist Search, otherwise group settings will be used to set the recurring watchlist search interval.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/watchlist#post-apiwatchlistsearch",title:"Watchlist Search"}),"Watchlist Search")," for values"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"skipPersonalAccessCode (optional)")," - This option will skip the enrollment step of asking the user to create their own personal access code to access their enrollment.  NOTE: When this option is used, if the user is removed from the enrollment process for any reason (session timeout, error, exit, etc) they will be unable to re-access the enrollment without being provided a new access url from the API caller.  See ",Object(r.b)("a",{href:"/docs/check#post-apicheckidaccesslink"},"Check Access Link")," for more information on generating a new link."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"overrideThirdPartyIdentifier (optional)")," - By default, only one check may be created per third party identifier.  When set, this will allow multiple checks to be created with the given third party identifier.")),Object(r.b)("h5",{id:"example-request"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "groupId":"2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "thirdPartyIdentifier":"123456",\n  "email":"someone@somewhere.com",\n  "language":"en",\n  "returnUrl":"https://www.yoursite.com/page",\n  "checkTypes":[\n    "DocumentVerification",\n    "EmailVerification",\n    "PhotoVerification",\n    "AccreditedInvestor",\n    "RiskProfiling",\n    "AddressVerification",\n    "Watchlist",\n    "VisualWatchlist"\n  ],\n  "supplementalDocumentTypes":[\n    "AccreditedInvestor",\n    "BankOrCreditCard",\n    "UtilityBill",\n    "MedicalCard"\n  ],\n  "watchlistSearchCategories":[\n        "Criminal",\n        "Terrorism",\n        "Financial",\n        "FinancialNotices",\n        "BorrowerDefaults",\n        "Political",\n        "Medical",\n        "Sexual",\n        "Gambling",\n        "Education"\n  ]\n}\n')),Object(r.b)("h4",{id:"response-parameters"},"Response Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"checkId")," - The unique identifier of the check"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"thirdPartyIdentifier")," - The third party identifier for the created check (provided above)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"url")," - The link url that can be passed to the end user to allow them to proceed and provide their information via live enrollment. Note: if Document Verification is not defined as a Check Type, the url will be null since end user enrollment requires document verification at a minimum.")),Object(r.b)("h5",{id:"example-response"},"Example Response"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n"checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"thirdPartyIdentifier": "123456",\n"url": "https://app.goaver.com/CheckEnrollment/51771bd7-a5b5-4ab9-913c-f1dc15429f11?accessCode=a34bdce9b3b2412981f3aac6cb46ee3d&language=en&returnUrl=https%3a%2f%2fwww.yoursite.com%2fpage"\n}\n')),Object(r.b)("h2",{id:"complete-the-check-via-api-without-user-enrollment"},"Complete the Check via API without User Enrollment"),Object(r.b)("p",null,"If the check doesn't have a Check Type of Document Verification (in which case there is no URL), or you want to perform the check without live interaction with the end user, you can complete the check by providing all the data via the API on behalf of the user and then submitting the application to obtain your risk and report results."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"post-apicheckidpersonalinfo"},"POST /api/check/{id}/personalinfo"),Object(r.b)("p",null,"Provide all the user information required by the check type(s)"),Object(r.b)("h4",{id:"request-parameters-1"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"ipAddress (optional - depends on check types)")," - individual's IP address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"companyName (optional - depends on check types)")," - individual's company name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"firstName (required)")," - individual's first name (given name)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"middleName (optional)")," - individual's middle name"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"lastName (required)")," - individual's last name (surname)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"suffix (optional)")," - individual's name suffix"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"gender (optional)")," - individual's gender",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"M")," - Male"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"F")," - Female"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"U")," - Unknown / Other / Not Provided")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"dateOfBirth (optional - depends on check types)")," - individual's date of birth in MM/DD/YYYY format"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"stateOrProvince (optional - depends on check types)")," - individual's state or province of residence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"country (optional - depends on check types)")," - individuals country of residence (use ISO 3166 2-digit alpha country code",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes",title:"ISO 3166 Country Codes"}),"ISO 3166 Country Codes")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"streetAddress1 (optional - depends on check types)")," - individual's residence street address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"streetAddress2 (optional)")," - individual's residence street address"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"city (optional - depends on check types)")," - individual's city of residence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"postalCode (optional - depends on check types)")," - individual's residential postal code")),Object(r.b)("h5",{id:"example-request-1"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "email":"someone@somewhere.com",\n  "ipAddress":"192.168.1.1",\n  "companyName":"Some Company",\n  "firstName":"Someone",\n  "middleName":null,\n  "lastName":"One",\n  "suffix":null,\n  "gender":"M",\n  "dateOfBirth":"12/03/1980",\n  "stateOrProvince":"California",\n  "country":"US",\n  "streetAddress1":"1234 Main St",\n  "city":"San Diego",\n  "postalCode":"22434"\n}\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"post-apicheckididdocument"},"POST /api/check/{id}/iddocument"),Object(r.b)("p",null,"Use this endpoint to upload the ID document to be used in the check.  This is only required for Document Verification and Photo Verification check types that were specified at check create or at the group level"),Object(r.b)("h4",{id:"request-parameters-2"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"forceCommit (optional)"),' - if "true" this will ignore any errors in document processing (facial recognition, OCR, etc) and may result in a delayed result requiring additional processing or a failed check result if the image is unreadable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"docType (required)")," - the type of identification document being provided",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NADriverLicense")," - North America Driver License (United States or Canada), "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PassportImage")," - Passport for any country"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GenericIdentificationCardImage")," - All other identification documents")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"side (required)")," - the side of the document being provided",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Front")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Back"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of image containing the specified side of the document.  Information about Data URL can be found ",Object(r.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"here"))),Object(r.b)("h5",{id:"example-request-2"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "forceCommit":false,\n  "docType":"USALicenseIdCard",\n  "side":"Front",\n  "fileName":"front.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZAmY7PhCfv..."\n}\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"post-apicheckidphotodocument"},"POST /api/check/{id}/photodocument"),Object(r.b)("p",null,"Use this endpoint to upload the photo / selfie document to be used in the check for liveness verification.  This is only required for Photo Verification and Visual Watchlist check types that were specified at check create or at the group level."),Object(r.b)("h4",{id:"request-parameters-3"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"forceCommit (optional)"),' - if "true" this will ignore any errors in document processing (facial recognition) and may result in a delayed result requiring additional processing or a failed check result if the image is unreadable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of the image containing the individual's face.  Information about Data URL can be found ",Object(r.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"here"))),Object(r.b)("h5",{id:"example-request-3"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "forceCommit":false,\n  "fileName":"selfie.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZJRg..."\n}\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"post-apicheckidsupplementaldocument"},"POST /api/check/{id}/supplementaldocument"),Object(r.b)("p",null,"Use this endpoint to upload one or more supplemental documents to be used / included in the check.  This is only required for Accredited Investor check type or if any Supplemental Document Types were provided at the time the check was created or at the group level."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Values:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BankOrCreditCard")," - Banking or credit card"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TaxDocument")," - Tax document"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UtilityBill")," - Utility bill"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MedicalCard")," - Medical card"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AccreditedInvestor")," - Accredited investor letter")))),Object(r.b)("h5",{id:"example-request-4"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "docType":"AccreditedInvestor",\n  "fileName":"accredited.jpg",\n  "fileContent":"data:image/jpeg;base64,/9j/4AAQSkZJR..."\n}\n')),Object(r.b)("h4",{id:"request-parameters-4"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"docType (required)")," - the type of supplemental document being provided"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileName (required)")," - the filename of the image being uploaded"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("b",null,"fileContent (required)")," - Base64 image (JPG or PNG) Data URL of the image containing page of the document to be uploaded.  Information about Data URL can be found ",Object(r.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"here"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"get-apicheckidsubmit"},"GET /api/check/{id}/submit"),Object(r.b)("p",null,"After all the required data and images are uploaded for the required check types and supplemental document types, this endpoint is called to finalize and process the check.  If the check is able to be completed immediately, it will return the full results of the check, otherwise the status will be returned and the results can be retrieved after the check is completed asynchronously.  This will perform all validation required based on the specified check types defined as to what user information and documents need to be present - if any element is missing, an error will be returned reflecting the missing information."),Object(r.b)("h4",{id:"request-parameters-5"},"Request Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Path]"," ",Object(r.b)("b",null,"id (required)")," - The unique identifier returned from the check create call")))}d.isMDXComponent=!0},74:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return h}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},u=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=n,h=u["".concat(l,".").concat(p)]||u[p]||s[p]||r;return i?a.a.createElement(h,c(c({ref:t},b),{},{components:i})):a.a.createElement(h,c({ref:t},b))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<r;b++)l[b]=i[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);