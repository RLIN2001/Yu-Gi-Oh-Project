const navToggle=document.querySelector(".navbar_toggle"),links=document.querySelector(".main_nav"),input=document.querySelector(".header-section input"),cards=document.querySelector(".ajax-section .cards"),form=document.getElementById("form");var info=document.getElementById("info"),modal=document.getElementById("myModal"),span=document.getElementsByClassName("close")[0];function allcard(){if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);addCard(""),links.classList.toggle("show_nav")}function addCard(n){fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${n}&language=it`).then(function(n){return n.json()}).then(function(n){n.data.forEach(n=>{const a=n.card_images[0].image_url_small,e=(n.name,n.id);let t=document.createElement("li");const i=`\n                <h4 class="card-name">\n                    <span style="color:white;" id="uid">${n.name}</span>\n                    <br>\n                    <figure>\n                    <img class="icon" src="${a}" onclick="detail(\`${e}\`)">\n                </figure>\n                </h4>\n            `;t.innerHTML=i,cards.appendChild(t)})}).catch(()=>{alert("Qualcosa è andato storto")})}function allspell(){if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);alltypeCard("Spell Card"),links.classList.toggle("show_nav")}function alltrap(){if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);alltypeCard("Trap Card"),links.classList.toggle("show_nav")}function allmonster(){if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);alltypeCard("Monster"),links.classList.toggle("show_nav")}function alltypeCard(n){fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname&language=it").then(function(n){return n.json()}).then(function(a){a.data.forEach(a=>{const e=a.type,t=a.id;if(1==e.includes(n)){const n=a.card_images[0].image_url_small;let e=document.createElement("li");const i=`\n                 <h4 class="card-name">\n                     <span style="color:white; id="uid">${a.name}</span>\n                     <br>\n                     <figure>\n                     <img class="icon" src="${n}" onclick="detail(\`${t}\`)">\n                 </figure>\n                 </h4>\n             `;e.innerHTML=i,cards.appendChild(e)}})}).catch(()=>{alert("Qualcosa è andato storto")})}function rd(){if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);fetch("https://db.ygoprodeck.com/api/v7/randomcard.php").then(function(n){return n.json()}).then(function(n){const a=n.card_images[0].image_url_small,e=n.name,t=n.id;let i=document.createElement("li");const c=`\n        <h4 class="card-name">\n            <span style="color:white;" id="uid">${e}</span>\n            <br>\n            <figure>\n            <img class="icon" src="${a}" onclick="detail(\`${t}\`)">\n        </figure>\n        </h4>\n    `;i.innerHTML=c,cards.appendChild(i)}).catch(()=>{alert("Qualcosa è andato storto")}),links.classList.toggle("show_nav")}function detail(n){if(info)for(;info.firstChild;)info.removeChild(info.firstChild);console.log(n),fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${n}&language=it`).then(function(n){return n.json()}).then(function(n){const a=n.data[0].name,e=n.data[0].card_images[0].image_url,t=n.data[0].desc;let i=document.createElement("div");const c=`\n        \n        <h2>${a}</h2>\n        \n        <img src="${e}" style="width:100%;max-width:300px" ></img>\n\n        <p><b>Descrizione:</b></p>\n        <p>${t}</p>\n            \n           \n<br><br>\n\n          </div>\n    `;i.innerHTML=c,info.appendChild(i),modal.style.display="block"}).catch(function(){alert("Qualcosa è andato storto")})}span.onclick=function(){modal.style.display="none"},window.onclick=function(n){n.target==modal&&(modal.style.display="none")},console.log("ciao"),navToggle.addEventListener("click",function(){links.classList.toggle("show_nav")}),form.addEventListener("submit",n=>{n.preventDefault();let a=input.value;if(""==a)alert("Devi digitare il nome della carta!!");else{if(cards)for(;cards.firstChild;)cards.removeChild(cards.firstChild);addCard(a),form.reset()}});