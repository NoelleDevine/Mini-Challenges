"use strict";

//define some variables
var currentTotal = 0;
const vending = document.querySelector(".vending-machine");
const total = document.querySelector(".total");

vending.addEventListener("click", (e) => {
  if (e.target.classList.contains("cola")) {
    currentTotal = currentTotal + 2;
  } else if (e.target.classList.contains("peanuts")) {
    currentTotal = currentTotal + 3;
  } else if (e.target.classList.contains("bar")) {
    currentTotal = currentTotal + 4;
  } else if (e.target.classList.contains("gummies")) {
    currentTotal = currentTotal + 6;
  }
  total.innerText = "$" + currentTotal + ".00";
});

//do coins now
//const coinsForm = document.querySelector(".coins-form");
const makeMoney = document.querySelector(".make-money");

//console.dir(numCoins);

makeMoney.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents page from refreshing
  let numCoins = document.querySelector("input");
  let typeCoins = document.querySelector("#coins");
  console.dir(typeCoins);

  for (let i = 0; i < numCoins.value; i++) {
    const newCoin = document.createElement("div");
    newCoin.setAttribute("class", "coins");
    newCoin.textContent = typeCoins.value;
    makeMoney.append(newCoin);
    // console.log(newCoin);
    newCoin.addEventListener("click", (event) => {
      makeMoney.removeChild(newCoin);
    });
  }
});

//do lightbulb now
const lightbulb = document.querySelector(".lightbulb");

lightbulb.addEventListener("click", (e) => {});
