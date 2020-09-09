
  for ( let i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="blok"></div>';
  }

let step = 0;

  document.getElementById('game').onclick = function(event) {
  console.log(event);
  if (event.target.className == 'blok'){
      if(step % 2==0){
        event.target.innerHTML = 'x';
    }
      else {
        event.target.innerHTML = 0;
      }

      step++;
      checkWinner();
    }
    document.getElementById("reset-game").addEventListener("click", function() {
      location.reload();
    });
}
  function checkWinner() {
    let allblok = document.getElementsByClassName('blok');
//console.log(allblok);

  if (allblok[0].innerHTML=='x' && allblok[1].innerHTML=='x'  && allblok[2].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[3].innerHTML=='x' && allblok[4].innerHTML=='x'  && allblok[5].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[6].innerHTML=='x' && allblok[7].innerHTML=='x'  && allblok[8].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[0].innerHTML=='x' && allblok[4].innerHTML=='x'  && allblok[8].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[2].innerHTML=='x' && allblok[4].innerHTML=='x'  && allblok[6].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[0].innerHTML=='x' && allblok[3].innerHTML=='x'  && allblok[6].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[1].innerHTML=='x' && allblok[4].innerHTML=='x'  && allblok[7].innerHTML=='x')
  alert("pobedili krestiki");
  if (allblok[2].innerHTML=='x' && allblok[5].innerHTML=='x'  && allblok[8].innerHTML=='x')
  alert("pobedili krestiki");
  //noliki
  if (allblok[0].innerHTML=='0' && allblok[1].innerHTML=='0'  && allblok[2].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[3].innerHTML=='0' && allblok[4].innerHTML=='0'  && allblok[5].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[6].innerHTML=='0' && allblok[7].innerHTML=='0'  && allblok[8].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[0].innerHTML=='0' && allblok[4].innerHTML=='0'  && allblok[8].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[2].innerHTML=='0' && allblok[4].innerHTML=='0'  && allblok[6].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[0].innerHTML=='0' && allblok[3].innerHTML=='0'  && allblok[6].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[1].innerHTML=='0' && allblok[4].innerHTML=='0'  && allblok[7].innerHTML=='0')
  alert("pobedili noliki");
  if (allblok[2].innerHTML=='0' && allblok[5].innerHTML=='0'  && allblok[8].innerHTML=='0')
  alert("pobedili noliki");
  }










































/*let cell = document.querySelectorAll(".match");
let result = document.getElementById("result-game");
let message = document.getElementById("message");
let reset = document.getElementById("reset-game");
let buttons =  document.querySelectorAll('button');

buttons.forEach(button => {
  button .addEventListener("click", function() {
    func1( button);
  });
})
let player ='o';
let number2 = '0';

let has_result = false;

function func1(button) {
  if (button.classList.contains("operator")) {
    has_result = false;

/*var cell = document.querySelectorAll(".game-item"),
    result = document.getElementById("result-game"),
    message = document.getElementById("message"),
    reset = document.getElementById("reset-game"),
    player = "X",
    step = 0,
    winArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

for (var i = 0; i < 9; i++) {
    cell[i].addEventListener("click", currentStep);
}

function currentStep(){
    num = +this.getAttribute("data-sell");
    if(!this.textContent && step !== 9){
        this.innerText = player;
        player === "X" ? this.classList.add("x") : this.classList.add("o");
        player === "X" ? player = "O" : player = "X";
        message.innerText = "Ходит игрок " + player;
        step++;
        winCheck(winArr, num);
        if(step == 9) {
            message.innerText = "Игра окончена";
            result.innerText = "Ничья";
        }
    }
}

function winCheck(winArr, num) {
    for(w = 0;  w < winArr.length; w++) {
        for(j = 0; j < 3; j++) {
            if(winArr[w][j] === num){
                if(player === "X") {
                    winArr[w][j] = 0;
                }
                if(player === "O") {
                    winArr[w][j] = -100;
                }
            }
            var sum = winArr[w][0] + winArr[w][1] + winArr[w][2];
            if(sum === 0) {
                result.innerText = "Победили нолики";
                message.innerText = "Игра окончена";
                for (i = 0; i < 9; i++) {
                    cell[i].removeEventListener("click", currentStep);
                }

            } else if(sum === -300) {
                result.innerText = "Победили крестики";
                message.innerText = "Игра окончена";
                for (i = 0; i < 9; i++) {
                    cell[i].removeEventListener("click", currentStep);
                }
            }
        }
    }
}

reset.addEventListener("click", function (){
    for (i = 0; i < 9; i++) {
        cell[i].textContent = "";
        cell[i].classList.remove("x");
        cell[i].classList.remove("o");
        player = "X";
        step = 0;
        winArr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        result.innerText = "";
        message.innerText = "Ходит игрок " + player;
        cell[i].addEventListener("click", currentStep);
    }
});
*/
