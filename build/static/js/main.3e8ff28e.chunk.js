(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),l=n(0),c=n.n(l),o=n(5),u=n.n(o),s=(n(13),function(e){var t=e.shortUrl,n=e.longUrl,a=e.fun;return c.a.createElement("div",{className:"url"},c.a.createElement("p",null,c.a.createElement("a",{className:"longid",href:n},n)),c.a.createElement("p",null,c.a.createElement("a",{className:"shortid",href:"https://nith.herokuapp.com/"+t},t)),c.a.createElement("button",{className:"btn-2",onClick:a},"Copy"))}),i=(n(14),function(e){var t=e.Submit,n=e.changeurl;return c.a.createElement("div",{className:"form"},c.a.createElement("input",{className:"input",onChange:function(e){return n(e.target.value)},name:"fullurl",autoComplete:"off",placeholder:"Shorten your link",type:"text"}),c.a.createElement("button",{className:"btn",onClick:t},"Shrink"))}),m=n(6),h=n.n(m),f=(n(16),function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],u=Object(l.useState)(""),m=Object(r.a)(u,2),f=m[0],p=m[1],E=Object(l.useState)(""),b=Object(r.a)(E,2),d=b[0],g=b[1],U=Object(l.useState)(),j=Object(r.a)(U,2),k=j[0],v=j[1],N=function(){h()(d)};return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"heading-div"},c.a.createElement("p",{className:"heading"},"Url Shrinker")),c.a.createElement("div",{className:"container"},k?c.a.createElement("div",null,"Enter a Url!"):"",c.a.createElement(i,{Submit:function(){f?(v(!1),fetch("https://nith.herokuapp.com/shortUrls/",{method:"POST",body:JSON.stringify({fullurl:f}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return g(e.short),o((function(t){return[].concat(Object(a.a)(t),[{longUrl:f.length<30?f:f.slice(0,30)+"...",shortUrl:e.short}])}))}))):v(!0)},changeurl:p}),n.map((function(e,t){return c.a.createElement(s,{longUrl:e.longUrl,shortUrl:e.shortUrl,fun:N})}))))});u.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3e8ff28e.chunk.js.map