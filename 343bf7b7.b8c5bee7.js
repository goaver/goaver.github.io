(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return h}));var r=a(2),n=a(6),c=(a(0),a(117)),i={id:"watchlist",title:"Watchlist Search",sidebar_label:"Watchlist Search"},l={id:"watchlist",isDocsHomePage:!1,title:"Watchlist Search",description:"This resource provides access to the watchlist search and adverse media search functionality.",source:"@site/..\\docs\\watchlist.md",permalink:"/docs/watchlist",sidebar_label:"Watchlist Search",sidebar:"someSidebar",previous:{title:"Verification Check (Advanced)",permalink:"/docs/check-advanced"}},s=[{value:"POST api/watchlist/search",id:"post-apiwatchlistsearch",children:[]},{value:"GET api/watchlist/{id}",id:"get-apiwatchlistid",children:[]},{value:"GET api/watchlist/getbycheckid/{checkId}",id:"get-apiwatchlistgetbycheckidcheckid",children:[]},{value:"GET api/watchlist/{id}/results",id:"get-apiwatchlistidresults",children:[]},{value:"GET api/watchlist/{id}/searchedlists",id:"get-apiwatchlistidsearchedlists",children:[]}],b={rightToc:s};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This resource provides access to the watchlist search and adverse media search functionality."),Object(c.b)("h3",{id:"post-apiwatchlistsearch"},"POST api/watchlist/search"),Object(c.b)("p",null,"Performs a watchlist search with the specified search criteria"),Object(c.b)("h4",{id:"request-parameters"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId (required)")," - The check group the search is in"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"firstName (optional *)")," - The individual's first name"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"middleName (optional )")," - The individual's middle name"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"lastName  (optional *)")," - The individual's last name"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"businessName (optional *)")," - The business / organization name to search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"country (optional)")," - The country for the individual or business"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"stateOrProvince (optional)")," - The state for the individual or business"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"fileContent (optional)")," - Base64 image (JPG or PNG) Data URL of the photo containing the individual's face.  When provided, this will perform Visual Watchlist search in addition to the Text Watchlist search (associated fees apply).  Information about Data URL can be found ",Object(c.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"here")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"fileName (required if fileContent is provided)")," - The filename for the file content provided for the Visual Watchlist search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"categories (optional)")," The watchlist categories to be searched, if omitted the default is to search based on the group settings.")),Object(c.b)("b",null,"*NOTE:")," Either firstName + lastName or businessName must be provided at a minimum.",Object(c.b)("h5",{id:"example-request"},"Example Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "groupId":"2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "firstName":"Some",\n  "middleName":"Random",\n  "lastName":"User",\n  "businessName":"They Work Here Corp",\n  "country":"USA",\n  "stateOrProvince":"CA",\n  "categories":[\n        "Criminal",\n        "Terrorism",\n        "Financial",\n        "FinancialNotices",\n        "BorrowerDefaults",\n        "Political",\n        "Medical",\n        "Sexual",\n        "Gambling",\n        "Education"\n  ]\n}\n')),Object(c.b)("h4",{id:"response-parameters"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique watchlist search id that was created")),Object(c.b)("h5",{id:"example-response"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "id": "f4d8f910-8a7b-42f0-ba40-2b2c17cb9118"\n}\n')),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get-apiwatchlistid"},"GET api/watchlist/{id}"),Object(c.b)("p",null,"Retrieves the search and status information for the specified watchlist search"),Object(c.b)("h4",{id:"request-parameters-1"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The watchlist search id returned from the search call")),Object(c.b)("h4",{id:"response-parameters-1"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique id of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The organization of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkId")," - The associated check that created the watchlist search (if applicable)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchDate")," - The UTC date / time of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchType")," - The type of search (text, visual, text and visual)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"recheckInterval")," - The auto-recurring search interval for this search to be performed (days)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"lastRecheckDate")," - The UTC date / time of the last recurring search that was done based on this search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchCriteria")," - The search criteria provided for the search")),Object(c.b)("h5",{id:"example-response-1"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"id": "f4d8f910-8a7b-42f0-ba40-2b2c17cb9118",\n"groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n"organizationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n"checkId": null,\n"status": "Completed",\n"searchDate": "10/4/2019 5:26:11 PM",\n"searchType": "Text",\n"recheckInterval": 0,\n"lastRecheckDate": "",\n"searchCriteria": {\n    "firstName": "Some",\n    "middleName": "Random",\n    "lastName": "User",\n    "businessName": "They Work Here Corp",\n    "country": "USA",\n    "stateProvince": "CA"\n}\n}\n')),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get-apiwatchlistgetbycheckidcheckid"},"GET api/watchlist/getbycheckid/{checkId}"),Object(c.b)("p",null,"Retrieves the watchlist search that was created as the result of a check enrollment that had a check type of watchlist search associated with it."),Object(c.b)("h4",{id:"request-parameters-2"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"checkId (required)")," - The check enrollment that the watchlist search was created from")),Object(c.b)("h4",{id:"response-parameters-2"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique id of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The organization of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkId")," - The associated check that created the watchlist search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchDate")," - The UTC date / time of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchType")," - The type of search (text, visual, text and visual)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"recheckInterval")," - The auto-recurring search interval for this search to be performed (days)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"lastRecheckDate")," - The UTC date / time of the last recurring search that was done based on this search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchCriteria")," - The search criteria provided for the search")),Object(c.b)("h5",{id:"example-response-2"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n"id": "f4d8f910-8a7b-42f0-ba40-2b2c17cb9118",\n"groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n"organizationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n"checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n"status": "Completed",\n"searchDate": "10/4/2019 5:26:11 PM",\n"searchType": "Text",\n"recheckInterval": 0,\n"lastRecheckDate": "",\n"searchCriteria": {\n    "firstName": "Some",\n    "middleName": "Random",\n    "lastName": "User",\n    "businessName": "They Work Here Corp",\n    "country": "USA",\n    "stateProvince": "CA"\n  },\n"watchlistResults": [],\n}\n')),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get-apiwatchlistidresults"},"GET api/watchlist/{id}/results"),Object(c.b)("p",null,"Retrieves the results for a specified watchlist"),Object(c.b)("h4",{id:"request-parameters-3"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The watchlist search id returned from the search call")),Object(c.b)("h4",{id:"response-parameters-3"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"id")," - The unique id of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"groupId")," - The group of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"organizationId")," - The organization of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"checkId")," - The associated check that created the watchlist search (if applicable)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"status")," - The status of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchDate")," - The UTC date / time of the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchType")," - The type of search (text, text and visual)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"recheckInterval")," - The auto-recurring search interval for this search to be performed (days)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"lastRecheckDate")," - The UTC date / time of the last recurring search that was done based on this search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"searchCriteria")," - The search criteria provided for the search"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"watchlistResults")," - The list of matches found for the search criteria"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"adverseMediaResults")," - The list of adverse media results found for the search criteria")),Object(c.b)("h5",{id:"example-response-3"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "id": "f4d8f910-8a7b-42f0-ba40-2b2c17cb9118",\n  "groupId": "2d1162b5-d6a8-4936-be84-39ec873b7a60",\n  "organizationId": "afa22173-6a46-4761-8308-27ad4b211c40",\n  "checkId": "51771bd7-a5b5-4ab9-913c-f1dc15429f11",\n  "status": "Completed",\n  "searchDate": "10/4/2019 5:32:31 PM",\n  "searchType": "Text",\n  "recheckInterval": 0,\n  "lastRecheckDate": "",\n  "searchCriteria": \n      "firstName": "Some",\n      "middleName": "Random",\n      "lastName": "User",\n      "businessName": "They Work Here Corp",\n      "country": "USA",\n      "stateProvince": "CA"\n  },\n  "watchlistResults": [\n    {\n      "matchConfidence": 0.4,\n      "watchlistName": "alabamaExcludedProviderList",\n      "matchName": null,\n      "firstNameMatch": "Match",\n      "lastNameMatch": "Match",\n      "middleNameMatch": "Unavailable",\n      "businessNameMatch": "Unavailable",\n      "stateMatch": "Unavailable",\n      "countryMatch": "Unavailable",\n      "additionalInformation": {\n        "supensionEffectiveDate": "02/23/13",\n        "suspensionInitiatedBy": "MLC"\n      }\n    }\n  ],\n  "adverseMediaResults": [\n    {\n      "datePublished": "2019-12-12T15:36:00Z",\n      "title": null,\n      "description": "Some Random, a former Pro Bowl running back, is among several former NFL players who are facing federal charges in an alleged scheme to defraud the league\'s health care program for retired ...",\n      "name": "Some Random among retired NFL players facing federal fraud charges",\n      "source": "Fox News",\n      "url": "https://www.foxnews.com/sports/some-random-retired-nfl-players-facing-federal-fraud-charges",\n      "matchScore": 0.4,\n      "businessMatchName": "Unavailable",\n      "firstNameMatch": "Match",\n      "middleNameMatch": "Unavailable",\n      "lastNameMatch": "Match",\n      "stateMatch": "NoMatch",\n      "countryMatch": "NoMatch"\n    }\n  ]\n}\n')),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get-apiwatchlistidsearchedlists"},"GET api/watchlist/{id}/searchedlists"),Object(c.b)("p",null,"Retrieves the list of watchlists names and versions that were searched for the results"),Object(c.b)("h4",{id:"request-parameters-4"},"Request Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"[Path]"," ",Object(c.b)("b",null,"id (required)")," - The watchlist search id returned from the search call")),Object(c.b)("h4",{id:"response-parameters-4"},"Response Parameters"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"name")," - The name of the list that was searched"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("b",null,"version")," - The version of that watchlist that was searched")),Object(c.b)("h5",{id:"example-response-4"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'[\n  {\n    "name": "ATF Most Wanted List",\n    "version": "9/5/2019"\n  },\n  {\n    "name": "Air Force Fugitive List",\n    "version": "9/5/2019"\n  }...\n]\n')))}h.isMDXComponent=!0},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),h=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=h(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),o=h(a),d=r,p=o["".concat(i,".").concat(d)]||o[d]||u[d]||c;return a?n.a.createElement(p,l(l({ref:t},b),{},{components:a})):n.a.createElement(p,l({ref:t},b))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);