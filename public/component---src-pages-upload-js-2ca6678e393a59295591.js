(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(e,t,a){"use strict";a.r(t);a(16),a(14),a(9),a(162),a(33);var n=a(0),s=a.n(n),i=a(112),l=a(117),r=a(237),c=a.n(r),o=a(231),m=a(248),u=a(247);function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,a;function n(){var t;return(t=e.call(this)||this)._isMounted=!1,t.converter=new u.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0}),t.state={data:{author:Object(i.a)().nickname,title:"",content:"",description:""},isLoading:!1},t.handleInputChange=t.handleInputChange.bind(d(t)),t.handleSubmit=t.handleSubmit.bind(d(t)),t.setContent=t.setContent.bind(d(t)),t.checkValidity=t.checkValidity.bind(d(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleInputChange=function(e){e.persist(),this.setState(function(t){return t.data[e.target.name]=e.target.value,t})},r.setContent=function(e){this.setState(function(t){return t.data.content=e,t})},r.componentDidMount=function(){this._isMounted=!0},r.checkValidity=function(){return Object.values(this.state.data).reduce(function(e,t){return e&&t})},r.handleSubmit=function(e){if(e&&e.preventDefault(),!this.state.isLoading)if(this.checkValidity()){this.setState(function(e){return e.isLoading=!0,e});var t=new XMLHttpRequest;t.open("POST","https://api.chihengli.me:443/posts",!0),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Authorization","Bearer "+i.g.accessToken);var a=this;t.onreadystatechange=function(){4===this.readyState&&(a._isMounted&&a.setState(function(e){return e.isLoading=!1,e}),200===this.status?l.a.success("Upload the post successfully!",{position:l.a.POSITION.TOP_CENTER}):l.a.error("Can't upload!",{position:l.a.POSITION.TOP_CENTER}))},t.send(JSON.stringify(this.state.data))}else l.a.error("All fields should be filled!",{position:l.a.POSITION.TOP_CENTER})},r.render=function(){return Object(i.c)()?s.a.createElement("div",null,s.a.createElement(o.a,{logo:"Upload New Post"}),s.a.createElement(c.a,{htmlAttributes:{style:"background-color : whitesmoke"}}),s.a.createElement("div",{style:{justifyContent:"center"},className:" hero is-flex section is-fullheight"},s.a.createElement("div",{style:{height:"3.25rem"}}),s.a.createElement(m.a,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,setContent:this.setContent,data:this.state.data,isLoading:this.state.isLoading,converter:this.converter}))):(Object(i.d)(),s.a.createElement("p",null,"Redirecting to login..."))},n}(s.a.Component);t.default=h},231:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(227),l=a(232),r=a(228),c=a(234),o=a.n(c),m=a(235),u=a(90),d=a(112);a(236);var h={background:"#636363",color:"white"},p=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={isActive:!1},t.clickHandler=t.clickHandler.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=document.querySelector(".headroom");new window.Headroom(e,{offset:305,tolerance:5}).init()},c.clickHandler=function(e){this.setState(function(e){return{isActive:!e.isActive}})},c.render=function(){var e=Object(d.c)()?s.a.createElement("span",{onClick:d.e,className:"button is-danger is-outlined"},s.a.createElement("span",{className:"icon"},s.a.createElement(i.a,{icon:r.l})),s.a.createElement("span",null,"Logout")):s.a.createElement("span",{onClick:d.d,className:"button is-success is-outlined"},s.a.createElement("span",{className:"icon"},s.a.createElement(i.a,{icon:r.l})),s.a.createElement("span",null,"Login")),t=this.state.isActive?"is-active":"";return s.a.createElement("header",{style:{zIndex:10},className:"headroom is-fixed-top"},s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("span",{className:"navbar-item is-size-5"},s.a.createElement("p",{style:{fontFamily:"'Roboto', sans-serif",fontWeight:900}},this.props.logo||"Adam's Page")),s.a.createElement("span",{className:"navbar-burger burger "+t+" "+o.a,onClick:this.clickHandler,"data-target":"navbarMenuHeroA"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement(m.SlideDown,{style:{width:"100%"}},s.a.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu "+t},s.a.createElement("div",{className:"navbar-end has-text-centered"},s.a.createElement(u.a,{activeStyle:h,to:"/",className:"navbar-item is-active"},"Home"),s.a.createElement(u.a,{activeStyle:h,to:"/blogs",className:"navbar-item"},"Blog"),s.a.createElement("span",{className:"navbar-item"},s.a.createElement("a",{href:"https://github.com/lichiheng1998",className:"button is-link is-inverted"},s.a.createElement("span",{className:"icon"},s.a.createElement(i.a,{icon:l.d})),s.a.createElement("span",null,"Github"))),s.a.createElement("span",{className:"navbar-item"},e))))))},n}(s.a.Component);t.a=p},248:function(e,t,a){"use strict";a(36),a(9);var n=a(0),s=a.n(n),i=a(230),l=a(227),r=a(228),c=a(90),o=a(261),m=a.n(o);t.a=function(e){var t=s.a.useState("write"),a=t[0],n=t[1],o=e.isLoading?"is-loading":"";return s.a.createElement("div",{className:""+i.wrapper},s.a.createElement("div",{style:{marginBottom:0},className:"columns"},s.a.createElement("div",{style:{paddingTop:0},className:"column is-one-quarter"},s.a.createElement("label",{className:"label"},"Title"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{name:"title",onChange:e.handleInputChange,value:e.data.title,className:"input",type:"text",placeholder:"Title of the post"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement(l.a,{icon:r.g})))),s.a.createElement("div",{style:{paddingTop:0},className:"column"},s.a.createElement("label",{className:"label"},"Description"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{name:"description",onChange:e.handleInputChange,value:e.data.description,className:"input",type:"text",placeholder:"More about the post"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement(l.a,{icon:r.a}))))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Content"),s.a.createElement(m.a,{value:e.data.content,onChange:e.setContent,selectedTab:a,onTabChange:n,generateMarkdownPreview:function(t){return Promise.resolve(e.converter.makeHtml(t))}})),s.a.createElement("br",null),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{onClick:e.handleSubmit,className:"button "+o+" is-link"},"Submit")),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-text"},s.a.createElement(c.a,{to:"/blogs"},"Cancel")))))}}}]);
//# sourceMappingURL=component---src-pages-upload-js-2ca6678e393a59295591.js.map