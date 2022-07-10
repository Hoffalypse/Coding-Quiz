let score = 60;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countdown = document.getElementById("timer");
let qs = document.getElementById("qs");
let qs2 = document.getElementById("qs2");
let qs3 = document.getElementById("qs3");
let qs4 = document.getElementById("qs4");
let qs5 = document.getElementById("qs5");
let high = document.getElementById("high");
let initials = document.getElementById("initials");
let timer = document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
let init = document.getElementById("init");
let submit = document.getElementById("submit");
// all of the answers to the question 
let ans1 = document.getElementById("0");
let ans2 = document.getElementById("1");
let ans3 = document.getElementById("2");
let ans4 = document.getElementById("3");
let ans5 = document.getElementById("4");
let ans6 = document.getElementById("5");
let ans7 = document.getElementById("6");
let ans8 = document.getElementById("7");
let ans9 = document.getElementById("8");
let ans10 = document.getElementById("9");
let ans11 = document.getElementById("10");
let ans12 = document.getElementById("11");
let ans13 = document.getElementById("12");
let ans14 = document.getElementById("13");
let ans15 = document.getElementById("14");
let ans16 = document.getElementById("15");
let ans17 = document.getElementById("16");
let ans18 = document.getElementById("17");
let ans19 = document.getElementById("18");
let ans20 = document.getElementById("19");



timer.textContent = "Time Left: " + score;
countdown.appendChild(timer);
ans1.setAttribute("style", "display:none;");
ans2.setAttribute("style", "display:none;");
ans3.setAttribute("style", "display:none;");
ans4.setAttribute("style", "display:none;");
ans5.setAttribute("style", "display:none;");
ans6.setAttribute("style", "display:none;");
ans7.setAttribute("style", "display:none;");
ans8.setAttribute("style", "display:none;");
ans9.setAttribute("style", "display:none;");
ans10.setAttribute("style", "display:none;");
ans11.setAttribute("style", "display:none;");
ans12.setAttribute("style", "display:none;");
ans13.setAttribute("style", "display:none;");
ans14.setAttribute("style", "display:none;");
ans15.setAttribute("style", "display:none;");
ans16.setAttribute("style", "display:none;");
ans17.setAttribute("style", "display:none;");
ans18.setAttribute("style", "display:none;");
ans19.setAttribute("style", "display:none;");
ans20.setAttribute("style", "display:none;");
init.setAttribute("style", "display:none;");
submit.setAttribute("style","display:none");


start.addEventListener("click", function () {
  welcome.setAttribute("style", "display:none;");

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
  
});
//Question 1
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
    qs.setAttribute("style", "display:none");
    ans1.setAttribute("style", "display:none");
    ans2.setAttribute("style","display:none");
    ans3.setAttribute("style","display:none");
    ans4.setAttribute("style","display:none");
    if (score > 0) {
        takeQuiz2()
    }
})    
    ans2.addEventListener("click",function () {
        qs.setAttribute("style", "display:none");
        ans1.setAttribute("style", "display:none");
        ans2.setAttribute("style","display:none");
        ans3.setAttribute("style","display:none");
        ans4.setAttribute("style","display:none");
        (score -= 15);
        if (score > 0) {
            takeQuiz2()
        }    
     })
     ans3.addEventListener("click",function () {
        qs.setAttribute("style", "display:none");
        ans1.setAttribute("style", "display:none");
        ans2.setAttribute("style","display:none");
        ans3.setAttribute("style","display:none");
        ans4.setAttribute("style","display:none");
        (score -= 15);
        if (score > 0) {
            takeQuiz2()
        }    
     })
     ans4.addEventListener("click",function () {
        qs.setAttribute("style", "display:none");
        ans1.setAttribute("style", "display:none");
        ans2.setAttribute("style","display:none");
        ans3.setAttribute("style","display:none");
        ans4.setAttribute("style","display:none");
        (score -= 15);
        if (score > 0) {
            takeQuiz2()
        }    
     })
    }
//Question 2 

function takeQuiz2() {
  const questionTwo = "Whats the largest Planet?";
  qs2.setAttribute("style", "font-size:50px; font-weight:bolder;");
  qs2.append(questionTwo);
  const answers = {
    ansOne: "earth",
    ansTwo: "jupiter",
    ansThree: "mars",
    ansFour: "venus",
  };
  ans5.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans6.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
  ans7.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
  ans8.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");

  ans5.append(answers.ansOne);
  ans6.append(answers.ansTwo);
  ans7.append(answers.ansThree);
  ans8.append(answers.ansFour);
  
  ans5.addEventListener("click",function () {
    qs2.setAttribute("style", "display:none");
    ans5.setAttribute("style", "display:none");
    ans6.setAttribute("style","display:none");
    ans7.setAttribute("style","display:none");
    ans8.setAttribute("style","display:none");
    (score-=15)
    if (score > 0) {
        takeQuiz3()
    }
})    
    ans6.addEventListener("click",function () {
        qs2.setAttribute("style", "display:none");
        ans5.setAttribute("style", "display:none");
        ans6.setAttribute("style","display:none");
        ans7.setAttribute("style","display:none");
        ans8.setAttribute("style","display:none");
        if (score > 0) {
            takeQuiz3()
        }    
     })
     ans7.addEventListener("click",function () {
        qs2.setAttribute("style", "display:none");
        ans5.setAttribute("style", "display:none");
        ans6.setAttribute("style","display:none");
        ans7.setAttribute("style","display:none");
        ans8.setAttribute("style","display:none");
        (score -= 15);
        if (score > 0) {
            takeQuiz3()
        }    
     })
     ans8.addEventListener("click",function () {
        qs2.setAttribute("style", "display:none");
        ans5.setAttribute("style", "display:none");
        ans6.setAttribute("style","display:none");
        ans7.setAttribute("style","display:none");
        ans8.setAttribute("style","display:none");
        (score -= 15);
        if (score > 0) {
            takeQuiz3()
        }    
     })
    
}
//Question 3
function takeQuiz3() {
    const questionThree = "How many kids fit on a bus";
    qs3.setAttribute("style", "font-size:50px; font-weight:bolder;");
    qs3.append(questionThree);
    const answers = {
      ansOne: "20",
      ansTwo: "30",
      ansThree: "40",
      ansFour: "right answer",
    };
    ans9.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
    ans10.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
    ans11.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
    ans12.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
  
    ans9.append(answers.ansOne);
    ans10.append(answers.ansTwo);
    ans11.append(answers.ansThree);
    ans12.append(answers.ansFour);
    
    ans9.addEventListener("click",function () {
      qs3.setAttribute("style", "display:none");
      ans9.setAttribute("style", "display:none");
      ans10.setAttribute("style","display:none");
      ans11.setAttribute("style","display:none");
      ans12.setAttribute("style","display:none");
      (score-=15)
      if (score > 0) {
          takeQuiz4()
      }
  })    
      ans10.addEventListener("click",function () {
          qs3.setAttribute("style", "display:none");
          ans9.setAttribute("style", "display:none");
          ans10.setAttribute("style","display:none");
          ans11.setAttribute("style","display:none");
          ans12.setAttribute("style","display:none");
          (score -= 15);
          if (score > 0) {
              takeQuiz4()
          }    
       })
       ans11.addEventListener("click",function () {
          qs3.setAttribute("style", "display:none");
          ans9.setAttribute("style", "display:none");
          ans10.setAttribute("style","display:none");
          ans11.setAttribute("style","display:none");
          ans12.setAttribute("style","display:none");
          (score -= 15);
          if (score > 0) {
              takeQuiz4()
          }    
       })
       ans12.addEventListener("click",function () {
          qs3.setAttribute("style", "display:none");
          ans9.setAttribute("style", "display:none");
          ans10.setAttribute("style","display:none");
          ans11.setAttribute("style","display:none");
          ans12.setAttribute("style","display:none");
          if (score > 0) {
              takeQuiz4()
          }    
       })
      }
      //Question 4
      function takeQuiz4() {
        const questionFour = "dude another question";
        qs4.setAttribute("style", "font-size:50px; font-weight:bolder;");
        qs4.append(questionFour);
        const answers = {
          ansOne: "right answer",
          ansTwo: "30",
          ansThree: "40",
          ansFour: "80",
        };
        ans13.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
        ans14.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
        ans15.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
        ans16.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
      
        ans13.append(answers.ansOne);
        ans14.append(answers.ansTwo);
        ans15.append(answers.ansThree);
        ans16.append(answers.ansFour);
        
        ans13.addEventListener("click",function () {
          qs4.setAttribute("style", "display:none");
          ans13.setAttribute("style", "display:none");
          ans14.setAttribute("style","display:none");
          ans15.setAttribute("style","display:none");
          ans16.setAttribute("style","display:none");
          if (score > 0) {
              takeQuiz5()
          }
      })    
          ans14.addEventListener("click",function () {
              qs4.setAttribute("style", "display:none");
              ans13.setAttribute("style", "display:none");
              ans14.setAttribute("style","display:none");
              ans15.setAttribute("style","display:none");
              ans16.setAttribute("style","display:none");
              (score -= 15);
              if (score > 0) {
                  takeQuiz5()
              }    
           })
           ans15.addEventListener("click",function () {
              qs4.setAttribute("style", "display:none");
              ans13.setAttribute("style", "display:none");
              ans14.setAttribute("style","display:none");
              ans15.setAttribute("style","display:none");
              ans16.setAttribute("style","display:none");
              (score -= 15);
              if (score > 0) {
                  takeQuiz5()
              }    
           })
           ans16.addEventListener("click",function () {
              qs4.setAttribute("style", "display:none");
              ans13.setAttribute("style", "display:none");
              ans14.setAttribute("style","display:none");
              ans15.setAttribute("style","display:none");
              ans16.setAttribute("style","display:none");
              (score -= 15);
              if (score > 0) {
                  takeQuiz5()
              }    
           })
          }
 //Question 5
 function takeQuiz5() {
    const questionFive = "last question";
    qs5.setAttribute("style", "font-size:50px; font-weight:bolder;");
    qs5.append(questionFive);
    const answers = {
      ansOne: "90",
      ansTwo: "right answer",
      ansThree: "40",
      ansFour: "80",
    };
    ans17.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
    ans18.setAttribute("style", "font-weight:bolder; border: 2px, solid, black;");
    ans19.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
    ans20.setAttribute("style", "font-weight:bolder; border: 2px, solid, black");
  
    ans17.append(answers.ansOne);
    ans18.append(answers.ansTwo);
    ans19.append(answers.ansThree);
    ans20.append(answers.ansFour);
    
    ans17.addEventListener("click",function () {
      qs5.setAttribute("style", "display:none");
      ans17.setAttribute("style", "display:none");
      ans18.setAttribute("style","display:none");
      ans19.setAttribute("style","display:none");
      ans20.setAttribute("style","display:none");
      (score -= 15);
      gameOver();
  })    
      ans18.addEventListener("click",function () {
          qs5.setAttribute("style", "display:none");
          ans17.setAttribute("style", "display:none");
          ans18.setAttribute("style","display:none");
          ans19.setAttribute("style","display:none");
          ans20.setAttribute("style","display:none");
          gameOver();
          
       })
       ans19.addEventListener("click",function () {
          qs5.setAttribute("style", "display:none");
          ans17.setAttribute("style", "display:none");
          ans18.setAttribute("style","display:none");
          ans19.setAttribute("style","display:none");
          ans20.setAttribute("style","display:none");
          (score -= 15);
          gameOver();
    
       })
       ans20.addEventListener("click",function () {
          qs5.setAttribute("style", "display:none");
          ans17.setAttribute("style", "display:none");
          ans18.setAttribute("style","display:none");
          ans19.setAttribute("style","display:none");
          ans20.setAttribute("style","display:none");
          (score -= 15);
             gameOver();
       })
      }

//end of game function 
      function gameOver() {
        timer.setAttribute("style", "display:none;");
        totalScore = score;
        if (score < 0) {
          score = 0;
          }
          let highScore = "All done your score is : " + score;
        high.append(highScore);
        let names = "Please enter your initials below";
        initials.append(names);
        init.setAttribute("style", "box-sizing= border-box; border-radius: 10px;");
        
         submit.setAttribute("style", "display:inine;");
         
         submit.addEventListener("click", function () {
          let data = document.getElementById('init').value;
          console.log(data);
          console.log(totalScore);


        
       
    
        
        
          


    
})
}