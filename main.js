(()=>{"use strict";function e(){document.body.style.backgroundColor="grey";const e=document.getElementById("content"),t=document.createElement("h1");t.innerText="Edible Food",e.appendChild(t);const n=document.createElement("img");n.src="./restaurant.jpg",n.alt="totally not abandoned looking restaurant",e.appendChild(n);const o=document.createElement("p");o.innerText="A restaurant which sells food that is very edible. The food are prepared and cooked so they can be sold to paying customers. The food costs money and takes time to make. There are people who work at this restaurant. They are paid.",e.appendChild(o)}function t(e,t){const n=document.getElementById("content"),o=document.createElement("div"),d=document.createElement("h1");d.innerText=e,o.appendChild(d);const r=document.createElement("img");r.src=t,r.alt=`picture of ${d}`,o.appendChild(r),n.appendChild(o)}function n(e,t){e.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",t()}))}e(),n(document.getElementById("home"),e),n(document.getElementById("menu"),(function(){document.body.style.backgroundColor="#be9fbf",t("Assorted Berries","./berry.jpg"),t("Bear","./bear.webp")})),n(document.getElementById("about"),(function(){document.body.style.backgroundColor="#eedd82";const e=document.getElementById("content"),t=document.createElement("h1");t.innerText="Our Founders",e.appendChild(t);const n=document.createElement("img");n.src="./founders.png",n.alt="real picture of real founders",e.appendChild(n);const o=document.createElement("p");o.innerText="Our Founders use only homegrown, fresh, all-natural produce sourced from ethical places. They have been maintaining this quality ever since they founded this food establishment 199 years ago.",e.appendChild(o);const d=document.createElement("img");d.src="./nature.webp",d.alt="homegrown, fresh, all-natural produce sourced from ethical places",e.appendChild(d)}))})();