(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/Navbar.js
var Navbar = __webpack_require__(230);

// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(242);
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__(226);

// EXTERNAL MODULE: ./src/components/Blog.module.css
var Blog_module = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__(225);

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(243);

// CONCATENATED MODULE: ./src/utils/timeUtils.js
var monthDict=["January","February","March","April","May","June","July","August","September","October","November","December"];// Source: http://stackoverflow.com/questions/497790
var dates={convert:function convert(d){// Converts the date in d to a date-object. The input can be:
//   a date object: returned without modification
//  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
//   a number     : Interpreted as number of milliseconds
//                  since 1 Jan 1970 (a timestamp)
//   a string     : Any format supported by the javascript engine, like
//                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
//  an object     : Interpreted as an object with year, month and date
//                  attributes.  **NOTE** month is 0-11.
return d.constructor===Date?d:d.constructor===Array?new Date(d[0],d[1],d[2]):d.constructor===Number?new Date(d):d.constructor===String?new Date(d):typeof d==="object"?new Date(d.year,d.month,d.date):NaN;},compare:function compare(a,b){// Compare two dates (could be of any type supported by the convert
// function above) and returns:
//  -1 : if a < b
//   0 : if a = b
//   1 : if a > b
// NaN : if a or b is an illegal date
// NOTE: The code inside isFinite does an assignment (=).
return isFinite(a=this.convert(a).valueOf())&&isFinite(b=this.convert(b).valueOf())?(a>b)-(a<b):NaN;},inRange:function inRange(d,start,end){// Checks if date in d is between dates in start and end.
// Returns a boolean or NaN:
//    true  : if d is between start and end (inclusive)
//    false : if d is before start or after end
//    NaN   : if one or more of the dates is illegal.
// NOTE: The code inside isFinite does an assignment (=).
return isFinite(d=this.convert(d).valueOf())&&isFinite(start=this.convert(start).valueOf())&&isFinite(end=this.convert(end).valueOf())?start<=d&&d<=end:NaN;}};
// EXTERNAL MODULE: ./src/components/Planguages.module.css
var Planguages_module = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(49);

// CONCATENATED MODULE: ./src/components/Blog.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var Blog_Blog=/*#__PURE__*/function(_React$Component){_inheritsLoose(Blog,_React$Component);function Blog(){var _this;_this=_React$Component.call(this)||this;_this.state={preview:null};return _this;}var _proto=Blog.prototype;_proto.componentDidMount=function componentDidMount(){var _this2=this;Promise.resolve(this.props.converter.makeHtml(this.props.data.content)).then(function(preview){_this2.setState(function(prev){prev.preview=preview;return prev;});});};_proto.render=function render(){var content=this.state.preview?react_default.a.createElement("div",{style:{maxHeight:500,overflow:"auto"},dangerouslySetInnerHTML:{__html:this.state.preview||"<p>&nbsp;</p>"}}):react_default.a.createElement("div",null,"Loading");return react_default.a.createElement("div",{className:"content"},react_default.a.createElement("br",null),content);};return Blog;}(react_default.a.Component);/* harmony default export */ var components_Blog = (Blog_Blog);
// EXTERNAL MODULE: ./node_modules/react-reveal/Fade.js
var Fade = __webpack_require__(232);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade);

// EXTERNAL MODULE: ./node_modules/react-addons-css-transition-group/index.js
var react_addons_css_transition_group = __webpack_require__(275);
var react_addons_css_transition_group_default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group);

// EXTERNAL MODULE: ./src/components/BlogAnimate.css
var BlogAnimate = __webpack_require__(285);

// CONCATENATED MODULE: ./src/components/BlogLink.js
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function BlogLink_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var desStyle={backgroundColor:"whitesmoke",borderLeft:"5px solid #dbdbdb",padding:"0.75em 1.5em",fontStyle:"italic"};var BlogLink_BlogLink=/*#__PURE__*/function(_React$Component){BlogLink_inheritsLoose(BlogLink,_React$Component);function BlogLink(){var _this;_this=_React$Component.call(this)||this;_this.state={isOpen:false};_this.toggle=_this.toggle.bind(_assertThisInitialized(_this));return _this;}var _proto=BlogLink.prototype;_proto.toggle=function toggle(){this.setState(function(prev){prev.isOpen=!prev.isOpen;return prev;});};_proto.render=function render(){var data=this.props.data;var blogContent=this.state.isOpen?react_default.a.createElement(components_Blog,{converter:this.props.converter,data:data}):null;var buttonText=this.state.isOpen?"Close":"Read";var buttonIcon=this.state.isOpen?index_es["b" /* faBookOpen */]:index_es["a" /* faBook */];var time=new Date(data.time);time=time.toLocaleString();return react_default.a.createElement(Fade_default.a,{big:true},react_default.a.createElement("div",{className:Planguages_module["wrapper2"]+" "+Blog_module["blogAnimate"]+" box"},react_default.a.createElement("div",{className:"columns is-vcentered is-marginless is-mobile"},react_default.a.createElement("div",{className:"column is-paddingless"},react_default.a.createElement("strong",{className:"is-size-4 is-size-5-mobile"},data.title),react_default.a.createElement("div",{className:Blog_module["blogInfo"]},react_default.a.createElement("strong",{style:{color:"#9C9C9C"}},data.author)," ",react_default.a.createElement("small",{style:{color:"#C0C0BE"}},time))),react_default.a.createElement("div",{className:"column is-narrow"},react_default.a.createElement("div",{onClick:this.toggle,className:"button is-link is-rounded level-item"},react_default.a.createElement("span",{className:"is-size-7"},buttonText),react_default.a.createElement("span",{className:"icon"},react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */],{icon:buttonIcon}))))),react_default.a.createElement("p",{style:{backgroundColor:"whitesmoke",borderLeft:"5px solid #dbdbdb",padding:"0.75em 1.5em",fontStyle:"italic"}},data.description),react_default.a.createElement(react_addons_css_transition_group_default.a,{transitionName:"blog",transitionEnterTimeout:800,transitionLeaveTimeout:800},blogContent)));};return BlogLink;}(react_default.a.Component);/* harmony default export */ var components_BlogLink = (BlogLink_BlogLink);
// CONCATENATED MODULE: ./src/components/BlogList.js
var BlogList_BlogList=function BlogList(props){var contents=props.contents.sort(function(a,b){return-dates.compare(new Date(a.time),new Date(b.time));});var converter=props.converter;var timeToBlogs={};for(var i=0;i<contents.length;i++){var date=new Date(contents[i].time);var dateString=date.getFullYear()+" "+date.getMonth();if(!timeToBlogs[dateString]){timeToBlogs[dateString]=[];}timeToBlogs[dateString].push({index:i,blog:contents[i]});}var components=Object.keys(timeToBlogs).map(function(key){var monthAndDay=key.split(" ");var blogComponents=timeToBlogs[key].map(function(pack){return react_default.a.createElement(components_BlogLink,{converter:converter,key:pack.blog.id,data:pack.blog});});return react_default.a.createElement("div",{key:key},react_default.a.createElement("div",{style:{margin:"15px 0"}},react_default.a.createElement("span",{style:{textDecoration:"underline",color:"#3273dc"},className:Planguages_module["wrapper2"]+" is-size-4"},monthAndDay[0]+" "+monthDict[monthAndDay[1]],":")),blogComponents);});return components;};/* harmony default export */ var components_BlogList = (BlogList_BlogList);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(89);

// EXTERNAL MODULE: ./mystyles.scss
var mystyles = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/showdown/dist/showdown.js
var showdown = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/react-toastify/esm/react-toastify.js + 3 modules
var react_toastify = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/react-loading/dist/react-loading.js
var react_loading = __webpack_require__(289);
var react_loading_default = /*#__PURE__*/__webpack_require__.n(react_loading);

// CONCATENATED MODULE: ./src/pages/blogs.js
function blogs_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function blogs_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var blogs_blogs=/*#__PURE__*/function(_React$Component){blogs_inheritsLoose(blogs,_React$Component);function blogs(){var _this;_this=_React$Component.call(this)||this;_this._isMounted=false;_this.state={isLoading:true,contents:[],footerStyle:{margin:0}};_this.getComponent=_this.getComponent.bind(blogs_assertThisInitialized(_this));_this.onClick=_this.onClick.bind(blogs_assertThisInitialized(_this));_this.converter=new showdown["Converter"]({tables:true,simplifiedAutoLink:true,strikethrough:true,tasklists:true});return _this;}var _proto=blogs.prototype;_proto.getComponent=function getComponent(){if(this.state.contents.length===0){var flag=this.state.isLoading?react_default.a.createElement(react_loading_default.a,{type:"spin",color:"black"}):"Oops, it seems like there is no posts up to this moment";return react_default.a.createElement("div",{style:{textAlign:"center"},className:"hero is-fullheight-with-navbar"},react_default.a.createElement("span",{style:{display:"table",margin:"auto"}},flag));}else{var blogList=react_default.a.createElement(components_BlogList,{converter:this.converter,contents:this.state.contents});return react_default.a.createElement("div",{className:"hero is-fullheight-with-navbar"},react_default.a.createElement("div",null,blogList));}};_proto.componentDidMount=function componentDidMount(){var _this2=this;this._isMounted=true;// grab an element
var myElement=document.querySelector(".fab");// construct an instance of Headroom, passing the element
var headroom=new window.Headroom(myElement,{offset:0,tolerance:5,classes:{// when element is initialised
initial:Blog_module["fab"],// when scrolling up
pinned:Blog_module["fabPinned"],// when scrolling down
unpinned:Blog_module["fabUnpinned"]}});headroom.init();fetch("http://ec2-18-222-3-141.us-east-2.compute.amazonaws.com:5000/posts").then(function(results){return results.json();}).then(function(data){if(_this2._isMounted&&data){_this2.setState(function(prev){prev.isLoading=false;return prev;});if(data.length!==0){_this2.setState(function(prev){prev.footerStyle={};prev.contents=data;return prev;});}};}).catch(function(err){react_toastify["a" /* toast */].error("Can't connect to the backend",{position:react_toastify["a" /* toast */].POSITION.TOP_CENTER});});};_proto.componentWillUnmount=function componentWillUnmount(){this._isMounted=false;};_proto.onClick=function onClick(){if(Object(auth["c" /* isAuthenticated */])()){Object(gatsby_browser_entry["b" /* navigate */])("/upload");}else{react_toastify["a" /* toast */].warning("Please login in first",{position:react_toastify["a" /* toast */].POSITION.TOP_CENTER});}};_proto.render=function render(){var thingToRender=this.getComponent();return react_default.a.createElement("div",null,react_default.a.createElement(Helmet_default.a,{htmlAttributes:{style:'background-color : #F4F7FC'}}),react_default.a.createElement(Navbar["a" /* default */],{logo:"Blogs"}),react_default.a.createElement("div",{style:{height:"3.25rem"}}),react_default.a.createElement("div",{style:{zIndex:10},className:""+Blog_module["fab"]},react_default.a.createElement("span",{onClick:this.onClick,className:"fab "+Blog_module["fabActionButton"]},react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */],{icon:index_es["g" /* faPlus */]}))),thingToRender,react_default.a.createElement(Footer["a" /* default */],{style:this.state.footerStyle}));};return blogs;}(react_default.a.Component);/* harmony default export */ var pages_blogs = __webpack_exports__["default"] = (blogs_blogs);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(226);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(236);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(237);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(112);
/* harmony import */ var react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(238);
/* harmony import */ var react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slidedown_lib_slidedown_css__WEBPACK_IMPORTED_MODULE_8__);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var activeStyle={background:"#636363",color:"white"};var Navbar=/*#__PURE__*/function(_React$Component){_inheritsLoose(Navbar,_React$Component);function Navbar(){var _this;_this=_React$Component.call(this)||this;_this.state={isActive:false};_this.clickHandler=_this.clickHandler.bind(_assertThisInitialized(_this));return _this;}var _proto=Navbar.prototype;_proto.componentDidMount=function componentDidMount(){// grab an element
var myElement=document.querySelector(".headroom");// construct an instance of Headroom, passing the element
var headroom=new window.Headroom(myElement,{"offset":305,"tolerance":5});// initialise
headroom.init();};_proto.clickHandler=function clickHandler(event){this.setState(function(prev){return{isActive:!prev.isActive};});};_proto.render=function render(){var button=Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__[/* isAuthenticated */ "c"])()?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{onClick:_utils_auth__WEBPACK_IMPORTED_MODULE_7__[/* logout */ "e"],className:"button is-danger is-outlined"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"],{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[/* faUserCircle */ "k"]})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Logout")):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{onClick:_utils_auth__WEBPACK_IMPORTED_MODULE_7__[/* login */ "d"],className:"button is-success is-outlined"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"],{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[/* faUserCircle */ "k"]})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Login"));var extra=this.state.isActive?"is-active":"";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",{style:{zIndex:10},className:"headroom is-fixed-top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{className:"navbar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-brand"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-item is-size-5"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{fontFamily:"'Roboto', sans-serif",fontWeight:900}},this.props.logo||"Adam's Page")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-burger burger "+extra+" "+_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a,onClick:this.clickHandler,"data-target":"navbarMenuHeroA"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slidedown__WEBPACK_IMPORTED_MODULE_5__["SlideDown"],{style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu "+extra},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-end has-text-centered"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "a"],{activeStyle:activeStyle,to:"/",className:"navbar-item is-active"},"Home"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "a"],{activeStyle:activeStyle,to:"/blogs",className:"navbar-item"},"Blog"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/lichiheng1998",className:"button is-link is-inverted"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"],{icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__[/* faGithub */ "d"]})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Github"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-item"},button))))));};return Navbar;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(245);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(225);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(229);
/* harmony import */ var _images_QRcode_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(240);
/* harmony import */ var _images_QRcode_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_QRcode_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(246);
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_6__);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var Footer=/*#__PURE__*/function(_React$Component){_inheritsLoose(Footer,_React$Component);function Footer(){var _this;_this=_React$Component.call(this)||this;_this.toggle=_this.toggle.bind(_assertThisInitialized(_this));return _this;}var _proto=Footer.prototype;_proto.componentDidMount=function componentDidMount(){this.wechat=document.querySelector("#weixin");};_proto.toggle=function toggle(){this.wechat.classList.toggle("is-active");};_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{style:this.props.style,className:"section has-text-centered "+_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:""+_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icons},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_6___default.a,{right:true},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://github.com/lichiheng1998"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[/* FontAwesomeIcon */ "a"],{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[/* faGithub */ "d"]})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100010010053738"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[/* FontAwesomeIcon */ "a"],{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[/* faFacebook */ "c"]})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"www.linkedin.com/in/chiheng-li-b6663a18b"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[/* FontAwesomeIcon */ "a"],{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[/* faLinkedin */ "e"]})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[/* FontAwesomeIcon */ "a"],{onClick:this.toggle,className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,icon:_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[/* faWeixin */ "g"]}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.email}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name},"Chiheng Li © 2019, Crafted with ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://reactjs.org/"},"react")," and ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://bulma.io/"},"bulma")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"weixin",className:"modal"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"modal-background"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"modal-content"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"image is-3by3"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_images_QRcode_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"My wechat QRcode"}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"modal-close is-large",onClick:this.toggle,"aria-label":"close"})));};return Footer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/QRcode-ce0a348a22826fc8b647caa250bba0f4.jpg";

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
  enter: _propTypes2["default"].string,
  leave: _propTypes2["default"].string,
  active: _propTypes2["default"].string
}), _propTypes2["default"].shape({
  enter: _propTypes2["default"].string,
  enterActive: _propTypes2["default"].string,
  leave: _propTypes2["default"].string,
  leaveActive: _propTypes2["default"].string,
  appear: _propTypes2["default"].string,
  appearActive: _propTypes2["default"].string
})]);

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


module.exports = __webpack_require__(276);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(152);

__webpack_require__(44);

__webpack_require__(22);

exports.__esModule = true;

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(277);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(280);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(249);

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

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,
  transitionAppear: _propTypes2["default"].bool,
  transitionEnter: _propTypes2["default"].bool,
  transitionLeave: _propTypes2["default"].bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};
var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2["default"].createElement(_CSSTransitionGroupChild2["default"], {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2["default"].createElement(_TransitionGroup2["default"], _extends({}, this.props, {
      childFactory: this._wrapChild
    }));
  };

  return CSSTransitionGroup;
}(_react2["default"].Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';
CSSTransitionGroup.propTypes =  false ? undefined : {};
CSSTransitionGroup.defaultProps = defaultProps;
exports["default"] = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

__webpack_require__(46);

__webpack_require__(152);

__webpack_require__(44);

__webpack_require__(22);

exports.__esModule = true;

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

var _chainFunction = __webpack_require__(278);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(117);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(279);

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

var propTypes = {
  component: _propTypes2["default"].any,
  childFactory: _propTypes2["default"].func,
  children: _propTypes2["default"].node
};
var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];
      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);

          delete newChildren[key];
          return {
            children: newChildren
          };
        });
      }
    };

    _this.childRefs = Object.create(null);
    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;

    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;
    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);

      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);

      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    } // If we want to someday check for reordering, we could do it here.

  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });
    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this; // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child


    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];

      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';

        var factoryChild = _this3.props.childFactory(child);

        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? undefined : void 0; // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.

        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2["default"])(child.ref, ref);
        } // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.


        childrenToRender.push(_react2["default"].cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    } // Do not forward TransitionGroup props to primitive DOM nodes


    var props = _extends({}, this.props);

    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;
    return _react2["default"].createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2["default"].Component);

TransitionGroup.displayName = 'TransitionGroup';
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;
exports["default"] = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);

__webpack_require__(59);

module.exports = function chain() {
  var len = arguments.length;
  var args = [];

  for (var i = 0; i < len; i++) {
    args[i] = arguments[i];
  }

  args = args.filter(function (fn) {
    return fn != null;
  });
  if (args.length === 0) return undefined;
  if (args.length === 1) return args[0];
  return args.reduce(function (current, next) {
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  });
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);

__webpack_require__(28);

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);
/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */


function getChildMapping(children) {
  if (!children) {
    return children;
  }

  var result = {};

  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
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
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = {};
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
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

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(28);

__webpack_require__(152);

__webpack_require__(44);

__webpack_require__(22);

exports.__esModule = true;

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

var _addClass = __webpack_require__(281);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(283);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(168);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(284);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(50);

var _PropTypes = __webpack_require__(249);

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

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2["default"].node,
  name: _PropTypes.nameShape.isRequired,
  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2["default"].bool,
  enter: _propTypes2["default"].bool,
  leave: _propTypes2["default"].bool,
  appearTimeout: _propTypes2["default"].number,
  enterTimeout: _propTypes2["default"].number,
  leaveTimeout: _propTypes2["default"].number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });
    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }

      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;
    (0, _addClass2["default"])(node, className); // Need to do this to actually trigger a transition.

    this.queueClassAndNode(activeClassName, node); // Clean-up the animation after the specified delay

    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();
      (0, _removeClass2["default"])(node, className);
      (0, _removeClass2["default"])(node, activeClassName);
      if (removeListeners) removeListeners(); // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.

      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2["default"])(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.

        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */

        (0, _addClass2["default"])(obj.node, obj.className);
      });
    }

    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);

    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2["default"].cloneElement(_react2["default"].Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2["default"].Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';
CSSTransitionGroupChild.propTypes =  false ? undefined : {};
exports["default"] = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(282));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(153);

__webpack_require__(23);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

var _interopRequireDefault = __webpack_require__(25);

exports.__esModule = true;
exports["default"] = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(92));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM["default"]) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports["default"] = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);

__webpack_require__(290);

__webpack_require__(46);

__webpack_require__(60);

__webpack_require__(70);

__webpack_require__(48);

__webpack_require__(69);

__webpack_require__(152);

__webpack_require__(44);

__webpack_require__(233);

__webpack_require__(20);

__webpack_require__(19);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(24);

__webpack_require__(47);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(22);

__webpack_require__(58);

__webpack_require__(45);

__webpack_require__(23);

__webpack_require__(87);

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(typeof self !== 'undefined' ? self : this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 7);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
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

      var validateFormat = function validateFormat(format) {};

      if (false) {}

      function invariant(condition, format, a, b, c, d, e, f) {
        validateFormat(format);

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
      }

      module.exports = invariant;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
       * 
       */

      function makeEmptyFunction(arg) {
        return function () {
          return arg;
        };
      }
      /**
       * This function accepts and discards inputs; it has no side effects. This is
       * primarily useful idiomatically for overridable function endpoints which
       * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
       */


      var emptyFunction = function emptyFunction() {};

      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);

      emptyFunction.thatReturnsThis = function () {
        return this;
      };

      emptyFunction.thatReturnsArgument = function (arg) {
        return arg;
      };

      module.exports = emptyFunction;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */

      /* eslint-disable no-unused-vars */

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
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var emptyFunction = __webpack_require__(1);
      /**
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */


      var warning = emptyFunction;

      if (false) { var printWarning; }

      module.exports = warning;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      module.exports = ReactPropTypesSecret;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var emptyObject = {};

      if (false) {}

      module.exports = emptyObject;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      if (false) { var loggedTypeFailures, ReactPropTypesSecret, warning, invariant; }
      /**
       * Assert that the values match with the type specs.
       * Error messages are memorized and will only be shown once.
       *
       * @param {object} typeSpecs Map of name to a ReactPropType
       * @param {object} values Runtime values that need to be type-checked
       * @param {string} location e.g. "prop", "context", "child context"
       * @param {string} componentName Name of the component for error messages.
       * @param {?Function} getStack Returns the component stack.
       * @private
       */


      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (false) { var stack, error, typeSpecName; }
      }

      module.exports = checkPropTypes;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

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

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _react = __webpack_require__(8);

      var _react2 = _interopRequireDefault(_react);

      var _propTypes = __webpack_require__(11);

      var _propTypes2 = _interopRequireDefault(_propTypes);

      var _svg = __webpack_require__(14);

      var svgSources = _interopRequireWildcard(_svg);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

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

      var Loading = function (_Component) {
        _inherits(Loading, _Component);

        function Loading() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, Loading);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            delayed: _this.props.delay > 0
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Loading, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this2 = this;

            var delay = this.props.delay;
            var delayed = this.state.delayed;

            if (delayed) {
              this.timeout = setTimeout(function () {
                _this2.setState({
                  delayed: false
                });
              }, delay);
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var timeout = this.timeout;

            if (timeout) {
              clearTimeout(timeout);
            }
          }
        }, {
          key: 'render',
          value: function render() {
            var _props = this.props,
                color = _props.color,
                delay = _props.delay,
                type = _props.type,
                height = _props.height,
                width = _props.width,
                restProps = _objectWithoutProperties(_props, ['color', 'delay', 'type', 'height', 'width']);

            var selectedType = this.state.delayed ? 'blank' : type;
            var svg = svgSources[selectedType];
            var style = {
              fill: color,
              height: height,
              width: width
            };
            return _react2["default"].createElement('div', _extends({
              style: style,
              dangerouslySetInnerHTML: {
                __html: svg
              }
            }, restProps));
          }
        }]);

        return Loading;
      }(_react.Component);

      Loading.propTypes = {
        color: _propTypes2["default"].string,
        delay: _propTypes2["default"].number,
        type: _propTypes2["default"].string,
        height: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
        width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number])
      };
      Loading.defaultProps = {
        color: '#fff',
        delay: 0,
        type: 'balls',
        height: 64,
        width: 64
      };
      exports["default"] = Loading;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      if (true) {
        module.exports = __webpack_require__(9);
      } else {}
      /***/

    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /** @license React v16.3.2
       * react.production.min.js
       *
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var m = __webpack_require__(2),
          n = __webpack_require__(0),
          p = __webpack_require__(5),
          q = __webpack_require__(1),
          r = "function" === typeof Symbol && Symbol["for"],
          t = r ? Symbol["for"]("react.element") : 60103,
          u = r ? Symbol["for"]("react.portal") : 60106,
          v = r ? Symbol["for"]("react.fragment") : 60107,
          w = r ? Symbol["for"]("react.strict_mode") : 60108,
          x = r ? Symbol["for"]("react.provider") : 60109,
          y = r ? Symbol["for"]("react.context") : 60110,
          z = r ? Symbol["for"]("react.async_mode") : 60111,
          A = r ? Symbol["for"]("react.forward_ref") : 60112,
          B = "function" === typeof Symbol && Symbol.iterator;

      function C(a) {
        for (var b = arguments.length - 1, e = "http://reactjs.org/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
          e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
        }

        n(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
      }

      var D = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      };

      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = p;
        this.updater = e || D;
      }

      E.prototype.isReactComponent = {};

      E.prototype.setState = function (a, b) {
        "object" !== typeof a && "function" !== typeof a && null != a ? C("85") : void 0;
        this.updater.enqueueSetState(this, a, b, "setState");
      };

      E.prototype.forceUpdate = function (a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };

      function F() {}

      F.prototype = E.prototype;

      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = p;
        this.updater = e || D;
      }

      var H = G.prototype = new F();
      H.constructor = G;
      m(H, E.prototype);
      H.isPureReactComponent = !0;
      var I = {
        current: null
      },
          J = Object.prototype.hasOwnProperty,
          K = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

      function L(a, b, e) {
        var c = void 0,
            d = {},
            g = null,
            h = null;
        if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
          J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = b[c]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;else if (1 < f) {
          for (var k = Array(f), l = 0; l < f; l++) {
            k[l] = arguments[l + 2];
          }

          d.children = k;
        }
        if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
          void 0 === d[c] && (d[c] = f[c]);
        }
        return {
          $$typeof: t,
          type: a,
          key: g,
          ref: h,
          props: d,
          _owner: I.current
        };
      }

      function M(a) {
        return "object" === typeof a && null !== a && a.$$typeof === t;
      }

      function escape(a) {
        var b = {
          "\x3d": "\x3d0",
          ":": "\x3d2"
        };
        return "$" + ("" + a).replace(/[=:]/g, function (a) {
          return b[a];
        });
      }

      var N = /\/+/g,
          O = [];

      function P(a, b, e, c) {
        if (O.length) {
          var d = O.pop();
          d.result = a;
          d.keyPrefix = b;
          d.func = e;
          d.context = c;
          d.count = 0;
          return d;
        }

        return {
          result: a,
          keyPrefix: b,
          func: e,
          context: c,
          count: 0
        };
      }

      function Q(a) {
        a.result = null;
        a.keyPrefix = null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > O.length && O.push(a);
      }

      function R(a, b, e, c) {
        var d = typeof a;
        if ("undefined" === d || "boolean" === d) a = null;
        var g = !1;
        if (null === a) g = !0;else switch (d) {
          case "string":
          case "number":
            g = !0;
            break;

          case "object":
            switch (a.$$typeof) {
              case t:
              case u:
                g = !0;
            }

        }
        if (g) return e(c, a, "" === b ? "." + S(a, 0) : b), 1;
        g = 0;
        b = "" === b ? "." : b + ":";
        if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
          d = a[h];
          var f = b + S(d, h);
          g += R(d, f, e, c);
        } else if (null === a || "undefined" === typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
          d = d.value, f = b + S(d, h++), g += R(d, f, e, c);
        } else "object" === d && (e = "" + a, C("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
        return g;
      }

      function S(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
      }

      function T(a, b) {
        a.func.call(a.context, b, a.count++);
      }

      function U(a, b, e) {
        var c = a.result,
            d = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a) ? V(a, c, e, q.thatReturnsArgument) : null != a && (M(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(N, "$\x26/") + "/") + e, a = {
          $$typeof: t,
          type: a.type,
          key: b,
          ref: a.ref,
          props: a.props,
          _owner: a._owner
        }), c.push(a));
      }

      function V(a, b, e, c, d) {
        var g = "";
        null != e && (g = ("" + e).replace(N, "$\x26/") + "/");
        b = P(b, g, c, d);
        null == a || R(a, "", U, b);
        Q(b);
      }

      var W = {
        Children: {
          map: function map(a, b, e) {
            if (null == a) return a;
            var c = [];
            V(a, c, null, b, e);
            return c;
          },
          forEach: function forEach(a, b, e) {
            if (null == a) return a;
            b = P(null, null, b, e);
            null == a || R(a, "", T, b);
            Q(b);
          },
          count: function count(a) {
            return null == a ? 0 : R(a, "", q.thatReturnsNull, null);
          },
          toArray: function toArray(a) {
            var b = [];
            V(a, b, null, q.thatReturnsArgument);
            return b;
          },
          only: function only(a) {
            M(a) ? void 0 : C("143");
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
            $$typeof: y,
            _calculateChangedBits: b,
            _defaultValue: a,
            _currentValue: a,
            _changedBits: 0,
            Provider: null,
            Consumer: null
          };
          a.Provider = {
            $$typeof: x,
            _context: a
          };
          return a.Consumer = a;
        },
        forwardRef: function forwardRef(a) {
          return {
            $$typeof: A,
            render: a
          };
        },
        Fragment: v,
        StrictMode: w,
        unstable_AsyncMode: z,
        createElement: L,
        cloneElement: function cloneElement(a, b, e) {
          null === a || void 0 === a ? C("267", a) : void 0;
          var c = void 0,
              d = m({}, a.props),
              g = a.key,
              h = a.ref,
              f = a._owner;

          if (null != b) {
            void 0 !== b.ref && (h = b.ref, f = I.current);
            void 0 !== b.key && (g = "" + b.key);
            var k = void 0;
            a.type && a.type.defaultProps && (k = a.type.defaultProps);

            for (c in b) {
              J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== k ? k[c] : b[c]);
            }
          }

          c = arguments.length - 2;
          if (1 === c) d.children = e;else if (1 < c) {
            k = Array(c);

            for (var l = 0; l < c; l++) {
              k[l] = arguments[l + 2];
            }

            d.children = k;
          }
          return {
            $$typeof: t,
            type: a.type,
            key: g,
            ref: h,
            props: d,
            _owner: f
          };
        },
        createFactory: function createFactory(a) {
          var b = L.bind(null, a);
          b.type = a;
          return b;
        },
        isValidElement: M,
        version: "16.3.2",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: I,
          assign: m
        }
      },
          X = Object.freeze({
        "default": W
      }),
          Y = X && W || X;
      module.exports = Y["default"] ? Y["default"] : Y;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /** @license React v16.3.2
       * react.development.js
       *
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      if (false) {}
      /***/

    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(13)();
      }
      /***/

    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var emptyFunction = __webpack_require__(1);

      var invariant = __webpack_require__(0);

      var warning = __webpack_require__(3);

      var assign = __webpack_require__(2);

      var ReactPropTypesSecret = __webpack_require__(4);

      var checkPropTypes = __webpack_require__(6);

      module.exports = function (isValidElement, throwOnDirectAccess) {
        /* global Symbol */
        var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

        /**
         * Returns the iterator method function contained on the iterable object.
         *
         * Be sure to invoke the function with the iterable as context:
         *
         *     var iteratorFn = getIteratorFn(myIterable);
         *     if (iteratorFn) {
         *       var iterator = iteratorFn.call(myIterable);
         *       ...
         *     }
         *
         * @param {?object} maybeIterable
         * @return {?function}
         */

        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

          if (typeof iteratorFn === 'function') {
            return iteratorFn;
          }
        }
        /**
         * Collection of methods that allow declaration and validation of props that are
         * supplied to React components. Example usage:
         *
         *   var Props = require('ReactPropTypes');
         *   var MyArticle = React.createClass({
         *     propTypes: {
         *       // An optional string prop named "description".
         *       description: Props.string,
         *
         *       // A required enum prop named "category".
         *       category: Props.oneOf(['News','Photos']).isRequired,
         *
         *       // A prop named "dialog" that requires an instance of Dialog.
         *       dialog: Props.instanceOf(Dialog).isRequired
         *     },
         *     render: function() { ... }
         *   });
         *
         * A more formal specification of how these methods are used:
         *
         *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
         *   decl := ReactPropTypes.{type}(.isRequired)?
         *
         * Each and every declaration produces a function with the same signature. This
         * allows the creation of custom validation functions. For example:
         *
         *  var MyLink = React.createClass({
         *    propTypes: {
         *      // An optional string or URI prop named "href".
         *      href: function(props, propName, componentName) {
         *        var propValue = props[propName];
         *        if (propValue != null && typeof propValue !== 'string' &&
         *            !(propValue instanceof URI)) {
         *          return new Error(
         *            'Expected a string or an URI for ' + propName + ' in ' +
         *            componentName
         *          );
         *        }
         *      }
         *    },
         *    render: function() {...}
         *  });
         *
         * @internal
         */


        var ANONYMOUS = '<<anonymous>>'; // Important!
        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

        var ReactPropTypes = {
          array: createPrimitiveTypeChecker('array'),
          bool: createPrimitiveTypeChecker('boolean'),
          func: createPrimitiveTypeChecker('function'),
          number: createPrimitiveTypeChecker('number'),
          object: createPrimitiveTypeChecker('object'),
          string: createPrimitiveTypeChecker('string'),
          symbol: createPrimitiveTypeChecker('symbol'),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        /**
         * inlined Object.is polyfill to avoid requiring consumers ship their own
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
         */

        /*eslint-disable no-self-compare*/

        function is(x, y) {
          // SameValue algorithm
          if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
          } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
          }
        }
        /*eslint-enable no-self-compare*/

        /**
         * We use an Error-like object for backward compatibility as people may call
         * PropTypes directly and inspect their output. However, we don't use real
         * Errors anymore. We don't inspect their stack anyway, and creating them
         * is prohibitively expensive if they are created too often, such as what
         * happens in oneOfType() for any type before the one that matched.
         */


        function PropTypeError(message) {
          this.message = message;
          this.stack = '';
        } // Make `instanceof Error` still work for returned errors.


        PropTypeError.prototype = Error.prototype;

        function createChainableTypeChecker(validate) {
          if (false) { var manualPropTypeWarningCount, manualPropTypeCallCache; }

          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;

            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                // New behavior only for users of `prop-types` package
                invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              } else if (false) { var cacheKey; }
            }

            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                }

                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
              }

              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }

          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }

        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);

            if (propType !== expectedType) {
              // `propValue` being instance of, say, date/regexp, pass the 'object'
              // check, but we can offer a more precise error message here rather than
              // 'of type `object`'.
              var preciseType = getPreciseType(propValue);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunction.thatReturnsNull);
        }

        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }

            var propValue = props[propName];

            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }

            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

              if (error instanceof Error) {
                return error;
              }
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
             false ? undefined : void 0;
            return emptyFunction.thatReturnsNull;
          }

          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }

            var valuesString = JSON.stringify(expectedValues);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
          }

          return createChainableTypeChecker(validate);
        }

        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }

            var propValue = props[propName];
            var propType = getPropType(propValue);

            if (propType !== 'object') {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }

            for (var key in propValue) {
              if (propValue.hasOwnProperty(key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

                if (error instanceof Error) {
                  return error;
                }
              }
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
             false ? undefined : void 0;
            return emptyFunction.thatReturnsNull;
          }

          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];

            if (typeof checker !== 'function') {
              warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
              return emptyFunction.thatReturnsNull;
            }
          }

          function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];

              if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                return null;
              }
            }

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
          }

          return createChainableTypeChecker(validate);
        }

        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);

            if (propType !== 'object') {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }

            for (var key in shapeTypes) {
              var checker = shapeTypes[key];

              if (!checker) {
                continue;
              }

              var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

              if (error) {
                return error;
              }
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);

            if (propType !== 'object') {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            } // We need to check all keys in case some are required but missing from
            // props.


            var allKeys = assign({}, props[propName], shapeTypes);

            for (var key in allKeys) {
              var checker = shapeTypes[key];

              if (!checker) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
              }

              var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

              if (error) {
                return error;
              }
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function isNode(propValue) {
          switch (typeof propValue) {
            case 'number':
            case 'string':
            case 'undefined':
              return true;

            case 'boolean':
              return !propValue;

            case 'object':
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }

              if (propValue === null || isValidElement(propValue)) {
                return true;
              }

              var iteratorFn = getIteratorFn(propValue);

              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;

                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  // Iterator will provide entry [k,v] tuples rather than values.
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;

                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }

              return true;

            default:
              return false;
          }
        }

        function isSymbol(propType, propValue) {
          // Native Symbol.
          if (propType === 'symbol') {
            return true;
          } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


          if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
          } // Fallback for non-spec compliant Symbols which are polyfilled.


          if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
          }

          return false;
        } // Equivalent of `typeof` but with special handling for array and regexp.


        function getPropType(propValue) {
          var propType = typeof propValue;

          if (Array.isArray(propValue)) {
            return 'array';
          }

          if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
          }

          if (isSymbol(propType, propValue)) {
            return 'symbol';
          }

          return propType;
        } // This handles more types than `getPropType`. Only used for error messages.
        // See `createPrimitiveTypeChecker`.


        function getPreciseType(propValue) {
          if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
          }

          var propType = getPropType(propValue);

          if (propType === 'object') {
            if (propValue instanceof Date) {
              return 'date';
            } else if (propValue instanceof RegExp) {
              return 'regexp';
            }
          }

          return propType;
        } // Returns a string that is postfixed to a warning about an invalid type.
        // For example, "undefined" or "of type array"


        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);

          switch (type) {
            case 'array':
            case 'object':
              return 'an ' + type;

            case 'boolean':
            case 'date':
            case 'regexp':
              return 'a ' + type;

            default:
              return type;
          }
        } // Returns class name of the object, if any.


        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }

          return propValue.constructor.name;
        }

        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
      /***/

    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var emptyFunction = __webpack_require__(1);

      var invariant = __webpack_require__(0);

      var ReactPropTypesSecret = __webpack_require__(4);

      module.exports = function () {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
          }

          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
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
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim
        };
        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
      /***/

    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _blank = __webpack_require__(15);

      Object.defineProperty(exports, 'blank', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_blank)["default"];
        }
      });

      var _loadingBalls = __webpack_require__(16);

      Object.defineProperty(exports, 'balls', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingBalls)["default"];
        }
      });

      var _loadingBars = __webpack_require__(17);

      Object.defineProperty(exports, 'bars', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingBars)["default"];
        }
      });

      var _loadingBubbles = __webpack_require__(18);

      Object.defineProperty(exports, 'bubbles', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingBubbles)["default"];
        }
      });

      var _loadingCubes = __webpack_require__(19);

      Object.defineProperty(exports, 'cubes', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingCubes)["default"];
        }
      });

      var _loadingCylon = __webpack_require__(20);

      Object.defineProperty(exports, 'cylon', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingCylon)["default"];
        }
      });

      var _loadingSpin = __webpack_require__(21);

      Object.defineProperty(exports, 'spin', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingSpin)["default"];
        }
      });

      var _loadingSpinningBubbles = __webpack_require__(22);

      Object.defineProperty(exports, 'spinningBubbles', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingSpinningBubbles)["default"];
        }
      });

      var _loadingSpokes = __webpack_require__(23);

      Object.defineProperty(exports, 'spokes', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_loadingSpokes)["default"];
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    },
    /* 15 */

    /***/
    function (module, exports) {
      module.exports = "<svg class=\"icon-blank\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"></svg>\n";
      /***/
    },
    /* 16 */

    /***/
    function (module, exports) {
      module.exports = "<svg class=\"icon-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n";
      /***/
    },
    /* 17 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(2)\" d=\"M0 12 V20 H4 V12z\"> \n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(8)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(14)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(20)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(26)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.8\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n";
      /***/
    },
    /* 18 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle transform=\"translate(8 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(16 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.3\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(24 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n";
      /***/
    },
    /* 19 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n";
      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.5\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.1s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.25\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.2s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n";
      /***/
    },
    /* 21 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".25\" d=\"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4\"/>\n  <path d=\"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z\">\n    <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 16 16\" to=\"360 16 16\" dur=\"0.8s\" repeatCount=\"indefinite\" />\n  </path>\n</svg>\n";
      /***/
    },
    /* 22 */

    /***/
    function (module, exports) {
      module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(45 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(90 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(135 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(225 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.625s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(270 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(315 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n";
      /***/
    },
    /* 23 */

    /***/
    function (module, exports) {
      module.exports = "<svg id=\"loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(0 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(45 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(90 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(135 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(180 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(225 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.675s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(270 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(315 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\"/>\n  </path>\n</svg>\n";
      /***/
    }])
  );
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(7);
var meta = __webpack_require__(61).onFreeze;

__webpack_require__(156)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ })

}]);
//# sourceMappingURL=component---src-pages-blogs-js-b4624e928b422a8a0dfa.js.map