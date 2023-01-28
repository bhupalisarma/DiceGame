
// For the first die
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;  //Gets a random number between 1 -6 
var randomDiceImage1 = "dice" + randomNumber1 + ".svg";  //dice1.svg-dice6.svg
var randomImageSource = "/Images/" + randomDiceImage1 ;  //Images/dice1.svg=Images/dice6.svg
var image1 = document.querySelectorAll("img")[0];        // Selects the first image
image1.setAttribute("src", randomImageSource);          //shuffles the images


//For the second die

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage2 = "dice" + randomNumber2 + ".svg";
var randomImageSource = "/Images/" + randomDiceImage2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


//To show the result

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Issa draw :(";
}
