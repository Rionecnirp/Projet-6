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
