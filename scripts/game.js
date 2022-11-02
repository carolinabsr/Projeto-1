// const prompt = require("prompt-sync")();

//selecionar os botões:
const btnLight = document.getElementById('btnLight')
const btnSnake = document.getElementById('btnSnake')
const btnMind = document.getElementById('btnMind')
const btnTricksy = document.getElementById('btnTricksy')
const btnStart = document.getElementById('gameStart')
const btnReset = document.getElementById('gameReset')
const btnMusic = document.getElementById('btnMusic')
const btnSpells = document.getElementsByClassName('spellsBtn') 
const hpMusic = document.getElementById('hpAudio')
const playerCurrentHealth = document.getElementById('playerCurrentHealth')
const houseCurrentHealth = document.getElementById('houseCurrentHealth')
const playerMaxHealth = document.getElementById('playerMaxHealth')
const playerStrength = document.getElementById('playerStrength')
const houseMaxHealth = document.getElementById('houseMaxHealth')
const houseStrength = document.getElementById('houseStrength')

let duelStart = document.getElementById('duelStartId')
let musicActive = false

btnStart.addEventListener('click', startGame)
btnMusic.addEventListener('click', changeAudio)
btnReset.addEventListener('click', resetGame)

//funções com botão:
// function enableButtons() {

//    btnLight.removeAttribute('disabled')
//    btnSnake.removeAttribute('disabled')
//    btnMind.removeAttribute('disabled')
//    btnTricksy.removeAttribute('disabled')
   
// }

//funções com botão 2:
 function disableSpellsButtons() {
    btnLight.classList.add('displayNone')
    btnSnake.classList.add('displayNone')
    btnMind.classList.add('displayNone')
    btnTricksy.classList.add('displayNone')
 }

// //função com botão 3:
// for (let button of spellsBtn){
//    button.onclick = playGame
// }



function changeAudio(){
   if (musicActive){
      hpMusic.pause()
      musicActive = false
      btnMusic.innerHTML = 'Music ON'
  } else {
   hpMusic.play()
   musicActive = true
   btnMusic.innerHTML = 'Music OFF'
  }
}


//funções com áudio:
// function playAudio() {
//    if (hpMusic.classList.contains('hpAudioActive')) {
//       hpMusic.innerText = 'Music OFF'
//       hpMusic.pause()
//       hpMusic.classList.remove('hpAudioActive')
//    }  else {

//       hpMusic.play()
//       hpMusic.volume = 0.05
//       hpMusic.classList.add('hpAudioActive')
//        hpMusic.innerText = 'Music ON'
//    }
// }

//função auxiliar: iniciar o jogo:

//1. criar os players e seus atributos (player x casas (console))
class Wizard {
   constructor(name, strength) {
      this.name = name
      this.health = 50
      this.strength = strength //8
   }
}

let player = new Wizard ('playerName', 8)
let gryffindor = new Wizard ('Gryffindor', 10)
let slytherin = new Wizard ('Slytherin', 12)
let ravenclaw = new Wizard ('Ravenclaw', 8)
let hufflepuf = new Wizard ('Hufflepuf', 8)

let houses = [gryffindor, slytherin, ravenclaw, hufflepuf]

//let indexHouse = ''
//let chosenHouses = []
//let choices = ['light', 'snake', 'mind']
//let gameOver = false
let playerSpell = ''
//let currentHouse = ''
let  gameWinner = 'player'
let playerScore = ''
let houseScore = ''
let rounds = 0
//let duelStart = document.getElementsByClassName('duelStart')



//trazer o adversário
// function chooseHouse(){
//    let indexHouse = Math.floor(Math.random()*houses.length)
//    currentHouse = houses[indexHouse]
//    console.log(currentHouse)
//}

function startGame(opponentHouse) {

   duelStart.innerHTML = 'Choose your spell ... '
   btnLight.classList.remove('displayNone')
   btnSnake.classList.remove('displayNone')
   btnMind.classList.remove('displayNone')
   btnTricksy.classList.remove('displayNone')
   btnStart.classList.add('displayNone')
   
   playerCurrentHealth.innerHTML = player.health
   houseCurrentHealth.innerHTML = opponentHouse.health
   playerMaxHealth.innerHTML = player.health
   playerStrength = player.strength
   houseMaxHealth = opponentHouse.health
   houseStrength = opponentHouse.health
   
   
   changeAudio()
   
   playGame()
   
   }

function resetGame(){
   duelStart.innerHTML = 'Press PLAY'
   disableSpellsButtons()
   btnStart.classList.remove('displayNone')
   let musicActive = true
   changeAudio()
}

   

//jogador ataca 
function playerAttack(playerSpell, opponentHouse){
   
   
   if (playerSpell ===  'light' && opponentHouse.name === 'Slytherin') {
      slytherin.health -= player.strength *2 //('sonserina fraca')
      
   }
  else if (playerSpell ===  'snake' && opponentHouse.name === 'Slytherin') {
      slytherin.health -= player.strength /2 //('sonserina forte')
      
   }
  else if (playerSpell ===  'light' && opponentHouse.name === 'Hufflepuf') {
      hufflepuf.health -= player.strength /2 //('lufa lufa forte')
      
  }
  else if (playerSpell ===  'mind' && opponentHouse.name === 'Hufflepuf') {
      hufflepuf.health -= player.strength *2 //('lufa lufa fraca')
      
  }
  else if (playerSpell ===  'snake' && opponentHouse.name === 'Gryffindor') {
      gryffindor.health -= player.strength *2 //('grifinória fraca')
      
  }
  else if (playerSpell ===  'tricksy' && opponentHouse.name === 'Gryffindor') {
      gryffindor.health -= player.strength /2 //('grifinória forte')
      
  }
  else if (playerSpell ===  'mind' && opponentHouse.name === 'Ravenclaw') {
      ravenclaw.health -= player.strength /2 //('corvinal forte')
      
  }
  else if (playerSpell ===  'tricksy' && opponentHouse.name === 'Ravenclaw') {
      ravenclaw.health -= player.strength /2 //('corvinal fraca')
      
  }
  else 
  opponentHouse.health -= player.strength
}

function opponentAttack(opponentHouse){
   player.health -= opponentHouse.strength
}

function playGame(){
   
   for (let i=0; i < houses.length && gameWinner == 'player'; i++){

      let currentHouse = i
      let opponentHouse = houses[currentHouse]
      console.log(opponentHouse.name)

      do {
         // const spell = prompt("Type your spell: ");
         const spell = "snake"
         playerAttack(spell, opponentHouse)
         opponentAttack(opponentHouse)
         playerCurrentHealth.innerHTML = player.health
         houseCurrentHealth.innerHTML = opponentHouse.health

      } while (!isGameOver(opponentHouse))
   
   }
   
   
}

//restaurar a vida do jogador
function restorePlayerHealth() {
   player.health = 50
   //playerHealth.innerHTML = player.health
}

function restoreOpponentHouseHealth(opponentHouse) {
   opponentHouse.health = 50
   //playerHealth.innerHTML = player.health
}

//alterar adversário (VALIDAR)
// function changeHouse(){
//    if(indexHouse = houses.length) checkGameOver()
//   else {
//    indexHouse = [indexHouse+1]
//   currentHouse = houses[indexHouse]
//   restorePlayerHealth()
//   }
// }

//validar gameover
function isGameOver(opponentHouse) {
   let gameOver = false;
   if (player.health <=0) {
      gameOver = true
      gameWinner = 'cpu'
      console.log(player.health)
      console.log('cpu ganhou')
      console.log(opponentHouse)
   }

   else if(opponentHouse.health <= 0) { //trocar visão para última casa sem vida.. incluir roundOver 
      restorePlayerHealth()
      gameOver = true
      console.log(opponentHouse.health)
      console.log(opponentHouse)
      console.log('player ganhou')
   }

   return gameOver;
}

// playGame()






// function play (playerSpell){
//    chooseHouse()
// //if (!gameOver) {
// if(playerSpell === 'light' && currentHouse.name === 'Slytherin'){
//    slytherin.health -= (player.strength*2)
//    console.log(slytherin.health)
// } else {
//    console.log('tente de novo')
// }
// }

// play('light')



  // houseAttack()
//}
   //function getCpuChoice() {
//    const randomNumber = Math.floor(Math.random() * this.choices.length)

//    return this.choices[randomNumber]
// }


// function play(playerSpell){
//    if(!this.gameOver) {
//        this.playerSpell = playerSpell
//        this.cpuChoice = this.getCpuChoice()
//        this.checkRoundWinner()
//        this.roundsPlayed++
//    }
   
//    return this

// }







// let spells = [
//    {name: 'Expecto Patronum',
//    type: 'light'},

//    {name: 'Lumus',
//    type: 'light'},

//    {name: 'Serpensortia',
//    type: 'snake'}
// ]


//ação: iniciar jogo:
//1. seleção aleatória da casa adversária pela CPU


//2. Player ataca (escolhe feitiço desejado)
//function chooseSpell(){
   //let playerSpell = 'Expecto Patronum'//incluir botão com as opções de clique
   //return playerSpell
//}




//2.1. se o feitiço for forte contra casa = dano = ataquePlayer *2

// function start(playerSpell){
//    chooseHouse()
//    chooseSpell()
//    if (playerSpell === spells.ligth){
//       console.log(deu certo)
//    }
// }
//2.2. se o feitiço for fraco contra a casa = dano = atquePlayer/2 
//2.3. feitiço neutro = dano = poder de ataquePlayer

// class Gryffindor extends Wizard {
// constructor(name) {
// super
// this.name = name
// this.health = 50 //como simplificar o health igual? posso usar o super?
// this.strength = 10
// }
// }

// class Slytherin extends Wizard {
// constructor(name) {
// this.name = name
// this.health = 50 //como simplificar o health igual? posso usar o super?
// this.strength = 12
// }
// }


// class Ravenclaw extends Wizard {
// constructor(name) {
// this.name = name
// this.health = 50 //como simplificar o health igual? posso usar o super?
// this.strength = 8
// }
// }


// class Hufflepuff extends Wizard {
// constructor(name) {
// this.name = name
// this.health = 50 //como simplificar o health igual? posso usar o super?
// this.strength = 8
// }
// }
// }






//play(){
//}






// }
    
//1.1. definir forças e fraquezas de cada casa
//3. definir feitiços e seus atributos


//3. CPU ataca
//3.1. adversário (CPU) sempre dará o poder de dano = poder de ataque
// 4. Reiniciar rodada (até HP de player ou CPU chegar a 0 - todas as casas)
//4.1. Se HP do player = 0; mensagem de derrota
//4.2 Se HP da CPU = 0; mudar a casa selecionada (excluir casas que já foram)
//4.3 Se CPU (todas as casas) = 0; mensagem de vitória
//4.3 Não há empate. O jogo termina quando um for derrotado
//let playerName = document.getElementById('playerName')
//class wizardPlayer {
   // constructor ()
//}





















