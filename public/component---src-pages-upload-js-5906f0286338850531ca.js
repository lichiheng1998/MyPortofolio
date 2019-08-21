(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/react-toastify/esm/react-toastify.js + 3 modules
var react_toastify = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(242);
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./src/components/Navbar.js
var Navbar = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(49);

// EXTERNAL MODULE: ./src/components/Planguages.module.css
var Planguages_module = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(226);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/react-mde/lib/js/index.js
var js = __webpack_require__(357);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// CONCATENATED MODULE: ./src/components/UploadForm.js
var UploadForm_UploadForm=function UploadForm(props){var _React$useState=react_default.a.useState("write"),selectedTab=_React$useState[0],setSelectedTab=_React$useState[1];var buttonStyle=props.isLoading?"is-loading":"";return react_default.a.createElement("div",{className:""+Planguages_module["wrapper"]},react_default.a.createElement("div",{style:{marginBottom:0},className:"columns"},react_default.a.createElement("div",{style:{paddingTop:0},className:"column is-one-quarter"},react_default.a.createElement("label",{className:"label"},"Title"),react_default.a.createElement("div",{className:"control has-icons-left"},react_default.a.createElement("input",{name:"title",onChange:props.handleInputChange,value:props.data.title,className:"input",type:"text",placeholder:"Title of the post"}),react_default.a.createElement("span",{className:"icon is-small is-left"},react_default.a.createElement(index_es["a" /* FontAwesomeIcon */],{icon:free_solid_svg_icons_index_es["f" /* faHeading */]})))),react_default.a.createElement("div",{style:{paddingTop:0},className:"column"},react_default.a.createElement("label",{className:"label"},"Description"),react_default.a.createElement("div",{className:"control has-icons-left"},react_default.a.createElement("input",{name:"description",onChange:props.handleInputChange,value:props.data.description,className:"input",type:"text",placeholder:"More about the post"}),react_default.a.createElement("span",{className:"icon is-small is-left"},react_default.a.createElement(index_es["a" /* FontAwesomeIcon */],{icon:free_solid_svg_icons_index_es["a" /* faBook */]}))))),react_default.a.createElement("div",{className:"field"},react_default.a.createElement("label",{className:"label"},"Content"),react_default.a.createElement(js_default.a,{value:props.data.content,onChange:props.setContent,selectedTab:selectedTab,onTabChange:setSelectedTab,generateMarkdownPreview:function generateMarkdownPreview(markdown){return Promise.resolve(props.converter.makeHtml(markdown));}})),react_default.a.createElement("br",null),react_default.a.createElement("div",{className:"field is-grouped"},react_default.a.createElement("div",{className:"control"},react_default.a.createElement("button",{onClick:props.handleSubmit,className:"button "+buttonStyle+" is-link"},"Submit")),react_default.a.createElement("div",{className:"control"},react_default.a.createElement("button",{className:"button is-text"},react_default.a.createElement(gatsby_browser_entry["a" /* Link */],{to:"/blogs"},"Cancel")))));};/* harmony default export */ var components_UploadForm = (UploadForm_UploadForm);
// EXTERNAL MODULE: ./node_modules/showdown/dist/showdown.js
var showdown = __webpack_require__(251);

// CONCATENATED MODULE: ./src/pages/upload.js
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var upload_Upload=/*#__PURE__*/function(_React$Component){_inheritsLoose(Upload,_React$Component);function Upload(){var _this;_this=_React$Component.call(this)||this;_this._isMounted=false;_this.converter=new showdown["Converter"]({tables:true,simplifiedAutoLink:true,strikethrough:true,tasklists:true});_this.state={data:{author:Object(auth["a" /* getProfile */])().nickname,title:"",content:"",description:""},isLoading:false};_this.handleInputChange=_this.handleInputChange.bind(_assertThisInitialized(_this));_this.handleSubmit=_this.handleSubmit.bind(_assertThisInitialized(_this));_this.setContent=_this.setContent.bind(_assertThisInitialized(_this));_this.checkValidity=_this.checkValidity.bind(_assertThisInitialized(_this));return _this;}var _proto=Upload.prototype;_proto.handleInputChange=function handleInputChange(event){event.persist();this.setState(function(prev){prev.data[event.target.name]=event.target.value;return prev;});};_proto.setContent=function setContent(value){this.setState(function(prev){prev.data.content=value;return prev;});};_proto.componentDidMount=function componentDidMount(){this._isMounted=true;};_proto.checkValidity=function checkValidity(){var isValid=Object.values(this.state.data).reduce(function(a,b){return a&&b;});return isValid;};_proto.handleSubmit=function handleSubmit(event){if(event){event.preventDefault();}if(this.state.isLoading){return;}if(!this.checkValidity()){react_toastify["a" /* toast */].error("All fields should be filled!",{position:react_toastify["a" /* toast */].POSITION.TOP_CENTER});return;}this.setState(function(prev){prev.isLoading=true;return prev;});var xhttp=new XMLHttpRequest();xhttp.open("POST",'http://ec2-18-222-3-141.us-east-2.compute.amazonaws.com:5000/upload',true);//Send the proper header information along with the request
xhttp.setRequestHeader("Content-Type","application/json");xhttp.setRequestHeader("Authorization","Bearer "+auth["g" /* tokens */].accessToken);var self=this;xhttp.onreadystatechange=function(){if(this.readyState===4){if(self._isMounted){self.setState(function(prev){prev.isLoading=false;return prev;});}if(this.status===200){react_toastify["a" /* toast */].success("Upload the post successfully!",{position:react_toastify["a" /* toast */].POSITION.TOP_CENTER});}else{react_toastify["a" /* toast */].error("Can't upload!",{position:react_toastify["a" /* toast */].POSITION.TOP_CENTER});}}};xhttp.send(JSON.stringify(this.state.data));};_proto.render=function render(){if(!Object(auth["c" /* isAuthenticated */])()){Object(auth["d" /* login */])();return react_default.a.createElement("p",null,"Redirecting to login...");}return react_default.a.createElement("div",null,react_default.a.createElement(Navbar["a" /* default */],{logo:"Upload New Post"}),react_default.a.createElement(Helmet_default.a,{htmlAttributes:{style:'background-color : whitesmoke'}}),react_default.a.createElement("div",{style:{justifyContent:"center"},className:" hero is-flex section is-fullheight"},react_default.a.createElement("div",{style:{height:"3.25rem"}}),react_default.a.createElement(components_UploadForm,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,setContent:this.setContent,data:this.state.data,isLoading:this.state.isLoading,converter:this.converter})));};return Upload;}(react_default.a.Component);/* harmony default export */ var upload = __webpack_exports__["default"] = (upload_Upload);

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

/***/ })

}]);
//# sourceMappingURL=component---src-pages-upload-js-5906f0286338850531ca.js.map