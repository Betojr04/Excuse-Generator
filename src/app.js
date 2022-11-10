/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  console.log("Hello Rigo from the console!");
  let randomwho = who[Math.floor(Math.random() * (who.length - 1))];
  let randomaction = action[Math.floor(Math.random() * (action.length - 1))];
  let randomwhat = what[Math.floor(Math.random() * (what.length - 1))];
  let randomwhen = when[Math.floor(Math.random() * (when.length - 1))];
  let sentence = document.getElementById("excuse");
  console.log(sentence);
  sentence.innerHTML = `<h1>${randomwho} ${randomaction} ${randomwhat} ${randomwhen}</h1>`;
};
