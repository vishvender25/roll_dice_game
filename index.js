var player1_name = prompt("Enter Player 1 name : ");
var player2_name = prompt("Enter player 2 name : ");

document.getElementById("player1").innerText = player1_name;
document.getElementById("player2").innerText = player2_name;

var player1_score = Math.random();
var player2_score = Math.random();

player1_score *= 6;
player2_score *= 6;

player1_score = Math.ceil(player1_score);
player2_score = Math.ceil(player2_score);


var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

player1_image = images[player1_score - 1];
player2_image = images[player2_score - 1];

// alert("Player 1 score is " + player1_score + " , Player 2 score is " + player2_score);


document.querySelectorAll('.img1')[0].setAttribute('src', `./images/${player1_image}`);
document.querySelectorAll('.img2')[0].setAttribute('src', `./images/${player2_image}`);



if(player1_score > player2_score){
    document.querySelectorAll(".result")[0].innerText = `Result : ${player1_name} wins`;
}
else if(player1_score < player2_score){
    document.querySelectorAll(".result")[0].innerText = `Result : ${player2_name} wins`;
}
else{
    document.querySelectorAll(".result")[0].innerText = "Result : Its a tie!!";

}




