(this["webpackJsonprecipe-repertoire"]=this["webpackJsonprecipe-repertoire"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('[{"type":"Mains","recipes":[{"name":"Mexican Burrito","link":"https://www.recipetineats.com/beef-burritos/","images":["https://www.recipetineats.com/wp-content/uploads/2017/06/Burritos-4-650x464.jpg"]},{"name":"Boiled Chicken","link":"https://www.allrecipes.com/recipe/20455/boiled-chicken/","images":["https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1046916.jpg&w=582&h=774.0600000000001&c=sc&poi=face&q=85"]}]},{"type":"Sides","recipes":[{"name":"Couscous","link":"https://www.thespruceeats.com/simple-couscous-recipe-2355404","images":["https://www.thespruceeats.com/thmb/gTPCBUGwkW5LB5DULa1j7YaSEEI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-couscous-recipe-2355404-8-5b0da7ffba6177003622498c.jpg"]}]},{"type":"Desserts","recipes":[{"name":"Buttermilk Panna Cotta","link":"https://www.allrecipes.com/recipe/254451/chef-johns-buttermilk-panna-cotta/","images":["https://images.media-allrecipes.com/userphotos/720x405/3773396.jpg","https://www.taste.com.au/images/recipes/agt/2005/11/whitechocolate-panna-cotta-with-coffee-syrup-2272_l.jpeg","https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/panna-cotta-vert2.jpg"]},{"name":"Espresso Affogato","link":"https://www.allrecipes.com/recipe/228372/affogato-with-cold-brewed-coffee/","images":["https://www.insidetherustickitchen.com/wp-content/uploads/2018/07/Affogat-step-4-740x1110-inside-the-rustic-kitchen.jpg"]},{"name":"Cr\xe8me Br\xfbl\xe9e","link":"https://www.taste.com.au/recipes/creme-brulee/f15f3e32-59e5-4ef1-88c2-bc81d6cd9ab5","images":["https://img.taste.com.au/rqVjRTEX/w643-h428-cfill-q90/taste/2016/11/creme-brulee-83422-1.jpeg"]},{"name":"Crepe","link":"https://www.allrecipes.com/recipe/16383/basic-crepes/","images":["https://mathbabe.files.wordpress.com/2014/08/nutellacrepe.jpg","https://i.ytimg.com/vi/KgSsgqVtn1M/maxresdefault.jpg"]}]}]')},33:function(e,a,t){e.exports=t(49)},47:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),o=t(7),s=t(5),i=t(21),m=t(22),p=t(31),u=t(23),d=t(32),h=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"not-found",className:"container"},c.a.createElement("h1",null,"404"),c.a.createElement("p",null,"Page could not be found"))}}]),a}(n.Component),g=t(9),w=t(24),b=t(16),E=t(25),v=function(e){var a="carousel-id-".concat(Math.floor(1e3*Math.random())),t="#"+a;return c.a.createElement("div",{id:a,className:"carousel slide","data-ride":"carousel"},e.images.length>1&&c.a.createElement("ol",{className:"carousel-indicators"},e.images.map((function(e,a){return c.a.createElement("li",{"data-target":t,"data-slide-to":a,className:"".concat(0===a?"active":"")})}))),c.a.createElement("div",{className:"carousel-inner"},e.images.map((function(e,a){return c.a.createElement("div",{key:e,className:"carousel-item ".concat(0===a?"active":"")},c.a.createElement("img",{className:"d-block w-100 image-fluid",src:e,alt:e}))})),e.images.length>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{className:"carousel-control-prev",href:t,role:"button","data-slide":"prev"},c.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Previous")),c.a.createElement("a",{className:"carousel-control-next",href:t,role:"button","data-slide":"next"},c.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Next")))))},f=function(e){var a=Object(n.useState)({}),t=Object(b.a)(a,2),r=t[0],l=t[1],o=function(e,a){l(Object(w.a)({},r,Object(g.a)({},e,a)))};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-8"},E.map((function(e){return c.a.createElement("div",{key:e.type,className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",null,e.type),c.a.createElement("div",{className:"row"},e.recipes.map((function(a){return c.a.createElement("div",{key:a.name,className:"col"},c.a.createElement("p",{onClick:o.bind(null,e.type,a)},a.name),c.a.createElement(v,{images:a.images}))})))))}))),c.a.createElement("div",{className:"col-4"},c.a.createElement("h2",null,"Your order"),Object.entries(r).map((function(e){var a=Object(b.a)(e,2),t=a[0],n=a[1];return c.a.createElement("div",{key:n.name},c.a.createElement("p",null,"Course: ",t,", choice: ",n.name),c.a.createElement(v,{images:n.images}))})))))},N=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"About"),c.a.createElement("p",null,"Plan your fancy night in"))},k=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Recipe Repertoire"),c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(o.b,{className:"nav-link",to:"/"},"Home",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")))))},y=t(15),j=t.n(y),x=t(28),O=t.n(x),B=t(29),C=t.n(B),A=t(30),S=t.n(A);j.a.Marker.prototype.options.icon=j.a.icon({iconRetinaUrl:O.a,iconUrl:C.a,shadowUrl:S.a,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});var M=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{id:"application"},c.a.createElement(k,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:f}),c.a.createElement(s.a,{path:"/about",component:N}),c.a.createElement(s.a,{component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(10),T=t.n(P),D=t(12);t(42),t(43),t(44),t(45),t(46),t(47);window.jQuery=T.a,window.$=T.a,window.Popper=D.default,t(48),l.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.01cb1a12.chunk.js.map