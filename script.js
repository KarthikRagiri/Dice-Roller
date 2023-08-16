var userScore1 = document.getElementById("user1-Score");
var userScore2 = document.getElementById("user2-Score");
const user1Dice = document.getElementById("randomNumber1");
const user2Dice = document.getElementById("randomNumber2");
const user1Rollbtn = document.getElementById("player1btn");
const user2Rollbtn = document.getElementById("player2btn");
var playerNo = document.getElementById("playerNo");

function NewGame(){
    userScore1.innerHTML = 0;
    userScore2.innerHTML = 0;
    user1Dice.innerHTML = '0';
    user2Dice.innerHTML = '0';
    playerNo.innerHTML = "Player-1";
    user2Rollbtn.disabled = true;
}

user1Rollbtn.addEventListener("click", function(){
    checkSet();
})

user2Rollbtn.addEventListener("click", function(){
    checkSet();
})


function checkSet(){
    let NumberRandom = Math.floor(Math.random() * 6) + 1;
    
    if(document.getElementById("playerNo").innerHTML == "Player-1"){
        document.getElementById("playerNo").innerHTML = "Player-2";
        user1Rollbtn.disabled = true;
        user2Rollbtn.disabled = false;
        user1Dice.innerHTML = NumberRandom;
        var presentScore = parseInt(userScore1.innerHTML) || 0;
        var newScore = presentScore + NumberRandom;
        userScore1.innerHTML = newScore;
        
    }
    else if(document.getElementById("playerNo").innerHTML == "Player-2"){
        document.getElementById("playerNo").innerHTML = "Player-1";
        user1Rollbtn.disabled = false;
        user2Rollbtn.disabled = true;
        user2Dice.innerHTML = NumberRandom;
        var presentScore2 = parseInt(userScore1.innerHTML) || 0;
        var newScore2 = presentScore2 + NumberRandom;
        userScore2.innerHTML = newScore2;
    }
}



NewGame();

