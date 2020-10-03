(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=(a(13),a(1)),s=(a(14),a(7));function i(e){var t=e.input,a=e.setInput,n=e.todos,c=e.setTodos,l=e.setStatus,r=e.active,i=(e.setActive,function(e){e.preventDefault(),"all"===e.target.value?l("all"):"Important"===e.target.value?l("favorite"):"completed"===e.target.value?l("completed"):l("uncompleted")});return o.a.createElement("form",null,o.a.createElement("div",{id:"alert"}),o.a.createElement("input",{value:t,id:"input-todo",type:"text",onChange:function(e){a(e.target.value)},placeholder:"Write something...",minLength:"4",maxLength:"16",size:"18",className:"input-todo"}),o.a.createElement("button",{onClick:function(e){var o=document.getElementById("input-todo"),l=document.getElementById("alert"),r=document.createElement("p");e.preventDefault();var i=t.length;i>=4?(c([].concat(Object(s.a)(n),[{text:t,completed:!1,favorite:!1,id:1e3*Math.random(),date:new Date}])),o.placeholder="Add another one...",o.className="input-todo",r.innerText="ToDo added...",l.appendChild(r),setTimeout((function(){l.removeChild(r)}),2e3)):i<=3&&(o.placeholder="Text minimum size: 4",o.className="error"),a("")},type:"submit",className:"buttonUser"},"+"),o.a.createElement("div",{className:"select d-flex flex-column flex-md-row justify-content-center align-items-center"},o.a.createElement("button",{className:"select-button ".concat(r?"active":""),value:"all",onClick:i},"All"),o.a.createElement("button",{className:"select-button ".concat(r?"active":""),value:"completed",onClick:i},"Completed"),o.a.createElement("button",{className:"select-button ".concat(r?"active":""),value:"Important",onClick:i},"Important"),o.a.createElement("button",{className:"select-button ".concat(r?"active":""),value:"uncompleted",onClick:i},"Uncompleted")),o.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("alert"),a=document.createElement("p");a.innerText="All Deleted...",t.appendChild(a),setTimeout((function(){t.removeChild(a)}),2e3),c([])},className:"select-button"},o.a.createElement("i",{className:"fas fa-trash"})," All"))}var m=a(3),d=function(e){var t=e.text,a=e.todo,n=e.todos,c=e.setTodos;e.id;return o.a.createElement("div",{className:"todo"},o.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":a.favorite?"favorited":"")},t),o.a.createElement("button",{onClick:function(){c(n.map((function(e){return e.id===a.id?Object(m.a)(Object(m.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("button",{onClick:function(){c(n.map((function(e){return e.id===a.id?Object(m.a)(Object(m.a)({},e),{},{favorite:!e.favorite}):e})))},className:"star-btn"},o.a.createElement("i",{className:"fas fa-star"})),o.a.createElement("button",{onClick:function(){c(n.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},o.a.createElement("i",{className:"fas fa-trash"})))},u=function(e){var t=e.todos,a=e.setTodos,n=e.filterTodos;return document.createElement("p").classList.add("text-center"),o.a.createElement("div",{className:"todo-container text-center"},o.a.createElement("ul",{className:"todo-list"},o.a.createElement("p",{className:"text-white"},0===t.length?"ToDo List empty..":""),n.map((function(e){return o.a.createElement(d,{setTodos:a,todos:t,key:e.id,text:e.text,completed:e.completed,favorite:e.favorite,id:e.id,todo:e})}))))};var f=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(r.a)(l,2),m=s[0],d=s[1],f=Object(n.useState)("all"),p=Object(r.a)(f,2),v=p[0],E=p[1],b=Object(n.useState)([]),h=Object(r.a)(b,2),N=h[0],g=h[1],x=Object(n.useState)(!0),O=Object(r.a)(x,2),j=O[0],k=O[1];Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){T(),C()}),[m,v]);var T=function(){switch(v){case"completed":g(m.filter((function(e){return!0===e.completed})));break;case"favorite":g(m.filter((function(e){return!0===e.favorite})));break;case"uncompleted":g(m.filter((function(e){return!1===e.completed})));break;default:g(m)}},C=function(){localStorage.setItem("todos",JSON.stringify(m))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos",JSON.stringify(m)));d(e)}};return o.a.createElement("div",{className:"container App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 col-lg-8 text-center"},o.a.createElement("div",{className:"col-12 App-header pt-5 mx-auto"},o.a.createElement("p",{className:"text-center"},"React-ToDo"),o.a.createElement("p",{className:"smaller"},"Created by ",o.a.createElement("a",{href:"https://github.com/JuanGidoni"},"Juan Ignacio Gidoni"))),o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},o.a.createElement(i,{input:a,todos:m,setTodos:d,setInput:c,setStatus:E,active:j,setActive:k}))),o.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 todoBox pt-5 pt-md-0"},o.a.createElement("h2",{className:"text-white text-center input-todo"},"ToDo List"),o.a.createElement(u,{filterTodos:N,setTodos:d,todos:m}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fbb3e8e3.chunk.js.map