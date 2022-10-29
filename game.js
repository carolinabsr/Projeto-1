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

let houses = [gryffindor,slytherin, ravenclaw, hufflepuf]
let indexHouse = ''
//let chosenHouses = []
//let choices = ['light', 'snake', 'mind']
let gameOver = false
let playerChoice = ''
let currentHouse = ''
let  gameWinne = ''
//let duelStart = document.getElementsByClassName('duelStart')

//iniciar o jogo

function chooseHouse(){
   let indexHouse = Math.floor(Math.random()*houses.length)
   currentHouse = houses[indexHouse]
   console.log(currentHouse)
   }

   
function playerAttack(){
   playerChoice = 'mind' 
   
   if (playerChoice ===  'light' && currentHouse.name === 'Slytherin') {
      slytherin.health -= player.strength *2 //('sonserina fraca')
      
   }
  else if (playerChoice ===  'snake' && currentHouse.name === 'Slytherin') {
   slytherin.health -= player.strength /2 //('sonserina forte')
   
   }
  else if (playerChoice ===  'light' && currentHouse.name === 'Hufflepuf') {
   hufflepuf.health -= player.strength /2 //('lufa lufa forte')
   
  }
  else if (playerChoice ===  'mind' && currentHouse.name === 'Hufflepuf') {
   hufflepuf.health -= player.strength *2 //('lufa lufa fraca')
   
  }
  else if (playerChoice ===  'snake' && currentHouse.name === 'Gryffindor') {
   gryffindor.health -= player.strength *2 //('grifinória fraca')
   
  }
  else if (playerChoice ===  'tricksy' && currentHouse.name === 'Gryffindor') {
   gryffindor.health -= player.strength /2 //('grifinória forte')
   
  }
  else if (playerChoice ===  'mind' && currentHouse.name === 'Ravenclaw') {
   ravenclaw.health -= player.strength /2 //('corvinal forte')
   
  }
  else if (playerChoice ===  'tricksy' && currentHouse.name === 'Ravenclaw') {
   ravenclaw.health -= player.strength /2 //('corvinal fraca')
   
  }
  else 
  currentHouse.health -= player.strength
}

function houseAttack(){
   player.health -= currentHouse.strength
}

//playerAttack()


function startGame(){
   chooseHouse()
   //duelStart.innerHTML = 'Choose your spell!'
   playerAttack()
   houseAttack()
   checkGameOver()
     
}

function playAgain(){
playerAttack()
houseAttack ()
checkGameOver ()
}

function restorePlayerHealth() {
   player.health = 50
   //playerHealth.innerHTML = player.health
}

function changeHouse(){
   houses.splice(indexHouse,1)
   chooseHouse()
}

startGame()

function checkGameOver() {
   if (currentHouse.health <=0) {
      changeHouse ()
      restorePlayerHealth()
}
   if(!houses) {
      gameOver = true
      gameWinner = 'player'
   console.log(currentHouse.health)
   console.log('player ganhou')
}
   else if (player.health <=0) {
   gameOver = true
   gameWinner = 'cpu'
   console.log(player.health)
   console.log('cpu ganhou')
   console.log(houses)
}
   else playAgain()
}



//function houseAttack(){
  //return  player.health -= currentHouse.strength
//}

// function play (playerChoice){
//    chooseHouse()
// //if (!gameOver) {
// if(playerChoice === 'light' && currentHouse.name === 'Slytherin'){
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


// function play(playerChoice){
//    if(!this.gameOver) {
//        this.playerChoice = playerChoice
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
   //let playerChoice = 'Expecto Patronum'//incluir botão com as opções de clique
   //return playerChoice
//}




//2.1. se o feitiço for forte contra casa = dano = ataquePlayer *2

// function start(playerChoice){
//    chooseHouse()
//    chooseSpell()
//    if (playerChoice === spells.ligth){
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





















