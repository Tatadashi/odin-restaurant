(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"e3966efe3eb5db8af100.jpg";function n(){document.body.style.backgroundColor="grey";const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="Edible Food",e.appendChild(n);const o=document.createElement("img");o.src=t,o.alt="totally not abandoned looking restaurant",e.appendChild(o);const r=document.createElement("p");r.innerText="A restaurant which sells food that is very edible. The food are prepared and cooked so they can be sold to paying customers. The food costs money and takes time to make. There are people who work at this restaurant. They are paid.",e.appendChild(r)}const o=e.p+"ac38f37179ae9a70ffd0.jpg",r=e.p+"0bc38dc7b32041cc5c70.webp";function c(e,t){const n=document.getElementById("content"),o=document.createElement("div"),r=document.createElement("h1");r.innerText=e,o.appendChild(r);const c=document.createElement("img");c.src=t,c.alt=`picture of ${r}`,o.appendChild(c),n.appendChild(o)}const d=e.p+"886c6f5e9242fa020688.png",a=e.p+"6b4ed753d69d492eb87b.webp";function i(e,t){e.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",t()}))}n(),i(document.getElementById("home"),n),i(document.getElementById("menu"),(function(){document.body.style.backgroundColor="#be9fbf",c("Assorted Berries",o),c("Bear",r)})),i(document.getElementById("about"),(function(){document.body.style.backgroundColor="#eedd82";const e=document.getElementById("content"),t=document.createElement("h1");t.innerText="Our Founders",e.appendChild(t);const n=document.createElement("img");n.src=d,n.alt="real picture of real founders",e.appendChild(n);const o=document.createElement("p");o.innerText="Our Founders use only homegrown, fresh, all-natural produce sourced from ethical places. They have been maintaining this quality ever since they founded this food establishment 199 years ago.",e.appendChild(o);const r=document.createElement("img");r.src=a,r.alt="homegrown, fresh, all-natural produce sourced from ethical places",e.appendChild(r)}))})();