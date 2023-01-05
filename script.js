var button = document.querySelector('.generer');
var boite = document.querySelector('.boite');

button.onclick = function(){
var url = 'https://api.adviceslip.com/advice'; //Nous avons mis dans une variable url le lien de notre API ;
    
fetch(url).then((response)=>
response.json().then((data)=>
    
{
    boite.innerHTML = ` <span>"</span> ${data.slip.advice}  <span>"</span>`
}

)); 
}