(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return c.a})),n.d(e,"b",(function(){return r}));var c=n(18),r={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getRefreshing:function(t){return t.auth.isRefreshing}}},18:function(t,e,n){"use strict";var c=n(9),r=n.n(c),a=n(19),i=n(16),u=n.n(i),o=n(4);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){u.a.defaults.headers.common.Authorization=""},l=Object(o.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(o.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(o.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/logout");case 3:b(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),d=Object(o.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,u.a.get("/users/current");case 8:return i=t.sent,o=i.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}());e.a={register:l,logIn:j,logOut:f,fetchCarrentUser:d}},24:function(t,e,n){t.exports={link:"Navigation_link__p1JlU",activeLink:"Navigation_activeLink__1RSxx"}},27:function(t,e,n){t.exports={user:"UserMenu_user__12Mhv",img:"UserMenu_img__RKIkx",text:"UserMenu_text__liDAz",button:"UserMenu_button__3Ndm0"}},28:function(t,e,n){t.exports={link:"AuthNav_link__299Nm",activeLink:"AuthNav_activeLink__G5fva"}},3:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return f}));var c=n(4),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),i=Object(c.b)("contacts/fetchContactError"),u=Object(c.b)("contacts/addContactRequest"),o=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),l=Object(c.b)("contacts/deleteContactSuccess"),j=Object(c.b)("contacts/deleteContactError"),f=Object(c.b)("contacts/changeFilter")},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return o.d}));var c=n(9),r=n.n(c),a=n(19),i=n(16),u=n.n(i),o=n(3),s={addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(a.a)(r.a.mark((function t(c){var a,i,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(Object(o.b)()),t.prev=2,t.next=5,u.a.post("/contacts",a);case 5:i=t.sent,s=i.data,c(Object(o.c)(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(Object(o.a)(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(o.f)()),u.a.delete("/contacts/".concat(t)).then((function(){return n(Object(o.g)(t))})).catch((function(t){return n(Object(o.e)(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.i)()),t.prev=1,t.next=4,u.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(o.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(o.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},b=n(22),l=function(t){return t.contacts.items},j=function(t){return t.contacts.filter},f={getContacts:l,getFilter:j,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(b.a)([l,j],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))}},39:function(t,e,n){"use strict";var c=n(49),r=n.n(c),a=n(1);e.a=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.Container,children:e})}},40:function(t,e,n){t.exports={container:"AppBar_container__28rIl",button:"AppBar_button__tCjF_",Register:"AppBar_Register__3zLrw",form:"AppBar_form__2LaCc",label:"AppBar_label__14TVY",input:"AppBar_input__1parb"}},49:function(t,e,n){t.exports={Container:"Container_Container__2ViJd"}},85:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(29),i=n.n(a),u=(n(57),n(39)),o=n(7),s=n(17),b=n(10),l=n(24),j=n.n(l),f=n(1),d=function(){var t=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsxs)("nav",{className:j.a.nav,children:[Object(f.jsx)(s.b,{to:"/",exact:!0,className:j.a.link,activeClassName:j.a.activeLink,children:"Home"}),t&&Object(f.jsx)(s.b,{to:"/contacts",className:j.a.link,activeClassName:j.a.activeLink,children:"Contacts"})]})},O=n.p+"static/media/ninza.e5b1b2b1.png",h=n(27),p=n.n(h);function g(){var t=Object(o.c)(),e=Object(o.d)(b.b.getUserName),n=O;return Object(f.jsxs)("div",{className:p.a.user,children:[Object(f.jsx)("img",{className:p.a.img,src:n,width:"32",alt:"avatar"}),Object(f.jsxs)("p",{className:p.a.text,children:["Welcome, ",e]}),Object(f.jsx)("button",{className:p.a.button,type:"button",variant:"success",onClick:function(){return t(b.a.logOut())},children:"Exit"})]})}var v=n(28),x=n.n(v),m=function(){return Object(f.jsxs)("nav",{children:[Object(f.jsx)(s.b,{to:"/login",className:x.a.link,activeClassName:x.a.activeLink,children:"Login"}),Object(f.jsx)(s.b,{to:"/register",className:x.a.link,activeClassName:x.a.activeLink,children:"Register"})]})},k=n(40),_=n.n(k);function C(){var t=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsxs)("header",{className:_.a.container,children:[Object(f.jsx)(d,{}),t?Object(f.jsx)(g,{}):Object(f.jsx)(m,{})]})}var L=n(37),w=n(6),y=(n(84),n(23)),N=n(32),I=["component","redirectTo","children"];function R(t){t.component;var e=t.redirectTo,n=t.children,c=Object(N.a)(t,I),r=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsx)(w.b,Object(y.a)(Object(y.a)({},c),{},{children:r?n:Object(f.jsx)(w.a,{to:e})}))}var U=["children","restricted","redirectTo"];function A(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,i=Object(N.a)(t,U),u=Object(o.d)(b.b.getIsLoggedIn)&&c;return Object(f.jsx)(w.b,Object(y.a)(Object(y.a)({},i),{},{children:u?Object(f.jsx)(w.a,{to:a}):e}))}var z=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,102))})),B=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,103))})),S=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,105))})),T=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,104))}));var E,M,J,V,q=Object(o.b)(null,(function(t){return{fetchContacts:function(){return t(L.b.fetchContacts())}}}))((function(){var t=Object(o.c)(),e=Object(o.d)(b.b.getRefreshing);return Object(c.useEffect)((function(){t(b.a.fetchCarrentUser())}),[t]),!e&&Object(f.jsxs)(u.a,{children:[Object(f.jsx)(C,{}),Object(f.jsx)(w.d,{children:Object(f.jsxs)(c.Suspense,{fallback:Object(f.jsx)("p",{children:"Loading..."}),children:[Object(f.jsx)(A,{exact:!0,path:"/",children:Object(f.jsx)(z,{})}),Object(f.jsx)(A,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(f.jsx)(B,{})}),Object(f.jsx)(A,{exact:!0,path:"/register",restricted:!0,children:Object(f.jsx)(T,{})}),Object(f.jsx)(R,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(S,{})})]})})]})})),F=(n(85),n(31)),W=n(4),D=n(20),G=n(51),H=n.n(G),K=n(5),Y=n(8),P=n(3),Q=Object(W.d)([],(E={},Object(K.a)(E,P.j,(function(t,e){return e.payload})),Object(K.a)(E,P.c,(function(t,e){var n=e.payload;return[].concat(Object(F.a)(t),[n])})),Object(K.a)(E,P.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),E)),X=Object(W.d)("",Object(K.a)({},P.d,(function(t,e){return e.payload}))),Z=Object(W.d)(!1,(M={},Object(K.a)(M,P.i,(function(){return!0})),Object(K.a)(M,P.j,(function(){return!1})),Object(K.a)(M,P.h,(function(){return!1})),Object(K.a)(M,P.b,(function(){return!0})),Object(K.a)(M,P.c,(function(){return!1})),Object(K.a)(M,P.a,(function(){return!1})),Object(K.a)(M,P.f,(function(){return!0})),Object(K.a)(M,P.g,(function(){return!1})),Object(K.a)(M,P.e,(function(){return!1})),M)),$=Object(W.d)(null,(J={},Object(K.a)(J,P.h,(function(t,e){return e.payload})),Object(K.a)(J,P.i,(function(){return null})),J)),tt=Object(Y.b)({items:Q,filter:X,loading:Z,error:$}),et=n(18),nt=Object(W.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1},extraReducers:(V={},Object(K.a)(V,et.a.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(K.a)(V,et.a.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(K.a)(V,et.a.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(K.a)(V,et.a.fetchCarrentUser.pending,(function(t){t.isRefreshing=!0})),Object(K.a)(V,et.a.fetchCarrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isRefreshing=!1})),Object(K.a)(V,et.a.fetchCarrentUser.rejected,(function(t){t.isRefreshing=!1})),V)}).reducer,ct=Object(F.a)(Object(W.f)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),rt={key:"auth",storage:H.a,whitelist:["token"]},at=Object(W.a)({reducer:{auth:Object(D.g)(rt,nt),contacts:tt},middleware:ct,devTools:!1}),it=Object(D.h)(at),ut=n(52);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.a,{store:at,children:Object(f.jsx)(ut.a,{loading:null,persistor:it,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(q,{})})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.44d94f16.chunk.js.map