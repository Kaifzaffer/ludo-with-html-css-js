var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var dicee0 = "images/" + "dice" + randomnumber1 + ".png";

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var dicee1 = "images/" + "dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dicee0);
document.querySelectorAll("img")[1].setAttribute("src", dicee1);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "⛳Player 1 win!";
}
else if (randomnumber1 == randomnumber2) {
    document.querySelector("h1").innerHTML = "Match Draw😒";
}
else {
    document.querySelector("h1").innerHTML = "⛳Player 2 win!";
}