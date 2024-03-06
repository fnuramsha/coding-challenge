"use strict";

const newPlane = document.getElementById("newPlane");
const answer = document.getElementById("ansPoll");
let answerArray = [];

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // answers = [0,0,0,0]
  registerNewAnswer() {
    let valCheck;
    var userInput = prompt(
      `${this.question} \n ${this.options} \n \n Please enter your answer`
    );
    if (
      userInput == "" ||
      userInput == null ||
      isNaN(userInput) ||
      userInput < 0 ||
      userInput > 3
    ) {
      valCheck = "Please enter a valid number between 0 and 3";
    } else if (userInput >= 0 && userInput <= 3) {
      this.answers[userInput]++;
      console.log(this.answers);

      valCheck = "Thanks for providing an answer";
    }
    alert(valCheck);

    this.displayResults("string");
  },
  displayResults(type) {
    if (type === "string") {
      console.log(`Poll results are ${this.answers}`);
    } else if (type === "array") {
      console.log(this.answers);
    }
  },
};

answer.addEventListener("click", poll.registerNewAnswer.bind(poll));
