"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[636],{636:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o=t(982),i=t(885),a=t(168),l=t(791),c=t(444),s=(t(948),t(184)),d=c.ZP.form(r||(r=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  input {\n    width: 90%;\n    padding: 10px;\n    margin: 10px 0px 0px 0px;\n    border: none;\n    border-bottom: 1px;\n    color: ",";\n    background-color: ",";\n  }\n\n  input::placeholder {\n    color: ",";\n  }\n\n  textarea {\n    width: 90%;\n    height: 300px;\n    padding: 10px;\n    margin: 10px 0px 10px 0px;\n    border: none;\n    border-bottom: 1px;\n    color: ",";\n    background-color: ",";\n    resize: none;\n  }\n\n  textarea::placeholder {\n    color: ",";\n  }\n\n  .btn {\n    width: 90%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-around;\n  }\n  .btn > div {\n    display: inline-block;\n    flex: 1;\n    font-size: 0.9em;\n  }\n  button {\n    flex: 1;\n    padding: 0;\n    margin: 0;\n    text-align: right;\n    margin-right: 10px;\n    font-size: 1em;\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    font-weight: bold;\n    color: #a96650;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.greenInput}),(function(n){return n.theme.color}),(function(n){return n.theme.color}),(function(n){return n.theme.orangeTextarea}),(function(n){return n.theme.color}));var u,p=function(n){var e=n.inputTitle,t=n.setInputTitle,r=n.inputContent,o=n.setInputContent,i=n.emptyInput,a=n.handleSubmit;return(0,s.jsxs)(d,{onSubmit:a,children:[(0,s.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9",value:e,onChange:function(n){return t(n.target.value)}}),(0,s.jsx)("textarea",{placeholder:"\ub0b4\uc6a9",value:r,onChange:function(n){return o(n.target.value)}}),(0,s.jsxs)("div",{className:"btn",children:[i&&(0,s.jsx)("div",{children:"\uc785\ub825\uce78\uc774 \ube44\uc5c8\uc2b5\ub2c8\ub2e4"}),(0,s.jsx)("button",{type:"submit",children:"\uc791\uc131"})]})]})},x=c.ZP.ul(u||(u=(0,a.Z)(["\n  width: 90%;\n  padding: 0;\n  height: 380px;\n  overflow: auto;\n\n  li {\n    height: 38px;\n    background-color: rgba(250, 233, 211, 0.3);\n    display: flex;\n    align-items: center;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    margin-bottom: 7px;\n    padding: 10px;\n    cursor: pointer;\n  }\n  ::-webkit-scrollbar {\n    position: absolute;\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: rgba(1, 107, 8, 0.1);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(1, 107, 8, 0.2);\n  }\n  .title {\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n  }\n\n  button {\n    /* font-size: 1vh; */\n    width: 20px;\n    height: 20px;\n    margin-left: 10px;\n    padding: 0;\n    font-weight: bold;\n    justify-self: center;\n    align-self: center;\n    border: none;\n    background-color: transparent;\n  }\n  button:hover {\n    cursor: pointer;\n    background-color: rgba(133, 86, 40, 0.7);\n    color: white;\n  }\n"])));var h,g=function(n){var e=n.diaries,t=n.handleDelete,r=n.handleSelect,o=n.selectedDiaryIndex;return(0,s.jsx)(x,{children:e.map((function(n,e){return(0,s.jsxs)("li",{className:o===e?"selected":"",children:[(0,s.jsxs)("div",{className:"title",onClick:function(){return r(e)},children:[(0,s.jsx)("span",{children:n.title}),(0,s.jsx)("span",{children:n.date})," "]}),(0,s.jsx)("button",{onClick:function(){return t(e)},children:"X"})]},e)}))})},f=c.ZP.section(h||(h=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .title {\n    width: 90%;\n    padding: 10px;\n    margin: 10px 0px 0px 0px;\n    border: none;\n    border-bottom: 1px;\n    background-color: rgba(254, 194, 194, 0.15);\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n  }\n  .title span:first-child {\n    font-weight: bold;\n  }\n  input {\n    width: 80%;\n    height: 15px;\n    border: none;\n    background: transparent;\n    outline: none;\n    color: ",";\n  }\n  .content {\n    width: 90%;\n    height: 300px;\n    padding: 10px;\n    margin: 10px 0px 10px 0px;\n    border: none;\n    border-bottom: 1px;\n    background-color: rgba(254, 194, 194, 0.15);\n    resize: none;\n    white-space: pre-wrap;\n  }\n  textarea {\n    width: 100%;\n    height: 300px;\n    border: none;\n    background: transparent;\n    resize: none;\n    color: ",";\n  }\n  textarea:focus {\n    outline: none;\n  }\n\n  .btn {\n    width: 92%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n  }\n  button {\n    padding: 0;\n    margin: 0;\n    text-align: right;\n    font-size: 1em;\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    font-weight: bold;\n    color: #a96650;\n    cursor: pointer;\n  }\n  .green {\n    color: rgba(43, 186, 109, 1);\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.color}));var b,m,w=function(n){var e=n.title,t=n.content,r=n.date,a=n.setSelectedDiaryIndex,c=n.diaries,d=n.setDiaries,u=n.selectedDiaryIndex,p=(0,l.useState)(e),x=(0,i.Z)(p,2),h=x[0],g=x[1],b=(0,l.useState)(t),m=(0,i.Z)(b,2),w=m[0],j=m[1],v=(0,l.useState)(!1),y=(0,i.Z)(v,2),k=y[0],S=y[1],Z=(0,l.useState)(""),C=(0,i.Z)(Z,2),I=C[0],D=C[1];return(0,s.jsxs)(f,{children:[(0,s.jsxs)("div",{className:"title",children:[k?(0,s.jsx)("input",{type:"text",value:h,onChange:function(n){g(n.target.value)}}):(0,s.jsx)("span",{children:h}),(0,s.jsx)("span",{children:r})]}),(0,s.jsx)("div",{className:"content",children:k?(0,s.jsx)("textarea",{value:w,onChange:function(n){j(n.target.value)}}):(0,s.jsx)("div",{children:w})}),(0,s.jsxs)("div",{className:"btn",children:[k?(0,s.jsx)("button",{className:"green",onClick:function(){if(h&&w){var n=(0,o.Z)(c);n[u]={title:h,content:w,date:r},d(n),S(!1),D("")}else D("\uc81c\ubaa9\uacfc \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:"\uc218\uc815\uc644\ub8cc"}):(0,s.jsx)("button",{onClick:function(){return S(!0)},children:"\uc218\uc815"}),(0,s.jsx)("div",{className:"error",children:I}),(0,s.jsx)("button",{onClick:function(){a(null)},children:"\ubaa9\ub85d\ubcf4\uae30"})]})]})},j=c.ZP.div(b||(b=(0,a.Z)(["\n  width: 800px;\n  height: 500px;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  padding: 20px 0 0 0;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 20px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n\n  .header {\n    /* position: relative; */\n    width: 100%;\n    height: 40px;\n    margin: 5px 0px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    justify-content: space-between;\n  }\n\n  .date {\n    font-size: 1.2em;\n    font-weight: 600;\n  }\n  .date > span:first-child {\n    margin-left: 30px;\n  }\n  .date > span::selection {\n    color: orange;\n  }\n  .day {\n    margin-left: 5px;\n  }\n  .day::selection {\n    color: orange;\n  }\n"])),(function(n){return n.theme.containerBackground}),(function(n){return n.theme.color})),v=c.ZP.button(m||(m=(0,a.Z)(["\n  width: 130px;\n  height: 32px;\n  text-align: center;\n  font-size: 1em;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  font-weight: bold;\n  margin-right: 20px;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.orangeText}));var y=function(){var n=(0,l.useState)((function(){var n=localStorage.getItem("diaries");return n?JSON.parse(n):[]})),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),c=(0,i.Z)(a,2),d=c[0],u=c[1],x=(0,l.useState)(""),h=(0,i.Z)(x,2),f=h[0],b=h[1],m=(0,l.useState)(!1),y=(0,i.Z)(m,2),k=y[0],S=y[1],Z=(0,l.useState)(null),C=(0,i.Z)(Z,2),I=C[0],D=C[1],N=(0,l.useState)(!1),z=(0,i.Z)(N,2),T=z[0],P=z[1];(0,l.useEffect)((function(){var n=JSON.parse(localStorage.getItem("diaries"));n&&r(n)}),[]),(0,l.useEffect)((function(){localStorage.setItem("diaries",JSON.stringify(t))}),[t]);var J=new Date,L=J.toLocaleString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),O=J.toLocaleString("ko-KR",{weekday:"long"});return(0,s.jsxs)(j,{children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsxs)("div",{className:"date",children:[(0,s.jsx)("span",{children:L}),(0,s.jsx)("span",{className:"day",children:O})]}),T||null!==I?null:(0,s.jsx)(v,{onClick:function(){P(!0)},children:"\uc624\ub298\uc758 \uc77c\uae30 \uc791\uc131"})]}),T?(0,s.jsx)(p,{inputTitle:d,setInputTitle:u,inputContent:f,setInputContent:b,emptyInput:k,handleSubmit:function(n){if(n.preventDefault(),d&&f){var e=(new Date).toLocaleDateString();r([].concat((0,o.Z)(t),[{title:d,content:f,date:e}])),u(""),b(""),S(!1),P(!1)}else S(!0)}}):null,null===I&&!T&&(0,s.jsx)(g,{diaries:t,handleDelete:function(n){var e=(0,o.Z)(t);I===n?D(null):I>n&&D(I-1),e.splice(n,1),r(e)},handleSelect:function(n){D(n)},selectedDiaryIndex:I}),null!==I&&(0,s.jsx)(w,{title:t[I].title,content:t[I].content,date:t[I].date,setSelectedDiaryIndex:D,selectedDiaryIndex:I,diaries:t,setDiaries:r})]})}}}]);
//# sourceMappingURL=636.d3d47b83.chunk.js.map