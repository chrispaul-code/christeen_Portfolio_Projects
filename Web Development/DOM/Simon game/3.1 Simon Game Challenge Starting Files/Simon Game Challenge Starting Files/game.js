 let numClick = -1;
 let userPattern = [];
 let correctPattern = [];
 let possibleColors =["green", "red" , "blue" , "yellow"];

 let level = 0;


function nextSequence(){
  let rand = Math.floor(Math.random()*4)
  let color = possibleColors[rand];
  correctPattern.push(color);
  playAudio(color);
}

function playAudio(color){
  let relPath = `sounds/${color}.mp3`;
  let audio = new Audio(relPath);
  audio.play();
}



$(document).keydown(function(){
if(level <= 0){
   nextSequence();
}

});
