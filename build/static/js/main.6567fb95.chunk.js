(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(17),o=a.n(s),i=(a(53),a(14)),r=(a(54),a(55),a(95)),l=a(22),u=l.a.initializeApp({apiKey:"AIzaSyAcsjeJ2lx-3z7kZNyub7vmqNaiVwuzYEk",authDomain:"instagram-clone-chentang.firebaseapp.com",databaseURL:"https://instagram-clone-chentang-default-rtdb.firebaseio.com",projectId:"instagram-clone-chentang",storageBucket:"instagram-clone-chentang.appspot.com",messagingSenderId:"661521370201",appId:"1:661521370201:web:c0dab3853381512153b548",measurementId:"G-YG12EBT28Y"}).firestore(),p=l.a.auth(),d=l.a.storage(),j=a(5);var m=function(e){var t=e.user,a=e.postId,c=e.username,s=e.caption,o=e.imageUrl,p=Object(n.useState)([]),d=Object(i.a)(p,2),m=d[0],b=d[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),f=g[0],O=g[1];return Object(n.useEffect)((function(){var e;return a&&(e=u.collection("posts").doc(a).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[a]),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__header",children:[Object(j.jsx)(r.a,{className:"post__avatar",alt:c,src:o}),Object(j.jsx)("h3",{children:c})]}),Object(j.jsx)("img",{className:"post__image",src:o,alt:""}),Object(j.jsxs)("h4",{className:"post__text",children:[Object(j.jsx)("strong",{children:c})," ",s]}),Object(j.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:e.username})," ",e.text]})}))}),t&&Object(j.jsxs)("form",{className:"post__commentBox",children:[Object(j.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment here",value:f,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{disabled:!f,className:"post__button",type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(a).collection("comments").add({text:f,username:t.displayName,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Post"})]})]})},b=a(94),h=a(93);a(65);var g=function(e){var t=e.username,a=Object(n.useState)(null),c=Object(i.a)(a,2),s=c[0],o=c[1],r=Object(n.useState)(""),p=Object(i.a)(r,2),m=(p[0],p[1]),g=Object(n.useState)(0),f=Object(i.a)(g,2),O=f[0],x=f[1],v=Object(n.useState)(""),_=Object(i.a)(v,2),N=_[0],y=_[1];return Object(j.jsxs)("div",{className:"imageupload",children:[Object(j.jsx)("progress",{className:"imageupload__progress",value:O,max:"100"}),Object(j.jsx)(b.a,{placeholder:"Enter a caption here!",value:N,onChange:function(e){return y(e.target.value)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&o(e.target.files[0])}}),Object(j.jsx)(h.a,{className:"imageupload__button",onClick:function(){d.ref("images/".concat(s.name)).put(s).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);x(t)}),(function(e){alert(e.message)}),(function(){d.ref("images").child(s.name).getDownloadURL().then((function(e){m(e),u.collection("posts").add({caption:N,imageUrl:e,username:t,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),x(0),y(""),o(null)}))}))},children:"Upload"})]}),Object(j.jsx)("br",{})]})},f=a(91),O=a(92),x=a(44);function v(){return{height:"300px",top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(f.a)((function(e){return{paper:{position:"absolute",width:400,height:200,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var N=function(){var e=_(),t=Object(n.useState)(v),a=Object(i.a)(t,1)[0],c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],r=s[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),f=d[0],N=d[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),w=S[0],C=S[1],I=Object(n.useState)(""),k=Object(i.a)(I,2),U=k[0],A=k[1],B=Object(n.useState)(""),E=Object(i.a)(B,2),P=E[0],F=E[1],L=Object(n.useState)(""),T=Object(i.a)(L,2),D=T[0],z=T[1],R=Object(n.useState)(null),G=Object(i.a)(R,2),J=G[0],V=G[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){if(e){if(console.log(e),V(e),!e.displayName)return e.updateProfile({displayName:U})}else V(null)}));return function(){e()}}),[J,U]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(O.a,{open:f,onClose:function(){return N(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__login",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(b.a,{placeholder:"username",type:"text",value:U,onChange:function(e){return A(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"email",type:"text",value:P,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"password",type:"password",value:D,onChange:function(e){return z(e.target.value)}}),Object(j.jsx)(h.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(P,D).then((function(e){e.user.updateProfile({displayname:U})})).catch((function(e){return alert(e.message)})),N(!1)},children:"sign Up"})]})})}),Object(j.jsx)(O.a,{open:w,onClose:function(){return C(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__login",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(b.a,{placeholder:"email",type:"text",value:P,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"password",type:"password",value:D,onChange:function(e){return z(e.target.value)}}),Object(j.jsx)(h.a,{onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(P,D).catch((function(e){return alert(e.message)})),C(!1)},children:"Sign In"})]})})}),Object(j.jsxs)("div",{className:"app__header",children:[Object(j.jsx)("img",{className:"app_headerImage",src:"https://i.pinimg.com/originals/2f/a2/77/2fa277552b620e8275a07a442ea8cd0f.png",alt:""}),J?Object(j.jsx)(h.a,{onClick:function(){return p.signOut()},children:"Logout"}):Object(j.jsxs)("div",{className:"app__container",children:[Object(j.jsx)(h.a,{onClick:function(){return C(!0)},children:"Sign In"}),Object(j.jsx)(h.a,{onClick:function(){return N(!0)},children:"Sign Up"})]})]}),Object(j.jsxs)("div",{className:"app__posts",children:[Object(j.jsx)("div",{className:"app__postLeft",children:o.map((function(e){var t=e.id,a=e.post;return Object(j.jsx)(m,{postId:t,user:J,username:a.username,caption:a.caption,imageUrl:a.imageUrl},t)}))}),Object(j.jsx)("div",{className:"app__postsRight",children:Object(j.jsx)(x.a,{url:"https://www.instagram.com/p/B_uf9dmAGPw/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})})]}),(null===J||void 0===J?void 0:J.displayName)?Object(j.jsx)(g,{username:J.displayName}):Object(j.jsx)("h3",{children:"Sorry, please login to upload"})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}},[[68,1,2]]]);
//# sourceMappingURL=main.6567fb95.chunk.js.map