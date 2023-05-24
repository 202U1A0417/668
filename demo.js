var randomNumber = Math.floor(Math.random()*100)+1;
var attempts = 0;
 document.getElementById("guessBtn").addEventListener("click",function(){
 var guess = parseInt(document.getElementById("guessInput").value);
 attempts++;

 if(guess === randomNumber){
    displayMessage("congratualations! you guessed the number in" +attempts+"attempts.");
    document.getElementById("guessBtn").disabled=true;
 }
 else if(guess<randomNumber){
    displayMessage("Too low! try a higher number.");
 }
 else {
    displayMessage("Too high! try a lower number.");
 }
});

function displayMessage(message){
    document.getElementById("message").textContent = message;
}
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-image: linear-gradient(140deg,orange,pink,aqua);text-align: center; padding-top: 230px;" >
   <div class="container"> 
    <h1>Guess a Number</h1>
    <p>Guess a number between 1 to 100:</p>
    <input type="number" id="guessInput" max="100"  min="1">
    <button id="guessBtn"> Submit</button>
    <p id="message"></p>
    </p>
</div>  
<script src="demo.js"></script>
</body>
</html>