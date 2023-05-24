const result = document.getElementById("result");
const cardPick = document.getElementById("thisCard");




let playerPick = 0;
let compPick = 0;

let yourScore = 0;
let compScore = 0;

//Paper Card///
document.getElementById("thisCard").onclick = function() {
   playerPick = 2;
   compPick = Math.floor(Math.random() * 3) + 1;


 if (playerPick < compPick) {
  result.innerHTML=("You Lose!!!")
    compScore += 1;
    document.getElementById("compScoreLabel").innerHTML = compScore;
    
    

 }

 else if (playerPick > compPick) {
    result.innerHTML=("You Win!!!")
    yourScore += 1;
    document.getElementById("yourScoreLabel").innerHTML = yourScore;

}

else   {
    
  result.innerHTML=("Draw!!!")

  
}

}

//Rock Card////

document.getElementById("thisCard2").onclick = function() {
  playerPick = 2;
  compPick = Math.floor(Math.random() * 3) + 1;


if (playerPick < compPick) {
 result.innerHTML=("You Lose!!!")
   compScore += 1;
   document.getElementById("compScoreLabel").innerHTML = compScore;
   
   

}

else if (playerPick > compPick) {
   result.innerHTML=("You Win!!!")
   yourScore += 1;
   document.getElementById("yourScoreLabel").innerHTML = yourScore;

}

else   {
   
 result.innerHTML=("Draw!!!")

 
}

}

///Scissor Card///

document.getElementById("thisCard3").onclick = function() {
  playerPick = 2;
  compPick = Math.floor(Math.random() * 3) + 1;


if (playerPick < compPick) {
 result.innerHTML=("You Lose!!!")
   compScore += 1;
   document.getElementById("compScoreLabel").innerHTML = compScore;
   
   

}

else if (playerPick > compPick) {
   result.innerHTML=("You Win!!!")
   yourScore += 1;
   document.getElementById("yourScoreLabel").innerHTML = yourScore;

}

else   {
   
 result.innerHTML=("Draw!!!")

 
}

}

///Modal

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 