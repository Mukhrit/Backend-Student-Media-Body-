(this.webpackJsonpsmb=this.webpackJsonpsmb||[]).push([[0],{105:function(e,a,t){e.exports=t.p+"static/media/photo-1.2822bb19.jpeg"},106:function(e,a,t){e.exports=t.p+"static/media/photo-2.3308d0a8.jpeg"},107:function(e,a,t){e.exports=t.p+"static/media/rohan.76953c2b.jpeg"},108:function(e,a,t){e.exports=t.p+"static/media/photo-4.ebfeb8b3.jpeg"},156:function(e,a,t){e.exports=t(370)},166:function(e,a,t){},167:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},262:function(e,a,t){},369:function(e,a,t){},370:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),s=t.n(c),r=(t(76),t(161),t(162),t(163),t(164),t(165),t(166),t(167),t(11)),i=t(12),m=t(14),o=t(13),d=t(26),u=t(372),E=t(373),h=t(374),p=t(389),f=t(375),v=t(376),N=t(29),g=function(e){Object(m.a)(n,e);var a=Object(o.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={isNavOpen:!1},t.toggleNav=t.toggleNav.bind(Object(d.a)(t)),t}return Object(i.a)(n,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,{style:{backgroundColor:"#0e0e0e"},expand:"md"},l.a.createElement("div",{className:"container "},l.a.createElement(E.a,{onClick:this.toggleNav},l.a.createElement("span",{className:"fa fa-bars",style:{color:"white"}})),l.a.createElement(h.a,{href:"\\"},l.a.createElement("img",{src:t(77),height:"45",alt:"Ingenuity"})),l.a.createElement(p.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(f.a,{className:"ml-auto",style:{fontSize:"17px"},navbar:!0},l.a.createElement(v.a,null,l.a.createElement(N.b,{className:"nav-link nav-font hvr-push",to:"/editorials"},"Editorials")),l.a.createElement(v.a,null,l.a.createElement(N.b,{className:"nav-link nav-font hvr-push",to:"/achievements"},"Achievements")),l.a.createElement(v.a,null,l.a.createElement(N.b,{className:"nav-link nav-font hvr-push",to:"/experience"},"Intern Views")),l.a.createElement(v.a,null,l.a.createElement(N.b,{className:"nav-link nav-font hvr-push",to:"/postBlog"},"Create")),l.a.createElement(v.a,null,l.a.createElement(N.b,{className:"nav-link nav-font hvr-push",to:"/ourteam"},"About Us")))))))}}]),n}(n.Component),b=t(37),y=t(40),x=t.n(y),w=t(377),k=t(378),j=t(379),O=t(380),S=t(381),C=t(382),F="http://2225a711b501.ngrok.io/";function I(e){return e.valid?null:l.a.createElement("div",{className:"error-msg"},e.message)}var M=function(e){Object(m.a)(n,e);var a=Object(o.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).validateForm=function(){var e=t.state,a=e.validname,n=e.validmessage;t.setState({formValid:n&&a})},t.updatename=function(e){t.setState({name:e},t.validatename)},t.updatemessage=function(e){t.setState({message:e},t.validatemessage)},t.validatename=function(){var e=t.state.name,a=!0,n=Object(b.a)({},t.state.errmessage);e.length<3&&(a=!1,n.name="Must be at least 3 characters long"),t.setState({validname:a,errmessage:n},t.validateForm)},t.validatemessage=function(){var e=t.state.message,a=!0,n=Object(b.a)({},t.state.errmessage);e.length<3&&(a=!1,n.message="Must be at least 3 characters long"),t.setState({validmessage:a,errmessage:n},t.validateForm)},t.state={name:"",message:"",formValid:!1,validname:!1,validmessage:!1,errmessage:{}},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(i.a)(n,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(this.state)),alert("Thank you for your valuable time .Your feeback has received "),x.a.post(F+"feedback",{name:this.state.name,message:this.state.message}).then((function(e){console.log(e.data)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("footer",{className:"main-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"logo"},l.a.createElement("h6",{className:"text-white"},"Ingenuity")),l.a.createElement("div",{className:"contact-details"},l.a.createElement("p",null,"Near Bopdev Ghat, Kondhwa Annexe, Yewalewadi, Pune, Maharashtra 411048"),l.a.createElement("p",null,"Phone: "),l.a.createElement("p",null,"Email:"," ",l.a.createElement("a",{href:"mailto:ingenuity@iiitp.ac.in"},"ingenuity@iiitp.ac.in")),l.a.createElement("ul",{className:"social-menu"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-instagram"})))))),l.a.createElement("div",{className:"col-md-4 justify-content-center mt-5 "},l.a.createElement("a",{href:"/home"},l.a.createElement("img",{src:t(77),width:"300",alt:"img"}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h6",null,"Share your thoughts or Report problems"),l.a.createElement(w.a,{onSubmit:this.handleSubmit},l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"name",md:3},"Name*"),l.a.createElement(O.a,{md:9},l.a.createElement(S.a,{type:"text",id:"name",name:"name",placeholder:"Name",value:this.state.name,onChange:function(a){return e.updatename(a.target.value)}}),l.a.createElement(I,{valid:this.state.validname,message:this.state.errmessage.name}))),l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"message",md:3},"Message*"),l.a.createElement(O.a,{md:9},l.a.createElement(S.a,{type:"textarea",id:"message",name:"message",rows:"5",placeholder:"Your message",value:this.state.message,onChange:function(a){return e.updatemessage(a.target.value)}}),l.a.createElement(I,{valid:this.state.validmessage,message:this.state.errmessage.message}))),l.a.createElement(k.a,{row:!0},l.a.createElement(O.a,{md:{size:10,offset:3}},l.a.createElement(C.a,{type:"submit",color:"primary",disabled:!this.state.formValid},"Feedback"))))))),l.a.createElement("div",{className:"copyrights"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",null,"\xa9 2020 Ingenuity Student Media Body , IIIT Pune")))))))}}]),n}(n.Component),T=t(150),V=t.n(T),A=(t(92),t(194),t(195),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement("section",{className:"latest-posts",style:{marginTop:"100px"}},l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h2",{style:{fontFamily:"Ubuntu,sans-serif"}},"Latest from the blog :")),l.a.createElement("div",{className:"row"},e.map((function(e){return l.a.createElement("div",{key:e.id,className:"post col-md-4"},l.a.createElement("div",{className:"post-thumbnail hvr-grow",style:{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},l.a.createElement("a",{href:"".concat(e.type,"/").concat(e.id)},l.a.createElement("img",{style:{width:"350px",height:"300px"},src:e.image,alt:"...",className:"img-fluid"}))),l.a.createElement("div",{className:"post-details",style:{fontFamily:"Ubuntu,sans-serif"}},l.a.createElement("div",{className:"post-meta d-flex justify-content-between"},l.a.createElement("div",{className:"date"},e.date),l.a.createElement("div",{className:"category"},l.a.createElement("a",{href:e.type},e.type))),l.a.createElement("a",{href:"".concat(e.type,"/").concat(e.id)},l.a.createElement("h3",{className:"h4"},e.title)),l.a.createElement("p",{className:"text-muted"},e.description)))})))))}}]),t}(n.Component)),P=t(41);t(196);function B(e){var a=e.blog,t=e.index;return console.log(t),1&t?l.a.createElement("div",{className:"row d-flex align-items-stretch "},l.a.createElement("div",{className:"image col-lg-4"},l.a.createElement("img",{src:a.image,alt:"..."})),l.a.createElement("div",{className:"text col-lg-8"},l.a.createElement("div",{className:"text-inner d-flex align-items-center"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"post-header"},l.a.createElement("div",{className:"category"},l.a.createElement("a",{href:a.type},a.type)),l.a.createElement("a",{href:"".concat(a.type,"/").concat(a.id)},l.a.createElement("h2",{className:"h4"},a.title))),l.a.createElement("p",null,a.description),l.a.createElement("footer",{className:"post-footer d-flex align-items-center"},l.a.createElement("a",{href:a.link,className:"author d-flex align-items-center flex-wrap"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:a.userProfile,alt:"...",className:"img-fluid"})),l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a.user))),l.a.createElement("div",{className:"date"},l.a.createElement("i",{className:"fa fa-clock-o"}),a.date),l.a.createElement("div",{className:"comments  d-none d-md-block"},l.a.createElement("i",{className:"fa fa-book"}," ",a.time))))))):l.a.createElement("div",{className:"row d-flex align-items-stretch "},l.a.createElement("div",{className:"text col-lg-8"},l.a.createElement("div",{className:"text-inner d-flex align-items-center"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"post-header"},l.a.createElement("div",{className:"category"},l.a.createElement("a",{href:a.type},a.type)),l.a.createElement("a",{href:"".concat(a.type,"/").concat(a.id)},l.a.createElement("h2",{className:"h4"},a.title))),l.a.createElement("p",null,a.description),l.a.createElement("footer",{className:"post-footer d-flex align-items-center"},l.a.createElement("a",{href:a.link,className:"author d-flex align-items-center flex-wrap"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:a.userProfile,alt:"...",className:"img-fluid"})),l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a.user))),l.a.createElement("div",{className:"date "},l.a.createElement("i",{className:"fa fa-clock-o"}),a.date),l.a.createElement("div",{className:"comments  d-none d-md-block"},l.a.createElement("i",{className:"fa fa-book"}),a.time))))),l.a.createElement("div",{className:"image col-lg-4"},l.a.createElement("img",{src:a.image,alt:"..."})))}var R=function(e){return l.a.createElement("section",{className:"featured-posts no-padding-top mt-5 "},l.a.createElement("div",{className:"container gradient-border",style:{fontFamily:"Ubuntu,sans-serif"}},l.a.createElement(P.Stagger,{in:!0},e.featured.map((function(e,a){return l.a.createElement(P.Fade,{key:e.id},l.a.createElement(B,{blog:e,index:a}))})))))},U=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"divider slab-style",style:{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("h2",null," ","\u201cI\u2019ve missed more than 9,000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life and that is why I succeed.\u201d \u2013 Michael Jordan")))))}}]),t}(n.Component),W=t(151),q=t.n(W),H=[{id:1,src:t(105),thumbnail:t(105),thumbnailWidth:300,thumbnailHeight:174,caption:"After Interview Preparation Fisrt Year"},{id:1,src:t(106),thumbnail:t(106),thumbnailWidth:300,thumbnailHeight:212,caption:"A visit to Trichy "},{id:1,src:t(107),thumbnail:t(107),thumbnailWidth:300,thumbnailHeight:212,caption:"Best Innovation Award - UILA 2020"},{id:1,src:t(108),thumbnail:t(108),thumbnailWidth:300,thumbnailHeight:212,caption:"After Interview Preparation Fisrt Year"}];var L=function(e){return l.a.createElement("div",{className:"container mt-5 mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 "},l.a.createElement(q.a,{images:H}))))},_=t(152),D=t.n(_);var Y=function(e){return l.a.createElement("div",{className:"justify-content-center",style:{marginLeft:"47%",justifyContent:"center"}},l.a.createElement(D.a,{type:"ThreeDots",color:"#000",height:60,width:60}))},G=t(383),z=t(384),Q=t(385),J=t(386),K=t(387),Z=t(388),$=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={data:n.props.home},n}return Object(i.a)(t,[{key:"render",value:function(){if(null!=this.state.data){var e=this.state.data.filter((function(e){return e.slider})),a=this.state.data.filter((function(e){return e.card})),t=this.state.data.filter((function(e){return e.featured}));return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"col-12 col-lg-8 mt-5"},l.a.createElement("div",{className:"slider-sh"},l.a.createElement(V.a,{autoplay:3e3},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"slider-content",style:{background:"url('".concat(e.image,"') no-repeat center center")}},l.a.createElement("div",{className:"inner "},l.a.createElement("a",{href:"".concat(e.type,"/").concat(e.id),style:{textDecoration:"none"}},l.a.createElement("h1",{className:"anch-hover"},e.title)),l.a.createElement("p",{className:""},e.description)),l.a.createElement("section",{className:"mt-2"},l.a.createElement("img",{src:e.userProfile,alt:e.user}),l.a.createElement("span",null,"Posted by ",l.a.createElement("strong",null,e.user))))}))))),l.a.createElement("div",{className:"col-md-4 mt-5 d-none d-md-block "},l.a.createElement(G.a,{className:"slider-sh hvr-grow",style:{border:"none"}},l.a.createElement(z.a,{style:{backgroundColor:" #0e0e0e"},tag:"h6"},l.a.createElement("span",{style:{color:"white"}},"A Place for you..")),l.a.createElement(Q.a,{style:{backgroundColor:"#dce0dd",fontFamily:"Montserrat"}},l.a.createElement(J.a,null,"Create your own Blog!"),l.a.createElement(K.a,{style:{fontFamily:"Montserrat"}},"Show your support to enrich the environment and culture of the community."," "),l.a.createElement(C.a,{href:"/postBlog"},"Now, It's your Turn!")),l.a.createElement(Z.a,{className:"text-muted"},"Feature yourself !"))))),l.a.createElement(R,{featured:t}),l.a.createElement(U,null),l.a.createElement(A,{key:a.id,data:a}),l.a.createElement("div",{className:" d-sm-block d-md-none",style:{margin:"10px"}},l.a.createElement(G.a,{className:"slider-sh"},l.a.createElement(z.a,{style:{backgroundColor:" #0e0e0e"},tag:"h6"},l.a.createElement("span",{style:{color:"white"}},"A Place for you..")),l.a.createElement(Q.a,{style:{backgroundColor:"#dce0dd",fontFamily:"Montserrat"}},l.a.createElement(J.a,null,"Create your own Blog!"),l.a.createElement(K.a,{style:{fontFamily:"Montserrat"}},"Show your support to enrich the environment and culture of the community."," "),l.a.createElement(C.a,{href:"/postBlog"},"Now, It's your Turn!")),l.a.createElement(Z.a,{className:"text-muted"},"Feature yourself !"))),l.a.createElement(L,null))}return l.a.createElement(Y,null)}}]),t}(n.Component),X=(t(262),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;if(null!=this.props.content){var a=this.props.content.filter((function(a){return a.type===e.props.type})),t=a[0],n=a.slice(1);return l.a.createElement("div",{className:"bg-white"},l.a.createElement("div",{id:"header",className:"container c-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 tinted cover-image center-fill-container",style:{margin:"70px 0"}},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{className:"center-both img-center-fill tall",src:t.image,alt:"img"}))),l.a.createElement("div",{className:"col-md-4 cover-details"},l.a.createElement("div",{className:"mt-4"},l.a.createElement("div",{className:"a-parent"},l.a.createElement("h1",null,l.a.createElement("a",{href:"".concat(t.type,"/").concat(t.id),className:"cover-link"},t.title)))),l.a.createElement("div",{className:"dt"},t.date," ",l.a.createElement("span",{style:{color:"blue"}},"|")," ",t.user),l.a.createElement("div",{className:"dt"},"Reading Time : ",t.time),l.a.createElement("div",{className:"cover-excerpt"},t.description)))),l.a.createElement("section",{className:"blog-list px-3 py-5 p-md-5"},l.a.createElement("div",{className:"container"},l.a.createElement(P.Stagger,{in:!0},n.map((function(e){return l.a.createElement(P.Fade,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3"},l.a.createElement("div",{className:"media"},l.a.createElement("img",{className:"mr-1 img-fluid img-size",src:e.image,alt:"img"}))),l.a.createElement("div",{className:"col-12 col-md-5 mb-5"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h3",{className:"title mb-1 ml-0"},l.a.createElement("div",{className:"a-parent"},l.a.createElement("a",{href:"".concat(e.type,"/").concat(e.id)},e.title))),l.a.createElement("div",{className:"dt ml-1"}," ",e.date," ",l.a.createElement("span",{style:{color:"blue"}},"|")," ",e.user),l.a.createElement("div",{className:"dt ml-1"},"Reading Time : ",e.time),l.a.createElement("div",{className:"intro ml-1"},e.description)))))}))))))}return l.a.createElement(Y,null)}}]),t}(n.Component)),ee=t(10),ae=t(153),te=t.n(ae),ne=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(null!=this.props.data&&null!=this.props.prevdata&&null!=this.props.nextdata){var e=this.props.data,a=this.props.prevdata,t=this.props.nextdata;return l.a.createElement("div",{className:"bg-white"},l.a.createElement("div",{className:"container",style:{padding:10}},l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:"post blog-post col-lg-8"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"post-single"},l.a.createElement("div",{className:"post-thumbnail"},l.a.createElement("img",{src:e.image,alt:"...",className:"img-fluid view-image",style:{"border-radius":25,height:"350px"}})),l.a.createElement("div",{className:"post-details"},l.a.createElement("div",{className:"post-meta d-flex justify-content-between"},l.a.createElement("div",{className:"category"},l.a.createElement("a",{href:"/"+e.type},e.type))),l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"post-footer d-flex align-items-center flex-column flex-sm-row"},l.a.createElement("a",{href:e.link,className:"author d-flex align-items-center flex-wrap"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:e.userProfile,alt:"...",className:"img-fluid"})),l.a.createElement("div",{className:"title"},l.a.createElement("span",null,e.user))),l.a.createElement("div",{className:"d-flex align-items-center flex-wrap"},l.a.createElement("div",{className:"date"},l.a.createElement("i",{className:"fa fa-clock-o"}),e.date," "),l.a.createElement("div",{className:"views"},l.a.createElement("i",{className:"fa fa-book"})," ",e.time))),l.a.createElement("div",{className:"post-body"},te()(e.content),l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("div",null,'"',e.quote,'"'),l.a.createElement("footer",{className:"blockquote-footer"},e.quoteby,l.a.createElement("cite",{title:"Source Title"})))),l.a.createElement("div",{className:"posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row"},l.a.createElement("a",{href:"/".concat(a.type,"/").concat(a.id),className:"prev-post text-left d-flex align-items-center"},l.a.createElement("div",{className:"icon prev"},l.a.createElement("i",{className:"fa fa-angle-left"})),l.a.createElement("div",{className:"text"},l.a.createElement("strong",{className:"text-primary"},"Previous Post"," "),l.a.createElement("h6",null,a.title))),l.a.createElement("a",{href:"/".concat(t.type,"/").concat(t.id),className:"next-post text-right d-flex align-items-center justify-content-end"},l.a.createElement("div",{className:"text"},l.a.createElement("strong",{className:"text-primary"},"Next Post "),l.a.createElement("h6",null,t.title)),l.a.createElement("div",{className:"icon next"},l.a.createElement("i",{className:"fa fa-angle-right"})))))))))))}}}]),t}(n.Component),le=t(46),ce=t(154),se=t(75),re=t.n(se);t(368);function ie(e){return e.valid?null:l.a.createElement("div",{className:"error-msg"},e.message)}var me=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).validateForm=function(){var e=n.state,a=e.nameValid,t=e.emailValid,l=e.contentValid;n.setState({formValid:a&&t&&l})},n.validatename=function(){var e=n.state.name,a=!0,t=Object(b.a)({},n.state.errorMsg);e.length<3&&(a=!1,t.name="Must be at least 3 characters long"),n.setState({nameValid:a,errorMsg:t},n.validateForm)},n.validateEmail=function(){var e=n.state.email,a=!0,t=Object(b.a)({},n.state.errorMsg);/^[^\s@]+@[^\s@]+iiitp.ac.in$/.test(e)||/^[^\s@]+@iiitp.ac.in$/.test(e)||(a=!1,t.email="Invalid email format and use your iiitp domain email "),n.setState({emailValid:a,errorMsg:t},n.validateForm)},n.state={name:"",email:"",link:"",editorState:le.EditorState.createEmpty(),nameValid:!1,emailValid:!1,contentValid:!1,formValid:!1,errorMsg:{}},n.onEditorStateChange=n.onEditorStateChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.validateContent=n.validateContent.bind(Object(d.a)(n)),n}return Object(i.a)(t,[{key:"onEditorStateChange",value:function(e){this.setState({editorState:e}),this.validateContent()}},{key:"validateContent",value:function(){var e=this.state.editorState,a=!0,t=Object(b.a)({},this.state.errorMsg);re()(Object(le.convertToRaw)(e.getCurrentContent())).length<12&&(a=!1,t.content="Must be at least 4 characters long"),this.setState({contentValid:a,errorMsg:t},this.validateForm)}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Thank you for your entry! \n We will verfiy your blog as soon as possible"),x.a.post(F+"Blog",{name:this.state.name,email:this.state.email,link:this.state.link,content:re()(Object(le.convertToRaw)(this.state.editorState.getCurrentContent()))})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("h1",null,"Feature yourself,create your own Blog!")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-10 mt-5"},l.a.createElement(w.a,{onSubmit:this.handleSubmit},l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"name",md:2},"Name",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement(O.a,{md:8},l.a.createElement(S.a,{type:"text",id:"name",name:"name",placeholder:"Name",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value},e.validatename)}}),l.a.createElement(ie,{valid:this.state.nameValid,message:this.state.errorMsg.name}))),l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"email",md:2},"Email",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement(O.a,{md:8},l.a.createElement(S.a,{type:"email",id:"email",name:"email",placeholder:"Your iiitp email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value},e.validateEmail)}}),l.a.createElement(ie,{valid:this.state.emailValid,message:this.state.errorMsg.email}))),l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"link",md:2},"Your Profile url",l.a.createElement("span",{style:{color:"red"}})),l.a.createElement(O.a,{md:8},l.a.createElement(S.a,{type:"url",id:"link",name:"link",placeholder:"Url for your Linkdin or Github or Facebook or etc.",value:this.state.link,onChange:function(a){return e.setState({link:a.target.value})}}))),l.a.createElement(k.a,{row:!0},l.a.createElement(j.a,{htmlFor:"post",md:2},"Post",l.a.createElement("span",{style:{color:"red"}},"*")),l.a.createElement(O.a,{md:10},l.a.createElement(ce.Editor,{placeholder:"Start creating your post...",wrapperclassName:"check",editorclassName:"check",onContentStateChange:this.onContentStateChange,onEditorStateChange:this.onEditorStateChange}),l.a.createElement(ie,{valid:this.state.contentValid,message:this.state.errorMsg.content}))),l.a.createElement(k.a,{row:!0},l.a.createElement(O.a,{style:{"margin-left":"110px"}},l.a.createElement(C.a,{type:"submit",color:"primary",disabled:!this.state.formValid,className:"ml-5"},"Post")))))))}}]),t}(n.Component),oe=(t(369),function(){return l.a.createElement("div",{className:"bg-white"},l.a.createElement("section",{id:"team",className:"pb-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title-about section-title",style:{fontFamily:"Ubuntu"}},"About Us"),l.a.createElement("div",{className:"about-body",style:{fontFamily:"Ubuntu ,san-serif",fontSize:"20px",textAlign:"center"}},"Ingenuity is the official campus media body of the Indian Institute of Informaton Technology,Pune run by students under the patronage of Government of India.After 4 years of development,Ingenuity has rolled out as student media body to offer news and your needs for betterment of all around of campus through this website."),l.a.createElement("hr",null)),l.a.createElement("div",{className:"container"},l.a.createElement("h5",{className:"section-title h1",style:{fontFamily:"Ubuntu"}},"Founders"),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 "},l.a.createElement("div",{className:"image-flip",ontouchstart:"this.classNameList.toggle('hover');"},l.a.createElement("div",{className:"mainflip"},l.a.createElement("div",{className:"frontside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("p",null,l.a.createElement("img",{className:" img-fluid",src:"https://media-exp1.licdn.com/dms/image/C5103AQEfuswPxV6Gyw/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=pqPi-uT4qWUH0TTo6ZoO3QVa5kHzrwIUaWPu0Sq4rc8",alt:"img"})),l.a.createElement("h4",{className:"card-title"},"Rohan Lekhwani "),l.a.createElement("p",{className:"card-text"},"Co-Founder"),l.a.createElement("a",{href:"#",className:"btn btn-primary btn-sm"},l.a.createElement("i",{className:"fa fa-plus"}))))),l.a.createElement("div",{className:"backside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center mt-4"},l.a.createElement("h4",{className:"card-title"},"Rohan Lekhwani"),l.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"#"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.linkedin.com/in/rohanlekhwani/"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://github.com/RonLek"},l.a.createElement("i",{className:"fa fa-github"})))))))))),l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},l.a.createElement("div",{className:"image-flip",ontouchstart:"this.classNameList.toggle('hover');"},l.a.createElement("div",{className:"mainflip"},l.a.createElement("div",{className:"frontside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("p",null,l.a.createElement("img",{className:" img-fluid",src:"https://media-exp1.licdn.com/dms/image/C5603AQF0ZRwy3frltQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=FuyUjHDboI6c7KAVpqrMhjSBcNV6R3k42w-_GukrAYs",alt:"img"})),l.a.createElement("h4",{className:"card-title"},"Saksham Mahajan"),l.a.createElement("p",{className:"card-text"},"Co-Founder and Chief Editor"),l.a.createElement("a",{href:"#",className:"btn btn-primary btn-sm"},l.a.createElement("i",{className:"fa fa-plus"}))))),l.a.createElement("div",{className:"backside"},l.a.createElement("div",{className:"card "},l.a.createElement("div",{className:"card-body text-center mt-4"},l.a.createElement("h4",{className:"card-title"},"Saksham Mahajan"),l.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.instagram.com/sakshammahajan_/"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.linkedin.com/in/saksham-mahajan/"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://github.com/mahajansaksham"},l.a.createElement("i",{className:"fa fa-github"}))))))))))),l.a.createElement("hr",null),l.a.createElement("h5",{className:"section-title h1",style:{fontFamily:"Ubuntu"}},"Web Development Team"),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},l.a.createElement("div",{className:"image-flip",ontouchstart:"this.classNameList.toggle('hover');"},l.a.createElement("div",{className:"mainflip"},l.a.createElement("div",{className:"frontside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("p",null,l.a.createElement("img",{className:" img-fluid",src:"https://media-exp1.licdn.com/dms/image/C4E03AQHXhha9zl_AhA/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=vOb-gAmKOkoqHVZqHFTgDewYeCyhRvM5BN-8OXstfa0",alt:"card image"})),l.a.createElement("h4",{className:"card-title"},"Mukhrit Gupta"),l.a.createElement("p",{className:"card-text"},"Web Manager"),l.a.createElement("a",{href:"#",className:"btn btn-primary btn-sm"},l.a.createElement("i",{className:"fa fa-plus"}))))),l.a.createElement("div",{className:"backside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center mt-4"},l.a.createElement("h4",{className:"card-title"},"Mukhrit Gupta"),l.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.instagram.com/mukuboi/"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.linkedin.com/in/mukhrit-gupta-553196194/"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://github.com/Mukhrit"},l.a.createElement("i",{className:"fa fa-github"})))))))))),l.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4"},l.a.createElement("div",{className:"image-flip",ontouchstart:"this.classNameList.toggle('hover');"},l.a.createElement("div",{className:"mainflip"},l.a.createElement("div",{className:"frontside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("p",null,l.a.createElement("img",{className:" img-fluid",src:"https://media-exp1.licdn.com/dms/image/C5603AQEMeG2ptsblrw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=jQgVIWIucHtBr6dRBwBAnHnN1Nl4m2Wmc29T56xDzhA",alt:"card image"})),l.a.createElement("h4",{className:"card-title"},"Rakshit Jain"),l.a.createElement("p",{className:"card-text"},"Web Manager"),l.a.createElement("a",{href:"https://www.fiverr.com/share/qb8D02",className:"btn btn-primary btn-sm"},l.a.createElement("i",{className:"fa fa-plus"}))))),l.a.createElement("div",{className:"backside"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center mt-4"},l.a.createElement("h4",{className:"card-title"},"Rakshit Jain"),l.a.createElement("p",{className:"card-text"},"This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button."),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.instagram.com/rakshitjain13/"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://www.linkedin.com/in/rakshit-jain-9b83b5170/?originalSubdomain=in"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-icon text-xs-center",href:"https://github.com/rakshitjain13"},l.a.createElement("i",{className:"fa fa-github"})))))))))))),l.a.createElement("hr",null)))}),de=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={store:n.props.store},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get(F+"data").then((function(a){var t=a.data;e.setState({store:t})}))}},{key:"render",value:function(){var e=this,a=function(a){var t=a.match,n=parseInt(t.params.articleId,10),c=e.state.store;return null!=c?1===n?l.a.createElement(ne,{prevdata:c[c.length-1],data:c[n-1],nextdata:c[n]}):n===c.length?l.a.createElement(ne,{prevdata:c[c.length-2],data:c[n-1],nextdata:c[0]}):l.a.createElement(ne,{prevdata:c[n-2],data:c[n-1],nextdata:c[n]}):l.a.createElement(Y,null)};return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(ee.d,{location:this.props.location},l.a.createElement(ee.b,{exact:!0,path:"/editorials",component:function(){return l.a.createElement(X,{type:"editorials",content:e.state.store})}}),l.a.createElement(ee.b,{exact:!0,path:"/experience",component:function(){return l.a.createElement(X,{type:"experience",content:e.state.store})}}),l.a.createElement(ee.b,{exact:!0,path:"/achievements",component:function(){return l.a.createElement(X,{type:"achievements",content:e.state.store})}}),l.a.createElement(ee.b,{exact:!0,path:"/ourteam",component:function(){return l.a.createElement(oe,null)}}),l.a.createElement(ee.b,{path:"/home",component:function(){return null!=e.state.store?l.a.createElement($,{home:e.state.store}):l.a.createElement($,null)}}),l.a.createElement(ee.b,{exact:!0,path:"/experience/:articleId",component:a}),l.a.createElement(ee.b,{exact:!0,path:"/editorials/:articleId",component:a}),l.a.createElement(ee.b,{exact:!0,path:"/postBlog",component:function(){return l.a.createElement(me,null)}}),l.a.createElement(ee.a,{to:"/home"})),l.a.createElement(M,null))}}]),t}(n.Component),ue=Object(ee.g)(de);var Ee=function(){return l.a.createElement(N.a,null,l.a.createElement("div",null,l.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){},77:function(e,a,t){e.exports=t.p+"static/media/logo2.c34270a9.png"},92:function(e,a,t){}},[[156,1,2]]]);
//# sourceMappingURL=main.5c79f114.chunk.js.map