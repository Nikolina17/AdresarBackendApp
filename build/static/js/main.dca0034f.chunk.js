(this.webpackJsonpreact_domaci=this.webpackJsonpreact_domaci||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),i=n(3),o=function(e){var t=e.adresar,n=e.brisiKontakt;return r.a.createElement("li",null,t.ime,"  ",t.mail," ",r.a.createElement("button",{onClick:n},"Izbrisi"))},l=n(2),m=n.n(l),s="http://localhost:3001/api/adresar",f=function(){return m.a.get(s)},d=function(e){return m.a.post(s,e)},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},p=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(),m=Object(i.a)(l,2),s=m[0],p=m[1],E=Object(a.useState)(),v=Object(i.a)(E,2),h=v[0],j=v[1],O=Object(a.useState)(""),g=Object(i.a)(O,2),k=g[0],C=g[1];Object(a.useEffect)((function(){f().then((function(e){u(e.data)}))}),[]);var S=["id"],y=function(e){C(e),function(e){var t=e.toLowerCase().trim();if(""===t)u(c);else{var n=c.filter((function(e){return Object.keys(e).some((function(n){return!S.includes(n)&&e[n].toString().toLowerCase().includes(t)}))}));u(n)}}(e)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Adresar"),r.a.createElement("input",{type:"text",placeholder:"Unesi ime..",value:k||"",onChange:function(e){return y(e.target.value)}}),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement(o,{key:e.id,adresar:e,brisiKontakt:function(){return t=e.id,void b(t).then((function(e){u(c.filter((function(e){return e.id!==t})))}));var t}})}))),r.a.createElement("h1",null,"Novi kontakt"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d({ime:s,mail:h}).then((function(e){u(c.concat(e.data)),p(""),j("")}))}},"Ime i prezime: ",r.a.createElement("input",{value:s||"",onChange:function(e){p(e.target.value)}}),r.a.createElement("br",null),"Email: ",r.a.createElement("input",{value:h||"",onChange:function(e){j(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Dodaj")))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dca0034f.chunk.js.map