/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomPinta();
  generateRandomNumber();
};

let boton = document.querySelector("button");

boton.addEventListener("click", generateRandomNumber);
boton.addEventListener("click", generateRandomPinta);

function generateRandomNumber() {
  let cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let number = Math.floor(Math.random() * cartas.length);
  document.querySelector(".number").innerHTML = cartas[number];
}
function generateRandomPinta() {
  let pintas = ["&diamondsuit;", "&spades;", "&hearts;", "&clubs;"];
  let num = Math.floor(Math.random() * pintas.length);

  document.querySelector(".top-suit").innerHTML = pintas[num];
  document.querySelector(".bottom-suit").innerHTML = pintas[num];

  if (pintas[num] == "&hearts;" || pintas[num] == "&diamondsuit;") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
}
