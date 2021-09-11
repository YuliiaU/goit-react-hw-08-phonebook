(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{100:function(t,e,n){"use strict";t.exports=0},101:function(t,e,n){t.exports={button:"Contacts_button__3QgB3",item:"Contacts_item__3wRy4"}},105:function(t,e,n){"use strict";n.r(e);var r=n(39),o=n(89),c=n(0),a=n(91),u=n.n(a),i=n(92),s=n.n(i),l=n(7),f=n(37),b=n(1);var h=Object(l.b)(null,(function(t){return{onSubmit:function(e,n){return t(f.b.addContact(e,n))}}}))((function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),h=i[0],d=i[1],j=Object(l.d)(f.c.getContacts),p=Object(l.c)(),m=function(t){var e=t.target,n=e.name,o=e.value;switch(n){case"name":r(o);break;case"number":d(o);break;default:return}},x=function(){r(""),d("")},g=s.a.generate(),v=s.a.generate();return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(p(f.b.addContact({name:n,number:h})),x())},className:u.a.form,children:[Object(b.jsxs)("label",{htmlFor:g,children:[Object(b.jsx)("p",{children:"Name"}),Object(b.jsx)("input",{value:n,onChange:m,id:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{htmlFor:v,children:[Object(b.jsx)("p",{children:"Number"}),Object(b.jsx)("input",{value:h,onChange:m,id:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",className:u.a.button,children:"Add contact"})]})})),d=n(101),j=n.n(d),p=Object(l.b)((function(t){return{contacts:f.c.getVisibleContacts(t)}}),(function(t){return{onDeleteContacts:function(e){return t(f.b.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.name,o=t.number;return Object(b.jsxs)("li",{className:j.a.item,children:[Object(b.jsx)("p",{children:r}),Object(b.jsx)("span",{children:o}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(e)},className:j.a.button,children:"Delete"})]},e)}))})})),m=Object(l.b)((function(t){return{value:f.c.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(f.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})}));e.default=Object(l.b)(null,(function(t){return{fetchContacts:function(){return t(f.b.fetchContacts())}}}))((function(){var t=Object(l.c)();return Object(c.useEffect)((function(){return t(f.b.fetchContacts())}),[t]),Object(b.jsxs)(r.a,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(h,{}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(m,{}),Object(b.jsx)(p,{})]})}))},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(38);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(i){o=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},90:function(t,e,n){"use strict";var r,o,c,a=n(94),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){c=!1}function s(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function l(){return c||(c=function(){r||s(u);for(var t,e=r.split(""),n=[],o=a.nextValue();e.length>0;)o=a.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return s(t),r},seed:function(t){a.seed(t),o!==t&&(i(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},91:function(t,e,n){t.exports={form:"Form_form__2gAxB",button:"Form_button__-fPjk"}},92:function(t,e,n){"use strict";t.exports=n(93)},93:function(t,e,n){"use strict";var r=n(90),o=n(95),c=n(99),a=n(100)||0;function u(){return o(a)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},94:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},95:function(t,e,n){"use strict";var r,o,c=n(96);n(90);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}},96:function(t,e,n){"use strict";var r=n(90),o=n(97),c=n(98);t.exports=function(t){for(var e,n=0,a="";!e;)a+=c(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}},97:function(t,e,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},98:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),c="";;)for(var a=t(o),u=o;u--;)if((c+=e[a[u]&r]||"").length===+n)return c}},99:function(t,e,n){"use strict";var r=n(90);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}}}]);
//# sourceMappingURL=3.e0a9201f.chunk.js.map