const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0
const nb_slides = slides.length

const back = document.querySelector('.arrow_left')
const next = document.querySelector('.arrow_right')
const img = document.querySelector('.banner-img')
const txt = document.querySelector('#banner p')

/** Fabrication des bullets point. Pour faire ça le plus proprement possible :
 * On crée la variable "dot" qui va contenir notre dot.
 * On crée "dotsContainer" qui renvoie au div déjà existant dans le code HTML.
 * On insère dans le HTML, dans "dotsContainer" nos dots (autant qu'il y a d'élément dans le tableau "slides").
 * On place la classe "dot_selected" au premier div qui se trouve dans "dotsContainer".
 * On crée la variable "allDots" qui va fonctionner comme un mini-tableau. */

let dot = `<div class="dot"></div>`
let dotsContainer = document.querySelector('.dots')
dotsContainer.innerHTML=`${dot.repeat(slides.length)}`
dotsContainer.firstChild.classList.add('dot_selected')
const allDots = document.querySelectorAll('.dot')

/** Création de la fonction pour passer à la slide suivant :
 * On retire la classe "dot_selected" du dot actuel (représenté par index).
 * On augmente index de 1, dans l'idée on passe à la case suivante.
 * Si index dépasse nb_slides-1 (ici 3, la première case est toujours 0), alors...
 * On retourne à 0, donc à la première slide.
 * 
 * On modifie ensuite le chemin de l'image. Spécifiquement slides.images.
 * Pareil avec le texte.
 * On place "dot_selected sur le nouveau dot actuel".
 * Voir "timer.js" pour resetautonext. */

function nextSlide() {
	allDots[index].classList.remove('dot_selected');
	index++;
	if(index > nb_slides - 1){
		index = 0;
	}
	img.src = `./assets/images/slideshow/${slides[index].image}`;
	txt.innerHTML = slides[index].tagLine;
	allDots[index].classList.add('dot_selected');
	resetautonext();
	console.log('--> Nouvelle Slide !')
}

/**
 * Création de la fonction pour passer à la slide précédente :
 * Fonctionnellement la même chose que la fonction précédente, avec quelques changements.
 * On réduit index de 1.
 * Si index est en dessous de 0, alors...
 * On le place à nb_slides - 1.
 * 
 * Même chose que la fonction précédente. */

function backSlide() {
	allDots[index].classList.remove('dot_selected');
	index--;
	if(index < 0){
		index = nb_slides - 1;
	}
	img.src = `./assets/images/slideshow/${slides[index].image}`;
	txt.innerHTML = slides[index].tagLine;
	allDots[index].classList.add('dot_selected');
	resetautonext();
	console.log('--> Retour arrière !')
}

// Quand on clique sur la flèche de gauche, on active la fonction "backSlide" et on active la fonction "nextSlide" en cliquant sur la flèche de droite.
next.addEventListener('click', nextSlide)
back.addEventListener('click', backSlide)

// QoL. Transforme le curseur pour montrer qu'on peut cliquer sur les flèches.
back.style.cursor = 'pointer' 
next.style.cursor = 'pointer'