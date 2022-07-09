let score = 100;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countdown = document.getElementById("timer");
let qs = document.getElementById("qs");
let ans = document.getElementById("ans");
let timer = document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
let ans1 = document.getElementById("0");
let ans2 = document.getElementById("1");
let ans3 = document.getElementById("2");
let ans4 = document.getElementById("3");

// const questions = {
//   question: "How are you today?",
//   answers1: ["great", "terrible", "fine", "dead"],
// }

timer.textContent = "Time Left: " + score;
countdown.appendChild(timer);
ans1.setAttribute("style", "visibility:hidden;");
ans2.setAttribute("style", "visibility:hidden;");
ans3.setAttribute("style", "visibility:hidden;");
ans4.setAttribute("style", "visibility:hidden;");

start.addEventListener("click", function () {
  welcome.setAttribute("style", "visibility:hidden;");

  let timeinterval = setInterval(function () {
    if (score > 0) {
      score--;
      timer.textContent = "Time Left: " + score;
      countdown.appendChild(timer);
    } else {
      clearInterval(timeinterval);
      //end game code here
    }
  }, 1000);
  takeQuiz();
  if (takeQuiz.return===true && score > 0) {
    takeQuiz2()
    
  }
  
});

function takeQuiz() {
  const questionOne = "Whats the best color?";
  qs.setAttribute("style", "font-size:50px; font-weight:bolder;");
  qs.append(questionOne);
  const answers = {
    ansOne: "yellow",
    ansTwo: "red",
    ansThree: "green",
    ansFour: "purple",
  };
  ans1.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans2.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans3.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
  ans4.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");

  ans1.append(answers.ansOne);
  ans2.append(answers.ansTwo);
  ans3.append(answers.ansThree);
  ans4.append(answers.ansFour);

  ans1.addEventListener("click",function () {
    qs.setAttribute("style", "visibility:hidden");
    ans1.setAttribute("style", "visibility:hidden");
    ans2.setAttribute("style", "visibility:hidden");
    ans3.setAttribute("style", "visibility:hidden");
    ans4.setAttribute("style", "visibility:hidden");
   return true;
    
  })

}

function takeQuiz2() {
  const questionOne = "Whats the largest Planet?";
  qs.setAttribute("style", "font-size:50px; font-weight:bolder;");
  qs.append(questionOne);
  const answers = {
    ansOne: "earth",
    ansTwo: "jupiter",
    ansThree: "mars",
    ansFour: "venus",
  };
  ans1.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans2.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans3.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
  ans4.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");

  ans1.append(answers.ansOne);
  ans2.append(answers.ansTwo);
  ans3.append(answers.ansThree);
  ans4.append(answers.ansFour);
}

// quiz.setAttribute("style", "visibility:visible;");
//     question.textContent= questions.question1;
//     qs.appendChild(question);
//     for (let index = 0; index < 4; index++) {
//     document.getElementById(index).textContent=questions.answer1[index]
//     }
