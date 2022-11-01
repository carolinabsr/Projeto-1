const btnLight = document.getElementById('btnLight')
const btnSnake = document.getElementById('btnSnake')
const btnMind = document.getElementById('btnMind')
const btnTricksy = document.getElementById('btnTricksy')
const btnStart = document.getElementById('gameStart')
const btnReset = document.getElementById('gameReset')
const btnAudio = document.getElementById('hpMusic')

let duelStart = document.getElementById('duelStartId')

function enableButtons() {

    btnLight.removeAttribute('disabled')
    btnSnake.removeAttribute('disabled')
    btnMind.removeAttribute('disabled')
    btnTricksy.removeAttribute('disabled')
    
}

function disableButtons() {
    btnLigh.setAttribute('disabled', true)
    btnSnake.setAttribute('disabled', true)
    btnMind.setAttribute('disabled', true)
    btnTricksy.setAttribute('disabled', true)
}

function startGame() {

    duelStart.innerHTML = 'Choose your spell    !'
    btnFire.classList.remove('displayNone')
    btnLeaf.classList.remove('displayNone')
    btnWater.classList.remove('displayNone')

    btnGameStart.classList.add('displayNone')
    bgAudio.play()
    bgAudio.volume = 0.05

}

function playAudio() {
    if (hpAudio.classList.contains('hpAudioActive')) {
        hpAudio.innerText = 'Music OFF'
        hpAudio.pause()
        hpAudio.classList.remove('bgAudioActive')
    } else {

        hpAudio.play()
        hpAudio.volume = 0.05
        hpAudio.classList.add('bgAudioActive')
        btnAudio.innerText = 'Music ON'
    }
}

btnStart.onclick = playGame("snake")

// btnFire.addEventListener('click', attack)
// btnLeaf.addEventListener('click', attack)
// btnWater.addEventListener('click', attack)
// btnToggleMusic.addEventListener('click', toggleAudio)
// btnGameStart.addEventListener('click', startGame)



 
                