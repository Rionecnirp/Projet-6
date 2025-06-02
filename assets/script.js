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
 * On crée "dotsContainer" qui renvoie au div déjà existant dans le code HTML
 * On insère dans le HTML, dans "dotsContainer" nos dots (autant qu'il y a d'élément dans le tableau "slides")
 * On place la classe "dot_selected" au premier div qui se trouve dans "dotsContainer"
 * On crée la variable "allDots" qui va fonctionner comme un mini-tableau */

let dot = `<div class="dot"></div>`
let dotsContainer = document.querySelector('.dots')
dotsContainer.innerHTML=`${dot.repeat(slides.length)}`
dotsContainer.firstChild.classList.add('dot_selected')
const allDots = document.querySelectorAll('.dot')