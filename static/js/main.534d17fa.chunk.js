(this["webpackJsonphw-04-hooks-phonebook"]=this["webpackJsonphw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1mpuq",label:"ContactForm_label__7uJJg",input:"ContactForm_input__1DMhW",button:"ContactForm_button__3vyf5"}},,function(t,e,n){t.exports={list:"ContactList_list__2_EJ_",contactItem:"ContactList_contactItem__1V4bs",text:"ContactList_text__3sgY_",number:"ContactList_number__373O8",button:"ContactList_button__-Ozzy"}},,,,function(t,e,n){t.exports={label:"Filter_label__2jjM3",input:"Filter_input__34if6"}},,function(t,e,n){t.exports={title:"Title_title__2VOQs"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),s=(n(16),n(11)),i=n(3),u=(n(17),n(21)),l=n(10),b=n.n(l),m=n(0);var j=function(t){var e=t.title;return Object(m.jsx)("h1",{className:b.a.title,children:e})},f=n(2),d=n.n(f);function p(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],b=u[1],j=function(t){var e=t.currentTarget.value;switch(t.currentTarget.name){case"name":r(e);break;case"number":b(e)}},f=function(){r(""),b("")};return Object(m.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),e(o,l),f()},children:[Object(m.jsxs)("label",{className:d.a.label,children:["Name",Object(m.jsx)("input",{className:d.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:j,autoComplete:"off"})]}),Object(m.jsxs)("label",{className:d.a.label,children:["Number",Object(m.jsx)("input",{className:d.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:j,autoComplete:"off"})]}),Object(m.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})}var O=n(8),_=n.n(O);var h=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n,autoComplete:"off"})]})},x=n(4),C=n.n(x);var v=function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:C.a.contactItem,children:[Object(m.jsx)("p",{className:C.a.text,children:a}),Object(m.jsx)("p",{className:C.a.number,children:c}),Object(m.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};function N(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],b=r[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){0!==n.length&&localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{title:"Phonebook"}),Object(m.jsx)(p,{onSubmit:function(t,e){var a={id:Object(u.a)(),name:t,number:e};n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert(t+" is already in contacts"):c((function(t){return[].concat(Object(s.a)(t),[a])}))}}),Object(m.jsx)(j,{title:"Contacts"}),Object(m.jsx)(h,{value:l,onChange:function(t){return b(t.currentTarget.value)}}),Object(m.jsx)(v,{contacts:n.filter((function(t){return t.name.toLocaleLowerCase().includes(l.toLocaleLowerCase())})),deleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.534d17fa.chunk.js.map