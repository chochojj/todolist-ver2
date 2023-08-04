"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[555],{555:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var o,i,r,c,a=t(168),l=t(982),s=t(885),d=t(791),u=t(444),f=(t(948),t(184)),h=u.ZP.div(o||(o=(0,a.Z)(["\n  button::selection {\n    background: none;\n  }\n  input::selection {\n    background: none;\n  }\n  form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  input {\n    width: 275px;\n    height: 32px;\n    background-color: ",";\n    border: none;\n    padding: 0 10px;\n    border-radius: 5px 0 0 5px;\n  }\n  input::placeholder {\n    color: ",";\n  }\n\n  button {\n    width: 65px;\n    height: 32px;\n    border: none;\n    background-color: ",';\n    font-weight: bold;\n    font-family: "NanumRg";\n    border-radius: 0 5px 5px 0;\n  }\n  button:hover {\n    cursor: pointer;\n  }\n'])),(function(n){return n.theme.orangeInput}),(function(n){return n.theme.color}),(function(n){return n.theme.greenButton})),p=(0,d.memo)((function(n){var e=n.addTodo,t=(0,d.useState)(""),o=(0,s.Z)(t,2),i=o[0],r=o[1],c=(0,d.useRef)(null);(0,d.useEffect)((function(){c.current.focus(),r("")}),[e]);return(0,f.jsx)(h,{children:(0,f.jsxs)("form",{className:"add-form",children:[(0,f.jsx)("input",{ref:c,value:i,onChange:function(n){r(n.target.value)},placeholder:"\uc624\ub298\uc758 \ud560 \uc77c \uc785\ub825\ud558\uae30 !"}),(0,f.jsx)("button",{type:"submit",onClick:e(i),children:"\ucd94\uac00"})]})})})),g=u.ZP.div(i||(i=(0,a.Z)(["\n  .list {\n    line-height: 30px;\n    display: flex;\n    list-style: none;\n    width: 340px;\n    align-items: center;\n    font-size:15px;\n    background-color: rgba(250, 240, 230, 0.425);\n    text-decoration: antiquewhite;\n    margin-bottom: 8px;\n  }\n\n  .list .check {\n    cursor: pointer;\n    align-self: center;\n    font-size: 18px;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .list .todo {\n    overflow-wrap: break-word;\n    width: 270px;\n  }\n\n  .checked {\n    text-decoration: line-through;\n  }\n\n  .update-form input {\n    background-color: transparent;\n    border: none;\n    width: 260px;\n    margin-right: 10px;\n    font-size: 15px;\n    padding: 0;\n  }\n\n  .list button {\n    /* font-size: 1vh; */\n    background-color: transparent;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    font-weight: bold;\n    justify-self: center;\n    align-self: center;\n    border: none;\n  }\n  .list button:hover{\n    cursor: pointer;\n    background-color:rgba(133, 86, 40,0.7);\n    color: white;\n  }\n"]))),x=(0,d.memo)((function(n){var e=n.id,t=n.todo,o=n.isChecked,i=n.deleteTodo,r=n.updateTodo,c=n.toggleCheck,a=(0,d.useState)(t),l=(0,s.Z)(a,2),u=l[0],h=l[1],p=(0,d.useState)(!1),x=(0,s.Z)(p,2),m=x[0],b=x[1],k=(0,d.useRef)(null);(0,d.useEffect)((function(){m&&k.current.focus()}),[m]);return(0,f.jsx)(g,{children:(0,f.jsxs)("li",{className:"list",children:[(0,f.jsx)("span",{className:"check",onClick:c(e),children:o?"\ud83e\udd70":"\ud83d\ude36"}),m||(0,f.jsx)("span",{className:"todo ".concat(o?"checked":""),onClick:function(){b(!0)},children:t}),m&&(0,f.jsx)("form",{className:"update-form",onSubmit:function(n){n.preventDefault(),b(!1),u?t!==u&&r(e,u,o):h(t)},children:(0,f.jsx)("input",{ref:k,value:u,onChange:function(n){h(n.target.value)},onBlur:function(){b(!1),u!==t&&r(e,u,o)},onKeyUp:function(n){"Escape"===n.key&&b(!1)}})}),(0,f.jsx)("button",{onClick:i(e),children:"X"})]})})})),m=u.ZP.div(r||(r=(0,a.Z)(["\n  .todolist-box {\n    width: 400px;\n    height: 500px;\n    /* background-color: rgba(255,255,255,0.7); */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* border-radius: 20px; */\n    /* box-shadow: 0px 0px 5px rgba(0,0,0, 0.1); */\n  }\n  .header {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 10px;\n  }\n  .info {\n    width: 85%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 50px;\n    margin-top: 20px;\n  }\n  .info > span {\n    font-weight: bold;\n    /* display: none; */\n  }\n  .info > span::selection {\n    color: green;\n  }\n  h1::selection {\n    color: orange;\n  }\n  h1 {\n    margin: 0;\n    font-size: 22px;\n    line-height: 50px;\n  }\n\n  .date {\n    width: 85%;\n    font-size: 13px;\n    font-weight: 600;\n  }\n  .date > span::selection {\n    color: orange;\n  }\n  .day {\n    margin-left: 5px;\n  }\n  .day::selection {\n    color: orange;\n  }\n  ul {\n    padding: 0;\n    height: 340px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  ul::-webkit-scrollbar {\n    display: none;\n  }\n"]))),b=function(){var n=(0,d.useState)((function(){var n=localStorage.getItem("todoList");return n?JSON.parse(n):[]})),e=(0,s.Z)(n,2),t=e[0],o=e[1],i=(0,d.useState)(0),r=(0,s.Z)(i,2),c=r[0],a=r[1],u=(0,d.useRef)(!0);(0,d.useEffect)((function(){u.current||(localStorage.setItem("todoList",JSON.stringify(t)),localStorage.setItem("id",c))}),[t,c]),(0,d.useEffect)((function(){var n=localStorage.getItem("todoList");n&&o(JSON.parse(n));var e=localStorage.getItem("id");e&&a(parseInt(e)),u.current=!1}),[]);var h=(0,d.useCallback)((function(n){return function(e){if(console.log("add"),e.preventDefault(),n){var i=(new Date).toLocaleDateString();o((function(e){return[].concat((0,l.Z)(e),[{id:c,todo:n,isChecked:!1,date:i}])})),a((function(n){return n+1})),localStorage.setItem("todoList",JSON.stringify(t)),localStorage.setItem("id",c)}}}),[c,t]),g=(0,d.useCallback)((function(n,e,i){var r=t.findIndex((function(e){return e.id===n})),c=(0,l.Z)(t);c.splice(r,1,{id:n,todo:e,isChecked:i}),o(c)}),[t]),b=(0,d.useCallback)((function(n){return function(){var e=t.filter((function(e){return e.id!==n}));o(e),localStorage.setItem("todoList",JSON.stringify(e)),localStorage.setItem("id",n)}}),[t]),k=(0,d.useCallback)((function(n){return function(){var e=t.findIndex((function(e){return e.id===n})),i=(0,l.Z)(t);i[e].isChecked=!i[e].isChecked,o(i)}}),[t]),v=new Date,j=v.toLocaleString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),w=v.toLocaleString("ko-KR",{weekday:"long"}),y=t.filter((function(n){return!n.isChecked}));return(0,f.jsx)(m,{children:(0,f.jsxs)("div",{className:"todolist-box",children:[(0,f.jsxs)("div",{className:"header",children:[(0,f.jsxs)("div",{className:"info",children:[(0,f.jsx)("h1",{children:"\uc624\ub298\uc758 \ud560 \uc77c \ubaa9\ub85d"}),(0,f.jsxs)("span",{className:"undone",children:[y.length,"\uac1c "]})]}),(0,f.jsxs)("div",{className:"date",children:[(0,f.jsx)("span",{children:j}),(0,f.jsx)("span",{className:"day",children:w})]})]}),(0,f.jsx)(p,{addTodo:h}),(0,f.jsx)("ul",{children:t.map((function(n){return(0,f.jsx)(x,{id:n.id,todo:n.todo,isChecked:n.isChecked,updateTodo:g,deleteTodo:b,toggleCheck:k},n.id)}))})]})})},k=u.ZP.div(c||(c=(0,a.Z)(["\n  width: 400px;\n  height: 500px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n  border-radius: 20px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n"])),(function(n){return n.theme.containerBackground}),(function(n){return n.theme.color}));var v=function(){return(0,f.jsx)(k,{children:(0,f.jsxs)(b,{children:[(0,f.jsx)(p,{}),(0,f.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=555.0ea2eaae.chunk.js.map