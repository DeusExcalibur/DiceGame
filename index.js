let randomNumber1 = 0;
let randomNumber2 = 0;
let contador1 = 0;
let contador2 = 0;

function verificarGanador(randomNumber1, randomNumber2, contador1, contador2) {
  if(randomNumber1 > randomNumber2 && contador1 > 0 && contador2 > 0){
    document.querySelector("h1").textContent = "Player 1 Wins!"
  }else if(randomNumber1 < randomNumber2 && contador1 > 0 && contador2 > 0){
    document.querySelector("h1").textContent = "Player 2 Wins!"
  }else if(contador1 == 0 || contador2 == 0){
    document.querySelector("h1").textContent = "Click the other dice"
  }else{
    document.querySelector("h1").textContent = "Draw"
  }
}

document.querySelector(".boton1").addEventListener("click", function (){
  contador1++;
  randomNumber1 = Math.floor((Math.random() * 6)+1);
  let randomDice = './images/dice'+randomNumber1+'.png';

  document.querySelector(".img1").setAttribute("src", randomDice);

  verificarGanador(randomNumber1, randomNumber2, contador1, contador2);
});

document.querySelector(".boton2").addEventListener("click", function (){
  contador2++;
  randomNumber2 = Math.floor((Math.random() * 6)+1);
  let randomDice2 = './images/dice'+randomNumber2+'.png';

  document.querySelector(".img2").setAttribute("src", randomDice2);

  verificarGanador(randomNumber1, randomNumber2, contador1, contador2);
});

