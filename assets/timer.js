const timerBarContainer = document.createElement('div')
const timerBar = document.createElement('div')
timerBarContainer.appendChild(timerBar)
document.querySelector('#banner').appendChild(timerBarContainer)

{
    // timer placé en haut de l'image qui prend 10 secondes à se remplir
    timerBarContainer.style.position = 'absolute';
    timerBarContainer.style.top = '0';
    timerBarContainer.style.width = '100%'
    timerBarContainer.style.height = '3px';
    timerBarContainer.style.backgroundColor = '#FFFFFF';
    timerBar.style.height = '100%';
    timerBar.style.backgroundColor = '#FF0000';
}

let autonext = setInterval(nextSlide, 10000)

function resetautonext() {
    /** Le but de cette fonction est de faire 3 choses :
     * 1) Remettre à 0 'setInterval. Pour cela on le supprime, puis on le remet en place.
     * 2) On met en place le CSS pour la barre de progression à 0.
     * 3) Mettre en place le CSS pour que la barre de progression se remplisse.
     * Entre le 2 et le 3, on force le navigateur à mettre à jour la page (parce qu'il est un peu fainéant). */

    clearInterval(autonext);
    autonext = setInterval(nextSlide, 10000);

    timerBar.style.transition = 'none';
    timerBar.style.width = '0%';

    void timerBar.offsetWidth;

    timerBar.style.transition = 'width 10s linear';
    timerBar.style.width = '100%';
}

// Pour activer la barre de progression, on utilise une fois la fonction à l'initialisation de la page.
resetautonext();