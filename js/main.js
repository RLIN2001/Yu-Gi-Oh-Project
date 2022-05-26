const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

const input = document.querySelector(".header-section input");
const cards = document.querySelector(".ajax-section .cards");
const form = document.getElementById("form");





var info = document.getElementById("info");



var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}













navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})



form.addEventListener("submit",e =>{
    e.preventDefault();


    let inputVal=input.value;
   

    if(inputVal=="")
    {
        alert("Devi digitare un nome della carta!!");
    }
    else
    {
        if (cards) {
            while (cards.firstChild) {
              cards.removeChild(cards.firstChild);
            }}
 
    addCard(inputVal);
    form.reset();
        }
})
















function allcard(){
    if (cards) {
        while (cards.firstChild) {
          cards.removeChild(cards.firstChild);
        }}
    addCard("");
    links.classList.toggle("show_nav");
}











function addCard(inputVal){
    
    //fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname`)
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${inputVal}&language=it`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        let cardList = data;

            

            cardList.data.forEach((card) => {
                
                
                const icon=card.card_images[0].image_url_small;

                const name=card.name;
                const id=card.id;
                
                

                let li = document.createElement('li');
                const cardTemplate = `
                <h4 class="card-name">
                    <span id="uid">${card.name}</span>
                    <br>
                    <figure>
                    <img class="icon" src="${icon}" onclick="detail(\`${id}\`)">
                </figure>
                </h4>
            `;



        li.innerHTML = cardTemplate;
        cards.appendChild(li);

     
        });
        
        
        
       
})      
    .catch(()=>{
        alert("Qualcosa è andato storto");
    });
    


}


function allspell()
{
    if (cards) {
        while (cards.firstChild) {
          cards.removeChild(cards.firstChild);
        }}
    alltypeCard("Spell Card");
    links.classList.toggle("show_nav");
}


function alltrap(){
    if (cards) {
        while (cards.firstChild) {
          cards.removeChild(cards.firstChild);
        }}
    alltypeCard("Trap Card");
    links.classList.toggle("show_nav");
}



function allmonster(){
    if (cards) {
        while (cards.firstChild) {
          cards.removeChild(cards.firstChild);
        }}
    alltypeCard("Monster");
    links.classList.toggle("show_nav");

}







function alltypeCard(tipo){
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname&language=it`)
     .then(function (response) {
         return response.json();
     })
     .then(function (data) {
 
 
         let cardList = data;
         
 

             
 
             cardList.data.forEach((card) => {
                 
                 const type=card.type;
                 const id=card.id;

                 if(type.includes(tipo)==true)
                 {
 
                 const icon=card.card_images[0].image_url_small;
                 
 
                 let li = document.createElement('li');
                 const cardTemplate = `
                 <h4 class="card-name">
                     <span id="uid">${card.name}</span>
                     <br>
                     <figure>
                     <img class="icon" src="${icon}" onclick="detail(\`${id}\`)">
                 </figure>
                 </h4>
             `;
 
 
 
 
 
         li.innerHTML = cardTemplate;
         cards.appendChild(li);
                 }
      
         });
         
         
         
         
         
        
 })      
     .catch(()=>{
        alert("Qualcosa è andato storto");
     });
  
 
 }



function rd(){

    if (cards) {
        while (cards.firstChild) {
          cards.removeChild(cards.firstChild);
        }}


    fetch(`https://db.ygoprodeck.com/api/v7/randomcard.php`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        const icon=data.card_images[0].image_url_small;
        const name=data.name;
        const id=data.id;
        let li = document.createElement('li');
        const cardTemplate = `
        <h4 class="card-name">
            <span id="uid">${name}</span>
            <br>
            <figure>
            <img class="icon" src="${icon}" onclick="detail(\`${id}\`)">
        </figure>
        </h4>
    `;


li.innerHTML = cardTemplate;
cards.appendChild(li);



    })
    .catch(()=>{
        
        alert("Qualcosa è andato storto");
    });
    links.classList.toggle("show_nav");
}










 function detail(id)
 {
    if (info) {
        while (info.firstChild) {
          info.removeChild(info.firstChild);
        }}

    
        console.log(id);
   
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}&language=it`)
    .then(function (response) {
        return response.json();
    })
    .then(function (card) {

        const name=card.data[0].name;
        const immagine=card.data[0].card_images[0].image_url;
        const desc=card.data[0].desc;

        let li = document.createElement('div');
        const cardTemplate = `
        
        <h2>${name}</h2>
        
        <img src="${immagine}" style="width:100%;max-width:300px" ></img>

        <h4><b>Descrizione:</b></h4>
        <h4>${desc}</h5>
            
           
<br><br>

          </div>
    `;




li.innerHTML = cardTemplate;
info.appendChild(li);

modal.style.display = "block";
    
})
    .catch(function () {
       
        alert("Qualcosa è andato storto");

 });
}

