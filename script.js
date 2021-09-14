var readlineSync = require('readline-sync');

var userName = readlineSync.question('What\'s your name? ');

console.log('Welcome ',userName ,' lets play a quiz' )
var score=0;
function quiz(question,answer){
  var userAns = readlineSync.question(question);
  
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log('Correct')
    score+=1
    
  }else{
    console.log('Wrong')
  }

  console.log('current score' , score)
}


var questions=[{
  question:"whats my name? ",
  answer:"sanjay"
},{
  question:"In which state do i live ",
  answer:"Punjab"
},{
  question:"My fav band? ",
  answer:"Linkin Park"
},
{
  question:"My age?  ",
  answer:"22"
},
{
  question:"my fav number?  ",
  answer:"1729"
}





]


for(var i=0;i<questions.length;i++){
  var currentQus=questions[i];
  quiz(currentQus.question,currentQus.answer)
}

console.log("you total score is",score)



var highscores =[{
  name:"sanjay",
  score:"3"
}]


for(var i=0;i<highscores.length;i++){
  var highscore=highscores[i];
console.log("Cureent highscore is", highscore.score ,"hold by",highscore.name)
}


