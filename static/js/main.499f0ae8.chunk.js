(this["webpackJsonphouse-things"]=this["webpackJsonphouse-things"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(7),r=n.n(c),s=n(2),i=n.n(s),u=n(4),l=n(8),p=n(5),f=function(){var e=Object(o.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)([]),s=Object(p.a)(r,2),f=s[0],h=s[1];Object(o.useEffect)((function(){console.log(n)}),[n]),Object(o.useEffect)((function(){console.log(f)}),[f]);var d="https://ewry-api.netlify.app/.netlify/functions/api/things";return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",className:"btn widget-btn",onClick:function(){window.cloudinary.createUploadWidget({cloudName:"gk061090",uploadPreset:"zptu6x1e",folder:"house/things"},(function(e,t){"success"===t.event&&c((function(e){return[].concat(Object(l.a)(e),[{id:t.info.asset_id,thumbnail:t.info.thumbnail_url,source:t.info.secure_url}])}))})).open()}},"Upload Via Widget"),a.a.createElement("button",{type:"button",onClick:function(){Object(u.a)(i.a.mark((function e(){var t,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",token:"house"},body:JSON.stringify({title:1,description:"Textual content",images:n})});case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent,console.log(o);case 7:case"end":return e.stop()}}),e)})))()}},"Send"),a.a.createElement("button",{type:"button",onClick:function(){Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d,{headers:{token:"house"}});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Sanya hui sosi");case 6:return e.next=8,t.json();case 8:n=e.sent,h(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},"Get"),f.map((function(e){var t=e.images,n=e._id;return a.a.createElement("div",{key:n},t.map((function(e,t){return a.a.createElement("img",{key:t,src:e.thumbnail,alt:""})})))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.499f0ae8.chunk.js.map