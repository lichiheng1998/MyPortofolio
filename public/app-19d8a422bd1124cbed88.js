(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(176);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(197)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(30);
var hide = __webpack_require__(21);
var redefine = __webpack_require__(16);
var ctx = __webpack_require__(27);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(74)('wks');
var uid = __webpack_require__(37);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);__webpack_require__(10);var plugins=__webpack_require__(174);var _require$publicLoader=__webpack_require__(12).publicLoader,getResourcesForPathname=_require$publicLoader.getResourcesForPathname,getResourcesForPathnameSync=_require$publicLoader.getResourcesForPathnameSync,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.apiRunner=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}// Deprecated April 2019. Use `loadPageSync` instead
args.getResourcesForPathnameSync=getResourcesForPathnameSync;// Deprecated April 2019. Use `loadPage` instead
args.getResourcesForPathname=getResourcesForPathname;args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(66);
var test = {};
test[__webpack_require__(4)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(16)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(121);
var toPrimitive = __webpack_require__(63);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__(202);

// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.withCredentials=true;req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch_prefetch=function prefetch(url){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch_prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__(18);

// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(68);

// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
// CONCATENATED MODULE: ./.cache/find-path.js
var find_path_matchPaths=[];var find_path_trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=Object(strip_prefix["a" /* default */])(pathname,"")// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){find_path_matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var find_path_findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);for(var _iterator=find_path_matchPaths,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var _ref2=_ref,matchPath=_ref2.matchPath,path=_ref2.path;if(Object(utils["b" /* match */])(matchPath,trimmedPathname)){return normalize_page_path(path);}}return null;};/**
 * Clean a url and converts /index.html => /
 * E.g `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var find_path_cleanPath=function cleanPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};
// CONCATENATED MODULE: ./.cache/loader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return loader_BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return loader_ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};var doFetch=function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.withCredentials=true;req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});};var _loadPageDataJson=function loadPageDataJson(loadObj){var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return doFetch(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:"success",payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:"failure"});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _loadPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:"error"});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:"error"});});};var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component:component,json:pageData.result,page:page};};var loader_BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}var _proto=BaseLoader.prototype;_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this=this;var pagePath=find_path_cleanPath(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return _loadPageDataJson({pagePath:pagePath}).then(function(pageData){_this.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return find_path_findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this2=this;var pagePath=find_path_cleanPath(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlight=this.loadPageDataJson(pagePath).then(function(result){if(result.notFound){// if request was a 404, we should fallback to findMatchPath.
var foundMatchPatch=find_path_findMatchPath(pagePath);if(foundMatchPatch&&foundMatchPatch!==pagePath){return _this2.loadPage(foundMatchPatch).then(function(pageResources){_this2.pageDb.set(pagePath,_this2.pageDb.get(foundMatchPatch));return pageResources;});}}if(result.status==="error"){return{status:"error"};}if(result.status==="failure"){// throw an error so error trackers can pick this up
throw new Error("404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/");}var pageData=result.payload;var componentChunkName=pageData.componentChunkName;return _this2.loadComponent(componentChunkName).then(function(component){var finalResult={createdAt:new Date()};var pageResources;if(!component){finalResult.status="error";}else{finalResult.status="success";if(result.notFound===true){finalResult.notFound=true;}pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;emitter["a" /* default */].emit("onPostLoadPageResources",{page:pageResources,pageResources:pageResources});}_this2.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});}).finally(function(){_this2.inFlightDb.delete(pagePath);});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
;_proto.loadPageSync=function loadPageSync(rawPath){var pagePath=find_path_cleanPath(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this3=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}var realPath=find_path_cleanPath(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(pageData){if(!pageData){var matchPath=find_path_findMatchPath(realPath);if(matchPath&&matchPath!==realPath){return _this3.prefetch(matchPath);}}if(!_this3.prefetchCompleted.has(pagePath)){_this3.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this3.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){throw new Error("doPrefetch not implemented");};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=find_path_cleanPath(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=find_path_cleanPath(rawPath);var page=this.pageDb.get(pagePath);return page&&page.notFound===true;};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return window.___chunkMapping[componentChunkName].map(function(chunk){return ""+chunk;});};var loader_ProdLoader=/*#__PURE__*/function(_BaseLoader){_inheritsLoose(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]().then(preferDefault);};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){var _this4=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this4.loadPageDataJson(pagePath));}).then(function(result){if(result.status!=="success"){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};return ProdLoader;}(loader_BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);}};/* harmony default export */ var loader = __webpack_exports__["default"] = (publicLoader);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(131);
var step = __webpack_require__(132);
var Iterators = __webpack_require__(54);
var toIObject = __webpack_require__(34);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(101)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(21);
var has = __webpack_require__(26);
var SRC = __webpack_require__(37)('src');
var $toString = __webpack_require__(171);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(30).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);

__webpack_require__(59);

__webpack_require__(28);

__webpack_require__(23);

var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(195));

var _extends2 = _interopRequireDefault(__webpack_require__(196));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(105));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(106));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(107));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(31);

var _parsePath = __webpack_require__(199);

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  partiallyActive: _propTypes["default"].bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2["default"])({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react["default"].createElement(_router.Link, (0, _extends2["default"])({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react["default"].Component);

GatsbyLink.propTypes = (0, _extends2["default"])({}, NavLinkPropTypes, {
  onClick: _propTypes["default"].func,
  to: _propTypes["default"].string.isRequired,
  replace: _propTypes["default"].bool
});

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(GatsbyLink, (0, _extends2["default"])({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insertParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validateRedirect; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_7__);







 ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`

var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route["default"]) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";

      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_7___default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route["default"] ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"]; ////////////////////////////////////////////////////////////////////////////////



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(15);
var getKeys = __webpack_require__(39);
var redefine = __webpack_require__(16);
var global = __webpack_require__(3);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(54);
var wks = __webpack_require__(4);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $indexOf = __webpack_require__(78)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(35)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(52);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(123) });


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(9);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(13);
var toInteger = __webpack_require__(33);
var advanceStringIndex = __webpack_require__(95);
var regExpExec = __webpack_require__(73);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(75)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(14);
var $keys = __webpack_require__(39);

__webpack_require__(156)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $forEach = __webpack_require__(40)(0);
var STRICT = __webpack_require__(35)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $map = __webpack_require__(40)(1);

$export($export.P + $export.F * !__webpack_require__(35)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/warning/browser.js
var browser = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(43);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./.cache/create-react-context.js
/* harmony default export */ var create_react_context = (react_default.a.createContext);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/history.js
var lib_history = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/@reach/router/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return es_Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return es_LocationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return es_Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return es_Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return es_Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return es_ServerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRedirect", function() { return isRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseContext", function() { return BaseContext; });
/* concated harmony reexport createHistory */__webpack_require__.d(__webpack_exports__, "createHistory", function() { return lib_history["createHistory"]; });
/* concated harmony reexport createMemorySource */__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return lib_history["createMemorySource"]; });
/* concated harmony reexport navigate */__webpack_require__.d(__webpack_exports__, "navigate", function() { return lib_history["navigate"]; });
/* concated harmony reexport globalHistory */__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return lib_history["globalHistory"]; });









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* eslint-disable jsx-a11y/anchor-has-content */









 ////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
}; ////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider


var LocationContext = es_createNamedContext("Location"); // sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider

var es_Location = function Location(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(LocationContext.Consumer, null, function (context) {
    return context ? children(context) : react_default.a.createElement(es_LocationProvider, null, children);
  });
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: {
        unlisten: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;
    return {
      navigate: navigate,
      location: location
    };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, {
        replace: true
      });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return {
                context: _this2.getContext()
              };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;
    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;
    return react_default.a.createElement(LocationContext.Provider, {
      value: context
    }, typeof children === "function" ? children(context) : children || null);
  };

  return LocationProvider;
}(react_default.a.Component); ////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: lib_history["globalHistory"]
};
 false ? undefined : void 0;

var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  return react_default.a.createElement(LocationContext.Provider, {
    value: {
      location: {
        pathname: url,
        search: "",
        hash: ""
      },
      navigate: function navigate() {
        throw new Error("You can't call navigate on the server.");
      }
    }
  }, children);
}; ////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links


var BaseContext = es_createNamedContext("Base", {
  baseuri: "/",
  basepath: "/"
}); ////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.

var es_Router = function Router(props) {
  return react_default.a.createElement(BaseContext.Consumer, null, function (baseContext) {
    return react_default.a.createElement(es_Location, null, function (locationContext) {
      return react_default.a.createElement(es_RouterImpl, _extends({}, baseContext, locationContext, props));
    });
  });
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react_default.a.Children.map(children, es_createRoute(basepath));
    var pathname = location.pathname;
    var match = Object(utils["c" /* pick */])(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value; // remove the /* from the end for child routes relative paths

      basepath = route["default"] ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(Object(utils["d" /* resolve */])(to, uri), options);
        }
      });

      var clone = react_default.a.cloneElement(element, props, element.props.children ? react_default.a.createElement(es_Router, {
        primary: primary
      }, element.props.children) : undefined); // using 'div' for < 16.3 support

      var FocusWrapper = primary ? es_FocusHandler : component; // don't pass any props to 'div'

      var wrapperProps = primary ? _extends({
        uri: uri,
        location: location,
        component: component
      }, domProps) : domProps;
      return react_default.a.createElement(BaseContext.Provider, {
        value: {
          baseuri: uri,
          basepath: basepath
        }
      }, react_default.a.createElement(FocusWrapper, wrapperProps, clone));
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};
var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react_default.a.createElement(FocusContext.Consumer, null, function (requestFocus) {
    return react_default.a.createElement(es_FocusHandlerImpl, _extends({}, domProps, {
      component: component,
      requestFocus: requestFocus,
      uri: uri,
      location: location
    }));
  });
}; // don't focus on initial render


var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;

    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;

    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;

    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return react_default.a.createElement(Comp, _extends({
      style: _extends({
        outline: "none"
      }, style),
      tabIndex: "-1",
      role: role,
      ref: function ref(n) {
        return _this5.node = n;
      }
    }, domProps), react_default.a.createElement(FocusContext.Provider, {
      value: this.requestFocus
    }, this.props.children));
  };

  return FocusHandlerImpl;
}(react_default.a.Component);

Object(react_lifecycles_compat["polyfill"])(es_FocusHandlerImpl);

var k = function k() {}; ////////////////////////////////////////////////////////////////////////////////


var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref5) {
    var basepath = _ref5.basepath,
        baseuri = _ref5.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref6) {
      var location = _ref6.location,
          navigate = _ref6.navigate;

      var to = props.to,
          state = props.state,
          replace = props.replace,
          _props$getProps = props.getProps,
          getProps = _props$getProps === undefined ? k : _props$getProps,
          anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

      var href = Object(utils["d" /* resolve */])(to, baseuri);
      var isCurrent = location.pathname === href;
      var isPartiallyCurrent = Object(utils["e" /* startsWith */])(location.pathname, href);
      return react_default.a.createElement("a", _extends({
        ref: ref || innerRef,
        "aria-current": isCurrent ? "page" : undefined
      }, anchorProps, getProps({
        isCurrent: isCurrent,
        isPartiallyCurrent: isPartiallyCurrent,
        href: href,
        location: location
      }), {
        href: href,
        onClick: function onClick(event) {
          if (anchorProps.onClick) anchorProps.onClick(event);

          if (shouldNavigate(event)) {
            event.preventDefault();
            navigate(href, {
              state: state,
              replace: replace
            });
          }
        }
      }));
    });
  });
}); ////////////////////////////////////////////////////////////////////////////////

function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  } // Support React < 16 with this hook


  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate(Object(utils["a" /* insertParams */])(to, props), {
        replace: replace,
        state: state
      });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(Object(utils["a" /* insertParams */])(to, props));
    return null;
  };

  return RedirectImpl;
}(react_default.a.Component);

var es_Redirect = function Redirect(props) {
  return react_default.a.createElement(es_Location, null, function (locationContext) {
    return react_default.a.createElement(es_RedirectImpl, _extends({}, locationContext, props));
  });
};

 false ? undefined : void 0; ////////////////////////////////////////////////////////////////////////////////

var es_Match = function Match(_ref7) {
  var path = _ref7.path,
      children = _ref7.children;
  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref8) {
    var baseuri = _ref8.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref9) {
      var navigate = _ref9.navigate,
          location = _ref9.location;
      var resolvedPath = Object(utils["d" /* resolve */])(path, baseuri);
      var result = Object(utils["b" /* match */])(resolvedPath, location.pathname);
      return children({
        navigate: navigate,
        location: location,
        match: result ? _extends({}, result.params, {
          uri: result.uri,
          path: path
        }) : null
      });
    });
  });
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    !(element.props.path || element.props["default"] || element.type === es_Redirect) ?  false ? undefined : invariant_browser_default()(false) : void 0;
    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;
    !!(element.type === es_Redirect && !Object(utils["f" /* validateRedirect */])(element.props.from, element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    if (element.props["default"]) {
      return {
        value: element,
        "default": true
      };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;
    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
    return {
      value: element,
      "default": element.props["default"],
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}; ////////////////////////////////////////////////////////////////////////




/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(77);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(6);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(124);
var enumBugKeys = __webpack_require__(97);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(27);
var IObject = __webpack_require__(77);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(13);
var asc = __webpack_require__(182);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalHistory", function() { return globalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__);









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, {
        key: Date.now() + ""
      }); // try...catch iOS Safari limits to 100 pushState calls

      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var index = 0;
  var stack = [{
    pathname: initialPathname,
    search: ""
  }];
  var states = [];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

__webpack_require__(45);

__webpack_require__(23);

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(64) });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2);

$export($export.P, 'Function', { bind: __webpack_require__(177) });


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(103);
var anObject = __webpack_require__(9);
var speciesConstructor = __webpack_require__(81);
var advanceStringIndex = __webpack_require__(95);
var toLength = __webpack_require__(13);
var callRegExpExec = __webpack_require__(73);
var regexpExec = __webpack_require__(93);
var fails = __webpack_require__(6);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(75)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(2);

$export($export.S, 'Array', { isArray: __webpack_require__(102) });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var global = __webpack_require__(3);
var ctx = __webpack_require__(27);
var classof = __webpack_require__(66);
var $export = __webpack_require__(2);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(38);
var anInstance = __webpack_require__(53);
var forOf = __webpack_require__(80);
var speciesConstructor = __webpack_require__(81);
var task = __webpack_require__(126).set;
var microtask = __webpack_require__(172)();
var newPromiseCapabilityModule = __webpack_require__(129);
var perform = __webpack_require__(173);
var userAgent = __webpack_require__(158);
var promiseResolve = __webpack_require__(130);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(55)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(56)($Promise, PROMISE);
__webpack_require__(82)(PROMISE);
Wrapper = __webpack_require__(30)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(83)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(203);
} else {}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(26);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js




//      
// An event handler can take an optional event argument
// and should not return a value
// An array of all currently registered event handlers for a type
// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}

/* harmony default export */ var mitt_es = (mitt);
// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(16);
var META = __webpack_require__(61).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(74);
var setToStringTag = __webpack_require__(56);
var uid = __webpack_require__(37);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(135);
var wksDefine = __webpack_require__(134);
var enumKeys = __webpack_require__(180);
var isArray = __webpack_require__(102);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(7);
var toObject = __webpack_require__(14);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(63);
var createDesc = __webpack_require__(52);
var _create = __webpack_require__(64);
var gOPNExt = __webpack_require__(181);
var $GOPD = __webpack_require__(90);
var $GOPS = __webpack_require__(98);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(39);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(67).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $filter = __webpack_require__(40)(2);

$export($export.P + $export.F * !__webpack_require__(35)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(178);
var anObject = __webpack_require__(9);
var $flags = __webpack_require__(76);
var DESCRIPTORS = __webpack_require__(8);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(6)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(37)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(26);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(48);

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(159);
var enumBugKeys = __webpack_require__(97);
var IE_PROTO = __webpack_require__(96)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(94)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(128).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(124);
var hiddenKeys = __webpack_require__(97).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(51);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["a"] = (function(str,prefix){if(prefix===void 0){prefix="";}if(str.substr(0,prefix.length)===prefix)return str.slice(prefix.length);return str;});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134)('asyncIterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(16)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 71 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(2);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(66);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(30);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(36) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(170);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(21);
var fails = __webpack_require__(6);
var defined = __webpack_require__(32);
var wks = __webpack_require__(4);
var regexpExec = __webpack_require__(93);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(9);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(51);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(13);
var toAbsoluteIndex = __webpack_require__(79);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(99);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(13);
var getIterFn = __webpack_require__(100);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(38);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(16);
var redefineAll = __webpack_require__(55);
var meta = __webpack_require__(61);
var forOf = __webpack_require__(80);
var anInstance = __webpack_require__(53);
var isObject = __webpack_require__(7);
var fails = __webpack_require__(6);
var $iterDetect = __webpack_require__(83);
var setToStringTag = __webpack_require__(56);
var inheritIfRequired = __webpack_require__(116);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

exports.polyfill=function(Component){return Component;};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){_inheritsLoose(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign({},this.props,{pathContext:this.props.pageContext});var _apiRunner=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("replaceComponentRenderer",{props:this.props,loader:_loader__WEBPACK_IMPORTED_MODULE_2__["publicLoader"]}),replacementElement=_apiRunner[0];var pageElement=replacementElement||Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.props.pageResources.component,Object.assign({},props,{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(122)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(101)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export graphql */
/* unused harmony export StaticQueryContext */
/* unused harmony export StaticQuery */
/* unused harmony export useStaticQuery */
/* unused harmony export prefetchPathname */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_3__["default"].enqueue;var StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(67);
var createDesc = __webpack_require__(52);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(63);
var has = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(121);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(142);
var validate = __webpack_require__(41);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(84)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(76);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(122)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(74)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 98 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(54);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(54);
module.exports = __webpack_require__(30).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(54);
var $iterCreate = __webpack_require__(179);
var setToStringTag = __webpack_require__(56);
var getPrototypeOf = __webpack_require__(133);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(51);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(7);
var cof = __webpack_require__(51);
var MATCH = __webpack_require__(4)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(2);
var core = __webpack_require__(30);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(81);
var promiseResolve = __webpack_require__(130);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 105 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---src-pages-blogs-js":function componentSrcPagesBlogsJs(){return Promise.all(/* import() | component---src-pages-blogs-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 223));},"component---src-pages-callback-js":function componentSrcPagesCallbackJs(){return __webpack_require__.e(/* import() | component---src-pages-callback-js */ 6).then(__webpack_require__.bind(null, 221));},"component---src-pages-index-js":function componentSrcPagesIndexJs(){return Promise.all(/* import() | component---src-pages-index-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(10), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 222));},"component---src-pages-upload-js":function componentSrcPagesUploadJs(){return Promise.all(/* import() | component---src-pages-upload-js */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(11), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 224));}};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $reduce = __webpack_require__(194);

$export($export.P + $export.F * !__webpack_require__(35)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(162)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(9);
var toLength = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(95);
var regExpExec = __webpack_require__(73);

// @@match logic
__webpack_require__(75)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return silentAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logout; });
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
// src/utils/auth.js
var isBrowser=typeof window!=="undefined";var auth=isBrowser?new auth0_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WebAuth({domain:"chihengli.auth0.com",clientID:"36i9Pe5FvlzlrTsluKRO9bC35A5wsJ6e",redirectUri:"http://localhost:8000/callback",audience:"https://portofolio/upload",responseType:"token id_token",scope:"openid profile email"}):{};// insert after auth const
var tokens={accessToken:false,idToken:false,expiresAt:false};var user={};var isAuthenticated=function isAuthenticated(){if(!isBrowser){return;}return localStorage.getItem("isLoggedIn")==="true";};var login=function login(){if(!isBrowser){return;}auth.authorize();};var setSession=function setSession(cb,flag){if(cb===void 0){cb=function cb(){};}return function(err,authResult){if(err){Object(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* navigate */ "b"])("/");cb();return;}if(authResult&&authResult.accessToken&&authResult.idToken){var expiresAt=authResult.expiresIn*1000+new Date().getTime();tokens.accessToken=authResult.accessToken;tokens.idToken=authResult.idToken;tokens.expiresAt=expiresAt;localStorage.setItem("isLoggedIn",true);user=authResult.idTokenPayload;if(!flag){Object(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* navigate */ "b"])("/");}cb();}};};var handleAuthentication=function handleAuthentication(){if(!isBrowser){return;}auth.parseHash(setSession());};var getProfile=function getProfile(){return user;};var silentAuth=function silentAuth(callback){if(!isAuthenticated())return callback();auth.checkSession({},setSession(callback,true));};var logout=function logout(){localStorage.setItem("isLoggedIn",false);auth.logout();};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var aFunction = __webpack_require__(38);
var toObject = __webpack_require__(14);
var fails = __webpack_require__(6);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(35)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(47);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(22);

__webpack_require__(58);

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
var fails = __webpack_require__(6);
var defined = __webpack_require__(32);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var setPrototypeOf = __webpack_require__(136).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

__webpack_require__(23);

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(103);
var defined = __webpack_require__(32);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(4)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(62);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-toastify/node_modules/react-transition-group/TransitionGroup.js
var TransitionGroup = __webpack_require__(147);
var TransitionGroup_default = /*#__PURE__*/__webpack_require__.n(TransitionGroup);

// EXTERNAL MODULE: ./node_modules/react-toastify/node_modules/react-transition-group/Transition.js
var react_transition_group_Transition = __webpack_require__(146);
var Transition_default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/react-toastify/esm/react-toastify.js
/* unused harmony export Bounce */
/* unused harmony export Flip */
/* unused harmony export Slide */
/* unused harmony export ToastContainer */
/* unused harmony export ToastPosition */
/* unused harmony export ToastType */
/* unused harmony export Zoom */
/* unused harmony export cssTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_toastify_toast; });























var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default'
};
var ACTION = {
  SHOW: 0,
  CLEAR: 1,
  DID_MOUNT: 2,
  WILL_UNMOUNT: 3,
  ON_CHANGE: 4
};

var NOOP = function NOOP() {};

function isValidDelay(val) {
  return typeof val === 'number' && !isNaN(val) && val > 0;
}

function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withRequired(fn) {
  fn.isRequired = function (props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop === 'undefined') {
      return new Error("The prop " + propName + " is marked as required in \n      " + componentName + ", but its value is undefined.");
    }

    fn(props, propName, componentName);
  };

  return fn;
}

var falseOrDelay = withRequired(function (props, propName, componentName) {
  var prop = props[propName];

  if (prop !== false && !isValidDelay(prop)) {
    return new Error(componentName + " expect " + propName + " \n      to be a valid Number > 0 or equal to false. " + prop + " given.");
  }

  return null;
});

function ProgressBar(_ref) {
  var _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1,
    transform: controlledProgress ? "scaleX(" + progress + ")" : null
  });

  var classNames = classnames_default()('Toastify__progress-bar', controlledProgress ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated', "Toastify__progress-bar--" + type, {
    'Toastify__progress-bar--rtl': rtl
  }, className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : closeToast, _animationEvent);
  return react_default.a.createElement("div", _extends({
    className: classNames,
    style: style
  }, animationEvent));
}

ProgressBar.propTypes = {
  /**
   * The animation delay which determine when to close the toast
   */
  delay: falseOrDelay.isRequired,

  /**
   * Whether or not the animation is running or paused
   */
  isRunning: prop_types_default.a.bool.isRequired,

  /**
   * Func to close the current toast
   */
  closeToast: prop_types_default.a.func.isRequired,

  /**
   * Support rtl content
   */
  rtl: prop_types_default.a.bool.isRequired,

  /**
   * Optional type : info, success ...
   */
  type: prop_types_default.a.string,

  /**
   * Hide or not the progress bar
   */
  hide: prop_types_default.a.bool,

  /**
   * Optionnal className
   */
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),

  /**
   * Controlled progress value
   */
  progress: prop_types_default.a.number,

  /**
   * Tell wether or not controlled progress bar is used
   */
  controlledProgress: prop_types_default.a.bool
};
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

var iLoveInternetExplorer = canUseDom && /(msie|trident)/i.test(navigator.userAgent);

var react_toastify_Toast =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toast, _Component);

  function Toast() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isRunning: true,
      preventExitTransition: false
    };
    _this.flag = {
      canCloseOnClick: true,
      canDrag: false
    };
    _this.drag = {
      start: 0,
      x: 0,
      y: 0,
      deltaX: 0,
      removalDistance: 0
    };
    _this.boundingRect = null;
    _this.ref = null;

    _this.pauseToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: false
        });
      }
    };

    _this.playToast = function () {
      if (_this.props.autoClose) {
        _this.setState({
          isRunning: true
        });
      }
    };

    _this.onDragStart = function (e) {
      _this.flag.canCloseOnClick = true;
      _this.flag.canDrag = true;
      _this.boundingRect = _this.ref.getBoundingClientRect();
      _this.ref.style.transition = '';
      _this.drag.start = _this.drag.x = getX(e.nativeEvent);
      _this.drag.removalDistance = _this.ref.offsetWidth * (_this.props.draggablePercent / 100);
    };

    _this.onDragMove = function (e) {
      if (_this.flag.canDrag) {
        if (_this.state.isRunning) {
          _this.pauseToast();
        }

        _this.drag.x = getX(e);
        _this.drag.deltaX = _this.drag.x - _this.drag.start;
        _this.drag.y = getY(e); // prevent false positif during a toast click

        _this.drag.start !== _this.drag.x && (_this.flag.canCloseOnClick = false);
        _this.ref.style.transform = "translateX(" + _this.drag.deltaX + "px)";
        _this.ref.style.opacity = 1 - Math.abs(_this.drag.deltaX / _this.drag.removalDistance);
      }
    };

    _this.onDragEnd = function (e) {
      if (_this.flag.canDrag) {
        _this.flag.canDrag = false;

        if (Math.abs(_this.drag.deltaX) > _this.drag.removalDistance) {
          _this.setState({
            preventExitTransition: true
          }, _this.props.closeToast);

          return;
        }

        _this.ref.style.transition = 'transform 0.2s, opacity 0.2s';
        _this.ref.style.transform = 'translateX(0)';
        _this.ref.style.opacity = 1;
      }
    };

    _this.onDragTransitionEnd = function () {
      if (_this.boundingRect) {
        var _this$boundingRect = _this.boundingRect,
            top = _this$boundingRect.top,
            bottom = _this$boundingRect.bottom,
            left = _this$boundingRect.left,
            right = _this$boundingRect.right;

        if (_this.props.pauseOnHover && _this.drag.x >= left && _this.drag.x <= right && _this.drag.y >= top && _this.drag.y <= bottom) {
          _this.pauseToast();
        } else {
          _this.playToast();
        }
      }
    };

    _this.onExitTransitionEnd = function () {
      if (iLoveInternetExplorer) {
        _this.props.onExited();

        return;
      }

      var height = _this.ref.scrollHeight;
      var style = _this.ref.style;
      requestAnimationFrame(function () {
        style.minHeight = 'initial';
        style.height = height + 'px';
        style.transition = 'all 0.4s ';
        requestAnimationFrame(function () {
          style.height = 0;
          style.padding = 0;
          style.margin = 0;
        });
        setTimeout(function () {
          return _this.props.onExited();
        }, 400);
      });
    };

    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.onOpen(this.props.children.props);

    if (this.props.draggable) {
      this.bindDragEvents();
    } // Maybe I could bind the event in the ToastContainer and rely on delegation


    if (this.props.pauseOnFocusLoss) {
      this.bindFocusEvents();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      if (this.props.draggable) {
        this.bindDragEvents();
      } else {
        this.unbindDragEvents();
      }
    }

    if (prevProps.pauseOnFocusLoss !== this.props.pauseOnFocusLoss) {
      if (this.props.pauseOnFocusLoss) {
        this.bindFocusEvents();
      } else {
        this.unbindFocusEvents();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onClose(this.props.children.props);

    if (this.props.draggable) {
      this.unbindDragEvents();
    }

    if (this.props.pauseOnFocusLoss) {
      this.unbindFocusEvents();
    }
  };

  _proto.bindFocusEvents = function bindFocusEvents() {
    window.addEventListener('focus', this.playToast);
    window.addEventListener('blur', this.pauseToast);
  };

  _proto.unbindFocusEvents = function unbindFocusEvents() {
    window.removeEventListener('focus', this.playToast);
    window.removeEventListener('blur', this.pauseToast);
  };

  _proto.bindDragEvents = function bindDragEvents() {
    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchmove', this.onDragMove);
    document.addEventListener('touchend', this.onDragEnd);
  };

  _proto.unbindDragEvents = function unbindDragEvents() {
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.onDragEnd);
    document.removeEventListener('touchmove', this.onDragMove);
    document.removeEventListener('touchend', this.onDragEnd);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        closeButton = _this$props.closeButton,
        children = _this$props.children,
        autoClose = _this$props.autoClose,
        pauseOnHover = _this$props.pauseOnHover,
        onClick = _this$props.onClick,
        closeOnClick = _this$props.closeOnClick,
        type = _this$props.type,
        hideProgressBar = _this$props.hideProgressBar,
        closeToast = _this$props.closeToast,
        Transition = _this$props.transition,
        position = _this$props.position,
        className = _this$props.className,
        bodyClassName = _this$props.bodyClassName,
        progressClassName = _this$props.progressClassName,
        progressStyle = _this$props.progressStyle,
        updateId = _this$props.updateId,
        role = _this$props.role,
        progress = _this$props.progress,
        rtl = _this$props.rtl;
    var toastProps = {
      className: classnames_default()('Toastify__toast', "Toastify__toast--" + type, {
        'Toastify__toast--rtl': rtl
      }, className)
    };

    if (autoClose && pauseOnHover) {
      toastProps.onMouseEnter = this.pauseToast;
      toastProps.onMouseLeave = this.playToast;
    } // prevent toast from closing when user drags the toast


    if (closeOnClick) {
      toastProps.onClick = function (e) {
        onClick && onClick(e);
        _this2.flag.canCloseOnClick && closeToast();
      };
    }

    var controlledProgress = parseFloat(progress) === progress;
    return react_default.a.createElement(Transition, {
      "in": this.props["in"],
      appear: true,
      onExited: this.onExitTransitionEnd,
      position: position,
      preventExitTransition: this.state.preventExitTransition
    }, react_default.a.createElement("div", _extends({
      onClick: onClick
    }, toastProps, {
      ref: function ref(_ref) {
        return _this2.ref = _ref;
      },
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseUp: this.onDragTransitionEnd,
      onTouchEnd: this.onDragTransitionEnd
    }), react_default.a.createElement("div", _extends({}, this.props["in"] && {
      role: role
    }, {
      className: classnames_default()('Toastify__toast-body', bodyClassName)
    }), children), closeButton && closeButton, (autoClose || controlledProgress) && react_default.a.createElement(ProgressBar, _extends({}, updateId && !controlledProgress ? {
      key: "pb-" + updateId
    } : {}, {
      rtl: rtl,
      delay: autoClose,
      isRunning: this.state.isRunning,
      closeToast: closeToast,
      hide: hideProgressBar,
      type: type,
      style: progressStyle,
      className: progressClassName,
      controlledProgress: controlledProgress,
      progress: progress
    }))));
  };

  return Toast;
}(react["Component"]);

react_toastify_Toast.propTypes = {
  closeButton: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.bool]).isRequired,
  autoClose: falseOrDelay.isRequired,
  children: prop_types_default.a.node.isRequired,
  closeToast: prop_types_default.a.func.isRequired,
  position: prop_types_default.a.oneOf(objectValues(POSITION)).isRequired,
  pauseOnHover: prop_types_default.a.bool.isRequired,
  pauseOnFocusLoss: prop_types_default.a.bool.isRequired,
  closeOnClick: prop_types_default.a.bool.isRequired,
  transition: prop_types_default.a.func.isRequired,
  rtl: prop_types_default.a.bool.isRequired,
  hideProgressBar: prop_types_default.a.bool.isRequired,
  draggable: prop_types_default.a.bool.isRequired,
  draggablePercent: prop_types_default.a.number.isRequired,
  "in": prop_types_default.a.bool,
  onExited: prop_types_default.a.func,
  onOpen: prop_types_default.a.func,
  onClose: prop_types_default.a.func,
  type: prop_types_default.a.oneOf(objectValues(TYPE)),
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  bodyClassName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  progressClassName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  progressStyle: prop_types_default.a.object,
  progress: prop_types_default.a.number,
  updateId: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  ariaLabel: prop_types_default.a.string,
  containerId: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  role: prop_types_default.a.string
};
react_toastify_Toast.defaultProps = {
  type: TYPE.DEFAULT,
  "in": true,
  onOpen: NOOP,
  onClose: NOOP,
  className: null,
  bodyClassName: null,
  progressClassName: null,
  updateId: null
};

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel;
  return react_default.a.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, "\u2716");
}

CloseButton.propTypes = {
  closeToast: prop_types_default.a.func,
  arialLabel: prop_types_default.a.string
};
CloseButton.defaultProps = {
  ariaLabel: 'close'
};

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition;
  return function Animation(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        props = _objectWithoutPropertiesLoose(_ref2, ["children", "position", "preventExitTransition"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var enterDuration, exitDuration;

    if (Array.isArray(duration) && duration.length === 2) {
      enterDuration = duration[0];
      exitDuration = duration[1];
    } else {
      enterDuration = exitDuration = duration;
    }

    var onEnter = function onEnter(node) {
      node.classList.add(enterClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = enterDuration * 0.001 + "s";
    };

    var onEntered = function onEntered(node) {
      node.classList.remove(enterClassName);
      node.style.cssText = '';
    };

    var onExit = function onExit(node) {
      node.classList.add(exitClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = exitDuration * 0.001 + "s";
    };

    return react_default.a.createElement(Transition_default.a, _extends({}, props, {
      timeout: preventExitTransition ? 0 : {
        enter: enterDuration,
        exit: exitDuration
      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? NOOP : onExit
    }), children);
  };
}

var Bounce = cssTransition({
  enter: 'Toastify__bounce-enter',
  exit: 'Toastify__bounce-exit',
  appendPosition: true
});
var Slide = cssTransition({
  enter: 'Toastify__slide-enter',
  exit: 'Toastify__slide-exit',
  duration: [450, 750],
  appendPosition: true
});
var Zoom = cssTransition({
  enter: 'Toastify__zoom-enter',
  exit: 'Toastify__zoom-exit'
});
var Flip = cssTransition({
  enter: 'Toastify__flip-enter',
  exit: 'Toastify__flip-exit'
});
var eventManager = {
  list: new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event) {
    this.list["delete"](event);
    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      return setTimeout(function () {
        callback.apply(void 0, args);
      }, 0);
    });
  }
};

var react_toastify_ToastContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToastContainer, _Component);

  function ToastContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      toast: []
    };
    _this.toastKey = 1;
    _this.collection = {};

    _this.isToastActive = function (id) {
      return _this.state.toast.indexOf(id) !== -1;
    };

    return _this;
  }

  var _proto = ToastContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    eventManager.on(ACTION.SHOW, function (content, options) {
      return _this2.buildToast(content, options);
    }).on(ACTION.CLEAR, function (id) {
      return id == null ? _this2.clear() : _this2.removeToast(id);
    }).emit(ACTION.DID_MOUNT, this);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    eventManager.off(ACTION.SHOW).off(ACTION.CLEAR).emit(ACTION.WILL_UNMOUNT, this);
  };

  _proto.removeToast = function removeToast(id) {
    this.setState({
      toast: this.state.toast.filter(function (v) {
        return v !== id;
      })
    }, this.dispatchChange);
  };

  _proto.dispatchChange = function dispatchChange() {
    eventManager.emit(ACTION.ON_CHANGE, this.state.toast.length);
  };

  _proto.makeCloseButton = function makeCloseButton(toastClose, toastId, type) {
    var _this3 = this;

    var closeButton = this.props.closeButton;

    if (Object(react["isValidElement"])(toastClose) || toastClose === false) {
      closeButton = toastClose;
    } else if (toastClose === true) {
      closeButton = react_default.a.createElement(CloseButton, null);
    }

    return closeButton === false ? false : Object(react["cloneElement"])(closeButton, {
      closeToast: function closeToast() {
        return _this3.removeToast(toastId);
      },
      type: type
    });
  };

  _proto.getAutoCloseDelay = function getAutoCloseDelay(toastAutoClose) {
    return toastAutoClose === false || isValidDelay(toastAutoClose) ? toastAutoClose : this.props.autoClose;
  };

  _proto.canBeRendered = function canBeRendered(content) {
    return Object(react["isValidElement"])(content) || typeof content === 'string' || typeof content === 'number' || typeof content === 'function';
  };

  _proto.parseClassName = function parseClassName(prop) {
    if (typeof prop === 'string') {
      return prop;
    } else if (prop !== null && typeof prop === 'object' && 'toString' in prop) {
      return prop.toString();
    }

    return null;
  };

  _proto.belongToContainer = function belongToContainer(_ref) {
    var containerId = _ref.containerId;
    return containerId === this.props.containerId;
  };

  _proto.buildToast = function buildToast(content, _ref2) {
    var _this4 = this;

    var delay = _ref2.delay,
        options = _objectWithoutPropertiesLoose(_ref2, ["delay"]);

    if (!this.canBeRendered(content)) {
      throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof content);
    }

    var toastId = options.toastId,
        updateId = options.updateId; // Check for multi-container and also for duplicate toastId
    // Maybe it would be better to extract it

    if (this.props.enableMultiContainer && !this.belongToContainer(options) || this.isToastActive(toastId) && updateId == null) {
      return;
    }

    var closeToast = function closeToast() {
      return _this4.removeToast(toastId);
    };

    var toastOptions = {
      id: toastId,
      // ⚠️ if no options.key, this.toastKey - 1 is assigned
      key: options.key || this.toastKey++,
      type: options.type,
      closeToast: closeToast,
      updateId: options.updateId,
      rtl: this.props.rtl,
      position: options.position || this.props.position,
      transition: options.transition || this.props.transition,
      className: this.parseClassName(options.className || this.props.toastClassName),
      bodyClassName: this.parseClassName(options.bodyClassName || this.props.bodyClassName),
      onClick: options.onClick || this.props.onClick,
      closeButton: this.makeCloseButton(options.closeButton, toastId, options.type),
      pauseOnHover: typeof options.pauseOnHover === 'boolean' ? options.pauseOnHover : this.props.pauseOnHover,
      pauseOnFocusLoss: typeof options.pauseOnFocusLoss === 'boolean' ? options.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
      draggable: typeof options.draggable === 'boolean' ? options.draggable : this.props.draggable,
      draggablePercent: typeof options.draggablePercent === 'number' && !isNaN(options.draggablePercent) ? options.draggablePercent : this.props.draggablePercent,
      closeOnClick: typeof options.closeOnClick === 'boolean' ? options.closeOnClick : this.props.closeOnClick,
      progressClassName: this.parseClassName(options.progressClassName || this.props.progressClassName),
      progressStyle: this.props.progressStyle,
      autoClose: this.getAutoCloseDelay(options.autoClose),
      hideProgressBar: typeof options.hideProgressBar === 'boolean' ? options.hideProgressBar : this.props.hideProgressBar,
      progress: parseFloat(options.progress),
      role: typeof options.role === 'string' ? options.role : this.props.role
    };
    typeof options.onOpen === 'function' && (toastOptions.onOpen = options.onOpen);
    typeof options.onClose === 'function' && (toastOptions.onClose = options.onClose); // add closeToast function to react component only

    if (Object(react["isValidElement"])(content) && typeof content.type !== 'string' && typeof content.type !== 'number') {
      content = Object(react["cloneElement"])(content, {
        closeToast: closeToast
      });
    } else if (typeof content === 'function') {
      content = content({
        closeToast: closeToast
      });
    }

    if (isValidDelay(delay)) {
      setTimeout(function () {
        _this4.appendToast(toastOptions, content, options.staleToastId);
      }, delay);
    } else {
      this.appendToast(toastOptions, content, options.staleToastId);
    }
  };

  _proto.appendToast = function appendToast(options, content, staleToastId) {
    var _extends2;

    var id = options.id,
        updateId = options.updateId;
    this.collection = _extends({}, this.collection, (_extends2 = {}, _extends2[id] = {
      options: options,
      content: content,
      position: options.position
    }, _extends2));
    this.setState({
      toast: (updateId ? [].concat(this.state.toast) : [].concat(this.state.toast, [id])).filter(function (id) {
        return id !== staleToastId;
      })
    }, this.dispatchChange);
  };

  _proto.clear = function clear() {
    this.setState({
      toast: []
    });
  };

  _proto.renderToast = function renderToast() {
    var _this5 = this;

    var toastToRender = {};
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        newestOnTop = _this$props.newestOnTop;
    var collection = newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection); // group toast by position

    collection.forEach(function (toastId) {
      var _this5$collection$toa = _this5.collection[toastId],
          position = _this5$collection$toa.position,
          options = _this5$collection$toa.options,
          content = _this5$collection$toa.content;
      toastToRender[position] || (toastToRender[position] = []);

      if (_this5.state.toast.indexOf(options.id) !== -1) {
        toastToRender[position].push(react_default.a.createElement(react_toastify_Toast, _extends({}, options, {
          isDocumentHidden: _this5.state.isDocumentHidden,
          key: "toast-" + options.key
        }), content));
      } else {
        toastToRender[position].push(null);
        delete _this5.collection[toastId];
      }
    });
    return Object.keys(toastToRender).map(function (position) {
      var disablePointer = toastToRender[position].length === 1 && toastToRender[position][0] === null;
      var props = {
        className: classnames_default()('Toastify__toast-container', "Toastify__toast-container--" + position, {
          'Toastify__toast-container--rtl': _this5.props.rtl
        }, _this5.parseClassName(className)),
        style: disablePointer ? _extends({}, style, {
          pointerEvents: 'none'
        }) : _extends({}, style)
      };
      return react_default.a.createElement(TransitionGroup_default.a, _extends({}, props, {
        key: "container-" + position
      }), toastToRender[position]);
    });
  };

  _proto.render = function render() {
    return react_default.a.createElement("div", {
      className: "Toastify"
    }, this.renderToast());
  };

  return ToastContainer;
}(react["Component"]);

react_toastify_ToastContainer.propTypes = {
  /**
   * Set toast position
   */
  position: prop_types_default.a.oneOf(objectValues(POSITION)),

  /**
   * Disable or set autoClose delay
   */
  autoClose: falseOrDelay,

  /**
   * Disable or set a custom react element for the close button
   */
  closeButton: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.bool]),

  /**
   * Hide or not progress bar when autoClose is enabled
   */
  hideProgressBar: prop_types_default.a.bool,

  /**
   * Pause toast duration on hover
   */
  pauseOnHover: prop_types_default.a.bool,

  /**
   * Dismiss toast on click
   */
  closeOnClick: prop_types_default.a.bool,

  /**
   * Newest on top
   */
  newestOnTop: prop_types_default.a.bool,

  /**
   * An optional className
   */
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),

  /**
   * An optional style
   */
  style: prop_types_default.a.object,

  /**
   * An optional className for the toast
   */
  toastClassName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),

  /**
   * An optional className for the toast body
   */
  bodyClassName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),

  /**
   * An optional className for the toast progress bar
   */
  progressClassName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),

  /**
   * An optional style for the toast progress bar
   */
  progressStyle: prop_types_default.a.object,

  /**
   * Define enter and exit transition using react-transition-group
   */
  transition: prop_types_default.a.func,

  /**
   * Support rtl display
   */
  rtl: prop_types_default.a.bool,

  /**
   * Allow toast to be draggable
   */
  draggable: prop_types_default.a.bool,

  /**
   * The percentage of the toast's width it takes for a drag to dismiss a toast
   */
  draggablePercent: prop_types_default.a.number,

  /**
   * Pause the toast on focus loss
   */
  pauseOnFocusLoss: prop_types_default.a.bool,

  /**
   * Show the toast only if it includes containerId and it's the same as containerId
   */
  enableMultiContainer: prop_types_default.a.bool,

  /**
   * Set id to handle multiple container
   */
  containerId: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /**
   * Set role attribute for the toast body
   */
  role: prop_types_default.a.string,

  /**
   * Fired when clicking inside toaster
   */
  onClick: prop_types_default.a.func
};
react_toastify_ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: react_default.a.createElement(CloseButton, null),
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null,
  progressStyle: null,
  role: 'alert'
};
var containers = new Map();
var latestInstance = null;
var containerDomNode = null;
var containerConfig = {};
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  if (!containerId) return containers.get(latestInstance);
  return containers.get(containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  var toast = container.collection[toastId];
  if (typeof toast === 'undefined') return null;
  return toast;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(options, type) {
  return _extends({}, options, {
    type: type,
    toastId: getToastId(options)
  });
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (typeof options.toastId === 'string' || typeof options.toastId === 'number' && !isNaN(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(ACTION.SHOW, content, options);
  } else {
    queue.push({
      action: ACTION.SHOW,
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(react_dom["render"])(react_default.a.createElement(react_toastify_ToastContainer, containerConfig), containerDomNode);
    }
  }

  return options.toastId;
}

var react_toastify_toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(options, options && options.type || TYPE.DEFAULT));
};
/**
 * For each available type create a shortcut
 */


var _loop = function _loop(t) {
  if (TYPE[t] !== TYPE.DEFAULT) {
    react_toastify_toast[TYPE[t].toLowerCase()] = function (content, options) {
      return dispatchToast(content, mergeOptions(options, options && options.type || TYPE[t]));
    };
  }
};

for (var t in TYPE) {
  _loop(t);
}
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


react_toastify_toast.warn = react_toastify_toast.warning;
/**
 * Remove toast programmaticaly
 */

react_toastify_toast.dismiss = function (id) {
  if (id === void 0) {
    id = null;
  }

  return isAnyContainerMounted() && eventManager.emit(ACTION.CLEAR, id);
};
/**
 * Do nothing until the container is mounted. Reassigned later
 */


react_toastify_toast.isActive = NOOP;

react_toastify_toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  } // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update


  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.options,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId
      });

      if (!options.toastId || options.toastId === toastId) {
        nextOptions.updateId = generateToastId();
      } else {
        nextOptions.staleToastId = toastId;
      }

      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


react_toastify_toast.done = function (id) {
  react_toastify_toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 */


react_toastify_toast.onChange = function (callback) {
  if (typeof callback === 'function') {
    eventManager.on(ACTION.ON_CHANGE, callback);
  }
};
/**
 * Configure the ToastContainer when lazy mounted
 */


react_toastify_toast.configure = function (config) {
  lazy = true;
  containerConfig = config;
};

react_toastify_toast.POSITION = POSITION;
react_toastify_toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(ACTION.DID_MOUNT, function (containerInstance) {
  latestInstance = containerInstance.props.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);

  react_toastify_toast.isActive = function (id) {
    return containerInstance.isToastActive(id);
  };

  queue.forEach(function (item) {
    eventManager.emit(item.action, item.content, item.options);
  });
  queue = [];
}).on(ACTION.WILL_UNMOUNT, function (containerInstance) {
  if (containerInstance) containers["delete"](containerInstance.props.containerId || containerInstance);else containers.clear();
  react_toastify_toast.isActive = NOOP;

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(94)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(39);
var gOPS = __webpack_require__(98);
var pIE = __webpack_require__(67);
var toObject = __webpack_require__(14);
var IObject = __webpack_require__(77);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(26);
var toIObject = __webpack_require__(34);
var arrayIndexOf = __webpack_require__(78)(false);
var IE_PROTO = __webpack_require__(96)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var invoke = __webpack_require__(127);
var html = __webpack_require__(128);
var cel = __webpack_require__(94);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(51)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(38);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(129);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(21)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(26);
var toObject = __webpack_require__(14);
var IE_PROTO = __webpack_require__(96)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(30);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(135);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(7);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(90).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(21);
var uid = __webpack_require__(37);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(33);
var toLength = __webpack_require__(13);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(79);
var toLength = __webpack_require__(13);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__(200));}else{}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(142);
var validate = __webpack_require__(41);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(84)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(11).f;
var create = __webpack_require__(64);
var redefineAll = __webpack_require__(55);
var ctx = __webpack_require__(27);
var anInstance = __webpack_require__(53);
var forOf = __webpack_require__(80);
var $iterDefine = __webpack_require__(101);
var step = __webpack_require__(132);
var setSpecies = __webpack_require__(82);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(61).fastKey;
var validate = __webpack_require__(41);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(55);
var getWeak = __webpack_require__(61).getWeak;
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(7);
var anInstance = __webpack_require__(53);
var forOf = __webpack_require__(80);
var createArrayMethod = __webpack_require__(40);
var $has = __webpack_require__(26);
var validate = __webpack_require__(41);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* unused harmony export Authentication */
/* unused harmony export Management */
/* unused harmony export WebAuth */
/* unused harmony export version */
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(153);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(186);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(191);
/* harmony import */ var core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_json__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(192);
/* harmony import */ var core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_iso_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_28__);






























/**
 * auth0-js v9.11.3
 * Author: Auth0
 * Date: 2019-08-05
 * License: MIT
 */
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function createCommonjsModule(fn, module) {
  return fn(module = {
    exports: {}
  }, module.exports), module.exports;
}

var urlJoin = createCommonjsModule(function (module) {
  var context, definition;
  context = commonjsGlobal, definition = function definition() {
    function normalize(strArray) {
      var resultArray = [];
      if (0 === strArray.length) return "";
      if ("string" != typeof strArray[0]) throw new TypeError("Url must be a string. Received " + strArray[0]);

      if (strArray[0].match(/^[^\/:]+:\/*$/) && strArray.length > 1) {
        var first = strArray.shift();
        strArray[0] = first + strArray[0];
      }

      strArray[0].match(/^file:\/\/\//) ? strArray[0] = strArray[0].replace(/^([^\/:]+):\/*/, "$1:///") : strArray[0] = strArray[0].replace(/^([^\/:]+):\/*/, "$1://");

      for (var i = 0; i < strArray.length; i++) {
        var component = strArray[i];
        if ("string" != typeof component) throw new TypeError("Url must be a string. Received " + component);
        "" !== component && (i > 0 && (component = component.replace(/^[\/]+/, "")), component = i < strArray.length - 1 ? component.replace(/[\/]+$/, "") : component.replace(/[\/]+$/, "/"), resultArray.push(component));
      }

      var str = resultArray.join("/"),
          parts = (str = str.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&");
    }

    return function () {
      return normalize("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments));
    };
  }, module.exports ? module.exports = definition() : context.urljoin = definition();
}),
    has = Object.prototype.hasOwnProperty,
    isArray = Array.isArray,
    hexTable = function () {
  for (var array = [], i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }

  return array;
}(),
    arrayToObject = function arrayToObject(source, options) {
  for (var obj = options && options.plainObjects ? Object.create(null) : {}, i = 0; i < source.length; ++i) {
    void 0 !== source[i] && (obj[i] = source[i]);
  }

  return obj;
},
    utils = {
  arrayToObject: arrayToObject,
  assign: function assign(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
      return acc[key] = source[key], acc;
    }, target);
  },
  combine: function combine(a, b) {
    return [].concat(a, b);
  },
  compact: function compact(value) {
    for (var queue = [{
      obj: {
        o: value
      },
      prop: "o"
    }], refs = [], i = 0; i < queue.length; ++i) {
      for (var item = queue[i], obj = item.obj[item.prop], keys = Object.keys(obj), j = 0; j < keys.length; ++j) {
        var key = keys[j],
            val = obj[key];
        "object" == typeof val && null !== val && -1 === refs.indexOf(val) && (queue.push({
          obj: obj,
          prop: key
        }), refs.push(val));
      }
    }

    return function (queue) {
      for (; queue.length > 1;) {
        var item = queue.pop(),
            obj = item.obj[item.prop];

        if (isArray(obj)) {
          for (var compacted = [], j = 0; j < obj.length; ++j) {
            void 0 !== obj[j] && compacted.push(obj[j]);
          }

          item.obj[item.prop] = compacted;
        }
      }
    }(queue), value;
  },
  decode: function decode(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if ("iso-8859-1" === charset) return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);

    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  },
  encode: function encode(str, defaultEncoder, charset) {
    if (0 === str.length) return str;
    var string = "string" == typeof str ? str : String(str);
    if ("iso-8859-1" === charset) return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });

    for (var out = "", i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);
      45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 ? out += string.charAt(i) : c < 128 ? out += hexTable[c] : c < 2048 ? out += hexTable[192 | c >> 6] + hexTable[128 | 63 & c] : c < 55296 || c >= 57344 ? out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | 63 & c] : (i += 1, c = 65536 + ((1023 & c) << 10 | 1023 & string.charCodeAt(i)), out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | 63 & c]);
    }

    return out;
  },
  isBuffer: function isBuffer(obj) {
    return !(!obj || "object" != typeof obj || !(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj)));
  },
  isRegExp: function isRegExp(obj) {
    return "[object RegExp]" === Object.prototype.toString.call(obj);
  },
  merge: function merge(target, source, options) {
    if (!source) return target;

    if ("object" != typeof source) {
      if (isArray(target)) target.push(source);else {
        if (!target || "object" != typeof target) return [target, source];
        (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) && (target[source] = !0);
      }
      return target;
    }

    if (!target || "object" != typeof target) return [target].concat(source);
    var mergeTarget = target;
    return isArray(target) && !isArray(source) && (mergeTarget = arrayToObject(target, options)), isArray(target) && isArray(source) ? (source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];
        targetItem && "object" == typeof targetItem && item && "object" == typeof item ? target[i] = merge(targetItem, item, options) : target.push(item);
      } else target[i] = item;
    }), target) : Object.keys(source).reduce(function (acc, key) {
      var value = source[key];
      return has.call(acc, key) ? acc[key] = merge(acc[key], value, options) : acc[key] = value, acc;
    }, mergeTarget);
  }
},
    replace = String.prototype.replace,
    percentTwenties = /%20/g,
    formats = {
  "default": "RFC3986",
  formatters: {
    RFC1738: function RFC1738(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function RFC3986(value) {
      return value;
    }
  },
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
},
    has$1 = Object.prototype.hasOwnProperty,
    arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
},
    isArray$1 = Array.isArray,
    push = Array.prototype.push,
    pushToArray = function pushToArray(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
},
    toISO = Date.prototype.toISOString,
    defaults = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: utils.encode,
  encodeValuesOnly: !1,
  formatter: formats.formatters[formats["default"]],
  indices: !1,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: !1,
  strictNullHandling: !1
},
    stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if ("function" == typeof filter ? obj = filter(prefix, obj) : obj instanceof Date ? obj = serializeDate(obj) : "comma" === generateArrayPrefix && isArray$1(obj) && (obj = obj.join(",")), null === obj) {
    if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
    obj = "";
  }

  if ("string" == typeof obj || "number" == typeof obj || "boolean" == typeof obj || utils.isBuffer(obj)) return encoder ? [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset)) + "=" + formatter(encoder(obj, defaults.encoder, charset))] : [formatter(prefix) + "=" + formatter(String(obj))];
  var objKeys,
      values = [];
  if (void 0 === obj) return values;
  if (isArray$1(filter)) objKeys = filter;else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    skipNulls && null === obj[key] || (isArray$1(obj) ? pushToArray(values, stringify(obj[key], "function" == typeof generateArrayPrefix ? generateArrayPrefix(prefix, key) : prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset)) : pushToArray(values, stringify(obj[key], prefix + (allowDots ? "." + key : "[" + key + "]"), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset)));
  }

  return values;
},
    has$2 = Object.prototype.hasOwnProperty,
    defaults$1 = {
  allowDots: !1,
  allowPrototypes: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
},
    interpretNumericEntities = function interpretNumericEntities(str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
},
    parseKeys = function parseKeys(givenKey, val, options) {
  if (givenKey) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey,
        child = /(\[[^[\]]*])/g,
        segment = /(\[[^[\]]*])/.exec(key),
        parent = segment ? key.slice(0, segment.index) : key,
        keys = [];

    if (parent) {
      if (!options.plainObjects && has$2.call(Object.prototype, parent) && !options.allowPrototypes) return;
      keys.push(parent);
    }

    for (var i = 0; null !== (segment = child.exec(key)) && i < options.depth;) {
      if (i += 1, !options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1)) && !options.allowPrototypes) return;
      keys.push(segment[1]);
    }

    return segment && keys.push("[" + key.slice(segment.index) + "]"), function (chain, val, options) {
      for (var leaf = val, i = chain.length - 1; i >= 0; --i) {
        var obj,
            root = chain[i];
        if ("[]" === root && options.parseArrays) obj = [].concat(leaf);else {
          obj = options.plainObjects ? Object.create(null) : {};
          var cleanRoot = "[" === root.charAt(0) && "]" === root.charAt(root.length - 1) ? root.slice(1, -1) : root,
              index = parseInt(cleanRoot, 10);
          options.parseArrays || "" !== cleanRoot ? !isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit ? (obj = [])[index] = leaf : obj[cleanRoot] = leaf : obj = {
            0: leaf
          };
        }
        leaf = obj;
      }

      return leaf;
    }(keys, val, options);
  }
},
    lib_parse = function lib_parse(str, opts) {
  var options = function (opts) {
    if (!opts) return defaults$1;
    if (null !== opts.decoder && void 0 !== opts.decoder && "function" != typeof opts.decoder) throw new TypeError("Decoder has to be a function.");
    if (void 0 !== opts.charset && "utf-8" !== opts.charset && "iso-8859-1" !== opts.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = void 0 === opts.charset ? defaults$1.charset : opts.charset;
    return {
      allowDots: void 0 === opts.allowDots ? defaults$1.allowDots : !!opts.allowDots,
      allowPrototypes: "boolean" == typeof opts.allowPrototypes ? opts.allowPrototypes : defaults$1.allowPrototypes,
      arrayLimit: "number" == typeof opts.arrayLimit ? opts.arrayLimit : defaults$1.arrayLimit,
      charset: charset,
      charsetSentinel: "boolean" == typeof opts.charsetSentinel ? opts.charsetSentinel : defaults$1.charsetSentinel,
      comma: "boolean" == typeof opts.comma ? opts.comma : defaults$1.comma,
      decoder: "function" == typeof opts.decoder ? opts.decoder : defaults$1.decoder,
      delimiter: "string" == typeof opts.delimiter || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
      depth: "number" == typeof opts.depth ? opts.depth : defaults$1.depth,
      ignoreQueryPrefix: !0 === opts.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof opts.interpretNumericEntities ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
      parameterLimit: "number" == typeof opts.parameterLimit ? opts.parameterLimit : defaults$1.parameterLimit,
      parseArrays: !1 !== opts.parseArrays,
      plainObjects: "boolean" == typeof opts.plainObjects ? opts.plainObjects : defaults$1.plainObjects,
      strictNullHandling: "boolean" == typeof opts.strictNullHandling ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
  }(opts);

  if ("" === str || null == str) return options.plainObjects ? Object.create(null) : {};

  for (var tempObj = "string" == typeof str ? function (str, options) {
    var i,
        obj = {},
        cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str,
        limit = options.parameterLimit === 1 / 0 ? void 0 : options.parameterLimit,
        parts = cleanStr.split(options.delimiter, limit),
        skipIndex = -1,
        charset = options.charset;
    if (options.charsetSentinel) for (i = 0; i < parts.length; ++i) {
      0 === parts[i].indexOf("utf8=") && ("utf8=%E2%9C%93" === parts[i] ? charset = "utf-8" : "utf8=%26%2310003%3B" === parts[i] && (charset = "iso-8859-1"), skipIndex = i, i = parts.length);
    }

    for (i = 0; i < parts.length; ++i) {
      if (i !== skipIndex) {
        var key,
            val,
            part = parts[i],
            bracketEqualsPos = part.indexOf("]="),
            pos = -1 === bracketEqualsPos ? part.indexOf("=") : bracketEqualsPos + 1;
        -1 === pos ? (key = options.decoder(part, defaults$1.decoder, charset), val = options.strictNullHandling ? null : "") : (key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset), val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset)), val && options.interpretNumericEntities && "iso-8859-1" === charset && (val = interpretNumericEntities(val)), val && options.comma && val.indexOf(",") > -1 && (val = val.split(",")), has$2.call(obj, key) ? obj[key] = utils.combine(obj[key], val) : obj[key] = val;
      }
    }

    return obj;
  }(str, options) : str, obj = options.plainObjects ? Object.create(null) : {}, keys = Object.keys(tempObj), i = 0; i < keys.length; ++i) {
    var key = keys[i],
        newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
},
    lib_stringify = function lib_stringify(object, opts) {
  var objKeys,
      obj = object,
      options = function (opts) {
    if (!opts) return defaults;
    if (null !== opts.encoder && void 0 !== opts.encoder && "function" != typeof opts.encoder) throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (void 0 !== opts.charset && "utf-8" !== opts.charset && "iso-8859-1" !== opts.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];

    if (void 0 !== opts.format) {
      if (!has$1.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
      format = opts.format;
    }

    var formatter = formats.formatters[format],
        filter = defaults.filter;
    return ("function" == typeof opts.filter || isArray$1(opts.filter)) && (filter = opts.filter), {
      addQueryPrefix: "boolean" == typeof opts.addQueryPrefix ? opts.addQueryPrefix : defaults.addQueryPrefix,
      allowDots: void 0 === opts.allowDots ? defaults.allowDots : !!opts.allowDots,
      charset: charset,
      charsetSentinel: "boolean" == typeof opts.charsetSentinel ? opts.charsetSentinel : defaults.charsetSentinel,
      delimiter: void 0 === opts.delimiter ? defaults.delimiter : opts.delimiter,
      encode: "boolean" == typeof opts.encode ? opts.encode : defaults.encode,
      encoder: "function" == typeof opts.encoder ? opts.encoder : defaults.encoder,
      encodeValuesOnly: "boolean" == typeof opts.encodeValuesOnly ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
      filter: filter,
      formatter: formatter,
      serializeDate: "function" == typeof opts.serializeDate ? opts.serializeDate : defaults.serializeDate,
      skipNulls: "boolean" == typeof opts.skipNulls ? opts.skipNulls : defaults.skipNulls,
      sort: "function" == typeof opts.sort ? opts.sort : null,
      strictNullHandling: "boolean" == typeof opts.strictNullHandling ? opts.strictNullHandling : defaults.strictNullHandling
    };
  }(opts);

  "function" == typeof options.filter ? obj = (0, options.filter)("", obj) : isArray$1(options.filter) && (objKeys = options.filter);
  var arrayFormat,
      keys = [];
  if ("object" != typeof obj || null === obj) return "";
  arrayFormat = opts && opts.arrayFormat in arrayPrefixGenerators ? opts.arrayFormat : opts && "indices" in opts ? opts.indices ? "indices" : "repeat" : "indices";
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  objKeys || (objKeys = Object.keys(obj)), options.sort && objKeys.sort(options.sort);

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    options.skipNulls && null === obj[key] || pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.formatter, options.encodeValuesOnly, options.charset));
  }

  var joined = keys.join(options.delimiter),
      prefix = !0 === options.addQueryPrefix ? "?" : "";
  return options.charsetSentinel && ("iso-8859-1" === options.charset ? prefix += "utf8=%26%2310003%3B&" : prefix += "utf8=%E2%9C%93&"), joined.length > 0 ? prefix + joined : "";
},
    componentEmitter = createCommonjsModule(function (module) {
  function Emitter(obj) {
    if (obj) return function (obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }

      return obj;
    }(obj);
  }

  module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn), this;
  }, Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on), fn.apply(this, arguments);
    }

    return on.fn = fn, this.on(event, on), this;
  }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
    var cb,
        callbacks = this._callbacks["$" + event];
    if (!callbacks) return this;
    if (1 == arguments.length) return delete this._callbacks["$" + event], this;

    for (var i = 0; i < callbacks.length; i++) {
      if ((cb = callbacks[i]) === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    return 0 === callbacks.length && delete this._callbacks["$" + event], this;
  }, Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};

    for (var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event], i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }

    if (callbacks) {
      i = 0;

      for (var len = (callbacks = callbacks.slice(0)).length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  }, Emitter.prototype.listeners = function (event) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + event] || [];
  }, Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
});

var isObject_1 = function isObject_1(obj) {
  return null !== obj && "object" == typeof obj;
},
    requestBase = RequestBase;

function RequestBase(obj) {
  if (obj) return function (obj) {
    for (var key in RequestBase.prototype) {
      obj[key] = RequestBase.prototype[key];
    }

    return obj;
  }(obj);
}

RequestBase.prototype.clearTimeout = function () {
  return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
}, RequestBase.prototype.parse = function (fn) {
  return this._parser = fn, this;
}, RequestBase.prototype.responseType = function (val) {
  return this._responseType = val, this;
}, RequestBase.prototype.serialize = function (fn) {
  return this._serializer = fn, this;
}, RequestBase.prototype.timeout = function (options) {
  if (!options || "object" != typeof options) return this._timeout = options, this._responseTimeout = 0, this;

  for (var option in options) {
    switch (option) {
      case "deadline":
        this._timeout = options.deadline;
        break;

      case "response":
        this._responseTimeout = options.response;
        break;

      default:
        console.warn("Unknown timeout option", option);
    }
  }

  return this;
}, RequestBase.prototype.retry = function (count, fn) {
  return 0 !== arguments.length && !0 !== count || (count = 1), count <= 0 && (count = 0), this._maxRetries = count, this._retries = 0, this._retryCallback = fn, this;
};
var ERROR_CODES = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
  if (this._retryCallback) try {
    var override = this._retryCallback(err, res);

    if (!0 === override) return !0;
    if (!1 === override) return !1;
  } catch (e) {
    console.error(e);
  }
  if (res && res.status && res.status >= 500 && 501 != res.status) return !0;

  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return !0;
    if (err.timeout && "ECONNABORTED" == err.code) return !0;
    if (err.crossDomain) return !0;
  }

  return !1;
}, RequestBase.prototype._retry = function () {
  return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
}, RequestBase.prototype.then = function (resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.end(function (err, res) {
        err ? innerReject(err) : innerResolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
}, RequestBase.prototype["catch"] = function (cb) {
  return this.then(void 0, cb);
}, RequestBase.prototype.use = function (fn) {
  return fn(this), this;
}, RequestBase.prototype.ok = function (cb) {
  if ("function" != typeof cb) throw Error("Callback required");
  return this._okCallback = cb, this;
}, RequestBase.prototype._isResponseOK = function (res) {
  return !!res && (this._okCallback ? this._okCallback(res) : res.status >= 200 && res.status < 300);
}, RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
}, RequestBase.prototype.getHeader = RequestBase.prototype.get, RequestBase.prototype.set = function (field, val) {
  if (isObject_1(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }

    return this;
  }

  return this._header[field.toLowerCase()] = val, this.header[field] = val, this;
}, RequestBase.prototype.unset = function (field) {
  return delete this._header[field.toLowerCase()], delete this.header[field], this;
}, RequestBase.prototype.field = function (name, val) {
  if (null == name) throw new Error(".field(name, val) name can not be empty");

  if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), isObject_1(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }

    return this;
  }

  if (null == val) throw new Error(".field(name, val) val can not be empty");
  return "boolean" == typeof val && (val = "" + val), this._getFormData().append(name, val), this;
}, RequestBase.prototype.abort = function () {
  return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
}, RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case "basic":
      this.set("Authorization", "Basic " + base64Encoder(user + ":" + pass));
      break;

    case "auto":
      this.username = user, this.password = pass;
      break;

    case "bearer":
      this.set("Authorization", "Bearer " + user);
  }

  return this;
}, RequestBase.prototype.withCredentials = function (on) {
  return null == on && (on = !0), this._withCredentials = on, this;
}, RequestBase.prototype.redirects = function (n) {
  return this._maxRedirects = n, this;
}, RequestBase.prototype.maxResponseSize = function (n) {
  if ("number" != typeof n) throw TypeError("Invalid argument");
  return this._maxResponseSize = n, this;
}, RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
}, RequestBase.prototype.send = function (data) {
  var isObj = isObject_1(data),
      type = this._header["content-type"];
  if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), isObj && !this._data) Array.isArray(data) ? this._data = [] : this._isHost(data) || (this._data = {});else if (data && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
  if (isObj && isObject_1(this._data)) for (var key in data) {
    this._data[key] = data[key];
  } else "string" == typeof data ? (type || this.type("form"), type = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == type ? this._data ? this._data + "&" + data : data : (this._data || "") + data) : this._data = data;
  return !isObj || this._isHost(data) ? this : (type || this.type("json"), this);
}, RequestBase.prototype.sortQuery = function (sort) {
  return this._sort = void 0 === sort || sort, this;
}, RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join("&");

  if (query && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + query), this._query.length = 0, this._sort) {
    var index = this.url.indexOf("?");

    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split("&");
      "function" == typeof this._sort ? queryArr.sort(this._sort) : queryArr.sort(), this.url = this.url.substring(0, index) + "?" + queryArr.join("&");
    }
  }
}, RequestBase.prototype._appendQueryString = function () {
  console.trace("Unsupported");
}, RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (!this._aborted) {
    var err = new Error(reason + timeout + "ms exceeded");
    err.timeout = timeout, err.code = "ECONNABORTED", err.errno = errno, this.timedout = !0, this.abort(), this.callback(err);
  }
}, RequestBase.prototype._setTimeouts = function () {
  var self = this;
  this._timeout && !this._timer && (this._timer = setTimeout(function () {
    self._timeoutError("Timeout of ", self._timeout, "ETIME");
  }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
    self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
  }, this._responseTimeout));
};

var utils$1_type = function utils$1_type(str) {
  return str.split(/ *; */).shift();
},
    utils$1_params = function utils$1_params(str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */),
        key = parts.shift(),
        val = parts.shift();
    return key && val && (obj[key] = val), obj;
  }, {});
},
    utils$1_parseLinks = function utils$1_parseLinks(str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */),
        url = parts[0].slice(1, -1);
    return obj[parts[1].split(/ *= */)[1].slice(1, -1)] = url, obj;
  }, {});
},
    responseBase = ResponseBase;

function ResponseBase(obj) {
  if (obj) return function (obj) {
    for (var key in ResponseBase.prototype) {
      obj[key] = ResponseBase.prototype[key];
    }

    return obj;
  }(obj);
}

function Agent() {
  this._defaults = [];
}

ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
}, ResponseBase.prototype._setHeaderProperties = function (header) {
  var ct = header["content-type"] || "";
  this.type = utils$1_type(ct);
  var params = utils$1_params(ct);

  for (var key in params) {
    this[key] = params[key];
  }

  this.links = {};

  try {
    header.link && (this.links = utils$1_parseLinks(header.link));
  } catch (err) {}
}, ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0;
  this.status = this.statusCode = status, this.statusType = type, this.info = 1 == type, this.ok = 2 == type, this.redirect = 3 == type, this.clientError = 4 == type, this.serverError = 5 == type, this.error = (4 == type || 5 == type) && this.toError(), this.created = 201 == status, this.accepted = 202 == status, this.noContent = 204 == status, this.badRequest = 400 == status, this.unauthorized = 401 == status, this.notAcceptable = 406 == status, this.forbidden = 403 == status, this.notFound = 404 == status, this.unprocessableEntity = 422 == status;
}, ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
  Agent.prototype[fn] = function () {
    return this._defaults.push({
      fn: fn,
      arguments: arguments
    }), this;
  };
}), Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, def.arguments);
  });
};

for (var agentBase = Agent, client = createCommonjsModule(function (module, exports) {
  var root;

  function noop() {}

  "undefined" != typeof window ? root = window : "undefined" != typeof self ? root = self : (console.warn("Using browser-only version of superagent in non-browser environment"), root = commonjsGlobal);

  var request = exports = module.exports = function (method, url) {
    return "function" == typeof url ? new exports.Request("GET", method).end(url) : 1 == arguments.length ? new exports.Request("GET", method) : new exports.Request(method, url);
  };

  exports.Request = Request, request.getXHR = function () {
    if (!(!root.XMLHttpRequest || root.location && "file:" == root.location.protocol && root.ActiveXObject)) return new XMLHttpRequest();

    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {}

    throw Error("Browser-only version of superagent could not find XHR");
  };
  var trim = "".trim ? function (s) {
    return s.trim();
  } : function (s) {
    return s.replace(/(^\s*|\s*$)/g, "");
  };

  function serialize(obj) {
    if (!isObject_1(obj)) return obj;
    var pairs = [];

    for (var key in obj) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
    }

    return pairs.join("&");
  }

  function pushEncodedKeyValuePair(pairs, key, val) {
    if (null != val) {
      if (Array.isArray(val)) val.forEach(function (v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });else if (isObject_1(val)) for (var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + "[" + subkey + "]", val[subkey]);
      } else pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(val));
    } else null === val && pairs.push(encodeURIComponent(key));
  }

  function parseString(str) {
    for (var pair, pos, obj = {}, pairs = str.split("&"), i = 0, len = pairs.length; i < len; ++i) {
      -1 == (pos = (pair = pairs[i]).indexOf("=")) ? obj[decodeURIComponent(pair)] = "" : obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }

    return obj;
  }

  function isJSON(mime) {
    return /[\/+]json($|[^-\w])/.test(mime);
  }

  function Response(req) {
    this.req = req, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
    var status = this.xhr.status;
    1223 === status && (status = 204), this._setStatusProperties(status), this.header = this.headers = function (str) {
      for (var index, line, field, val, lines = str.split(/\r?\n/), fields = {}, i = 0, len = lines.length; i < len; ++i) {
        -1 !== (index = (line = lines[i]).indexOf(":")) && (field = line.slice(0, index).toLowerCase(), val = trim(line.slice(index + 1)), fields[field] = val);
      }

      return fields;
    }(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && req._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }

  function Request(method, url) {
    var self = this;
    this._query = this._query || [], this.method = method, this.url = url, this.header = {}, this._header = {}, this.on("end", function () {
      var new_err,
          err = null,
          res = null;

      try {
        res = new Response(self);
      } catch (e) {
        return (err = new Error("Parser is unable to parse the response")).parse = !0, err.original = e, self.xhr ? (err.rawResponse = void 0 === self.xhr.responseType ? self.xhr.responseText : self.xhr.response, err.status = self.xhr.status ? self.xhr.status : null, err.statusCode = err.status) : (err.rawResponse = null, err.status = null), self.callback(err);
      }

      self.emit("response", res);

      try {
        self._isResponseOK(res) || (new_err = new Error(res.statusText || "Unsuccessful HTTP response"));
      } catch (custom_err) {
        new_err = custom_err;
      }

      new_err ? (new_err.original = err, new_err.response = res, new_err.status = res.status, self.callback(new_err, res)) : self.callback(null, res);
    });
  }

  function del(url, data, fn) {
    var req = request("DELETE", url);
    return "function" == typeof data && (fn = data, data = null), data && req.send(data), fn && req.end(fn), req;
  }

  request.serializeObject = serialize, request.parseString = parseString, request.types = {
    html: "text/html",
    json: "application/json",
    xml: "text/xml",
    urlencoded: "application/x-www-form-urlencoded",
    form: "application/x-www-form-urlencoded",
    "form-data": "application/x-www-form-urlencoded"
  }, request.serialize = {
    "application/x-www-form-urlencoded": serialize,
    "application/json": JSON.stringify
  }, request.parse = {
    "application/x-www-form-urlencoded": parseString,
    "application/json": JSON.parse
  }, responseBase(Response.prototype), Response.prototype._parseBody = function (str) {
    var parse = request.parse[this.type];
    return this.req._parser ? this.req._parser(this, str) : (!parse && isJSON(this.type) && (parse = request.parse["application/json"]), parse && str && (str.length || str instanceof Object) ? parse(str) : null);
  }, Response.prototype.toError = function () {
    var req = this.req,
        method = req.method,
        url = req.url,
        msg = "cannot " + method + " " + url + " (" + this.status + ")",
        err = new Error(msg);
    return err.status = this.status, err.method = method, err.url = url, err;
  }, request.Response = Response, componentEmitter(Request.prototype), requestBase(Request.prototype), Request.prototype.type = function (type) {
    return this.set("Content-Type", request.types[type] || type), this;
  }, Request.prototype.accept = function (type) {
    return this.set("Accept", request.types[type] || type), this;
  }, Request.prototype.auth = function (user, pass, options) {
    1 === arguments.length && (pass = ""), "object" == typeof pass && null !== pass && (options = pass, pass = ""), options || (options = {
      type: "function" == typeof btoa ? "basic" : "auto"
    });

    var encoder = function encoder(string) {
      if ("function" == typeof btoa) return btoa(string);
      throw new Error("Cannot use basic auth, btoa is not a function");
    };

    return this._auth(user, pass, options, encoder);
  }, Request.prototype.query = function (val) {
    return "string" != typeof val && (val = serialize(val)), val && this._query.push(val), this;
  }, Request.prototype.attach = function (field, file, options) {
    if (file) {
      if (this._data) throw Error("superagent can't mix .send() and .attach()");

      this._getFormData().append(field, file, options || file.name);
    }

    return this;
  }, Request.prototype._getFormData = function () {
    return this._formData || (this._formData = new root.FormData()), this._formData;
  }, Request.prototype.callback = function (err, res) {
    if (this._shouldRetry(err, res)) return this._retry();
    var fn = this._callback;
    this.clearTimeout(), err && (this._maxRetries && (err.retries = this._retries - 1), this.emit("error", err)), fn(err, res);
  }, Request.prototype.crossDomainError = function () {
    var err = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    err.crossDomain = !0, err.status = this.status, err.method = this.method, err.url = this.url, this.callback(err);
  }, Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
    return console.warn("This is not supported in browser version of superagent"), this;
  }, Request.prototype.pipe = Request.prototype.write = function () {
    throw Error("Streaming is not supported in browser version of superagent");
  }, Request.prototype._isHost = function (obj) {
    return obj && "object" == typeof obj && !Array.isArray(obj) && "[object Object]" !== Object.prototype.toString.call(obj);
  }, Request.prototype.end = function (fn) {
    return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = fn || noop, this._finalizeQueryString(), this._end();
  }, Request.prototype._end = function () {
    var self = this,
        xhr = this.xhr = request.getXHR(),
        data = this._formData || this._data;
    this._setTimeouts(), xhr.onreadystatechange = function () {
      var readyState = xhr.readyState;

      if (readyState >= 2 && self._responseTimeoutTimer && clearTimeout(self._responseTimeoutTimer), 4 == readyState) {
        var status;

        try {
          status = xhr.status;
        } catch (e) {
          status = 0;
        }

        if (!status) {
          if (self.timedout || self._aborted) return;
          return self.crossDomainError();
        }

        self.emit("end");
      }
    };

    var handleProgress = function handleProgress(direction, e) {
      e.total > 0 && (e.percent = e.loaded / e.total * 100), e.direction = direction, self.emit("progress", e);
    };

    if (this.hasListeners("progress")) try {
      xhr.onprogress = handleProgress.bind(null, "download"), xhr.upload && (xhr.upload.onprogress = handleProgress.bind(null, "upload"));
    } catch (e) {}

    try {
      this.username && this.password ? xhr.open(this.method, this.url, !0, this.username, this.password) : xhr.open(this.method, this.url, !0);
    } catch (err) {
      return this.callback(err);
    }

    if (this._withCredentials && (xhr.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof data && !this._isHost(data)) {
      var contentType = this._header["content-type"],
          serialize = this._serializer || request.serialize[contentType ? contentType.split(";")[0] : ""];
      !serialize && isJSON(contentType) && (serialize = request.serialize["application/json"]), serialize && (data = serialize(data));
    }

    for (var field in this.header) {
      null != this.header[field] && this.header.hasOwnProperty(field) && xhr.setRequestHeader(field, this.header[field]);
    }

    return this._responseType && (xhr.responseType = this._responseType), this.emit("request", this), xhr.send(void 0 !== data ? data : null), this;
  }, request.agent = function () {
    return new agentBase();
  }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
    agentBase.prototype[method.toLowerCase()] = function (url, fn) {
      var req = new request.Request(method, url);
      return this._setDefaults(req), fn && req.end(fn), req;
    };
  }), agentBase.prototype.del = agentBase.prototype["delete"], request.get = function (url, data, fn) {
    var req = request("GET", url);
    return "function" == typeof data && (fn = data, data = null), data && req.query(data), fn && req.end(fn), req;
  }, request.head = function (url, data, fn) {
    var req = request("HEAD", url);
    return "function" == typeof data && (fn = data, data = null), data && req.query(data), fn && req.end(fn), req;
  }, request.options = function (url, data, fn) {
    var req = request("OPTIONS", url);
    return "function" == typeof data && (fn = data, data = null), data && req.send(data), fn && req.end(fn), req;
  }, request.del = del, request["delete"] = del, request.patch = function (url, data, fn) {
    var req = request("PATCH", url);
    return "function" == typeof data && (fn = data, data = null), data && req.send(data), fn && req.end(fn), req;
  }, request.post = function (url, data, fn) {
    var req = request("POST", url);
    return "function" == typeof data && (fn = data, data = null), data && req.send(data), fn && req.end(fn), req;
  }, request.put = function (url, data, fn) {
    var req = request("PUT", url);
    return "function" == typeof data && (fn = data, data = null), data && req.send(data), fn && req.end(fn), req;
  };
}), byteLength_1 = (client.Request, function (b64) {
  var lens = getLens(b64),
      validLen = lens[0],
      placeHoldersLen = lens[1];
  return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
}), toByteArray_1 = function toByteArray_1(b64) {
  for (var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(function (b64, validLen, placeHoldersLen) {
    return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
  }(0, validLen, placeHoldersLen)), curByte = 0, len = placeHoldersLen > 0 ? validLen - 4 : validLen, i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], arr[curByte++] = tmp >> 16 & 255, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp;
  }

  2 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, arr[curByte++] = 255 & tmp);
  1 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp);
  return arr;
}, fromByteArray_1 = function fromByteArray_1(uint8) {
  for (var tmp, len = uint8.length, extraBytes = len % 3, parts = [], i = 0, len2 = len - extraBytes; i < len2; i += 16383) {
    parts.push(encodeChunk(uint8, i, i + 16383 > len2 ? len2 : i + 16383));
  }

  1 === extraBytes ? (tmp = uint8[len - 1], parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : 2 === extraBytes && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="));
  return parts.join("");
}, lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
}

function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var validLen = b64.indexOf("=");
  return -1 === validLen && (validLen = len), [validLen, validLen === len ? 0 : 4 - validLen % 4];
}

function encodeChunk(uint8, start, end) {
  for (var tmp, num, output = [], i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]), output.push(lookup[(num = tmp) >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num]);
  }

  return output.join("");
}

revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
var base64Js = {
  byteLength: byteLength_1,
  toByteArray: toByteArray_1,
  fromByteArray: fromByteArray_1
};
var base64Url = {
  encode: function encode(str) {
    return base64Js.fromByteArray(function (str) {
      for (var arr = new Array(str.length), a = 0; a < str.length; a++) {
        arr[a] = str.charCodeAt(a);
      }

      return arr;
    }(str)).replace(/\+/g, "-").replace(/\//g, "_");
  },
  decode: function decode(str) {
    return str = function (str) {
      var mod = str.length % 4;
      return 0 === mod ? str : str + new Array(4 - mod + 1).join("=");
    }(str).replace(/-/g, "+").replace(/_/g, "/"), function (array) {
      for (var result = "", i = 0; i < array.length; i++) {
        result += String.fromCharCode(array[i]);
      }

      return result;
    }(base64Js.toByteArray(str));
  }
},
    version = {
  raw: "9.11.3"
},
    toString = Object.prototype.toString;

function attribute(o, attr, type, text) {
  if (type = "array" === type ? "object" : type, o && typeof o[attr] !== type) throw new Error(text);
}

function variable(o, type, text) {
  if (typeof o !== type) throw new Error(text);
}

function value(o, values, text) {
  if (-1 === values.indexOf(o)) throw new Error(text);
}

var assert = {
  check: function check(o, config, attributes) {
    if (config.optional && !o || variable(o, config.type, config.message), "object" === config.type && attributes) for (var keys = Object.keys(attributes), index = 0; index < keys.length; index++) {
      var a = keys[index];
      attributes[a].optional && !o[a] || attributes[a].condition && !attributes[a].condition(o) || (attribute(o, a, attributes[a].type, attributes[a].message), attributes[a].values && value(o[a], attributes[a].values, attributes[a].value_message));
    }
  },
  attribute: attribute,
  variable: variable,
  value: value,
  isArray: function isArray(array) {
    return this.supportsIsArray() ? Array.isArray(array) : "[object Array]" === toString.call(array);
  },
  supportsIsArray: function supportsIsArray() {
    return null != Array.isArray;
  }
};

function objectAssignPolyfill(target) {
  if (null == target) throw new TypeError("Cannot convert first argument to object");

  for (var to = Object(target), i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (null != nextSource) for (var keysArray = Object.keys(Object(nextSource)), nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex],
          desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      void 0 !== desc && desc.enumerable && (to[nextKey] = nextSource[nextKey]);
    }
  }

  return to;
}

var objectAssign = {
  get: function get() {
    return Object.assign ? Object.assign : objectAssignPolyfill;
  },
  objectAssignPolyfill: objectAssignPolyfill
};

function pick(object, keys) {
  return keys.reduce(function (prev, key) {
    return object[key] && (prev[key] = object[key]), prev;
  }, {});
}

function extend() {
  var params = function (obj) {
    var values = [];

    for (var key in obj) {
      values.push(obj[key]);
    }

    return values;
  }(arguments);

  return params.unshift({}), objectAssign.get().apply(void 0, params);
}

function getLocationFromUrl(href) {
  var match = href.match(/^(https?:|file:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match && {
    href: href,
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  };
}

function trim(options, key) {
  var trimmed = extend(options);
  return options[key] && (trimmed[key] = options[key].trim()), trimmed;
}

var objectHelper = {
  toSnakeCase: function toSnakeCase(object, exceptions) {
    return "object" != typeof object || assert.isArray(object) || null === object ? object : (exceptions = exceptions || [], Object.keys(object).reduce(function (p, key) {
      return p[-1 === exceptions.indexOf(key) ? function (str) {
        for (var code, newKey = "", index = 0, wasPrevNumber = !0, wasPrevUppercase = !0; index < str.length;) {
          code = str.charCodeAt(index), !wasPrevUppercase && code >= 65 && code <= 90 || !wasPrevNumber && code >= 48 && code <= 57 ? (newKey += "_", newKey += str[index].toLowerCase()) : newKey += str[index].toLowerCase(), wasPrevNumber = code >= 48 && code <= 57, wasPrevUppercase = code >= 65 && code <= 90, index++;
        }

        return newKey;
      }(key) : key] = toSnakeCase(object[key]), p;
    }, {}));
  },
  toCamelCase: function toCamelCase(object, exceptions, options) {
    return "object" != typeof object || assert.isArray(object) || null === object ? object : (exceptions = exceptions || [], options = options || {}, Object.keys(object).reduce(function (p, key) {
      var parts,
          newKey = -1 === exceptions.indexOf(key) ? (parts = key.split("_")).reduce(function (p, c) {
        return p + c.charAt(0).toUpperCase() + c.slice(1);
      }, parts.shift()) : key;
      return p[newKey] = toCamelCase(object[newKey] || object[key], [], options), options.keepOriginal && (p[key] = toCamelCase(object[key], [], options)), p;
    }, {}));
  },
  blacklist: function blacklist(object, blacklistedKeys) {
    return Object.keys(object).reduce(function (p, key) {
      return -1 === blacklistedKeys.indexOf(key) && (p[key] = object[key]), p;
    }, {});
  },
  merge: function merge(object, keys) {
    return {
      base: keys ? pick(object, keys) : object,
      "with": function _with(object2, keys2) {
        return object2 = keys2 ? pick(object2, keys2) : object2, extend(this.base, object2);
      }
    };
  },
  pick: pick,
  getKeysNotIn: function getKeysNotIn(obj, allowedKeys) {
    var notAllowed = [];

    for (var key in obj) {
      -1 === allowedKeys.indexOf(key) && notAllowed.push(key);
    }

    return notAllowed;
  },
  extend: extend,
  getOriginFromUrl: function getOriginFromUrl(url) {
    if (url) {
      var parsed = getLocationFromUrl(url),
          origin = parsed.protocol + "//" + parsed.hostname;
      return parsed.port && (origin += ":" + parsed.port), origin;
    }
  },
  getLocationFromUrl: getLocationFromUrl,
  trimUserDetails: function trimUserDetails(options) {
    return function (options, keys) {
      return keys.reduce(trim, options);
    }(options, ["username", "email", "phoneNumber"]);
  }
};

function RequestWrapper(req) {
  this.request = req, this.method = req.method, this.url = req.url, this.body = req._data, this.headers = req._header;
}

function RequestObj(req) {
  this.request = req;
}

function RequestBuilder(options) {
  this._sendTelemetry = !1 !== options._sendTelemetry || options._sendTelemetry, this._telemetryInfo = options._telemetryInfo || null, this._timesToRetryFailedRequests = options._timesToRetryFailedRequests, this.headers = options.headers || {}, this._universalLoginPage = options.universalLoginPage;
}

function getWindow() {
  return window;
}

RequestWrapper.prototype.abort = function () {
  this.request.abort();
}, RequestWrapper.prototype.getMethod = function () {
  return this.method;
}, RequestWrapper.prototype.getBody = function () {
  return this.body;
}, RequestWrapper.prototype.getUrl = function () {
  return this.url;
}, RequestWrapper.prototype.getHeaders = function () {
  return this.headers;
}, RequestObj.prototype.set = function (key, value) {
  return this.request = this.request.set(key, value), this;
}, RequestObj.prototype.send = function (body) {
  return this.request = this.request.send(objectHelper.trimUserDetails(body)), this;
}, RequestObj.prototype.withCredentials = function () {
  return this.request = this.request.withCredentials(), this;
}, RequestObj.prototype.end = function (cb) {
  return this.request = this.request.end(cb), new RequestWrapper(this.request);
}, RequestBuilder.prototype.setCommonConfiguration = function (ongoingRequest, options) {
  if (options = options || {}, this._timesToRetryFailedRequests > 0 && (ongoingRequest = ongoingRequest.retry(this._timesToRetryFailedRequests)), options.noHeaders) return ongoingRequest;
  var headers = this.headers;
  ongoingRequest = ongoingRequest.set("Content-Type", "application/json");

  for (var keys = Object.keys(this.headers), a = 0; a < keys.length; a++) {
    ongoingRequest = ongoingRequest.set(keys[a], headers[keys[a]]);
  }

  return this._sendTelemetry && (ongoingRequest = ongoingRequest.set("Auth0-Client", this.getTelemetryData())), ongoingRequest;
}, RequestBuilder.prototype.getTelemetryData = function () {
  var telemetryName = this._universalLoginPage ? "auth0.js-ulp" : "auth0.js",
      clientInfo = {
    name: telemetryName,
    version: version.raw
  };
  this._telemetryInfo && ((clientInfo = objectHelper.extend({}, this._telemetryInfo)).env = objectHelper.extend({}, this._telemetryInfo.env), clientInfo.env[telemetryName] = version.raw);
  var jsonClientInfo = JSON.stringify(clientInfo);
  return base64Url.encode(jsonClientInfo);
}, RequestBuilder.prototype.get = function (url, options) {
  return new RequestObj(this.setCommonConfiguration(client.get(url), options));
}, RequestBuilder.prototype.post = function (url, options) {
  return new RequestObj(this.setCommonConfiguration(client.post(url), options));
}, RequestBuilder.prototype.patch = function (url, options) {
  return new RequestObj(this.setCommonConfiguration(client.patch(url), options));
};
var windowHelper = {
  redirect: function redirect(url) {
    getWindow().location = url;
  },
  getDocument: function getDocument() {
    return getWindow().document;
  },
  getWindow: getWindow,
  getOrigin: function getOrigin() {
    var location = getWindow().location,
        origin = location.origin;
    return origin || (origin = objectHelper.getOriginFromUrl(location.href)), origin;
  }
};

function DummyStorage() {}

DummyStorage.prototype.getItem = function () {
  return null;
}, DummyStorage.prototype.removeItem = function () {}, DummyStorage.prototype.setItem = function () {};
var js_cookie = createCommonjsModule(function (module, exports) {
  var factory;
  factory = function factory() {
    function extend() {
      for (var i = 0, result = {}; i < arguments.length; i++) {
        var attributes = arguments[i];

        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }

      return result;
    }

    return function init(converter) {
      function api(key, value, attributes) {
        var result;

        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if ("number" == typeof (attributes = extend({
              path: "/"
            }, api.defaults, attributes)).expires) {
              var expires = new Date();
              expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), attributes.expires = expires;
            }

            attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";

            try {
              result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result);
            } catch (e) {}

            value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = (key = (key = encodeURIComponent(String(key))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
            var stringifiedAttributes = "";

            for (var attributeName in attributes) {
              attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, !0 !== attributes[attributeName] && (stringifiedAttributes += "=" + attributes[attributeName]));
            }

            return document.cookie = key + "=" + value + stringifiedAttributes;
          }

          key || (result = {});

          for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split("="),
                cookie = parts.slice(1).join("=");
            this.json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));

            try {
              var name = parts[0].replace(rdecode, decodeURIComponent);
              if (cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), this.json) try {
                cookie = JSON.parse(cookie);
              } catch (e) {}

              if (key === name) {
                result = cookie;
                break;
              }

              key || (result[name] = cookie);
            } catch (e) {}
          }

          return result;
        }
      }

      return api.set = api, api.get = function (key) {
        return api.call(api, key);
      }, api.getJSON = function () {
        return api.apply({
          json: !0
        }, [].slice.call(arguments));
      }, api.defaults = {}, api.remove = function (key, attributes) {
        api(key, "", extend(attributes, {
          expires: -1
        }));
      }, api.withConverter = init, api;
    }(function () {});
  }, module.exports = factory();
});

function CookieStorage() {}

function Warn(options) {
  this.disableWarnings = options.disableWarnings;
}

function StorageHandler(options) {
  if (this.warn = new Warn({}), this.storage = new CookieStorage(), !0 === options.__tryLocalStorageFirst) try {
    var localStorage = windowHelper.getWindow().localStorage;
    localStorage && (this.storage = localStorage);
  } catch (e) {
    this.warn.warning(e), this.warn.warning("Can't use localStorage. Using CookieStorage instead.");
  }
}

function Storage(options) {
  this.handler = new StorageHandler(options);
}

function SSODataStorage(options) {
  this.storage = new Storage(options);
}

function buildResponse(error, description) {
  return {
    error: error,
    errorDescription: description
  };
}

CookieStorage.prototype.getItem = function (key) {
  return js_cookie.get(key);
}, CookieStorage.prototype.removeItem = function (key) {
  js_cookie.remove(key);
}, CookieStorage.prototype.setItem = function (key, value, options) {
  var params = objectHelper.extend({
    expires: 1
  }, options);
  js_cookie.set(key, value, params);
}, Warn.prototype.warning = function (message) {
  this.disableWarnings || console.warn(message);
}, StorageHandler.prototype.failover = function () {
  this.storage instanceof DummyStorage ? this.warn.warning("DummyStorage: ignore failover") : this.storage instanceof CookieStorage ? (this.warn.warning("CookieStorage: failing over DummyStorage"), this.storage = new DummyStorage()) : (this.warn.warning("LocalStorage: failing over CookieStorage"), this.storage = new CookieStorage());
}, StorageHandler.prototype.getItem = function (key) {
  try {
    return this.storage.getItem(key);
  } catch (e) {
    return this.warn.warning(e), this.failover(), this.getItem(key);
  }
}, StorageHandler.prototype.removeItem = function (key) {
  try {
    return this.storage.removeItem(key);
  } catch (e) {
    return this.warn.warning(e), this.failover(), this.removeItem(key);
  }
}, StorageHandler.prototype.setItem = function (key, value, options) {
  try {
    return this.storage.setItem(key, value, options);
  } catch (e) {
    return this.warn.warning(e), this.failover(), this.setItem(key, value, options);
  }
}, Storage.prototype.getItem = function (key) {
  var value = this.handler.getItem(key);

  try {
    return JSON.parse(value);
  } catch (_) {
    return value;
  }
}, Storage.prototype.removeItem = function (key) {
  return this.handler.removeItem(key);
}, Storage.prototype.setItem = function (key, value, options) {
  var json = JSON.stringify(value);
  return this.handler.setItem(key, json, options);
}, SSODataStorage.prototype.set = function (connection, sub) {
  var ssodata = {
    lastUsedConnection: connection,
    lastUsedSub: sub
  };
  this.storage.setItem("auth0.ssodata", JSON.stringify(ssodata));
}, SSODataStorage.prototype.get = function () {
  var ssodata = this.storage.getItem("auth0.ssodata");
  if (ssodata) return JSON.parse(ssodata);
};
var error = {
  buildResponse: buildResponse,
  invalidToken: function invalidToken(description) {
    return buildResponse("invalid_token", description);
  }
};

function wrapCallback(cb, options) {
  return (options = options || {}).ignoreCasing = !!options.ignoreCasing && options.ignoreCasing, function (err, data) {
    var errObj;
    return err || data ? (!err && data.err && (err = data.err, data = null), !err && data.error && (err = data, data = null), err ? (errObj = {
      original: err
    }, err.response && err.response.statusCode && (errObj.statusCode = err.response.statusCode), err.response && err.response.statusText && (errObj.statusText = err.response.statusText), err.response && err.response.body && (err = err.response.body), err.err && (err = err.err), errObj.code = err.code || err.error || err.error_code || err.status || null, errObj.description = err.errorDescription || err.error_description || err.description || err.error || err.details || err.err || null, options.forceLegacyError && (errObj.error = errObj.code, errObj.error_description = errObj.description), err.name && (errObj.name = err.name), err.policy && (errObj.policy = err.policy), cb(errObj)) : !data.type || "text/html" !== data.type && "text/plain" !== data.type ? options.ignoreCasing ? cb(null, data.body || data) : cb(null, objectHelper.toCamelCase(data.body || data, [], {
      keepOriginal: options.keepOriginalCasing
    })) : cb(null, data.text)) : cb(error.buildResponse("generic_error", "Something went wrong"));
  };
}

var tokenParams = ["realm", "audience", "client_id", "client_secret", "redirect_uri", "scope", "code", "grant_type", "username", "password", "refresh_token", "assertion", "client_assertion", "client_assertion_type", "code_verifier"],
    authorizeParams = ["connection", "connection_scope", "auth0Client", "owp", "device", "realm", "protocol", "_csrf", "_intstate", "login_ticket", "client_id", "response_type", "response_mode", "redirect_uri", "audience", "scope", "state", "nonce", "display", "prompt", "max_age", "ui_locales", "claims_locales", "id_token_hint", "login_hint", "acr_values", "claims", "registration", "request", "request_uri", "code_challenge", "code_challenge_method", "access_type", "display"];
var parametersWhitelist = {
  oauthTokenParams: function oauthTokenParams(warn, params) {
    return objectHelper.pick(params, tokenParams);
  },
  oauthAuthorizeParams: function oauthAuthorizeParams(warn, params) {
    var notAllowed = objectHelper.getKeysNotIn(params, authorizeParams);
    return notAllowed.length > 0 && warn.warning("Following parameters are not allowed on the `/authorize` endpoint: [" + notAllowed.join(",") + "]"), params;
  }
},
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function r(t, r) {
  return t(r = {
    exports: {}
  }, r.exports), r.exports;
}

var e = r(function (t, r) {
  var e;

  t.exports = e = e || function (t, r) {
    var e = Object.create || function () {
      function t() {}

      return function (r) {
        var e;
        return t.prototype = r, e = new t(), t.prototype = null, e;
      };
    }(),
        i = {},
        n = i.lib = {},
        o = n.Base = {
      extend: function extend(t) {
        var r = e(this);
        return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () {
          r.$super.init.apply(this, arguments);
        }), r.init.prototype = r, r.$super = this, r;
      },
      create: function create() {
        var t = this.extend();
        return t.init.apply(t, arguments), t;
      },
      init: function init() {},
      mixIn: function mixIn(t) {
        for (var r in t) {
          t.hasOwnProperty(r) && (this[r] = t[r]);
        }

        t.hasOwnProperty("toString") && (this.toString = t.toString);
      },
      clone: function clone() {
        return this.init.prototype.extend(this);
      }
    },
        s = n.WordArray = o.extend({
      init: function init(t, r) {
        t = this.words = t || [], this.sigBytes = null != r ? r : 4 * t.length;
      },
      toString: function toString(t) {
        return (t || a).stringify(this);
      },
      concat: function concat(t) {
        var r = this.words,
            e = t.words,
            i = this.sigBytes,
            n = t.sigBytes;
        if (this.clamp(), i % 4) for (var o = 0; o < n; o++) {
          var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
        } else for (o = 0; o < n; o += 4) {
          r[i + o >>> 2] = e[o >>> 2];
        }
        return this.sigBytes += n, this;
      },
      clamp: function clamp() {
        var r = this.words,
            e = this.sigBytes;
        r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, r.length = t.ceil(e / 4);
      },
      clone: function clone() {
        var t = o.clone.call(this);
        return t.words = this.words.slice(0), t;
      },
      random: function random(r) {
        for (var e, i = [], n = function n(r) {
          r = r;
          var e = 987654321,
              i = 4294967295;
          return function () {
            var n = ((e = 36969 * (65535 & e) + (e >> 16) & i) << 16) + (r = 18e3 * (65535 & r) + (r >> 16) & i) & i;
            return n /= 4294967296, (n += .5) * (t.random() > .5 ? 1 : -1);
          };
        }, o = 0; o < r; o += 4) {
          var h = n(4294967296 * (e || t.random()));
          e = 987654071 * h(), i.push(4294967296 * h() | 0);
        }

        return new s.init(i, r);
      }
    }),
        h = i.enc = {},
        a = h.Hex = {
      stringify: function stringify(t) {
        for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
          var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
        }

        return i.join("");
      },
      parse: function parse(t) {
        for (var r = t.length, e = [], i = 0; i < r; i += 2) {
          e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
        }

        return new s.init(e, r / 2);
      }
    },
        u = h.Latin1 = {
      stringify: function stringify(t) {
        for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
          var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          i.push(String.fromCharCode(o));
        }

        return i.join("");
      },
      parse: function parse(t) {
        for (var r = t.length, e = [], i = 0; i < r; i++) {
          e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
        }

        return new s.init(e, r);
      }
    },
        f = h.Utf8 = {
      stringify: function stringify(t) {
        try {
          return decodeURIComponent(escape(u.stringify(t)));
        } catch (t) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function parse(t) {
        return u.parse(unescape(encodeURIComponent(t)));
      }
    },
        c = n.BufferedBlockAlgorithm = o.extend({
      reset: function reset() {
        this._data = new s.init(), this._nDataBytes = 0;
      },
      _append: function _append(t) {
        "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
      },
      _process: function _process(r) {
        var e = this._data,
            i = e.words,
            n = e.sigBytes,
            o = this.blockSize,
            a = n / (4 * o),
            u = (a = r ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o,
            f = t.min(4 * u, n);

        if (u) {
          for (var c = 0; c < u; c += o) {
            this._doProcessBlock(i, c);
          }

          var p = i.splice(0, u);
          e.sigBytes -= f;
        }

        return new s.init(p, f);
      },
      clone: function clone() {
        var t = o.clone.call(this);
        return t._data = this._data.clone(), t;
      },
      _minBufferSize: 0
    }),
        p = (n.Hasher = c.extend({
      cfg: o.extend(),
      init: function init(t) {
        this.cfg = this.cfg.extend(t), this.reset();
      },
      reset: function reset() {
        c.reset.call(this), this._doReset();
      },
      update: function update(t) {
        return this._append(t), this._process(), this;
      },
      finalize: function finalize(t) {
        return t && this._append(t), this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function _createHelper(t) {
        return function (r, e) {
          return new t.init(e).finalize(r);
        };
      },
      _createHmacHelper: function _createHmacHelper(t) {
        return function (r, e) {
          return new p.HMAC.init(t, e).finalize(r);
        };
      }
    }), i.algo = {});

    return i;
  }(Math);
}),
    i$1 = r(function (t, r) {
  var i;
  t.exports = (i = e, function (t) {
    var r = i,
        e = r.lib,
        n = e.WordArray,
        o = e.Hasher,
        s = r.algo,
        h = [],
        a = [];
    !function () {
      function r(r) {
        for (var e = t.sqrt(r), i = 2; i <= e; i++) {
          if (!(r % i)) return !1;
        }

        return !0;
      }

      function e(t) {
        return 4294967296 * (t - (0 | t)) | 0;
      }

      for (var i = 2, n = 0; n < 64;) {
        r(i) && (n < 8 && (h[n] = e(t.pow(i, .5))), a[n] = e(t.pow(i, 1 / 3)), n++), i++;
      }
    }();
    var u = [],
        f = s.SHA256 = o.extend({
      _doReset: function _doReset() {
        this._hash = new n.init(h.slice(0));
      },
      _doProcessBlock: function _doProcessBlock(t, r) {
        for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], h = e[4], f = e[5], c = e[6], p = e[7], l = 0; l < 64; l++) {
          if (l < 16) u[l] = 0 | t[r + l];else {
            var d = u[l - 15],
                v = u[l - 2];
            u[l] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + u[l - 7] + ((v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10) + u[l - 16];
          }
          var y = i & n ^ i & o ^ n & o,
              m = p + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & f ^ ~h & c) + a[l] + u[l];
          p = c, c = f, f = h, h = s + m | 0, s = o, o = n, n = i, i = m + (((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + y) | 0;
        }

        e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + s | 0, e[4] = e[4] + h | 0, e[5] = e[5] + f | 0, e[6] = e[6] + c | 0, e[7] = e[7] + p | 0;
      },
      _doFinalize: function _doFinalize() {
        var r = this._data,
            e = r.words,
            i = 8 * this._nDataBytes,
            n = 8 * r.sigBytes;
        return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (n + 64 >>> 9 << 4)] = t.floor(i / 4294967296), e[15 + (n + 64 >>> 9 << 4)] = i, r.sigBytes = 4 * e.length, this._process(), this._hash;
      },
      clone: function clone() {
        var t = o.clone.call(this);
        return t._hash = this._hash.clone(), t;
      }
    });
    r.SHA256 = o._createHelper(f), r.HmacSHA256 = o._createHmacHelper(f);
  }(Math), i.SHA256);
}),
    n = r(function (t, r) {
  var i, n;
  t.exports = (n = (i = e).lib.WordArray, i.enc.Base64 = {
    stringify: function stringify(t) {
      var r = t.words,
          e = t.sigBytes,
          i = this._map;
      t.clamp();

      for (var n = [], o = 0; o < e; o += 3) {
        for (var s = (r[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = 0; h < 4 && o + .75 * h < e; h++) {
          n.push(i.charAt(s >>> 6 * (3 - h) & 63));
        }
      }

      var a = i.charAt(64);
      if (a) for (; n.length % 4;) {
        n.push(a);
      }
      return n.join("");
    },
    parse: function parse(t) {
      var r = t.length,
          e = this._map,
          i = this._reverseMap;

      if (!i) {
        i = this._reverseMap = [];

        for (var o = 0; o < e.length; o++) {
          i[e.charCodeAt(o)] = o;
        }
      }

      var s = e.charAt(64);

      if (s) {
        var h = t.indexOf(s);
        -1 !== h && (r = h);
      }

      return function (t, r, e) {
        for (var i = [], o = 0, s = 0; s < r; s++) {
          if (s % 4) {
            var h = e[t.charCodeAt(s - 1)] << s % 4 * 2,
                a = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
            i[o >>> 2] |= (h | a) << 24 - o % 4 * 8, o++;
          }
        }

        return n.create(i, o);
      }(t, r, i);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  }, i.enc.Base64);
}),
    o = r(function (t, r) {
  t.exports = e.enc.Hex;
}),
    s = r(function (r, e) {
  (function () {
    var t;

    function e(t, r, e) {
      null != t && ("number" == typeof t ? this.fromNumber(t, r, e) : this.fromString(t, null == r && "string" != typeof t ? 256 : r));
    }

    function i() {
      return new e(null);
    }

    var n = "undefined" != typeof navigator;
    n && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = function (t, r, e, i, n, o) {
      for (var s = 32767 & r, h = r >> 15; --o >= 0;) {
        var a = 32767 & this[t],
            u = this[t++] >> 15,
            f = h * a + u * s;
        n = ((a = s * a + ((32767 & f) << 15) + e[i] + (1073741823 & n)) >>> 30) + (f >>> 15) + h * u + (n >>> 30), e[i++] = 1073741823 & a;
      }

      return n;
    }, t = 30) : n && "Netscape" != navigator.appName ? (e.prototype.am = function (t, r, e, i, n, o) {
      for (; --o >= 0;) {
        var s = r * this[t++] + e[i] + n;
        n = Math.floor(s / 67108864), e[i++] = 67108863 & s;
      }

      return n;
    }, t = 26) : (e.prototype.am = function (t, r, e, i, n, o) {
      for (var s = 16383 & r, h = r >> 14; --o >= 0;) {
        var a = 16383 & this[t],
            u = this[t++] >> 14,
            f = h * a + u * s;
        n = ((a = s * a + ((16383 & f) << 14) + e[i] + n) >> 28) + (f >> 14) + h * u, e[i++] = 268435455 & a;
      }

      return n;
    }, t = 28), e.prototype.DB = t, e.prototype.DM = (1 << t) - 1, e.prototype.DV = 1 << t, e.prototype.FV = Math.pow(2, 52), e.prototype.F1 = 52 - t, e.prototype.F2 = 2 * t - 52;
    var o,
        s,
        h = "0123456789abcdefghijklmnopqrstuvwxyz",
        a = new Array();

    for (o = "0".charCodeAt(0), s = 0; s <= 9; ++s) {
      a[o++] = s;
    }

    for (o = "a".charCodeAt(0), s = 10; s < 36; ++s) {
      a[o++] = s;
    }

    for (o = "A".charCodeAt(0), s = 10; s < 36; ++s) {
      a[o++] = s;
    }

    function u(t) {
      return h.charAt(t);
    }

    function f(t, r) {
      var e = a[t.charCodeAt(r)];
      return null == e ? -1 : e;
    }

    function c(t) {
      var r = i();
      return r.fromInt(t), r;
    }

    function p(t) {
      var r,
          e = 1;
      return 0 != (r = t >>> 16) && (t = r, e += 16), 0 != (r = t >> 8) && (t = r, e += 8), 0 != (r = t >> 4) && (t = r, e += 4), 0 != (r = t >> 2) && (t = r, e += 2), 0 != (r = t >> 1) && (t = r, e += 1), e;
    }

    function l(t) {
      this.m = t;
    }

    function d(t) {
      this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
    }

    function v(t, r) {
      return t & r;
    }

    function y(t, r) {
      return t | r;
    }

    function m(t, r) {
      return t ^ r;
    }

    function g(t, r) {
      return t & ~r;
    }

    function w(t) {
      if (0 == t) return -1;
      var r = 0;
      return 0 == (65535 & t) && (t >>= 16, r += 16), 0 == (255 & t) && (t >>= 8, r += 8), 0 == (15 & t) && (t >>= 4, r += 4), 0 == (3 & t) && (t >>= 2, r += 2), 0 == (1 & t) && ++r, r;
    }

    function T(t) {
      for (var r = 0; 0 != t;) {
        t &= t - 1, ++r;
      }

      return r;
    }

    function b() {}

    function S(t) {
      return t;
    }

    function B(t) {
      this.r2 = i(), this.q3 = i(), e.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t;
    }

    l.prototype.convert = function (t) {
      return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
    }, l.prototype.revert = function (t) {
      return t;
    }, l.prototype.reduce = function (t) {
      t.divRemTo(this.m, null, t);
    }, l.prototype.mulTo = function (t, r, e) {
      t.multiplyTo(r, e), this.reduce(e);
    }, l.prototype.sqrTo = function (t, r) {
      t.squareTo(r), this.reduce(r);
    }, d.prototype.convert = function (t) {
      var r = i();
      return t.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), t.s < 0 && r.compareTo(e.ZERO) > 0 && this.m.subTo(r, r), r;
    }, d.prototype.revert = function (t) {
      var r = i();
      return t.copyTo(r), this.reduce(r), r;
    }, d.prototype.reduce = function (t) {
      for (; t.t <= this.mt2;) {
        t[t.t++] = 0;
      }

      for (var r = 0; r < this.m.t; ++r) {
        var e = 32767 & t[r],
            i = e * this.mpl + ((e * this.mph + (t[r] >> 15) * this.mpl & this.um) << 15) & t.DM;

        for (t[e = r + this.m.t] += this.m.am(0, i, t, r, 0, this.m.t); t[e] >= t.DV;) {
          t[e] -= t.DV, t[++e]++;
        }
      }

      t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
    }, d.prototype.mulTo = function (t, r, e) {
      t.multiplyTo(r, e), this.reduce(e);
    }, d.prototype.sqrTo = function (t, r) {
      t.squareTo(r), this.reduce(r);
    }, e.prototype.copyTo = function (t) {
      for (var r = this.t - 1; r >= 0; --r) {
        t[r] = this[r];
      }

      t.t = this.t, t.s = this.s;
    }, e.prototype.fromInt = function (t) {
      this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
    }, e.prototype.fromString = function (t, r) {
      var i;
      if (16 == r) i = 4;else if (8 == r) i = 3;else if (256 == r) i = 8;else if (2 == r) i = 1;else if (32 == r) i = 5;else {
        if (4 != r) return void this.fromRadix(t, r);
        i = 2;
      }
      this.t = 0, this.s = 0;

      for (var n = t.length, o = !1, s = 0; --n >= 0;) {
        var h = 8 == i ? 255 & t[n] : f(t, n);
        h < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = h : s + i > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - s) - 1) << s, this[this.t++] = h >> this.DB - s) : this[this.t - 1] |= h << s, (s += i) >= this.DB && (s -= this.DB));
      }

      8 == i && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && e.ZERO.subTo(this, this);
    }, e.prototype.clamp = function () {
      for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) {
        --this.t;
      }
    }, e.prototype.dlShiftTo = function (t, r) {
      var e;

      for (e = this.t - 1; e >= 0; --e) {
        r[e + t] = this[e];
      }

      for (e = t - 1; e >= 0; --e) {
        r[e] = 0;
      }

      r.t = this.t + t, r.s = this.s;
    }, e.prototype.drShiftTo = function (t, r) {
      for (var e = t; e < this.t; ++e) {
        r[e - t] = this[e];
      }

      r.t = Math.max(this.t - t, 0), r.s = this.s;
    }, e.prototype.lShiftTo = function (t, r) {
      var e,
          i = t % this.DB,
          n = this.DB - i,
          o = (1 << n) - 1,
          s = Math.floor(t / this.DB),
          h = this.s << i & this.DM;

      for (e = this.t - 1; e >= 0; --e) {
        r[e + s + 1] = this[e] >> n | h, h = (this[e] & o) << i;
      }

      for (e = s - 1; e >= 0; --e) {
        r[e] = 0;
      }

      r[s] = h, r.t = this.t + s + 1, r.s = this.s, r.clamp();
    }, e.prototype.rShiftTo = function (t, r) {
      r.s = this.s;
      var e = Math.floor(t / this.DB);
      if (e >= this.t) r.t = 0;else {
        var i = t % this.DB,
            n = this.DB - i,
            o = (1 << i) - 1;
        r[0] = this[e] >> i;

        for (var s = e + 1; s < this.t; ++s) {
          r[s - e - 1] |= (this[s] & o) << n, r[s - e] = this[s] >> i;
        }

        i > 0 && (r[this.t - e - 1] |= (this.s & o) << n), r.t = this.t - e, r.clamp();
      }
    }, e.prototype.subTo = function (t, r) {
      for (var e = 0, i = 0, n = Math.min(t.t, this.t); e < n;) {
        i += this[e] - t[e], r[e++] = i & this.DM, i >>= this.DB;
      }

      if (t.t < this.t) {
        for (i -= t.s; e < this.t;) {
          i += this[e], r[e++] = i & this.DM, i >>= this.DB;
        }

        i += this.s;
      } else {
        for (i += this.s; e < t.t;) {
          i -= t[e], r[e++] = i & this.DM, i >>= this.DB;
        }

        i -= t.s;
      }

      r.s = i < 0 ? -1 : 0, i < -1 ? r[e++] = this.DV + i : i > 0 && (r[e++] = i), r.t = e, r.clamp();
    }, e.prototype.multiplyTo = function (t, r) {
      var i = this.abs(),
          n = t.abs(),
          o = i.t;

      for (r.t = o + n.t; --o >= 0;) {
        r[o] = 0;
      }

      for (o = 0; o < n.t; ++o) {
        r[o + i.t] = i.am(0, n[o], r, o, 0, i.t);
      }

      r.s = 0, r.clamp(), this.s != t.s && e.ZERO.subTo(r, r);
    }, e.prototype.squareTo = function (t) {
      for (var r = this.abs(), e = t.t = 2 * r.t; --e >= 0;) {
        t[e] = 0;
      }

      for (e = 0; e < r.t - 1; ++e) {
        var i = r.am(e, r[e], t, 2 * e, 0, 1);
        (t[e + r.t] += r.am(e + 1, 2 * r[e], t, 2 * e + 1, i, r.t - e - 1)) >= r.DV && (t[e + r.t] -= r.DV, t[e + r.t + 1] = 1);
      }

      t.t > 0 && (t[t.t - 1] += r.am(e, r[e], t, 2 * e, 0, 1)), t.s = 0, t.clamp();
    }, e.prototype.divRemTo = function (t, r, n) {
      var o = t.abs();

      if (!(o.t <= 0)) {
        var s = this.abs();
        if (s.t < o.t) return null != r && r.fromInt(0), void (null != n && this.copyTo(n));
        null == n && (n = i());
        var h = i(),
            a = this.s,
            u = t.s,
            f = this.DB - p(o[o.t - 1]);
        f > 0 ? (o.lShiftTo(f, h), s.lShiftTo(f, n)) : (o.copyTo(h), s.copyTo(n));
        var c = h.t,
            l = h[c - 1];

        if (0 != l) {
          var d = l * (1 << this.F1) + (c > 1 ? h[c - 2] >> this.F2 : 0),
              v = this.FV / d,
              y = (1 << this.F1) / d,
              m = 1 << this.F2,
              g = n.t,
              w = g - c,
              T = null == r ? i() : r;

          for (h.dlShiftTo(w, T), n.compareTo(T) >= 0 && (n[n.t++] = 1, n.subTo(T, n)), e.ONE.dlShiftTo(c, T), T.subTo(h, h); h.t < c;) {
            h[h.t++] = 0;
          }

          for (; --w >= 0;) {
            var b = n[--g] == l ? this.DM : Math.floor(n[g] * v + (n[g - 1] + m) * y);
            if ((n[g] += h.am(0, b, n, w, 0, c)) < b) for (h.dlShiftTo(w, T), n.subTo(T, n); n[g] < --b;) {
              n.subTo(T, n);
            }
          }

          null != r && (n.drShiftTo(c, r), a != u && e.ZERO.subTo(r, r)), n.t = c, n.clamp(), f > 0 && n.rShiftTo(f, n), a < 0 && e.ZERO.subTo(n, n);
        }
      }
    }, e.prototype.invDigit = function () {
      if (this.t < 1) return 0;
      var t = this[0];
      if (0 == (1 & t)) return 0;
      var r = 3 & t;
      return (r = (r = (r = (r = r * (2 - (15 & t) * r) & 15) * (2 - (255 & t) * r) & 255) * (2 - ((65535 & t) * r & 65535)) & 65535) * (2 - t * r % this.DV) % this.DV) > 0 ? this.DV - r : -r;
    }, e.prototype.isEven = function () {
      return 0 == (this.t > 0 ? 1 & this[0] : this.s);
    }, e.prototype.exp = function (t, r) {
      if (t > 4294967295 || t < 1) return e.ONE;
      var n = i(),
          o = i(),
          s = r.convert(this),
          h = p(t) - 1;

      for (s.copyTo(n); --h >= 0;) {
        if (r.sqrTo(n, o), (t & 1 << h) > 0) r.mulTo(o, s, n);else {
          var a = n;
          n = o, o = a;
        }
      }

      return r.revert(n);
    }, e.prototype.toString = function (t) {
      if (this.s < 0) return "-" + this.negate().toString(t);
      var r;
      if (16 == t) r = 4;else if (8 == t) r = 3;else if (2 == t) r = 1;else if (32 == t) r = 5;else {
        if (4 != t) return this.toRadix(t);
        r = 2;
      }
      var e,
          i = (1 << r) - 1,
          n = !1,
          o = "",
          s = this.t,
          h = this.DB - s * this.DB % r;
      if (s-- > 0) for (h < this.DB && (e = this[s] >> h) > 0 && (n = !0, o = u(e)); s >= 0;) {
        h < r ? (e = (this[s] & (1 << h) - 1) << r - h, e |= this[--s] >> (h += this.DB - r)) : (e = this[s] >> (h -= r) & i, h <= 0 && (h += this.DB, --s)), e > 0 && (n = !0), n && (o += u(e));
      }
      return n ? o : "0";
    }, e.prototype.negate = function () {
      var t = i();
      return e.ZERO.subTo(this, t), t;
    }, e.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this;
    }, e.prototype.compareTo = function (t) {
      var r = this.s - t.s;
      if (0 != r) return r;
      var e = this.t;
      if (0 != (r = e - t.t)) return this.s < 0 ? -r : r;

      for (; --e >= 0;) {
        if (0 != (r = this[e] - t[e])) return r;
      }

      return 0;
    }, e.prototype.bitLength = function () {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + p(this[this.t - 1] ^ this.s & this.DM);
    }, e.prototype.mod = function (t) {
      var r = i();
      return this.abs().divRemTo(t, null, r), this.s < 0 && r.compareTo(e.ZERO) > 0 && t.subTo(r, r), r;
    }, e.prototype.modPowInt = function (t, r) {
      var e;
      return e = t < 256 || r.isEven() ? new l(r) : new d(r), this.exp(t, e);
    }, e.ZERO = c(0), e.ONE = c(1), b.prototype.convert = S, b.prototype.revert = S, b.prototype.mulTo = function (t, r, e) {
      t.multiplyTo(r, e);
    }, b.prototype.sqrTo = function (t, r) {
      t.squareTo(r);
    }, B.prototype.convert = function (t) {
      if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
      if (t.compareTo(this.m) < 0) return t;
      var r = i();
      return t.copyTo(r), this.reduce(r), r;
    }, B.prototype.revert = function (t) {
      return t;
    }, B.prototype.reduce = function (t) {
      for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) {
        t.dAddOffset(1, this.m.t + 1);
      }

      for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) {
        t.subTo(this.m, t);
      }
    }, B.prototype.mulTo = function (t, r, e) {
      t.multiplyTo(r, e), this.reduce(e);
    }, B.prototype.sqrTo = function (t, r) {
      t.squareTo(r), this.reduce(r);
    };

    var D,
        A,
        _,
        x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        E = (1 << 26) / x[x.length - 1];

    function R() {
      var t;
      t = new Date().getTime(), A[_++] ^= 255 & t, A[_++] ^= t >> 8 & 255, A[_++] ^= t >> 16 & 255, A[_++] ^= t >> 24 & 255, _ >= N && (_ -= N);
    }

    if (e.prototype.chunkSize = function (t) {
      return Math.floor(Math.LN2 * this.DB / Math.log(t));
    }, e.prototype.toRadix = function (t) {
      if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
      var r = this.chunkSize(t),
          e = Math.pow(t, r),
          n = c(e),
          o = i(),
          s = i(),
          h = "";

      for (this.divRemTo(n, o, s); o.signum() > 0;) {
        h = (e + s.intValue()).toString(t).substr(1) + h, o.divRemTo(n, o, s);
      }

      return s.intValue().toString(t) + h;
    }, e.prototype.fromRadix = function (t, r) {
      this.fromInt(0), null == r && (r = 10);

      for (var i = this.chunkSize(r), n = Math.pow(r, i), o = !1, s = 0, h = 0, a = 0; a < t.length; ++a) {
        var u = f(t, a);
        u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (o = !0) : (h = r * h + u, ++s >= i && (this.dMultiply(n), this.dAddOffset(h, 0), s = 0, h = 0));
      }

      s > 0 && (this.dMultiply(Math.pow(r, s)), this.dAddOffset(h, 0)), o && e.ZERO.subTo(this, this);
    }, e.prototype.fromNumber = function (t, r, i) {
      if ("number" == typeof r) {
        if (t < 2) this.fromInt(1);else for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), y, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r);) {
          this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
        }
      } else {
        var n = new Array(),
            o = 7 & t;
        n.length = 1 + (t >> 3), r.nextBytes(n), o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0, this.fromString(n, 256);
      }
    }, e.prototype.bitwiseTo = function (t, r, e) {
      var i,
          n,
          o = Math.min(t.t, this.t);

      for (i = 0; i < o; ++i) {
        e[i] = r(this[i], t[i]);
      }

      if (t.t < this.t) {
        for (n = t.s & this.DM, i = o; i < this.t; ++i) {
          e[i] = r(this[i], n);
        }

        e.t = this.t;
      } else {
        for (n = this.s & this.DM, i = o; i < t.t; ++i) {
          e[i] = r(n, t[i]);
        }

        e.t = t.t;
      }

      e.s = r(this.s, t.s), e.clamp();
    }, e.prototype.changeBit = function (t, r) {
      var i = e.ONE.shiftLeft(t);
      return this.bitwiseTo(i, r, i), i;
    }, e.prototype.addTo = function (t, r) {
      for (var e = 0, i = 0, n = Math.min(t.t, this.t); e < n;) {
        i += this[e] + t[e], r[e++] = i & this.DM, i >>= this.DB;
      }

      if (t.t < this.t) {
        for (i += t.s; e < this.t;) {
          i += this[e], r[e++] = i & this.DM, i >>= this.DB;
        }

        i += this.s;
      } else {
        for (i += this.s; e < t.t;) {
          i += t[e], r[e++] = i & this.DM, i >>= this.DB;
        }

        i += t.s;
      }

      r.s = i < 0 ? -1 : 0, i > 0 ? r[e++] = i : i < -1 && (r[e++] = this.DV + i), r.t = e, r.clamp();
    }, e.prototype.dMultiply = function (t) {
      this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, e.prototype.dAddOffset = function (t, r) {
      if (0 != t) {
        for (; this.t <= r;) {
          this[this.t++] = 0;
        }

        for (this[r] += t; this[r] >= this.DV;) {
          this[r] -= this.DV, ++r >= this.t && (this[this.t++] = 0), ++this[r];
        }
      }
    }, e.prototype.multiplyLowerTo = function (t, r, e) {
      var i,
          n = Math.min(this.t + t.t, r);

      for (e.s = 0, e.t = n; n > 0;) {
        e[--n] = 0;
      }

      for (i = e.t - this.t; n < i; ++n) {
        e[n + this.t] = this.am(0, t[n], e, n, 0, this.t);
      }

      for (i = Math.min(t.t, r); n < i; ++n) {
        this.am(0, t[n], e, n, 0, r - n);
      }

      e.clamp();
    }, e.prototype.multiplyUpperTo = function (t, r, e) {
      var i = e.t = this.t + t.t - --r;

      for (e.s = 0; --i >= 0;) {
        e[i] = 0;
      }

      for (i = Math.max(r - this.t, 0); i < t.t; ++i) {
        e[this.t + i - r] = this.am(r - i, t[i], e, 0, 0, this.t + i - r);
      }

      e.clamp(), e.drShiftTo(1, e);
    }, e.prototype.modInt = function (t) {
      if (t <= 0) return 0;
      var r = this.DV % t,
          e = this.s < 0 ? t - 1 : 0;
      if (this.t > 0) if (0 == r) e = this[0] % t;else for (var i = this.t - 1; i >= 0; --i) {
        e = (r * e + this[i]) % t;
      }
      return e;
    }, e.prototype.millerRabin = function (t) {
      var r = this.subtract(e.ONE),
          n = r.getLowestSetBit();
      if (n <= 0) return !1;
      var o = r.shiftRight(n);
      (t = t + 1 >> 1) > x.length && (t = x.length);

      for (var s = i(), h = 0; h < t; ++h) {
        s.fromInt(x[Math.floor(Math.random() * x.length)]);
        var a = s.modPow(o, this);

        if (0 != a.compareTo(e.ONE) && 0 != a.compareTo(r)) {
          for (var u = 1; u++ < n && 0 != a.compareTo(r);) {
            if (0 == (a = a.modPowInt(2, this)).compareTo(e.ONE)) return !1;
          }

          if (0 != a.compareTo(r)) return !1;
        }
      }

      return !0;
    }, e.prototype.clone = function () {
      var t = i();
      return this.copyTo(t), t;
    }, e.prototype.intValue = function () {
      if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1;
      } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0;
      }

      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }, e.prototype.byteValue = function () {
      return 0 == this.t ? this.s : this[0] << 24 >> 24;
    }, e.prototype.shortValue = function () {
      return 0 == this.t ? this.s : this[0] << 16 >> 16;
    }, e.prototype.signum = function () {
      return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
    }, e.prototype.toByteArray = function () {
      var t = this.t,
          r = new Array();
      r[0] = this.s;
      var e,
          i = this.DB - t * this.DB % 8,
          n = 0;
      if (t-- > 0) for (i < this.DB && (e = this[t] >> i) != (this.s & this.DM) >> i && (r[n++] = e | this.s << this.DB - i); t >= 0;) {
        i < 8 ? (e = (this[t] & (1 << i) - 1) << 8 - i, e |= this[--t] >> (i += this.DB - 8)) : (e = this[t] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --t)), 0 != (128 & e) && (e |= -256), 0 == n && (128 & this.s) != (128 & e) && ++n, (n > 0 || e != this.s) && (r[n++] = e);
      }
      return r;
    }, e.prototype.equals = function (t) {
      return 0 == this.compareTo(t);
    }, e.prototype.min = function (t) {
      return this.compareTo(t) < 0 ? this : t;
    }, e.prototype.max = function (t) {
      return this.compareTo(t) > 0 ? this : t;
    }, e.prototype.and = function (t) {
      var r = i();
      return this.bitwiseTo(t, v, r), r;
    }, e.prototype.or = function (t) {
      var r = i();
      return this.bitwiseTo(t, y, r), r;
    }, e.prototype.xor = function (t) {
      var r = i();
      return this.bitwiseTo(t, m, r), r;
    }, e.prototype.andNot = function (t) {
      var r = i();
      return this.bitwiseTo(t, g, r), r;
    }, e.prototype.not = function () {
      for (var t = i(), r = 0; r < this.t; ++r) {
        t[r] = this.DM & ~this[r];
      }

      return t.t = this.t, t.s = ~this.s, t;
    }, e.prototype.shiftLeft = function (t) {
      var r = i();
      return t < 0 ? this.rShiftTo(-t, r) : this.lShiftTo(t, r), r;
    }, e.prototype.shiftRight = function (t) {
      var r = i();
      return t < 0 ? this.lShiftTo(-t, r) : this.rShiftTo(t, r), r;
    }, e.prototype.getLowestSetBit = function () {
      for (var t = 0; t < this.t; ++t) {
        if (0 != this[t]) return t * this.DB + w(this[t]);
      }

      return this.s < 0 ? this.t * this.DB : -1;
    }, e.prototype.bitCount = function () {
      for (var t = 0, r = this.s & this.DM, e = 0; e < this.t; ++e) {
        t += T(this[e] ^ r);
      }

      return t;
    }, e.prototype.testBit = function (t) {
      var r = Math.floor(t / this.DB);
      return r >= this.t ? 0 != this.s : 0 != (this[r] & 1 << t % this.DB);
    }, e.prototype.setBit = function (t) {
      return this.changeBit(t, y);
    }, e.prototype.clearBit = function (t) {
      return this.changeBit(t, g);
    }, e.prototype.flipBit = function (t) {
      return this.changeBit(t, m);
    }, e.prototype.add = function (t) {
      var r = i();
      return this.addTo(t, r), r;
    }, e.prototype.subtract = function (t) {
      var r = i();
      return this.subTo(t, r), r;
    }, e.prototype.multiply = function (t) {
      var r = i();
      return this.multiplyTo(t, r), r;
    }, e.prototype.divide = function (t) {
      var r = i();
      return this.divRemTo(t, r, null), r;
    }, e.prototype.remainder = function (t) {
      var r = i();
      return this.divRemTo(t, null, r), r;
    }, e.prototype.divideAndRemainder = function (t) {
      var r = i(),
          e = i();
      return this.divRemTo(t, r, e), new Array(r, e);
    }, e.prototype.modPow = function (t, r) {
      var e,
          n,
          o = t.bitLength(),
          s = c(1);
      if (o <= 0) return s;
      e = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, n = o < 8 ? new l(r) : r.isEven() ? new B(r) : new d(r);
      var h = new Array(),
          a = 3,
          u = e - 1,
          f = (1 << e) - 1;

      if (h[1] = n.convert(this), e > 1) {
        var v = i();

        for (n.sqrTo(h[1], v); a <= f;) {
          h[a] = i(), n.mulTo(v, h[a - 2], h[a]), a += 2;
        }
      }

      var y,
          m,
          g = t.t - 1,
          w = !0,
          T = i();

      for (o = p(t[g]) - 1; g >= 0;) {
        for (o >= u ? y = t[g] >> o - u & f : (y = (t[g] & (1 << o + 1) - 1) << u - o, g > 0 && (y |= t[g - 1] >> this.DB + o - u)), a = e; 0 == (1 & y);) {
          y >>= 1, --a;
        }

        if ((o -= a) < 0 && (o += this.DB, --g), w) h[y].copyTo(s), w = !1;else {
          for (; a > 1;) {
            n.sqrTo(s, T), n.sqrTo(T, s), a -= 2;
          }

          a > 0 ? n.sqrTo(s, T) : (m = s, s = T, T = m), n.mulTo(T, h[y], s);
        }

        for (; g >= 0 && 0 == (t[g] & 1 << o);) {
          n.sqrTo(s, T), m = s, s = T, T = m, --o < 0 && (o = this.DB - 1, --g);
        }
      }

      return n.revert(s);
    }, e.prototype.modInverse = function (t) {
      var r = t.isEven();
      if (this.isEven() && r || 0 == t.signum()) return e.ZERO;

      for (var i = t.clone(), n = this.clone(), o = c(1), s = c(0), h = c(0), a = c(1); 0 != i.signum();) {
        for (; i.isEven();) {
          i.rShiftTo(1, i), r ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
        }

        for (; n.isEven();) {
          n.rShiftTo(1, n), r ? (h.isEven() && a.isEven() || (h.addTo(this, h), a.subTo(t, a)), h.rShiftTo(1, h)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
        }

        i.compareTo(n) >= 0 ? (i.subTo(n, i), r && o.subTo(h, o), s.subTo(a, s)) : (n.subTo(i, n), r && h.subTo(o, h), a.subTo(s, a));
      }

      return 0 != n.compareTo(e.ONE) ? e.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a;
    }, e.prototype.pow = function (t) {
      return this.exp(t, new b());
    }, e.prototype.gcd = function (t) {
      var r = this.s < 0 ? this.negate() : this.clone(),
          e = t.s < 0 ? t.negate() : t.clone();

      if (r.compareTo(e) < 0) {
        var i = r;
        r = e, e = i;
      }

      var n = r.getLowestSetBit(),
          o = e.getLowestSetBit();
      if (o < 0) return r;

      for (n < o && (o = n), o > 0 && (r.rShiftTo(o, r), e.rShiftTo(o, e)); r.signum() > 0;) {
        (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e), r.compareTo(e) >= 0 ? (r.subTo(e, r), r.rShiftTo(1, r)) : (e.subTo(r, e), e.rShiftTo(1, e));
      }

      return o > 0 && e.lShiftTo(o, e), e;
    }, e.prototype.isProbablePrime = function (t) {
      var r,
          e = this.abs();

      if (1 == e.t && e[0] <= x[x.length - 1]) {
        for (r = 0; r < x.length; ++r) {
          if (e[0] == x[r]) return !0;
        }

        return !1;
      }

      if (e.isEven()) return !1;

      for (r = 1; r < x.length;) {
        for (var i = x[r], n = r + 1; n < x.length && i < E;) {
          i *= x[n++];
        }

        for (i = e.modInt(i); r < n;) {
          if (i % x[r++] == 0) return !1;
        }
      }

      return e.millerRabin(t);
    }, e.prototype.square = function () {
      var t = i();
      return this.squareTo(t), t;
    }, e.prototype.Barrett = B, null == A) {
      var M;
      if (A = new Array(), _ = 0, "undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
        var C = new Uint8Array(32);

        for (window.crypto.getRandomValues(C), M = 0; M < 32; ++M) {
          A[_++] = C[M];
        }
      } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
        var k = window.crypto.random(32);

        for (M = 0; M < k.length; ++M) {
          A[_++] = 255 & k.charCodeAt(M);
        }
      }

      for (; _ < N;) {
        M = Math.floor(65536 * Math.random()), A[_++] = M >>> 8, A[_++] = 255 & M;
      }

      _ = 0, R();
    }

    function j() {
      if (null == D) {
        for (R(), (D = new I()).init(A), _ = 0; _ < A.length; ++_) {
          A[_] = 0;
        }

        _ = 0;
      }

      return D.next();
    }

    function O() {}

    function I() {
      this.i = 0, this.j = 0, this.S = new Array();
    }

    O.prototype.nextBytes = function (t) {
      var r;

      for (r = 0; r < t.length; ++r) {
        t[r] = j();
      }
    }, I.prototype.init = function (t) {
      var r, e, i;

      for (r = 0; r < 256; ++r) {
        this.S[r] = r;
      }

      for (e = 0, r = 0; r < 256; ++r) {
        i = this.S[r], this.S[r] = this.S[e = e + this.S[r] + t[r % t.length] & 255], this.S[e] = i;
      }

      this.i = 0, this.j = 0;
    }, I.prototype.next = function () {
      var t;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
    };
    var N = 256;
    e.SecureRandom = O, e.BigInteger = e, r.exports = e;
  }).call(t);
}),
    h = {
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  ripemd160: "3021300906052b2403020105000414"
},
    a = {
  sha256: i$1
};

function u(t, r) {
  if (this.n = null, this.e = 0, !(null != t && null != r && t.length > 0 && r.length > 0)) throw new Error("Invalid key data");
  this.n = new s(t, 16), this.e = parseInt(r, 16);
}

u.prototype.verify = function (t, r) {
  r = r.replace(/[^0-9a-f]|[\s\n]]/gi, "");
  var e = new s(r, 16);
  if (e.bitLength() > this.n.bitLength()) throw new Error("Signature does not match with the key modulus.");

  var i = function (t) {
    for (var r in h) {
      var e = h[r],
          i = e.length;
      if (t.substring(0, i) === e) return {
        alg: r,
        hash: t.substring(i)
      };
    }

    return [];
  }(e.modPowInt(this.e, this.n).toString(16).replace(/^1f+00/, ""));

  if (0 === i.length) return !1;
  if (!a.hasOwnProperty(i.alg)) throw new Error("Hashing algorithm is not supported.");
  var n = a[i.alg](t).toString();
  return i.hash === n;
};

for (var l = [], d = [], v = "undefined" != typeof Uint8Array ? Uint8Array : Array, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = 0, g = y.length; m < g; ++m) {
  l[m] = y[m], d[y.charCodeAt(m)] = m;
}

function w(t) {
  var r = t.length;
  if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  return "=" === t[r - 2] ? 2 : "=" === t[r - 1] ? 1 : 0;
}

function T(t, r, e) {
  for (var i, n = [], o = r; o < e; o += 3) {
    n.push(l[(i = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2]) >> 18 & 63] + l[i >> 12 & 63] + l[i >> 6 & 63] + l[63 & i]);
  }

  return n.join("");
}

d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63;
var b = {
  byteLength: function byteLength(t) {
    return 3 * t.length / 4 - w(t);
  },
  toByteArray: function toByteArray(t) {
    var r,
        e,
        i,
        n,
        o,
        s,
        h = t.length;
    o = w(t), s = new v(3 * h / 4 - o), i = o > 0 ? h - 4 : h;
    var a = 0;

    for (r = 0, e = 0; r < i; r += 4, e += 3) {
      n = d[t.charCodeAt(r)] << 18 | d[t.charCodeAt(r + 1)] << 12 | d[t.charCodeAt(r + 2)] << 6 | d[t.charCodeAt(r + 3)], s[a++] = n >> 16 & 255, s[a++] = n >> 8 & 255, s[a++] = 255 & n;
    }

    return 2 === o ? (n = d[t.charCodeAt(r)] << 2 | d[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & n) : 1 === o && (n = d[t.charCodeAt(r)] << 10 | d[t.charCodeAt(r + 1)] << 4 | d[t.charCodeAt(r + 2)] >> 2, s[a++] = n >> 8 & 255, s[a++] = 255 & n), s;
  },
  fromByteArray: function fromByteArray(t) {
    for (var r, e = t.length, i = e % 3, n = "", o = [], s = 0, h = e - i; s < h; s += 16383) {
      o.push(T(t, s, s + 16383 > h ? h : s + 16383));
    }

    return 1 === i ? (n += l[(r = t[e - 1]) >> 2], n += l[r << 4 & 63], n += "==") : 2 === i && (n += l[(r = (t[e - 2] << 8) + t[e - 1]) >> 10], n += l[r >> 4 & 63], n += l[r << 2 & 63], n += "="), o.push(n), o.join("");
  }
};

function S(t) {
  var r = t.length % 4;
  return 0 === r ? t : t + new Array(4 - r + 1).join("=");
}

function B(t) {
  return t = S(t).replace(/\-/g, "+").replace(/_/g, "/"), decodeURIComponent(function (t) {
    for (var r = "", e = 0; e < t.length; e++) {
      r += String.fromCharCode(t[e]);
    }

    return r;
  }(b.toByteArray(t)).split("").map(function (t) {
    return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}

function D(t) {
  return function (t) {
    for (var r = "", e = 0; e < t.length; e++) {
      var i = t[e].toString(16);
      r += 2 === i.length ? i : "0" + i;
    }

    return r;
  }(b.toByteArray(S(t)));
}

var A = r(function (r) {
  var e;
  e = t, r.exports ? r.exports = function () {
    var t = arguments;
    "object" == typeof arguments[0] && (t = arguments[0]);
    var r = [].slice.call(t, 0).join("/");
    return r.replace(/:\//g, "://").replace(/([^:\s])\/+/g, "$1/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/(\?.+)\?/g, "$1&");
  } : e.urljoin = function () {
    var t = arguments;
    "object" == typeof arguments[0] && (t = arguments[0]);
    var r = [].slice.call(t, 0).join("/");
    return r.replace(/:\//g, "://").replace(/([^:\s])\/+/g, "$1/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/(\?.+)\?/g, "$1&");
  };
});
var x = setTimeout;

function E(t) {
  return Boolean(t && void 0 !== t.length);
}

function R() {}

function M(t) {
  if (!(this instanceof M)) throw new TypeError("Promises must be constructed via new");
  if ("function" != typeof t) throw new TypeError("not a function");
  this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], N(t, this);
}

function C(t, r) {
  for (; 3 === t._state;) {
    t = t._value;
  }

  0 !== t._state ? (t._handled = !0, M._immediateFn(function () {
    var e = 1 === t._state ? r.onFulfilled : r.onRejected;

    if (null !== e) {
      var i;

      try {
        i = e(t._value);
      } catch (t) {
        return void j(r.promise, t);
      }

      k(r.promise, i);
    } else (1 === t._state ? k : j)(r.promise, t._value);
  })) : t._deferreds.push(r);
}

function k(t, r) {
  try {
    if (r === t) throw new TypeError("A promise cannot be resolved with itself.");

    if (r && ("object" == typeof r || "function" == typeof r)) {
      var e = r.then;
      if (r instanceof M) return t._state = 3, t._value = r, void O(t);
      if ("function" == typeof e) return void N((i = e, n = r, function () {
        i.apply(n, arguments);
      }), t);
    }

    t._state = 1, t._value = r, O(t);
  } catch (r) {
    j(t, r);
  }

  var i, n;
}

function j(t, r) {
  t._state = 2, t._value = r, O(t);
}

function O(t) {
  2 === t._state && 0 === t._deferreds.length && M._immediateFn(function () {
    t._handled || M._unhandledRejectionFn(t._value);
  });

  for (var r = 0, e = t._deferreds.length; r < e; r++) {
    C(t, t._deferreds[r]);
  }

  t._deferreds = null;
}

function I(t, r, e) {
  this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof r ? r : null, this.promise = e;
}

function N(t, r) {
  var e = !1;

  try {
    t(function (t) {
      e || (e = !0, k(r, t));
    }, function (t) {
      e || (e = !0, j(r, t));
    });
  } catch (t) {
    if (e) return;
    e = !0, j(r, t);
  }
}

function V(t) {
  if (t.ok) return t.json();
  var r = new Error(t.statusText);
  return r.response = t, M.reject(r);
}

function L(t, r) {
  return ("undefined" == typeof fetch ? function (t, r) {
    return r = r || {}, new Promise(function (e, i) {
      var n = new XMLHttpRequest(),
          o = [],
          s = [],
          h = {},
          a = function a() {
        return {
          ok: 2 == (n.status / 100 | 0),
          statusText: n.statusText,
          status: n.status,
          url: n.responseURL,
          text: function text() {
            return Promise.resolve(n.responseText);
          },
          json: function json() {
            return Promise.resolve(JSON.parse(n.responseText));
          },
          blob: function blob() {
            return Promise.resolve(new Blob([n.response]));
          },
          clone: a,
          headers: {
            keys: function keys() {
              return o;
            },
            entries: function entries() {
              return s;
            },
            get: function get(t) {
              return h[t.toLowerCase()];
            },
            has: function has(t) {
              return t.toLowerCase() in h;
            }
          }
        };
      };

      for (var u in n.open(r.method || "get", t, !0), n.onload = function () {
        n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, r, e) {
          o.push(r = r.toLowerCase()), s.push([r, e]), h[r] = h[r] ? h[r] + "," + e : e;
        }), e(a());
      }, n.onerror = i, n.withCredentials = "include" == r.credentials, r.headers) {
        n.setRequestHeader(u, r.headers[u]);
      }

      n.send(r.body || null);
    });
  } : fetch)(t.jwksURI || A(t.iss, ".well-known", "jwks.json")).then(V).then(function (e) {
    var i,
        n,
        o,
        s = null;

    for (i = 0; i < e.keys.length && null === s; i++) {
      (n = e.keys[i]).kid === t.kid && (s = n);
    }

    return r(null, {
      modulus: D((o = s).n),
      exp: D(o.e)
    });
  })["catch"](function (t) {
    r(t);
  });
}

function P(t) {
  this.name = "ConfigurationError", this.message = t || "";
}

function q(t) {
  this.name = "TokenValidationError", this.message = t || "";
}

M.prototype["catch"] = function (t) {
  return this.then(null, t);
}, M.prototype.then = function (t, r) {
  var e = new this.constructor(R);
  return C(this, new I(t, r, e)), e;
}, M.prototype["finally"] = function (t) {
  var r = this.constructor;
  return this.then(function (e) {
    return r.resolve(t()).then(function () {
      return e;
    });
  }, function (e) {
    return r.resolve(t()).then(function () {
      return r.reject(e);
    });
  });
}, M.all = function (t) {
  return new M(function (r, e) {
    if (!E(t)) return e(new TypeError("Promise.all accepts an array"));
    var i = Array.prototype.slice.call(t);
    if (0 === i.length) return r([]);
    var n = i.length;

    function o(t, s) {
      try {
        if (s && ("object" == typeof s || "function" == typeof s)) {
          var h = s.then;
          if ("function" == typeof h) return void h.call(s, function (r) {
            o(t, r);
          }, e);
        }

        i[t] = s, 0 == --n && r(i);
      } catch (t) {
        e(t);
      }
    }

    for (var s = 0; s < i.length; s++) {
      o(s, i[s]);
    }
  });
}, M.resolve = function (t) {
  return t && "object" == typeof t && t.constructor === M ? t : new M(function (r) {
    r(t);
  });
}, M.reject = function (t) {
  return new M(function (r, e) {
    e(t);
  });
}, M.race = function (t) {
  return new M(function (r, e) {
    if (!E(t)) return e(new TypeError("Promise.race accepts an array"));

    for (var i = 0, n = t.length; i < n; i++) {
      M.resolve(t[i]).then(r, e);
    }
  });
}, M._immediateFn = "function" == typeof setImmediate && function (t) {
  setImmediate(t);
} || function (t) {
  x(t, 0);
}, M._unhandledRejectionFn = function (t) {
  "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
}, P.prototype = Error.prototype, q.prototype = Error.prototype;

var U = function U() {};

U.prototype.get = function () {
  return null;
}, U.prototype.has = function () {
  return null;
}, U.prototype.set = function () {
  return null;
};
var H = ["RS256"];

function F(t) {
  var r = t || {};
  if (this.jwksCache = r.jwksCache || new U(), this.expectedAlg = r.expectedAlg || "RS256", this.issuer = r.issuer, this.audience = r.audience, this.leeway = r.leeway || 0, this.__disableExpirationCheck = r.__disableExpirationCheck || !1, this.jwksURI = r.jwksURI, this.leeway < 0 || this.leeway > 300) throw new P("The leeway should be positive and lower than five minutes.");
  if (-1 === H.indexOf(this.expectedAlg)) throw new P("Algorithm " + this.expectedAlg + " is not supported. (Expected algs: [" + H.join(",") + "])");
}

function PluginHandler(webAuth, plugins) {
  this.plugins = plugins;

  for (var a = 0; a < this.plugins.length; a++) {
    if (this.plugins[a].version !== version.raw) {
      var pluginName = "";
      throw this.plugins[a].constructor && this.plugins[a].constructor.name && (pluginName = this.plugins[a].constructor.name), new Error("Plugin " + pluginName + " version (" + this.plugins[a].version + ") is not compatible with the SDK version (" + version.raw + ")");
    }

    this.plugins[a].setWebAuth(webAuth);
  }
}

F.prototype.verify = function (t, r, e) {
  var i = this.decode(t);
  if (i instanceof Error) return e(i, !1);
  var n = i.encoded.header + "." + i.encoded.payload,
      o = D(i.encoded.signature),
      s = i.header.alg,
      h = i.header.kid,
      a = i.payload.aud,
      u = i.payload.iss,
      f = i.payload.exp,
      c = i.payload.nbf,
      p = i.payload.nonce || null,
      l = this;
  if (l.expectedAlg !== s) return e(new q("Algorithm " + s + " is not supported. (Expected algs: [" + H.join(",") + "])"), !1);
  this.getRsaVerifier(u, h, function (t, s) {
    if (t) return e(t);

    if (s.verify(n, o)) {
      if (l.issuer !== u) return e(new q("Issuer " + u + " is not valid."), !1);
      if (l.audience !== a) return e(new q("Audience " + a + " is not valid."), !1);
      if (p !== r) return e(new q("Nonce does not match."), !1);
      var h = l.verifyExpAndNbf(f, c);
      return h ? e(h, !1) : e(null, i.payload);
    }

    return e(new q("Invalid signature."));
  });
}, F.prototype.verifyExpAndNbf = function (t, r) {
  var e = new Date(),
      i = new Date(0),
      n = new Date(0);
  return this.__disableExpirationCheck ? null : (i.setUTCSeconds(t + this.leeway), e > i ? new q("Expired token.") : void 0 === r ? null : (n.setUTCSeconds(r - this.leeway), e < n ? new q("The token is not valid until later in the future. Please check your computed clock.") : null));
}, F.prototype.verifyExpAndIat = function (t, r) {
  var e = new Date(),
      i = new Date(0),
      n = new Date(0);
  return this.__disableExpirationCheck ? null : (i.setUTCSeconds(t + this.leeway), e > i ? new q("Expired token.") : (n.setUTCSeconds(r - this.leeway), e < n ? new q("The token was issued in the future. Please check your computed clock.") : null));
}, F.prototype.getRsaVerifier = function (t, r, e) {
  var i = this,
      n = t + r;

  if (this.jwksCache.has(n)) {
    var o = this.jwksCache.get(n);
    e(null, new u(o.modulus, o.exp));
  } else L({
    jwksURI: this.jwksURI,
    iss: t,
    kid: r
  }, function (t, r) {
    return t ? e(t) : (i.jwksCache.set(n, r), e(null, new u(r.modulus, r.exp)));
  });
}, F.prototype.decode = function (t) {
  var r,
      e,
      i = t.split(".");
  if (3 !== i.length) return new q("Cannot decode a malformed JWT");

  try {
    r = JSON.parse(B(i[0])), e = JSON.parse(B(i[1]));
  } catch (t) {
    return new q("Token header or payload is not valid JSON");
  }

  return {
    header: r,
    payload: e,
    encoded: {
      header: i[0],
      payload: i[1],
      signature: i[2]
    }
  };
}, F.prototype.validateAccessToken = function (t, r, e, s) {
  if (this.expectedAlg !== r) return s(new q("Algorithm " + r + " is not supported. (Expected alg: " + this.expectedAlg + ")"));
  var h,
      a = i$1(t),
      u = o.stringify(a),
      f = u.substring(0, u.length / 2),
      c = o.parse(f),
      p = n.stringify(c);
  return s((h = {
    "+": "-",
    "/": "_",
    "=": ""
  }, p.replace(/[+\/=]/g, function (t) {
    return h[t];
  }) !== e ? new q("Invalid access_token") : null));
}, PluginHandler.prototype.get = function (extensibilityPoint) {
  for (var a = 0; a < this.plugins.length; a++) {
    if (this.plugins[a].supports(extensibilityPoint)) return this.plugins[a].init();
  }

  return null;
};
var random = {
  randomString: function randomString(length) {
    var bytes = new Uint8Array(length),
        result = [],
        charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",
        cryptoObj = windowHelper.getWindow().crypto || windowHelper.getWindow().msCrypto;
    if (!cryptoObj) return null;

    for (var random = cryptoObj.getRandomValues(bytes), a = 0; a < random.length; a++) {
      result.push(charset[random[a] % charset.length]);
    }

    return result.join("");
  }
},
    DEFAULT_NAMESPACE = "com.auth0.auth.";

function TransactionManager(options) {
  var transaction = options.transaction || {};
  this.namespace = transaction.namespace || DEFAULT_NAMESPACE, this.keyLength = transaction.keyLength || 32, this.storage = new Storage(options), this.options = options;
}

function IframeHandler(options) {
  if (this.url = options.url, this.callback = options.callback, this.timeout = options.timeout || 6e4, this.timeoutCallback = options.timeoutCallback || null, this.eventListenerType = options.eventListenerType || "message", this.iframe = null, this.timeoutHandle = null, this._destroyTimeout = null, this.transientMessageEventListener = null, this.proxyEventListener = null, this.eventValidator = options.eventValidator || {
    isValid: function isValid() {
      return !0;
    }
  }, "function" != typeof this.callback) throw new Error("options.callback must be a function");
}

function WebMessageHandler(webAuth) {
  this.webAuth = webAuth, this.warn = new Warn(webAuth.baseOptions);
}

function CrossOriginAuthentication(webAuth, options) {
  this.webAuth = webAuth, this.baseOptions = options, this.request = new RequestBuilder(options), this.webMessageHandler = new WebMessageHandler(webAuth), this.storage = new Storage(options);
}

function createKey(origin, coId) {
  return ["co/verifier", encodeURIComponent(origin), encodeURIComponent(coId)].join("/");
}

function Redirect(auth0, options) {
  this.webAuth = auth0, this.baseOptions = options, this.crossOriginAuthentication = new CrossOriginAuthentication(auth0, this.baseOptions), this.warn = new Warn({
    disableWarnings: !!options._disableDeprecationWarnings
  });
}

TransactionManager.prototype.process = function (options) {
  if (!options.responseType) throw new Error("responseType is required");
  var lastUsedConnection = options.realm || options.connection,
      responseTypeIncludesIdToken = -1 !== options.responseType.indexOf("id_token"),
      transaction = this.generateTransaction(options.appState, options.state, options.nonce, lastUsedConnection, responseTypeIncludesIdToken);
  return options.state || (options.state = transaction.state), responseTypeIncludesIdToken && !options.nonce && (options.nonce = transaction.nonce), options;
}, TransactionManager.prototype.generateTransaction = function (appState, state, nonce, lastUsedConnection, generateNonce) {
  return state = state || random.randomString(this.keyLength), nonce = nonce || (generateNonce ? random.randomString(this.keyLength) : null), windowHelper.getWindow().location.host === this.options.domain || this.storage.setItem(this.namespace + state, {
    nonce: nonce,
    appState: appState,
    state: state,
    lastUsedConnection: lastUsedConnection
  }, {
    expires: 1 / 48
  }), {
    state: state,
    nonce: nonce
  };
}, TransactionManager.prototype.getStoredTransaction = function (state) {
  var transactionData;
  return transactionData = this.storage.getItem(this.namespace + state), this.clearTransaction(state), transactionData;
}, TransactionManager.prototype.clearTransaction = function (state) {
  this.storage.removeItem(this.namespace + state);
}, IframeHandler.prototype.init = function () {
  var _this = this,
      _window = windowHelper.getWindow();

  switch (this.iframe = _window.document.createElement("iframe"), this.iframe.style.display = "none", this.proxyEventListener = function (e) {
    _this.eventListener(e);
  }, this.eventListenerType) {
    case "message":
      this.eventSourceObject = _window;
      break;

    case "load":
      this.eventSourceObject = this.iframe;
      break;

    default:
      throw new Error("Unsupported event listener type: " + this.eventListenerType);
  }

  this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, !1), _window.document.body.appendChild(this.iframe), this.iframe.src = this.url, this.timeoutHandle = setTimeout(function () {
    _this.timeoutHandler();
  }, this.timeout);
}, IframeHandler.prototype.eventListener = function (event) {
  var eventData = {
    event: event,
    sourceObject: this.eventSourceObject
  };
  this.eventValidator.isValid(eventData) && (this.destroy(), this.callback(eventData));
}, IframeHandler.prototype.timeoutHandler = function () {
  this.destroy(), this.timeoutCallback && this.timeoutCallback();
}, IframeHandler.prototype.destroy = function () {
  var _this = this;

  clearTimeout(this.timeoutHandle), this._destroyTimeout = setTimeout(function () {
    _this.eventSourceObject.removeEventListener(_this.eventListenerType, _this.proxyEventListener, !1), _this.iframe.parentNode && _this.iframe.parentNode.removeChild(_this.iframe);
  }, 0);
}, WebMessageHandler.prototype.run = function (options, cb) {
  var _this = this;

  options.responseMode = "web_message", options.prompt = "none";
  var currentOrigin = windowHelper.getOrigin(),
      redirectUriOrigin = objectHelper.getOriginFromUrl(options.redirectUri);
  if (redirectUriOrigin && currentOrigin !== redirectUriOrigin) return cb({
    error: "origin_mismatch",
    error_description: "The redirectUri's origin (" + redirectUriOrigin + ") should match the window's origin (" + currentOrigin + ")."
  });
  !function (authorizeUrl, options, _callback) {
    new IframeHandler({
      url: authorizeUrl,
      eventListenerType: "message",
      callback: function callback(eventData) {
        _callback(null, eventData);
      },
      timeout: options.timeout,
      eventValidator: {
        isValid: function isValid(eventData) {
          return "authorization_response" === eventData.event.data.type && options.state === eventData.event.data.response.state;
        }
      },
      timeoutCallback: function timeoutCallback() {
        _callback({
          error: "timeout",
          error_description: "Timeout during executing web_message communication",
          state: options.state
        });
      }
    }).init();
  }(this.webAuth.client.buildAuthorizeUrl(options), options, function (err, eventData) {
    var error = err;

    if (!err && eventData.event.data.response.error && (error = eventData.event.data.response), !error) {
      var parsedHash = eventData.event.data.response;
      return _this.webAuth.validateAuthenticationResponse(options, parsedHash, cb);
    }

    return "consent_required" === error.error && "localhost" === windowHelper.getWindow().location.hostname && _this.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"), _this.webAuth.transactionManager.clearTransaction(error.state), cb(objectHelper.pick(error, ["error", "error_description"]));
  });
}, CrossOriginAuthentication.prototype.login = function (options, cb) {
  var _this = this,
      url = urlJoin(this.baseOptions.rootUrl, "/co/authenticate");

  options.username = options.username || options.email, delete options.email;
  var authenticateBody = {
    client_id: options.clientID || this.baseOptions.clientID,
    username: options.username
  };
  options.password && (authenticateBody.password = options.password), options.otp && (authenticateBody.otp = options.otp);
  var realm = options.realm || this.baseOptions.realm;

  if (realm) {
    var credentialType = options.credentialType || this.baseOptions.credentialType || "http://auth0.com/oauth/grant-type/password-realm";
    authenticateBody.realm = realm, authenticateBody.credential_type = credentialType;
  } else authenticateBody.credential_type = "password";

  this.request.post(url).withCredentials().send(authenticateBody).end(function (err, data) {
    if (err) {
      var errorObject = err.response && err.response.body || {
        error: "request_error",
        error_description: JSON.stringify(err)
      };
      return wrapCallback(cb, {
        forceLegacyError: !0
      })(errorObject);
    }

    var popupMode = !0 === options.popup;
    options = objectHelper.blacklist(options, ["password", "credentialType", "otp", "popup"]);
    var authorizeOptions = objectHelper.merge(options)["with"]({
      loginTicket: data.body.login_ticket
    }),
        key = createKey(_this.baseOptions.rootUrl, data.body.co_id);
    _this.storage.setItem(key, data.body.co_verifier, {
      expires: 1 / 96
    }), popupMode ? _this.webMessageHandler.run(authorizeOptions, wrapCallback(cb, {
      forceLegacyError: !0
    })) : _this.webAuth.authorize(authorizeOptions);
  });
}, CrossOriginAuthentication.prototype.callback = function () {
  var targetOrigin = decodeURIComponent(function (name) {
    var parts = ("&" + windowHelper.getWindow().location.hash.substring(1)).split("&" + name + "=");
    if (2 === parts.length) return parts.pop().split("&").shift();
  }("origin")),
      theWindow = windowHelper.getWindow(),
      _this = this;

  theWindow.addEventListener("message", function (evt) {
    if ("co_verifier_request" === evt.data.type) {
      var key = createKey(evt.origin, evt.data.request.id),
          verifier = function (storage, key) {
        try {
          var verifier = storage.getItem(key);
          return storage.removeItem(key), verifier || "";
        } catch (e) {
          return "";
        }
      }(_this.storage, key);

      evt.source.postMessage({
        type: "co_verifier_response",
        response: {
          verifier: verifier
        }
      }, evt.origin);
    }
  }), theWindow.parent.postMessage({
    type: "ready"
  }, targetOrigin);
}, Redirect.prototype.loginWithCredentials = function (options, cb) {
  options.realm = options.realm || options.connection, delete options.connection, this.crossOriginAuthentication.login(options, cb);
}, Redirect.prototype.signupAndLogin = function (options, cb) {
  var _this = this;

  return this.webAuth.client.dbConnection.signup(options, function (err) {
    return err ? cb(err) : (options.realm = options.realm || options.connection, delete options.connection, _this.webAuth.login(options, cb));
  });
};
var winchan = createCommonjsModule(function (module) {
  var WinChan = function () {
    var RELAY_FRAME_NAME = "__winchan_relay_frame",
        CLOSE_CMD = "die";

    function addListener(w, event, cb) {
      w.attachEvent ? w.attachEvent("on" + event, cb) : w.addEventListener && w.addEventListener(event, cb, !1);
    }

    function removeListener(w, event, cb) {
      w.detachEvent ? w.detachEvent("on" + event, cb) : w.removeEventListener && w.removeEventListener(event, cb, !1);
    }

    function extractOrigin(url) {
      /^https?:\/\//.test(url) || (url = window.location.href);
      var m = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);
      return m ? m[1] : url;
    }

    var isIE = function () {
      if ("undefined" == typeof navigator) return !1;
      var rv = -1,
          ua = navigator.userAgent;
      "Microsoft Internet Explorer" === navigator.appName ? null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(ua) && (rv = parseFloat(RegExp.$1)) : ua.indexOf("Trident") > -1 && null !== new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(ua) && (rv = parseFloat(RegExp.$1));
      return rv >= 8;
    }();

    return "undefined" != typeof window && window.JSON && window.JSON.stringify && window.JSON.parse && window.postMessage ? {
      open: function open(opts, cb) {
        if (!cb) throw "missing required callback argument";
        var err, iframe;
        opts.url || (err = "missing required 'url' parameter"), opts.relay_url || (err = "missing required 'relay_url' parameter"), err && setTimeout(function () {
          cb(err);
        }, 0), opts.window_name || (opts.window_name = null), opts.window_features && !function () {
          try {
            var userAgent = navigator.userAgent;
            return -1 != userAgent.indexOf("Fennec/") || -1 != userAgent.indexOf("Firefox/") && -1 != userAgent.indexOf("Android");
          } catch (e) {}

          return !1;
        }() || (opts.window_features = void 0);
        var messageTarget,
            origin = opts.origin || extractOrigin(opts.url);
        if (origin !== extractOrigin(opts.relay_url)) return setTimeout(function () {
          cb("invalid arguments: origin of url and relay_url must match");
        }, 0);
        isIE && ((iframe = document.createElement("iframe")).setAttribute("src", opts.relay_url), iframe.style.display = "none", iframe.setAttribute("name", RELAY_FRAME_NAME), document.body.appendChild(iframe), messageTarget = iframe.contentWindow);
        var w = opts.popup || window.open(opts.url, opts.window_name, opts.window_features);
        opts.popup && (w.location.href = opts.url), messageTarget || (messageTarget = w);
        var closeInterval = setInterval(function () {
          w && w.closed && (cleanup(), cb && (cb("User closed the popup window"), cb = null));
        }, 500),
            req = JSON.stringify({
          a: "request",
          d: opts.params
        });

        function cleanup() {
          if (iframe && document.body.removeChild(iframe), iframe = void 0, closeInterval && (closeInterval = clearInterval(closeInterval)), removeListener(window, "message", onMessage), removeListener(window, "unload", cleanup), w) try {
            w.close();
          } catch (securityViolation) {
            messageTarget.postMessage(CLOSE_CMD, origin);
          }
          w = messageTarget = void 0;
        }

        function onMessage(e) {
          if (e.origin === origin) {
            try {
              var d = JSON.parse(e.data);
            } catch (err) {
              if (cb) return cb(err);
              throw err;
            }

            "ready" === d.a ? messageTarget.postMessage(req, origin) : "error" === d.a ? (cleanup(), cb && (cb(d.d), cb = null)) : "response" === d.a && (cleanup(), cb && (cb(null, d.d), cb = null));
          }
        }

        return addListener(window, "unload", cleanup), addListener(window, "message", onMessage), {
          originalPopup: w,
          close: cleanup,
          focus: function focus() {
            if (w) try {
              w.focus();
            } catch (e) {}
          }
        };
      },
      onOpen: function onOpen(cb) {
        var o = "*",
            msgTarget = isIE ? function () {
          window.location;

          for (var frames = window.opener.frames, i = frames.length - 1; i >= 0; i--) {
            try {
              if (frames[i].location.protocol === window.location.protocol && frames[i].location.host === window.location.host && frames[i].name === RELAY_FRAME_NAME) return frames[i];
            } catch (e) {}
          }
        }() : window.opener;
        if (!msgTarget) throw "can't find relay frame";

        function doPost(msg) {
          msg = JSON.stringify(msg), isIE ? msgTarget.doPost(msg, o) : msgTarget.postMessage(msg, o);
        }

        function onDie(e) {
          if (e.data === CLOSE_CMD) try {
            window.close();
          } catch (o_O) {}
        }

        addListener(isIE ? msgTarget : window, "message", function onMessage(e) {
          var d;

          try {
            d = JSON.parse(e.data);
          } catch (err) {}

          d && "request" === d.a && (removeListener(window, "message", onMessage), o = e.origin, cb && setTimeout(function () {
            cb(o, d.d, function (r) {
              cb = void 0, doPost({
                a: "response",
                d: r
              });
            });
          }, 0));
        }), addListener(isIE ? msgTarget : window, "message", onDie);

        try {
          doPost({
            a: "ready"
          });
        } catch (e) {
          addListener(msgTarget, "load", function (e) {
            doPost({
              a: "ready"
            });
          });
        }

        var onUnload = function onUnload() {
          try {
            removeListener(isIE ? msgTarget : window, "message", onDie);
          } catch (ohWell) {}

          cb && doPost({
            a: "error",
            d: "client closed window"
          }), cb = void 0;

          try {
            window.close();
          } catch (e) {}
        };

        return addListener(window, "unload", onUnload), {
          detach: function detach() {
            removeListener(window, "unload", onUnload);
          }
        };
      }
    } : {
      open: function open(url, winopts, arg, cb) {
        setTimeout(function () {
          cb("unsupported browser");
        }, 0);
      },
      onOpen: function onOpen(cb) {
        setTimeout(function () {
          cb("unsupported browser");
        }, 0);
      }
    };
  }();

  module.exports && (module.exports = WinChan);
});
var urlHelper = {
  extractOrigin: function extractOrigin(url) {
    /^https?:\/\//.test(url) || (url = window.location.href);
    var m = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(url);
    return m ? m[1] : url;
  }
};

function PopupHandler() {
  this._current_popup = null;
}

function Popup(webAuth, options) {
  this.baseOptions = options, this.baseOptions.popupOrigin = options.popupOrigin, this.client = webAuth.client, this.webAuth = webAuth, this.transactionManager = new TransactionManager(this.baseOptions), this.crossOriginAuthentication = new CrossOriginAuthentication(webAuth, this.baseOptions), this.warn = new Warn({
    disableWarnings: !!options._disableDeprecationWarnings
  });
}

function SilentAuthenticationHandler(options) {
  this.authenticationUrl = options.authenticationUrl, this.timeout = options.timeout || 6e4, this.handler = null, this.postMessageDataType = options.postMessageDataType || !1, this.postMessageOrigin = options.postMessageOrigin || windowHelper.getWindow().location.origin || windowHelper.getWindow().location.protocol + "//" + windowHelper.getWindow().location.hostname + (windowHelper.getWindow().location.port ? ":" + windowHelper.getWindow().location.port : "");
}

function UsernamePassword(options) {
  this.baseOptions = options, this.request = new RequestBuilder(options), this.transactionManager = new TransactionManager(this.baseOptions);
}

function HostedPages(client, options) {
  this.baseOptions = options, this.client = client, this.baseOptions.universalLoginPage = !0, this.request = new RequestBuilder(this.baseOptions), this.warn = new Warn({
    disableWarnings: !!options._disableDeprecationWarnings
  });
}

function WebAuth(options) {
  assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    domain: {
      type: "string",
      message: "domain option is required"
    },
    clientID: {
      type: "string",
      message: "clientID option is required"
    },
    responseType: {
      optional: !0,
      type: "string",
      message: "responseType is not valid"
    },
    responseMode: {
      optional: !0,
      type: "string",
      message: "responseMode is not valid"
    },
    redirectUri: {
      optional: !0,
      type: "string",
      message: "redirectUri is not valid"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope is not valid"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience is not valid"
    },
    popupOrigin: {
      optional: !0,
      type: "string",
      message: "popupOrigin is not valid"
    },
    leeway: {
      optional: !0,
      type: "number",
      message: "leeway is not valid"
    },
    plugins: {
      optional: !0,
      type: "array",
      message: "plugins is not valid"
    },
    _disableDeprecationWarnings: {
      optional: !0,
      type: "boolean",
      message: "_disableDeprecationWarnings option is not valid"
    },
    _sendTelemetry: {
      optional: !0,
      type: "boolean",
      message: "_sendTelemetry option is not valid"
    },
    _telemetryInfo: {
      optional: !0,
      type: "object",
      message: "_telemetryInfo option is not valid"
    },
    _timesToRetryFailedRequests: {
      optional: !0,
      type: "number",
      message: "_timesToRetryFailedRequests option is not valid"
    }
  }), options.overrides && assert.check(options.overrides, {
    type: "object",
    message: "overrides option is not valid"
  }, {
    __tenant: {
      optional: !0,
      type: "string",
      message: "__tenant option is required"
    },
    __token_issuer: {
      optional: !0,
      type: "string",
      message: "__token_issuer option is required"
    },
    __jwks_uri: {
      optional: !0,
      type: "string",
      message: "__jwks_uri is required"
    }
  }), this.baseOptions = options, this.baseOptions.plugins = new PluginHandler(this, this.baseOptions.plugins || []), this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions._timesToRetryFailedRequests = options._timesToRetryFailedRequests ? parseInt(options._timesToRetryFailedRequests, 0) : 0, this.baseOptions.tenant = this.baseOptions.overrides && this.baseOptions.overrides.__tenant || this.baseOptions.domain.split(".")[0], this.baseOptions.token_issuer = this.baseOptions.overrides && this.baseOptions.overrides.__token_issuer || "https://" + this.baseOptions.domain + "/", this.baseOptions.jwksURI = this.baseOptions.overrides && this.baseOptions.overrides.__jwks_uri, this.transactionManager = new TransactionManager(this.baseOptions), this.client = new Authentication(this.baseOptions), this.redirect = new Redirect(this, this.baseOptions), this.popup = new Popup(this, this.baseOptions), this.crossOriginAuthentication = new CrossOriginAuthentication(this, this.baseOptions), this.webMessageHandler = new WebMessageHandler(this), this._universalLogin = new HostedPages(this, this.baseOptions), this.ssodataStorage = new SSODataStorage(this.baseOptions);
}

function PasswordlessAuthentication(request, options) {
  this.baseOptions = options, this.request = request;
}

function DBConnection(request, options) {
  this.baseOptions = options, this.request = request;
}

function Authentication(auth0, options) {
  2 === arguments.length ? this.auth0 = auth0 : options = auth0, assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    domain: {
      type: "string",
      message: "domain option is required"
    },
    clientID: {
      type: "string",
      message: "clientID option is required"
    },
    responseType: {
      optional: !0,
      type: "string",
      message: "responseType is not valid"
    },
    responseMode: {
      optional: !0,
      type: "string",
      message: "responseMode is not valid"
    },
    redirectUri: {
      optional: !0,
      type: "string",
      message: "redirectUri is not valid"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope is not valid"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience is not valid"
    },
    _disableDeprecationWarnings: {
      optional: !0,
      type: "boolean",
      message: "_disableDeprecationWarnings option is not valid"
    },
    _sendTelemetry: {
      optional: !0,
      type: "boolean",
      message: "_sendTelemetry option is not valid"
    },
    _telemetryInfo: {
      optional: !0,
      type: "object",
      message: "_telemetryInfo option is not valid"
    }
  }), this.baseOptions = options, this.baseOptions._sendTelemetry = !1 !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions.rootUrl = "https://" + this.baseOptions.domain, this.request = new RequestBuilder(this.baseOptions), this.passwordless = new PasswordlessAuthentication(this.request, this.baseOptions), this.dbConnection = new DBConnection(this.request, this.baseOptions), this.warn = new Warn({
    disableWarnings: !!options._disableDeprecationWarnings
  }), this.ssodataStorage = new SSODataStorage(this.baseOptions);
}

function Management(options) {
  assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    domain: {
      type: "string",
      message: "domain option is required"
    },
    token: {
      type: "string",
      message: "token option is required"
    },
    _sendTelemetry: {
      optional: !0,
      type: "boolean",
      message: "_sendTelemetry option is not valid"
    },
    _telemetryInfo: {
      optional: !0,
      type: "object",
      message: "_telemetryInfo option is not valid"
    }
  }), this.baseOptions = options, this.baseOptions.headers = {
    Authorization: "Bearer " + this.baseOptions.token
  }, this.request = new RequestBuilder(this.baseOptions), this.baseOptions.rootUrl = urlJoin("https://" + this.baseOptions.domain, "api", "v2");
}

PopupHandler.prototype.calculatePosition = function (options) {
  var width = options.width || 500,
      height = options.height || 600,
      _window = windowHelper.getWindow(),
      screenX = void 0 !== _window.screenX ? _window.screenX : _window.screenLeft,
      screenY = void 0 !== _window.screenY ? _window.screenY : _window.screenTop,
      outerWidth = void 0 !== _window.outerWidth ? _window.outerWidth : _window.document.body.clientWidth,
      outerHeight = void 0 !== _window.outerHeight ? _window.outerHeight : _window.document.body.clientHeight;

  return {
    width: width,
    height: height,
    left: options.left || screenX + (outerWidth - width) / 2,
    top: options.top || screenY + (outerHeight - height) / 2
  };
}, PopupHandler.prototype.preload = function (options) {
  var _this = this,
      _window = windowHelper.getWindow(),
      popupPosition = this.calculatePosition(options.popupOptions || {}),
      popupOptions = objectHelper.merge(popupPosition)["with"](options.popupOptions),
      url = options.url || "about:blank",
      windowFeatures = lib_stringify(popupOptions, {
    encode: !1,
    delimiter: ","
  });

  return this._current_popup && !this._current_popup.closed ? this._current_popup : (this._current_popup = _window.open(url, "auth0_signup_popup", windowFeatures), this._current_popup.kill = function () {
    this.close(), _this._current_popup = null;
  }, this._current_popup);
}, PopupHandler.prototype.load = function (url, relayUrl, options, cb) {
  var _this = this,
      popupPosition = this.calculatePosition(options.popupOptions || {}),
      popupOptions = objectHelper.merge(popupPosition)["with"](options.popupOptions),
      winchanOptions = objectHelper.merge({
    url: url,
    relay_url: relayUrl,
    window_features: lib_stringify(popupOptions, {
      delimiter: ",",
      encode: !1
    }),
    popup: this._current_popup
  })["with"](options),
      popup = winchan.open(winchanOptions, function (err, data) {
    if (!err || "SyntaxError" !== err.name) return _this._current_popup = null, cb(err, data);
  });

  return popup.focus(), popup;
}, Popup.prototype.buildPopupHandler = function () {
  var pluginHandler = this.baseOptions.plugins.get("popup.getPopupHandler");
  return pluginHandler ? pluginHandler.getPopupHandler() : new PopupHandler();
}, Popup.prototype.preload = function (options) {
  options = options || {};
  var popup = this.buildPopupHandler();
  return popup.preload(options), popup;
}, Popup.prototype.getPopupHandler = function (options, preload) {
  return options.popupHandler ? options.popupHandler : preload ? this.preload(options) : this.buildPopupHandler();
}, Popup.prototype.callback = function (options) {
  var _this = this,
      theWindow = windowHelper.getWindow(),
      originUrl = (options = options || {}).popupOrigin || this.baseOptions.popupOrigin || windowHelper.getOrigin();

  theWindow.opener ? winchan.onOpen(function (popupOrigin, r, cb) {
    if (popupOrigin !== originUrl) return cb({
      error: "origin_mismatch",
      error_description: "The popup's origin (" + popupOrigin + ") should match the `popupOrigin` parameter (" + originUrl + ")."
    });

    _this.webAuth.parseHash(options || {}, function (err, data) {
      return cb(err || data);
    });
  }) : theWindow.doPost = function (msg) {
    theWindow.parent && theWindow.parent.postMessage(msg, originUrl);
  };
}, Popup.prototype.authorize = function (options, cb) {
  var url,
      relayUrl,
      popOpts = {},
      pluginHandler = this.baseOptions.plugins.get("popup.authorize"),
      params = objectHelper.merge(this.baseOptions, ["clientID", "scope", "domain", "audience", "tenant", "responseType", "redirectUri", "_csrf", "state", "_intstate", "nonce"])["with"](objectHelper.blacklist(options, ["popupHandler"]));
  return assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    responseType: {
      type: "string",
      message: "responseType option is required"
    }
  }), relayUrl = urlJoin(this.baseOptions.rootUrl, "relay.html"), options.owp ? params.owp = !0 : (popOpts.origin = urlHelper.extractOrigin(params.redirectUri), relayUrl = params.redirectUri), options.popupOptions && (popOpts.popupOptions = objectHelper.pick(options.popupOptions, ["width", "height", "top", "left"])), pluginHandler && (params = pluginHandler.processParams(params)), (params = this.transactionManager.process(params)).scope = params.scope || "openid profile email", delete params.domain, url = this.client.buildAuthorizeUrl(params), this.getPopupHandler(options).load(url, relayUrl, popOpts, wrapCallback(cb, {
    keepOriginalCasing: !0
  }));
}, Popup.prototype.loginWithCredentials = function (options, cb) {
  options.realm = options.realm || options.connection, options.popup = !0, options = objectHelper.merge(this.baseOptions, ["redirectUri", "responseType", "state", "nonce"])["with"](objectHelper.blacklist(options, ["popupHandler", "connection"])), options = this.transactionManager.process(options), this.crossOriginAuthentication.login(options, cb);
}, Popup.prototype.passwordlessVerify = function (options, cb) {
  var _this = this;

  return this.client.passwordless.verify(objectHelper.blacklist(options, ["popupHandler"]), function (err) {
    if (err) return cb(err);
    options.username = options.phoneNumber || options.email, options.password = options.verificationCode, delete options.email, delete options.phoneNumber, delete options.verificationCode, delete options.type, _this.client.loginWithResourceOwner(options, cb);
  });
}, Popup.prototype.signupAndLogin = function (options, cb) {
  var _this = this;

  return this.client.dbConnection.signup(options, function (err) {
    if (err) return cb(err);

    _this.loginWithCredentials(options, cb);
  });
}, SilentAuthenticationHandler.create = function (options) {
  return new SilentAuthenticationHandler(options);
}, SilentAuthenticationHandler.prototype.login = function (usePostMessage, callback) {
  this.handler = new IframeHandler({
    auth0: this.auth0,
    url: this.authenticationUrl,
    eventListenerType: usePostMessage ? "message" : "load",
    callback: this.getCallbackHandler(callback, usePostMessage),
    timeout: this.timeout,
    eventValidator: this.getEventValidator(),
    timeoutCallback: function timeoutCallback() {
      callback(null, "#error=timeout&error_description=Timeout+during+authentication+renew.");
    },
    usePostMessage: usePostMessage || !1
  }), this.handler.init();
}, SilentAuthenticationHandler.prototype.getEventValidator = function () {
  var _this = this;

  return {
    isValid: function isValid(eventData) {
      switch (eventData.event.type) {
        case "message":
          return eventData.event.origin === _this.postMessageOrigin && eventData.event.source === _this.handler.iframe.contentWindow && (!1 === _this.postMessageDataType || eventData.event.data.type && eventData.event.data.type === _this.postMessageDataType);

        case "load":
          if ("about:" === eventData.sourceObject.contentWindow.location.protocol) return !1;

        default:
          return !0;
      }
    }
  };
}, SilentAuthenticationHandler.prototype.getCallbackHandler = function (callback, usePostMessage) {
  return function (eventData) {
    var callbackValue;
    callbackValue = usePostMessage ? "object" == typeof eventData.event.data && eventData.event.data.hash ? eventData.event.data.hash : eventData.event.data : eventData.sourceObject.contentWindow.location.hash, callback(null, callbackValue);
  };
}, UsernamePassword.prototype.login = function (options, cb) {
  var url, body;
  return url = urlJoin(this.baseOptions.rootUrl, "usernamepassword", "login"), options.username = options.username || options.email, options = objectHelper.blacklist(options, ["email"]), body = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience"])["with"](options), body = this.transactionManager.process(body), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, UsernamePassword.prototype.callback = function (formHtml) {
  var div,
      _document = windowHelper.getDocument();

  (div = _document.createElement("div")).innerHTML = formHtml, _document.body.appendChild(div).children[0].submit();
}, HostedPages.prototype.login = function (options, cb) {
  if (windowHelper.getWindow().location.host !== this.baseOptions.domain) throw new Error("This method is meant to be used only inside the Universal Login Page.");
  var usernamePassword,
      params = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);
  return assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    responseType: {
      type: "string",
      message: "responseType option is required"
    }
  }), (usernamePassword = new UsernamePassword(this.baseOptions)).login(params, function (err, data) {
    return err ? cb(err) : usernamePassword.callback(data);
  });
}, HostedPages.prototype.signupAndLogin = function (options, cb) {
  var _this = this;

  return _this.client.client.dbConnection.signup(options, function (err) {
    return err ? cb(err) : _this.login(options, cb);
  });
}, HostedPages.prototype.getSSOData = function (withActiveDirectories, cb) {
  var url,
      params = "";
  return "function" == typeof withActiveDirectories && (cb = withActiveDirectories, withActiveDirectories = !1), assert.check(withActiveDirectories, {
    type: "boolean",
    message: "withActiveDirectories parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), withActiveDirectories && (params = "?" + lib_stringify({
    ldaps: 1,
    client_id: this.baseOptions.clientID
  })), url = urlJoin(this.baseOptions.rootUrl, "user", "ssodata", params), this.request.get(url, {
    noHeaders: !0
  }).withCredentials().end(wrapCallback(cb));
}, WebAuth.prototype.parseHash = function (options, cb) {
  var parsedQs, err;
  cb || "function" != typeof options ? options = options || {} : (cb = options, options = {});

  var _window = windowHelper.getWindow(),
      hashStr = void 0 === options.hash ? _window.location.hash : options.hash;

  if (hashStr = hashStr.replace(/^#?\/?/, ""), (parsedQs = lib_parse(hashStr)).hasOwnProperty("error")) return err = error.buildResponse(parsedQs.error, parsedQs.error_description), parsedQs.state && (err.state = parsedQs.state), cb(err);
  if (!parsedQs.hasOwnProperty("access_token") && !parsedQs.hasOwnProperty("id_token") && !parsedQs.hasOwnProperty("refresh_token")) return cb(null, null);
  var responseTypes = (this.baseOptions.responseType || options.responseType || "").split(" ");
  return responseTypes.length > 0 && -1 !== responseTypes.indexOf("token") && !parsedQs.hasOwnProperty("access_token") ? cb(error.buildResponse("invalid_hash", "response_type contains `token`, but the parsed hash does not contain an `access_token` property")) : responseTypes.length > 0 && -1 !== responseTypes.indexOf("id_token") && !parsedQs.hasOwnProperty("id_token") ? cb(error.buildResponse("invalid_hash", "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")) : this.validateAuthenticationResponse(options, parsedQs, cb);
}, WebAuth.prototype.validateAuthenticationResponse = function (options, parsedHash, cb) {
  var _this = this;

  options.__enableIdPInitiatedLogin = options.__enableIdPInitiatedLogin || options.__enableImpersonation;
  var state = parsedHash.state,
      transaction = this.transactionManager.getStoredTransaction(state),
      transactionState = options.state || transaction && transaction.state || null,
      transactionStateMatchesState = transactionState === state;
  if (!(!state && !transactionState && options.__enableIdPInitiatedLogin) && !transactionStateMatchesState) return cb({
    error: "invalid_token",
    errorDescription: "`state` does not match."
  });

  var transactionNonce = options.nonce || transaction && transaction.nonce || null,
      appState = options.state || transaction && transaction.appState || null,
      callback = function callback(err, payload) {
    if (err) return cb(err);
    var sub;
    transaction && transaction.lastUsedConnection && (payload && (sub = payload.sub), _this.ssodataStorage.set(transaction.lastUsedConnection, sub));
    return cb(null, function (qsParams, appState, token) {
      return {
        accessToken: qsParams.access_token || null,
        idToken: qsParams.id_token || null,
        idTokenPayload: token || null,
        appState: appState || null,
        refreshToken: qsParams.refresh_token || null,
        state: qsParams.state || null,
        expiresIn: qsParams.expires_in ? parseInt(qsParams.expires_in, 10) : null,
        tokenType: qsParams.token_type || null,
        scope: qsParams.scope || null
      };
    }(parsedHash, appState, payload));
  };

  return parsedHash.id_token ? this.validateToken(parsedHash.id_token, transactionNonce, function (validationError, payload) {
    if (!validationError) return parsedHash.access_token && payload.at_hash ? new F().validateAccessToken(parsedHash.access_token, "RS256", payload.at_hash, function (err) {
      return err ? callback(error.invalidToken(err.message)) : callback(null, payload);
    }) : callback(null, payload);
    if ("invalid_token" !== validationError.error || "Nonce does not match." === validationError.errorDescription) return callback(validationError);
    var decodedToken = new F().decode(parsedHash.id_token);
    if ("HS256" !== decodedToken.header.alg) return callback(validationError);
    if ((decodedToken.payload.nonce || null) !== transactionNonce) return callback({
      error: "invalid_token",
      errorDescription: "Nonce does not match."
    });

    if (!parsedHash.access_token) {
      return callback({
        error: "invalid_token",
        description: "The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token"
      });
    }

    return _this.client.userInfo(parsedHash.access_token, function (errUserInfo, profile) {
      return errUserInfo ? callback(errUserInfo) : callback(null, profile);
    });
  }) : callback(null, null);
}, WebAuth.prototype.validateToken = function (token, nonce, cb) {
  new F({
    issuer: this.baseOptions.token_issuer,
    jwksURI: this.baseOptions.jwksURI,
    audience: this.baseOptions.clientID,
    leeway: this.baseOptions.leeway || 0,
    __disableExpirationCheck: this.baseOptions.__disableExpirationCheck
  }).verify(token, nonce, function (err, payload) {
    if (err) return cb(error.invalidToken(err.message));
    cb(null, payload);
  });
}, WebAuth.prototype.renewAuth = function (options, cb) {
  var usePostMessage = !!options.usePostMessage,
      postMessageDataType = options.postMessageDataType || !1,
      postMessageOrigin = options.postMessageOrigin || windowHelper.getWindow().origin,
      timeout = options.timeout,
      _this = this,
      params = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "responseType", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);

  params.responseType = params.responseType || "token", params.responseMode = params.responseMode || "fragment", params = this.transactionManager.process(params), assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), params.prompt = "none", params = objectHelper.blacklist(params, ["usePostMessage", "tenant", "postMessageDataType", "postMessageOrigin"]), SilentAuthenticationHandler.create({
    authenticationUrl: this.client.buildAuthorizeUrl(params),
    postMessageDataType: postMessageDataType,
    postMessageOrigin: postMessageOrigin,
    timeout: timeout
  }).login(usePostMessage, function (err, hash) {
    if ("object" == typeof hash) return cb(err, hash);

    _this.parseHash({
      hash: hash
    }, cb);
  });
}, WebAuth.prototype.checkSession = function (options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);
  return "code" === params.responseType ? cb({
    error: "error",
    error_description: "responseType can't be `code`"
  }) : (options.nonce || (params = this.transactionManager.process(params)), params.redirectUri ? (assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), params = objectHelper.blacklist(params, ["usePostMessage", "tenant", "postMessageDataType"]), void this.webMessageHandler.run(params, wrapCallback(cb, {
    forceLegacyError: !0,
    ignoreCasing: !0
  }))) : cb({
    error: "error",
    error_description: "redirectUri can't be empty"
  }));
}, WebAuth.prototype.changePassword = function (options, cb) {
  return this.client.dbConnection.changePassword(options, cb);
}, WebAuth.prototype.passwordlessStart = function (options, cb) {
  var authParams = objectHelper.merge(this.baseOptions, ["responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options.authParams);
  return options.authParams = this.transactionManager.process(authParams), this.client.passwordless.start(options, cb);
}, WebAuth.prototype.signup = function (options, cb) {
  return this.client.dbConnection.signup(options, cb);
}, WebAuth.prototype.authorize = function (options) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);
  assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    responseType: {
      type: "string",
      message: "responseType option is required"
    }
  }), (params = this.transactionManager.process(params)).scope = params.scope || "openid profile email", windowHelper.redirect(this.client.buildAuthorizeUrl(params));
}, WebAuth.prototype.signupAndAuthorize = function (options, cb) {
  var _this = this;

  return this.client.dbConnection.signup(objectHelper.blacklist(options, ["popupHandler"]), function (err) {
    if (err) return cb(err);
    options.realm = options.connection, options.username || (options.username = options.email), _this.client.login(options, cb);
  });
}, WebAuth.prototype.login = function (options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);
  params = this.transactionManager.process(params), windowHelper.getWindow().location.host === this.baseOptions.domain ? (params.connection = params.realm, delete params.realm, this._universalLogin.login(params, cb)) : this.crossOriginAuthentication.login(params, cb);
}, WebAuth.prototype.passwordlessLogin = function (options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);
  if (params = this.transactionManager.process(params), windowHelper.getWindow().location.host === this.baseOptions.domain) this.passwordlessVerify(params, cb);else {
    var crossOriginOptions = objectHelper.extend({
      credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp",
      realm: params.connection,
      username: params.email || params.phoneNumber,
      otp: params.verificationCode
    }, objectHelper.blacklist(params, ["connection", "email", "phoneNumber", "verificationCode"]));
    this.crossOriginAuthentication.login(crossOriginOptions, cb);
  }
}, WebAuth.prototype.crossOriginAuthenticationCallback = function () {
  this.crossOriginVerification();
}, WebAuth.prototype.crossOriginVerification = function () {
  this.crossOriginAuthentication.callback();
}, WebAuth.prototype.logout = function (options) {
  windowHelper.redirect(this.client.buildLogoutUrl(options));
}, WebAuth.prototype.passwordlessVerify = function (options, cb) {
  var _this = this,
      params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](options);

  return assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    responseType: {
      type: "string",
      message: "responseType option is required"
    }
  }), params = this.transactionManager.process(params), this.client.passwordless.verify(params, function (err) {
    return err ? cb(err) : windowHelper.redirect(_this.client.passwordless.buildVerifyUrl(params));
  });
}, PasswordlessAuthentication.prototype.buildVerifyUrl = function (options) {
  var params, qString;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    connection: {
      type: "string",
      message: "connection option is required"
    },
    verificationCode: {
      type: "string",
      message: "verificationCode option is required"
    },
    phoneNumber: {
      optional: !1,
      type: "string",
      message: "phoneNumber option is required",
      condition: function condition(o) {
        return !o.email;
      }
    },
    email: {
      optional: !1,
      type: "string",
      message: "email option is required",
      condition: function condition(o) {
        return !o.phoneNumber;
      }
    }
  }), params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "protocol", "nonce"])["with"](options), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params = objectHelper.toSnakeCase(params, ["auth0Client"]), qString = lib_stringify(params), urlJoin(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + qString);
}, PasswordlessAuthentication.prototype.start = function (options, cb) {
  var url, body;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    connection: {
      type: "string",
      message: "connection option is required"
    },
    send: {
      type: "string",
      message: "send option is required",
      values: ["link", "code"],
      value_message: "send is not valid ([link, code])"
    },
    phoneNumber: {
      optional: !0,
      type: "string",
      message: "phoneNumber option is required",
      condition: function condition(o) {
        return "code" === o.send || !o.email;
      }
    },
    email: {
      optional: !0,
      type: "string",
      message: "email option is required",
      condition: function condition(o) {
        return "link" === o.send || !o.phoneNumber;
      }
    },
    authParams: {
      optional: !0,
      type: "object",
      message: "authParams option is required"
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "passwordless", "start"), (body = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope"])["with"](options)).scope && (body.authParams = body.authParams || {}, body.authParams.scope = body.scope), body.redirectUri && (body.authParams = body.authParams || {}, body.authParams.redirect_uri = body.redirectUri), body.responseType && (body.authParams = body.authParams || {}, body.authParams.response_type = body.responseType), delete body.redirectUri, delete body.responseType, delete body.scope, body = objectHelper.toSnakeCase(body, ["auth0Client", "authParams"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, PasswordlessAuthentication.prototype.verify = function (options, cb) {
  var url, cleanOption;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    connection: {
      type: "string",
      message: "connection option is required"
    },
    verificationCode: {
      type: "string",
      message: "verificationCode option is required"
    },
    phoneNumber: {
      optional: !1,
      type: "string",
      message: "phoneNumber option is required",
      condition: function condition(o) {
        return !o.email;
      }
    },
    email: {
      optional: !1,
      type: "string",
      message: "email option is required",
      condition: function condition(o) {
        return !o.phoneNumber;
      }
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), cleanOption = objectHelper.pick(options, ["connection", "verificationCode", "phoneNumber", "email", "auth0Client"]), cleanOption = objectHelper.toSnakeCase(cleanOption, ["auth0Client"]), url = urlJoin(this.baseOptions.rootUrl, "passwordless", "verify"), this.request.post(url).send(cleanOption).end(wrapCallback(cb));
}, DBConnection.prototype.signup = function (options, cb) {
  var url, body, metadata;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    connection: {
      type: "string",
      message: "connection option is required"
    },
    email: {
      type: "string",
      message: "email option is required"
    },
    password: {
      type: "string",
      message: "password option is required"
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "dbconnections", "signup"), metadata = (body = objectHelper.merge(this.baseOptions, ["clientID"])["with"](options)).user_metadata || body.userMetadata, body = objectHelper.blacklist(body, ["scope", "userMetadata", "user_metadata"]), body = objectHelper.toSnakeCase(body, ["auth0Client"]), metadata && (body.user_metadata = metadata), this.request.post(url).send(body).end(wrapCallback(cb));
}, DBConnection.prototype.changePassword = function (options, cb) {
  var url, body;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    connection: {
      type: "string",
      message: "connection option is required"
    },
    email: {
      type: "string",
      message: "email option is required"
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "dbconnections", "change_password"), body = objectHelper.merge(this.baseOptions, ["clientID"])["with"](options, ["email", "connection"]), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.buildAuthorizeUrl = function (options) {
  var params, qString;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }), params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience"])["with"](options), assert.check(params, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    clientID: {
      type: "string",
      message: "clientID option is required"
    },
    redirectUri: {
      optional: !0,
      type: "string",
      message: "redirectUri option is required"
    },
    responseType: {
      type: "string",
      message: "responseType option is required"
    },
    nonce: {
      type: "string",
      message: "nonce option is required",
      condition: function condition(o) {
        return -1 === o.responseType.indexOf("code") && -1 !== o.responseType.indexOf("id_token");
      }
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope option is required"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience option is required"
    }
  }), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params.connection_scope && assert.isArray(params.connection_scope) && (params.connection_scope = params.connection_scope.join(",")), params = objectHelper.blacklist(params, ["username", "popupOptions", "domain", "tenant", "timeout", "appState"]), params = objectHelper.toSnakeCase(params, ["auth0Client"]), params = parametersWhitelist.oauthAuthorizeParams(this.warn, params), qString = lib_stringify(params), urlJoin(this.baseOptions.rootUrl, "authorize", "?" + qString);
}, Authentication.prototype.buildLogoutUrl = function (options) {
  var params, qString;
  return assert.check(options, {
    optional: !0,
    type: "object",
    message: "options parameter is not valid"
  }), params = objectHelper.merge(this.baseOptions, ["clientID"])["with"](options || {}), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params = objectHelper.toSnakeCase(params, ["auth0Client", "returnTo"]), qString = lib_stringify(objectHelper.blacklist(params, ["federated"])), options && void 0 !== options.federated && !1 !== options.federated && "false" !== options.federated && (qString += "&federated"), urlJoin(this.baseOptions.rootUrl, "v2", "logout", "?" + qString);
}, Authentication.prototype.loginWithDefaultDirectory = function (options, cb) {
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    username: {
      type: "string",
      message: "username option is required"
    },
    password: {
      type: "string",
      message: "password option is required"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope option is required"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience option is required"
    }
  }), options.grantType = "password", this.oauthToken(options, cb);
}, Authentication.prototype.login = function (options, cb) {
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    username: {
      type: "string",
      message: "username option is required"
    },
    password: {
      type: "string",
      message: "password option is required"
    },
    realm: {
      type: "string",
      message: "realm option is required"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope option is required"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience option is required"
    }
  }), options.grantType = "http://auth0.com/oauth/grant-type/password-realm", this.oauthToken(options, cb);
}, Authentication.prototype.oauthToken = function (options, cb) {
  var url, body;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "oauth", "token"), body = objectHelper.merge(this.baseOptions, ["clientID", "scope", "audience"])["with"](options), assert.check(body, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    clientID: {
      type: "string",
      message: "clientID option is required"
    },
    grantType: {
      type: "string",
      message: "grantType option is required"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope option is required"
    },
    audience: {
      optional: !0,
      type: "string",
      message: "audience option is required"
    }
  }), body = objectHelper.toSnakeCase(body, ["auth0Client"]), body = parametersWhitelist.oauthTokenParams(this.warn, body), this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.loginWithResourceOwner = function (options, cb) {
  var url, body;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    username: {
      type: "string",
      message: "username option is required"
    },
    password: {
      type: "string",
      message: "password option is required"
    },
    connection: {
      type: "string",
      message: "connection option is required"
    },
    scope: {
      optional: !0,
      type: "string",
      message: "scope option is required"
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "oauth", "ro"), body = objectHelper.merge(this.baseOptions, ["clientID", "scope"])["with"](options, ["username", "password", "scope", "connection", "device"]), (body = objectHelper.toSnakeCase(body, ["auth0Client"])).grant_type = body.grant_type || "password", this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.getSSOData = function (withActiveDirectories, cb) {
  if (this.auth0 || (this.auth0 = new WebAuth(this.baseOptions)), windowHelper.getWindow().location.host === this.baseOptions.domain) return this.auth0._universalLogin.getSSOData(withActiveDirectories, cb);
  "function" == typeof withActiveDirectories && (cb = withActiveDirectories), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  });
  var clientId = this.baseOptions.clientID,
      ssodataInformation = this.ssodataStorage.get() || {};
  this.auth0.checkSession({
    responseType: "token id_token",
    scope: "openid profile email",
    connection: ssodataInformation.lastUsedConnection,
    timeout: 5e3
  }, function (err, result) {
    return err ? "login_required" === err.error ? cb(null, {
      sso: !1
    }) : ("consent_required" === err.error && (err.error_description = "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."), cb(err, {
      sso: !1
    })) : ssodataInformation.lastUsedSub && ssodataInformation.lastUsedSub !== result.idTokenPayload.sub ? cb(err, {
      sso: !1
    }) : cb(null, {
      lastUsedConnection: {
        name: ssodataInformation.lastUsedConnection
      },
      lastUsedUserID: result.idTokenPayload.sub,
      lastUsedUsername: result.idTokenPayload.email || result.idTokenPayload.name,
      lastUsedClientID: clientId,
      sessionClients: [clientId],
      sso: !0
    });
  });
}, Authentication.prototype.userInfo = function (accessToken, cb) {
  var url;
  return assert.check(accessToken, {
    type: "string",
    message: "accessToken parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "userinfo"), this.request.get(url).set("Authorization", "Bearer " + accessToken).end(wrapCallback(cb, {
    ignoreCasing: !0
  }));
}, Authentication.prototype.delegation = function (options, cb) {
  var url, body;
  return assert.check(options, {
    type: "object",
    message: "options parameter is not valid"
  }, {
    grant_type: {
      type: "string",
      message: "grant_type option is required"
    }
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "delegation"), body = objectHelper.merge(this.baseOptions, ["clientID"])["with"](options), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.getUserCountry = function (cb) {
  var url;
  return assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "user", "geoloc", "country"), this.request.get(url).end(wrapCallback(cb));
}, Management.prototype.getUser = function (userId, cb) {
  var url;
  return assert.check(userId, {
    type: "string",
    message: "userId parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.get(url).end(wrapCallback(cb, {
    ignoreCasing: !0
  }));
}, Management.prototype.patchUserMetadata = function (userId, userMetadata, cb) {
  var url;
  return assert.check(userId, {
    type: "string",
    message: "userId parameter is not valid"
  }), assert.check(userMetadata, {
    type: "object",
    message: "userMetadata parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.patch(url).send({
    user_metadata: userMetadata
  }).end(wrapCallback(cb, {
    ignoreCasing: !0
  }));
}, Management.prototype.patchUserAttributes = function (userId, user, cb) {
  var url;
  return assert.check(userId, {
    type: "string",
    message: "userId parameter is not valid"
  }), assert.check(user, {
    type: "object",
    message: "user parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.patch(url).send(user).end(wrapCallback(cb, {
    ignoreCasing: !0
  }));
}, Management.prototype.linkUser = function (userId, secondaryUserToken, cb) {
  var url;
  return assert.check(userId, {
    type: "string",
    message: "userId parameter is not valid"
  }), assert.check(secondaryUserToken, {
    type: "string",
    message: "secondaryUserToken parameter is not valid"
  }), assert.check(cb, {
    type: "function",
    message: "cb parameter is not valid"
  }), url = urlJoin(this.baseOptions.rootUrl, "users", userId, "identities"), this.request.post(url).send({
    link_with: secondaryUserToken
  }).end(wrapCallback(cb, {
    ignoreCasing: !0
  }));
};
var index = {
  Authentication: Authentication,
  Management: Management,
  WebAuth: WebAuth,
  version: version
};
/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71), __webpack_require__(160).setImmediate))

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(44);

__webpack_require__(20);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(87);

exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(50));

var _reactLifecyclesCompat = __webpack_require__(85);

var _PropTypes = __webpack_require__(207);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props["in"]) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref["in"];

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props["in"]) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom["default"].findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps["in"];
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react["default"].Children.only(children);

    return _react["default"].cloneElement(child, childProps);
  };

  return Transition;
}(_react["default"].Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  "in": false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);

__webpack_require__(29);

__webpack_require__(167);

__webpack_require__(44);

__webpack_require__(22);

__webpack_require__(20);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactLifecyclesCompat = __webpack_require__(85);

var _ChildMapping = __webpack_require__(209);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react["default"].createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react["default"].Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes["default"].object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

var _ScrollBehaviorContext = _interopRequireDefault(__webpack_require__(210));

var _ScrollContainer = _interopRequireDefault(__webpack_require__(218));

exports.ScrollContainer = _ScrollContainer["default"];
exports.ScrollContext = _ScrollBehaviorContext["default"];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);

__webpack_require__(45);

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  * ie10 fix - Mikael Kristiansson 2019
  */
!function (name, definition) {
  if (true) module.exports = definition();else {}
}('domready', function () {
  var ie10 = false;

  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    ie10 = true;
  }

  var fns = [],
      _listener,
      doc = typeof document === 'object' && document,
      hack = ie10 ? doc.documentElement.doScroll() : doc.documentElement.doScroll,
      domContentLoaded = 'DOMContentLoaded',
      loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded && doc) doc.addEventListener(domContentLoaded, _listener = function listener() {
    doc.removeEventListener(domContentLoaded, _listener);
    loaded = 1;

    while (_listener = fns.shift()) {
      _listener();
    }
  });
  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});

/***/ }),
/* 150 */
/***/ (function(module) {

module.exports = [];

/***/ }),
/* 151 */
/***/ (function(module) {

module.exports = [{"path":"/upload/","matchPath":"/upload/*"}];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(136).set });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var inheritIfRequired = __webpack_require__(116);
var dP = __webpack_require__(11).f;
var gOPN = __webpack_require__(65).f;
var isRegExp = __webpack_require__(103);
var $flags = __webpack_require__(76);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(6)(function () {
  re2[__webpack_require__(4)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(16)(global, 'RegExp', $RegExp);
}

__webpack_require__(82)('RegExp');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $some = __webpack_require__(40)(3);

$export($export.P + $export.F * !__webpack_require__(35)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(2);
var toObject = __webpack_require__(14);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(99);
var toLength = __webpack_require__(13);
var createProperty = __webpack_require__(201);
var getIterFn = __webpack_require__(100);

$export($export.S + $export.F * !__webpack_require__(83)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);
var core = __webpack_require__(30);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(9);
var sameValue = __webpack_require__(169);
var regExpExec = __webpack_require__(73);

// @@search logic
__webpack_require__(75)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(39);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(184); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71)))

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
var defined = __webpack_require__(32);
var fails = __webpack_require__(6);
var spaces = __webpack_require__(190);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(115)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(2);
var $includes = __webpack_require__(78)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(131)('includes');


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(2);
var context = __webpack_require__(118);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(119)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var each = __webpack_require__(40)(0);
var redefine = __webpack_require__(16);
var meta = __webpack_require__(61);
var assign = __webpack_require__(123);
var weak = __webpack_require__(143);
var isObject = __webpack_require__(7);
var validate = __webpack_require__(41);
var NATIVE_WEAK_MAP = __webpack_require__(41);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(84)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(2);
var $values = __webpack_require__(208)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(154);

var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(92));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM["default"]) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(93);
__webpack_require__(2)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74)('native-function-to-string', Function.toString);


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(126).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(51)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(175),options:{"plugins":[]}}];

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRootElement", function() { return wrapRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClientEntry", function() { return onClientEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */ // You can delete this file if you're not using it
var SessionCheck=/*#__PURE__*/function(_React$Component){_inheritsLoose(SessionCheck,_React$Component);function SessionCheck(props){var _this;_this=_React$Component.call(this,props)||this;_this.handleCheckSession=function(){_this.setState({loading:false});};_this.state={loading:true};return _this;}var _proto=SessionCheck.prototype;_proto.componentDidMount=function componentDidMount(){Object(_src_utils_auth__WEBPACK_IMPORTED_MODULE_1__[/* silentAuth */ "f"])(this.handleCheckSession);};_proto.render=function render(){return this.state.loading===false&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,this.props.children);};return SessionCheck;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);var wrapRootElement=function wrapRootElement(_ref){var element=_ref.element;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SessionCheck,null,element);};var onClientEntry=function onClientEntry(){react_toastify__WEBPACK_IMPORTED_MODULE_2__[/* toast */ "a"].configure({autoClose:2000,draggable:false//etc you get the idea
});};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(46);

__webpack_require__(60);

__webpack_require__(70);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(48);

__webpack_require__(45);

__webpack_require__(23);

__webpack_require__(69);

__webpack_require__(58);

var k = __webpack_require__(114),
    n = "function" === typeof Symbol && Symbol["for"],
    p = n ? Symbol["for"]("react.element") : 60103,
    q = n ? Symbol["for"]("react.portal") : 60106,
    r = n ? Symbol["for"]("react.fragment") : 60107,
    t = n ? Symbol["for"]("react.strict_mode") : 60108,
    u = n ? Symbol["for"]("react.profiler") : 60114,
    v = n ? Symbol["for"]("react.provider") : 60109,
    w = n ? Symbol["for"]("react.context") : 60110,
    x = n ? Symbol["for"]("react.concurrent_mode") : 60111,
    y = n ? Symbol["for"]("react.forward_ref") : 60112,
    z = n ? Symbol["for"]("react.suspense") : 60113,
    aa = n ? Symbol["for"]("react.memo") : 60115,
    ba = n ? Symbol["for"]("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === e[c] && (e[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) {
    e = e.value, f = b + T(e, h++), g += S(e, f, d, c);
  } else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function map(a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function forEach(a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function count(a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function useCallback(a, b) {
    return W().useCallback(a, b);
  },
  useContext: function useContext(a, b) {
    return W().useContext(a, b);
  },
  useEffect: function useEffect(a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function useDebugValue() {},
  useLayoutEffect: function useLayoutEffect(a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function useMemo(a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function useReducer(a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function useRef(a) {
    return W().useRef(a);
  },
  useState: function useState(a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function cloneElement(a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  "default": X
},
    Z = Y && X || Y;
module.exports = Z["default"] || Z;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(38);
var isObject = __webpack_require__(7);
var invoke = __webpack_require__(127);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(8) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(76)
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(64);
var descriptor = __webpack_require__(52);
var setToStringTag = __webpack_require__(56);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(39);
var gOPS = __webpack_require__(98);
var pIE = __webpack_require__(67);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(34);
var gOPN = __webpack_require__(65).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(183);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var isArray = __webpack_require__(102);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {__webpack_require__(10);

__webpack_require__(20);

(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71), __webpack_require__(161)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(115)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(8)) {
  var LIBRARY = __webpack_require__(36);
  var global = __webpack_require__(3);
  var fails = __webpack_require__(6);
  var $export = __webpack_require__(2);
  var $typed = __webpack_require__(137);
  var $buffer = __webpack_require__(188);
  var ctx = __webpack_require__(27);
  var anInstance = __webpack_require__(53);
  var propertyDesc = __webpack_require__(52);
  var hide = __webpack_require__(21);
  var redefineAll = __webpack_require__(55);
  var toInteger = __webpack_require__(33);
  var toLength = __webpack_require__(13);
  var toIndex = __webpack_require__(138);
  var toAbsoluteIndex = __webpack_require__(79);
  var toPrimitive = __webpack_require__(63);
  var has = __webpack_require__(26);
  var classof = __webpack_require__(66);
  var isObject = __webpack_require__(7);
  var toObject = __webpack_require__(14);
  var isArrayIter = __webpack_require__(99);
  var create = __webpack_require__(64);
  var getPrototypeOf = __webpack_require__(133);
  var gOPN = __webpack_require__(65).f;
  var getIterFn = __webpack_require__(100);
  var uid = __webpack_require__(37);
  var wks = __webpack_require__(4);
  var createArrayMethod = __webpack_require__(40);
  var createArrayIncludes = __webpack_require__(78);
  var speciesConstructor = __webpack_require__(81);
  var ArrayIterators = __webpack_require__(15);
  var Iterators = __webpack_require__(54);
  var $iterDetect = __webpack_require__(83);
  var setSpecies = __webpack_require__(82);
  var arrayFill = __webpack_require__(139);
  var arrayCopyWithin = __webpack_require__(189);
  var $DP = __webpack_require__(11);
  var $GOPD = __webpack_require__(90);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(8);
var LIBRARY = __webpack_require__(36);
var $typed = __webpack_require__(137);
var hide = __webpack_require__(21);
var redefineAll = __webpack_require__(55);
var fails = __webpack_require__(6);
var anInstance = __webpack_require__(53);
var toInteger = __webpack_require__(33);
var toLength = __webpack_require__(13);
var toIndex = __webpack_require__(138);
var gOPN = __webpack_require__(65).f;
var dP = __webpack_require__(11).f;
var arrayFill = __webpack_require__(139);
var setToStringTag = __webpack_require__(56);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(79);
var toLength = __webpack_require__(13);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var toObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(63);

$export($export.P + $export.F * __webpack_require__(6)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(2);
var toISOString = __webpack_require__(193);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(6);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(38);
var toObject = __webpack_require__(14);
var IObject = __webpack_require__(77);
var toLength = __webpack_require__(13);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 195 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(45);

var ReactPropTypesSecret = __webpack_require__(198);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location,pageResources=_ref.pageResources;if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(52);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(2);
var toLength = __webpack_require__(13);
var context = __webpack_require__(118);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(119)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


__webpack_require__(166);

__webpack_require__(204);

__webpack_require__(91);

__webpack_require__(88);

__webpack_require__(141);

__webpack_require__(110);

__webpack_require__(46);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(24);

__webpack_require__(69);

__webpack_require__(58);

__webpack_require__(87);

__webpack_require__(72);

__webpack_require__(47);

__webpack_require__(60);

__webpack_require__(70);

__webpack_require__(10);

__webpack_require__(28);

__webpack_require__(48);

__webpack_require__(20);

__webpack_require__(45);

__webpack_require__(23);

var aa = __webpack_require__(0),
    n = __webpack_require__(114),
    r = __webpack_require__(205);

function ba(a, b, c, d, e, f, g, h) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [c, d, e, f, g, h],
          k = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[k++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function x(a) {
  for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) {
    c += "&args[]=" + encodeURIComponent(arguments[d + 1]);
  }

  ba(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
}

aa ? void 0 : x("227");

function ca(a, b, c, d, e, f, g, h, l) {
  var k = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, k);
  } catch (m) {
    this.onError(m);
  }
}

var da = !1,
    ea = null,
    fa = !1,
    ha = null,
    ia = {
  onError: function onError(a) {
    da = !0;
    ea = a;
  }
};

function ja(a, b, c, d, e, f, g, h, l) {
  da = !1;
  ea = null;
  ca.apply(ia, arguments);
}

function ka(a, b, c, d, e, f, g, h, l) {
  ja.apply(this, arguments);

  if (da) {
    if (da) {
      var k = ea;
      da = !1;
      ea = null;
    } else x("198"), k = void 0;

    fa || (fa = !0, ha = k);
  }
}

var la = null,
    ma = {};

function na() {
  if (la) for (var a in ma) {
    var b = ma[a],
        c = la.indexOf(a);
    -1 < c ? void 0 : x("96", a);

    if (!oa[c]) {
      b.extractEvents ? void 0 : x("97", a);
      oa[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            g = b,
            h = d;
        pa.hasOwnProperty(h) ? x("99", h) : void 0;
        pa[h] = f;
        var l = f.phasedRegistrationNames;

        if (l) {
          for (e in l) {
            l.hasOwnProperty(e) && qa(l[e], g, h);
          }

          e = !0;
        } else f.registrationName ? (qa(f.registrationName, g, h), e = !0) : e = !1;

        e ? void 0 : x("98", d, a);
      }
    }
  }
}

function qa(a, b, c) {
  ra[a] ? x("100", a) : void 0;
  ra[a] = b;
  sa[a] = b.eventTypes[c].dependencies;
}

var oa = [],
    pa = {},
    ra = {},
    sa = {},
    ta = null,
    ua = null,
    va = null;

function wa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = va(c);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}

function xa(a, b) {
  null == b ? x("30") : void 0;
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function ya(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var za = null;

function Aa(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) {
      wa(a, b[d], c[d]);
    } else b && wa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

var Ba = {
  injectEventPluginOrder: function injectEventPluginOrder(a) {
    la ? x("101") : void 0;
    la = Array.prototype.slice.call(a);
    na();
  },
  injectEventPluginsByName: function injectEventPluginsByName(a) {
    var b = !1,
        c;

    for (c in a) {
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        ma.hasOwnProperty(c) && ma[c] === d || (ma[c] ? x("102", c) : void 0, ma[c] = d, b = !0);
      }
    }

    b && na();
  }
};

function Ca(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = ta(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  c && "function" !== typeof c ? x("231", b, typeof c) : void 0;
  return c;
}

function Da(a) {
  null !== a && (za = xa(za, a));
  a = za;
  za = null;
  if (a && (ya(a, Aa), za ? x("95") : void 0, fa)) throw a = ha, fa = !1, ha = null, a;
}

var Ea = Math.random().toString(36).slice(2),
    Fa = "__reactInternalInstance$" + Ea,
    Ga = "__reactEventHandlers$" + Ea;

function Ha(a) {
  if (a[Fa]) return a[Fa];

  for (; !a[Fa];) {
    if (a.parentNode) a = a.parentNode;else return null;
  }

  a = a[Fa];
  return 5 === a.tag || 6 === a.tag ? a : null;
}

function Ia(a) {
  a = a[Fa];
  return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
}

function Ja(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  x("33");
}

function Ka(a) {
  return a[Ga] || null;
}

function La(a) {
  do {
    a = a["return"];
  } while (a && 5 !== a.tag);

  return a ? a : null;
}

function Ma(a, b, c) {
  if (b = Ca(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a);
}

function Na(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) {
      c.push(b), b = La(b);
    }

    for (b = c.length; 0 < b--;) {
      Ma(c[b], "captured", a);
    }

    for (b = 0; b < c.length; b++) {
      Ma(c[b], "bubbled", a);
    }
  }
}

function Oa(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Ca(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a));
}

function Pa(a) {
  a && a.dispatchConfig.registrationName && Oa(a._targetInst, null, a);
}

function Qa(a) {
  ya(a, Na);
}

var Ra = !("undefined" === typeof window || !window.document || !window.document.createElement);

function Sa(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Ta = {
  animationend: Sa("Animation", "AnimationEnd"),
  animationiteration: Sa("Animation", "AnimationIteration"),
  animationstart: Sa("Animation", "AnimationStart"),
  transitionend: Sa("Transition", "TransitionEnd")
},
    Ua = {},
    Va = {};
Ra && (Va = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);

function Wa(a) {
  if (Ua[a]) return Ua[a];
  if (!Ta[a]) return a;
  var b = Ta[a],
      c;

  for (c in b) {
    if (b.hasOwnProperty(c) && c in Va) return Ua[a] = b[c];
  }

  return a;
}

var Xa = Wa("animationend"),
    Ya = Wa("animationiteration"),
    Za = Wa("animationstart"),
    $a = Wa("transitionend"),
    ab = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    bb = null,
    cb = null,
    db = null;

function eb() {
  if (db) return db;
  var a,
      b = cb,
      c = b.length,
      d,
      e = "value" in bb ? bb.value : bb.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++) {
    ;
  }

  var g = c - a;

  for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {
    ;
  }

  return db = e.slice(a, 1 < d ? 1 - d : void 0);
}

function fb() {
  return !0;
}

function gb() {
  return !1;
}

function y(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? fb : gb;
  this.isPropagationStopped = gb;
  return this;
}

n(y.prototype, {
  preventDefault: function preventDefault() {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = fb);
  },
  stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = fb);
  },
  persist: function persist() {
    this.isPersistent = fb;
  },
  isPersistent: gb,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;

    for (b in a) {
      this[b] = null;
    }

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = gb;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
y.Interface = {
  type: null,
  target: null,
  currentTarget: function currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

y.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  hb(c);
  return c;
};

hb(y);

function ib(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function jb(a) {
  a instanceof this ? void 0 : x("279");
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function hb(a) {
  a.eventPool = [];
  a.getPooled = ib;
  a.release = jb;
}

var kb = y.extend({
  data: null
}),
    lb = y.extend({
  data: null
}),
    mb = [9, 13, 27, 32],
    nb = Ra && "CompositionEvent" in window,
    ob = null;
Ra && "documentMode" in document && (ob = document.documentMode);
var pb = Ra && "TextEvent" in window && !ob,
    qb = Ra && (!nb || ob && 8 < ob && 11 >= ob),
    rb = String.fromCharCode(32),
    sb = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    tb = !1;

function ub(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== mb.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function vb(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var wb = !1;

function xb(a, b) {
  switch (a) {
    case "compositionend":
      return vb(b);

    case "keypress":
      if (32 !== b.which) return null;
      tb = !0;
      return rb;

    case "textInput":
      return a = b.data, a === rb && tb ? null : a;

    default:
      return null;
  }
}

function yb(a, b) {
  if (wb) return "compositionend" === a || !nb && ub(a, b) ? (a = eb(), db = cb = bb = null, wb = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b["char"] && 1 < b["char"].length) return b["char"];
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return qb && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var zb = {
  eventTypes: sb,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = void 0;
    var f = void 0;
    if (nb) b: {
      switch (a) {
        case "compositionstart":
          e = sb.compositionStart;
          break b;

        case "compositionend":
          e = sb.compositionEnd;
          break b;

        case "compositionupdate":
          e = sb.compositionUpdate;
          break b;
      }

      e = void 0;
    } else wb ? ub(a, c) && (e = sb.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = sb.compositionStart);
    e ? (qb && "ko" !== c.locale && (wb || e !== sb.compositionStart ? e === sb.compositionEnd && wb && (f = eb()) : (bb = d, cb = "value" in bb ? bb.value : bb.textContent, wb = !0)), e = kb.getPooled(e, b, c, d), f ? e.data = f : (f = vb(c), null !== f && (e.data = f)), Qa(e), f = e) : f = null;
    (a = pb ? xb(a, c) : yb(a, c)) ? (b = lb.getPooled(sb.beforeInput, b, c, d), b.data = a, Qa(b)) : b = null;
    return null === f ? b : null === b ? f : [f, b];
  }
},
    Ab = null,
    Bb = null,
    Cb = null;

function Db(a) {
  if (a = ua(a)) {
    "function" !== typeof Ab ? x("280") : void 0;
    var b = ta(a.stateNode);
    Ab(a.stateNode, a.type, b);
  }
}

function Eb(a) {
  Bb ? Cb ? Cb.push(a) : Cb = [a] : Bb = a;
}

function Fb() {
  if (Bb) {
    var a = Bb,
        b = Cb;
    Cb = Bb = null;
    Db(a);
    if (b) for (a = 0; a < b.length; a++) {
      Db(b[a]);
    }
  }
}

function Gb(a, b) {
  return a(b);
}

function Hb(a, b, c) {
  return a(b, c);
}

function Ib() {}

var Jb = !1;

function Kb(a, b) {
  if (Jb) return a(b);
  Jb = !0;

  try {
    return Gb(a, b);
  } finally {
    if (Jb = !1, null !== Bb || null !== Cb) Ib(), Fb();
  }
}

var Lb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Mb(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Lb[a.type] : "textarea" === b ? !0 : !1;
}

function Nb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function Ob(a) {
  if (!Ra) return !1;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

function Pb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function Qb(a) {
  var b = Pb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function Rb(a) {
  a._valueTracker || (a._valueTracker = Qb(a));
}

function Sb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Pb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

var Tb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Tb.hasOwnProperty("ReactCurrentDispatcher") || (Tb.ReactCurrentDispatcher = {
  current: null
});
var Ub = /^(.*)[\\\/]/,
    z = "function" === typeof Symbol && Symbol["for"],
    Vb = z ? Symbol["for"]("react.element") : 60103,
    Wb = z ? Symbol["for"]("react.portal") : 60106,
    Xb = z ? Symbol["for"]("react.fragment") : 60107,
    Yb = z ? Symbol["for"]("react.strict_mode") : 60108,
    Zb = z ? Symbol["for"]("react.profiler") : 60114,
    $b = z ? Symbol["for"]("react.provider") : 60109,
    ac = z ? Symbol["for"]("react.context") : 60110,
    bc = z ? Symbol["for"]("react.concurrent_mode") : 60111,
    cc = z ? Symbol["for"]("react.forward_ref") : 60112,
    dc = z ? Symbol["for"]("react.suspense") : 60113,
    ec = z ? Symbol["for"]("react.memo") : 60115,
    fc = z ? Symbol["for"]("react.lazy") : 60116,
    gc = "function" === typeof Symbol && Symbol.iterator;

function hc(a) {
  if (null === a || "object" !== typeof a) return null;
  a = gc && a[gc] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function ic(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case bc:
      return "ConcurrentMode";

    case Xb:
      return "Fragment";

    case Wb:
      return "Portal";

    case Zb:
      return "Profiler";

    case Yb:
      return "StrictMode";

    case dc:
      return "Suspense";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case ac:
      return "Context.Consumer";

    case $b:
      return "Context.Provider";

    case cc:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case ec:
      return ic(a.type);

    case fc:
      if (a = 1 === a._status ? a._result : null) return ic(a);
  }
  return null;
}

function jc(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;

      default:
        var d = a._debugOwner,
            e = a._debugSource,
            f = ic(a.type);
        c = null;
        d && (c = ic(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Ub, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }

    b += c;
    a = a["return"];
  } while (a);

  return b;
}

var kc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lc = Object.prototype.hasOwnProperty,
    mc = {},
    nc = {};

function oc(a) {
  if (lc.call(nc, a)) return !0;
  if (lc.call(mc, a)) return !1;
  if (kc.test(a)) return nc[a] = !0;
  mc[a] = !0;
  return !1;
}

function pc(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function qc(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pc(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function C(a, b, c, d, e) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
}

var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  D[a] = new C(a, 0, !1, a, null);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  D[b] = new C(b, 1, !1, a[1], null);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  D[a] = new C(a, 2, !1, a.toLowerCase(), null);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  D[a] = new C(a, 2, !1, a, null);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  D[a] = new C(a, 3, !1, a.toLowerCase(), null);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  D[a] = new C(a, 3, !0, a, null);
});
["capture", "download"].forEach(function (a) {
  D[a] = new C(a, 4, !1, a, null);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  D[a] = new C(a, 6, !1, a, null);
});
["rowSpan", "start"].forEach(function (a) {
  D[a] = new C(a, 5, !1, a.toLowerCase(), null);
});
var rc = /[\-:]([a-z])/g;

function sc(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, null);
});
"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, "http://www.w3.org/1999/xlink");
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  D[a] = new C(a, 1, !1, a.toLowerCase(), null);
});

function tc(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (qc(b, c, e, d) && (c = null), d || null === e ? oc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

function uc(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function vc(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function wc(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = uc(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function xc(a, b) {
  b = b.checked;
  null != b && tc(a, "checked", b, !1);
}

function yc(a, b) {
  xc(a, b);
  var c = uc(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? zc(a, b.type, c) : b.hasOwnProperty("defaultValue") && zc(a, b.type, uc(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Ac(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !a.defaultChecked;
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function zc(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

var Bc = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function Cc(a, b, c) {
  a = y.getPooled(Bc.change, a, b, c);
  a.type = "change";
  Eb(c);
  Qa(a);
  return a;
}

var Dc = null,
    Ec = null;

function Fc(a) {
  Da(a);
}

function Gc(a) {
  var b = Ja(a);
  if (Sb(b)) return a;
}

function Hc(a, b) {
  if ("change" === a) return b;
}

var Ic = !1;
Ra && (Ic = Ob("input") && (!document.documentMode || 9 < document.documentMode));

function Jc() {
  Dc && (Dc.detachEvent("onpropertychange", Kc), Ec = Dc = null);
}

function Kc(a) {
  "value" === a.propertyName && Gc(Ec) && (a = Cc(Ec, a, Nb(a)), Kb(Fc, a));
}

function Lc(a, b, c) {
  "focus" === a ? (Jc(), Dc = b, Ec = c, Dc.attachEvent("onpropertychange", Kc)) : "blur" === a && Jc();
}

function Mc(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Gc(Ec);
}

function Nc(a, b) {
  if ("click" === a) return Gc(b);
}

function Oc(a, b) {
  if ("input" === a || "change" === a) return Gc(b);
}

var Pc = {
  eventTypes: Bc,
  _isInputEventSupported: Ic,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? Ja(b) : window,
        f = void 0,
        g = void 0,
        h = e.nodeName && e.nodeName.toLowerCase();
    "select" === h || "input" === h && "file" === e.type ? f = Hc : Mb(e) ? Ic ? f = Oc : (f = Mc, g = Lc) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Nc);
    if (f && (f = f(a, b))) return Cc(f, c, d);
    g && g(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && zc(e, "number", e.value);
  }
},
    Qc = y.extend({
  view: null,
  detail: null
}),
    Rc = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Sc(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Rc[a]) ? !!b[a] : !1;
}

function Tc() {
  return Sc;
}

var Uc = 0,
    Vc = 0,
    Wc = !1,
    Xc = !1,
    Yc = Qc.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: Tc,
  button: null,
  buttons: null,
  relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function movementX(a) {
    if ("movementX" in a) return a.movementX;
    var b = Uc;
    Uc = a.screenX;
    return Wc ? "mousemove" === a.type ? a.screenX - b : 0 : (Wc = !0, 0);
  },
  movementY: function movementY(a) {
    if ("movementY" in a) return a.movementY;
    var b = Vc;
    Vc = a.screenY;
    return Xc ? "mousemove" === a.type ? a.screenY - b : 0 : (Xc = !0, 0);
  }
}),
    Zc = Yc.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    $c = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    ad = {
  eventTypes: $c,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = "mouseover" === a || "pointerover" === a,
        f = "mouseout" === a || "pointerout" === a;
    if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;
    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;
    f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Ha(b) : null) : f = null;
    if (f === b) return null;
    var g = void 0,
        h = void 0,
        l = void 0,
        k = void 0;
    if ("mouseout" === a || "mouseover" === a) g = Yc, h = $c.mouseLeave, l = $c.mouseEnter, k = "mouse";else if ("pointerout" === a || "pointerover" === a) g = Zc, h = $c.pointerLeave, l = $c.pointerEnter, k = "pointer";
    var m = null == f ? e : Ja(f);
    e = null == b ? e : Ja(b);
    a = g.getPooled(h, f, c, d);
    a.type = k + "leave";
    a.target = m;
    a.relatedTarget = e;
    c = g.getPooled(l, b, c, d);
    c.type = k + "enter";
    c.target = e;
    c.relatedTarget = m;
    d = b;
    if (f && d) a: {
      b = f;
      e = d;
      k = 0;

      for (g = b; g; g = La(g)) {
        k++;
      }

      g = 0;

      for (l = e; l; l = La(l)) {
        g++;
      }

      for (; 0 < k - g;) {
        b = La(b), k--;
      }

      for (; 0 < g - k;) {
        e = La(e), g--;
      }

      for (; k--;) {
        if (b === e || b === e.alternate) break a;
        b = La(b);
        e = La(e);
      }

      b = null;
    } else b = null;
    e = b;

    for (b = []; f && f !== e;) {
      k = f.alternate;
      if (null !== k && k === e) break;
      b.push(f);
      f = La(f);
    }

    for (f = []; d && d !== e;) {
      k = d.alternate;
      if (null !== k && k === e) break;
      f.push(d);
      d = La(d);
    }

    for (d = 0; d < b.length; d++) {
      Oa(b[d], "bubbled", a);
    }

    for (d = f.length; 0 < d--;) {
      Oa(f[d], "captured", c);
    }

    return [a, c];
  }
};

function bd(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var cd = Object.prototype.hasOwnProperty;

function dd(a, b) {
  if (bd(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) {
    if (!cd.call(b, c[d]) || !bd(a[c[d]], b[c[d]])) return !1;
  }

  return !0;
}

function ed(a) {
  var b = a;
  if (a.alternate) for (; b["return"];) {
    b = b["return"];
  } else {
    if (0 !== (b.effectTag & 2)) return 1;

    for (; b["return"];) {
      if (b = b["return"], 0 !== (b.effectTag & 2)) return 1;
    }
  }
  return 3 === b.tag ? 2 : 3;
}

function fd(a) {
  2 !== ed(a) ? x("188") : void 0;
}

function gd(a) {
  var b = a.alternate;
  if (!b) return b = ed(a), 3 === b ? x("188") : void 0, 1 === b ? null : a;

  for (var c = a, d = b;;) {
    var e = c["return"],
        f = e ? e.alternate : null;
    if (!e || !f) break;

    if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return fd(e), a;
        if (g === d) return fd(e), b;
        g = g.sibling;
      }

      x("188");
    }

    if (c["return"] !== d["return"]) c = e, d = f;else {
      g = !1;

      for (var h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }

        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }

        h = h.sibling;
      }

      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }

          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }

          h = h.sibling;
        }

        g ? void 0 : x("189");
      }
    }
    c.alternate !== d ? x("190") : void 0;
  }

  3 !== c.tag ? x("188") : void 0;
  return c.stateNode.current === c ? a : b;
}

function hd(a) {
  a = gd(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child["return"] = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b["return"] || b["return"] === a) return null;
        b = b["return"];
      }

      b.sibling["return"] = b["return"];
      b = b.sibling;
    }
  }

  return null;
}

var id = y.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    jd = y.extend({
  clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    kd = Qc.extend({
  relatedTarget: null
});

function ld(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    od = Qc.extend({
  key: function key(a) {
    if (a.key) {
      var b = md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = ld(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? nd[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: Tc,
  charCode: function charCode(a) {
    return "keypress" === a.type ? ld(a) : 0;
  },
  keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function which(a) {
    return "keypress" === a.type ? ld(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    pd = Yc.extend({
  dataTransfer: null
}),
    qd = Qc.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: Tc
}),
    rd = y.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    sd = Yc.extend({
  deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    td = [["abort", "abort"], [Xa, "animationEnd"], [Ya, "animationIteration"], [Za, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [$a, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
    ud = {},
    vd = {};

function wd(a, b) {
  var c = a[0];
  a = a[1];
  var d = "on" + (a[0].toUpperCase() + a.slice(1));
  b = {
    phasedRegistrationNames: {
      bubbled: d,
      captured: d + "Capture"
    },
    dependencies: [c],
    isInteractive: b
  };
  ud[a] = b;
  vd[c] = b;
}

[["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function (a) {
  wd(a, !0);
});
td.forEach(function (a) {
  wd(a, !1);
});
var xd = {
  eventTypes: ud,
  isInteractiveTopLevelEventType: function isInteractiveTopLevelEventType(a) {
    a = vd[a];
    return void 0 !== a && !0 === a.isInteractive;
  },
  extractEvents: function extractEvents(a, b, c, d) {
    var e = vd[a];
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === ld(c)) return null;

      case "keydown":
      case "keyup":
        a = od;
        break;

      case "blur":
      case "focus":
        a = kd;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = Yc;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = pd;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = qd;
        break;

      case Xa:
      case Ya:
      case Za:
        a = id;
        break;

      case $a:
        a = rd;
        break;

      case "scroll":
        a = Qc;
        break;

      case "wheel":
        a = sd;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = jd;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = Zc;
        break;

      default:
        a = y;
    }

    b = a.getPooled(e, b, c, d);
    Qa(b);
    return b;
  }
},
    yd = xd.isInteractiveTopLevelEventType,
    zd = [];

function Ad(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d;

    for (d = c; d["return"];) {
      d = d["return"];
    }

    d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    if (!d) break;
    a.ancestors.push(c);
    c = Ha(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = Nb(a.nativeEvent);
    d = a.topLevelType;

    for (var f = a.nativeEvent, g = null, h = 0; h < oa.length; h++) {
      var l = oa[h];
      l && (l = l.extractEvents(d, b, f, e)) && (g = xa(g, l));
    }

    Da(g);
  }
}

var Bd = !0;

function E(a, b) {
  if (!b) return null;
  var c = (yd(a) ? Cd : Dd).bind(null, a);
  b.addEventListener(a, c, !1);
}

function Ed(a, b) {
  if (!b) return null;
  var c = (yd(a) ? Cd : Dd).bind(null, a);
  b.addEventListener(a, c, !0);
}

function Cd(a, b) {
  Hb(Dd, a, b);
}

function Dd(a, b) {
  if (Bd) {
    var c = Nb(b);
    c = Ha(c);
    null === c || "number" !== typeof c.tag || 2 === ed(c) || (c = null);

    if (zd.length) {
      var d = zd.pop();
      d.topLevelType = a;
      d.nativeEvent = b;
      d.targetInst = c;
      a = d;
    } else a = {
      topLevelType: a,
      nativeEvent: b,
      targetInst: c,
      ancestors: []
    };

    try {
      Kb(Ad, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > zd.length && zd.push(a);
    }
  }
}

var Fd = {},
    Gd = 0,
    Hd = "_reactListenersID" + ("" + Math.random()).slice(2);

function Id(a) {
  Object.prototype.hasOwnProperty.call(a, Hd) || (a[Hd] = Gd++, Fd[a[Hd]] = {});
  return Fd[a[Hd]];
}

function Jd(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function Kd(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }

  return a;
}

function Ld(a, b) {
  var c = Kd(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = Kd(c);
  }
}

function Md(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Md(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function Nd() {
  for (var a = window, b = Jd(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }

    if (c) a = b.contentWindow;else break;
    b = Jd(a.document);
  }

  return b;
}

function Od(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

function Pd() {
  var a = Nd();

  if (Od(a)) {
    if ("selectionStart" in a) var b = {
      start: a.selectionStart,
      end: a.selectionEnd
    };else a: {
      b = (b = a.ownerDocument) && b.defaultView || window;
      var c = b.getSelection && b.getSelection();

      if (c && 0 !== c.rangeCount) {
        b = c.anchorNode;
        var d = c.anchorOffset,
            e = c.focusNode;
        c = c.focusOffset;

        try {
          b.nodeType, e.nodeType;
        } catch (A) {
          b = null;
          break a;
        }

        var f = 0,
            g = -1,
            h = -1,
            l = 0,
            k = 0,
            m = a,
            p = null;

        b: for (;;) {
          for (var t;;) {
            m !== b || 0 !== d && 3 !== m.nodeType || (g = f + d);
            m !== e || 0 !== c && 3 !== m.nodeType || (h = f + c);
            3 === m.nodeType && (f += m.nodeValue.length);
            if (null === (t = m.firstChild)) break;
            p = m;
            m = t;
          }

          for (;;) {
            if (m === a) break b;
            p === b && ++l === d && (g = f);
            p === e && ++k === c && (h = f);
            if (null !== (t = m.nextSibling)) break;
            m = p;
            p = m.parentNode;
          }

          m = t;
        }

        b = -1 === g || -1 === h ? null : {
          start: g,
          end: h
        };
      } else b = null;
    }
    b = b || {
      start: 0,
      end: 0
    };
  } else b = null;

  return {
    focusedElem: a,
    selectionRange: b
  };
}

function Qd(a) {
  var b = Nd(),
      c = a.focusedElem,
      d = a.selectionRange;

  if (b !== c && c && c.ownerDocument && Md(c.ownerDocument.documentElement, c)) {
    if (null !== d && Od(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
      a = a.getSelection();
      var e = c.textContent.length,
          f = Math.min(d.start, e);
      d = void 0 === d.end ? f : Math.min(d.end, e);
      !a.extend && f > d && (e = d, d = f, f = e);
      e = Ld(c, f);
      var g = Ld(c, d);
      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
    }
    b = [];

    for (a = c; a = a.parentNode;) {
      1 === a.nodeType && b.push({
        element: a,
        left: a.scrollLeft,
        top: a.scrollTop
      });
    }

    "function" === typeof c.focus && c.focus();

    for (c = 0; c < b.length; c++) {
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
}

var Rd = Ra && "documentMode" in document && 11 >= document.documentMode,
    Sd = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    Td = null,
    Ud = null,
    Vd = null,
    Wd = !1;

function Xd(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (Wd || null == Td || Td !== Jd(c)) return null;
  c = Td;
  "selectionStart" in c && Od(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return Vd && dd(Vd, c) ? null : (Vd = c, a = y.getPooled(Sd.select, Ud, a, b), a.type = "select", a.target = Td, Qa(a), a);
}

var Yd = {
  eventTypes: Sd,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;

    if (!(f = !e)) {
      a: {
        e = Id(e);
        f = sa.onSelect;

        for (var g = 0; g < f.length; g++) {
          var h = f[g];

          if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;
            break a;
          }
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? Ja(b) : window;

    switch (a) {
      case "focus":
        if (Mb(e) || "true" === e.contentEditable) Td = e, Ud = b, Vd = null;
        break;

      case "blur":
        Vd = Ud = Td = null;
        break;

      case "mousedown":
        Wd = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return Wd = !1, Xd(c, d);

      case "selectionchange":
        if (Rd) break;

      case "keydown":
      case "keyup":
        return Xd(c, d);
    }

    return null;
  }
};
Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ta = Ka;
ua = Ia;
va = Ja;
Ba.injectEventPluginsByName({
  SimpleEventPlugin: xd,
  EnterLeaveEventPlugin: ad,
  ChangeEventPlugin: Pc,
  SelectEventPlugin: Yd,
  BeforeInputEventPlugin: zb
});

function Zd(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

function $d(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = Zd(b.children)) a.children = b;
  return a;
}

function ae(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }

    for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + uc(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function be(a, b) {
  null != b.dangerouslySetInnerHTML ? x("91") : void 0;
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function ce(a, b) {
  var c = b.value;
  null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? x("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : x("93"), b = b[0]), c = b), null == c && (c = ""));
  a._wrapperState = {
    initialValue: uc(c)
  };
}

function de(a, b) {
  var c = uc(b.value),
      d = uc(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function ee(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && (a.value = b);
}

var fe = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function ge(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function he(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? ge(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var ie = void 0,
    je = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== fe.svg || "innerHTML" in a) a.innerHTML = b;else {
    ie = ie || document.createElement("div");
    ie.innerHTML = "<svg>" + b + "</svg>";

    for (b = ie.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }

    for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});

function ke(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

var le = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    me = ["Webkit", "ms", "Moz", "O"];
Object.keys(le).forEach(function (a) {
  me.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    le[b] = le[a];
  });
});

function ne(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || le.hasOwnProperty(a) && le[a] ? ("" + b).trim() : b + "px";
}

function oe(a, b) {
  a = a.style;

  for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"),
          e = ne(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}

var pe = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function qe(a, b) {
  b && (pe[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? x("137", a, "") : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? x("60") : void 0, "object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML ? void 0 : x("61")), null != b.style && "object" !== typeof b.style ? x("62", "") : void 0);
}

function re(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

function se(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = Id(a);
  b = sa[b];

  for (var d = 0; d < b.length; d++) {
    var e = b[d];

    if (!c.hasOwnProperty(e) || !c[e]) {
      switch (e) {
        case "scroll":
          Ed("scroll", a);
          break;

        case "focus":
        case "blur":
          Ed("focus", a);
          Ed("blur", a);
          c.blur = !0;
          c.focus = !0;
          break;

        case "cancel":
        case "close":
          Ob(e) && Ed(e, a);
          break;

        case "invalid":
        case "submit":
        case "reset":
          break;

        default:
          -1 === ab.indexOf(e) && E(e, a);
      }

      c[e] = !0;
    }
  }
}

function te() {}

var ue = null,
    ve = null;

function we(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function xe(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var ye = "function" === typeof setTimeout ? setTimeout : void 0,
    ze = "function" === typeof clearTimeout ? clearTimeout : void 0,
    Ae = r.unstable_scheduleCallback,
    Be = r.unstable_cancelCallback;

function Ce(a, b, c, d, e) {
  a[Ga] = e;
  "input" === c && "radio" === e.type && null != e.name && xc(a, e);
  re(c, d);
  d = re(c, e);

  for (var f = 0; f < b.length; f += 2) {
    var g = b[f],
        h = b[f + 1];
    "style" === g ? oe(a, h) : "dangerouslySetInnerHTML" === g ? je(a, h) : "children" === g ? ke(a, h) : tc(a, g, h, d);
  }

  switch (c) {
    case "input":
      yc(a, e);
      break;

    case "textarea":
      de(a, e);
      break;

    case "select":
      b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? ae(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? ae(a, !!e.multiple, e.defaultValue, !0) : ae(a, !!e.multiple, e.multiple ? [] : "", !1));
  }
}

function De(a) {
  for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

function Ee(a) {
  for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

new Set();
var Fe = [],
    Ge = -1;

function F(a) {
  0 > Ge || (a.current = Fe[Ge], Fe[Ge] = null, Ge--);
}

function G(a, b) {
  Ge++;
  Fe[Ge] = a.current;
  a.current = b;
}

var He = {},
    H = {
  current: He
},
    I = {
  current: !1
},
    Ie = He;

function Je(a, b) {
  var c = a.type.contextTypes;
  if (!c) return He;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) {
    e[f] = b[f];
  }

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function J(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function Ke(a) {
  F(I, a);
  F(H, a);
}

function Le(a) {
  F(I, a);
  F(H, a);
}

function Me(a, b, c) {
  H.current !== He ? x("168") : void 0;
  G(H, b, a);
  G(I, c, a);
}

function Ne(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) {
    e in a ? void 0 : x("108", ic(b) || "Unknown", e);
  }

  return n({}, c, d);
}

function Oe(a) {
  var b = a.stateNode;
  b = b && b.__reactInternalMemoizedMergedChildContext || He;
  Ie = H.current;
  G(H, b, a);
  G(I, I.current, a);
  return !0;
}

function Pe(a, b, c) {
  var d = a.stateNode;
  d ? void 0 : x("169");
  c ? (b = Ne(a, b, Ie), d.__reactInternalMemoizedMergedChildContext = b, F(I, a), F(H, a), G(H, b, a)) : F(I, a);
  G(I, c, a);
}

var Qe = null,
    Re = null;

function Se(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}

function Te(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);
    Qe = Se(function (a) {
      return b.onCommitFiberRoot(c, a);
    });
    Re = Se(function (a) {
      return b.onCommitFiberUnmount(c, a);
    });
  } catch (d) {}

  return !0;
}

function Ue(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function K(a, b, c, d) {
  return new Ue(a, b, c, d);
}

function Ve(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function We(a) {
  if ("function" === typeof a) return Ve(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === cc) return 11;
    if (a === ec) return 14;
  }

  return 2;
}

function Xe(a, b) {
  var c = a.alternate;
  null === c ? (c = K(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  c.contextDependencies = a.contextDependencies;
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function Ye(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) Ve(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case Xb:
      return Ze(c.children, e, f, b);

    case bc:
      return $e(c, e | 3, f, b);

    case Yb:
      return $e(c, e | 2, f, b);

    case Zb:
      return a = K(12, c, b, e | 4), a.elementType = Zb, a.type = Zb, a.expirationTime = f, a;

    case dc:
      return a = K(13, c, b, e), a.elementType = dc, a.type = dc, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case $b:
          g = 10;
          break a;

        case ac:
          g = 9;
          break a;

        case cc:
          g = 11;
          break a;

        case ec:
          g = 14;
          break a;

        case fc:
          g = 16;
          d = null;
          break a;
      }
      x("130", null == a ? a : typeof a, "");
  }
  b = K(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function Ze(a, b, c, d) {
  a = K(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function $e(a, b, c, d) {
  a = K(8, a, d, b);
  b = 0 === (b & 1) ? Yb : bc;
  a.elementType = b;
  a.type = b;
  a.expirationTime = c;
  return a;
}

function af(a, b, c) {
  a = K(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function bf(a, b, c) {
  b = K(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function cf(a, b) {
  a.didError = !1;
  var c = a.earliestPendingTime;
  0 === c ? a.earliestPendingTime = a.latestPendingTime = b : c < b ? a.earliestPendingTime = b : a.latestPendingTime > b && (a.latestPendingTime = b);
  df(b, a);
}

function ef(a, b) {
  a.didError = !1;
  if (0 === b) a.earliestPendingTime = 0, a.latestPendingTime = 0, a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0;else {
    b < a.latestPingedTime && (a.latestPingedTime = 0);
    var c = a.latestPendingTime;
    0 !== c && (c > b ? a.earliestPendingTime = a.latestPendingTime = 0 : a.earliestPendingTime > b && (a.earliestPendingTime = a.latestPendingTime));
    c = a.earliestSuspendedTime;
    0 === c ? cf(a, b) : b < a.latestSuspendedTime ? (a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0, cf(a, b)) : b > c && cf(a, b);
  }
  df(0, a);
}

function ff(a, b) {
  a.didError = !1;
  a.latestPingedTime >= b && (a.latestPingedTime = 0);
  var c = a.earliestPendingTime,
      d = a.latestPendingTime;
  c === b ? a.earliestPendingTime = d === b ? a.latestPendingTime = 0 : d : d === b && (a.latestPendingTime = c);
  c = a.earliestSuspendedTime;
  d = a.latestSuspendedTime;
  0 === c ? a.earliestSuspendedTime = a.latestSuspendedTime = b : c < b ? a.earliestSuspendedTime = b : d > b && (a.latestSuspendedTime = b);
  df(b, a);
}

function gf(a, b) {
  var c = a.earliestPendingTime;
  a = a.earliestSuspendedTime;
  c > b && (b = c);
  a > b && (b = a);
  return b;
}

function df(a, b) {
  var c = b.earliestSuspendedTime,
      d = b.latestSuspendedTime,
      e = b.earliestPendingTime,
      f = b.latestPingedTime;
  e = 0 !== e ? e : f;
  0 === e && (0 === a || d < a) && (e = d);
  a = e;
  0 !== a && c > a && (a = c);
  b.nextExpirationTimeToWorkOn = e;
  b.expirationTime = a;
}

function L(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;

    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }

  return b;
}

function hf(a) {
  var b = a._result;

  switch (a._status) {
    case 1:
      return b;

    case 2:
      throw b;

    case 0:
      throw b;

    default:
      a._status = 0;
      b = a._ctor;
      b = b();
      b.then(function (b) {
        0 === a._status && (b = b["default"], a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });

      switch (a._status) {
        case 1:
          return a._result;

        case 2:
          throw a._result;
      }

      a._result = b;
      throw b;
  }
}

var jf = new aa.Component().refs;

function kf(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  d = a.updateQueue;
  null !== d && 0 === a.expirationTime && (d.baseState = c);
}

var tf = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? 2 === ed(a) : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;
    var d = lf();
    d = mf(d, a);
    var e = nf(d);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    of();
    pf(a, e);
    qf(a, d);
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;
    var d = lf();
    d = mf(d, a);
    var e = nf(d);
    e.tag = rf;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    of();
    pf(a, e);
    qf(a, d);
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;
    var c = lf();
    c = mf(c, a);
    var d = nf(c);
    d.tag = sf;
    void 0 !== b && null !== b && (d.callback = b);
    of();
    pf(a, d);
    qf(a, c);
  }
};

function uf(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !dd(c, d) || !dd(e, f) : !0;
}

function vf(a, b, c) {
  var d = !1,
      e = He;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = M(f) : (e = J(b) ? Ie : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Je(a, e) : He);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = tf;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function wf(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && tf.enqueueReplaceState(b, b.state, null);
}

function xf(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = M(f) : (f = J(b) ? Ie : H.current, e.context = Je(a, f));
  f = a.updateQueue;
  null !== f && (yf(a, f, c, e, d), e.state = a.memoizedState);
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (kf(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && tf.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (yf(a, f, c, e, d), e.state = a.memoizedState));
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var zf = Array.isArray;

function Af(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      var d = void 0;
      c && (1 !== c.tag ? x("309") : void 0, d = c.stateNode);
      d ? void 0 : x("147", a);
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function b(a) {
        var b = d.refs;
        b === jf && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    "string" !== typeof a ? x("284") : void 0;
    c._owner ? void 0 : x("290", a);
  }

  return a;
}

function Bf(a, b) {
  "textarea" !== a.type && x("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}

function Cf(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) {
      b(c, d), d = d.sibling;
    }

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }

    return a;
  }

  function e(a, b, c) {
    a = Xe(a, b, c);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }

  function g(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }

  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = af(c, a.mode, d), b["return"] = a, b;
    b = e(b, c, d);
    b["return"] = a;
    return b;
  }

  function l(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = Af(a, b, c), d["return"] = a, d;
    d = Ye(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Af(a, b, c);
    d["return"] = a;
    return d;
  }

  function k(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = bf(c, a.mode, d), b["return"] = a, b;
    b = e(b, c.children || [], d);
    b["return"] = a;
    return b;
  }

  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Ze(c, a.mode, d, f), b["return"] = a, b;
    b = e(b, c, d);
    b["return"] = a;
    return b;
  }

  function p(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = af("" + b, a.mode, c), b["return"] = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Vb:
          return c = Ye(b.type, b.key, b.props, null, a.mode, c), c.ref = Af(a, null, b), c["return"] = a, c;

        case Wb:
          return b = bf(b, a.mode, c), b["return"] = a, b;
      }

      if (zf(b) || hc(b)) return b = Ze(b, a.mode, c, null), b["return"] = a, b;
      Bf(a, b);
    }

    return null;
  }

  function t(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Vb:
          return c.key === e ? c.type === Xb ? m(a, b, c.props.children, d, e) : l(a, b, c, d) : null;

        case Wb:
          return c.key === e ? k(a, b, c, d) : null;
      }

      if (zf(c) || hc(c)) return null !== e ? null : m(a, b, c, d, null);
      Bf(a, c);
    }

    return null;
  }

  function A(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Vb:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === Xb ? m(b, a, d.props.children, e, d.key) : l(b, a, d, e);

        case Wb:
          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
      }

      if (zf(d) || hc(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Bf(b, d);
    }

    return null;
  }

  function v(e, g, h, k) {
    for (var l = null, m = null, q = g, u = g = 0, B = null; null !== q && u < h.length; u++) {
      q.index > u ? (B = q, q = null) : B = q.sibling;
      var w = t(e, q, h[u], k);

      if (null === w) {
        null === q && (q = B);
        break;
      }

      a && q && null === w.alternate && b(e, q);
      g = f(w, g, u);
      null === m ? l = w : m.sibling = w;
      m = w;
      q = B;
    }

    if (u === h.length) return c(e, q), l;

    if (null === q) {
      for (; u < h.length; u++) {
        if (q = p(e, h[u], k)) g = f(q, g, u), null === m ? l = q : m.sibling = q, m = q;
      }

      return l;
    }

    for (q = d(e, q); u < h.length; u++) {
      if (B = A(q, e, u, h[u], k)) a && null !== B.alternate && q["delete"](null === B.key ? u : B.key), g = f(B, g, u), null === m ? l = B : m.sibling = B, m = B;
    }

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  function R(e, g, h, k) {
    var l = hc(h);
    "function" !== typeof l ? x("150") : void 0;
    h = l.call(h);
    null == h ? x("151") : void 0;

    for (var m = l = null, q = g, u = g = 0, B = null, w = h.next(); null !== q && !w.done; u++, w = h.next()) {
      q.index > u ? (B = q, q = null) : B = q.sibling;
      var v = t(e, q, w.value, k);

      if (null === v) {
        q || (q = B);
        break;
      }

      a && q && null === v.alternate && b(e, q);
      g = f(v, g, u);
      null === m ? l = v : m.sibling = v;
      m = v;
      q = B;
    }

    if (w.done) return c(e, q), l;

    if (null === q) {
      for (; !w.done; u++, w = h.next()) {
        w = p(e, w.value, k), null !== w && (g = f(w, g, u), null === m ? l = w : m.sibling = w, m = w);
      }

      return l;
    }

    for (q = d(e, q); !w.done; u++, w = h.next()) {
      w = A(q, e, u, w.value, k), null !== w && (a && null !== w.alternate && q["delete"](null === w.key ? u : w.key), g = f(w, g, u), null === m ? l = w : m.sibling = w, m = w);
    }

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === Xb && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Vb:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === Xb : k.elementType === f.type) {
                c(a, k.sibling);
                d = e(k, f.type === Xb ? f.props.children : f.props, h);
                d.ref = Af(a, k, f);
                d["return"] = a;
                a = d;
                break a;
              } else {
                c(a, k);
                break;
              }
            } else b(a, k);
            k = k.sibling;
          }

          f.type === Xb ? (d = Ze(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = Ye(f.type, f.key, f.props, null, a.mode, h), h.ref = Af(a, d, f), h["return"] = a, a = h);
        }

        return g(a);

      case Wb:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || [], h);
                d["return"] = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              }
            } else b(a, d);
            d = d.sibling;
          }

          d = bf(f, a.mode, h);
          d["return"] = a;
          a = d;
        }

        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d["return"] = a, a = d) : (c(a, d), d = af(f, a.mode, h), d["return"] = a, a = d), g(a);
    if (zf(f)) return v(a, d, f, h);
    if (hc(f)) return R(a, d, f, h);
    l && Bf(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        h = a.type, x("152", h.displayName || h.name || "Component");
    }
    return c(a, d);
  };
}

var Df = Cf(!0),
    Ef = Cf(!1),
    Ff = {},
    N = {
  current: Ff
},
    Gf = {
  current: Ff
},
    Hf = {
  current: Ff
};

function If(a) {
  a === Ff ? x("174") : void 0;
  return a;
}

function Jf(a, b) {
  G(Hf, b, a);
  G(Gf, a, a);
  G(N, Ff, a);
  var c = b.nodeType;

  switch (c) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : he(null, "");
      break;

    default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = he(b, c);
  }

  F(N, a);
  G(N, b, a);
}

function Kf(a) {
  F(N, a);
  F(Gf, a);
  F(Hf, a);
}

function Lf(a) {
  If(Hf.current);
  var b = If(N.current);
  var c = he(b, a.type);
  b !== c && (G(Gf, a, a), G(N, c, a));
}

function Mf(a) {
  Gf.current === a && (F(N, a), F(Gf, a));
}

var Nf = 0,
    Of = 2,
    Pf = 4,
    Qf = 8,
    Rf = 16,
    Sf = 32,
    Tf = 64,
    Uf = 128,
    Vf = Tb.ReactCurrentDispatcher,
    Wf = 0,
    Xf = null,
    O = null,
    P = null,
    Yf = null,
    Q = null,
    Zf = null,
    $f = 0,
    ag = null,
    bg = 0,
    cg = !1,
    dg = null,
    eg = 0;

function fg() {
  x("321");
}

function gg(a, b) {
  if (null === b) return !1;

  for (var c = 0; c < b.length && c < a.length; c++) {
    if (!bd(a[c], b[c])) return !1;
  }

  return !0;
}

function hg(a, b, c, d, e, f) {
  Wf = f;
  Xf = b;
  P = null !== a ? a.memoizedState : null;
  Vf.current = null === P ? ig : jg;
  b = c(d, e);

  if (cg) {
    do {
      cg = !1, eg += 1, P = null !== a ? a.memoizedState : null, Zf = Yf, ag = Q = O = null, Vf.current = jg, b = c(d, e);
    } while (cg);

    dg = null;
    eg = 0;
  }

  Vf.current = kg;
  a = Xf;
  a.memoizedState = Yf;
  a.expirationTime = $f;
  a.updateQueue = ag;
  a.effectTag |= bg;
  a = null !== O && null !== O.next;
  Wf = 0;
  Zf = Q = Yf = P = O = Xf = null;
  $f = 0;
  ag = null;
  bg = 0;
  a ? x("300") : void 0;
  return b;
}

function lg() {
  Vf.current = kg;
  Wf = 0;
  Zf = Q = Yf = P = O = Xf = null;
  $f = 0;
  ag = null;
  bg = 0;
  cg = !1;
  dg = null;
  eg = 0;
}

function mg() {
  var a = {
    memoizedState: null,
    baseState: null,
    queue: null,
    baseUpdate: null,
    next: null
  };
  null === Q ? Yf = Q = a : Q = Q.next = a;
  return Q;
}

function ng() {
  if (null !== Zf) Q = Zf, Zf = Q.next, O = P, P = null !== O ? O.next : null;else {
    null === P ? x("310") : void 0;
    O = P;
    var a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      queue: O.queue,
      baseUpdate: O.baseUpdate,
      next: null
    };
    Q = null === Q ? Yf = a : Q.next = a;
    P = O.next;
  }
  return Q;
}

function og(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function pg(a) {
  var b = ng(),
      c = b.queue;
  null === c ? x("311") : void 0;
  c.lastRenderedReducer = a;

  if (0 < eg) {
    var d = c.dispatch;

    if (null !== dg) {
      var e = dg.get(c);

      if (void 0 !== e) {
        dg["delete"](c);
        var f = b.memoizedState;

        do {
          f = a(f, e.action), e = e.next;
        } while (null !== e);

        bd(f, b.memoizedState) || (qg = !0);
        b.memoizedState = f;
        b.baseUpdate === c.last && (b.baseState = f);
        c.lastRenderedState = f;
        return [f, d];
      }
    }

    return [b.memoizedState, d];
  }

  d = c.last;
  var g = b.baseUpdate;
  f = b.baseState;
  null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;

  if (null !== d) {
    var h = e = null,
        l = d,
        k = !1;

    do {
      var m = l.expirationTime;
      m < Wf ? (k || (k = !0, h = g, e = f), m > $f && ($f = m)) : f = l.eagerReducer === a ? l.eagerState : a(f, l.action);
      g = l;
      l = l.next;
    } while (null !== l && l !== d);

    k || (h = g, e = f);
    bd(f, b.memoizedState) || (qg = !0);
    b.memoizedState = f;
    b.baseUpdate = h;
    b.baseState = e;
    c.lastRenderedState = f;
  }

  return [b.memoizedState, c.dispatch];
}

function rg(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  null === ag ? (ag = {
    lastEffect: null
  }, ag.lastEffect = a.next = a) : (b = ag.lastEffect, null === b ? ag.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, ag.lastEffect = a));
  return a;
}

function sg(a, b, c, d) {
  var e = mg();
  bg |= a;
  e.memoizedState = rg(b, c, void 0, void 0 === d ? null : d);
}

function tg(a, b, c, d) {
  var e = ng();
  d = void 0 === d ? null : d;
  var f = void 0;

  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;

    if (null !== d && gg(d, g.deps)) {
      rg(Nf, c, f, d);
      return;
    }
  }

  bg |= a;
  e.memoizedState = rg(b, c, f, d);
}

function ug(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}

function vg() {}

function wg(a, b, c) {
  25 > eg ? void 0 : x("301");
  var d = a.alternate;
  if (a === Xf || null !== d && d === Xf) {
    if (cg = !0, a = {
      expirationTime: Wf,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, null === dg && (dg = new Map()), c = dg.get(b), void 0 === c) dg.set(b, a);else {
      for (b = c; null !== b.next;) {
        b = b.next;
      }

      b.next = a;
    }
  } else {
    of();
    var e = lf();
    e = mf(e, a);
    var f = {
      expirationTime: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.last;
    if (null === g) f.next = f;else {
      var h = g.next;
      null !== h && (f.next = h);
      g.next = f;
    }
    b.last = f;
    if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
      var l = b.lastRenderedState,
          k = d(l, c);
      f.eagerReducer = d;
      f.eagerState = k;
      if (bd(k, l)) return;
    } catch (m) {} finally {}
    qf(a, e);
  }
}

var kg = {
  readContext: M,
  useCallback: fg,
  useContext: fg,
  useEffect: fg,
  useImperativeHandle: fg,
  useLayoutEffect: fg,
  useMemo: fg,
  useReducer: fg,
  useRef: fg,
  useState: fg,
  useDebugValue: fg
},
    ig = {
  readContext: M,
  useCallback: function useCallback(a, b) {
    mg().memoizedState = [a, void 0 === b ? null : b];
    return a;
  },
  useContext: M,
  useEffect: function useEffect(a, b) {
    return sg(516, Uf | Tf, a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return sg(4, Pf | Sf, ug.bind(null, b, a), c);
  },
  useLayoutEffect: function useLayoutEffect(a, b) {
    return sg(4, Pf | Sf, a, b);
  },
  useMemo: function useMemo(a, b) {
    var c = mg();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function useReducer(a, b, c) {
    var d = mg();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = wg.bind(null, Xf, a);
    return [d.memoizedState, a];
  },
  useRef: function useRef(a) {
    var b = mg();
    a = {
      current: a
    };
    return b.memoizedState = a;
  },
  useState: function useState(a) {
    var b = mg();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: og,
      lastRenderedState: a
    };
    a = a.dispatch = wg.bind(null, Xf, a);
    return [b.memoizedState, a];
  },
  useDebugValue: vg
},
    jg = {
  readContext: M,
  useCallback: function useCallback(a, b) {
    var c = ng();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && gg(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  },
  useContext: M,
  useEffect: function useEffect(a, b) {
    return tg(516, Uf | Tf, a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return tg(4, Pf | Sf, ug.bind(null, b, a), c);
  },
  useLayoutEffect: function useLayoutEffect(a, b) {
    return tg(4, Pf | Sf, a, b);
  },
  useMemo: function useMemo(a, b) {
    var c = ng();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && gg(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: pg,
  useRef: function useRef() {
    return ng().memoizedState;
  },
  useState: function useState(a) {
    return pg(og, a);
  },
  useDebugValue: vg
},
    xg = null,
    yg = null,
    zg = !1;

function Ag(a, b) {
  var c = K(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c["return"] = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function Bg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    case 13:
      return !1;

    default:
      return !1;
  }
}

function Cg(a) {
  if (zg) {
    var b = yg;

    if (b) {
      var c = b;

      if (!Bg(a, b)) {
        b = De(c);

        if (!b || !Bg(a, b)) {
          a.effectTag |= 2;
          zg = !1;
          xg = a;
          return;
        }

        Ag(xg, c);
      }

      xg = a;
      yg = Ee(b);
    } else a.effectTag |= 2, zg = !1, xg = a;
  }
}

function Dg(a) {
  for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 18 !== a.tag;) {
    a = a["return"];
  }

  xg = a;
}

function Eg(a) {
  if (a !== xg) return !1;
  if (!zg) return Dg(a), zg = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !xe(b, a.memoizedProps)) for (b = yg; b;) {
    Ag(a, b), b = De(b);
  }
  Dg(a);
  yg = xg ? De(a.stateNode) : null;
  return !0;
}

function Fg() {
  yg = xg = null;
  zg = !1;
}

var Gg = Tb.ReactCurrentOwner,
    qg = !1;

function S(a, b, c, d) {
  b.child = null === a ? Ef(b, null, c, d) : Df(b, a.child, c, d);
}

function Hg(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Ig(b, e);
  d = hg(a, b, c, d, f, e);
  if (null !== a && !qg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Jg(a, b, e);
  b.effectTag |= 1;
  S(a, b, d, e);
  return b.child;
}

function Kg(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !Ve(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Lg(a, b, g, d, e, f);
    a = Ye(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a["return"] = b;
    return b.child = a;
  }

  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : dd, c(e, d) && a.ref === b.ref)) return Jg(a, b, f);
  b.effectTag |= 1;
  a = Xe(g, d, f);
  a.ref = b.ref;
  a["return"] = b;
  return b.child = a;
}

function Lg(a, b, c, d, e, f) {
  return null !== a && dd(a.memoizedProps, d) && a.ref === b.ref && (qg = !1, e < f) ? Jg(a, b, f) : Mg(a, b, c, d, f);
}

function Ng(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function Mg(a, b, c, d, e) {
  var f = J(c) ? Ie : H.current;
  f = Je(b, f);
  Ig(b, e);
  c = hg(a, b, c, d, f, e);
  if (null !== a && !qg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Jg(a, b, e);
  b.effectTag |= 1;
  S(a, b, c, e);
  return b.child;
}

function Og(a, b, c, d, e) {
  if (J(c)) {
    var f = !0;
    Oe(b);
  } else f = !1;

  Ig(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), vf(b, c, d, e), xf(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;
    g.props = h;
    var l = g.context,
        k = c.contextType;
    "object" === typeof k && null !== k ? k = M(k) : (k = J(c) ? Ie : H.current, k = Je(b, k));
    var m = c.getDerivedStateFromProps,
        p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || l !== k) && wf(b, g, d, k);
    Pg = !1;
    var t = b.memoizedState;
    l = g.state = t;
    var A = b.updateQueue;
    null !== A && (yf(b, A, d, g, e), l = b.memoizedState);
    h !== d || t !== l || I.current || Pg ? ("function" === typeof m && (kf(b, c, m, d), l = b.memoizedState), (h = Pg || uf(b, c, h, d, t, l, k)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = l), g.props = d, g.state = l, g.context = k, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, h = b.memoizedProps, g.props = b.type === b.elementType ? h : L(b.type, h), l = g.context, k = c.contextType, "object" === typeof k && null !== k ? k = M(k) : (k = J(c) ? Ie : H.current, k = Je(b, k)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || l !== k) && wf(b, g, d, k), Pg = !1, l = b.memoizedState, t = g.state = l, A = b.updateQueue, null !== A && (yf(b, A, d, g, e), t = b.memoizedState), h !== d || l !== t || I.current || Pg ? ("function" === typeof m && (kf(b, c, m, d), t = b.memoizedState), (m = Pg || uf(b, c, h, d, l, t, k)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, t, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, t, k)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = t), g.props = d, g.state = t, g.context = k, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 256), d = !1);
  return Qg(a, b, c, d, f, e);
}

function Qg(a, b, c, d, e, f) {
  Ng(a, b);
  var g = 0 !== (b.effectTag & 64);
  if (!d && !g) return e && Pe(b, c, !1), Jg(a, b, f);
  d = b.stateNode;
  Gg.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = Df(b, a.child, null, f), b.child = Df(b, null, h, f)) : S(a, b, h, f);
  b.memoizedState = d.state;
  e && Pe(b, c, !0);
  return b.child;
}

function Rg(a) {
  var b = a.stateNode;
  b.pendingContext ? Me(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Me(a, b.context, !1);
  Jf(a, b.containerInfo);
}

function Sg(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = b.memoizedState;

  if (0 === (b.effectTag & 64)) {
    f = null;
    var g = !1;
  } else f = {
    timedOutAt: null !== f ? f.timedOutAt : 0
  }, g = !0, b.effectTag &= -65;

  if (null === a) {
    if (g) {
      var h = e.fallback;
      a = Ze(null, d, 0, null);
      0 === (b.mode & 1) && (a.child = null !== b.memoizedState ? b.child.child : b.child);
      d = Ze(h, d, c, null);
      a.sibling = d;
      c = a;
      c["return"] = d["return"] = b;
    } else c = d = Ef(b, null, e.children, c);
  } else null !== a.memoizedState ? (d = a.child, h = d.sibling, g ? (c = e.fallback, e = Xe(d, d.pendingProps, 0), 0 === (b.mode & 1) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== d.child && (e.child = g)), d = e.sibling = Xe(h, c, h.expirationTime), c = e, e.childExpirationTime = 0, c["return"] = d["return"] = b) : c = d = Df(b, d.child, e.children, c)) : (h = a.child, g ? (g = e.fallback, e = Ze(null, d, 0, null), e.child = h, 0 === (b.mode & 1) && (e.child = null !== b.memoizedState ? b.child.child : b.child), d = e.sibling = Ze(g, d, c, null), d.effectTag |= 2, c = e, e.childExpirationTime = 0, c["return"] = d["return"] = b) : d = c = Df(b, h, e.children, c)), b.stateNode = a.stateNode;
  b.memoizedState = f;
  b.child = c;
  return d;
}

function Jg(a, b, c) {
  null !== a && (b.contextDependencies = a.contextDependencies);
  if (b.childExpirationTime < c) return null;
  null !== a && b.child !== a.child ? x("153") : void 0;

  if (null !== b.child) {
    a = b.child;
    c = Xe(a, a.pendingProps, a.expirationTime);
    b.child = c;

    for (c["return"] = b; null !== a.sibling;) {
      a = a.sibling, c = c.sibling = Xe(a, a.pendingProps, a.expirationTime), c["return"] = b;
    }

    c.sibling = null;
  }

  return b.child;
}

function Tg(a, b, c) {
  var d = b.expirationTime;
  if (null !== a) {
    if (a.memoizedProps !== b.pendingProps || I.current) qg = !0;else {
      if (d < c) {
        qg = !1;

        switch (b.tag) {
          case 3:
            Rg(b);
            Fg();
            break;

          case 5:
            Lf(b);
            break;

          case 1:
            J(b.type) && Oe(b);
            break;

          case 4:
            Jf(b, b.stateNode.containerInfo);
            break;

          case 10:
            Ug(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              d = b.child.childExpirationTime;
              if (0 !== d && d >= c) return Sg(a, b, c);
              b = Jg(a, b, c);
              return null !== b ? b.sibling : null;
            }

        }

        return Jg(a, b, c);
      }
    }
  } else qg = !1;
  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      var e = Je(b, H.current);
      Ig(b, c);
      e = hg(null, b, d, a, e, c);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        lg();

        if (J(d)) {
          var f = !0;
          Oe(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && kf(b, d, g, a);
        e.updater = tf;
        b.stateNode = e;
        e._reactInternalFiber = b;
        xf(b, d, a, c);
        b = Qg(null, b, d, !0, f, c);
      } else b.tag = 0, S(null, b, e, c), b = b.child;

      return b;

    case 16:
      e = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      f = b.pendingProps;
      a = hf(e);
      b.type = a;
      e = b.tag = We(a);
      f = L(a, f);
      g = void 0;

      switch (e) {
        case 0:
          g = Mg(null, b, a, f, c);
          break;

        case 1:
          g = Og(null, b, a, f, c);
          break;

        case 11:
          g = Hg(null, b, a, f, c);
          break;

        case 14:
          g = Kg(null, b, a, L(a.type, f), d, c);
          break;

        default:
          x("306", a, "");
      }

      return g;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Mg(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Og(a, b, d, e, c);

    case 3:
      Rg(b);
      d = b.updateQueue;
      null === d ? x("282") : void 0;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      yf(b, d, b.pendingProps, null, c);
      d = b.memoizedState.element;
      if (d === e) Fg(), b = Jg(a, b, c);else {
        e = b.stateNode;
        if (e = (null === a || null === a.child) && e.hydrate) yg = Ee(b.stateNode.containerInfo), xg = b, e = zg = !0;
        e ? (b.effectTag |= 2, b.child = Ef(b, null, d, c)) : (S(a, b, d, c), Fg());
        b = b.child;
      }
      return b;

    case 5:
      return Lf(b), null === a && Cg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, xe(d, e) ? g = null : null !== f && xe(d, f) && (b.effectTag |= 16), Ng(a, b), 1 !== c && b.mode & 1 && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (S(a, b, g, c), b = b.child), b;

    case 6:
      return null === a && Cg(b), null;

    case 13:
      return Sg(a, b, c);

    case 4:
      return Jf(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Df(b, null, d, c) : S(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Hg(a, b, d, e, c);

    case 7:
      return S(a, b, b.pendingProps, c), b.child;

    case 8:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        Ug(b, f);

        if (null !== g) {
          var h = g.value;
          f = bd(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

          if (0 === f) {
            if (g.children === e.children && !I.current) {
              b = Jg(a, b, c);
              break a;
            }
          } else for (h = b.child, null !== h && (h["return"] = b); null !== h;) {
            var l = h.contextDependencies;

            if (null !== l) {
              g = h.child;

              for (var k = l.first; null !== k;) {
                if (k.context === d && 0 !== (k.observedBits & f)) {
                  1 === h.tag && (k = nf(c), k.tag = sf, pf(h, k));
                  h.expirationTime < c && (h.expirationTime = c);
                  k = h.alternate;
                  null !== k && k.expirationTime < c && (k.expirationTime = c);
                  k = c;

                  for (var m = h["return"]; null !== m;) {
                    var p = m.alternate;
                    if (m.childExpirationTime < k) m.childExpirationTime = k, null !== p && p.childExpirationTime < k && (p.childExpirationTime = k);else if (null !== p && p.childExpirationTime < k) p.childExpirationTime = k;else break;
                    m = m["return"];
                  }

                  l.expirationTime < c && (l.expirationTime = c);
                  break;
                }

                k = k.next;
              }
            } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

            if (null !== g) g["return"] = h;else for (g = h; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              h = g.sibling;

              if (null !== h) {
                h["return"] = g["return"];
                g = h;
                break;
              }

              g = g["return"];
            }
            h = g;
          }
        }

        S(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, Ig(b, c), e = M(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, S(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = L(e, b.pendingProps), f = L(e.type, f), Kg(a, b, e, f, d, c);

    case 15:
      return Lg(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, J(d) ? (a = !0, Oe(b)) : a = !1, Ig(b, c), vf(b, d, e, c), xf(b, d, e, c), Qg(null, b, d, !0, a, c);
  }

  x("156");
}

var Vg = {
  current: null
},
    Wg = null,
    Xg = null,
    Yg = null;

function Ug(a, b) {
  var c = a.type._context;
  G(Vg, c._currentValue, a);
  c._currentValue = b;
}

function Zg(a) {
  var b = Vg.current;
  F(Vg, a);
  a.type._context._currentValue = b;
}

function Ig(a, b) {
  Wg = a;
  Yg = Xg = null;
  var c = a.contextDependencies;
  null !== c && c.expirationTime >= b && (qg = !0);
  a.contextDependencies = null;
}

function M(a, b) {
  if (Yg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) Yg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };
    null === Xg ? (null === Wg ? x("308") : void 0, Xg = b, Wg.contextDependencies = {
      first: b,
      expirationTime: 0
    }) : Xg = Xg.next = b;
  }

  return a._currentValue;
}

var $g = 0,
    rf = 1,
    sf = 2,
    ah = 3,
    Pg = !1;

function bh(a) {
  return {
    baseState: a,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function ch(a) {
  return {
    baseState: a.baseState,
    firstUpdate: a.firstUpdate,
    lastUpdate: a.lastUpdate,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function nf(a) {
  return {
    expirationTime: a,
    tag: $g,
    payload: null,
    callback: null,
    next: null,
    nextEffect: null
  };
}

function dh(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}

function pf(a, b) {
  var c = a.alternate;

  if (null === c) {
    var d = a.updateQueue;
    var e = null;
    null === d && (d = a.updateQueue = bh(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = bh(a.memoizedState), e = c.updateQueue = bh(c.memoizedState)) : d = a.updateQueue = ch(e) : null === e && (e = c.updateQueue = ch(d));

  null === e || d === e ? dh(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (dh(d, b), dh(e, b)) : (dh(d, b), e.lastUpdate = b);
}

function eh(a, b) {
  var c = a.updateQueue;
  c = null === c ? a.updateQueue = bh(a.memoizedState) : fh(a, c);
  null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}

function fh(a, b) {
  var c = a.alternate;
  null !== c && b === c.updateQueue && (b = a.updateQueue = ch(b));
  return b;
}

function gh(a, b, c, d, e, f) {
  switch (c.tag) {
    case rf:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

    case ah:
      a.effectTag = a.effectTag & -2049 | 64;

    case $g:
      a = c.payload;
      e = "function" === typeof a ? a.call(f, d, e) : a;
      if (null === e || void 0 === e) break;
      return n({}, d, e);

    case sf:
      Pg = !0;
  }

  return d;
}

function yf(a, b, c, d, e) {
  Pg = !1;
  b = fh(a, b);

  for (var f = b.baseState, g = null, h = 0, l = b.firstUpdate, k = f; null !== l;) {
    var m = l.expirationTime;
    m < e ? (null === g && (g = l, f = k), h < m && (h = m)) : (k = gh(a, b, l, k, c, d), null !== l.callback && (a.effectTag |= 32, l.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = l : (b.lastEffect.nextEffect = l, b.lastEffect = l)));
    l = l.next;
  }

  m = null;

  for (l = b.firstCapturedUpdate; null !== l;) {
    var p = l.expirationTime;
    p < e ? (null === m && (m = l, null === g && (f = k)), h < p && (h = p)) : (k = gh(a, b, l, k, c, d), null !== l.callback && (a.effectTag |= 32, l.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = l : (b.lastCapturedEffect.nextEffect = l, b.lastCapturedEffect = l)));
    l = l.next;
  }

  null === g && (b.lastUpdate = null);
  null === m ? b.lastCapturedUpdate = null : a.effectTag |= 32;
  null === g && null === m && (f = k);
  b.baseState = f;
  b.firstUpdate = g;
  b.firstCapturedUpdate = m;
  a.expirationTime = h;
  a.memoizedState = k;
}

function hh(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
  ih(b.firstEffect, c);
  b.firstEffect = b.lastEffect = null;
  ih(b.firstCapturedEffect, c);
  b.firstCapturedEffect = b.lastCapturedEffect = null;
}

function ih(a, b) {
  for (; null !== a;) {
    var c = a.callback;

    if (null !== c) {
      a.callback = null;
      var d = b;
      "function" !== typeof c ? x("191", c) : void 0;
      c.call(d);
    }

    a = a.nextEffect;
  }
}

function jh(a, b) {
  return {
    value: a,
    source: b,
    stack: jc(b)
  };
}

function kh(a) {
  a.effectTag |= 4;
}

var lh = void 0,
    mh = void 0,
    nh = void 0,
    oh = void 0;

lh = function lh(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child["return"] = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c["return"] || c["return"] === b) return;
      c = c["return"];
    }

    c.sibling["return"] = c["return"];
    c = c.sibling;
  }
};

mh = function mh() {};

nh = function nh(a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var g = b.stateNode;
    If(N.current);
    a = null;

    switch (c) {
      case "input":
        f = vc(g, f);
        d = vc(g, d);
        a = [];
        break;

      case "option":
        f = $d(g, f);
        d = $d(g, d);
        a = [];
        break;

      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = be(g, f);
        d = be(g, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = te);
    }

    qe(c, d);
    g = c = void 0;
    var h = null;

    for (c in f) {
      if (!d.hasOwnProperty(c) && f.hasOwnProperty(c) && null != f[c]) if ("style" === c) {
        var l = f[c];

        for (g in l) {
          l.hasOwnProperty(g) && (h || (h = {}), h[g] = "");
        }
      } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (ra.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    }

    for (c in d) {
      var k = d[c];
      l = null != f ? f[c] : void 0;
      if (d.hasOwnProperty(c) && k !== l && (null != k || null != l)) if ("style" === c) {
        if (l) {
          for (g in l) {
            !l.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (h || (h = {}), h[g] = "");
          }

          for (g in k) {
            k.hasOwnProperty(g) && l[g] !== k[g] && (h || (h = {}), h[g] = k[g]);
          }
        } else h || (a || (a = []), a.push(c, h)), h = k;
      } else "dangerouslySetInnerHTML" === c ? (k = k ? k.__html : void 0, l = l ? l.__html : void 0, null != k && l !== k && (a = a || []).push(c, "" + k)) : "children" === c ? l === k || "string" !== typeof k && "number" !== typeof k || (a = a || []).push(c, "" + k) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (ra.hasOwnProperty(c) ? (null != k && se(e, c), a || l === k || (a = [])) : (a = a || []).push(c, k));
    }

    h && (a = a || []).push("style", h);
    e = a;
    (b.updateQueue = e) && kh(b);
  }
};

oh = function oh(a, b, c, d) {
  c !== d && kh(b);
};

var ph = "function" === typeof WeakSet ? WeakSet : Set;

function qh(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = jc(c));
  null !== c && ic(c.type);
  b = b.value;
  null !== a && 1 === a.tag && ic(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}

function rh(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    sh(a, c);
  } else b.current = null;
}

function th(a, b, c) {
  c = c.updateQueue;
  c = null !== c ? c.lastEffect : null;

  if (null !== c) {
    var d = c = c.next;

    do {
      if ((d.tag & a) !== Nf) {
        var e = d.destroy;
        d.destroy = void 0;
        void 0 !== e && e();
      }

      (d.tag & b) !== Nf && (e = d.create, d.destroy = e());
      d = d.next;
    } while (d !== c);
  }
}

function uh(a, b) {
  for (var c = a;;) {
    if (5 === c.tag) {
      var d = c.stateNode;
      if (b) d.style.display = "none";else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = ne("display", e);
      }
    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if (13 === c.tag && null !== c.memoizedState) {
      d = c.child.sibling;
      d["return"] = c;
      c = d;
      continue;
    } else if (null !== c.child) {
      c.child["return"] = c;
      c = c.child;
      continue;
    }

    if (c === a) break;

    for (; null === c.sibling;) {
      if (null === c["return"] || c["return"] === a) return;
      c = c["return"];
    }

    c.sibling["return"] = c["return"];
    c = c.sibling;
  }
}

function vh(a) {
  "function" === typeof Re && Re(a);

  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      var b = a.updateQueue;

      if (null !== b && (b = b.lastEffect, null !== b)) {
        var c = b = b.next;

        do {
          var d = c.destroy;

          if (void 0 !== d) {
            var e = a;

            try {
              d();
            } catch (f) {
              sh(e, f);
            }
          }

          c = c.next;
        } while (c !== b);
      }

      break;

    case 1:
      rh(a);
      b = a.stateNode;
      if ("function" === typeof b.componentWillUnmount) try {
        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
      } catch (f) {
        sh(a, f);
      }
      break;

    case 5:
      rh(a);
      break;

    case 4:
      wh(a);
  }
}

function xh(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function yh(a) {
  a: {
    for (var b = a["return"]; null !== b;) {
      if (xh(b)) {
        var c = b;
        break a;
      }

      b = b["return"];
    }

    x("160");
    c = void 0;
  }

  var d = b = void 0;

  switch (c.tag) {
    case 5:
      b = c.stateNode;
      d = !1;
      break;

    case 3:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    case 4:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    default:
      x("161");
  }

  c.effectTag & 16 && (ke(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c["return"] || xh(c["return"])) {
        c = null;
        break a;
      }

      c = c["return"];
    }

    c.sibling["return"] = c["return"];

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child["return"] = c, c = c.child;
    }

    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }

  for (var e = a;;) {
    if (5 === e.tag || 6 === e.tag) {
      if (c) {
        if (d) {
          var f = b,
              g = e.stateNode,
              h = c;
          8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
        } else b.insertBefore(e.stateNode, c);
      } else d ? (g = b, h = e.stateNode, 8 === g.nodeType ? (f = g.parentNode, f.insertBefore(h, g)) : (f = g, f.appendChild(h)), g = g._reactRootContainer, null !== g && void 0 !== g || null !== f.onclick || (f.onclick = te)) : b.appendChild(e.stateNode);
    } else if (4 !== e.tag && null !== e.child) {
      e.child["return"] = e;
      e = e.child;
      continue;
    }
    if (e === a) break;

    for (; null === e.sibling;) {
      if (null === e["return"] || e["return"] === a) return;
      e = e["return"];
    }

    e.sibling["return"] = e["return"];
    e = e.sibling;
  }
}

function wh(a) {
  for (var b = a, c = !1, d = void 0, e = void 0;;) {
    if (!c) {
      c = b["return"];

      a: for (;;) {
        null === c ? x("160") : void 0;

        switch (c.tag) {
          case 5:
            d = c.stateNode;
            e = !1;
            break a;

          case 3:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;

          case 4:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;
        }

        c = c["return"];
      }

      c = !0;
    }

    if (5 === b.tag || 6 === b.tag) {
      a: for (var f = b, g = f;;) {
        if (vh(g), null !== g.child && 4 !== g.tag) g.child["return"] = g, g = g.child;else {
          if (g === f) break;

          for (; null === g.sibling;) {
            if (null === g["return"] || g["return"] === f) break a;
            g = g["return"];
          }

          g.sibling["return"] = g["return"];
          g = g.sibling;
        }
      }

      e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
    } else if (4 === b.tag) {
      if (null !== b.child) {
        d = b.stateNode.containerInfo;
        e = !0;
        b.child["return"] = b;
        b = b.child;
        continue;
      }
    } else if (vh(b), null !== b.child) {
      b.child["return"] = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b["return"] || b["return"] === a) return;
      b = b["return"];
      4 === b.tag && (c = !1);
    }

    b.sibling["return"] = b["return"];
    b = b.sibling;
  }
}

function zh(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      th(Pf, Qf, b);
      break;

    case 1:
      break;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps;
        a = null !== a ? a.memoizedProps : d;
        var e = b.type,
            f = b.updateQueue;
        b.updateQueue = null;
        null !== f && Ce(c, f, e, a, d, b);
      }

      break;

    case 6:
      null === b.stateNode ? x("162") : void 0;
      b.stateNode.nodeValue = b.memoizedProps;
      break;

    case 3:
      break;

    case 12:
      break;

    case 13:
      c = b.memoizedState;
      d = void 0;
      a = b;
      null === c ? d = !1 : (d = !0, a = b.child, 0 === c.timedOutAt && (c.timedOutAt = lf()));
      null !== a && uh(a, d);
      c = b.updateQueue;

      if (null !== c) {
        b.updateQueue = null;
        var g = b.stateNode;
        null === g && (g = b.stateNode = new ph());
        c.forEach(function (a) {
          var c = Ah.bind(null, b, a);
          g.has(a) || (g.add(a), a.then(c, c));
        });
      }

      break;

    case 17:
      break;

    default:
      x("163");
  }
}

var Bh = "function" === typeof WeakMap ? WeakMap : Map;

function Ch(a, b, c) {
  c = nf(c);
  c.tag = ah;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    Dh(d);
    qh(a, b);
  };

  return c;
}

function Eh(a, b, c) {
  c = nf(c);
  c.tag = ah;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === Fh ? Fh = new Set([this]) : Fh.add(this));
    var c = b.value,
        e = b.stack;
    qh(a, b);
    this.componentDidCatch(c, {
      componentStack: null !== e ? e : ""
    });
  });
  return c;
}

function Gh(a) {
  switch (a.tag) {
    case 1:
      J(a.type) && Ke(a);
      var b = a.effectTag;
      return b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 3:
      return Kf(a), Le(a), b = a.effectTag, 0 !== (b & 64) ? x("285") : void 0, a.effectTag = b & -2049 | 64, a;

    case 5:
      return Mf(a), null;

    case 13:
      return b = a.effectTag, b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 18:
      return null;

    case 4:
      return Kf(a), null;

    case 10:
      return Zg(a), null;

    default:
      return null;
  }
}

var Hh = Tb.ReactCurrentDispatcher,
    Ih = Tb.ReactCurrentOwner,
    Jh = 1073741822,
    Kh = !1,
    T = null,
    Lh = null,
    U = 0,
    Mh = -1,
    Nh = !1,
    V = null,
    Oh = !1,
    Ph = null,
    Qh = null,
    Rh = null,
    Fh = null;

function Sh() {
  if (null !== T) for (var a = T["return"]; null !== a;) {
    var b = a;

    switch (b.tag) {
      case 1:
        var c = b.type.childContextTypes;
        null !== c && void 0 !== c && Ke(b);
        break;

      case 3:
        Kf(b);
        Le(b);
        break;

      case 5:
        Mf(b);
        break;

      case 4:
        Kf(b);
        break;

      case 10:
        Zg(b);
    }

    a = a["return"];
  }
  Lh = null;
  U = 0;
  Mh = -1;
  Nh = !1;
  T = null;
}

function Th() {
  for (; null !== V;) {
    var a = V.effectTag;
    a & 16 && ke(V.stateNode, "");

    if (a & 128) {
      var b = V.alternate;
      null !== b && (b = b.ref, null !== b && ("function" === typeof b ? b(null) : b.current = null));
    }

    switch (a & 14) {
      case 2:
        yh(V);
        V.effectTag &= -3;
        break;

      case 6:
        yh(V);
        V.effectTag &= -3;
        zh(V.alternate, V);
        break;

      case 4:
        zh(V.alternate, V);
        break;

      case 8:
        a = V, wh(a), a["return"] = null, a.child = null, a.memoizedState = null, a.updateQueue = null, a = a.alternate, null !== a && (a["return"] = null, a.child = null, a.memoizedState = null, a.updateQueue = null);
    }

    V = V.nextEffect;
  }
}

function Uh() {
  for (; null !== V;) {
    if (V.effectTag & 256) a: {
      var a = V.alternate,
          b = V;

      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          th(Of, Nf, b);
          break a;

        case 1:
          if (b.effectTag & 256 && null !== a) {
            var c = a.memoizedProps,
                d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : L(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }

          break a;

        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          break a;

        default:
          x("163");
      }
    }
    V = V.nextEffect;
  }
}

function Vh(a, b) {
  for (; null !== V;) {
    var c = V.effectTag;

    if (c & 36) {
      var d = V.alternate,
          e = V,
          f = b;

      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          th(Rf, Sf, e);
          break;

        case 1:
          var g = e.stateNode;
          if (e.effectTag & 4) if (null === d) g.componentDidMount();else {
            var h = e.elementType === e.type ? d.memoizedProps : L(e.type, d.memoizedProps);
            g.componentDidUpdate(h, d.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
          }
          d = e.updateQueue;
          null !== d && hh(e, d, g, f);
          break;

        case 3:
          d = e.updateQueue;

          if (null !== d) {
            g = null;
            if (null !== e.child) switch (e.child.tag) {
              case 5:
                g = e.child.stateNode;
                break;

              case 1:
                g = e.child.stateNode;
            }
            hh(e, d, g, f);
          }

          break;

        case 5:
          f = e.stateNode;
          null === d && e.effectTag & 4 && we(e.type, e.memoizedProps) && f.focus();
          break;

        case 6:
          break;

        case 4:
          break;

        case 12:
          break;

        case 13:
          break;

        case 17:
          break;

        default:
          x("163");
      }
    }

    c & 128 && (e = V.ref, null !== e && (f = V.stateNode, "function" === typeof e ? e(f) : e.current = f));
    c & 512 && (Ph = a);
    V = V.nextEffect;
  }
}

function Wh(a, b) {
  Rh = Qh = Ph = null;
  var c = W;
  W = !0;

  do {
    if (b.effectTag & 512) {
      var d = !1,
          e = void 0;

      try {
        var f = b;
        th(Uf, Nf, f);
        th(Nf, Tf, f);
      } catch (g) {
        d = !0, e = g;
      }

      d && sh(b, e);
    }

    b = b.nextEffect;
  } while (null !== b);

  W = c;
  c = a.expirationTime;
  0 !== c && Xh(a, c);
  X || W || Yh(1073741823, !1);
}

function of() {
  null !== Qh && Be(Qh);
  null !== Rh && Rh();
}

function Zh(a, b) {
  Oh = Kh = !0;
  a.current === b ? x("177") : void 0;
  var c = a.pendingCommitExpirationTime;
  0 === c ? x("261") : void 0;
  a.pendingCommitExpirationTime = 0;
  var d = b.expirationTime,
      e = b.childExpirationTime;
  ef(a, e > d ? e : d);
  Ih.current = null;
  d = void 0;
  1 < b.effectTag ? null !== b.lastEffect ? (b.lastEffect.nextEffect = b, d = b.firstEffect) : d = b : d = b.firstEffect;
  ue = Bd;
  ve = Pd();
  Bd = !1;

  for (V = d; null !== V;) {
    e = !1;
    var f = void 0;

    try {
      Uh();
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  for (V = d; null !== V;) {
    e = !1;
    f = void 0;

    try {
      Th();
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  Qd(ve);
  ve = null;
  Bd = !!ue;
  ue = null;
  a.current = b;

  for (V = d; null !== V;) {
    e = !1;
    f = void 0;

    try {
      Vh(a, c);
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  if (null !== d && null !== Ph) {
    var g = Wh.bind(null, a, d);
    Qh = r.unstable_runWithPriority(r.unstable_NormalPriority, function () {
      return Ae(g);
    });
    Rh = g;
  }

  Kh = Oh = !1;
  "function" === typeof Qe && Qe(b.stateNode);
  c = b.expirationTime;
  b = b.childExpirationTime;
  b = b > c ? b : c;
  0 === b && (Fh = null);
  $h(a, b);
}

function ai(a) {
  for (;;) {
    var b = a.alternate,
        c = a["return"],
        d = a.sibling;

    if (0 === (a.effectTag & 1024)) {
      T = a;

      a: {
        var e = b;
        b = a;
        var f = U;
        var g = b.pendingProps;

        switch (b.tag) {
          case 2:
            break;

          case 16:
            break;

          case 15:
          case 0:
            break;

          case 1:
            J(b.type) && Ke(b);
            break;

          case 3:
            Kf(b);
            Le(b);
            g = b.stateNode;
            g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null);
            if (null === e || null === e.child) Eg(b), b.effectTag &= -3;
            mh(b);
            break;

          case 5:
            Mf(b);
            var h = If(Hf.current);
            f = b.type;
            if (null !== e && null != b.stateNode) nh(e, b, f, g, h), e.ref !== b.ref && (b.effectTag |= 128);else if (g) {
              var l = If(N.current);

              if (Eg(b)) {
                g = b;
                e = g.stateNode;
                var k = g.type,
                    m = g.memoizedProps,
                    p = h;
                e[Fa] = g;
                e[Ga] = m;
                f = void 0;
                h = k;

                switch (h) {
                  case "iframe":
                  case "object":
                    E("load", e);
                    break;

                  case "video":
                  case "audio":
                    for (k = 0; k < ab.length; k++) {
                      E(ab[k], e);
                    }

                    break;

                  case "source":
                    E("error", e);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    E("error", e);
                    E("load", e);
                    break;

                  case "form":
                    E("reset", e);
                    E("submit", e);
                    break;

                  case "details":
                    E("toggle", e);
                    break;

                  case "input":
                    wc(e, m);
                    E("invalid", e);
                    se(p, "onChange");
                    break;

                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    E("invalid", e);
                    se(p, "onChange");
                    break;

                  case "textarea":
                    ce(e, m), E("invalid", e), se(p, "onChange");
                }

                qe(h, m);
                k = null;

                for (f in m) {
                  m.hasOwnProperty(f) && (l = m[f], "children" === f ? "string" === typeof l ? e.textContent !== l && (k = ["children", l]) : "number" === typeof l && e.textContent !== "" + l && (k = ["children", "" + l]) : ra.hasOwnProperty(f) && null != l && se(p, f));
                }

                switch (h) {
                  case "input":
                    Rb(e);
                    Ac(e, m, !0);
                    break;

                  case "textarea":
                    Rb(e);
                    ee(e, m);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof m.onClick && (e.onclick = te);
                }

                f = k;
                g.updateQueue = f;
                g = null !== f ? !0 : !1;
                g && kh(b);
              } else {
                m = b;
                p = f;
                e = g;
                k = 9 === h.nodeType ? h : h.ownerDocument;
                l === fe.html && (l = ge(p));
                l === fe.html ? "script" === p ? (e = k.createElement("div"), e.innerHTML = "<script>\x3c/script>", k = e.removeChild(e.firstChild)) : "string" === typeof e.is ? k = k.createElement(p, {
                  is: e.is
                }) : (k = k.createElement(p), "select" === p && (p = k, e.multiple ? p.multiple = !0 : e.size && (p.size = e.size))) : k = k.createElementNS(l, p);
                e = k;
                e[Fa] = m;
                e[Ga] = g;
                lh(e, b, !1, !1);
                p = e;
                k = f;
                m = g;
                var t = h,
                    A = re(k, m);

                switch (k) {
                  case "iframe":
                  case "object":
                    E("load", p);
                    h = m;
                    break;

                  case "video":
                  case "audio":
                    for (h = 0; h < ab.length; h++) {
                      E(ab[h], p);
                    }

                    h = m;
                    break;

                  case "source":
                    E("error", p);
                    h = m;
                    break;

                  case "img":
                  case "image":
                  case "link":
                    E("error", p);
                    E("load", p);
                    h = m;
                    break;

                  case "form":
                    E("reset", p);
                    E("submit", p);
                    h = m;
                    break;

                  case "details":
                    E("toggle", p);
                    h = m;
                    break;

                  case "input":
                    wc(p, m);
                    h = vc(p, m);
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  case "option":
                    h = $d(p, m);
                    break;

                  case "select":
                    p._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    h = n({}, m, {
                      value: void 0
                    });
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  case "textarea":
                    ce(p, m);
                    h = be(p, m);
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  default:
                    h = m;
                }

                qe(k, h);
                l = void 0;
                var v = k,
                    R = p,
                    u = h;

                for (l in u) {
                  if (u.hasOwnProperty(l)) {
                    var q = u[l];
                    "style" === l ? oe(R, q) : "dangerouslySetInnerHTML" === l ? (q = q ? q.__html : void 0, null != q && je(R, q)) : "children" === l ? "string" === typeof q ? ("textarea" !== v || "" !== q) && ke(R, q) : "number" === typeof q && ke(R, "" + q) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ra.hasOwnProperty(l) ? null != q && se(t, l) : null != q && tc(R, l, q, A));
                  }
                }

                switch (k) {
                  case "input":
                    Rb(p);
                    Ac(p, m, !1);
                    break;

                  case "textarea":
                    Rb(p);
                    ee(p, m);
                    break;

                  case "option":
                    null != m.value && p.setAttribute("value", "" + uc(m.value));
                    break;

                  case "select":
                    h = p;
                    h.multiple = !!m.multiple;
                    p = m.value;
                    null != p ? ae(h, !!m.multiple, p, !1) : null != m.defaultValue && ae(h, !!m.multiple, m.defaultValue, !0);
                    break;

                  default:
                    "function" === typeof h.onClick && (p.onclick = te);
                }

                (g = we(f, g)) && kh(b);
                b.stateNode = e;
              }

              null !== b.ref && (b.effectTag |= 128);
            } else null === b.stateNode ? x("166") : void 0;
            break;

          case 6:
            e && null != b.stateNode ? oh(e, b, e.memoizedProps, g) : ("string" !== typeof g && (null === b.stateNode ? x("166") : void 0), e = If(Hf.current), If(N.current), Eg(b) ? (g = b, f = g.stateNode, e = g.memoizedProps, f[Fa] = g, (g = f.nodeValue !== e) && kh(b)) : (f = b, g = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(g), g[Fa] = b, f.stateNode = g));
            break;

          case 11:
            break;

          case 13:
            g = b.memoizedState;

            if (0 !== (b.effectTag & 64)) {
              b.expirationTime = f;
              T = b;
              break a;
            }

            g = null !== g;
            f = null !== e && null !== e.memoizedState;
            null !== e && !g && f && (e = e.child.sibling, null !== e && (h = b.firstEffect, null !== h ? (b.firstEffect = e, e.nextEffect = h) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8));
            if (g || f) b.effectTag |= 4;
            break;

          case 7:
            break;

          case 8:
            break;

          case 12:
            break;

          case 4:
            Kf(b);
            mh(b);
            break;

          case 10:
            Zg(b);
            break;

          case 9:
            break;

          case 14:
            break;

          case 17:
            J(b.type) && Ke(b);
            break;

          case 18:
            break;

          default:
            x("156");
        }

        T = null;
      }

      b = a;

      if (1 === U || 1 !== b.childExpirationTime) {
        g = 0;

        for (f = b.child; null !== f;) {
          e = f.expirationTime, h = f.childExpirationTime, e > g && (g = e), h > g && (g = h), f = f.sibling;
        }

        b.childExpirationTime = g;
      }

      if (null !== T) return T;
      null !== c && 0 === (c.effectTag & 1024) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));
    } else {
      a = Gh(a, U);
      if (null !== a) return a.effectTag &= 1023, a;
      null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 1024);
    }

    if (null !== d) return d;
    if (null !== c) a = c;else break;
  }

  return null;
}

function bi(a) {
  var b = Tg(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  null === b && (b = ai(a));
  Ih.current = null;
  return b;
}

function ci(a, b) {
  Kh ? x("243") : void 0;
  of();
  Kh = !0;
  var c = Hh.current;
  Hh.current = kg;
  var d = a.nextExpirationTimeToWorkOn;
  if (d !== U || a !== Lh || null === T) Sh(), Lh = a, U = d, T = Xe(Lh.current, null, U), a.pendingCommitExpirationTime = 0;
  var e = !1;

  do {
    try {
      if (b) for (; null !== T && !di();) {
        T = bi(T);
      } else for (; null !== T;) {
        T = bi(T);
      }
    } catch (u) {
      if (Yg = Xg = Wg = null, lg(), null === T) e = !0, Dh(u);else {
        null === T ? x("271") : void 0;
        var f = T,
            g = f["return"];
        if (null === g) e = !0, Dh(u);else {
          a: {
            var h = a,
                l = g,
                k = f,
                m = u;
            g = U;
            k.effectTag |= 1024;
            k.firstEffect = k.lastEffect = null;

            if (null !== m && "object" === typeof m && "function" === typeof m.then) {
              var p = m;
              m = l;
              var t = -1,
                  A = -1;

              do {
                if (13 === m.tag) {
                  var v = m.alternate;

                  if (null !== v && (v = v.memoizedState, null !== v)) {
                    A = 10 * (1073741822 - v.timedOutAt);
                    break;
                  }

                  v = m.pendingProps.maxDuration;
                  if ("number" === typeof v) if (0 >= v) t = 0;else if (-1 === t || v < t) t = v;
                }

                m = m["return"];
              } while (null !== m);

              m = l;

              do {
                if (v = 13 === m.tag) v = void 0 === m.memoizedProps.fallback ? !1 : null === m.memoizedState;

                if (v) {
                  l = m.updateQueue;
                  null === l ? (l = new Set(), l.add(p), m.updateQueue = l) : l.add(p);

                  if (0 === (m.mode & 1)) {
                    m.effectTag |= 64;
                    k.effectTag &= -1957;
                    1 === k.tag && (null === k.alternate ? k.tag = 17 : (g = nf(1073741823), g.tag = sf, pf(k, g)));
                    k.expirationTime = 1073741823;
                    break a;
                  }

                  k = h;
                  l = g;
                  var R = k.pingCache;
                  null === R ? (R = k.pingCache = new Bh(), v = new Set(), R.set(p, v)) : (v = R.get(p), void 0 === v && (v = new Set(), R.set(p, v)));
                  v.has(l) || (v.add(l), k = ei.bind(null, k, p, l), p.then(k, k));
                  -1 === t ? h = 1073741823 : (-1 === A && (A = 10 * (1073741822 - gf(h, g)) - 5E3), h = A + t);
                  0 <= h && Mh < h && (Mh = h);
                  m.effectTag |= 2048;
                  m.expirationTime = g;
                  break a;
                }

                m = m["return"];
              } while (null !== m);

              m = Error((ic(k.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + jc(k));
            }

            Nh = !0;
            m = jh(m, k);
            h = l;

            do {
              switch (h.tag) {
                case 3:
                  h.effectTag |= 2048;
                  h.expirationTime = g;
                  g = Ch(h, m, g);
                  eh(h, g);
                  break a;

                case 1:
                  if (t = m, A = h.type, k = h.stateNode, 0 === (h.effectTag & 64) && ("function" === typeof A.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Fh || !Fh.has(k)))) {
                    h.effectTag |= 2048;
                    h.expirationTime = g;
                    g = Eh(h, t, g);
                    eh(h, g);
                    break a;
                  }

              }

              h = h["return"];
            } while (null !== h);
          }

          T = ai(f);
          continue;
        }
      }
    }

    break;
  } while (1);

  Kh = !1;
  Hh.current = c;
  Yg = Xg = Wg = null;
  lg();
  if (e) Lh = null, a.finishedWork = null;else if (null !== T) a.finishedWork = null;else {
    c = a.current.alternate;
    null === c ? x("281") : void 0;
    Lh = null;

    if (Nh) {
      e = a.latestPendingTime;
      f = a.latestSuspendedTime;
      g = a.latestPingedTime;

      if (0 !== e && e < d || 0 !== f && f < d || 0 !== g && g < d) {
        ff(a, d);
        fi(a, c, d, a.expirationTime, -1);
        return;
      }

      if (!a.didError && b) {
        a.didError = !0;
        d = a.nextExpirationTimeToWorkOn = d;
        b = a.expirationTime = 1073741823;
        fi(a, c, d, b, -1);
        return;
      }
    }

    b && -1 !== Mh ? (ff(a, d), b = 10 * (1073741822 - gf(a, d)), b < Mh && (Mh = b), b = 10 * (1073741822 - lf()), b = Mh - b, fi(a, c, d, a.expirationTime, 0 > b ? 0 : b)) : (a.pendingCommitExpirationTime = d, a.finishedWork = c);
  }
}

function sh(a, b) {
  for (var c = a["return"]; null !== c;) {
    switch (c.tag) {
      case 1:
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Fh || !Fh.has(d))) {
          a = jh(b, a);
          a = Eh(c, a, 1073741823);
          pf(c, a);
          qf(c, 1073741823);
          return;
        }

        break;

      case 3:
        a = jh(b, a);
        a = Ch(c, a, 1073741823);
        pf(c, a);
        qf(c, 1073741823);
        return;
    }

    c = c["return"];
  }

  3 === a.tag && (c = jh(b, a), c = Ch(a, c, 1073741823), pf(a, c), qf(a, 1073741823));
}

function mf(a, b) {
  var c = r.unstable_getCurrentPriorityLevel(),
      d = void 0;
  if (0 === (b.mode & 1)) d = 1073741823;else if (Kh && !Oh) d = U;else {
    switch (c) {
      case r.unstable_ImmediatePriority:
        d = 1073741823;
        break;

      case r.unstable_UserBlockingPriority:
        d = 1073741822 - 10 * (((1073741822 - a + 15) / 10 | 0) + 1);
        break;

      case r.unstable_NormalPriority:
        d = 1073741822 - 25 * (((1073741822 - a + 500) / 25 | 0) + 1);
        break;

      case r.unstable_LowPriority:
      case r.unstable_IdlePriority:
        d = 1;
        break;

      default:
        x("313");
    }

    null !== Lh && d === U && --d;
  }
  c === r.unstable_UserBlockingPriority && (0 === gi || d < gi) && (gi = d);
  return d;
}

function ei(a, b, c) {
  var d = a.pingCache;
  null !== d && d["delete"](b);
  if (null !== Lh && U === c) Lh = null;else if (b = a.earliestSuspendedTime, d = a.latestSuspendedTime, 0 !== b && c <= b && c >= d) {
    a.didError = !1;
    b = a.latestPingedTime;
    if (0 === b || b > c) a.latestPingedTime = c;
    df(c, a);
    c = a.expirationTime;
    0 !== c && Xh(a, c);
  }
}

function Ah(a, b) {
  var c = a.stateNode;
  null !== c && c["delete"](b);
  b = lf();
  b = mf(b, a);
  a = hi(a, b);
  null !== a && (cf(a, b), b = a.expirationTime, 0 !== b && Xh(a, b));
}

function hi(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a["return"],
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d["return"] && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d["return"];
  }
  return e;
}

function qf(a, b) {
  a = hi(a, b);
  null !== a && (!Kh && 0 !== U && b > U && Sh(), cf(a, b), Kh && !Oh && Lh === a || Xh(a, a.expirationTime), ii > ji && (ii = 0, x("185")));
}

function ki(a, b, c, d, e) {
  return r.unstable_runWithPriority(r.unstable_ImmediatePriority, function () {
    return a(b, c, d, e);
  });
}

var li = null,
    Y = null,
    mi = 0,
    ni = void 0,
    W = !1,
    oi = null,
    Z = 0,
    gi = 0,
    pi = !1,
    qi = null,
    X = !1,
    ri = !1,
    si = null,
    ti = r.unstable_now(),
    ui = 1073741822 - (ti / 10 | 0),
    vi = ui,
    ji = 50,
    ii = 0,
    wi = null;

function xi() {
  ui = 1073741822 - ((r.unstable_now() - ti) / 10 | 0);
}

function yi(a, b) {
  if (0 !== mi) {
    if (b < mi) return;
    null !== ni && r.unstable_cancelCallback(ni);
  }

  mi = b;
  a = r.unstable_now() - ti;
  ni = r.unstable_scheduleCallback(zi, {
    timeout: 10 * (1073741822 - b) - a
  });
}

function fi(a, b, c, d, e) {
  a.expirationTime = d;
  0 !== e || di() ? 0 < e && (a.timeoutHandle = ye(Ai.bind(null, a, b, c), e)) : (a.pendingCommitExpirationTime = c, a.finishedWork = b);
}

function Ai(a, b, c) {
  a.pendingCommitExpirationTime = c;
  a.finishedWork = b;
  xi();
  vi = ui;
  Bi(a, c);
}

function $h(a, b) {
  a.expirationTime = b;
  a.finishedWork = null;
}

function lf() {
  if (W) return vi;
  Ci();
  if (0 === Z || 1 === Z) xi(), vi = ui;
  return vi;
}

function Xh(a, b) {
  null === a.nextScheduledRoot ? (a.expirationTime = b, null === Y ? (li = Y = a, a.nextScheduledRoot = a) : (Y = Y.nextScheduledRoot = a, Y.nextScheduledRoot = li)) : b > a.expirationTime && (a.expirationTime = b);
  W || (X ? ri && (oi = a, Z = 1073741823, Di(a, 1073741823, !1)) : 1073741823 === b ? Yh(1073741823, !1) : yi(a, b));
}

function Ci() {
  var a = 0,
      b = null;
  if (null !== Y) for (var c = Y, d = li; null !== d;) {
    var e = d.expirationTime;

    if (0 === e) {
      null === c || null === Y ? x("244") : void 0;

      if (d === d.nextScheduledRoot) {
        li = Y = d.nextScheduledRoot = null;
        break;
      } else if (d === li) li = e = d.nextScheduledRoot, Y.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === Y) {
        Y = c;
        Y.nextScheduledRoot = li;
        d.nextScheduledRoot = null;
        break;
      } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;

      d = c.nextScheduledRoot;
    } else {
      e > a && (a = e, b = d);
      if (d === Y) break;
      if (1073741823 === a) break;
      c = d;
      d = d.nextScheduledRoot;
    }
  }
  oi = b;
  Z = a;
}

var Ei = !1;

function di() {
  return Ei ? !0 : r.unstable_shouldYield() ? Ei = !0 : !1;
}

function zi() {
  try {
    if (!di() && null !== li) {
      xi();
      var a = li;

      do {
        var b = a.expirationTime;
        0 !== b && ui <= b && (a.nextExpirationTimeToWorkOn = ui);
        a = a.nextScheduledRoot;
      } while (a !== li);
    }

    Yh(0, !0);
  } finally {
    Ei = !1;
  }
}

function Yh(a, b) {
  Ci();
  if (b) for (xi(), vi = ui; null !== oi && 0 !== Z && a <= Z && !(Ei && ui > Z);) {
    Di(oi, Z, ui > Z), Ci(), xi(), vi = ui;
  } else for (; null !== oi && 0 !== Z && a <= Z;) {
    Di(oi, Z, !1), Ci();
  }
  b && (mi = 0, ni = null);
  0 !== Z && yi(oi, Z);
  ii = 0;
  wi = null;
  if (null !== si) for (a = si, si = null, b = 0; b < a.length; b++) {
    var c = a[b];

    try {
      c._onComplete();
    } catch (d) {
      pi || (pi = !0, qi = d);
    }
  }
  if (pi) throw a = qi, qi = null, pi = !1, a;
}

function Bi(a, b) {
  W ? x("253") : void 0;
  oi = a;
  Z = b;
  Di(a, b, !1);
  Yh(1073741823, !1);
}

function Di(a, b, c) {
  W ? x("245") : void 0;
  W = !0;

  if (c) {
    var d = a.finishedWork;
    null !== d ? Fi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, ze(d)), ci(a, c), d = a.finishedWork, null !== d && (di() ? a.finishedWork = d : Fi(a, d, b)));
  } else d = a.finishedWork, null !== d ? Fi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, ze(d)), ci(a, c), d = a.finishedWork, null !== d && Fi(a, d, b));

  W = !1;
}

function Fi(a, b, c) {
  var d = a.firstBatch;

  if (null !== d && d._expirationTime >= c && (null === si ? si = [d] : si.push(d), d._defer)) {
    a.finishedWork = b;
    a.expirationTime = 0;
    return;
  }

  a.finishedWork = null;
  a === wi ? ii++ : (wi = a, ii = 0);
  r.unstable_runWithPriority(r.unstable_ImmediatePriority, function () {
    Zh(a, b);
  });
}

function Dh(a) {
  null === oi ? x("246") : void 0;
  oi.expirationTime = 0;
  pi || (pi = !0, qi = a);
}

function Gi(a, b) {
  var c = X;
  X = !0;

  try {
    return a(b);
  } finally {
    (X = c) || W || Yh(1073741823, !1);
  }
}

function Hi(a, b) {
  if (X && !ri) {
    ri = !0;

    try {
      return a(b);
    } finally {
      ri = !1;
    }
  }

  return a(b);
}

function Ii(a, b, c) {
  X || W || 0 === gi || (Yh(gi, !1), gi = 0);
  var d = X;
  X = !0;

  try {
    return r.unstable_runWithPriority(r.unstable_UserBlockingPriority, function () {
      return a(b, c);
    });
  } finally {
    (X = d) || W || Yh(1073741823, !1);
  }
}

function Ji(a, b, c, d, e) {
  var f = b.current;

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      2 === ed(c) && 1 === c.tag ? void 0 : x("170");
      var g = c;

      do {
        switch (g.tag) {
          case 3:
            g = g.stateNode.context;
            break b;

          case 1:
            if (J(g.type)) {
              g = g.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        g = g["return"];
      } while (null !== g);

      x("171");
      g = void 0;
    }

    if (1 === c.tag) {
      var h = c.type;

      if (J(h)) {
        c = Ne(c, h, g);
        break a;
      }
    }

    c = g;
  } else c = He;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = e;
  e = nf(d);
  e.payload = {
    element: a
  };
  b = void 0 === b ? null : b;
  null !== b && (e.callback = b);
  of();
  pf(f, e);
  qf(f, d);
  return d;
}

function Ki(a, b, c, d) {
  var e = b.current,
      f = lf();
  e = mf(f, e);
  return Ji(a, b, c, e, d);
}

function Li(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function Mi(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Wb,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

Ab = function Ab(a, b, c) {
  switch (b) {
    case "input":
      yc(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) {
          c = c.parentNode;
        }

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = Ka(d);
            e ? void 0 : x("90");
            Sb(d);
            yc(d, e);
          }
        }
      }

      break;

    case "textarea":
      de(a, c);
      break;

    case "select":
      b = c.value, null != b && ae(a, !!c.multiple, b, !1);
  }
};

function Ni(a) {
  var b = 1073741822 - 25 * (((1073741822 - lf() + 500) / 25 | 0) + 1);
  b >= Jh && (b = Jh - 1);
  this._expirationTime = Jh = b;
  this._root = a;
  this._callbacks = this._next = null;
  this._hasChildren = this._didComplete = !1;
  this._children = null;
  this._defer = !0;
}

Ni.prototype.render = function (a) {
  this._defer ? void 0 : x("250");
  this._hasChildren = !0;
  this._children = a;
  var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new Oi();
  Ji(a, b, null, c, d._onCommit);
  return d;
};

Ni.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Ni.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;
  this._defer && null !== b ? void 0 : x("251");

  if (this._hasChildren) {
    var c = this._expirationTime;

    if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

      for (var d = null, e = b; e !== this;) {
        d = e, e = e._next;
      }

      null === d ? x("251") : void 0;
      d._next = e._next;
      this._next = b;
      a.firstBatch = this;
    }

    this._defer = !1;
    Bi(a, c);
    b = this._next;
    this._next = null;
    b = a.firstBatch = b;
    null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};

Ni.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      (0, a[b])();
    }
  }
};

function Oi() {
  this._callbacks = null;
  this._didCommit = !1;
  this._onCommit = this._onCommit.bind(this);
}

Oi.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Oi.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];
      "function" !== typeof c ? x("191", c) : void 0;
      c();
    }
  }
};

function Pi(a, b, c) {
  b = K(3, null, null, b ? 3 : 0);
  a = {
    current: b,
    containerInfo: a,
    pendingChildren: null,
    pingCache: null,
    earliestPendingTime: 0,
    latestPendingTime: 0,
    earliestSuspendedTime: 0,
    latestSuspendedTime: 0,
    latestPingedTime: 0,
    didError: !1,
    pendingCommitExpirationTime: 0,
    finishedWork: null,
    timeoutHandle: -1,
    context: null,
    pendingContext: null,
    hydrate: c,
    nextExpirationTimeToWorkOn: 0,
    expirationTime: 0,
    firstBatch: null,
    nextScheduledRoot: null
  };
  this._internalRoot = b.stateNode = a;
}

Pi.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new Oi();
  b = void 0 === b ? null : b;
  null !== b && d.then(b);
  Ki(a, c, null, d._onCommit);
  return d;
};

Pi.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new Oi();
  a = void 0 === a ? null : a;
  null !== a && c.then(a);
  Ki(null, b, null, c._onCommit);
  return c;
};

Pi.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
  var d = this._internalRoot,
      e = new Oi();
  c = void 0 === c ? null : c;
  null !== c && e.then(c);
  Ki(b, d, a, e._onCommit);
  return e;
};

Pi.prototype.createBatch = function () {
  var a = new Ni(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;
  if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime >= b;) {
      c = d, d = d._next;
    }

    a._next = d;
    null !== c && (c._next = a);
  }
  return a;
};

function Qi(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

Gb = Gi;
Hb = Ii;

Ib = function Ib() {
  W || 0 === gi || (Yh(gi, !1), gi = 0);
};

function Ri(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) {
    a.removeChild(c);
  }
  return new Pi(a, !1, b);
}

function Si(a, b, c, d, e) {
  var f = c._reactRootContainer;

  if (f) {
    if ("function" === typeof e) {
      var g = e;

      e = function e() {
        var a = Li(f._internalRoot);
        g.call(a);
      };
    }

    null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
  } else {
    f = c._reactRootContainer = Ri(c, d);

    if ("function" === typeof e) {
      var h = e;

      e = function e() {
        var a = Li(f._internalRoot);
        h.call(a);
      };
    }

    Hi(function () {
      null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
    });
  }

  return Li(f._internalRoot);
}

function Ti(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  Qi(b) ? void 0 : x("200");
  return Mi(a, b, null, c);
}

var Vi = {
  createPortal: Ti,
  findDOMNode: function findDOMNode(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternalFiber;
    void 0 === b && ("function" === typeof a.render ? x("188") : x("268", Object.keys(a)));
    a = hd(b);
    a = null === a ? null : a.stateNode;
    return a;
  },
  hydrate: function hydrate(a, b, c) {
    Qi(b) ? void 0 : x("200");
    return Si(null, a, b, !0, c);
  },
  render: function render(a, b, c) {
    Qi(b) ? void 0 : x("200");
    return Si(null, a, b, !1, c);
  },
  unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    Qi(c) ? void 0 : x("200");
    null == a || void 0 === a._reactInternalFiber ? x("38") : void 0;
    return Si(a, b, c, !1, d);
  },
  unmountComponentAtNode: function unmountComponentAtNode(a) {
    Qi(a) ? void 0 : x("40");
    return a._reactRootContainer ? (Hi(function () {
      Si(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  },
  unstable_createPortal: function unstable_createPortal() {
    return Ti.apply(void 0, arguments);
  },
  unstable_batchedUpdates: Gi,
  unstable_interactiveUpdates: Ii,
  flushSync: function flushSync(a, b) {
    W ? x("187") : void 0;
    var c = X;
    X = !0;

    try {
      return ki(a, b);
    } finally {
      X = c, Yh(1073741823, !1);
    }
  },
  unstable_createRoot: Ui,
  unstable_flushControlled: function unstable_flushControlled(a) {
    var b = X;
    X = !0;

    try {
      ki(a);
    } finally {
      (X = b) || W || Yh(1073741823, !1);
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [Ia, Ja, Ka, Ba.injectEventPluginsByName, pa, Qa, function (a) {
      ya(a, Pa);
    }, Eb, Fb, Dd, Da]
  }
};

function Ui(a, b) {
  Qi(a) ? void 0 : x("299", "unstable_createRoot");
  return new Pi(a, !0, null != b && !0 === b.hydrate);
}

(function (a) {
  var b = a.findFiberByHostInstance;
  return Te(n({}, a, {
    overrideProps: null,
    currentDispatcherRef: Tb.ReactCurrentDispatcher,
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = hd(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    }
  }));
})({
  findFiberByHostInstance: Ha,
  bundleType: 0,
  version: "16.8.6",
  rendererPackageName: "react-dom"
});

var Wi = {
  "default": Vi
},
    Xi = Wi && Vi || Wi;
module.exports = Xi["default"] || Xi;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(143);
var validate = __webpack_require__(41);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(84)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(206);
} else {}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(72);

__webpack_require__(87);

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = null,
    e = !1,
    g = 3,
    k = -1,
    l = -1,
    m = !1,
    n = !1;

function p() {
  if (!m) {
    var a = d.expirationTime;
    n ? q() : n = !0;

    _r(t, a);
  }
}

function u() {
  var a = d,
      b = d.next;
  if (d === b) d = null;else {
    var c = d.previous;
    d = c.next = b;
    b.previous = c;
  }
  a.next = a.previous = null;
  c = a.callback;
  b = a.expirationTime;
  a = a.priorityLevel;
  var f = g,
      Q = l;
  g = a;
  l = b;

  try {
    var h = c();
  } finally {
    g = f, l = Q;
  }

  if ("function" === typeof h) if (h = {
    callback: h,
    priorityLevel: a,
    expirationTime: b,
    next: null,
    previous: null
  }, null === d) d = h.next = h.previous = h;else {
    c = null;
    a = d;

    do {
      if (a.expirationTime >= b) {
        c = a;
        break;
      }

      a = a.next;
    } while (a !== d);

    null === c ? c = d : c === d && (d = h, p());
    b = c.previous;
    b.next = c.previous = h;
    h.next = c;
    h.previous = b;
  }
}

function v() {
  if (-1 === k && null !== d && 1 === d.priorityLevel) {
    m = !0;

    try {
      do {
        u();
      } while (null !== d && 1 === d.priorityLevel);
    } finally {
      m = !1, null !== d ? p() : n = !1;
    }
  }
}

function t(a) {
  m = !0;
  var b = e;
  e = a;

  try {
    if (a) for (; null !== d;) {
      var c = exports.unstable_now();

      if (d.expirationTime <= c) {
        do {
          u();
        } while (null !== d && d.expirationTime <= c);
      } else break;
    } else if (null !== d) {
      do {
        u();
      } while (null !== d && !w());
    }
  } finally {
    m = !1, e = b, null !== d ? p() : n = !1, v();
  }
}

var x = Date,
    y = "function" === typeof setTimeout ? setTimeout : void 0,
    z = "function" === typeof clearTimeout ? clearTimeout : void 0,
    A = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
    B = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
    C,
    D;

function E(a) {
  C = A(function (b) {
    z(D);
    a(b);
  });
  D = y(function () {
    B(C);
    a(exports.unstable_now());
  }, 100);
}

if ("object" === typeof performance && "function" === typeof performance.now) {
  var F = performance;

  exports.unstable_now = function () {
    return F.now();
  };
} else exports.unstable_now = function () {
  return x.now();
};

var _r,
    q,
    w,
    G = null;

"undefined" !== typeof window ? G = window : "undefined" !== typeof global && (G = global);

if (G && G._schedMock) {
  var H = G._schedMock;
  _r = H[0];
  q = H[1];
  w = H[2];
  exports.unstable_now = H[3];
} else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var I = null,
      J = function J(a) {
    if (null !== I) try {
      I(a);
    } finally {
      I = null;
    }
  };

  _r = function r(a) {
    null !== I ? setTimeout(_r, 0, a) : (I = a, setTimeout(J, 0, !1));
  };

  q = function q() {
    I = null;
  };

  w = function w() {
    return !1;
  };
} else {
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  var K = null,
      L = !1,
      M = -1,
      N = !1,
      O = !1,
      P = 0,
      R = 33,
      S = 33;

  w = function w() {
    return P <= exports.unstable_now();
  };

  var T = new MessageChannel(),
      U = T.port2;

  T.port1.onmessage = function () {
    L = !1;
    var a = K,
        b = M;
    K = null;
    M = -1;
    var c = exports.unstable_now(),
        f = !1;
    if (0 >= P - c) if (-1 !== b && b <= c) f = !0;else {
      N || (N = !0, E(V));
      K = a;
      M = b;
      return;
    }

    if (null !== a) {
      O = !0;

      try {
        a(f);
      } finally {
        O = !1;
      }
    }
  };

  var V = function V(a) {
    if (null !== K) {
      E(V);
      var b = a - P + S;
      b < S && R < S ? (8 > b && (b = 8), S = b < R ? R : b) : R = b;
      P = a + S;
      L || (L = !0, U.postMessage(void 0));
    } else N = !1;
  };

  _r = function _r(a, b) {
    K = a;
    M = b;
    O || 0 > b ? U.postMessage(void 0) : N || (N = !0, E(V));
  };

  q = function q() {
    K = null;
    L = !1;
    M = -1;
  };
}

exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = g,
      f = k;
  g = a;
  k = exports.unstable_now();

  try {
    return b();
  } finally {
    g = c, k = f, v();
  }
};

exports.unstable_next = function (a) {
  switch (g) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = g;
  }

  var c = g,
      f = k;
  g = b;
  k = exports.unstable_now();

  try {
    return a();
  } finally {
    g = c, k = f, v();
  }
};

exports.unstable_scheduleCallback = function (a, b) {
  var c = -1 !== k ? k : exports.unstable_now();
  if ("object" === typeof b && null !== b && "number" === typeof b.timeout) b = c + b.timeout;else switch (g) {
    case 1:
      b = c + -1;
      break;

    case 2:
      b = c + 250;
      break;

    case 5:
      b = c + 1073741823;
      break;

    case 4:
      b = c + 1E4;
      break;

    default:
      b = c + 5E3;
  }
  a = {
    callback: a,
    priorityLevel: g,
    expirationTime: b,
    next: null,
    previous: null
  };
  if (null === d) d = a.next = a.previous = a, p();else {
    c = null;
    var f = d;

    do {
      if (f.expirationTime > b) {
        c = f;
        break;
      }

      f = f.next;
    } while (f !== d);

    null === c ? c = d : c === d && (d = a, p());
    b = c.previous;
    b.next = c.previous = a;
    a.next = c;
    a.previous = b;
  }
  return a;
};

exports.unstable_cancelCallback = function (a) {
  var b = a.next;

  if (null !== b) {
    if (b === a) d = null;else {
      a === d && (d = b);
      var c = a.previous;
      c.next = b;
      b.previous = c;
    }
    a.next = a.previous = null;
  }
};

exports.unstable_wrapCallback = function (a) {
  var b = g;
  return function () {
    var c = g,
        f = k;
    g = b;
    k = exports.unstable_now();

    try {
      return a.apply(this, arguments);
    } finally {
      g = c, k = f, v();
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return g;
};

exports.unstable_shouldYield = function () {
  return !e && (null !== d && d.expirationTime < l || w());
};

exports.unstable_continueExecution = function () {
  null !== d && p();
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return d;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(71)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(39);
var toIObject = __webpack_require__(34);
var isEnum = __webpack_require__(67).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(46);

__webpack_require__(29);

__webpack_require__(28);

__webpack_require__(44);

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(0);
/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */


function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      "in": true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props["in"]; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        "in": true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        "in": false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        "in": prevChild.props["in"],
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(105));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(106));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(107));

var _react = _interopRequireDefault(__webpack_require__(0));

var _scrollBehavior = _interopRequireDefault(__webpack_require__(211));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _history = __webpack_require__(42);

var _StateStorage = _interopRequireDefault(__webpack_require__(217));

var propTypes = {
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired,
  location: _propTypes["default"].object.isRequired
};
var childContextTypes = {
  scrollBehavior: _propTypes["default"].object.isRequired
};

var ScrollContext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "registerElement", function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "unregisterElement", function (key) {
      _this.scrollBehavior.unregisterElement(key);
    });
    _this.scrollBehavior = new _scrollBehavior["default"]({
      addTransitionHook: _history.globalHistory.listen,
      stateStorage: new _StateStorage["default"](),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });
    return _this;
  }

  var _proto = ScrollContext.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scrollBehavior: this
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var location = this.props.location;
    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      location: prevProps.location // The "scroll-behavior" package expects the "action" to be on the location
      // object so let's copy it over.
      // Temp hack while awaiting https://github.com/reach/router/issues/119

    };

    if (window.__navigatingToLink) {
      location.action = "PUSH";
    } else {
      location.action = "POP";
    }

    this.scrollBehavior.updateScroll(prevRouterProps, {
      history: _history.globalHistory,
      location: location
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  _proto.getRouterProps = function getRouterProps() {
    var location = this.props.location;
    return {
      location: location,
      history: _history.globalHistory
    };
  };

  _proto.render = function render() {
    return _react["default"].Children.only(this.props.children);
  };

  return ScrollContext;
}(_react["default"].Component);

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;
var _default = ScrollContext;
exports["default"] = _default;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(48);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(28);

exports.__esModule = true;

var _off = __webpack_require__(212);

var _off2 = _interopRequireDefault(_off);

var _on = __webpack_require__(213);

var _on2 = _interopRequireDefault(_on);

var _scrollLeft = __webpack_require__(214);

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _scrollTop = __webpack_require__(215);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _requestAnimationFrame = __webpack_require__(168);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _invariant = __webpack_require__(43);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(216);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable no-underscore-dangle */
// Try at most this many times to scroll, to avoid getting stuck.


var MAX_SCROLL_ATTEMPTS = 2;

var ScrollBehavior = function () {
  function ScrollBehavior(_ref) {
    var _this = this;

    var addTransitionHook = _ref.addTransitionHook,
        stateStorage = _ref.stateStorage,
        getCurrentLocation = _ref.getCurrentLocation,
        shouldUpdateScroll = _ref.shouldUpdateScroll;

    _classCallCheck(this, ScrollBehavior);

    this._restoreScrollRestoration = function () {
      /* istanbul ignore if: not supported by any browsers on Travis */
      if (_this._oldScrollRestoration) {
        try {
          window.history.scrollRestoration = _this._oldScrollRestoration;
        } catch (e) {
          /* silence */
        }
      }
    };

    this._onWindowScroll = function () {
      // It's possible that this scroll operation was triggered by what will be a
      // `POP` transition. Instead of updating the saved location immediately, we
      // have to enqueue the update, then potentially cancel it if we observe a
      // location update.
      if (!_this._saveWindowPositionHandle) {
        _this._saveWindowPositionHandle = (0, _requestAnimationFrame2["default"])(_this._saveWindowPosition);
      }

      if (_this._windowScrollTarget) {
        var _windowScrollTarget = _this._windowScrollTarget,
            xTarget = _windowScrollTarget[0],
            yTarget = _windowScrollTarget[1];
        var x = (0, _scrollLeft2["default"])(window);
        var y = (0, _scrollTop2["default"])(window);

        if (x === xTarget && y === yTarget) {
          _this._windowScrollTarget = null;

          _this._cancelCheckWindowScroll();
        }
      }
    };

    this._saveWindowPosition = function () {
      _this._saveWindowPositionHandle = null;

      _this._savePosition(null, window);
    };

    this._checkWindowScrollPosition = function () {
      _this._checkWindowScrollHandle = null; // We can only get here if scrollTarget is set. Every code path that unsets
      // scroll target also cancels the handle to avoid calling this handler.
      // Still, check anyway just in case.

      /* istanbul ignore if: paranoid guard */

      if (!_this._windowScrollTarget) {
        return;
      }

      _this.scrollToTarget(window, _this._windowScrollTarget);

      ++_this._numWindowScrollAttempts;
      /* istanbul ignore if: paranoid guard */

      if (_this._numWindowScrollAttempts >= MAX_SCROLL_ATTEMPTS) {
        _this._windowScrollTarget = null;
        return;
      }

      _this._checkWindowScrollHandle = (0, _requestAnimationFrame2["default"])(_this._checkWindowScrollPosition);
    };

    this._stateStorage = stateStorage;
    this._getCurrentLocation = getCurrentLocation;
    this._shouldUpdateScroll = shouldUpdateScroll; // This helps avoid some jankiness in fighting against the browser's
    // default scroll behavior on `POP` transitions.

    /* istanbul ignore else: Travis browsers all support this */

    if ('scrollRestoration' in window.history && // Unfortunately, Safari on iOS freezes for 2-6s after the user swipes to
    // navigate through history with scrollRestoration being 'manual', so we
    // need to detect this browser and exclude it from the following code
    // until this bug is fixed by Apple.
    !(0, _utils.isMobileSafari)()) {
      this._oldScrollRestoration = window.history.scrollRestoration;

      try {
        window.history.scrollRestoration = 'manual'; // Scroll restoration persists across page reloads. We want to reset
        // this to the original value, so that we can let the browser handle
        // restoring the initial scroll position on server-rendered pages.

        (0, _on2["default"])(window, 'beforeunload', this._restoreScrollRestoration);
      } catch (e) {
        this._oldScrollRestoration = null;
      }
    } else {
      this._oldScrollRestoration = null;
    }

    this._saveWindowPositionHandle = null;
    this._checkWindowScrollHandle = null;
    this._windowScrollTarget = null;
    this._numWindowScrollAttempts = 0;
    this._scrollElements = {}; // We have to listen to each window scroll update rather than to just
    // location updates, because some browsers will update scroll position
    // before emitting the location change.

    (0, _on2["default"])(window, 'scroll', this._onWindowScroll);
    this._removeTransitionHook = addTransitionHook(function () {
      _requestAnimationFrame2["default"].cancel(_this._saveWindowPositionHandle);

      _this._saveWindowPositionHandle = null;
      Object.keys(_this._scrollElements).forEach(function (key) {
        var scrollElement = _this._scrollElements[key];

        _requestAnimationFrame2["default"].cancel(scrollElement.savePositionHandle);

        scrollElement.savePositionHandle = null; // It's fine to save element scroll positions here, though; the browser
        // won't modify them.

        _this._saveElementPosition(key);
      });
    });
  }

  ScrollBehavior.prototype.registerElement = function registerElement(key, element, shouldUpdateScroll, context) {
    var _this2 = this;

    !!this._scrollElements[key] ?  false ? undefined : (0, _invariant2["default"])(false) : void 0;

    var saveElementPosition = function saveElementPosition() {
      _this2._saveElementPosition(key);
    };

    var scrollElement = {
      element: element,
      shouldUpdateScroll: shouldUpdateScroll,
      savePositionHandle: null,
      onScroll: function onScroll() {
        if (!scrollElement.savePositionHandle) {
          scrollElement.savePositionHandle = (0, _requestAnimationFrame2["default"])(saveElementPosition);
        }
      }
    };
    this._scrollElements[key] = scrollElement;
    (0, _on2["default"])(element, 'scroll', scrollElement.onScroll);

    this._updateElementScroll(key, null, context);
  };

  ScrollBehavior.prototype.unregisterElement = function unregisterElement(key) {
    !this._scrollElements[key] ?  false ? undefined : (0, _invariant2["default"])(false) : void 0;
    var _scrollElements$key = this._scrollElements[key],
        element = _scrollElements$key.element,
        onScroll = _scrollElements$key.onScroll,
        savePositionHandle = _scrollElements$key.savePositionHandle;
    (0, _off2["default"])(element, 'scroll', onScroll);

    _requestAnimationFrame2["default"].cancel(savePositionHandle);

    delete this._scrollElements[key];
  };

  ScrollBehavior.prototype.updateScroll = function updateScroll(prevContext, context) {
    var _this3 = this;

    this._updateWindowScroll(prevContext, context);

    Object.keys(this._scrollElements).forEach(function (key) {
      _this3._updateElementScroll(key, prevContext, context);
    });
  };

  ScrollBehavior.prototype.stop = function stop() {
    this._restoreScrollRestoration();

    (0, _off2["default"])(window, 'scroll', this._onWindowScroll);

    this._cancelCheckWindowScroll();

    this._removeTransitionHook();
  };

  ScrollBehavior.prototype._cancelCheckWindowScroll = function _cancelCheckWindowScroll() {
    _requestAnimationFrame2["default"].cancel(this._checkWindowScrollHandle);

    this._checkWindowScrollHandle = null;
  };

  ScrollBehavior.prototype._saveElementPosition = function _saveElementPosition(key) {
    var scrollElement = this._scrollElements[key];
    scrollElement.savePositionHandle = null;

    this._savePosition(key, scrollElement.element);
  };

  ScrollBehavior.prototype._savePosition = function _savePosition(key, element) {
    this._stateStorage.save(this._getCurrentLocation(), key, [(0, _scrollLeft2["default"])(element), (0, _scrollTop2["default"])(element)]);
  };

  ScrollBehavior.prototype._updateWindowScroll = function _updateWindowScroll(prevContext, context) {
    // Whatever we were doing before isn't relevant any more.
    this._cancelCheckWindowScroll();

    this._windowScrollTarget = this._getScrollTarget(null, this._shouldUpdateScroll, prevContext, context); // Updating the window scroll position is really flaky. Just trying to
    // scroll it isn't enough. Instead, try to scroll a few times until it
    // works.

    this._numWindowScrollAttempts = 0;

    this._checkWindowScrollPosition();
  };

  ScrollBehavior.prototype._updateElementScroll = function _updateElementScroll(key, prevContext, context) {
    var _scrollElements$key2 = this._scrollElements[key],
        element = _scrollElements$key2.element,
        shouldUpdateScroll = _scrollElements$key2.shouldUpdateScroll;

    var scrollTarget = this._getScrollTarget(key, shouldUpdateScroll, prevContext, context);

    if (!scrollTarget) {
      return;
    } // Unlike with the window, there shouldn't be any flakiness to deal with
    // here.


    this.scrollToTarget(element, scrollTarget);
  };

  ScrollBehavior.prototype._getDefaultScrollTarget = function _getDefaultScrollTarget(location) {
    var hash = location.hash;

    if (hash && hash !== '#') {
      return hash.charAt(0) === '#' ? hash.slice(1) : hash;
    }

    return [0, 0];
  };

  ScrollBehavior.prototype._getScrollTarget = function _getScrollTarget(key, shouldUpdateScroll, prevContext, context) {
    var scrollTarget = shouldUpdateScroll ? shouldUpdateScroll.call(this, prevContext, context) : true;

    if (!scrollTarget || Array.isArray(scrollTarget) || typeof scrollTarget === 'string') {
      return scrollTarget;
    }

    var location = this._getCurrentLocation();

    return this._getSavedScrollTarget(key, location) || this._getDefaultScrollTarget(location);
  };

  ScrollBehavior.prototype._getSavedScrollTarget = function _getSavedScrollTarget(key, location) {
    if (location.action === 'PUSH') {
      return null;
    }

    return this._stateStorage.read(location, key);
  };

  ScrollBehavior.prototype.scrollToTarget = function scrollToTarget(element, target) {
    if (typeof target === 'string') {
      var targetElement = document.getElementById(target) || document.getElementsByName(target)[0];

      if (targetElement) {
        targetElement.scrollIntoView();
        return;
      } // Fallback to scrolling to top when target fragment doesn't exist.


      target = [0, 0]; // eslint-disable-line no-param-reassign
    }

    var _target = target,
        left = _target[0],
        top = _target[1];
    (0, _scrollLeft2["default"])(element, left);
    (0, _scrollTop2["default"])(element, top);
  };

  return ScrollBehavior;
}();

exports["default"] = ScrollBehavior;
module.exports = exports['default'];

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(92));

var off = function off() {};

if (_inDOM["default"]) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(92));

var on = function on() {};

if (_inDOM["default"]) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(144));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(144));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isMobileSafari = isMobileSafari;

function isMobileSafari() {
  return /iPad|iPhone|iPod/.test(window.navigator.platform) && /^((?!CriOS).)*Safari/.test(window.navigator.userAgent);
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return JSON.parse(value);
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return {};
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var locationKey = location.key || location.pathname;
    var stateKeyBase = "" + STATE_KEY_PREFIX + locationKey;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports["default"] = SessionStorage;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(105));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(106));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(107));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(50));

var _warning = _interopRequireDefault(__webpack_require__(117));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var propTypes = {
  scrollKey: _propTypes["default"].string.isRequired,
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired
};
var contextTypes = {
  // This is necessary when rendering on the client. However, when rendering on
  // the server, this container will do nothing, and thus does not require the
  // scroll behavior context.
  scrollBehavior: _propTypes["default"].object
};

var ScrollContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContainer, _React$Component);

  function ScrollContainer(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this; // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])((0, _assertThisInitialized2["default"])(_this)), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.context.scrollBehavior.scrollBehavior, prevRouterProps, routerProps);
    });
    _this.scrollKey = props.scrollKey;
    return _this;
  }

  var _proto = ScrollContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.context.scrollBehavior.registerElement(this.props.scrollKey, _reactDom["default"].findDOMNode(this), // eslint-disable-line react/no-find-dom-node
    this.shouldUpdateScroll); // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.

    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _warning["default"])(prevProps.scrollKey === this.props.scrollKey, "<ScrollContainer> does not support changing scrollKey.");

    if (false) { var prevDomNode; }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.context.scrollBehavior.unregisterElement(this.scrollKey);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainer;
}(_react["default"].Component);

ScrollContainer.propTypes = propTypes;
ScrollContainer.contextTypes = contextTypes;
var _default = ScrollContainer;
exports["default"] = _default;

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(22);

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(50);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 1 modules
var es = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__(149);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(23);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__(12);

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__(150);

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(17);

// CONCATENATED MODULE: ./.cache/navigation.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=redirects.reduce(function(map,redirect){map[redirect.fromPath]=redirect;return map;},{});function maybeRedirect(pathname){var redirect=redirectMap[pathname];if(redirect!=null){if(false){ var pageResources; }window.___replace(redirect.toPath);return true;}else{return false;}}var navigation_onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onRouteUpdate",{location:location,prevLocation:prevLocation});// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}// Temp hack while awaiting https://github.com/reach/router/issues/119
if(!options.replace){window.__navigatingToLink=true;}var _parsePath=Object(gatsby_link["parsePath"])(to),pathname=_parsePath.pathname;var redirect=redirectMap[pathname];// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath;pathname=Object(gatsby_link["parsePath"])(to).pathname;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter["a" /* default */].emit("onDelayedLoadPageResources",{pathname:pathname});Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed",{location:window.location});},1000);loader["default"].loadPage(pathname).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status==="error"){window.history.replaceState({},"",location.href);window.location=pathname;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"resetWhitelist"});}console.log("Site has changed on server. Reloading browser");window.location=pathname;}}Object(es["navigate"])(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=Object(api_runner_browser["apiRunner"])("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return _this._stateStorage.read(args);}});if(results.length>0){return results[0];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?hash.slice(1):[0,0];}}return true;}function init(){// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;window.___loader=loader["default"];window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};// Check for initial page-load redirect
maybeRedirect(window.location.pathname);}// Fire on(Pre)RouteUpdate APIs
var RouteUpdates=/*#__PURE__*/function(_React$Component){_inheritsLoose(RouteUpdates,_React$Component);function RouteUpdates(props){var _this2;_this2=_React$Component.call(this,props)||this;navigation_onPreRouteUpdate(props.location,null);return _this2;}var _proto=RouteUpdates.prototype;_proto.componentDidMount=function componentDidMount(){navigation_onRouteUpdate(this.props.location,null);};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState,shouldFireRouteUpdate){if(shouldFireRouteUpdate){navigation_onRouteUpdate(this.props.location,prevProps.location);}};_proto.getSnapshotBeforeUpdate=function getSnapshotBeforeUpdate(prevProps){if(this.props.location.pathname!==prevProps.location.pathname){navigation_onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto.render=function render(){return this.props.children;};return RouteUpdates;}(react_default.a.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__(86);

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__(108);
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }

  for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }

  return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// CONCATENATED MODULE: ./.cache/ensure-resources.js
function ensure_resources_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var ensure_resources_EnsureResources=/*#__PURE__*/function(_React$Component){ensure_resources_inheritsLoose(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader["default"].loadPageSync(location.pathname)};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader["default"].loadPageSync(location.pathname);return{pageResources:pageResources,location:Object.assign({},location)};}return null;};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader["default"].loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!=="error"){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);};_proto.render=function render(){return this.props.children(this.state);};return EnsureResources;}(react_default.a.Component);/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(68);

// EXTERNAL MODULE: ./.cache/match-paths.json
var match_paths = __webpack_require__(151);

// CONCATENATED MODULE: ./.cache/production-app.js
function production_app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Generated during bootstrap
var production_app_loader=new loader["ProdLoader"](async_requires_default.a,match_paths);Object(loader["setLoader"])(production_app_loader);production_app_loader.setApiRunner(api_runner_browser["apiRunner"]);window.asyncRequires=async_requires_default.a;window.___emitter=emitter["a" /* default */];window.___loader=production_app_loader;window.___webpackCompilationHash=window.webpackCompilationHash;init();Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if(Object(api_runner_browser["apiRunner"])("registerServiceWorker").length>0){__webpack_require__(219);}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return react_default.a.createElement(es["BaseContext"].Provider,{value:{baseuri:"/",basepath:"/"}},react_default.a.createElement(page_renderer["a" /* default */],props));};var LocationHandler=/*#__PURE__*/function(_React$Component){production_app_inheritsLoose(LocationHandler,_React$Component);function LocationHandler(){return _React$Component.apply(this,arguments)||this;}var _proto=LocationHandler.prototype;_proto.render=function render(){var _this=this;var location=this.props.location;return react_default.a.createElement(ensure_resources,{location:location},function(_ref){var pageResources=_ref.pageResources,location=_ref.location;return react_default.a.createElement(RouteUpdates,{location:location},react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"],{location:location,shouldUpdateScroll:shouldUpdateScroll},react_default.a.createElement(es["Router"],{basepath:"",location:location,id:"gatsby-focus-wrapper"},react_default.a.createElement(RouteHandler,Object.assign({path:encodeURI(pageResources.page.path==="/404.html"?Object(strip_prefix["a" /* default */])(location.pathname,""):pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react_default.a.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). But
// only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath(Object(strip_prefix["a" /* default */])(browserLoc.pathname,""))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){Object(es["navigate"])(""+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}production_app_loader.loadPage(browserLoc.pathname).then(function(page){if(!page||page.status==="error"){throw new Error("page resources for "+browserLoc.pathname+" not found. Not rendering React");}var Root=function Root(){return react_default.a.createElement(es["Location"],null,function(locationContext){return react_default.a.createElement(LocationHandler,locationContext);});};var WrappedRoot=Object(api_runner_browser["apiRunner"])("wrapRootElement",{element:react_default.a.createElement(Root,null)},react_default.a.createElement(Root,null),function(_ref2){var result=_ref2.result;return{element:result};}).pop();var NewRoot=function NewRoot(){return WrappedRoot;};var renderer=Object(api_runner_browser["apiRunner"])("replaceHydrateFunction",undefined,react_dom_default.a.hydrate)[0];ready_default()(function(){renderer(react_default.a.createElement(NewRoot,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){Object(api_runner_browser["apiRunner"])("onInitialClientRender");});});});});

/***/ })
],[[220,9]]]);
//# sourceMappingURL=app-19d8a422bd1124cbed88.js.map