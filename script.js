
// --------------------- Algorithme de récupération des datas -------------------------- 

var numCase = 0
parent = document.querySelector(".liste-analogies")

data.forEach(function(element){ // J'utilise une boucle forEach pour itérer sur chaque élément du tableau "data"
    console.log("Si j'étais "+" un "+element)
    
    // Code permettant d'injecter les analogies dans la page HTML en allant récupérer une à une les données de la page "data.js".
    parent.innerHTML =parent.innerHTML +"<section class ='page'><h2>Si j’étais <strong>" + data[numCase].analogie + "</strong>, je serais... <br></h2><p class='texte'><strong>" + data[numCase].valeuranalogie + "</strong> "+ data[numCase].texte +"</p>"+ data[numCase].image+"</section>"
    //console.log(valeurAnalogies[numCase])
    
    numCase = numCase + 1   // J'incrémente numCase pour accéder à la prochaine analogie dans le tableau "data"

});



    console.log(parent)



//------------------- POPUP image (! pas utilisé dans cette version du site !) ---------------------

var afficheImage = document.querySelector(".page img") // Je sélectionne l'élément image dans la classe "page"

afficheImage.addEventListener("click", function(event){ // J'ajoute un écouteur d'événements pour le clic sur l'image

    document.querySelector(".popup-invisible").classList.add("popup-visible") // J'ajoute la classe "popup-visible" pour rendre visible le popup

    document.querySelector(".popup-invisible").classList.remove("popup-invisible")  // Je supprime la classe "popup-invisible" pour masquer le popup

})


var cacheFenetre = document.querySelector(".cache-fenetre") // Je sélectionne l'élément avec la classe "cache-fenetre"

cacheFenetre.addEventListener("click", function(event){ // J'ajoute un écouteur d'événements pour le clic sur l'élément avec la classe "cache-fenetre"

    document.querySelector(".popup").classList.add("popup-invisible")  // J'ajoute la classe "popup-invisible" pour masquer le popup

    document.querySelector(".popup").classList.remove('popup-visible') // Je supprime la classe "popup-visible" pour rendre invisible la popup

})











// ----------------- Formulaire ----------------------

var stockQuestion // stockage de la réponse du "si j'étais"

var questionAnalogie = document.querySelector("#analogies") // Je sélectionne l'élément du formulaire avec l'ID "analogies"
questionAnalogie.addEventListener("keyup", function(event){ // J'ajoute un écouteur d'événements pour détecter les frappes clavier dans le champ de texte du formulaire
    stockQuestion = questionAnalogie.value // Je stock la variable de stockage avec la valeur actuelle du champ de texte
    console.log(stockQuestion)
    return stockQuestion // Je retourne stockQuestion
})

var stockReponse // stockage de la réponse du "je serais" 

var reponseAnalogie = document.querySelector("#valeurAnalogies")
reponseAnalogie.addEventListener("keyup", function(event){
    stockReponse = reponseAnalogie.value
    return stockReponse
})

var stockImage // stockage de l'image

var image = document.querySelector("#limage")
image.addEventListener("keyup", function(event){
    stockImage = image.value
    return stockImage
})

var stockTexte // stockage de l'explication 

var texte = document.querySelector("#letexte")
texte.addEventListener("keyup", function(event){
    stockTexte = texte.value
    return stockTexte
})


var stockMail // stockage de l'explication 

var email = document.querySelector("#lemail")
email.addEventListener("keyup", function(event){
    stockMail = email.value
    return stockMail
})


var select= document.querySelector(".Crea") // slection de la class qui va contenir les informations
var selectbottom= document.querySelector("#envoi") // Envoi du formulaire sur la page 

selectbottom.addEventListener("click", function(event){
    event.preventDefault()
    select.innerHTML =select.innerHTML +" <section class ='page'><h2>Si j’étais " + stockQuestion + ", je serais... <br></h2><p class='texte'><strong>" + stockReponse + "</strong> " + stockTexte + "</p><img src='"+ stockImage+"'</h2></section>"
})



//---------------------------- Envoi du formulaire ------------------------------------
console.log(stockReponse, stockQuestion)
let submit=document.querySelector("#envoi") 
submit.addEventListener("click", function(event){ 
urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=theo.de-oliveira&courriel=philippe.gambette@u-pem.fr&message=Si j'étais "+stockQuestion+" Je serais "+stockReponse+" explication : "+stockTexte+" lien image : "+stockImage+" email : "+stockMail
fetch(urlVisitee).then(function(response){ 
response.json().then(function(data){ 
console.log("Réponse reçue : ") 
console.log(data); })
}) })




// ------------------------------- Scroll ---------------------------------------------

function scrollToMoi() {
    document.getElementById('commencer').scrollIntoView({ behavior: 'smooth' });
  }


  // ---------------------- POPUP mentions légales -----------------------------------


  document.addEventListener('DOMContentLoaded', function () {

    // Je récupère les éléments nécessaires dans le DOM
    var mentionLegaleBtn = document.getElementById('mentionLegaleBtn');
    var mentionLegalePopup = document.getElementById('mentionLegalePopup');
    var closePopup = document.getElementById('closePopup');

    // J'ajoute un écouteur d'événements pour le clic sur le bouton d'affichage des mentions légales
    mentionLegaleBtn.addEventListener('click', function () {
        mentionLegalePopup.style.display = 'block';
    });

    // J'ajoute un écouteur d'événements pour le clic sur le bouton de fermeture de la popup
    closePopup.addEventListener('click', function () {
        mentionLegalePopup.style.display = 'none';
    });
    
    // J'ajoute un écouteur d'événements pour détecter un clic en dehors de la popup
    window.addEventListener('click', function (event) {
        if (event.target === mentionLegalePopup) {
            mentionLegalePopup.style.display = 'none';
        }
    });
});


//-------- Bouton retour accueil ----------------


// Lorsque la page est en cours de défilement, cette fonction est appelée
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");  // Je récupère l'élément du bouton "Retour en haut" par son identifiant


    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // Si la position de défilement dépasse 20 pixels, j'affiche le bouton, sinon, je le masque

        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Fonction pour remonter en haut de la page
function topFunction() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}

