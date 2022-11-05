//1. criar os players e seus atributos (player x casas (console))
class Wizard {
   constructor(name, strength) {
      this.name = name
      this.health = 50
      this.strength = strength //8
   }
}

let playerName = prompt('Qual é o seu nome?');
let player = new Wizard (playerName, 8)
let gryffindor = new Wizard ('Gryffindor', 10)
let slytherin = new Wizard ('Slytherin', 12)
let ravenclaw = new Wizard ('Ravenclaw', 8)
let hufflepuf = new Wizard ('Hufflepuf', 8)

let houses = [gryffindor, slytherin, ravenclaw, hufflepuf]
let currentHouse = 0
let opponentHouse = houses[currentHouse]
let opponentHouseMaxHealth = opponentHouse.health
let opponentHouseCurrentHealth = opponentHouse.health
let opponentHouseStrength = opponentHouse.strength
let houseName = opponentHouse.name
let playerSpell = ''
let gameWinner = 'player'
let gameOver = false
let score = 0


//selecionar os botões/elementos da página:
const btnLight = document.querySelector('#light')
const btnSnake = document.querySelector('#snake')
const btnMind = document.querySelector('#mind')
const btnTricksy = document.querySelector('#tricksy')
const btnStart = document.getElementById('gameStart')
const btnReset = document.getElementById('gameReset')
const btnMusic = document.getElementById('btnMusic')
const playerNameid = document.getElementById('playerName')
const houseNameid = document.getElementById('houseName')
// const btnSpells = document.getElementsByClassName('spellsBtn') 
const hpMusic = document.getElementById('hpAudio')
const gameOverAudio = document.getElementById('gameOverAudio')
const winAudio = document.getElementById('winAudio')
const playerCurrentHealth = document.getElementById('playerCurrentHealth')
const houseCurrentHealth = document.getElementById('houseCurrentHealth')
const playerMaxHealth = document.getElementById('playerMaxHealth')
const playerStrength = document.getElementById('playerStrength')
const houseMaxHealth = document.getElementById('houseMaxHealth')
const houseStrength = document.getElementById('houseStrength')
const houseInfo = document.getElementsByClassName('houseInfo')
// const duelCommentaryClass = document.getElementsByClassName('duelCommentary')
// const duelOrientations1 = document.getElementsById('duelOrientations1')
// const duelOrientations2 = document.getElementsById('duelOrientations1')
// const duelOrientations3 = document.getElementsById('duelOrientations1')
// const duelOrientations4 = document.getElementsById('duelOrientations1')
// const duelCommentary = document.getElementsByClassName('duelCommentary')


let duelCommentary = document.getElementById('duelStartId')
// duelCommentary.appendChild(p)
let musicActive = false
let gameOverAudioActive = false

playerNameid.innerHTML = playerName //aparecer o nome e atributos do jogador


btnStart.addEventListener('click', startGame)
btnMusic.addEventListener('click', changeAudio)
btnReset.addEventListener('click', resetGame)

//função desabilitar botões de feitiço
 function disableSpellsButtons() {
    btnLight.classList.add('displayNone')
    btnSnake.classList.add('displayNone')
    btnMind.classList.add('displayNone')
    btnTricksy.classList.add('displayNone')
 }

//seleciona os botões de escolha
const btnSpells = document.getElementsByClassName('spellsBtn') //escolhendo os 4 botões d euma vez

//selecionando o feitiço pelo clique
for (let button of btnSpells){
   button.addEventListener('click', playerAttack)
}

//função par aligar e desligar a música
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

//função de iniciar o jogo
function startGame(opponentHouse) {

   duelCommentary.innerHTML = 'Choose your spell ... '

   btnLight.classList.remove('displayNone')
   btnSnake.classList.remove('displayNone')
   btnMind.classList.remove('displayNone')
   btnTricksy.classList.remove('displayNone')
   btnStart.classList.add('displayNone')
   
   playerCurrentHealth.innerHTML = player.health
   houseCurrentHealth.innerHTML = opponentHouse.health
   playerMaxHealth.innerHTML = player.health
   playerStrength.innerHTML = player.strength
   houseMaxHealth.innerHTML = opponentHouseMaxHealth
   houseStrength.innerHTML = opponentHouseStrength
   houseNameid.innerHTML = houseName
   houseCurrentHealth.innerHTML = opponentHouseMaxHealth

   changeAudio()   
}

//função para reiniciar o jogo
function resetGame(){
   disableSpellsButtons()
   restorePlayerHealth() 
   score = 0
   currentHouse = 0
   gameOver = false
   gameWinner = 'player'
   // restoreOpponentHouseHealth(opponentHouse)
   opponentHouse = houses[currentHouse]
   gryffindor.health = 50
   slytherin.health = 50
   ravenclaw.health = 50
   hufflepuf.health = 50
   houseNameid.innerHTML = ''
   houseStrength.innerHTML = ''
   houseMaxHealth.innerHTML = ''
   houseCurrentHealth.innerHTML = ''
   playerCurrentHealth.innerHTML = ''
   playerMaxHealth.innerHTML = ''
   playerStrength.innerHTML = ''
   duelCommentary.innerHTML = 'Welcome to the Wizard Tournament'
   btnStart.classList.remove('displayNone')
   musicActive = true
   changeAudio()
   gameOverAudio.pause()
   winAudio.pause()
}


//função para iniciar as partidas
function playerAttack(e){
if(!gameOver) {
   console.log(e.currentTarget)
   const button = e.currentTarget //seleciona o botão
   const playerSpell = button.getAttribute('id')

   
   if (playerSpell ===  'light' && opponentHouse.name === 'Slytherin') {
      slytherin.health -= player.strength *2 //('sonserina fraca')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Wow! Your spell is very strong against ${opponentHouse.name}, dealing ${player.strength*2} damage`
   }
  else if (playerSpell ===  'snake' && opponentHouse.name === 'Slytherin') {
      slytherin.health -= player.strength /2 //('sonserina forte')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Oh no! Your spell is not very effective against ${opponentHouse.name}, dealing only ${player.strength/2} damage. Try to choose other spell`
   }
  else if (playerSpell ===  'light' && opponentHouse.name === 'Hufflepuf') {
      hufflepuf.health -= player.strength /2 //('lufa lufa forte')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Oh no! Your spell is not very effective against ${opponentHouse.name}, dealing only ${player.strength/2} damage. Try to choose other spell`
  }
  else if (playerSpell ===  'mind' && opponentHouse.name === 'Hufflepuf') {
      hufflepuf.health -= player.strength *2 //('lufa lufa fraca')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Wow! Your spell is very strong against ${opponentHouse.name}, dealing ${player.strength*2} damage`
  }
  else if (playerSpell ===  'snake' && opponentHouse.name === 'Gryffindor') {
      gryffindor.health -= player.strength *2 //('grifinória fraca')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Wow! Your spell is very strong against ${opponentHouse.name}, dealing ${player.strength*2} damage`
  }
  else if (playerSpell ===  'tricksy' && opponentHouse.name === 'Gryffindor') {
      gryffindor.health -= player.strength /2 //('grifinória forte')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Oh no! Your spell is not very effective against ${opponentHouse.name}, dealing only ${player.strength/2} damage. Try to choose other spell`
  }
  else if (playerSpell ===  'mind' && opponentHouse.name === 'Ravenclaw') {
      ravenclaw.health -= player.strength /2 //('corvinal forte')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Oh no! Your spell is not very effective against ${opponentHouse.name}, dealing only ${player.strength/2} damage. Try to choose other spell`
  }
  else if (playerSpell ===  'tricksy' && opponentHouse.name === 'Ravenclaw') {
      ravenclaw.health -= player.strength *2 //('corvinal fraca')
      houseCurrentHealth.innerHTML = opponentHouse.health
      duelCommentary.innerHTML = `Wow! Your spell is very strong against ${opponentHouse.name}, dealing ${player.strength*2} damage`
  }
  else {
  opponentHouse.health -= player.strength
  houseCurrentHealth.innerHTML = opponentHouse.health
  duelCommentary.innerHTML = `Your spell works fine against ${opponentHouse.name}, dealing ${player.strength} damage, but if you choose the right spell, you can win the duel faster`
  }
   
   // setTimeout(() => {
   // isGameOver(opponentHouse) }, 2000) 

if(!isGameOver(opponentHouse) && opponentHouse.health <= 0){
      score++
      console.log(score)
      console.log('condição de trocar de casa')
      restorePlayerHealth()
      changeHouse()
} else if (!isGameOver(opponentHouse)){
   setTimeout(() => {
      duelCommentary.innerHTML = "Wait the opponent house"}, 4000) 

      setTimeout(() => {
         opponentAttack()}, 4500) 
}


   // isGameOver(opponentHouse) 
   //  setTimeout(() => {
   //  opponentAttack()}, 5000) 
   // //  isGameOver(opponentHouse) 
   
   

   // setTimeout(() => {
   // isGameOver(opponentHouse) }, 4000) 
}

}

//função cpu ataca
function opponentAttack(){
//   isGameOver(opponentHouse)
   console.log('oponente ataca')
   player.health -= opponentHouse.strength
   // playerCurrentHealth.innerHTML = player.health

   //mensagem de dano  
   setTimeout(() => {
      duelCommentary.innerHTML = `${opponentHouse.name} has attacked you, dealing ${opponentHouse.strength} damage`}, 1000) 
   //atualizar o player hesalth   
      setTimeout(() => {
         playerCurrentHealth.innerHTML = player.health}, 1000)
   //validar se após o ataque houve gamOver   
   //  setTimeout(() => {
   //    isGameOver(opponentHouse)}, 3000)
  
}


//restaurar a vida do jogador
function restorePlayerHealth() {
   player.health = 50
   playerCurrentHealth.innerHTML = player.health
      
}

//restaurar a vida da cpu
function restoreOpponentHouseHealth(opponentHouse) {
   opponentHouse.health = 50
   houseCurrentHealth.innerHTML = opponentHouse.health

}


//alterar adversário (VALIDAR)
 function changeHouse(){

   if(currentHouse<3){ 
   //se score chegar a 4, voltar para o GameOver
//    if(score == 4){
//       isGameOver(opponentHouse)
//   } 
  
//       else {
      setTimeout(() => {
      duelCommentary.innerHTML = "Time to defeat another house"}, 1000) 
   
      currentHouse++
      opponentHouse = houses[currentHouse]
      houseNameid.innerHTML = opponentHouse.name
      houseCurrentHealth.innerHTML = opponentHouse.health
      houseStrength.innerHTML = opponentHouse.strength
      console.log(opponentHouse)
      // }
}
}

//validar gameover
function isGameOver(opponentHouse) {
   // let gameOver = false;
  console.log("na game over")
   if (player.health <=0) {
      gameOver = true
      gameWinner = 'cpu'

      console.log(player.health)
      console.log('cpu ganhou')
      console.log(opponentHouse)

      duelCommentary.innerHTML = `Don’t put your wand there, Kid! ${opponentHouse.name} has defeted you` 

      hpMusic.pause()
      gameOverAudio.volume = 0.3
      gameOverAudio.play()

      setTimeout(() => {
         resetGame(opponentHouse)}, 10000) 
     
   }

   else if (opponentHouse.health <= 0 && score == 4) {
      gameOver = true
      
      console.log(opponentHouse.health)
      console.log(opponentHouse)
      console.log('player ganhou')
      console.log('condição de gameWinner')

      duelCommentary.innerHTML = `Congratulations! You've won the Wizard Tournament, defeating all Hogwart's houses`

      hpMusic.pause()
      winAudio.volume = .15
      winAudio.play()

       setTimeout(() => {
          resetGame(opponentHouse)}, 10000) 
   } 

 


return gameOver

   
}







